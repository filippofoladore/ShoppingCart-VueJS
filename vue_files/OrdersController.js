import axios from 'axios'

/* eslint-disable no-async-promise-executor */

class OrdersController {
    static getOrder(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let url = 'orders/detail' + `/${id}`
                const res = await axios.get(url)
                const data = res.data
                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
    }

    static getArticleDetail(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let url = 'orders/article' + `/${id}`
                const res = await axios.get(url)
                const data = res.data
                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
    }

    static complete(obj) {
        return new Promise(async (resolve, reject) => {
            try {
                let url = 'orders/complete'
                const res = await axios.post(url, obj)
                const data = res.data
                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
    }

}

export default OrdersController