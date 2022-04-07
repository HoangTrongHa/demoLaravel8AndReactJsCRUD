<?php

namespace App\Repositories\Item;

use App\Models\Item as ModelsItem;
use App\Repositories\Item\ItemRepositoryInterface as ItemInterface;
use Illuminate\Support\Facades\DB;

class ItemRepository implements ItemInterface {
  public $item;

  function __construct(ModelsItem $item) {
    $this->item = $item;
  }

  public function getAllItems()
  {
    return ModelsItem::all();
  }

  public function createNewItem($data = [])
  {
    try{
      return DB::transaction(function() use($data) {
        return ModelsItem::create($data);
      });
    }catch (\Exception $exception){
        \Log::debug($exception->getMessage());
        return false;
    }
  }

  public function editItem($item = [], $id = [])
  {
    return ModelsItem::find($id)->update([
      'name' => $item['name'],
      'price' => $item['price']
    ]);
  }

  public function deleteItem($id = null)
  {
    return ModelsItem::find($id)->delete();
  }

  public function findItem($id = null)
  {
    return ModelsItem::find($id);
  }
}