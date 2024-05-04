const ROOMS = [
  {
    category: "premium",
    title: "Premium Standart Room",
    desc: "Take a joy of a space of 33 m², featuring a private balcony. Book Now from £345",
    img: "Premium1.png",
  },
  {
    category: "suite",
    title: "Suite Deluxe",
    desc: "Get a feel of timeless elegance and minimal sophistication. Book Now from £895",
    img: "Suite1.png",
  },
  {
    category: "premium",
    title: "Superior Sea",
    desc: "View Enjoy space of 43 m², with a spacious sea view. Book Now from £505",
    img: "Superior1.png",
  },
  {
    category: "suite",
    title: "King's Exclusive Suite",
    desc: "Enjoy a space of 135 m² imposing space of contemporary luxury and pure. Book Now from £1570",
    img: "Suite2.png",
  },
  {
    category: "premium",
    title: "Superior Standart Room",
    desc: "Let yourself enjoy the harmony of stone, wood & glass. Book Now from £565",
    img: "Superior2.png",
  },
  {
    category: "suite",
    title: "Luxury Suite",
    desc: "Enjoy the comfort and a moments for yourself. Book Now from £945",
    img: "Suite3.png",
  },
  {
    category: "premium",
    title: "Premium Sea View",
    desc: "A sumptuous panoramic view is awaiting you. Book Now from £475",
    img: "Premium2.png",
  },
  {
    category: "suite",
    title: "Grand Suite",
    desc: "The “diamond” suite of CasinoLuxuryHotels Hotel Casino Book Now from £895",
    img: "Suite4.png",
  },
  {
    category: "premium",
    title: "Premium Standart Room",
    desc: "Take a joy of a space of 33 m², featuring a private balcony. Book Now from £345",
    img: "Premium3.png",
  },
];

let CATEGORY = "all"; // suite / premium

function renderRooms(rooms) {
  const container = document.getElementById("roomsContainer");
  container.innerHTML = "";

  rooms.forEach((room) => {
    const card = document.createElement("div");

    const cardImage = document.createElement("div");
    cardImage.className = `h-[162px] sm:h-[233px] w-full rounded-3xl bg-no-repeate bg-cover bg-center bg-[url('./assets/images/rooms/${room.img}')]`;

    const cardBody = document.createElement("div");
    cardBody.className = "flex flex-col gap-3 py-5 sm:pl-2";

    const cardTitle = document.createElement("h3");
    cardTitle.className =
      "text-[18px] sm:text-[22px] font-semibold max-sm:text-center";
    cardTitle.textContent = room.title;

    const cardDesc = document.createElement("p");
    cardDesc.className =
      "font-light max-sm:text-center max-sm:text-sm text-balance";
    cardDesc.textContent = room.desc;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDesc);

    card.appendChild(cardImage);
    card.appendChild(cardBody);

    container.appendChild(card);
  });
}

function filterRooms() {
  const filteredRooms =
    CATEGORY === "all"
      ? ROOMS
      : ROOMS.filter((room) => room.category === CATEGORY);

  renderRooms(filteredRooms);
}

const categoriesContainer = document.getElementById("roomsCategories");

function toggleCategory(newCategory = CATEGORY) {
  CATEGORY = newCategory;

  filterRooms();

  categoriesContainer.querySelectorAll("button").forEach((button) => {
    if (button.dataset.category === CATEGORY)
      button.classList.add("bg-white", "text-black");
    else button.classList.remove("bg-white", "text-black");
  });
}

toggleCategory();

categoriesContainer.addEventListener("click", (e) => {
  if (e.target.dataset.category) {
    toggleCategory(e.target.dataset.category);
  }
});
