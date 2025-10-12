"use client";

import React from 'react';
import './SortingVisualiser.css';

async function fetchAnimations(algorithm, array) {
  const response = await fetch("http://127.0.0.1:8000/sort", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ algorithm, array }),
  });
  const data = await response.json();
  return data.animations;
}

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 250;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(0, 500));
    }
    this.setState({array});
  }

  async mergeSort() {
    const animations = await fetchAnimations("merge", this.state.array);
    this.playAnimations(animations);
  }

  async quickSort() {
    const animations = await fetchAnimations("quick", this.state.array);
    this.playAnimations(animations);
  }

  async selectionSort() {
    const animations = await fetchAnimations("selection", this.state.array);
    this.playAnimations(animations);
  }

  async bubbleSort() {
    const animations = await fetchAnimations("bubble", this.state.array);
    this.playAnimations(animations);
  }

  async insertionSort() {
    const animations = await fetchAnimations("insertion", this.state.array);
    this.playAnimations(animations);
  }


  playAnimations(animations) {
    const arrayBars = document.getElementsByClassName('array-bar');
    animations.forEach(([action, i, jOrValue], idx) => {
      setTimeout(() => {
        if (action === "compare") {
          arrayBars[i].style.backgroundColor = "red";
          arrayBars[jOrValue].style.backgroundColor = "red";
        } else if (action === "swap" || action === "overwrite") {
          arrayBars[i].style.height = `${jOrValue}px`;
        } else if (action === "sorted") {
          arrayBars[i].style.backgroundColor = "green";
        }
      }, idx * ANIMATION_SPEED_MS);
    });
  }

  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  render() {
    const { array } = this.state;
  
    return (
      <div className="visualiser-wrapper flex flex-col items-center">
        {/* Bars container */}
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}