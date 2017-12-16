import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    notify: number;
    stalk: number;
    check1: boolean = true;
    check2: boolean = true;
    check3: boolean = true;
    check4: boolean = true;

    public constructor() {
        
    }

    checkForChanges() {
        return [ this.check1, this.check2, this.check3, this.check4 ];
    }

    monitor(junk1, junk2) {
        let junkAry = this.checkForChanges();
        console.log(junk1, junk2, this.check1, this.check2, this.check3, this.check4);
    }


    ngOnInit() {

    }
}