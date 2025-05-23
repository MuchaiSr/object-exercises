(() => {
    const book = {
    title: `The Hobbit`,
    author: {
        firstName: `J.R.R`,
        lastName: `Tolkien`,
    },
    yearPublished: 1937,
}
book.genre = `fantasy`;

for (let key in book) {
    if (key === `author`) {
        console.log(`author:`, `${book[key].firstName} ${book[key].lastName}`);
    } else {
        console.log(`${key}:`, book[key]);
    }
}

console.log(book.propertyIsEnumerable(`author`));
console.log(Object.prototype);
console.log(`author` in book);
})();

(() => { // Exercise 1
    const movie = {
        title: "Inception",
        director: {
          name: "Christopher Nolan",
          dob: "1970-07-30",
          films: ["Memento", "The Prestige", "Inception", "Dunkirk"]
        },
        year: 2010,
        genre: "Sci-Fi"
      };
      
      console.log(movie[`director`][`name`]);
      console.log(movie.director?.dob);
      console.log(movie[`director`][`films`][1]);
      console.log(movie.director?.films[1]);
})();

(() => { // Exercise 2
    const movie = {
        title: "Inception",
        director: {
          name: "Christopher Nolan",
          dob: "1970-07-30",
          films: ["Memento", "The Prestige", "Inception", "Dunkirk"]
        },
        year: 2010,
        genre: "Sci-Fi"
      };

      movie[`rating`] = 8.8;
      console.log(movie); 
      movie.director?.films.push(`Interstellar`);
      console.log(movie);
      movie[`director`][`awards`] = ["Oscar", "Golden Globe"];
      console.log(movie);    
})();

(() => { // Exercise 3
    const classroom = {
        className: "Physics",
        students: [
          {
            name: "John",
            grade: "A",
            scores: {
              exam1: 95,
              exam2: 88,
              exam3: 92
            }
          },
          {
            name: "Jane",
            grade: "B",
            scores: {
              exam1: 80,
              exam2: 85,
              exam3: 90
            }
          },
          {
            name: "Alice",
            grade: "A",
            scores: {
              exam1: 90,
              exam2: 94,
              exam3: 98
            }
          }
        ]
      };

      Object.keys(classroom).forEach((key) => { // One way that a loop can be used with objects.
        if (key === `students`) {
            for (let i = 0; i < classroom[key].length; i++) {
                console.log(classroom[key][i][`name`]);
            }
        }
      });

      for(let key in classroom) { // The other way a loop is used when dealing with objects.
        // for...in loops iterate over the key-value pair of an object while for...of loops only iterate over the value of an object.
        if (key === `students`) {
            for (let i = 0; i < classroom[key].length; i++) {
                const addedScores = classroom[key][i][`scores`][`exam1`] + classroom[key][i][`scores`][`exam2`] + classroom[key][i][`scores`][`exam3`];
                const averageScores = addedScores / 3
                console.log(averageScores);
            }
        }
      }

      console.log(classroom[`students`][2][`scores`][`exam3`]);
})();

(() => { // Exercise 4
    // It is important to consider what is happening here.
    // We are dealing with a situation where we have an object that has nested objects.
    // Notice that the object and the function are very different entities.
    function findKey(obj, targetKey) {
        for (let key in obj) {
          if (key === targetKey) {
            return obj[key];  // If found, return the value
          }
          if (typeof obj[key] === "object" && obj[key] !== null) {
            const result = findKey(obj[key], targetKey);  // Recursive call
            if (result !== undefined) {
              return result;
            }
          }
        }
        return undefined; // If the key is not found
      }
      
      // Example:
      const nestedObj = {
        a: {
          b: {
            c: "found me!"
          }
        }
      };
      
      console.log(findKey(nestedObj, "c"));  // Output: found me!
      
})();

(() => { // Exercise 5
    const employee = {
        name: "Eve",
        department: "Engineering",
        position: "Software Developer",
        contact: {
          email: "eve@example.com",
          phone: "123-456-7890"
        },
        salary: 80000
      };
      
      function deletePhoneProperty() {
        delete employee[`contact`][`phone`];
      }

      deletePhoneProperty();

      console.log(employee);

      function deletePositionProperty() {
        delete employee[`position`];
      }

      deletePositionProperty();

      console.log(employee);
})();

