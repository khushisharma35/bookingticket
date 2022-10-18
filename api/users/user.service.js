const pool = require("../../config/database");

module.exports ={
    create: (data, callBack)=> {
        pool.query(
            "insert into USER values(?,?,?,?,?)",
            [
                data.USERId,
                data.name,
                data.mobileno,
                data.email,
                data.password
            ],
            (error,results,fields) =>{
                console.log(data.USERId);
                if(error) {
                    return callBack(error,null);
                }
                return callBack( null,results)
            }
        );
    },
    getUSERS: callBack => {
        pool.query(
            'select USERId ,name,mobileno,email,password from USER',
            [USERId],
            (error, results,fields) => {
                if(error){
                  return  callBack(error);
                }
                return callBack(null,results);
            }
        );
    },
    getUSERByUSERId : (USERId,callBack) => {
        pool.query(
            'select USERId ,name,mobileno,email,password from USER where  USERId =?',
            [USERId],
            (error,results,fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },
    UpdateUSER : (data,callBack) => {
        pool.query(
            'update USER set USERId=? ,name=?,mobileno=?,email=?,password=? where id =?',
            [data.USERId,
                data.name,
                data.mobileno,
                data.email,
                data.password
            ],
            (error,results,fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            },
        );
    },
    deleteUSER: (data,callBack)=> {
        pool.query(
            'delete from USER where USERId=?',
            [data.USERId],
            (error,results,fields) => {
                if(error) {
                   return  callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },
    getUSERByUSERemail:(email,callBack) => {
        pool.query(
            'select * from USER where email=?',
            [email],
            (error,results,fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    }
};