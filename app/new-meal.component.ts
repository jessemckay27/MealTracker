import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <h2>New Meal</h2>
  <div>
    <label>Enter Meal Name:</label>
    <input #newName>
  </div>

  <div>
    <label>Enter Meal Description:</label>
    <select #newDescription>
  </div>

  <div>
    <label>Enter Meal Calories:</label>
    <select #newCalories>
  </div>
  <button (click)="submitForm(newName.value, newDescription.value, newCalories.value); newName.value=''; newDescription.value=''; newCalories.value='';">Add</button>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, description: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, description, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
