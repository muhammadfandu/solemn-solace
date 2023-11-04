import { Directive, HostBinding, Input } from '@angular/core';

/* The ImagePreloadDirective class is a TypeScript directive that handles the loading and error events
of an img element, allowing for a default image to be displayed in case of an error. */
@Directive({
  selector: 'img[default]',
  host: {
    '(error)': 'updateUrl()',
    '(load)': 'load()',
    '[src]': 'src'
  }
})
export class ImagePreloadDirective {

  @Input() src: string | undefined;
  @Input() default: string | undefined;
  @HostBinding('class') className: string | undefined;

  constructor() { }

  updateUrl() {
    this.src = this.default;
  }

  load() {
    this.className = 'image-loaded';
  }

}
