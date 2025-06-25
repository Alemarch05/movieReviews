import { Component } from '@angular/core';
import { Movie } from '../../interface/Movie';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent

{
movie: Movie[] = [];

constructor(private moviesService: MoviesService) {}

getMovies(): void {
  this.moviesService.getMovie().subscribe({
    next: (response) => {
      this.movie = response.data; // Asignar los resultados a la propiedad movie
      console.log(this.movie);
    },
    error: (error) => {
      console.error('Error al obtener las películas:', error);
    }
  })
}
ngOnInit(): void {
  this.getMovies(); // Llamar al método para obtener las películas al iniciar el componente
}
}
 