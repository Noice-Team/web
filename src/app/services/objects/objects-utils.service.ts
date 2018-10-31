import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectsUtilsService {

  constructor() { }

	public toPOJO(source:any, dest?:any, filter?:(i:string)=>boolean, transform?:(i:string) => string):any{
		if(!dest){
			dest = {};
		}
		for(let key in source){
			if(filter && !filter(key))
				continue;
			let newKey = transform ? transform(key) : key;
			dest[newKey] = source[key];
		}

		return dest;
	}

	public static removeFirst():(i:string) => string{
		return (input:string) => input.substr(1);
	}
}
