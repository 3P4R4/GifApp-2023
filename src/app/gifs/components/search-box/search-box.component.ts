import { Component, ElementRef, ViewChild } from "@angular/core";
import { GifService } from '../../services/gif.service';

@Component({
    selector: 'gif-search-box',
    template:`
    <h5>Buscar:</h5>
    <input type='text' class='form-control' placeholder="Buscar gifs..." (keyup.enter)="searchTag()" #txtInput>
    `
})

export class SearchBoxComponent{
    constructor(private gifsService:GifService){}

    @ViewChild('txtInput')
    public tagInput!: ElementRef<HTMLInputElement>

    searchTag(){
        const newTag = this.tagInput.nativeElement.value;   
        this.gifsService.searchTag(newTag)
            this.tagInput.nativeElement.value = " ";
        
    }
}