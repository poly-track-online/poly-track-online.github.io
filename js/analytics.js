(function() {
  // Create and load Google Analytics script
  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-9EZRPQLB5N";
  document.head.appendChild(gaScript);

  // Initialize Google Analytics after script loads
  gaScript.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }

    gtag("js", new Date());
    gtag("config", "G-9EZRPQLB5N");
  };
})();
