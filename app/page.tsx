import Link from "next/link";
import { Blog } from "./model/blog";

const getAllBlogs = async () => {
    try {
        //  const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const res = await fetch('https://nazrul78.onrender.com/api/v1/blogs')
        if (!res.ok) {

            throw new Error('Some thing wrong');
        } else {
            return await res.json();

        }

    } catch (error) {
        console.log('Cannot get data.');
    }
};



export default async () => {



    // const blogs: any[] = await getUsers();
    const rawData = await getAllBlogs();

    const blogs: Blog[] = rawData['data'];

    // console.log(blogs['data']);
    // console.log(blogs[0]._id);




    return (
        // <div>
        //     <b><p>Hello word</p></b>
        //     <b> <h1>Hello bro</h1></b>
        //     <h2>Hello bro</h2>

        // </div>

        // <section>

        //     {blogs.map(blog => <div className='bg-slate-400 max-w-sm rounded overflow-hidden shadow-lg'>
        //         <h1>{blog.title}</h1>
        //         <p>{blog.description}</p>
        //     </div>)};
        // </section>





        // <div>
        //     <ul>
        //         {blogs.map(blog => <li > <Link href={`/${blog._id}`}> {blog.title}</Link></li>)}
        //     </ul>
        // </div>


        <section>

            {blogs.map(blog => <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                {/* <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"> */}
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">

                    <blockquote>
                        {/* <ul>
                            <li></li>
                        </ul> */}
                        <h1 className="text-lg font-medium">

                            <Link href={`/blog/${blog._id}`}> {blog.title}</Link>
                            {/* <Link href={`/${1442412}`}> {blog.title}</Link> */}

                        </h1>
                    </blockquote>
                    <blockquote>
                        <p className="text-lg font-medium">
                            {blog.description}
                        </p>
                    </blockquote>

                    <blockquote>
                        <p>Like:  {blog.like}, View:  {blog.view}, Date:  {blog.updatedAt}</p>
                    </blockquote>

                </div>
            </figure>)};
        </section>


        // <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        //     {/* <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"> */}
        //     <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        //         <blockquote>
        //             <p className="text-lg font-medium">
        //                 “Tailwind CSS is the only framework that I've seen scale
        //                 on large teams. It’s easy to customize, adapts to any design,
        //                 and the build size is tiny.”
        //             </p>
        //         </blockquote>
        //         <figcaption className="font-medium">
        //             <div className="text-sky-500 dark:text-sky-400">
        //                 Sarah Dayan
        //             </div>
        //             <div className="text-slate-700 dark:text-slate-500">
        //                 Staff Engineer, Algolia
        //             </div>
        //         </figcaption>
        //     </div>
        // </figure>
    )
}