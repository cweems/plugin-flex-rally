import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Actions } from "../../states/ContactListState";
import TabWindow from "./TabWindow";
import { Manager } from "@twilio/flex-ui";

const mapStateToProps = (state) => ({
    contacts: state["flex-rally"].contactList.contacts,
    airtableBaseId: state["flex-rally"].contactList.airtableBaseId,
    workerAvailability: state["flex-rally"].contactList.workerAvailability,
    workerTasks: Manager.getInstance().store.getState().flex.worker.tasks,
});

const mapDispatchToProps = (dispatch) => ({
    contactsLoaded: bindActionCreators(
        Actions.contactsLoaded,
        dispatch
    ),
    setAirtableBaseId: bindActionCreators(
        Actions.setAirtableBaseId,
        dispatch
    ),
    setWorkerAvailability: bindActionCreators(
        Actions.setWorkerAvailability,
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabWindow);
