import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AddNewFormComponent } from './add-new-form/add-new-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('addnewform', { read: ViewContainerRef })
  addnewform!: ViewContainerRef;

  ngOnInit(): void {}

  addNewFormComponent() {
    this.addnewform.createComponent(AddNewFormComponent);
  }
}
