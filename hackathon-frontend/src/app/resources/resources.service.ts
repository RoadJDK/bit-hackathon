import { Injectable } from '@angular/core';

export class Theme {
    id: string;
    text: string;
    expanded?: boolean;
    items?: Theme[];
    image?: string;
    content?: string;
}

export class MenuItem {
    id: string;
    text: string
}

var menuItems: MenuItem[] = [
    { id: 'expand', text: 'Expand category' },
    { id: 'collapse', text: 'Collapse category' },
    { id: 'details', text: 'Show theme details' },
    { id: 'copy', text: 'Copy theme info' }    
];

var themes: Theme[] = [{
    id: "1",
        text: "Einträge",
        expanded: true,
        items: [{
            id: "1_1",
            text: "Familien",
            expanded: false,
            items: [{
                id: "1_1_1",
                text: "Rechte",
                expanded: false,
                items: [],
                content: "hello"
            }, {
                id: "1_1_2",
                text: "Familie in die Schweiz holen",
                expanded: false,
                items: []
            }, {
                id: "1_1_3",
                text: "Kontakt ins Ausland",
                expanded: false,
                items: []
            }]
        }, {
            id: "1_2",
            text: "Wohnen",
            expanded: false,
            items: [{
                id: "1_2_1",
                text: "Rechte",
                expanded: false,
                items: []
            }, {
                id: "1_2_2",
                text: "Steuern",
                expanded: false,
                items: []
            }]
        }, {
            id: "1_3",
            text: "Bildung",
            expanded: false,
            items: [{
                id: "1_3_1",
                text: "Sprache lernen",
                expanded: false,
                items: []
            }, {
                id: "1_3_2",
                text: "Ausbildungssystem Schweiz",
                expanded: false,
                items: [],
                content: "Bildung und Arbeit haben in der Schweiz eine grosse Bedeutung. Alle Kinder und Jugendlichen aber auch Erwachsenen sollen ihren Fähigkeiten entsprechend gefördert werden. "
            }, {
                id: "1_3_3",
                text: "Andersprachige Schulen",
                expanded: false,
                items: []
            }, {
                id: "1_3_4",
                text: "Kurse finden",
                expanded: false,
                items: []
            }, {
                id: "1_3_5",
                text: "Ausbildung annerkennen",
                expanded: false,
                items: []
            }]
        }, {
            id: "1_4",
            text: "Arbeiten",
            expanded: false,
            items: [{
                id: "1_4_1",
                text: "Arbeitssuche",
                expanded: false,
                items: []
            }, {
                id: "1_4_2",
                text: "Arbeitslosenversicherung",
                expanded: false,
                items: []
            }, {
                id: "1_4_3",
                text: "Rechte",
                expanded: false,
                items: []
            }]
        }, {
            id: "1_5",
            text: "Die Schweiz in Kürze",
            expanded: false,
            items: [{
                id: "1_5_1",
                text: "Geschichte",
                expanded: false,
                items: []
            }, {
                id: "1_5_2",
                text: "Politik",
                expanded: false,
                items: [{
                    id: "1_5_2_1",
                    text: "Gesetz",
                    expanded: false,
                    items: [{
                        id: "1_5_2_1_1",
                        text: "Rassismus",
                        expanded: false,
                        items: []
                    }]
                }, {
                    id: "1_5_2_2",
                    text: "Demokratie",
                    expanded: false,
                    items: []
                }]
            }, {
                id: "1_5_3",
                text: "Kultur und Werte",
                expanded: false,
                items: []
            }]
        }, {
            id: "1_6",
            text: "Immigrationsprozess",
            expanded: false,
            items: [{
                id: "1_6_1",
                text: "Einbürgerung",
                expanded: false,
                items: []
            }, {
                id: "1_6_2",
                text: "Arbeitsbewilligung",
                expanded: false,
                items: []
            }, {
                id: "1_6_3",
                text: "Rechte",
                expanded: false,
                items: []
            }, {
                id: "1_6_4",
                text: "Aufenthaltbewilligung",
                expanded: false,
                items: []
            }]
        }, {
            id: "1_7",
            text: "Soziale Sicherheiten",
            expanded: false,
            items: [{
                id: "1_7_1",
                text: "Gesetz",
                expanded: false,
                items: []
            }, {
                id: "1_7_2",
                text: "Krankenkasse",
                expanded: false,
                items: []
            }, {
                id: "1_7_3",
                text: "Arbeitslosenversicherung",
                expanded: false,
                items: []
            }]
        }]
}]

