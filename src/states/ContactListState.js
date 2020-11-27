const CONTACTS_LOADED = 'CONTACTS_LOADED';
const SET_AIRTABLE_BASE_ID = 'SET_AIRTABLE_BASE_ID';
const SET_WORKER_AVAILABILITY = 'SET_WORKER_AVAILABILITY';

const initialState = {
  contacts: [],
  airtableBaseId: '',
  workerAvailability: false,
};

export class Actions {
  static contactsLoaded = (contacts) => ({ type: CONTACTS_LOADED, contacts: contacts });
  static setAirtableBaseId = (id) => ({ type: SET_AIRTABLE_BASE_ID, id: id });
  static setWorkerAvailability = (available) => ({ type: SET_WORKER_AVAILABILITY, available: available });
}

export function reduce(state = initialState, action) {
  switch (action.type) {
    case CONTACTS_LOADED: {
      return {
        ...state,
        contacts: action.contacts,
      };
    }

    case SET_AIRTABLE_BASE_ID: {
      return {
        ...state,
        airtableBaseId: action.id,
      };
    }

    case SET_WORKER_AVAILABILITY: {
      return {
        ...state,
        workerAvailability: action.available,
      };
    }

    default:
      return state;
  }
}
