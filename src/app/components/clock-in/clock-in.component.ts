import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clock-in',
  templateUrl: './clock-in.component.html',
  styleUrls: ['./clock-in.component.css']
})
export class ClockInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  switchRoute(){
    this.router.navigateByUrl('/timeCard')
  }

}
