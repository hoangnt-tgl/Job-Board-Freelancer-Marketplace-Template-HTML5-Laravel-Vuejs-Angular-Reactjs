<template>
    <div>
    <!-- Main Wrapper -->
    <div class="main-wrapper login-body">
        <div class="login-wrapper">
            <div class="container">
                <img class="img-fluid logo-dark mb-2" src="../../../assets/admin-img/logo-01.png" alt="Logo">
            
                <div class="loginbox"> 
                    <div class="login-right">
                        <div class="login-right-wrap">
                            <h1>Forgot Password?</h1>
                            <p class="account-subtitle">Enter your email to get a password reset link</p>
                            
                            <!-- Form -->
                            <form>
                                <div class="form-group form-focus">
                                    <input type="email" class="form-control floating">
                                    <label class="focus-label">Email</label>
                                </div>
                                <router-link to="/admin/login">
                                <div class="form-group mb-0">
                                    <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">FIND OUT PASSWORD</button>
                                </div>
                                </router-link>
                            </form>
                            <!-- /Form -->
                            <div class="row form-row login-foot">
                                <div class="col-lg-6 login-forgot">
                                    <router-link class="forgot-link" to="/admin/login">Sign In</router-link>
                                </div>
                                <div class="col-lg-6 dont-have">New to Kofejob? <router-link to="/admin/register">Join Now</router-link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Main Wrapper -->
    </div>
</template>
