@extends('layouts.admin')

@section('content')

    <section class="section">
        @if(Session::has('create_media'))
            <div class="alert alert-success alert-dismissible show fade">
                <div class="alert-body">
                    <button class="close" data-dismiss="alert">
                        <span>&times;</span>
                    </button>
                    {{session('create_media')}}
                </div>
            </div>

        @elseif(Session::has('delete_media'))
            <div class="alert alert-success alert-dismissible show fade">
                <div class="alert-body">
                    <button class="close" data-dismiss="alert">
                        <span>&times;</span>
                    </button>
                    {{session('delete_media')}}
                </div>
            </div>
        @endif


        <div class="section-header">
            <div class="section-header-back">
                <a href="posts.html" class="btn btn-icon"><i class="fas fa-arrow-left"></i></a>
            </div>
            <h1>View All Medias</h1>
            <div class="section-header-breadcrumb">
                <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
                <div class="breadcrumb-item"><a href="#">Medias</a></div>
                <div class="breadcrumb-item">View All Medias</div>
            </div>
        </div>

        <div class="section-body">
            <div class="card">
                <div class="card-header">
                    <h4>Medias</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped" id="table-1">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>File</th>
                                <th>Created_at</th>
                                <th>Updated_at</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            @if($photos)
                                @foreach($photos as $photo)
                                    <tr>
                                        <th scope="row">{{$photo->id}}</th>
                                        <td><img alt="image" src="{{$photo->file}}" width="35"></td>
                                        <td>{{$photo->created_at->diffForHumans()}}</td>
                                        <td>
                                            @if(!empty($photo->updated_at))
                                                {{$photo->updated_at->diffForHumans()}}
                                            @else
                                                {{'Not updated yet'}}
                                            @endif
                                        </td>
                                        <td>
                                            {!! Form::open(['method'=>'DELETE','action'=>['AdminMediaController@destroy', $photo->id]]) !!}

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
    </section>

@endsection