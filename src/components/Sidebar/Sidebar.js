import React, {useState, useEffect} from 'react';
import './Sidebar.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus  } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const [scrollPercent, setScrollPercent] = useState(0)

    const currentPage = document.documentElement.scrollHeight;
    const client = document.documentElement.clientHeight;

    console.log(currentPage);
    console.log("client",client);

    useEffect(() => {
        function onScroll() {
            
            const result = ((document.documentElement.scrollTop + document.body.scrollTop + document.documentElement.clientHeight) / (document.documentElement.scrollHeight ) * 100)
            const perfectResult = result>99.8 ? 100 : result.toFixed(0)
            setScrollPercent(perfectResult)
        }
    
        return window.addEventListener("scroll", onScroll)
    }, [scrollPercent])

    return (
        <div class="sidenav sidebar">
            <button className="socialIcons">
                <a href="#">
                    {/* <FontAwesomeIcon icon={faCoffee} /> */}
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
            </button>
            <br/>
            <button className="socialIcons">
                <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
            </button>
            <br/>
            <button className="socialIcons">
                <a href="#">
                    <i class="fa fa-google-plus" aria-hidden="true"></i>
                </a>
            </button>
            <br/>
            <button className="socialIcons">
                <a href="#">
                    <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                </a>
            </button>
            <br/>
            <button className="socialIcons">
                <a href="#">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
            </button>
            <hr style={{width: '50px'}}/>
            <button className="socialIcons plusIcon">
                <a href="#"><FontAwesomeIcon icon={faPlus} /></a>
            </button>
            <br/>
            <CircularProgressbar value={scrollPercent} text={`${scrollPercent}%`} />
            
        </div>
    );
}

export default Sidebar;
