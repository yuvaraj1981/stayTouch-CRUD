import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CreateMeetingModalComponent } from '../create-meeting-modal/create-meeting-modal.component';

 @Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent {

  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'phone', 'address', 'meetingtime', 'actions'];
  dataSource : any;

  formValue: any[] = [];

  @ViewChild(MatPaginator) paginator: any;

  constructor(public dialog: MatDialog) {
    const formValueData: any = localStorage.getItem('form-data');
    this.formValue = JSON.parse( formValueData)
    this.dataSource = new MatTableDataSource(this.formValue);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Method for filter table data.
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
  }

  // Method used to add a row with a unique id and other fields.
  addRow() {
    const newRow = {id:this.guid(), first_name: "" , last_name: '', email: '', phone: '', address: '', meetingtime: ''};
    this.openDialog(newRow, 'add')
  }

  openDialog(data: any, flag: string) {
    const dialogRef = this.dialog.open(CreateMeetingModalComponent, {
      width: '50%',
      data: {meetingData: data, flag: flag},
    });

    dialogRef.afterClosed().subscribe(  result => {
      console.log('The dialog was closed', result);
      if(result){
        if(flag === 'add') {
          this.formValue.push(result)
         }
         else {
          var index =  this.formValue.findIndex((data : any)=> data.id === result.id);
         console.log( index);
         this.formValue[index] = result;
         }
         this.dataSource = new MatTableDataSource(this.formValue);
         localStorage.setItem('form-data', JSON.stringify( this.formValue));
      }
    });
  }

  // Method used to edit a table row on click
  edit(data: any) {
    this.openDialog(data, 'edit')
  }

//generates random id;
guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

}
