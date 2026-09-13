// ============================================================
//  InterviewPrep Quiz — script.js
//  All 15 subjects × 25 questions = 375 questions
//  Pure Vanilla JavaScript — no frameworks, no APIs
// ============================================================

// ----- Subject SVG logos for the home-page cards -----
const subjectIcons = {
    "C++": `<svg viewBox="0 0 48 48" width="48" height="48"><path fill="#00599C" d="M24 4L42 14.4V33.6L24 44L6 33.6V14.4L24 4z"/><path fill="#004482" d="M24 44L42 33.6V24L24 24z" opacity="0.3"/><path fill="#FFFFFF" d="M24 13c-6.1 0-11 4.9-11 11s4.9 11 11 11c4.2 0 7.8-2.3 9.7-5.8h-5.2c-1.1 1.6-2.9 2.6-4.5 2.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.6 0 3.4 1 4.5 2.6h5.2C31.8 15.3 28.2 13 24 13z"/><polygon points="24,24 42,14.4 42,33.6" fill="#0073B7"/><path fill="#FFFFFF" d="M30.5 22.5h-1.5v-1.5h-1v1.5H26.5v1h1.5v1.5h1v-1.5h1.5v-1zm7 0h-1.5v-1.5h-1v1.5H33.5v1h1.5v1.5h1v-1.5h1.5v-1z"/></svg>`,

    "HTML": `<svg viewBox="0 0 48 48" width="48" height="48"><path fill="#E44D26" d="M6 4l3.5 39.5L24 47.5l14.5-4L42 4H6z"/><path fill="#F16529" d="M24 7.5v36.3l11.8-3.3L38.5 7.5H24z"/><path fill="#FFF" d="M14 15h20l-.5 5.5H19.5l.5 5.5H33l-1 11L24 39l-8-2.3-.5-5.2h5l.3 2.3 4.2 1.2 4.2-1.2.4-4.8H15L14 15z"/></svg>`,

    "CSS": `<img src="images/css-logo.jpg" alt="CSS" style="width: 48px; height: 48px; object-fit: contain;">`,

    "JavaScript": `<svg viewBox="0 0 48 48" width="48" height="48"><rect width="48" height="48" rx="6" fill="#F7DF1E"/><text x="17" y="38" fill="#000000" font-family="Arial, sans-serif" font-weight="900" font-size="22" letter-spacing="-1">JS</text></svg>`,

    "Java": `<img src="images/java-logo.png" alt="Java" style="width: 60px; height: 60px; object-fit: contain; transform: scale(1.15);">`,

    "Python": `<svg viewBox="0 0 48 48" width="48" height="48"><path fill="#3776AB" d="M23.5 4c-9 0-8.5 4-8.5 4v4h9v1.5H11S4 13 4 22c0 9 6 8.5 6 8.5h3v-4s-.5-6 6-6h8.5s6 0 6-6V8.5S34 4 23.5 4zm-4.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/><path fill="#FFD43B" d="M24.5 44c9 0 8.5-4 8.5-4v-4h-9v-1.5H37s7 .5 7-8.5c0-9-6-8.5-6-8.5h-3v4s.5 6-6 6H20.5s-6 0-6 6v6s-.5 4.5 10 4.5zm4.5-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>`,

    "Node.js": `<svg viewBox="0 0 48 48" width="48" height="48"><path fill="#339933" d="M24 4L42.5 14.7v21.4L24 46.8 5.5 36.1V14.7L24 4z"/><text x="24" y="24" fill="#FFF" font-family="Arial, sans-serif" font-weight="900" font-size="12" text-anchor="middle">node</text><polygon points="24,28 30,31.5 30,38.5 24,42 18,38.5 18,31.5" fill="#339933" stroke="#FFF" stroke-width="1.5"/><text x="24" y="38" fill="#FFF" font-family="Arial, sans-serif" font-weight="900" font-size="7" text-anchor="middle">JS</text></svg>`,

    "Express.js": `<svg viewBox="0 0 48 48" width="48" height="48"><rect width="48" height="48" rx="8" fill="#000000"/><text x="24" y="28" fill="#FFF" font-family="Arial, sans-serif" font-weight="700" font-size="11" text-anchor="middle" letter-spacing="0.5">express</text></svg>`,

    "React": `<svg viewBox="0 0 48 48" width="48" height="48"><circle cx="24" cy="24" r="4.5" fill="#61DAFB"/><ellipse cx="24" cy="24" rx="19" ry="7.5" fill="none" stroke="#61DAFB" stroke-width="2.2"/><ellipse cx="24" cy="24" rx="19" ry="7.5" fill="none" stroke="#61DAFB" stroke-width="2.2" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="19" ry="7.5" fill="none" stroke="#61DAFB" stroke-width="2.2" transform="rotate(120 24 24)"/></svg>`,

    "MongoDB": `<svg viewBox="0 0 48 48" width="48" height="48"><path fill="#13AA52" d="M24 4C24 4 13 14.5 13 25.5C13 32.5 18 38 23 40V44H25V40C30 38 35 32.5 35 25.5C35 14.5 24 4 24 4Z"/><path fill="#116149" d="M24 4V44C24.5 44 25 40 25 40C30 38 35 32.5 35 25.5C35 14.5 24 4 24 4Z"/><path stroke="#3FA037" stroke-width="1.5" d="M24 10V38"/></svg>`,

    "MERN Stack": `<svg viewBox="0 0 100 32" width="60" height="24"><g transform="translate(12, 16) scale(0.6)"><path fill="#13AA52" d="M0 -20C0 -20 -11 -9.5 -11 1.5C-11 8.5 -6 14 -1 16V20H1V16C6 14 11 8.5 11 1.5C11 -9.5 0 -20 0 -20Z"/><path fill="#116149" d="M0 -20V20C.5 20 1 16 1 16C6 14 11 8.5 11 1.5C11 -9.5 0 -20 0 -20Z"/></g><g transform="translate(37, 16)"><circle cx="0" cy="0" r="11" fill="#222222" stroke="#444444" stroke-width="1"/><text x="0" y="4" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="700" font-size="11" text-anchor="middle">ex</text></g><g transform="translate(63, 16) scale(0.55)"><circle cx="0" cy="0" r="4.5" fill="#61DAFB"/><ellipse cx="0" cy="0" rx="19" ry="7.5" fill="none" stroke="#61DAFB" stroke-width="2.5"/><ellipse cx="0" cy="0" rx="19" ry="7.5" fill="none" stroke="#61DAFB" stroke-width="2.5" transform="rotate(60)"/><ellipse cx="0" cy="0" rx="19" ry="7.5" fill="none" stroke="#61DAFB" stroke-width="2.5" transform="rotate(120)"/></g><g transform="translate(88, 16) scale(0.55)"><path fill="#339933" d="M0 -20L17.3 -10V10L0 20L-17.3 10V-10L0 -20z"/><text x="0" y="5" fill="#FFF" font-family="Arial, sans-serif" font-weight="900" font-size="14" text-anchor="middle">JS</text></g></svg>`,

    "SQL": `<svg viewBox="0 0 48 48" width="48" height="48"><ellipse cx="24" cy="11" rx="16" ry="6" fill="#0288D1"/><path fill="#0288D1" d="M8 11v10c0 3.3 7.2 6 16 6s16-2.7 16-6V11"/><ellipse cx="24" cy="21" rx="16" ry="6" fill="#039BE5"/><path fill="#039BE5" d="M8 21v10c0 3.3 7.2 6 16 6s16-2.7 16-6V21"/><ellipse cx="24" cy="31" rx="16" ry="6" fill="#29B6F6"/><path fill="#29B6F6" d="M8 31v6c0 3.3 7.2 6 16 6s16-2.7 16-6v-6"/><ellipse cx="24" cy="37" rx="16" ry="6" fill="#4FC3F7"/><text x="24" y="26" fill="#FFF" font-family="Arial, sans-serif" font-weight="900" font-size="10" text-anchor="middle">SQL</text></svg>`,

    "Git": `<svg viewBox="0 0 48 48" width="48" height="48"><path fill="#F05032" d="M42.7 21.3L26.7 5.3c-1-1-2.6-1-3.6 0l-3.8 3.8 4.7 4.7c1.1-.4 2.5-.1 3.4.8 1 1 1.2 2.5.7 3.7l4.5 4.5c1.2-.5 2.7-.3 3.7.7 1.3 1.3 1.3 3.3 0 4.5-1.3 1.3-3.3 1.3-4.5 0-1-1-1.2-2.5-.7-3.7l-4.2-4.2v10c.6.4 1.1 1.2 1.1 2 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1 .5-1.8 1.2-2.3V19.4L18.4 14.1 5.3 27.2c-1 1-1 2.6 0 3.6l16 16c1 1 2.6 1 3.6 0l17.8-17.8c1-1 1-2.7 0-3.7z"/></svg>`,

    "GitHub": `<svg viewBox="0 0 48 48" width="48" height="48"><path fill="#181717" fill-rule="evenodd" clip-rule="evenodd" d="M24 4C12.95 4 4 12.95 4 24c0 8.84 5.73 16.33 13.68 18.97 1 .19 1.37-.43 1.37-.96 0-.47-.02-2.03-.02-3.7-5.01.93-6.32-1.22-6.72-2.34-.23-.58-1.21-2.34-2.07-2.81-.71-.38-1.72-1.31-.03-1.34 1.59-.02 2.72 1.46 3.1 2.07 1.81 3.05 4.71 2.19 5.87 1.66.18-1.31.71-2.19 1.29-2.7-4.51-.51-9.23-2.26-9.23-10.02 0-2.21.79-4.03 2.08-5.45-.21-.51-.91-2.58.2-5.37 0 0 1.7-.54 5.56 2.08 1.6-.44 3.33-.67 5.08-.67 1.75 0 3.48.23 5.08.67 3.86-2.62 5.56-2.08 5.56-2.08 1.11 2.79.41 4.86.2 5.37 1.29 1.42 2.08 3.24 2.08 5.45 0 7.78-4.74 9.5-9.25 10.01.73.63 1.36 1.85 1.36 3.74 0 2.7-.02 4.88-.02 5.56 0 .53.37 1.17 1.37.96A20.01 20.01 0 0044 24c0-11.05-8.95-20-20-20z"/></svg>`,

    "OOPM": `<svg viewBox="0 0 48 48" width="48" height="48"><rect width="48" height="48" rx="10" fill="#8B5CF6"/><rect x="18" y="10" width="12" height="9" rx="2" fill="none" stroke="#FFFFFF" stroke-width="2"/><path d="M24 19v6M14 25h20M14 25v5M34 25v5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/><circle cx="14" cy="33" r="5" fill="none" stroke="#FFFFFF" stroke-width="2"/><circle cx="34" cy="33" r="5" fill="none" stroke="#FFFFFF" stroke-width="2"/></svg>`,

    "DevOps": `<img src="images/devops-logo.jpg" alt="DevOps" style="width: 52px; height: 52px; object-fit: contain;">`
};

// ============================================================
//  QUESTION DATA — 15 subjects, 25 questions each
// ============================================================

