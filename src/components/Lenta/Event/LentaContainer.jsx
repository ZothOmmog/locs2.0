import { connect } from "react-redux"
import Lenta from "../Lenta";

const mapStateToProps = (state) => {
    return {
        events: state.lentaPage.events
    }
}

const LentaContainer = connect(mapStateToProps)(Lenta);

export default LentaContainer;