import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-lista-contents',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-contents.html',
  styleUrl: './lista-contents.scss'
})
export class ListaContents implements OnInit {

  contents: Content[] = [];
  loading = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getContents().subscribe({
      next: (dados) => {
        this.contents = dados;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar contents:', err);
        this.loading = false;
      }
    });
  }
}
