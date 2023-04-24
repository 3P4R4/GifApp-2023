import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  public gifList:Gif[]=[];

  private _tagsHistory: string[]=[];

  private apiKey: string = 'kE6FopMmgG0fNsl8KYs9oX3vfT8UBVPW';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

  get tagHistory(){
    return [...this._tagsHistory]
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag)
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagHistory.splice(0,10);
  }

  searchTag(tag:string):void{
  
  if (typeof tag !== 'string' || tag.trim().length === 0) {
    console.log("Invalid tag: ", tag);
    return;
  }
   this.organizeHistory(tag);  

   const params = new HttpParams()
   .set('api_key', this.apiKey)
   .set('q', tag)
   .set('limit', '10');
   
   this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params}).subscribe((resp)=>{
    this.gifList = resp.data;
    console.log({gifs:this.gifList});
  }
   )
  
  }


}
 