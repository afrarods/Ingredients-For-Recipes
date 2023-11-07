// Max deprecated course version
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { Observable, map, take } from 'rxjs';
// import { AuthService } from './auth.service';

import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | boolean
//     | UrlTree
//     | Promise<boolean | UrlTree>
//     | Observable<boolean | UrlTree> {
//     return this.authService.user.pipe(
//       take(1),
//       map((user) => {
//         const isAuth = !!user;
//         if (isAuth) {
//           return true;
//         }
//         return this.router.createUrlTree(['/auth']);
//       })
//     );
//   }
// }

// Not deprecated Version
@Injectable({ providedIn: 'root' })
export class AuthGuard {
  static authGuardFn: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> => {
    const router = inject(Router);
    const authService = inject(AuthService);

    return authService.user.pipe(
      map((user) => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return router.createUrlTree(['/auth']);
      })
    );
  };
}
