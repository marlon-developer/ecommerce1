'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up() {
    this.create('orders', (table) => {
      table.increments()
      table.decimal('total', 15, 2).defaultTo(0.0)
      table.integer('user_id').unsigned()
      table.enu('status', [
        'pending',
        'cancelled',
        'shipped',
        'paid',
        'finished'
      ])

      table.timestamps()

      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade')
    })
  }

  down() {
    this.drop('orders')
  }
}

module.exports = OrderSchema
