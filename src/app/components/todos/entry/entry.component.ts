import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoDataService } from 'src/app/services/todo-data-service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();
  constructor(private service: TodoDataService) { }

  ngOnInit() {
  }

  addItem(item1: HTMLInputElement) {
    this.itemAdded.emit(item1.value);
    item1.value = '';
    item1.focus();
  }
}
