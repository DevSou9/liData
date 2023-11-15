const aprovadosService = require('../service/aprovadosService.js');

exports.aprovadosController = async(req, res) =>{
    try{
        const result = await aprovadosService();
        res.status(200).send(result)
    }
    catch(error){
        console.error(error);
        throw error;
    }
}