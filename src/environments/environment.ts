// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD5-GSJTnuFtou2TYn3vkVRLB-UClg1xdA',
    authDomain: 'goods-shop.firebaseapp.com',
    databaseURL: 'https://goods-shop.firebaseio.com',
    projectId: 'goods-shop',
    storageBucket: 'goods-shop.appspot.com',
    messagingSenderId: '446848605863'
  }
};
