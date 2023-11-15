const list = require('../repository/getList.js');

async function aprovadosFrAlto(){
    try{
        const resultAprovadosValorFrete = [];
        const result = await list.list();
        for(const item in result){
            if(result[item].aprovado === true && result[item].valorFrete > 40){
                resultAprovadosValorFrete.push(result[item])
            }
        }
        return resultAprovadosValorFrete;
    }
    catch(error){
        console.error(error);
    }
}
module.exports = aprovadosFrAlto;