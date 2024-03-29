import { Component, OnInit, ChangeDetectionStrategy, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingOverlayComponent implements OnInit {
  diameter: number;

  @Input() set bgOpacity(value: number) {
    this.ref.nativeElement.style.backgroundColor = `rgba(0,0,0,${value})`;
  }

  constructor(private ref: ElementRef<HTMLElement>) { }

  ngOnInit() {
    const bounds = this.ref.nativeElement.getBoundingClientRect();
    this.diameter = Math.min(Math.min(bounds.width, bounds.height) - 10, 150);
  }

}
