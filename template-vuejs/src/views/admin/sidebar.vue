<template>
    <div class="sidebar" id="sidebar">
        <div class="sidebar-inner slimscroll">
            <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
            <div id="sidebar-menu" class="sidebar-menu">
                <ul>
                    <li class="menu-title"><span>Main</span></li>
                    <li v-bind:class="{'active': currentPath == '/admin/index'}">
                        <router-link to="/admin/index"><i data-feather="home"></i> <span>Dashboard</span></router-link>
                    </li>
                    <li v-bind:class="{'active': currentPath == '/admin/categories' || currentPath == '/admin/sub-category'}">
                        <router-link to="/admin/categories"><i data-feather="copy"></i> <span>Categories</span></router-link>
                    </li>
                    <li v-bind:class="{'active': currentPath == '/admin/projects'}">
                        <router-link to="/admin/projects"><i data-feather="database"></i> <span>Projects</span></router-link>
                    </li>
                    <li v-bind:class="{'active': currentPath == '/admin/user-suspended' || currentPath == '/admin/users' || currentPath == '/admin/user-profile' || currentPath == '/admin/user-inactive' || currentPath == '/admin/user-administrator' || currentPath == '/admin/user-active' || currentPath == '/admin/activities' || currentPath == '/admin/profile-transactions'}">
                        <router-link to="/admin/users"><i data-feather="users"></i> <span>Freelancer</span></router-link>
                    </li>
                    <li v-bind:class="{'active': currentPath == '/admin/deposit-pending' || currentPath == '/admin/deposit-hold' || currentPath == '/admin/deposit' || currentPath == '/admin/deposit-cancelled'  || currentPath == '/admin/deposit-completed'}">
                        <router-link to="/admin/deposit"><i data-feather="user-check"></i> <span>Deposit</span></router-link>
                    </li>
                    <li v-bind:class="{'active': currentPath == '/admin/withdrawn-pending' || currentPath == '/admin/withdrawn-completed' || currentPath == '/admin/completed' || currentPath == '/admin/withdrawn' || currentPath == '/admin/withdrawn-cancelled'}">
                        <router-link to="/admin/withdrawn"><i data-feather="user-check"></i> <span>Withdrawn</span></router-link>
                    </li>
                    <li v-bind:class="{'active': currentPath == '/admin/transaction-withdraw' || currentPath == '/admin/transaction-pending' || currentPath == '/admin/transaction-onhold' || currentPath == '/admin/transaction-deposit' || currentPath == '/admin/transaction' || currentPath == '/admin/transaction-completed'}">
                        <router-link to="/admin/transaction"><i data-feather="clipboard"></i> <span>Transaction</span></router-link>
                    </li>
                    <li v-bind:class="{'active': currentPath == '/admin/providers'}">
                        <router-link to="/admin/providers"><i data-feather="user-check"></i> <span>Providers</span></router-link>
                    </li>
                    <li v-bind:class="{'active': currentPath == '/admin/view-price-freelance' || currentPath == '/admin/view-price-employe' || currentPath == '/admin/subscription' || currentPath == '/admin/subscripe-freelancer' || currentPath == '/admin/employe-list' || currentPath == '/admin/freelance-list'}">
                        <router-link to="/admin/subscription"><i data-feather="user-check"></i> <span>Subscription</span></router-link>
                    </li>
                    <li v-bind:class="{'active': currentPath == '/admin/reports' || currentPath == '/admin/project-invoice' || currentPath == '/admin/project-earnings' || currentPath == '/admin/project-bidding' || currentPath == '/admin/earning-employer' || currentPath == '/admin/earning-freelancer'}">
                        <router-link to="/admin/reports"><i data-feather="pie-chart"></i> <span>Reports</span></router-link>
                    </li>
                    <li v-bind:class="{'active': currentPath == '/admin/roles' || currentPath == '/admin/roles-permission'}">
                        <router-link to="/admin/roles"><i data-feather="clipboard"></i> <span>Roles</span></router-link>
                    </li>
                    <li v-bind:class="{'active': currentPath == '/admin/skills'}">
                        <router-link to="/admin/skills"><i data-feather="award"></i> <span>Skills</span></router-link>
                    </li>
                    <li v-bind:class="{'active': currentPath == '/admin/verify-identity'}">
                        <router-link to="/admin/verify-identity"><i data-feather="user-check"></i> <span>Verify Identity</span></router-link>
                    </li>
                    <li v-bind:class="{'active': currentPath == '/admin/tax-types' || currentPath == '/admin/social-settings' || currentPath == '/admin/social-links' || currentPath == '/admin/settings' || currentPath == '/admin/seo-settings' || currentPath == '/admin/payment-settings' || currentPath == '/admin/others-settings' || currentPath == '/admin/localization-details' || currentPath == '/admin/email-settings' || currentPath == '/admin/change-password' || currentPath == '/admin/delete-account'}">
                        <router-link to="/admin/settings"><i data-feather="settings"></i> <span>Settings</span></router-link>
                    </li>
                    <li class="menu-title"><span>UI Interface</span></li>
                    <li v-bind:class="{'active': currentPath == '/admin/components'}">
                        <router-link to="/admin/components"><i data-feather="pocket"></i> <span>Components</span></router-link>
                    </li>
                    <li class="submenu" v-bind:class="{'active': currentPath == '/admin/form-basic-inputs' || currentPath == '/admin/form-input-groups' || currentPath == '/admin/form-horizontal' || currentPath == '/admin/form-vertical' || currentPath == '/admin/form-mask' || currentPath == '/admin/form-validation'}">
                        <a href="javascript:void(0);"><i data-feather="file-minus"></i> <span> Forms</span> <span class="menu-arrow"></span></a>
                        <ul>
                            <li><router-link to="/admin/form-basic-inputs">Basic Inputs</router-link></li>
                            <li><router-link to="/admin/form-input-groups">Input Groups</router-link></li>
                            <li><router-link to="/admin/form-horizontal">Horizontal Form</router-link></li>
                            <li><router-link to="/admin/form-vertical">Vertical Form</router-link></li>
                            <li><router-link to="/admin/form-mask">Form Mask</router-link></li>
                            <li><router-link to="/admin/form-validation">Form Validation</router-link></li>
                        </ul>
                    </li>
                    <li class="submenu" v-bind:class="{'active': currentPath == '/admin/data-tables' || currentPath == '/admin/tables-basic'}">
                        <a href="javascript:void(0);"><i data-feather="align-justify"></i> <span> Tables</span> <span class="menu-arrow"></span></a>
                        <ul>
                            <li><router-link to="/admin/tables-basic">Basic Tables</router-link></li>
                            <li><router-link to="/admin/data-tables">Data Table</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </perfect-scrollbar>
        </div>
    </div>
