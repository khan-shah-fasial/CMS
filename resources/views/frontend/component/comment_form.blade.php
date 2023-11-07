<!---------============== Comment form start ====================---------------------->
<div class="modal fade" id="comment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body ">
                <div class="career_popup_form">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <form class="contact_form" id="add_comment_form" action="{{url(route('comment.create'))}}" method="post" enctype="multipart/form-data">
                        @csrf
                        <h3 data-aos-once="true" data-aos="fade-up">Want to know more</h3>
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <div class="w-100">
							<textarea name="comment" class="form-control" placeholder="Write your thoughts..." rows="10" required></textarea>
                        </div>
                        </div>
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <input type="hidden" name="blog_id" value="{{ $detail->id }}"/>
                            <input type="hidden" name="status" value="0"/>
							
							<div class="w-100">
							<input type="text" name="name" class="form-control" placeholder="Name" data-aos-once="true" data-aos="fade-up" required/>
                            
							</div>
							
							<div class="w-100">
							<input type="email" name="email" class="form-control" placeholder="Email" data-aos-once="true" data-aos="fade-up" required/>
                            
							</div>
							
							<div class="w-100">
							<input type="number" name="number" class="form-control" placeholder="Phone No" data-aos-once="true" data-aos="fade-up" required/>
                       
							</div>
							
                             </div>

                        <div class="text-center mt-4">
                            <button type="submit" class="contact_form_button" data-aos-once="true" data-aos="fade-up">SEND</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</div>
<!---------============== Comment form end ====================---------------------->