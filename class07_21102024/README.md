# **Hooks**
Hooks are special functions in React that let you "hook into" React features like state and lifecycle methods without writing a class. Common hooks include useState and useEffect.

- Imagine hooks as special tools that help you fix things easily.
- Need to remember something? Use the useState hook, like a notepad.
- Hooks give you simple ways to handle common tasks in React.

[Hook](public/hook1.png)
## **Types of Hooks**
There are total 5 types of hooks which we will see in detail, their names are:
### 1) State Hooks
    - useState ()
    - useReducer ()
### 2) Context Hooks
    - useContext()
### 3) Ref Hooks
    - useRef()
### 4) Effect Hooks
    - useEffect()
### 5) Performance Hooks
    - useMemo()
    - useCallback()
[Types of hook](public/Typesofhook.png)

In Next.js, hooks are special functions built on top of React’s hooks API that let you add functionality to your components, like managing state or lifecycle methods, without using classes. Hooks in Next.js (and React) include:
### 1) State Hooks
#### **useState()**
* Allows you to create and manage state within a functional component.
[useState](public/useState.png)
* Here, count is the current state, and setCount is the function to update it.
#### **useReducer()**
* This hook is useful for managing complex state logic, especially when the state depends on previous states or involves multiple sub-values. It’s an alternative to useState that is often used in scenarios with multiple actions (like a Redux reducer).
[useReducer](public/useReducer.png)
* Here, you call dispatch({ type: 'increment' }) to change the state, making it useful for handling complex state logic in a centralized way.

### 2) Context Hooks
#### **useContext()**
* Provides a way to pass data through the component tree without needing to manually pass props down at every level.
[useContext](public/useContext.png.png)

### 3) Ref Hooks
#### **useRef()**
* This hook provides a way to create a mutable reference that persists across component re-renders, without triggering re-renders when its value changes. It’s commonly used to access and manipulate DOM elements or to keep track of a variable across renders.
[useRef](public/useRef.png)
* Here, inputRef will hold the reference to the input element, and calling focusInput() will set focus on it.

### 4) Effect Hooks
#### **useEffect()**
* Lets you perform side effects in your components, like fetching data, directly interacting with the DOM, or subscribing to events.
[useEffect](public/useEffect.png)

### 5) Performance Hooks
#### **useMemo()**
* This hook memoizes expensive computations so they’re only re-calculated when dependencies change, optimizing performance. It's helpful when dealing with computations that don’t need to run on every render.
[useMemo](public/useMemo.png)
* This ensures computeExpensiveValue only runs when a or b change, which can speed up rendering for performance-heavy components.
#### **useCallback()**
* Similar to useMemo, this hook memoizes functions, preventing unnecessary re-creations. It’s beneficial for passing stable callback references to child components, especially when those children are wrapped in React.memo.
[useMemo](public/useCallback.png)
* This ensures handleClick is recreated only when the dependency changes, which can prevent unnecessary re-renders in child components.

Together, these hooks useState, useEffect, useContext, useReducer, useRef, useMemo, and useCallback—provide powerful tools for managing state, lifecycle methods, side effects and performance optimizations in React and Next.js applications. By strategically using each of these hooks, you can build highly dynamic, efficient, and maintainable applications that respond smoothly to user interactions and complex logic. Mastering these hooks not only simplifies component behavior but also unlocks the full potential of functional components in modern frontend development.

# **Purity**
Purity in React means that components behave predictably and do not cause side effects during rendering. A pure component always renders the same output for the same input.
* Think of a calculator that always gives the same answer for the same sum.
* It doesn't randomly change the result. 
* Pure components are like that calculator; they are reliable and consistent.

[Purity](public/Purity1.png)
[Purity](public/Purity2.png)
[Purity](public/Purity3.png)

# **Strict Mode**
Strict Mode is a tool that helps you find potential problems in your React app. It activates additional checks and warnings for its descendants.
* It's like your cricket coach watching you play to correct any mistakes.
* Strict Mode points out issues so you can fix them early.
* It helps you become a better programmer by highlighting problems.
[Strict Mode](public/StrictMode.png)

# **What is API**
API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines how requests and responses should be structured and provides a standard way for applications to share data and functionality. APIs are essential for enabling data exchange and integrating services between different applications, often over the internet.

