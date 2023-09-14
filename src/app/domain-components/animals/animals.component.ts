import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cat, ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent {
  cats: Cat[] = [];

  isLoading: boolean = false;

  private loadCatsSub: Subscription = new Subscription;

  constructor(private service: ConfigService) {

  }

  ngOnInit() {
    this.isLoading = false;
    this.loadMore()
  }

  loadMore() {
    this.isLoading = true;
    this.loadCatsSub = this.service._getCats().subscribe((data) => {
      this.cats = data
      this.isLoading = false;
    }
    )

  }

  ngOnDestroy(): void {
    this.loadCatsSub.unsubscribe();
  }

}
