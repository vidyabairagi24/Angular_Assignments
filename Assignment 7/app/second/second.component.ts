import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent
{
    public str ="Marvellous Infosystems";
    public Data1 ="";
    public Data2 ="";

    public upper():String
    {
        this.Data1 =this.str.toUpperCase();
        return this.Data1;
    }

    public lower(): String
    {
      this.Data2=this.str.toLowerCase();
      return this.Data2;
    }
}

