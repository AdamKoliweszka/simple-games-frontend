import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "../services/auth.service";
import { take, tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class IsNotLogedGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isLoged.pipe(
      take(1),
      map((value) => {
        if (value) {
          this.router.navigate(["games"]);
        }
        return true;
      })
    );
  }
}