(() => {
  const books = [ // Using Objects Inside Arrays
    {title: `African Psycho`,
     author: `Alain Mabanckou`,
    },
    {title: `The river and the source`,
      author: `Margaret Ogola`,
    },
    {title: `The river between`,
      author: `Ngugi wa Thiong'o`,
    }
  ];

  for (let i = 0; i < books.length; i++) {
    console.log(`${books[i][`title`]} was written by ${books[i][`author`]}`);
  }

  books[1][`yearPublished`] = 1994;
  console.log(books);

  books[2][`pages`] = 176;
  books[2][`pages`] += 50;
  console.log(books);

  books.pop()
  console.log(books);
})();

(() => {
  const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: false },
    { name: "Charlie", active: true },
    { name: "Diana", active: false },
  ];

  // Your task: Use .filter() to return only active users.
  // The most important thing I think you should understand about filter is that a test is associated to it.
  // This test will be created by a function most times.
  // Also note that it creates a new array and you can think about it like how map works.

  const activeUsers = users.filter((user) => {
    if (user.active === false) return 1; // It is very important that you remember when return as a statement is used, in the sense of actually writing it.
    // When you have curly brackets, you must write it but a function without curly brackets need not have the statement 'return'.
  });
  console.log(activeUsers);
})();

(() => {
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = 0;
    for (let key in salaries) {
      sum += salaries[key];
    }
  
    console.log(sum);
})();

(() => {
    // before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

  function multiplyNumeric(obj) {
    for (let key in menu) {
      if (isNaN(obj[key])) {
        continue;
      } else {
        obj[key] = obj[key] * 2;
      }
    }
    console.log(menu);
  }

multiplyNumeric(menu);
})();

(() => {
  const students = [
    { name: "Liam", grade: 85 },
    { name: "Olivia", grade: 92 },
    { name: "Noah", grade: 76 },
    { name: "Emma", grade: 59 },
    { name: "Ava", grade: 48 }
  ];
  
  // Use .filter() to return students who passed (grade >= 60)

  const passedGrade = students.filter((student) => {
    return student[`grade`] >= 60;
  });

  console.log(passedGrade);
})();

(() => {
  const students = [
    { name: "Liam", grade: 85 },
    { name: "Olivia", grade: 92 },
    { name: "Noah", grade: 76 },
    { name: "Emma", grade: 59 },
    { name: "Ava", grade: 48 }
  ];
  
  // Your task: filter students with grade < 60

  const lessThan60 = students.filter((student) => {
    return student[`grade`] < 60;
  });

  console.log(lessThan60);
})();

(() => {
  const students = [ // It is important to note what is happening here.
    // This exercise is meant to help you think about ASCII values.
    // 'L' has an ASCII value of 76 and 'N' has an ASCII value of 78.
    // For example: 'L' (ASCII 76) is greater than or equal to 'L' (so it passes).
    // 'M' (ASCII 77) is within the range (so it passes).
    // 'N' (ASCII 78) is also within the range (so it passes).
    // 'O' (ASCII 79) is greater than 'N' (so it fails).

    { name: "Liam", grade: 85 },
    { name: "Olivia", grade: 92 },
    { name: "Noah", grade: 76 },
    { name: "Emma", grade: 59 },
    { name: "Ava", grade: 48 }
  ];
  
  // Your task: Filter students with grade >= 60 AND name starts with L to N
  
  const doubleFilter = students.filter((student) => {
    const firstLetter = student.name.charAt(0);
    return student[`grade`] >= 60 && (firstLetter >= `L` && firstLetter <= `N`);
  });
  console.log(doubleFilter);

  // If you ever want to see what number a character maps to, you can use:
  // console.log('L'.charCodeAt(0)); // 76.
})(); 

(() => {
  const students = [
    { name: "Liam", grade: 85 },
    { name: "Olivia", grade: 92 },
    { name: "Noah", grade: 76 },
    { name: "Emma", grade: 59 },
    { name: "Ava", grade: 48 },
    { name: "John", grade: 72 },
    { name: "Jill", grade: 65 },
    { name: "Oscar", grade: 88 },
    { name: "Olga", grade: 54 }
  ];
  
  const tripleFilter = students.filter((student) => {
    return student[`grade`] >= 70 && (student.name.startsWith(`J`) || student.name.startsWith(`O`)) && student.name.length > 4;
  });
  console.log(tripleFilter);
})(); 

