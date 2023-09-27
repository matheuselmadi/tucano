import { Component } from '@angular/core';

@Component({
  selector: 'app-sustentabilidade',
  templateUrl: './sustentabilidade.component.html',
  styleUrls: ['./sustentabilidade.component.scss']
})
export class SustentabilidadeComponent {

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

}
