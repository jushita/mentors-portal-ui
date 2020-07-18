import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { tap } from'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MentorService {
    private mentor: BehaviorSubject<string>;

    constructor(private api: ApiService) {
        this.mentor = new BehaviorSubject('');
    }
    public getMentorObservable() {
        return this.mentor.asObservable();
    }
    public getMentor() {
        this.api.getAllMentor().subscribe(t => {
            // this.mentor.next(t.mentor);
        })
    }
    // public getMentor2() {
    //     return this.api.getAllMentor()
    //     .pipe(tap(() => {
    //         this.getMentor()
    //     }))
    // }
}