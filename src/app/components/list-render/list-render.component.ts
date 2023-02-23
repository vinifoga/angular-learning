import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Lost", type: "Dog", age: 12},
    {name: "Lili", type: "Cat", age: 3},
    {name: "Bob", type: "Horse", age: 5}
  ];

  animalDetails = '';

  constructor(private listService: ListService) {

  }

  showAge(animal: Animal){
    this.animalDetails = `The pet ${animal.name} is ${animal.age} years old!`;
  }

  removeAnimal(animal: Animal){
    alert('Removing Animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }
}
