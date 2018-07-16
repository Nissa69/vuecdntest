<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<script type="text/javascript">
function autocollapse() {
  var navbar = $('#autocollapse');

  navbar.removeClass('collapsed'); // set standart view
  if(navbar.innerHeight() > 50) // check if we've got 2 lines
  navbar.addClass('collapsed'); // force collapse mode
}

$(document).on('ready', autocollapse);
$(window).on('resize', autocollapse);
</script>


<script>

</script>
