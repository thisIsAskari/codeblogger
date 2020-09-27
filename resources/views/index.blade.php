@extends('layouts.blog-home')

@section('content')

    <a href="single.html" class="img" style="background-image: url(images/image_8.jpg);"></a>
    <div class="text pt-4">
        <h3 class="mb-4"><a href="#">A Loving Heart is the Truest Wisdom</a></h3>
        <p class="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <div class="author mb-4 d-flex align-items-center">
            <a href="#" class="img" style="background-image: url(images/person_1.jpg);"></a>
            <div class="ml-3 info">
                <span>Written by</span>
                <h3><a href="#">Dave Lewis</a>, <span>June 28, 2019</span></h3>
            </div>
        </div>
        <div class="meta-wrap d-md-flex align-items-center">
            <div class="half order-md-last text-md-right">
                <p class="meta">
                    <span><i class="icon-heart"></i>3</span>
                    <span><i class="icon-eye"></i>100</span>
                    <span><i class="icon-comment"></i>5</span>
                </p>
            </div>
            <div class="half">
                <p><a href="#" class="btn btn-primary p-3 px-xl-4 py-xl-3">Continue Reading</a></p>
            </div>
        </div>
    </div>

@endsection