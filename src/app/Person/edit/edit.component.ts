import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Model/Person';
import { PersonServiceService } from 'src/app/Service/person-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  person=new Person();
  tweets:String[];
  constructor(private router:Router, private service:PersonServiceService) { }

  ngOnInit(): void {
    this.edit();
    this.getTimeLine();
    this.tweets;
  }


  save(person:Person){
    if(person.idportfolio <=0 ) person.idportfolio=1000;

    this.service.updatePerson(person)
      .subscribe(data=>{
        alert("Save success!");
        this.router.navigate(["getList"]);
      })
  }
  

  edit(){
    let idportfolio=localStorage.getItem("idportfolio");
    this.service.getPersonById(Number(idportfolio))
      .subscribe(data=>{
        this.person=data;
      })
  }

  getTimeLine(){
    this.service.getTimeLine()
    .subscribe(data=>{
      this.tweets=data;
    })
  }

}
