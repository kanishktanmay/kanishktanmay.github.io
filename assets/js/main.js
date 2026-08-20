function openNav() {
  // 200px on small screens, 250px on larger screens
  const sidebarWidth = (window.innerWidth <= 600 || window.innerHeight <= 700) ? "200px" : "250px";

  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";

  // Hide profile card on mobile
  const profileCard = document.querySelector(".profile-card");
  if (profileCard) {
    profileCard.classList.add("hide-mobile");
  }
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

  // Bring profile card back on mobile
  const profileCard = document.querySelector(".profile-card");
  if (profileCard) {
    profileCard.classList.remove("hide-mobile");
  }
}