'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {

  /**
  * Relation Between Category and Image Cover
  */
  static image() {
    return this.belongsTo('App/Models/Image')
  }

  /**
  * Relation Between Category and Product
  */
  static products() {
    return this.belongsToMany('App/Models/Product')
  }
}

module.exports = Category
