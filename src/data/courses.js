// Course data lives in one array; components receive it through props.
export const FIELDS = "Technical Fields";
export const LANGUAGES = "Programming Languages";

export const courses = [
  // ---- Technical Fields ----
  { id: 1, name: "AI & Machine Learning", category: FIELDS, badge: "AI",
    description: "Build models that learn from data, from regression and classification to neural networks.",
    topics: ["Supervised learning", "Neural networks", "Model evaluation"] },
  { id: 2, name: "Web Development", category: FIELDS, badge: "Web",
    description: "Design and ship full websites using HTML, CSS, JavaScript and modern front-end tooling.",
    topics: ["Responsive layouts", "REST APIs", "Deployment"] },
  { id: 3, name: "Data Science", category: FIELDS, badge: "DS",
    description: "Collect, clean and visualise data, then turn it into decisions with statistics.",
    topics: ["Data cleaning", "Visualisation", "Statistics"] },
  { id: 4, name: "Cloud Computing", category: FIELDS, badge: "Cld",
    description: "Run applications on cloud infrastructure using servers, storage, containers and scaling.",
    topics: ["Virtual machines", "Containers", "Auto scaling"] },
  { id: 5, name: "Cybersecurity", category: FIELDS, badge: "Sec",
    description: "Protect systems and data by learning common attacks, encryption and secure design.",
    topics: ["Threat modelling", "Encryption", "Network defence"] },
  // ---- Programming Languages ----
  { id: 6, name: "JavaScript", category: LANGUAGES, badge: "JS",
    description: "Master the language of the web: variables, functions, the DOM and asynchronous code.",
    topics: ["ES6 syntax", "DOM events", "Promises and async/await"] },
  { id: 7, name: "Python", category: LANGUAGES, badge: "Py",
    description: "Learn clear, readable programming for automation, data work and backend scripts.",
    topics: ["Data structures", "Functions and modules", "File handling"] },
  { id: 8, name: "Java", category: LANGUAGES, badge: "Jv",
    description: "Write robust object-oriented programs with classes, interfaces and collections.",
    topics: ["OOP principles", "Collections", "Exception handling"] },
  { id: 9, name: "C++", category: LANGUAGES, badge: "C++",
    description: "Get close to the machine with pointers, memory management and the STL.",
    topics: ["Pointers", "STL containers", "Memory management"] },
  { id: 10, name: "React", category: LANGUAGES, badge: "Rx",
    description: "Build interactive interfaces from reusable components, props and state.",
    topics: ["Components and JSX", "Props and state", "Hooks"] },
];
