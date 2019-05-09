import {Component, OnInit} from '@angular/core';
import {RatingsService} from './ratings.service';
import {NgForm} from '@angular/forms';
import {Rating} from '../models/Rating';

declare var M: any;

export enum RatingEnums {
  'Highly Relevant',
  'Relevant',
  'Related',
  'Not Related',
  'VDP',
  'Detrimental',
  'Cant Judge'
}

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  readonly RATINGS = [
    {name: 'Highly-Relevant'},
    {name: 'Relevant'},
    {name: 'Related'},
    {name: 'Not-Related'},
    {name: 'VDP'},
    {name: 'Detrimental'},
    {name: 'Can\'t-Judge'}
  ];
  private hiddenAddRating = true;
  private isEmpty = true;

  constructor(private ratingsService: RatingsService) {
  }

  ngOnInit() {
    // this.getRatings();
  }

  addRating(form: NgForm) {
    if (form.value._id) {
      this.ratingsService.putRating(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Atualizado com sucesso!'});
          this.toggleAddRating();
        });

    } else {
      this.ratingsService.postRating(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Salvo com sucesso!'});
          this.toggleAddRating();
        });
    }
  }

  getRatings() {
    this.ratingsService.getRatings()
      .subscribe(res => {
        this.ratingsService.ratings = res as Rating[];
        this.isEmpty = this.ratingsService.ratings.length === 0;
      });
  }

  editRating(rating: Rating) {
    this.ratingsService.selectedRating = rating;
  }

  deleteRating(_id: string) {

    if (confirm('Tem certeza que deseja remover?')) {
      this.ratingsService.deleteRating(_id)
        .subscribe(res => {
          M.toast({html: 'Removido com sucesso!'});
        });
    }
  }

  resetForm(form ?: NgForm) {
    if (form) {
      form.reset();
      this.ratingsService.selectedRating = new Rating();
    }
  }

  searchRating(searchRatingForm: NgForm) {
    if (searchRatingForm.value.searchUrl) {
      console.log(searchRatingForm);
      this.ratingsService.searchRating(searchRatingForm.value.searchUrl)
        .subscribe(res => {
          this.ratingsService.ratings = res as Rating[];
          console.log('Resultados da busca: ' + this.ratingsService.ratings.length);
          console.log(this.ratingsService.ratings.length === 0);
          this.isEmpty = this.ratingsService.ratings.length === 0;
        });
    }
  }

  toggleAddRating() {
    this.hiddenAddRating = !this.hiddenAddRating;
  }

  showAddRating() {
    this.hiddenAddRating = false;
  }
}
