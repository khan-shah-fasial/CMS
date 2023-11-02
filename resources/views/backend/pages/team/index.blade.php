@extends('backend.layouts.app')

@section('page.name', 'Team')

@section('page.content')
<div class="card">
   <div class="card-body">
      <div class="row mb-2">
         <div class="col-sm-5">
            <!--<h3>List</h3>-->
         </div>
         <div class="col-sm-7">
            <div class="text-sm-end">
                <a href="javascript:void(0);" class="btn btn-danger mb-2" onclick="largeModal('{{ url(route('team.add')) }}', 'Add Team')"><i class="mdi mdi-plus-circle me-2"></i> Add Team</a>
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
                <th>Designation</th>
                <th>Status</th>
                <th>Series</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @php $i = 1; @endphp
            @foreach($team as $row)
            <tr>
                <td>{{$i++}}</td>
                <td>{{$row->name}}</td>
                <td>{{$row->designation}}</td>
                <td>
                    @if($row->status)
                    <span class="badge bg-success">Active</span>
                    @else
                    <span class="badge bg-danger">Inctive</span>
                    @endif
                </td>
                <td>{{$row->series}}</td>
                <td>{{datetimeFormatter($row->created_at)}}</td>
                <td>
                    <a href="{{ url(route('team.status', ['id' => $row->id, 'status' => ($row->status == '1') ? '0' : '1'])) }}" class="action-icon">
                        @if ($row->status == '1')
                            <i class="ri-eye-off-fill" title="Inactive"></i>
                        @else
                            <i class="ri-eye-fill" title="Active"></i>
                        @endif
                    </a>

                    <a href="javascript:void(0);" class="action-icon" onclick="largeModal('{{ url(route('team.view',['id' => $row->id])) }}', 'View Team')"> <i class="mdi mdi-account-eye" title="View"></i></a>

                    <a href="javascript:void(0);" class="action-icon" onclick="largeModal('{{ url(route('team.edit',['id' => $row->id])) }}', 'Edit Team')"> <i class="mdi mdi-square-edit-outline" title="Edit"></i></a>

                    <a href="javascript:void(0);" class="action-icon" onclick="confirmModal('{{ url(route('team.delete', $row->id)) }}', responseHandler)"><i class="mdi mdi-delete" title="Delete"></i></a>
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