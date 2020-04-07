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

  onSubmit() {
    this.submitted = true;
    if (this.peopleService.form.valid) {
      if (this.peopleService.form.get('$key').value == null)
        this.peopleService.insertPeople(this.peopleService.form.value);
        else
          this.peopleService.updatePeople(this.peopleService.form.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.peopleService.form.reset();
    }
  }

}
