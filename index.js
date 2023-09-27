let myTime = document.querySelector(".myTime");

update();
setInterval(update, 1000);

function update() {
  let date = new Date();
  myTime.innerHTML = formatDay(date) + " " + formatTime(date);
  
  function formatDay(date) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    
    day = formatZeroesD(day);
    month = formatZeroesT(month);
    
    return `${month}/${day}/${year}`;
  }
  
  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrpm = hours <= 12 ? "am" : "pm";
    
    hours = (hours % 12) || 12;
    hours = formatZeroesT(hours);
    minutes = formatZeroesT(minutes);
    seconds = formatZeroesT(seconds);
    
    return `${hours}:${minutes}:${seconds} ${amOrpm}`;
  }
  
  function formatZeroesD(dates) {
    dates = dates.toString();
    
    return dates.length < 2 ? "0" + dates : dates;
  }
  
  function formatZeroesT(time) {
    time = time.toString();
    
    return time.length < 2 ? "0" + time : time;
  }
 }
