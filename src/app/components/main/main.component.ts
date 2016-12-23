import { ElementRef, Component, ViewChild, ContentChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.css']
})
export class MainComponent {
    textSearchActive = false;
    menuSticky = false;
    @ViewChild('menu') menu: ElementRef;
    @ViewChild('router') router: ElementRef;

    changeTextSearchMode(element: HTMLInputElement): void {
        this.textSearchActive = !this.textSearchActive;
        if (this.textSearchActive) {
            element.focus();
        }
    }

    scroll(event: UIEvent) {
        let menu = <HTMLMenuElement>this.menu.nativeElement;
        if (document.body.scrollTop > 0) {
            this.menuSticky = true;
        }
        else {
            this.menuSticky = false;
        }
        /*
let header = <HTMLDivElement>this.router.nativeElement;
          let heightMenu = menu.offsetHeight;
          let heightHeader = header.offsetHeight;
          let distanceMenuTop = menu.offsetTop;

                if ((heightMenu + distanceMenuTop) > heightHeader){
                    this.menuSticky = true;
                }
                else{
                    this.menuSticky = false;
                } */
    }
}