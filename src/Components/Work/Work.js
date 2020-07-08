import React, { Component } from 'react';
import Display from '../Display/Display';


class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: [
        {
          id: 1,
          title: 'BELLAFARE',
          img: 'https://fitsmallbusiness.com/wp-content/uploads/2018/05/word-image-586.png'
        },
        {
          id: 2,
          title: 'NATIVE UNION',
          img: 'https://fitsmallbusiness.com/wp-content/uploads/2018/05/word-image-576.png'
        },
        {
          id: 3,
          title: 'AKRON',
          img: 'https://webdesignakron.com/wp-content/themes/WebDesignTheme/images/main-slider/cleveland-web-design-company-example.jpg'
        },
        {
          id: 4,
          title: 'RIBBON GLOBAL',
          img: 'https://www.deluxe.com/sites/deluxe.signupserver.com/files/bus-serv-custom-large.jpg'
        },
      ]
    }
  }
  render() {

    const workList = this.state.work.map((work, index) => {
      return <Display key={index} work={work}/>
    })

    return(
      <div>
        <h1 className='sub-title'></h1>
        {workList}
      </div>
    )
  }
}

export default Work;