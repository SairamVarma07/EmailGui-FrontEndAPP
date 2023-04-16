import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor (private snack:MatSnackBar) {}
  myimage:string='assets/images/Emailbg2.jpeg';

  ngOnInit(): void{
    
  }
  


  btnClick(){
    console.log("btn click");
    this.snack.open("Hey! Welcome to the app:)","Close")
    
  }
}
