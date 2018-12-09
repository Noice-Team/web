import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Engine, Scene, FreeCamera, Light, Vector3,
	HemisphericLight, MeshBuilder} from 'babylonjs';

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
    private _camera: FreeCamera;
    private _light: Light;

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

        // Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
        this._camera = new FreeCamera('camera1', new Vector3(0, 5, -10), this._scene);

        // Target the camera to scene origin.
        this._camera.setTarget(Vector3.Zero());

        // Attach the camera to the canvas.
        this._camera.attachControl(this._canvas, false);

        // Create a basic light, aiming 0,1,0 - meaning, to the sky.
        this._light = new HemisphericLight('light1', new Vector3(0, 1, 0), this._scene);

        // Create a built-in "sphere" shape; with 16 segments and diameter of 2.
        let sphere = MeshBuilder.CreateSphere('sphere1',
            { segments: 16, diameter: 2 }, this._scene);

        // Move the sphere upward 1/2 of its height.
        sphere.position.y = 1;

        // Create a built-in "ground" shape.
        let ground = MeshBuilder.CreateGround('ground1',
            { width: 6, height: 6, subdivisions: 2 }, this._scene);
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
}
