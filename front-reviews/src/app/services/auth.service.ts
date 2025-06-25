import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, map } from 'rxjs';
import { ApiResponse } from '../interface/ApiResponse';
import { User } from '../interface/User';
import { catchError } from 'rxjs/operators';
import { LoginData } from '../interface/LoginData';
import { LoginResponse } from '../interface/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = 'http://127.0.0.1:8000/api';

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

    registerUser(User :User): Observable<ApiResponse<User>>
    {
    return this.http.post<ApiResponse<User>>(`${this.apiUrl}/register`, User)
    .pipe(
      map(response => response), // ya es del tipo ApiResponse
      catchError(this.handleError)
       );
    }
  

 login(data: LoginData): Observable<LoginResponse> {
  return this.http.post<LoginResponse>(`${this.apiUrl}/login`, data);
}
    }
  