'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {

  static boot() {
    super.boot()
    this.addHook('afterFind', 'OrderHook.updateValues')
    this.addHook('afterPaginate', 'OrderHook.updateCollectionValues')
  }

  /**
  * Relation Between Order and Item
  */
  items() {
    return this.hasMany('App/Models/Item')
  }

  /**
  * Relation Between Order and Coupon
  */
  coupons() {
    return this.belongsToMany('App/Models/Coupon')
  }

  /**
  * Relation Between Order and Discount 
  */
  discounts() {
    return this.hasMany('App/Models/Discount')
  }

  /**
  * Relation Between Order and User
  */
  user() {
    return this.belongsTo('App/Models/User', 'user_id', 'id')
  }


}

module.exports = Order