const subjects = {

// ==================== 1. C++ ====================
"C++": [
{question:"What is the correct syntax for the main function in C++?",options:["void main()","int main()","main()","function main()"],answer:"int main()"},
{question:"Which keyword is used to define a class in C++?",options:["struct","class","object","define"],answer:"class"},
{question:"What is encapsulation in C++?",options:["Hiding data using access specifiers","Inheriting from a base class","Using multiple functions","Creating templates"],answer:"Hiding data using access specifiers"},
{question:"Which operator is used to access members of a class through a pointer?",options:[".","->","::","&"],answer:"->"},
{question:"What is the purpose of a constructor in C++?",options:["Destroy an object","Initialize an object","Copy an object","Compare objects"],answer:"Initialize an object"},
{question:"Which type of inheritance is not supported directly in Java but is in C++?",options:["Single","Multilevel","Multiple","Hierarchical"],answer:"Multiple"},
{question:"What does the 'virtual' keyword do in C++?",options:["Creates a static function","Enables runtime polymorphism","Makes a variable constant","Allocates memory"],answer:"Enables runtime polymorphism"},
{question:"What is the output of sizeof(char) in C++?",options:["2","4","8","1"],answer:"1"},
{question:"Which STL container stores key-value pairs?",options:["vector","list","map","set"],answer:"map"},
{question:"What is function overloading?",options:["Functions with same name but different parameters","Functions with different names","Using recursion","Function inside a function"],answer:"Functions with same name but different parameters"},
{question:"Which of the following is a correct way to declare a pointer?",options:["int *p;","int &p;","pointer int p;","int p*;"],answer:"int *p;"},
{question:"What is a destructor in C++?",options:["A function that creates objects","A function called when object is destroyed","A copy constructor","A parameterized constructor"],answer:"A function called when object is destroyed"},
{question:"What does the 'this' pointer refer to in C++?",options:["The base class","The derived class","The current object","A static member"],answer:"The current object"},
{question:"Which STL container follows LIFO order?",options:["queue","vector","stack","deque"],answer:"stack"},
{question:"What is operator overloading?",options:["Changing the meaning of an operator for user-defined types","Using multiple operators","Creating new operators","Deleting operators"],answer:"Changing the meaning of an operator for user-defined types"},
{question:"Which access specifier makes members accessible only within the class?",options:["public","protected","private","friend"],answer:"private"},
{question:"What is abstraction in C++?",options:["Hiding implementation details and showing functionality","Copying objects","Destroying objects","Using templates"],answer:"Hiding implementation details and showing functionality"},
{question:"What is the use of the 'new' keyword in C++?",options:["Delete memory","Allocate memory dynamically","Declare a variable","Define a class"],answer:"Allocate memory dynamically"},
{question:"Which header file is required for using cout?",options:["<stdio.h>","<iostream>","<string.h>","<conio.h>"],answer:"<iostream>"},
{question:"What is polymorphism in C++?",options:["One interface, multiple implementations","Single function usage","Data hiding","Memory allocation"],answer:"One interface, multiple implementations"},
{question:"What does STL stand for?",options:["Standard Type Library","Simple Template Library","Standard Template Library","Standard Tool Library"],answer:"Standard Template Library"},
{question:"What is a reference variable in C++?",options:["An alias for an existing variable","A pointer to a pointer","A dynamic variable","A constant variable"],answer:"An alias for an existing variable"},
{question:"Which keyword is used to prevent a class from being inherited?",options:["static","const","final","virtual"],answer:"final"},
{question:"What is the difference between struct and class in C++?",options:["No difference","Default access: struct is public, class is private","struct cannot have functions","class cannot have data"],answer:"Default access: struct is public, class is private"},
{question:"Which container provides dynamic array functionality in STL?",options:["list","map","vector","set"],answer:"vector"}
],

// ==================== 2. HTML ====================
"HTML": [
{question:"What does HTML stand for?",options:["Hyper Text Markup Language","High Tech Modern Language","Hyper Transfer Markup Language","Home Tool Markup Language"],answer:"Hyper Text Markup Language"},
{question:"Which HTML element is used for the largest heading?",options:["<h6>","<heading>","<h1>","<head>"],answer:"<h1>"},
{question:"Which tag is used to create a hyperlink?",options:["<link>","<a>","<href>","<url>"],answer:"<a>"},
{question:"What is the correct HTML element for inserting a line break?",options:["<break>","<lb>","<br>","<newline>"],answer:"<br>"},
{question:"Which attribute specifies the URL of a link?",options:["src","link","href","url"],answer:"href"},
{question:"Which HTML tag is used to define an unordered list?",options:["<ol>","<list>","<ul>","<dl>"],answer:"<ul>"},
{question:"What is the purpose of the <meta> tag?",options:["Create a link","Define metadata about the document","Insert an image","Create a table"],answer:"Define metadata about the document"},
{question:"Which input type is used for password fields?",options:["text","hidden","password","secure"],answer:"password"},
{question:"What does the <table> tag define?",options:["A list","A form","A table","A division"],answer:"A table"},
{question:"Which tag is used to embed an image in HTML?",options:["<picture>","<image>","<img>","<src>"],answer:"<img>"},
{question:"What is a semantic element in HTML5?",options:["An element with no meaning","An element that describes its meaning","A deprecated element","A script element"],answer:"An element that describes its meaning"},
{question:"Which tag is used to create a form in HTML?",options:["<input>","<form>","<fieldset>","<submit>"],answer:"<form>"},
{question:"What is the difference between block and inline elements?",options:["No difference","Block takes full width; inline takes only needed width","Inline takes full width","Block elements cannot contain text"],answer:"Block takes full width; inline takes only needed width"},
{question:"Which HTML5 element is used for navigation links?",options:["<navigate>","<nav>","<menu>","<links>"],answer:"<nav>"},
{question:"What does the alt attribute in <img> do?",options:["Sets the image size","Provides alternative text if image cannot load","Links to another page","Changes image color"],answer:"Provides alternative text if image cannot load"},
{question:"Which tag is used to define a section of a document?",options:["<div>","<section>","<span>","<part>"],answer:"<section>"},
{question:"What is the purpose of the <iframe> tag?",options:["Create a frame layout","Embed another HTML page","Insert an image","Create a form"],answer:"Embed another HTML page"},
{question:"Which attribute is used to specify that an input field must be filled out?",options:["validate","placeholder","required","mandatory"],answer:"required"},
{question:"What is the correct HTML5 doctype declaration?",options:["<!DOCTYPE html5>","<!DOCTYPE HTML PUBLIC>","<!DOCTYPE html>","<doctype html>"],answer:"<!DOCTYPE html>"},
{question:"Which element is used to group inline elements?",options:["<div>","<section>","<span>","<group>"],answer:"<span>"},
{question:"What tag is used for emphasizing text (italic)?",options:["<italic>","<i>","<em>","Both <i> and <em>"],answer:"Both <i> and <em>"},
{question:"Which tag defines a footer for a document?",options:["<bottom>","<footer>","<end>","<section>"],answer:"<footer>"},
{question:"What is the purpose of the <label> tag?",options:["Style text","Define a label for an input element","Create a list","Add a heading"],answer:"Define a label for an input element"},
{question:"Which tag is used for creating a dropdown list?",options:["<dropdown>","<input type='dropdown'>","<select>","<list>"],answer:"<select>"},
{question:"What is the role of the <header> element in HTML5?",options:["Defines metadata","Defines introductory content or navigational links","Creates a heading","Links a stylesheet"],answer:"Defines introductory content or navigational links"}
],

// ==================== 3. CSS ====================
"CSS": [
{question:"What does CSS stand for?",options:["Creative Style Sheets","Cascading Style Sheets","Computer Style Sheets","Colorful Style Sheets"],answer:"Cascading Style Sheets"},
{question:"Which property is used to change the background color?",options:["bgcolor","color","background-color","back-color"],answer:"background-color"},
{question:"How do you select an element with id 'main'?",options:[".main","#main","*main","main"],answer:"#main"},
{question:"Which CSS property controls the text size?",options:["text-style","font-size","text-size","font-style"],answer:"font-size"},
{question:"What is the CSS box model?",options:["A layout model including content, padding, border, margin","A 3D rendering model","A grid system","A text formatting model"],answer:"A layout model including content, padding, border, margin"},
{question:"Which property is used to make text bold?",options:["text-style: bold","font-weight: bold","font-style: bold","text-weight: bold"],answer:"font-weight: bold"},
{question:"What does 'display: flex' do?",options:["Hides the element","Makes the element a flex container","Floats the element","Sets position to absolute"],answer:"Makes the element a flex container"},
{question:"Which property sets the space between an element's border and its content?",options:["margin","spacing","padding","border-spacing"],answer:"padding"},
{question:"What is CSS specificity?",options:["The order of CSS files","A ranking system to determine which styles apply","The speed of CSS rendering","A type of animation"],answer:"A ranking system to determine which styles apply"},
{question:"Which value of position places an element relative to the viewport?",options:["relative","absolute","fixed","static"],answer:"fixed"},
{question:"What does z-index control?",options:["The width of an element","The opacity","The stacking order of elements","The font size"],answer:"The stacking order of elements"},
{question:"Which CSS property creates rounded corners?",options:["corner-radius","border-radius","border-round","radius"],answer:"border-radius"},
{question:"How do you apply a style to all <p> elements?",options:["#p { }",".p { }","p { }","*p { }"],answer:"p { }"},
{question:"What is a media query used for?",options:["Querying a database","Applying styles based on device characteristics","Playing media files","Linking CSS files"],answer:"Applying styles based on device characteristics"},
{question:"Which pseudo-class selects an element when hovered?",options:[":active",":focus",":hover",":visited"],answer:":hover"},
{question:"What does 'display: none' do?",options:["Makes element transparent","Removes element from the document flow","Hides but keeps space","Moves element off-screen"],answer:"Removes element from the document flow"},
{question:"Which property aligns items along the main axis in Flexbox?",options:["align-items","align-content","justify-content","flex-align"],answer:"justify-content"},
{question:"What is the difference between margin and padding?",options:["No difference","Margin is outside the border; padding is inside","Padding is outside the border","Both are the same"],answer:"Margin is outside the border; padding is inside"},
{question:"Which CSS property is used to change the font?",options:["font-family","font-style","text-font","font-type"],answer:"font-family"},
{question:"What does the '>' combinator select?",options:["All descendants","Direct children only","Siblings","Previous elements"],answer:"Direct children only"},
{question:"Which unit is relative to the font-size of the element?",options:["px","rem","em","vw"],answer:"em"},
{question:"What does 'position: relative' do?",options:["Positions relative to the viewport","Positions relative to its normal position","Removes from flow","Positions relative to parent"],answer:"Positions relative to its normal position"},
{question:"What is a pseudo-element?",options:["A fake HTML element","A keyword to style a specific part of an element","A JavaScript element","An inline element"],answer:"A keyword to style a specific part of an element"},
{question:"Which property controls the direction of flex items?",options:["flex-flow","flex-direction","flex-wrap","flex-order"],answer:"flex-direction"},
{question:"What does 'grid-template-columns' define?",options:["Number of grid rows","Column sizes of a grid container","Grid gap","Grid alignment"],answer:"Column sizes of a grid container"}
],

// ==================== 4. JavaScript ====================
"JavaScript": [
{question:"Which keyword declares a block-scoped variable in JavaScript?",options:["var","let","both var and let","function"],answer:"let"},
{question:"What is a closure in JavaScript?",options:["A type of loop","A function with access to its outer scope","A JavaScript object","A type of variable"],answer:"A function with access to its outer scope"},
{question:"What is hoisting in JavaScript?",options:["Moving declarations to the top of their scope","Deleting variables","Importing modules","Creating closures"],answer:"Moving declarations to the top of their scope"},
{question:"Which method converts a JSON string to a JavaScript object?",options:["JSON.stringify()","JSON.parse()","JSON.convert()","JSON.toObject()"],answer:"JSON.parse()"},
{question:"What is the difference between '==' and '==='?",options:["No difference","== checks value only; === checks value and type","=== checks value only","== is assignment"],answer:"== checks value only; === checks value and type"},
{question:"What does 'typeof null' return?",options:["null","undefined","object","boolean"],answer:"object"},
{question:"What is an arrow function?",options:["A function that returns an arrow","A shorter syntax for writing functions","A generator function","A constructor function"],answer:"A shorter syntax for writing functions"},
{question:"Which method adds an element to the end of an array?",options:["push()","pop()","shift()","unshift()"],answer:"push()"},
{question:"What is the Event Loop in JavaScript?",options:["A for loop for events","A mechanism that handles asynchronous callbacks","A DOM event","An HTML element"],answer:"A mechanism that handles asynchronous callbacks"},
{question:"What is a Promise in JavaScript?",options:["A guaranteed function call","An object representing an eventual completion or failure of an async operation","A type of loop","A global variable"],answer:"An object representing an eventual completion or failure of an async operation"},
{question:"What does 'async/await' do?",options:["Makes code synchronous","Provides a cleaner syntax for working with Promises","Creates new threads","Stops code execution"],answer:"Provides a cleaner syntax for working with Promises"},
{question:"What is the DOM?",options:["A CSS framework","A programming language","Document Object Model — a tree representation of the HTML","A database"],answer:"Document Object Model — a tree representation of the HTML"},
{question:"Which method selects an element by its ID?",options:["querySelector()","getElementById()","getElementsByClassName()","getElement()"],answer:"getElementById()"},
{question:"What does 'use strict' do?",options:["Enables strict mode for cleaner code","Makes code run faster","Disables JavaScript","Imports a library"],answer:"Enables strict mode for cleaner code"},
{question:"What is the difference between let and const?",options:["No difference","let can be reassigned; const cannot","const can be reassigned","Both can be reassigned"],answer:"let can be reassigned; const cannot"},
{question:"What is destructuring in JavaScript?",options:["Destroying objects","Unpacking values from arrays or properties from objects","Removing elements","Merging arrays"],answer:"Unpacking values from arrays or properties from objects"},
{question:"What does the spread operator (...) do?",options:["Spreads elements of an iterable","Deletes elements","Creates a loop","Defines a function"],answer:"Spreads elements of an iterable"},
{question:"What is a callback function?",options:["A function that calls itself","A function passed as an argument to another function","A built-in function","An async function"],answer:"A function passed as an argument to another function"},
{question:"Which ES6 feature allows default parameter values?",options:["Default exports","Default parameters","Spread operator","Rest parameters"],answer:"Default parameters"},
{question:"What does Array.map() return?",options:["A single value","A new array with results of calling a function on every element","Nothing","A boolean"],answer:"A new array with results of calling a function on every element"},
{question:"What is a Set in JavaScript?",options:["An ordered list","A collection of unique values","A key-value pair","An array method"],answer:"A collection of unique values"},
{question:"What is the 'this' keyword in JavaScript?",options:["Refers to the current function","Refers to the object that is executing the current function","A global variable","A reserved keyword with no use"],answer:"Refers to the object that is executing the current function"},
{question:"What is the difference between null and undefined?",options:["Same thing","null is intentional absence; undefined means not assigned","undefined is intentional","null means not declared"],answer:"null is intentional absence; undefined means not assigned"},
{question:"What does setTimeout() do?",options:["Stops execution","Executes a function after a specified delay","Creates a loop","Returns a promise"],answer:"Executes a function after a specified delay"},
{question:"What is event delegation?",options:["Adding events to every child","Attaching a single event handler to a parent to handle events on children","Removing events","Delegating code to the server"],answer:"Attaching a single event handler to a parent to handle events on children"}
],

// ==================== 5. Java ====================
"Java": [
{question:"What does JVM stand for?",options:["Java Variable Machine","Java Virtual Machine","Java Verified Method","Java Visual Machine"],answer:"Java Virtual Machine"},
{question:"Which keyword is used to create a class in Java?",options:["struct","class","object","define"],answer:"class"},
{question:"What is the entry point of a Java program?",options:["start()","begin()","main()","run()"],answer:"main()"},
{question:"What is the difference between JDK, JRE, and JVM?",options:["They are all the same","JDK includes JRE; JRE includes JVM","JVM includes JDK","JRE includes JDK"],answer:"JDK includes JRE; JRE includes JVM"},
{question:"Which keyword is used to inherit a class in Java?",options:["inherits","implements","extends","super"],answer:"extends"},
{question:"What is polymorphism in Java?",options:["Using multiple variables","One interface, multiple implementations","Creating multiple classes","Data hiding"],answer:"One interface, multiple implementations"},
{question:"What is an interface in Java?",options:["A class with implementations","A blueprint of a class with abstract methods","A type of variable","A package"],answer:"A blueprint of a class with abstract methods"},
{question:"Which keyword prevents a method from being overridden?",options:["static","const","final","abstract"],answer:"final"},
{question:"What is method overloading?",options:["Same name, different parameters","Same name, same parameters","Different name, same parameters","Overriding a method"],answer:"Same name, different parameters"},
{question:"What is abstraction in Java?",options:["Showing all details","Hiding implementation and showing functionality","Copying objects","Deleting objects"],answer:"Hiding implementation and showing functionality"},
{question:"Which collection stores key-value pairs?",options:["ArrayList","HashSet","HashMap","LinkedList"],answer:"HashMap"},
{question:"What is the difference between ArrayList and LinkedList?",options:["Same thing","ArrayList uses array; LinkedList uses doubly-linked list","LinkedList is faster for access","ArrayList uses linked list"],answer:"ArrayList uses array; LinkedList uses doubly-linked list"},
{question:"What is exception handling?",options:["Preventing errors from compiling","A mechanism to handle runtime errors using try-catch","Logging errors","Ignoring errors"],answer:"A mechanism to handle runtime errors using try-catch"},
{question:"What does the 'super' keyword do?",options:["Creates a new object","Refers to the parent class","Deletes an object","Defines a method"],answer:"Refers to the parent class"},
{question:"What is a constructor in Java?",options:["A method that destroys objects","A special method called when an object is created","A static method","A final method"],answer:"A special method called when an object is created"},
{question:"Which access modifier allows access from any class?",options:["private","protected","default","public"],answer:"public"},
{question:"What is the purpose of the 'static' keyword?",options:["Makes a variable constant","Indicates the member belongs to the class, not instances","Creates an object","Enables inheritance"],answer:"Indicates the member belongs to the class, not instances"},
{question:"What is multithreading in Java?",options:["Running one task at a time","Executing multiple threads simultaneously","Using multiple variables","Creating multiple classes"],answer:"Executing multiple threads simultaneously"},
{question:"What does the 'this' keyword refer to in Java?",options:["The parent class","The current instance of the class","A static member","A global variable"],answer:"The current instance of the class"},
{question:"What is an abstract class?",options:["A class that cannot have methods","A class that cannot be instantiated and may have abstract methods","A final class","A static class"],answer:"A class that cannot be instantiated and may have abstract methods"},
{question:"Which loop is guaranteed to execute at least once?",options:["for","while","do-while","foreach"],answer:"do-while"},
{question:"What is the difference between == and .equals() in Java?",options:["Same thing","== compares references; .equals() compares values","== compares values","equals() compares references"],answer:"== compares references; .equals() compares values"},
{question:"What is garbage collection in Java?",options:["Manual memory management","Automatic memory management that removes unused objects","Deleting source code","Compiling code"],answer:"Automatic memory management that removes unused objects"},
{question:"What is encapsulation in Java?",options:["Inheriting classes","Wrapping data and methods in a single unit with access control","Using interfaces","Creating packages"],answer:"Wrapping data and methods in a single unit with access control"},
{question:"What is a package in Java?",options:["A type of variable","A group of related classes and interfaces","A method","A keyword"],answer:"A group of related classes and interfaces"}
],

// ==================== 6. Python ====================
"Python": [
{question:"Which keyword is used to define a function in Python?",options:["function","func","def","define"],answer:"def"},
{question:"What is a list in Python?",options:["An immutable sequence","A mutable ordered collection","A key-value pair","A set of unique elements"],answer:"A mutable ordered collection"},
{question:"What is the difference between a list and a tuple?",options:["No difference","Lists are mutable; tuples are immutable","Tuples are mutable","Lists are immutable"],answer:"Lists are mutable; tuples are immutable"},
{question:"What does 'len()' function do?",options:["Returns the data type","Returns the number of items","Sorts the items","Reverses the items"],answer:"Returns the number of items"},
{question:"What is a dictionary in Python?",options:["An ordered list","A collection of key-value pairs","A set","A tuple"],answer:"A collection of key-value pairs"},
{question:"Which keyword is used to handle exceptions?",options:["catch","error","except","handle"],answer:"except"},
{question:"What is a lambda function?",options:["A named function","A small anonymous function","A class method","A module"],answer:"A small anonymous function"},
{question:"What is the output of type([]) in Python?",options:["<class 'tuple'>","<class 'dict'>","<class 'list'>","<class 'set'>"],answer:"<class 'list'>"},
{question:"How do you create a set in Python?",options:["set()","[]","()","{}"],answer:"set()"},
{question:"What is a decorator in Python?",options:["A design pattern","A function that modifies another function","A type of variable","A module"],answer:"A function that modifies another function"},
{question:"What does 'self' refer to in a Python class?",options:["The class itself","The current instance of the class","A global variable","A static method"],answer:"The current instance of the class"},
{question:"Which method adds an element to a list?",options:["add()","push()","append()","insert()"],answer:"append()"},
{question:"What is inheritance in Python?",options:["Creating new variables","A class inheriting attributes from another class","Deleting a class","Copying a module"],answer:"A class inheriting attributes from another class"},
{question:"What is the __init__ method?",options:["A destructor","A constructor that initializes an object","A static method","A class variable"],answer:"A constructor that initializes an object"},
{question:"What is a generator in Python?",options:["A function that returns a single value","A function that yields values one at a time using yield","A built-in module","A type of list"],answer:"A function that yields values one at a time using yield"},
{question:"What is the difference between '==' and 'is'?",options:["Same thing","== compares values; is compares identity","is compares values","== compares identity"],answer:"== compares values; is compares identity"},
{question:"What is a module in Python?",options:["A class","A file containing Python code","A variable","A function"],answer:"A file containing Python code"},
{question:"Which keyword imports a module?",options:["include","require","import","using"],answer:"import"},
{question:"What is list comprehension?",options:["A way to understand lists","A concise way to create lists","A type of loop","A sorting algorithm"],answer:"A concise way to create lists"},
{question:"What does the 'pass' statement do?",options:["Exits a loop","Does nothing — acts as a placeholder","Passes a value","Skips an iteration"],answer:"Does nothing — acts as a placeholder"},
{question:"What is a Python package?",options:["A single file","A directory of modules with an __init__.py file","A variable","A function"],answer:"A directory of modules with an __init__.py file"},
{question:"What does the 'with' statement do?",options:["Creates a loop","Simplifies resource management like file handling","Defines a function","Imports a module"],answer:"Simplifies resource management like file handling"},
{question:"What is the Global Interpreter Lock (GIL)?",options:["A file lock","A mutex that allows only one thread to execute Python bytecode at a time","A global variable","A decorator"],answer:"A mutex that allows only one thread to execute Python bytecode at a time"},
{question:"What is the difference between deep copy and shallow copy?",options:["Same thing","Shallow copy copies references; deep copy copies objects recursively","Deep copy copies references","No difference in Python"],answer:"Shallow copy copies references; deep copy copies objects recursively"},
{question:"What are *args and **kwargs?",options:["Error handlers","*args passes variable positional arguments; **kwargs passes variable keyword arguments","Loop variables","Module names"],answer:"*args passes variable positional arguments; **kwargs passes variable keyword arguments"}
],

// ==================== 7. Node.js ====================
"Node.js": [
{question:"What is Node.js?",options:["A frontend framework","A JavaScript runtime built on Chrome's V8 engine","A database","A CSS library"],answer:"A JavaScript runtime built on Chrome's V8 engine"},
{question:"Which command initializes a Node.js project?",options:["node start","npm init","node init","npm start"],answer:"npm init"},
{question:"What is the Event Loop in Node.js?",options:["A type of for loop","A mechanism that handles asynchronous operations","A database query","An HTTP method"],answer:"A mechanism that handles asynchronous operations"},
{question:"What is npm?",options:["Node Package Module","Node Package Manager","New Package Manager","Node Program Manager"],answer:"Node Package Manager"},
{question:"Which module is used for file operations in Node.js?",options:["http","path","fs","os"],answer:"fs"},
{question:"What is a callback function in Node.js?",options:["A function that calls itself","A function passed as an argument and called after async operation completes","A constructor","A built-in method"],answer:"A function passed as an argument and called after async operation completes"},
{question:"How do you import a module in Node.js?",options:["import module","include module","require('module')","load('module')"],answer:"require('module')"},
{question:"What is middleware in Node.js?",options:["A database","Functions that execute between request and response","A frontend library","A test framework"],answer:"Functions that execute between request and response"},
{question:"What is the purpose of package.json?",options:["Store HTML","Contains project metadata and dependencies","Define database schema","Store CSS"],answer:"Contains project metadata and dependencies"},
{question:"What are Streams in Node.js?",options:["CSS animations","Objects that let you read/write data continuously","Database queries","HTML elements"],answer:"Objects that let you read/write data continuously"},
{question:"What is a Buffer in Node.js?",options:["A type of array","A temporary storage for binary data","A string method","A file type"],answer:"A temporary storage for binary data"},
{question:"How do you create an HTTP server in Node.js?",options:["http.createServer()","server.create()","node.server()","new Server()"],answer:"http.createServer()"},
{question:"What is the difference between require() and import?",options:["Same thing","require() is CommonJS; import is ES modules","import is older","require() is ES modules"],answer:"require() is CommonJS; import is ES modules"},
{question:"What is the EventEmitter class?",options:["A CSS class","A class that handles events and listeners","A DOM element","A database model"],answer:"A class that handles events and listeners"},
{question:"What does process.env contain?",options:["Process ID","Environment variables","File paths","HTTP headers"],answer:"Environment variables"},
{question:"Which method is used to read a file asynchronously?",options:["fs.readFileSync()","fs.readFile()","fs.read()","fs.open()"],answer:"fs.readFile()"},
{question:"What is the purpose of the 'path' module?",options:["Send HTTP requests","Work with file and directory paths","Create databases","Handle events"],answer:"Work with file and directory paths"},
{question:"What are Promises in Node.js?",options:["Guaranteed function calls","Objects representing eventual completion or failure of async operations","Synchronous functions","Global variables"],answer:"Objects representing eventual completion or failure of async operations"},
{question:"What does async/await do in Node.js?",options:["Creates threads","Provides cleaner syntax for working with Promises","Blocks the event loop","Imports modules"],answer:"Provides cleaner syntax for working with Promises"},
{question:"What is the purpose of .env files?",options:["Store CSS variables","Store environment-specific configuration","Define routes","Create templates"],answer:"Store environment-specific configuration"},
{question:"What is the difference between synchronous and asynchronous code?",options:["No difference","Sync blocks execution; async allows non-blocking execution","Async blocks execution","Sync is faster"],answer:"Sync blocks execution; async allows non-blocking execution"},
{question:"What is clustering in Node.js?",options:["Grouping files","Creating multiple processes to handle load","A database technique","A CSS layout"],answer:"Creating multiple processes to handle load"},
{question:"What is the purpose of nodemon?",options:["A database","Automatically restarts the server on file changes","A testing framework","A build tool"],answer:"Automatically restarts the server on file changes"},
{question:"What is the global object in Node.js?",options:["window","document","global","this"],answer:"global"},
{question:"What is the purpose of the 'os' module?",options:["Handle HTTP requests","Provides operating system-related utility methods","Create files","Manage databases"],answer:"Provides operating system-related utility methods"}
],

// ==================== 8. Express.js ====================
"Express.js": [
{question:"What is Express.js?",options:["A database","A frontend framework","A minimal Node.js web application framework","A CSS library"],answer:"A minimal Node.js web application framework"},
{question:"How do you install Express.js?",options:["npm install express","node install express","pip install express","apt install express"],answer:"npm install express"},
{question:"Which method handles GET requests in Express?",options:["app.post()","app.get()","app.fetch()","app.receive()"],answer:"app.get()"},
{question:"What is middleware in Express.js?",options:["A database layer","Functions that have access to req, res, and next","A frontend component","A CSS preprocessor"],answer:"Functions that have access to req, res, and next"},
{question:"How do you start the Express server on port 3000?",options:["app.listen(3000)","app.start(3000)","app.run(3000)","server.begin(3000)"],answer:"app.listen(3000)"},
{question:"What is routing in Express.js?",options:["Navigating the DOM","Defining endpoints that respond to client requests","Database queries","CSS transitions"],answer:"Defining endpoints that respond to client requests"},
{question:"Which object represents the HTTP request?",options:["res","response","req","request"],answer:"req"},
{question:"Which object represents the HTTP response?",options:["req","res","resp","reply"],answer:"res"},
{question:"How do you send a JSON response?",options:["res.send()","res.json()","res.write()","res.render()"],answer:"res.json()"},
{question:"What does app.use() do?",options:["Uses a database","Mounts middleware functions","Creates a route","Imports a module"],answer:"Mounts middleware functions"},
{question:"How do you access URL parameters in Express?",options:["req.query","req.params","req.body","req.url"],answer:"req.params"},
{question:"How do you access query string parameters?",options:["req.params","req.query","req.body","req.search"],answer:"req.query"},
{question:"What does express.json() middleware do?",options:["Sends JSON","Parses incoming JSON request bodies","Creates JSON files","Validates JSON"],answer:"Parses incoming JSON request bodies"},
{question:"What is CORS?",options:["A database","Cross-Origin Resource Sharing","A CSS property","A Node module"],answer:"Cross-Origin Resource Sharing"},
{question:"How do you define a POST route?",options:["app.get('/route', handler)","app.post('/route', handler)","app.put('/route', handler)","app.send('/route', handler)"],answer:"app.post('/route', handler)"},
{question:"What does next() do in middleware?",options:["Stops execution","Passes control to the next middleware function","Returns a response","Throws an error"],answer:"Passes control to the next middleware function"},
{question:"How do you serve static files in Express?",options:["app.static()","express.static()","app.serve()","express.files()"],answer:"express.static()"},
{question:"What HTTP status code indicates success?",options:["404","500","200","301"],answer:"200"},
{question:"What HTTP status code means 'Not Found'?",options:["200","500","404","403"],answer:"404"},
{question:"How do you handle errors in Express?",options:["Using try-catch only","Using error-handling middleware with 4 parameters (err, req, res, next)","Ignoring them","Using console.log"],answer:"Using error-handling middleware with 4 parameters (err, req, res, next)"},
{question:"What is a route parameter?",options:["A query string","A named URL segment used to capture values (e.g., /user/:id)","A header value","A cookie"],answer:"A named URL segment used to capture values (e.g., /user/:id)"},
{question:"Which method handles PUT requests?",options:["app.get()","app.post()","app.put()","app.patch()"],answer:"app.put()"},
{question:"What does res.status() do?",options:["Gets the status","Sets the HTTP status code for the response","Creates a status page","Checks server status"],answer:"Sets the HTTP status code for the response"},
{question:"Which method handles DELETE requests?",options:["app.remove()","app.del()","app.delete()","app.destroy()"],answer:"app.delete()"},
{question:"What is Express Router?",options:["A frontend router","A mini Express application for modular route handling","A database router","A file system module"],answer:"A mini Express application for modular route handling"}
],

// ==================== 9. React ====================
"React": [
{question:"What is React?",options:["A backend framework","A JavaScript library for building user interfaces","A database","A CSS framework"],answer:"A JavaScript library for building user interfaces"},
{question:"What is JSX?",options:["A JavaScript extension that allows writing HTML-like syntax","A new programming language","A CSS preprocessor","A database query language"],answer:"A JavaScript extension that allows writing HTML-like syntax"},
{question:"What are components in React?",options:["CSS styles","Reusable, independent pieces of UI","Database tables","Server routes"],answer:"Reusable, independent pieces of UI"},
{question:"What are props in React?",options:["CSS properties","Read-only inputs passed from parent to child components","State variables","Event handlers"],answer:"Read-only inputs passed from parent to child components"},
{question:"What is state in React?",options:["A CSS property","A built-in object that stores component data and triggers re-render on change","A global variable","A route parameter"],answer:"A built-in object that stores component data and triggers re-render on change"},
{question:"What does useState() return?",options:["A single value","An array with the state value and a function to update it","An object","A boolean"],answer:"An array with the state value and a function to update it"},
{question:"What is the Virtual DOM?",options:["The actual browser DOM","A lightweight copy of the DOM that React uses for performance","A CSS model","A database"],answer:"A lightweight copy of the DOM that React uses for performance"},
{question:"What does useEffect() do?",options:["Updates state","Performs side effects in functional components","Creates a component","Handles routing"],answer:"Performs side effects in functional components"},
{question:"What is conditional rendering in React?",options:["Rendering CSS conditionally","Rendering components based on conditions","Database filtering","Server-side rendering"],answer:"Rendering components based on conditions"},
{question:"Why are keys important in React lists?",options:["For styling","To help React identify which items changed, added, or removed","For routing","For state management"],answer:"To help React identify which items changed, added, or removed"},
{question:"What is the difference between functional and class components?",options:["No difference","Functional uses functions and hooks; class uses ES6 classes and lifecycle methods","Class components are faster","Functional components can't have state"],answer:"Functional uses functions and hooks; class uses ES6 classes and lifecycle methods"},
{question:"What is React Router?",options:["A state management library","A library for handling navigation in React apps","A build tool","A testing framework"],answer:"A library for handling navigation in React apps"},
{question:"What is the purpose of the useContext hook?",options:["Manage local state","Access context values without prop drilling","Handle side effects","Optimize rendering"],answer:"Access context values without prop drilling"},
{question:"What is prop drilling?",options:["A testing technique","Passing props through multiple nested components","A build process","A styling method"],answer:"Passing props through multiple nested components"},
{question:"How do you handle events in React?",options:["Using onclick attribute","Using camelCase event handlers like onClick","Using addEventListener","Using jQuery"],answer:"Using camelCase event handlers like onClick"},
{question:"What does React.Fragment do?",options:["Creates a fragment of CSS","Groups elements without adding extra DOM nodes","Creates a new component","Splits components"],answer:"Groups elements without adding extra DOM nodes"},
{question:"What is the purpose of useRef?",options:["Create a reference to a DOM element or persist a value without re-rendering","Manage global state","Handle routing","Create side effects"],answer:"Create a reference to a DOM element or persist a value without re-rendering"},
{question:"What is lifting state up?",options:["Moving state to a child component","Moving state to a common ancestor component","Deleting state","Creating global state"],answer:"Moving state to a common ancestor component"},
{question:"What are controlled components?",options:["Components controlled by CSS","Form elements whose value is controlled by React state","Server-rendered components","External components"],answer:"Form elements whose value is controlled by React state"},
{question:"What is the dependency array in useEffect?",options:["An array of components","An array that determines when the effect should re-run","A list of imports","A routing configuration"],answer:"An array that determines when the effect should re-run"},
{question:"What does useMemo do?",options:["Manages state","Memoizes a computed value to avoid expensive recalculations","Handles events","Creates refs"],answer:"Memoizes a computed value to avoid expensive recalculations"},
{question:"What is a Higher-Order Component (HOC)?",options:["A parent component","A function that takes a component and returns a new component","A styled component","A route component"],answer:"A function that takes a component and returns a new component"},
{question:"How do you handle forms in React?",options:["Using document.forms","Using controlled components with state and onChange handlers","Using jQuery","Using direct DOM manipulation"],answer:"Using controlled components with state and onChange handlers"},
{question:"What is the difference between state and props?",options:["Same thing","State is internal and mutable; props are external and read-only","Props are mutable","State is read-only"],answer:"State is internal and mutable; props are external and read-only"},
{question:"What is React StrictMode?",options:["A production mode","A development tool that highlights potential problems","A testing framework","A build configuration"],answer:"A development tool that highlights potential problems"}
],

// ==================== 10. MongoDB ====================
"MongoDB": [
{question:"What type of database is MongoDB?",options:["Relational","NoSQL document-based database","Graph database","Key-value store only"],answer:"NoSQL document-based database"},
{question:"What is a document in MongoDB?",options:["A text file","A JSON-like record stored in a collection","A table row","An HTML file"],answer:"A JSON-like record stored in a collection"},
{question:"What is a collection in MongoDB?",options:["A table","A group of MongoDB documents","A database","A query"],answer:"A group of MongoDB documents"},
{question:"Which command inserts a document?",options:["db.collection.add()","db.collection.insertOne()","db.collection.push()","db.collection.create()"],answer:"db.collection.insertOne()"},
{question:"Which command finds all documents in a collection?",options:["db.collection.getAll()","db.collection.find()","db.collection.select()","db.collection.fetch()"],answer:"db.collection.find()"},
{question:"What is the default port for MongoDB?",options:["3000","5432","27017","8080"],answer:"27017"},
{question:"What is the _id field in MongoDB?",options:["A user-defined field","A unique identifier automatically added to every document","A collection name","A database name"],answer:"A unique identifier automatically added to every document"},
{question:"Which command updates a document?",options:["db.collection.modify()","db.collection.updateOne()","db.collection.change()","db.collection.set()"],answer:"db.collection.updateOne()"},
{question:"Which command deletes a document?",options:["db.collection.remove()","db.collection.deleteOne()","db.collection.drop()","db.collection.destroy()"],answer:"db.collection.deleteOne()"},
{question:"What is an index in MongoDB?",options:["A page number","A data structure that improves query performance","A collection type","A field type"],answer:"A data structure that improves query performance"},
{question:"What is the aggregation pipeline?",options:["A data import tool","A framework for data processing and transformation","A backup tool","A monitoring tool"],answer:"A framework for data processing and transformation"},
{question:"What is an embedded document?",options:["A separate collection","A document nested inside another document","A linked document","An external file"],answer:"A document nested inside another document"},
{question:"What is Mongoose?",options:["A MongoDB shell","An ODM library for MongoDB and Node.js","A frontend framework","A testing tool"],answer:"An ODM library for MongoDB and Node.js"},
{question:"What does BSON stand for?",options:["Basic Standard Object Notation","Binary JSON","Boolean JSON","Byte Standard Object Notation"],answer:"Binary JSON"},
{question:"Which operator is used for comparison in queries?",options:["$match","$eq","$compare","$filter"],answer:"$eq"},
{question:"How do you sort results in MongoDB?",options:[".order()","sort()","orderBy()","arrange()"],answer:"sort()"},
{question:"What is the difference between MongoDB and SQL databases?",options:["No difference","MongoDB is document-based and schema-flexible; SQL is table-based and schema-rigid","MongoDB uses tables","SQL is schema-flexible"],answer:"MongoDB is document-based and schema-flexible; SQL is table-based and schema-rigid"},
{question:"What does $set operator do?",options:["Creates a new collection","Updates specific fields in a document","Deletes a field","Renames a field"],answer:"Updates specific fields in a document"},
{question:"What is a replica set?",options:["A copy of a query","A group of MongoDB servers that maintain the same data set","A type of index","A backup file"],answer:"A group of MongoDB servers that maintain the same data set"},
{question:"Which command creates a new database in MongoDB?",options:["CREATE DATABASE","db.create()","use databaseName","new Database()"],answer:"use databaseName"},
{question:"What is sharding in MongoDB?",options:["Splitting a collection across multiple servers","Creating backups","Deleting data","Compressing data"],answer:"Splitting a collection across multiple servers"},
{question:"Which aggregation stage filters documents?",options:["$project","$group","$match","$sort"],answer:"$match"},
{question:"What does $push operator do?",options:["Pushes a server","Adds an element to an array field","Removes an element","Updates a field"],answer:"Adds an element to an array field"},
{question:"What is the difference between find() and findOne()?",options:["Same thing","find() returns all matches; findOne() returns the first match","findOne() returns all","find() returns one"],answer:"find() returns all matches; findOne() returns the first match"},
{question:"What is a schema in Mongoose?",options:["A database","A structure that defines the shape of documents in a collection","A query","A middleware"],answer:"A structure that defines the shape of documents in a collection"}
],

// ==================== 11. MERN Stack ====================
"MERN Stack": [
{question:"What does MERN stand for?",options:["MongoDB, Express.js, React, Node.js","MySQL, Express.js, React, Node.js","MongoDB, Ember, React, Node.js","MongoDB, Express.js, Redux, Node.js"],answer:"MongoDB, Express.js, React, Node.js"},
{question:"Which part of MERN handles the frontend?",options:["MongoDB","Express.js","React","Node.js"],answer:"React"},
{question:"Which part of MERN handles the backend?",options:["React","Node.js with Express.js","MongoDB","HTML"],answer:"Node.js with Express.js"},
{question:"What role does MongoDB play in MERN?",options:["Frontend framework","Server runtime","Database","Styling library"],answer:"Database"},
{question:"How does the frontend communicate with the backend in MERN?",options:["Direct database access","Through REST APIs or HTTP requests","Through CSS","Through HTML forms only"],answer:"Through REST APIs or HTTP requests"},
{question:"What is Axios commonly used for in MERN?",options:["Styling components","Making HTTP requests from the frontend","Database queries","Routing"],answer:"Making HTTP requests from the frontend"},
{question:"What is CORS and why is it needed?",options:["A database feature","Cross-Origin Resource Sharing — allows frontend and backend on different origins to communicate","A CSS framework","A React hook"],answer:"Cross-Origin Resource Sharing — allows frontend and backend on different origins to communicate"},
{question:"What is a REST API?",options:["A React component","An architectural style for designing networked applications using HTTP methods","A database type","A CSS framework"],answer:"An architectural style for designing networked applications using HTTP methods"},
{question:"Which HTTP method is used to create a resource?",options:["GET","POST","PUT","DELETE"],answer:"POST"},
{question:"Which HTTP method is used to read a resource?",options:["POST","GET","DELETE","PATCH"],answer:"GET"},
{question:"Which HTTP method is used to update a resource?",options:["GET","POST","PUT","DELETE"],answer:"PUT"},
{question:"Which HTTP method is used to delete a resource?",options:["GET","POST","PUT","DELETE"],answer:"DELETE"},
{question:"What is the typical folder structure for a MERN app?",options:["Single folder","Separate client (React) and server (Node/Express) folders","Only backend","Only frontend"],answer:"Separate client (React) and server (Node/Express) folders"},
{question:"What does Mongoose do in a MERN application?",options:["Handles routing","Provides object modeling for MongoDB in Node.js","Manages React state","Handles CSS"],answer:"Provides object modeling for MongoDB in Node.js"},
{question:"How do you connect to MongoDB from Node.js?",options:["Using SQL queries","Using mongoose.connect() or MongoClient","Using fetch()","Using import"],answer:"Using mongoose.connect() or MongoClient"},
{question:"What is a CRUD application?",options:["A CSS framework","An application that performs Create, Read, Update, Delete operations","A testing tool","A deployment tool"],answer:"An application that performs Create, Read, Update, Delete operations"},
{question:"Why use environment variables in MERN?",options:["For styling","To store sensitive data like database URLs and API keys securely","For routing","For testing"],answer:"To store sensitive data like database URLs and API keys securely"},
{question:"What is the role of Express.js middleware in MERN?",options:["Frontend rendering","Processing requests between receiving and sending responses","Database management","CSS processing"],answer:"Processing requests between receiving and sending responses"},
{question:"What is JWT commonly used for in MERN?",options:["Styling","JSON Web Token — used for authentication and authorization","Database queries","File handling"],answer:"JSON Web Token — used for authentication and authorization"},
{question:"What is the purpose of proxy in React's package.json?",options:["Security","Redirects API requests to the backend during development","Database connection","CSS compilation"],answer:"Redirects API requests to the backend during development"},
{question:"What is the difference between SQL and NoSQL databases?",options:["Same thing","SQL uses structured tables; NoSQL uses flexible documents","NoSQL uses tables","SQL is document-based"],answer:"SQL uses structured tables; NoSQL uses flexible documents"},
{question:"How do you deploy a MERN application?",options:["Only frontend deployment","Deploy frontend and backend separately or together on platforms like Heroku, Vercel, or AWS","No deployment needed","Using CSS"],answer:"Deploy frontend and backend separately or together on platforms like Heroku, Vercel, or AWS"},
{question:"What is state management in a MERN app?",options:["CSS styling","Managing application data across components using tools like useState, Context API, or Redux","Database management","Server configuration"],answer:"Managing application data across components using tools like useState, Context API, or Redux"},
{question:"What does res.json() do in Express?",options:["Reads a JSON file","Sends a JSON response to the client","Parses JSON","Creates a JSON file"],answer:"Sends a JSON response to the client"},
{question:"What is the benefit of using MERN stack?",options:["Uses multiple languages","Full-stack JavaScript — same language across frontend, backend, and database queries","Requires no coding","Only works with SQL"],answer:"Full-stack JavaScript — same language across frontend, backend, and database queries"}
],

// ==================== 12. SQL ====================
"SQL": [
{question:"What does SQL stand for?",options:["Structured Query Language","Simple Query Language","Standard Query Language","Sequential Query Language"],answer:"Structured Query Language"},
{question:"Which SQL statement is used to retrieve data?",options:["GET","FETCH","SELECT","RETRIEVE"],answer:"SELECT"},
{question:"Which clause filters rows in a SELECT statement?",options:["HAVING","ORDER BY","WHERE","GROUP BY"],answer:"WHERE"},
{question:"What does the GROUP BY clause do?",options:["Sorts results","Groups rows that have the same values in specified columns","Filters groups","Limits results"],answer:"Groups rows that have the same values in specified columns"},
{question:"What is the difference between WHERE and HAVING?",options:["Same thing","WHERE filters rows before grouping; HAVING filters groups after grouping","HAVING filters rows","WHERE filters groups"],answer:"WHERE filters rows before grouping; HAVING filters groups after grouping"},
{question:"Which clause sorts the result set?",options:["SORT BY","GROUP BY","ORDER BY","ARRANGE BY"],answer:"ORDER BY"},
{question:"What is a JOIN in SQL?",options:["Merging tables vertically","Combining rows from two or more tables based on a related column","Deleting tables","Creating tables"],answer:"Combining rows from two or more tables based on a related column"},
{question:"What does INNER JOIN return?",options:["All rows from both tables","Only matching rows from both tables","All rows from the left table","All rows from the right table"],answer:"Only matching rows from both tables"},
{question:"What does LEFT JOIN return?",options:["Only matching rows","All rows from the left table and matching rows from the right","All rows from the right table","No rows"],answer:"All rows from the left table and matching rows from the right"},
{question:"What is a PRIMARY KEY?",options:["A foreign reference","A column that uniquely identifies each row in a table","An index","A constraint that allows nulls"],answer:"A column that uniquely identifies each row in a table"},
{question:"What is a FOREIGN KEY?",options:["A primary key in another table","A column that references the primary key of another table","A unique constraint","An index type"],answer:"A column that references the primary key of another table"},
{question:"What is a subquery?",options:["A type of JOIN","A query nested inside another query","A stored procedure","A trigger"],answer:"A query nested inside another query"},
{question:"Which function returns the number of rows?",options:["SUM()","AVG()","COUNT()","TOTAL()"],answer:"COUNT()"},
{question:"Which function returns the total sum of a column?",options:["COUNT()","TOTAL()","SUM()","ADD()"],answer:"SUM()"},
{question:"What does DISTINCT do?",options:["Sorts results","Returns only unique values","Groups results","Filters nulls"],answer:"Returns only unique values"},
{question:"What is normalization?",options:["Deleting data","Organizing data to reduce redundancy","Backing up data","Encrypting data"],answer:"Organizing data to reduce redundancy"},
{question:"What does INSERT INTO do?",options:["Updates rows","Adds new rows to a table","Deletes rows","Creates a table"],answer:"Adds new rows to a table"},
{question:"Which statement modifies existing data?",options:["INSERT","UPDATE","ALTER","CREATE"],answer:"UPDATE"},
{question:"Which statement removes rows from a table?",options:["REMOVE","DROP","DELETE","TRUNCATE"],answer:"DELETE"},
{question:"What does ALTER TABLE do?",options:["Deletes a table","Modifies the structure of an existing table","Creates a table","Selects data"],answer:"Modifies the structure of an existing table"},
{question:"What is an INDEX in SQL?",options:["A constraint","A data structure that improves the speed of queries","A type of JOIN","A key"],answer:"A data structure that improves the speed of queries"},
{question:"What does RIGHT JOIN return?",options:["Only matching rows","All rows from left table","All rows from the right table and matching rows from the left","No rows"],answer:"All rows from the right table and matching rows from the left"},
{question:"What is a constraint in SQL?",options:["A query type","Rules enforced on data columns to ensure data integrity","A function","A table type"],answer:"Rules enforced on data columns to ensure data integrity"},
{question:"What does the LIKE operator do?",options:["Compares exact values","Searches for a specified pattern in a column","Joins tables","Groups data"],answer:"Searches for a specified pattern in a column"},
{question:"What is the difference between DELETE and TRUNCATE?",options:["Same thing","DELETE removes specific rows and can be rolled back; TRUNCATE removes all rows and is faster","TRUNCATE can filter rows","DELETE is faster"],answer:"DELETE removes specific rows and can be rolled back; TRUNCATE removes all rows and is faster"}
],

// ==================== 13. Git ====================
"Git": [
{question:"What is Git?",options:["A programming language","A distributed version control system","A text editor","A database"],answer:"A distributed version control system"},
{question:"Which command initializes a new Git repository?",options:["git start","git create","git init","git new"],answer:"git init"},
{question:"Which command stages all changes for commit?",options:["git stage .","git add .","git commit .","git push ."],answer:"git add ."},
{question:"Which command saves staged changes with a message?",options:["git save -m 'msg'","git commit -m 'msg'","git push -m 'msg'","git add -m 'msg'"],answer:"git commit -m 'msg'"},
{question:"What does 'git push' do?",options:["Downloads changes","Uploads local commits to a remote repository","Creates a branch","Deletes a repository"],answer:"Uploads local commits to a remote repository"},
{question:"What does 'git pull' do?",options:["Pushes changes","Fetches and merges changes from a remote repository","Creates a branch","Stages changes"],answer:"Fetches and merges changes from a remote repository"},
{question:"Which command shows the current status of the working directory?",options:["git info","git status","git log","git show"],answer:"git status"},
{question:"Which command creates a new branch?",options:["git branch new-branch","git create new-branch","git new new-branch","git add branch"],answer:"git branch new-branch"},
{question:"Which command switches to a different branch?",options:["git switch branch-name","git change branch-name","git move branch-name","git go branch-name"],answer:"git switch branch-name"},
{question:"What does 'git merge' do?",options:["Deletes a branch","Combines changes from one branch into another","Creates a new branch","Reverts changes"],answer:"Combines changes from one branch into another"},
{question:"What does 'git clone' do?",options:["Creates a new branch","Creates a copy of a remote repository locally","Deletes a repository","Pushes changes"],answer:"Creates a copy of a remote repository locally"},
{question:"What does 'git log' show?",options:["File contents","Commit history","Branch list","Remote URLs"],answer:"Commit history"},
{question:"What does 'git reset' do?",options:["Creates a new commit","Undoes changes by resetting the current HEAD","Pushes changes","Merges branches"],answer:"Undoes changes by resetting the current HEAD"},
{question:"What is the difference between 'git fetch' and 'git pull'?",options:["Same thing","fetch downloads changes without merging; pull downloads and merges","fetch merges; pull doesn't","No difference"],answer:"fetch downloads changes without merging; pull downloads and merges"},
{question:"What is a merge conflict?",options:["A Git error","When two branches have competing changes to the same line","A network error","A permission issue"],answer:"When two branches have competing changes to the same line"},
{question:"What does '.gitignore' do?",options:["Ignores Git commands","Specifies files and directories that Git should not track","Deletes files","Hides the repository"],answer:"Specifies files and directories that Git should not track"},
{question:"What does 'git stash' do?",options:["Deletes changes","Temporarily saves uncommitted changes","Commits changes","Pushes changes"],answer:"Temporarily saves uncommitted changes"},
{question:"What is the HEAD in Git?",options:["The first commit","A pointer to the current commit/branch","The remote server","A file name"],answer:"A pointer to the current commit/branch"},
{question:"Which command shows the differences between commits?",options:["git show","git diff","git compare","git status"],answer:"git diff"},
{question:"What does 'git revert' do?",options:["Deletes a commit","Creates a new commit that undoes a previous commit","Resets the branch","Merges branches"],answer:"Creates a new commit that undoes a previous commit"},
{question:"What is the staging area in Git?",options:["The remote server","An intermediate area where changes are prepared before committing","The working directory","The commit history"],answer:"An intermediate area where changes are prepared before committing"},
{question:"What does 'git remote -v' show?",options:["Branch list","URLs of remote repositories","Commit log","File status"],answer:"URLs of remote repositories"},
{question:"What is the difference between 'git reset --soft' and '--hard'?",options:["Same thing","--soft keeps changes staged; --hard discards all changes","--hard keeps changes","--soft discards changes"],answer:"--soft keeps changes staged; --hard discards all changes"},
{question:"Which command renames a branch?",options:["git rename","git branch -m old new","git mv branch","git change branch"],answer:"git branch -m old new"},
{question:"What does 'git checkout' do?",options:["Creates a commit","Switches branches or restores files","Pushes changes","Deletes branches"],answer:"Switches branches or restores files"}
],

// ==================== 14. GitHub ====================
"GitHub": [
{question:"What is GitHub?",options:["A programming language","A cloud-based platform for hosting Git repositories","A text editor","A database service"],answer:"A cloud-based platform for hosting Git repositories"},
{question:"What is a repository on GitHub?",options:["A branch","A storage space for a project's files and version history","A pull request","An issue"],answer:"A storage space for a project's files and version history"},
{question:"What is the difference between Git and GitHub?",options:["Same thing","Git is a version control system; GitHub is a hosting platform for Git repositories","GitHub is a VCS","Git is a platform"],answer:"Git is a version control system; GitHub is a hosting platform for Git repositories"},
{question:"What is a remote repository?",options:["A local folder","A repository hosted on a server like GitHub","A branch","A commit"],answer:"A repository hosted on a server like GitHub"},
{question:"What is a Pull Request?",options:["Pulling code from remote","A request to merge changes from one branch into another for review","A Git command","A type of issue"],answer:"A request to merge changes from one branch into another for review"},
{question:"What is a Fork on GitHub?",options:["A branch","A personal copy of someone else's repository","A commit","A merge"],answer:"A personal copy of someone else's repository"},
{question:"What is the purpose of Issues on GitHub?",options:["Creating branches","Tracking bugs, feature requests, and tasks","Merging code","Hosting websites"],answer:"Tracking bugs, feature requests, and tasks"},
{question:"How do you clone a repository from GitHub?",options:["git download URL","git clone URL","git copy URL","git fetch URL"],answer:"git clone URL"},
{question:"What is a branch on GitHub?",options:["A separate line of development","A copy of the repository","A pull request","A commit message"],answer:"A separate line of development"},
{question:"What does 'git push origin main' do?",options:["Pulls changes","Pushes local main branch commits to the remote repository","Creates a branch","Merges branches"],answer:"Pushes local main branch commits to the remote repository"},
{question:"What is GitHub Pages?",options:["A database service","A feature to host static websites directly from a repository","A CI/CD tool","A code editor"],answer:"A feature to host static websites directly from a repository"},
{question:"What is a README.md file?",options:["A configuration file","A markdown file that describes the project","A license file","A Git ignore file"],answer:"A markdown file that describes the project"},
{question:"What is GitHub Actions?",options:["A code editor","A CI/CD platform to automate workflows","A project management tool","A database service"],answer:"A CI/CD platform to automate workflows"},
{question:"How do you contribute to an open-source project on GitHub?",options:["Edit directly","Fork the repo, make changes, and submit a Pull Request","Send an email","Create a new repository"],answer:"Fork the repo, make changes, and submit a Pull Request"},
{question:"What is a merge on GitHub?",options:["Deleting a branch","Combining changes from a pull request into the target branch","Creating a fork","Opening an issue"],answer:"Combining changes from a pull request into the target branch"},
{question:"What is the purpose of .gitignore on GitHub?",options:["Ignore GitHub notifications","Specify files that should not be tracked by Git","Delete files","Hide the repository"],answer:"Specify files that should not be tracked by Git"},
{question:"What is a GitHub Gist?",options:["A repository","A way to share code snippets","A pull request","A branch"],answer:"A way to share code snippets"},
{question:"What is the difference between public and private repositories?",options:["No difference","Public repos are visible to everyone; private repos are only visible to authorized users","Private repos are visible to all","Public repos need a password"],answer:"Public repos are visible to everyone; private repos are only visible to authorized users"},
{question:"What does 'Watch' do on a GitHub repository?",options:["Downloads the repo","Subscribes you to notifications about activity in the repo","Stars the repo","Forks the repo"],answer:"Subscribes you to notifications about activity in the repo"},
{question:"What does 'Star' mean on GitHub?",options:["Deletes a repo","Bookmarks a repository to show appreciation","Forks a repo","Clones a repo"],answer:"Bookmarks a repository to show appreciation"},
{question:"What is a GitHub Organization?",options:["A user profile","A shared account for collaboration with multiple repositories","A branch","A commit"],answer:"A shared account for collaboration with multiple repositories"},
{question:"What is a commit message?",options:["A branch name","A description of the changes made in a commit","A file name","A repository name"],answer:"A description of the changes made in a commit"},
{question:"What is the purpose of branch protection rules?",options:["Delete branches","Prevent direct pushes and enforce reviews before merging","Create branches","Rename branches"],answer:"Prevent direct pushes and enforce reviews before merging"},
{question:"What is a code review on GitHub?",options:["Writing code","Examining and commenting on code changes in a pull request","Deleting code","Deploying code"],answer:"Examining and commenting on code changes in a pull request"},
{question:"How do you create a new repository on GitHub?",options:["git init only","Click 'New' on GitHub and follow the setup instructions","git push","Fork a repo"],answer:"Click 'New' on GitHub and follow the setup instructions"}
],

// ==================== 15. OOPM ====================
"OOPM": [
{question:"What does OOP stand for?",options:["Object-Oriented Programming","Object-Ordered Processing","Optimal Object Programming","Open Object Protocol"],answer:"Object-Oriented Programming"},
{question:"What is a class in OOP?",options:["An instance of an object","A blueprint for creating objects","A function","A variable"],answer:"A blueprint for creating objects"},
{question:"What is an object in OOP?",options:["A class definition","An instance of a class","A data type","A function"],answer:"An instance of a class"},
{question:"What is encapsulation?",options:["Inheriting from a class","Bundling data and methods together and restricting direct access","Using multiple classes","Creating interfaces"],answer:"Bundling data and methods together and restricting direct access"},
{question:"What is abstraction?",options:["Showing all implementation details","Hiding complex implementation and showing only essential features","Creating objects","Deleting classes"],answer:"Hiding complex implementation and showing only essential features"},
{question:"What is inheritance in OOP?",options:["Creating new objects","A mechanism where a new class inherits properties from an existing class","Deleting a class","Hiding data"],answer:"A mechanism where a new class inherits properties from an existing class"},
{question:"What is polymorphism?",options:["One class only","The ability of an object to take many forms","Data hiding","Creating objects"],answer:"The ability of an object to take many forms"},
{question:"What is method overloading?",options:["Same name, same parameters","Defining multiple methods with the same name but different parameters","Overriding a parent method","Deleting a method"],answer:"Defining multiple methods with the same name but different parameters"},
{question:"What is method overriding?",options:["Same as overloading","A child class providing a specific implementation of a method already defined in the parent class","Creating a new method","Deleting a method"],answer:"A child class providing a specific implementation of a method already defined in the parent class"},
{question:"What is a constructor?",options:["A method that destroys objects","A special method that initializes an object when it is created","A static method","A private method"],answer:"A special method that initializes an object when it is created"},
{question:"What is the difference between a class and an object?",options:["Same thing","A class is a blueprint; an object is an instance of that blueprint","An object is a blueprint","A class is an instance"],answer:"A class is a blueprint; an object is an instance of that blueprint"},
{question:"What is association in OOP?",options:["Inheritance","A relationship between two separate classes established through their objects","Encapsulation","Polymorphism"],answer:"A relationship between two separate classes established through their objects"},
{question:"What is aggregation?",options:["A strong relationship","A 'has-a' relationship where the child can exist independently of the parent","An 'is-a' relationship","Method overloading"],answer:"A 'has-a' relationship where the child can exist independently of the parent"},
{question:"What is composition?",options:["A weak relationship","A strong 'has-a' relationship where the child cannot exist without the parent","Inheritance","Abstraction"],answer:"A strong 'has-a' relationship where the child cannot exist without the parent"},
{question:"What is the difference between aggregation and composition?",options:["Same thing","In aggregation the child can exist independently; in composition the child depends on the parent","Composition is weaker","Aggregation is stronger"],answer:"In aggregation the child can exist independently; in composition the child depends on the parent"},
{question:"What is an abstract class?",options:["A class with all methods implemented","A class that cannot be instantiated and may contain abstract methods","A final class","A static class"],answer:"A class that cannot be instantiated and may contain abstract methods"},
{question:"What is an interface?",options:["A class with implementations","A contract that defines methods a class must implement","A variable type","A constructor"],answer:"A contract that defines methods a class must implement"},
{question:"What are access modifiers?",options:["Data types","Keywords that set the accessibility of classes, methods, and variables (public, private, protected)","Loop types","Function types"],answer:"Keywords that set the accessibility of classes, methods, and variables (public, private, protected)"},
{question:"What is the difference between abstract class and interface?",options:["Same thing","Abstract class can have implementations; interface typically has only method signatures","Interface has implementations","Abstract class has only signatures"],answer:"Abstract class can have implementations; interface typically has only method signatures"},
{question:"What is the 'super' keyword used for?",options:["Creating a new class","Referring to the parent class constructor or methods","Deleting an object","Defining a variable"],answer:"Referring to the parent class constructor or methods"},
{question:"What is a destructor?",options:["A constructor","A method called when an object is being destroyed to release resources","A static method","An abstract method"],answer:"A method called when an object is being destroyed to release resources"},
{question:"What is multiple inheritance?",options:["Inheriting from one class","A class inheriting from more than one class","Method overloading","Encapsulation"],answer:"A class inheriting from more than one class"},
{question:"What is the SOLID principle?",options:["A data structure","Five design principles for writing maintainable OOP code","A programming language","A testing framework"],answer:"Five design principles for writing maintainable OOP code"},
{question:"What is coupling in OOP?",options:["Combining classes","The degree of dependency between classes — low coupling is preferred","A design pattern","A type of inheritance"],answer:"The degree of dependency between classes — low coupling is preferred"},
{question:"What is cohesion in OOP?",options:["Dependency between classes","The degree to which elements within a module belong together — high cohesion is preferred","A type of polymorphism","An access modifier"],answer:"The degree to which elements within a module belong together — high cohesion is preferred"}
],

// ==================== 16. DevOps ====================
"DevOps": [
{question:"What is DevOps?",options:["A programming language","A culture and set of practices that unifies software development and IT operations","A database tool","A testing framework"],answer:"A culture and set of practices that unifies software development and IT operations"},
{question:"What is CI/CD?",options:["Code Integration/Code Deployment","Continuous Integration/Continuous Delivery or Deployment","Central Intelligence/Central Data","Computer Integration/Computer Delivery"],answer:"Continuous Integration/Continuous Delivery or Deployment"},
{question:"What is Docker?",options:["A version control system","A platform for building, shipping, and running applications in containers","A programming language","A cloud provider"],answer:"A platform for building, shipping, and running applications in containers"},
{question:"What is a Docker container?",options:["A virtual machine","A lightweight, standalone, executable package that includes everything needed to run software","A database","A network protocol"],answer:"A lightweight, standalone, executable package that includes everything needed to run software"},
{question:"What is Kubernetes?",options:["A programming language","An open-source container orchestration platform for automating deployment and scaling","A database","A CI tool"],answer:"An open-source container orchestration platform for automating deployment and scaling"},
{question:"What is Infrastructure as Code (IaC)?",options:["Writing application code","Managing and provisioning infrastructure through machine-readable configuration files","A database technique","A testing method"],answer:"Managing and provisioning infrastructure through machine-readable configuration files"},
{question:"What is Jenkins?",options:["A container platform","An open-source automation server used for CI/CD pipelines","A cloud provider","A monitoring tool"],answer:"An open-source automation server used for CI/CD pipelines"},
{question:"What is a Dockerfile?",options:["A log file","A text file containing instructions to build a Docker image","A configuration for Kubernetes","A shell script"],answer:"A text file containing instructions to build a Docker image"},
{question:"What is the difference between a Docker image and a container?",options:["Same thing","An image is a blueprint; a container is a running instance of that image","A container is a blueprint","An image runs code"],answer:"An image is a blueprint; a container is a running instance of that image"},
{question:"What is Terraform?",options:["A CI/CD tool","An open-source IaC tool for provisioning cloud infrastructure","A container runtime","A monitoring platform"],answer:"An open-source IaC tool for provisioning cloud infrastructure"},
{question:"What is Ansible?",options:["A container orchestrator","An open-source automation tool for configuration management and deployment","A version control system","A cloud provider"],answer:"An open-source automation tool for configuration management and deployment"},
{question:"What is a microservices architecture?",options:["A single large application","An approach where an application is built as a collection of small, independent services","A database design","A networking protocol"],answer:"An approach where an application is built as a collection of small, independent services"},
{question:"What is a CI/CD pipeline?",options:["A data pipeline","An automated sequence of steps to build, test, and deploy software","A network connection","A database query"],answer:"An automated sequence of steps to build, test, and deploy software"},
{question:"What is monitoring in DevOps?",options:["Writing code","Continuously observing system performance, availability, and health","Creating containers","Version control"],answer:"Continuously observing system performance, availability, and health"},
{question:"What is Prometheus?",options:["A CI tool","An open-source monitoring and alerting toolkit","A container platform","A cloud provider"],answer:"An open-source monitoring and alerting toolkit"},
{question:"What is Grafana?",options:["A CI/CD tool","An open-source platform for data visualization and monitoring dashboards","A container runtime","A version control system"],answer:"An open-source platform for data visualization and monitoring dashboards"},
{question:"What is a load balancer?",options:["A database tool","A device or software that distributes network traffic across multiple servers","A container","A CI tool"],answer:"A device or software that distributes network traffic across multiple servers"},
{question:"What is version control in DevOps?",options:["Monitoring servers","Tracking and managing changes to code over time","Deploying containers","Scaling applications"],answer:"Tracking and managing changes to code over time"},
{question:"What is a reverse proxy?",options:["A firewall","A server that forwards client requests to backend servers","A container","A CI pipeline"],answer:"A server that forwards client requests to backend servers"},
{question:"What is NGINX commonly used for in DevOps?",options:["Writing code","Web server, reverse proxy, and load balancing","Database management","Container orchestration"],answer:"Web server, reverse proxy, and load balancing"},
{question:"What is blue-green deployment?",options:["A testing method","A strategy using two identical environments to reduce downtime during releases","A monitoring tool","A container pattern"],answer:"A strategy using two identical environments to reduce downtime during releases"},
{question:"What is a rolling deployment?",options:["Deploying all at once","Gradually replacing instances of the old version with the new version","Rolling back changes","A database migration"],answer:"Gradually replacing instances of the old version with the new version"},
{question:"What is Docker Compose?",options:["A monitoring tool","A tool for defining and running multi-container Docker applications using a YAML file","A CI/CD platform","A cloud service"],answer:"A tool for defining and running multi-container Docker applications using a YAML file"},
{question:"What is the purpose of a container registry?",options:["Running containers","Storing and distributing container images","Monitoring applications","Writing Dockerfiles"],answer:"Storing and distributing container images"},
{question:"What is the difference between DevOps and Agile?",options:["Same thing","Agile focuses on development processes; DevOps bridges development and operations for the full lifecycle","DevOps is only about testing","Agile is about deployment"],answer:"Agile focuses on development processes; DevOps bridges development and operations for the full lifecycle"}
]

};


