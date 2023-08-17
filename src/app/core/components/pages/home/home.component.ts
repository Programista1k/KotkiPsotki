import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/core/services/cat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  randomFacts: string[] = [];

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService.getRandomFacts().subscribe((facts) => {
      this.randomFacts = facts.data;
    })
  }


}
