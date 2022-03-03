import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { MaterialExampleModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessLoginComponent } from './assess-login/assess-login.component';
import { AssessRequirementsComponent } from './assess-requirements/assess-requirements.component';
import { TableDataComponent } from './table-data/table-data.component';
import { HtmlcssDesignComponent } from './htmlcss-design/htmlcss-design.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateMeetingModalComponent } from '../app/create-meeting-modal/create-meeting-modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';



@NgModule({
  declarations: [
    AppComponent,
    AssessLoginComponent,
    AssessRequirementsComponent,
    TableDataComponent,
    HtmlcssDesignComponent,
    CreateMeetingModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule, 
    MatDatepickerModule, 
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateMeetingModalComponent]
})
export class AppModule { }
