<?php

namespace App\Http\Controllers;

use App\Cusinfo;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;

class HomeController extends Controller
{
    public function store()
    {
        $input = Input::except('_token');
        $roles = [
            'cus_name' => 'required',
//            'cus_hp' => 'required|between:6,11',
            'cus_email' => 'required',
            'cus_cate' => 'required'
        ];
        $messages = [
            'cus_name.required' => 'Name is required',
//            'cus_hp.required' => 'HP is required',
//            'cus_hp.between' => 'HP is not valid, must between 6-11',
            'cus_email.required' => 'Email is required',
            'cus_cate.required' => 'Category is required',
        ];
        $validator = Validator::make($input, $roles, $messages);
        if ($validator->passes()){
            $re = Cusinfo::create($input);
            if ($re){
                return redirect('/'.'#contact')->with('status','Successfully signed up!');
            }else{
                return redirect('/'.'#contact')->with('errors','Submit fails, Please try again');
//                return back()->with('errors','Submit fails, Please try again');
            }
        }else{
            return redirect('/'.'#contact')->withErrors($validator);
//            return back()->withErrors($validator);
        }
    }
}
