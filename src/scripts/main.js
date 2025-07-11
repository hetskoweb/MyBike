'use strict';

function toggleScrollLock() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('scroll-lock');
  } else {
    document.body.classList.remove('scroll-lock');
  }
}

window.addEventListener('hashchange', toggleScrollLock);

toggleScrollLock();
