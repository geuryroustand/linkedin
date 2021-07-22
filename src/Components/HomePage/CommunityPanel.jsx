import { Component } from "react";
import '../../styles/CommunityPanel.css'
import {BiPlus} from 'react-icons/bi'
class CommunityPanel extends Component{
    render(){
        return(
            <div className='community-panel'>
                <div className='p-3'>

                <div className='mb-2'><a className='community-color ' href="/">Groups</a></div>
                <div className='community-events '>
                    <header className='community-event-link'>
                        <a className='community-color' href="">Events</a>
                    </header>
                    <div className='community-plus'><BiPlus/></div>
                </div>
                <div className='mb-2'><a className='community-color' href="">Followed Hashtags</a> </div>
                </div>
                <div className='community-discoverMore '>Discover more</div>
            </div>
        )
    }
}
export default CommunityPanel 