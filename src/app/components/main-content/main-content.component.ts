import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../shared/model/user';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit, AfterViewInit, OnDestroy{
  @Input() shownUsers?:User[];

  constructor(){
    console.log("1");
  }
  
  ngOnInit(): void {
    console.log("2");
  }

  ngAfterViewInit(): void {
    console.log("3");
  }

  ngOnDestroy(): void {
    console.log("4");
  }

}
