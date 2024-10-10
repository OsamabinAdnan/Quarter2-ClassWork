**Props**
In Next.js and React, props and key props are fundamental concepts for managing data and optimizing rendering in component-based architecture.

1. Props (Properties):
    Props are a way to pass data from one component to another. In Next.js, like React, props are immutable, meaning they cannot be modified by the receiving component. Instead, they serve as a mechanism for sending information down the component tree.

2. Key Prop:
    The key prop is essential when rendering lists of elements in React. It helps React uniquely identify each element, enabling efficient updating and re-rendering when the list changes. React uses keys to determine which elements have changed, been added, or removed, thus improving performance by reducing unnecessary re-renders.

_Why are keys important?_
    Without unique keys, React will not optimize updates efficiently, and this may result in bugs, especially when items are dynamically added or removed. Each element in a list should have a stable identity, usually provided by the item’s unique ID or some other unique identifier.

In Next.js, these principles remain the same, and understanding how to use props and key props is crucial for efficient component communication and rendering​.
- Data flow from parent to child component
- We transfer data using props
- props means property
- We cant send data from child to parent component
- for example, data send from Parent to child then to grandchild component, this is called 'props drilling'
- Component called in self closing tag

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

**Tailwind CSS**
Tailwind CSS is a utility-first CSS framework that provides low-level, pre-built classes to style HTML elements directly in your markup. Instead of writing custom CSS, you apply utility classes like bg-blue-500, text-lg, or p-4 to elements. This approach makes it fast to build and iterate on designs, promoting reusable and scalable styles without leaving your HTML.

*Key features:*
    Utility-first: Small utility classes for styling directly in HTML.
    Customization: Highly configurable through a tailwind.config.js file.
    Responsive Design: Built-in responsive design with breakpoints like sm:, md:, etc.
    No unused CSS: Purges unused CSS for smaller file sizes (via PurgeCSS).
    Tailwind is popular for its flexibility and speed in prototyping and building modern UIs.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

**Rendering**
Rendering in web development refers to the process of converting code (HTML, CSS, and JavaScript) into a visual interface that users can interact with in a web browser. It essentially transforms raw code into a structured layout that people see on a website.

*Rendering Steps:*
    Request: A user initiates a request by entering a URL in the browser or navigating within the site.
    Fetch Data (Optional): If the page requires data (e.g., from a database or API), the data is fetched.
    -Rendering:-
    The requested page is converted from React components into static HTML and CSS. This can happen on the server or client, depending on the rendering method.
    Hydration: If the initial HTML was generated on the server (Server-Side Rendering), React takes over on the client side, converting the static HTML into an interactive application. This step is called hydration.
    Display: The browser parses the HTML, CSS, and JavaScript, and the page is displayed to the user. If data changes or there are user interactions, React re-renders only the affected components.

- Server-Side Rendering (SSR):
    Server-Side Rendering is when the HTML for the page is generated on the server and sent to the client. Next.js offers built-in support for SSR.

    How it Works:
    1) The user sends a request to the server.
    2) The server processes the request, fetches any necessary data, and generates the HTML for the page.
    3) The HTML is sent to the client, and the user sees the content almost immediately.
    4) React then hydrates the page to make it interactive by attaching JavaScript to the static HTML.

    Benefits of SSR:
    1) Faster initial page load because the content is already pre-rendered.
    2) Better SEO because search engines can easily crawl the content.
    3) Improved performance for users with slower devices or poor network conditions.

    Downsides:
    1) Increased server load since the server is responsible for rendering the HTML.
    2) Slight delay in interaction until the page is fully hydrated.

- Client-Side Rendering (CSR):
    Client-Side Rendering is when JavaScript on the client (browser) is responsible for generating and displaying the HTML.

    How it Works:
    1) The server sends a minimal HTML file with a JavaScript bundle to the client.
    2) The browser downloads the JavaScript and renders the content after the JavaScript is executed.
    3) Data fetching (if needed) happens after the initial page load, and the page is updated dynamically.

    Benefits of CSR:
    1) Once the JavaScript is loaded, page transitions can be very fast because only the necessary parts of the page are re-rendered.
    2) Less load on the server since rendering happens in the browser.

    Downsides:
    1) Slower initial load: The user may see a blank screen until the JavaScript and data are fully loaded and rendered.
    2) SEO issues: Search engines may not index content well, as it takes longer for the page to render.

*Hybrid Rendering in Next.js:*
Next.js allows developers to combine Server-Side Rendering and Client-Side Rendering to take advantage of both approaches. For example, a page can be initially server-rendered to improve SEO and user experience, and then parts of it can be updated on the client dynamically as needed.

*Static Site Generation (SSG):*
Similar to SSR, but the HTML is generated at build time and served as static files to the client. This improves performance and reduces server load, as the content does not need to be generated on each request.

*Differences Between SSR and CSR:*
    - SSR: HTML is generated on the server, allowing for faster initial load and better SEO but with more server strain.
    - CSR: HTML is generated on the client after JavaScript loads, making the first load slower but interactions faster afterward.
Next.js simplifies the process of using both rendering strategies, allowing developers to choose the one that best fits their use case​.

**React Rendering Steps**
1) State changed
2) React 'diffs'
3) Reconciliation

    - In 1990s, we made JS,HTML and CSS based website and deploy on server and it gave us URL, we entered URL in browser (client) request go to server and send response and give us HTML/CSS/JS file and make model
    - When we navigate and click on for example navbar (home, about, contact us), everytime request go to server, server response and send us result which takes time.
    - This request from browser to server is called **Server Side Rendering**, page load then show data
    - In 2010, Google had developed Angular framework, which brought method called 'Single Page Application'
    - Angular gives us advantage and only one time we need to go to server (first time) then JS handle navigation after the first response of server
    - JavaScript execute on browser and handle rendering. This is called **Client Side Rendering**
    - Then we got next.js hybird model, it means both client and server side rendering could be done using one framework
    - In nextJS, we got update server side rendering.
    - In server side rendering, when request send to server from browser (URL), server open files of that URL in server and render them, then send to browser.
    - In nextJS, by default it a server side component, it run and execute in server.
    - Write 'use client' in top of page to make it client component.