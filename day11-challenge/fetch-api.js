/*Using javascript fetch , get the results from this API and print the results
https://jsonplaceholder.typicode.com/todos/1*/

async function getData() {
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  try {
    const response = await fetch(url);
    console.log(await response.json());
  } catch (error) {
    console.error(error.message);
  }
}
getData();
