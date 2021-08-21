import { ChoseAppComponent } from './chose-app/chose-app.component';
import { LayoutSendoModule } from './layout-sendo/layout-sendo.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', component: ChoseAppComponent, pathMatch: 'full'
  },
  {
    path: 'layout-sendo',
    loadChildren: () => import(`./layout-sendo/layout-sendo.module`).then(m => m.LayoutSendoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
