// Import GSAP
import React from "react";
import {gsap} from "gsap";
import { Draggable, InertiaPlugin} from 'gsap/all'
import {useRef, useEffect} from "react";
import './App.css';
import './Vectors.css';

gsap.registerPlugin(Draggable);
gsap.registerPlugin(InertiaPlugin);

// Vectors
// Source: https://legacy.reactjs.org/docs/composition-vs-inheritance.html
function Row(props) {
  const imgRef = useRef(null);
  useEffect(() => {
    const element = imgRef.current;
    Draggable.create(element, {
      type: "x,y",
      inertia: true,
      dragClickables: true,
      bounds: window
    });
  }, []);
  return (
        <div className={props.vector} ref={imgRef}></div>
  );
}

function App() {

  return (
    <>
    <div className="App">
      <header className="App-header">
      <h2>Yuka Kobayashi</h2>
          <Row vector="large1"></Row>
          <Row vector="large2"></Row>
          <Row vector="large3"></Row>
          <Row vector="large4"></Row>
          <Row vector="large5"></Row>
          <Row vector="large6"></Row>
          <Row vector="large7"></Row>
          <Row vector="medium1"></Row>
          <Row vector="medium2"></Row>
          <Row vector="medium3"></Row>
          <Row vector="medium4"></Row>
          <Row vector="medium5"></Row>
          <Row vector="medium6"></Row>
          <Row vector="small1"></Row>
          <Row vector="small2"></Row>
          <Row vector="small3"></Row>
        </header>  
    </div>

    </>
    
  );
}


export default App;
