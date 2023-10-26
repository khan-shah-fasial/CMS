<!-- Vendor js -->
<script src="/assets/backend/js/vendor.min.js"></script>

<!-- jQuery UI js -->
<script src="/assets/backend/js/jquery-ui.min.js"></script>

<!-- jQuery resize js -->
<script src="/assets/backend/js/jquery-resizable.min.js"></script>

<!-- Daterangepicker js -->
<script src="/assets/backend/js/moment.min.js"></script>
<script src="/assets/backend/js/daterangepicker.js"></script>

<!-- Apex Charts js -->
<script src="/assets/backend/js/apexcharts.min.js"></script>

<!-- Vector Map js -->
<script src="/assets/backend/js/jquery-jvectormap-1.2.2.min.js"></script>
<script src="/assets/backend/js/jquery-jvectormap-world-mill-en.js"></script>

<!-- App js -->
<script src="/assets/backend/js/app.min.js"></script>

<!-- Datatables js -->
<script src="/assets/backend/js/jquery.dataTables.min.js"></script>
<script src="/assets/backend/js/dataTables.bootstrap5.min.js"></script>
<script src="/assets/backend/js/dataTables.responsive.min.js"></script>
<script src="/assets/backend/js/responsive.bootstrap5.min.js"></script>
<!--<script src="/assets/backend/js/fixedColumns.bootstrap5.min.js"></script>
<script src="/assets/backend/js/dataTables.fixedHeader.min.js"></script>-->
<script src="/assets/backend/js/dataTables.buttons.min.js"></script>
<script src="/assets/backend/js/buttons.bootstrap5.min.js"></script>
<script src="/assets/backend/js/buttons.html5.min.js"></script>
<script src="/assets/backend/js/buttons.flash.min.js"></script>
<script src="/assets/backend/js/buttons.print.min.js"></script>
<script src="/assets/backend/js/dataTables.keyTable.min.js"></script>
<script src="/assets/backend/js/dataTables.select.min.js"></script>
<script src="/assets/backend/js/demo.datatable-init.js"></script>

<!--jQuery Validate-->
<script src="/assets/backend/js/jquery.validate.min.js"></script>

<!--select2-->
<script src="/assets/backend/js/select2.full.min.js"></script>

<!--select2-->
<script src="/assets/backend/js/select2.min.js"></script>

<!-- toastr js -->
<script src="/assets/backend/js/toastr.min.js"></script>

<!-- trumbowyg js -->
<script src="/assets/backend/js/trumbowyg/trumbowyg.min.js"></script>
<script src="/assets/backend/js/trumbowyg/trumbowyg.upload.min.js"></script>
<script src="/assets/backend/js/trumbowyg/trumbowyg.table.min.js"></script>
<script src="/assets/backend/js/trumbowyg/trumbowyg.resizimg.min.js"></script>

<!--Init-->
<script src="/assets/backend/js/Init.js"></script>

<!--custom-->
@if(session()->has("success"))
    <script>
        Command: toastr["success"]('{{session("success")}}', "Success");
    </script>
@endif
