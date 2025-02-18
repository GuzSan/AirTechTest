// Create an object with a "hello" method
const greetings = {
  // Define the "hello" method
  hello: function(name) {
    console.log(`Hello ${name}`);
  }
};

// Call the "hello" method with a name
greetings.hello('Santiago guzman'); //This will call the function hello, that will print in console


document.getElementById('testbtn1').addEventListener('click', function() {
     greeter.hello();
 });