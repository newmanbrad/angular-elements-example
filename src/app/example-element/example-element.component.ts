import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'example-element',
  templateUrl: './example-element.component.html',
  styleUrls: ['./example-element.component.scss']
})
export class ExampleElementComponent implements OnInit {
  @Input()
  public name1: string;

  @Input()
  public name2: string;

  @Input()
  public name3: string;

  @Input()
  public color1: string;

  @Input()
  public color2: string;

  @Input()
  public color3: string;

  ngOnInit() {}
}
