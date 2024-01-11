import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PopupComponent } from './popup/popup.component';
import { ButtonComponent } from './button/button.component';
import { EditService } from './edit.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    TodoListComponent,
    PopupComponent,
    ButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app';

  constructor(public editService: EditService) {}

  onEdit() {
    this.editService.showPopup = !this.editService.showPopup;
    console.log(this.editService.showPopup);
  }
}
