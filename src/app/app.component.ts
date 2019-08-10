import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondapp';
  constructor(private dataservice: DataService){}

  getList(){
    this.dataservice.getQuizList().subscribe(res => {
      console.log(res);
    })
  }
}
