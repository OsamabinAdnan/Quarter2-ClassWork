'use client'
import { useEffect, useState } from "react";


export default function Home() {
  //This sets up a "state," which is like a memory spot where we can keep the news data after we fetch it.
  const [data,setData] =useState(null);


  //This code block uses useEffect, a React hook, to fetch data from an external API when the component first loads.
  //The code inside useEffect will execute as soon as the component appears on the screen.
  useEffect(()=>{
    
    // fetch is a built-in JavaScript function used to make network requests. Here, it’s making a request to the NewsAPI.
    //fetch returns a Promise, which is a JavaScript object representing the eventual completion (or failure) of an asynchronous operation.
    fetch(
      'https://newsapi.org/v2/everything?q=tesla&from=2024-09-30&sortBy=publishedAt&apiKey=b19bb786aaa148f495e3124accd34e8c'
    )

    //Once the fetch request completes successfully, it triggers the first .then() method.
    //response represents the data that was received from the API, but it’s not yet in a format we can easily work with.
    //response.json() converts this response into JSON format (JavaScript Object Notation), making it easy to work with in JavaScript.
    .then((response)=>response.json())

    //After response.json() completes, it triggers the second .then() method.
    //data now contains the fully parsed JSON data from the API.
    //setData(data) updates the state of the component, using the setData function to store the fetched data.
    .then((data) => setData(data))

    //The [] at the end is an empty dependency array, meaning this useEffect will only run once when the component first mounts (similar to componentDidMount in class components). If there were values inside the array, the useEffect would rerun whenever those values changed.
  }, [])

  //Without useEffect, the fetch request would keep running every time the component re-renders, which is not ideal. The useEffect with an empty dependency array ensures that the fetch only happens once, making the component efficient and preventing unnecessary API calls.

  return (
    <>
       <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Car Data</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
        
        
        {/* This code checks if data has been fetched successfully. If it has, it displays the data formatted as JSON in a scrollable preformatted block; if it hasn’t, it displays a loading message. This pattern is common in React applications where data fetching occurs, providing a clear visual indication to the user of the current state of the application. */}
        {data ? (
          // <pre> Tag: This tag is used to display preformatted text. The browser will preserve whitespace and line breaks, making it ideal for displaying JSON data or code.
          <pre className="whitespace-pre-wrap text-gray-700 overflow-auto max-h-[500px]">
            {/* JSON.stringify(data, null, 2): This function converts the data object into a JSON string. */}
            {/* The second argument null is used as a replacer function (not used here). */}
            {/* The third argument 2 indicates that the JSON string should be pretty-printed with a 2-space indentation, making it more readable. */}
            {JSON.stringify(data, null, 2)}
          </pre>
        ) : (
          <p className="text-center text-gray-500 text-lg">Loading...</p>
        )}


      </div>
    </div>
    </>
  );
}
