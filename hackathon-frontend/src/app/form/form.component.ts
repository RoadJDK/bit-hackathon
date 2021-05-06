import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  lookingForAsyl = false;

  infoForm = this.formBuilder.group({
    suchtAsyl: [''],
  });

  ngOnInit(): void {}

  change(event: MatRadioChange, data) {
    this.lookingForAsyl = true;
  }

  searchingAsyl;

  changeToYes() {
    this.searchingAsyl = true;
  }

  changeToNo() {
    this.searchingAsyl = false;
  }

  nextPage() {
    if (this.searchingAsyl == true) {
      this.router.navigateByUrl('/process');
    } else {
      this.router.navigateByUrl('/resources');
    }
  }
}
