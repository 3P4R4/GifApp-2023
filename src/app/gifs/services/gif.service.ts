import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _tagrHistory: string[]=[];

  constructor() { }

  get tagHistory(){
    return [...this._tagrHistory]
  }

  searchTag(tag:string):void{
    
    this._tagrHistory.unshift(tag)
  }

}
