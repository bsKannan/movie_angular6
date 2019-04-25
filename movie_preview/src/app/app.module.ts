import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TrendingChartComponent } from './trending-chart/trending-chart.component';
import { PopularMovieListComponent } from './popular-movie-list/popular-movie-list.component';


const routes: Routes =[
  {
    path:'trending',
    component: TrendingChartComponent
  },
  {
    path:'popularmovies',
    component: PopularMovieListComponent
  },
  { 
    path: '',
    redirectTo: '/trending',
    pathMatch: 'full'
  }
]


@NgModule({
  declarations: [
    AppComponent,
    TrendingChartComponent,
    PopularMovieListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
