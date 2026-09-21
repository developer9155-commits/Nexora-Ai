/*
  Firebase web configuration.

  Replace these values with your own Firebase web config from:
  Firebase Console -> Project settings -> General -> Your apps -> Web app

  This file is safe to use in a browser. Firebase web config is not a password.
  Never put a service account private key, client secret, or admin SDK key here.
*/
(function () {
  const defaultConfig = {
    apiKey: "AIzaSyCjD3-NJIwHwLHTbBpy2QJ8Cyl5T6n5ZDM",
    authDomain: "nexor-ai-3844f.firebaseapp.com",
    projectId: "nexor-ai-3844f",
    storageBucket: "nexor-ai-3844f.firebasestorage.app",
    messagingSenderId: "974994499310",
    appId: "1:974994499310:web:90897ca65c5d08c2bc75ff",
    measurementId: "G-S4FLDKLFKN"
  };

  const storageKey = "nexora_admin_firebase_config";

  let savedConfig = { ...defaultConfig };
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (raw) {
      savedConfig = { ...defaultConfig, ...JSON.parse(raw) };
    }
  } catch (error) {
    savedConfig = { ...defaultConfig };
  }

  window.ADMIN_EMAIL = "developer8709@gmail.com";
  window.FIREBASE_CONFIG = savedConfig;

  window.setFirebaseConfig = function (config) {
    const nextConfig = { ...defaultConfig, ...config };
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(nextConfig));
    } catch (error) {
      console.warn("Unable to save Firebase config locally.", error);
    }
    window.FIREBASE_CONFIG = nextConfig;
    return nextConfig;
  };
})();
