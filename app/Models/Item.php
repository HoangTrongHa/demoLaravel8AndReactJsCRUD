<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $is_deleted   = true;
    protected $table        = 'items';
    protected $primaryKey   = 'id';

    protected $fillable = [
        'name', 'price'
    ];

    protected $hidden = [
        'updated_at',
        'created_at',
    ];
}
