import { Component, OnInit, Output, EventEmitter, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { Thread } from 'src/models/thread';
import { Message } from 'src/models/message';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.scss']
})
export class NewThreadComponent implements OnInit {

  @ViewChild('input', {static: true}) input: ElementRef;

  @Input() threads: Thread[]

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(newMessage: string): void {
    this.threads.push(new Thread(new Message('Drew', null, newMessage), null))
    this.input.nativeElement.innerText = '';
  }

}
