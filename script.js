let sec = 0;
let timer = null;

function format(){
  const h = String(Math.floor(sec / 3600)).padStart(2,'0');
  const m = String(Math.floor((sec % 3600) / 60)).padStart(2,'0');
  const s = String(sec % 60).padStart(2,'0');
  return `${h}:${m}:${s}`;
}

function start(){
  if(timer) return;
  timer = setInterval(()=>{
    sec++;
    document.getElementById('time').innerText = format();
  },1000);
}

function stop(){
  clearInterval(timer);
  timer = null;
}

function reset(){
  stop();
  sec = 0;
  document.getElementById('time').innerText = '00:00:00';
}
