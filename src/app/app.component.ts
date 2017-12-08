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

    checkbox1_onClick() {
        this.check1 = !this.check1;
    }
    checkbox2_onClick() {
        this.check2 = !this.check2;
    }
    checkbox3_onClick() {
        this.check3 = !this.check3;
    }
    checkbox4_onClick() {
        this.check4 = !this.check4;
    }

    monitor(junk1, junk2) {
        console.log({ junk1, junk2});
    }


    ngOnInit() {

    }
}