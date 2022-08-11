const todoServices = require('../services/todo.service')

const methods = {
    async onGetAll(req, res) {
      try {
        let list = await todoServices.getAllList();
        console.log(list);
        res.send({
            status:true,
            result:list
        });
      } catch (error) {
        console.log(error);
      }
    },
    async onCreateOne(req, res) {
      try {
        if(!req.body || !req.body.content) res.status(401).send("Bad request")
        console.log(req.body)
        let result = await todoServices.addOne(req.body.content);
        res.send({
            status:true,
            result:result
        });
      } catch (error) {
        console.log(error);
      }
    },
    async onUpdateAt(req, res) {
      try {
        if(!req.body || !req.body.content) res.status(401).send("Bad request")
        console.log(`${req.body.id} + ${req.body.content}`);
        let result = await todoServices.updateAt(req.body.id,req.body.content);
        console.log(result);
        res.send({
            status:true,
            result:result
        });
      } catch (error) {
        console.log(error);
      }
    },
    async onRemove(req,res){
      try {
        if(!req.body || !req.body.id) res.status(401).send("Bad request")
        let result = await todoServices.removeAt(req.body.id);
        console.log(result);
        res.send({
            status:true,
            result:result
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  module.exports = { ...methods };
  