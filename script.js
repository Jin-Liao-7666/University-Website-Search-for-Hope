$(document).ready(function() {
    $("#Tuition").click( function() {
      $("#tui").slideToggle('slow');
      });
    $("#Residence").click( function() {
      $("#resi").slideToggle('slow');
      });
    $("#Books").click( function() {
      $("#book").slideToggle('slow');
      });
    $("#Inc").click( function() {
      $("#inc").slideToggle('slow');
      });
    $("#All").click( function() {
      $("#inc").slideToggle('slow');
      $("#book").slideToggle('slow');
      $("#resi").slideToggle('slow');
      $("#tui").slideToggle('slow');
        });
  });