@extends('layouts.admin')

@section('content')


    <section class="section">
        <div class="section-header">
            <h1>Edit User</h1>
            <div class="section-header-breadcrumb">
                <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
                <div class="breadcrumb-item"><a href="#">User</a></div>
                <div class="breadcrumb-item">Edit User</div>
            </div>
        </div>
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Edit User</h4>


                        </div>

                        <div class="card-body">

                            @include('includes.form_error')

                            {!! Form::model($user,['method'=>'PATCH','action'=>['AdminUserController@update',$user->id],'files'=>true]) !!}

                            {{csrf_field()}}
                            <img alt="image" src="{{$user->photo ? $user->photo->file : 'http://placehold.it/180x180'}}" class="mr-3 user-img-radious-style user-list-img" width="180">

                            <br><br>

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
                                        {!! Form::label('photo_id','Choose New Photo',['id'=>'image-label']) !!}
                                        {{--                                        <label for="image-upload" id="image-label">Choose File</label>--}}

{{--                                        {!! Form::file('photo_id',['id'=>'image-upload']) !!}--}}
{{--                                        <input type="file" name="photo_id" id="image-upload" />--}}

                                        {!! Form::file('photo_id',['id'=>'image-upload']) !!}
                                    </div>


                                </div>
                            </div>


                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    {!! Form::label('role_id','Role') !!}
                                    {!! Form::select('role_id',$roles,null,['class'=>'form-control selectric']) !!}


                                </div>

                                <div class="form-group col-md-6">
                                    {!! Form::label('is_active','Status') !!}
                                    {!! Form::select('is_active',[

                                        '1' => 'Active',
                                        '0' => 'Not Active',
                                        ],null,['class'=>'form-control selectric']) !!}

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
