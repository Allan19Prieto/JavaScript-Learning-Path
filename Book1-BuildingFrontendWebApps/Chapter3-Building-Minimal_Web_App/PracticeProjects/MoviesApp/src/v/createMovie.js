pl.v.createMovie = {
    setupUserInterface: function () {

        const saveButton = document.forms["Movie"].commit;

        // Load all Movies
        Movie.retrieveAll();
        saveButton.addEventListener("click", pl.v.createMovie.handleSaveButtonClickEvent);

        // handle the event when the browser is closed
        window.addEventListener("beforeunload", function () {
            Movie.saveAll();
        });
    },

    // To save the data
    handleSaveButtonClickEvent: function () {

        const formEl = document.forms["Movie"];

        const slots = { movieId: formEl.movieId.value, title: formEl.title.value,
                        releaseData: formEl.releaseData.value };
                        
        Movie.add();
        formEl.reset();
    }
};