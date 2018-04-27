import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   rFrom: FormGroup;
  ngOnInit() {
    this.rFrom = new FormGroup({
         Firstname: new FormControl('',[Validators.required]),
         Lastname: new FormControl('',[Validators.required]),
         street:new FormControl('',[Validators.required]),
         zip: new FormControl('', Validators.required),
         state:new FormControl('', Validators.required)
      
    });
  
  }
  onSubmit()
  { 
   alert("You have successfully  submitted")
  }
  
}
