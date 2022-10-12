import React from 'react'
import style from "./Loader.module.css"
import Loadere from '../../images/loading.webp'

const Loader = () => {
    return (
        <>
            <div className={style.loader}>
                <img src={Loadere} alt="Loading" />
                </div>
        </>
    )
}

export default Loader