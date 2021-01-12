import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Actions } from "../../states/ContactListState";
import ContactList from "./ContactList";

const mapStateToProps = (state) => ({
    contacts: state["flex-rally"].contactList.contacts,
    airtableBaseId: state["flex-rally"].contactList.airtableBaseId,
    workerAvailability: state["flex-rally"].contactList.workerAvailability
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
