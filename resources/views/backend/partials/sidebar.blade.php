
            <!-- ========== Left Sidebar Start ========== -->
            <div class="leftside-menu menuitem-active">

                <!-- Brand Logo Light -->
                <a href="#" class="logo logo-light">
                    <span class="logo-lg">
                        <img src="/assets/images/logo.png" alt="logo">
                    </span>
                    <span class="logo-sm">
                        <img src="/assets/images/logo-sm.png" alt="small logo">
                    </span>
                </a>

                <!-- Brand Logo Dark -->
                <a href="#" class="logo logo-dark">
                    <span class="logo-lg">
                        <img src="/assets/images/logo-dark.png" alt="dark logo">
                    </span>
                    <span class="logo-sm">
                        <img src="/assets/images/logo-dark-sm.png" alt="small logo">
                    </span>
                </a>

                <!-- Sidebar Hover Menu Toggle Button -->
                <div class="button-sm-hover" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Show Full Sidebar" data-bs-original-title="Show Full Sidebar">
                    <i class="ri-checkbox-blank-circle-line align-middle"></i>
                </div>

                <!-- Full Sidebar Menu Close Button -->
                <div class="button-close-fullsidebar">
                    <i class="ri-close-fill align-middle"></i>
                </div>

                <!-- Sidebar -left -->
                <div class="h-100 show" id="leftside-menu-container" data-simplebar="init"><div class="simplebar-wrapper" style="margin: 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;"><div class="simplebar-content" style="padding: 0px;">
                    <!-- Leftbar User -->
                    <div class="leftbar-user">
                        <a href="#">
                            <img src="/assets/images/avatar-1.jpg" alt="user-image" height="42" class="rounded-circle shadow-sm">
                            <span class="leftbar-user-name mt-2">{{ auth()->user()->name }}</span>
                        </a>
                    </div>

                    <!--- Sidemenu -->
                    <ul class="side-nav">

                        <li class="side-nav-title">Navigation</li>

                        <li class="side-nav-item menuitem-active">
                            <a href="{{ route('backend.dashboard') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="uil-home-alt"></i>
                                {{--<span class="badge bg-success float-end">5</span>--}}
                                <span> Dashboards </span>
                            </a>
                        {{--<div class="collapse show" id="sidebarDashboards">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/dashboard-analytics.html">Analytics</a>
                                    </li>
                                    <li class="menuitem-active">
                                        <a href="https://coderthemes.com/hyper/modern/index.html" class="active">Ecommerce</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/dashboard-projects.html">Projects</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/dashboard-crm.html">CRM</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/dashboard-wallet.html">E-Wallet</a>
                                    </li>
                                </ul>
                            </div>
                        --}}
                        </li>

                        <li class="side-nav-item menuitem-active">
                            <a href="{{ route('practicearea.index') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-suitcase-line"></i> 
                                <span> Practice Area </span>
                            </a>
                        </li>
                        
                        <li class="side-nav-item menuitem-active">
                            <a href="{{ route('faq.index') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-questionnaire-line"></i> 
                                <span> FAQs </span>
                            </a>
                        </li>

                        <li class="side-nav-item menuitem-active">
                            <a href="{{ route('testimonial.index') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-discuss-line"></i>                                
                                <span> Testimonials </span>
                            </a>
                        </li>

                        <li class="side-nav-item menuitem-active">
                            <a href="{{ route('team.index') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-group-2-line"></i>                                
                                <span> Teams </span>
                            </a>
                        </li>

                        <li class="side-nav-item menuitem-active">
                            <a href="{{ route('award.index') }}" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="ri-award-fill"></i>                                
                                <span> Awards </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="{{ url('#sidebarEcommerce') }}" aria-expanded="false" aria-controls="sidebarEcommerce" class="side-nav-link">
                                <i class="ri-article-line"></i>
                                <span> Blogs </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarEcommerce">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="{{ route('blogs.index') }}">All Blogs</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('blogcategory.index') }}">Category</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('blogcomment.index') }}">Comment</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="{{ url('#sidebarEcommerce') }}" aria-expanded="false" aria-controls="sidebarEcommerce" class="side-nav-link">
                                <i class="ri-newspaper-line"></i>
                                <span> News </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarEcommerce">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="{{ route('news.index') }}">All News</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('newscategory.index') }}">Category</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        

                    {{-- <li class="side-nav-title">Apps</li>

                        <li class="side-nav-item">
                            <a href="https://coderthemes.com/hyper/modern/apps-calendar.html" class="side-nav-link">
                                <i class="uil-calender"></i>
                                <span> Calendar </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a href="https://coderthemes.com/hyper/modern/apps-chat.html" class="side-nav-link">
                                <i class="uil-comments-alt"></i>
                                <span> Chat </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarCrm" aria-expanded="false" aria-controls="sidebarCrm" class="side-nav-link">
                                <i class="uil uil-tachometer-fast"></i>
                                <span class="badge bg-danger text-white float-end">New</span>
                                <span> CRM </span>
                            </a>
                            <div class="collapse" id="sidebarCrm">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/crm-projects.html">Projects</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/crm-orders-list.html">Orders List</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/crm-clients.html">Clients</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/crm-management.html">Management</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" class="side-nav-link">
                                <i class="uil-store"></i>
                                <span> Ecommerce </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarEcommerce">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-ecommerce-products.html">Products</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-ecommerce-products-details.html">Products Details</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-ecommerce-orders.html">Orders</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-ecommerce-orders-details.html">Order Details</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-ecommerce-customers.html">Customers</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-ecommerce-shopping-cart.html">Shopping Cart</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-ecommerce-checkout.html">Checkout</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-ecommerce-sellers.html">Sellers</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarEmail" aria-expanded="false" aria-controls="sidebarEmail" class="side-nav-link">
                                <i class="uil-envelope"></i>
                                <span> Email </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarEmail">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-email-inbox.html">Inbox</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-email-read.html">Read Email</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarProjects" aria-expanded="false" aria-controls="sidebarProjects" class="side-nav-link">
                                <i class="uil-briefcase"></i>
                                <span> Projects </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarProjects">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-projects-list.html">List</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-projects-details.html">Details</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-projects-gantt.html">Gantt <span class="badge rounded-pill bg-light text-dark font-10 float-end">New</span></a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-projects-add.html">Create Project</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-item">
                            <a href="https://coderthemes.com/hyper/modern/apps-social-feed.html" class="side-nav-link">
                                <i class="uil-rss"></i>
                                <span> Social Feed </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarTasks" aria-expanded="false" aria-controls="sidebarTasks" class="side-nav-link">
                                <i class="uil-clipboard-alt"></i>
                                <span> Tasks </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarTasks">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-tasks.html">List</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-tasks-details.html">Details</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/apps-kanban.html">Kanban Board</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-item">
                            <a href="https://coderthemes.com/hyper/modern/apps-file-manager.html" class="side-nav-link">
                                <i class="uil-folder-plus"></i>
                                <span> File Manager </span>
                            </a>
                        </li>

                        <li class="side-nav-title">Custom</li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarPages" aria-expanded="false" aria-controls="sidebarPages" class="side-nav-link">
                                <i class="uil-copy-alt"></i>
                                <span> Pages </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarPages">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/pages-profile.html">Profile</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/pages-profile-2.html">Profile 2</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/pages-invoice.html">Invoice</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/pages-faq.html">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/pages-pricing.html">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/pages-maintenance.html">Maintenance</a>
                                    </li>
                                    <li class="side-nav-item">
                                        <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarPagesAuth" aria-expanded="false" aria-controls="sidebarPagesAuth">
                                            <span> Authentication </span>
                                            <span class="menu-arrow"></span>
                                        </a>
                                        <div class="collapse" id="sidebarPagesAuth">
                                            <ul class="side-nav-third-level">
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/pages-login.html">Login</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/pages-login-2.html">Login 2</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/pages-register.html">Register</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/pages-register-2.html">Register 2</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/pages-logout.html">Logout</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/pages-logout-2.html">Logout 2</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/pages-recoverpw.html">Recover Password</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/pages-recoverpw-2.html">Recover Password 2</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/pages-lock-screen.html">Lock Screen</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/pages-lock-screen-2.html">Lock Screen 2</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/pages-confirm-mail.html">Confirm Mail</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/pages-confirm-mail-2.html">Confirm Mail 2</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="side-nav-item">
                                        <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarPagesError" aria-expanded="false" aria-controls="sidebarPagesError">
                                            <span> Error </span>
                                            <span class="menu-arrow"></span>
                                        </a>
                                        <div class="collapse" id="sidebarPagesError">
                                            <ul class="side-nav-third-level">
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/pages-404.html">Error 404</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/pages-404-alt.html">Error 404-alt</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/pages-500.html">Error 500</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/pages-starter.html">Starter Page</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/pages-preloader.html">With Preloader</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/pages-timeline.html">Timeline</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-item">
                            <a href="https://coderthemes.com/hyper/modern/landing.html" target="_blank" class="side-nav-link">
                                <i class="uil-globe"></i>
                                <span class="badge text-bg-secondary float-end">New</span>
                                <span> Landing </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarLayouts" aria-expanded="false" aria-controls="sidebarLayouts" class="side-nav-link">
                                <i class="uil-window"></i>
                                <span> Layouts </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarLayouts">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/layouts-vertical.html" target="_blank">Vertical</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/layouts-horizontal.html" target="_blank">Horizontal</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/layouts-full.html" target="_blank">Full View</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/layouts-fullscreen.html" target="_blank">Fullscreen View</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/layouts-hover.html" target="_blank">Hover Menu</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/layouts-compact.html" target="_blank">Compact</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/layouts-icon-view.html" target="_blank">Icon View</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-title">Components</li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarBaseUI" aria-expanded="false" aria-controls="sidebarBaseUI" class="side-nav-link">
                                <i class="uil-box"></i>
                                <span> Base UI </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarBaseUI">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-accordions.html">Accordions &amp; Collapse</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-alerts.html">Alerts</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-avatars.html">Avatars</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-badges.html">Badges</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-breadcrumb.html">Breadcrumb</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-buttons.html">Buttons</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-cards.html">Cards</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-carousel.html">Carousel</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-dropdowns.html">Dropdowns</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-embed-video.html">Embed Video</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-grid.html">Grid</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-list-group.html">List Group</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-modals.html">Modals</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-notifications.html">Notifications</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-offcanvas.html">Offcanvas</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-placeholders.html">Placeholders</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-pagination.html">Pagination</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-popovers.html">Popovers</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-progress.html">Progress</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-ribbons.html">Ribbons</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-spinners.html">Spinners</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-tabs.html">Tabs</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-tooltips.html">Tooltips</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-links.html">Links</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-typography.html">Typography</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/ui-utilities.html">Utilities</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarExtendedUI" aria-expanded="false" aria-controls="sidebarExtendedUI" class="side-nav-link">
                                <i class="uil-package"></i>
                                <span> Extended UI </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarExtendedUI">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/extended-dragula.html">Dragula</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/extended-range-slider.html">Range Slider</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/extended-ratings.html">Ratings</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/extended-scrollbar.html">Scrollbar</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/extended-scrollspy.html">Scrollspy</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/extended-treeview.html">Treeview</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-item">
                            <a href="https://coderthemes.com/hyper/modern/widgets.html" class="side-nav-link">
                                <i class="uil-layer-group"></i>
                                <span> Widgets </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarIcons" aria-expanded="false" aria-controls="sidebarIcons" class="side-nav-link">
                                <i class="uil-streering"></i>
                                <span> Icons </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarIcons">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/icons-remixicons.html">Remix Icons</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/icons-mdi.html">Material Design</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/icons-unicons.html">Unicons</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarCharts" aria-expanded="false" aria-controls="sidebarCharts" class="side-nav-link">
                                <i class="uil-chart"></i>
                                <span> Charts </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarCharts">
                                <ul class="side-nav-second-level">
                                    <li class="side-nav-item">
                                        <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarApexCharts" aria-expanded="false" aria-controls="sidebarApexCharts">
                                            <span> Apex Charts </span>
                                            <span class="menu-arrow"></span>
                                        </a>
                                        <div class="collapse" id="sidebarApexCharts">
                                            <ul class="side-nav-third-level">
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-area.html">Area</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-bar.html">Bar</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-bubble.html">Bubble</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-candlestick.html">Candlestick</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-column.html">Column</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-heatmap.html">Heatmap</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-line.html">Line</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-mixed.html">Mixed</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-timeline.html">Timeline</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-boxplot.html">Boxplot</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-treemap.html">Treemap</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-pie.html">Pie</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-radar.html">Radar</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-radialbar.html">RadialBar</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-scatter.html">Scatter</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-polar-area.html">Polar Area</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-apex-sparklines.html">Sparklines</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="side-nav-item">
                                        <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarChartJSCharts" aria-expanded="false" aria-controls="sidebarChartJSCharts">
                                            <span> ChartJS </span>
                                            <span class="menu-arrow"></span>
                                        </a>
                                        <div class="collapse" id="sidebarChartJSCharts">
                                            <ul class="side-nav-third-level">
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-chartjs-area.html">Area</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-chartjs-bar.html">Bar</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-chartjs-line.html">Line</a>
                                                </li>
                                                <li>
                                                    <a href="https://coderthemes.com/hyper/modern/charts-chartjs-other.html">Other</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/charts-brite.html">Britecharts</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/charts-sparkline.html">Sparklines</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarForms" aria-expanded="false" aria-controls="sidebarForms" class="side-nav-link">
                                <i class="uil-document-layout-center"></i>
                                <span> Forms </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarForms">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/form-elements.html">Basic Elements</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/form-advanced.html">Form Advanced</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/form-validation.html">Validation</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/form-wizard.html">Wizard</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/form-fileuploads.html">File Uploads</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/form-editors.html">Editors</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarTables" aria-expanded="false" aria-controls="sidebarTables" class="side-nav-link">
                                <i class="uil-table"></i>
                                <span> Tables </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarTables">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/tables-basic.html">Basic Tables</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/tables-datatable.html">Data Tables</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarMaps" aria-expanded="false" aria-controls="sidebarMaps" class="side-nav-link">
                                <i class="uil-location-point"></i>
                                <span> Maps </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarMaps">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/maps-google.html">Google Maps</a>
                                    </li>
                                    <li>
                                        <a href="https://coderthemes.com/hyper/modern/maps-vector.html">Vector Maps</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarMultiLevel" aria-expanded="false" aria-controls="sidebarMultiLevel" class="side-nav-link">
                                <i class="uil-folder-plus"></i>
                                <span> Multi Level </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarMultiLevel">
                                <ul class="side-nav-second-level">
                                    <li class="side-nav-item">
                                        <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarSecondLevel" aria-expanded="false" aria-controls="sidebarSecondLevel">
                                            <span> Second Level </span>
                                            <span class="menu-arrow"></span>
                                        </a>
                                        <div class="collapse" id="sidebarSecondLevel">
                                            <ul class="side-nav-third-level">
                                                <li>
                                                    <a href="javascript: void(0);">Item 1</a>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);">Item 2</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="side-nav-item">
                                        <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarThirdLevel" aria-expanded="false" aria-controls="sidebarThirdLevel">
                                            <span> Third Level </span>
                                            <span class="menu-arrow"></span>
                                        </a>
                                        <div class="collapse" id="sidebarThirdLevel">
                                            <ul class="side-nav-third-level">
                                                <li>
                                                    <a href="javascript: void(0);">Item 1</a>
                                                </li>
                                                <li class="side-nav-item">
                                                    <a data-bs-toggle="collapse" href="https://coderthemes.com/hyper/modern/index.html#sidebarFourthLevel" aria-expanded="false" aria-controls="sidebarFourthLevel">
                                                        <span> Item 2 </span>
                                                        <span class="menu-arrow"></span>
                                                    </a>
                                                    <div class="collapse" id="sidebarFourthLevel">
                                                        <ul class="side-nav-forth-level">
                                                            <li>
                                                                <a href="javascript: void(0);">Item 2.1</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript: void(0);">Item 2.2</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>


                        <!-- Help Box -->
                        <div class="help-box text-white text-center">
                            <a href="javascript: void(0);" class="float-end close-btn text-white">
                                <i class="mdi mdi-close"></i>
                            </a>
                            <img src="./Dashboard _ Hyper - Responsive Bootstrap 5 Admin Dashboard_files/help-icon.svg" height="90" alt="Helper Icon Image">
                            <h5 class="mt-3">Unlimited Access</h5>
                            <p class="mb-3">Upgrade to plan to get access to unlimited reports</p>
                            <a href="javascript: void(0);" class="btn btn-secondary btn-sm">Upgrade</a>
                        </div>
                        <!-- end Help Box -->
                    --}}

                    </ul>
                    <!--- End Sidemenu -->

                    <div class="clearfix"></div>
                </div></div></div></div><div class="simplebar-placeholder" style="width: auto; height: 2064px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 240px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div></div>
            </div>
            <!-- ========== Left Sidebar End ========== -->