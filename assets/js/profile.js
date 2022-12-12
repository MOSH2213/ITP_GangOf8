var cbody = document.getElementById("cardconts");
function secss() {
    cbody.innerHTML = `
    <form action="#">
        <div class="row mt-n6">
        <div class="col-sm-6 mb-4 invisible">
            <label class="form-label">Security Question</label>
            <select class="form-control" name="choices-questions" id="choices-questions">
                <option value="Question 1">Question 1</option>
                <option value="Question 2">Question 2</option>
                <option value="Question 3">Question 3</option>
                <option value="Your Question" disabled>Your Question</option>
            </select>
        </div>
        <div class="col-sm-6 mb-4 invisible">
            <label class="form-label">Your Answer</label>
            <div class="input-group">
                <input class="form-control" type="text" placeholder="Enter your answer">
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <h6 class="mb-0">Security Settings</h6>
                </div>
                <div class="card-body p-3">
                    <div class="form-group d-flex align-items-center justify-content-between">
                        <span class="text-sm">Notify me via email when logging in</span>
                        <div class="form-check form-switch ms-3">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault30"
                                checked="" onchange="visible()">
                        </div>
                    </div>
                    <div class="form-group d-flex align-items-center justify-content-between">
                        <span class="text-sm">Send SMS confirmation for all online payments</span>
                        <div class="form-check form-switch ms-3">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault31"
                                onchange="visible()">
                        </div>
                    </div>
                    <div class="form-group d-flex align-items-center justify-content-between">
                        <span class="text-sm">Check which devices accessed your account</span>
                        <div class="form-check form-switch ms-3">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault32"
                                checked="" onchange="visible()">
                        </div>
                    </div>
                    <div class="form-group d-flex align-items-center justify-content-between">
                        <span class="text-sm">Find My Device, make sure your device can be found if it gets
                            lost</span>
                        <div class="form-check form-switch ms-3">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault33"
                                onchange="visible()">
                        </div>
                    </div>
                    <div class="form-group d-flex align-items-center justify-content-between">
                        <span class="text-sm">Lock your device with a PIN, pattern, or password</span>
                        <div class="form-check form-switch ms-3">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault34"
                                onchange="visible()">
                        </div>
                    </div>
                    <div class="form-group d-flex align-items-center justify-content-between">
                        <span class="text-sm">Manage what apps have access to app-usage data on your
                            device</span>
                        <div class="form-check form-switch ms-3">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault35"
                                checked="" onchange="visible()">
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-lg-8 col-12 actions text-end ms-auto">
                            <button class="btn btn-outline-primary btn-sm mb-0" type="reset">Cancel</button>
                            <button class="btn bg-gradient-primary btn-sm mb-0" type="button">Save
                                Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 mt-md-0 mt-4">
            <div class="card">
                <div class="card-header p-3 pb-0">
                    <div class="d-flex align-items-center">
                        <h6 class="mb-0">
                            Two factor authentication
                        </h6>
                        <button class="btn btn-sm bg-gradient-dark ms-auto mb-0">
                            Enable
                        </button>
                    </div>
                </div>
                <div class="card-body p-3">
                    <p class="text-muted text-sm mb-4 mt-sm-5 mt-3">
                        Two-factor authentication adds an additional
                        layer of security to your account by requiring more
                        than just a password to log in.
                    </p>
                    <div class="card">
                        <div class="card-body border-radius-lg bg-gradient-dark p-3">
                            <h6 class="mb-0 text-white">
                                Questions about security?
                            </h6>
                            <p class="text-white text-sm mb-4">
                                Have a question, concern, or comment
                                about security? Please contact us.
                            </p>
                            <button class="btn bg-gradient-light mb-0">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row gx-4 mt-4">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header p-3 pb-0">
                    <h6 class="mb-1">Change password</h6>
                    <p class="text-sm mb-0">
                        We will send you an email with the verification code.
                    </p>
                </div>
                <div class="card-body p-3">
                    <label class="form-label">Current password</label>
                    <div class="form-group">
                        <input class="form-control" type="password" placeholder="Current password">
                    </div>
                    <label class="form-label">New password</label>
                    <div class="form-group">
                        <input class="form-control" type="password" placeholder="New password">
                    </div>
                    <label class="form-label">Confirm new password</label>
                    <div class="form-group">
                        <input class="form-control" type="password" placeholder="Confirm password">
                    </div>
                    <button type="submit" class="btn bg-gradient-dark w-100 mb-0">Update password</button>
                </div>
            </div>
        </div>
        <div class="col-md-6 mt-md-0 mt-4">
            <div class="card">
                <div class="card-header p-3 pb-0">
                    <h6 class="mb-1">
                        Password requirements
                    </h6>
                    <p class="text-sm mb-0">
                        Please follow this guide for a strong password:
                    </p>
                </div>
                <div class="card-body p-3">
                    <ul class="text-muted ps-4 mb-0">
                        <li>
                            <span class="text-sm">One special characters</span>
                        </li>
                        <li>
                            <span class="text-sm">Min 6 characters</span>
                        </li>
                        <li>
                            <span class="text-sm">One number (2 are recommended)</span>
                        </li>
                        <li>
                            <span class="text-sm">Change it often</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </form>
    `;
}

