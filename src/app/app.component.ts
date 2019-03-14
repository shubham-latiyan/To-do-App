import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  title: string;
  date: number;
  notes: string;
}
const ELEMENT_DATA = [
  { title: 'Just a sample task', date: 'Tue Mar 19 2019 00:00:00 GMT+0530 (India Standard Time)', notes: 'Sample text Note here', checked: false },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  minDate = new Date();
  dataArray: any = [];
  ele: number = 0;
  showForm: boolean = false;
  showEditbtn: boolean = false;
  number = 0;
  obj = {
    title: '',
    date: '',
    notes: '',
    checked: false
  }
  constructor(private _cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.minDate = new Date();
    if (this.dataArray.length > 0) {
      this.dataArray = this.dataArray;
      this.dataSource = new MatTableDataSource(this.dataArray);
    }
    else {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
    this._cdr.detectChanges();
  }
  displayedColumns: string[] = ['position', 'title', 'date', 'notes', 'done', 'edit'];
  dataSource: MatTableDataSource<any>;

  saveNotes() {
    let date = this.obj.date;
    this.obj['date'] = date;
    this.dataArray.push(this.obj);
    this.dataSource = new MatTableDataSource(this.dataArray);
    this.showForm = false;
    this.obj = {
      title: '',
      date: '',
      notes: '',
      checked: false
    }
  }

  editNote(ele) {
    this.ele = ele;
    this.showEditbtn = true;
    this.showForm = true;
    console.log('ele:', ele)
    this.obj.title = ele.title;
    this.obj.date = ele.date;
    this.obj.notes = ele.notes;
    this.obj.checked = ele.checked;
  }
  editSave() {
    this.showEditbtn = false;
    this.dataArray.splice(this.dataArray.map(a => a.title).indexOf(this.ele), 1, this.obj)
    this.dataSource = new MatTableDataSource(this.dataArray);
  }
  deleteNote(ele) {
    this.ele = ele;
    this.dataArray.splice(this.dataArray.map(a => a.title).indexOf(ele), 1)
    this.dataSource = new MatTableDataSource(this.dataArray);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
