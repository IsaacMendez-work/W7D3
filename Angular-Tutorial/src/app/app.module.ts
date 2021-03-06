import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // <-- *ngFor lives here
import { FormsModule } from '@angular/forms'; // <-- [(ngModel)] lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
