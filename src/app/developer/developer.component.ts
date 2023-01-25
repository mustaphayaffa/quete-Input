import { Component, Input } from '@angular/core';
import { Developer } from '../models/developer';



@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

      myDeveloper = new Developer('mous', 'yaffa', 30, 'homme','marche ou creve', [{name : 'angular', logo : 'logounkut', site : 'foot.com'},{name : 'leo', logo : 'barcelone', site :'barca.com'}]);
}
