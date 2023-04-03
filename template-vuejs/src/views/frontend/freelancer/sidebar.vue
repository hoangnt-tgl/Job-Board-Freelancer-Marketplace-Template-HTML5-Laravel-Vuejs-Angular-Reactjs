<template>
   <div class="col-xl-3 col-md-4 theiaStickySidebar">
                            <div class="stickyside">
                            <div class="settings-widget">
                                <div class="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
                                    <router-link to="/freelancer-profile"><img alt="profile image" src="../../../assets/img/user/avatar-1.jpg" class="avatar-lg rounded-circle"></router-link>
                                    <div class="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
                                        <p class="mb-2">Welcome,</p>
                                        <h3 class="mb-0"><router-link to="/freelancer-profile">George Wells</router-link></h3>
                                        <p class="mb-0">@georgewell</p>
                                    </div>
                                </div>
                                <div class="settings-menu">
                                    <ul>
                                        <li class="nav-item">
                                            <router-link to="/freelancer-dashboard" class="nav-link">
                                                <i class="material-icons">verified_user</i> Dashboard
                                            </router-link>
                                        </li>
                                        <li class="nav-item" :class="{'active': currentPath === '/freelancer-completed-projects'}">
                                            <router-link to="/freelancer-project-proposals" class="nav-link" :class="currentPath == 'freelancer-completed-projects' ? 'active' : 'notactive'">
                                                <i class="material-icons">business_center</i> Projects
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/freelancer-favourites" class="nav-link">
                                                <i class="material-icons">local_play</i> Favourites
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/freelancer-review" class="nav-link">
                                                <i class="material-icons">record_voice_over</i> Reviews
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/freelancer-portfolio" class="nav-link">
                                                <i class="material-icons">pie_chart</i> Portfolio
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/freelancer-chats" class="nav-link">
                                                <i class="material-icons">chat</i> Messages
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/freelancer-membership" class="nav-link">
                                                <i class="material-icons">person_add</i> Membership
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/freelancer-verify-identity" class="nav-link">
                                                <i class="material-icons">person_pin</i> Verify Identity
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/freelancer-withdraw-money" class="nav-link">
                                                <i class="material-icons">wifi_tethering</i> Payments
                                            </router-link>
                                        </li>
                                        <li class="nav-item" :class="{'active': currentPath === '/freelancer-change-password' || currentPath === '/freelancer-delete-account'}">
                                            <router-link to="/freelancer-profile-settings" class="nav-link" :class="currentPath == 'freelancer-change-password' || currentPath === '/freelancer-delete-account' ? 'active' : 'notactive'">
                                                <i class="material-icons">settings</i>  Settings
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/" class="nav-link">
                                                <i class="material-icons">power_settings_new</i> Logout
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>	
                            </div>				
                        </div>
</template>
<script>
    export default {
        computed: {
            currentPath() {
                return this.$route.name;
            }
    
        },  
    mounted() {
      },
    data() {
        return {
          activeClass: 'active',
        };
                //  isactive : true
      },
    }
    </script>
