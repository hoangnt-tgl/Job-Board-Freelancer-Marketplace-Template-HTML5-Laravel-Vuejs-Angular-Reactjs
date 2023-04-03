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
								<h1>Welcome Back</h1>
								<p class="account-subtitle">Don't miss your next opportunity. Sign in to stay updated on your professional world.</p>
								
								<Form class="login" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
									<div class="form-group">
										<Field name="email" type="text" value="admin@example.com" class="form-control floating mt-2" :class="{ 'is-invalid': errors.email }" />
                                        <div class="invalid-feedback">{{errors.email}}</div>
                                        <div class="emailshow text-danger" id="email"></div>
									</div>
									<div class="form-group">
                                        <div class="pass-group">
											<Field name="password" type="password" value="123456" class="form-control floating pass-input mt-2" :class="{ 'is-invalid': errors.password }" /><span class="fa fa-eye-slash toggle-password pt-4"></span>
                                            <div class="invalid-feedback">{{errors.password}}</div>
                                            <div class="emailshow text-danger" id="password"></div>
										</div>
									</div>
									<div class="form-group">
										<label class="custom_check">
											<input type="checkbox" name="rem_password">
											<span class="checkmark"></span> Remember password
										</label>
									</div>
									<button class="btn btn-primary btn-block btn-lg login-btn" type="submit" value="Login">Login</button>
									<div class="login-or">
										<p>Or login with</p>
									</div>
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
								</form>
								
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
    import { router } from '../../../router';
    import VueRouter from 'vue-router'
    import { useStore } from 'vuex'
    import { Form, Field } from 'vee-validate';
    import * as Yup from 'yup';
    export default {
      components: {
            Form,
            Field,
        },
        mounted() {
        if($('.toggle-password').length > 0) {
        $(document).on('click', '.toggle-password', function() {
          $(this).toggleClass("fa-eye fa-eye-slash");
          var input = $(".pass-input");
          if (input.attr("type") == "password") {
            input.attr("type", "text");
          } else {
            input.attr("type", "password");
          }
        });
      }
      },
    setup() {
      let users = localStorage.getItem('storedData');
        if (users === null) {
          let password = [
            {
              email: 'admin@example.com',
              password: '123456',
            },
          ];
          const jsonData = JSON.stringify(password);
          localStorage.setItem('storedData', jsonData);
        }
         const schema = Yup.object().shape({
                email: Yup.string()
                    .required('Email is required')
                    .email('Email is invalid'),
                password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password is required'),
            });
        const onSubmit = (values) => {
        document.getElementById("email").innerHTML = ""
        document.getElementById("password").innerHTML = ""
        let data = localStorage.getItem('storedData');
          var Pdata= JSON.parse(data)
          const Eresult= Pdata.find(({ email }) => email === values.email);
         if (Eresult) {
          if (Eresult.password === values.password) {
          router.push('/admin/index')  
          } else {
              document.getElementById("password").innerHTML = "Incorrect password"
          }
        } else {
              document.getElementById("email").innerHTML = "Email is not valid"
        }
              };
            return {
                schema,
                onSubmit,
            };
    
        }
    
    
    }
    </script>
    