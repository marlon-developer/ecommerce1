'use strict'

/*
|--------------------------------------------------------------------------
| 0002ClientSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use('Role')
const User = use('App/Models/User')

class ClientSeeder {
  async run() {

    const role = await Role.findBy('slug', 'client')
    const clients = await Factory.model('App/Models/User').createMany(30)
    await Promisse.all(
      clients.map(async client => {
        await client.roles().attach([
          role.id
        ])
      })
    )

    const user = await User.crete({
      name: 'Developer',
      surname: 'IT',
      email: 'dev@dev.com.br',
      password: '123456'
    })

    const adminRole = await Role.findBy('slug', 'admin')
    await user.roles().attach([
      role.id
    ])

  }
}

module.exports = ClientSeeder
