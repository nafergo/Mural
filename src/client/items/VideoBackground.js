/* eslint-env browser */
/* globals $ */
import 'scrollstory/jquery.scrollstory';

function loadItem(item) {
  item.el.find('.video-container').addClass('fixed');
  const video = item.el.find('video').get(0);
  video.play();
}

// code needed to bootstrap editor preview
$(document).ready(function() {
  const $story = $('#scrollytelling');

  const scrollStory = $story
    .scrollStory({
      contentSelector: '.part',
      triggerOffset: 0,
    })
    .data('plugin_scrollStory');

  const storyItems = scrollStory.getItems();
  window.draftItem = storyItems[0];
  loadItem(window.draftItem);
});

// code needed to refresh editor preview
window.refresh = function() {
  loadItem(window.draftItem);
};
