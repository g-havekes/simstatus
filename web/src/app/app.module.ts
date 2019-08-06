import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule, MatCheckboxModule,
  MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {InstancesComponent} from './components/instances/instances.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {InstanceEditDialogComponent} from './components/instance-edit-dialog/instance-edit-dialog.component';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PaksComponent} from './components/paks/paks.component';
import {SavesComponent} from './components/saves/saves.component';
import {FileEditDialogComponent} from './components/file-edit-dialog/file-edit-dialog.component';
import {RevisionsComponent} from './components/revisions/revisions.component';
import {RevisionEditDialogComponent} from './components/revision-edit-dialog/revision-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    InstancesComponent,
    NavbarComponent,
    InstanceEditDialogComponent,
    ConfirmDialogComponent,
    PaksComponent,
    SavesComponent,
    FileEditDialogComponent,
    RevisionsComponent,
    RevisionEditDialogComponent,
  ],
  entryComponents: [
    InstanceEditDialogComponent,
    FileEditDialogComponent,
    ConfirmDialogComponent,
    RevisionEditDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  exports: [],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        width: 'auto',
        autoFocus: false,
        hasBackdrop: true,
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}