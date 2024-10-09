In this class we will make different pages route and connect them via linking and navigation button

**Routing**
- In Next.js, routing refers to the mechanism of navigating between different pages or components in the application. Next.js uses file-based routing, meaning that the file structure within the pages directory automatically defines the routes of your application.

*Navigating between pages:*
**Link component:** Use the Link component from next/link to navigate between pages client-side.
**Programmatic Navigation:** You can also use the useRouter hook from next/router for programmatic navigation.

Next.js handles the routing internally based on the page structure, making it very intuitive and easy to work with.

- Next.js work on file based routing by default

**Linking vs Navigation**
In the context of Next.js (and web development in general), linking and navigation both refer to the process of moving from one page to another, but they are conceptually different in how they are implemented.

1) Linking:
    Linking refers to the use of the <Link> component in Next.js (or anchor tags <a> in traditional HTML) to create a hyperlink that the user can click on to go to a different page.
    When a user clicks a <Link>, the browser either loads a new page or uses client-side navigation (in the case of a Single Page Application, like Next.js).

2) Navigation:
    Navigation refers to the process of moving between pages or views programmatically within the application. This can happen based on user actions (like a button click) or programmatic logic (like redirecting after a form submission).
    In Next.js, you can use the useRouter hook from next/router to programmatically control navigation without relying on a <Link> component.

**File Structure**
- page.tsx ==> constant conversion, on browser page.tsx render
- layout.tsx ==> root layout/ common layout
    page.tsx is a child of layout.tsx

**App router and Page router**
In Next.js, App Router and Page Router refer to two different approaches for handling routing, introduced with different versions of Next.js.

1. Page Router (Traditional Routing):
    - The routing system based on the pages directory.
    - Each file in the pages directory automatically defines a route.
    - For example, pages/index.js maps to the root /, and pages/about.js maps to /about.
2. App Router (New Routing System):
    - The routing system based on the app directory (introduced in Next.js 13).
    - Uses a more flexible and advanced routing mechanism based on components like layouts, templates, and nested routing.
    - Routes are defined in the app directory using folders and files, but you can also define layouts and nested routes.

