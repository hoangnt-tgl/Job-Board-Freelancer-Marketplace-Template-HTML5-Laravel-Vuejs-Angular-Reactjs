import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private route: Router) {}
  canActivate():boolean 
    {
      if (!localStorage.getItem('LoginData')) {
        this.route.navigate(['/admin/auth/login']);
        return false;
      } else {
        return true;
      }
  }
  
}
