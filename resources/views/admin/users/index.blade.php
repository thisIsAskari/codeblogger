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
                                            <img alt="image" src="{{$user->photo_id}}" width="35">
                                        </td>
                                        <td>{{$user->role->name}}</td>
                                        <td>
                                            @if($user->is_active == 1)

                                            <div class="badge badge-success">Active</div>

                                            @else
                                                <div class="badge badge-danger">Not Active</div>

                                            @endif
                                        </td>
                                        <td>{{$user->created_at->diffForHumans()}}</td>
                                        <td>{{$user->updated_at->diffForHumans()}}</td>
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