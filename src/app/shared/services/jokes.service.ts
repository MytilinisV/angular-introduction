import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const DAD_JOKES_API_URL = 'https://icanhazdadjoke.com/';
const CHUCK_NORRIS_JOKES_API_URL = 'https://api.chucknorris.io/jokes/random';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  http: HttpClient = inject(HttpClient);

  getDadJoke() {
    this.http.get(DAD_JOKES_API_URL, {
      headers: {
        Accept: 'application/json',
      },
    })
  };

  getChuckNorrisJoke() {
    this.http.get(CHUCK_NORRIS_JOKES_API_URL, {
      headers: {
        Accept: 'application/json',
      },
    })
  };
}
