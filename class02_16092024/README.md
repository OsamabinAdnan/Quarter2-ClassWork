In this class we have discussed about the installation of Next.js in our system and project stucture of next.js
We'll discuss here briefly, for more detail, you can check below link
[Next.js Project Structure](https://nextjs.org/docs/getting-started/project-structure)

**Brief Discussion of Class**

- React used for web application
- React Native used for mobile application

- During installation nextjs project ask you about following requirement

What is your project named? my-app
Would you like to use TypeScript? No / Yes **If you select `No` then JS folder will install instead of TS**
Would you like to use ESLint? No / Yes **Project formatter, keep your code in order**
Would you like to use Tailwind CSS? No / Yes **It will install tailwind CSS in your project, you dont to install it seperately**
Would you like to use `src/` directory? No / Yes 
Would you like to use App Router? (recommended) No / Yes **Managing and distribution of project**
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*

**App Folder**

- fonts **The fonts folder is typically used to store custom fonts (e.g., .woff2, .woff, .ttf files) that can be imported and used across your app.**
- favicon.ico **Icon**
- global.css **This is the global stylesheet that applies to the entire application. You can define global styles like fonts, colors, resets, or common styling rules that are shared across all pages and components.**
- layout.tsx **The layout.tsx file defines a layout that wraps around your pages, providing a common structure such as headers, footers, or sidebars. It is reusable and can be shared across different pages | Also called Father of page.tsx**
- page.tsx **Main file | Homepage. It export code to layout.tsx**

 - .tsx *XML file of TS. We can write HTML in TS and vice versa*

 **Different between Div (<div></div>) and Fragment (<></>)**

 In Next.js (or React in general), both <div> and <Fragment> serve as wrappers for grouping elements, but they serve different purposes, especially in terms of rendering and semantics.

 1) **<div> (HTML element)**
    *Purpose:* 
    <div> is an HTML element used to group content for styling or layout purposes. It renders a div tag in the HTML output.
    *Rendering:*
    A <div> element creates a real HTML element in the DOM, which means it adds an extra node to the DOM tree. This can potentially affect layout and styling, especially if you're concerned about unnecessary wrapper elements cluttering your markup.
    *Use Case:*
    When you need a block-level element for styling or layout (e.g., for applying CSS classes or flexbox/grid layouts).
    Use a <div> when you need a physical container for styling or layout (like applying CSS classes, flexbox, grid, etc.).

2) **<Fragment> (React Fragment)**
    *Purpose:*
    <Fragment> is a special React component (or shorthand <> </>) used to group elements without adding an extra node to the DOM. It does not render any HTML element or tag itself. It's used to group multiple elements together when you need to return multiple elements from a component but don't want to introduce an additional DOM element.
    *Rendering:*
    <Fragment> (or its shorthand <> </>) doesn’t render any actual DOM element. It’s purely for grouping elements logically in the JSX without cluttering the DOM with extra nodes.
    *Use Case:*
    When you need to return multiple elements from a component, but you don't want the extra <div> element in your rendered HTML.
    Use a <Fragment> (or <> </>) when you need to group elements but don’t want the overhead of an extra HTML element in the DOM.

**React**
React is JavaScript library for building the User interface (UI)
[React, Component and many more](https://www.canva.com/design/DAGQctUI_Oc/tXSxfJheLFJaf1oNVb6aWg/view?utm_content=DAGQctUI_Oc&utm_campaign=designshare&utm_medium=link&utm_source=editor#3)

