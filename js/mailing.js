$(function () {

    var form = $('#contactForm');

    
    /* local validation */
    $("#contactForm").validate({
      /* submit via ajax */
      submitHandler: function (form) {
        var sLoader = $(".submit-loader");

        $.ajax({
          type: "POST",
          url: "inc/sendEmail.php",
          data: $(form).serialize(),
          beforeSend: function () {
            sLoader.slideDown("slow");
          },
          success: function (msg) {
            // Message was sent
            if (msg == "OK") {
              sLoader.slideUp("slow");
              $(".message-warning").fadeOut();
              $("#contactForm").fadeOut();
              $(".message-success").fadeIn();
            }
            // There was an error
            else {
              sLoader.slideUp("slow");
              $(".message-warning").html(msg);
              $(".message-warning").slideDown("slow");
            }
          },
          error: function () {
            sLoader.slideUp("slow");
            $(".message-warning").html(
              "Something went wrong. Please try again."
            );
            $(".message-warning").slideDown("slow");
          },
        });
      },
    });
  }
)