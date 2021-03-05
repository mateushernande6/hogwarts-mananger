const defaultState = [
  {
    name: "Gryffindor",
    note: 0,
    image:
      "https://sites.google.com/site/beatrizpereirahistorias/_/rsrc/1382539370934/hogwards/salao-comunal/preciso-ser-uma-super-heroina/gryf_rave_colour_copy.png?height=393&width=400",
  },
  {
    name: "Hufflepuff",
    note: 0,
    image:
      "https://www.pngkit.com/png/full/241-2415355_aeo8gde-harry-potter-lockscreens-hufflepuff.png",
  },
  {
    name: "Slytherin",
    note: 0,
    image:
      "http://2.bp.blogspot.com/-Qxx6yYUPGb4/TzaZUYBMzjI/AAAAAAAAAEE/iH6_jEXTob8/s400/7836281.png",
  },
  {
    name: "Ravenclaw",
    note: 0,
    image:
      "https://www.rpnation.com/data/xfmg/thumbnail/19/19446-277824760feed4a4ec42ff1c06345dba.jpg?1516415144",
  },
];

const houseNotesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "@houseNotes/ADD":
      return action.resp;
    case "@houseNotes/SUB":
      return;
    default:
      return state;
  }
};
export default houseNotesReducer;
