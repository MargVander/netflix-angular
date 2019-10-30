import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-genreliste',
  templateUrl: './genreliste.component.html',
  styleUrls: ['./genreliste.component.css']
})
export class GenrelisteComponent implements OnInit {
  genres;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres(){
    this.movieService.getGenres()
    .subscribe(data=>{
      this.genres = data.genres
    })
    console.log(this.genres)
  }


}
