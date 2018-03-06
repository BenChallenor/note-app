function noteListEmptyArray() {
  var notelist = new noteList
  assert.isEqual(notelist.list, []);
};

function storesNoteInArray() {
  var notelist = new noteList()
  notelist.addToList("Hifg")
  assert.isTrue(notelist.list[0].text === "Hi");
};



// function addNoteToList() {
//   var notelist = new noteList
//   var note = new Note("Hhii")
//   notelist.addToList(note)
//   assert.isEquivalent(notelist.list, ["Hi"])
// };


noteListEmptyArray();
storesNoteInArray();


