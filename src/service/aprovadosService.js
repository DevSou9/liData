const list = require('../repository/getList.js');

async function aprovadosService(){
    try{
        const resultAprovados = [];
        const result = await list.list();
        for(const item in result){
            
            if(result[item].aprovado === true){
                resultAprovados.push(result[item])
            }
        }
        return resultAprovados;
    }
    catch(error){
        console.error(error);
    }
}
module.exports = aprovadosService;
aprovadosService()