import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  infoForm = this.formBuilder.group({
    suchtAsyl: [''],
  });

  ngOnInit(): void {}

  nextPage() {
    console.log('Form data is ', this.infoForm.value);
    if (this.infoForm.value == true) {
      this.router.navigateByUrl('/process');
    } else {
      this.router.navigateByUrl('/resources');
    }
  }
}
