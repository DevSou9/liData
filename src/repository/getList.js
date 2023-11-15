const fs = require('fs')
const path = require('path');


async function readFileAsync(file){
    return new Promise((resolve, reject) =>{
        const result = fs.readFileSync(file, {encoding: "utf-8"})    
       
        if(!result) return reject(new Error('error'))
        
        return resolve(result)
    });
}

async function list(){
    try{
        const filePath = path.join(__dirname, '../../', 'dateJSON.json');
        const fileContent = await readFileAsync(filePath);              
      
        const fileJSON =  JSON.parse(fileContent);
        const fileResult = [];
        for(const item in fileJSON.pedidos){
            fileResult.push({"id": fileJSON.pedidos[item].id, "Produto": fileJSON.pedidos[item].produto, "valorFrete": fileJSON.pedidos[item].valorFrete, "aprovado": fileJSON.pedidos[item].aprovado})                      
        }
        return fileResult;
    }
    catch(error){
        console.error(error);
    }
}
module.exports = {list};



