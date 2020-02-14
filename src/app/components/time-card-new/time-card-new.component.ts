import { Component, OnInit, ViewChild } from '@angular/core';
import { INgxMyDpOptions } from 'ngx-mydatepicker';


@Component({
  selector: 'app-time-card-new',
  templateUrl: './time-card-new.component.html',
  styleUrls: ['./time-card-new.component.css']
})
export class TimeCardNewComponent implements OnInit {

  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
