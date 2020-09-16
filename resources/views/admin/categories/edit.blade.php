@extends('layouts.admin')

@section('content')




    <section class="section">


        <div class="section-header">
            <div class="section-header-back">
                <a href="posts.html" class="btn btn-icon"><i class="fas fa-arrow-left"></i></a>
            </div>
            <h1>Categories</h1>
            <div class="section-header-breadcrumb">
                <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
                <div class="breadcrumb-item"><a href="#">Categories</a></div>
                <div class="breadcrumb-item">Edit Category</div>
            </div>
        </div>


        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Edit Category</h4>
                        </div>

                        <div class="card-body">

                            @include('includes.form_error')

                            {!! Form::model($category, ['method'=>'PATCH','action'=>['AdminCategoryController@update',$category->id]]) !!}



                            <div class="form-group row">
                                {!! Form::label('inputCategory','Category Name',['class'=>'col-sm-3 col-form-label']) !!}
                                <div class="col-sm-9">
                                    {!! Form::text('name',null,['class'=>'form-control','id'=>'inputUser','placeholder'=>'Category']) !!}
                                </div>
                            </div>

                            <div class="card-footer">
                                {!! Form::submit('Update Category',['class'=>'btn btn-primary','style'=>'display:inline; float:left;']) !!}

                                {!! Form::close() !!}


                                {!! Form::open(['method'=>'DELETE','action'=>['AdminCategoryController@destroy', $category->id]]) !!}

                                {!! Form::button('Delete Category',['type'=>'submit','class'=>'btn btn-danger btn-action','style'=>'display:inline; float:left; margin-left:2%;']) !!}

                                {!! Form::close() !!}

                            </div>



                        </div>
                    </div>
                </div>

            </div>

        </div>

    </section>

@endsection