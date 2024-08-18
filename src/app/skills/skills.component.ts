import { Component, DestroyRef, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ArticleListComponent } from '../features/article/components/article-list.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    RouterLink,
    LowerCasePipe
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent extends ArticleListComponent implements OnInit, OnChanges {

  destrRef = inject(DestroyRef)
  skillsList: any[] = []
  ngOnInit(): void {
    this.runQuery();
    this.dataObservable.pipe((takeUntilDestroyed(this.destrRef))).subscribe((resp) => {
      this.skillsList = resp
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

}
