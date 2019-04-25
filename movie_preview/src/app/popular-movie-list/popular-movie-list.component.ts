import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popular-movie-list',
  templateUrl: './popular-movie-list.component.html',
  styleUrls: ['./popular-movie-list.component.css']
})
export class PopularMovieListComponent implements OnInit {

  public movieList=[];
  public url="https://api.themoviedb.org/3/movie/popular?api_key=4b10cf2f8e6ed1fcb506bd3929ecee40";
  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.movielist();
  }

  movielist(){
    this.http.get(this.url).subscribe(res =>{
      console.log(res);
      
      res['results'].forEach(movies => {
        let datas = {};
        datas['movieimgpath']=movies['backdrop_path'];
        datas['moviename']=movies['title'];
        this.movieList.push(datas);
      });
    })
  }

 
}
