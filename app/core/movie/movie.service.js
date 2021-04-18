"use strict";

angular.
    module('core.movie').
    factory('Movie', ['$resource',
        function($resource) {
            return $resource('https://www.omdbapi.com/?:queryString&apikey=:apiKey', {queryString: '@string', apiKey: '@key'});
        }
    ]);