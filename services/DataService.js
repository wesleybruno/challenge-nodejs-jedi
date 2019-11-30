const axios = require('axios');

exports.getJsonData = async () => {

    try{
        console.log('Buscando dados no servidor!')
        const response  = await axios.get('https://raw.githubusercontent.com/LiveOnSolutions/challenge-nodejs-jedi/master/chaotic_data.json')

        return response.data

    } catch(e){
        console.error('Erro ao buscar dados no servidor', e.toString())
    }

};
