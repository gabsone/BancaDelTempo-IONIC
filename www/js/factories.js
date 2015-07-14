angular.module('starter.factories', [])
        .factory('AssociazioniService', function ($q, $timeout) {
            // Might use a resource here that returns a JSON array

            // Some fake testing data
            var associazioni = [{
                    id: '1',
                    nome: "Chiara Paradiso",
                    address: 'Via Roma, 197<br/>' +
                            'Bellizzi (SA)<br/> ' +
                            'Tel.333 9057690',
                    image: 'img/ass/ass1.png',
                    url: 'http://www.associazionechiaraparadiso.it'
                }, {
                    id: '2',
                    nome: "Noi Per Te",
                    address: 'Via S. Calenda n.162 - Salerno<br>' +
                            'c/o il P.O.G. da Procida, oggi Azienda Ospedaliera Universitaria<br>' +
                            'OO.RR. S. Giovanni di Dio e Ruggi d’ Aragona<br>' +
                            'Tel./Fax 089.674361 - Cell. 327 5895421<br>',
                    image: 'img/ass/ass2.png',
                    url: 'http://www.associazionenoiperte.it'
                }, {
                    id: '3',
                    nome: "Croce Azzurra Battipaglia",
                    address: ' Via Pastore, 8<br>' +
                            'Battipaglia (SA)<br>' +
                            'Tel. 0828 304050<br>',
                    image: 'img/ass/ass3.png',
                    url: 'http://www.croceazzurrabattipaglia.it'
                }, {
                    id: '4',
                    nome: "Daltrocanto",
                    address: ' Via Loria ,35<br>' +
                            'Salerno (SA)<br>' +
                            'Cell. 328 7254831<br>',
                    image: 'img/ass/ass4.png',
                    url: 'http://www.daltrocantoweb.org'
                }, {
                    id: '5',
                    nome: "La Rondinella",
                    address: 'Sede Legale: via Arcivescovo Cesarano, 67 - Pagani (SA)<br/>' +
                            'Sede Operativa: via Passanti, 203 - Scafati (SA)<br/>' +
                            'Tel.: 331 3923486',
                    image: 'img/ass/ass5.png',
                    url: 'https://www.facebook.com/LaRondinellaOnlus'
                }, {
                    id: '6',
                    nome: "Moto Perpetuo",
                    address: 'Via Luigi Guercio, 396' +
                            'Salerno',
                    image: 'img/ass/ass6.png',
                    url: 'http://www.motoperpetuo.info/sito/'
                }



            ];

            return {
                all: function () {
                    var deferred = $q.defer();
                    $timeout(function () {
                        deferred.resolve(associazioni);
                    }, 1000);
                    return deferred.promise;
                },
                allSync: function () {
                    return associazioni;
                },
                get: function (assId) {
                    // Simple index lookup
                    for (var i = 0, l = associazioni.length; i < l; i++) {
                        if (associazioni[i].id === assId) {
                            return associazioni[i];
                        }
                    }
                }
            };
        });



