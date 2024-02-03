import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCOWkxCiO48LpSHeWGHbju7TaD8qY3pxBg",
  authDomain: "csunevents-b3141.firebaseapp.com",
  projectId: "csunevents-b3141",
  storageBucket: "csunevents-b3141.appspot.com",
  messagingSenderId: "75332917675",
  appId: "1:75332917675:web:f07adc91dc9344be039aee",
  measurementId: "G-3GGYH26JEN"
};
console.log('Firebase app initialized successfully');
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});