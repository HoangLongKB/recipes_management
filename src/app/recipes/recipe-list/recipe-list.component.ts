import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() onSelectRecipe = new EventEmitter<Recipe>(); 
  recipes: Recipe[] = [
    new Recipe('Nachos', `If you haven't learned how to make your own nachos, this is your moment. Ellis Barrie shows you how`, 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/nachos_92445_16x9.jpg'),
    new Recipe('Tuscan Chicken Skillet', `Bacon, cream, Parmesan -- is your mouth watering yet? There's no need to go out to dinner `, 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }
  chooseRecipe(recipe: Recipe) {
    this.onSelectRecipe.emit(recipe);
  }
}
