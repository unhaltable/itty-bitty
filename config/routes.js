/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  'GET /': 'SiteController.index',

  'GET /login': 'AuthController.login',
  'GET /logout': 'AuthController.logout',
  'GET /register': 'AuthController.register',

  'POST /auth/local': 'AuthController.callback',
  'POST /auth/local/:action': 'AuthController.callback',

  'GET /auth/:provider': 'AuthController.provider',
  'GET /auth/:provider/callback': 'AuthController.callback',
  'GET /auth/:provider/:action': 'AuthController.callback',

  'GET /tutorials': 'LevelsController.index',
  'GET /tutorials/:type': 'LevelsController.levels',
  'GET /tutorials/:type/:level_num': 'QuestionsController.index',

  'GET /ref/bitwise': { view: 'ref_bitwise' },
  'GET /ref/bases': { view: 'ref_bases' },

  'GET /profile': 'UsersController.profile',
  'GET /leaderboards': 'ScoresController.leaderboards',


  /*************************************************************************
  *                                                                        *
  * If a request to a URL doesn't match any of the custom routes above, it *
  * is matched against Sails route blueprints. See `config/blueprints.js`  *
  * for configuration options and examples.                                *
  *                                                                        *
  *************************************************************************/

};
