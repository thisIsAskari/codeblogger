@extends('layouts.admin')

@section('content')




    <section class="section">

        @if(Session::has('delete_category'))
            <div class="alert alert-success alert-dismissible show fade">
                <div class="alert-body">
                    <button class="close" data-dismiss="alert">
                        <span>&times;</span>
                    </button>
                    {{session('delete_category')}}
                </div>
            </div>



        @elseif(Session::has('create_category'))
            <div class="alert alert-success alert-dismissible show fade">
                <div class="alert-body">
                    <button class="close" data-dismiss="alert">
                        <span>&times;</span>
                    </button>
                    {{session('create_category')}}
                </div>
            </div>

        @elseif(Session::has('edit_category'))
            <div class="alert alert-success alert-dismissible show fade">
                <div class="alert-body">
                    <button class="close" data-dismiss="alert">
                        <span>&times;</span>
                    </button>
                    {{session('edit_category')}}
                </div>
            </div>

        @endif
        <div class="section-header">
            <div class="section-header-back">
                <a href="posts.html" class="btn btn-icon"><i class="fas fa-arrow-left"></i></a>
            </div>
            <h1>Categories</h1>
            <div class="section-header-breadcrumb">
                <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
                <div class="breadcrumb-item"><a href="#">Categories</a></div>
                <div class="breadcrumb-item">View Categories</div>
            </div>
        </div>


        <div class="section-body">
            <div class="row">
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">
                            <h4>Create Category</h4>
                        </div>

                        <div class="card-body">

                            @include('includes.form_error')

                            {!! Form::open(['method'=>'POST','action'=>'AdminCategoryController@store']) !!}



                            <div class="form-group row">
                                {!! Form::label('inputCategory','Category Name',['class'=>'col-sm-3 col-form-label']) !!}
                                <div class="col-sm-9">
                                    {!! Form::text('name',null,['class'=>'form-control','id'=>'inputUser','placeholder'=>'Category']) !!}
                                </div>
                            </div>

                            <div class="card-footer">

                                {!! Form::submit('Create Category',['class'=>'btn btn-primary']) !!}

                            </div>

                            {!! Form::close() !!}
                        </div>
                    </div>
                </div>


                <div class="col-6">

                    <div class="card">
                        <div class="card-header">
                            <h4>View All Categories</h4>
                        </div>
                        <div class="card-body">
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Created at</th>
                                    <th scope="col">Updated at</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                                </thead>
                                <tbody>


                                @if($categories)
                                    @foreach($categories as $category)
                                        <tr>
                                            <th scope="row">{{$category->id}}</th>
                                            <td>{{$category->name}}</td>
                                            <td>{{$category->created_at ? $category->created_at->diffForHumans() : 'No date'}}</td>
                                            <td>{{$category->updated_at ? $category->updated_at->diffForHumans() : 'No date'}}</td>

                                            <td>
                                                <a href="{{route('admin.category.edit', $category->id)}}" class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i
                                                            class="fas fa-pencil-alt"></i></a>
                                            </td>


                                            <td>
                                                {!! Form::open(['method'=>'DELETE','action'=>['AdminCategoryController@destroy', $category->id]]) !!}

                                                {!! Form::button('<i class="fas fa-trash"></i>',['type'=>'submit','class'=>'btn btn-danger btn-action']) !!}

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
            </div>

        </div>

    </section>

@endsection