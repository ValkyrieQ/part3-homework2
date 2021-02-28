import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRouteModule } from './app-route/app-route.module';

import { AppComponent } from './app.component';
import { ContentPanelComponent } from './layout/content-panel/content-panel.component';

import { BackendService } from './backend.service';
@NgModule({
  declarations: [AppComponent, ContentPanelComponent],
  imports: [CommonModule, BrowserModule, AppRouteModule],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
