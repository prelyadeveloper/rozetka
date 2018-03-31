import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'objectKey'})
export class ObjectKeyPipe implements PipeTransform {
    transform(value: string): string {
        console.log(value);
        return Object.keys(value)[0];
    }
}
