import { films } from '/assets/films.js'
import { people } from '/assets/people.js'

console.log('I am JavaScript running in the page of the paqe')

let mainArea = document.querySelector('main')

console.log(films)

films.forEach(function (film) {
    let filmDiv = documment.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmCrawl = document.createElement('p')

    filmTitle.textContent = film.title
    filmCrawl.textContent = film.opening_crawl

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)

    mainArea.appendChild(filmDiv)


    people.forEach(function (people) {
        let personDiv = document.createElement('div')
        let name = document.createElement('h1')
        let gender = document.createElement('p')
        let pic = document.createElement('img')

        let charNum = getCharNumber(person.url)

        name.textContent = person.name
        gender.textContent = person.gender
        pic.src = "https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg"


        personDiv.appendChild(name)
        personDiv.appendChild(gender)
        personDiv.appendChild(pic)

        mainArea.append(personDiv)

    })

    function getCharNumber(charURL) {
        let end = charURL.lastInderxOf('/')
        let charID = charURL.substring(end - 2, end)
        if (charID.lastInderxOf('/') !== -1 ) {
            return charID.slice(1,2)
        } else {
            return charID
        }
    }

}