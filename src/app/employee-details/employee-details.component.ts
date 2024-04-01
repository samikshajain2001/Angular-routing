import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  
  public EmpID:any;
  public EmpName:any;
  constructor(private acRoute: ActivatedRoute, private router: Router){}
  
  PreviousEmp(){
    let previousId=parseInt(this.EmpID) - 1;
    this.router.navigate(['/employees', previousId]);
  }

  NextEmp(){
    let nextId=parseInt(this.EmpID) + 1;
    this.router.navigate(['/employees', nextId]);
  }
  
  goToEmployeees(){
    let selectedID = this.EmpID;
    this.router.navigate(['/employees',{id: selectedID}])
  }

  ngOnInit(): void {
    // let id = this.acRoute.snapshot.paramMap.get('id');
    // let name = this.acRoute.snapshot.paramMap.get('name');
    // this.EmpID=id;
    // this.EmpName=name;
    this.acRoute.paramMap.subscribe((param: ParamMap)=>{
      let id=param.get('id');
      this.EmpID=id;
    });
  }
}
