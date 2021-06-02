let notesDB = {
  countTotal: 5,
  countActive: 4,
  tags: {
    0: "tag0",
    1: "tag1",
    2: "tag2",
    3: "tag3",
    4: "tag4",
  },
  tagColors: [
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
