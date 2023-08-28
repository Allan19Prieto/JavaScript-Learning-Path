pl.v.retrieveAllMovies = {
    setupUserInterface: function () {
        const tableBodyEl = document.querySelector("table#movies>tbody");
        // load all book objects
        Movie.retrieveAll();
        // for each book, create a table row with a cell for each attribute
        for (const key of Object.keys( Movie.instances)) {
            const movie = Movie.instances[key];
            const row = tableBodyEl.insertRow();
            row.insertCell().textContent = movie.movieId;
            row.insertCell().textContent = movie.title;
            row.insertCell().textContent = movie.releaseData;
        }
    }
};