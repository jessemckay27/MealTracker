import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <h2>Select Meal</h2>
    <select class="form-control"(change)="onChange($event.target.value)">
      <option class="form-control" value="allMeals" selected="selected">All Meals</option>
      <option value="highCalories">High Calorie Meals</option>
      <option value="lowCalories">Low Calorie Meals</option>
    </select>

    <div>
      <div class="meal-wrap" *ngFor="let currentMeal of childMealList | calories:filterByCalories">
        <div class="meal-wrap-row"><strong>{{currentMeal.name}}</strong></div>
        <div class="meal-wrap-row">{{currentMeal.description}}</div>
        <div class="meal-wrap-row meal-calories">{{currentMeal.calories}} Calories</div>
        <button class="btn" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  filterByCalories: string = "allMfeals";

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }

}
