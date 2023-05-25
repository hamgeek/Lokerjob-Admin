const DB = require('../database/db')
const { DataTypes } = require('sequelize');
import { apiResponse, utilsUsersCreate, utilsUsersAuth } from "../utils";
import CryptoJS from "crypto-js";
import JWT from "jsonwebtoken";
import { v4 as uuidv4 } from 'uuid';

const db = DB.define('Users', {
      token: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
      },
      username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
      }, 
      password: {
            type: DataTypes.STRING,
            allowNull: false
      }, 
});


const create = async (createInput: utilsUsersCreate): Promise<apiResponse> => {
      const PASSWORD_ENC_KEY: any = process.env.PASSWORD_ENC_KEY;
      const result = await db.create({
                  token: uuidv4(),
                  username: (createInput.username).trim(),
                  password: CryptoJS.AES.encrypt((createInput.password).trim(), PASSWORD_ENC_KEY).toString()
            }).then(() =>{

                  return {
                        code: 200,
                        msg: "Successfully Added User",
                        data: []
                  }

            }).catch(() => {
                  return {
                        code: 400,
                        msg: "Operation Failed",
                        data: []
                  }
            });

      return result;
}

const auth = async (authInput: utilsUsersAuth): Promise<apiResponse> => {
      const PASSWORD_ENC_KEY: any = process.env.PASSWORD_ENC_KEY;
      
      const result = await db.findOne({where: {
                  username: (authInput.username).trim()
      }});
      if(result !== null)
      {
            const password_check_decrypt: string  = await CryptoJS.AES.decrypt((result.password).trim(), PASSWORD_ENC_KEY).toString(CryptoJS.enc.Utf8);
            if(authInput.password === password_check_decrypt)
            {
                  var token_exp = Math.floor(Date.now() / 1000) + (60 * <any>process.env.JWT_DURATION_MINUTES);
                  var token_jwt = JWT.sign({
                                                exp: token_exp,
                                                id: result.token,
                                                username: result.username
                                          }, <string>process.env.JWT_KEY);
                  return {
                        code: 200,
                        msg: "Successfully Logged",
                        data: [
                              { 
                                    auth_token: token_jwt,
                                    exp: token_exp
                              }
                        ]
                  }
            }
            else
            {
                  return {
                        code: 403,
                        msg: "Wrong Username or Password",
                        data: []
                  }
            }
      }
      else
      {
            return {
                  code: 403,
                  msg: "Username Not Found",
                  data: []
            }
      }
}


export default {db, create, auth};