import Head from '../Components/Head'
import StyleIndex from '../styles/index.module.css'
import Style from '../styles/link.module.css'
import Footer from '../Components/footer'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import Title from '../Components/title'
import LiksEstudos from '../Components/liks'

library.add(fas);

export default function Links(){
    return(
        <div>
            <Head title="Links Downloads"/>
            <Title/>
            <div className={StyleIndex.content}>
                <div className={Style.divcontent}>

                    <LiksEstudos
                        src = "https://www.youtube.com/watch?v=529Iggl1NZs&t=526s"
                        imagesrc = "/img/logoBombeiroCivil.png"
                        title = "Video aula 01"
                    />

                    <LiksEstudos
                        src = "https://www.youtube.com/watch?v=T6qHwBhWvl8"
                        imagesrc = '/img/logosocorrista.png'
                        title = "Video aula 02"
                    />
                    <LiksEstudos
                        src = "https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/saude/arquivos/crianca/Obstrucao_ViasAereas_CorpoEstranho.pdf"
                        imagesrc = '/img/pdfprefeitura.png'
                        title = "PDF Prefeitura"
                    />
                    <LiksEstudos
                        src = "https://pebmed.com.br/obstrucao-de-vias-aereas-por-corpo-estranho-ovace-em-adultos/"
                        imagesrc = '/img/slider_1.jpg'
                        title = "Site PEBMED"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}