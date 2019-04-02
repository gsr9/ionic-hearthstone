import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { CardDeck } from './card.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private readonly HS_API_URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com'
  private readonly API_KEY = '07249fad45msh02ed4bc29729f94p1450b1jsn23af440e8b76'
  headers: HttpHeaders
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'X-RapidAPI-Key': this.API_KEY})
  }

  getAllCardDecks(): Observable<CardDeck[]> {
    return this.http.get<CardDeck[]>(this.HS_API_URL + '/info', {headers: this.headers})
  }
}

// unirest.("https://omgvamp-hearthstone-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "07249fad45msh02ed4bc29729f94p1450b1jsn23af440e8b76")
// .header("Content-Type", "application/x-www-form-urlencoded")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });
