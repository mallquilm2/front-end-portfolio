import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Model/Person';
import { PersonServiceService } from 'src/app/Service/person-service.service';

@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.css']
})
export class GetListComponent implements OnInit {

persons:Person[]

  constructor(private service:PersonServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getList()
      .subscribe(data=>{
          this.persons=data;
      }
    )
  }

  edit(person:Person):void{
    localStorage.setItem("idportfolio",person.idportfolio.toString());
    this.router.navigate(["edit"]);
  }

  delete(person:Person){
    this.service.deletePerson(person)
    .subscribe(data=>{
      this.persons = this.persons.filter(p=>p!==person);
      alert("Person deleted!");
    })
  }

}