The HTTP methods GET, POST, PUT, and DELETE are commonly used in RESTful APIs to define different types of operations on resources. Each method has a specific purpose in the context of CRUD (Create, Read, Update, Delete) operations, which are essential for data manipulation. Here’s a breakdown of each method:

## **1. GET**
- **Purpose:** Retrieves data from the server.
- **Use Case:** To fetch a resource or list of resources.
- **Characteristics:**
    * Safe and idempotent (doesn’t modify data and can be called multiple times without side effects).
    * Doesn’t contain a request body; instead, parameters are usually sent in the URL.
- **Example:** GET /api/users would retrieve a list of users, while GET /api/users/1 would retrieve the user with ID 1.
## **2. POST**
- **Purpose:** Sends data to the server to create a new resource.
- **Use Case:** Creating a new entry, like a user, post, or item.
- **Characteristics:**
    * Not idempotent (multiple calls will create multiple resources).
    * Includes data in the request body, usually formatted in JSON.
- **Example:** POST /api/users with a JSON body like { "name": "John", "email": "john@example.com" } would create a new user.
## **3. PUT**
- **Purpose:** Updates an existing resource by replacing it with new data.
- **Use Case:** To modify an existing resource.
- **Characteristics:**
    * Idempotent (multiple calls with the same data result in the same outcome).
    * Sends the updated data in the request body.
- **Example:** PUT /api/users/1 with a JSON body { "name": "John Doe", "email": "john@example.com" } updates the user with ID 1.
## **4. DELETE**
- **Purpose:** Deletes an existing resource.
- **Use Case:** To remove a resource permanently.
- **Characteristics:**
    * Idempotent (calling multiple times has the same effect as calling once).
    * Usually doesn’t include a body in the request, though it can.
- **Example:** DELETE /api/users/1 would delete the user with ID 1.

## *Summary of CRUD Operations with HTTP Methods*
[CRUD](public/CRUD.png)

## **Types of APIs**
There are several types of APIs, each serving specific purposes:

### *Open APIs (Public APIs):*
Accessible by any developer or application. They are openly published and available for use with minimal restrictions. Examples include Google Maps API and Twitter API.

### *Internal APIs (Private APIs):*
Used within a company to streamline development. These are not exposed to external users but allow different teams or applications within an organization to communicate.

### *Partner APIs:*
Similar to open APIs but with restricted access. They’re shared with specific third-party partners, often through a licensing agreement, to enable data sharing and integration.

### *Composite APIs:*
Combine multiple API calls into a single call to streamline processes. Useful for complex or interdependent operations, as they allow applications to retrieve data from multiple endpoints in one request.

### *RESTful APIs and SOAP APIs:*
REST (Representational State Transfer) APIs are the most common, using HTTP requests for operations and returning data typically in JSON format. SOAP (Simple Object Access Protocol) APIs are older, more structured, and use XML for request and response formatting.

## **fetch() API**
The fetch() API is a JavaScript function for making network requests, commonly used to retrieve data from a server. It’s asynchronous and returns a Promise, which simplifies handling HTTP requests in JavaScript.
[fetch()API](public/fetchAPI.png)

## **Response Parameter of API**
The response parameter in an API is the data or message returned by the server when an API request is made. Common components in an API response include:
### *Status Code:*
Indicates the result of the request (e.g., 200 for success, 404 for not found, 500 for server error).
### *Headers:*
Contain metadata, such as content type and caching information.
### *Body:*
The actual data payload, typically in JSON format, which holds the requested information.

## **Why JSON is the Standard for Data Exchange**
JSON (JavaScript Object Notation) is the standard for data exchange in APIs because:
### *Lightweight and Efficient:*
JSON uses a simple, text-based structure that’s easy to read and write, which minimizes data payload size.
### *Easily Parsed:*
JavaScript natively supports JSON, making it easy to parse with JSON.parse() and JSON.stringify() methods.
### *Language-Independent:*
JSON is supported by nearly all programming languages, making it highly interoperable for different platforms and technologies.
### *Human-Readable:*
JSON’s key-value structure is clear and easy to understand, which simplifies debugging and data handling.

Overall, JSON's flexibility, simplicity, and compatibility with JavaScript have made it the preferred choice for APIs.

# **Other important points of class**
- NodeJS rewrote in Nextjs
- Gitbash is Linear terminal
- Every folder is a route in nextjs project
- In react, 90% are components and hooks rest is styling
- Every react component is a JavaScript function
- NewsAPI
