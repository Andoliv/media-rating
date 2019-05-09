import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rating} from '../models/Rating';

@Injectable({
  providedIn: 'root'
})
export class RatingsService implements OnInit {

  readonly URL_API = 'http://localhost:3000/api/ratings';
  selectedRating: Rating;
  ratings: Rating[];
  searchUrl: string;

  constructor(private http: HttpClient) {
    this.selectedRating = new Rating();
  }

  ngOnInit(): void {

  }

  getRatings() {
    return this.http.get(this.URL_API);
  }

  postRating(rating: Rating) {
    return this.http.post(this.URL_API, rating);
  }

  putRating(rating: Rating) {
    return this.http.put(this.URL_API + `/${rating._id}`, rating);
  }

  deleteRating(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  searchRating(url: string) {
    const searchUrl = this.URL_API + '?url=' + url;
    console.log(searchUrl);
    return this.http.get(searchUrl);
  }
}
