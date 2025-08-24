/*const studentsData = [
  {
    id: 0,
    name: ‘Arun’,
    books: [‘Wings of Fire’, ‘Chakra’],
  },
  {
    id: 1,
    name: ‘Ashok’,
    books: [‘Chakra’, ‘War and Peace’, ‘The Shining’]
  },
  {
    id: 2,
    name: ‘Balu’,
    books: [‘Wings of Fire’, ‘All about Cricket’],
  },
  {
    id: 3,
    name: ‘Cathi’,
    books: [‘Against the wind’, ‘The Shining’, ‘War and Peace’]
  },
];
Find the common interest in books for the studentsData
Output
Wings of Fire - [‘Arun’, ‘Balu’]
Chakra - [‘Arun’, ‘Ashok’]
War and Peace - [‘Ashok’, ‘Cathi’],
All about Cricket- [‘Balu’],
Against the wind- [‘Cathi’]
The Shining - [‘Cathi’, ‘Ashok’]
Find the user who shares most interest with other users.
For example: Ashok since he shares book interest with Arun, Cathi. And also Arun since he shares interest with Balu and Ashok
*/

const studentsData = [
  {
    id: 0,
    name: "Arun",
    books: ["Wings of Fire", "Chakra"],
  },
  {
    id: 1,
    name: "Ashok",
    books: ["Chakra", "War and Peace", "The Shining"],
  },
  {
    id: 2,
    name: "Balu",
    books: ["Wings of Fire", "All about Cricket"],
  },
  {
    id: 3,
    name: "Cathi",
    books: ["Against the wind", "The Shining", "War and Peace"],
  },
];

function uniqueBooks(studentsData) {
  if (!studentsData || !Array.isArray(studentsData) || studentsData.length == 0) {
        console.error("Invalid input,please give the proper input");
        return false;
    }

  let uniqueBookArray = [];
  let booksOfUser = {};
  for (let student of studentsData) {
    for (let book of student.books) {
      if (!uniqueBookArray.includes(book)) {
        uniqueBookArray.push(book);
      }
    }
  }
  console.log(uniqueBookArray);
  for (let book of uniqueBookArray) {
    for (let student of studentsData) {
      if (student.books.includes(book)) {
        if (booksOfUser[book]) {
          booksOfUser[book].push(student.name);
        } else {
          booksOfUser[book] = [student.name];
        }
      }
    }
  }
  console.log(booksOfUser);
}
uniqueBooks(studentsData);
