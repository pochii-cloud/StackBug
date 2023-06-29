import { Pipe, PipeTransform, isStandalone } from '@angular/core';
import { Question } from 'src/interfaces/interfaces';

@Pipe({
  name: 'tagspipe',
  standalone:true
})
export class TagspipePipe implements PipeTransform {

  transform(tags: any): any[] {
    if (tags) {
      const tagArray = tags.split(',').map((tag: string) => tag.trim());
      return tagArray;
    }
    return [];
  }

}
