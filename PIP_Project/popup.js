document.getElementById('pipButton').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: togglePictureInPicture,
  });
});

async function togglePictureInPicture() {
  const video = document.querySelector('video');

  if (video) {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.requestPictureInPicture();
    }
  } else {
    alert('No video element found on the page.');
  }
}
