import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  someText: string = "Just testing the pipe operator";
  date: Date = new Date();

  updateDate(){
    this.date = new Date();
  }

}
