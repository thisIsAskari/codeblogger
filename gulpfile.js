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

    .styles([
     'app.min.css',
        'components.css',
        'style.css'
    ],'./public/css/libs.css')

    .scripts([
        'app.min.js',
        'custom.js',
        'scripts.js',
        'page/advance-table.js',
        'page/auth-register.js',
        'page/calendar.js',
        'page/chart-amchart.js',
        'page/chart-apexcharts.js',
        'page/chart-chartjs.js',
        'page/chart-echarts.js',
        'page/chart-morris.js',
        'page/chat.js',
        'page/ckeditor.js',
        'page/contact.js',
        'page/create-post.js',
        'page/datatables.js',
        'page/editable-table.js',
        'page/form-wizard.js',
        'page/forms-advanced-forms.js',
        'page/gallery1.js',
        'page/gmaps-advanced-route.js',
        'page/gmaps-draggable-marker.js',
        'page/gmaps-geocoding.js',
        'page/gmaps-geolocation.js',
        'page/gmaps-marker.js',
        'page/gmaps-multiple-marker.js',
        'page/gmaps-route.js',
        'page/gmaps-simple.js',
        'page/index,js',
        'page/index2.js',
        'page/ion-icons.js',
        'page/light-gallery.js',
        'page/multiple-upload.js',
        'page/owl-carousel.js',
        'page/portfolio.js',
        'page/posts.js',
        'page/sparkline.js',
        'page/sweetalert.js',
        'page/toastr,js',
        'page/vector-map.js',
        'page/widget-chart.js',
        'page/widget-data.js'
        ],'./public/js/libs.js')
});
