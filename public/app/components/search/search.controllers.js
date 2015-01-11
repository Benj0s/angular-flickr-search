'use strict';

/**
* Gallery controller
*/

angular.module('flickrSearchApp').controller('SearchController', ['$scope', 'Search',
    function($scope, Search) {
        $scope.photos = [];
        $scope.searchString = '';
        $scope.currentPage = 1;
        $scope.maxPages = 1;
        $scope.hasMore = false;

        $scope.search = function() {
            $scope.currentPage = 1;
            $scope.maxPages = 1;
            $scope.getPhotos();
        };

        $scope.getPhotos = function() {
            Search.query({searchString: $scope.searchString, pageNum: $scope.currentPage}, function(data){
                $scope.photos.push.apply($scope.photos, data.photos.photo);
                $scope.maxPages = data.photos.pages;
                $scope.hasMorePages();
            });
        };

        $scope.getNextPage = function() {
            $scope.currentPage += 1;
            $scope.hasMorePages();
            $scope.getPhotos();
        };

        $scope.hasMorePages = function() {
            $scope.hasMore = $scope.currentPage < $scope.maxPages ? true : false;
        };

    }
]);
