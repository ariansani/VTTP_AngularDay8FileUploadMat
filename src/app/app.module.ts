import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register.component';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './components/upload.component';
import { UploadService } from './services/upload.service';

const appRoutes: Routes = [
  {path:'', component:RegisterComponent},
  {path:'upload', component:UploadComponent},
  {path:'**', redirectTo:'/', pathMatch:'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule, FormsModule,
    RouterModule.forRoot(appRoutes,{useHash:true}),
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
