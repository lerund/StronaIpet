let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

const buttons = document.querySelectorAll(".lang");
const langsec = document.querySelector(".langsec");
const about = document.querySelector('.about');
const contact = document.querySelector(".contact");
const products = document.querySelector(".products");
const mat = document.querySelectorAll(".card__title");
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}



let data = {
    'pl': {
        "about": "O nas",
        "contact": "Kontakt",
        "products": "Produkty",
        "mat": "Materac",
        "headerDescription": "",
        "buttonName": "Produkty",
        "bedBrego": "Materac Brego",
        "bedBregoDescription": " • pokrowiec - tkanina strukturalna/miękki plusz • wypełnienie - granulat pianki  • zdejmowany pokrowiec z poliestru • praktyczny uchwyt • solidne i wysokiej jakości• wyprodukowano w UE",
        "matEnzo": "Materac Enzo",
        "matEnzoDescription": "• pokrowiec - miękka tkanina typu sztruks • wypełnienie- pianka tapicerska • zdejmowany pokrowiec z poliestru • solidne i wysokiej jakości• wyprodukowano w UE",
        "bedFaro": "Legowisko Faro",
        "bedFaroDescription": "• pokrowiec – miękka tkanina typu sztruks/plusz • wypełnienie- granulat pianki • wyjmowana dwustronna poduszka • zdejmowany pokrowiec z poliestru • solidne i wysokiej jakości • wyprodukowano w UE",
        "PoufBrego": "Pufa Brego",
        "PoufBregoDescription": "• pokrowiec - tkanina strukturalna/miękki plusz • wypełnienie - pianka tapicerska • • zdejmowany pokrowiec z poliestru • solidne i wysokiej jakości • praktyczny uchwyt • wyprodukowano w UE",
        "PoufEnzo": "Pufa Enzo",
        "PoufEnzoDescription": "• pokrowiec -plusz/miękka tkanina typu sztruks • wypełnienie - granulat pianki • • zdejmowany pokrowiec z poliestru  • solidne i wysokiej jakości • wyprodukowano w UE",
        "PoufEnzoT": "Pufa Enzo z lamówką",
        "PoufEnzoTDescription": "• pokrowiec -plusz/miękka tkanina typu sztruks • wypełnienie - granulat pianki • • zdejmowany pokrowiec z poliestru  • solidne i wysokiej jakości • wyprodukowano w UE",
        "matLux": "Materac Lux",
        "matLuxDescription": " • pokrowiec - miękki plusz • wypełnienie- wkład dzielony tunelami, granulat pianki • zdejmowany pokrowiec z poliestru • solidne i wysokiej jakości • wyprodukowano w UE",
        "bedRino": "Legowisko Rino",
        "bedRinoDescription": "• pokrowiec - tkanina strukturalna-plecionka • wypełnienie - pianka/ poduszki - granulat pianki • zdejmowany pokrowiec z poliestru • poduszki na stałe przyszyte do materaca • praktyczny boczny uchwyt • solidne i wysokiej jakości • wyprodukowano w UE",
        "matRinC": "Materac Rino z poduszką",
        "matRinCDescription": "• pokrowiec - tkanina strukturalna-plecionka • wypełnienie - pianka/ poduszki - granulat pianki • zdejmowany pokrowiec z poliestru • poduszki na stałe przyszyte do materaca • praktyczny boczny uchwyt • solidne i wysokiej jakości • wyprodukowano w UE",
        "matRino": "Materac Rino",
        "matRinoDescription": "• pokrowiec - tkanina strukturalna-plecionka • wypełnienie - pianka/ poduszki - granulat pianki • zdejmowany pokrowiec z poliestru • poduszki na stałe przyszyte do materaca • praktyczny boczny uchwyt • solidne i wysokiej jakości • wyprodukowano w UE",
        "bedRinoClass": "Legowisko klasyczne Rino",
        "bedRinoClassDescription": "• pokrowiec - tkanina strukturalna- plecionka • wypełnienie - granulat pianki • wyjmowana dwustronna poduszka • zdejmowany pokrowiec z poliestru • solidne i wysokiej jakości • wyprodukowano w UE",
        "bediPet": "Legowisko iPet",
        "bediPetDescription": "• pokrowiec - tkanina plecionka/ miękki plusz • wypełnienie - granulat pianki • wyjmowana dwustronna poduszka • zdejmowany pokrowiec z poliestru • solidne i wysokiej jakości • wyprodukowano w UE",
        "sofaRino": "Sofa Rino",
        "sofaRinoDescription": "• pokrowiec - tkanina strukturalna plecionka / miękki plusz • wypełnienie - pianka tapicerkska / granulat pianki • wyjmowana dwustronna poduszka• solidne i wysokiej jakości• wyprodukowano w UE",
        "matNorsk": "Materac Norsk",
        "matNorskDescription": " • pokrowiec - welwet • wypełnienie- wkład dzielony tunelami, granulat pianki • zdejmowany pokrowiec z poliestru • solidne i wysokiej jakości • wyprodukowano w UE",
        "matOrt": "Materac ortopedyczny",
        "matOrtDescription": "• pokrowiec - tkanina strukturalna • wypełnienie- pianka tapicerska • zdejmowany pokrowiec z poliestru • solidne i wysokiej jakości • praktyczny uchwyt • wyprodukowano w UE",
        "matBone": "Mata Bone",
        "matBoneDescription": "• tkanina welwet/ tkanina fibertex • wypełnienie- włóknina poliestrowa • solidne i wysokiej jakości • wyprodukowano w UE",
        "PontAmber": "Ponton Amber",
        "PontAmberDescription": "• pokrowiec - tkanina wodoodporna/ fibertex • wypełnienie - granulat pianki • solidne i wysokiej jakości • wyprodukowano w UE",
        "mataiPet": "Mata iPet",
        "mataiPetDescription": " • pokrowiec - tkanina wodoodporna/ fibertex • wypełnienie - włóknina poliestrowa • solidne i wysokiej jakości • wyprodukowano w UE",
        "bedTeddy": "Legowisko Teddy",
        "bedTeddyDescription": " • pokrowiec - tkanina strukturalna plecionka/miękki pluszv• wypełnienie - granulat piankiv• z rozkładaną matą / zapinana na guzikiv• solidne i wysokiej jakości • wyprodukowano w UE ",
        "bedLotus": "Legowisko Lotus",
        "bedLotusDescription": "• pokrowiec - miękki plusz • wypełnienie - granulat pianki • wyjmowana dwustronna poduszka • zdejmowany pokrowiec z poliestru • solidne i wysokiej jakości • wyprodukowano w UE",
        "bedMoon": "Legowisko Lotus",
        "bedMoonDescription": "• pokrowiec - miękki plusz • wypełnienie - granulat pianki • wyjmowana dwustronna poduszka • zdejmowany pokrowiec z poliestru • solidne i wysokiej jakości • wyprodukowano w UE",
        "PontGrey": "Ponton Amber",
        "PontGreyDescription": "• pokrowiec - tkanina wodoodporna/ fibertex • wypełnienie - granulat pianki • solidne i wysokiej jakości • wyprodukowano w UE",
        "mataiPet": "Mata iPet",
        "bedClass": "Legowisko klasyczne",
        "bedClassDescription": "• pokrowiec - tkanina strukturalna- plecionka • wypełnienie - granulat pianki • wyjmowana dwustronna poduszka • zdejmowany pokrowiec z poliestru • solidne i wysokiej jakości • wyprodukowano w UE",
        "matEspo": "Materac Espo",
        "matEspoDescription": " • pokrowiec - welwet • wypełnienie- wkład dzielony tunelami, granulat pianki • zdejmowany pokrowiec z poliestru • solidne i wysokiej jakości • wyprodukowano w UE",
        "bedFaro": "Materac Faro",
        "bedBregoDescription": " • pokrowiec - tkanina strukturalna/miękki plusz • wypełnienie - granulat pianki  • zdejmowany pokrowiec z poliestru • praktyczny uchwyt • solidne i wysokiej jakości• wyprodukowano w UE",
        "bedAston": "Legowisko Aston",
        "bedAstonDescription": "• pokrowiec - tkanina strukturalna- plecionka • wypełnienie - granulat pianki • wyjmowana dwustronna poduszka • zdejmowany pokrowiec z poliestru • solidne i wysokiej jakości • wyprodukowano w UE",
        "matTerra": "Materac Terra",
        "bedTerraDescription": " • pokrowiec - tkanina strukturalna/miękki plusz • wypełnienie - granulat pianki  • zdejmowany pokrowiec z poliestru • praktyczny uchwyt • solidne i wysokiej jakości• wyprodukowano w UE",
        "PoufTerra": "Pufa Terra",
        "PoufTerraDescription": "• pokrowiec -plusz/miękka tkanina typu sztruks • wypełnienie - granulat pianki • • zdejmowany pokrowiec z poliestru  • solidne i wysokiej jakości • wyprodukowano w UE",
        "matSierra": "Materac Sierra",
        "matSierraDescription": "• pokrowiec – tkanina żakardow • wypełnienie- granulat piank • zdejmowany pokrowiec – poliester/ bawełn • z ozdobną lamówk • solidne i wysokiej jakośc • wyprodukowano w UE",
        "matGimli": "Materac Gimli",
        "matGimliDescription": "• pokrowiec – tkanina żakardow • wypełnienie- granulat piank • zdejmowany pokrowiec – poliester/ bawełn • z ozdobną lamówk • solidne i wysokiej jakośc • wyprodukowano w UE",
        "matFox": "Materac Fox",
        "matFoxDescription": "• pokrowiec – tkanina żakardow • wypełnienie- granulat piank • zdejmowany pokrowiec – poliester/ bawełn • z ozdobną lamówk • solidne i wysokiej jakośc • wyprodukowano w UE",
        "heroDescr": "Projektujemy i produkujemy legowiska, które zapewnią  Twojemu pupilowi relaks i wygodny sen. Nowoczesny design, trwałość oraz łatwa pielęgnacja, pozwolą cieszyć się opiekunom zwierząt każdą chwilą spędzoną ze swoimi  ulubieńcami.",
        "heroHeader": 'Komfort i styl dla Twojego psa',
        "drop": "Produkowane przez nas legowiska dla psów są dostępne również w modelu dropshipping. Dla naszej firmy ważne jest, abyście Państwo mogli dostarczać nasze wysokiej jakości produkty swoim klientom bez konieczności przechowywania ich na własnym magazynie. Nasza oferta dropshippingu to idealna szansa na rozwijanie własnego biznesu z minimalnym wysiłkiem logistycznym",
        "close":"Zamknij"
    },
    "en": {
        "about": "About",
        "contact": "Contact",
        "products": "Products",
        "mat": "Mattress",
        "headerDescription": "",
        "buttonName": "Products",
        "bedBrego": "Mattress Brego",
        "bedBregoDescription": "• cover - structured fabric/soft plush • filling - foam granules• removable polyester cover• solid and high quality• with a handle - made in  EU",
        "matEnzo": "Mattress Enzo",
        "matEnzoDescription": "• cover - soft corduroy fabric • filling - upholstery foam • removable polyester cover • solid and high quality • Made in the EU",
        "bedFaro": "Dog Bed Faro",
        "bedFaroDescription": "• cover - soft corduroy/plush fabric • filling - foam granules • removable cushion • removable polyester cover • solid and high quality• Made in the EU",
        "PoufBrego": "Pouf Brego",
        "PoufBregoDescription": "• cover - structured fabric/soft plush • filling - upholstery foam • removable polyester cover • solid and high quality • with a handle • Made in the EU",
        "PoufEnzo": "Pouf Enzo",
        "PoufEnzoDescription": " • cover - plush/soft corduroy fabric • filling - foam granulate • removable polyester cover • solid and high quality • Made in the EU",
        "PoufEnzoT": "Pouf Enzo with trim",
        "PoufEnzoTDescription": " • cover - plush/soft corduroy fabric • filling - foam granulate • removable polyester cover • solid and high quality • Made in the EU",
        "matLux": "Mattress Lux",
        "matLuxDescription": " • cover - soft plush • filling - insert divided by tunnels, foam granules • removable polyester cover • solid and high quality • Made in the EU",
        "bedRino": "Dog Bed Rino",
        "bedRinoDescription": "• cover - structural fabric-braid filling - foam/cushions - foam pellets • removable polyester cover • solid and high quality • Made in the EU",
        "matRinC": "Mattress Rino with cushion",
        "matRinCDescription": " • cover - structured braided fabric / soft plush • filling - foam/cushion - foam granules • removable polyester cover • solid and high quality • Made in the EU",
        "matRin": "Mattress Rino with cushion",
        "matRinoDescription": " • cover - structured braided fabric / soft plush • filling - foam/cushion - foam granules • removable polyester cover • solid and high quality • Made in the EU",
        "bedRinoClass": "Dog Bed Rino classic",
        "bedRinoClassDescription": "• cover - structural fabric - braid • filling - foam granulate • removable double-sided cushion • removable polyester cover • solid and high quality • Made in the EU",
        "bediPet": "Dog Bed iPet",
        "bediPetDescription": "• cover - braided fabric/soft plush filling - foam granulate removable double-sided cushion removable polyester cover • solid and high quality • Made in the EU",
        "sofaRino": "Sofa Rino",
        "sofaRinoDescription": "• cover - structured braided fabric / soft plush • filling - upholstery foam / foam granules • removable double-sided cushion • solid and high quality • Made in the EU",
        "matNorsk": "Mattress Norsk",
        "matNorskDescription": " • cover - velvet • filling - insert divided by tunnels, foam granulate • removable polyester cover • solid and high quality • Made in the EU",
        "matOrt": "Materac ortopedyczny",
        "matOrtDescription": "• cover - structural fabric • filling - foam • removable polyester cover • solid and high quality • with a handle • Made in the EU",
        "matBone": "Pet mat Bone",
        "matBoneDescription": "• velvet fabric/ fibertex fabric • filling - polyester non-woven fabric • solid and high quality • Made in the EU",
        "PontAmber": "Ponton Amber",
        "PontAmberDescription": "• cover - waterproof fabric / fibertex • filling - foam granulate • solid and high quality • Made in the EU",
        "mataiPet": "Pet mat iPet",
        "mataiPetDescription": " • cover - waterproof fabric / fibertex • filling - polyester non-woven fabric • solid and high quality • Made in the EU",
        "bedTeddy": "Dog Bed Teddy",
        "bedTeddyDescription": "• cover - structured braided fabric/soft plush • filling - foam granulate • with a fold-out mat • solid and high quality • Made in the EU• fastened with buttons",
        "bedLotus": "Dog Bed Lotus",
        "bedLotusDescription": " • cover - soft plush • filling - foam granulate • removable double-sided cushion • removable polyester cover • solid and high quality • Made in the EU",
        "bedMoon": "Dog Bed Lotus",
        "bedMoonDescription": " • cover - soft plush • filling - foam granulate • removable double-sided cushion • removable polyester cover • solid and high quality • Made in the EU",
        "PontGrey": "Ponton Grey",
        "PontGreyDescription": "• cover - waterproof fabric / fibertex • filling - foam granulate • solid and high quality • Made in the EU",
        "mataiPet": "Pet mat iPet",
        "bedClass": "Dog Bed Classic",
        "bedClassDescription": "• cover - structural fabric - braid • filling - foam granulate • removable double-sided cushion • removable polyester cover • solid and high quality • Made in the EU",
        "mateSPO": "Mattress Espo",
        "matEspoDescription": " • cover - velvet • filling - insert divided by tunnels, foam granulate • removable polyester cover • solid and high quality • Made in the EU",
        "bedFaro": "Mattress Brego",
        "bedFaroDescription": "• cover - structured fabric/soft plush • filling - foam granules• removable polyester cover• solid and high quality• with a handle - made in  EU",
        "bedAston": "Dog Bed Aston",
        "bedAstonDescription": "• cover - structural fabric - braid • filling - foam granulate • removable double-sided cushion • removable polyester cover • solid and high quality • Made in the EU",
        "matTerra": "Mattress Terra",
        "bedFaroDescription": "• cover - structured fabric/soft plush • filling - foam granules• removable polyester cover• solid and high quality• with a handle - made in  EU",
        "PoufTerra": "Pouf Terra",
        "PoufTerraDescription": " • cover - plush/soft corduroy fabric • filling - foam granulate • removable polyester cover • solid and high quality • Made in the EU",
        "matSierra": "Mattress Sierra",
        "matSierraDescription": "• cover - jacquard fabri • filling - foam granulate • removable cover - polyester/cotton • solid and high quality • Made in the EU",
        "matGimli": "Mattress Gimli",
        "matGimliDescription": "• cover - jacquard fabri • filling - foam granulate • removable cover - polyester/cotton • solid and high quality • Made in the EU",
        "matFox": "Mattress Fox",
        "matFoxDescription": "• cover - jacquard fabri • filling - foam granulate • removable cover - polyester/cotton • solid and high quality • Made in the EU",
        "heroDescr": "We design and manufacture beds that will provide your pet with relaxation and a comfortable sleep. Modern design, durability, and easy maintenance will allow pet owners to enjoy every moment spent with their beloved companions.",
        "heroHeader": "Comfort and style for your dog",
        "drop": "Our dog beds, produced by us, are also available in a dropshipping model.For our company, it's important that you can deliver our high-quality products to your customers without the need to store them in your own warehouse. Our dropshipping offer is the perfect opportunity to grow your own business with minimal logistical effort.",
"close":"Close"
    },
}

$(function () {
    $('.lang').on('click', function (e) {
        e.preventDefault()
        let lang = $(this).attr('id')

        $('.l').each(function (index, element) {
            $(this).text(data[lang][$(this).attr('key')])
        })
    })
})
// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     langsec.querySelector(".active").classList.remove("active");
//       btn.classList.add("active");
//       const attr = btn.getAttribute('language')
//       about.textContent = data[attr].about;
//       contact.textContent = data[attr].contact;
//       products.textContent = data[attr].products;
//       mat.forEach(mat => {
//           mat.textContent=data[attr].mat
//       })
//   });
// });