(() => {
  const students = [
    { name: "Liam", grade: 85 },
    { name: "Olivia", grade: 92 },
    { name: "Noah", grade: 76 },
    { name: "Emma", grade: 59 },
    { name: "Ava", grade: 48 }
  ];

  const totalSum = students.reduce((acc, current, index, arr) => { // Think of the accumulator(acc) as a box where you put your results for each iteration.
    // It is also important that you consider the parameters getting involved with operations involving the method reduce().
    // The parameters can be custom but they must follow the syntax logic as shown above.
    if (current[`grade`] >= 60) {
      return acc + current[`grade`];
    } else { // In these operations, it is vital that else statements exist because an omission of the else statement could break your operation.
      return acc;
    }
  }, 0 /* initial value */); // Remember to always include the initial value as it informs the accumulator and it's also part of the syntax. 

  console.log(totalSum);
})();

(() => {
  const students = [
    { name: "Liam", grade: 85 },
    { name: "Olivia", grade: 92 },
    { name: "Noah", grade: 76 },
    { name: "Emma", grade: 59 },
    { name: "Ava", grade: 48 },
    { name: "John", grade: 65 },
    { name: "Zoe", grade: 80 }
  ];

  const above60 = [];
  const totalSumOfAbove60 = students.reduce((acc, student) => {
    if (student[`grade`] >= 60) {
      above60.push(student);
      console.log(above60);

      return acc + student[`grade`];
    } else {
      return acc;
    }
  }, 0);

  const averageGrade = totalSumOfAbove60 / above60.length;
  console.log(averageGrade);
})();

(() => {
  const students = [
    { name: "Liam", grade: 85 },
    { name: "Olivia", grade: 92 },
    { name: "Noah", grade: 76 },
    { name: "Emma", grade: 59 },
    { name: "Ava", grade: 48 },
    { name: "John", grade: 65 },
    { name: "Zoe", grade: 80 }
  ];
 const totalSumOfAbove60 = students.reduce((acc, student) => {
  if (student[`grade`] >= 60) {
    return {
      sum: acc.sum + student[`grade`],
      count: acc.count + 1
    }
  } else {
    return acc; 
  }
 }, {sum: 0, count: 0});

 const averageGrade = totalSumOfAbove60.sum / totalSumOfAbove60.count;
 console.log(averageGrade);
})(); 

(() => {
  const students = [
    { name: "Liam", grade: 85 },
    { name: "Olivia", grade: 92 },
    { name: "Noah", grade: 76 },
    { name: "Emma", grade: 59 },
    { name: "Ava", grade: 48 },
    { name: "John", grade: 65 },
    { name: "Zoe", grade: 80 }
  ];
  
  const averageGrade = students.reduce((acc, student) => {
    if(student.name.endsWith(`a`) && student[`grade`] >= 50) {
      return {
        sum: acc.sum + student[`grade`],
        count: acc.count + 1
      }
    }  
      return acc;
  }, {sum: 0, count: 0}); // It is important that you consider how this object can be a very vital tool.
  // It is being used to calculate the average in this case but it does so with a level of scalability that is proper.
  // Please also note how the object is being used in the return statement.

  const result = averageGrade.sum / averageGrade.count;
  console.log(result);
})();

(() => {
  const students = [
    { name: "Liam", grade: 85 },
    { name: "Olivia", grade: 92 },
    { name: "Noah", grade: 76 },
    { name: "Emma", grade: 59 },
    { name: "Ava", grade: 48 },
    { name: "John", grade: 65 },
    { name: "Zoe", grade: 80 }
  ];

  const studentGrouping = students.reduce((acc, student) => {
    if(student[`grade`] >= 80) {
      acc.A = acc.A || [];
      acc.A.push(student[`name`]); 
    } else if (student[`grade`] >= 60 && student[`grade`] < 79) {
      acc.B = acc.B || [];
      acc.B.push(student[`name`]);
    } else {
      acc.F = acc.F || [];
      acc.F.push(student[`name`]);
    } 
      return acc; // You must always return the full accumulator (acc) no matter what happens inside the callback.
      // It is important to consider why this statement is important at this point.
      // It does not necessarily need to be in an else statement just to avoid any instance of confusion.
      // But it is an important statement to have 
  }, {});

  console.log(studentGrouping);
})();

