function loadProjects() {
    /*
    Use the json format of projects.json to organize the "My Portfolio" section of my website
    Since there is repetitive code, this is a good way to minimize bugs and automate the process. 
    */

    fetch("projects.json")
        .then(res => res.json())
        .then(data => 
            {
                // Do things with data here:
                let projects = data["projects"]; 
                const indpCard = document.querySelector(".card.text-white.template");
                let overallContainer = document.querySelector(".portfolio-bckg");
                
                let count = 0; //need a new deck every two counts
                const cardDeck = indpCard.parentElement; 
    /*
                Deck organizes cards in a row; we want to have two cards per deck and have multiple
                decks to represent multiple rows. This is because bootstrap's cards are not too responsive:
                however many cards you have in a deck it will squish and keep it, even when it is unappealing!
    */          
                
                for (let project of projects)
                {
                    //We make a new deck every two turns (including 1st turn b/c it is our template)
                    if (count % 2 == 0)
                    {
                        newCardDeck = cardDeck.cloneNode(true);
                        overallContainer.appendChild(newCardDeck);
                    } 
                    let newIndpCard = indpCard.cloneNode(true);
                    newIndpCard.classList.remove("template")
    
                    const img = newIndpCard.querySelector(".card-img-top");
                    img.setAttribute('src', 'image/'+project.image);
                    img.setAttribute('alt', project.title);
                    newIndpCard.querySelector(".img-link").setAttribute('href', project.link);
                    newIndpCard.querySelector(".title-link").setAttribute('href', project.link);
                    newIndpCard.querySelector(".card-title").innerHTML = project.title;
                    newIndpCard.querySelector(".card-text").innerHTML = project.content;
                    newIndpCard.querySelector(".text-muted").innerHTML = project.footer;
                    newCardDeck.appendChild(newIndpCard);
                    
                    count += 1;
                }
            });
    }

window.addEventListener('load', () => {
    loadProjects();
    });