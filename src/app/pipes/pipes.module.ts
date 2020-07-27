import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { Filtro2Pipe } from './filtro2.pipe';

@NgModule({
  declarations: [FiltroPipe, Filtro2Pipe],
  imports: [],
  exports: [FiltroPipe,Filtro2Pipe]
})
export class PipesModule { }
