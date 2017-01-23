import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div>
      <div *ngIf="childSelectedMeal">
        <h3>Edit Meal</h3>
        <div>
          <label>Enter Meal:</label>
          <input [(ngModel)]="childSelectedMeal.name">
        <div>
        <div>
          <label>Enter approximate calories:</label><br>
          <input [(ngModel)]="childSelectedMeal.description">
        </div>
        <div>
          <label>Enter approximate calories:</label><br>
          <input [(ngModel)]="childSelectedMeal.calories">
        </div>
        <button (click)="doneButtonClicked()">Done</button>
        </div>
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
