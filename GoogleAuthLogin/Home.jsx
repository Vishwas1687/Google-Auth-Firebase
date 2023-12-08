import React from 'react';

const Home = () => {
    const handleLogout=()=>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
