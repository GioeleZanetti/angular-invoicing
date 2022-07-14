import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProjectEffects } from './store/effects/project.effects';
import { projectReducer } from './store/reducers/project.reducer';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe, 'de');
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [AppComponent, ProjectListComponent, ProjectInfoComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		StoreModule.forRoot(
			{
				projects: projectReducer,
			},
			{}
		),
		EffectsModule.forRoot([ProjectEffects]),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
		BrowserAnimationsModule,
	],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: 'de-DE',
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
