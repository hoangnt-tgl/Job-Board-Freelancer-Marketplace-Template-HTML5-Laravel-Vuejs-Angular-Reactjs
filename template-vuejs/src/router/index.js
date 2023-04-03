import {createRouter, createWebHistory} from 'vue-router';
import Index from '../views/frontend/Index'
import Index5 from '../views/frontend/Index5'
import Index4 from '../views/frontend/Index4'
import Index3 from '../views/frontend/Index3'
import Index2 from '../views/frontend/Index2'
import error404 from '../views/frontend/page/404page'
import About from '../views/frontend/page/about/about'
import Blankpage from '../views/frontend/page/blankpage'
import Blogdetail from '../views/frontend/blog/detail/detail'
import Bloggrid from '../views/frontend/blog/grid/grid'
import Bloglist from '../views/frontend/blog/list/list'
import Cancelledproject from '../views/frontend/employer/project/cancelledproject/cancelled'
import Completedproject from '../views/frontend/employer/project/completedproject/completed'
import Changepassword from '../views/frontend/employer/setting/changepassword'
import Chat from '../views/frontend/employer/chat/chat'
import Companydetail from '../views/frontend/employer/companydetail/companydetail'
import Companygallery from '../views/frontend/employer/companygallery/gallery'
import Companyprofile from '../views/frontend/employer/companyprofile/profile'
import Companyproject from '../views/frontend/employer/companyproject/project'
import Companyreview from '../views/frontend/employer/companyreview/review'
import Dashboard from '../views/frontend/employer/dashboard/dashboard'
import Deleteaccount from '../views/frontend/employer/setting/deleteaccount'
import Depositfund from '../views/frontend/employer/payment/depositfund'
import Developer from '../views/frontend/employer/freelancer/developer'
import Developerdetail from '../views/frontend/freelancer/developer/developedetail'
import Developerlist from '../views/frontend/employer/freelancer/developerlist'
import Developerprofile from '../views/frontend/freelancer/developer/developerprofile'
import Editproject from '../views/frontend/employer/editproject/editproject'
import Faq from '../views/frontend/employer/faq'
import Employeefavourite from '../views/frontend/employer/favourites/favourite'
import Employeeinvitedfavourites from '../views/frontend/employer/favourites/invitedfavourites'
import Employeefavouritelist from '../views/frontend/employer/favourites/favouritelist'
import Employeefile from '../views/frontend/employer/file/file'
import Forgotpassword from '../views/frontend/page/forgotpassword'
import Freelancercancelledproject from '../views/frontend/freelancer/project/cancelled'
import Freelancerchangepassword from '../views/frontend/freelancer/changepassword'
import Freelancerdeleteaccount from '../views/frontend/freelancer/deleteaccount'
import Freelancerchat from '../views/frontend/freelancer/chat'
import Freelancercompleted from '../views/frontend/freelancer/project/completed'
import Freelancerdashboard from '../views/frontend/freelancer/dashboard'
import Freelancerfavourites from '../views/frontend/freelancer/favourites'
import Freelancerfile from '../views/frontend/employer/freelancerfile'
import Freelancerinvitations from '../views/frontend/freelancer/invitations'
import Freelancerinvoices from '../views/frontend/page/freelancerinvoices'
import Freelancermembership from '../views/frontend/freelancer/membership'
import Freelancermilestone from '../views/frontend/employer/milestone'
import Freelancerongoing from '../views/frontend/freelancer/project/ongoing'
import Freelancerpayment from '../views/frontend/employer/freelancerpayment'
import Freelancerportfolio from '../views/frontend/freelancer/portfolio'
import Freelancerprofile from '../views/frontend/freelancer/profile'
import Freelancerprofilesettings from '../views/frontend/freelancer/profilesetting'
import Freelancerprojectproposal from '../views/frontend/freelancer/project/projectproposal'
import Freelancerpojectview from '../views/frontend/freelancer/review'
import Employeetask from '../views/frontend/employer/task'
import Freelancertransactionhistory from '../views/frontend/freelancer/transactionhistory'
import Freelancerverifyidentity from '../views/frontend/freelancer/verifyidentity'
import Employerviewprojectdetail from '../views/frontend/employer/viewprojectdetail'
import Freelancerwithdrawmoney from '../views/frontend/freelancer/withdrawmoney'
import Employerwithdrawmoney from '../views/frontend/employer/withdrawmoney'
import Viewproposal from '../views/frontend/page/viewproposal'
import Employeeviewprojectdetail from '../views/frontend/employer/employeeviewprojectdetail'
import Viewinvoice from '../views/frontend/page/viewinvoice'
import Verifyidentity from '../views/frontend/employer/verifyidentity'
import Useraccountdetails from '../views/frontend/employer/useraccountdetails'
import Termcondition from '../views/frontend/page/termcondition'
import Employertask from '../views/frontend/employer/task/task'
import Employerreview from '../views/frontend/employer/task/review'
import Frontendregister from '../views/frontend/register'
import Employeprojectproposal from '../views/frontend/page/projectproposal'
import Employeeprojectpayment from '../views/frontend/employer/projectpayment'
import Freelancerprojectdetail from '../views/frontend/freelancer/projectdetail'
import Freelancerproject from '../views/frontend/freelancer/project'
import Employeeprofilesetting from '../views/frontend/employer/profilesetting'
import Employeeprivacypolicy from '../views/frontend/page/privacypolicy'
import Employeeinvaitedlist from '../views/frontend/employer/invaitedlist'
import Employeelogin from '../views/frontend/page/login'
import Employermanageproject from '../views/frontend/employer/manageproject'
import Employermembershipplans from '../views/frontend/employer/membershipplans'
import Employermilestones from '../views/frontend/employer/milestones'
import Employeronboardscreen from '../views/frontend/employer/onboardscreen'
import Employeronboardscreenemployer from '../views/frontend/employer/onboardscreenemployer'
import Employerongoingprojects from '../views/frontend/employer/ongoingprojects'
import Employerpendingproject from '../views/frontend/employer/pendingproject'
import Employerpostjob from '../views/frontend/employer/postjob'
import Employerpostproject from '../views/frontend/employer/postproject'
/************Admin ***************/
import Adminactivities from '../views/admin/main/freelancer/activities'
import Adminbidfees from '../views/admin/main/freelancer/bidfees'
import Admincategories from '../views/admin/main/categories/categories'
import Adminchangepassword from '../views/admin/main/settings/changepassword'
import Admincomponents from '../views/admin/uiinterface/components'
import Admincontestentryfee from '../views/admin/main/categories/contestentryfee'
import Admincontestsfee from '../views/admin/main/categories/contestsfee'
import Admindatatable from '../views/admin/uiinterface/table/datatable'
import Admindeleteaccount from '../views/admin/main/settings/deleteaccount'
import Admindeposit from '../views/admin/main/deposit/deposit'
import Admindepositcancelled from '../views/admin/main/deposit/cancelled'
import Admindepositcompleted from '../views/admin/main/deposit/completed'
import Admindeposithold from '../views/admin/main/deposit/hold'
import Admindepositpending from '../views/admin/main/deposit/pending'
import Adminearningemployer from '../views/admin/main/report/earningemployer'
import Adminearningfreelancer from '../views/admin/main/report/earningfreelancer'
import Adminemailsetting from '../views/admin/main/settings/emailsetting'
import Adminemployeelist from '../views/admin/main/subscription/employeelist'
import Adminforgotpassword from '../views/admin/authentication/forgotpassword'
import Adminbasicinput from '../views/admin/uiinterface/form/basicinput'
import Adminformhorizontal from '../views/admin/uiinterface/form/horizontal'
import Adminforminputgroup from '../views/admin/uiinterface/form/inputgroup'
import Adminformmask from '../views/admin/uiinterface/form/mask'
import Adminformvalidation from '../views/admin/uiinterface/form/validation'
import Adminformvertical from '../views/admin/uiinterface/form/vertical'
import Adminfreelancelist from '../views/admin/main/subscription/freelancelist'
import Adminindex from '../views/admin/main/index'
import Adminlocalizationdetail from '../views/admin/main/settings/localizationdetails'
import Adminlogin from '../views/admin/authentication/login'
import Adminothersetting from '../views/admin/main/settings/othersetting'
import Adminpaymentsettings from '../views/admin/main/settings/paymentsettings'
import Adminprofile from '../views/admin/main/profile'
import Adminprofiletransaction from '../views/admin/main/freelancer/profiletransaction'
import Adminprojectbidding from '../views/admin/main/report/projectbidding'
import Adminprojectearning from '../views/admin/main/report/projectearning'
import Adminprojectinvoice from '../views/admin/main/report/projectinvoice'
import Adminprojects from '../views/admin/main/projects/project'
import Adminprojectfees from '../views/admin/main/projects/projectfees'
import Adminproviders from '../views/admin/main/providers/providers'
import Adminregister from '../views/admin/authentication/register'
import Adminreport from '../views/admin/main/report/reports'
import Adminrole from '../views/admin/main/role/role'
import Adminrolepermission from '../views/admin/main/role/rolespermission'
import Adminseosettings from '../views/admin/main/settings/seosettings'
import Adminsettings from '../views/admin/main/settings/settings'
import Adminskills from '../views/admin/main/skill/skill'
import Adminsociallinks from '../views/admin/main/settings/sociallinks'
import Adminsocialsettings from '../views/admin/main/settings/socialsettings'
import Adminsubcategory from '../views/admin/main/categories/subcategory'
import Adminsubscripefreelancer from '../views/admin/main/subscription/subscripefreelancer'
import Adminsubscription from '../views/admin/main/subscription/subscription'
import Admintablebasic from '../views/admin/uiinterface/table/tablebasic'
import Admintaxtype from '../views/admin/main/settings/taxtype'
import Admintransaction from '../views/admin/main/transaction/transaction'
import Admincompleted from '../views/admin/main/transaction/completed'
import Admintransactiondeposit from '../views/admin/main/transaction/deposit'
import Admintransactiononhold from '../views/admin/main/transaction/onhold'
import Admintransactionpending from '../views/admin/main/transaction/pending'
import Admintransactionwithdraw from '../views/admin/main/transaction/withdraw'
import Adminfreelanceruseractive from '../views/admin/main/freelancer/useractive'
import Adminuseradministrator from '../views/admin/main/freelancer/useradminitstrator'
import Admininactive from '../views/admin/main/freelancer/inactive'
import Adminuserprofile from '../views/admin/main/freelancer/userprofile'
import Adminusers from '../views/admin/main/freelancer/users'
import Adminsuspended from '../views/admin/main/freelancer/usersuspended'
import Adminverifyidentity from '../views/admin/main/verify/verifyidentity'
import Adminviewestimate from '../views/admin/main/viewestimate'
import Adminviewinvoice from '../views/admin/main/viewinvoice'
import Adminviewpriceemployee from '../views/admin/main/subscription/viewpriceemployee'
import Adminviewpricefreelance from '../views/admin/main/subscription/viewpricefreelance'
import Adminwithdrawn from '../views/admin/main/withdrawn/withdrawn'
import Adminmaincancelled from '../views/admin/main/withdrawn/cancelled'
import Adminmaincompleted from '../views/admin/main/withdrawn/completed'
import Adminmainpending from '../views/admin/main/withdrawn/pending'

