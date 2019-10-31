import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-randombanner',
  templateUrl: './randombanner.component.html',
  styleUrls: ['./randombanner.component.css']
})
export class RandombannerComponent implements OnInit {
  randommovie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getRandomMovie()
  }

  getRandomMovie(){
    this.movieService.getRandomMovie()
    .subscribe(data=>{
      this.randommovie = data
    })
  }

}
