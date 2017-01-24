import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `

    <h2>New Meal</h2>
    <div class="meal-wrap new-meal">
      <div>
        <label>Enter Meal Name:</label>
        <input class="form-control" #newName>
      </div>
      <div>
        <label>Enter Meal Description:</label>
        <input class="form-control" #newDescription>
      </div>
      <div>
        <label>Enter Meal Calories:</label>
        <input type="number" class="form-control" #newCalories>
      </div>
      <button class='btn'
      (click)="submitForm(newName.value, newDescription.value, newCalories.value); newName.value=''; newDescription.value=''; newCalories.value='';">Add</button>
    </div>
    `
  })
export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, description: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, description, calories);
    this.newMealSender.emit(newMealToAdd);
  }

}
