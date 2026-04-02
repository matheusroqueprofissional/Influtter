import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Header } from "../../shared/header/header";
@Component({
  selector: 'app-dashboard',
  imports: [Header],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  

  startsearch(){
    console.log("starting search")

  }
}
