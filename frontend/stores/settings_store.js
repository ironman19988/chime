var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher");
var ActionTypes = require("../constants/app_constants").ActionTypes;

var _showModal = false;
var SettingsStore = new Store(AppDispatcher);

SettingsStore.__onDispatch = function (payload) {
  var actionType = payload.actionType;
  var response = payload.response;

  switch (actionType) {

    case ActionTypes.SHOW_SETTINGS_MODAL:
      setShowModal(true);
      break;

    case ActionTypes.CLOSE_SETTINGS_MODAL:
      setShowModal(false);
      break;

    case ActionTypes.USER_UPDATED:
      if (!response.errors) { setShowModal(false); }
      break;
  };
};

SettingsStore.showModal = function () {
  return _showModal;
};

var setShowModal = function (boolean) {
  _showModal = boolean;

  SettingsStore.__emitChange();
};

module.exports = SettingsStore;
