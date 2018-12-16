import { ICameraInput, UniversalCamera } from "babylonjs";

export class RTSControl implements ICameraInput<UniversalCamera>{

	public camera:UniversalCamera;

	private onKeyWest:(any)=>void = null;
	private onKeyNorth:(any)=>void = null;
	private onKeyEast:(any)=>void = null;
	private onKeySouth:(any)=>void = null;

	private keys:number[] = [];
	private keysWest:number[] = [37];
	private keysNorth:number[] = [38];
	private keysEast:number[] = [39];
	private keysSouth:number[] = [40];
	private sensibility = 0.1;

	//This function must return the type name of the camera, it could be used for serializing your scene
	getClassName():string{
		return "RtsCameraInput";
	}

	//This function must return the simple name that will be injected in the input manager as short hand
	//for example "mouse" will turn into camera.inputs.attached.mouse
	getSimpleName():string{
		return "RtsInput";
	}

	//This function must activate your input event.  Even if your input does not need a DOM element
	// element and noPreventDefault must be present and used as parameter names.
	// Return void.
	attachControl(element: HTMLElement, noPreventDefault?:boolean):void{
		if(this.onKeyWest)
			return;
		this.onKeyWest =this.getKeyBinder(this.keysWest, noPreventDefault);
		this.onKeyNorth =this.getKeyBinder(this.keysNorth, noPreventDefault);
		this.onKeyEast =this.getKeyBinder(this.keysEast, noPreventDefault);
		this.onKeySouth =this.getKeyBinder(this.keysSouth, noPreventDefault);

		element.addEventListener("keydown", this.onKeyWest , false);
	   	element.addEventListener("keydown", this.onKeyNorth, false);
		element.addEventListener("keydown", this.onKeyEast , false);
	   	element.addEventListener("keydown", this.onKeySouth, false);
	}

	//Detach control must deactivate your input and release all pointers, closures or event listeners
	//element must be present as a parameter name.
	// Return void.
	detachControl(element: HTMLElement):void{

	}

	//This optional function will get called for each rendered frame, if you want to synchronize your input to rendering,
	//no need to use requestAnimationFrame. It's a good place for applying calculations if you have to.
	// Return void.
	checkInputs():void{
		if (!this.onKeyWest) {
			return;
		}
		// Keyboard
		for (var index = 0; index < this.keys.length; index++) {
			var keyCode = this.keys[index];
			if (this.keysWest.indexOf(keyCode) !== -1) {
				this.camera.position.x -= this.sensibility;
			}
			else if (this.keysNorth.indexOf(keyCode) !== -1) {
				this.camera.position.z += this.sensibility;
			}
			else if (this.keysEast.indexOf(keyCode) !== -1) {
				this.camera.position.x += this.sensibility;
			}
			else if (this.keysSouth.indexOf(keyCode) !== -1) {
				this.camera.position.z -= this.sensibility;
			}
		}
		this.keys.length = 0;
   }

	private getKeyBinder(keys:number[], noPreventDefault?:boolean):(any)=>void{
		return (event) => {
		   if(keys.indexOf(event.keyCode) !== -1){
			   var index = this.keys.indexOf(event.keyCode);
			   if (index === -1) {
				   this.keys.push(event.keyCode);
			   }
			   if (!noPreventDefault) {
				   event.preventDefault();
			   }
		   }
	   };
	}
}
