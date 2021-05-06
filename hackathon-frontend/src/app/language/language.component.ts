import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface Lang {
  value: string;
  viewValue: string;
  icon: string;
}

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  nextComponent = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  selectedLang: string;

  ngOnInit(): void {}

  callParent() {
    this.nextComponent.emit('go to next component');
  }

  scrollIntoView($element): void {
    console.log($element);
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  langs: Lang[] = [
    { value: 'de', viewValue: 'Deutsch', icon: '🇩🇪' },
    { value: 'fr', viewValue: 'Français', icon: '🇫🇷' },
    { value: 'it', viewValue: 'Italiano', icon: '🇮🇹' },
    { value: 'en', viewValue: 'English', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  ];
}
