import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { CreateCommonComponent } from '../create-common/create-common.component';
@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent {
	@ViewChild('child')
	private child:CreateCommonComponent;

  constructor(
	  private route: ActivatedRoute,
	  private router: Router) { }

	public submit():void{
		console.log("submit page");
		this.child.submit();
	}

	public onCreated():void{
		this.router.navigate(['../','dashboard'], { relativeTo: this.route });
	}
}
