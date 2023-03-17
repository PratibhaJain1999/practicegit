import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {
  mode='grid';
  searchValue=''
  gridList=[
    {
      name:'pizza',
      id:'1',
      imagePath:'https://s3.amazonaws.com/images.ecwid.com/images/16648100/1640836660.jpg',
      quantity:'50kg'
    },
    {
      name:'burger',
      id:'2',
      imagePath:'https://s3.amazonaws.com/images.ecwid.com/images/16648100/1640836660.jpg',
      quantity:'50kg'
    },
    {
      name:'Sandwiches',
      id:'3',
      imagePath:'https://s3.amazonaws.com/images.ecwid.com/images/16648100/1640836660.jpg',
      quantity:'50kg'
    }
  ]
  backUp=this.gridList

  constructor() { }

  ngOnInit(): void {
  }
  grid(){
if(this.mode=='grid'){
  this.mode='list'
} 
else{
  this.mode='grid'
} }
gridMode(){
  this.mode="grid"
}
listMode(){
  this.mode="list"
}
search(){
  this.gridList=this.gridList.filter(x =>x.name.includes(this.searchValue))

}
Cancel(){
  this.backUp=this.gridList

  this.searchValue='';
}
gridlist(){
  if(this.mode=='list'){
    this.mode='grid'
  }
  else{
    this.mode='list'
  }
}
}
