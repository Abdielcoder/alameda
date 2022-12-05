$(function() {
  
    // contact form animations
    $('#add').click(function() {
      $('#addForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#addForm");
  
      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          container.fadeOut();
      }
    });
    
  });