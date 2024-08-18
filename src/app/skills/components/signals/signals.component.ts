import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RootService } from '../../root.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent implements OnInit {
  destroyRef = inject(DestroyRef)
  citiesList: Array<any> = [];
  // Writable signals => can edit it by set or updated
  citiesListSignales = signal<Array<any>>([]);

  // computed signale => depends on other signales and caching data
  cititesComputedSignal = computed(() => {
    if (this.searchText()) {
      return this.citiesListSignales().filter((c) =>
        c.name.en.toLowerCase().includes(this.searchText().toLowerCase())
      )
    }
    return this.citiesListSignales()
  })
  searchText = signal<string>('')

  displayedColumns = signal<string[]>([
    'id', 'name' ,
  ]).asReadonly()

  constructor(private _rootService: RootService, private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this._rootService
      .getCities()
      .pipe((takeUntilDestroyed(this.destroyRef)))
      .subscribe((resp: any) => {
        // this.citiesList = resp.data;
        // if i use normal list like this i need to detect change manualy by detect change ref
        // this.cdr.detectChanges()
        // in single no need for that it listen for change automaticly and render this spicfic view part
        this.citiesListSignales.set(resp.data);
      })
  }


  addCoures() {
    this.citiesList.unshift({ name: { en: 'unit test' } })
  }

  searchFunc(term: any) {
    this.searchText.set(term)
  }
}
