import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/util';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  firstClick(){
    return console.log("clicked");
  }

  getUsers(){
    return this.http.get('https://reqres.in/api/users');
  }

  getEmployees(){
    return this.http.get('http://localhost:2025/api/Employee/getAll');
  }

  getEmployee(name,surname){
    let attributeString = "name="+name+"&surname="+surname;
    return this.http.get('http://localhost:2025/api/Employee/getEmployee?'+attributeString);
  }

  addEmployee(name,surname,age){
    
    let attributeString = "name="+name+"&surname="+surname+"&age="+age;

    return this.http.get('http://localhost:2025/api/Employee/add?'+attributeString);
  }

  getDepartments(){
    return this.http.get('http://localhost:2025/api/Employee/getDepartments');
  }
}
