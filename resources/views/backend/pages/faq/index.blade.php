@extends('backend.layouts.app') <!--, [$pageInfo]-->

@section('page.content')
<div class="card">
   <div class="card-body">
      <div class="row mb-2">
         <div class="col-sm-5">
            <h3>List</h3>
         </div>
         <div class="col-sm-7">
            <div class="text-sm-end">
                <a href="javascript:void(0);" class="btn btn-danger mb-2" onclick="smallModal('{{ url(route('backend.add')) }}', 'Add Faq')"><i class="mdi mdi-plus-circle me-2"></i> Add Faq</a>
            </div>
         </div>
         <!-- end col-->
      </div>
      <div class="table-responsive">
      <table id="products-datatable_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer" style="width:100%">
        <thead>
            <tr>
                <th>#</th>
                <th>Question</th>
                <th>Answer</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>What is your name?</td>
                <td>rashid</td>
                <td><span class="badge bg-success">Active</span></td>
                <td>2011-04-25</td>
                <td>
                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-eye"></i></a>
                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                </td>
            </tr>
    </table>
      </div>
   </div>
   <!-- end card-body-->
</div>
@endsection