import { Component, computed, DestroyRef, inject, Input, signal } from "@angular/core";
import { ArticlesService } from "../services/articles.service";
import { ArticleListConfig } from "../models/article-list-config.model";
import { Article } from "../models/article.model";
import { ArticlePreviewComponent } from "./article-preview.component";
import { NgClass, NgForOf, NgIf } from "@angular/common";
import { LoadingState } from "../../../core/models/loading-state.model";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { UserService } from "src/app/core/services/user.service";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-article-list",
  template: `
    @if (loading === LoadingState.LOADING) {
      <div class="article-preview">Loading articles...</div>
    }

    @if (loading === LoadingState.LOADED) {
      @for (article of results; track article.slug) {
        <app-article-preview [article]="article" />
      } @empty {
        <div class="article-preview">No articles are here... yet.</div>
      }

      <nav>
        <ul class="pagination">
          @for (pageNumber of totalPages; track pageNumber) {
            <li
              class="page-item"
              [ngClass]="{ active: pageNumber === currentPage }"
            >
              <button class="page-link" (click)="setPageTo(pageNumber)">
                {{ pageNumber }}
              </button>
            </li>
          }
        </ul>
      </nav>
    }
  `,
  imports: [ArticlePreviewComponent, NgForOf, NgClass, NgIf],
  styles: `
    .page-link {
      cursor: pointer;
    }
  `,
  standalone: true,
})
export class ArticleListComponent {
  query: ArticleListConfig = {
    type: "all",
    filters: {},
  };
  results: Article[] = [];
  currentPage = 1;
  totalPages: Array<number> = [];
  loading = LoadingState.NOT_LOADED;
  LoadingState = LoadingState;
  destroyRef = inject(DestroyRef);
  userName!: string;


  dataObservable: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([])

  @Input() limit: number = 20;
  @Input()
  set config(config: ArticleListConfig) {
    console.log(config);

    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }


  constructor(private articlesService: ArticlesService, private userService: UserService) {
    this.getUserName()
    console.log('ArticleListComponent');
  }

  setPageTo(pageNumber: number) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = LoadingState.LOADING;
    this.results = [];

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset = this.limit * (this.currentPage - 1);
    }
    this.query.filters.author = this.userName;
    this.articlesService
      .query(this.query)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        this.loading = LoadingState.LOADED;
        this.results = data.articles;
        this.dataObservable.next(data.articles)
        // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
        // this.totalPages = Array.from(
        //   new Array(Math.ceil(data.articlesCount / this.limit)),
        //   (val, index) => index + 1,
        // );
      });
  }

  getUserName() {
    this.userService.currentUser
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((currentUser: any) => {
        return this.userName = currentUser.username
      });
  }
}
