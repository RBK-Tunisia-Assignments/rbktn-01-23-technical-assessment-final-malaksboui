//const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
const  connection  = require("../database-mysql/index").promise();

const getAll = (callback) => {
        const sql= "SELECT * FROM `recepie`"
        connection.query(sql, function(err, result){
               callback(err, result)
        })
};

const postOne  = (recepie, callback) => {
    const sql1= "Insert into recepie values=?"
    connection.query(sql1, recepie, function(err, result){
           callback(err, result)
    })
};
const deleteOne = (Id, callback) => {
     
     const sql2 = "DELETE FROM recepie where id-recepie=?"
     connection.query(sql2, Id, function(err, result){
       callback(err, result)
})
}
const putOne = (Id, callback) => {
     
     const sql3 = "UPDATE recepie SET `Cook_Time`= ?, `Prep_Time`= ?, `recepie_Name`= ?, `Serves`= ?, `categorie`= ?, `recepie_Image`=?, `recepie_Description`=? , ``=? WHERE recepie_Id= ?";
            
              const values = [
                req.body.recepies_id,
                req.body.Cook_Time,
                req.body.Prep_Time,
                req.body.recepie_Name,
                req.body.Serves,
                req.body.categorie,
                req.body.recepie_Image,
                req.body.recepie_Description,
              ];
            
       connection.query(sql3, [...values, Id], function(err, result){
         callback(err, result)
  })
  }
module.exports = { getAll, postOne , deleteOne, putOne};
