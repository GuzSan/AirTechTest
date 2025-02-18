//2 ways to make a inmutable object
/* un objeto que no puede cambiar sus propiedades es un elemento que se necesita inmutable con el cambio de los tiempos
como lo que puede ser un parametro oculto o definiciones */

// Create an object with a "hello" method and a mutable name property
const greeter = {
  hello: function() {
    console.log(`Hello ${this.name}`);
  }
};

// Define a property "name" that is read-only (immutable)
Object.defineProperty(greeter, 'name', {
  value: 'Santiago Guzman',
  writable: false,  // Make it immutable (or read-only as show above)
  configurable: false, // Cannot be deleted or redefined
});

// Try to change the name property
greeter.name = 'Santiago V'; // This will not work because the property is non-writable

// Call the "hello" method
greeter.hello(); //Output: 'Santiago Guzman'


document.getElementById('tstbtn2').addEventListener('click', function() {
     greeter.hello();
 });





//2 way
// Create an object with a "hello" method and an immutable name property
/*const greeter = {
  name: 'Santiago Guzman',
  hello: function() {
    console.log(`Hello ${this.name}`);
  }
};

// Freeze the object to make it immutable
Object.freeze(greeter); //Modify the property inside using the function freeze

// Try to change the name property
greeter.name = 'Santiago V'; // This will have no effect because the object is frozen

// Call the "hello" method
greeter.hello(); // Output: Hello Santiago Guzman*/
