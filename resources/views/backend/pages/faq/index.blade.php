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
      <table id="basic-datatable" class="table dt-responsive nowrap w-100">
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
            @foreach($faq as $row)
            <tr>
                <td>{{$row->id}}</td>
                <td>{{$row->question}}</td>
                <td>{{$row->answer}}</td>
                <td>
                    @if($row->status)
                    <span class="badge bg-success">Active</span>
                    @else
                    <span class="badge bg-success">Inctive</span>
                    @endif
                </td>
                <td>{{$row->created_at}}</td>
                <td>
                    <a href="javascript:void(0);" class="action-icon" onclick="smallModal('{{ url(route('backend.edit',['id' => $row->id])) }}', 'Edit Faq')"> <i class="mdi mdi-square-edit-outline"></i></a>
                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                </td>
            </tr>
            @endforeach
    </table>
      </div>
   </div>
   <!-- end card-body-->
</div>
@endsection

@section("page.scripts")
<script>
    //script here
</script>
@endsection