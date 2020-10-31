import { Component, Input, OnInit } from '@angular/core';
import { Medium } from '../classes/Medium';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css']
})
export class MediaCardComponent implements OnInit {
  @Input() medium: Medium;

  constructor() {}

  ngOnInit(): void {}
}
