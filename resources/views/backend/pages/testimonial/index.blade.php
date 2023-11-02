@extends('backend.layouts.app')

@section('page.name', 'Testimonial')

@section('page.content')
<div class="card">
   <div class="card-body">
      <div class="row mb-2">
         <div class="col-sm-5">
            {{--<h3>List</h3>--}}
         </div>
         <div class="col-sm-7">
            <div class="text-sm-end">
                <a href="javascript:void(0);" class="btn btn-danger mb-2" onclick="smallModal('{{ url(route('testimonial.add')) }}', 'Add Testimonial')"><i class="mdi mdi-plus-circle me-2"></i> Add Testimonial</a>
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
                <th>Profile Image</th>
                <th>Designation</th>
                <th>Comment</th>
                <th>Rating</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @php $i = 1; @endphp
            @foreach($testimonial as $row)
            <tr>
                <td>{{$i++}}</td>
                <td>{{$row->name}}</td>
                <td>
                <a target="_blank" href="{{ asset('storage/' . $row->image) }}">
                    View
                </a>                
                <td>{{$row->designation}}</td>
                <td>{{$row->comment}}</td>
                <td>{{(int) $row->rating}}</td>
                <td>
                    @if($row->status)
                    <span class="badge bg-success" title="Inactive">Active</span>
                    @else
                    <span class="badge bg-danger" title="Active">Inctive</span>
                    @endif
                </td>
                <td>{{datetimeFormatter($row->created_at)}}</td>
                <td>
                    <a href="{{ url(route('testimonial.status', ['id' => $row->id, 'status' => ($row->status == '1') ? '0' : '1'])) }}" class="action-icon">
                        @if ($row->status == '1')
                            <i class="ri-eye-off-fill"></i>
                        @else
                            <i class="ri-eye-fill"></i>
                        @endif
                    </a>

                    <a href="javascript:void(0);" class="action-icon" onclick="smallModal('{{ url(route('testimonial.edit',['id' => $row->id])) }}', 'Edit Testimonial')"> <i class="mdi mdi-square-edit-outline" title="Edit"></i></a>

                    <a href="javascript:void(0);" class="action-icon" onclick="confirmModal('{{ url(route('testimonial.delete', $row->id)) }}', responseHandler)"><i class="mdi mdi-delete" title="Delete"></i></a>
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