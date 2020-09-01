'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItem extends Model {

  static get traits() {
    return [
      'App/Models/Traits/NoTimestamp'
    ]
  }

  /**
  * Relation Between OrderItem and Product
  */
  product() {
    return this.belongsTo('App/Models/Product')
  }

  /**
  * Relation Between OrderItem and Order
  */
  order() {
    return this.belongsTo('App/Models/Order')
  }
}

module.exports = OrderItem
