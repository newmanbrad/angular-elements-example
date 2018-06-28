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

  /**
   * entryComponents
   *
   * is an array of components which aren’t
   * embedded in a particular template, but still created somehow imperatively.
   */

  entryComponents: [
    ExampleElementComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {

    /**
     * createCustomElement
     *
     * This function creates and
     * returns an implementation for NgElement based on the provided component.
     */

    const customElement = createCustomElement(ExampleElementComponent, { injector });

    customElements.define('example-element', customElement);
  }

  ngDoBootstrap() { }
}