(() => { // This code is not as efficient as it could be especially if I was to work on larger arrays but for now it works.
  const students = [
    { name: "Liam", grade: 85 },
    { name: "Olivia", grade: 92 },
    { name: "Noah", grade: 76 },
    { name: "Emma", grade: 59 },
    { name: "Ava", grade: 48 },
    { name: "John", grade: 65 },
    { name: "Zoe", grade: 80 }
  ];

  const studentGrouping = students.reduce((acc, student) => {
    if(student[`grade`] >= 80) {
      acc.A = acc.A || {names: [], count: 0}; // The || operator is a very important tool if you are going to avoid any instance of overwriting.
      // Remember how it works i.e it picks the first truthy value and so if you give JS clear instructions on what it should do, in this case, using the or operator, then things will be much better.
      acc.A.names.push(student[`name`]);
      acc.A.count++
    } else if(student[`grade`] >= 60 && student[`grade`] < 79) {
      acc.B = acc.B || {names: [], count: 0}; // It is important that you think about nested objects.
      // This is a simple illustration of how you create an object inside another object.
      // Remember that you can manipulate the values within an object so do not overthink it.
      acc.B.names.push(student[`name`]);
      acc.B.count++;
    } else {
      acc.F = acc.F || {names: [], count: 0};
      acc.F.names.push(student[`name`]);
      acc.F.count++;
    }
    return acc;
  }, {});

  console.log(studentGrouping);
})();

(() => {
  const employees = [
    { name: "Alice", salary: 120000 },
    { name: "Bob", salary: 75000 },
    { name: "Charlie", salary: 30000 },
    { name: "Diana", salary: 95000 },
    { name: "Eve", salary: 40000 },
    { name: "Frank", salary: 150000 }
  ];

  function getSalaryBracket(salary) {
    if (salary >= 100000) {
      return `High`;
    } else if(salary >= 50000 && salary < 100000) {
      return `Medium`;
    } else {
      return `Low`;
    }
  }

  const employeeGrouping = employees.reduce((acc, employee) => {
    const salaryBracket = getSalaryBracket(employee[`salary`]);

    acc[salaryBracket] = acc[salaryBracket] || {names: [], count:0};
    acc[salaryBracket].names.push(employee[`name`]);
    acc[salaryBracket].count++

    return acc; // DO NOT FORGET!
  }, {}); 
  
  console.log(employeeGrouping);
})();

(() => {
  const employees = [
    { name: "Alice", salary: 120000 },
    { name: "Bob", salary: 75000 },
    { name: "Charlie", salary: 30000 },
    { name: "Diana", salary: 95000 },
    { name: "Eve", salary: 40000 },
    { name: "Frank", salary: 150000 }
  ];

  const transformEmployees = employees.reduce((acc, employee) => {
    acc[employee[`name`]] = employee[`salary`];
    return acc;
  }, {});

  console.log(transformEmployees);
})();

(() => {
  const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "TV", category: "Electronics" },
    { name: "Shoes", category: "Clothing" },
    { name: "Shirt", category: "Clothing" },
    { name: "Fridge", category: "Appliances" },
    { name: "Oven", category: "Appliances" },
    { name: "Blender", category: "Appliances" }
  ];

  function getProductCategory(product) {
    if(product === `Electronics`) {
      return `Electronics`;
    } else if (product === `Clothing`) {
      return `Clothing`;
    } else {
      return `Appliances`;
    }
  }

  const productCategory = products.reduce((acc, product) => {
    const category = getProductCategory(product.category);

    acc[category] = acc[category] || {names: [], count: 0};
    acc[category].names.push(product.name);
    acc[category].count++;
    return acc;
  }, {});

  console.log(productCategory);
})();

(() => {
  const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "TV", category: "Electronics", price: 800 },
  { name: "Shoes", category: "Clothing", price: 60 },
  { name: "Shirt", category: "Clothing", price: 40 },
  { name: "Fridge", category: "Appliances", price: 1500 },
  { name: "Oven", category: "Appliances", price: 700 },
  { name: "Blender", category: "Appliances", price: 100 }
];

