const aprovadosFrAlto = require('../service/aprovadosFrAlto.js');

exports.aprovadosFrAltoC = async(req, res)=>{
    try{
        const result = await aprovadosFrAlto();
        res.status(200).send(result);
    }
    catch(error){
        console.error(error);
        throw error;
    }
}