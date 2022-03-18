import React,{ component } from "react";
import LifeCycleExample from "./LifeCycleExample";
 class LifeCycleExampleDad extends component {
     constructor(props) {
         super(props);

         this.state = {
             visible: true
         }
     }

     render() {
         return (
             <div>
                 <p>Component is {this.state.visible ? 'display' : 'hide'}</p>
                 <button
                 onClick={() =>{
                     this.setState({ visible: !this.state.visible});
                 }}
                 >
                     {this.state.visible ? "Hide" :"Show"}
                     </button>
                     {this.state.visible && <LifeCycleExample />}
             </div>
         )
     }
 }

 export default LifeCycleExampleDad;