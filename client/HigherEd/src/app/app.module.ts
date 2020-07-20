import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LectureTheatreComponent } from './lecture-theatre/lecture-theatre.component';
import { ChatComponent } from './chat/chat.component';
import { ScreenComponent } from './screen/screen.component';
import { ThreadCardComponent } from './thread-card/thread-card.component';
import { SearchChatComponent } from './search-chat/search-chat.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { FormsModule } from '@angular/forms';
import { TimeStampPipe } from './time-stamp.pipe';
import { ClassArchivesComponent } from './class-archives/class-archives.component';
import { SearchArchivesComponent } from './search-archives/search-archives.component';
import { ArchiveDocumentsComponent } from './archive-documents/archive-documents.component';
import { DocumentComponent } from './document/document.component';

@NgModule({
  declarations: [
    AppComponent,
    LectureTheatreComponent,
    ChatComponent,
    ScreenComponent,
    ThreadCardComponent,
    SearchChatComponent,
    NewThreadComponent,
    TimeStampPipe,
    ClassArchivesComponent,
    SearchArchivesComponent,
    ArchiveDocumentsComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
