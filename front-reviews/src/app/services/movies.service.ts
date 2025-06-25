import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError,map } from 'rxjs';
import { ApiResponse } from '../interface/ApiResponse';
import { Movie } from '../interface/Movie';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl : string = 'http://127.0.0.1:8000/api/movies';

  constructor(private http: HttpClient) { }

  private handleError(error:HttpErrorResponse)
  {
    let errorMessage = 'Ocurrio un error';
    if(error.error instanceof ErrorEvent) 
      {
        errorMessage = `Error: ${error.error.message}`;
      }else
      {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
      
    }
  getMovie(): Observable<ApiResponse<Movie[]>> {
     return this.http.get<ApiResponse<Movie[]>>(`${this.apiUrl}`)
    .pipe(
      map(response => response), // ya es del tipo ApiResponse
      catchError(this.handleError)
    );
    

  }

   postMovie(Movie: Movie): Observable<ApiResponse<Movie>> {
  return this.http.post<ApiResponse<Movie>>(`${this.apiUrl}`, Movie)
    .pipe(
      map(response => response), // ya es ApiResponse<Movie>
      catchError(this.handleError)
    );
}

}
