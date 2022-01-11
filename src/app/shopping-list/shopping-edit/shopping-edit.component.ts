import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ShoppingListService } from 'src/app/services/shoppingList.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  // @Output() ItemAdded = new EventEmitter<Ingredient>();
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    const itmName = this.nameInputRef.nativeElement.value;
    const itmAmount = this.amountInputRef.nativeElement.value;
    const newItem = new Ingredient(itmName, itmAmount);
    // this.ItemAdded.emit(newItem);
    this.slService.addItem(newItem);
  }
}
