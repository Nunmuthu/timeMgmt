import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxMyDatePickerModule } from "ngx-mydatepicker";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClockInComponent } from "./components/clock-in/clock-in.component";
import { TimeCardComponent } from "./components/time-card/time-card.component";
import { TimeCardNewComponent } from "./components/time-card-new/time-card-new.component";
import { TimeCardHistoryComponent } from "./components/time-card-history/time-card-history.component";

@NgModule({
  declarations: [
    AppComponent,
    ClockInComponent,
    TimeCardComponent,
    TimeCardNewComponent,
    TimeCardHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMyDatePickerModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
