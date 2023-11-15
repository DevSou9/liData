const {list} = require('../repository/getList.js');

async function listService(){
    try{
        const result = await list();
        return result;
    }
    catch(error){
        console.error(error);
    }
}

module.exports = {listService};