import { Component } from '@angular/core';
import {NewsService} from './news.service'

@Component({
    selector: 'app-news',
    templateUrl:'../views/news/block1.html',
    providers:[NewsService]
})

export class NewsComponent{
    News;
    blockTitle="آخرین اخبار";
    constructor(newsService:NewsService){
        this.News=newsService.getBlockNews();
    }
rated=false;
    GetLatestNews(){
        alert("sala");
    }
    RateNews(){
        this.rated=!this.rated;
    }
}