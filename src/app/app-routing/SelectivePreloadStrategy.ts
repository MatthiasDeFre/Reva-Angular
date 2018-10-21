//deze klasse laadt de componenten in nog VOOR dat je zo nodig hebt
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';
//import 'rxjs/add/observable/of';

export class SelectivePreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    if (route.data && route.data.preload) {
      console.log('preload ' + route.path);
      return load();
    }
    return null;
  }
}