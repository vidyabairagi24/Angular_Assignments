import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService 
{
    public Add(Num1:number, Num2:number):number
    {
      return Num1 + Num2 ;
    }
  
    public Sub(Num1:number, Num2:number):number
    {
      return Num1 - Num2 ;
    }
}
