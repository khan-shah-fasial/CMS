@extends('frontend.layouts.app')

@section('page.content')

<!-------=================== search start ======================----------->

<!-- ---------------------- search Banner start -------------------- -->



<!-- ---------------------- search Card end -------------------- -->

<!-- ---------- service get in touch  start ---------------------- -->

@include('frontend.component.get_in_touch')

<!-- -------------- service get in touch  end ---------------------- -->

<!------------------ awards_section Start -------------------------->
@include('frontend.component.awards')
<!------------------ awards_section End -------------------------->

<!--------============== search end ================-------------->

@endsection