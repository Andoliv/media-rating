export class Rating {

  constructor(_id = '', query = '', url = '', rating = '', note = '') {
    this._id = _id;
    this.query = query;
    this.url = url;
    this.rating = rating;
    this.note = note;
  }

  _id: string;
  query: string;
  url: string;
  rating: string;
  note?: string;
}
