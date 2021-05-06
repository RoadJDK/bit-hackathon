import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  nextPage() {
    if (this.searchingAsyl == true && this.unlocked == true) {
      this.router.navigateByUrl('/process');
    } else if (this.unlocked == true) {
      this.router.navigateByUrl('/resources');
    }
  }

  searchingAsyl;
  unlocked = false;

  changeToYes() {
    this.searchingAsyl = true;
    this.unlocked = true;
  }

  changeToNo() {
    this.searchingAsyl = false;
    this.unlocked = true;
  }
}
