@extends('layouts.admin')

@section('content')




        <section class="section">
            <div class="section-header">
                <div class="section-header-back">
                    <a href="posts.html" class="btn btn-icon"><i class="fas fa-arrow-left"></i></a>
                </div>
                <h1>View All Users</h1>
                <div class="section-header-breadcrumb">
                    <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
                    <div class="breadcrumb-item"><a href="#">Users</a></div>
                    <div class="breadcrumb-item">View All Users</div>
                </div>




            </div>
            <div class="section-body">
                @if(Session::has('delete_user'))
                    <div class="alert alert-success alert-dismissible show fade">
                        <div class="alert-body">
                            <button class="close" data-dismiss="alert">
                                <span>&times;</span>
                            </button>
                            {{session('delete_user')}}
                        </div>
                    </div>



                @elseif(Session::has('create_user'))
                    <div class="alert alert-success alert-dismissible show fade">
                        <div class="alert-body">
                            <button class="close" data-dismiss="alert">
                                <span>&times;</span>
                            </button>
                            {{session('create_user')}}
                        </div>
                    </div>

                @elseif(Session::has('edit_user'))
                    <div class="alert alert-success alert-dismissible show fade">
                        <div class="alert-body">
                            <button class="close" data-dismiss="alert">
                                <span>&times;</span>
                            </button>
                            {{session('edit_user')}}
                        </div>
                    </div>

                @endif
                <div class="card">
                    <div class="card-header">
                        <h4>Users</h4>
                    </div>
                    <div class="card-body">
                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Role</th>
                                <th scope="col">Status</th>
                                <th scope="col">Created at</th>
                                <th scope="col">Updated at</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                            </thead>
                            <tbody>


                            @if($users)
                                @foreach($users as $user)
                                    <tr>
                                        <th scope="row">{{$user->id}}</th>
                                        <td>{{$user->name}}</td>
                                        <td>{{$user->email}}</td>
                                        <td>
                                            @if(empty($user->photo->file))
                                                {{'No Photo'}}
                                            @else
{{--                                                <img alt="image" src="{{$user->photo->file}}" width="35">--}}

                                                <img alt="image" src="{{$user->photo->file}}" class="rounded-circle" width="35" height="35"
                                                     data-toggle="tooltip" title="{{$user->name}}">
                                            @endif
                                        </td>
                                        <td>
                                            @if($user->role->name == "Administrator")
                                                <div class="badge badge-dark">{{$user->role->name}}</div>

                                            @elseif($user->role->name == "Subscriber")
                                                <div class="badge badge-info">{{$user->role->name}}</div>

                                            @elseif($user->role->name == "Author")
                                                <div class="badge badge-light">{{$user->role->name}}</div>

                                            @endif
                                        </td>
                                        <td>
                                            @if($user->is_active == 1)

                                            <div class="badge badge-success">Active</div>

                                            @else
                                                <div class="badge badge-danger">Not Active</div>

                                            @endif
                                        </td>
                                        <td>{{$user->created_at->diffForHumans()}}</td>
                                        <td>{{$user->updated_at->diffForHumans()}}</td>

                                        <td>
                                            <a href="{{route('admin.user.edit',$user->id)}}" class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i
                                                        class="fas fa-pencil-alt"></i></a>
                                        </td>


                                        <td>
                                            {!! Form::open(['method'=>'DELETE','action'=>['AdminUserController@destroy', $user->id]]) !!}

                                            {{csrf_field()}}

                                            {!! Form::button('<i class="fas fa-trash"></i>',['type'=>'submit','class'=>'btn btn-danger btn-action']) !!}
{{--                                            <a class="btn btn-danger btn-action" data-toggle="tooltip" title="Delete"--}}
{{--                                               data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?"--}}
{{--                                               data-confirm-yes="alert('Deleted')"><i class="fas fa-trash"></i></a>--}}
                                            {!! Form::close() !!}
                                        </td>
                                    </tr>
                                @endforeach
                            @endif
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

@endsection