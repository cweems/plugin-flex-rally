import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Actions } from "../../states/ContactListState";
import CallButton from "./CallButton";

const mapStateToProps = (state) => ({
    workerAvailability: state["flex-for-organizers"].contactList.workerAvailability
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CallButton);