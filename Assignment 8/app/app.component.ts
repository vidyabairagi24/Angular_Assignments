import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public Name : string ="";

  public Message: any;
  public message = "Hello From parent";

  public str :string="";

    public Demo(name1:any)
    {
        this.str = name1;
    }

}
 