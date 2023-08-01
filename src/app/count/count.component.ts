import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

}
