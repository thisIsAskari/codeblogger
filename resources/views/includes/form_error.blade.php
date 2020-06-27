
@if(count($errors) > 0)

    @foreach($errors->all() as $error)

        <div class="alert alert-danger alert-dismissible show fade">
            <div class="alert-body">
                <button class="close" data-dismiss="alert">
                    <span>&times;</span>
                </button>
                {{$error}}
            </div>
        </div>


    @endforeach

@endif