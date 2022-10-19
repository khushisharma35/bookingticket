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
            'update auditorium set auditoriumName=?,seats=?, where id =?',
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
    deleteauditorium: (data,callBack)=> {
        pool.query(
            'delete from auditorium where auditoriumId=?',
            [data.auditoriumId],
            (error,results,fields) => {
                if(error) {
                   return  callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },
    getauditoriumByName:(name,callBack) => {
        pool.query(
            'select * from auditorium where auditoriumName=?',
            [name],
            (error,results,fields) => {
                if(error) {
                    callBack(error);
                    console.log(error);
                }
                return callBack(null,results[0]);
            }
        );
    }
};