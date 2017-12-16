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
    check1: boolean = false;
    check2: boolean = false;
    check3: boolean = false;
    check4: boolean = false;

    public constructor() {
        
    }

    checkForChanges() {
        return [ this.check1, this.check2, this.check3, this.check4 ];
    }

    monitor(junk1, junk2) {
        let junkAry = this.checkForChanges();
        junkAry.unshift(junk2);
        junkAry.unshift(junk1);
        console.log(junkAry);
    }


    ngOnInit() {

    }
}