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
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia totam facilis ab nam, repudiandae sequi voluptatum nemo, exercitationem amet maiores necessitatibus libero velit suscipit excepturi itaque quaerat. Blanditiis, odio maiores! ",
      isActive: true,
      tagNo: 1,
      date: "01-12-2020",
    },
    n002: {
      title: "2 - Lorem ipsum",
      body: "lorem ipsum dolor sit emit",
      isActive: true,
      tagNo: 2,
      date: "01-12-2020",
    },
    n003: {
      title: "3 - Lorem ipsum",
      body: "lorem ipsum dolor sit emit",
      isActive: true,
      tagNo: 3,
      date: "01-12-2020",
    },
    n004: {
      title: "4 - Lorem ipsum",
      body: "lorem ipsum dolor sit emit",
      isActive: false,
      tagNo: 3,
      date: "01-12-2020",
    },
    n005: {
      title: "5 - Lorem ipsum",
      body: "lorem ipsum dolor sit emit",
      isActive: true,
      tagNo: 4,
      date: "01-12-2020",
    },
  },
};

export default notesDB;
