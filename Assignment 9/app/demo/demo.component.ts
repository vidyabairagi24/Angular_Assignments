import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit
{
    public No1 : number = 15;
    public No2 : number = 10;
    public Result1 : number = 0;
    public Result2 : number = 0;

    constructor(public aobj:ArithmeticService)
    {}

    ngOnInit()
    {
        this.Result1 = this.aobj.Add(this.No1,this.No2);
        this.Result2 = this.aobj.Sub(this.No1,this.No2);
    }

}
