import React from 'react'

const NavBar = (targetId) => {
    return (
        <div className='bg-gray-900 flex flex-row text-white p-8 space-x-8 text-m'>
            <p>Titre</p>
            <p>Trending movies</p>
            <p>Trending series</p>
            <p>Upcoming movies</p>
            <a href={`#${targetId}`}>Les dernières nouvelles</a>
        </div>
    )
}

export default NavBar