import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
})
export class ProjectsComponent {
  projects = [
    { name: 'Proyecto 1 Ejemplo', description: 'Descripcion.' },
    { name: 'Proyecto 2 Ejemplo', description: 'Descripcion.' },
    { name: 'Proyecto 3 Ejemplo', description: 'Descripcion.' },
  ];
}
