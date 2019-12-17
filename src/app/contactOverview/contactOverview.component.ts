import { Component, OnInit } from '@angular/core';
import { PeopleService } from './../my-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-contactOverview',
  templateUrl: './contactOverview.component.html',
  styleUrls: ['./contactOverview.component.css']
})
export class ContactOverviewComponent implements OnInit {

  constructor(protected peopleService: PeopleService, private _snackBar: MatSnackBar) { }
  showDeleteMessage: boolean;
  submitted: boolean;
  formControls = this.peopleService.form.controls;

  ngOnInit() {
  }

  delete() {
    if (confirm('Are you sure to delete this contact?')) {
      this.onDelete(this.peopleService.$key);
    }
  }

  onDelete($key) {
      this.peopleService.deletePeople($key);
      this._snackBar.open("Deleted successfully","",{
        duration: 5 * 1000,
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.peopleService.form.valid) {
      if (this.peopleService.form.get('$key').value == null) {
        this.peopleService.insertPeople(this.peopleService.form.value);
        this._snackBar.open("Contact added successfully","",{
          duration: 5 * 1000,
        });
      }else{
          this.peopleService.updatePeople(this.peopleService.form.value);
          this._snackBar.open("Contact modified successfully","",{
            duration: 5 * 1000,
          });
        }
      this.submitted = false;
    }
  }

}
