import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeDe from '@angular/common/locales/de';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { environment } from '../environments/environment';
import { ProjectEffects } from './store/effects/project.effects';
import { projectReducer } from './store/reducers/project.reducer';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectDetailsHeaderComponent } from './project-details-header/project-details-header.component';
import { projectDetailsReducer } from './store/reducers/project-details.reducer';
import { ProjectDetailsEffects } from './store/effects/project-details.effects';

registerLocaleData(localeDe, 'de');

@NgModule({
	declarations: [
		AppComponent,
		ProjectListComponent,
		FilterComponent,
		HomeComponent,
		ProjectDetailsComponent,
		ProjectDetailsHeaderComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		StoreModule.forRoot(
			{
				projects: projectReducer,
				projectDetails: projectDetailsReducer,
			},
			{}
		),
		EffectsModule.forRoot([ProjectEffects, ProjectDetailsEffects]),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
		BrowserAnimationsModule,
		MatInputModule,
		MatButtonModule,
		MatSelectModule,
		MatTableModule,
		MatIconModule,
		MatGridListModule,
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
