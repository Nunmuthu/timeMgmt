import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClockInComponent } from "./components/clock-in/clock-in.component";
import { TimeCardComponent } from "./components/time-card/time-card.component";

const routes: Routes = [
  { path: "", redirectTo: "clockIn", pathMatch: "full" },
  { path: "clockIn", component: ClockInComponent },
  { path: "timeCard", component: TimeCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