// ============================================================
//  APPLICATION STATE
// ============================================================
let currentSubject = "";      // name of the subject being quizzed
let currentQuestions = [];    // array of question objects for current quiz
let currentQuestionIndex = 0; // index of current question (0-based)
let userAnswers = [];         // stores user's selected answers
let timerInterval = null;     // setInterval handle for quiz timer
let timeRemaining = 1500;     // 25 minutes in seconds (25 * 60)
let startTime = 0;            // timestamp when quiz started

// ============================================================
//  DOM REFERENCES
// ============================================================
const homePage        = document.getElementById("home-page");
const quizPage        = document.getElementById("quiz-page");
const resultPage      = document.getElementById("result-page");

const subjectsGrid    = document.getElementById("subjects-grid");

const backBtn         = document.getElementById("back-btn");
const timerDisplay    = document.getElementById("timer-display");
const timerText       = document.getElementById("timer-text");

const quizSubjectIcon = document.getElementById("quiz-subject-icon");
const quizSubjectTitle= document.getElementById("quiz-subject-title");
const questionCounter = document.getElementById("question-counter");
const progressBar     = document.getElementById("progress-bar");
const questionPalette = document.getElementById("question-palette");
const questionText    = document.getElementById("question-text");
const optionsContainer= document.getElementById("options-container");
const prevBtn         = document.getElementById("prev-btn");
const nextBtn         = document.getElementById("next-btn");

