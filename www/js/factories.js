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
                    url: 'http://www.associazionechiaraparadiso.it' ,
                    detail :""
                }, {
                    id: '2',
                    nome: "Noi Per Te",
                    address: 'Via S. Calenda n.162 - Salerno<br>' +
                            'c/o il P.O.G. da Procida, oggi Azienda Ospedaliera Universitaria<br>' +
                            'OO.RR. S. Giovanni di Dio e Ruggi d’ Aragona<br>' +
                            'Tel./Fax 089.674361 - Cell. 327 5895421<br>',
                    image: 'img/ass/ass2.png',
                    detail :"Nata a Salerno nel 2005, presta la sua opera al domicilio dei pazienti affidati alle Unità Operative per la Terapia del Dolore e le Cure Palliative dell’ASL SA2, nell’ Hospice distrettuale, “ La casa di Lara “, nei Presidi e nei Distretti dipendenti dall’ASL SA.E' presente nel Day Hospital di Oncologia del P. O. “G. Da Procida” di Salerno, oggi Azienda Ospedaliera Universitaria OO.RR. S. Giovanni di Dio e Ruggi D’ Aragona. Offre  un servizio qualificato, volontario e gratuito per assicurare una presenza amichevole accanto ai malati e ai loro familiari, offrendo calore umano, dialogo, aiuto per lottare contro la sofferenza e l'isolamento.",
                    url: 'http://www.associazionenoiperte.it'
                }, {
                    id: '3',
                    nome: "Croce Azzurra Battipaglia",
                    address: ' Via Pastore, 8<br>' +
                            'Battipaglia (SA)<br>' +
                            'Tel. 0828 304050<br>',
                    image: 'img/ass/ass3.png',
                    url: 'http://www.croceazzurrabattipaglia.it',
                    detail : "Nata a Battipaglia nel 1975,persegue il fine della solidarietà civile, culturale e sociale. In particolare si propone di : prestare emergenza, trasportare infermi e dializzati, fornire alla comunità ogni forma di assistenza sanitaria, sociale e morale, prestare il proprio aiuto in occasione di calamità e/o situazione di emergenza, interventi a favore di fasce deboli, si occupa di assistenza burocratica e prestito attrezzature e presidi  sanitari, alle famiglie in difficoltà, in attesa di quelle erogate dall’ASL."
                }, {
                    id: '4',
                    nome: "Daltrocanto",
                    address: ' Via Loria ,35<br>' +
                            'Salerno (SA)<br>' +
                            'Cell. 328 7254831<br>',
                    image: 'img/ass/ass4.png',
                    url: 'http://www.daltrocantoweb.org' ,
                    detail :"Nata a Salerno nel 2005, ha il centro dei suoi interessi nella musica che viene intesa, per la sua particolare capacità di superare ogni barriera sociale, culturale o linguistica come prezioso strumento di dialogo interculturale e crescita sociale. Organizza incontri di musica popolare, stage e seminari sulla danza e strumenti popolari del sud Italia."
                }, {
                    id: '5',
                    nome: "La Rondinella",
                    address: 'Sede Legale: via Arcivescovo Cesarano, 67 - Pagani (SA)<br/>' +
                            'Sede Operativa: via Passanti, 203 - Scafati (SA)<br/>' +
                            'Tel.: 331 3923486',
                    image: 'img/ass/ass5.png',
                    url: 'https://www.facebook.com/LaRondinellaOnlus' ,
                    detail :"Nata a Scafati nel 2011, si occupa di clown terapia. Organizza corsi di formazione in clown terapia e sostiene in rete altre associazioni per il supporto nelle corsie di ospedale. E’ presente presso il reparto  di oncoematologia pediatrica dell’Ospedale Umberto I di Nocera  Inferiore (SA)"
                }, {
                    id: '6',
                    nome: "Moto Perpetuo",
                    address: 'Via Luigi Guercio, 396' +
                            'Salerno',
                    image: 'img/ass/ass6.png',
                    url: 'http://www.motoperpetuo.info/sito/' ,
                    detail :" Nata a Salerno nel 2005, si occupa di offrire informazioni, formazione e sostegno a famiglie e pazienti affetti da  malattie neurodegenerative invalidanti, quali Alzheimer e Parkinson. Organizza incontri mensili ed eventi formativi, distribuisce un bollettino di informazione ed è presente sul web con un sito dedicato (www.motoperpetuo.info), un forum ed una mailing list."
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



