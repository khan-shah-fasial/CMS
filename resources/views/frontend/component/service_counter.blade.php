<!--------========================= service counter ===================-------------------------------->

<section class="counter_section">
    <div class="container">
        <div class="row">
            <div class="col-md-12" id="counter">
                <div class="row">
                    <div class="col-md-3 col-6">
                        <div class="about_counter_container" >
                            <div class="about_right_counter d-flex">
                                <div class="about_counter_icon">
                                    <div class="about_counter_img">
                                        <img src="/assets/frontend/images/trusted_icon.png" alt="counter 1"
                                            class="mb-4" />
                                    </div>
                                </div>
                                <div class="about_counter">
                                    <p class="about_counter_number">
                                        <span class="counter-value" data-count="{{ get_settings('c_exp') }}">0</span>+
                                    </p>
                                    <p class="about_counter_para">{{ get_settings('c_exp_title') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 second_counter">
                        <div class="about_counter_container" >
                            <div class="about_right_counter" data-aos="fade-up" data-aos-once="true">
                                <div class="about_counter_icon">
                                    <div class="about_counter_img">
                                        <img src="/assets/frontend/images/recovered_icons.png" alt="counter 1"
                                            class="mb-4" />
                                    </div>
                                </div>
                                <div class="about_counter">
                                    <p class="about_counter_number">
                                        <span class="counter-value" data-count="{{ get_settings('c_client') }}">0</span>+
                                    </p>
                                    <p class="about_counter_para">{{ get_settings('c_client_title') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 third_counter">
                        <div class="about_counter_container" >
                            <div class="about_right_counter aos-init aos-animate" data-aos="fade-up"
                                data-aos-once="true">
                                <div class="about_counter_icon">
                                    <div class="about_counter_img">
                                        <img src="/assets/frontend/images/certified_icons.png" alt="counter 1"
                                            class="mb-4" />
                                    </div>
                                </div>
                                <div class="about_counter">
                                    <p class="about_counter_number">
                                        <span class="counter-value" data-count="{{ get_settings('c_lic') }}">0</span>Bn+
                                    </p>
                                    <p class="about_counter_para">{{ get_settings('c_lic_title') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="about_counter_container" >
                            <div class="about_right_counter aos-init aos-animate" data-aos="fade-up"
                                data-aos-once="true">
                                <div class="about_counter_icon">
                                    <div class="about_counter_img">
                                        <img src="/assets/frontend/images/law_icons.png" alt="counter 1" class="mb-4" />
                                    </div>
                                </div>
                                <div class="about_counter">
                                    <p class="about_counter_number">
                                        <span class="counter-value" data-count="{{ get_settings('c_team') }}">0</span>+
                                    </p>
                                    <p class="about_counter_para">{{ get_settings('c_team_title') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!--------========================= end service counter ===================-------------------------------->