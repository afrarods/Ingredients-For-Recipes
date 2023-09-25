import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'name Test',
      'description Test',
      'https://www.corriecooks.com/wp-content/uploads/2023/01/white-eggplant.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
