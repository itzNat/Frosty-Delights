// Color theme
const colorThemes = {
  pink: {
    bgColor: "#fef6f4",
    image: "images/iceCream-pink.png",
    fromColor: "from-pink-500",
    toColor: "to-purple-600",
    iconColor: "text-pink-500",
    buttonBg: "bg-pink-500",
    buttonHover: "hover:bg-pink-600",
    buttonBorder: "border-pink-500",
    buttonText: "text-pink-500",
    heroSubtitle: "text-gray-700",
  },
  yellow: {
    bgColor: "#fffaf0",
    image: "images/iceCream-yellow.png",
    fromColor: "from-amber-400",
    toColor: "to-yellow-500",
    iconColor: "text-amber-400",
    buttonBg: "bg-amber-400",
    buttonHover: "hover:bg-amber-500",
    buttonBorder: "border-amber-400",
    buttonText: "text-amber-400",
    heroSubtitle: "text-amber-900",
  },
  green: {
    bgColor: "#f0fff4",
    image: "images/iceCream-green.png",
    fromColor: "from-green-400",
    toColor: "to-emerald-600",
    iconColor: "text-green-500",
    buttonBg: "bg-green-500",
    buttonHover: "hover:bg-green-600",
    buttonBorder: "border-green-500",
    buttonText: "text-green-500",
    heroSubtitle: "text-green-900",
  },
  brown: {
    bgColor: "#f5f5f0",
    image: "images/iceCream-brown.png",
    fromColor: "to-red-900",
    toColor: "from-amber-700",
    iconColor: "text-amber-700",
    buttonBg: "bg-amber-700",
    buttonHover: "hover:bg-amber-800",
    buttonBorder: "border-amber-700",
    buttonText: "text-amber-700",
    heroSubtitle: "text-amber-900",
  },
  chocoVanilla: {
    bgColor: "#F5EFE6",
    image: "images/iceCream-chocoVanilla.png",
    fromColor: "from-amber-600",
    toColor: "to-amber-300",
    iconColor: "text-amber-700",
    buttonBg: "bg-amber-600",
    buttonHover: "hover:bg-amber-700",
    buttonBorder: "border-amber-600",
    buttonText: "text-amber-700",
    heroSubtitle: "text-amber-900",
  },
};

// Change ice cream flavor and update color theme
function changeFlavor(color) {
  const theme = colorThemes[color];
  console.log(color);
  if (!theme) return;

  document.querySelectorAll(".flavor-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document
    .querySelector(`.flavor-btn[data-color="${color}"]`)
    .classList.add("active");

  const heroBg = document.querySelector(".hero-bg");
  heroBg.style.backgroundColor = theme.bgColor;

  document.querySelectorAll(".ice-cream-img").forEach((img) => {
    img.classList.remove("active");
    img.classList.add("inactive");
  });

  const activeImage = document.querySelector(
    `.ice-cream-img[data-flavor="${color}"]`
  );
  setTimeout(() => {
    console.log(`Switching to ${color} flavor`);
    activeImage.classList.remove("inactive");
    activeImage.classList.add("active");
  }, 10);

  // Update text gradients and colors
  document.getElementById(
    "hero-title"
  ).className = `text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${theme.fromColor} ${theme.toColor} transition-all duration-500`;

  document.getElementById(
    "hero-subtitle"
  ).className = `text-xl md:text-2xl mb-8 ${theme.heroSubtitle} transition-colors duration-500`;

  document.getElementById(
    "nav-icon"
  ).className = `fas fa-ice-cream text-3xl mr-2 ${theme.iconColor} transition-colors duration-500`;

  document.getElementById(
    "nav-logo"
  ).className = `text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${theme.fromColor} ${theme.toColor} transition-all duration-500`;

  document.getElementById(
    "primary-btn"
  ).className = `${theme.buttonBg} ${theme.buttonHover} text-white px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 transition-colors duration-500`;

  document.getElementById(
    "secondary-btn"
  ).className = `border-2 ${theme.buttonBorder} ${theme.buttonText} hover:${theme.buttonBg} hover:text-white px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 transition-colors duration-500`;

  document.getElementById(
    "award-badge"
  ).className = `absolute -bottom-6 -right-6 ${theme.buttonBg} text-white px-6 py-3 rounded-lg shadow-lg transition`;

  document.getElementById(
    "contact-btn"
  ).className = `${theme.buttonBg} ${theme.buttonHover} text-white px-6 py-3 rounded-full font-semibold transition w-full`;

  document.getElementById(
    "claim-offer-btn"
  ).className = `bg-white ${theme.buttonText} px-8 py-3 rounded-full font-semibold transition transform hover:scale-105`;

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.dataset.color = color;
    link.className = `text-gray-800 hover:${theme.iconColor} transition nav-link`;
  });

  document.querySelectorAll(".statistic").forEach((stat) => {
    stat.className = `statistic text-4xl font-bold ${theme.iconColor} transition-colors duration-500`;
  });

  document.querySelectorAll(".social-icon").forEach((icon) => {
    icon.className = `social-icon w-10 h-10 rounded-full ${theme.buttonBg} text-white flex items-center justify-center hover:${theme.buttonHover} transition`;
  });

  document.querySelectorAll(".contact-icon").forEach((icon) => {
    icon.className = `contact-icon flex items-start ${theme.iconColor}`;
  });
  document.getElementById(
    "footer-ice-cream"
  ).className = `flex items-center mb-4 ${theme.iconColor}`;

  document.getElementById(
    "newsletter-btn"
  ).className = `${theme.buttonBg} hover:${theme.buttonHover} px-4 py-2 rounded-r-lg transition`;
}

const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const randomDelay = Math.random() * 0.5;
    item.style.animation = `float 3s ease-in-out ${randomDelay}s infinite`;
  });
  item.addEventListener("mouseleave", () => {
    item.style.animation = "none";
  });
});
