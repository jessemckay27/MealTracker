import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div class="edit-wrap" *ngIf="childSelectedMeal">
      <h3>Edit Meal</h3>
      <div>
        <label>Enter Meal Name:</label>
         <input class="form-control" [(ngModel)]="childSelectedMeal.name">
      </div>
      <div>
        <label>Enter Meal Description:</label><br>
        <input class="form-control" [(ngModel)]="childSelectedMeal.description">
      </div>
      <div>
        <label>Enter Approximate Calories:</label><br>
        <input class="form-control" [(ngModel)]="childSelectedMeal.calories">
      </div>
      <button class="btn"(click)="doneButtonClicked()">Done</button>
    </div>
    `
  })

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

    doneButtonClicked() {
     this.doneButtonClickedSender.emit();
   }

 }
