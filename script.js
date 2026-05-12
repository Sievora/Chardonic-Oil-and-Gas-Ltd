
{
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);

      if (!target) return;

      const start = window.pageYOffset;
      const end = target.getBoundingClientRect().top + start;
      const duration = 1000; // 3 second

      let startTime = null;

      function scrollAnimation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;

        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, start + (end - start) * progress);

        if (timeElapsed < duration) {
          requestAnimationFrame(scrollAnimation);
        }
      }

      requestAnimationFrame(scrollAnimation);
    });
  });
}
{
    const navBar = document.getElementById('navBar');
    function closeNav() {
        navBar.style.display = 'none';
    }

     function openNav() {
        navBar.style.display = 'grid';
    }

function openget() {
  const getinpage = document.getElementById('getinpage');
  getinpage.style.display = 'grid';
}

  function resopenget() {
  getinpage.style.display = 'grid';
  navBar.style.display = 'none';
}

function closeget() {
  getinpage.style.display = 'none';
}

}