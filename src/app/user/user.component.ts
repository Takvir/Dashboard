
import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  data : any = [];

  
  constructor(private JSONPlaceholderService : JSONPlaceholderService) { }

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company',];
  dataSource = this.data;

  ngOnInit(): void {
    this.JSONPlaceholderService.getData().subscribe((data)=>
    {
      console.log(data)
      this.data = data;
    })
  }

 
  
   
  

}
