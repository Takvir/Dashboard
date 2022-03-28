import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  data : any = [];
  Loading : boolean = true;

  constructor(private JSONPlaceholderService:JSONPlaceholderService) { }


  ngOnInit(): void {
    
  }

  getDataFromAPI()
  {
    this.Loading = true;
    this.JSONPlaceholderService.getData().subscribe((data)=>
    {
      console.log(data)
      this.data = data;
      this.Loading = false;
    
    })
  }

}
