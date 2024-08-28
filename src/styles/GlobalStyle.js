import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-image: url('https://chorlaghat.wordpress.com/wp-content/uploads/2014/06/1-d5100.jpg?w=1000&h=547'); // Replace with your image path
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .glass {
    background: rgba(255, 255, 255, 0.1); // Adjust the color and opacity as needed
    border-radius: 15px;
    backdrop-filter: blur(10px); // Increase this value for more blur
    padding: 5px; // Reduced padding
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    height: 200px; // Set a specific height (adjusted)
    width: 90%; // Adjust width as needed
    max-width: 500px; // Optional: set a max-width
  }

  button {
    background: #61dafb;
    border: none;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    color: #282c34;
    font-weight: bold;
    border-radius: 5px;
  }

  label {
    display: block;
    margin: 10px 0 5px;
  }

  input, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  div {
    color: #ff6b6b;
  }
`;

export default GlobalStyle;
