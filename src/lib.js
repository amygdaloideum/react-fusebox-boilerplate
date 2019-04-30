var pushState = history.pushState;

class Message {
  constructor({ type, data }) {
    this.type = type;
    this.data = data;
  }
}

function sendUrlData() {
  const message = new Message({
    type: 'CHILD_URL_UPDATE',
    data: `${window.location.pathname}${window.location.search}`,
  });
  window.parent.postMessage(message, '*');
}

history.pushState = function() {
  pushState.apply(history, arguments);
  sendUrlData();
};

window.addEventListener('popstate', function(e) {
  sendUrlData();
});
