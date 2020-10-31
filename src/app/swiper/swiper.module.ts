import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzTagModule } from "ng-zorro-antd/tag";
import { SwiperComponent } from "./swiper.component";
import { NzCardModule } from "ng-zorro-antd/card";
import { MediaCardComponent } from "./media-card/media-card.component";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";

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
    NzSkeletonModule
  ],
  exports: [SwiperComponent]
})
export class SwiperModule {
}