const resultIcon      = document.getElementById("result-icon");
const resultSubject   = document.getElementById("result-subject");
const totalQEl        = document.getElementById("total-questions");
const correctEl       = document.getElementById("correct-answers");
const wrongEl         = document.getElementById("wrong-answers");
const timeTakenEl     = document.getElementById("time-taken");
const percentEl       = document.getElementById("percentage-display");
const scoreRingCircle = document.getElementById("score-ring-circle");
const reviewContainer = document.getElementById("review-container");
const retryBtn        = document.getElementById("retry-btn");
const backHomeBtn     = document.getElementById("back-home-btn");


// ============================================================
//  HIGH SCORE PERSISTENCE
// ============================================================
function getBestScores() {
    try {
        return JSON.parse(localStorage.getItem("quizmaster_scores") || "{}");
    } catch (e) {
        return {};
    }
}

function saveBestScore(subject, percent) {
    const scores = getBestScores();
    if (scores[subject] === undefined || percent > scores[subject]) {
        scores[subject] = percent;
        try {
            localStorage.setItem("quizmaster_scores", JSON.stringify(scores));
        } catch (e) {}
    }
}


// ============================================================
//  CONFETTI CELEBRATION
// ============================================================
function triggerConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ["#7c3aed", "#2563eb", "#22c55e", "#f59e0b", "#ec4899", "#3b82f6"];

    for (let i = 0; i < 90; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * 0.5,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 3 + 2,
            angle: Math.random() * 360,
            spin: (Math.random() - 0.5) * 0.2
        });
    }

    let frames = 0;
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach(p => {
            p.y += p.speed;
            p.angle += p.spin;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
        });

        frames++;
        if (frames < 160) {
            requestAnimationFrame(render);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    render();
}


