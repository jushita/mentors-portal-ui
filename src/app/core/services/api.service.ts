import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from'rxjs/operators';
import { Mentor } from 'src/app/models/mentor';
const API_URL = 'http://localhost:3000'
@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {}

    public getAllMentor(): Observable<Mentor[]> {
        return this.http
        .get<Mentor[]>(API_URL + '/mentor')
        .pipe(catchError(this.handleError));
    }

    private handleError(error: Response | any) {
        console.log('ApiService::handleError', error);
        return throwError(error);
    }
}