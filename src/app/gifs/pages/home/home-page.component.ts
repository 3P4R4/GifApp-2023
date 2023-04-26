import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifService } from "../../services/gif.service";

@Component({
  selector: 'gifs-home-pages',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService: GifService){};

  get gifs(): Gif[]{
    return this.gifsService.gifList;
  }

}
