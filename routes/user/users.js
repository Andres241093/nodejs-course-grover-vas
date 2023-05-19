const express = require('express');
const joi = require('joi'); //para realizar validaciones de formularios del cliente
const routes = express.Router();

routes.get('/',(req,res) => {
    res.send(['andres','maria','diana']);
});

routes.post('/',(req,res) => {
    const schema = joi.object({
        name: joi.string().min(3).required(),
    });

    const {error, value} = schema.validate({name: req.body.name});
    if(!error){
        res.send(value);
    }else{
        const message = error.details[0].message;
        res.status(400).send(message);
        return;
    }  
});

routes.put('/:id',(req,res) => {
    const schema = joi.object({
        name: joi.string().min(3).required(),
    });

    const {error, value} = schema.validate({name: req.body.name});
    if(!error){
        res.send({
            id: req.params.id,
            name: value.name
        });
    }else{
        const message = error.details[0].message;
        res.status(400).send(message);
    }  
});

routes.delete('/:id',(req, res)=>{
    res.send(`user id to delete: ${req.params.id}`);
});

module.exports = routes;