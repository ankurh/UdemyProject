import { Component, OnInit } from '@angular/core';
import { MyRecipe } from './myRecipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  description:string="Test Description";  
  
  myrecipes:MyRecipe[] = [
    new MyRecipe("Ice Cream Sandwiches",this.description,"https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/04/14111847/opener-alt_wide.jpg")
  ];  
  
  
  constructor() {}
  ngOnInit() {
  }

}
