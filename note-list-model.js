(function(exports) {
  
  function noteList() {
    this.list = [] 
  };

  noteList.prototype = {
    addToList: function(string) {
      // var note = new Note(new)
      this.list.push(new Note(string));
    }

  }
  exports.noteList = noteList;
})(this);