import {
  Component,
  OnInit,
  ViewEncapsulation,
  Inject,
  AfterViewInit,
} from '@angular/core';
import {
  Event,
  NavigationStart,
  Router,
  ActivatedRoute,
  Params,
} from '@angular/router';
import * as feather from 'feather-icons';
declare const $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
  public isSidemenu: boolean = false;
  constructor(private Router: Router) {
    Router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (
          event.url === '/admin/auth/login' ||
          event.url === '/admin/auth/register' ||
          event.url === '/admin/auth/forgot-password'
        ) {
          this.isSidemenu = false;
          sessionStorage.setItem('isSidemenu', 'false');
        } else {
          this.isSidemenu = true;
          sessionStorage.setItem('isSidemenu', 'true');
        }
      }
    });
    if(sessionStorage.getItem('isSidemenu')== 'true') {
      this.isSidemenu = true;
    }else {
      this.isSidemenu = false;
    }
  }
  ngOnInit(): void {

  }

  ngAfterViewInit() {
    feather.replace();
  }


}
