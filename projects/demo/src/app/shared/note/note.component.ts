import { Component } from '@angular/core';

@Component({
  selector: 'note',
  template: `
    <span class="note">
      <section>
        <span class="note-icon">
          <mat-icon>error_outline</mat-icon>
        </span>
        <div class="note-content">
          <ng-content></ng-content>
        </div>
      </section>
    </span>
  `,
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

}