function getPriceRange(price) {
  if (price >= 1000) {
    return `Premium`;
  } else if(price >= 100 && price < 1000) {
    return `Midrange`;
  } else {
    return `Budget`;
  }
}

const categoryByPrice = products.reduce((acc, product) => {
  const priceCategory = getPriceRange(product.price);

  acc[priceCategory] = acc[priceCategory] || {names: [], count: 0};
  acc[priceCategory].names.push(product.name);
  acc[priceCategory].count++;
  return acc;
}, {});

console.log(categoryByPrice);
})();

(() => {
  const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "TV", category: "Electronics", price: 800 },
  { name: "Shoes", category: "Clothing", price: 60 },
  { name: "Shirt", category: "Clothing", price: 40 },
  { name: "Fridge", category: "Appliances", price: 1500 },
  { name: "Oven", category: "Appliances", price: 700 },
  { name: "Blender", category: "Appliances", price: 100 }
];

function getProductCategory(category) {
  if(category === `Electronics`) {
    return `Electronics`;
  } else if(category === `Clothing`) {
    return `Clothing`;
  } else {
    return `Appliances`;
  }
}

function getPriceRange(price) {
    if (price >= 1000) {
    return `Premium`;
  } else if(price >= 100 && price < 1000) {
    return `Midrange`;
  } else {
    return `Budget`;
  }
}

const generalProductCategory = products.reduce((acc, product) => {
  const productCategory = getProductCategory(product.category);
  const priceCategory = getPriceRange(product.price);
 
  acc[productCategory] = acc[productCategory] || {};
  acc[productCategory][priceCategory] = acc[productCategory][priceCategory] || {names: [], count: 0};

  acc[productCategory][priceCategory].names.push(product.name);
  acc[productCategory][priceCategory].count++;
  return acc;
}, {});

console.log(generalProductCategory);
})();

(() => {
  const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "TV", category: "Electronics", price: 800 },
  { name: "Shoes", category: "Clothing", price: 60 },
  { name: "Shirt", category: "Clothing", price: 40 },
  { name: "Fridge", category: "Appliances", price: 1500 },
  { name: "Oven", category: "Appliances", price: 700 },
  { name: "Blender", category: "Appliances", price: 100 }
];

function getProductCategory(category) {
  if(category === `Electronics`) {
    return `Electronics`;
  } else if(category === `Clothing`) {
    return `Clothing`;
  } else {
    return `Appliances`;
  }
}

function getPriceRange(price) {
  if (price >= 1000) {
    return `Premium`;
  } else if(price >= 100 && price < 1000) {
    return `Midrange`;
  } else {
    return `Budget`;
  }
}

const generalProductCategory = products.reduce((acc, product) => {
  const productCategory = getProductCategory(product.category);
  const priceCategory = getPriceRange(product.price);
  
  acc[productCategory] = acc[productCategory] || {};
  acc[productCategory][priceCategory] = acc[productCategory][priceCategory] || {names: [], count: 0, totalPrice: 0};
  acc[productCategory][priceCategory].names.push(product.name);
  acc[productCategory][priceCategory].count++;
  acc[productCategory][priceCategory].totalPrice += product.price;
  return acc;
}, {});

console.log(generalProductCategory);
})();

(() => {
  const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "TV", category: "Electronics", price: 800 },
  { name: "Shoes", category: "Clothing", price: 60 },
  { name: "Shirt", category: "Clothing", price: 40 },
  { name: "Fridge", category: "Appliances", price: 1500 },
  { name: "Oven", category: "Appliances", price: 700 },
  { name: "Blender", category: "Appliances", price: 100 }
];

function getProductCategory(category) {
  if(category === `Electronics`) {
    return `Electronics`;
  } else if(category === `Clothing`) {
    return `Clothing`;
  } else {
    return `Appliances`;
  }
}

function getPriceRange(price) {
  if (price >= 1000) {
    return `Premium`;
  } else if(price >= 100 && price < 1000) {
    return `Midrange`;
  } else {
    return `Budget`;
  }
}

