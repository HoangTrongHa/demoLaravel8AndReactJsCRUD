<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Repositories\Item\ItemRepositoryInterface;
use Illuminate\Http\Request;

class ItemController extends BaseController
{
    
    public function __construct(ItemRepositoryInterface $repo)
    {
        $this->_repo = $repo;
    }

    public function index()
    {   
        $getList = $this->_repo->getAllItems();
        return response()->json($getList);
    }

    public function detail($id)
    {
        $findItem = $this->_repo->findItem($id);
        if(!$findItem) {
            return response()->json([
                'status'    => 'fail',
                'message'   => 'Lỗi',
                'data'      => false,
            ], 201);
        }
        return response()->json($findItem);
    }

    public function store(Request $request)
    {
        $params = [
            'name' => $request->name,
            'price' => $request->price
        ];
        $newItem = $this->_repo->createNewItem($params);
        if(!$newItem) {
            return response()->json([
                'status'    => 'fail',
                'message'   => 'Lỗi',
                'data'      => false,
            ], 201);
        }
        return $this->responseSuccess($newItem, 'Xong');
    }

    public function update(Request $res, $id)
    {
        $params = [
            'name' => $res->name,
            'price' => $res->price
        ];
        $editItem = $this->_repo->editItem($params, $id);
        if(!$editItem) {
            return response()->json([
                'status'    => 'fail',
                'message'   => 'Lỗi',
                'data'      => false,
            ], 201);
        }
        return response()->json('Successfully Updated');
    }

    public function delete($id)
    {
        $editItem = $this->_repo->deleteItem($id);
        if(!$editItem) {
            return response()->json([
                'status'    => 'fail',
                'message'   => 'Lỗi',
                'data'      => false,
            ], 201);
        }
        return response()->json('Successfully Updated');
    }
}
