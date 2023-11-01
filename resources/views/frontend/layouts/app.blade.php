<!DOCTYPE html>
<html lang="en">

<head>

    <!----------Meta Information---------->
    @include('frontend.partials.meta')

    <!-----------Stylesheets------------>
    @include('frontend.partials.css')

</head>

<body>

    <!----=========topbar=========----->

    @include('frontend.partials.topbar')

    <!----=========End topbar=========----->





    <div class="mian_secrtion">
        <div class="container">
            <div class="row">

                <!---========sidebar======----->

                @include('frontend.partials.sidebar')

                <!---========end sidebar======----->

                <div class="col-lg-10 col-12 pd-0">

                    <!---========Header======----->

                    @include('frontend.partials.header')

                    <!---========end Header======----->

                    <!---======== page content ====-------->

                    @yield('page.content')

                    <!---======== page content ===== -------->

                    <!--------------------------Footer Start---------------------------------------------------------->

                    @include('frontend.partials.footer')

                    <!--Footer Ends-->

                </div>
            </div>
        </div>
    </div>


    <!--javascript-->
    @include('frontend.partials.js')
    @yield('page.scripts')
    @yield('component.scripts')

</body>

</html>