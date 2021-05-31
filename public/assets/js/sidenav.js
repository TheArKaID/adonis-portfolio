function openNav() {
    document.getElementById("mainBar").classList.replace("col-md-11", "col-md-10");
    document.getElementById("mySidenav").style.width = "max-content";
    document.getElementById("sideHome").innerHTML = "Home"
    document.getElementById("sideProfile").innerHTML = "Profile"
    document.getElementById("sideExpertise").innerHTML = "Expertise"
    document.getElementById("sideWord").innerHTML = "Work Experience"
    document.getElementById("sideEdu").innerHTML = "Education"
    document.getElementById("sideInterest").innerHTML = "Interest"
    document.getElementById("sidePortfolio").innerHTML = "Portfolio"
    document.getElementById("navToggler").onclick = closeNav;
  }
  
  function closeNav() {
    document.getElementById("mainBar").classList.replace("col-md-10", "col-md-11");
    document.getElementById("mySidenav").style.width = "min-content";
    document.getElementById("sideHome").innerHTML = "Home"
    document.getElementById("sideProfile").innerHTML = "Profile"
    document.getElementById("sideExpertise").innerHTML = "Expertise"
    document.getElementById("sideWord").innerHTML = "Work Experience"
    document.getElementById("sideEdu").innerHTML = "Education"
    document.getElementById("sideInterest").innerHTML = "Interest"
    document.getElementById("sidePortfolio").innerHTML = "Portfolio"
    document.getElementById("navToggler").onclick = openNav;
  }