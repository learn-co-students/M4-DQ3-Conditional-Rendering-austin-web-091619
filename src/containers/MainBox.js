import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    display:""
  }
  itemToRender(){
    switch(this.state.display){
    case "pokemon":
      return <Pokemon/>
    case 'profile':
      return <Profile/>
    case 'cocktail':
      return <Cocktails />
    case 'photo':
      return <Photos />
    }
  }
  changeMainDisplay=(newDisplay)=>{
    this.setState({display: newDisplay})
  }
  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    

    return (
      <div>
        <MenuBar display={this.state.display} changeMainDisplay={this.changeMainDisplay}/>
        {this.itemToRender()}
      </div>
    )
  }

}

export default MainBox
