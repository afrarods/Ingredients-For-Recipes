import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'name TestOne',
      'description TestOne',
      'https://www.corriecooks.com/wp-content/uploads/2023/01/white-eggplant.jpg'
    ),
    new Recipe(
      'name TestTwo',
      'description TestTwo',
      'https://images.deliveryhero.io/image/foodpanda/recipes/igado-recipe-2.jpg'
    ),
    new Recipe(
      'name TestThree',
      'description TestThree',
      'https://hostessatheart.com/wp-content/uploads/2022/09/Oven-Brisket-Recipe-SM-Feature-1200x630-Image-735x386.png.webp'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
