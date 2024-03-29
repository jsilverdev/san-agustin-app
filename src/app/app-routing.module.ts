import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule)
	},
	{
		path: 'product',
		loadChildren: () => import('./pages/product/product.module').then((m) => m.ProductPageModule)
	},
	{
		path: 'search-product',
		loadChildren: () =>
			import('./pages/search-product/search-product.module').then((m) => m.SearchProductPageModule)
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
