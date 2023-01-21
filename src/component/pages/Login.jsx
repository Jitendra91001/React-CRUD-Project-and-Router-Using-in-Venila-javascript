import React from "react";


function Login() {
    return (
        <>
            <div class="modal" id="jitendra" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Login Form</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            UserName:<br/>
                            <input type="email" className="form-control" placeholder="Enter you email"/>
                            Password:<br/>
                            <input type="password" className="form-control" placeholder="Enter you password"/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;