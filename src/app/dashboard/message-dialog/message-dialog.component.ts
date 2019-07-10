import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Message } from '../friends';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {

  public messageText: string;

  constructor(
    private dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public who: string
    ) { }

  ngOnInit() {
  }

  closeDialog() {
    let message: Message = { who: this.who, messageText: this.messageText};
    this.dialogRef.close(message);
  }
}