const routes = [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index-five',
      name: 'index-five',
      component: Index5
    },
    {
      path: '/index-four',
      name: 'index-four',
      component: Index4
    },
    {
      path: '/index-three',
      name: 'index-three',
      component: Index3
    },
    {
      path: '/index-two',
      name: 'index-two',
      component: Index2
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/404-page',
      name: '404-page',
      component: error404
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/blank-page',
      name: 'blank-page',
      component: Blankpage
    },
    {
      path: '/blog-details',
      name: 'blog-details',
      component: Blogdetail
    },
    {
      path: '/blog-grid',
      name: 'blog-grid',
      component: Bloggrid
    },
    {
      path: '/blog-list',
      name: 'blog-list',
      component: Bloglist
    },
    {
      path: '/cancelled-projects',
      name: 'cancelled-projects',
      component: Cancelledproject
    },
    {
      path: '/completed-projects',
      name: 'completed-projects',
      component: Completedproject
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: Changepassword
    },
    {
      path: '/chats',
      name: 'chats',
      component: Chat
    },
    {
      path: '/company-details',
      name: 'company-details',
      component: Companydetail
    },
    {
      path: '/company-gallery',
      name: 'company-gallery',
      component: Companygallery
    },
    {
      path: '/company-profile',
      name: 'company-profile',
      component: Companyprofile
    },
    {
      path: '/company-project',
      name: 'company-project',
      component: Companyproject
    },
    {
      path: '/company-review',
      name: 'company-review',
      component: Companyreview
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/delete-account',
      name: 'delete-account',
      component: Deleteaccount
    },
    {
      path: '/deposit-funds',
      name: 'deposit-funds',
      component: Depositfund
    },
    {
      path: '/developer',
      name: 'developer',
      component: Developer
    },
    {
      path: '/developer-details',
      name: 'developer-details',
      component: Developerdetail
    },
    {
      path: '/developer-list',
      name: 'developer-list',
      component: Developerlist
    },
    {
      path: '/developer-profile',
      name: 'developer-profile',
      component: Developerprofile
    },
    {
      path: '/edit-project',
      name: 'edit-project',
      component: Editproject
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: Employeefavourite
    },
    {
      path: '/invited-favourites',
      name: 'invited-favourites',
      component: Employeeinvitedfavourites
    },
    {
      path: '/favourites-list',
      name: 'favourites-list',
      component: Employeefavouritelist
    },
    {
      path: '/files',
      name: 'files',
      component: Employeefile
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: Forgotpassword
    },
    {
      path: '/freelancer-cancelled-projects',
      name: 'freelancer-cancelled-projects',
      component: Freelancercancelledproject
    },
    {
      path: '/freelancer-change-password',
      name: 'freelancer-change-password',
      component: Freelancerchangepassword
    },
    {
      path: '/freelancer-chats',
      name: 'freelancer-chats',
      component: Freelancerchat
    },
    {
      path: '/freelancer-completed-projects',
      name: 'freelancer-completed-projects',
      component: Freelancercompleted
    },
    {
      path: '/freelancer-dashboard',
      name: 'freelancer-dashboard',
      component: Freelancerdashboard
    },
    {
      path: '/freelancer-delete-account',
      name: 'freelancer-delete-account',
      component: Freelancerdeleteaccount
    },
    {
      path: '/freelancer-favourites',
      name: 'freelancer-favourites',
      component: Freelancerfavourites
    },
    {
      path: '/freelancer-files',
      name: 'freelancer-files',
      component: Freelancerfile
    },
    {
      path: '/freelancer-invitations',
      name: 'freelancer-invitations',
      component: Freelancerinvitations
    },
    {
      path: '/freelancer-invoices',
      name: 'freelancer-invoices',
      component: Freelancerinvoices
    },
    {
      path: '/freelancer-membership',
      name: 'freelancer-membership',
      component: Freelancermembership
    },
    {
      path: '/freelancer-milestones',
      name: 'freelancer-milestones',
      component: Freelancermilestone
    },
    {
      path: '/freelancer-ongoing-projects',
      name: 'freelancer-ongoing-projects',
      component: Freelancerongoing
    },
    {
      path: '/freelancer-payment',
      name: 'freelancer-payment',
      component: Freelancerpayment
    },
    {
      path: '/freelancer-portfolio',
      name: 'freelancer-portfolio',
      component: Freelancerportfolio
    },
    {
      path: '/freelancer-profile',
      name: 'freelancer-profile',
      component: Freelancerprofile
    },
    {
      path: '/freelancer-profile-settings',
      name: 'freelancer-profile-settings',
      component: Freelancerprofilesettings
    },
    {
      path: '/freelancer-project-proposals',
      name: 'freelancer-project-proposals',
      component: Freelancerprojectproposal
    },
    {
      path: '/freelancer-review',
      name: 'freelancer-review',
      component: Freelancerpojectview
    },
    {
      path: '/freelancer-task',
      name: 'freelancer-task',
      component: Employeetask
    },
    {
      path: '/freelancer-transaction-history',
      name: 'freelancer-transaction-history',
      component: Freelancertransactionhistory
    },
    {
      path: '/freelancer-verify-identity',
      name: 'freelancer-verify-identity',
      component: Freelancerverifyidentity
    },
    {
      path: '/freelancer-view-project-detail',
      name: 'freelancer-view-project-detail',
      component: Employerviewprojectdetail
    },
    {
      path: '/freelancer-withdraw-money',
      name: 'freelancer-withdraw-money',
      component: Freelancerwithdrawmoney
    },
    {
      path: '/withdraw-money',
      name: 'withdraw-money',
      component: Employerwithdrawmoney
    },
    {
      path: '/view-proposals',
      name: 'view-proposals',
      component: Viewproposal
    },
    {
      path: '/view-project-detail',
      name: 'view-project-detail',
      component: Employeeviewprojectdetail
    },
    {
      path: '/view-invoice',
      name: 'view-invoice',
      component: Viewinvoice
    },
    {
      path: '/verify-identity',
      name: 'verify-identity',
      component: Verifyidentity
    },
    {
      path: '/user-account-details',
      name: 'user-account-details',
      component: Useraccountdetails
    },
    {
      path: '/term-condition',
      name: 'term-condition',
      component: Termcondition
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Employertask
    },
    {
      path: '/review',
      name: 'review',
      component: Employerreview
    },
    {
      path: '/register',
      name: 'register',
      component: Frontendregister
    },
    {
      path: '/project-proposals',
      name: 'project-proposals',
      component: Employeprojectproposal
    },
    {
      path: '/project-payment',
      name: 'project-payment',
      component: Employeeprojectpayment
    },
    {
      path: '/project-details',
      name: 'project-details',
      component: Freelancerprojectdetail
    },
    {
      path: '/project',
      name: 'project',
      component: Freelancerproject
    },
    {
      path: '/profile-settings',
      name: 'profile-settings',
      component: Employeeprofilesetting
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: Employeeprivacypolicy
    },
    {
      path: '/invaited-list',
      name: 'invaited-list',
      component: Employeeinvaitedlist
    },
    {
      path: '/login',
      name: 'login',
      component: Employeelogin
    },
    {
      path: '/manage-projects',
      name: 'manage-projects',
      component: Employermanageproject
    },
    {
      path: '/membership-plans',
      name: 'membership-plans',
      component: Employermembershipplans
    },
    {
      path: '/milestones',
      name: 'milestones',
      component: Employermilestones
    },
    {
      path: '/onboard-screen',
      name: 'onboard-screen',
      component: Employeronboardscreen
    },
    {
      path: '/onboard-screen-employer',
      name: 'onboard-screen-employer',
      component: Employeronboardscreenemployer
    },
    {
      path: '/ongoing-projects',
      name: 'ongoing-projects',
      component: Employerongoingprojects
    },
    {
      path: '/pending-projects',
      name: 'pending-projects',
      component: Employerpendingproject
    },
    {
      path: '/post-job',
      name: 'post-job',
      component: Employerpostjob
    },
    {
      path: '/post-project',
      name: 'post-project',
      component: Employerpostproject
    },


