// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.service.core', 'starter.controllers', 'starter.factories', 'ngAnimate'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })


        .config(function ($stateProvider, $urlRouterProvider, $ionicAppProvider) {

            $ionicAppProvider.identify({
                // The App ID for the server
                app_id: '9a5e36db',
                // The API key all services will use for this app
                api_key: '679c45d469a72bfa27f8d935e05154c7000854598df0afaf'
            });
           
            $stateProvider

                    .state('app', {
                        url: "/app",
                        abstract: true,
                        templateUrl: "templates/menu.html",
                        controller: 'AppCtrl'
                    })

                    .state('app.progetto', {
                        url: "/progetto",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/progetto.html"
                            }
                        }
                    })
                    .state('app.chisiamo', {
                        url: "/chisiamo",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/chisiamo.html"
                            }
                        }
                    })
                    .state('app.associazioni', {
                        url: "/associazioni",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/associazioni.html",
                                controller: 'associazioniCtrl'
                            }
                        }
                    })
                    .state('app.single', {
                        url: "/ass/:assId",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/associazioneDetail.html",
                                controller: 'associazioniDetailCtrl'
                            }
                        }
                    })



                    .state('app.comefunziona', {
                        url: "/comefunziona",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/comefunziona.html"
                            }
                        }
                    })
                    .state('app.contatti', {
                        url: "/contatti",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/contatti.html"
                            }
                        }
                    })



                    .state('app.home', {
                        url: "/home",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/home.html",
                                controller: 'HomeCtrl'
                            }
                        }
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/home');
        })
        ;
