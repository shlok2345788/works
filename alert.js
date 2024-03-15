function checkTime() {
    var date = new Date();
    var hour = date.getHours();
    if (hour < 12) {
      alert("Good morning");
    } else if (hour >= 12 && hour < 18) {
      alert("Good afternoon");
    } else {
      alert("Good evening");
    }
  }