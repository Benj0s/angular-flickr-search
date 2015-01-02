'use strict';

/**
* Gallery controller
*/

angular.module('flickrSearchApp').controller('SearchController', ['$scope', 'Search',
    function($scope, Search) {
        $scope.photos = {};
        $scope.searchString = '';

        $scope.getPhotos = function() {
            Search.query({searchString: $scope.searchString}, function(data){
                $scope.photos = data.photos;
            });
        };
    }
]);
