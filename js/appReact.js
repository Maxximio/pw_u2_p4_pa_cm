const App = () => {
    return React.createElement('h1', null, 'Hello, World!');
  };

  // Render the React component into the DOM
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
  );