import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  movies;
  @Input() id;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies(this.id);
  }

  getMovies(id){
    this.movieService.getMovies(id)
    .subscribe(data=>{
      this.movies = data.results
    })
  }

}
