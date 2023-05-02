import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform 
{
  isPrime :boolean= true;
  i : number =0;

  transform(value: number, ...args: unknown[]): any
  {
    let isPrime :boolean = true;
    let i :number=0;
    let sum = 1;

    if(args[0] == "Even")
    {
      if((value % 2 == 0))
      {
        return value + " is even number";
      }
      else
      {
         return value +" is odd number";
      }
    }
    else if(args[0] == "Prime")
    {
        for(i=2;i<value;i++)
        {
          if((value % i) == 0)
          {
            isPrime = false;
          }
        }
        if(isPrime)
        {
          return  value +" is prime number";
        }
        else
        {
          return  value + " is not prime number";
        }
    }
    else if(args[0] == 'Perfect')
    {
       // Find all divisors and add them
      for (i = 2; i * i <= value; i++)
      {
        if (value % i==0)
        {
            if(i * i != value)
                sum = sum + i + value / i;
            else
                sum = sum + i;
        }
      }
      if (sum == value && value != 1)
      {
         return  value+" is perfect number";
      }
      else
      {
        return value + " is not a perfect number";
      }
      
    }    
    
  }

}
