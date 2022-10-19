//const { hashSync, hash } = require("bcrypt");
const pool = require("../../config/database");

module.exports ={
    create: (data, callBack)=> {
        pool.query(
            "insert into booking(paid, noOfSeats, showId,movieId) values(?,?,?,?)",
            [
                data.paid,
                data.noOfSeats,
                data.showId,
                data.movieId
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
    getbooking: callBack => {
        pool.query(
            'select  * from booking',
            (error, results,fields) => {
                if(error){
                  return  callBack(error);
                }
                return callBack(null,results);
            }
        );
    },
    updatebooking: (data,id,callBack) => {
        //data.passcode = hashSync(data.passcode, 10)
        pool.query(
            'update booking set paid=?,noOfSeats=?,screenTime=?,screen=? where bookingId =?',
            [   data.paid,
                data.noOfseats,
                data.screenTime,
                data.screen,
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
    deletebooking: (id,callBack)=> {
        pool.query(
            'delete from booking where bookingId=?',
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