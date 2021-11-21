import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acc=""
  pwd=""
  amt=""
  wacc=""
  wpwd=""
  wamt=""


  currentUser=this.ds.currentUser
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  deposit(){
    // alert("deposit clicked")
      let acc=this.acc
      let pwd=this.pwd
      let amt=this.amt
      let res=this.ds.deposit(acc,pwd,amt)
      if(res){
        alert(`bal is ${res}`)
      }
      else{
        alert("failed")
      }

  }
  withdraw(){
    let acc=this.wacc
    let pwd=this.wpwd
    let amt=this.wamt
    let res=this.ds.withdraw(acc,pwd,amt)
    if(res){
      alert(`bal is ${res}`)
    }
    else{
      alert("failed")
    }
  }
}
