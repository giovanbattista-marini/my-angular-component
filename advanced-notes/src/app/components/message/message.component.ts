import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  
    @Input() msg!: string;
    @Input() direction!: string;
    
    @ViewChild('message') message: any;
    constructor() { }

    showReadMore: boolean = false;

    ngOnInit(): void {
    }

    ngAfterViewChecked(): void{
        //to show the read More cta 
        setTimeout(() => {
            this.showReadMore = this.message.nativeElement.scrollHeight > this.message.nativeElement.clientHeight;
        },0);
    }

    /**
    * show the text remain
    * @return {void}
    */
    showText(): void{
        this.showReadMore = false;
        this.message.nativeElement.classList.remove('line-clamp');
    }

}