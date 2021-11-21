import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // str="hello"
  // acno="account no !!!"

  // acc=""
  // pwd=""

  loginForm=this.fb.group(
    {
      acc:["",[Validators.required,Validators.pattern('[0-9]*')]],
      pswd:["",[Validators.required,Validators.pattern('[0-9A-Za-z]*')]]
    }
  )

  
  constructor(private loginrouter:Router, private ds:DataService,private fb:FormBuilder) {  }

  ngOnInit(): void {
  }

  login(){

    // console.log(this.loginForm.value.acc);
    

    let acc=this.loginForm.value.acc
    let pswd=this.loginForm.value.pswd
   if(this.loginForm.valid){

    let res=this.ds.login(acc,pswd)
    if(res){
          alert(`login success user ${res}`)
        
          this.loginrouter.navigateByUrl("dashboard")
      }
      else{
        alert("login failed")
      }
    
    }
    else{
      alert("please enter valid account no and password")
    }


   }
    
  //    if(acc in db){
  //         if(pswd == db[acc]["pwd"]){
  //             alert("login success")  
  //             this.loginrouter.navigateByUrl("dashboard")
  //         }
  //         else{
  //           alert("invslid password")
  //         }
    
  //     }
  //     else{
  //       alert("user doesnot exist")
  //     }
  
  // }

  

// changeac(event:any){

//   // console.log(event.target.value);
  
//   this.accountno=event.target.value

// }

// changepass(event:any){
//   // console.log(event.target.value);
  
//   this.pwd=event.target.value
// }


// login(a:any,p:any){
//   console.log("accountno",a);

  
//   let acc=a.value
//   let pswd=p.value
//   let db=this.data
//   console.log("password=",pswd);
//   console.log("databse",db[acc]["pwd"]);
  
  
//    if(acc in db){
//         if(pswd == db[acc]["pwd"]){
//             alert("login success")  

//         }
//         else{
//           alert("invslid password")
//         }
  
//     }
//     else{
//       alert("user doesnot exist")
//     }
//   }

}
