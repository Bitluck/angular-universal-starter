import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TransferBackRoutes } from './transfer-back.routing';
import { TransferBackComponent } from './transfer-back.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TransferBackPageEffects } from './shared/store/effects';
import { reducer } from './shared/store/reducer';

@NgModule({
  imports: [
    CommonModule,
    TransferBackRoutes,
    TranslateModule,
    StoreModule.forFeature('transferBackPage', reducer),
    EffectsModule.forFeature([TransferBackPageEffects])
  ],
  declarations: [TransferBackComponent],
})
export class TransferBackModule { }
