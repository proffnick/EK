import {AppRegistry} from 'react-native';
import { 
  setJSExceptionHandler, 
  setNativeExceptionHandler 
} from 'react-native-exception-handler';
import App from './App';
import {name as appName} from './app.json';


/** 
  If for whatever reason the app crashed without specific 
  error, handle errors here
**/
const jsErrorHandler = (error, isFatal) => {
  console.error("JS Error: ", isFatal,  error);
  // Error can be reported to the server here
};

setJSExceptionHandler(jsErrorHandler, true);
setNativeExceptionHandler((errorString) => {
  console.error("Native Error: ", errorString);
  // or here
});

AppRegistry.registerComponent(appName, () => App);
