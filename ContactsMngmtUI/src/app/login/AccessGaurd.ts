import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AccessGaurd implements CanActivate {

    constructor(private router : Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(sessionStorage.getItem('user') || this.ispageRefreshed) {
           
            return true;
        }
        this.router.navigate(['/'], {queryParams: { returnUrl: state.url }});
        return false;
    }

    private ispageRefreshed() : boolean {
        return (this.router.navigated);
    }
}