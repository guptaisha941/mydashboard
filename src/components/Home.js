import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/facebook">Go to Facebook Dashboard</Link>
    </div>
  );
}

export default Home;