/*
@Injectable({providedIn: "root"})
export class ResourcesService {
    items: Article[] = [{
        id: "1",
        text: "Einträge",
        expanded: true,
        items: [{
            id: "1_1",
            text: "Familien",
            expanded: false,
            items: [{
                id: "1_1_1",
                text: "Rechte",
                expanded: false,
                items: []
            }, {
                id: "1_1_2",
                text: "Familie in die Schweiz holen",
                expanded: false,
                items: []
            }, {
                id: "1_1_3",
                text: "Kontakt ins Ausland",
                expanded: false,
                items: []
            }]
        }, {
            id: "1_2",
            text: "Wohnen",
            expanded: false,
            items: [{
                id: "1_2_1",
                text: "Rechte",
                expanded: false,
                items: []
            }, {
                id: "1_2_2",
                text: "Steuern",
                expanded: false,
                items: []
            }]
        }, {
            id: "1_3",
            text: "Bildung",
            expanded: false,
            items: [{
                id: "1_3_1",
                text: "Sprache lernen",
                expanded: false,
                items: []
            }, {
                id: "1_3_2",
                text: "Ausbildungssystem",
                expanded: false,
                items: [{
                    id: "1_3_2_1",
                    text: "Förderung ab Geburt",
                    expanded: false,
                    items: [{
                        id: "1_3_2_1_1",
                        text: "Bildung und Arbeit haben in der Schweiz eine grosse Bedeutung. Alle Kinder und Jugendlichen aber auch Erwachsenen sollen ihren Fähigkeiten entsprechend gefördert werden. ",
                        expanded: false,
                        items: []
                    }]
                }]
            }, {
                id: "1_3_3",
                text: "Andersprachige Schulen",
                expanded: false,
                items: []
            }, {
                id: "1_3_4",
                text: "Kurse finden",
                expanded: false,
                items: []
            }, {
                id: "1_3_5",
                text: "Ausbildung annerkennen",
                expanded: false,
                items: []
            }]
        }, {
            id: "1_4",
            text: "Arbeiten",
            expanded: false,
            items: [{
                id: "1_4_1",
                text: "Arbeitssuche",
                expanded: false,
                items: []
            }, {
                id: "1_4_2",
                text: "Arbeitslosenversicherung",
                expanded: false,
                items: []
            }, {
                id: "1_4_3",
                text: "Rechte",
                expanded: false,
                items: []
            }]
        }, {
            id: "1_5",
            text: "Die Schweiz in Kürze",
            expanded: false,
            items: [{
                id: "1_5_1",
                text: "Geschichte",
                expanded: false,
                items: []
            }, {
                id: "1_5_2",
                text: "Politik",
                expanded: false,
                items: [{
                    id: "1_5_2_1",
                    text: "Gesetz",
                    expanded: false,
                    items: [{
                        id: "1_5_2_1_1",
                        text: "Rassismus",
                        expanded: false,
                        items: []
                    }]
                }, {
                    id: "1_5_2_2",
                    text: "Demokratie",
                    expanded: false,
                    items: []
                }]
            }, {
                id: "1_5_3",
                text: "Kultur und Werte",
                expanded: false,
                items: []
            }]
        }, {
            id: "1_6",
            text: "Immigrationsprozess",
            expanded: false,
            items: [{
                id: "1_6_1",
                text: "Einbürgerung",
                expanded: false,
                items: []
            }, {
                id: "1_6_2",
                text: "Arbeitsbewilligung",
                expanded: false,
                items: []
            }, {
                id: "1_6_3",
                text: "Rechte",
                expanded: false,
                items: []
            }, {
                id: "1_6_4",
                text: "Aufenthaltbewilligung",
                expanded: false,
                items: []
            }]
        }, {
            id: "1_7",
            text: "Soziale Sicherheiten",
            expanded: false,
            items: [{
                id: "1_7_1",
                text: "Gesetz",
                expanded: false,
                items: []
            }, {
                id: "1_7_2",
                text: "Krankenkasse",
                expanded: false,
                items: []
            }, {
                id: "1_7_3",
                text: "Arbeitslosenversicherung",
                expanded: false,
                items: []
            }]
        }]
    }];
}
*/

/*
export interface Article {
    id: string;
    text: string;
    expanded?: boolean;
    items?: Article[]
}
*/

@Injectable()
export class Service {
    getMenuItems(): MenuItem[] {
        return menuItems;
    }

    getThemes(): Theme[] {
        return themes;
    }
}