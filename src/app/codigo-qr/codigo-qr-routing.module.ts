import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoQrPage } from './codigo-qr.page';

// Define the routes for the CodigoQrPage
const routes: Routes = [
  {
    path: '', // Empty path means this will be the default route for this module
    component: CodigoQrPage // The component that will be displayed for this route
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Register the routes with the RouterModule
  exports: [RouterModule], // Export RouterModule so it can be used in other modules
})
export class CodigoQrPageRoutingModule {}
