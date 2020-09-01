'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

  image() {
    return this.belongsTo('App/Models/Image')
  }

  /**
  * Relation Between Product and Image
  * Image Gallery
  */
  images() {
    return this.belongsToMany('App/Models/Image')
  }

  /**
  * Relation Between Product and Category
  * Image Gallery
  */
  categories() {
    return this.belongsToMany('App/Models/Category')
  }

  /**
  * Relation Between Product and Coupon
  */
  coupons() {
    return this.belongsToMany('App/Models/Coupon')
  }
}

module.exports = Product
