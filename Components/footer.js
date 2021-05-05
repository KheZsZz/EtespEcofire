import Style from '../styles/footer.module.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);


export default function footer(position){
    return(
        <div style={
            position = {position}
        }>
            <footer className={Style.container}>
                <div>
                    <FontAwesomeIcon icon="copyright"/> copyright <br/>by Kevin Oliveira
                </div>
            </footer>
        </div>
    );
}