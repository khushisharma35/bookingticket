const pool = require("../../config/database");

module.exports ={
    create: (data, callBack)=> {
        pool.query(
            "insert into auditorium(auditoriumName,seats) values(?,?)",
            [
                data.auditoriumName,
                data.seats
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
    getauditorium: callBack => {
        pool.query(
            'select  * from auditorium',
            (error, results,fields) => {
                if(error){
                  return  callBack(error);
                }
                return callBack(null,results);
            }
        );
    },
    updateauditorium : (data,id,callBack) => {
        //data.passcode = hashSync(data.passcode, 10)
        pool.query(
            'update auditorium set auditoriumName=?,seats=?, where auditoriumId =?',
            [   data.auditoriumName,
                data.seats,
                id
                
            ],
            (error,results,fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            },
        );
    },
    deleteauditorium: (id,callBack)=> {
        pool.query(
            'delete from auditorium where auditoriumId=?',
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