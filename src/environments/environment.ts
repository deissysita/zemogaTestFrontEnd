// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	ENDOPOINT_NG:'http://localhost:3000/timeline',
	ENDOPOINT_NG_SEARCH:'http://localhost:3000/search/',
	ENDPOINT_J_GET_USER:'http://localhost:8082/user',
	ENDPOINT_J_GET_TWEET:'tweets'
};
