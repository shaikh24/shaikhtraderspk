export const SITE = {
  name: "Shaikh Traders Private Limited",
  short: "Shaikh Traders",
  tagline: "Global Trade Solutions From Pakistan To The World",
  phone: "+92 300 0000000",
  whatsapp: "923000000000", // digits only, no + or spaces
  email: "info@shaikhtraders.com",
  address: "Karachi, Sindh, Pakistan",
  year: new Date().getFullYear(),
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/markets", label: "Export Markets" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;