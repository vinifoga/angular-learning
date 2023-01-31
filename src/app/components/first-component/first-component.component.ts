import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name: string = 'Vinicius';
  age: number = 27;
  job: string = 'Software Developer';
  hobbies = ["Run", "Play Saxphone", "Read"];
  car = {
    name: "Gol",
    year: 1998
  }

}
