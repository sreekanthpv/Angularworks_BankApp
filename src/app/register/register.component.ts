import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 v="hello"
  // uname=""
  // accountno=""
  // password=""
  
  registerForm=this.fb.group({

    uname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })




  constructor(private ds:DataService,private regrouter:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){

    
    
    let uname=this.registerForm.value.uname
    let password=this.registerForm.value.acno
    let accountno=this.registerForm.value.pswd

    if( this.registerForm.valid){

      var val=this.ds.register(accountno,password,uname)
    if(val){
      alert("registration success")
      this.regrouter.navigateByUrl("")
    }
    else{
      alert("account already exist")
      this.regrouter.navigateByUrl("")
    }

    }
    else{
      alert("invalid form")
    }
    
    
  }

}
