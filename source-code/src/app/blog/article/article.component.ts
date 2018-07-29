import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  filePath: string;
  constructor() { }

  ngOnInit() {
  }

}
