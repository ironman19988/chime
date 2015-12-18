var AppDispatcher = require("../dispatcher/dispatcher");
var AppConstants = require("../constants/app_constants");
var ActionTypes = AppConstants.ActionTypes;

var PlayerActions = {
  playTrackNow: function (track) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.PLAY_TRACK_NOW,
      track: track
    });
  },

  addTrackToQueue: function (track) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ADD_TRACK_TO_QUEUE,
      track: track
    });
  },

  playNextTrack: function (track) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.PLAY_NEXT_TRACK,
      track: track
    });
  },

  loadQueue: function (queue) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.PLAY_QUEUE_RECEIVED,
      queue: queue
    });
  }
};

module.exports = PlayerActions;