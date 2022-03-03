import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssessLoginComponent } from './assess-login/assess-login.component';
import { AssessRequirementsComponent } from './assess-requirements/assess-requirements.component';
import { HtmlcssDesignComponent } from './htmlcss-design/htmlcss-design.component';
import { PdfExtractComponent } from './pdf-extract/pdf-extract.component';
import { TableDataComponent } from './table-data/table-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AssessLoginComponent },
  { path: 'requirements', component: AssessRequirementsComponent },
  { path: 'htmlcss-design', component: HtmlcssDesignComponent },
  { path: 'pdf', component: PdfExtractComponent },
  { path: 'data-table', component: TableDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
