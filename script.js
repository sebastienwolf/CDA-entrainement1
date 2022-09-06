popCards();

document.getElementById("menu").addEventListener('click', event => {
    let a = document.getElementById("listMenu")
    document.getElementById("listMenu").classList.toggle("active")
})



function popCards() {
    const actualite = document.getElementById("actualite");

    for (let boucle = 0; boucle < 3; boucle++) {
        let card = document.createElement('a');
        let top = document.createElement('div');
        let tata = document.createElement('img');
        let bottom = document.createElement('div');
        let text = document.createElement('p');

        card.className = 'cards';
        card.href = "#";
        tata.src = './img/logoCard.png';
        text.innerText = "L'info du jour";
        top.className = "topCard";
        bottom.className = "bottomCard"
        top.appendChild(tata);
        bottom.appendChild(text);
        card.appendChild(top);
        card.appendChild(bottom);
        actualite.appendChild(card);
    }
}
