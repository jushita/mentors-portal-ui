import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from'rxjs/operators';
import { Mentor } from 'src/app/models/mentor';
import { Mentee } from 'src/app/models/mentee';
import { Message } from 'src/app/models/message';

const API_URL = 'http://localhost:3000'

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {}

    public login(name: string, password: string): Observable<any> {
        return this.http
        .post(API_URL + '/login', {"name":name,"password":password})
        .pipe(catchError(this.handleError));
    }

    public getAllMentor(): Observable<Mentor[]> {
        return this.http
        .get<Mentor[]>(API_URL + '/mentor')
        .pipe(catchError(this.handleError));
    }

    public getAllMentee(): Observable<Mentee[]> {
        return this.http
        .get<Mentee[]>(API_URL + '/mentee')
        .pipe(catchError(this.handleError));
    }

    public getAllMenteeMessage(id: string): Observable<Message[]> {
        return this.http
        .get<Message[]>(API_URL + '/message?menteeId=' + id)
        .pipe(catchError(this.handleError));
    }

    private handleError(error: Response | any) {
        console.log('ApiService::handleError', error);
        return throwError(error);
    }
}