<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;

class RoleController extends Controller
{
    public function index()
{
    $roles = Role::get();
    return response()->json(['roles' => $roles], 200);
}
}
