import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'pagina-estudiante',
    loadChildren: () => import('./pagina-estudiante/pagina-estudiante.module').then( m => m.PaginaEstudiantePageModule)
  },
  {
    path: 'pagina-docente',
    loadChildren: () => import('./pagina-docente/pagina-docente.module').then( m => m.PaginaDocentePageModule)
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./codigo-qr/codigo-qr.module').then( m => m.CodigoQrPageModule)
  },
  {
    path: 'inicio-sesion-docente',
    loadChildren: () => import('./inicio-sesion-docente/inicio-sesion-docente.module').then( m => m.InicioSesionDocentePageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'escanear',
    loadChildren: () => import('./escanear/escanear.module').then( m => m.EscanearPageModule)
  },
  {
    path: 'perfil-estudiante',
    loadChildren: () => import('./perfil-estudiante/perfil-estudiante.module').then( m => m.PerfilEstudiantePageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'perfil-docente',
    loadChildren: () => import('./perfil-docente/perfil-docente.module').then( m => m.PerfilDocentePageModule)
  },
  {
    path: 'secciones',
    loadChildren: () => import('./secciones/secciones.module').then( m => m.SeccionesPageModule)
  },
  {
    path: 'escanear',
    loadChildren: () => import('./escanear/escanear.module').then( m => m.EscanearPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },  {
    path: 'administrarseccion',
    loadChildren: () => import('./administrarseccion/administrarseccion.module').then( m => m.AdministrarseccionPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
