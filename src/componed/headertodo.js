import React, { Component } from 'react'

export default class headertodo extends Component {
    
state={
    items:[],
        
  
   item:"",
   itemsecnd:"",
   arrr:[],
   test:[]
}
addItem=()=>{
    if(this.state.itemsecnd=="")
    {
        alert("entrer des char")
    }
    else{
    this.setState({
        items:this.state.items.concat({
            title:this.state.itemsecnd,
            id:Math.random(),
            ligne:false,
            isComplete:"complete",
            isUndo:'undo'
        })
      
    })
    this.state.itemsecnd=""
}
}
onChange=(e)=>{
   
    this.setState({
        itemsecnd:e.target.value,
      
    })
 

}
handelcomp=(id)=>{

    this.setState({
        items:this.state.items.map(el=>el.id==id?{...el ,ligne:!el.ligne}:el)
  
})
    
 }
 deleteitem=(id)=>{
  
       var  arr= this.state.items.filter(el=>el.id!=id)
       this.setState({
              items:this.state.arrr.concat(arr)
             
          })
       
    }



    render() {
        let btn_class
        // this.state.items.map(el=>) ;
        
        console.log("fsdfsdfsdfsd",btn_class)
        return (
            <div>
            <div className="header">
            <h1 className="title-to-do-up">To-Do App!</h1> 
            <p className="paragraphe-to-do-up">Add New To-Do</p>
            <input class="input-task"type="text"onChange={this.onChange}value={this.state.itemsecnd} placeholder="Enter New TASK"/>
            <button class="button-add"onClick={this.addItem} > Add</button>  
            </div>
            <div>
            <h1 class="started-title">Let's get some work done!</h1>
            <ul className="alllist">
            {this.state.items.map(el=>(el.ligne? btn_class ="star":btn_class="aadi") &&
            <ul className="inputitem">
               
           <li>{<button className="butt"onClick={()=>this.handelcomp(el.id)}>{el.ligne==true?el.isUndo:el.isComplete}</button>}</li>
           <li>{<button className="butt"onClick={()=>this.deleteitem(el.id)}>delete</button>}</li>
           <li className={btn_class}>{el.title}</li>
           </ul>
                )}    
                    {/* {
                   this.state.items.map((el,i)=>!el==''?
                   
                 <ul className="inputitem">
           <li className={`${btn_class} li${i}`}>{el}</li>
           <li>{<button className="butt" onClick={this.handelcomp}>complete</button>}</li>
           <li>{<button  className="butt"onClick={this.deleteitem}>delete</button>}</li>
           
           </ul>
           :
           null

                    
                   )
                   
                    
        
             } */}
            </ul>
        
            </div>
            <footer class="last-section">
    <img src="" alt="logo"width="50px"/>
    <p>Proudly Powered By Cosmic JS</p>
</footer>
            </div>
        )
    }
}


// function headertodo() {
    // return (
    //     <div className="header">
    //     <h1 className="title-to-do-up">To-Do App!</h1> 
    //     <p className="paragraphe-to-do-up">Add New To-Do</p>
    //     <input class="input-task"type="text" placeholder="Enter New TASK"/>
    //     <button class="button-add"onclick="additem()"> Add</button>  
    //     </div>
    // )
// }
// export default headertodo