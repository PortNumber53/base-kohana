<?php defined('SYSPATH') or die('No direct script access.');
/**
 * Date: 8/27/13
 * Time: 2:32 AM
 * Something meaningful about this file
 *
 */

class SampleTest extends PHPUnit_Framework_TestCase
{

	public function testSetup()
	{
		$stack = array();
		$this->assertEquals(0, count($stack));

		array_push($stack, 'foo');
		$this->assertEquals('foo', $stack[count($stack)-1]);
		$this->assertEquals(1, count($stack));

		$this->assertEquals('foo', array_pop($stack));
		$this->assertEquals(0, count($stack));
	}
}
