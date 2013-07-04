<?php defined('SYSPATH') or die('No direct script access.');
/**
 * Date: 7/3/13
 * Time: 11:05 PM
 * Something meaningful about this file
 *
 */

return array(
	'site_name' => 'SampleSite.com',

	'template' => array(
		'selected' => 'sample',
		'backend' => array(
			'sample' => array(
				'style' => array(
					URL::Site('template/sample/css/style.css', TRUE),
				),
				'script' => array(
					'http://static.portnumber53.com/library/js/angularjs/angular.js',
					'http://code.angularjs.org/1.1.5/angular-sanitize.min.js',
					URL::Site('/script/common.js', TRUE) => TRUE,
				),
			),
		),
		'frontend' => array(
			'sample' => array(
				'style' => array(
					URL::Site('template/sample/css/style.css', TRUE),
				),
				'script' => array(
					'http://static.portnumber53.com/library/js/angularjs/angular.js',
					'http://code.angularjs.org/1.1.5/angular-sanitize.min.js',
					URL::Site('/script/common.js', TRUE) => TRUE,
				),
			),
		),
	),
);