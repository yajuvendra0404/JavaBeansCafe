import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise-app-two';
  selectedFeature:string;
  // onNavigate (feature: string) {
  //   this.selectedFeature = feature;
  // }
  constructor () {
    this.selectedFeature = "recipeBook"
  }
}
