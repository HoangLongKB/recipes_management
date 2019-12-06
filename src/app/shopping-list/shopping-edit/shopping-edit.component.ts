import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() onAddIngredient = new EventEmitter<Ingredient>();
  addedIngredient: Ingredient;
  constructor() { }

  ngOnInit() {
  }
  addIngredient(ipIngredientName, ipIngredientAmount) {
    let ingName = ipIngredientName.value;
    let ingAmount: number = parseInt(ipIngredientAmount.value);
    this.addedIngredient = new Ingredient(ingName, ingAmount);
    this.onAddIngredient.emit(this.addedIngredient);
  }
}
