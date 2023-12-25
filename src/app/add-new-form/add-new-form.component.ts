import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-new-form',
  templateUrl: './add-new-form.component.html',
  styleUrls: ['./add-new-form.component.css']
})
export class AddNewFormComponent implements OnInit {
  // instance of adminform of type formgroup
  adminForm!: FormGroup;

  /*initializing formbuilder which is helper class of formgroup because 
  of this we don't have to create new instance of formgroup*/
  constructor(private adminFormBuild: FormBuilder) {

  }

  ngOnInit(): void {
    this.adminForm = this.adminFormBuild.group({
      formSwitch: [{ value: true, disabled: false }],  // [initiavalue,[validators]]
      formSelect: this.adminFormBuild.array([
        'checkbox',
        'textarea',
        'number'
      ]),
      enableCheckbox: true,
      enableTextarea: true,
      enableNumber: true,
      formCheckbox: this.adminFormBuild.array([]),
      formTextarea: this.adminFormBuild.array([]),
      formNumber: this.adminFormBuild.array([])
    });
    // console.log(this.getFormArray('formSelect').controls)
  }

  // method to get field of form based on key, which is of type array
  getFormArray(key: any): FormArray {
    return this.adminForm.get(key) as FormArray;
  }

  getNewField(key: any): FormGroup {
    switch (key) {
      case "checkbox":
        return this.adminFormBuild.group({
          label: "",
          ticked: true,
          disabled: false
        }
        );
      case "textarea":
        return this.adminFormBuild.group({
          label: "",
          value: "",
          disabled: false
        })
      default:
        return this.adminFormBuild.group({
          label: "",
          value: "",
          min: "",
          max: "",
          disabled: false
        });
    }
  }

  addNewField(key: String) {

    let fieldKey = key[0].toUpperCase() + key.substring(1);
    //console.log(fieldKey);

    this.getFormArray('form' + fieldKey).push(this.getNewField(key));
    //console.log(this.getFormArray('form'+fieldKey));
    //this.adminForm.get('formCheckbox')?.disable();
  }


  toggleFields(key:String) {
    let fieldKey= key[0].toUpperCase()+key.substring(1);
    console.log(fieldKey);
    
    let enabled = this.adminForm.get('enable' + fieldKey)?.value; // getting the boolean value from the form
    console.log(enabled);
    
    if (enabled) {  // enabling or disabling the whole field based on key
      this.adminForm.get('form' + fieldKey)?.disable();
    }
    else {
      this.adminForm.get('form' + fieldKey)?.enable();
    }
    //console.log(disabled);
    

  }





}
