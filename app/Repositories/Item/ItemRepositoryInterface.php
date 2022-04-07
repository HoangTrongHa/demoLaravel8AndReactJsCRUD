<?php

namespace App\Repositories\Item;

interface ItemRepositoryInterface 
{   
    public function getAllItems();
    public function createNewItem();
    public function editItem();
    public function deleteItem();
    public function findItem();
}