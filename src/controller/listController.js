const express = require('express');
const app = express();
const listService = require('../service/list.js');

exports.listController = async (req, res) =>{
    try{
        const result = await listService.listService();
        res.status(200).send(result);
    }
    catch(error){
        console.error(error);
        throw error;
    }
}