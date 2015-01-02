/**
* Gallery controller
*/

'use strict';

angular.module('flickrSearchApp').config(['$routeProvider',
    function($routeProvider) {

        // Home state routing
        $routeProvider
        .when('/', {
            templateUrl: 'app/components/search/search.view.html',
            controller: 'SearchController'
        });
    }
]);
