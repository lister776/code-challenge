"use strict";

angular.
    module('movieList').
    component('movieList', {
            templateUrl: 'movie-list/movie-list.template.html',
            controller: ['Movie',
                function MovieListController(Movie) {
                        let self = this;
                        self.movies = [];

                        Movie.get({
                            queryString: 's=Batman',
                            apiKey: 'dfdad7ee'
                        }, function(movies) {
                            for (let movie of movies.Search) {
                                Movie.get({
                                    queryString: 'i=' + movie.imdbID,
                                    apiKey: 'dfdad7ee'
                                }, function(movie) {
                                    self.movies.push(movie);
                                });
                            }
                        });
                        self.orderProp = 'Year';
                        self.filterByYears = function(years){
                            self.yearsFilter = function(movie) {
                                return movie.Year.startsWith(years);
                            };
                        };
                    }
                ],
        });
