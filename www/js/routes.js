angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.minhaConta', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/minhaConta.html',
        controller: 'minhaContaCtrl'
      }
    }
  })

  .state('tabsController.cadastroAnimal', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/cadastroAnimal.html',
        controller: 'cadastroAnimalCtrl'
      }
    }
  })

  .state('tabsController.movimentos', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/movimentos.html',
        controller: 'movimentosCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page8',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu', {
    url: '/page10',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('listaDeAnimais', {
    url: '/page9',
    templateUrl: 'templates/listaDeAnimais.html',
    controller: 'listaDeAnimaisCtrl'
  })

  .state('animalSelecionado', {
    url: '/page11',
    templateUrl: 'templates/animalSelecionado.html',
    controller: 'animalSelecionadoCtrl'
  })

  .state('fazenda', {
    url: '/page12',
    templateUrl: 'templates/fazendas.html',
    controller: 'fazendaCtrl'
  })

  .state('cadastrogeral', {
    url: '/page13',
    templateUrl: 'templates/cadastrosgeral.html',
    controller: 'cadastrogeralCtrl'
  })

  .state('cadastroAnimal', {
    url: '/page14',
    templateUrl: 'templates/cadastroAnimal.html',
    controller: 'cadastroAnimalCtrl'
  })

  .state('cadastroFazendas', {
    url: '/page15',
    templateUrl: 'templates/cadastroFazendas.html',
    controller: 'cadastroFazendasCtrl'
  })

  .state('fazendaSelecionada', {
    url: '/page16',
    templateUrl: 'templates/fazendaSelecionada.html',
    controller: 'fazendaSelecionadaCtrl'
  })


$urlRouterProvider.otherwise('/page8')



});
