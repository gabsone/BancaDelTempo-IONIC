angular.module('starter.controllers', [])

        .controller('AppCtrl', function ($scope, $rootScope, $ionicModal, $timeout, $ionicLoading, $http, config, $ionicPopup, $localstorage) {

            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //$scope.$on('$ionicView.enter', function(e) {
            //});


            $rootScope.userInfo = $localstorage.getObject('user');



            // Form data for the login modal
            $scope.loginData = {};


            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/login.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $ionicModal.fromTemplateUrl('templates/register.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.register = modal;
            });
            $ionicModal.fromTemplateUrl('templates/profile.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.profile = modal;
            });

            // Triggered in the login modal to close it
            $scope.closeLogin = function () {
                $scope.modal.hide();
            };

            // Open the login modal
            $scope.login = function () {
                $scope.modal.show();
            };

            $scope.openRegister = function () {
                $scope.register.show();
            };
            $scope.closeRegister = function () {
                $scope.register.hide();
            }
            $scope.reg = {};
            $scope.doRegister = function (form) {
                $scope.regSubmitted = true;
                form.pwd1.$notMatch = false;
                $ionicLoading.show({
                    template: 'Caricamento ...'
                });
                if (form.$invalid) {
                    console.log("INVALID");
                } else {

                    if ($scope.reg.password !== $scope.reg.password2) {
                        form.pwd1.$notMatch = true;
                    } else {

                        $http.post(config.url + '/register', $scope.reg).then(function (resp) {
                            $ionicLoading.hide();
                            if (resp.data.result === false) {
                                var alertPopup = $ionicPopup.alert({
                                    title: 'Attenzione',
                                    template: resp.data.message
                                });
                                alertPopup.then(function (res) {

                                });
                            } else {
                               
                                var alertPopup = $ionicPopup.alert({
                                    title: 'Info',
                                    template: 'Registrazione effettuata con successo, adesso si può accedere'
                                });
                                alertPopup.then(function (res) {
                                    $scope.reg = {};
                                    $scope.regSubmitted = false;
                                    $scope.register.hide();
                                });
                            }

                        }, function (resp) {
                            $ionicLoading.hide();
                            var alertPopup = $ionicPopup.alert({
                                title: 'Attenzione',
                                template: 'Problemi di comunicazione con il server.'
                            });
                            alertPopup.then(function (res) {

                            });

                        });
                    }
                    $ionicLoading.hide();


                }
            };
            // Perform the login action when the user submits the login form
            $scope.doLogin = function () {


                $ionicLoading.show({
                    template: 'Accesso in corso...'
                });

                $http.post(config.url + '/login', $scope.loginData)
                        .then(
                                function (resp) {
                                    $ionicLoading.hide();
                                    if (resp.data.result === false) {
                                        var alertPopup = $ionicPopup.alert({
                                            title: 'Attenzione',
                                            template: resp.data.message
                                        });
                                        alertPopup.then(function (res) {

                                        });
                                    } else {
                                        $localstorage.setObject('user', resp.data);
                                        $rootScope.userInfo = resp.data;
                                        

                                        console.log(resp.data);
                                        var alertPopup = $ionicPopup.alert({
                                            title: 'Info',
                                            template: 'Accesso Effettuato con successo'
                                        });
                                        alertPopup.then(function (res) {

                                            $scope.loginData = {};
                                            $scope.modal.hide();
                                        });
                                    }
                                },
                                function () {
                                    $ionicLoading.hide();
                                    var alertPopup = $ionicPopup.alert({
                                        title: 'Attenzione',
                                        template: 'Problemi di comunicazione con il server.'
                                    });
                                    alertPopup.then(function (res) {

                                    });
                                }
                        );



            };

            $scope.openProfile = function () {
                $scope.profile.show();
            };
            $scope.closeProfile = function () {
                $scope.profile.hide();
            }
            $scope.logout = function () {

                var confirmPopup = $ionicPopup.confirm({
                    title: 'Log Out',
                    template: 'Sei sicuro di voler uscire?'
                });
                confirmPopup.then(function (res) {
                    if (res) {
                        

                        $localstorage.setObject('user', {});
                        $rootScope.userInfo = {};
                        $scope.profile.hide();
                    } else {

                    }
                });



            }
        })

        .controller('richiestaCtrl', function ($scope, $filter, $stateParams, config, $rootScope, $localstorage, $http, $ionicLoading, $ionicPopup) {
            
            $scope.reqList = [];
            $scope.req = {};
            $scope.selected = {};
            $scope.$on('$ionicView.enter', function (e) {
                if ($stateParams.reqId !== undefined) {
                    angular.forEach($scope.reqList, function (value, key) {
                        if (value.id === $stateParams.reqId) {
                            $scope.selected = value;
                        }
                    });
                   

                }
            });
            $scope.loadRequests = function () {

                $http.get(config.url + '/requests/' + $rootScope.userInfo.id)
                        .then(function (resp) {
                            $scope.reqList = resp.data;
                        }, function (resp) {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Attenzione',
                                template: 'Problemi di comunicazione con il server.'
                            });
                            alertPopup.then(function (res) {

                            });
                        });

            };

            $scope.loadRequests();
            $scope.sendRichiesta = function (form) {
                $scope.submitted = true;


                if (form.$invalid) {
                    console.log("INVALID");
                } else {

                    $ionicLoading.show({
                        template: 'Caricamento ...'
                    });
                    $scope.req["user_id"] = $rootScope.userInfo.id;
                    $http.post(config.url + '/request', $scope.req).then(function (resp) {
                       

                        $ionicLoading.hide();
                        if (resp.data.result === false) {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Attenzione',
                                template: resp.data.message
                            });
                            alertPopup.then(function (res) {

                            });
                        } else {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Info',
                                template: 'Richiesta Inviata correttamente, sarai contattato al più presto da un operatore.'
                            });
                            alertPopup.then(function (res) {
                                $scope.req = {};
                                $scope.submitted = false;
                                $scope.loadRequests();
                                // update lista richieste
                            });
                        }

                    }, function (resp) {
                        $ionicLoading.hide();
                        var alertPopup = $ionicPopup.alert({
                            title: 'Attenzione',
                            template: 'Problemi di comunicazione con il server.'
                        });
                        alertPopup.then(function (res) {

                        });

                    });
                    $ionicLoading.hide();


                }
            };



        })

        .controller('HomeCtrl', function ($scope, $ionicUser) {

        })

        .controller('associazioniCtrl', function ($scope, AssociazioniService) {
            
            $scope.associazioni = [];
            $scope.associazioni = AssociazioniService.allSync();


        })


        .controller('associazioniDetailCtrl', function ($scope, $stateParams, AssociazioniService) {

            $scope.ass = AssociazioniService.get($stateParams.assId);
          
            $scope.open = function () {
                window.open($scope.ass.url, "_system");
            };

        })

        .controller('calendarioCtrl', function ($scope, $compile, $ionicLoading, $stateParams, $location, $ionicModal, uiCalendarConfig) {
           
            $scope.selectedEvent = {};
            $scope.eventSource = {
                url: "https://www.google.com/calendar/feeds/03ckb219gfdjn29g8b1o2qu694%40group.calendar.google.com/public/basic"

            };
            $scope.$on('$ionicView.enter', function (e) {
                console.log("refresh");
                uiCalendarConfig.calendars["myCalendar1"].fullCalendar('refresh');
            });
            $scope.changeView = function (view) {
                uiCalendarConfig.calendars["myCalendar1"].fullCalendar('changeView', view);
            };
            $scope.goto = function (where) {
                if (where > 0) {
                    uiCalendarConfig.calendars["myCalendar1"].fullCalendar('next');
                } else {
                    uiCalendarConfig.calendars["myCalendar1"].fullCalendar('prev');
                }

            };
//             
            $scope.eventSources = [$scope.eventSource];
            /* config object */
            $scope.uiConfig = {
                calendar: {
                    googleCalendarApiKey: 'AIzaSyBvVvk311QRswGI0Fji0Yce4hWZXFK8phw',
                    editable: false,
                    height: 450,
                    lang: 'it',
                    header: {
                        left: '',
                        center: 'title',
                        right: ''
                    },
                    loading: function (before) {
                        
                        if(before){
                            $ionicLoading.show({
                                template: 'Caricamento in corso...'
                            });
                        }else{
                            $ionicLoading.hide();
                        }
                    },
                    eventAfterRender: function (event, element, view) {
//                        console.log("eccolo1");
//                        console.log($(element).html());
//                        
//                        $(element).html(event.title);
//                        $compile(element)($scope);
                    },
                    eventClick: function (calEvent, jsEvent, view) {

                       

                        $scope.selectedEvent = calEvent;
                        $scope.modal.show();
                        return false;


                    }
                }
            };

            $scope.closeEvent = function () {
                $scope.modal.hide();
            };
            $ionicModal.fromTemplateUrl('templates/evento.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
            });

        })
        .controller('eventCtrl', function ($scope, $stateParams) {

        });




;


