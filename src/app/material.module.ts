import { NgModule } from '@angular/core';
import {MatButtonModule, MatBadgeModule, MatSidenavModule, MatToolbarModule,
  MatIconModule, MatListModule,
  MatTabsModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatBadgeModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule],
  exports: [MatButtonModule, MatBadgeModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule],
})
export class MaterialModule { }
