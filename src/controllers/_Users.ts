import Helpers from '../helpers'
import Users from '../models/modelUsers'
const create = (req: any, res: any) => {
      Users.create({
            username: "admin",
            password: "123"
      }).then(() =>{

            Helpers.Response.api(res, 200, 
                  "Successfully Added User."      
            , []);

      }).catch(() => {
            Helpers.Response.api(res, 404, 
                  "Error"      
            , []);
      });
};

export default { create }