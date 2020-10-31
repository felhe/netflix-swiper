import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { MediaService } from "../services/media/media.service";
import { Medium } from "../classes/Medium";

@Component({
  selector: "app-swiper",
  templateUrl: "./swiper.component.html",
  styleUrls: ["./swiper.component.scss"]
})
export class SwiperComponent implements OnInit {
  media$: Observable<Medium[]>;
  currentIndex: number;

  constructor(private mediaService: MediaService) {
  }

  ngOnInit(): void {
    this.media$ = this.mediaService.getMedia();
    this.currentIndex = 0;
  }

  next(): void {
    this.currentIndex++;
  }

  prev(): void {
    this.currentIndex--;
  }
}
