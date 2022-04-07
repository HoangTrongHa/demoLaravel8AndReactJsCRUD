<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
// Route::view('/{path?}', 'reactapp')
//     ->where('path', '.*');
Route::get('/getListItem', [ItemController::class, 'index' ])->name('Item.index');
Route::get('/getItem/{id}', [ItemController::class, 'detail' ])->name('Item.detail');
Route::post('/creat-new-item', [ItemController::class, 'store' ])->name('Item.store');
Route::post('/edit-item/{id}', [ItemController::class, 'update' ])->name('Item.edit');
Route::post('/delete/{id}', [ItemController::class, 'delete' ])->name('Item.delete');


