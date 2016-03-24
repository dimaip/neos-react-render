import React from 'react';

const Layout = ({children}) => (
  <div>
    <header>The website header</header>
    {children}
    <footer>Footer is here</footer>
  </div>
);

export default Layout;
