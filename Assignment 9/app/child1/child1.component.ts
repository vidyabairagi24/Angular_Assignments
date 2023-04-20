import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit
{
  public num :number = 11;
  public Res:boolean=false;
  public str :string="";
  constructor(public nobj: NumberService)
  {}

  ngOnInit()
  {
    this.Res = this.nobj.ChkPrime(this.num);
    if(this.Res == true)
    {
      this.str="Prime Number"
    }
    else
    {
      this.str ="Not prime Number"
    }
  }
  
}
