"use strict";

describe('Movie', function() {
    let $httpBackend;
    let Movie;
    let movieData = {
        "Search": [
            {
                "Title": "Batman Begins",
                "Year": "2005",
                "imdbID": "tt0372784",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
            },
            {
                "Title": "Batman v Superman: Dawn of Justice",
                "Year": "2016",
                "imdbID": "tt2975590",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
            },
            {
                "Title": "Batman",
                "Year": "1989",
                "imdbID": "tt0096895",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
            },
        ]
    };

    // Add a custom equality tester before each test
    beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    // Load the module that contains the `Movie` service before each test
    beforeEach(module('core.movie'));

    // Instantiate the service and "train" `$httpBackend` before each test
    beforeEach(inject(function(_$httpBackend_, _Movie_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET(/.*/).respond(movieData);

        Movie = _Movie_;
    }));

    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the phones movie from `http://www.omdbapi.com/?s=Batman`', function() {
        let movies = Movie.get({
            queryString: 's=Batman',
            apiKey: 'xxxxx'
        });


        expect(movies).toEqual({});

        $httpBackend.flush();
        expect(movies).toEqual(movieData);
    });
});
