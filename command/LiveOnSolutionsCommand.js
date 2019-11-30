const dataService = require('./../services/DataService')
const _ = require('lodash')

exports.orderByStatus = async () => {
    try{
        const service = require('./../services/DataService')
        const arrayData = await service.getJsonData()
        
        const arrayOrdened = _.orderBy(arrayData, ['status'],['asc'])
        return arrayOrdened
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