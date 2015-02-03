# Kamer verhuren app

Dit is een MeteorJS project. Volg de volgende stappen om het op een Android apparaat werkend te krijgen.

[meteor.com]:https://www.meteor.com/

- Installeer Meteor:
```sh
curl https://install.meteor.com/ | sh
```
- Installeer de Android SDK voor Meteor:
```sh
meteor install-sdk android
```
- Voeg het Android Cordova platform toe (run dit vanaf kamer-verhuren root directory):
```sh
meteor add-platform android
```
- Run de app op een Android device (run dit vanaf kamer-verhuren root directory):
```sh
meteor run android-device
```