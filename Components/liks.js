import Head from '../Components/Head'
import Style from '../styles/link.module.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import Image from 'next/image'

library.add(fas);

export default function LiksEstudos({src,imagesrc, title}){
    return(
        <div className={Style.div}>
            <Image
                className = {Style.image}
                src = {imagesrc}
                alt = {title}
                width = {150}
                height = {100}
                layout='responsive'
            />
            <Link href={src}>
                <a target="_blank">
                    {title}
                </a>
            </Link>

        </div>
    );
}