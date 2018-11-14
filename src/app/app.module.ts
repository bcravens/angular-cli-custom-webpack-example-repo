import { NgModule, Injector, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppShellNoRenderDirective } from './directives/app-shell-no-render.directive';
import { AppShellRenderDirective } from './directives/app-shell-render.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppShellNoRenderDirective,
    AppShellRenderDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents:[AppComponent]
})

export class AppModule {
  @Inject(PLATFORM_ID) private platformId
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    // if (isPlatformBrowser(this.platformId)) {
    //   const { createCustomElement } = require('@angular/elements');
    //   const elm = createCustomElement(AppComponent, { injector: this.injector });
    //   customElements.define('custom-element', elm);
    // }
  }
}