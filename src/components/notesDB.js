let notesDB = {
  countTotal: 5,
  countActive: 4,
  tags: {
    0: { tagName: "tag0", tagColor: "red" },
    1: { tagName: "tag1", tagColor: "orange" },
    2: { tagName: "tag2", tagColor: "yellow" },
    3: { tagName: "tag3", tagColor: "green" },
    4: { tagName: "tag4", tagColor: "light-blue" },
  },
  tagColorPalette: [
    "red",
    "orange",
    "yellow",
    "green",
    "blue-green",
    "light-blue",
    "dark-blue",
    "purple",
    "light-gray",
    "dark-gray",
  ],
  notes: {
    n001: {
      title: "1 - Lorem ipsum",
      body: "lorem ipsum dolor sit emit",
      isActive: true,
      tagNo: 1,
    },
    n002: {
      title: "2 - Lorem ipsum",
      body: "lorem ipsum dolor sit emit",
      isActive: true,
      tagNo: 2,
    },
    n003: {
      title: "3 - Lorem ipsum",
      body: "lorem ipsum dolor sit emit",
      isActive: true,
      tagNo: 3,
    },
    n004: {
      title: "4 - Lorem ipsum",
      body: "lorem ipsum dolor sit emit",
      isActive: false,
      tagNo: 3,
    },
    n005: {
      title: "5 - Lorem ipsum",
      body: "lorem ipsum dolor sit emit",
      isActive: true,
      tagNo: 4,
    },
  },
};

export default notesDB;
