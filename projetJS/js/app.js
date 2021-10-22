var mangas = [
    {
        nom: 'Naruto',
        img: './naruto.jpg'
    }
]

function createDomElement(type, classes, id, attributes) {
    var domElement = document.createElement(type)

        if (classes) {
            classes.forEach(domElementClass => {
                domElement.classList.add(domElementClass)
            }) 
        }
    

        domElement.id = id

        if (attributes !== null) {
            for (const [key, value] of Object.entries(attributes)) {
                domElement.setAttribute(key, value)
            }
        }
        console.log(domElement)
        console.log('+++')
        return domElement
    }

function createImgElement(link) {
    let img = document.createElement('img')
    img.src = link
    return img
}

function createParagraphElement(text) {
    let p = document.createElement('p')
    p.innerText = text
    return p 
}

function addChildrensToElement(element, childrens) {
    childrens.forEach(child => {
        element.appendChild(child)
    })
}

function addMangaCard(manga, ulMangaList)  {
    console.log(manga, ulMangaList)
    var liMangaCard = document.createElement('li')
    
    var divMangaCard = createDomElement(
        'div', [
            "uk-card",
            "uk-card-default",
            "uk-card-body",
            "uk-text-center",
            "uk-sortable_handle",
        ],
        "mo",
        {}
    )
    var imgMangaCard = createImgElement(manga.img)
    var nomMangaCard = createParagraphElement(manga.nom)

    addChildrensToElement(
        divMangaCard, [
            imgMangaCard,
            nomMangaCard
        ]
    )
    addChildrensToElement(liMangaCard, [divMangaCard])
    addChildrensToElement(ulMangaList, [liMangaCard])
}

function build() {
    var ulMangaList = createDomElement(
        'ul',
        ["uk-grid-small-2-5", "uk-child-width-1-4", "uk-child-width-1_4-4@s"],
        'ulMangas',
        {
            'uk-sortable': 'handle: .uk-sortable-handle',
            'uk-grid': ''
        }
    )
   console.log(ulMangaList)
    mangas.forEach(manga => {
        console.log(manga)
        addMangaCard(manga, ulMangaList)
    })
    document.body.appendChild(ulMangaList)
}

build()

function addManga() {
    var getName = document.getElementById('inputName').value
    var getImg = document.getElementById('inputImg').value
    // var bt = document.getElementById('addMangaButton')
    console.log(getName)

    var obj = {
        nom: getName,
        img: getImg
    
    }


mangas.push(obj)
var objFromList = mangas.slice(-1)[0]

var ul = document.getElementById('ulMangas')
console.log(ul)
addMangaCard(objFromList, ul)

}
