import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  employees : Object;
  departments : Object;
  submitReturn : Object;
  getUser : Object;

  addForm: FormGroup;
  editForm: FormGroup;
  getForm: FormGroup;

  success = false;
  getSuccess = false;
  submitted = false;

  constructor(private data : DataService, private formBuilder : FormBuilder) { }

  onSubmit(){
    this.submitted = true;

    if(this.addForm.invalid){
      return;
    }
      this.data.addEmployee(this.addForm.controls.name.value , this.addForm.controls.surname.value ,
      this.addForm.controls.age.value ).subscribe( success => {
        this.submitReturn = success
        console.log(this.submitReturn)
        this.success = true;
        this.submitted = false;
      });
  }

  get(){
    this.submitted = true;

    if(this.addForm.invalid){
      return;
    }
    this.data.getEmployee(this.addForm.controls.name.value , this.addForm.controls.surname.value).subscribe(success =>{
      console.log(success)
      this.submitted = false;
      this.getSuccess = true;
      this.getUser = success;
    });
  }

  ngOnInit() {
    this.data.getEmployees().subscribe(data =>{
      this.employees = data
      console.log(this.employees);
    });

    /*this.data.getDepartments().subscribe(data => {
      this.departments = data
      console.log(this.departments)
    }); */

    //Initialise form
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required]
    });

    this.getForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required]
    });

  }

}