</template>

<script>
    import {PerfectScrollbar}  from 'vue3-perfect-scrollbar'
    import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
    import feather from 'feather-icons'
    export default {
		components: {
		 PerfectScrollbar 
		},
		mounted() {

			feather.replace()
			$('#sidebar-menu a').on('click', function (e) {
			if ($(this).parent().hasClass('submenu')) {
				e.preventDefault();
			}
			if (!$(this).hasClass('subdrop')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('subdrop');
				$(this).next('ul').slideDown(350);
				$(this).addClass('subdrop');
			} else if ($(this).hasClass('subdrop')) {
				$(this).removeClass('subdrop');
				$(this).next('ul').slideUp(350);
			}
		});
		 
		$('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');

       
	
	$(document).on('mouseover', function (e) {
		e.stopPropagation();
		if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
			var targ = $(e.target).closest('.sidebar').length;
			if (targ) {
				$('body').addClass('expand-menu');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').removeClass('expand-menu');
				$('.subdrop + ul').slideUp();
			}
			return false;
		}
	});
	
		},
		computed: {
			currentPath() {
				return this.$route.name;
			},
			settingsPath() {
				return  this.$route.name == 'settings'  || this.$route.name == 'preferences' || this.$route.name == 'tax-types' || this.$route.name == 'expense-category' || this.$route.name == 'notifications' || this.$route.name == 'change-password' || this.$route.name == 'delete-account'
			}
		},
		  data() {
    return {
                settings: {
                    suppressScrollX: true,
                },
                activeClass: 'active',
            };
     

              //  isactive : true
    },
    methods: {
    scrollHanle(evt) {
      console.log(evt)
    }
  },
}
</script>
<style>
    .scroll-area {
      position: relative;
      margin: auto;
      height: calc(100vh - 60px);
      background-color: transparent !important;
  }
</style>
