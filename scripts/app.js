/*
* Ionic Collection v0.0.0
* Copyright 2015, Emerson Thompson
* Free to use under the MIT license.
* 04/08/2015
*/


angular.module('IonicCollectionApp', [])

.controller('AppCtrl', ['$scope', function ($scope) {

    $scope.collection = [
        { 
          name: 'Ionic Basics',
          itens: [
            { title: 'Hello World: Your First Ionic Framework App', url: 'http://mcgivery.com/hello-world-first-ionic-framework-app' },
            { title: 'Structure of an Ionic App', url: 'http://mcgivery.com/structure-of-an-ionic-app/' },
            { title: 'Creating Views with Ionic', url: 'http://mcgivery.com/creating-views-with-ionic/' },
            { title: 'Controllers in Ionic/Angular', url: 'http://mcgivery.com/controllers-ionicangular/' },
            { title: 'Make HTTP Requests In Android And iOS With Ionic Framework', url: 'https://blog.nraboy.com/2014/08/make-http-requests-android-ios-ionicframework/' },
            { title: 'Ionic: Using Factories and Web Services for Dynamic Data', url: 'http://mcgivery.com/ionic-using-factories-and-web-services-for-dynamic-data/' },
            { title: 'SOAP Web Services in Angular and Ionic', url: 'http://mcgivery.com/soap-web-services-angular-ionic/' },
            { title: 'Modules in Ionic/Angular', url: 'http://mcgivery.com/modules-ionicangular/' },
            { title: 'Promise-Based Architecture in an Ionic App', url: 'http://mcgivery.com/promise-based-architecture-in-an-ionic-app/' },
            { title: 'Using The UI-Router To Navigate In Ionic Framework', url: 'https://blog.nraboy.com/2014/11/using-ui-router-navigate-ionicframework/' },
            { title: 'Saving Data With Ionic Framework', url: 'https://blog.nraboy.com/2014/06/saving-data-with-ionicframework/' },
            { title: 'Organising Code in an Ionic Application for Beginners', url: 'http://www.joshmorony.com/organising-code-in-an-ionic-application-for-beginners/' },
            { title: 'Validation in Ionic Framework Apps with ngMessages', url: 'https://calendee.com/2014/12/26/validation-in-ionic-framework-apps-with-ngmessages/' },
            { title: 'Ionic – Setup on OSx', url: 'http://digitaldrummerj.me/ionic-setup-osx/' },
            { title: 'Ionic – How to setup on Windows', url: 'http://digitaldrummerj.me/Ionic-Setup-Windows/' },
            { title: 'Build Your First Mobile App With The Ionic Framework', url: 'http://gonehybrid.com/build-your-first-mobile-app-with-the-ionic-framework-part-1/' },
            { title: 'How To Organize The Files In Your Ionic Project', url: 'http://gonehybrid.com/how-to-organize-the-files-in-your-ionic-project/' },
            { title: 'How to Create Complex Layouts in Ionic', url: 'http://www.joshmorony.com/how-to-create-complex-layouts-in-ionic/' },
            { title: 'Debugging Ionic Apps using Chrome Developer Tools', url: 'http://mcgivery.com/debugging-ionic-apps-chrome-developer-tools' },
            { title: 'The Definitive Ionic Starter Guide', url: 'https://www.airpair.com/ionic-framework/posts/the-definitive-ionic-starter-guide' },
            { title: 'Ionic Framework | Using Touch Gestures', url: 'http://www.gajotres.net/ionic-framework-series-13-touch-gestures/' },
            { title: 'Ionic Framework | Working With Forms And Validation', url: 'http://www.gajotres.net/ionic-framework-tutorial-10-form-handling-and-validation/' },
            { title: 'Understanding Ionic View LifeCycle', url: 'http://www.gajotres.net/understanding-ionic-view-lifecycle/' },
          ]
        },
        { 
          name: 'Ionic Components',
          itens: [
            { title: 'Understanding Ionic’s Side Menu', url: 'http://mcgivery.com/understanding-ionics-side-menu/' },
            { title: 'Understanding Tabs In Ionic Framework', url: 'https://blog.nraboy.com/2014/12/understanding-tabs-ionic-framework/' },
            { title: 'Understanding the Ionic Framework Action Sheet', url: 'http://mcgivery.com/understanding-ionic-framework-action-sheet/' },
            { title: 'Understanding Ionic’s Infinite Scroll', url: 'http://mcgivery.com/ionic-infinite-scroll/' },
            { title: 'Understanding Pull to Refresh', url: 'http://blog.ionic.io/pull-to-refresh-directive/' },
            { title: 'Make List Items Swipeable In Ionic Framework', url: 'https://blog.nraboy.com/2014/12/make-list-items-swipeable-ionic-framework/' },
            { title: 'Using Slide Boxes and Tabs in Ionic Framework Apps', url: 'https://blog.nraboy.com/2014/11/using-slide-boxes-tabs-ionic-framework-apps/' },
            { title: 'Ionic Framework | Using Grid System', url: 'http://www.gajotres.net/ionic-framework-series-14-grid-system/' },
          ]
        },
        { 
          name: 'Ionic App Patterns',
          itens: [
            { title: 'Ionic: Master Detail Pattern', url: 'http://mcgivery.com/ionic-master-detail-pattern/' },
            { title: 'Internationalization of an Ionic App: Multilanguage Support', url: 'http://mcgivery.com/internationalization-of-an-ionic-app-multilanguage-support/' },
            { title: 'Internationalization and Localization with Ionic Framework and Angular Translate', url: 'https://blog.nraboy.com/2014/08/internationalization-localization-ionicframework-angular-translate/' },
            { title: 'Add Pull to Refresh with Toast Message in Your Ionic App', url: 'http://devdactic.com/pull-to-refresh-ionic/' },
            { title: 'Creating a Feed in Ionic', url: 'http://mcgivery.com/creating-feed-ionic/' },
            { title: 'Make A Gallery-Like Image Grid Using Ionic Framework', url: 'https://blog.nraboy.com/2015/03/make-a-gallery-like-image-grid-using-ionic-framework/' },
            { title: 'Making Tinder-Style Swipe Cards With Ionic Framework', url: 'https://blog.nraboy.com/2015/01/making-tinder-style-swipe-cards-ionic-framework/' },
            { title: 'Swipeable Cards with the Ionic Framework', url: 'http://devdactic.com/swipeable-cards-ionic/' },
          ]
        },
        { 
          name: 'Authentication',
          itens: [
            { title: 'Cookie-based Authentication in AngularJS', url: 'http://blog.ionic.io/angularjs-authentication/' },
            { title: 'Handle User Sign-In With Ionic Framework', url: 'https://blog.nraboy.com/2014/07/handle-user-sign-ionicframework/' },
            { title: 'How To Handle User Authentication With AngularJS Inside Your Ionic App', url: 'http://devdactic.com/user-auth-angularjs-ionic/' },
            { title: 'Simple login example with ionic and AngularJS', url: 'http://devdactic.com/simple-login-example-with-ionic-and-angularjs/' },
            { title: 'How To Handle User Authentication With AngularJS Inside Your Ionic App', url: 'http://devdactic.com/user-auth-angularjs-ionic/' },
            { title: 'Adding Social Login with Firebase', url: 'http://blog.ionic.io/adding-social-login-with-firebase/' },
            { title: 'User Authentication with Ionic and Parse, Part 1: Email Login', url: 'http://www.joshmorony.com/user-authentication-with-ionic-and-parse-part-1-email-login/' },
          ]
        },
        { 
          name: 'Testing',
          itens: [
            { title: 'Writing Your First Unit Test with the Ionic Framework', url: 'https://bradb.net/unit-testing-with-the-ionic-framework/' },
            { title: 'Unit Testing Your Ionic Framework App', url: 'http://mcgivery.com/unit-testing-ionic-app/' },
            { title: 'Optimize your Ionic Testing with Wallaby.js, Bard.js, and WebStorm', url: 'http://briantroncone.com/?p=463' },
            { title: 'End2end Testing Ionic collection-repeat with Protractor', url: 'http://developer.mobilecaddy.net/2015/05/end2end-testing-ionic-collection-repeat-with-protractor/' },
            { title: 'Ionic Framework & Protractor Tests', url: 'https://calendee.com/2015/05/19/ionic-framework-protractor-tests/' },
          ]
        },
        { 
          name: 'Backend as a Service',
          itens: [
            { title: 'Use Parse Core In Your Ionic Framework Mobile Apps', url: 'https://blog.nraboy.com/2015/04/use-parse-core-in-ionic-framework-mobile-apps/' },
            { title: 'Sign Into Firebase With Facebook Using Ionic Framework', url: 'https://blog.nraboy.com/2015/03/sign-into-firebase-with-facebook-using-ionic-framework/' },
            { title: 'Syncing Data With Firebase Using Ionic Framework', url: 'https://blog.nraboy.com/2014/12/syncing-data-firebase-using-ionic-framework/' },
            { title: 'Syncing Data With Dropbox Using Ionic Framework', url: 'https://blog.nraboy.com/2014/10/syncing-data-dropbox-using-ionicframework/' },
            { title: 'Create a Password Management App Using Ionic Framework and Firebase', url: 'https://www.airpair.com/ionic-framework/posts/ionic-firebase-password-manager' },
            { title: 'Build a Hybrid Application with the Ionic Framework and Azure Mobile Services, Part 1: Configuring the Project', url: 'http://briantroncone.com/?p=315' },
            { title: 'Build a Hybrid Application with the Ionic Framework and Azure Mobile Services, Part 2: Creating the User Interface', url: 'http://briantroncone.com/?p=365' },
            { title: 'Build a Hybrid Application with the Ionic Framework and Azure Mobile Services, Part 3: Wiring Up The Backend', url: 'http://briantroncone.com/?p=391' },
            { title: 'Sync Data Using PouchDB In Your Ionic Framework App', url: 'http://devgirl.org/2014/12/30/sync-data-using-pouchdb-in-your-ionic-framework-app/' },
            { title: 'Creating a Firebase Powered End to End Ionic Application', url: 'http://www.sitepoint.com/creating-firebase-powered-end-end-ionic-application/' },
            { title: 'Working with IBM MobileFirst and the Ionic Framework', url: 'http://www.raymondcamden.com/2015/03/23/working-with-ibm-mobilefirst-and-the-ionic-framework' },
            { title: 'Using MobileFirst HTTP Adapters with an Ionic Application', url: 'http://www.raymondcamden.com/2015/04/08/using-mobilefirst-http-adapters-with-an-ionic-application' },
            { title: 'Using MobileFirst SQL Adapters with an Ionic Application', url: 'http://www.raymondcamden.com/2015/04/02/using-mobilefirst-sql-adapters-with-an-ionic-application' },
            { title: 'Using Remote Logging with Ionic and IBM MobileFirst', url: 'http://www.raymondcamden.com/2015/03/31/using-remote-logging-with-ionic-and-ibm-mobilefirst' },
            { title: 'Working with IBM MobileFirst and Ionic – Bootstrapping', url: 'http://www.raymondcamden.com/2015/03/24/working-with-ibm-mobilefirst-and-ionic-bootstraping' },
            { title: 'How To Use PouchDB + SQLite For Local Storage In Your Ionic App', url: 'http://gonehybrid.com/how-to-use-pouchdb-sqlite-for-local-storage-in-your-ionic-app/' },
            { title: 'Upload Camera Images To Firebase Using Ionic Framework', url: 'https://www.airpair.com/ionic-framework/posts/ionic-firebase-camera-app' },
            { title: 'Build a Real Time Hybrid App with Ionic & Firebase', url: 'https://www.airpair.com/angularjs/posts/build-a-real-time-hybrid-app-with-ionic-firebase' },
            { title: 'Using Couchbase in Your Ionic Framework Application Part 1', url: 'http://blog.couchbase.com/using-couchbase-in-your-ionic-framework-application-part-1' },
          ]
        },
        { 
          name: 'Ionic Tooling',
          itens: [
            { title: 'Using the Ionic Framework with Grunt and PhoneGap Build', url: 'http://mcgivery.com/using-the-ionic-framework-with-grunt-and-phone-gap-build/' },
            { title: 'Minifying Your App’s Source Code', url: 'http://blog.ionic.io/minifying-your-source-code/' },
            { title: 'Debugging AngularJS Apps from the Console', url: 'http://blog.ionic.io/angularjs-console/' },
            { title: 'Use The Ionic CLI To Integrate Crosswalk Into Your Project', url: 'https://blog.nraboy.com/2015/02/use-ionic-cli-integrate-crosswalk-project/' },
            { title: 'Ionic adds a new State feature', url: 'http://www.raymondcamden.com/2015/04/20/ionic-adds-a-new-state-feature' },
            { title: 'Automatically Add JS/CSS Files to Your Ionic Projects', url: 'http://digitaldrummerj.me/gulp-inject/' },
            { title: 'Ionic – The Ionicbox and How To Use It', url: 'http://digitaldrummerj.me/ionicbox-notes/' },
            { title: 'Ionic – Using Android x86 Virtual Machine Instead of Emulator', url: 'http://digitaldrummerj.me/Android-x86-Virtual-Machine-Instead-Of-Emulator/' },
            { title: 'Production ready apps with Ionic Framework', url: 'https://www.airpair.com/ionic-framework/posts/production-ready-apps-with-ionic-framework' },
            { title: 'How to Minify an Ionic Application for Production', url: 'http://www.joshmorony.com/how-to-minify-an-ionic-application-for-production/' },
            { title: 'Getting Started with the Ionic Command Line Interface (CLI)', url: 'http://www.joshmorony.com/getting-started-with-the-ionic-command-line-interface-cli/' },
            { title: 'The Difference Between Building with PhoneGap and PhoneGap Build', url: 'http://www.joshmorony.com/the-difference-between-building-with-phonegap-and-phonegap-build/' },
            { title: 'How to Minify an Ionic Application using Gulp and Cordova Hooks', url: 'http://www.joshmorony.com/how-to-minify-an-ionic-application-using-gulp-and-cordova-hooks/' },
            { title: 'Inspect Your Ionic App With ng-inspector', url: 'http://gonehybrid.com/inspect-your-ionic-app-with-ng-inspector/' },
            { title: 'Mobile Hybrid Apps with VS Code and Ionic', url: 'http://blogs.msdn.com/b/vscode/archive/2015/06/05/mobile-hybrid-apps-with-vs-code-and-ionic.aspx' },
            { title: 'How To Debug The White Screen Of Death In Your Ionic App', url: 'http://gonehybrid.com/how-to-debug-the-white-screen-of-death-in-your-ionic-app/' },
          ]
        },
        { 
          name: 'Ionic Backend Services (ionic.io)',
          itens: [
            { title: 'An early look at Ionic Push', url: 'http://www.raymondcamden.com/2015/03/31/an-early-look-at-ionic-push' },
            { title: 'Push It Real Good with Ionic', url: 'https://www.airpair.com/javascript/posts/push-it-real-good-with-ionic' },
            { title: 'Easy Ionic Push Notifications With Ionic.io In 15 Minutes', url: 'http://devdactic.com/ionic-push-notifications/' },
            { title: 'An Introduction to Ionic Push', url: 'http://www.joshmorony.com/an-introduction-to-ionic-push/' },
          ]
        },
        { 
          name: 'Ionic Ions',
          itens: [
            { title: 'Ionic showWhen directive', url: 'http://mcgivery.com/ionic-showwhen-directive/' },
            { title: 'showWhenState: Conditional Elements In Ionic by State', url: 'http://devdactic.com/ionic-showwhenstate/' },
            { title: 'Dividing a List Automatically in Ionic Framework', url: 'http://mcgivery.com/dividing-list-automatically-ionic-framework/' },
            { title: 'Preload images in Ionic using $ImageCacheFactory', url: 'http://mcgivery.com/preload-images-ionic/' },
            { title: 'Adding Frosted Glass Effect to your Ionic Framework App', url: 'http://devdactic.com/frosted-glass-ionic/' },
            { title: 'Shrinking Headers Like Facebook With the Ionic Framework', url: 'http://devdactic.com/shrinking-headers-with-ionic/' },
            { title: 'Must-have plugins for Ionic Framework', url: 'http://www.gajotres.net/must-have-plugins-for-ionic-framework/' },
          ]
        },
        { 
          name: 'ngCordova/Cordova Plugins',
          itens: [
            { title: 'Installing ngCordova in an Ionic Application', url: 'http://www.joshmorony.com/installing-ngcordova-in-an-ionic-application/' },
            { title: 'Using Custom URL Schemes In Your Ionic Framework App', url: 'http://mcgivery.com/using-custom-url-schemes-ionic-framework-app/' },
            { title: 'OAuth with Ionic and ngCordova', url: 'http://blog.ionic.io/oauth-ionic-ngcordova/' },
            { title: 'Print Data To Paper Or PDF Using Ionic Framework', url: 'https://blog.nraboy.com/2015/03/print-data-to-paper-or-pdf-using-ionic-framework/' },
            { title: 'Create A Todo List Mobile App Using Ionic Framework', url: 'https://blog.nraboy.com/2015/03/create-todo-list-mobile-app-using-ionic-framework/' },
            { title: 'Get Available Free Disk Space Using Apache Cordova', url: 'https://blog.nraboy.com/2015/02/get-available-free-disk-space-using-apache-cordova/' },
            { title: 'Using The Native Device Calendar In Ionic Framework', url: 'https://blog.nraboy.com/2015/02/using-native-device-calendar-ionic-framework/' },
            { title: 'Make Your Own Facebook Mobile App With Ionic Framework', url: 'https://blog.nraboy.com/2015/02/make-facebook-mobile-app-ionic-framework/' },
            { title: 'Prompt User To Rate Ionic Framework Mobile App', url: 'https://blog.nraboy.com/2015/02/prompt-user-rate-ionic-framework-mobile-app/' },
            { title: 'Add ‘Rate my App’ in your ionic app to increase the number of ratings in the app store', url: 'http://devdactic.com/rate-my-app-ionic/' },
            { title: 'Use Native Device Dialogs In Ionic Framework Mobile Apps', url: 'https://blog.nraboy.com/2015/01/use-native-device-dialogs-ionic-framework-mobile-apps/' },
            { title: 'Deploy Ionic Framework App With Pre-Filled SQLite DB', url: 'https://blog.nraboy.com/2015/01/deploy-ionic-framework-app-pre-filled-sqlite-db/' },
            { title: 'Access The Native Device Clipboard In Ionic Framework', url: 'https://blog.nraboy.com/2015/01/access-native-device-clipboard-ionic-framework/' },
            { title: 'Upload Files To A Remote Server Using Ionic Framework', url: 'https://blog.nraboy.com/2015/01/upload-files-remote-server-using-ionic-framework/' },
            { title: 'Open Dynamic Links Using The Cordova InAppBrowser', url: 'https://blog.nraboy.com/2014/12/open-dynamic-links-using-cordova-inappbrowser/' },
            { title: 'Create, Delete, And Search Contacts In Ionic Framework', url: 'https://blog.nraboy.com/2014/11/create-delete-search-contacts-ionic-framework/' },
            { title: 'Playing Audio In Your Android And iOS Ionic Framework App', url: 'https://blog.nraboy.com/2014/11/playing-audio-android-ios-ionicframework-app/' },
            { title: 'Use SQLite Instead of Local Storage In Ionic Framework', url: 'https://blog.nraboy.com/2014/11/use-sqlite-instead-local-storage-ionic-framework/' },
            { title: 'Find The Application Version In Your Ionic Framework App', url: 'https://blog.nraboy.com/2014/11/find-application-version-ionic-framework-app/' },
            { title: 'Implement Social Media Sharing With Ionic Framework', url: 'https://blog.nraboy.com/2014/10/implement-social-media-sharing-ionicframework/' },
            { title: 'Implement Google Maps Using Ionic Framework', url: 'https://blog.nraboy.com/2014/10/implement-google-maps-using-ionicframework/' },
            { title: 'Displaying the Twitter Feed within Your Ionic App', url: 'http://blog.ionic.io/displaying-the-twitter-feed-within-your-ionic-app/' },
            { title: 'Use The Android And iOS Camera With Ionic Framework', url: 'https://blog.nraboy.com/2014/09/use-android-ios-camera-ionic-framework/' },
            { title: 'Show Native Toast Notifications Using Ionic Framework', url: 'https://blog.nraboy.com/2014/09/show-native-toast-notifications-using-ionic-framework/' },
            { title: 'Implement A Barcode Scanner Using Ionic Framework', url: 'https://blog.nraboy.com/2014/09/implement-barcode-scanner-using-ionic-framework/' },
            { title: 'Manage Files In Android And iOS Using Ionic Framework', url: 'https://blog.nraboy.com/2014/09/manage-files-in-android-and-ios-using-ionicframework/' },
            { title: 'Handling Apache Cordova Events With Ionic Framework', url: 'https://blog.nraboy.com/2014/09/handling-apache-cordova-events-ionicframework/' },
            { title: 'Making iOS In-App Purchases With Ionic Framework', url: 'https://blog.nraboy.com/2014/09/making-ios-app-purchases-ionicframework/' },
            { title: 'Making Android In-App Purchases With Ionic Framework', url: 'https://blog.nraboy.com/2014/08/making-android-app-purchases-ionicframework/' },
            { title: 'Create an RSS Reader Using AngularJS and Ionic Framework', url: 'https://blog.nraboy.com/2014/09/create-an-rss-reader-using-angularjs-and-ionicframework/' },
            { title: 'Add A Splash Screen To An Ionic Framework Project', url: 'https://blog.nraboy.com/2014/08/add-splash-screen-ionicframework-project/' },
            { title: 'Polish Your App Launch with Cordova Splashscreen Plugin', url: 'https://calendee.com/2015/03/03/polish-app-launch-with-cordova-splashscreen-plugin/' },
            { title: 'Send Email from Android and iOS with Ionic Framework', url: 'https://blog.nraboy.com/2014/08/send-email-android-ios-ionicframework/' },
            { title: 'Using An Oauth 2.0 Service With Ionic Framework', url: 'https://blog.nraboy.com/2014/07/using-oauth-2-0-service-ionicframework/' },
            { title: 'Launch External URLs with Ionic Framework', url: 'https://blog.nraboy.com/2014/07/launch-external-urls-ionicframework/' },
            { title: 'Using Google Analytics With IonicFramework', url: 'https://blog.nraboy.com/2014/06/using-google-analytics-ionicframework/' },
            { title: 'Using Admob With IonicFramework', url: 'https://blog.nraboy.com/2014/06/using-admob-ionicframework/' },
            { title: 'Check Network Connection With Ionic Framework', url: 'https://blog.nraboy.com/2014/06/check-network-connection-with-ionicframework/' },
            { title: 'Placing Phone Calls In Hybrid Apps', url: 'https://calendee.com/2015/02/26/placing-phone-calls-in-hybrid-apps/' },
            { title: 'How To Make A HealthKit App With Ionic and ngCordoa', url: 'http://devdactic.com/healthkit-app-with-ionic/' },
            { title: 'Using Local Notifications In Your Ionic Framework App', url: 'http://devdactic.com/local-notifications-ionic/' },
            { title: 'Adding Gamecenter Support to your Ionic App', url: 'http://devdactic.com/gamecenter-ionic/' },
            { title: 'Making a Signature Drawpad with Ionic', url: 'http://devdactic.com/signature-drawpad-ionic/' },
            { title: 'Making a Lock Pattern Login with Ionic and AngularJS', url: 'http://devdactic.com/lock-pattern-login-ionic/' },
            { title: 'Support iOS touchID in your ionic app', url: 'http://devdactic.com/support-ios-touchid-in-your-ionic-app/' },
            { title: 'Creating a Realtime Image Sharing App With Ionic and Socket.io', url: 'http://www.htmlxprs.com/post/6/creating-a-realtime-image-sharing-app-with-ionic-and-socketio-tutorial' },
            { title: 'Store Camera Photos Permanently Using PhoneGap, Ionic & ngCordova', url: 'http://www.joshmorony.com/store-camera-photos-permanently-using-phonegap-ionic-ngcordova/' },
            { title: 'Chaining multiple Cordova File Transfers with ngCordova', url: 'http://www.raymondcamden.com/2015/04/13/chaining-multiple-cordova-file-transfers-with-ngcordova' },
            { title: 'Selecting multiple images in a PhoneGap/Cordova app', url: 'http://www.raymondcamden.com/2015/03/12/selecting-multiple-images-in-a-phonegapcordova-app' },
            { title: 'Create A File Browser Using Ionic Framework', url: 'https://www.airpair.com/ionic-framework/posts/ionic-file-browser-app' },
            { title: 'Whitelist External Resources For Use In Ionic Framework', url: 'https://blog.nraboy.com/2015/05/whitelist-external-resources-for-use-in-ionic-framework/' },
            { title: 'Modify The Badge Number Of An Ionic Framework App', url: 'https://blog.nraboy.com/2015/07/modify-the-badge-number-of-an-ionic-framework-app/' },
            { title: 'Useful Cordova Plugins For Your Ionic Application & Examples', url: 'http://www.gajotres.net/useful-cordova-plugins-for-your-ionic-application-examples/' },
            { title: 'Using A Pin Dialog In Your Ionic Framework Mobile App', url: 'https://blog.nraboy.com/2015/07/using-a-pin-dialog-in-your-ionic-framework-mobile-app/' },
            { title: 'Monitor Device Battery Status Using Ionic Framework', url: 'https://blog.nraboy.com/2015/07/monitor-device-battery-status-using-ionic-framework/' },
          ]
        },
        { 
          name: 'Miscellaneous',
          itens: [
            { title: 'Adding Background Images To Ionic Framework Apps', url: 'https://blog.nraboy.com/2015/04/adding-background-images-to-ionic-framework-apps/' },
            { title: 'Create A Complex Calculator App Using Ionic Framework', url: 'https://blog.nraboy.com/2015/04/create-a-complex-calculator-app-using-ionic-framework/' },
            { title: 'Embed Video In Your iOS And Android Ionic Framework App', url: 'https://blog.nraboy.com/2015/01/embed-video-ios-android-ionicframework-app/' },
            { title: 'Add Pin Code Unlock To Your IonicFramework App', url: 'https://blog.nraboy.com/2014/09/add-pin-code-unlock-ionicframework-app/' },
            { title: 'Trigger Pull To Refresh In Ionic Framework Apps', url: 'https://calendee.com/2015/04/25/trigger-pull-to-refresh-in-ionic-framework-apps/' },
            { title: 'Learning the Ionic Framework as a Sencha Touch Developer', url: 'http://www.joshmorony.com/learning-the-ionic-framework-as-a-sencha-touch-developer-part-1/' },
            { title: 'Animations For Your Ionic App with Move.js', url: 'http://devdactic.com/ionic-with-movejs/' },
            { title: 'Building an Ionic hybrid mobile app with TypeScript', url: 'http://weblogs.asp.net/soever/ionictypescript' },
            { title: 'Ionic SocketIO Chat', url: 'http://melvin0008.github.io/blog/ionic-socketio-chat/' },
            { title: 'Switching from native iOS to Ionic: Why Hybrid doesn’t suck (anymore)', url: 'https://www.airpair.com/javascript/posts/switching-from-ios-to-ionic' },
            { title: 'Using the Web Audio API for precision audio in Ionic', url: 'https://www.airpair.com/ionic-framework/posts/using-web-audio-api-for-precision-audio-in-ionic' },
            { title: 'Build an iOS app with Push Notifications using Ionic Framework', url: 'https://www.airpair.com/ionic-framework/posts/push-notifications-using-ionic-framework' },
            { title: 'How to Make High Performance PhoneGap Apps', url: 'http://www.joshmorony.com/how-to-make-high-performance-phonegap-apps/' },
            { title: 'Using Device Grade in Ionic Framework Apps', url: 'https://calendee.com/2015/05/15/using-device-grade-in-ionic-framework/' },
            { title: 'Tracking and notifying geolocation status with Ionic', url: 'http://www.raymondcamden.com/2015/05/18/tracking-and-notifying-geolocation-status-with-ionic' },
            { title: 'How To Add A Search Bar In The Header On Ionic', url: 'http://gonehybrid.com/how-to-add-a-search-bar-in-the-header-on-ionic/' },
            { title: 'How To Create An Advanced Ionic Gallery with Image Zooming', url: 'http://devdactic.com/ionic-image-zooming/' },
            { title: 'How To Easily Use The Twitter REST Api With AngularJS', url: 'http://devdactic.com/twitter-rest-api-angularjs' },
            { title: 'Using the Web Audio API for precision audio in Ionic', url: 'https://www.airpair.com/ionic-framework/posts/using-web-audio-api-for-precision-audio-in-ionic' },
            { title: 'The Best Looking Ionic Framework Themes', url: 'http://www.gajotres.net/best-looking-ionic-framework-themes/' },
            { title: 'Using Google Maps With Ionic Framework', url: 'http://www.gajotres.net/using-google-maps-with-ionic-framework/' },
            { title: 'A Comprehensive List Of Ionic Starter Apps', url: 'http://www.gajotres.net/a-comprehensive-list-of-ionic-starter-apps' },
            { title: 'Integrating Google Maps with an Ionic Application', url: 'http://www.joshmorony.com/integrating-google-maps-with-an-ionic-application/' },
            { title: 'Using Views Events To Create JavaScript Pure Ionic Splash Screen', url: 'http://www.gajotres.net/using-views-events-to-create-javascript-pure-ionic-splash-screen/' },
            { title: 'Ionic Framework | Get Page Height & Width', url: 'http://www.gajotres.net/ionic-framework-get-page-height-width/' },
          ]
        },
    ];

}]);