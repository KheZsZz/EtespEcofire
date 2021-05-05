import Head from '../Components/Head'
import Image from 'next/image'
import Link from 'next/link'
import Style from '../styles/index.module.css'
import Footer from '../Components/footer'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import Title from '../Components/title'


library.add(fas);

export default function Home() {
  return (
   <div>
      <Head title ="Arquivos de Aula"/>

      <Title/>

      <div className={Style.content}>
        <div className={Style.divcontent}>
          <h3>Welcome</h3>
          <p> Here you will find some links where you can study on the topic "Choking"
          </p>
          <Link href ="./linkDownloads">
              <a>
                Links
                  <i>
                    <FontAwesomeIcon icon="arrow-right"/>
                  </i>
              </a>
            </Link>
        </div>

      </div>

      <Footer/>
   </div>
  )
}
