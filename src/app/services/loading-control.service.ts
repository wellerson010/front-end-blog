import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/subject';

@Injectable()
export class LoadingControlService {
    loading = new Subject<boolean>();
}