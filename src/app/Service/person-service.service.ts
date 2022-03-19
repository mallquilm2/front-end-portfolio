import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../Model/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/demo';

  getList(){
    return this.http.get<Person[]>(this.Url+"/portfolio");
  }

  getPersonById(id:Number){
    return this.http.get<Person>(this.Url+"/"+id);
  }

  updatePerson(person:Person){
    return this.http.put<Person>(this.Url+"/"+person.idportfolio,person);
  }

  deletePerson(person:Person){
    return this.http.delete<Person>(this.Url+"/"+person.idportfolio);
  }

  getTimeLine(){
    return this.http.get<String[]>(this.Url+"/get-timeline"); 
  }

}
