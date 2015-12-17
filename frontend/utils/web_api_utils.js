var WebAPIUtils = {
  signUp: function (userData, actionCallback) {
    $.ajax({
      url: "/users",
      type: "POST",
      data: {user: userData},
      success: function (response) {
        actionCallback(response);
      }
    });
  },

  login: function (userData, actionCallback) {
    $.ajax({
      url: "/session",
      type: "POST",
      data: {user: userData},
      success: function (response) {
        actionCallback(response);
      }
    });
  },

  logout: function (actionCallback) {
    $.ajax({
      url: "/session",
      type: "DELETE",
      success: function (response) {
        actionCallback(response);
      }
    });
  },

  fetchProfile: function (actionCallback) {
    $.ajax({
      url: "/profile/fetch",
      type: "GET",
      success: function (user) {
        actionCallback(user);
      }
    })
  },

  updateProfile: function (userData, actionCallback) {
    $.ajax({
      url: "/profile/update",
      type: "PATCH",
      data: {user: userData},
      success: function (user) {
        actionCallback(user);
      }
    })
  },

  fetchTracks: function (actionCallback) {
    $.ajax({
      url: "/api/tracks",
      type: "GET",
      success: function (tracks) {
        actionCallback(tracks);
      }
    })
  },

  fetchPlaylists: function (actionCallback) {
    $.ajax({
      url: "/profile/fetch_playlists",
      type: "GET",
      success: function (playlists) {
        actionCallback(playlists);
      }
    })
  },

  createPlaylisting: function (playlistingData, actionCallback) {
    $.ajax({
      url: "/api/playlistings",
      type: "POST",
      data: {playlisting: playlistingData},
      success: function (playlisting) {
        actionCallback(playlisting);
      }
    })
  }
};

module.exports = WebAPIUtils;
