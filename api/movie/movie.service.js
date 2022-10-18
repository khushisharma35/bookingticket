const { hashSync, hash } = require("bcrypt");
const pool = require("../../config/database");

module.exports ={
    create: (data, callBack)=> {
        pool.query(
            "insert into movie(movieName, movieTime, userId) values(?,?,?)",
            [
                data.movieName,
                data.movieTime,
                data.userId
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
    getMovies: callBack => {
        pool.query(
            'select  * from movie',
            (error, results,fields) => {
                if(error){
                  return  callBack(error);
                }
                return callBack(null,results);
            }
        );
    },
    getMovieById : (data,callBack) => {
        pool.query(
            'select movieName, movieTime, userId from movie where  movieId =?',
            [data.movieId],
            (error,results,fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },
    updateMovie : (data,callBack) => {
        data.passcode = hashSync(data.passcode, 10)
        pool.query(
            'update USER set movieName=?,movieTime=?,userId=? where movieId =?',
            [   data.movieName,
                data.movieTime,
                data.userId,
                data.movieId
            ],
            (error,results,fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            },
        );
    },
    deleteMovie: (data,callBack)=> {
        pool.query(
            'delete from movie where movieId=?',
            [data.movieId],
            (error,results,fields) => {
                if(error) {
                   return  callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },
    getMovieByName:(name,callBack) => {
        pool.query(
            'select * from movie where movieName=?',
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