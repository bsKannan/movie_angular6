import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CanvasJS from '../../assets/CanvasJS.min.js';

@Component({
  selector: 'app-trending-chart',
  templateUrl: './trending-chart.component.html',
  styleUrls: ['./trending-chart.component.css']
})
export class TrendingChartComponent implements OnInit {
  
  public movieRating=[];
  public url = "https://api.themoviedb.org/3/trending/all/day?api_key=4b10cf2f8e6ed1fcb506bd3929ecee40";
  constructor(private http:HttpClient){
    this.rating();
  }

  ngOnInit() {

  }
  rating() {   
  this.http.get(this.url).subscribe(res =>{
    // console.log(res['results'])
    res['results'].forEach(data => {
      let a={};
      a['y']=data['vote_average'];

      if('original_title' in data){
        a['label']=data['original_title'].split(':')[0];
      }
      else{          
        a['label']=data['original_name'].split(':')[0]; 
      
      }
     
      this.movieRating.push(a);
      console.log(this.movieRating);
      
      if(res['results'].length==this.movieRating.length)
      {
        this.chart();
      }        
    })      
  })
}


  chart(){
    let chart = new CanvasJS.Chart("chart", {
      theme: "dark1",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Rating For Movies'
      },
       axisY:{
          maximum: 10,
          interval:2
         },
      data: [{
        type: "column",
        dataPoints:this.movieRating,
      }]
    });
      
    chart.render();
  }

}
