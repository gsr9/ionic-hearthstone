import { Component, OnInit } from '@angular/core';
import { CardService } from '../card/card.service';
import { CardDeck } from '../card/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
// export class CardsPage implements OnInit {
//   ngOnInit(): void {
//   }
export class CardsPage{

  //readonly cardDecks:string[] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman'];
  public cardDecks: CardDeck[] = []
  ALLOWED_DECKS = ['classes', 'factions', 'qualities', 'types', 'races']

  constructor(private cardService: CardService) {
    this.getCardDecks()
    
  }

  extractAllowedDecks(cardDecks: CardDeck[]) {
    this.ALLOWED_DECKS.forEach((deckName: string) => {
      this.cardDecks.push({name:deckName, types:cardDecks[deckName]})
      console.log(this.cardDecks)
    })
  }

  getCardDecks() {
    this.cardService.getAllCardDecks().subscribe(
      (cardDecksService: CardDeck[])=>{
        this.extractAllowedDecks(cardDecksService)
      }
    )
  }
}
