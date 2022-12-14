import React from "react";
import { useLoaderData } from "react-router-dom";
import Subject from "./Subject";
import img from "../../images/person.jpg";

const Topic = () => {
    const topic = useLoaderData();
    // console.log(topic);
    const { data } = topic;
    return (
        <div className="bg-slate-600 py-12">
            <div className="mx-5 lg:mx-20 bg-slate-400 p-6 flex lg:w-1/3 rounded-lg mb-12">
                <img
                    className="w-28 h-28 lg:w-36 rounded-full border-4 border-green-500"
                    src={img}
                    alt="person.jpg"
                ></img>
                <div className="flex flex-col px-5 justify-center">
                    <h1 className="text-2xl text-start font-bold">John Doe</h1>
                    <h1 className=" text-start font-bold py-1">Web developer.</h1>
                    <h1 className="font-medium">Code is like humor. When you have to explain it, it’s bad.</h1>
                </div>
            </div>
            <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 md:mx-20 ">
                {data.map((data) => (
                    <Subject key={data.id} data={data}></Subject>
                ))}
            </div>
        </div>
    );
};

export default Topic;
