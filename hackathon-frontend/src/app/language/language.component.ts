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
    { value: 'fr', viewValue: 'Französisch', icon: '🇫🇷' },
    { value: 'it', viewValue: 'Italienisch', icon: '🇮🇹' },
    { value: 'al', viewValue: 'Albanisch', icon: '🇦🇱' },
    { value: 'ae', viewValue: 'Arabisch', icon: '🇦🇪' },
    { value: 'en', viewValue: 'Englisch', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { value: 'pt', viewValue: 'Portugiesisch', icon: '🇵🇹' },
    { value: 'ru', viewValue: 'Russisch', icon: '🇷🇺' },
    { value: 'rs', viewValue: 'Serbisch', icon: '🇷🇸' },
    { value: 'es', viewValue: 'Spanisch', icon: '🇪🇸' },
  ];
}
