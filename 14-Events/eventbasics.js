//Events- Basics
//All the events run sequentially in the order they are defined.
//But some events can be asynchronous, meaning they can run at a later time.
//Events are a way to handle user interactions and other occurrences in a web application.
//Events can be triggered by user actions, such as clicking a button or submitting a form.
//They can also be triggered by the system, such as when a page loads or an element is resized.
//Events are a fundamental part of JavaScript and are used to create interactive web applications.
//In JavaScript, events are handled using the event-driven programming paradigm.
//Event-driven programming is a programming paradigm that relies on events to trigger actions.
//In this paradigm, the flow of the program is determined by events rather than a predetermined sequence
//of instructions.

//Events are actions that occur in the system, such as a user clicking a button or a file being uploaded.
//Events are used to trigger actions in response to these actions.
//In JavaScript, events are handled using event listeners.
//Event listeners are functions that are called when an event occurs.
//Event listeners can be added to elements using the addEventListener() method.
//Event listeners can be removed using the removeEventListener() method.
//Event listeners can be used to handle events such as clicks, key presses, and mouse movements.
//Event listeners can also be used to handle custom events.

//Example of adding an event listener to a button
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

//Example of removing an event listener from a button
const handleClick = () => {
  console.log("Button clicked!");
};
button.removeEventListener("click", handleClick);

//Example of handling a custom event
const myEvent = new Event("myEvent");
document.addEventListener("myEvent", () => {
  console.log("Custom event triggered!");
});
document.dispatchEvent(myEvent); // this will trigger the custom event listener

//Example of handling a key press event
document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});

//Example of handling multiple events
const input = document.getElementById("myInput");
input.addEventListener("focus", () => {
  console.log("Input focused!");
});
input.addEventListener("blur", () => {
  console.log("Input blurred!");
});
