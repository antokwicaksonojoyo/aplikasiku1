import React, {Component} from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product';

class Home extends Component {
    render(){
        return (
          <div>
          {/*<p>Youtube Component</p>
          <hr/>
          <YouTubeComp 
          time="7.12"
          title="HTML 1"
          desc="2x ditonton, 2 hari yang lalu"/>
          <YouTubeComp 
          time="8.02" 
          title="HTML 2"
          desc="200x ditonton, 7 hari yang lalu"/>
          <YouTubeComp 
          time="5.04" 
          title="HTML 3"
          desc="6x ditonton, 1 hari yang lalu"/>
          <YouTubeComp 
          time="4.12" 
          title="HTML 4"
          desc="0x ditonton"/>
          <YouTubeComp/> */}
          <p>Counter</p>
           <Product />
          </div>
        )  
    } 
}
export default Home;