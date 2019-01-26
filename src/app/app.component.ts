import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import {Meta} from './Meta'
import { PopupService } from './popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragdrop';
  controlList = [] = ["Text Box","Drop Down", "Password"];
  FormList = [] = [];
  controlData : Meta[] = [];
  itemEdited : boolean;
  editedIndex : number;
  isPreviewClicked = false;

  constructor(private myservice : PopupService){
    
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      // console.log(this.controlList[event.previousIndex]);
      
      if(this.controlList[event.previousIndex] === "Text Box" || this.controlList[event.previousIndex]==="Password"){
          let ob : Meta = {
          name : "Control "+(this.controlData.length+1),
          type : this.controlList[event.previousIndex]==="Text Box"?"text":"password",
          value : "",
          options :[]
        }
         this.controlData.push(ob);
      }
      else{
        let ob : Meta = {
          name : "Control "+(this.controlData.length+1),
          type : "dropdown",
          value : "",
          options :[{ key: '1', label: 'option 1' },
          { key: '2', label: 'option 2' },
          { key: '3', label: 'option 3'}]
        }
         this.controlData.push(ob);
      }
      // console.log(this.controlData);
      
        copyArrayItem(event.previousContainer.data,event.container.data,event.previousIndex, this.controlData.length-1)
      } 
    
    }
    previewClicked(){
      this.myservice.isShowned = true;
    }
    itemClicked(indexOfItem){
     this.editedIndex  = indexOfItem;
    }
    setNameClicked(evt : Event){
      this.editedIndex=-1;
      evt.stopPropagation();
    }
}
