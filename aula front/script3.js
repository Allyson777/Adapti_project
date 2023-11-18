function inserirNovoCard(){
    let cardPrincipal = document.querySelector('#card-principal')

    let novoCard=cardPrincipal.cloneNode(true)

    novoCard.removeAttribute("id")

    let containerCards = document.querySelector("#container-cards")

    containerCards.appendChild(novoCard)

}
