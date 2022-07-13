import {
	Component,
	ElementRef,
	Input,
	Renderer2,
	ViewChild,
	AfterViewInit,
} from '@angular/core';
import { Project, State } from '../models/project';

@Component({
	selector: 'app-project-info',
	templateUrl: './project-info.component.html',
	styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent implements AfterViewInit {
	@Input() project!: Project;
	@ViewChild('status') status!: ElementRef;

	constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

	public ngAfterViewInit(): void {
		if (this.project.state === State.Open) {
			this.changeColor('#ff0000');
		} else if (this.project.state === State.Check) {
			this.changeColor('#ffff00');
		} else if (this.project.state === State.Ready) {
			this.changeColor('#00ff00');
		} else {
			this.changeColor('#cccccc');
		}
	}

	private changeColor(color: string): void {
		console.log(color);
		this.renderer.setStyle(
			this.status.nativeElement,
			'backgroundColor',
			color
		);
	}

	public toText(status: number): string {
		if (this.project.state === State.Open) {
			return 'offen';
		} else if (this.project.state === State.Check) {
			return 'prüfen';
		} else if (this.project.state === State.Ready) {
			return 'fertig';
		} else {
			return 'wartend';
		}
	}
}
