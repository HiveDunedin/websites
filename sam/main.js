function toggleNeonMode() {
    $('body').toggleClass('neon');
    var neon = Boolean(getCookie('neon'));
    setCookie('neon', !neon);
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

$(function(){
  if (Boolean(getCookie('neon'))) {
      $('body').addClass('neon')
  }
})