import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from "@angular/router";
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CommonService } from 'src/app/core/services/common/common.service';
import { SideBarService } from 'src/app/core/services/side-bar/side-bar.service';

declare const $: any;
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  base: string="";
  page: string="";
  last: string = '';
  public miniSidebar: boolean = false;
  currentroute : string ='';
  side_bar_data: Array<any> = [];
  constructor(    public router: Router,
    private data: ShareDataService,
    private sideBar: SideBarService,
    private common : CommonService,
    public auth: AuthService) {
      this.common.base.subscribe((res:string)=>{
        this.base =res;
      })
      this.common.page.subscribe((res:string)=>{
        this.page =res;
      })
      this.common.last.subscribe((res:string)=>{
        this.last =res;
      })
  
        // get sidebar data as observable because data is controlled for design to expand submenus
        this.data.getAdminSideBarData.subscribe((res: any) => {
          this.side_bar_data = res;
        });
        this.sideBar.toggleSideBar.subscribe((res: any) => {
          if (res == 'true') {
            this.miniSidebar = true;
          } else {
            this.miniSidebar = false;
          }
        });
  }
 
  public toggleSideBar(): void {
    this.sideBar.switchSideMenuPosition();
  }
  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
  }
  
  Logout() {
    localStorage.removeItem("LoginData");
    this.router.navigate(["/admin/auth/login"]);
  }
  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sideBar.expandSideBar.next(true);
    } else {
      this.sideBar.expandSideBar.next(false);
  
    }
  }

  public expandSubMenus(menu: any): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.side_bar_data.map((mainMenus: any) => {
      mainMenus.menu.map((resMenu: any) => {
        // collapse other submenus which are open
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
          if (menu.showSubRoute == false) {
            sessionStorage.removeItem('menuValue');
          }
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
  ngOnInit() {
  }
  public logOut(): void {
    this.auth.logout();
  }

	


}
