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
  }
};
$("#submit_maint").on("click", function(event) {
  event.preventDefault();
  var stroke_range = $("#pump_strokes")
    .val()
    .trim();
  var unit_id = $("#unit_id")
    .val()
    .trim();
  var part = $("#part")
    .val()
    .trim();
  var parts_used = $("#parts_used")
    .val()
    .trim();
  if (stroke_range && unit_id && part && parts_used) {
    var newPost = {
      stroke_range: $("#pump_strokes")
        .val()
        .trim(),
      unit_id: $("#unit_id")
        .val()
        .trim(),
      part: $("#part")
        .val()
        .trim(),
      consumed: $("#parts_used")
        .val()
        .trim()
    };
    console.log(newPost);
    API.savemaintenance_logs(newPost).then(function() {
      console.log("yea");
    });
  } else {
    alert("Please fill out all fields!");
  }
});
