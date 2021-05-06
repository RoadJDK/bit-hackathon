import { Injectable } from '@angular/core';

export class Article {
    id: string;
    text: string;
    expanded?: boolean;
    items?: Article[];
}

var articles: Article[] = [{
    id: "1",
    text: "Familien",
    expanded: true,
    items: []
}];