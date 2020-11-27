import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Actions } from "../../states/ContactListState";
import ContactList from "./ContactList";

const mapStateToProps = (state) => ({
    contacts: state["flex-for-organizers"].contactList.contacts,
    airtableBaseId: state["flex-for-organizers"].contactList.airtableBaseId,
    workerAvailability: state["flex-for-organizers"].contactList.workerAvailability
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
