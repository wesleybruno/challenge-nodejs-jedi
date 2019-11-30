const axios = require('axios');
const jsonData = require('./../dataJson.json')
const fs = require('fs');
exports.getJsonData = async () => {

    try{

        if(jsonData)
            return jsonData

        const response  = await axios.get('https://raw.githubusercontent.com/LiveOnSolutions/challenge-nodejs-jedi/master/chaotic_data.json')

        fs.writeFile('dataJson.json', JSON.stringify(data), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });

         return response.data
        
    } catch(e){
        console.error('Erro ao buscar dados no servidor', e.toString())
    }

};
