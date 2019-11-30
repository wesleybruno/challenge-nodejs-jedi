const dataService = require('./../services/DataService')


exports.orderByStatus = async () => {
    try{
        const service = require('./../services/DataService')
        const data = await service.getJsonData()
        return data
    } catch(e){
        console.error(e.toString())
        return false
    }
};


exports.orderTotal = async () => {
    return new Error('Not Impremented yet')
};


exports.orderMajorValue = async () => {
    return new Error('Not Impremented yet')
};


exports.groupByCountry = async () => {
    return new Error('Not Impremented yet')
};