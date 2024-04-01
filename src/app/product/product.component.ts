import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private router: Router,private route: ActivatedRoute){}

  showTshirts(){
    this.router.navigate(['tshirts'], {relativeTo: this.route})
  }
  showPants(){
    this.router.navigate(['pants'], {relativeTo: this.route})
  }

}
