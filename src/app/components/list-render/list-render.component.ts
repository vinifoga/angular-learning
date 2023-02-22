import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals = [
    {name: "Lost", type: "Dog"},
    {name: "Lili", type: "Cat"},
    {name: "Bob", type: "Horse"}
  ]

}
