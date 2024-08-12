import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="background">
      <div className="floating-container">
        {children}
      </div>
    </div>
  );
};

export default Layout;
