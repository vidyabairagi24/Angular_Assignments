import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{
    public ChkPrime(Num:number):any
    {
      let flag: boolean= false;
      
      for(let i=2; i< Num/2;i++)
      {
        if(Num % i==0 )
        {
            flag = true
            break
        }
     }
    if(!flag)
    {
        return true
    }
    else
    {
       return false
    }
    }
  
}
