/*
* Ionic Collection v0.0.0
* Copyright 2015, Emerson Thompson <thompson.emerson@gmail.com>
* Free to use under the MIT license.
* 04/08/2015
*/


angular.module('IonicCollectionApp', [])

.controller('AppCtrl', ['$scope', function ($scope) {

    $scope.collection = [
        {
          name: 'Ionic Basics',
          slug: 'ionic-basics',
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
            { title: 'Understanding Filters in Ionic', url: 'http://mcgivery.com/filters-ionic/' },
            { title: 'The Definitive Ionic Starter Guide', url: 'https://www.airpair.com/ionic-framework/posts/the-definitive-ionic-starter-guide' },
            { title: 'Ionic Framework | Using Touch Gestures', url: 'http://www.gajotres.net/ionic-framework-series-13-touch-gestures/' },
            { title: 'Ionic Framework | Working With Forms And Validation', url: 'http://www.gajotres.net/ionic-framework-tutorial-10-form-handling-and-validation/' },
            { title: 'Understanding Ionic View LifeCycle', url: 'http://www.gajotres.net/understanding-ionic-view-lifecycle/' },
            { title: 'Hello Master Detail: Your Fourth Ionic Framework App', url: 'http://mcgivery.com/hello-master-detail-your-fourth-ionic-framework-app/' },
            { title: 'Discover the Power of Directives: Bringing an Ionic App to Life — Part 2', url: 'http://www.joshmorony.com/discover-the-power-of-directives-bringing-an-ionic-app-to-life%E2%80%8A-%E2%80%8Apart-2/' },
            { title: 'Install Android, Cordova, and Ionic Framework in Ubuntu', url: 'https://blog.nraboy.com/2014/09/install-android-cordova-ionic-framework-ubuntu/' },
            { 
              title: 'Ionic - Automatic Setup on Windows and OSx with taco cli', 
              description: '<p>Enviroment configuration is so boring, well why not automate this step? Taco cli offers that kind of service ;)</p>' +
                           '<p>With a single command (taco install reqs PLATFORM) all the requirements will be installed simple as that.</p><br>' +
                           '<p>Tutorial video in pt-br: <a href="http://wenndersantos.net/2015/12/taco-nao-perca-tempo-configurando-ambiente-use-taco-install-reqs/" target="_blank">taco install reqs</a>' +
                           '<p>See more in the project site: <a href="http://taco.tools" target="_blank">http://taco.tools</a></p>'
            }
          ]
        },
        {
          name: 'Ionic Components',
          slug: 'ionic-components',
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
          slug: 'ionic-app-patterns',
          itens: [
            { title: 'Ionic: Master Detail Pattern', url: 'http://mcgivery.com/ionic-master-detail-pattern/' },
            { title: 'Internationalization of an Ionic App: Multilanguage Support', url: 'http://mcgivery.com/internationalization-of-an-ionic-app-multilanguage-support/' },
            { title: 'Internationalization and Localization with Ionic Framework and Angular Translate', url: 'https://blog.nraboy.com/2014/08/internationalization-localization-ionicframework-angular-translate/' },
            { title: 'Add Pull to Refresh with Toast Message in Your Ionic App', url: 'http://devdactic.com/pull-to-refresh-ionic/' },
            { title: 'Creating a Feed in Ionic', url: 'http://mcgivery.com/creating-feed-ionic/' },
            { title: 'Creating an Attractive Login Screen in Ionic with Flexbox', url: 'http://www.joshmorony.com/creating-an-attractive-login-screen-in-ionic-with-flexbox/' },
            { title: 'Make A Gallery-Like Image Grid Using Ionic Framework', url: 'https://blog.nraboy.com/2015/03/make-a-gallery-like-image-grid-using-ionic-framework/' },
            { title: 'Making Tinder-Style Swipe Cards With Ionic Framework', url: 'https://blog.nraboy.com/2015/01/making-tinder-style-swipe-cards-ionic-framework/' },
            { title: 'Swipeable Cards with the Ionic Framework', url: 'http://devdactic.com/swipeable-cards-ionic/' },
            { title: 'How to Create a Nested Tab View in Ionic', url: 'http://www.joshmorony.com/how-to-create-a-nested-tab-view-in-ionic/' },
          ]
        },
        {
          name: 'Authentication',
          slug: 'authentication',
          itens: [
            { title: 'Cookie-based Authentication in AngularJS', url: 'http://blog.ionic.io/angularjs-authentication/' },
            { title: 'Handle User Sign-In With Ionic Framework', url: 'https://blog.nraboy.com/2014/07/handle-user-sign-ionicframework/' },
            { title: 'How To Handle User Authentication With AngularJS Inside Your Ionic App', url: 'http://devdactic.com/user-auth-angularjs-ionic/' },
            { title: 'Simple login example with ionic and AngularJS', url: 'http://devdactic.com/simple-login-example-with-ionic-and-angularjs/' },
            { title: 'How To Handle User Authentication With AngularJS Inside Your Ionic App', url: 'http://devdactic.com/user-auth-angularjs-ionic/' },
            { title: 'Adding Social Login with Firebase', url: 'http://blog.ionic.io/adding-social-login-with-firebase/' },
            { title: 'User Authentication with Ionic and Parse, Part 1: Email Login', url: 'http://www.joshmorony.com/user-authentication-with-ionic-and-parse-part-1-email-login/' },
            { title: 'User Authentication with Ionic and Parse, Part 2: Facebook Login', url: 'http://www.joshmorony.com/user-authentication-with-ionic-and-parse-part-2-facebook-login/' },
          ]
        },
        {
          name: 'Testing',
          slug: 'testing',
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
          slug: 'backend-as-a-service',
          itens: [
            { title: 'Dicas para trabalhar com o Ionic Framework – PouchDB', url: 'http://frontinbrazil.com.br/pouchdb/' },
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
            { title: 'Examples Using Ionic Framework and Firebase', url: 'http://www.toptal.com/front-end/building-multi-platform-real-time-mobile-applications-using-ionic-framework-and-firebase' },
            { title: 'How To Use PouchDB + SQLite For Local Storage In Your Ionic App', url: 'http://gonehybrid.com/how-to-use-pouchdb-sqlite-for-local-storage-in-your-ionic-app/' },
            { title: 'HTML5 Offline Mobile App Using Ionic and PouchDB', url: 'http://www.webspeaks.in/2015/03/html5-offline-mobile-app-using-ionic-pouchdb.html' },
            { title: 'Offline Data Synchronization in Ionic', url: 'http://frontmag.no/artikler/utvikling/offline-data-synchronization-ionic' },
            { title: 'Upload Camera Images To Firebase Using Ionic Framework', url: 'https://www.airpair.com/ionic-framework/posts/ionic-firebase-camera-app' },
            { title: 'Build a Real Time Hybrid App with Ionic & Firebase', url: 'https://www.airpair.com/angularjs/posts/build-a-real-time-hybrid-app-with-ionic-firebase' },
            { title: 'Using Couchbase in Your Ionic Framework Application Part 1', url: 'http://blog.couchbase.com/using-couchbase-in-your-ionic-framework-application-part-1' },
            { title: 'Implementing the Master Detail Pattern in Ionic with Firebase', url: 'http://www.joshmorony.com/implementing-the-master-detail-pattern-in-ionic-with-firebase/' },
            { title: 'Create a Real Time Chat App with Ionic and Firebase', url: 'http://www.joshmorony.com/create-a-real-time-chat-app-with-ionic-and-firebase/' },
          ]
        },
        {
          name: 'Ionic Tooling',
          slug: 'ionic-tooling',
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
            { title: 'Debugging Your Apache Cordova iOS App With Safari', url: 'https://blog.nraboy.com/2015/10/debugging-your-apache-cordova-ios-app-with-safari/' },
            { title: 'StrongLoop, Ionic, and IBM Bluemix', url: 'http://www.raymondcamden.com/2015/10/29/strongloop-ionic-and-ibm-bluemix' },
            { title: 'Adding localization to your Ionic application with IBM Bluemix', url: 'http://www.raymondcamden.com/2015/10/14/adding-localization-to-your-ionic-application-with-ibm-bluemix' },
          ]
        },
        {
          name: 'Ionic Backend Services (ionic.io)',
          slug: 'ionic-backend-services',
          itens: [
            { title: 'An early look at Ionic Push', url: 'http://www.raymondcamden.com/2015/03/31/an-early-look-at-ionic-push' },
            { title: 'Push It Real Good with Ionic', url: 'https://www.airpair.com/javascript/posts/push-it-real-good-with-ionic' },
            { title: 'Easy Ionic Push Notifications With Ionic.io In 15 Minutes', url: 'http://devdactic.com/ionic-push-notifications/' },
            { title: 'An Introduction to Ionic Push', url: 'http://www.joshmorony.com/an-introduction-to-ionic-push/' },
            { title: 'Testing Ionic Push Webhooks with IBM Bluemix', url: 'http://www.raymondcamden.com/2015/10/07/testing-ionic-push-webhooks-with-ibm-bluemix' },
            { title: 'Ionic View in 4 steps', url: 'http://www.ionicbundle.com/ionic-view-in-4-steps/' },
            { title: 'Sending Out Android Push Notification with Ionic.io to Your Users', url: 'http://devdactic.com/android-push-notifications/' },
          ]
        },
        {
          name: 'Ionic Ions',
          slug: 'ionic-ions',
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
          slug: 'ngcordova-cordova-plugins',
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
            { title: 'Ionic- Using Local Notifications', url: 'http://digitaldrummerj.me/ionic-local-notification/' },
            { title: 'How To Add Sound Effects To Your Ionic App With Native Audio', url: 'http://gonehybrid.com/how-to-add-sound-effects-to-your-ionic-app-with-native-audio/' },
            { title: '7 Steps to Building a Hybrid Apple Watch App', url: 'http://developer.telerik.com/featured/7-steps-to-building-a-hybrid-apple-watch-app/' },
            { title: 'Facebook Native login with Ionic Framework', url: 'https://ionicthemes.com/learn/about/native-facebook-login-with-ionic-framework' },
            { title: 'Google+ login with Ionic Framework', url: 'https://ionicthemes.com/learn/about/google-plus-login-with-ionic-framework' },
            { title: 'How To Set Up Quick Actions With 3D Touch For Your Ionic App', url: 'http://gonehybrid.com/how-to-set-up-quick-actions-with-3d-touch-for-your-ionic-app/' },
            { 
              title: 'Code Push | Push code updates to your apps, instantly', 
              description: '<p>With code push plugin you can update your app instantly, without any deploy on the app store.</p>' +
                           '<p>It\'s so easy to configure and it work for cordova based app\s and react native.</p>' +
                           '<br>Tutorial in pt-br: <a href="http://wenndersantos.net/2015/12/code-push-atualize-seu-app-sem-precisar-publicar-uma-nova-versao-na-store/" target="_blank">Code Push</a></p>' +
                           '<p>Project site: <a href="http://microsoft.github.io/code-push" target="_blank">http://microsoft.github.io/code-push/</a></p>'
              }
          ]
        },
        {
          name: 'Miscellaneous',
          slug: 'miscellaneous',
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
            { title: 'Create Your First Windows 10 Universal Apps With Ionic Framework (Walkthrough)', url: 'http://blog.aveni.us/index.php/2015/12/19/creating-windows-10-universal-apps-ionic-framework' },
            { title: 'Build an iOS app with Push Notifications using Ionic Framework', url: 'https://www.airpair.com/ionic-framework/posts/push-notifications-using-ionic-framework' },
            { title: 'How to Make High Performance PhoneGap Apps', url: 'http://www.joshmorony.com/how-to-make-high-performance-phonegap-apps/' },
            { title: 'Using Device Grade in Ionic Framework Apps', url: 'https://calendee.com/2015/05/15/using-device-grade-in-ionic-framework/' },
            { title: 'Tracking and notifying geolocation status with Ionic', url: 'http://www.raymondcamden.com/2015/05/18/tracking-and-notifying-geolocation-status-with-ionic' },
            { title: 'How To Add A Search Bar In The Header On Ionic', url: 'http://gonehybrid.com/how-to-add-a-search-bar-in-the-header-on-ionic/' },
            { title: 'How To Create An Advanced Ionic Gallery with Image Zooming', url: 'http://devdactic.com/ionic-image-zooming/' },
            { title: 'How To Create And Display A PDF File In Your Ionic App', url: 'http://gonehybrid.com/how-to-create-and-display-a-pdf-file-in-your-ionic-app/' },
            { title: 'How To Easily Use The Twitter REST Api With AngularJS', url: 'http://devdactic.com/twitter-rest-api-angularjs' },
            { title: 'Using the Web Audio API for precision audio in Ionic', url: 'https://www.airpair.com/ionic-framework/posts/using-web-audio-api-for-precision-audio-in-ionic' },
            { title: 'The Best Looking Ionic Framework Themes', url: 'http://www.gajotres.net/best-looking-ionic-framework-themes/' },
            { title: 'Using Google Maps With Ionic Framework', url: 'http://www.gajotres.net/using-google-maps-with-ionic-framework/' },
            { title: 'A Comprehensive List Of Ionic Starter Apps', url: 'http://www.gajotres.net/a-comprehensive-list-of-ionic-starter-apps' },
            { title: 'Integrating Google Maps with an Ionic Application', url: 'http://www.joshmorony.com/integrating-google-maps-with-an-ionic-application/' },
            { title: 'Bring Your Ionic App to Life: Getting Started with D3.js', url: 'http://gonehybrid.com/bring-your-ionic-app-to-life-getting-started-with-d3-js/' },
            { title: 'Using Views Events To Create JavaScript Pure Ionic Splash Screen', url: 'http://www.gajotres.net/using-views-events-to-create-javascript-pure-ionic-splash-screen/' },
            { title: 'Ionic Framework | Get Page Height & Width', url: 'http://www.gajotres.net/ionic-framework-get-page-height-width/' },
            { title: 'Ultimate AngularJS and Ionic performance cheat sheet', url: 'http://julienrenaux.fr/2015/08/24/ultimate-angularjs-and-ionic-performance-cheat-sheet/' },
            { title: 'Animating Elements in your Ionic App', url: 'http://blog.ionic.io/animating-elements-in-your-ionic-app/' },
            { title: 'Cordova + Ionic in Visual Studio - 101 Tutorial [Part I]', url: 'http://binarylies.ghost.io/cordova-ionic-in-visual-studio/' },
            { title: '8 Reasons Why I’m Glad I Switched to the Ionic Framework', url: 'http://www.joshmorony.com/8-reasons-why-im-glad-i-switched-to-the-ionic-framework/' },
            { title: 'How to create a calculator application with Ionic framework by using Ionic Creator for UI', url: 'http://tutorials.pluralsight.com/review/how-to-create-a-calculator-application-with-ionic-framework-by-using-ionic-creator-for-ui/article.md' },
            { title: 'Hello Modules: Your Third Ionic Framework App', url: 'http://mcgivery.com/hello-modules-your-third-ionic-framework-app/' },
            { title: 'Use Font Awesome Glyph Icons With Ionic Framework', url: 'https://blog.nraboy.com/2014/10/use-font-awesome-glyph-icons-ionicframework/' },
            { title: 'Build a WhatsApp clone with Meteor and Ionic - Meteor Platform version', url: 'http://info.meteor.com/blog/whatsapp-with-meteor-angular-and-ionic' },
            { title: 'Modifying CSS Library Defaults in Ionic', url: 'http://www.ionicbundle.com/modifying-css-library-defaults-in-ionic/' },
            { title: '4 Ways to Make Your Ionic App Feel Native', url: 'http://scottbolinger.com/4-ways-to-make-your-ionic-app-feel-native/' },
            { title: 'Meteor, Ionic and Cordova basic tutorial', url: 'https://www.codetutorial.io/meteor-ionic-and-cordova-basic-tutorial/' },
            { title: 'Continuous Integration with Ionic Framework using Visual Studio Online', url: 'https://blogs.msdn.microsoft.com/mvpawardprogram/2015/10/27/continuous-integration-with-ionic-framework-using-visual-studio-online-from-check-in-to-device/' },
            { title: 'What’s the Difference Between Ionic and AngularJS?', url: 'http://www.joshmorony.com/whats-the-difference-between-ionic-and-angularjs/' },
          ]
        },
        {
          name: 'Native UI',
          slug: 'native-ui',
          itens: [
            { 
              title: 'Project Ace - Cordova plugin for native ui', 
              description: '<p>Project ace is a plugin that allow the developer add the power of the native layout platform using native layout code or javascript</p>' +
                           '<br><p>See more in the projec: <a href="http://microsoft.github.io/ace/" target="_blank">http://microsoft.github.io/ace/</a></p>'            
            }
          ]
        },
        {
          name: 'Ionic 2',
          slug: 'ionic-2',
          itens: [
            { title: 'Installing Ionic 2', url: 'http://ionicframework.com/docs/v2/getting-started/installation/' },
            { title: 'Sample Application with Ionic 2', url: 'http://coenraets.org/blog/2015/10/sample-application-with-ionic-2/' },
            { title: 'Sample Ionic 2 Application with a Salesforce Back-End', url: 'http://coenraets.org/blog/2015/10/ionic2-salesforce-oauth-rest/' },
            { title: 'Ionic 2 First Look Series: Your First Ionic 2 App Explained', url: 'http://www.joshmorony.com/ionic-2-first-look-series-your-first-ionic-2-app-explained/' },
            { title: 'Ionic 2 First Look Series: New Angular 2 Concepts & Syntax', url: 'http://www.joshmorony.com/ionic-2-first-look-series-new-angular-2-concepts-syntax/' },
            { title: 'Build a Todo App from Scratch with Ionic 2 [VIDEO TUTORIAL]', url: 'http://www.joshmorony.com/build-a-todo-app-from-scratch-with-ionic-2-video-tutorial/' },
            { title: 'Intro to ECMAScript 6 and Angular 2 for Ionic Developers', url: 'http://www.joshmorony.com/intro-to-ecmascript-6-and-angular-2-for-ionic-developers/' },
            { title: 'Ionic 2: How to Create a Sliding Delete Button for Lists', url: 'http://www.joshmorony.com/ionic-2-how-to-create-a-sliding-delete-button-for-lists/' },
            { title: 'Ionic 2: How to Use Google Maps & Geolocation [VIDEO TUTORIAL]', url: 'http://www.joshmorony.com/ionic-2-how-to-use-google-maps-geolocation-video-tutorial/' },
            { title: 'Build a Todo App from Scratch with Ionic 2 [VIDEO TUTORIAL]', url: 'http://www.joshmorony.com/build-a-todo-app-from-scratch-with-ionic-2-video-tutorial/' },
            { title: 'Use SQLite In Ionic 2 Instead Of Local Storage', url: 'https://blog.nraboy.com/2015/12/use-sqlite-in-ionic-2-instead-of-local-storage/' },
            { title: 'How to Convert an Ionic 1 Application to Ionic 2', url: 'http://www.joshmorony.com/how-to-convert-an-ionic-1-application-to-ionic-2/' },
            { title: 'How to Create a Directive in Ionic 2 – Parallax Header', url: 'http://www.joshmorony.com/how-to-create-a-directive-in-ionic-2-parallax-header/' },
            { title: 'How to Use Pipes to Manipulate Data in Ionic 2', url: 'http://www.joshmorony.com/how-to-use-pipes-to-manipulate-data-in-ionic-2/' },
            { title: 'Navigate Between Pages In An Ionic 2 Android And iOS App', url: 'https://blog.nraboy.com/2015/12/navigate-between-pages-in-an-ionic-2-android-and-ios-app/' },
            { title: 'Understanding Ionic 2: Class', url: 'http://mcgivery.com/understanding-ionic-2-class/' },
            { title: 'Understanding Ionic 2: @Page', url: 'http://mcgivery.com/understanding-ionic-2-page/' },
            { title: 'Understanding Ionic 2: @App', url: 'http://mcgivery.com/understanding-ionic-2-app/' },
            { title: 'Understanding Ionic 2: Imports', url: 'http://mcgivery.com/understanding-ionic-2-imports/' },
            { title: 'Ionic 2 | Tutorial | Let’s Create Our First Application', url: 'http://www.gajotres.net/ionic-2-tutorial-lets-create-our-first-application/' },
            { title: 'Ionic 2 | A Page Anatomy Part 1 – The Root Component', url: 'http://www.gajotres.net/ionic-2-a-page-anatomy-part-1-the-root-component/' },
            { title: 'Ionic 2 | A Page Anatomy Part 2 – Page Component', url: 'http://www.gajotres.net/ionic-2-a-page-anatomy-part-2-page-components/' },
            { title: 'Ionic 2 | Making REST HTTP Requests Like a Pro', url: 'http://www.gajotres.net/ionic-2-making-rest-http-requests-like-a-pro/' },
            { title: 'Ionic 2 | Sharing Data Between Pages/Components', url: 'http://www.gajotres.net/ionic-2-sharing-data-between-pagescomponents/' },
            { title: 'Ionic 2 | How To Create And Validate Forms', url: 'http://www.gajotres.net/ionic-2-how-o-create-and-validate-forms/' },
          ]
        }
    ];

    $scope.show = function(item) {
      if (item.description) {
        item.showDescription = item.showDescription === undefined ? true : !item.showDescription;
        return;
      }
      
      window.open(item.url, 'location=yes');      
    };

}])

  .filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  }]);
;
