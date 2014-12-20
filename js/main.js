var playlistLen = audioArr.length;
var currentSong;

$(document).ready(function(){
  var $player = $('#player');
  $player.attr('src', audioArr[0]);
  $player.trigger("play");
  currentSong = $('#player').attr('src');

  //play next song, after end
  $player.bind('ended', function(){
      nextSong();
  });

  //keyboard bindings
  Mousetrap.bind(".", function() { nextSong(); });
  Mousetrap.bind(",", function() { prevSong(); });
  Mousetrap.bind("/", function() { nextSong(); });
  Mousetrap.bind("space", function() {
    if(document.getElementById('player').paused == true){
      $player.trigger("play");
    }else{
      $player.trigger("pause");
    }
  });


}); //doc ready end

  //CTRL FUNCTIONS
  function nextSong(){
    var currIndx = audioArr.indexOf(currentSong);
    var nextCnt = currIndx + 1 > audioArr.length ? 0 : currIndx + 1;
    currentSong = audioArr[nextCnt];
    $('#player').attr('src', currentSong);
    $('#player').trigger("play");

  }

  function prevSong(){
    var currIndx = audioArr.indexOf(currentSong);
    var nextCnt = currIndx - 1 < 0 ? audioArr.length - 1 : currIndx - 1;
    currentSong = audioArr[nextCnt];
    $('#player').attr('src', currentSong);
    $('#player').trigger("play");
  }

  function randomSong(){
    var randIndx = (Math.random() * (audioArr.length - 0) + 0).toFixed(0); //generate a valid random indx
    currentSong = audioArr[randIndx];
    $('#player').attr('src', currentSong);
    $('#player').trigger("play");
  }
//END