const generalProductCategory = products.reduce((acc, product) => {
  const productCategory = getProductCategory(product.category);
  const priceCategory = getPriceRange(product.price);
  
  acc[productCategory] = acc[productCategory] || {};
  acc[productCategory][priceCategory] = acc[productCategory][priceCategory] || {names: [], count: 0, totalPrice: 0, averagePrice: 0};
  acc[productCategory][priceCategory].names.push(product.name);
  acc[productCategory][priceCategory].count++;
  acc[productCategory][priceCategory].totalPrice += product.price;
  acc[productCategory][priceCategory].averagePrice = (acc[productCategory][priceCategory].totalPrice) / (acc[productCategory][priceCategory].count);
  return acc;
}, {});

console.log(generalProductCategory);
})();

(() => {
  const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "TV", category: "Electronics", price: 800 },
  { name: "Shoes", category: "Clothing", price: 60 },
  { name: "Shirt", category: "Clothing", price: 40 },
  { name: "Fridge", category: "Appliances", price: 1500 },
  { name: "Oven", category: "Appliances", price: 700 },
  { name: "Blender", category: "Appliances", price: 100 }
];

function getProductCategory(category) {
  if(category === `Electronics`) {
    return `Electronics`;
  } else if(category === `Clothing`) {
    return `Clothing`;
  } else {
    return `Appliances`;
  }
}

function getPriceRange(price) {
  if (price >= 1000) {
    return `Premium`;
  } else if(price >= 100 && price < 1000) {
    return `Midrange`;
  } else {
    return `Budget`;
  }
}

const generalProductCategory = products.reduce((acc, product) => {
  const productCategory = getProductCategory(product.category);
  const priceCategory = getPriceRange(product.price);
  
  acc[productCategory] = acc[productCategory] || {};
  acc[productCategory][priceCategory] = acc[productCategory][priceCategory] || {names: [], count: 0, totalPrice: 0, averagePrice: 0,};
  acc[productCategory][priceCategory].names.push(product.name);
  acc[productCategory][priceCategory].count++;
  acc[productCategory][priceCategory].totalPrice += product.price;
  acc[productCategory][priceCategory].averagePrice = (acc[productCategory][priceCategory].totalPrice) / (acc[productCategory][priceCategory].count);

  if (!acc[productCategory][priceCategory].mostExpensive || product.price > acc[productCategory][priceCategory].mostExpensive.price) { // This statement is worth considering a lot.
  acc[productCategory][priceCategory].mostExpensive = { name: product.name, price: product.price };
}

  return acc;
}, {});

console.log(generalProductCategory);
})();

(() => {
  const products = [
  { name: "Laptop", category: "Electronics", price: 1200, stock: 25 },
  { name: "TV", category: "Electronics", price: 800, stock: 5 },
  { name: "Shoes", category: "Clothing", price: 60, stock: 0 },
  { name: "Shirt", category: "Clothing", price: 40, stock: 18 },
  { name: "Fridge", category: "Appliances", price: 1500, stock: 8 },
  { name: "Oven", category: "Appliances", price: 700, stock: 3 },
  { name: "Blender", category: "Appliances", price: 100, stock: 0 }
];

function getProductCategory(category) {
  if(category === `Electronics`) {
    return `Electronics`;
  } else if(category === `Clothing`) {
    return `Clothing`;
  } else {
    return `Appliances`;
  }
}

function getStockLevel(stock) {
  if(stock > 10) {
    return `In Stock`;
  } else if(stock >= 1 && stock <= 10) {
    return `Low Stock`;
  } else {
    return `Out of Stock`;
  }
}

const generalProductCategory = products.reduce((acc, product) => {
  const productCategory = getProductCategory(product.category);
  const stockCategory = getStockLevel(product.stock);

  acc[productCategory] = acc[productCategory] || {};
  acc[productCategory][stockCategory] = acc[productCategory][stockCategory] || {names: [], count: 0};
  acc[productCategory][stockCategory].names.push(product.name);
  acc[productCategory][stockCategory].count++;
  return acc;
}, {});

console.log(generalProductCategory);
})();

