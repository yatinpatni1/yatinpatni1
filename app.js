const data = [
    {
        name: "The Dark Knight Rises",
        url: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/63b5bed74b1870ba6b8615c181ccecca1dce574cc57005212492567ae6060f83._RI_V_TTW_.jpg"
    },
    {
        name: "Batman Forever",
        url: "https://media.discordapp.net/attachments/791674813457891389/980521647234773002/batman_forever.jpg"
    },
    {
        name: "Batman Returns",
        url: "https://media.discordapp.net/attachments/791674813457891389/980521539302740018/batman_returns.jpg"
    },
    {
        name: "Batman: The Dark Knight Returns, Part 2",
        url: "https://media.discordapp.net/attachments/791674813457891389/980521441172815872/batman_dark_knight_returns_2.jpg"
    },
    {
        name: "Batman: Under the Red Hood",
        url: "https://media.discordapp.net/attachments/791674813457891389/980521334478098512/batman_red_hood.jpg"
    },
    {
        name: "Batman",
        url: "https://media.discordapp.net/attachments/791674813457891389/980521215385034863/batman.jpg"
    },
    {
        name: "Batman: Year One",
        url: "https://media.discordapp.net/attachments/791674813457891389/980521102147211354/batman_year_one.jpg"
    },
    {
        name: "Batman: Mask of the Phantasm",
        url: "https://media.discordapp.net/attachments/791674813457891389/980520954650320956/Batman_Mask_of_the_Phantasm.jpg"
    },
    {
        name: "JFK",
        url: "https://media.discordapp.net/attachments/791674813457891389/980520863986221076/JFK.jpg"
    },
    {
        name: "Batman: The Dark Knight Returns, Part 1",
        url: "https://media.discordapp.net/attachments/791674813457891389/980520621790335156/batam_dark_knight_returns_part_1.jpg"
    }
]

const allMovies = document.createElement('div')
const divMovies = document.querySelector('.carousel-inner')


data.forEach(function (movie) { 
const card = `<div class="carousel-item">
<img src="${movie.url}" class="d-block w-50 image-movie" alt="...">
<div class="carousel-caption d-none d-md-block text-movie">
    <h5>${movie.name}</h5>
</div>
</div>`

allMovies.insertAdjacentHTML('beforeend',card)
})
divMovies.append(allMovies)