'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  /**
   * Categories Resource Route
   */
  Route.resource('categories', 'CategoryController').apiOnly()

  /**
   * Products Resource Route
   */
  Route.resource('products', 'ProductController').apiOnly()

  /**
   * Coupons Resource Route
   */
  Route.resource('coupons', 'CouponController').apiOnly()

  /**
   * Orders Resource Route
   */
  Route.resource('orders', 'OrderController').apiOnly()

  /**
   * Images Resource Route
   */
  Route.resource('images', 'ImageController').apiOnly()

  /**
   * Users Resource Route
   */
  Route.resource('users', 'UserController').apiOnly()
})
  .prefix('v1/admin')
  .namespace('Admin')

