import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Engine, Scene,
	UniversalCamera,
	Vector3, Color3, Color4,
	DirectionalLight, MeshBuilder, SceneLoader,
	ExecuteCodeAction, ActionManager} from 'babylonjs';

import { RTSControl } from "../../../game/camera/rts-control";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

    @ViewChild('canvas')
    canvasRef: ElementRef;

    private _canvas: HTMLCanvasElement;
    private _engine: Engine;
    private _scene: Scene;
    private _camera: UniversalCamera;
    private _light: DirectionalLight;

	private _moveX = 0;
	private _moveZ = 0;

    constructor() {
		console.log("game");
	}

    ngOnInit() {
		this.createScene();
		this.doRender();
    }

	createScene(): void{
		this._canvas = this.canvasRef.nativeElement as HTMLCanvasElement;
        this._engine = new Engine(this._canvas, true);

        this._scene = new Scene(this._engine);

		this._camera = new UniversalCamera('camera1', new Vector3(0, 10, -10), this._scene);
		this._camera.inputs.clear();
		this._camera.inputs.add(new RTSControl());
		this._camera.attachControl(this._canvas, false);
		this._camera.setTarget(new Vector3(0,0,0));

		this._light = new DirectionalLight("Omni", new Vector3(1, -1, 1), this._scene);
		this._light.intensity = 0.5;

		// Target the camera to scene origin.
		this._scene.clearColor = new Color4(1, 1, 1, 1);
		this._scene.ambientColor = Color3.White();

		let box = MeshBuilder.CreateBox("box", {height: 5}, this._scene);
		box.setAbsolutePosition(new Vector3(0,2.5,0))


		SceneLoader.ImportMesh("", "assets/models/", "tile.babylon", this._scene, (newMeshes) => {
	        // Set the target of the camera to the first imported mesh
	        //this._camera.setTarget(newMeshes[0].getAbsolutePosition());

			let w = 1;
			let h = 1.73205;

			/*let floorMaterial = new BABYLON.StandardMaterial("Floor", this._scene);
			floorMaterial.diffuseColor = new BABYLON.Color3(0.3, 0.8, 0.5);
			floorMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
			floorMaterial.emissiveColor  = new BABYLON.Color3(0.5,0.5,0.5);
			//floorMaterial.diffuseTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
			//floorMaterial.diffuseTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;

			newMeshes[0].material = floorMaterial;*/

			for(let x=-10;x < 10;++x){
				for(let y = -10; y<10;++y){
					let n = newMeshes[0].clone("1", null);
					n.setAbsolutePosition(new Vector3(2*w*x+((y%2)*w),0,y*h));
					n.actionManager = new ActionManager(this._scene);
					n.actionManager.registerAction(
						new ExecuteCodeAction(ActionManager.OnLeftPickTrigger,
						() => {
							console.log(x,y);
						}
					));
				}
			}


	    });
		/*ImportMesh(["assets/models/tile.babylon"], "", "", this._scene, (meshes) => {
			console.log(meshes);
			this_.camera.target = meshes[0];
		});*/
	}

    doRender(): void {
        // Run the render loop.
        this._engine.runRenderLoop(() => {
            this._scene.render();
        });

        // The canvas/window resize event handler.
        window.addEventListener('resize', () => {
            this._engine.resize();
        });

    }

	over(event){
		let x = event.clientX;
		let y = event.clientY;
		let w = this._canvas.width;
		let h = this._canvas.height;
		this._moveX =0;
		this._moveZ =0;
		if(x < w*0.1){
			this._moveX = -1;
		}
		else if(x > 0.9*w){
			this._moveX = 1;
		}
		if(y < h*0.1){
			this._moveZ = 1;
		}
		else if(y > 0.9*h){
			this._moveZ = -1;
		}
	}

	ngAfterViewChecked(){
		this._camera.position.x += this._moveX * 0.1;
		this._camera.position.z += this._moveZ * 0.1;
	}
}
