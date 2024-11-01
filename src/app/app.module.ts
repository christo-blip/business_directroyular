import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { SideNavbarComponent } from './_component/side-navbar/side-navbar.component';
import { MainpageComponent } from './_component/mainpage/mainpage.component';
import { BusinessuserComponent } from './_component/businessuser/businessuser.component';
import { SelectedServiceComponent } from './_component/selected-service/selected-service.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    SideNavbarComponent,
    MainpageComponent,
    BusinessuserComponent,
    SelectedServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
