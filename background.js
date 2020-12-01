const CONTEXT_MENU_ID = 'password-reveal';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
      id: CONTEXT_MENU_ID,
      title: chrome.i18n.getMessage('showLabel'),
      contexts: ['editable']
  });

  chrome.contextMenus.onClicked.addListener((infos, tab) => {
    if (infos.menuItemId === CONTEXT_MENU_ID) {
      chrome.tabs.sendMessage(tab.id, 'revealPassword');
    }
  });
});
