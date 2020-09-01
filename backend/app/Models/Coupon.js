'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coupon extends Model {

  static dates() {
    return [
      'created_at',
      'updated_at',
      'valid_from',
      'valid_until'
    ]
  }

  /**
  * Relation Between Coupon and User 
  */
  users() {
    return this.belongsToMany('App/Models/User')
  }

  /**
  * Relation Between Coupon and Product 
  */
  products() {
    return this.belongsToMany('App/Models/Product')
  }

  /**
  * Relation Between Category and Order 
  */
  orders() {
    return this.belongsToMany('App/Models/Order')
  }
}

module.exports = Coupon
