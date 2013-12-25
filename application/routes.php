<?php defined('SYSPATH') or die('No direct script access.');
/**
 * Date: 12/20/13
 * Time: 1:29 AM
 * Something meaningful about this file
 *
 */

/**
 * Set the routes. Each route must have a minimum of a name, a URI and a set of
 * defaults for the URI.
 */
Route::set('default', '(<controller>(/<action>(/<id>)))')
	->defaults(array(
		'controller' => 'welcome',
		'action'     => 'index',
	));
