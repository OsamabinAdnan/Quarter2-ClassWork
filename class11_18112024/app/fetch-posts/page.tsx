'use client'
import { useState, useEffect } from "react"

export default function FetchPostsPage () {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        fetch('/api/external')
        .then ((res)=> res.json())
        .then ((data)=> {
            if (data.success){
                setPosts (data.data)
            } else {
                setError (data.message)
            }
        })
        .catch((err)=> setError('An unexpected error'))
        .finally(()=> setLoading(false))
    },[])

    return (
        <div className="max-w-full  mx-auto p-6 bg-gradient-to-tr from-[#003566] via-[#004b23] to-[#3c096c]">
            <h1 className="text-[55px] text-[#fff] font-bold text-center mb-6">Posts</h1>
            {error ? (
                <p className="text-red-500 text-center">{error}</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post: { id: number; title: string; body: string }) => (
                        <div
                            key={post.id}
                            className="p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-all hover:scale-110"
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                            <p className="text-gray-600 text-lg">{post.body}</p>
                            <span className="block mt-4 text-sm text-gray-500">Post ID: {post.id}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}