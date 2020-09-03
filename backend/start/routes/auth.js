'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('register', 'AuthController.register').as('auth.register')
  Route.post('login', 'AuthController.login').as('auth.login')
  Route.post('refresh', 'AuthController.refresh').as('auth.refresh')
  Route.post('logout', 'AuthController.logout').as('auth.logout')

  // Restore Password Routes
  Route.post('reset-password', 'AuthController.forgot').as('auth.forgot')
  Route.post('reset-password', 'AuthController.remember').as('auth.remember')
  Route.put('reset-password', 'AuthController.reset').as('auth.reset')
})
  .prefix('v1/auth')
  .namespace('Auth')

