{
    const navBar = document.getElementById('navBar');
    function closeNav() {
        navBar.style.display = 'none';
    }

     function openNav() {
        navBar.style.display = 'grid';
    }
}

{

const counter = document.getElementById("counter");
const duration = 2000; // 2 seconds
const end = 1000;

let startTime = null;

function animateCounter(timestamp) {
  if (!startTime) startTime = timestamp;
  const progress = timestamp - startTime;

  const value = Math.min(
    Math.floor((progress / duration) * end),
    end
  );

  counter.innerText = value;

  if (progress < duration) {
    requestAnimationFrame(animateCounter);
  }
}

requestAnimationFrame(animateCounter);

}