function profiless() {
  cbody.innerHTML = `
    <form action="#">
        <div class="row" >
            <div class="col-md-8">
            <div class="card">
                <div class="card-header pb-0">
                <div class="d-flex align-items-center">
                    <p class="mb-0">Edit Profile</p>
                    <a href="security.html" class="btn btn-primary btn-sm ms-auto">Security</a>
                </div>
                </div>
                <div class="card-body" >
                <p class="text-uppercase text-sm">User Information</p>
                <div class="row">
                    <div class="col-md-6">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Username</label>
                        <input class="form-control" type="text" value="lucky.jesse" />
                    </div>
                    </div>
                    <div class="col-md-6">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Email address</label>
                        <input class="form-control" type="email" value="jesse@example.com" />
                    </div>
                    </div>
                    <div class="col-md-6">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">First name</label>
                        <input class="form-control" type="text" value="Jesse" />
                    </div>
                    </div>
                    <div class="col-md-6">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Last name</label>
                        <input class="form-control" type="text" value="Lucky" />
                    </div>
                    </div>
                </div>
                <hr class="horizontal dark" />
                <p class="text-uppercase text-sm">Contact Information</p>
                <div class="row">
                    <div class="col-md-12">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Address</label>
                        <input class="form-control" type="text"
                        value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">City</label>
                        <input class="form-control" type="text" value="New York" />
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Country</label>
                        <input class="form-control" type="text" value="United States" />
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Postal code</label>
                        <input class="form-control" type="text" value="437300" />
                    </div>
                    </div>
                </div>
                <hr class="horizontal dark" />
                <p class="text-uppercase text-sm">About me</p>
                <div class="row">
                    <div class="col-md-12">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">About me</label>
                        <input class="form-control" type="text"
                        value="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source." />
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary btn-sm ms-auto" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="col-md-4">
            <div class="card card-profile">
                <img src="assets/img/bg-profile.jpg" alt="Image placeholder" class="card-img-top" />
                <div class="row justify-content-center">
                <div class="col-4 col-lg-4 order-lg-2">
                    <div class="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                    <a href="javascript:;">
                        <img src="assets/img/team-2.jpg" class="rounded-circle img-fluid border border-2 border-white" />
                    </a>
                    </div>
                </div>
                </div>
                <div class="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
                <div class="d-flex justify-content-between">
                    <a href="javascript:;" class="btn btn-sm btn-info mb-0 d-none d-lg-block">Connect</a>
                    <a href="javascript:;" class="btn btn-sm btn-info mb-0 d-block d-lg-none"><i
                        class="ni ni-collection"></i></a>
                    <a href="javascript:;" class="btn btn-sm btn-dark float-right mb-0 d-none d-lg-block">Message</a>
                    <a href="javascript:;" class="btn btn-sm btn-dark float-right mb-0 d-block d-lg-none"><i
                        class="ni ni-email-83"></i></a>
                </div>
                </div>
                <div class="card-body pt-0">
                <div class="row">
                    <div class="col">
                    <div class="d-flex justify-content-center">
                        <div class="d-grid text-center">
                        <span class="text-lg font-weight-bolder">22</span>
                        <span class="text-sm opacity-8">Friends</span>
                        </div>
                        <div class="d-grid text-center mx-4">
                        <span class="text-lg font-weight-bolder">10</span>
                        <span class="text-sm opacity-8">Photos</span>
                        </div>
                        <div class="d-grid text-center">
                        <span class="text-lg font-weight-bolder">89</span>
                        <span class="text-sm opacity-8">Comments</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <h5>
                    Mark Davis<span class="font-weight-light">, 35</span>
                    </h5>
                    <div class="h6 font-weight-300">
                    <i class="ni location_pin mr-2"></i>Bucharest, Romania
                    </div>
                    <div class="h6 mt-4">
                    <i class="ni business_briefcase-24 mr-2"></i>Solution
                    Manager - Creative Tim Officer
                    </div>
                    <div>
                    <i class="ni education_hat mr-2"></i>University of
                    Computer Science
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    <form>
    `;
}
function msgss() {
  cbody.innerHTML = `
    <div class="row" >
    <div class="col-md-8">
      <div class="card">
        <div class="card-body" >
        <h1>ENTER ANY HERE</h1>
        </div>
      </div>
    </div>
  </div>`;
}
