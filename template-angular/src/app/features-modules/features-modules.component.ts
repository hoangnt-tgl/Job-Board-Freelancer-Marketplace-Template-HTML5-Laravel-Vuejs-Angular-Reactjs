import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { NavbarService } from 'src/app/core/services/navbar.service';
import { AuthService } from '../core/services/auth/auth.service';
import { CommonService } from '../core/services/common/common.service';
import { SideBarService } from '../core/services/side-bar/side-bar.service';

@Component({
  selector: 'app-features-modules',
  templateUrl: './features-modules.component.html',
  styleUrls: ['./features-modules.component.scss'],
})
export class FeaturesModulesComponent implements OnInit {
  chat: boolean = false;
  home2: boolean = false;
  home3: boolean = false;
  home4: boolean = false;
  home5: boolean = false;
  showMiniSidebar: boolean = false;
  public isuserHeader: boolean = false;
  public isFooter: boolean = false;
  public authenticated: boolean = false;
  public miniSidebar: boolean = false;
  public expandMenu: boolean = false;
  public mobileSidebar: boolean = false;
  base: string = '';
  page: string = '';
  last: string = '';
  url: any;
  constructor(
    private Router: Router,
    private navservice: NavbarService,
    private common: CommonService,
    private sideBar: SideBarService,
    private data: ShareDataService,
    private auth: AuthService,
  ) {
   
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });

    Router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.Router);
    this.navservice.toogleSidebar.subscribe((res: any) => {
      if (res == 'true') {
        this.showMiniSidebar = true;
      } else {
        this.showMiniSidebar = false;
      }
    });


     // <* condition to check side bar position *>
     this.sideBar.toggleSideBar.subscribe((res: any) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    // <* condition to check side bar position *>

    // <* condition to check mobile side bar position *>
    this.sideBar.toggleMobileSideBar.subscribe((res: any) => {
      if (res == 'true' || res == true) {
        this.mobileSidebar = true;
      } else {
        this.mobileSidebar = false;
      }
    });
    // <* condition to check mobile side bar position *>

    this.sideBar.expandSideBar.subscribe((res: any) => {
      this.expandMenu = res;
      // <* to collapse submenu while toggling side menu*>
      if (res == false && this.miniSidebar == true) {
        this.data.Admin_sideBar.map((mainMenus: any) => {
          mainMenus.menu.map((resMenu: any) => {
            resMenu.showSubRoute = false;
          });
        });
      }
      // <* to expand submenu while hover toggled side menu*>
      if (res == true && this.miniSidebar == true) {
        this.data.Admin_sideBar.map((mainMenus: any) => {
          mainMenus.menu.map((resMenu: any) => {
            let menuValue = sessionStorage.getItem('menuValue');
            if (menuValue && menuValue == resMenu.menuValue) {
              resMenu.showSubRoute = true;
            } else {
              resMenu.showSubRoute = false;
            }
          });
        });
      }
    });

    
    
   
  }
  ngOnInit(): void {
  
  }
  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
  }
  getRoutes(event: any) {
    let splitVal = event.url.split('/');
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);
    if (
      this.base === 'home2' ||
      this.base === 'home3' ||
      this.base === 'home4' ||
      this.base === 'home5' ||
      this.base === 'admin' ||
      this.base === 'employer' ||
      this.base === 'freelancer' ||
      this.page === 'message' ||
      this.page === 'chats' ||
      this.page === 'onboard-employer' ||
      this.page === 'onboard-screen'
    ) {
      this.isuserHeader = false;
      this.isFooter = false;
    } else {
      this.isuserHeader = true;
      this.isFooter = true;
    }
    if (localStorage.getItem('LoginData')) {

      this.authenticated = true;
    } else {

      this.authenticated = false;
    }
  }
  // private findRoute(routeStatus: string) {
  //   console.log('routeStatus', typeof routeStatus);
  //   if (routeStatus === 'home' || routeStatus === '') {
  //     return true;
  //   } else if (routeStatus === 'pages') {
  //     return true;
  //   } else if (routeStatus === 'blog') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
