import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PriceService {

	constructor(private http: HttpClient) { }

	setPrices() {

		// Make the HTTP request:
		return this.http.get('https://yesno.wtf/api').subscribe(
			data => {

				// Read the result field from the JSON response.
				console.log(data);
			},
			(err: HttpErrorResponse) => {
				if (err.error instanceof Error) {
					// A client-side or network error occurred. Handle it accordingly.
					console.log('An error occurred:', err.error.message);
				} else {
					// The backend returned an unsuccessful response code.
					// The response body may contain clues as to what went wrong,
					console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
				}
			});

	}

}
