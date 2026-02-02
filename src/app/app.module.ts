import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './feature/passengers/components/header/header.component';
import { TableComponent } from './feature/passengers/components/table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { RowComponent } from './feature/passengers/components/row/row.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    RowComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()],
  bootstrap: [AppComponent],
})
export class AppModule {}
