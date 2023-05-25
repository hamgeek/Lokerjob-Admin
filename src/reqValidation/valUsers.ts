const Joi = require('joi');

const create = async (value: any) => {
      const schema = Joi.object({
            username: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
        
            password: Joi.string()
                .required()
        })
        try {
            await schema.validateAsync(value);
            return {
                  status: true,
                  msg: []
            }
        } catch (error: any) {
            return {
                  status: false,
                  msg: error.details
            }
        }
}

const auth = async (value: any) => {
    const schema = Joi.object({
          username: Joi.string()
              .required(),
      
          password: Joi.string()
              .required()
      })
      try {
          await schema.validateAsync(value);
          return {
                status: true,
                msg: []
          }
      } catch (error: any) {
          return {
                status: false,
                msg: error.details
          }
      }
}


export default {create, auth};