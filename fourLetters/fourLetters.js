  // Four Letters in Common
  // Summer of Tech Code challenge
  // Solution by Kevin Cartwright, 2017
  var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dict = reader.result;
      console.log(dict.substring(0, 200));
    };
    reader.readAsText(input.files[0]);
  };
