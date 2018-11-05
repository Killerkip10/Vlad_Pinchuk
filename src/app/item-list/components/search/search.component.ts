import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

interface InputEvent {
  target: {value: string};
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  @ViewChild('searchItem') searchItem: ElementRef;
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    fromEvent<InputEvent>(this.searchItem.nativeElement, 'input')
      .pipe(debounceTime(500))
      .subscribe(v => this.search.emit(v.target.value));
  }
}
