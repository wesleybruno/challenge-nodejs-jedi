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


exports.orderTotal = async (status) => {
    try{
        const service = require('./../services/DataService')
        const arrayData = await service.getJsonData()

        const arrayFilter = arrayData.filter( (element) => {
            return element.status == status
        })
        
        let valorTotal = 0

        arrayFilter.forEach(element => {

            const {order_items} = element

            if(order_items){
                valorTotal = _.reduce(order_items, function(sum, order) {
                    return sum + order.amount;
                }, 0);
            }

        });

        return valorTotal
    }catch(e){
        console.error(e.toString())
        return false
    }
};


exports.orderMajorValue = async () => {
    return new Error('Not Impremented yet')
};


exports.groupByCountry = async () => {
    return new Error('Not Impremented yet')
};