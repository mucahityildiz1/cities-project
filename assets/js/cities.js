// Detaylar :

// cities.js dosyasında dizi içinde bulunan objeleri html de sırayla yazdıralım.
// Üst maddeye ek olarak :  Yemekleri ile ünlü olan şehirleri ayrı listeleyelim.
// Üst maddeye ek olarak :  Tarihi yerler ile ünlü olan şehirleri ayrı listeleyelim.
// Üst maddeye ek olarak :  Plaka numarası tek ve çift olan şehirleri ayrı listeleyelim.
// Css 'i hayal gücünüze bırakıyorum. Düz html olmazsa sevinirim. Biraz renkli ve şekilli liste bekliyorum

let cities = [
  {
    city: "Adana",
    famousFor: "Kebap",
    type: "food",
    plateNumber: "01",
  },
  {
    city: "Ankara",
    famousFor: "Simidi",
    type: "food",
    plateNumber: "06",
  },
  {
    city: "İstanbul",
    famousFor: "Boğaz",
    type: "place",
    plateNumber: "34",
  },
  {
    city: "İzmir",
    famousFor: "Boyoz",
    type: "food",
    plateNumber: "35",
  },
  {
    city: "Bursa",
    famousFor: "İskender Kebabı",
    type: "food",
    plateNumber: "16",
  },
  {
    city: "Antalya",
    famousFor: "Düden Şelalesi",
    type: "place",
    plateNumber: "07",
  },
  {
    city: "Gaziantep",
    famousFor: "Baklava",
    type: "food",
    plateNumber: "27",
  },
  {
    city: "Konya",
    famousFor: "Etli Ekmek",
    type: "food",
    plateNumber: "42",
  },
  {
    city: "Trabzon",
    famousFor: "Hamsi",
    type: "food",
    plateNumber: "61",
  },
  {
    city: "Kayseri",
    famousFor: "Mantı",
    type: "food",
    plateNumber: "38",
  },
  {
    city: "Eskişehir",
    famousFor: "Lületaşı",
    type: "place",
    plateNumber: "26",
  },
  {
    city: "Rize",
    famousFor: "Çay",
    type: "food",
    plateNumber: "53",
  },
  {
    city: "Erzurum",
    famousFor: "Cağ Kebabı",
    type: "food",
    plateNumber: "25",
  },
  {
    city: "Diyarbakır",
    famousFor: "Karpuz",
    type: "food",
    plateNumber: "21",
  },
  {
    city: "Mardin",
    famousFor: "Taş Evler",
    type: "place",
    plateNumber: "47",
  },
  {
    city: "Van",
    famousFor: "Van Kedisi",
    type: "animal",
    plateNumber: "65",
  },
  {
    city: "Sivas",
    famousFor: "Kangal Köpeği",
    type: "animal",
    plateNumber: "58",
  },
  {
    city: "Şanlıurfa",
    famousFor: "Balıklıgöl",
    type: "place",
    plateNumber: "63",
  },
  {
    city: "Mersin",
    famousFor: "Tantuni",
    type: "food",
    plateNumber: "33",
  },
  {
    city: "Muğla",
    famousFor: "Turistik Yerleri",
    type: "place",
    plateNumber: "48",
  },
  {
    city: "Çanakkale",
    famousFor: "Tarihi Gelibolu Yarımadası",
    type: "place",
    plateNumber: "17",
  },
  {
    city: "Hatay",
    famousFor: "Antakya Mozaikleri",
    type: "place",
    plateNumber: "31",
  },
  {
    city: "İzmir",
    famousFor: "Efes Antik Kenti",
    type: "place",
    plateNumber: "35",
  },
  {
    city: "Nevşehir",
    famousFor: "Kapadokya",
    type: "place",
    plateNumber: "50",
  },
  {
    city: "Aydın",
    famousFor: "Milet Antik Kenti",
    type: "place",
    plateNumber: "09",
  },
];

const btnCityList = document.querySelector(".btnCityList");
const citiesList = document.querySelector(".citiesList");
btnCityList.addEventListener("click", listCities);

function listCities() {
  if (citiesList.innerHTML.length > 0) {
    citiesList.innerHTML = "";
  } else {
    for (const city of cities) {
      citiesList.innerHTML += `<li class="list-item"><h4>Şehir: </h4><p>${city.city}</p></li>`;
    }
  }
}

const btnFoodList = document.querySelector(".btnFoodList");
const famousFood = document.querySelector(".famousFood");
btnFoodList.addEventListener("click", listFoods);

function listFoods() {
  if (famousFood.innerHTML.length > 0) {
    famousFood.innerHTML = "";
  } else {
    for (const city of cities) {
      if (city.type == "food") {
        famousFood.innerHTML += `<li class="list-item"><h4>Şehir: </h4>${city.city} <h4>Ünlü yemeği: </h4>${city.famousFor}</li>`;
      }
    }
  }
}

btnPlace.addEventListener("click", listPlace);

function listPlace() {
  if (famousPlace.innerHTML.length > 0) {
    famousPlace.innerHTML = "";
  } else {
    for (const city of cities) {
      if (city.type == "place") {
        famousPlace.innerHTML += `<li class="list-item"><h4>Şehir: </h4>${city.city} <h4>Ünlü yeri: </h4>${city.famousFor}</li>`;
      }
    }
  }
}

btnAnimal.addEventListener("click", listAnimal);

function listAnimal() {
  if (famousAnimal.innerHTML.length > 0) {
    famousAnimal.innerHTML = "";
  } else {
    for (const city of cities) {
      if (city.type == "animal") {
        famousAnimal.innerHTML += `<li class="list-item"><h4>Şehir: </h4>${city.city} <h4>Ünlü hayvanı: </h4>${city.famousFor}</li>`;
      }
    }
  }
}

btnPlateList.addEventListener("click", listPlates);

let oddPlates = [];
let evenPlates = [];
let oddIndex = 0;
let evenIndex = 0;

function listPlates() {
  if (oddPlateNumber.innerHTML !== "" && evenPlateNumber.innerHTML !== "") {
    oddPlateNumber.innerHTML = "";
    evenPlateNumber.innerHTML = "";
  } else {
    for (const city of cities) {
      if (Number(city.plateNumber) % 2 == 0) {
        evenPlates[evenIndex] = city;
        evenPlateNumber.innerHTML += `<li class="list-item grid"><h4>Şehir: </h4>${city.city} <h4>Çift Sayılı Plaka Numarası: </h4>${city.plateNumber}`;
        evenIndex++;
      } else {
        oddPlates[oddIndex] = city;
        oddPlateNumber.innerHTML += `<li class="list-item grid"><h4>Şehir: </h4>${city.city} <h4>Tek Sayılı Numarası: </h4>${city.plateNumber}`;
        oddIndex++;
      }
    }
  }
}
