<!DOCTYPE html>
<!-- saved from url=(0047)https://coderthemes.com/hyper/modern/index.html -->
<html lang="en" data-layout-mode="detached" data-topbar-color="dark" data-menu-color="light" data-sidenav-user="true" style="transition: background-color 0.15s ease 0s;" data-bs-theme="light" data-layout-position="fixed" data-sidenav-size="default" class="menuitem-active">


<head>
    
    <!-----Meta Information-------->
    @include('backend.partials.meta')

    <!--Stylesheets-->
    @include('backend.partials.css')

</head>

    <body class="show">
        <!-- Begin page -->
        <div class="wrapper">

            
            <!----------------------header-------------------->
            @include('backend.partials.header')

            <!----------------------Navbar--------------------->
            @include('backend.partials.sidebar')
            

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="content-page">
                <div class="content">

                    <!-- Start Content-->
                    <div class="container-fluid">

                        <!---------page header------->
                        <div class="row">
                            @yield('breadcrumb')
                        </div>

                        <!-------Page contain---------->
                        <div class="row">
                            @yield('content')
                        </div> <!-- end row -->

                    </div>
                    <!-- container -->

                </div>
                <!-- content -->

                <!-- Footer Start -->
                @include('backend.partials.footer')
                <!-- end Footer -->

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->

        </div>
        <!-- END wrapper -->

        <!----------------------theme settings--------------------->
        @include('backend.component.theme_settings')
        
        <!--javascript-->
        @include('backend.partials.js')

</body>

</html>