import { Injectable } from '@angular/core';

//Dependency Injection

@Injectable({
    providedIn: 'root'
})

export class LogService {
    logMessage(msg: string): void {
        console.log(msg);
    }
}