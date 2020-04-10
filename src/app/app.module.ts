
/* Firebase Setup */
import {firebaseConfig} from './../environments/environment'
import { AngularFireModule } from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";

 /*Angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

 /*Spinner */
import { NgxSpinnerModule } from 'ngx-spinner';

 /*Components */
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactOverviewComponent } from './contactOverview/contactOverview.component';
import { PeopleListComponent } from './people-list/people-list.component';

 /*Service */
import { PeopleService } from './my-service.service';

/* Material Design */
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule
} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const Routes: Routes = [
   {path: '', redirectTo: 'home', pathMatch: 'full'},
   {path: 'find', redirectTo: 'search'},
   {path: 'home', component: ContactsComponent},
   {path: 'search', component: ContactOverviewComponent},
   {path: '**', component: ContactsComponent}
];

@NgModule({
   declarations: [
      AppComponent,
      ContactsComponent,
      PeopleListComponent,
      ContactOverviewComponent,
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot(Routes, {useHash: true}),
      FormsModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatDatepickerModule,
      MatCardModule,
      MatExpansionModule,
      MatIconModule,
      LayoutModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      NgxSpinnerModule,
      MatSnackBarModule
   ],
   providers: [
      PeopleService,
   ],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule {}
