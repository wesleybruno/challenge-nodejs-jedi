const dataService = require('./../services/DataService')
const _ = require('lodash')

module.exports = new class Order {
    
    async orderByStatus() {
        try{
            const service = require('./../services/DataService')
            const arrayData = await service.getJsonData()
            
            const arrayOrdened = _.orderBy(arrayData, ['status'],['asc'])
            return arrayOrdened
        } catch(e){
            console.error(e.toString())
            return false
        }
    }

    async orderTotal(status) {
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


    async orderMajorValue() {
        try{
            const service = require('./../services/DataService')
            const arrayData = await service.getJsonData()

            const arrayStatus = this._getAllStatus(arrayData)

            return arrayStatus
        } catch(e) {
            console.error(e.toString())
            return false
        }
    };

    
    async groupByCountry() {
        return new Error('Not Impremented yet')
    };

    _getAllStatus(data) {
        try{

            const arrayStatus = data.map( element => element.status)

            const arrayUnique = [...new Set(arrayStatus)]

            return arrayUnique

        } catch(e){
            return []
        }
    }

}
