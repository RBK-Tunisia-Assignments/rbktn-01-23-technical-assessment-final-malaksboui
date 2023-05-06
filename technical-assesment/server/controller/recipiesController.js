
const {getAll, postOne, deleteOne, putOne} = require('../model/recipiesModel.js')

const getrecepie = (req, res) => {
  getAll(function(err, results) {
    if(err) res.status(500).send(err);
    else res.json(results)
})
};
const postrecepie = (req, res) => {
  const recepie= req.body
  postOne(recepie, function(err, results) {
    if(err) res.status(500).send(err);
    else res.json(results)
  })
}
const deleterecepie = (req, res) => {
  const Id= req.params.id
  deleteOne(Id, function(err, results) {
    if(err) res.status(500).send(err);
    else res.json(results)
  })
}
const updaterecepie = (req, res) => {
  const Id= req.params.id
 putOne(Id, function(err, results) {
    if(err) res.status(500).send(err);
    else res.json(results)
  })
}

module.exports = {
  getrecepie,
  postrecepie, 
  deleterecepie,
  updaterecepie,
};


