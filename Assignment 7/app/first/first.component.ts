import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent 
{
  public Data ="";
  public fun() : string
  {
    return "Marvellous Infosystems";
  }
  public fun1()
  {
    this.Data="Educating for better tommorow";
  }
}
