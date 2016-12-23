import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateToStringPipe'})
export class DatePipe implements PipeTransform {
    transform(value: string): string {
        var date = new Date(value);

        return date.toLocaleDateString();
    }
}