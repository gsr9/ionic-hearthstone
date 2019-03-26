import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  readonly cardDecks:string[] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman'];

  constructor() { }

  ngOnInit() {
  }

}
