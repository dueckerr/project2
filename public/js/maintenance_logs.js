var $maintenance_logs = $("#maintenance_logs");

// The API object contains methods for each kind of request we'll make
var API = {
  savemaintenance_logs: function(maintenance_logs) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/maintenance_logs",
      data: JSON.stringify(maintenance_logs)
    });
  },
  getmaintenance_logs: function() {
    return $.ajax({
      url: "api/maintenance_logs",
      type: "GET"
    });
  },
  deletemaintenance_logs: function(id) {
    console.log(id);
    return $.ajax({
      url: "api/maintenance_logs/" + id,
      type: "DELETE"
    });
  },
  findmaintenance_logs: function(id) {
    return $.ajax({
      url: "api/maintenance_logs/unit_id" + id,
      type: "GET"
    });
  }
};
var refreshlogs = function() {
  console.log("reload");
  API.getmaintenance_logs().then(function(data) {
    var i;
    for (i = 0; i < data.length; i++) {
      var maintenance_logs = [
        (logs_id = data[i].logs_id),
        (unit_id = data[i].unit_id),
        (stroke_range = data[i].stroke_range),
        (part = data[i].part),
        (consumed = data[i].consumed)
      ];
      maintenance_logs = $("<tr>").prepend(
        $("<td>")
          .text(logs_id)
          .attr("id", logs_id),
        $("<td>").text(unit_id),
        $("<td>").text(stroke_range),
        $("<td>").text(part),
        $("<td>").text(consumed),
        $("<button>")
          .addClass("btn btn-danger float-right delete")
          .text("ｘ")
          .attr("data-num", logs_id)
      );
      $("#maintenance_logs").prepend(maintenance_logs);
    }
  });
};

$(document).ready(function() {
  refreshlogs();
});

var handleDeleteBtnClick = function() {
  var idToDelete = this.getAttribute("data-num");
  console.log(idToDelete);
  var id = parseInt(idToDelete);
  console.log(id);
  API.deletemaintenance_logs(id).then(function() {
    refreshlogs();
  });
};

// eslint-disable-next-line no-unused-vars
var searchunits = function() {
  var unit_number = document.getElementById("link_id").value;
  // var idToDelete = this.getAttribute("data-num");
  console.log(unit_number);
  var id = parseInt(unit_number);
  console.log(id);
  API.findmaintenance_logs(id).then(function(data) {
    $("#maintenance_results").empty();
    console.log(data);
    var i;
    for (i = 0; i < data.length; i++) {
      var maintenance_logs = [
        (logs_id = data[i].logs_id),
        (unit_id = data[i].unit_id),
        (stroke_range = data[i].stroke_range),
        (part = data[i].part),
        (consumed = data[i].consumed)
      ];
      maintenance_logs = $("<tr>").prepend(
        $("<td>")
          .text(logs_id)
          .attr("id", logs_id),
        $("<td>").text(unit_id),
        $("<td>").text(stroke_range),
        $("<td>").text(part),
        $("<td>").text(consumed),
        $("<button>")
          .addClass("btn btn-danger float-right delete")
          .text("ｘ")
          .attr("data-num", logs_id)
      );
      $("#maintenance_logs").prepend(maintenance_logs);
    }
  });
};

$maintenance_logs.on("click", ".delete", handleDeleteBtnClick);
