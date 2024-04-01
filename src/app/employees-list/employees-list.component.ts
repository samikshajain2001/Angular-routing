import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{
  
  MyEmployees = [
    {"id":1, "name":"Samiksha"},
    {"id":2, "name":"Riya"},
    {"id":3, "name":"Keshav"},
    {"id":4, "name":"Shourya"},
    {"id":5, "name":"Anurag"},
  ]

  constructor(private router: Router, private route: ActivatedRoute){}

  public selectedID:any;
  EmpClick(employee:any){
    this.router.navigate(['/employees',employee.id]);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap)=>{
      let id=param.get('id');
      this.selectedID=id;
    });
  }
  isSelected(employee: any){
    return parseInt(employee.id) === parseInt(this.selectedID);
  }

}
