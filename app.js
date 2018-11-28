var timeForPost = document.getElementById('postTime');

// utc

var today2 = Date.now()

function setTime(){
// today
  var today = new Date()

// gather info we need
  var day = today.getDate()
  var month = today.getMonth() + 1
  var year = today.getFullYear()

  // format info
  var date = month + '-' + day + '-' + year

// display on Html
  timeForPost.innerHTML = date
}

setTime()