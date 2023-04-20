import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{
    public CountCapital(str:string):any
    {
      let count :any = 0;

      count = str.match(/[A-Z]/g);
      return count;
    }
  
}
