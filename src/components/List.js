import React from "react";
import Card from "./Card.js";

const MovieList = (props) => {
    const data = props.data;

    return (
        <>
            <div className="flex flex-col pl-8 pr-8 py-8 overflow-hidden">
                <div className='text-white pb-8 text-3xl w-screen'>{props.title}</div>
                <Card data={data}></Card>
            </div >

        </>
    )
}
export default MovieList;

