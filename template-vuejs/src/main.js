import { createApp } from 'vue';
import { router } from './router';
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap.bundle.min.js'
import './assets/plugins/aos/aos.css'
import './assets/plugins/aos/aos.js'
import './assets/plugins/fontawesome/css/fontawesome.min.css'
import './assets/plugins/fontawesome/css/all.min.css'
import App from "./App.vue";
import header from './views/frontend/header'
import footer from './views/frontend/footer'
import Employeeheader from './views/frontend/employer/header'
import Employeesidebar from './views/frontend/employer/sidebar'
import Accountheader from './views/frontend/employer/accountheader'
import Freelancerprojectheader from './views/frontend/freelancer/header'
import Freelancerprojectsidebar from './views/frontend/freelancer/sidebar'
import Adminheader from './views/admin/header'
import Adminsidebar from './views/admin/sidebar'
/************Breadcrumb ************/
import Breadcrumb from './views/frontend/breadcrumb/about'
import Breadcrumb1 from './views/frontend/breadcrumb/blankpage'
/************All components ************/
import Aboutdetail from './views/frontend/page/about/aboutdetail'
import Counter from './views/frontend/page/about/counter'
import Review from './views/frontend/page/about/review'
import Agency from './views/frontend/page/about/agency'
import Blogsidebar from './views/frontend/blog/blogsidebar'
import Blogdetailcontent from './views/frontend/blog/detail/detailcontent'
import Blogdetailcontent1 from './views/frontend/blog/detail/detailcontent1'
import Projecttab from './views/frontend/employer/project/projecttab'
import Settingtab from './views/frontend/employer/setting/settingtab'
import Chatleft from './views/frontend/employer/chat/chatleft'
import Chatright from './views/frontend/employer/chat/chatright'
import Employeemodal from './views/frontend/employer/modal'
import Companydetail1 from './views/frontend/employer/companydetail/detail1'
import Companydetailbanner from './views/frontend/employer/companydetail/banner'
import Companydetailtab from './views/frontend/employer/companydetail/tab'
import Tabcontent from './views/frontend/employer/companygallery/tabcontent'
import Companyprofilebanner from './views/frontend/employer/companyprofile/banner'
import Reviewcomment from './views/frontend/employer/companyreview/reviewcomment'
import Reviewcontent2 from './views/frontend/employer/companyreview/reviewcontent2'
import Reviewcontent1 from './views/frontend/employer/companyreview/reviewcontent1'
import Reviewcontent from './views/frontend/employer/companyreview/reviewcontent'
import Notificationdashboard from './views/frontend/employer/dashboard/notification'
import Plandetaildashboard from './views/frontend/employer/dashboard/plandetail'
import Earningdashboard from './views/frontend/employer/dashboard/earning'
import Widgetdashboard from './views/frontend/employer/dashboard/widget'
import Paymentwidget from './views/frontend/employer/payment/widget'
import Paymenttable from './views/frontend/employer/payment/table'
import Freelancerheader from './views/frontend/employer/freelancer/header'
import Freelancersidebar from './views/frontend/employer/freelancer/sidebar'
import Developersidebar from './views/frontend/freelancer/developer/developersidebar'
import Editcontent from './views/frontend/employer/editproject/editcontent'
import Employeetab from './views/frontend/employer/employeetab'
import Freelancerprojecttab from './views/frontend/freelancer/project/cancelled'
import Adminmodal from './views/admin/modal'

import Loader from './views/Loader'
import VueSelect from 'vue3-select2-component'
import jquery from 'jquery'; 
window.$ = jquery

if(window.location.href.includes("admin")) {
    require('./assets/css/feather.css');
    require('./assets/css/feather.min.js');
    require('./assets/plugins/select2/css/select2.min.css');
    require('./assets/plugins/select2/js/select2.min.js');
    require('./assets/css/bootstrap-datetimepicker.min.css');
    require('./assets/css/bootstrap-datetimepicker.min.js');
    require('./assets/css/admin.css');
    require('./assets/plugins/datatables/datatables.min.css')
    require('./assets/plugins/datatables/jquery.dataTables.min.js')
    require('./assets/css/slick.js')
    require('./assets/plugins/datatables/datatables.min.js')
  }else {
    require('./assets/css/style.css');
    require('./assets/plugins/datatables/datatables.min.css')
    require('./assets/plugins/datatables/jquery.dataTables.min.js')
    require('./assets/plugins/datatables/datatables.min.js')
    require('./assets/plugins/fancybox/jquery.fancybox.min.css')
    require('./assets/plugins/fancybox/jquery.fancybox.min.js')
    require('./assets/css/slick.js')
    require('./assets/plugins/bootstrap-tagsinput/css/bootstrap-tagsinput.css')
  }
  
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
const app = createApp(App)
app.component('layout-header', header)
app.component('layout-footer', footer)
app.component('loader', Loader);
app.component('layout-employeeheader', Employeeheader)
app.component('layout-employeesidebar', Employeesidebar)
app.component('layout-accountheader', Accountheader)
app.component('layout-freelancerprojectheader', Freelancerprojectheader)
app.component('layout-freelancerprojectsidebar', Freelancerprojectsidebar)
app.component('layout-adminheader', Adminheader)
app.component('layout-adminsidebar', Adminsidebar)

/*********Breadcrumn ***********/
app.component('breadcrumb', Breadcrumb);
app.component('Breadcrumb1', Breadcrumb1);

/*********All components *********/
app.component('aboutdetail', Aboutdetail);
app.component('counter', Counter);
app.component('review', Review);
app.component('agency', Agency);
app.component('blogsidebar', Blogsidebar);
app.component('detailcontent', Blogdetailcontent);
app.component('detailcontent1', Blogdetailcontent1);
app.component('projecttab', Projecttab);
app.component('settingtab', Settingtab);
app.component('chatleft', Chatleft);
app.component('chatright', Chatright);
app.component('employeemodal', Employeemodal);
app.component('companydetail1', Companydetail1);
app.component('companydetailbanner', Companydetailbanner);
app.component('companydetailtab', Companydetailtab);
app.component('companygallerytabcontent', Tabcontent);
app.component('companyprofilebanner', Companyprofilebanner);
app.component('reviewcomment', Reviewcomment);
app.component('companyreviewcontent2', Reviewcontent2);
app.component('companyreviewcontent1', Reviewcontent1);
app.component('companyreviewcontent', Reviewcontent);
app.component('notificationdashboard', Notificationdashboard);
app.component('plandetaildashboard', Plandetaildashboard);
app.component('earningdashboard', Earningdashboard);
app.component('dashboardwidget', Widgetdashboard);
app.component('paymentwidget', Paymentwidget);
app.component('paymenttable', Paymenttable);
app.component('freelancerheader', Freelancerheader);
app.component('freelancersidebar', Freelancersidebar);
app.component('freelancerdevelopersidebar', Developersidebar);
app.component('editprojectcontent', Editcontent);
app.component('employeefiletab', Employeetab);
app.component('freelancerprojecttab', Freelancerprojecttab);
app.component('adminmodal', Adminmodal);


app.component('vue-select', VueSelect);
app.use(router)
    .mount('#app');