import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
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
    this.catService.getRandomFacts(9).subscribe((facts) => {
      this.randomFacts.push(...facts.data);
    })
  }

  downloadMore(): void {
    this.catService.getRandomFacts(9).pipe(map((facts) => facts.data.filter(catFact => !this.randomFacts.includes(catFact)))).subscribe((facts) => {
      this.randomFacts.push(...facts);
    })
  }


}
