import React, {useState, useEffect} from 'react';
import './Sidebar.css'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus  } from '@fortawesome/free-solid-svg-icons'
import { animateScroll as scroll } from 'react-scroll';

const Sidebar = () => {
    const initialPercentage = ((document.documentElement.scrollHeight + document.body.clientHeight )/100).toFixed(0)
    const [scrollPercent, setScrollPercent] = useState(initialPercentage)

    useEffect(() => {
        function onScroll() {
            
            const result = ((document.documentElement.scrollTop + document.body.scrollTop + document.documentElement.clientHeight) / (document.documentElement.scrollHeight ) * 100)
            const perfectResult = result>99.8 ? 100 : result.toFixed(0)
            setScrollPercent(perfectResult)
        }

        return window.addEventListener("scroll", onScroll)
    }, [scrollPercent])

    const ScrollTo = function() {
        scroll.scrollToBottom();
    }

    return (
        <div className="sidenav sidebar">
            <button className="socialIcons">
                <a href="#">
                    {/* <FontAwesomeIcon icon={faCoffee} /> */}
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
            </button>
            <br/>
            {/* <button className="socialIcons">
                <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
            </button>
            <br/>
            <button className="socialIcons">
                <a href="#">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                </a>
            </button>
            <br/>
            <button className="socialIcons">
                <a href="#">
                    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                </a>
            </button>
            <br/> */}
            <button className="socialIcons">
                <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </button>
            <br/>
            <button className="socialIcons">
                <a href="#">
                    <i className="fa fa-comments" aria-hidden="true"></i>
                </a>
            </button>
            {/* <br/>
            <button className="socialIcons">
                <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
            </button> */}
            <hr style={{width: '50px'}}/>
            <button className="socialIcons plusIcon" onClick={ScrollTo}>
                <a href="#">
                    {/* <FontAwesomeIcon icon={faPlus} /> */}
                    <i className="ri-arrow-down-line" aria-hidden="true"></i>
                </a>

            </button>
            <br/>
            <CircularProgressbar value={scrollPercent} text={`${scrollPercent}%`} 
                styles={buildStyles({
                    // pathColor: `rgba(255, 196, 81, ${scrollPercent / 100})`,
                    pathColor: '#ffc451',
                    textColor: '#b37700'
                })}
            />
            
        </div>
    );
}

export default Sidebar;
