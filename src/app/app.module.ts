import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { ExampleElementComponent } from './example-element/example-element.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ExampleElementComponent
  ],
  entryComponents: [
    ExampleElementComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(ExampleElementComponent, { injector });
    customElements.define('example-element', customElement);
  }

  ngDoBootstrap() { }
}
