import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: ``, redirectTo: `home`, pathMatch: `full` }
];


export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
