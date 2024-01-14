import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ISearchForm } from '../../models/search-form.interface';
import { debounce, debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-search-products',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-products.component.html',
  styleUrl: './search-products.component.scss'
})
export class SearchProductsComponent implements OnInit {
  public searchForm!: FormGroup<ISearchForm>;

  public ngOnInit(): void {
  //   this.searchForm = new FormGroup<ISearchForm>(
  //     search: new FormControl<string>('', Validators.required)
  //   )

  //   this.searchForm.get('search')?.valueChanges.pipe(
  //     filter(val => val !== ''),
  //     debounceTime(200),
  //     distinctUntilChanged()
  //   )
  }
}
