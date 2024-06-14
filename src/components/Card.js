import React from "react";
import moment from "moment";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Nombre d'images à afficher à la fois
    slidesToScroll: 3 // Nombre d'images à défiler à chaque fois
};



const Card = (props) => {
    const dataList = props.data;

    return (
        <>
            <Slider {...settings}>
                {dataList.map((data, index) => (

                    < div key={index} className=" bg-gray-700 text-white border-8 border-gray-700/100 rounded-md p-4 m-4 drop-shadow-lg hover:scale-105 ease-out duration-300" >
                        <div className="flex flex-row justify-center">
                            <img className="w-64 rounded" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="affiche" ></img>
                        </div>
                        <p className="p-4 font-bold">{data.title ? data.title : data.name}</p>
                        <div className="flex px-4 pb-2 text-sm font-light m-0">
                            <p className="m-0 text-left">Sortie: {data.release_date ? moment(data.release_date, "YYYY-MM-DD").format('DD/MM/YYYY') : moment(data.first_air_date, "YYYY-MM-DD").format('DD/MM/YYYY')}</p>
                            <p className="m-0 ml-auto text-right">Note: {Math.round(data.vote_average * 10) / 10}/10</p>
                        </div>
                    </div >
                ))}
            </Slider>
        </>
    )
}
export default Card;