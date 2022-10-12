import React from 'react'
import ReactStars from 'react-rating-stars-component'
const Starrating = ( {rating} ) => {
    return (
        <>

            <ReactStars 
                count={5}
                    value={rating}
                    isHalf={true} 
                 />
        </>
    )
}

export default Starrating
