import { Pipe, PipeTransform } from '@angular/core';
import { Question } from 'src/interfaces/interfaces';

@Pipe({
  name: 'search',
  standalone:true
})
export class SearchPipe implements PipeTransform {

  transform(questions: Question[], search: string): Question[] {

    // if no search string, return all questions

    if (!search) {
      return questions;
    }

    // if search string, filter questions

    return questions.filter((question) => {
      return question.title.toLowerCase().includes(search.toLowerCase());
    });
  }

}
