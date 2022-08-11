const mysql = require('mysql');

const methods = {
    getAllList() {
        return new Promise(async (resolve,reject)=>{
            try{
                var con = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: "",
                    database: "devdb"
                });
                con.connect(function (err) {
                    if (err) reject(error);
                    con.query("SELECT * FROM todolist",(error,result,fields)=>{
                        if(error) reject(error);
                        resolve(result);
                    })
                    
                });
            }catch(error){
                reject(error);
            }
    
        })
        
    },
    addOne(row){
        return new Promise(async (resolve,reject)=>{
            try{
                var con = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: "",
                    database: "devdb"
                });
                con.connect(function (err) {
                    if (err) reject(error);
                    con.query(`INSERT INTO todolist (content) VALUES ('${row}')`,(error,result,fields)=>{
                        if(error) reject(error);
                        resolve(result);
                    })
                    
                });
            }catch(error){
                reject(error);
            }
    
        })
    },
    updateAt(id,row){
        return new Promise(async (resolve,reject)=>{
            try{
                var con = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: "",
                    database: "devdb"
                });
                con.connect(function (err) {
                    if (err) reject(error);
                    con.query(`UPDATE todolist SET content = '${row}' WHERE id = '${id}'`,(error,result,fields)=>{
                        if(error) reject(error);
                        resolve(result);
                    })
                    
                });
            }catch(error){
                reject(error);
            }
    
        })
    },
    removeAt(id){
        return new Promise(async (resolve,reject)=>{
            try{
                var con = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: "",
                    database: "devdb"
                });
                con.connect(function (err) {
                    if (err) reject(error);
                    con.query(`DELETE FROM todolist WHERE id = '${id}'`,(error,result,fields)=>{
                        if(error) reject(error);
                        resolve(result);
                    })
                    
                });
            }catch(error){
                reject(error);
            }
    
        })
    }
    
}

module.exports = { ...methods };
