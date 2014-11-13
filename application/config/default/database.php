<?php defined('SYSPATH') or die('No direct script access.');
/**
 * Date: 8/23/14
 * Time: 8:39 PM
 * Something meaningful about this file
 *
 */

return array
(
	'default' => array
	(
		'type'       => 'PostgreSQL',
		'connection' => array(
			/**
			 * The following options are available for PostgreSQL:
			 *
			 * string   hostname     server hostname, or socket
			 * string   database     database name
			 * string   username     database username
			 * string   password     database password
			 * boolean  persistent   use persistent connections?
			 * array    variables    system variables as "key => value" pairs
			 *
			 * Ports and sockets may be appended to the hostname.
			 */
			'hostname'   => Settings::factory()->value('database.default.host'),
			'database'   => Settings::factory()->value('database.default.database'),
			'username'   => Settings::factory()->value('database.default.username'),
			'password'   => Settings::factory()->value('database.default.password'),
			'persistent' => FALSE,
		),
		'primary_key'  => '',
		'schema'       => '',
		'table_prefix' => Settings::factory()->value('database.default.prefix'),
		'charset'      => 'UTF-8',
		'caching'      => FALSE,
		'profiling'    => FALSE,
	),
);
