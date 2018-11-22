// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: "AIzaSyCIC_hx76-htV1qbQKr9z_EEMCS2ddDNg4",
		authDomain: "x-dev-ew3.firebaseapp.com",
		databaseURL: "https://x-dev-ew3.firebaseio.com",
		projectId: "x-dev-ew3",
		storageBucket: "x-dev-ew3.appspot.com",
		messagingSenderId: "410778438769"
	},
	urls:{
		lobbies: "http://localhost:8080/"
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
