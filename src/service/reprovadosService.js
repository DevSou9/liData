const list = require('../repository/getList.js');

// Criar uma sublista com os pedidos reprovados
async function reprovados(){
    try{
        const result = await list.list();
        const resultReprovados = [];
        for(const item in result){
            if(result[item].aprovado === false){
                resultReprovados.push(result[item]);
            }
        }
        return resultReprovados;
    }
    catch(error){
        console.error(error);
    }
}
module.exports = reprovados;

