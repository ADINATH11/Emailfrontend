import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private snackBar:MatSnackBar){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  btnclick(){
    console.log("button clicked!");
    this.snackBar.open("Email sent","Cancel")
  }
}
