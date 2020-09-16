@extends("layouts.admin")

@section('content')

    <!-- Main Content -->

        <section class="section">
            <div class="section-header">
                <div class="section-header-back">
                    <a href="posts.html" class="btn btn-icon"><i class="fas fa-arrow-left"></i></a>
                </div>
                <h1>Create New Post</h1>
                <div class="section-header-breadcrumb">
                    <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
                    <div class="breadcrumb-item"><a href="#">Posts</a></div>
                    <div class="breadcrumb-item">Create New Post</div>
                </div>
            </div>


            <div class="section-body">
                <div class="row">
                    <div class="col-12">
                        <div class="card">

                            @include('includes.form_error')

                            {!! Form::open(['method'=>'POST','action'=>'AdminPostController@store','files'=>true]) !!}


                            <div class="card-header">
                                <h4>Write Your Post</h4>
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
                                        {!! Form::select('category_id',$categories,1,['class'=>'form-control selectric']) !!}

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
                                        {!! Form::submit('Create Post',['class'=>'btn btn-primary']) !!}

                                    </div>
                                </div>
                            </div>

                            {!! Form::close() !!}
                        </div>
                    </div>
                </div>
            </div>
        </section>


@endsection