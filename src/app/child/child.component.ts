import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  newValue='';
  color = '';
  @Input() newProductID ;
  @Input() newProductQuantity;
  @Output() valueChangeInput = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateQuantity(){
    this.valueChangeInput.emit({ productID: this.newProductID, updatedValue: this.newValue });
}

  ngOnChanges(){
    if(this.newProductQuantity>10)
    {
      this.color = 'green'
    }
    else
    this.color = 'red'
  }
}
