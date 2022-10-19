const { hashSync, hash } = require("bcrypt");
const pool = require("../../config/database");

module.exports ={
    create: (data, callBack)=> {
        data.passcode = hashSync(data.passcode, 10)
        pool.query(
            "insert into user(name,userType,email,passcode) values(?,?,?,?)",
            [
                data.name,
                data.userType,
                data.email,
                data.passcode
            ],
            (error,results,fields) =>{
                console.log("test",error)
                if(error) {
                    return callBack(error,null);
                }
                
                return callBack( null,results);
            }
        );
    },
    getUSERS: callBack => {
        pool.query(
            'select  * from USER',
            (error, results,fields) => {
                if(error){
                  return  callBack(error);
                }
                return callBack(null,results);
            }
        );
    },
    getUSERByUSERId : (data,callBack) => {
        pool.query(
            'select name,email,passcode from USER where  USERId =?',
            [data.USERId],
            (error,results,fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },
    UpdateUSER : (data,callBack) => {
        data.passcode = hashSync(data.passcode, 10)
        pool.query(
            'update USER set name=?,userType=?,email=?,passcode=? where email =?',
            [   data.name,
                data.userType,
                data.email,
                data.passcode,
                data.oldEmail
            ],
            (error,results,fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            },
        );
    },
    deleteUSER: (id,callBack)=> {
        pool.query(
            'delete from USER where USERId=?',
            [id],
            (error,results,fields) => {
                if(error) {
                   return  callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },
   
};