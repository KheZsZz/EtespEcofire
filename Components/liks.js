import Head from '../Components/Head'
import Style from '../styles/link.module.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

library.add(fas);

export default function LiksEstudos({src,imagesrc, title}){
    return(
        <div className={Style.div}>
            <img
                className = {Style.image}
                src = {imagesrc}
                alt = {title}
            />
            <h2>
                <Link href={src}>
                    <a target="_blank">
                        {title}
                    </a>
                </Link>
            </h2>

        </div>
    );
}