// Efecto de scroll suave
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      const target = $(this).attr('href');
      $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
    });
  });