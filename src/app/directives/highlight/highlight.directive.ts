import { Directive, ElementRef } from '@angular/core';

declare var hljs: any;

@Directive({
    selector: 'div[highlight]'
})
export class HighlightDirective {
    constructor(private element: ElementRef) {}

    ngAfterViewInit() {
        var codeNodes = document.querySelectorAll('code');

        for (var i = 0; i < codeNodes.length; i++) {
            hljs.highlightBlock(codeNodes[i]);
        }

    }
}