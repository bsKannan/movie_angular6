import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // public url="https://api.themoviedb.org/3/trending/all/day?api_key=4b10cf2f8e6ed1fcb506bd3929ecee40";
  constructor(private http: HttpClient ){}
    
//   ngOnInit() {
//     this.http.get(this.url).subscribe(res=>{
//     var temp=res;
//     console.log(temp)
//     // console.log(tempmessage);

//   })
// }
}

// url : https://developers.themoviedb.org/3/trending/get-trending
