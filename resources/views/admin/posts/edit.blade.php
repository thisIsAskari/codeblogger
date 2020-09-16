@extends("layouts.admin")

@section('content')

    <!-- Main Content -->

    <section class="section">
        <div class="section-header">
            <div class="section-header-back">
                <a href="posts.html" class="btn btn-icon"><i class="fas fa-arrow-left"></i></a>
            </div>
            <h1>Edit Post</h1>
            <div class="section-header-breadcrumb">
                <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
                <div class="breadcrumb-item"><a href="#">Posts</a></div>
                <div class="breadcrumb-item">Edit Post</div>
            </div>
        </div>


        <div class="section-body">
{{--            @if(Session::has('user_denied'))--}}

{{--                <p id="swal-5">{{session('user_denied')}}</p>--}}
{{--            @endif--}}

            <div class="row">
                <div class="col-12">
                    <div class="card">

                        @include('includes.form_error')

                        {!! Form::model($post,['method'=>'PATCH','action'=>['AdminPostController@update',$post->id],'files'=>true]) !!}


                        <div class="card-header">
                            <h4>Edit Your Post</h4>
                        </div>


                        <div class="card-body">
                            <div class="form-group row mb-4">
                                {!! Form::label('title','Title',['class'=>'col-form-label text-md-right col-12 col-md-3 col-lg-3']) !!}
                                <div class="col-sm-12 col-md-7">

                                    {!! Form::text('title',null,['class'=>'form-control']) !!}

                                </div>
                            </div>


                            <div class="form-group row mb-4">
                                {!! Form::label('category_id','Category',['class'=>'col-form-label text-md-right col-12 col-md-3 col-lg-3']) !!}
                                <div class="col-sm-12 col-md-7">
                                    {!! Form::select('category_id',$categories,null,['class'=>'form-control selectric']) !!}

                                </div>
                            </div>


                            <div class="form-group row mb-4">
                                {!! Form::label('body','Content',['class'=>'col-form-label text-md-right col-12 col-md-3 col-lg-3']) !!}
                                <div class="col-sm-12 col-md-7">

                                    {!! Form::textarea('body',null,['class'=>'summernote-simple']) !!}

                                </div>
                            </div>

                            <div class="form-group row mb-4">
                                {!! Form::label(null,'Thumbnail',['class'=>'col-form-label text-md-right col-12 col-md-3 col-lg-3']) !!}
                                <div class="col-sm-12 col-md-7">
                                    <div id="image-preview" class="image-preview">
                                        {!! Form::label('image-upload','Choose File',['id'=>'image-label']) !!}
                                        {!! Form::file('photo_id',['id'=>'image-upload']) !!}
                                        <img alt="image" src="{{$post->photo ? $post->photo->file : 'http://placehold.it/180x180'}}" class="m-3 user-img-radious-style user-list-img" width="30%">
                                    </div>


                                </div>
                            </div>

                            {{--                                <div class="form-group row mb-4">--}}
                            {{--                                    {!! Form::label(null,'Tags',['class'=>'col-form-label text-md-right col-12 col-md-3 col-lg-3']) !!}--}}
                            {{--                                    <div class="col-sm-12 col-md-7">--}}
                            {{--                                        {!! Form::text(null,null,['class'=>'form-control inputtags']) !!}--}}
                            {{--                                    </div>--}}
                            {{--                                </div>--}}

                            {{--                                <div class="form-group row mb-4">--}}
                            {{--                                    {!! Form::label('status','Status',['class'=>'col-form-label text-md-right col-12 col-md-3 col-lg-3']) !!}--}}
                            {{--                                    <div class="col-sm-12 col-md-7">--}}
                            {{--                                        {!! Form::select('status',[--}}

                            {{--                                           'publish'=>'Publish',--}}
                            {{--                                           'draft'=>'Draft',--}}
                            {{--                                           'pending'=>'Pending'--}}


                            {{--                                       ],1,['class'=>'form-control selectric']) !!}--}}

                            {{--                                    </div>--}}
                            {{--                                </div>--}}

                            <div class="form-group row mb-4">
                                {!! Form::label(null,null,['class'=>'col-form-label text-md-right col-12 col-md-3 col-lg-3']) !!}
                                <div class="col-sm-12 col-md-7">



                                    {!! Form::submit('Edit Post',['class'=>'btn btn-primary btn-action col-sm-2','style'=>'float: left;',]) !!}

                                    {!! Form::close() !!}



                                    {!! Form::open(['method'=>'DELETE','action'=>['AdminPostController@destroy',$post->id]]) !!}

                                    {!! Form::button('Delete Post',['type'=>'submit','class'=>'btn btn-danger btn-action col-sm-2','style'=>'float: left; margin-left: 1%']) !!}

                                    {!! Form::close() !!}

                                </div>


                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section>


@endsection