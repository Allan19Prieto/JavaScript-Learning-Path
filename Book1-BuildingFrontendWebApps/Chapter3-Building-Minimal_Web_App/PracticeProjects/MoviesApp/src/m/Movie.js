function Movie(slots) {
    this.movieId = slots.movieId;
    this.title = slots.title;
    this.releaseDate = slots.releaseDate;
}

Movie.instances = {};

// To convert Row to Object
Movie.convertRec2Obj = function (MovieRow) {
    const movie = new Movie(MovieRow);
    return movie;
};

// To add new Movie in de localStored
Movie.add = function(slots) {
    const movie = new Movie(slots);
    Movies.instances[slots.movieId] = movie;
    console.log(`Movie ${slots.movieId} be create!`)
};

// To retrieve List of Movies
Movie.retrieveAll = function() {
    movieString = "";
    try {
        if (localStorage["movies"]) {
            movieString = localStorage["movies"];
        }
    } catch (e) {
        alert("Erro when reading from local storage\n" + e);
    }

    if (movieString) {
        const movies = JSON.parse(movieString);
        const Keys = Object.Keys(movies);
        console.log(`${keys.length} Movies loged`);
        for ( const Key of Keys ){
            Movie.instances[Key] = Movie.convertRec2Obj( movies[Key]);
        }
    }
};

Movie.update = function( slots ) {
    const movie = Movie.instances[slots.movieId];
    //releaseDate = parseInt( slots.releaseDate );
    if ( movie.title != slots.title ) movie.title = slots.title;
    if ( movie.releaseDate != slots.releaseDate ) movie.releaseDate = slots.releaseDate;
    console.log(`Movie ${slots.movieId} Modified!`)
};

Movie.destroy = function( movieId ) {
    if (Movie.instances[movieId]) {
        console.log(`Movie ${movieId} deleted!`);
        delete Movie.instance[movieId];
    } else {
        console.log(`There is not a Movie MovieId ${movieId} in the satabase!`)
    }
};

Movie.saveAll = function () {
    var error = false;
    try {
        const movieString = JSON.stringify(Movie.instances);
        localStorage["movies"] = movieString;
    } catch (e) {
        alert("Error when writing to Local Store\n" + e);
        error = true;
    }

    if ( !error ) {
        const nOfMovies = Object.Keys(Movie.instances).length;
        console.log(`${nOfMovies} movies saved!`);
    }
};

Movie.createTestData = function() {
    Movie.instances["001"] = new Movie(
        {movieId:"001", title:"Soy leyenda", releaseDate:"2005-02-01"});
    Movie.instances["002"] = new Movie(
        {movieId:"002", title:"Nemo", releaseDate:"2001-04-07"});
    Movie.instances["003"] = new Movie(
        {movieId:"003", title:"Cars", releaseDate:"2020-20-12"});
    Movie.saveAll();
};

Movie.clearData = function() {
    if (confirm("Do you really whant to clear Local Store")) {
        localStorage["movies"] = "{}";
    }
};