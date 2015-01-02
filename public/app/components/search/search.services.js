'use strict';

/**
* Flickr search services
*
* API example url: https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key={key}&text={string}&format=json
*/

var flickrSearchServices = angular.module('flickrSearchServices', ['ngResource']);

flickrSearchServices.factory('Search', ['$resource',
    function($resource) {
        return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8abf75ed68b16cf1e1ac1f0cb1cf9527&text=:searchString&extras=url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&format=json&nojsoncallback=1', {}, {
            query: {method: 'GET', params: {searchString: 'ballons'}, isArray: false}
        });
    }
]);
