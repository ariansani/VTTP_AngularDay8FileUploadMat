import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularmaterialtut';

  @ViewChild(MatDrawer)
  drawer!: MatDrawer

  form!:FormGroup

  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    
  }

  toggleSidebar(){
    console.info("test")
    this.drawer.toggle()
  }

}
