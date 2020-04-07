import { PeopleService } from './../my-service.service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  constructor(protected peopleService: PeopleService, private _snackBar: MatSnackBar) { }
  peopleArray = [];
  searchText: string = '';

  ngOnInit() {
    this.peopleService.getPeople().subscribe(
      list => {
        this.peopleArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record?')) {
      this.peopleService.deletePeople($key);
      this._snackBar.open("Deleted successfully","",{
        duration: 5 * 1000,
      });
    }
  }

  filterConditionFirstName(people) {
    return people.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
  }

  filterConditionLastName(people) {
    return people.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
  }

  orderByFirstName(){
    console.log('Ordino per nome');
    this.peopleArray.sort(function(a, b) {
      var textA = a.firstName.toUpperCase();
      var textB = b.firstName.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  }

  orderByLastName(){
    console.log('Ordino per cognome');
    this.peopleArray.sort(function(a, b) {
      var textA = a.lastName.toUpperCase();
      var textB = b.lastName.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  }

}



