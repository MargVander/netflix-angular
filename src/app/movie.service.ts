import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getGenres():Observable<any>{
    return this.http.get<any>("https://api.themoviedb.org/3/genre/movie/list?api_key=87dfa1c669eea853da609d4968d294be&language=fr")
    .pipe(
      tap(data =>{
        console.log(data)
      }),
      catchError(this.handleError('getGenres', []))
    )
  }

  getMovies(id):Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&language=fr-FR&api_key=87dfa1c669eea853da609d4968d294be&with_genres=${id}`)
    .pipe(
      tap(data =>{
        console.log(data)
      }),
      catchError(this.handleError('getMovies', []))
    )
  }

  getMovieInfo(id):Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=87dfa1c669eea853da609d4968d294be&language=fr`)
    .pipe(
      tap(data =>{
        console.log(data)
      }),
      catchError(this.handleError('getMovieInfo', []))
    )
  }

  getRandomMovie():Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${Math.floor(Math.random() * 501) + 100}?api_key=87dfa1c669eea853da609d4968d294be&language=fr`)
    .pipe(
      tap(data =>{
        console.log(data)
      }),
      catchError(this.handleError('getRandomMovie', []))
    )
  }



  /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return (error);
      };
    }
}