// ----- Subject taglines matching reference UI mockup -----
const subjectTaglines = {
    "C++": "Build Logic",
    "HTML": "Structure the Web",
    "CSS": "Style with Creativity",
    "JavaScript": "Make it Interactive",
    "Java": "Write Once Run Anywhere",
    "Python": "Simple & Powerful",
    "Node.js": "Build Scalable Apps",
    "Express.js": "Fast & Minimal",
    "React": "Build Modern UIs",
    "MongoDB": "Store Your Ideas",
    "MERN Stack": "Full Stack Development",
    "SQL": "Query the World",
    "Git": "Track Your Progress",
    "GitHub": "Share Your Work",
    "OOPM": "Think in Objects",
    "DevOps": "Automate Everything"
};

function getCardClassName(name) {
    if (name === "C++") return "card-cpp";
    return 'card-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// ============================================================
//  RENDER HOME PAGE — Subject Cards (Horizontal Layout)
// ============================================================
function renderSubjects(query = "") {
    const subjectNames = Object.keys(subjects);
    subjectsGrid.innerHTML = "";

    const filtered = subjectNames.filter(name => 
        name.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
        subjectsGrid.innerHTML = `<div class="no-subjects-msg">No subjects found matching "${query}"</div>`;
        return;
    }

    filtered.forEach(name => {
        const card = document.createElement("div");
        const cardClass = getCardClassName(name);
        card.className = `subject-card ${cardClass}`;
        
        const tagline = subjectTaglines[name] || "Technical Interview Prep";
        
        card.innerHTML = `
            <div class="card-left-icon">${subjectIcons[name] || "📚"}</div>
            <div class="card-content">
                <h3 class="card-title">${name}</h3>
                <p class="card-subtitle">${tagline}</p>
            </div>
            <button class="card-arrow-btn" aria-label="Start ${name} quiz">&rarr;</button>
        `;
        card.addEventListener("click", () => startQuiz(name));
        subjectsGrid.appendChild(card);
    });
}



// ============================================================
//  NAVIGATION HELPERS
// ============================================================
function showPage(page) {
    [homePage, quizPage, resultPage].forEach(p => p.classList.remove("active"));
    page.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}


// ============================================================
//  TIMER LOGIC
// ============================================================
function startTimer() {
    clearInterval(timerInterval);
    timeRemaining = 25 * 60; // 25 minutes
    startTime = Date.now();
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (timerText) timerText.textContent = formatted;

    if (timerDisplay) {
        timerDisplay.classList.remove("warning", "danger");
        if (timeRemaining <= 60) {
            timerDisplay.classList.add("danger");
        } else if (timeRemaining <= 300) {
            timerDisplay.classList.add("warning");
        }
    }
}


// ============================================================
//  START QUIZ
// ============================================================
function startQuiz(subjectName) {
    currentSubject = subjectName;
    currentQuestions = subjects[subjectName];
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);

    if (quizSubjectIcon) quizSubjectIcon.innerHTML = subjectIcons[subjectName] || "📚";
    if (quizSubjectTitle) quizSubjectTitle.textContent = `${subjectName} Interview Quiz`;

    showPage(quizPage);
    startTimer();
    renderPalette();
    renderQuestion();
}


