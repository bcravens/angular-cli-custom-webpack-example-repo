import { NgModule } from '@angular/core';
import { ClientsLibComponent } from './clients-lib.component';
import { ClientsLibService } from "./clients-lib.service";

@NgModule({
  declarations: [ClientsLibComponent],
  imports: [
  ],
  exports: [ClientsLibComponent],
  providers: [
    ClientsLibService
  ]
})
export class ClientsLibModule { }
