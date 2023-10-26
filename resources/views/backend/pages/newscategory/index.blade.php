@extends('backend.layouts.app') 

@section('page.name', 'News Category')

@section('page.content')
<div class="card">
   <div class="card-body">
      <div class="row mb-2">
         <div class="col-sm-5">
            <h3>List</h3>
         </div>
         <div class="col-sm-7">
            <div class="text-sm-end">
                <a href="javascript:void(0);" class="btn btn-danger mb-2" onclick="smallModal('{{ url(route('newscategory.add')) }}', 'Add News Category')"><i class="mdi mdi-plus-circle me-2"></i> Add News Category</a>
            </div>
         </div>
         <!-- end col-->
      </div>
      <div class="table-responsive">
      <table id="basic-datatable" class="table dt-responsive nowrap w-100">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach($newscategory as $row)
            <tr>
                <td>{{$row->id}}</td>
                <td>{{$row->name}}</td>
                <td>
                    @if($row->status)
                    <span class="badge bg-success">Active</span>
                    @else
                    <span class="badge bg-danger">Inctive</span>
                    @endif
                </td>
                <td>{{$row->created_at}}</td>
                <td>
                    <a href="{{ url(route('newscategory.status', ['id' => $row->id, 'status' => ($row->status == '1') ? '0' : '1'])) }}" class="action-icon">
                        @if ($row->status == '1')
                            <i class="ri-eye-off-fill"></i>
                        @else
                            <i class="ri-eye-fill"></i>
                        @endif
                    </a>

                    <a href="javascript:void(0);" class="action-icon" onclick="smallModal('{{ url(route('newscategory.edit',['id' => $row->id])) }}', 'Edit News Category')"> <i class="mdi mdi-square-edit-outline"></i></a>

                    <a href="javascript:void(0);" class="action-icon" onclick="confirmModal('{{ url(route('newscategory.delete', $row->id)) }}', responseHandler)"><i class="mdi mdi-delete"></i></a>
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
    var responseHandler = function(response) {
        location.reload();
    }
</script>
@endsection