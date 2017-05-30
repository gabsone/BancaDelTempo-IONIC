// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.service.core', 'starter.controllers', 'starter.factories', 'ngAnimate', 'ui.calendar', 'angularMoment'])

        .run(function ($ionicPlatform, amMoment) {
            amMoment.changeLocale('it');
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                  //  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }

                if (analytics !== 'undefined') {
                    analytics.startTrackerWithId("UA-52406140-2");
                } else {
                    console.log("Google Analytics Unavailable");
                }

            });


        })
        .constant("config", {
            "url": "http://www.associazionechiaraparadiso.it/api/v1"
                    // "url": "http://localhost/chiara/v1",
        })
        .constant('angularMomentConfig', {
            timezone: 'Europe/Rome' // e.g. 'Europe/London'
        })
        .config(function ($stateProvider, $urlRouterProvider, $ionicAppProvider, $httpProvider, $ionicConfigProvider) {
            $ionicConfigProvider.backButton.text('Indietro')
            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.headers.common = {};
            $httpProvider.defaults.headers.post = {};
            $httpProvider.defaults.headers.put = {};
            $httpProvider.defaults.headers.patch = {};
            delete $httpProvider.defaults.headers['X-Requested-With'];
            //     $httpProvider.defaults.headers['Authorization'] = 'Basic Z2Fic29uZTE6Z2Fic29uZTQyMjc=';
            $stateProvider

                    .state('app', {
                        url: "/app",
                        abstract: true,
                        templateUrl: "templates/menu.html",
                        controller: 'AppCtrl'
                    })
                    .state('app.richiesta', {
                        url: "/richiesta",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/richiesta.html",
                                controller: 'richiestaCtrl'
                            }
                        }
                    })
                    .state('app.richiestaDetail', {
                        url: "/req/:reqId",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/richiestaDetail.html",
                                controller: 'richiestaCtrl'
                            }
                        }
                    })
                    .state('app.calendario', {
                        url: "/calendario",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/calendario.html",
                                controller: 'calendarioCtrl'
                            }
                        }
                    })
                    .state('app.event', {
                        url: "/event/:idevt",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/evento.html",
                                controller: 'eventCtrl'
                            }
                        }
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
        .factory('$localstorage', ['$window', function ($window) {

                return {
                    set: function (key, value) {
                        $window.localStorage[key] = value;
                    },
                    get: function (key, defaultValue) {
                        return $window.localStorage[key] || defaultValue;
                    },
                    setObject: function (key, value) {
                        $window.localStorage[key] = JSON.stringify(value);
                    },
                    getObject: function (key) {
                        return JSON.parse($window.localStorage[key] || '{}');
                    },
                    remove: function (key) {
                        $window.localStorage.removeItem(key);
                    }
                };
            }])
        ;
