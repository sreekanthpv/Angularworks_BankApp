import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  currentAcc:any
  data:any={
    1000:{acno:1000,pwd:1000,username:"user1",bal:2000,transaction:[]},
    1002:{acno:1002,pwd:1002,username:"user2",bal:9000,transaction:[]}
  
  }

  constructor() {
    this.getDetails()
   }




  //  REGISTER
  register(acno:any,pwd:any,username:any){
    let data=this.data
    if(acno in data){
      console.log(data)
      return false
    }
    else{
      data[acno]={
        acno,
        pwd,
        username,
        bal:0,
        transaction:[]
      }
      this.saveDetails() 
      console.log(data)
      return true
    }
   

  }





  // SAVEDETAILS
saveDetails(){
  if(this.data){
  localStorage.setItem("datas",JSON.stringify(this.data))
  }

  if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }

  if(this.currentAcc){
    localStorage.setItem("currentAcc",JSON.stringify(this.currentAcc))
  }
}




// GETDETAILS
getDetails(){
if(localStorage.getItem("datas")){
  this.data=JSON.parse(localStorage.getItem("datas") || "")
}
if(localStorage.getItem("currentUser")){
  this.currentUser=JSON.parse(localStorage.getItem("currentUser") || "")
}
if(localStorage.getItem("currentAcc")){
  this.currentAcc=JSON.parse(localStorage.getItem("currentAcc") || "")
}



}


// LOGIN
login(acno:any,pwd:any){

  let db=this.data
  
  if(acno in db){
  
    if(pwd==db[acno]["pwd"]){
      this.currentUser=db[acno]["username"]
      this.currentAcc=acno
      this.saveDetails()
      return (db[acno]["username"])
    }
    else{
      return false
    }
  }
  else{
    alert("user not exist")
    return false
  }

}




// DEPOSIT

deposit(acc:any,pwd:any,amt:any){
  let amount=parseInt(amt)
  let data=this.data
  if(acc in data){
    if(pwd==data[acc]["pwd"]){
    data[acc]["bal"]=data[acc]["bal"]+amount
    data[acc]["transaction"].push(
      {
        amt:amount,
        type:"CREDIT"
      }
    )
    this.saveDetails()
    return data[acc]["bal"]
    }
    else{
      return false
    }
  }
  else{
    return false
  }
}




// WITHDRAW
withdraw(wacc:any,wpwd:any,wamt:any){
  let amount=parseInt(wamt)
  let data=this.data
  var currentAcc=this.currentAcc

  if(wacc in data){

    if(wacc == currentAcc){

      if(wpwd==data[wacc]["pwd"]){
        data[wacc]["bal"]=data[wacc]["bal"]-amount
        data[wacc]["transaction"].push(
          {
            amt:amount,
            type:"DEBIT"
          }
        )
        this.saveDetails()
        return data[wacc]["bal"]
        }

        else{

          alert("invalid password")
          return false
        }

    }

    else{

      alert("permission denied")
    }

  }

  else{
    return false
  }

}

getTransactions(){
  return this.data[this.currentAcc].transaction
}





}


