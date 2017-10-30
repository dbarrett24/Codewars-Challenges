function sortByLength (array) {
    var result = array.sort(function(a, b){
      return a.length - b.length;
    })
    return result;
  };
  sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]);