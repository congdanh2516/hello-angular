import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, tap, throwError } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private httpClient: HttpClient) { }


  //get, post, put, delete
  getProductList() {
    let api: string = "https://6540fc5745bedb25bfc2ff89.mockapi.io/product";
    return this.httpClient.get<Product[]>(api)
        .pipe(
          tap((data) => {
            console.log("thanh cong: ", data);
          }),
          catchError(this.handleError)
        )
  }

  addProduct(newProduct: Product) {
    let api: string = "https://6540fc5745bedb25bfc2ff89.mockapi.io/product";
    return this.httpClient.post(api, newProduct)
            .pipe(
              tap(() => {
                console.log("thanh cong");
              }),
              catchError(this.handleError)
            )
  }


  update(id: number, product: Product) {
    let api: string = `https://6540fc5745bedb25bfc2ff89.mockapi.io/product/${id}`;
    
  }

  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}


