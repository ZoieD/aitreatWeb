<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cusinfo extends Model
{
    protected $table = 'customer_gen_info';
    public $timestamps = true;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'cus_cate', 'cus_name', 'cus_hp', 'cus_email',
    ];
}
