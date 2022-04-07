<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Traits\ResponseFormat;

/**
 * @OAS\SecurityScheme(
 *      securityScheme="bearer_token",
 *      type="http",
 *      scheme="bearer"
 * )
 */
abstract class BaseController extends Controller
{
    use ResponseFormat;

	protected $_repo;

    public function __construct(){
    }
}
