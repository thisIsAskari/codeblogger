<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddMediaRequest;
use App\Photo;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Session;


class AdminMediaController extends Controller
{
    public function index()
    {
        $photos = Photo::all();
        return view('admin.medias.index',compact('photos'));
    }

    public function create()
    {
        return view('admin.medias.create');
    }

    public function store(AddMediaRequest $request)
    {
        $file = $request->file('file');
        $name = time() . $file->getClientOriginalName();
        $file->move('images',$name);
        Photo::create(['file'=>$name]);
        Session::flash('create_media','New Media Added Successfully');
        return redirect('admin/media');
    }
    public function destroy($id)
    {
        $photo = Photo::findOrFail($id);
        unlink(public_path().$photo->file);
        $photo->delete();
        Session::flash('delete_media','Media Deleted Successfully');
        return redirect('admin/media');
    }
}
