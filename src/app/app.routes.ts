import { Routes } from '@angular/router';

import { ListaContents } from './components/lista-contents/lista-contents';
import { ListaCategoriasComponent } from './components/lista-categorias/lista-categorias';
import { DetalhesContentComponent } from './components/detalhes-content/detalhes-content';
import { AvaliacoesComponent } from './components/avaliacoes/avaliacoes';

export const routes: Routes = [
  { path: '', redirectTo: '/contents', pathMatch: 'full' },

  { path: 'contents', component: ListaContents },

  { path: 'categories/:id', component: ListaCategoriasComponent },

  { path: 'content/:id', component: DetalhesContentComponent },

  { path: 'reviews/:id', component: AvaliacoesComponent },
];
