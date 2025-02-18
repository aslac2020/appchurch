import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  menuItems = ['Membros', 'Igrejas', 'Financeiro', 'Histórico',  'Dashboard'];
  @ViewChild('drawer') drawer!: MatDrawer;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}


  toggle(menuName: string){
    switch (menuName) {
      case 'Membros':
        this.router.navigate(['membros']);
        break;
        case 'Dashboard':
        this.router.navigate(['']);
        break;

      default:
        break;
    }
  }

}