/***********Admin route *************/
    {
      path: '/admin/activities',
      name: '/admin/activities',
      component: Adminactivities
    },
    {
      path: '/admin/bid-fees',
      name: '/admin/bid-fees',
      component: Adminbidfees
    },
    {
      path: '/admin/categories',
      name: '/admin/categories',
      component: Admincategories
    },
    {
      path: '/admin/change-password',
      name: '/admin/change-password',
      component: Adminchangepassword
    },
    {
      path: '/admin/components',
      name: '/admin/components',
      component: Admincomponents
    },
    {
      path: '/admin/contest-entry-fees',
      name: '/admin/contest-entry-fees',
      component: Admincontestentryfee
    },
    {
      path: '/admin/contests-fees',
      name: '/admin/contests-fees',
      component: Admincontestsfee
    },
    {
      path: '/admin/data-tables',
      name: '/admin/data-tables',
      component: Admindatatable
    },
    {
      path: '/admin/delete-account',
      name: '/admin/delete-account',
      component: Admindeleteaccount
    },
    {
      path: '/admin/deposit',
      name: '/admin/deposit',
      component: Admindeposit
    },
    {
      path: '/admin/deposit-cancelled',
      name: '/admin/deposit-cancelled',
      component: Admindepositcancelled
    },
    {
      path: '/admin/deposit-completed',
      name: '/admin/deposit-completed',
      component: Admindepositcompleted
    },
    {
      path: '/admin/deposit-hold',
      name: '/admin/deposit-hold',
      component: Admindeposithold
    },
    {
      path: '/admin/deposit-pending',
      name: '/admin/deposit-pending',
      component: Admindepositpending
    },
    {
      path: '/admin/earning-employer',
      name: '/admin/earning-employer',
      component: Adminearningemployer
    },
    {
      path: '/admin/earning-freelancer',
      name: '/admin/earning-freelancer',
      component: Adminearningfreelancer
    },
    {
      path: '/admin/email-settings',
      name: '/admin/email-settings',
      component: Adminemailsetting
    },
    {
      path: '/admin/employe-list',
      name: '/admin/employe-list',
      component: Adminemployeelist
    },
    {
      path: '/admin/forgot-password',
      name: '/admin/forgot-password',
      component: Adminforgotpassword
    },
    {
      path: '/admin/form-basic-inputs',
      name: '/admin/form-basic-inputs',
      component: Adminbasicinput
    },
    {
      path: '/admin/form-horizontal',
      name: '/admin/form-horizontal',
      component: Adminformhorizontal
    },
    {
      path: '/admin/form-input-groups',
      name: '/admin/form-input-groups',
      component: Adminforminputgroup
    },
    {
      path: '/admin/form-mask',
      name: '/admin/form-mask',
      component: Adminformmask
    },
    {
      path: '/admin/form-validation',
      name: '/admin/form-validation',
      component: Adminformvalidation
    },
    {
      path: '/admin/form-vertical',
      name: '/admin/form-vertical',
      component: Adminformvertical
    },
    {
      path: '/admin/freelance-list',
      name: '/admin/freelance-list',
      component: Adminfreelancelist
    },
    {
      path: '/admin/index',
      name: '/admin/index',
      component: Adminindex
    },
    {
      path: '/admin/localization-details',
      name: '/admin/localization-details',
      component: Adminlocalizationdetail
    },
    {
      path: '/admin/login',
      name: '/admin/login',
      component: Adminlogin
    },
    {
      path: '/admin/others-settings',
      name: '/admin/others-settings',
      component: Adminothersetting
    },
    {
      path: '/admin/payment-settings',
      name: '/admin/payment-settings',
      component: Adminpaymentsettings
    },
    {
      path: '/admin/profile',
      name: '/admin/profile',
      component: Adminprofile
    },
    {
      path: '/admin/profile-transactions',
      name: '/admin/profile-transactions',
      component: Adminprofiletransaction
    },
    {
      path: '/admin/project-bidding',
      name: '/admin/project-bidding',
      component: Adminprojectbidding
    },
    {
      path: '/admin/project-earnings',
      name: '/admin/project-earnings',
      component: Adminprojectearning
    },
    {
      path: '/admin/project-invoice',
      name: '/admin/project-invoice',
      component: Adminprojectinvoice
    },
    {
      path: '/admin/projects',
      name: '/admin/projects',
      component: Adminprojects
    },
    {
      path: '/admin/projects-fees',
      name: '/admin/projects-fees',
      component: Adminprojectfees
    },
    {
      path: '/admin/providers',
      name: '/admin/providers',
      component: Adminproviders
    },
    {
      path: '/admin/register',
      name: '/admin/register',
      component: Adminregister
    },
    {
      path: '/admin/reports',
      name: '/admin/reports',
      component: Adminreport
    },
    {
      path: '/admin/roles',
      name: '/admin/roles',
      component: Adminrole
    },
    {
      path: '/admin/roles-permission',
      name: '/admin/roles-permission',
      component: Adminrolepermission
    },
    {
      path: '/admin/seo-settings',
      name: '/admin/seo-settings',
      component: Adminseosettings
    },
    {
      path: '/admin/settings',
      name: '/admin/settings',
      component: Adminsettings
    },
    {
      path: '/admin/skills',
      name: '/admin/skills',
      component: Adminskills
    },
    {
      path: '/admin/social-links',
      name: '/admin/social-links',
      component: Adminsociallinks
    },
    {
      path: '/admin/social-settings',
      name: '/admin/social-settings',
      component: Adminsocialsettings
    },
    {
      path: '/admin/sub-category',
      name: '/admin/sub-category',
      component: Adminsubcategory
    },
    {
      path: '/admin/subscripe-freelancer',
      name: '/admin/subscripe-freelancer',
      component: Adminsubscripefreelancer
    },
    {
      path: '/admin/subscription',
      name: '/admin/subscription',
      component: Adminsubscription
    },
    {
      path: '/admin/tables-basic',
      name: '/admin/tables-basic',
      component: Admintablebasic
    },
    {
      path: '/admin/tax-types',
      name: '/admin/tax-types',
      component: Admintaxtype
    },
    {
      path: '/admin/transaction',
      name: '/admin/transaction',
      component: Admintransaction
    },
    {
      path: '/admin/transaction-completed',
      name: '/admin/transaction-completed',
      component: Admincompleted
    },
    {
      path: '/admin/transaction-deposit',
      name: '/admin/transaction-deposit',
      component: Admintransactiondeposit
    },
    {
      path: '/admin/transaction-onhold',
      name: '/admin/transaction-onhold',
      component: Admintransactiononhold
    },
    {
      path: '/admin/transaction-pending',
      name: '/admin/transaction-pending',
      component: Admintransactionpending
    },
    {
      path: '/admin/transaction-withdraw',
      name: '/admin/transaction-withdraw',
      component: Admintransactionwithdraw
    },
    {
      path: '/admin/user-active',
      name: '/admin/user-active',
      component: Adminfreelanceruseractive
    },
    {
      path: '/admin/user-administrator',
      name: '/admin/user-administrator',
      component: Adminuseradministrator
    },
    {
      path: '/admin/user-inactive',
      name: '/admin/user-inactive',
      component: Admininactive
    },
    {
      path: '/admin/user-profile',
      name: '/admin/user-profile',
      component: Adminuserprofile
    },
    {
      path: '/admin/users',
      name: '/admin/users',
      component: Adminusers
    },
    {
      path: '/admin/user-suspended',
      name: '/admin/user-suspended',
      component: Adminsuspended
    },
    {
      path: '/admin/verify-identity',
      name: '/admin/verify-identity',
      component: Adminverifyidentity
    },
    {
      path: '/admin/view-estimate',
      name: '/admin/view-estimate',
      component: Adminviewestimate
    },
    {
      path: '/admin/view-invoice',
      name: '/admin/view-invoice',
      component: Adminviewinvoice
    },
    {
      path: '/admin/view-price-employe',
      name: '/admin/view-price-employe',
      component: Adminviewpriceemployee
    },
    {
      path: '/admin/view-price-freelance',
      name: '/admin/view-price-freelance',
      component: Adminviewpricefreelance
    },
    {
      path: '/admin/withdrawn',
      name: '/admin/withdrawn',
      component: Adminwithdrawn
    },
    {
      path: '/admin/withdrawn-cancelled',
      name: '/admin/withdrawn-cancelled',
      component: Adminmaincancelled
    },
    {
      path: '/admin/withdrawn-completed',
      name: '/admin/withdrawn-completed',
      component: Adminmaincompleted
    },
    {
      path: '/admin/withdrawn-pending',
      name: '/admin/withdrawn-pending',
      component: Adminmainpending
    },


];
export const router = createRouter({
    history: createWebHistory('template-vuejs'),
    linkActiveClass: 'active',
    routes
});