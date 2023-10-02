import React, { useState } from 'react';
import './App.css';
import Icon from 'react-web-vector-icons';
import logo from './assets/home-outline.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <div class="navigation">
    <ul>
      <li class="list active">
        <a href="#">
          <span class="icon">
            <ion-icon name="home-outline"></ion-icon>
          </span>
          <span class="text">Home</span>
        </a>
      </li>
      <li class="list">
        <a href="#">
          <span class="icon">
            <ion-icon name="person-outline"></ion-icon>
          </span>
          <span class="text">Profile</span>
        </a>
      </li>
      <li class="list">
        <a href="#">
          <span class="icon">
            <ion-icon name="chatbubble-outline"></ion-icon>
          </span>
          <span class="text">Message</span>
        </a>
      </li>
      <li class="list">
        <a href="#">
          <span class="icon">
            <ion-icon name="camera-outline"></ion-icon>
          </span>
          <span class="text">Photos</span>
        </a>
      </li>
      <li class="list">
        <a href="#">
          <span class="icon">
            <ion-icon name="settings-outline"></ion-icon>
          </span>
          <span class="text">Settings</span>
        </a>
      </li>
      <div class="indicator"></div>
    </ul>
  </div>

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  </div>
  );
}

export default App;
