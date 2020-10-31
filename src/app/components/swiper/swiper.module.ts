import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { SwiperComponent } from './swiper.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { MediaCardComponent } from './media-card/media-card.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SwiperComponent, MediaCardComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzTagModule,
    NzTypographyModule,
    NzSkeletonModule,
    NzToolTipModule,
    NzRadioModule,
    FormsModule
  ],
  exports: [SwiperComponent]
})
export class SwiperModule {}
