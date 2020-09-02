'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class RoleSeeder {
  async run() {

    // Create Admin
    await create({
      name: 'Admin',
      slug: 'admin',
      description: 'Administrador do Sistema',
    })

    // Create Manager
    await create({
      name: 'Manager',
      slug: 'manager',
      description: 'Gerente da Loja',
    })

    // Create Client
    await create({
      name: 'Client',
      slug: 'client',
      description: 'Cliente da Loja',
    })

  }
}

module.exports = RoleSeeder
