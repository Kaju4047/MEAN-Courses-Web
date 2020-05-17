import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StaticpagesRoutingModule } from './staticpages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaticpagesService } from './staticpages.service';
import { BrowserModule } from '@angular/platform-browser';

// /import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { TestData } from './testdata';

@NgModule({
  declarations: [PageComponent, ContactUsComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StaticpagesRoutingModule,
   // InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [StaticpagesService]
})
export class StaticpagesModule { }
