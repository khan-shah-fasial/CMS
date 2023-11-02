@extends('backend.layouts.app') 

@section('page.name', 'contact')

@section('page.content')
<div class="card">
   <div class="card-body">
      <div class="row mb-2">
         <div class="col-sm-5">
            {{--<h3>List</h3>--}}
         </div>
        {{-- <div class="col-sm-7">
            <div class="text-sm-end">
                <a href="javascript:void(0);" class="btn btn-danger mb-2" onclick="largeModal('{{ url(route('contact.add')) }}', 'Add contact')"><i class="mdi mdi-plus-circle me-2"></i> Add contact</a>
            </div>
         </div> --}}
         <!-- end col-->
      </div>
      <div class="table-responsive">
      <table id="basic-datatable" class="table dt-responsive nowrap w-100">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No</th>
                {{--<th>Services</th>
                <th>Description</th>
                <th>Other Info</th>
                <th>Qualification</th>
                <th>CV</th>--}}
                <th>Page</th>
                <th>Section</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @php $i = 1; @endphp
            @foreach($contact as $row)
            <tr>
                <td>{{$i++}}</td>
                <td>{{$row->name}}</td>
                <td>{{$row->email}}</td>
                <td>{{$row->phone}}</td>
                {{--<td>{{$row->services}}</td>
                <td>{{$row->description}}</td>
                <td>{{$row->other_info}}</td>
                <td>{{$row->qualification}}</td>
                <td>
                    @if($row->cv)
                    <a target="_blank" href="{{ asset('storage/' . $row->cv) }}">
                        View
                    </a>
                    @endif
                </td>--}}
                <td>
                    <a target="_blank" href="{{$row->url}}">
                    {{$row->url}}
                    </a>
                </td>
                <td>{{$row->section}}</td>
                {{--
                <td>
                    @if($row->status)
                    <span class="badge bg-success">Active</span>
                    @else
                    <span class="badge bg-danger">Inctive</span>
                    @endif
                </td> 
                --}}
                <td>{{datetimeFormatter($row->created_at)}}</td>
                <td>
                    {{--
                    <a href="{{ url(route('contact.status', ['id' => $row->id, 'status' => ($row->status == '1') ? '0' : '1'])) }}" class="action-icon">
                        @if ($row->status == '1')
                            <i class="ri-eye-off-fill"></i>
                        @else
                            <i class="ri-eye-fill"></i>
                        @endif
                    </a>
                    --}}
                    <a href="javascript:void(0);" class="action-icon" onclick="largeModal('{{ url(route('contact.view',['id' => $row->id])) }}', 'View')"> <i class="mdi mdi-account-eye"></i></a>

                    {{--<a href="javascript:void(0);" class="action-icon" onclick="largeModal('{{ url(route('contact.edit',['id' => $row->id])) }}', 'Edit contact')"> <i class="mdi mdi-square-edit-outline"></i></a>--}}

                    <a href="javascript:void(0);" class="action-icon" onclick="confirmModal('{{ url(route('contact.delete', $row->id)) }}', responseHandler)"><i class="mdi mdi-delete"></i></a>
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