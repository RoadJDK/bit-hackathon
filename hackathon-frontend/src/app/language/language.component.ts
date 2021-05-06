import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output()
  nextComponent = new EventEmitter<string>();

  callParent() {
    this.nextComponent.emit('go to next component');
  }

  constructor(private formBuilder: FormBuilder) {}

  selectedLang: string;

  ngOnInit(): void {}

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
