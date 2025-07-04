import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interface/Movie';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent 
{
movie : Movie = {
  title: '',
  director: '',
  genre: '',
}
constructor(private moviesService: MoviesService) { }
onsubmit(): void {
  this.moviesService.postMovie(this.movie).subscribe({
    next: (response) => {
      console.log('Movie created successfully:', response);
      // Aquí puedes manejar la respuesta, como redirigir al usuario o mostrar un mensaje  
    },
    error: (error) => {
      console.error('Error creating movie:', error);
      // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
    }
  });
}
}
