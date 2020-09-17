@extends("layouts.admin")

@section('content')

    <!-- Main Content -->

    <section class="section">
        <div class="section-header">
            <div class="section-header-back">
                <a href="posts.html" class="btn btn-icon"><i class="fas fa-arrow-left"></i></a>
            </div>
            <h1>Add New Media</h1>
            <div class="section-header-breadcrumb">
                <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
                <div class="breadcrumb-item"><a href="#">Medias</a></div>
                <div class="breadcrumb-item">Add New Media</div>
            </div>
        </div>


        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">

                        @include('includes.form_error')

                        {!! Form::open(['method'=>'POST','action'=>'AdminMediaController@store','files'=>true]) !!}


                        <div class="card-header">
                            <h4>Add Your Media</h4>
                        </div>

                            <div class="form-group row mb-4">
                                {!! Form::label(null,'Media',['class'=>'col-form-label text-md-right col-12 col-md-3 col-lg-3']) !!}
                                <div class="col-sm-12 col-md-7">
                                    <div id="image-preview" class="image-preview" style="width: 80%; height: 600px;">
                                        {!! Form::label('image-upload','Choose File',['id'=>'image-label']) !!}
                                        {!! Form::file('file',['id'=>'image-upload']) !!}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-4">
                                {!! Form::label(null,null,['class'=>'col-form-label text-md-right col-12 col-md-3 col-lg-3']) !!}
                                <div class="col-sm-12 col-md-7">
                                    {!! Form::submit('Add Media',['class'=>'btn btn-primary']) !!}

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