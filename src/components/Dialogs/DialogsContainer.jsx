
import Dialogs from './Dialogs';
import { connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}


const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
