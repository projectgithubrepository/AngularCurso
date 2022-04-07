import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class DataService {

//   constructor(private http: HttpClient) { }
//   //requisição para uma api
//   getData() {
//     return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
//     //caso a requisição falhe (erro na url ou api sai do ar, vai aparecer a msg de erro)
//     .pipe(catchError(
//       (error) => {
//         console.log(error);
//         return throwError('Error');
//       }));
//   }
// }

export class DataService {

  constructor(private http: HttpClient) { }
  //requisição para uma api
  getData() {
    //autenticação dentro da requisição
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eacPr0VH9URNpFWjx4A8'
      })
    };

    //se tentar retornar sem passar a autenticação/autorização (httpOptions) vai dar um erro de não autorizado
    return this.http.get('https://the-one-api.dev/v2/movie', httpOptions)
    .pipe(catchError(
      (error) => {
        console.log(error);
        return throwError('Error');
      }));
  }
}