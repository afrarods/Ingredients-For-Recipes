import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Beef And Broccoli',
      'If you want your kids to eat more broccoli, this is the recipe for you.',
      'https://www.corriecooks.com/wp-content/uploads/2019/10/instant-pot-beef-and-broccoli-new-e1573401783989.jpg',
      [new Ingredient('Beef', 1), new Ingredient('Broccoli', 10)]
    ),
    new Recipe(
      'Shrimp Boil',
      'It’s a perfect recipe for your next family get-together.',
      'https://www.corriecooks.com/wp-content/uploads/2019/01/Shrimp-Boil-Served-3.jpg',
      [new Ingredient('Shrimp', 15), new Ingredient('Corn', 6)]
    ),
    new Recipe(
      'Chocolate Cake',
      'To make sure we’re not all going to succumb to our cravings and go live in a house made of cake, I decided that we’re only going to eat sweets we cook in the house.',
      'https://www.corriecooks.com/wp-content/uploads/2020/01/chocolate-cake-new.jpg',
      [new Ingredient('Chocolate', 1), new Ingredient('Eggs', 8)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
