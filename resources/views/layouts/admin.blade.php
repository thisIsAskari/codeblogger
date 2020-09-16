<!DOCTYPE html>
<html lang="en">


<!-- Mirrored from www.radixtouch.in/templates/logicswave/ality/source/light/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 16 Jan 2020 18:13:40 GMT -->
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">

    <title>Code Blogger Admin Panel</title>
    <!-- General CSS Files -->
{{--    <link rel="stylesheet" href="assets/css/app.min.css">--}}
{{--    <!-- Template CSS -->--}}
{{--    <link rel="stylesheet" href="assets/css/style.css">--}}
{{--    <link rel="stylesheet" href="assets/css/components.css">--}}
{{--    <!-- Custom style CSS -->--}}
{{--    <link rel="stylesheet" href="assets/css/custom.css">--}}
{{--    <link rel='shortcut icon' type='image/x-icon' href='assets/img/favicon.ico' />--}}
    <link href="{{asset('css/libs.css')}}" rel="stylesheet"/>
    <link href="{{asset('css/app.css')}}" rel="stylesheet"/>



</head>

<body>
<div class="loader"></div>
<div id="app">
    <div class="main-wrapper main-wrapper-1">
        <div class="navbar-bg"></div>
        <nav class="navbar navbar-expand-lg main-navbar">
            <div class="form-inline mr-auto">
                <ul class="navbar-nav mr-3">
                    <li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg collapse-btn"><i
                                    class="fas fa-bars"></i></a></li>
                    <li><a href="#" class="nav-link nav-link-lg fullscreen-btn">
                            <i class="fas fa-expand"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <ul class="navbar-nav navbar-right">
                <li class="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
                                                             class="nav-link nav-link-lg message-toggle beep"><i class="far fa-envelope"></i></a>
                    <div class="dropdown-menu dropdown-list dropdown-menu-right">
                        <div class="dropdown-header">Messages
                            <div class="float-right">
                                <a href="#">Mark All As Read</a>
                            </div>
                        </div>
                        <div class="dropdown-list-content dropdown-list-message">
                            <a href="#" class="dropdown-item">
                  <span class="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-1.png" class="rounded-circle">
                  </span>
                                <span class="dropdown-item-desc">
                    <span class="message-user">John Deo</span>
                    <span class="time messege-text">Please check your mail !!</span>
                    <span class="time text-primary">2 Min Ago</span>
                  </span>
                            </a>
                            <a href="#" class="dropdown-item">
                  <span class="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-2.png" class="rounded-circle">
                  </span>
                                <span class="dropdown-item-desc">
                    <span class="message-user">Sarah Smith</span>
                    <span class="time messege-text">Request for leave application</span>
                    <span class="time text-primary">5 Min Ago</span>
                  </span>
                            </a>
                            <a href="#" class="dropdown-item">
                  <span class="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-5.png" class="rounded-circle">
                  </span>
                                <span class="dropdown-item-desc">
                    <span class="message-user">Jacob Ryan</span>
                    <span class="time messege-text">Your payment invoice is generated.</span>
                    <span class="time text-primary">12 Min Ago</span>
                  </span>
                            </a>
                            <a href="#" class="dropdown-item">
                  <span class="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-4.png" class="rounded-circle">
                  </span>
                                <span class="dropdown-item-desc">
                    <span class="message-user">Lina Smith</span>
                    <span class="time messege-text">hii John, I have upload doc related to task.</span>
                    <span class="time text-primary">30 Min Ago</span>
                  </span>
                            </a>
                            <a href="#" class="dropdown-item">
                  <span class="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-3.png" class="rounded-circle">
                  </span>
                                <span class="dropdown-item-desc">
                    <span class="message-user">Jalpa Joshi</span>
                    <span class="time messege-text">Please do as specify. Let me know if you have any query.</span>
                    <span class="time text-primary">1 Days Ago</span>
                  </span>
                            </a>
                            <a href="#" class="dropdown-item">
                  <span class="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-2.png" class="rounded-circle">
                  </span>
                                <span class="dropdown-item-desc">
                    <span class="message-user">Sarah Smith</span>
                    <span class="time messege-text">Client Requirements</span>
                    <span class="time text-primary">2 Days Ago</span>
                  </span>
                            </a>
                        </div>
                        <div class="dropdown-footer text-center">
                            <a href="#">View All <i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </li>
                <li class="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
                                                             class="nav-link notification-toggle nav-link-lg beep"><i class="far fa-bell"></i></a>
                    <div class="dropdown-menu dropdown-list dropdown-menu-right">
                        <div class="dropdown-header">Notifications
                            <div class="float-right">
                                <a href="#">Mark All As Read</a>
                            </div>
                        </div>
                        <div class="dropdown-list-content dropdown-list-icons">
                            <a href="#" class="dropdown-item dropdown-item-unread">
                  <span class="dropdown-item-icon bg-primary text-white">
                    <i class="fas fa-code"></i>
                  </span>
                                <span class="dropdown-item-desc">
                    Template update is available now!
                    <span class="time text-primary">2 Min Ago</span>
                  </span>
                            </a>
                            <a href="#" class="dropdown-item">
                  <span class="dropdown-item-icon bg-info text-white">
                    <i class="far fa-user"></i>
                  </span>
                                <span class="dropdown-item-desc">
                    <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                    <span class="time">10 Hours Ago</span>
                  </span>
                            </a>
                            <a href="#" class="dropdown-item">
                  <span class="dropdown-item-icon bg-success text-white">
                    <i class="fas fa-check"></i>
                  </span>
                                <span class="dropdown-item-desc">
                    <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>
                    <span class="time">12 Hours Ago</span>
                  </span>
                            </a>
                            <a href="#" class="dropdown-item">
                  <span class="dropdown-item-icon bg-danger text-white">
                    <i class="fas fa-exclamation-triangle"></i>
                  </span>
                                <span class="dropdown-item-desc">
                    Low disk space. Let's clean it!
                    <span class="time">17 Hours Ago</span>
                  </span>
                            </a>
                            <a href="#" class="dropdown-item">
                  <span class="dropdown-item-icon bg-info text-white">
                    <i class="fas fa-bell"></i>
                  </span>
                                <span class="dropdown-item-desc">
                    Welcome to Ality template!
                    <span class="time">Yesterday</span>
                  </span>
                            </a>
                        </div>
                        <div class="dropdown-footer text-center">
                            <a href="#">View All <i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </li>
                <li class="dropdown"><a href="#" data-toggle="dropdown"
                                        class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                        <img alt="image" src="{{ Auth::user()->photo ? Auth::user()->photo->file : 'http://placehold.it/180x180' }}" class="user-img-radious-style">
                        <span class="d-sm-none d-lg-inline-block"></span></a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <div class="dropdown-title">Hello {{ Auth::user()->name }}</div>
                        <a href="profile.html" class="dropdown-item has-icon">
                            <i class="far fa-user"></i> Profile
                        </a>
                        <a href="timeline.html" class="dropdown-item has-icon">
                            <i class="fas fa-bolt"></i> Activities
                        </a>
                        <a href="#" class="dropdown-item has-icon">
                            <i class="fas fa-cog"></i> Settings
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="{{ url('/logout') }}" class="dropdown-item has-icon text-danger">
                            <i class="fas fa-sign-out-alt"></i> Logout
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
        <div class="main-sidebar sidebar-style-2">
            <aside id="sidebar-wrapper">
                <div class="sidebar-brand">
                    <a href="index.html">
                        <img alt="image" src="" class="header-logo" />
                        <span class="logo-name">Code Blogger</span>
                    </a>
                </div>
                <ul class="sidebar-menu">
                    <li class="menu-header">Main</li>
                    <li class="dropdown active">
                        <a href="/admin"><i class="fas fa-home"></i><span>Dashboard</span></a>
                    </li>
                    <li class="dropdown active">
                        <a href="" class="nav-link has-dropdown"><i class="fas fa-users"></i><span>Users</span></a>
                        <ul class="dropdown-menu">
                            <li class="active"><a class="nav-link" href="{{route('admin.user.index')}}">View All Users</a></li>
                            <li><a class="nav-link" href="{{route('admin.user.create')}}">Create User</a></li>
                        </ul>
                    </li>

                    <li class="dropdown active">
                        <a href="" class="nav-link has-dropdown"><i class="fas fa-edit"></i><span>Posts</span></a>
                        <ul class="dropdown-menu">
                            <li class="active"><a class="nav-link" href="{{route('admin.post.index')}}">View All Posts</a></li>
                            <li><a class="nav-link" href="{{route('admin.post.create')}}">Create Post</a></li>
                        </ul>
                    </li>

                    <li class="dropdown active">
                        <a href="" class="nav-link has-dropdown"><i class="fas fa-list-ul"></i><span>Categories</span></a>
                        <ul class="dropdown-menu">
                            <li class="active"><a class="nav-link" href="{{route('admin.category.index')}}">View All Categories</a></li>
                        </ul>
                    </li>



                </ul>
            </aside>
        </div>




        <!-- Main Content -->
        <div class="main-content">
                @yield('content')
        </div>



        <footer class="main-footer">
            <div class="footer-left">
                CodeBlogger.com-Copyright &copy; 2020 <div class="bullet"></div> Design By <a href="#">Askari</a>
            </div>
            <div class="footer-right">
            </div>
        </footer>

    </div>
</div>


<script src="{{asset('js/libs.js')}}"></script>

</body>


<!-- Mirrored from www.radixtouch.in/templates/logicswave/ality/source/light/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 16 Jan 2020 18:15:41 GMT -->
</html>