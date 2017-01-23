import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
      <hr>
      <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
      <new-meal (newMealSender)="addMeal($event)"></new-meal>
    </div>
  `
})

export class AppComponent {

  masterMealList: Meal[] = [
    new Meal('Steak and Eggs', 'great breakfast!', 1000),
    new Meal('Sushi', 'my favorite', 800),
    new Meal('Salad', 'low calorie', 300)
  ];

  selectedMeal = null;

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }

  addMeal(newMeal: Meal) {
    this.masterMealList.push(newMeal);
  }

}
