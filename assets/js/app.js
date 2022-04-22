$(function () {
  if (screen.width <= 768) {
    document.querySelector("body").style.display = "none";
    document.querySelector("body").innerHTML = "Cannot open in mobile devices";
  }

  $(".kt-logo").click(() => {
    location.href = "index.php";
  });

  $('input[name="branch"]').click(function () {
    if (this.id == "mca") {
      $("#third").parent().hide("slow");
      $("#fourth").parent().hide("slow");
    } else {
      $("#third").parent().show("slow");
      $("#fourth").parent().show("slow");
    }
  });
});

function b64_to_utf8(str) {
  return decodeURIComponent(window.atob(str));
}

$(function () {
  var footer = document.createElement("div");
  footer.className = "footer";
  footer.innerHTML = `<div class='container'><div class='row'><div class='col-md-12'><p style='text-align: center;'>${b64_to_utf8(
    "TWFkZSBieSBGaW5kUHJvamVjdA=="
  )}</p></div></div></div>`;
  document.body.appendChild(footer);
});
