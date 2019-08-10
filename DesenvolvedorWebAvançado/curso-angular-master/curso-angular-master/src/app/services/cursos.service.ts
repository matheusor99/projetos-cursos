import { Injectable, EventEmitter } from '@angular/core';
import { Curso } from '../cursos/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  public cursoCurtido = new EventEmitter<Curso>();
  public favoritarCurso = new EventEmitter<Curso>();

  private cursos = [
    new Curso(1, 'JavaScript', 'Desenvolvimento', 20, 'assets/img/typescript.jpg', '30 Abr'),
    new Curso(2, 'TypeScript', 'Desenvolvimento', 40, 'assets/img/typescript.jpg', '20 Abr'),
    new Curso(3, 'Angular', 'Desenvolvimento', 60, 'assets/img/javascript.jpg', '10 Abr'),
    new Curso(4, 'React.js', 'Desenvolvimento', 20, 'assets/img/typescript.jpg', '02 Abr')
  ];
  constructor() { }

  public getCursos() {
    return this.cursos.slice();
  }

  public getCurso(id: number) {
    return this.cursos.find(curso => curso.id === id);
  }
}
