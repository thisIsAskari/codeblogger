@extends('layouts.admin')

@section('content')

    <section class="section">
        <div class="section-header">
            <h1>Create New User</h1>
            <div class="section-header-breadcrumb">
                <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
                <div class="breadcrumb-item"><a href="#">User</a></div>
                <div class="breadcrumb-item">Create New User</div>
            </div>
        </div>
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Create User</h4>
                        </div>

                        <div class="card-body">

                            @include('includes.form_error')

                            {!! Form::open(['method'=>'POST','action'=>'AdminUserController@store','files'=>true]) !!}



                            <div class="form-group row">
                                    {!! Form::label('inputUser','Username',['class'=>'col-sm-3 col-form-label']) !!}
                                    {{--  <label for="inputUser1">Username</label>--}}
                                <div class="col-sm-9">
                                    {!! Form::text('name',null,['class'=>'form-control','id'=>'inputUser','placeholder'=>'Username']) !!}
                                    {{--   <input type="text" class="form-control" id="inputUser1" placeholder="Username">--}}
                                </div>
                            </div>


                            <div class="form-group row">
                                {!! Form::label('inputEmail','Email',['class'=>'col-sm-3 col-form-label']) !!}
                                {{--   <label for="inputUser1">Username</label>--}}

                                <div class="col-sm-9">
                                    {!! Form::email('email',null,['class'=>'form-control','id'=>'inputEmail','placeholder'=>'Email']) !!}
                                {{--   <input type="text" class="form-control" id="inputUser1" placeholder="Username">--}}
                                </div>
                            </div>


                            <div class="form-group row">
                                {!! Form::label('inputPassword','Password',['class'=>'col-sm-3 col-form-label']) !!}

                                <div class="col-sm-9">
                                    {!! Form::password('password',['class'=>'form-control','id'=>'inputPassword','placeholder'=>'Password']) !!}
                                </div>
                            </div>


                            <div class="form-group row mb-4">
                                {!! Form::label(null,'Photo',['class'=>'col-sm-3 col-form-label']) !!}
                                {{--                                <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Thumbnail</label>--}}
                                <div class="col-sm-12 col-md-7">
                                    <div id="image-preview" class="image-preview">
                                        {!! Form::label('photo_id','Choose File',['id'=>'image-label']) !!}
                                        {{--                                        <label for="image-upload" id="image-label">Choose File</label>--}}

                                        {!! Form::file('photo_id',['id'=>'image-upload']) !!}
                                        {{--                                        <input type="file" name="image" id="image-upload" />--}}
                                    </div>
                                </div>
                            </div>


                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    {!! Form::label('role_id','Role') !!}
                                    {!! Form::select('role_id',$roles,2,['class'=>'form-control selectric','id'=>null]) !!}


                                </div>

                                <div class="form-group col-md-6">
                                    {!! Form::label('is_active','Status') !!}
                                    {!! Form::select('is_active',[

                                        '1' => 'Active',
                                        '0' => 'Not Active',
                                        ],1,['class'=>'form-control selectric']) !!}

                                </div>

                            </div>
                        <div class="card-footer">

                            {!! Form::submit('Create User',['class'=>'btn btn-primary']) !!}
{{--                            <button class="btn btn-primary">Submit</button>--}}
                        </div>

                            {!! Form::close() !!}
                        </div>





                    </div>
                </div>
            </div>
        </div>
    </section>


@endsection