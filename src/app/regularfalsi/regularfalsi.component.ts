import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegularFalsiModel } from './regularfalsi.model';

@Component({
  selector: 'app-regularfalsi',
  templateUrl: './regularfalsi.component.html',
  styleUrls: ['./regularfalsi.component.css']
})
export class RegularfalsiComponent implements OnInit {
  userForm: any;
  e=0.0001;
  root:any;
  list: RegularFalsiModel[] = [];  
  func: any;

  constructor(private formBuilder : FormBuilder) { 
    this.userForm = this.formBuilder.group({
      a: ['', Validators.required],
      b: ['', Validators.required],
      func: ['',Validators.required],
    });
   }

  ngOnInit(): void {
  }

  saveUser(): void {
  let a: any ,b: any,m: any,i: number ; 
  if(this.userForm.value.a != null) {
    a = this.userForm.value.a;
    b = this.userForm.value.b;
    this.func = this.userForm.value.func;
  }
   if(this.f(a) * this.f(b) > 0)
   alert("Invalid Interval");
   else{
       m = (a*this.f(b) - b*this.f(a))/(this.f(b) - this.f(a));
       i =1;
       while(Math.abs(this.f(m)) > this.e){
         this.list.push(new RegularFalsiModel(a,b,m,this.f(m),this.f(a)* this.f(m)));
           if(this.f(a)*this.f(m) > 0)
           a = m;
           else 
           b = m;
           m = (a*this.f(b) - b* this.f(a))/(this.f(b) - this.f(a));
           i++;
       }   
    this.root = m;
    console.log(this.userForm.value);
    console.log(this.list);
  }
}
   f(x: any) : any {
    return eval(this.userForm.value.func.replaceAll('x',x));
  }

}


