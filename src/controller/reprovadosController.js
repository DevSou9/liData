const reprovados = require('../service/reprovadosService.js');

exports.reprovadosController = async(req, res) =>{
    try{
        const result = await reprovados();
        res.status(200).send(result)
    }
    catch(error){
        console.error(error);
        throw error;
    }
}