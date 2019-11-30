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
            
            const quantidades = await this._getAllStatusQuantidade(arrayStatus)
            return quantidades
            
        } catch(e) {
            console.error(e.toString())
            return false
        }
    };

    async _getAllStatusQuantidade(arrayStatus){
        const retorno = []
        await this._asyncForEach(arrayStatus, element =>
            this.orderTotal(element).then( response => {
                let obj = {}
                obj.status = element
                obj.quantidade = response 

                retorno.push(obj)
            })
        )
        return retorno
    }

    
    async _asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array)
        }
    }

    
    async groupByCountry() {
        try{
            const service = require('./../services/DataService')
            const arrayData = await service.getJsonData()

            const uniqueCountrys = this._getAllCountrys(arrayData)
            const mapCountry =  this._getMapCountry(uniqueCountrys)

            const retorno = this._mountReturnArray(uniqueCountrys)

            arrayData.forEach( element => {

                if(element.shipping && element.shipping.country){
                  
                    let countryIndex = mapCountry[element.shipping.country.name]

                    let countryObject = retorno[countryIndex]

                    countryObject.orders.push(element)

                }
                
            });

         
            return retorno
            
        } catch(e) {
            console.error(e.toString())
            return false
        }
    };
    
    // _mountReturn(arrayStatus){
    //     try{
    //         const retorno = []
            
    //         arrayStatus.forEach(element => {
    //             let obj = {
    //                 status: element,
    //                 quantidade: 0
    //             }
    //             retorno.push(obj)
    //         });

    //         return retorno
    //     }catch(e){
    //         return []
    //     }
    // }

    _getAllStatus(data) {
        try{

            const arrayStatus = data.map( element => element.status)

            const arrayUnique = [...new Set(arrayStatus)]

            return arrayUnique

        } catch(e){
            return []
        }
    }

    _getAllCountrys(data){
        try{

            const arrayCountrys = data.map( element => element.shipping.country.name)

            const arrayUnique = [...new Set(arrayCountrys)]

            return arrayUnique

        } catch(e){
            return []
        }
    }

    _getMapCountry(arrayCountrys){
        try{
            const retorno = {}

            arrayCountrys.forEach( (country, index) => {
                retorno[country] = index
            });

            return retorno

        } catch(e){
            return {}
        }

    }

    _mountReturnArray(mapCountry){
        try{
            const retorno = []
            
            mapCountry.forEach(element => {
                let obj = {
                    country: element,
                    orders: []
                }
                retorno.push(obj)
            });

            return retorno
        }catch(e){
            return []
        }
    }

}
