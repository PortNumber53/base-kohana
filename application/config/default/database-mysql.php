<?php defined('SYSPATH') or die('No direct script access.');
/**
 * Date: 12/24/13
 * Time: 2:56 PM
 * Something meaningful about this file
 *
 */

return array
(
	'default' => array
	(
		'type'       => 'PDO',
		'connection' => array(
			'dsn'        => 'mysql:host=' . Settings::factory()->value('database.default.host') . ';dbname=' . Settings::factory()->value('database.default.database'),
			'username'   => Settings::factory()->value('database.default.username'),
			'password'   => Settings::factory()->value('database.default.password'),
			'persistent' => FALSE,
		),
		'identifier' => '`',
		'table_prefix' => Settings::factory()->value('database.default.prefix'),
		'charset'      => 'utf8',
		'caching'      => FALSE,
		'profiling'    => FALSE,
	),
);