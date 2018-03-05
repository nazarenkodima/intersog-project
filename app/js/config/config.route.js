app.config(function($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            views: {
                '' : {
                    templateUrl: 'src/page-blocks/layouts/l-dashboard/l-dashboard.html',
                    controller: 'l-dashboard'
                },
                'header@dashboard': {
                    templateUrl: 'src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'cards@dashboard': {
                     templateUrl: 'src/page-blocks/layouts/l-cards/l-cards.html',
                     controller: 'l-cards'
                }


            }
        })
        .state('card', {
            url: '/campaigns/',
            views: {
                '' : {
                    templateUrl: 'src/page-blocks/layouts/l-dashboard/l-dashboard.html',
                    controller: 'l-dashboard'
                },
                'header@card': {
                    templateUrl: 'src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'campaign@card': {
                    templateUrl: 'src/page-blocks/layouts/l-campaigns/l-campaigns.html',
                    controller: 'l-campaigns'
                }
            },
            params: {
                data: {}
            }
        })


});
