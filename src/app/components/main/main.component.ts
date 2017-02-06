import { ElementRef, Component, ViewChild, ContentChild } from '@angular/core';
import { 
    Router,
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError } from '@angular/router'

import {LoadingControlService} from '../../services/loading-control.service';
import {HttpService} from '../../services/http.service';

@Component({
    selector: 'app-root',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.css']
})
export class MainComponent {
    loading = true;
    textSearchActive = false;
    menuSticky = false;
    @ViewChild('menu') menu: ElementRef;

    constructor(private router: Router,
    private loadingControlService: LoadingControlService) {
        router.events.subscribe((event: RouterEvent) => {
            this.navigationEvents(event);
        });

        loadingControlService.loading.subscribe((isLoading: boolean) => {
                this.loading = isLoading;
        });
    }

    changeTextSearchMode(element: HTMLInputElement): void {
        this.textSearchActive = !this.textSearchActive;
        if (this.textSearchActive) {
            element.focus();
        }
    }

    navigationEvents(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.loading = true;
        }
        else if (event instanceof NavigationCancel || event instanceof NavigationError) {
            this.loading = false;
        }
    }

    search(text: string): void {
        if (text.trim()){
            this.router.navigate(['/list'], {
                queryParams: {
                    search: text
                }
            });
        }
        else{
             this.router.navigate(['/list']);
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
    }
}