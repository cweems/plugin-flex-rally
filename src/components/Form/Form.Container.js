import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Actions } from "../../states/ContactListState";
import Form from "./Form";

const mapStateToProps = (state, ownProps) => ({
    contacts: state["flex-rally"].contactList.contacts,
    airtableRecordId: ownProps.airtableRecordId,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);