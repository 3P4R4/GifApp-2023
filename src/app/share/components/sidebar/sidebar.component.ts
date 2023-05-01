import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private gifsService:GifService){}

  get tags(): string[]{
    return this.gifsService.tagHistory;
  }
  
  rebuscarTag(tag:string):void{
    this.gifsService.searchTag(tag);
  }

}
