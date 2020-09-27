var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss')

        //admin
    .styles([
        'backend/app.min.css',
        'backend/izitoast/css/iziToast.min.css',
        'backend/datatables/datatables.min.css',
        'backend/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css',
        'backend/summernote/summernote-bs4.css',
        'backend/jquery-selectric/selectric.css',
        'backend/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
        'backend/style.css',
        'backend/components.css',
        'backend/custom.css'
    ],'./public/backend/css/libs.css')

        //users
        .styles([
            'frontendcss/open-iconic-bootstrap.min.css',
            'frontendcss/animate.css',
            'frontendcss/owl.carousel.min.css',
            'frontendcss/owl.theme.default.min.css',
            'frontendcss/magnific-popup.css',
            'frontendcss/aos.css',
            'frontendcss/ionicons.min.css',
            'frontendcss/bootstrap-datepicker.css',
            'frontendcss/jquery.timepicker.css',
            'frontendcss/flaticon.css',
            'frontendcss/icomoon.css',
            'frontendcss/style.css',
        ],'./public/frontend/css/libs.css')

        //users
        .scripts([
            'frontendjs/jquery.min.js',
            'frontendjs/jquery-migrate-3.0.1.min.js',
            'frontendjs/popper.min.js',
            'frontendjs/bootstrap.min.js',
            'frontendjs/jquery.easing.1.3.js',
            'frontendjs/jquery.waypoints.min.js',
            'frontendjs/jquery.stellar.min.js',
            'frontendjs/owl.carousel.min.js',
            'frontendjs/jquery.magnific-popup.min.js',
            'frontendjs/aos.js',
            'frontendjs/jquery.animateNumber.min.js',
            'frontendjs/scrollax.min.js',
            'frontendjs/google-map.js',
            'frontendjs/main.js',
        ],'./public/frontend/js/libs.js')



    //admin
    .scripts([
        'backend/app.min.js',
        'backend/izitoast/js/iziToast.min.js',
        'backend/datatables/datatables.min.js',
        'backend/datatables/DataTables-1.10.16/js/dataTables.bootstrap4.min.js',
        'backend/jquery-ui/jquery-ui.min.js',
        'backend/summernote/summernote-bs4.js',
        'backend/upload-preview/jquery.uploadPreview.min.js',
        'backend/jquery-selectric/jquery.selectric.min.js',
        'backend/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
        'backend/sweetalert/sweetalert.min.js',
        'backend/page/toastr.js',
        'backend/page/create-post.js',
        'backend/page/datatables.js',
        'backend/page/sweetalert.js',
        'backend/scripts.js',
        'backend/custom.js',
        'backend/page/advance-table.js',
        'backend/page/auth-register.js',
        'backend/page/calendar.js',
        'backend/page/chart-amchart.js',
        'backend/page/chart-apexcharts.js',
        'backend/page/chart-chartjs.js',
        'backend/page/chart-echarts.js',
        'backend/page/chart-morris.js',
        'backend/page/chat.js',
        'backend/page/ckeditor.js',
        'backend/page/contact.js',
        'backend/page/editable-table.js',
        'backend/page/form-wizard.js',
        'backend/page/forms-advanced-forms.js',
        'backend/page/gallery1.js',
        'backend/page/gmaps-advanced-route.js',
        'backend/page/gmaps-draggable-marker.js',
        'backend/page/gmaps-geocoding.js',
        'backend/page/gmaps-geolocation.js',
        'backend/page/gmaps-marker.js',
        'backend/page/gmaps-multiple-marker.js',
        'backend/page/gmaps-route.js',
        'backend/page/gmaps-simple.js',
        'backend/page/index.js',
        'backend/page/index2.js',
        'backend/page/ion-icons.js',
        'backend/page/light-gallery.js',
        'backend/page/multiple-upload.js',
        'backend/page/owl-carousel.js',
        'backend/page/portfolio.js',
        'backend/page/posts.js',
        'backend/page/sparkline.js',
        'backend/page/vector-map.js',
        'backend/page/widget-chart.js',
        'backend/page/widget-data.js'
        ],'./public/backend/js/libs.js')
});
