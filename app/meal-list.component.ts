import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allMeals" selected="selected">All Meals</option>
      <option value="highCalories">High Calorie Meals</option>
      <option value="lowCalories" selected="selected">Low Calorie Meals</option>
    </select>

    <div *ngFor="let currentMeal of childMealList | calories:filterByCalories">
      <div>{{currentFood.name}}</div>
      <div>{{currentFood.description}}</div>
      <div>{{currentFood.calories}}</div>
      <button (click)="editButtonHasBeenClicked(currentMeal)">Edit!</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  filterByCalories: string = "allMeals";

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }

}