(() => { // Object.entries().
// Object.entries(obj) converts an object into an array of [key, value] pairs.
// It lets you loop over object keys and values at the same time.
  const products = [
  { name: "Laptop", category: "Electronics", price: 1200, stock: 25 },
  { name: "TV", category: "Electronics", price: 800, stock: 5 },
  { name: "Shoes", category: "Clothing", price: 60, stock: 0 },
  { name: "Shirt", category: "Clothing", price: 40, stock: 18 },
  { name: "Fridge", category: "Appliances", price: 1500, stock: 8 },
  { name: "Oven", category: "Appliances", price: 700, stock: 3 },
  { name: "Blender", category: "Appliances", price: 100, stock: 0 }
];

function getProductCategory(category) {
  if(category === `Electronics`) {
    return `Electronics`;
  } else if(category === `Clothing`) {
    return `Clothing`;
  } else {
    return `Appliances`;
  }
}

function getStockLevel(stock) {
  if(stock > 10) {
    return `In Stock`;
  } else if(stock >= 1 && stock <= 10) {
    return `Low Stock`;
  } else {
    return `Out of Stock`;
  }
}

const generalProductCategory = products.reduce((acc, product) => {
  const productCategory = getProductCategory(product.category);
  const stockCategory = getStockLevel(product.stock);

  acc[productCategory] = acc[productCategory] || {};
  acc[productCategory][stockCategory] = acc[productCategory][stockCategory] || {names: [], count: 0};
  acc[productCategory][stockCategory].names.push(product.name);
  acc[productCategory][stockCategory].count++;
  return acc;
}, {});

console.log(generalProductCategory);

for(const [category, stockData] of Object.entries(generalProductCategory)) {
    console.log(`Category: ${category}`);
    console.log(`stock Data: ${category.stockData}`);
for(const [stockLevel, stockInfo] of Object.entries(stockData)) {
  console.log(`Stock Level: ${stockLevel}`);
  console.log(`Total Number of Products: ${stockInfo.count}`);
  console.log(`Name: ${stockInfo.names}`);
}
}
})();

(() => { // Array and Object destructuring
  const [banana, monkey] = ["color", "blue"]; // Note how array destructuring works here.
  // This is different from object destructuring because with object destructuring, there is a strictness involved with regard to the variable names.
  // If you think about this array as the result of a destructuring operation using Object.entries(), you see how you can utilize array destructuring to call a particular value.

console.log(banana);   // "color"
console.log(monkey); // "blue"

const item = { color: "blue", size: "medium" };

// In contrast, with regard to Object destructuring, you must use the actual key names:
const { color, size } = item;

console.log(color); // "blue"
console.log(size);  // "medium"

})();

(() => {
  console.log(`i'm here`);
  const customers = [ // It is important to consider the power of arrays and Objects in this block. 
  {
    name: "Alice",
    orders: [
      { product: "Laptop", quantity: 1, unitPrice: 1200 },
      { product: "Mouse", quantity: 2, unitPrice: 25 }
    ]
  },
  {
    name: "Bob",
    orders: [
      { product: "TV", quantity: 1, unitPrice: 800 },
      { product: "Headphones", quantity: 3, unitPrice: 100 }
    ]
  },
  {
    name: "Charlie",
    orders: [
      { product: "Shoes", quantity: 2, unitPrice: 60 }
    ]
  }
];

customers.forEach((object) => {
  const customerDisplay = object.orders.reduce((acc, order) => {
    acc.name = object.name;
    acc.totalItemsOrdered = acc.totalItemsOrdered || 0;
    const quantity = acc.totalItemsOrdered += order.quantity;

    acc.totalSpent = acc.totalSpent || 0;
    const unitPrice = acc.totalSpent += order.unitPrice;

    acc.totalSpending = acc.totalSpending || 0;
    acc.totalSpending = quantity * unitPrice;

    acc.highestOrderValue = acc.highestOrderValue || 0;
    if(order.unitPrice > acc.highestOrderValue) acc.highestOrderValue = order.unitPrice;
    return acc;
  }, {});

  console.log(`Name: ${customerDisplay.name}`);
  console.log(`Total Spending: ${customerDisplay.totalSpending}`);
  console.log(`Total Items Ordered: ${customerDisplay.totalItemsOrdered}`);
  console.log(`Highest Order Value: ${customerDisplay.highestOrderValue}`);
});
})();