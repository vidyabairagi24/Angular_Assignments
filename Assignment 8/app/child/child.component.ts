import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
{
  @Output() public MyEvent = new EventEmitter();
  @Input() public parentData: any;
 
  /*
  public SendEvent(str :string)
  {
    this.MyEvent.emit('Hello '+ str +' From child');
  }
 */

  public fun()
  {
    this.MyEvent.emit('Hello from child');
  }
}
