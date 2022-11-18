const qq = document.cookie.match(/clientuin=[0-9]*/)[0].split('=')[1];
const time = setInterval(() => {
  var dataId = document.querySelector(`#img_${qq}`);
  if (dataId) {
    dataId.click();
    clearInterval(time);
  }
}, 1000);