// ============================================================
//  RENDER QUESTION PALETTE (JUMP BAR)
// ============================================================
function renderPalette() {
    if (!questionPalette) return;
    questionPalette.innerHTML = "";

    currentQuestions.forEach((_, i) => {
        const pill = document.createElement("button");
        pill.className = "question-pill";
        pill.textContent = i + 1;

        if (i === currentQuestionIndex) pill.classList.add("active");
        if (userAnswers[i] !== null) pill.classList.add("answered");

        pill.addEventListener("click", () => {
            currentQuestionIndex = i;
            renderQuestion();
        });

        questionPalette.appendChild(pill);
    });
}

function updatePalette() {
    if (!questionPalette) return;
    const pills = questionPalette.querySelectorAll(".question-pill");
    pills.forEach((pill, i) => {
        pill.classList.toggle("active", i === currentQuestionIndex);
        pill.classList.toggle("answered", userAnswers[i] !== null);
    });
}


// ============================================================
//  RENDER A SINGLE QUESTION
// ============================================================
// Escape HTML entities so tags like <form>, <img> display as text
function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

function renderQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    const total = currentQuestions.length;
    const num = currentQuestionIndex + 1;

    // Update counter & progress bar
    questionCounter.textContent = `Question ${num} of ${total}`;
    progressBar.style.width = `${(num / total) * 100}%`;

    // Question text
    questionText.textContent = `${num}. ${q.question}`;

    // Options
    const letters = ["A", "B", "C", "D"];
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        const letterSpan = document.createElement("span");
        letterSpan.className = "option-letter";
        letterSpan.textContent = letters[i];
        const textSpan = document.createElement("span");
        textSpan.textContent = opt;
        btn.appendChild(letterSpan);
        btn.appendChild(textSpan);

        // Highlight previously selected answer
        if (userAnswers[currentQuestionIndex] === opt) {
            btn.classList.add("selected");
        }

        btn.addEventListener("click", () => selectOption(opt));
        optionsContainer.appendChild(btn);
    });

    // Prev / Next button states
    if (prevBtn) prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === total - 1) {
        nextBtn.innerHTML = `Submit Quiz <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
    } else {
        nextBtn.innerHTML = `Next <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>`;
    }

    nextBtn.disabled = userAnswers[currentQuestionIndex] === null;

    updatePalette();
}


// ============================================================
//  SELECT AN OPTION
// ============================================================
function selectOption(answer) {
    userAnswers[currentQuestionIndex] = answer;

    // Update visual selection
    const buttons = optionsContainer.querySelectorAll(".option-btn");
    const q = currentQuestions[currentQuestionIndex];
    buttons.forEach((btn, i) => {
        btn.classList.toggle("selected", q.options[i] === answer);
    });

    nextBtn.disabled = false;
    updatePalette();
}


// ============================================================
//  PREVIOUS / NEXT / BACK HANDLERS
// ============================================================
if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
        }
    });
}

nextBtn.addEventListener("click", () => {
    if (userAnswers[currentQuestionIndex] === null) return;

    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showResults();
    }
});

if (backBtn) {
    backBtn.addEventListener("click", () => {
        stopTimer();
        renderSubjects();
        showPage(homePage);
    });
}


// ============================================================
//  KEYBOARD SHORTCUTS
// ============================================================
document.addEventListener("keydown", (e) => {
    if (!quizPage.classList.contains("active")) return;

    const key = e.key.toUpperCase();

    // Key 1..4 or A..D to select option
    if (["1", "2", "3", "4", "A", "B", "C", "D"].includes(key)) {
        const q = currentQuestions[currentQuestionIndex];
        if (!q) return;
        let index = -1;
        if (key === "1" || key === "A") index = 0;
        else if (key === "2" || key === "B") index = 1;
        else if (key === "3" || key === "C") index = 2;
        else if (key === "4" || key === "D") index = 3;

        if (index >= 0 && index < q.options.length) {
            selectOption(q.options[index]);
        }
    } else if (e.key === "ArrowLeft" && currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    } else if (e.key === "ArrowRight" || e.key === "Enter") {
        if (userAnswers[currentQuestionIndex] !== null) {
            if (currentQuestionIndex < currentQuestions.length - 1) {
                currentQuestionIndex++;
                renderQuestion();
            } else {
                showResults();
            }
        }
    }
});


// ============================================================
//  SHOW RESULTS
// ============================================================
function showResults() {
    stopTimer();

    const total = currentQuestions.length;
    let correct = 0;

    currentQuestions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) correct++;
    });

    const wrong = total - correct;
    const percent = Math.round((correct / total) * 100);

    // Calculate time taken
    const elapsedSeconds = Math.max(0, Math.floor((Date.now() - startTime) / 1000));
    const mins = Math.floor(elapsedSeconds / 60);
    const secs = elapsedSeconds % 60;
    const timeFormatted = `${mins}:${String(secs).padStart(2, '0')}`;

    // Fill result headers & metrics
    resultSubject.textContent = `${currentSubject} Technical Quiz`;
    totalQEl.textContent = total;
    correctEl.textContent = correct;
    wrongEl.textContent = wrong;
    if (timeTakenEl) timeTakenEl.textContent = timeFormatted;
    percentEl.textContent = `${percent}%`;

    // Save best score to localStorage
    saveBestScore(currentSubject, percent);

    // Dynamic result icon & confetti
    if (percent >= 80) {
        resultIcon.textContent = "🏆";
        triggerConfetti();
    } else if (percent >= 60) {
        resultIcon.textContent = "🎯";
    } else {
        resultIcon.textContent = "📚";
    }

    // Animate score ring SVG
    if (scoreRingCircle) {
        const circumference = 326.73; // 2 * PI * 52
        const offset = circumference - (percent / 100) * circumference;
        scoreRingCircle.style.strokeDashoffset = offset;
    }

    // Build answer review cards
    reviewContainer.innerHTML = "";

    currentQuestions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.answer;
        const card = document.createElement("div");
        card.className = `review-card ${isCorrect ? "is-correct" : "is-wrong"}`;

        card.innerHTML = `
            <div class="review-q-num">Question ${i + 1} of ${total}</div>
            <p class="review-question">${escapeHTML(q.question)}</p>
            <div class="review-answers">
                <p class="review-answer your-answer">
                    <span>Your Answer:</span> <strong class="${isCorrect ? '' : 'wrong-text'}">${escapeHTML(userAnswers[i] || "Not answered")}</strong>
                </p>
                <p class="review-answer correct-answer">
                    <span>Correct Answer:</span> <strong>${escapeHTML(q.answer)}</strong>
                </p>
            </div>
            <span class="review-badge ${isCorrect ? "correct" : "wrong"}">
                ${isCorrect ? "✓ Correct" : "✗ Incorrect"}
            </span>
        `;

        reviewContainer.appendChild(card);
    });

    showPage(resultPage);
}


// ============================================================
//  RETRY & BACK BUTTONS
// ============================================================
retryBtn.addEventListener("click", () => {
    startQuiz(currentSubject);
});

backHomeBtn.addEventListener("click", () => {
    stopTimer();
    renderSubjects();
    showPage(homePage);
});


// ============================================================
//  INITIALIZE APP
// ============================================================
renderSubjects();
