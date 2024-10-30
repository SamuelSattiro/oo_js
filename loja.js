function Roupa(tipo, material, cor) {
    this.tipo = tipo
    this.material = material
    this.cor = cor
    this.vestir = function() {
        console.log(this.tipo + " ótima escolha!")
    }
}

function RoupaDeInverno(tipo, material, cor, tamanho, marca) {
    this.tamanho = tamanho
    this.marca = marca

    Roupa.call(this, tipo, material, cor)
}

function RoupaDeVerao(tipo, material, cor, lugar, quantidade ) {
    this.lugar = lugar
    this.quantidade = quantidade

    Roupa.call(this, tipo, material, cor)
}

const roupaRobertoEuropa = new RoupaDeInverno("Jaqueta", "Couro", "Preto", 46, "Zara")
const roupaRobertoAsia = new RoupaDeVerao("Sungas", "Poliester", "Azul", "Praia", 3 )

const roupaSuzanaCanada = new RoupaDeInverno("Chapéu", "Lã", "Bege", "56-57cm", "Valentino")
const roupaSuzanaMexico = new RoupaDeVerao("Biquinis", "Poliester", "Colorido", "Praia", 8 )

const roupaMarciaRussia = new RoupaDeInverno("Casaco", "Lã batida", "Marrom", 38, "Gucci")
const roupaMarciaGroelandia = new RoupaDeInverno("Cachecol", "Lã merino", "Escuro", "130cm", "Chanel" )

const roupaCarlosMaldivias = new RoupaDeVerao("Bermudas", "Poliester", "Colorida", "Praia", 4)
const roupaCarlosDolomitas = new RoupaDeVerao("Bota", "Borracha", "Azul-marinho", "Montanha", 1 )


roupaRobertoEuropa.vestir()
console.log(roupaRobertoEuropa)

roupaRobertoAsia.vestir()
console.log(roupaRobertoAsia)

roupaSuzanaCanada.vestir()
console.log(roupaSuzanaCanada)

roupaSuzanaMexico.vestir()
console.log(roupaSuzanaMexico)

roupaMarciaRussia.vestir()
console.log(roupaMarciaRussia)

roupaMarciaGroelandia.vestir()
console.log(roupaMarciaGroelandia)

roupaCarlosMaldivias.vestir()
console.log(roupaCarlosMaldivias)

roupaCarlosDolomitas.vestir()
console.log(roupaCarlosDolomitas)
