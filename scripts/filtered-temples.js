
const temples = [
  {
    templeName: "Praia Cape Verde",
    location: "Praia, Cape Verde",
    dedicated: "2022, June, 19",
    area: 8759,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/praia-cape-verde/320x200/praia_cape_verde_temple-main.jpeg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah, United States",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/320x200/bountiful-temple-lds-1059079-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "San Juan Puerto Rico",
    location: "San Juan, Puerto Rico",
    dedicated: "2023, January, 15",
    area: 6988,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-juan-puerto-rico/320x200/san_juan_puerto_rico_temple_exterior.jpeg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 12",
    area: 41010,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/6-Rome-Temple-2160338.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Manaus",
    location: "Manaus, Brazil",
    dedicated: "2012, June, 10",
    area: 32032,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manaus-brazil/400x250/lds-temple-manaus-brazil-1085290-wallpaper.jpg"
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 19",
    area: 119619,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768119-wallpaper.jpg"
  },
  {
    templeName: "St George Utah",
    location: "St George, Utah, United States",
    dedicated: "1877, April, 8",
    area: 143969,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-utah-temple-clouds-922212-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake, Utah, United States",
    dedicated: "1893, April, 5",
    area: 382207,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
];

const home_temple = document.querySelector("#home");
const old_temple = document.querySelector("#old");
const new_temple = document.querySelector("#new"); 
const large_temple = document.querySelector("#large");
const small_temple = document.querySelector("#small");

createTempleCard(temples);

home_temple.addEventListener("click", () => {
  createTempleCard(temples)
});

old_temple.addEventListener("click", () => {
  let old_filter = temples.filter(temple => Number(temple.dedicated.split(",")[0]) < 1900)
  createTempleCard(old_filter)
});

new_temple.addEventListener("click", () => {
  let new_filter = temples.filter(temple => Number(temple.dedicated.split(",")[0]) > 2000)
  createTempleCard(new_filter)
});

large_temple.addEventListener("click", () => {
  let large_filter = temples.filter(temple => temple.area >= 90000 )
  createTempleCard(large_filter)
});

small_temple.addEventListener("click", () => {
  let small_filter = temples.filter(temple => temple.area <= 10000)
  createTempleCard(small_filter)
});


function createTempleCard(filteredTemples) {
  document.querySelector(".gallery").innerHTML = "";

  filteredTemples.forEach(temple => {
	let card = document.createElement("section");
	let name = document.createElement("h3");
	let location = document.createElement("p");
	let dedication = document.createElement("p");
	let area = document.createElement("p");
	let img = document.createElement("img");

	name.textContent = temple.templeName;
	location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
	dedication.innerHTML = `<span class="label">Dedication: </span> ${temple.dedicated}`;
	area.innerHTML = `<span class="label">Area: </span> ${temple.area} Sq/ft`;
	img.setAttribute("src", temple.imageUrl);
	img.setAttribute("alt", `${temple.templeName} temple`);
	img.setAttribute("loading", "lazy");
	card.appendChild(name);
	card.appendChild(location);
	card.appendChild(dedication);
	card.appendChild(area);
	card.appendChild(img);

	document.querySelector(".gallery").appendChild(card);
  })	

}