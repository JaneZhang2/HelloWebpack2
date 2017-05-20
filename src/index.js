// Hot Module Replacement API

alert('Hello World!');

if (module.hot) {
  module.hot.accept('./', () => {
  });
}
