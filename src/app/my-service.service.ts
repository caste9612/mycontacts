import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../node_modules/@angular/forms';
import { AngularFireDatabase } from "@angular/fire/database";
import {AngularFireList} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private firebase: AngularFireDatabase) { }
  peopleList: AngularFireList<any>;
  public selectedFirstName;
  public selectedLastName;
  public selectedMobile;
  public $key;

  form = new FormGroup ({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('', Validators.email),
    address: new FormControl(''),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    note: new FormControl('')
  });


  getPeople() {
    this.peopleList = this.firebase.list('peoples');
    return this.peopleList.snapshotChanges();
  }



  getPerson(person){
    this.peopleList = this.firebase.list('peoples');
  }


  insertPeople(people) {
    this.peopleList.push({
      firstName: people.firstName,
      lastName: people.lastName,
      email: people.email,
      address: people.address,
      mobile: people.mobile,
      note: people.note
    });
  }

  populateForm(people) {
    this.form.reset();
    this.selectedFirstName = people.firstName;
    this.selectedLastName = people.lastName;
    this.selectedMobile = people.mobile;
    this.form.patchValue(people);
  }

  updatePeople(people) {
    this.peopleList.update(people.$key,
      {
        firstName: people.firstName,
        lastName: people.lastName,
        email: people.email,
        address: people.address,
        mobile: people.mobile,
        note: people.note
      });
  }

  deletePeople($key: string) {
    this.peopleList.remove($key);
  }

}


