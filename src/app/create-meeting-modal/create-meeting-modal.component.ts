import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms'

@Component({
  selector: 'app-create-meeting-modal',
  templateUrl: './create-meeting-modal.component.html',
  styleUrls: ['./create-meeting-modal.component.scss']
})
export class CreateMeetingModalComponent implements OnInit {

  constructor( private frmbuilder:FormBuilder, public dialogRef: MatDialogRef<CreateMeetingModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) {

  }

  ngOnInit() {}

  clearFormData() {
    this.data.meetingData = '';
  }

  cancelMeeting() {
    this.dialogRef.close();
  }
  

}
