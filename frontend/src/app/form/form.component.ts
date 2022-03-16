import { Component,EventEmitter,Output, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  
  @Output()valueSubscibedChanged=new EventEmitter();
  @Output()newUser=new EventEmitter();

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    birthday: new FormControl(''),
    city: new FormControl(''),
    sex: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor(private service:ServiceService) { }
  id:any;

   onSubmit() {
    console.log(this.profileForm.value);
    this.id= this.service.adduser(this.profileForm.value);
    this.valueSubscibedChanged.emit(this.profileForm.value); 
    this.newUser.emit(this.id);
  }

  ngOnInit(): void {
  }

}
