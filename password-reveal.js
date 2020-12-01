(() => {
  'use strict';
  const INPUT = 'INPUT';
  const TEXT = 'text';
  const PASSWORD = 'password';
  let $clickedPassword = null;

  const togglePassword = ($input, type) => {
    $input.isToggledPassword = true;
    $input.type = type || ($input.type === TEXT ? PASSWORD : TEXT);
  }

  document.addEventListener('contextmenu', event => {
    if (event.target.nodeName === INPUT && (event.target.type === PASSWORD || event.target.isToggledPassword)) {
      $clickedPassword = event.target;
    } else {
      $clickedPassword = null;
    }
  }, true);

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request === 'revealPassword' && $clickedPassword) {
      togglePassword($clickedPassword);
    }
  });
})();