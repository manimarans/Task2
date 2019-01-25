import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Meta } from '../Meta';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {
  @Input() data:Meta[]=[];

  ngOnInit() {
    var object = {};
    this.data.forEach(item => {
      object[item.name] = item.value;
    });
     this.form = this.fb.group(object);
  }
  form: FormGroup;
 
   constructor(private fb: FormBuilder, private myservice : PopupService) {
  }

  submitForm() {
    console.log("Form Data : ",this.form.value);
    this.myservice.isShowned = false;
  }
}
