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
								<h1>Join Kofejob</h1>
								<p class="account-subtitle">Make the most of your professional life</p>
								<nav class="user-tabs mb-4">
									<ul role="tablist" class="nav nav-pills card-header-pills nav-justified">
										<li class="nav-item me-2">
											<a href="#developer" data-bs-toggle="tab" class="nav-link active mb-1">DEVELOPER</a>
										</li>
										<li class="nav-item">
											<a href="#company" data-bs-toggle="tab" class="nav-link mb-1">COMPANY</a>
										</li>
									</ul>
								</nav>
								<!-- Form -->
								<div class="tab-content pt-0">
									<div role="tabpanel" id="developer" class="tab-pane fade active show">
										<Form class="register" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
											<div class="form-group form-focus">
												<input type="email" class="form-control floating">
												<label class="focus-label">User Name</label>
											</div>
											<div class="form-group form-focus">
												<Field name="email" type="text" class="form-control floating mt-2" :class="{ 'is-invalid': errors.email }" />
                                                <div class="invalid-feedback">{{errors.email}}</div>
                                                <div class="emailshow text-danger" id="email"></div>
												<label class="focus-label">Email</label>
											</div>
											<div class="form-group form-focus">
												<Field name="password" type="password" class="form-control floating pass-input mt-2" :class="{ 'is-invalid': errors.password }" />
                                                <div class="invalid-feedback">{{errors.password}}</div>
                                                <div class="emailshow text-danger" id="password"></div>
												<label class="focus-label">Password</label>
											</div>	
											<div class="form-group form-focus">
												<Field name="confirmpassword" type="password" class="form-control floating pass-input mt-2" :class="{ 'is-invalid': errors.confirmpassword }" />
                                                <div class="invalid-feedback">{{errors.confirmpassword}}</div>
                                                <div class="emailshow text-danger" id="confirmpassword"></div>
												<label class="focus-label">Confirm Password</label>
											</div>
											<div class="dont-have">
												<p>You agree to the Kofejob <a href="javascript:void(0);">User Agreement,</a> <a href="javascript:void(0);">Privacy Policy,</a> and <a href="javascript:void(0);">Cookie Policy</a>.</p>
											</div>
											<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Agree to join</button>
											<div class="login-or">
											<p class="mb-0">Or login with</p>
										</div>
										<!-- /Form -->
									
										<!-- Social Login -->
										<div class="row form-row social-login">
											<div class="col-lg-4">
												<a href="javascript:void(0);" class="btn btn-twitter btn-block mb-1"> Twitter</a>
											</div>
											<div class="col-lg-4">
												<a href="javascript:void(0);" class="btn btn-facebook btn-block mb-1"> Facebook</a>
											</div>
											<div class="col-lg-4">
												<a href="javascript:void(0);" class="btn btn-google btn-block mb-1"> Google</a>
											</div>
										</div>
										<!-- /Social Login -->
										
										<div class="row form-row login-foot">
											<div class="col-lg-6 login-forgot">
												<router-link class="forgot-link" to="/admin/forgot-password">Forgot Password ?</router-link>
											</div>
											<div class="col-lg-6 dont-have">New to Kofejob? <router-link to="/admin/register">Click here</router-link></div>
										</div>
                                    </Form>
									</div>
									<div role="tabpanel" id="company" class="tab-pane fade">
										<Form class="register" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
											<div class="form-group form-focus">
												<input type="email" class="form-control floating">
												<label class="focus-label">User Name</label>
											</div>
											<div class="form-group form-focus">
												<Field name="email" type="text" class="form-control floating mt-2" :class="{ 'is-invalid': errors.email }" />
                                                <div class="invalid-feedback">{{errors.email}}</div>
                                                <div class="emailshow text-danger" id="email"></div>
												<label class="focus-label">Email</label>
											</div>
											<div class="form-group form-focus">
												<Field name="password" type="password" class="form-control floating pass-input mt-2" :class="{ 'is-invalid': errors.password }" />
                                                <div class="invalid-feedback">{{errors.password}}</div>
                                                <div class="emailshow text-danger" id="password"></div>
												<label class="focus-label">Password</label>
											</div>	
											<div class="form-group form-focus">
												<Field name="confirmpassword" type="password" class="form-control floating pass-input mt-2" :class="{ 'is-invalid': errors.confirmpassword }" />
                                                <div class="invalid-feedback">{{errors.confirmpassword}}</div>
                                                <div class="emailshow text-danger" id="confirmpassword"></div>
												<label class="focus-label">Confirm Password</label>
											</div>
											<div class="dont-have">
												<p>You agree to the Kofejob <a href="javascript:void(0);">User Agreement,</a> <a href="javascript:void(0);">Privacy Policy,</a> and <a href="javascript:void(0);">Cookie Policy</a>.</p>
											</div>
                                            <router-link to="/login">
											<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Agree TO JOIN</button>
                                        </router-link>
											<div class="login-or">
											<p class="mb-0">Or login with</p>
										</div>
										<!-- /Form -->
									
										<!-- Social Login -->
										<div class="row form-row social-login">
											<div class="col-4">
												<a href="javascript:void(0);" class="btn btn-twitter btn-block"> Twitter</a>
											</div>
											<div class="col-4">
												<a href="javascript:void(0);" class="btn btn-facebook btn-block"> Facebook</a>
											</div>
											<div class="col-4">
												<a href="javascript:void(0);" class="btn btn-google btn-block"> Google</a>
											</div>
										</div>
										<!-- /Social Login -->
										
										<div class="row form-row login-foot">
											<div class="col-lg-6 login-forgot">
												<router-link class="forgot-link" to="/admin/forgot-password">Forgot Password ?</router-link>
											</div>
											<div class="col-lg-6 dont-have">New to Kofejob? <router-link to="/admin/register">Click here</router-link></div>
										</div>
                                    </Form>
									</div>
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
<script>
    import { ref } from 'vue'
    import { useStore } from 'vuex'
    import { Form, Field } from 'vee-validate';
    import { router } from '../../../router';
    import VueRouter from 'vue-router'
    import * as Yup from 'yup';
    export default {
      components: {
            Form,
            Field,
        },
    setup() {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('Email is required')
                    .email('Email is invalid'),
                password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password is required'),
                confirmpassword: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Confirm password is required'),
            });
          const onSubmit = (values) => {   
          if(values.password === values.confirmpassword) {
          let Rawdata = localStorage.getItem('storedData');
          let Pdata= [];
          Pdata = JSON.parse(Rawdata);    
           const Eresult = Pdata.find(({ email }) => email == values.email);  
           if(Eresult){ 
            document.getElementById("email").innerHTML = "This email are already exist"
           } else {
              Pdata.push(values);
              const jsonData = JSON.stringify(Pdata);
              router.push('/admin/login')
              localStorage.setItem('storedData', jsonData);
            } 
          }  else {
            document.getElementById("confirmpassword").innerHTML = "Password not matching"
          }
        };
            return {
                schema,
                onSubmit
            };
    
        }
    
    
    }
    </script>
    