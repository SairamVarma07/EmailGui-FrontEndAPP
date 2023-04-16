import { Component } from '@angular/core';

@Component({
  selector: 'app-emailform',
  templateUrl: './emailform.component.html',
  styleUrls: ['./emailform.component.css']
})
export class EmailformComponent {

  data={
    to:"",
    subject:"",
    message:""

  }
  
 

  DosubmitForm(){
    console.log("try to submit form");
    console.log("DATA",this.data);
   
  }
  

}
