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

(() => { 
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

(() => { 
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

(() => { 
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
        // for...in loops iterate over the key-value pair of an object while for...of loops only iterate over the value of an iterable object like arrays, nodeLists and Map.
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

(() => { 
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

(() => { 
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

(() => {
  const sales = [
  { name: "Laptop", unitsSold: 4, pricePerUnit: 1200 },
  { name: "Mouse", unitsSold: 10, pricePerUnit: 25 },
  { name: "TV", unitsSold: 3, pricePerUnit: 800 },
  { name: "Shoes", unitsSold: 6, pricePerUnit: 60 }
];

const salesDisplay = sales.reduce((acc, sale) => {
  const revenue = (sale.unitsSold * sale.pricePerUnit);
  acc.productSummaries.push({name: sale.name, saleRevenue: revenue});

  acc.totalRevenue += revenue;
  return acc;
}, { productSummaries: [], totalRevenue: 0 });

console.log(salesDisplay);
})();

(() => {
  const orders = [
  { product: "Laptop", quantity: 1, unitPrice: 1200 },
  { product: "Mouse", quantity: 2, unitPrice: 25 },
  { product: "Laptop", quantity: 1, unitPrice: 1200 },
  { product: "TV", quantity: 1, unitPrice: 800 },
  { product: "Mouse", quantity: 1, unitPrice: 25 }
];

function getOrderProducts (product) {
  if (product === `Laptop`) {
    return `Laptop`;
  } else if (product === `Mouse`) {
    return `Mouse`;
  } else {
    return `TV`;
  }
}

const orderCategory = orders.reduce((acc, order) => {
  const productCategory = getOrderProducts(order.product);

  acc[productCategory] = acc[productCategory] || {};
  acc[productCategory].totalUnits = acc[productCategory].totalUnits || 0;
  acc[productCategory].totalUnits += order.quantity;

  acc[productCategory].totalRevenue = acc[productCategory].totalRevenue || 0;
  acc[productCategory].totalRevenue += order.quantity * order.unitPrice;
  return acc;
}, {});

console.log(orderCategory);
})();

(() => {
  const orders = [
  { product: "Laptop", quantity: 1, unitPrice: 1200 },
  { product: "Mouse", quantity: 2, unitPrice: 25 },
  { product: "Laptop", quantity: 1, unitPrice: 1200 },
  { product: "TV", quantity: 1, unitPrice: 800 },
  { product: "Mouse", quantity: 1, unitPrice: 25 },
  { product: "Mouse", quantity: 3, unitPrice: 25 }
];

const orderCategory = orders.reduce((acc, order) => {
  const productCategory = order.product;

  acc[productCategory] = acc[productCategory] || {ordersPlaced: 0, quantity: 0, totalRevenue: 0};
  acc[productCategory].ordersPlaced ++;
  acc[productCategory].quantity += order.quantity;
  acc[productCategory].totalRevenue += order.quantity * order.unitPrice;
  return acc;
}, {});

console.log(orderCategory);
})();

(() => {
  const orders = [
  { product: "Laptop", quantity: 1 },
  { product: "Mouse", quantity: 2 },
  { product: "Laptop", quantity: 3 },
  { product: "TV", quantity: 1 },
  { product: "Mouse", quantity: 1 },
  { product: "Mouse", quantity: 2 }
];

const orderCategory = orders.reduce((acc, order) => {
  const productCategory = order.product;

  acc[productCategory] = acc[productCategory] || { ordersPlaced: 0, totalQuantity: 0, averageQuantityPerOrder: 0};
  acc[productCategory].totalQuantity += order.quantity;
  acc[productCategory].ordersPlaced++
  acc[productCategory].averageQuantityPerOrder = Number((acc[productCategory].totalQuantity / acc[productCategory].ordersPlaced).toFixed(2)); // toFixed(2) is used to round of the number to 2 decimal places and this returns a string. To ensure that the number is a number, you use Number().
  return acc;
}, {});

console.log(orderCategory);
})();

(() => {
  const orders = [
  { product: "Laptop", quantity: 1 },
  { product: "Mouse", quantity: 2 },
  { product: "Laptop", quantity: 3 },
  { product: "TV", quantity: 1 },
  { product: "Mouse", quantity: 1 },
  { product: "Mouse", quantity: 5 },
  { product: "TV", quantity: 2 },
];

const orderDisplay = orders.reduce((acc, order) => {
  const productCategory = order.product;
  
  acc[productCategory] = acc[productCategory] || {totalOrders: 0, totalQuantity: 0, averageQuantity: 0, minQuantity: Infinity, maxQuantity: -Infinity};
  acc[productCategory].totalOrders ++;
  acc[productCategory].totalQuantity += order.quantity;
  acc[productCategory].averageQuantity = Number((acc[productCategory].totalQuantity / acc[productCategory].totalOrders).toFixed(2));
  acc[productCategory].minQuantity = Math.min(acc[productCategory].minQuantity, order.quantity);
  acc[productCategory].maxQuantity = Math.max(acc[productCategory].maxQuantity, order.quantity);
  return acc;

  // The condition !acc[productCategory].minQuantity above checks whether this condition is not a valid truthy value, so this will return true, if a value is falsy.
  // This has the potential to ruin an operation, and the most fireproof way around this is to use Infinity and -Infinity and the methods Math.min() and Math.max().
  // Math.min() returns the lowest number among the numbers given and if you were to compare a number with infinity, the other number would be the lowest.
  // The same is true for the Math.max() method.
}, {});

console.log(orderDisplay);
})();

(() => {
  const orders = [
  { product: "Laptop", quantity: 1 },
  { product: "Mouse", quantity: 2 },
  { product: "Laptop", quantity: 3 },
  { product: "TV", quantity: 1 },
  { product: "Mouse", quantity: 1 },
  { product: "Mouse", quantity: 5 },
  { product: "TV", quantity: 2 },
  { product: "Laptop", quantity: 1 }
];

const orderDisplay = orders.reduce((acc, order) => {
  const productCategory = order.product;

  acc[productCategory] = acc[productCategory] || {totalOrders: 0, totalQuantity: 0, averageQuantity: 0, minQuantity: Infinity, maxQuantity: -Infinity, uniqueQuantities: []};
  acc[productCategory].totalOrders ++;
  acc[productCategory].totalQuantity += order.quantity;
  acc[productCategory].averageQuantity = Number((acc[productCategory].totalQuantity / acc[productCategory].totalOrders).toFixed(2));
  acc[productCategory].minQuantity = Math.min(acc[productCategory].minQuantity, order.quantity);
  acc[productCategory].maxQuantity = Math.max(acc[productCategory].maxQuantity, order.quantity);
  if(!acc[productCategory].uniqueQuantities.includes(order.quantity)) {
    acc[productCategory].uniqueQuantities.push(order.quantity);
  } // A faster way to write conditional statements...!acc[productCategory].uniqueQuantities.includes(order.quantity) ? acc[productCategory].uniqueQuantities.push(order.quantity) : [];
  return acc;
}, {});

console.log(orderDisplay);
})();

(() => {
  const orders = [
  { product: "Laptop", quantity: 1 },
  { product: "Mouse", quantity: 2 },
  { product: "Laptop", quantity: 3 },
  { product: "TV", quantity: 1 },
  { product: "Mouse", quantity: 1 },
  { product: "Mouse", quantity: 5 },
  { product: "TV", quantity: 2 },
  { product: "Laptop", quantity: 1 }
];

const orderDisplay = orders.reduce((acc, order) => {
  const productCategory = order.product;

  acc[productCategory] = acc[productCategory] || {totalOrders: 0, totalQuantity: 0, quantityFrequency: {}};
  acc[productCategory].totalOrders ++;
  acc[productCategory].totalQuantity += order.quantity;
  acc[productCategory].quantityFrequency[order.quantity] = (acc[productCategory].quantityFrequency[order.quantity] || 0) + 1; // Why this logic works: What I am trying to do is count how many times a number/the quatity appears or in other words, I am trying to track the frequency of the quantity.
  // To do that, I need to manipulate the values in such a manner that the count goes up each time JS gets to a certain quantity.
  // The above statement creates the property (order.quantity) and just like the other operations where have to first initialize a statement for future purposes(to avoid overwriting), we need to do the same here, although now it does not necessarily play the 'avoid overwrite' game. 
  // Now, what we are trying to do is to have the or(||) operator pick the last value i.e 0 because in the first iteration, undefined exists, and where two falsy values exist, or(||) picks the last value.
  // This is then added to 1 and so the second time JS comes across 1, it will see that there exists a value i.e 1 and the logic will make the count increase by 1. 
  return acc;
}, {});

console.log(orderDisplay);
})();

(() => {
const orders = [
  { product: "Laptop", quantity: 1 },
  { product: "Mouse", quantity: 2 },
  { product: "Laptop", quantity: 3 },
  { product: "TV", quantity: 1 },
  { product: "Mouse", quantity: 2 },
  { product: "Mouse", quantity: 2 },
  { product: "TV", quantity: 2 },
  { product: "Laptop", quantity: 1 }
];

const orderDisplay = orders.reduce((acc, order) => {
  const productCategory = order.product;
  
  acc[productCategory] = acc[productCategory] || {totalOrders: 0, totalQuantity: 0, quantityFrequency: {}};
  acc[productCategory].totalOrders ++;
  acc[productCategory].totalQuantity += order.quantity;
  acc[productCategory].quantityFrequency[order.quantity] = (acc[productCategory].quantityFrequency[order.quantity] || 0) + 1;
  return acc;
}, {});

const result = Object.entries(orderDisplay).filter((array) => { // Remember this: Object.entries is a method that is used to convert an object into an array.
  // This is mighty important for when to use array methods over an object but since you cannot use array methods in objects, you need to convert the object into an array.
  // For example, in the following operation...
  // const summary = {
  // Apple: { totalOrders: 3, totalQuantity: 8 },
  // Banana: { totalOrders: 2, totalQuantity: 5 }
  // };

  // console.log(Object.entries(summary));... the output will be an array i.e...
  // [
  //  ["Apple", { totalOrders: 3, totalQuantity: 8 }],
  //  ["Banana", { totalOrders: 2, totalQuantity: 5 }]
  // ]


  for (const value in array[1].quantityFrequency) { // Again, for...in goes over the property names i.e keys of an object.
    // What this means is that if an object has 5 properties it will go through the different properties and will output the keys of the property.
    // Take the following example...
    // const obj = { a: 1, b: 2 };

    // for (const key in obj) {
    // console.log(key); // 'a', then 'b'
    // console.log(obj[key]); // 1, then 2
    // }...what will happen here is that the variable that you use inside the loop represents the key of each key-value pair.
    // But notice that if you wanted to log the actual values, you'd need your Object and then use the variable for the key that you used.

    // It is mainly used with obejects but can also be used with anything that has the key-value pair.
    // for...of is meant to be used with iterable objects, so arrays or strings or map
    if(array[1].quantityFrequency[value] >= 3) return array;
  }
});
console.log(Object.fromEntries(result));
console.log(orderDisplay);
})();

(() => {  // This is a refresher because I took a long break from writing code
  const fruits = [
  { name: "Apple", quantity: 2 },
  { name: "Banana", quantity: 3 },
  { name: "Apple", quantity: 1 },
  { name: "Orange", quantity: 1 },
  { name: "Banana", quantity: 2 },
  { name: "Apple", quantity: 5 }
];

const fruitCategories = fruits.reduce((acc, fruit) => {
  const fruitCategory = fruit.name;

  acc[fruitCategory] = acc[fruitCategory] || {totalOrders: 0, totalQuantity: 0};
  acc[fruitCategory].totalOrders ++;
  acc[fruitCategory].totalQuantity  += fruit.quantity;
  return acc;
}, {});

console.log(fruitCategories);
})();

(() => {
  const bookOrders = [
  { title: "1984", quantity: 2 },
  { title: "Brave New World", quantity: 1 },
  { title: "1984", quantity: 2 },
  { title: "Fahrenheit 451", quantity: 3 },
  { title: "1984", quantity: 2 },
  { title: "Brave New World", quantity: 2 },
  { title: "Fahrenheit 451", quantity: 3 },
  { title: "Fahrenheit 451", quantity: 3 },
];

const bookCategorization = bookOrders.reduce((acc, book) => {
  const bookTitle = book.title;

  acc[bookTitle] = acc[bookTitle] || {totalOrders: 0, totalQuantity: 0, quantityFrequency: {}};
  acc[bookTitle].totalOrders ++;
  acc[bookTitle].totalQuantity += book.quantity;
  acc[bookTitle].quantityFrequency[book.quantity] = (acc[book.title].quantityFrequency[book.quantity] || 0) + 1;
  return acc;
}, {});

console.log(bookCategorization);
const bookResults = Object.entries(bookCategorization).filter(([_, bookData]) => {
  for(const quantity in bookData.quantityFrequency) { // The underscore makes it possible to ignore the first item in the array 
    if (bookData.quantityFrequency[quantity] >= 3) return true;  // obj(key)
  }
});
console.log(Object.fromEntries(bookResults));  // Object.fromEntries is the opposite of Object.entries because it converts an array into an Object.
})();

(() => {
  const productOrders = [
  { product: "Book", quantity: 1 },
  { product: "Pen", quantity: 2 },
  { product: "Book", quantity: 1 },
  { product: "Notebook", quantity: 3 },
  { product: "Pen", quantity: 2 },
  { product: "Book", quantity: 2 },
  { product: "Pen", quantity: 2 },
  { product: "Notebook", quantity: 1 },
];

const productDisplay = productOrders.reduce((acc, product) => {
  const productCategory = product.product;

  acc[productCategory] = acc[productCategory] || {totalOrders: 0, totalQuantity: 0, quantityFrequency: {}};
  acc[productCategory].totalOrders ++;
  acc[productCategory].totalQuantity += product.quantity;
  acc[productCategory].quantityFrequency[product.quantity] = (acc[productCategory].quantityFrequency[product.quantity] || 0) + 1;
  return acc;
}, {});

const productResults = Object.entries(productDisplay).filter(([product, data]) => { // This constitutes array destructuring where we use variable to represent items in an array.
  // product represents the different product items in the different arrays and the data represents the  Object.
  return Object.values(data.quantityFrequency).some((quantityCount) => { // This operation constitutes another way to filter based on frequency other than the operation above.
    // Object.values converts an Object into an array of values and .some is an array method that works together with the condition that would be written in the block.
    // It returns true or false depending on whether the condition is met or not met.
    return quantityCount >= 3;
  })
});
console.log(Object.fromEntries(productResults));
})();

(() => {
  const customerOrders = [
  { customer: "Alice", product: "Book" },
  { customer: "Bob", product: "Pen" },
  { customer: "Alice", product: "Notebook" },
  { customer: "Alice", product: "Pen" },
  { customer: "Bob", product: "Notebook" },
  { customer: "Charlie", product: "Book" },
  { customer: "Bob", product: "Book" },
];

const orderCategorization = customerOrders.reduce((acc, customer) => {
  const customerName = customer.customer;

  acc[customerName] = acc[customerName] || {totalOrders: 0, products: []};
  acc[customerName].totalOrders ++;
  if (!acc[customerName].products.includes(customer.product))  // It is important that you understand what exactly includes is doing in this part of the statement.
  // If we take a customer, say Alice to illustrate what's going on...Alice could have ordered a pen 3 times, and so, if we asked products
  // to push the products that she's ordered, pen will appear 3 times.
  // In the context of the if statement, what's happening is that JS will be iterating through each customer and will be pushing the products to the array.
  // When it comes across this statement whose core is founded on the includes method, it will only record the product once.
  // Uniqueness is used in this context and not being special or anything like that.
    acc[customerName].products.push(customer.product);
  return acc;
}, {});

console.log(orderCategorization);
})();

(() => {
  const productOrders = [
  { customer: "Alice", product: "Book", quantity: 2 },
  { customer: "Bob", product: "Pen", quantity: 5 },
  { customer: "Alice", product: "Notebook", quantity: 1 },
  { customer: "Alice", product: "Pen", quantity: 3 },
  { customer: "Bob", product: "Notebook", quantity: 2 },
  { customer: "Charlie", product: "Book", quantity: 4 },
  { customer: "Bob", product: "Book", quantity: 6 },
];

const customerGrouping = productOrders.reduce((acc, customer) => {
  const customerName = customer.customer;

  acc[customerName] = acc[customerName] || {totalOrders: 0, totalQuantity: 0, uniqueProducts: [], quantityFrequency: {}};
  acc[customerName].totalOrders ++;
  acc[customerName].totalQuantity += customer.quantity;
  if (!acc[customerName].uniqueProducts.includes(customer.product)) 
    acc[customerName].uniqueProducts.push(customer.product);
  acc[customerName].quantityFrequency[customer.quantity] = (acc[customerName].quantityFrequency[customer.quantity] || 0) + 1;
  return acc;
}, {});

console.log(customerGrouping);
const finalCustomerGrouping = Object.entries(customerGrouping).filter(([names, data]) => {
  return Object.values(data.quantityFrequency).every((quantity) => {
    return quantity === 1;
  }) && data.totalQuantity >= 3;
});

console.log(Object.fromEntries(finalCustomerGrouping));
})();

(() => {
  const productOrders = [
  { customer: "Alice", product: "Book", quantity: 2 },
  { customer: "Bob", product: "Pen", quantity: 5 },
  { customer: "Alice", product: "Notebook", quantity: 1 },
  { customer: "Alice", product: "Pen", quantity: 3 },
  { customer: "Bob", product: "Notebook", quantity: 2 },
  { customer: "Charlie", product: "Book", quantity: 4 },
  { customer: "Bob", product: "Book", quantity: 6 },
];

const customerGrouping = productOrders.reduce((acc, customer) => {
  const customerName = customer.customer;

  acc[customerName] = acc[customerName] || {totalQuantity: 0, uniqueProducts: [], quantityFrequency: {}, productFrequency: {}};
  acc[customerName].totalQuantity += customer.quantity;
  if (!acc[customerName].uniqueProducts.includes(customer.product))
    acc[customerName].uniqueProducts.push(customer.product);
  acc[customerName].quantityFrequency[customer.quantity] = (acc[customerName].quantityFrequency[customer.quantity] || 0) + 1;
  acc[customerName].productFrequency[customer.product] = (acc[customerName].productFrequency[customer.product] || 0) + 1;
  return acc;
}, {});

console.log(customerGrouping);
const finalCustomerGrouping = Object.entries(customerGrouping).filter(([names, data]) => {
  return data.totalQuantity >= 5 && Object.values(data.quantityFrequency).every((count) => count === 1) && 
  Object.values(data.productFrequency).every((count) => count === 1);
});
console.log(finalCustomerGrouping);
})();

(() => {  // Here we introduce Map as another tool/structure that supports dynamic keys
  const transactions = [
  { id: 1, customer: "Alice", amount: 25 },
  { id: 2, customer: "Bob", amount: 40 },
  { id: 3, customer: "Alice", amount: 35 },
  { id: 4, customer: "Charlie", amount: 20 },
  { id: 5, customer: "Bob", amount: 60 },
  { id: 6, customer: "Alice", amount: 40 },
];

const customerGrouping = transactions.reduce((acc, transaction) => {
  const customerName = transaction.customer;
  const savedValues = acc.get(customerName);

  if (!savedValues) {
    acc.set(customerName, {customer: transaction.customer, totalAmount: transaction.amount, totalTransactions: 1, averageAmount: transaction.amount});
  } else {
    savedValues.totalAmount += transaction.amount;
    savedValues.totalTransactions ++;
    savedValues.averageAmount = savedValues.totalAmount / savedValues.totalTransactions;
  }
  return acc;
}, new Map());
console.log([...customerGrouping.values()].sort((a, b) => b.totalAmount - a.totalAmount)); // Notice that a and b in this case are the objects 
// after conversion to the array.
// It is also worth considering that .values() is a method of a Map and not an array. If you used .values() on an array, you'll not get the desired result.
})();

(() => {
  const transactions = [
  { id: 1, customer: "Alice", amount: 25 },
  { id: 2, customer: "Bob", amount: 40 },
  { id: 3, customer: "Alice", amount: 35 },
  { id: 4, customer: "Charlie", amount: 20 },
  { id: 5, customer: "Bob", amount: 60 },
  { id: 6, customer: "Alice", amount: 40 },
];

const customerGrouping = transactions.reduce((acc, transaction) => {
  const customerName = transaction.customer;
  const savedValues = acc.get(customerName);

  if (!savedValues) {
    acc.set(customerName, {customer: transaction.customer, totalAmount: transaction.amount, totalTransactions: 1, averageAmount: transaction.amount});
  } else {
    savedValues.totalAmount += transaction.amount;
    savedValues.totalTransactions ++;
    savedValues.averageAmount = + /* or parseFloat */(savedValues.totalAmount / savedValues.totalTransactions).toFixed(2);
  }
  return acc;
}, new Map());
console.log(customerGrouping.values());  // This is meant to show you how .values() works in this case.
// One of the better ways to do this when you have an array, is to map over the array and condition the logic to return the data.
// This is where Destructuring becomes important. As an example, look at the operation below.

const finalCustomerGrouping = [...customerGrouping].filter(([_, data]) => {
  return data.totalTransactions >= 3;
});
console.log(finalCustomerGrouping.map(([_, data]) => {
  return data;
}).sort((a, b) => b.averageAmount - a.averageAmount)); 
})();

(() => {
  const orders = [
  { id: 1, customer: "Alice", product: "Book", amount: 30 },
  { id: 2, customer: "Bob", product: "Pen", amount: 5 },
  { id: 3, customer: "Alice", product: "Pen", amount: 10 },
  { id: 4, customer: "Alice", product: "Notebook", amount: 25 },
  { id: 5, customer: "Bob", product: "Book", amount: 15 },
  { id: 6, customer: "Charlie", product: "Notebook", amount: 20 },
  { id: 7, customer: "Alice", product: "Pen", amount: 5 },
  { id: 8, customer: "Bob", product: "Notebook", amount: 10 },
  { id: 9, customer: "Alice", product: "Book", amount: 20 },
];

const orderGrouping = orders.reduce((acc, order) => {
  const customerName = order.customer;
  const savedOrders = acc.get(customerName);

  if (!savedOrders) {
    acc.set(customerName, {customer: order.customer, totalAmount: order.amount, totalOrders: 1, productFrequency: {[order.product]: 1}});
  } else {
    savedOrders.totalAmount += order.amount;
    savedOrders.totalOrders ++;
    savedOrders.productFrequency[order.product] = (savedOrders.productFrequency[order.product] || 0) + 1;
  }
  return acc;
}, new Map())
// It is at this point i'd like you to consider a few things. At this point it should be clear what reduce does.
// You'll notice that it can with objects as well as numbers, but for now let's focus on the different objects.
// Reduce works with whatever object you want to accumulate your data to; it could be an array, an Object or as with the above
// examples, a Map. This is where your data is reduced to. What this means is that this data can actually be manipulated after reduction.
// You should not necessarily limit your thoughts to other methods for example, but you can introduce new properties in these objects.
// This is the idea of mutation, at least fundamentally.
// The idea of mutation comes from considering how Objects work; they are reference types and if this seems confusing, you should consider the opposite...
// i.e copy-by-value. The way this works is that where you have two variables, a copy-by-value literally creates a new copy of an 
// initial value that was passed to the new variable as a variable. So say you store a number 10 to the variable a...
// let a = 10;
// If you create a new variable b to store the variable a i.e let b = a; and change b i.e b = 20; b will log 20 while a will log 10.
// With reference types, it's a bit different. Here, if we were to change b following the above example, a will also be changed. 
// This will mostly happen with Objects, so...
// let a = {name: `john`};
// let b = a;
// b.name = `jack`;
// console.log(a)...{name: `jack`};
// This aspect makes objects reference types and the change is mutation because you've changed a new variable that was referencing the original variable.
// From the ongoing, it means that orderGrouping can be affected outside the reduce method.

for (const [customer, data] of orderGrouping) { // This is the most important loop in this operation, because as you'll see
  // It is the loop that causes a mutation to occur. This upper loop is also affected by another loop.
  let maxCount = 0;  // The variable can be anything, but we use maxCount because it is in line to what we are trying to achieve.
  let mostFrequent = null;
  for(const [product, count] of Object.entries(data.productFrequency)) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequent = product;
    }
  }
  data.mostFrequentProduct = mostFrequent;
}  // It is important to consider that null is the best data type to use here because of what it communicates.
// 0 would be used especially with numbers and an empty string would 
console.log(orderGrouping.values());

const finalOrderGrouping = [...orderGrouping].filter(([_, data]) => {
  return data.totalOrders >= 3;
});
console.log(finalOrderGrouping.map(([_, data]) => data).sort((a, b) => b.totalAmount - a.totalAmount));
})();

(() => {
  const purchases = [
  { id: 1, customer: "Alice", category: "Books", amount: 25 },
  { id: 2, customer: "Bob", category: "Electronics", amount: 100 },
  { id: 3, customer: "Alice", category: "Books", amount: 40 },
  { id: 4, customer: "Charlie", category: "Electronics", amount: 200 },
  { id: 5, customer: "Alice", category: "Groceries", amount: 15 },
  { id: 6, customer: "Bob", category: "Books", amount: 30 },
  { id: 7, customer: "Charlie", category: "Groceries", amount: 50 },
  { id: 8, customer: "Alice", category: "Electronics", amount: 60 },
  { id: 9, customer: "Charlie", category: "Books", amount: 20 },
  { id: 10, customer: "Bob", category: "Electronics", amount: 150 },
];

const customerGrouping = purchases.reduce((acc, purchase) => {
  const customerName = purchase.customer;
  const categoryName = purchase.category;
  const savedPurchases = acc.get(customerName);

  if (!savedPurchases) {
    acc.set(customerName, {
      customer: purchase.customer, 
      totalAmount: purchase.amount, 
      totalSpendPerCategory: {[categoryName]: purchase.amount}, 
      categoryFrequency: {[purchase.category]: 1}
    });
  } else {
    savedPurchases.totalAmount += purchase.amount;
    savedPurchases.totalSpendPerCategory[categoryName]= (savedPurchases.totalSpendPerCategory[categoryName] || 0) + purchase.amount;
    savedPurchases.categoryFrequency[purchase.category] = (savedPurchases.categoryFrequency[purchase.category] || 0) + 1;
  }
  return acc;
}, new Map());

for(const [_, data] of customerGrouping) {
  let maxAmount = 0;
  let topCategory = null;
  for (const [category, amount] of Object.entries(data.totalSpendPerCategory)) {
    if (amount > maxAmount) {
      maxAmount = amount;
      topCategory = category; 
    }
  }
  data.mostSpentCategory = topCategory;
}

console.log([...customerGrouping.values()].sort((a, b) => b.totalAmount - a.totalAmount));
})();

(() => {
  const purchases = [
  { id: 1, customer: "Alice", category: "Books", product: "Fiction", amount: 25 },
  { id: 2, customer: "Bob", category: "Electronics", product: "Phone", amount: 100 },
  { id: 3, customer: "Alice", category: "Books", product: "Non-Fiction", amount: 40 },
  { id: 4, customer: "Alice", category: "Books", product: "Fiction", amount: 30 },
  { id: 5, customer: "Charlie", category: "Groceries", product: "Fruits", amount: 50 },
  { id: 6, customer: "Bob", category: "Electronics", product: "Headphones", amount: 60 },
  { id: 7, customer: "Alice", category: "Electronics", product: "Phone", amount: 200 },
  { id: 8, customer: "Charlie", category: "Books", product: "Fiction", amount: 20 },
  { id: 9, customer: "Charlie", category: "Groceries", product: "Vegetables", amount: 35 },
  { id: 10, customer: "Bob", category: "Books", product: "Comics", amount: 15 },
];

const customerGrouping = purchases.reduce((acc, purchase) => {
  const customerName = purchase.customer;
  const categoryName = purchase.category;
  const savedPurchases = acc.get(customerName);

  if (!savedPurchases) {
    acc.set(customerName, {customer: purchase.customer, categories: {[categoryName]: {totalAmount: purchase.amount, productFrequency: {[purchase.product]: 1}}}});
  } else {
    if (!savedPurchases.categories[categoryName]) {
      savedPurchases.categories[categoryName] = {totalAmount: purchase.amount, productFrequency: {[purchase.product]: 1}};
    } else {
      savedPurchases.categories[categoryName].totalAmount += purchase.amount;
      savedPurchases.categories[categoryName].productFrequency[purchase.product] = (savedPurchases.categories[categoryName].productFrequency[purchase.product] || 0) + 1;
    }
  }
  return acc;
}, new Map ());

for (const [_, data] of customerGrouping) {
  for (const categoryName of Object.keys(data.categories)) {
    let maxCount = 0;
    let mostFrequentProduct = null;
    for (const [product, count] of Object.entries(data.categories[categoryName].productFrequency)) {
      if (count > maxCount) {
        maxCount = count;
        mostFrequentProduct = product;
      }
    }
      data.categories[categoryName].mostFrequentProduct = mostFrequentProduct;
  }
}
console.log(customerGrouping.values());
})();

(() => {
  const orders = [
  { customer: "Alice", deliveryCity: "Nairobi", product: "Book", price: 20 },
  { customer: "Bob", deliveryCity: "Mombasa", product: "Phone", price: 150 },
  { customer: "Alice", deliveryCity: "Nairobi", product: "Pen", price: 5 },
  { customer: "Alice", deliveryCity: "Kisumu", product: "Book", price: 25 },
  { customer: "Bob", deliveryCity: "Mombasa", product: "Laptop", price: 500 },
  { customer: "Alice", deliveryCity: "Nairobi", product: "Book", price: 20 },
];

const customerGrouping = orders.reduce((acc, order) => {
  const customerName = order.customer;
  const cityName = order.deliveryCity;
  const savedOrders = acc.get(customerName);

  if (!savedOrders) {
    acc.set(customerName, {
        [cityName]: {
          totalAmount: order.price, 
          productFrequency: {
            [order.product]: 1}
          }
      });
  } else if (!savedOrders[cityName]) {
    savedOrders[cityName] = {
      totalAmount: order.price, 
      productFrequency: {
        [order.product]: 1
      }
    };
  } else {
    savedOrders[cityName].totalAmount += order.price;
    savedOrders[cityName].productFrequency[order.product] = (
      savedOrders[cityName].productFrequency[order.product] || 0
    ) + 1;
  }
  return acc;
}, new Map());
console.log(customerGrouping.values());
})();

(() => {
  const orders = [
  { id: 1, customer: "Alice", country: "Kenya", category: "Books", product: "Fiction", amount: 25 },
  { id: 2, customer: "Bob", country: "Uganda", category: "Electronics", product: "Phone", amount: 200 },
  { id: 3, customer: "Alice", country: "Kenya", category: "Books", product: "Non-Fiction", amount: 30 },
  { id: 4, customer: "Alice", country: "Kenya", category: "Electronics", product: "Laptop", amount: 500 },
  { id: 5, customer: "Charlie", country: "Tanzania", category: "Groceries", product: "Vegetables", amount: 40 },
  { id: 6, customer: "Bob", country: "Uganda", category: "Electronics", product: "Phone", amount: 250 },
  { id: 7, customer: "Alice", country: "Kenya", category: "Books", product: "Fiction", amount: 20 },
  { id: 8, customer: "Charlie", country: "Tanzania", category: "Groceries", product: "Fruits", amount: 35 },
  { id: 9, customer: "Bob", country: "Uganda", category: "Books", product: "Comics", amount: 15 },
  { id: 10, customer: "Charlie", country: "Tanzania", category: "Electronics", product: "Headphones", amount: 120 },
];

const countryGrouping = orders.reduce((acc, order) => {
  const countryName = order.country;
  const customerName = order.customer;
  const categoryName = order.category;
  const savedOrders = acc.get(countryName);

  if (!savedOrders) {
    acc.set(countryName, {[countryName]: {[customerName]: {[categoryName]: {totalAmount: order.amount, productPurchaseFrequency: {[order.product]: 1}}}}});
  } else if (!savedOrders[countryName]) {
    savedOrders[countryName] = {[customerName]: {[categoryName]: {totalAmount: order.amount, productPurchaseFrequency: {[order.product]: 1}}}};
  }else if (!savedOrders[countryName][customerName]) {
    savedOrders[countryName][customerName] = {[categoryName]: {totalAmount: order.amount, productPurchaseFrequency: {[order.product]: 1}}};
  }else if (!savedOrders[countryName][customerName][categoryName]) {
    savedOrders[countryName][customerName][categoryName] = {totalAmount: order.amount, productPurchaseFrequency: {[order.product]: 1}};
  } else {
    savedOrders[countryName][customerName][categoryName].totalAmount += order.amount;
    savedOrders[countryName][customerName][categoryName].productPurchaseFrequency[order.product] = (savedOrders[countryName][customerName][categoryName].productPurchaseFrequency[order.product] || 0) + 1;
  }
  return acc;
}, new Map());

for (const [_, data] of countryGrouping) {
  for (const countryName of Object.keys(data)) {
    for (const customerName of Object.keys(data[countryName])) {
    for (const categoryName of Object.keys(data[countryName][customerName])) {
      let maxCount = 0;
      let mostFrequentlyPurchasedProduct = null;
      for (const [product, count] of Object.entries(data[countryName][customerName][categoryName].productPurchaseFrequency)) {
        if (count > maxCount) {
          maxCount = count;
          mostFrequentlyPurchasedProduct = product;
        }
      }
      data[countryName][customerName][categoryName].topProduct = mostFrequentlyPurchasedProduct;
    }
  }
}
}

console.log(countryGrouping.values());
})();

(() => {
  const orders = [
  { customer: "Alice", continent: "Africa", country: "Kenya", product: "Book", amount: 25 },
  { customer: "Bob", continent: "Africa", country: "Nigeria", product: "Phone", amount: 300 },
  { customer: "Alice", continent: "Africa", country: "Kenya", product: "Pen", amount: 5 },
  { customer: "Alice", continent: "Africa", country: "Kenya", product: "Book", amount: 30 },
  { customer: "Charlie", continent: "Asia", country: "India", product: "Phone", amount: 250 },
  { customer: "Bob", continent: "Africa", country: "Nigeria", product: "Laptop", amount: 500 },
  { customer: "Charlie", continent: "Asia", country: "India", product: "Charger", amount: 50 },
  { customer: "Alice", continent: "Africa", country: "Kenya", product: "Book", amount: 20 },
];

const continentalGrouping = orders.reduce((acc, order) => {
  const continentName = order.continent;
  const countryName = order.country;
  const customerName = order.customer;
  const productName = order.product;
  const savedOrders = acc.get(continentName);

  if (!savedOrders) {
    acc.set(continentName, {
      [continentName]: {
        [countryName]: {
          [customerName]: {
            totalAmount: order.amount, 
            productFrequency: {[productName]: 1
            }
          }
        }
      }
    });
  } else if (!savedOrders[continentName]) {
    savedOrders[continentName] = {
      [countryName]: {
        [customerName]: {
          totalAmount: order.amount, 
          productFrequency: {
            [productName]: 1
          }
        }
      }
    };
  } else if (!savedOrders[continentName][countryName]) {
    savedOrders[continentName][countryName] = {
      [customerName]: {
        totalAmount: order.amount, 
        productFrequency: {
          [productName]: 1
        }
      }
    };
  } else if (!savedOrders[continentName][countryName][customerName]) {
    savedOrders[continentName][countryName][customerName] = {totalAmount: order.amount, productFrequency: {[productName]: 1}};
  }else {
    savedOrders[continentName][countryName][customerName].totalAmount += order.amount;
    savedOrders[continentName][countryName][customerName].productFrequency[productName] = (
      savedOrders[continentName][countryName][customerName].productFrequency[productName] || 0
    ) + 1;
  }
  return acc;
}, new Map());

for (const [_, data] of continentalGrouping) {
  for (const continentName of Object.keys(data)) {
    for (const countryName of Object.keys(data[continentName])) {
      for (const customerName of Object.keys(data[continentName][countryName])) {
        let maxCount = 0;
        let topProduct = null;
        for (const [product, count] of Object.entries(data[continentName][countryName][customerName].productFrequency)) {
          if (count > maxCount) {
            maxCount = count;
            topProduct = product;
          }
        }
        data[continentName][countryName][customerName].topProduct = topProduct;
      }
    }
  }
}
console.log(continentalGrouping.values());
})();

// USING OBJECTS INSIDE ARRAYS AND VICE VERSA
// It is important that you understand that object mutations can create bugs in the code and that is why it is important to try
// change a property in your object, without mutating the object. Some of the following exercises below look into how that can be 
// achieved while introducing some new array methods like .find() and .findIndex().
(() => {
  const students = [
  { name: "Alice", courses: ["Math", "History", "Biology"] },
  { name: "Bob", courses: ["Math", "Physics"] },
  { name: "Charlie", courses: ["History", "Math", "Physics", "Biology"] },
];
const courseGrouping = {}; 

students.forEach((student) => {
  student.courses.forEach((course) => {
    !courseGrouping[course] ? courseGrouping[course] = [student.name]: courseGrouping[course].push(student.name);
  });
});
console.log(courseGrouping);
})();

(() => {
  const employees = [
  { name: "Alice", department: "Sales" },
  { name: "Bob", department: "Engineering" },
  { name: "Charlie", department: "Sales" },
  { name: "David", department: "Engineering" },
  { name: "Eve", department: "HR" }
];

const departmentGrouping = employees.reduce((acc, employee) => {
  departmentName = employee.department;

  acc[departmentName] = acc[departmentName] || [];
  !acc[departmentName].includes(employee.name) ? acc[departmentName].push(employee.name): [];
  return acc;
}, {});
console.log(departmentGrouping);
})();

(() => {
  const employees = [
  { name: "Alice", department: "Sales", role: "Manager" },
  { name: "Bob", department: "Engineering", role: "Developer" },
  { name: "Charlie", department: "Sales", role: "Executive" },
  { name: "David", department: "Engineering", role: "Developer" },
  { name: "Eve", department: "HR", role: "Manager" },
  { name: "Frank", department: "Engineering", role: "Manager" },
];

const departmentGrouping = employees.reduce((acc, employee) => {
  const departmentName = employee.department;
  const roleName = employee.role;
  const employeeName = employee.name;

  acc[departmentName] = acc[departmentName] || {};
  if (!acc[departmentName][roleName]) {
    acc[departmentName][roleName] = [employeeName];
  } else {
    acc[departmentName][roleName].push(employeeName);
  }
  return acc;
}, {});
console.log(departmentGrouping);
})();

(() => {
  const books = [
  { id: 101, title: "1984", isAvailable: true },
  { id: 102, title: "Brave New World", isAvailable: true },
  { id: 103, title: "Fahrenheit 451", isAvailable: true }
];

const book = books.find((object) => {  // .find() is an array method that iterates through the items in a list and `captures` an 
  // item based on the condition we write for it. Here we have an array of objects and that means all the tendencies associated with
  // such data should be followed i.e how to access data in a nest etc.
  return object.title === `Fahrenheit 451`;
});
if (book) {
  book.isAvailable = false;  // After finding(capturing) the item we want to manipulate, because a reference to that item is stored
  // in a variable as shown, that item can be affected in any way we would like.
}
console.log(books);
})();

(() => {
  const products = [
  { id: 1, name: "Laptop", stock: 12 },
  { id: 2, name: "Phone", stock: 0 },
  { id: 3, name: "Tablet", stock: 5 }
];

const foundProduct = products.find((product) => {
  return product.id === 2;
});
if (foundProduct) foundProduct.stock = 10;  // Notice that it's not the original array that is affected. We use the referenced item
// to change the properties and that will affect the original array because changing a reference changes the original array.
console.log(products);
})();

(() => {  // Here, both operations return the same output. It is also worth considering how map is utilised.
  const products = [
  { id: 1, name: "Laptop", stock: 12 },
  { id: 2, name: "Phone", stock: 0 },
  { id: 3, name: "Tablet", stock: 0 }
];

products.forEach((product) => {
  if (product.stock === 0) product.stock = 15;
});
console.log(products);

const foundProduct = products.map((product) => {
  return (product.stock === 0 ? {...product, stock: 15} : product);  // The spread operator in this case is used when you want
  // to keep the original array unchanged i.e immutable and what it's doing is that we are basically collecting all the properties
  // that come before the property we want to affect.
});
console.log(foundProduct);
})();

(() => {
  const inventory = [
  { id: 1, item: "Book", quantity: 10 },
  { id: 2, item: "Pen", quantity: 20 }
];

console.log(inventory);
const newInventory = [...inventory, {id: 3, item: `Notebook`, quantity: 15}];  // This is the best way to add a new item in an 
// array and still keep the original array unaltered.

console.log(newInventory);
})();

(() => {
  const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
const newUser = { id: 3, name: "Charlie" };

const idExists = users.some((user) => {
  return user.id === 3;
});
if (!idExists) {
  const newUsers = [...users, newUser];
  console.log(newUsers);
} else {
  console.log(users);
}
})();

(() => {
  const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const newUser = { id: 2, name: "Bobby" }; // should replace Bob

// If a user with the same id exists, replace the existing user with the new one.
// If no such user exists, add the new user to the end of the array.

const sameIdExists = users.some((user) => {
  return user.id === 2;
});

if (sameIdExists) {
  const foundUser = users.find((user) => {  // From this exercise, you learn that the find method can be a very powerful tool
    // where mutation is required. This is because find(), finds the item with the condition created and stores a reference for it.
    // You can then create logic that affects the original item, in this case, mutation of an object.
    return user.id === 2;
  });
  foundUser.name = `Bobby`;
  console.log(users);
} else {
  const newUsers = [...users, newUser];
  console.log(newUsers);
}
})();

// INTRODUCE findIndex()
(() => {
  const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 }
];

const incomingProduct = { id: 2, name: "Phone", price: 550 }; // should update

// If a product with the same id already exists, update its price.
// If it doesn’t exist, add it to the array.

const elementIndex = products.findIndex((product) => {  // With the method findIndex(), you need to consider the following;
  // Just like most of the array methods we've looked at, there will be a condition attached to it. findIndex looks at the condition
  // given to it and returns the INDEX of the first element that matches the condition that is fed into it.
  return product.id === incomingProduct.id;  // In this case, findIndex will look at this condition and see that it's being asked to
  // compare the ids of each of the old products and the incoming products. If there is a match, it returns the index of the
  // first product that the condition meets. In this case, that would be index 1 of the second product(object). So elementIndex stores
  // 1. If it does not find any product that meets the condition, it returns -1, thus making the condition below important.
});
if (elementIndex !== -1) {
  const updatedProducts = [...products];  // This clones the original array to avoid mutating it, which is usually prefered.
  updatedProducts[elementIndex] = incomingProduct;  //Remember, if we wanted to update an item inside an array, we use it's index.
  // This is what this operation doesm but it's doing so dynamically.
  console.log(updatedProducts);
} else {
  const newProducts = [...products, incomingProduct];  // It is worth considering how you name the variables based on the operation
  // that's taking place. Here we are adding and not updating/mutating an array.
  console.log(newProducts);
}
})();

(() => {
  const inventory = [
  { id: 1, item: "Book", quantity: 4 },
  { id: 2, item: "Pen", quantity: 10 }
];

const incomingStock = { id: 2, item: "Pen", quantity: 5 };  // quantity is what's new

// If the item already exists in the inventory (based on id): Increase its quantity by the incomingStock.quantity.
// If it doesn't exist, add it to the inventory as a new item.

const elementIndex = inventory.findIndex((data) => {
  return data.id === incomingStock.id;
});
if (elementIndex !== -1) {
  const updatedInventory = [...inventory];
  updatedInventory[elementIndex] = {...updatedInventory[elementIndex], quantity: 
    updatedInventory[elementIndex].quantity + incomingStock.quantity};
  console.log(updatedInventory);
} else {
  const newInventory = [...inventory, incomingStock];
  console.log(newInventory);
}
})();

(() => {
  const products = [
  { id: 1, name: "Laptop", price: 1000, history: [1000] },
  { id: 2, name: "Phone", price: 500, history: [450, 470, 500] }
];

const incoming = { id: 2, name: "Phone", price: 520 };

// If the product exists:
  // - Update the price
  // - Push the new price to its `history` array

// If it doesn’t exist:
  // - Add it as a new product
  // - Start `history` as [price]

  const elementIndex = products.findIndex((product) => {
    return product.name === incoming.name;
  });

  if (elementIndex !== -1) {
    const updatedProducts = [...products];
    updatedProducts[elementIndex] = {...updatedProducts[elementIndex], 
      price: incoming.price, 
      history: [...updatedProducts[elementIndex].history, incoming.price]};
    console.log(updatedProducts);
  } else {
    const newProducts = [...products, {...incoming, history: [incoming.price]}];
    console.log(newProducts);
  }
})();

(() => {
  const products = [
  {
    id: 1,
    name: "Laptop",
    specs: {
      weight: "1.2kg",
      battery: "10hrs"
    }
  },
  {
    id: 2,
    name: "Phone",
    specs: {
      weight: "200g",
      battery: "24hrs"
    }
  }
];

const update = {
  id: 2,
  specs: {
    battery: "30hrs"
  }
};
// Update the product with id: 2 so that only its specs.battery is changed to "30hrs", without mutating the original products array.

const elementIndex = products.findIndex((product) => {
  return product.id === update.id;
});
if (elementIndex !== -1) {
  const updatedProducts = [...products];
  updatedProducts[elementIndex] = {...updatedProducts[elementIndex], 
    specs: {...updatedProducts[elementIndex].specs, 
      battery: update.specs.battery}};
  console.log(updatedProducts);
}
})();

(() => {
  const products = [
  {
    id: 1,
    name: "Laptop",
    specs: {
      battery: "8hrs"
    }
  },
  {
    id: 2,
    name: "Phone",
    specs: {
      battery: "24hrs"
    }
  }
];

const update = {
  id: 2,
  specs: {
    battery: "30hrs" // Only apply if this is longer
  }
};

// Update only if the incoming battery life is longer (i.e., "30hrs" > "24hrs"). 
// Assume the time is always written as a number followed by "hrs".

const elementIndex = products.findIndex((product) => {
  return (parseFloat(update.specs.battery) > parseFloat(product.specs.battery)) && (product.id === update.id);
});

if (elementIndex !==-1) {
  const updatedProducts = [...products];
  updatedProducts[elementIndex] = {...updatedProducts[elementIndex], 
    specs: {...updatedProducts[elementIndex].specs, 
      battery: update.specs.battery}
    };
    console.log(updatedProducts);
}
})();

(() => {
  const catalog = [
  {
    id: 1,
    title: "JavaScript Basics",
    lessons: [
      { id: "a", title: "Variables", completed: true },
      { id: "b", title: "Functions", completed: false }
    ]
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    lessons: [
      { id: "c", title: "Closures", completed: false },
      { id: "d", title: "Async/Await", completed: false }
    ]
  }
];

const updates = [
  { courseId: 2, lessonId: "d", completed: true },
  { courseId: 1, lessonId: "b", completed: true }
];

// Do not mutate catalog.
// Apply the updates from the updates array.
// Return a new version of catalog where the specified lessons have their completed field updated to true.

const copiedCatalog = structuredClone(catalog);

const updatedCatalog = copiedCatalog.map((course) => {
  // Check if there's any update for this course
  const courseUpdates = updates.filter(u => {
    return u.courseId === course.id;
  });

  // If there are no updates for this course, return as-is
  if (courseUpdates.length === 0) return course;

  // Otherwise, update the lessons
  const updatedLessons = course.lessons.map(lesson => {
    const matchingUpdate = courseUpdates.find((u) => {
     return u.lessonId === lesson.id;
    });
    if (matchingUpdate) {
      return { ...lesson, completed: matchingUpdate.completed };
    }
    return lesson;
  });

  // Return course with updated lessons
  return { ...course, lessons: updatedLessons };
});

console.log(updatedCatalog);
})();

(() => {
  const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    tasks: [
      { id: "a", title: "Design mockup", done: false },
      { id: "b", title: "Code landing page", done: false }
    ]
  },
  {
    id: 2,
    title: "Todo App",
    tasks: [
      { id: "c", title: "Set up project", done: true },
      { id: "d", title: "Add localStorage", done: false }
    ]
  }
];

const updates = [
  { projectId: 1, taskId: "b", done: true },
  { projectId: 2, taskId: "d", done: true }
];

// Leaves projects unchanged
// Returns a new version of the data with updates applied
// Makes sure only the specified taskIds inside the right projectIds are updated

const copiedProjects = structuredClone(projects);

const updatedCopiedProjects = copiedProjects.map((object) => {
  const updatedTasks = object.tasks.map((obj) => {
    const matchedTasks = updates.find((project) => {
      return obj.id === project.taskId;
    });
    if (matchedTasks) {
      return {...obj, done: matchedTasks.done};
    }
    return obj;
  });
  return {...object, tasks: updatedTasks};
});
console.log(updatedCopiedProjects);
})();

(() => {
  const students = [
  {
    id: 1,
    name: "Alice",
    subjects: [
      { code: "ENG", grade: 75 },
      { code: "MATH", grade: 88 }
    ]
  },
  {
    id: 2,
    name: "Bob",
    subjects: [
      { code: "ENG", grade: 82 },
      { code: "SCI", grade: 91 }
    ]
  }
];

const gradeUpdates = [
  { studentId: 1, subjectCode: "ENG", grade: 80 },
  { studentId: 2, subjectCode: "SCI", grade: 95 }
];

const copiedStudentsArray = structuredClone(students);

const updatedCopiedStudentsArray = copiedStudentsArray.map((student) => {  // What this statement does is that it allows us to access
  // the nested arrays.
  const filteredGradeUpdates = gradeUpdates.filter((grade) => {
    return grade.studentId === student.id;
  });
  const updatedSubjects = student.subjects.map((subj) => {  // With access to the deeper nest, we can now manipulate it in the ways
    // we've been doing before, but what you learn from some of these exercises is to look for whatever element you want to change 
    // or manipulate and then once you find it, you need to think of the route you'll take to get to it.
    // It is important that you understand that there will be other operations you'll need to create and that is where array methods
    // can be very handy.
    const foundGradeUpdates = filteredGradeUpdates.find((grades) => {
      return grades.subjectCode === subj.code;
    });
    if (foundGradeUpdates) {
      return {...subj, grade: foundGradeUpdates.grade};
    }
    return subj;
  });
  return {...student, subjects: updatedSubjects};
});
console.log(updatedCopiedStudentsArray);
})();

(() => {
  const students = [
  {
    id: 1,
    name: "Alice",
    subjects: [
      { code: "ENG", grade: 75 },
      { code: "MATH", grade: 88 }
    ]
  },
  {
    id: 2,
    name: "Bob",
    subjects: [
      { code: "ENG", grade: 82 },
      { code: "SCI", grade: 91 }
    ]
  }
];

const gradeUpdates = [
  { studentId: 1, subjectCode: "ENG", grade: 80 },   // should update
  { studentId: 2, subjectCode: "SCI", grade: 95 },   // should update
  { studentId: 1, subjectCode: "HIST", grade: 70 },  // should be added
  { studentId: 2, subjectCode: "MATH", grade: 89 }   // should be added
];

// Do not mutate students.
// Apply updates using structuredClone().
// For each gradeUpdate:
//  If the subject exists for that student, update the grade.
//  If it doesn’t exist, add the new subject with the given grade.

const copiedStudentsArray = structuredClone(students);

const updatedCopiedStudentsArray = copiedStudentsArray.map((student) => {
  const filteredGradeUpdates = gradeUpdates.filter((grade) => {  // This statement filters the global array based on studentId.
    // What that means is that the subjects/subject codes appear on the array based on a particular student. 
    // So Alice will have ENG and HIST. Bob will have SCI and MATH.
    // This is relevant because if I wanted to add a new subject that is not already existing after an update, I can use this array
    // and not any other one.
    return grade.studentId === student.id;
  });
  const updatedSubjects = student.subjects.map((subj) => {
    const foundGradeUpdates = filteredGradeUpdates.find((grades) => {
      return grades.subjectCode === subj.code;
    });
    if (foundGradeUpdates) {
      return {...subj, grade: foundGradeUpdates.grade};
    }
    return subj;
  });
      filteredGradeUpdates.forEach((update) => {  // Again, remember that the filter was based on student Id and so each student
        // should have at least 3 subjects.
    const alreadyExists = updatedSubjects.some((subject) => {  // .some() checks whether at least one of the values after the update is
      // complete meets the condition here. If it does not meet it, it will return false.
      return subject.code === update.subjectCode
    });
    if (!alreadyExists) {
      updatedSubjects.push({code: update.subjectCode, grade: update.grade});
    }
  });

  return {...student, subjects: updatedSubjects};
});
console.log(updatedCopiedStudentsArray);
})();

(() => {
  const boards = [
  {
    id: 1,
    title: "Personal",
    lists: [
      {
        id: "a",
        name: "To Do",
        cards: [
          { id: "x", text: "Buy groceries", done: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Work",
    lists: [
      {
        id: "b",
        name: "In Progress",
        cards: [
          { id: "y", text: "Prepare report", done: true }
        ]
      }
    ]
  }
];

const updates = [
  { boardId: 1, listId: "a", cardId: "x", done: true }, // should update
  { boardId: 2, listId: "b", cardId: "z", text: "Email client", done: false }, // should be added
  { boardId: 1, listId: "a", cardId: "w", text: "Clean kitchen", done: false } // should be added
];

// Instructions:
// - Do NOT mutate the original `boards` array.
// - Use structuredClone().
// - If a cardId is found inside the right board and list, update it.
// - If not, add the new card to the correct list.

const copiedBoardsArray = structuredClone(boards);

const updatedCopiedBoardsArray = copiedBoardsArray.map((board) => {
  const filterBasedOnBoardId = updates.filter((u) => {
    return u.boardId === board.id;
  });
  const updatedListsArray = board.lists.map((list) => {
    const filterBasedOnListId = updates.filter((u) => {
      return u.listId === list.id;
    });
    const updatedCardsArray = list.cards.map((card) => {
      const foundUpdates = filterBasedOnListId.find((u) => {
        return u.cardId === card.id;
      });
      if (foundUpdates) {
        return {...card, done: foundUpdates.done};
      }
      return card;
    });
    filterBasedOnListId.forEach((update) => {
      const alreadyExists = updatedCardsArray.some((card) => {
        return card.id === update.cardId;
      });
      if (!alreadyExists) {
        updatedCardsArray.push({id: update.cardId, text: update.text, done: update.done});
      }
    });
    return {...list, cards: updatedCardsArray};
  });
  return {...board, lists: updatedListsArray};
});
console.log(updatedCopiedBoardsArray);
})();

(() => {
  const board = {
  id: 1,
  title: "Personal",
  lists: [
    {
      id: "a",
      name: "To Do",
      cards: [
        { id: "x", text: "Buy groceries", done: false },
        { id: "z", text: "Call mom", done: true },
        { id: "y", text: "Pay bills", done: false }
      ]
    },
    {
      id: "b",
      name: "Work",
      cards: [
        { id: "k", text: "Prepare report", done: true },
        { id: "m", text: "Fix bug", done: false }
      ]
    }
  ]
};

// Group all cards from all lists by their done status
// Don’t mutate anything
// Use .flatMap() or .reduce() if you like
// Focus on clarity
// Do not hardcode — it should work even if cards or lists change

const copiedBoardArray = [{...board}];
const updatedCopiedBoardArray = copiedBoardArray.map((object) => {
  const listsGrouping = object.lists.reduce((acc, list) => {
    listsId = list.id;
    listsName = list.name;
    listsCards = list.cards;
    
    list.cards.forEach((card) => {
      if (card.done) {
        acc.done = acc.done || [];
        acc.done.push(card);
      } else {
        acc.notDone =  acc.notDone || [];
        acc.notDone.push(card);
      }
    });
    return acc;
  }, {});
  return {...object, lists: listsGrouping};
});
console.log(updatedCopiedBoardArray);

const groupedCards = board.lists.reduce(  // This is the preferred solution.
  (acc, list) => {
    list.cards.forEach((card) => {
      if (card.done) {
        acc.done.push(card);
      } else {
        acc.notDone.push(card);
      }
    });
    return acc;
  },
  { done: [], notDone: [] }
);

console.log(groupedCards);
})();

(() => {
  const board = {
  id: 1,
  title: "Personal",
  lists: [
    {
      id: "a",
      name: "To Do",
      cards: [
        { id: "x", text: "Buy groceries", done: false },
        { id: "z", text: "Call mom", done: true }
      ]
    },
    {
      id: "b",
      name: "Work",
      cards: [
        { id: "y", text: "Prepare report", done: false }
      ]
    }
  ]
};

const cardsToRemove = ["z", "y"];

// Write code that:
//   Returns a new board object with those card IDs removed.
//   Doesn’t mutate the original board object.
//   Preserves the structure of board (same lists, same board id/title, etc.)
//   Removes only the cards whose id matches one in cardsToRemove.

// The solution...

const newBoard = {...board, 
  lists: board.lists.map((list) => {
    return ({...list, 
  cards: list.cards.filter((card) => {
    return !cardsToRemove.includes(card.id);
  })})
  })};

console.log(newBoard);
})();

(() => {
  console.log(`I'm here`);
  const project = {
  id: 101,
  name: "Launch Website",
  milestones: [
    {
      id: "m1",
      title: "Design",
      tasks: [
        { id: "t1", title: "Wireframes", completed: false },
        { id: "t2", title: "Mockups", completed: false }
      ]
    },
    {
      id: "m2",
      title: "Development",
      tasks: [
        { id: "t3", title: "Frontend", completed: false },
        { id: "t4", title: "Backend", completed: false }
      ]
    }
  ]
};

const taskUpdates = [
  { milestoneId: "m1", taskId: "t2", completed: true },
  { milestoneId: "m2", taskId: "t4", completed: true },
  { milestoneId: "m1", taskId: "t5", title: "Prototype", completed: false }
];

// Your goal is to update the status of specific tasks based on a list of updates.
// Do not mutate the original project object.
// Use structuredClone() or object spreading to create new objects.
// For each task update:
// If the task exists, update its completed status.
// If it doesn’t exist, add a new task with the given id, title, and completed status to the right milestone.

const copyProject = structuredClone(project);
console.log(copyProject);

const newProject = {...copyProject, milestones: copyProject.milestones.map((milestone) => {
  const filterBasedOnMilestoneId = taskUpdates.filter((update) => {
    return update.milestoneId === milestone.id;
  });
  const updatedTasks = milestone.tasks.map((task) => {
    const filterBasedOnTaskId = filterBasedOnMilestoneId.find((u) => {
      return u.taskId === task.id;
    });
    if (filterBasedOnTaskId) {
      return {...task, completed: filterBasedOnTaskId.completed};
    }
    return task;
  });
  filterBasedOnMilestoneId.forEach((taskUpdate) => {
    const alreadyExists = updatedTasks.some((mainTask) => {
      return taskUpdate.taskId === mainTask.id;
    });
    if (!alreadyExists) {
      updatedTasks.push({id: taskUpdate.taskId, title: taskUpdate.title, completed: taskUpdate.completed});
    } else{
      return alreadyExists;
    }
  });
  return {...milestone, tasks: updatedTasks};
})
};
console.log(newProject);
})();