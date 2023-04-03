import { BehaviorSubject } from 'rxjs';

export class routes {
  private static Url = '';

  public static get baseUrl(): string {
    return this.Url;
  }
  public static get freelance(): string {
    return this.baseUrl + '/freelancer';
  }
  public static get employer(): string {
    return this.baseUrl + '/employer';
  }
  public static get pages(): string {
    return this.baseUrl + '/pages';
  }
  public static get blog(): string {
    return this.baseUrl + '/blog';
  }
  public static get auth(): string {
    return this.baseUrl + '/auth';
  }
  public static get admin(): string {
    return this.baseUrl + '/admin';
  }
  public static get home(): string {
    return this.baseUrl + '/home';
  }
  public static get home2(): string {
    return this.baseUrl + '/home2';
  }
  public static get home3(): string {
    return this.baseUrl + '/home3';
  }
  public static get home4(): string {
    return this.baseUrl + '/home4';
  }
  public static get home5(): string {
    return this.baseUrl + '/home5';
  }
  public static get freelancer(): string {
    return this.employer + '/developer';
  }
  public static get freelancerdetail(): string {
    return this.freelance + '/developers-details';
  }
  public static get employee_dashboard(): string {
    return this.employer + '/dashboard';
  }
  public static get employee_company_profile(): string {
    return this.employer + '/company-profile';
  }
  public static get employee_company_details(): string {
    return this.employer + '/company-details';
  }
  public static get employee_all_projects(): string {
    return this.employer + '/manage-projects/all-projects';
  }
  public static get employee_markedfavourites(): string {
    return this.employer + '/favourites/markedfavourites';
  }
  public static get employee_membership_plans(): string {
    return this.employer + '/membership-plans';
  }
  public static get employee_milestone(): string {
    return this.employer + '/milestones/milestone';
  }
  public static get employee_chat(): string {
    return this.employer + '/chats';
  }
  public static get employee_review(): string {
    return this.employer + '/review';
  }
  public static get employee_post_project(): string {
    return this.employer + '/post-project';
  }
  public static get employee_deposit_funds(): string {
    return this.employer + '/deposit-funds';
  }
  public static get employee_verify_identity(): string {
    return this.employer + '/verify-identity';
  }
  public static get employee_basic_settings(): string {
    return this.employer + '/profile-settings/basic-settings';
  }
  public static get freelancer_project(): string {
    return this.freelance + '/project';
  }
  public static get freelancer_project_details(): string {
    return this.freelance + '/project-details';
  }
  public static get freelancer_dashboard(): string {
    return this.freelance + '/dashboards';
  }
  public static get freelancer_projects_proposals(): string {
    return this.freelance + '/freelancer-projects/projects-proposals';
  }
  public static get freelancer_developer_profile(): string {
    return this.freelance + '/developer-profile';
  }
  public static get freelancer_favourite(): string {
    return this.freelance + '/freelancer-favourite/favourite';
  }
  public static get freelancer_membership(): string {
    return this.freelance + '/membership';
  }
  public static get freelancer_change_passwords(): string {
    return this.freelance + '/change-passwords';
  }
  public static get freelancer_message(): string {
    return this.freelance + '/message';
  }
  public static get freelancer_review(): string {
    return this.freelance + '/reviews';
  }
  public static get freelancer_portfolio(): string {
    return this.freelance + '/portfolio';
  }
  public static get freelancer_withdraw_money(): string {
    return this.freelance + '/freelancer-payments/withdraw-money';
  }
  public static get freelancer_verify_identitys(): string {
    return this.freelance + '/verify-identitys';
  }
  public static get freelancer_profiles_settings(): string {
    return this.freelance + '/freelancer-settings/profiles-settings';
  }
  public static get page_about(): string {
    return this.pages + '/about';
  }
  public static get page_blank_page(): string {
    return this.pages + '/blank-page';
  }
  public static get page_404(): string {
    return this.auth + '/404-page';
  }
  public static get freelancer_invoices(): string {
    return this.freelance + '/freelancer-payments/invoices';
  }
  public static get page_view_invoice(): string {
    return this.pages + '/view-invoice';
  }
  public static get login(): string {
    return this.auth + '/login';
  }
  public static get register(): string {
    return this.auth + '/register';
  }
  public static get freelancer_onboard(): string {
    return this.pages + '/onboard-screen';
  }
  public static get employer_onboard(): string {
    return this.pages + '/onboard-employer';
  }
  public static get forgot_password(): string {
    return this.auth + '/forgot-password';
  }
  public static get blog_list(): string {
    return this.blog + '/list';
  }
  public static get blog_grid(): string {
    return this.blog + '/grid';
  }
  public static get blog_details(): string {
    return this.blog + '/details';
  }

  // Admin Routing

  public static get admin_login(): string {
    return this.admin + '/auth/login';
  }
  public static get admin_dashboard(): string {
    return this.admin + '/dashboard';
  }
  public static get admin_categories(): string {
    return this.admin + '/categories';
  }
  public static get admin_projects(): string {
    return this.admin + '/projects';
  }
  public static get admin_freelancers_all(): string {
    return this.admin + '/freelancers/all';
  }
  public static get admin_deposit_history(): string {
    return this.admin + '/deposit/history';
  }
  public static get admin_withdrawn_history(): string {
    return this.admin + '/withdrawn/history';
  }
  public static get admin_transaction_all(): string {
    return this.admin + '/transaction/all';
  }
  public static get admin_providers(): string {
    return this.admin + '/providers';
  }
  public static get admin_subscription_employer(): string {
    return this.admin + '/subscription/employer';
  }
  public static get admin_reports_projects(): string {
    return this.admin + '/reports/projects';
  }
  public static get admin_roles(): string {
    return this.admin + '/roles';
  }
  public static get admin_skills(): string {
    return this.admin + '/skills';
  }
  public static get admin_verifyidentity(): string {
    return this.admin + '/verifyidentity';
  }
  public static get admin_settings_general(): string {
    return this.admin + '/settings/general';
  }
  public static get admin_components(): string {
    return this.admin + '/components';
  }
  public static get admin_forms_basic_inputs(): string {
    return this.admin + '/forms/basic-inputs';
  }
  public static get admin_forms_input_groups(): string {
    return this.admin + '/forms/input-groups';
  }
  public static get admin_forms_horizontal_forms(): string {
    return this.admin + '/forms/horizontal-forms';
  }
  public static get admin_forms_vertical_forms(): string {
    return this.admin + '/forms/vertical-forms';
  }
  public static get admin_form_mask(): string {
    return this.admin + '/forms/form-mask';
  }
  public static get admin_form_validation(): string {
    return this.admin + '/forms/form-validation';
  }
  public static get admin_tables_basic_tables(): string {
    return this.admin + '/tables/basic-tables';
  }
  public static get admin_tables_data_tables(): string {
    return this.admin + '/tables/data-tables';
  }

  
}
