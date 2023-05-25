import Helpers from '../helpers'
import Users from '../models/modelUsers'
import val from '../reqValidation'

const create = async (req: any, res: any) => {
      var createInput = req.body;
      var checkVal = await val.valUsers.create(createInput);
      
      if(checkVal.status)
      {
            var createUser  = await Users.create(createInput);

            Helpers.Response.api(res, createUser.code, 
                  createUser.msg
            , []);
      }
      else
      { 
            Helpers.Response.api(res, 404, 
                  checkVal.msg
            , []);
      }
};

const auth = async (req: any, res: any) => {
      var authInput = req.body;
      var checkVal = await val.valUsers.auth(authInput);
      if(checkVal.status) 
      {
            var checkAuth  = await Users.auth(authInput);

            Helpers.Response.api(res, checkAuth.code, 
                  checkAuth.msg
            , [checkAuth.data]);
      }
      else
      {
            Helpers.Response.api(res, 404, 
                  checkVal.msg
            , []);
      }
}
      
export default { create, auth }