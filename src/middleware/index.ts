import JWT from "jsonwebtoken";

const loggedUrl = [
      "/api/v1/users/create"

];


const checkLoggedUrl = (req: any, res: any, next: any) => {
      if(loggedUrl.includes(req.url))
      {
            if(req.headers.authorization)
            {
                  var bearerToken = req.headers.authorization;
      
                  JWT.verify(bearerToken.split(" ")[1], <string>process.env.JWT_KEY, function(err: any, decoded: any) {
                        if(err)
                        {
                              res.status(403).json({
                                    msg: "Access Danied",
                                    data: []
                              })
                        }
                        else
                        {
                              next();
                        }
                  });
            } 
            else
            {
                  res.status(403).json({
                        msg: "Access Danied", 
                        data: []
                  })
            }
      }
      else
      {
            next();
      }

}

export default checkLoggedUrl; 