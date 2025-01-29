import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) {}

  @HostListener('mouseenter')onMouseEnter(){
    const dropdownMenu=this.el.nativeElement.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      this.renderer.addClass(this.el.nativeElement, 'show');
      this.renderer.addClass(dropdownMenu, 'show');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    const dropdownMenu = this.el.nativeElement.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      this.renderer.removeClass(this.el.nativeElement, 'show');
      this.renderer.removeClass(dropdownMenu, 'show');
    }
  
  }
}
