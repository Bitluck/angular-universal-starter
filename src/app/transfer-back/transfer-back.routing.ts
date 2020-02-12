import { TransferBackComponent } from './transfer-back.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TransferBackComponent,
    data: {
      meta: {
        title: 'back-http.title',
        description: 'back-http.text',
      },
    },
  },
];

// export const TransferBackRoutes = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferBackRoutes { }
