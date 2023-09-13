import { Component } from '@angular/core';
import { Cat, ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent {
  cats: Cat[] = [];

  constructor(private service: ConfigService) {

    this.service._getCats().subscribe((data) => {
      console.log(data)
      this.cats = data
      console.log(this.cats)
    }
    )

    //this._test()
    //console.log(this.cats)
  }


  _test() {
    //console.log(this.service._getCats().subscribe())
    this.service._getCats().subscribe((data) => {
      //console.log(data)
      this.cats = data
    }
    )
  }

}
