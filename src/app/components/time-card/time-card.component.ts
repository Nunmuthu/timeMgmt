import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-card',
  templateUrl: './time-card.component.html',
  styleUrls: ['./time-card.component.css']
})
export class TimeCardComponent implements OnInit {

  newHistory = 'new';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  switchRoute(){
    this.router.navigateByUrl('/clockIn')
  }

  switchNewHistory(newHistory){
    this.newHistory = newHistory;
  }
}
