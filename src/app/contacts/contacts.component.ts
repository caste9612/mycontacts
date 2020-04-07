import { PeopleService } from './../my-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  constructor(public peopleService: PeopleService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.peopleService.form.controls;
  durationInSeconds = 5;

  ngOnInit() {
  }

  new(){
    this.peopleService.form.reset();
    this.peopleService.selectedFirstName='';
    this.peopleService.selectedLastName='';
    this.peopleService.selectedMobile='';
  }

}
