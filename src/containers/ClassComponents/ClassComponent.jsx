import React from "react";

import { Header, Footer } from "../../components";

class TestClass extends React.Component {

// constructor(props){
//     super(props);
//     this.state = {
//         counter = 0
//     }

// }
componentDidMount(){
    console.log('component did mount')
  }



  componentWillUnmount(){
    console.log('component unmount');
  }

  render() {
    console.log('render function');
    return (
      <div className="App">
        {/* <Header title={basicData.title} /> */}
        <p className="pt-5 mt-5"></p>
        <h1>Class Component</h1>
        
        <Footer />
      </div>
    );
  }

}


export default TestClass;