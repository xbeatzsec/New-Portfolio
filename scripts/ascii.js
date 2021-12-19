function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
$(function(){
      $(".element").typed({
        strings: [

        "<span style='color:#009966;'><pre>Welcome to my beautiful website :D</pre>",

      "<span style='color:#009966;'><pre> ██████╗██╗   ██╗██████╗ ██╗               <br>██╔════╝██║   ██║██╔══██╗██║               <br>██║     ██║   ██║██████╔╝██║               <br>██║     ██║   ██║██╔══██╗██║               <br>╚██████╗╚██████╔╝██║  ██║███████╗          <br> ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝</pre>",
      "<span style='color:#009966;'><pre> ██╗  ██╗███████╗██████╗ ███╗   ██╗ █████╗ ███╗   ██╗██╗<br> ██║  ██║██╔════╝██╔══██╗████╗  ██║██╔══██╗████╗  ██║██║<br> ███████║█████╗  ██████╔╝██╔██╗ ██║███████║██╔██╗ ██║██║<br> ██╔══██║██╔══╝  ██╔══██╗██║╚██╗██║██╔══██║██║╚██╗██║██║<br> ██║  ██║███████╗██║  ██║██║ ╚████║██║  ██║██║ ╚████║██║ <br> ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  </pre>",

      "<span style='color:#009966;'><pre>Testing</pre>",

      "<span style='color:#009966;'><pre>Type:\".\" for some open sourcing</pre>",

"<span style='color:#009966;'><pre>Hernani, 21 yo, Pentester</pre>",

      "<span style='color:#009966;'><pre>Type: \"nani\" and you see magic</pre>",
      ],
      contentType: 'html',
      typeSpeed: 0,
      loop: true,
      shuffle: false,
      showCursor: false,
      });

});

}
                      



