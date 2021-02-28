import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouteModule } from './app-route/app-route.module';

import { AppComponent } from './app.component';
import { ContentPanelComponent } from './layout/content-panel/content-panel.component';

@NgModule({
  declarations: [AppComponent, ContentPanelComponent],
  imports: [BrowserModule, AppRouteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
