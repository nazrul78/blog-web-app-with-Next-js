import Link from "next/link";
import { Blog } from "../../model/blog";

const getBlogById = async (id: string) => {
    try {

        const res = await fetch('https://nazrul78.onrender.com/api/v1/blog/' + id)
        if (!res.ok) {

            throw new Error('Some thing wrong');
        } else {
            return await res.json();

        }

    } catch (error) {
        console.log('Cannot get data.');
    }
};

export default async (params: any) => {
    var id = params['params']['id'];
    //  console.log(id);

    const rawData = await getBlogById(id);

    // console.log(rawData);

    const blog: Blog = rawData as Blog;
    // console.log(blog.title);

    return <section>

        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            {/* <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"> */}
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">

                <blockquote>

                    <h1 className="text-lg font-medium">{blog.title}



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
        </figure>
    </section>


}

