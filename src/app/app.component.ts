import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier poste',
      content: 'Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto, dotis nomine futura coniunx hastam.',
      loveIts: 0,
      created_at: '10/24/2017, 11:00 AM'
    },
    {
      title: 'Mon deuxième poste',
      content: 'Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto, dotis nomine futura coniunx hastam.',
      loveIts: 0,
      created_at: '10/24/2017, 11:00 AM'
    },
    {
      title: 'Mon troisième poste',
      content: 'Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto, dotis nomine futura coniunx hastam.',
      loveIts: 0,
      created_at: '10/24/2017, 11:00 AM'
    }
    ];
}
