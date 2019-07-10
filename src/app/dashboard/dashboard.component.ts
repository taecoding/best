import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Friend } from './friends';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  friends: Friend[]
  selectedFriend: Friend;

  constructor() {
    this.friends = [
      { name: "Derek", status: "Teaching children to read", about: "I'm a model", messages: [{who: 'aaa', message: 'aaa-1'}], rows: 1, cols:1},
      { name: "Hansel", status: "Kitesurfing", about: "I'm a model", messages: [], rows: 1, cols:1 },
      { name: "Valentina", status: "Kitesurfing", about: "I'm a model", messages: [], rows: 1 , cols:1},
      { name: "Mugatu", status: "Designing the masterplan", about: "I'm a tirant", messages: [], rows: 3, cols:1},
      { name: "Katinka", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
      { name: "Rufus", status: "Kitesurfing", about: "I'm a model", messages: [], rows: 1 , cols:1},
      { name: "Brint", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
      { name: "Meekus", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
      { name: "EvilDJ", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
      { name: "JPPrewit", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
    ];
  }

  showDetails(friend: Friend) {
    this.selectedFriend = friend;
  }

  addMessage(){
    
  }
}
