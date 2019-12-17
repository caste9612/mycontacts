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

  filterCondition(people) {
    return people.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
  }

}



