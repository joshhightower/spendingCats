import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { TrackingComponent } from './tracking/tracking.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { TrendsComponent } from './trends/trends.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'budgets', component: BudgetsComponent },
  { path: 'trends', component: TrendsComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackingComponent,
    BudgetsComponent,
    TrendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
