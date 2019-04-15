var $parts = $("#parts");

// The API object contains methods for each kind of request we'll make
var API = {
  saveparts: function(parts) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/parts",
      data: JSON.stringify(parts)
    });
  },
  getparts: function() {
    return $.ajax({
      url: "api/parts",
      type: "GET"
    });
  },
  deleteparts: function(id) {
    console.log(id);
    return $.ajax({
      url: "api/parts/" + id,
      type: "DELETE"
    });
  }
};
var refreshlogs = function() {
  console.log("reload");
  API.getparts().then(function(data) {
    var i;
    for (i = 0; i < data.length; i++) {
      console.log(data);
      console.log(data[i].parts_id);
      console.log(data[i].part_name);
      console.log(data[i].stock);

      var parts = [
        (parts_id = data[i].parts_id),
        (part_name = data[i].part_name),
        (stock = data[i].stock)
      ];
      console.log(parts_id);
      console.log(part_name);
      parts = $("<tr>").append(
        $("<td>").text(parts_id),
        $("<td>").text(part_name),
        $("<td>").text(stock)
      );
      $("#parts").append(parts);
    }
    console.log(parts);
  });
};

$(document).ready(function() {
  refreshlogs();
});
