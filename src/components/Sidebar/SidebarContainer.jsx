
import { connect} from "react-redux";
import Sidebar from './Sidebar';



const mapStateToProps = (state) => {
  return {
    navbar: state.sidebarPage.navbar,
    friends: state.friendsBar.friends
  }
}


const SidebarContainer = connect(mapStateToProps)(Sidebar);




export default SidebarContainer;