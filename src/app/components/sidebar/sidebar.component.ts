import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PROFILE_MENU } from 'src/app/variables/profile-menu';
import { SIDEBAR_MENU } from 'src/app/variables/sidebar-menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarMenu = SIDEBAR_MENU;
  profileMenu = PROFILE_MENU;

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = this.sidebarMenu.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
