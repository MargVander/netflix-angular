import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  movieinfo;
  id:number;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.route.params.subscribe(param=> this.id = param.id)
  }

  ngOnInit() {
    this.getMovieInfo(this.id)
  }

  getMovieInfo(id){
    this.movieService.getMovieInfo(id)
    .subscribe(data=>{
      this.movieinfo = data
    })
  }

}
