import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable,BehaviorSubject,map } from "rxjs";
import { routes } from '../helpers/routes/routes';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  messages: any = '';
  message: BehaviorSubject<String>;
  
  private _listners = new Subject<any>();
  

  constructor(private http :HttpClient) {
    this.message = new BehaviorSubject(this.messages);
   }
   
  listen(): Observable<any> {
    return this._listners.asObservable();
  }
  nextmessage(data: any) {
    this.message.next(data);
  }

  filter(filterBy: any) {
    this._listners.next(filterBy);
  }
  public loadProject(): Observable<any> {
    return this.http.get('assets/json/adminProject.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public loadDashboardData(): Observable<any> {
    return this.http.get('assets/json/adminDashboard.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public loadCategoriesData(): Observable<any> {
    return this.http.get('assets/json/categoriesData.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public freelancerActiveData(): Observable<any> {
    return this.http.get('assets/json/freelanceractivedata.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public adminDepositList(): Observable<any> {
    return this.http.get('assets/json/adminDeposit.json').pipe(
      map((res: any) => {
      return res;
      })
    );
  }
  public subscriberEmployer(): Observable<any> {
    return this.http.get('assets/json/subscriberEmployer.json').pipe(
      map((res: any) => {
      return res;
      })
    );
  }
  public adminProviderList(): Observable<any> {
    return this.http.get('assets/json/adminProvider.json').pipe(
      map((res: any) => {
      return res;
      })
    );
  }
  public subscriberFreelancer(): Observable<any> {
    return this.http.get('assets/json/subscriberFreelancer.json').pipe(
      map((res: any) => {
      return res;
      })
    );
  }
  public adminEarning(): Observable<any> {
    return this.http.get('assets/json/adminEarning.json').pipe(
      map((res: any) => {
      return res;
      })
    );
  }
  public adminReports(): Observable<any> {
    return this.http.get('assets/json/adminReports.json').pipe(
      map((res: any) => {
      return res;
      })
    );
  }
  public adminRoleList(): Observable<any> {
    return this.http.get('assets/json/adminRoleList.json').pipe(
      map((res: any) => {
      return res;
      })
    );
  }
  public adminSkillList(): Observable<any> {
    return this.http.get('assets/json/adminSkillsList.json').pipe(
      map((res: any) => {
      return res;
      })
    );
  }
  public adminIdentityList(): Observable<any> {
    return this.http.get('assets/json/adminIdentityList.json').pipe(
      map((res: any) => {
      return res;
      })
    );
  }
  public socialLink(): Observable<any> {
    return this.http.get('assets/json/socialLink.json').pipe(
      map((res: any) => {
      return res;
      })
    );
  }
  public defaultData(): Observable<any> {
    return this.http.get('assets/json/defaultData.json').pipe(
      map((res: any) => {
      return res;
      })
    );
  }



  

  empprojects = [
    {
      id: 1,
      name:'Hannah Finn',
      image: 'assets/img/developer/developer-01.jpg',
      company: 'Dreamguystech',
      content: 'Website Designer Required For Directory Theme',
      type: 'Fixed',
      img : 'assets/img/en.png',
      days: '15',
      price: '500.00',
      day: '24',
      proposals: '5',
      viewproposals:false,
      viewdetails:true,
      date: '21 Jun 2021 '
      
    }, 
    {
      id: 2,
      name:'Hannah',
      image: 'assets/img/developer/developer-02.jpg',
      company: 'Dreamguystech',
      content: 'Landing Page Redesign / Sales Page Redesign (Not Entire Web)',
      type: 'Fixed',
      img : 'assets/img/en.png',
      days: '55',
      price: '500.00',
      day: '20',
      proposals: '5',
      viewproposals:true,
      viewdetails:false,
      date: '21 Jun 2021 '
    },
    {
      id: 3,
      name:'Hannah',
      image: 'assets/img/developer/developer-03.jpg',
      company: 'Dreamguystech',
      content: 'WooCommerce Product Page Back Up Restoration',
      type: 'Fixed',
      img : 'assets/img/en.png',
      days: '12',
      price: '500.00',
      day: '12',
      proposals: '5',
      date: '21 Jun 2021 ',
      viewproposals:false,
      viewdetails:true,
    },
    {
      id: 4,
      name:'Hannah',
      image: 'assets/img/developer/developer-04.jpg',
      company: 'Dreamguystech',
      content: 'PHP Laravel Developer Required (Contractual Employement)',
      type: 'Fixed',
      img : 'assets/img/en.png',
      days: '34',
      price: '500.00',
      day: '12',
      proposals: '5',
      date: '21 Jun 2021 ',
      viewproposals:false,
      viewdetails:true,
    },
    {
      id: 5,
      name:'Hannah',
      image: 'assets/img/developer/developer-01.jpg',
      company: 'Dreamguystech',
      content: 'Website Designer Required For Directory Theme',
      type: 'Fixed',
      img : 'assets/img/en.png',
      days: '22',
      price: '500.00',
      day: '12',
      proposals: '5',
      date: '21 Jun 2021 ',
      viewproposals:true,
      viewdetails:false,
    },
    {
      id: 6,
      name:'Hannah',
      image: 'assets/img/developer/developer-02.jpg',
      company: 'Dreamguystech',
      content: 'Laravel Backend Developer to finish ongoing project',
      type: 'Fixed',
      img : 'assets/img/en.png',
      days: '35',
      price: '500.00',
      day: '21',
      date: '21 Jun 2021 ',
      proposals: '5',
      viewproposals:true,
      viewdetails:false,
    },
    {
      id: 7,
      name:'Hannah',
      image: 'assets/img/developer/developer-03.jpg',
      company: 'Dreamguystech',
      content: 'WooCommerce Product Page Back Up Restoration',
      type: 'Fixed',
      img : 'assets/img/en.png',
      days: '12',
      price: '500.00',
      day: '12',
      proposals: '5',
      date: '21 Jun 2021 ',
      viewproposals:false,
      viewdetails:true,
    },
    {
      id: 8,
      name:'Hannah',
      image: 'assets/img/developer/developer-01.jpg',
      company: 'Dreamguystech',
      content: 'PHP Laravel Developer Required (Contractual Employement)',
      type: 'Fixed',
      img : 'assets/img/en.png',
      days: '34',
      price: '500.00',
      day: '13',
      proposals: '5',
      date: '21 Jun 2021 ',
      viewproposals:false,
      viewdetails:true,
    },
    {
      id: 9,
      name:'Hannah',
      image: 'assets/img/developer/developer-04.jpg',
      company: 'Dreamguystech',
      content: 'Website Designer Required For Directory Theme',
      type: 'Fixed',
      img : 'assets/img/en.png',
      days: '22',
      price: '500.00',
      day: '19',
      proposals: '5',
      date: '21 Jun 2021 ',
      viewproposals:true,
      viewdetails:false,
    },
    {
      id: 10,
      name:'Hannah',
      image: 'assets/img/developer/developer-02.jpg',
      company: 'Dreamguystech',
      content: 'Laravel Backend Developer to finish ongoing project',
      type: 'Fixed',
      img : 'assets/img/en.png',
      days: '35',
      price: '500.00',
      day: '15',
      proposals: '5',
      date: '21 Jun 2021 ',
      viewproposals:true,
      viewdetails:false,
    },
  ]
  public ManageUsers: BehaviorSubject<any> = new BehaviorSubject(this.empprojects);

  freelancer = [
    {
      id: 1,
      image: 'assets/img/user/avatar-1.jpg',
      name: 'George Wells',
      role: 'UI/UX Designer',
      city: 'Alabama, USA',
      rating: '4.7 (32)',
      role2: 'Web Design',
      role3: 'UI Design',
      role4: 'Node Js',
      price: '25 Hourly',
      viewlancer:true,
      viewfree:false
    },

    {
      id: 2,
      image: 'assets/img/user/avatar-2.jpg',
      name: 'Timothy Smith',
      role: 'PHP Developer',
      city: 'Illinois, USA',
      rating: '4.8 (55)',
      role2: 'Web Design',
      role3: 'Angular',
      role4: 'Node Js',
      price: '21 Hourly',
      viewlancer:true,
      viewfree:false
    },
    {
      id: 3,
      image: 'assets/img/user/avatar-3.jpg',
      name: 'Janet Paden',
      role: 'Graphic Designer',
      city: 'New York, USA',
      rating: '4.1 (30)',
      role2: 'Web Design',
      role3: 'UI Design',
      role4: 'Node Js',
      price: 'Free',
      viewlancer:false,
      viewfree:true
    },
    {
      id: 4,
      image: 'assets/img/user/avatar-4.jpg',
      name: 'James Douglas',
      role: 'iOS Developer',
      city: 'Florida, USA',
      rating: '3.2 (22)',
      role2: 'Web Design',
      role3: 'UI Design',
      role4: 'Node Js',
      price: 'Free',
      viewlancer:false,
      viewfree:true
    },
    {
      id: 5,
      image: 'assets/img/user/avatar-5.jpg',
      name: 'Floyd Lewis',
      role: 'SEO Developer',
      city: 'Texas, USA',
      rating: '4.9 (40)',
      role2: 'Web Design',
      role3: 'UI Design',
      role4: 'Node Js',
      price: '30 Hourly',
      viewlancer:true,
      viewfree:false
    },
    {
      id: 6,
      image: 'assets/img/user/avatar-6.jpg',
      name: 'Jacqueline Daye',
      role: 'SM Developer',
      city: 'California, USA',
      rating: '4.3 (35)',
      role2: 'Web Design',
      role3: 'UI Design',
      role4: 'Node Js',
      price: '12 Hourly',
      viewlancer:true,
      viewfree:false
    },
    {
      id: 7,
      image: 'assets/img/user/avatar-7.jpg',
      name: 'Crystal Kemper',
      role: 'Network Engineer',
      city: 'Maryland, USA',
      rating: '3.5 (28)',
      role2: 'Web Design',
      role3: 'UI Design',
      role4: 'Node Js',
      price: '20 Hourly',
      viewlancer:true,
      viewfree:false
    },
    {
      id: 8,
      image: 'assets/img/user/avatar-8.jpg',
      name: 'Tony Ingle',
      role: 'Business Analyst',
      city: 'Missouri, USA',
      rating: '2.1 (15)',
      role2: 'Web Design',
      role3: 'UI Design',
      role4: 'Node Js',
      price: 'Free',
      viewlancer:false,
      viewfree:true
    },
    {
      id: 9,
      image: 'assets/img/user/avatar-9.jpg',
      name: 'Mickey Bernier',
      role: 'QA Engineer',
      city: 'Colorado, USA',
      rating: '5.0 (4)',
      role2: 'Web Design',
      role3: 'UI Design',
      role4: 'Node Js',
      price: 'Free',
      viewlancer:false,
      viewfree:true
    },
    {
      id: 10,
      image: 'assets/img/user/avatar-10.jpg',
      name: 'Floyd Lewis',
      role: 'SEO Developer',
      city: 'Texas, USA',
      rating: '4.9 (40)',
      role2: 'Web Design',
      role3: 'UI Design',
      role4: 'Node Js',
      price: '30 Hourly',
      viewlancer:true,
      viewfree:false
    },
  ]
  public ManageUsers1: BehaviorSubject<any> = new BehaviorSubject(this.freelancer);


  public freeprojects = [
    {
      id: 1,
      img: 'assets/img/company/img-1.png',
      company: 'AMAZE TECH',
      role: 'UI/UX Developer ',
      ago: 'Just Now',
      city: 'Georgia, USA',
      role2: 'After Effects',
      role3: 'Illustrator',
      role4: 'HTML',
      price:'20',
      price2:'500',
      days: '5',
      proposal: '30',
      type:'Full Time'
    },
    {
      id: 2,
      img: 'assets/img/company/img-2.png',
      company: 'PARK INC',
      role: 'PHP Developer',
      ago: ' 1 min ago',
      city: 'California, USA',
      role2: 'Node Js',
      role3: 'Illustrator',
      role4: 'HTML',
      price:'90',
      price2:'450',
      days: '3',
      proposal: '35',
      type:'Full Time'
    },
    {
      id: 3,
      img: 'assets/img/company/img-3.png',
      company: 'TECH ZONE',
      role: 'Graphic Designer',
      ago: ' 30 mins ago',
      city: 'New York, USA',
      role2: 'After Effects',
      role3: 'React Js',
      role4: 'HTML',
      price:'15',
      price2:'350',
      days: '5',
      proposal: '30',
      type:'Part Time'
    },
    {
      id: 4,
      img: 'assets/img/company/img-4.png',
      company: 'ABC SOFTWARE ',
      role: 'iOS Developer',
      ago: ' 1 day ago',
      city: 'Florida, USA',
      role2: 'After Effects',
      role3: 'Illustrator',
      role4: 'HTML',
      price:'20',
      price2:'500',
      days: '5',
      proposal: '30',
      type:'Full Time'
    },
    {
      id: 5,
      img: 'assets/img/company/img-5.png',
      company: 'HOST TECHNOLOGIES',
      role: 'SEO Developer',
      ago: '3 days ago',
      city: 'Texas, USA',
      role2: 'Angular',
      role3: 'PHP',
      role4: 'HTML',
      price:'50',
      price2:'150',
      days: '5',
      proposal: '20',
      type:'Full Time'
    },
    {
      id: 6,
      img: 'assets/img/company/img-6.png',
      company: 'ALFRED TECH',
      role: 'SM Developer',
      ago: '1 week ago',
      city: 'Virginia, USA',
      role2: 'After Effects',
      role3: 'Illustrator',
      role4: 'HTML',
      price:'50',
      price2:'250',
      days: '3',
      proposal: '50',
      type:'Full Time'
    },
    {
      id: 7,
      img: 'assets/img/company/img-7.png',
      company: 'KIND SOFTWARES ',
      role: 'Network Engineer',
      ago: '3 weeks ago',
      city: 'Delaware, USA',
      role2: 'Network',
      role3: 'Illustrator',
      role4: 'HTML',
      price:'12',
      price2:'320',
      days: '2',
      proposal: '50',
      type:'Part Time'
    },
    {
      id: 8,
      img: 'assets/img/company/img-8.png',
      company: 'PARTICLES INC',
      role: 'Business Analyst',
      ago: ' 1 month ago',
      city: 'Kentucky, USA',
      role2: 'After Effects',
      role3: 'Illustrator',
      role4: 'HTML',
      price:'35',
      price2:'650',
      days: '1',
      proposal: '85',
      type:'Full Time'
    },
    {
      id: 9,
      img: 'assets/img/company/img-9.png',
      company: 'ALFRED TECH',
      role: 'SM Developer',
      ago: '1 week ago',
      city: 'Virginia, USA',
      role2: 'After Effects',
      role3: 'Illustrator',
      role4: 'HTML',
      price:'50',
      price2:'250',
      days: '3',
      proposal: '50',
      type:'Full Time'
    },
    {
      id: 10,
      img: 'assets/img/company/img-10.png',
      company: 'ABC SOFTWARE ',
      role: 'iOS Developer',
      ago: ' 1 day ago',
      city: 'Florida, USA',
      role2: 'After Effects',
      role3: 'Illustrator',
      role4: 'HTML',
      price:'20',
      price2:'500',
      days: '5',
      proposal: '30',
      type:'Full Time'
    },

  ]
  public ManageUsers3: BehaviorSubject<any> = new BehaviorSubject(this.freeprojects);

  public freelist = [
    {
      id:1,
      name: 'John Doe',
      company: 'Dreamguystech',
      image:'assets/img/developer/developer-01.jpg',
      content:'3D Renders and Amazon Product Store images/Video ',
      customer:'client',
      amount: '599.00',
      date1: 'October 10,2021',
      level: 'FIXED',
      type: 'Hourly',
      money: '500.00',
      days: '12 Days',
      date: 'October 10,2021',
      review: '4',
      para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At diam sit erat et eros. Et cursus tellus viverra adipiscing suspendisse. Semper arcu est eget eleifend. Faucibus elit massa sollicitudin elementum ut feugiat nunc ac. Turpis quam sed in sed curabitur netus laoreet. In tortor neque sapien praesent porttitor cursus sed cum....',
    },
    {
      id:2,
      name: 'Danie S.',
      company: 'Dreamguystech',
      image:'assets/img/developer/developer-02.jpg',
      content:'Landing Page Redesign / Sales Page Redesign (Not Entire Web)',
      customer:'product',
      amount: '300.00',
      level: 'FIXED',
      date1: 'October 10,2021',
      type: 'Hourly',
      money: '200.00',
      days: '12 Days',
      date: 'October 10,2021',
      review: '4',
      para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At diam sit erat et eros. Et cursus tellus viverra adipiscing suspendisse. Semper arcu est eget eleifend. Faucibus elit massa sollicitudin elementum ut feugiat nunc ac. Turpis quam sed in sed curabitur netus laoreet. In tortor neque sapien praesent porttitor cursus sed cum....',

    },
    {
      id:3,
      name: 'Thomas George',
      company: 'Dreamguystech',
      image:'assets/img/developer/developer-03.jpg',
      content:'WooCommerce Product Page Back Up Restoration',
      customer:'client',
      amount: '200.00',
      date1: 'October 10,2021',
      level: 'FIXED',
      type: 'Hourly',
      money: '600.00',
      date: 'October 10,2021',
      review: '4',
      days: '12 Days',
      para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At diam sit erat et eros. Et cursus tellus viverra adipiscing suspendisse. Semper arcu est eget eleifend. Faucibus elit massa sollicitudin elementum ut feugiat nunc ac. Turpis quam sed in sed curabitur netus laoreet. In tortor neque sapien praesent porttitor cursus sed cum....',

    },
    {
      id:4,
      name: 'John paul',
      company: 'Dreamguystech',
      image:'assets/img/developer/developer-04.jpg',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      customer:'client',
      amount: '600.00',
      date1: 'October 10,2021',
      level: 'FIXED',
      type: 'Days',
      money: '400.00',
      days: '18 Days',
      date: 'October 10,2021',
      review: '4',
      para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At diam sit erat et eros. Et cursus tellus viverra adipiscing suspendisse. Semper arcu est eget eleifend. Faucibus elit massa sollicitudin elementum ut feugiat nunc ac. Turpis quam sed in sed curabitur netus laoreet. In tortor neque sapien praesent porttitor cursus sed cum....',

    },
  ]
  public ManageUsers4: BehaviorSubject<any> = new BehaviorSubject(this.freelist);

  public freecompleted = [
    {
      id:1,
      name: 'John Paul',
      company: 'Dreamguystech',
      image:'assets/img/developer/developer-04.jpg',
      content:'PHP Laravel Developer Required (Contractual Employement)',
      amount: '500.00',
      level: 'FIXED',
      date: 'October 10,2021',
      review: '4',
    },
    {
      id:2,
      name: 'Danie S.',
      company: 'Dreamguystech',
      image:'assets/img/developer/developer-02.jpg',
      content:'Landing Page Redesign / Sales Page Redesign (Not Entire Web)',
      amount: '300.00',
      level: 'FIXED',
      date: 'October 10,2021',
      review: '4',
    },
    {
      id:3,
      name: 'Thomas George',
      company: 'Dreamguystech',
      image:'assets/img/developer/developer-03.jpg',
      content:'WooCommerce Product Page Back Up Restoration',
      amount: '200.00',
      level: 'FIXED',
      date: 'October 10,2021',
      review: '4',
    },
    {
      id:4,
      name: 'John Doe',
      company: 'Dreamguystech',
      image:'assets/img/developer/developer-01.jpg',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      amount: '600.00',
      level: 'FIXED',
      date: 'October 10,2021',
      review: '4',
    },
  ]
  public ManageUsers5: BehaviorSubject<any> = new BehaviorSubject(this.freecompleted);

  public tasks = [
    {
      name: 'Research',
      milestone: 'Method',
      date: '15th Oct 2021',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      availability: "Completed",
    },
    {
      name: 'Design',
      milestone: 'Holder',
      date: '20th Oct 2021',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      availability: "To do",
    },
    {
      name: 'Method',
      milestone: 'Research',
      date: '08th Oct 2021',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      availability: "To do",
    },
    {
      name: 'Holder',
      milestone: 'Design',
      date: '18th Oct 2021',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      availability: "Completed",
    },
  ]

  public files = [
    {
      image: 'assets/img/file-logo.png',
      title: '	Image for Section background',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      type: 'Png',
      size: '20KB'
    },
    {
      image: 'assets/img/file-logo.png',
      title: '	Image for Section background',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      type: 'Jpg',
      size: '50KB'
    },
    {
      image: 'assets/img/file-logo.png',
      title: '	Image for Section background',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      type: 'Png',
      size: '2f0KB'
    },
  ]
  payment = [
     {
      image: 'assets/img/company/img-1.png',
      company : 'Amaze Tech',
      name: 'Research',
      price: '50',
      date: '20th October 2018',
      type: 'Milestone',
      status: 'completed'
     },
     {
      image: 'assets/img/company/img-2.png',
      company : 'Park Inc',
      name: 'Design',
      price: '52',
      date: '10th October 2018',
      type: 'Milestone',
      status: 'completed'
     },
     {
      image: 'assets/img/company/img-3.png',
      company : 'Abc Software',
      name: 'Development',
      price: '40',
      date: '21th October 2018',
      type: 'Milestone',
      status: 'completed'
     },
     {
      image: 'assets/img/company/img-4.png',
      company : 'Host Technologies',
      name: 'Research',
      price: '15',
      date: '20th October 2018',
      type: 'Milestone',
      status: 'completed'
     },
  ]
  mile = [
    {
      name: 'Research',
      price: '60',
      percentage: '25%',
      startdate: '20th October 2021 ',
      enddate: '31th October 2021',
      availability: 'Paid',
      full : 'After Pay'
    },
    {
      name: 'Design',
      price: '50',
      percentage: '55%',
      startdate: '20th October 2021 ',
      enddate: '31th October 2021',
      availability: 'Unpaid',
      full : 'Pay now'
    },
    { 
      name: 'Research',
      price: '23',
      percentage: '87%',
      startdate: '20th October 2021 ',
      enddate: '31th October 2021',
      availability: 'Paid',
      full : 'After Pay'
    },
    {
      name: 'Development',
      price: '45',
      percentage: '45%',
      startdate: '20th October 2021 ',
      enddate: '31th October 2021',
      availability: 'Unpaid',
      full : 'Pay now'
    },
  ]
  
  invoice = [ 
    {
      invoices : 'INV-5622',
      client : 'Amaze Tech',
      lastvisit : '20 Oct 2019',
      amount : '150',
      duedate : '22 Oct 2021',
      availability : 'Paid',
      paidon : 'Wed Nov 2 2019 09:41:48 GMT+0530 (India Standard Time)'
    },
    {
      invoices : 'INV-4545',
      client : 'Park Inc',
      lastvisit : '12 Sep 2021',
      amount : '50',
      duedate : '25 Oct 2021',
      availability : 'Partially Paid',
      paidon : '18 Oct 2021 10:21:48 GMT+0530 (India Standard Time)'
    },
    {
      invoices : 'INV-1582',
      client : 'Abc Software',
      lastvisit : '13 Sep 2021',
      amount : '180',
      duedate : '28 Oct 2021',
      availability : 'Paid',
      paidon : '13 Oct 2021 12:11:48 GMT+0530 (India Standard Time)'
    },
    {
      invoices : 'INV-2254',
      client : 'Host Technologies',
      lastvisit : '10 Sep 2021',
      amount : '60',
      duedate : '15 Oct 2021',
      availability : 'Paid',
      paidon : '10 Oct 2021, 07:11:48 GMT+0530 (India Standard Time)'
    },
    {
      invoices : 'INV-1526',
      client : 'Host Technologies',
      lastvisit : '12 Sep 2021',
      amount : '20',
      duedate : '29 Oct 2021',
      availability : 'Overdue',
      paidon : '29 Oct 2021 09:41:48 GMT+0530 (India Standard Time)'
    },
    {
      invoices : 'INV-1200',
      client : 'Alfred Tech',
      lastvisit : '05 Sep 2021',
      amount : '80',
      duedate : '15 Oct 2021',
      availability : 'Overdue',
      paidon : '10 Oct 2021 09:41:48 GMT+0530 (India Standard Time)'
    },
    {
      invoices : 'INV-1456',
      client : 'Kind Softwares',
      lastvisit : '10 Sep 2021',
      amount : '30',
      duedate : '15 Oct 2021',
      availability : 'Partially Paid',
      paidon : '13 Oct 2021 09:41:48 GMT+0530 (India Standard Time)'
    },
  ]

  
  public sideBar: any = [
    {
      tittle: 'Home',
      base: 'home',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Home',
          route: routes.home,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'home',
          page: '',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Home 2',
          route: routes.home2,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'home2',
          page: '',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Home 3',
          route: routes.home3,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'home3',
          page: '',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Home 4',
          route: routes.home4,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'home4',
          page: '',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Home 5',
          route: routes.home5,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'home5',
          page: '',
          last: '',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'For Employers',
      base: 'employer',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Freelancers',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'employer',
          last: '',
          subMenus: [
            {
              menuValue: 'Freelancers',
              route: routes.freelancer,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'employer',
              page: 'developer',
              last: '',
              subMenus: [],
            },
            {
              menuValue: 'Freelancers details',
              route: routes.freelancerdetail,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'freelancer',
              page: 'developers-details',
              last: '',
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Dashboard',
          route: routes.employee_dashboard,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'employer',
          page: 'dashboard',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'My Profile',
          route: routes.employee_company_profile,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'employer',
          page: 'company-profile',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Company Details',
          route: routes.employee_company_details,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'employer',
          page: 'company-details',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Projects',
          route: routes.employee_all_projects,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'employer',
          page: 'manage-projects',
          last: 'all-projects',
          subMenus: [],
        },
        {
          menuValue: 'Favourites',
          route: routes.employee_markedfavourites,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'employer',
          page: 'favourites',
          last: 'markedfavourites',
          subMenus: [],
        },
        {
          menuValue: 'Membership',
          route: routes.employee_membership_plans,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'employer',
          page: 'membership-plans',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Milestone',
          route: routes.employee_milestone,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'employer',
          page: 'milestones',
          last: 'milestone',
          subMenus: [],
        },
        {
          menuValue: 'Chats',
          route: routes.employee_chat,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'employer',
          page: 'chats',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Review',
          route: routes.employee_review,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'employer',
          page: 'review',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Payments',
          route: routes.employee_deposit_funds,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'employer',
          page: 'deposit-funds',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Verify Identity',
          route: routes.employee_verify_identity,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'employer',
          page: 'verify-identity',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Settings',
          route: routes.employee_basic_settings,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'employer',
          page: 'profile-settings',
          last: 'basic-settings',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'For Freelancer',
      base: 'freelancer',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Projects',
          hasSubRoute: true,
          showSubRoute: false,
          page: 'project',
          last: '',
          subMenus: [
            {
              menuValue: 'Projects',
              route: routes.freelancer_project,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'employer',
              page: 'project',
              last: '',
              subMenus: [],
            },
            {
              menuValue: 'Projects details',
              route: routes.freelancer_project_details,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'freelancer',
              page: 'project-details',
              last: '',
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Dashboard',
          route: routes.freelancer_dashboard,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'freelancer',
          page: 'dashboards',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'My Profile',
          route: routes.freelancer_developer_profile,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'freelancer',
          page: 'developer-profile',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Freelancer Details',
          route: routes.freelancerdetail,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'freelancer',
          page: 'developers-details',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Projects',
          route: routes.freelancer_projects_proposals,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'freelancer',
          page: 'projects-proposals',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Favourites',
          route: routes.freelancer_favourite,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'freelancer',
          page: 'favourites',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Membership',
          route: routes.freelancer_membership,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'freelancer',
          page: 'membership',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Change Password',
          route: routes.freelancer_change_passwords,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'freelancer',
          page: 'change-passwords',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Chats',
          route: routes.freelancer_message,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'freelancer',
          page: 'message',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Review',
          route: routes.freelancer_review,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'freelancer',
          page: 'reviews',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Portfolio',
          route: routes.freelancer_portfolio,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'freelancer',
          page: 'portfolio',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Payments',
          route: routes.freelancer_withdraw_money,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'freelancer',
          page: 'withdraw-money',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Verify Identity',
          route: routes.freelancer_verify_identitys,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'freelancer',
          page: 'verify-identitys',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Settings',
          route: routes.freelancer_profiles_settings,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'freelancer',
          page: 'profile-settings',
          last: '',
          subMenus: [],
        },
      ],
    },


    {
      tittle: 'Pages',
      base: 'pages',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'About',
          route: routes.page_about,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'about',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Starter Page',
          route: routes.page_blank_page,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'blank-page',
          last: '',
          subMenus: [],
        },
        {
          menuValue: '404 Page',
          route: routes.page_404,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'auth',
          page: '404-page',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Invoices',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'freelancer',
          page: 'invoices',
          last: '',
          subMenus: [
            {
              menuValue: 'Invoices',
              route: routes.freelancer_invoices,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'freelancer',
              page: 'invoices',
              last: '',
              subMenus: [],
            },
            {
              menuValue: 'Invoice View',
              route: routes.page_view_invoice,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'pages',
              page: 'course',
              last: 'view-invoice',
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Login',
          route: routes.login,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'auth',
          page: 'login',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Register',
          route: routes.register,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'auth',
          page: 'register',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Onboard Screen',
          route: routes.freelancer_onboard,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'onboard-screen',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Forget Password',
          route: routes.forgot_password,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'forget-password',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Change Password',
          route: routes.freelancer_change_passwords,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'Freelancer',
          page: 'change-password',
          last: '',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Blog',
      base: 'blog',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Blog List',
          route: routes.blog_list,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'blog',
          page: 'blog-list',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Blog Grid',
          route: routes.blog_grid,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'blog',
          page: 'blog-grid',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Blog Details',
          route: routes.blog_details,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'blog',
          page: 'blog-details',
          last: '',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Admin',
      base: 'admin',
      showAsTab: false,
      separateRoute: true,
      route: routes.admin_login,
      // menu: [],
    },
  ];
  public getSideBarData: BehaviorSubject<Array<any>> = new BehaviorSubject<
  Array<any>
>(this.sideBar);
public sidemenu :any =[
  {
    title:'Dashboard',
    icon:'verified_user',
    page:'dashboard',
     route: routes.employee_dashboard,
  },
  {
    title:'Projects',
    icon:'business_center',
    page:'manage-projects',
     route: routes.employee_all_projects,
  },
  {
    title:'Favourites',
    icon:'local_play',
    page:'favourites',
     route: routes.employee_markedfavourites,
  },
  {
    title:'Reviews',
    icon:'record_voice_over',
    page:'review',
     route: routes.employee_review,
  },
  {
    title:'Messages',
    icon:'chat',
    page:'chats',
     route: routes.employee_chat,
  },
  {
    title:'Membership',
    icon:'person_add',
    page:'membership-plans',
     route: routes.employee_membership_plans,
  },
  {
    title:'Milestones',
    icon:'pie_chart',
    page:'milestones',
     route: routes.employee_milestone,
  },
  {
    title:'Verify Identity',
    icon:'person_pin',
    page:'verify-identity',
     route: routes.employee_verify_identity,
  },
  {
    title:'Payments',
    icon:'wifi_tethering',
    page:'deposit-funds',
     route: routes.employee_deposit_funds,
  },
  {
    title:'Settings',
    icon:'settings',
    page:'profile-settings',
     route: routes.employee_basic_settings,
  },
  {
    title:'Logout',
    icon:'power_settings_new',
    page:'home',
     route: routes.home,
  }
]
public getSidemenu: BehaviorSubject<Array<any>> = new BehaviorSubject<
Array<any>
>(this.sidemenu);
public freelancer_sidemenu :any =[
  {
    title:'Dashboard',
    icon:'verified_user',
    page:'dashboards',
     route: routes.freelancer_dashboard,
  },
  {
    title:'Projects',
    icon:'business_center',
    page:'freelancer-projects',
    route: routes.freelancer_projects_proposals,
  },
  {
    title:'Favourites',
    icon:'local_play',
    page:'freelancer-favourite',

     route: routes.freelancer_favourite,
  },
  {
    title:'Reviews',
    icon:'record_voice_over',
    page:'reviews',
     route: routes.freelancer_review,
  },
  {
    title:'Portfolio',
    icon:'pie_chart',
    page:'portfolio',
     route: routes.freelancer_portfolio,
  },
  {
    title:'Messages',
    icon:'chat',
    page:'message',
     route: routes.freelancer_message,
  },
  {
    title:'Membership',
    icon:'person_add',
    page:'membership',
     route: routes.freelancer_membership,
  },
  {
    title:'Verify Identity',
    icon:'person_pin',
    page:'verify-identitys',
     route: routes.freelancer_verify_identitys,
  },
  {
    title:'Payments',
    icon:'wifi_tethering',
    page:'freelancer-payments',
     route: routes.freelancer_withdraw_money,
  },
  {
    title:'Settings',
    icon:'settings',
    page:'freelancer-settings',
     route: routes.freelancer_profiles_settings,
  },
  {
    title:'Logout',
    icon:'power_settings_new',
    page:'home',
     route: routes.home,
  }
]
public getFreelancerSidemenu: BehaviorSubject<Array<any>> = new BehaviorSubject<
Array<any>
>(this.freelancer_sidemenu);
public Admin_sideBar: any = [

  {
    tittle: 'Main',
    icon: 'home',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Dashboard',
        route: routes.admin_dashboard,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'home',
        base: 'dashboard',
        subMenus: [],
      },
      {
        menuValue: 'Categories',
        route: routes.admin_categories,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'copy',
        base: 'categories',
        subMenus: [],
      },
      {
        menuValue: 'Projects',
        route: routes.admin_projects,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'database',
        base: 'projects',
        subMenus: [],
      },
      {
        menuValue: 'Freelancer',
        route: routes.admin_freelancers_all,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'users',
        base: 'freelancers',
        subMenus: [],
      },
      {
        menuValue: 'Deposit',
        route: routes.admin_deposit_history,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'user-check',
        base: 'deposit',
        subMenus: [],
      },
      {
        menuValue: 'Withdrawn',
        route: routes.admin_withdrawn_history,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'user-check',
        base: 'withdrawn',
        subMenus: [],
      },
      {
        menuValue: 'Transaction',
        route: routes.admin_transaction_all,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'clipboard',
        base: 'transaction',
        subMenus: [],
      },
      {
        menuValue: 'Providers',
        route: routes.admin_providers,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'user-check',
        base: 'providers',
        subMenus: [],
      },
      {
        menuValue: 'Subscription',
        route: routes.admin_subscription_employer,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'user-check',
        base: 'subscription',
        subMenus: [],
      },
      {
        menuValue: 'Reports',
        route: routes.admin_reports_projects,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'pie-chart',
        base: 'reports',
        subMenus: [],
      },
      {
        menuValue: 'Roles',
        route: routes.admin_roles,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'clipboard',
        base: 'roles',
        subMenus: [],
      },
      {
        menuValue: 'Skills',
        route: routes.admin_skills,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'award',
        base: 'skills',
        subMenus: [],
      },
      {
        menuValue: 'Verify Identity',
        route: routes.admin_verifyidentity,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'user-check',
        base: 'verifyidentity',
        subMenus: [],
      },
      {
        menuValue: 'Settings',
        route: routes.admin_settings_general,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'user-check',
        base: 'settings',
        subMenus: [],
      },
     
    ],
  },
  {
    tittle: 'UI Interface',
    icon: 'home',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Components',
        route: routes.admin_components,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'pocket',
        base: 'components',
        subMenus: [],
      },
      {
        menuValue: 'Forms',
        route: routes.admin,
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'file-minus',
        base: 'forms',
        subMenus: [
          { menuValue: 'Basic Inputs', route: routes.admin_forms_basic_inputs, base: 'basic-inputs' },
          { menuValue: 'Input Groups', route: routes.admin_forms_input_groups, base: 'input-groups' },
          { menuValue: 'Horizontal Form', route: routes.admin_forms_horizontal_forms, base: 'horizontal-forms' },
          { menuValue: 'Vertical Form', route: routes.admin_forms_vertical_forms, base: 'vertical-forms' },
          { menuValue: 'Form Mask', route: routes.admin_form_mask, base: 'form-mask' },
          { menuValue: 'Form Validation', route: routes.admin_form_validation, base: 'form-validation' },

        ],
      },
      {
        menuValue: 'Tables',
        route: routes.admin,
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'align-justify',
        base: 'tables',
        subMenus: [
          { menuValue: 'Basic Table', route: routes.admin_tables_basic_tables, base: 'basic-tables' },
          { menuValue: 'Data Table', route: routes.admin_tables_data_tables, base: 'data-tables' },
        ],
      },
    ]
  }
];
public getAdminSideBarData: BehaviorSubject<Array<any>> = new BehaviorSubject<
  Array<any>
>(this.Admin_sideBar);
}
