/* @ds-bundle: {"format":3,"namespace":"BetterhomesDesignSystem_c80c90","components":[],"sourceHashes":{"ui_kits/betterhomes/app.jsx":"89a7b55103e5","ui_kits/betterhomes/components.jsx":"9d045195dc42","ui_kits/betterhomes/components.standalone.jsx":"495aab3e8cb3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BetterhomesDesignSystem_c80c90 = window.BetterhomesDesignSystem_c80c90 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/betterhomes/app.jsx
try { (() => {
// Betterhomes UI Kit — demo app composition
const {
  useState
} = React;
const LISTINGS = [{
  title: "Marina Gate Tower 2, 24F",
  area: "Dubai Marina",
  type: "Apartment",
  price: "AED 2.4M",
  priceDh: "د.إ 2,400,000",
  tag: "For sale",
  beds: 3,
  baths: 2,
  sqft: "1,840",
  imageGradient: "linear-gradient(135deg,#3a5d70,#1E3340 70%,#0F1115)"
}, {
  title: "Palm Jebel Ali · Beach Villa",
  area: "Palm Jebel Ali",
  type: "Villa · off-plan",
  price: "AED 8.9M",
  priceDh: "starting",
  tag: "Off-plan",
  beds: 6,
  baths: 7,
  sqft: "7,200",
  imageGradient: "linear-gradient(135deg,#d9b9a0,#8d6c54 60%,#3a2a1f)"
}, {
  title: "Burj Vista · 56F penthouse",
  area: "Downtown Dubai",
  type: "Penthouse",
  price: "AED 14.5M",
  priceDh: "د.إ 14,500,000",
  tag: "Hot",
  beds: 4,
  baths: 5,
  sqft: "5,180",
  imageGradient: "linear-gradient(135deg,#5a3b3b,#1E3340 70%,#0F1115)"
}];
function App() {
  const [activeNav, setActiveNav] = useState("Buy");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bh-white)",
      color: "var(--bh-slate-blue)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(MarketingHeader, {
    activeNav: activeNav,
    onNav: setActiveNav
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(FeaturedListingsStrip, {
    listings: LISTINGS
  }), /*#__PURE__*/React.createElement(AgentFeature, null), /*#__PURE__*/React.createElement(CategoryRail, null), /*#__PURE__*/React.createElement(DeckPreviewBand, null), /*#__PURE__*/React.createElement(MarketingFooter, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/betterhomes/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/betterhomes/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ============================================================
// Betterhomes UI Kit — components.jsx
// Source of truth: Figma "Betterhomes Design System.fig"
// All components consume CSS variables from ../../colors_and_type.css
// ============================================================
const {
  useState,
  useEffect
} = React;

// ----------- Brand Lockups -----------

// Real betterhomes wordmark as an SVG mask — recolors via currentColor.
function Wordmark({
  color = "var(--bh-slate-blue)",
  height = 24,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "betterhomes",
    style: {
      display: "inline-block",
      height,
      width: height * 449 / 69,
      backgroundColor: color,
      WebkitMask: 'url("../../assets/logos/betterhomes-wordmark.svg") left center / contain no-repeat',
      mask: 'url("../../assets/logos/betterhomes-wordmark.svg") left center / contain no-repeat',
      ...style
    }
  });
}
function Tagline({
  color = "var(--bh-slate-blue)",
  height = 14,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "Trust Better. Get Better",
    style: {
      display: "inline-block",
      height,
      width: height * 5231 / 367,
      backgroundColor: color,
      WebkitMask: 'url("../../assets/logos/tagline-trust-better.png") left center / contain no-repeat',
      mask: 'url("../../assets/logos/tagline-trust-better.png") left center / contain no-repeat',
      ...style
    }
  });
}

// Real bh monogram as a PNG mask — recolors via currentColor.
function Monogram({
  color = "var(--bh-slate-blue)",
  size = 32,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "bh",
    style: {
      display: "inline-block",
      width: size,
      height: size * 0.83,
      backgroundColor: color,
      WebkitMask: 'url("../../assets/logos/bh-monogram-slate.png") center / contain no-repeat',
      mask: 'url("../../assets/logos/bh-monogram-slate.png") center / contain no-repeat',
      ...style
    }
  });
}
function TaglineLockup({
  color = "var(--bh-slate-blue)",
  align = "center"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: align === "center" ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    color: color,
    height: 36
  }), /*#__PURE__*/React.createElement(Tagline, {
    color: color,
    height: 14
  }));
}

// EST · 1986 lockup. The brand's "established" mark — official SVG artwork.
function EstBadge({
  color = "var(--bh-slate-blue)",
  size = 14
}) {
  // size = cap height of the mark in px; SVG aspect ratio is 489 / 98 ≈ 4.99
  const w = size * (489 / 98);
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "EST 1986",
    style: {
      display: "inline-block",
      width: w,
      height: size,
      backgroundColor: color,
      WebkitMask: 'url("../../assets/logos/est-1986.svg") center / contain no-repeat',
      mask: 'url("../../assets/logos/est-1986.svg") center / contain no-repeat'
    }
  });
}

// ----------- Buttons -----------

function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  onClick,
  style = {},
  type = "button"
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 12
    },
    md: {
      padding: "12px 22px",
      fontSize: 14
    },
    lg: {
      padding: "16px 28px",
      fontSize: 16
    }
  };
  const variants = {
    primary: {
      background: "var(--bh-salmon)",
      color: "var(--bh-slate-blue)",
      border: "1px solid var(--bh-salmon)"
    },
    secondary: {
      background: "#fff",
      color: "var(--bh-slate-blue)",
      border: "1px solid var(--bh-slate-blue)"
    },
    accent: {
      background: "var(--bh-sand)",
      color: "var(--bh-slate-blue)",
      border: "1px solid var(--bh-sand)"
    },
    ghost: {
      background: "transparent",
      color: "var(--bh-slate-blue)",
      border: "none",
      padding: 0,
      borderBottom: "1px solid var(--bh-slate-blue)",
      borderRadius: 0
    },
    onDark: {
      background: "#fff",
      color: "var(--bh-slate-blue)",
      border: "1px solid #fff"
    },
    onDarkSecondary: {
      background: "transparent",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.5)"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    className: "bh-btn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      borderRadius: 999,
      cursor: "pointer",
      letterSpacing: "0.01em",
      transition: "transform 150ms ease, opacity 150ms ease, background-color 150ms ease",
      ...sizes[size],
      ...variants[variant],
      ...(variant === "ghost" ? {
        ...sizes[size],
        padding: 0
      } : {}),
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: `ph ph-${icon}`
  }), /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("i", {
    className: `ph ph-${iconRight}`
  }));
}

// ----------- Badges -----------

function Badge({
  children,
  variant = "solid",
  icon,
  dot = false
}) {
  const variants = {
    solid: {
      background: "var(--bh-slate-blue)",
      color: "#fff"
    },
    bone: {
      background: "var(--bh-bone)",
      color: "var(--bh-slate-blue)"
    },
    sand: {
      background: "var(--bh-sand)",
      color: "var(--bh-slate-blue)"
    },
    pink: {
      background: "var(--bh-pink)",
      color: "#fff"
    },
    green: {
      background: "var(--bh-green)",
      color: "#fff"
    },
    aero: {
      background: "var(--bh-aero)",
      color: "#fff"
    },
    outline: {
      background: "transparent",
      color: "var(--bh-slate-blue)",
      border: "1px solid var(--border-strong)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 10px",
      borderRadius: 999,
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.04em",
      ...variants[variant]
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "currentColor"
    }
  }), icon && /*#__PURE__*/React.createElement("i", {
    className: `ph ph-${icon}`
  }), /*#__PURE__*/React.createElement("span", null, children));
}

// ----------- Seals (the circular brand stamps) -----------

const SEAL_REGISTRY = {
  "sold-leased": {
    icon: "handshake",
    label: "Sold / Leased"
  },
  "review": {
    icon: "quotes",
    label: "Review"
  },
  "hot-properties": {
    icon: "flame",
    label: "Hot Property"
  },
  "training": {
    icon: "graduation-cap",
    label: "Training"
  },
  "superstar": {
    icon: "trophy",
    label: "Superstar"
  },
  "culture": {
    icon: "users-three",
    label: "Culture"
  },
  "pr": {
    icon: "megaphone",
    label: "PR"
  },
  "blogs": {
    icon: "article",
    label: "Blogs"
  },
  "new-listings": {
    icon: "buildings",
    label: "New Listings"
  },
  "milestone": {
    icon: "confetti",
    label: "Milestone"
  }
};
function Seal({
  kind = "sold-leased",
  size = 120,
  showLabel = false
}) {
  const cfg = SEAL_REGISTRY[kind] || SEAL_REGISTRY["sold-leased"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      background: "var(--bh-slate-blue)",
      borderRadius: 999,
      display: "grid",
      placeItems: "center",
      color: "var(--bh-sand)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph ph-${cfg.icon}`,
    style: {
      fontSize: size * 0.36
    }
  })), showLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.16em",
      color: "var(--bh-slate-blue)",
      textTransform: "uppercase"
    }
  }, cfg.label));
}

// ----------- Listing Card -----------

function ListingCard({
  title,
  area,
  type,
  price,
  priceDh,
  tag = "For sale",
  beds,
  baths,
  sqft,
  imageGradient = "linear-gradient(135deg,#3a5d70,#1E3340 70%,#0F1115)",
  saved: savedProp = false
}) {
  const [saved, setSaved] = useState(savedProp);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "var(--shadow-sm)",
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
      transition: "transform 200ms ease, box-shadow 200ms ease"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4/3",
      background: `linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(15,17,21,0.55) 100%), ${imageGradient}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14,
      background: "rgba(255,255,255,0.94)",
      color: "var(--bh-slate-blue)",
      borderRadius: 999,
      padding: "5px 12px",
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      fontFamily: "var(--font-sans)"
    }
  }, tag), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setSaved(!saved);
    },
    style: {
      position: "absolute",
      top: 14,
      right: 14,
      width: 34,
      height: 34,
      borderRadius: 999,
      border: "none",
      background: "rgba(255,255,255,0.94)",
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      color: saved ? "var(--bh-pink)" : "var(--bh-slate-blue)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph ${saved ? "ph-fill ph-heart" : "ph-heart"}`,
    style: {
      fontSize: 16
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 14,
      left: 14,
      right: 14,
      color: "#fff",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 30,
      letterSpacing: "-0.01em",
      lineHeight: 1
    }
  }, price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.85,
      marginTop: 4
    }
  }, priceDh)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.25,
      color: "var(--bh-slate-blue)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      color: "var(--fg-muted)",
      letterSpacing: "0.04em"
    }
  }, area, " \xB7 ", type), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 6,
      paddingTop: 12,
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement(ListingStat, {
    icon: "bed",
    value: `${beds} bed`
  }), /*#__PURE__*/React.createElement(ListingStat, {
    icon: "bathtub",
    value: `${baths} bath`
  }), /*#__PURE__*/React.createElement(ListingStat, {
    icon: "cube",
    value: `${sqft} sqft`
  }))));
}
function ListingStat({
  icon,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--bh-slate-blue)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph ph-${icon}`,
    style: {
      color: "var(--fg-muted)"
    }
  }), /*#__PURE__*/React.createElement("span", null, value));
}

// ----------- Agent Card -----------

function AgentCard({
  name,
  role,
  area,
  years,
  deals,
  portraitGradient = "linear-gradient(135deg,#d9b9a0,#8d6c54)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bh-bone)",
      borderRadius: 24,
      padding: 28,
      display: "flex",
      gap: 20,
      alignItems: "center",
      color: "var(--bh-slate-blue)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 112,
      height: 112,
      borderRadius: 999,
      background: portraitGradient,
      flexShrink: 0,
      boxShadow: "inset 0 -20px 40px rgba(0,0,0,0.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--fg-muted)"
    }
  }, role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 28,
      lineHeight: 1.1,
      letterSpacing: "-0.01em"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--fg-muted)",
      marginTop: 4
    }
  }, years, " at Betterhomes \xB7 ", deals, "+ closed deals \xB7 ", area)));
}

// ----------- Marketing Header / Nav -----------

function MarketingHeader({
  activeNav = "Buy",
  onNav
}) {
  const items = ["Buy", "Rent", "Off-plan", "Sell", "Manage", "Insights"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "18px 32px",
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    height: 20
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 32,
      flex: 1
    }
  }, items.map(item => {
    const active = item === activeNav;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      onClick: () => onNav?.(item),
      style: {
        border: "none",
        background: active ? "var(--bh-slate-blue)" : "transparent",
        color: active ? "#fff" : "var(--bh-slate-blue)",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 500,
        padding: "8px 16px",
        borderRadius: 999,
        cursor: "pointer",
        letterSpacing: "0.01em",
        transition: "background 150ms"
      }
    }, item);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      border: "none",
      background: "transparent",
      padding: 8,
      cursor: "pointer",
      color: "var(--bh-slate-blue)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-heart",
    style: {
      fontSize: 20
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "user-circle"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "List a property"))));
}

// ----------- Hero -----------

function Hero({
  onSearch
}) {
  const [q, setQ] = useState("Dubai Marina");
  const [dealType, setDealType] = useState("Buy");
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      backgroundImage: `
          linear-gradient(180deg, rgba(31,52,63,0.05) 0%, rgba(31,52,63,0.55) 65%, rgba(31,52,63,0.85) 100%),
          url("../../assets/imagery/dubai-rooftop-sunset.png")
        `,
      backgroundSize: "cover",
      backgroundPosition: "center 62%",
      color: "#fff",
      padding: "104px 32px 96px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.7)"
    }
  }, "Homegrown since 1986"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(48px, 7vw, 96px)",
      lineHeight: 1.05,
      margin: 0,
      color: "#fff",
      letterSpacing: "-0.015em",
      maxWidth: 900,
      textWrap: "balance"
    }
  }, "We know Dubai because we helped build it."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-epic)",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.85)",
      maxWidth: 620,
      margin: 0
    }
  }, "From a desk in Linda's dining room to 40,000 closed deals \u2014 Betterhomes has been Dubai's residential broker for forty years."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 999,
      padding: 8,
      display: "flex",
      alignItems: "center",
      gap: 6,
      width: "min(720px, 100%)",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      padding: 2,
      gap: 4,
      background: "var(--bh-paper)",
      borderRadius: 999
    }
  }, ["Buy", "Rent"].map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => setDealType(d),
    style: {
      border: "none",
      background: dealType === d ? "var(--bh-slate-blue)" : "transparent",
      color: dealType === d ? "#fff" : "var(--bh-slate-blue)",
      borderRadius: 999,
      padding: "8px 18px",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer"
    }
  }, d))), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-magnifying-glass",
    style: {
      color: "var(--fg-muted)",
      marginLeft: 8
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Area, building, or community",
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--bh-slate-blue)",
      background: "transparent",
      padding: "0 4px"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    icon: "arrow-right",
    onClick: () => onSearch?.(q, dealType)
  }, "Search")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      flexWrap: "wrap",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "rgba(255,255,255,0.6)"
    }
  }, ["Dubai Marina", "Palm Jumeirah", "Downtown", "Business Bay", "JBR", "DIFC"].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setQ(p),
    style: {
      border: "none",
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      fontSize: 12,
      letterSpacing: "0.04em"
    }
  }, p, " \u2197")))));
}

// ----------- Deck pages (Brand Deck Signature template) -----------
//
// All three layouts share the same chrome:
//   • Top: hero photo with optional slate-serif title overlay
//   • Bottom: Mist footer panel containing the betterhomes wordmark +
//     "Trust Better. Get Better" tagline (left), and EST 1986 badge (right)
//
// The variants only change what sits on the photo: a serif title + sub
// (Cover), a bold title alone (Subheading), or a split title + body column
// next to a cropped photo (Standard).

const BH_DECK_HERO = `url("../../assets/imagery/dubai-rooftop-sunset.png")`;
function DeckFooter() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      background: "var(--bh-mist)",
      padding: "2.4cqi 4cqi",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "2cqi"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.8cqi",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "betterhomes",
    style: {
      display: "block",
      width: "16cqi",
      height: "2.4cqi",
      backgroundColor: "var(--bh-slate-blue)",
      WebkitMask: 'url("../../assets/logos/betterhomes-wordmark.svg") left center / contain no-repeat',
      mask: 'url("../../assets/logos/betterhomes-wordmark.svg") left center / contain no-repeat'
    }
  }), /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "Trust Better. Get Better",
    style: {
      display: "block",
      width: "13cqi",
      height: "1.5cqi",
      backgroundColor: "var(--bh-slate-blue)",
      WebkitMask: 'url("../../assets/logos/tagline-trust-better.png") left center / contain no-repeat',
      mask: 'url("../../assets/logos/tagline-trust-better.png") left center / contain no-repeat'
    }
  })), /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "EST 1986",
    style: {
      display: "inline-block",
      width: "6.5cqi",
      aspectRatio: "489 / 98",
      backgroundColor: "var(--bh-slate-blue)",
      WebkitMask: 'url("../../assets/logos/est-1986.svg") center / contain no-repeat',
      mask: 'url("../../assets/logos/est-1986.svg") center / contain no-repeat'
    }
  }));
}

// Shared shell for any deck slide. Renders a photo top area + Mist footer.
function DeckSignatureShell({
  children,
  photo = BH_DECK_HERO,
  vignette = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "16/9",
      borderRadius: "clamp(8px, 2cqi, 24px)",
      overflow: "hidden",
      background: "var(--bh-mist)",
      boxShadow: "var(--shadow-md)",
      display: "flex",
      flexDirection: "column",
      containerType: "inline-size"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      backgroundImage: photo,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, vignette && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 35%, rgba(255,255,255,0) 60%)",
      pointerEvents: "none"
    }
  }), children), /*#__PURE__*/React.createElement(DeckFooter, null));
}
function DeckCover({
  title = "Header of the\nPresentation",
  sub = "Sub Header"
}) {
  return /*#__PURE__*/React.createElement(DeckSignatureShell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      padding: "6% 6% 0",
      color: "var(--bh-slate-blue)",
      display: "flex",
      flexDirection: "column",
      gap: "1.2cqi"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "6.4cqi",
      lineHeight: 1.05,
      margin: 0,
      letterSpacing: "-0.005em",
      color: "var(--bh-slate-blue)",
      maxWidth: "55%",
      whiteSpace: "pre-line"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "1.8cqi",
      color: "var(--bh-slate-blue)",
      marginTop: "0.6cqi"
    }
  }, sub)));
}
function DeckSubheading({
  title = "Q4 highlights."
}) {
  return /*#__PURE__*/React.createElement(DeckSignatureShell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "5%",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "9cqi",
      lineHeight: 1.05,
      color: "var(--bh-slate-blue)",
      textAlign: "center",
      letterSpacing: "-0.015em"
    }
  }, title)));
}
function DeckStandard({
  title = "A 40-year lens on Dubai property.",
  body
}) {
  const para = body || "Forty years on from when Linda opened the doors of her first office, the city is no longer a frontier — it's one of the world's most resilient housing markets, with year-on-year transaction growth in nearly every sub-community we cover.";
  return /*#__PURE__*/React.createElement(DeckSignatureShell, {
    vignette: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      zIndex: 1,
      padding: "4%",
      gap: "4%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 44%",
      background: "var(--bh-mist)",
      borderRadius: "clamp(4px, 1.2cqi, 12px)",
      padding: "4% 4.5%",
      display: "flex",
      flexDirection: "column",
      gap: "3%",
      justifyContent: "center",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "3.8cqi",
      lineHeight: 1.1,
      color: "var(--bh-slate-blue)",
      letterSpacing: "-0.005em"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-epic)",
      fontWeight: 400,
      fontSize: "1.7cqi",
      lineHeight: 1.5,
      color: "var(--bh-slate-blue)",
      opacity: 0.85
    }
  }, para)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  })));
}

// ----------- Footer -----------

function MarketingFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--bh-slate-blue)",
      color: "#fff",
      padding: "72px 32px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
      gap: 40,
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    color: "#fff",
    height: 28
  }), /*#__PURE__*/React.createElement(Tagline, {
    color: "rgba(255,255,255,0.85)",
    height: 12
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-epic)",
      fontSize: 15,
      fontWeight: 400,
      color: "rgba(255,255,255,0.7)",
      marginTop: 22,
      lineHeight: 1.55,
      maxWidth: 340
    }
  }, "It all began in Linda's home, from a small desk in the corner of her dining room. Forty years on, we're Dubai's residential broker."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 22
    }
  }, ["instagram-logo", "linkedin-logo", "whatsapp-logo", "youtube-logo", "tiktok-logo"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph ph-${s}`,
    style: {
      fontSize: 20
    }
  }))))), [{
    title: "Buy",
    items: ["Apartments", "Villas", "Townhouses", "Off-plan", "All listings"]
  }, {
    title: "Rent",
    items: ["Apartments", "Villas", "Short-term", "Commercial"]
  }, {
    title: "Services",
    items: ["Property management", "Mortgage advisory", "Conveyancing", "Concierge"]
  }, {
    title: "Company",
    items: ["About", "Agents", "Careers", "Press", "Contact"]
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--bh-sand)"
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginTop: 16
    }
  }, col.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 400,
      color: "rgba(255,255,255,0.85)",
      textDecoration: "none"
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(255,255,255,0.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 24,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "rgba(255,255,255,0.5)",
      letterSpacing: "0.04em"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 Betterhomes LLC \xB7 RERA #1234 \xB7 Dubai, UAE"), /*#__PURE__*/React.createElement(EstBadge, {
    color: "rgba(255,255,255,0.85)",
    size: 18
  }))));
}

// ----------- Section: featured listings strip -----------

function FeaturedListingsStrip({
  listings
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 32px 40px",
      background: "var(--bh-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bh-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Hot properties"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(32px,4vw,56px)",
      letterSpacing: "-0.01em",
      lineHeight: 1.1,
      color: "var(--bh-slate-blue)",
      margin: 0
    }
  }, "This week, on the Marina.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "md",
    iconRight: "arrow-right"
  }, "View all listings")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, listings.map((l, i) => /*#__PURE__*/React.createElement(ListingCard, _extends({
    key: i
  }, l))))));
}

// ----------- Section: agent feature -----------

function AgentFeature() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "40px 32px 80px",
      background: "var(--bh-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bh-eyebrow"
  }, "Meet our team"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(32px,4vw,56px)",
      lineHeight: 1.1,
      letterSpacing: "-0.01em",
      color: "var(--bh-slate-blue)",
      margin: 0
    }
  }, "Agents who know", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--bh-denim-blue)"
    }
  }, " their neighbourhood"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-epic)",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--fg-default)",
      maxWidth: 480,
      margin: 0
    }
  }, "Our agents specialise \u2014 by community, by building, by price band. They'll tell you when a property isn't right for you, and they'll show you four better ones the same afternoon."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "users-three"
  }, "Browse agents"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "chat-circle"
  }, "Talk to one now"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(AgentCard, {
    name: "Priya Sharma",
    role: "Senior agent",
    area: "Palm Jumeirah",
    years: "8 years",
    deals: "300",
    portraitGradient: "linear-gradient(135deg,#d9b9a0,#8d6c54)"
  }), /*#__PURE__*/React.createElement(AgentCard, {
    name: "Omar Al-Hashimi",
    role: "Director, off-plan",
    area: "Downtown & Business Bay",
    years: "11 years",
    deals: "450",
    portraitGradient: "linear-gradient(135deg,#a4b6c1,#3a5d70)"
  })))));
}

// ----------- Section: category seals -----------

function CategoryRail() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "60px 32px",
      background: "var(--bh-bone)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bh-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "The Betterhomes newsroom"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(28px,3.5vw,44px)",
      letterSpacing: "-0.01em",
      lineHeight: 1.1,
      color: "var(--bh-slate-blue)",
      margin: 0
    }
  }, "From the desk."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 18
    }
  }, ["sold-leased", "hot-properties", "review", "blogs", "training", "milestone"].map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    kind: k,
    size: 104,
    showLabel: true
  }))))));
}

// ----------- Section: deck preview band -----------

function DeckPreviewBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 32px",
      background: "var(--bh-paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bh-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "For clients"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(28px,3.5vw,44px)",
      letterSpacing: "-0.01em",
      lineHeight: 1.1,
      color: "var(--bh-slate-blue)",
      margin: 0
    }
  }, "Reports, slides, and quarterly briefings.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(DeckCover, null), /*#__PURE__*/React.createElement(DeckSubheading, {
    title: "Q4 highlights."
  }), /*#__PURE__*/React.createElement(DeckStandard, {
    title: "A 40-year lens on Dubai property."
  }))));
}

// expose everything
Object.assign(window, {
  Wordmark,
  Monogram,
  Tagline,
  TaglineLockup,
  EstBadge,
  Button,
  Badge,
  Seal,
  ListingCard,
  AgentCard,
  MarketingHeader,
  Hero,
  MarketingFooter,
  DeckCover,
  DeckSubheading,
  DeckStandard,
  FeaturedListingsStrip,
  AgentFeature,
  CategoryRail,
  DeckPreviewBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/betterhomes/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/betterhomes/components.standalone.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ============================================================
// Betterhomes UI Kit — components.jsx
// Source of truth: Figma "Betterhomes Design System.fig"
// All components consume CSS variables from ../../colors_and_type.css
// ============================================================
const {
  useState,
  useEffect
} = React;

// ----------- Brand Lockups -----------

// Real betterhomes wordmark as an SVG mask — recolors via currentColor.
function Wordmark({
  color = "var(--bh-slate-blue)",
  height = 24,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "betterhomes",
    style: {
      display: "inline-block",
      height,
      width: height * 449 / 69,
      backgroundColor: color,
      WebkitMask: `url("${window.__resources.wordmark}") left center / contain no-repeat`,
      mask: `url("${window.__resources.wordmark}") left center / contain no-repeat`,
      ...style
    }
  });
}
function Tagline({
  color = "var(--bh-slate-blue)",
  height = 14,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "Trust Better. Get Better",
    style: {
      display: "inline-block",
      height,
      width: height * 5231 / 367,
      backgroundColor: color,
      WebkitMask: `url("${window.__resources.tagline}") left center / contain no-repeat`,
      mask: `url("${window.__resources.tagline}") left center / contain no-repeat`,
      ...style
    }
  });
}

// Real bh monogram as a PNG mask — recolors via currentColor.
function Monogram({
  color = "var(--bh-slate-blue)",
  size = 32,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "bh",
    style: {
      display: "inline-block",
      width: size,
      height: size * 0.83,
      backgroundColor: color,
      WebkitMask: `url("${window.__resources.monogram}") center / contain no-repeat`,
      mask: `url("${window.__resources.monogram}") center / contain no-repeat`,
      ...style
    }
  });
}
function TaglineLockup({
  color = "var(--bh-slate-blue)",
  align = "center"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: align === "center" ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    color: color,
    height: 36
  }), /*#__PURE__*/React.createElement(Tagline, {
    color: color,
    height: 14
  }));
}

// EST · 1986 lockup. The brand's "established" mark — official SVG artwork.
function EstBadge({
  color = "var(--bh-slate-blue)",
  size = 14
}) {
  // size = cap height of the mark in px; SVG aspect ratio is 489 / 98 ≈ 4.99
  const w = size * (489 / 98);
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "EST 1986",
    style: {
      display: "inline-block",
      width: w,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("${window.__resources.est}") center / contain no-repeat`,
      mask: `url("${window.__resources.est}") center / contain no-repeat`
    }
  });
}

// ----------- Buttons -----------

function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  onClick,
  style = {},
  type = "button"
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 12
    },
    md: {
      padding: "12px 22px",
      fontSize: 14
    },
    lg: {
      padding: "16px 28px",
      fontSize: 16
    }
  };
  const variants = {
    primary: {
      background: "var(--bh-salmon)",
      color: "var(--bh-slate-blue)",
      border: "1px solid var(--bh-salmon)"
    },
    secondary: {
      background: "#fff",
      color: "var(--bh-slate-blue)",
      border: "1px solid var(--bh-slate-blue)"
    },
    accent: {
      background: "var(--bh-sand)",
      color: "var(--bh-slate-blue)",
      border: "1px solid var(--bh-sand)"
    },
    ghost: {
      background: "transparent",
      color: "var(--bh-slate-blue)",
      border: "none",
      padding: 0,
      borderBottom: "1px solid var(--bh-slate-blue)",
      borderRadius: 0
    },
    onDark: {
      background: "#fff",
      color: "var(--bh-slate-blue)",
      border: "1px solid #fff"
    },
    onDarkSecondary: {
      background: "transparent",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.5)"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    className: "bh-btn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      borderRadius: 999,
      cursor: "pointer",
      letterSpacing: "0.01em",
      transition: "transform 150ms ease, opacity 150ms ease, background-color 150ms ease",
      ...sizes[size],
      ...variants[variant],
      ...(variant === "ghost" ? {
        ...sizes[size],
        padding: 0
      } : {}),
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: `ph ph-${icon}`
  }), /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("i", {
    className: `ph ph-${iconRight}`
  }));
}

// ----------- Badges -----------

function Badge({
  children,
  variant = "solid",
  icon,
  dot = false
}) {
  const variants = {
    solid: {
      background: "var(--bh-slate-blue)",
      color: "#fff"
    },
    bone: {
      background: "var(--bh-bone)",
      color: "var(--bh-slate-blue)"
    },
    sand: {
      background: "var(--bh-sand)",
      color: "var(--bh-slate-blue)"
    },
    pink: {
      background: "var(--bh-pink)",
      color: "#fff"
    },
    green: {
      background: "var(--bh-green)",
      color: "#fff"
    },
    aero: {
      background: "var(--bh-aero)",
      color: "#fff"
    },
    outline: {
      background: "transparent",
      color: "var(--bh-slate-blue)",
      border: "1px solid var(--border-strong)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 10px",
      borderRadius: 999,
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.04em",
      ...variants[variant]
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "currentColor"
    }
  }), icon && /*#__PURE__*/React.createElement("i", {
    className: `ph ph-${icon}`
  }), /*#__PURE__*/React.createElement("span", null, children));
}

// ----------- Seals (the circular brand stamps) -----------

const SEAL_REGISTRY = {
  "sold-leased": {
    icon: "handshake",
    label: "Sold / Leased"
  },
  "review": {
    icon: "quotes",
    label: "Review"
  },
  "hot-properties": {
    icon: "flame",
    label: "Hot Property"
  },
  "training": {
    icon: "graduation-cap",
    label: "Training"
  },
  "superstar": {
    icon: "trophy",
    label: "Superstar"
  },
  "culture": {
    icon: "users-three",
    label: "Culture"
  },
  "pr": {
    icon: "megaphone",
    label: "PR"
  },
  "blogs": {
    icon: "article",
    label: "Blogs"
  },
  "new-listings": {
    icon: "buildings",
    label: "New Listings"
  },
  "milestone": {
    icon: "confetti",
    label: "Milestone"
  }
};
function Seal({
  kind = "sold-leased",
  size = 120,
  showLabel = false
}) {
  const cfg = SEAL_REGISTRY[kind] || SEAL_REGISTRY["sold-leased"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      background: "var(--bh-slate-blue)",
      borderRadius: 999,
      display: "grid",
      placeItems: "center",
      color: "var(--bh-sand)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph ph-${cfg.icon}`,
    style: {
      fontSize: size * 0.36
    }
  })), showLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.16em",
      color: "var(--bh-slate-blue)",
      textTransform: "uppercase"
    }
  }, cfg.label));
}

// ----------- Listing Card -----------

function ListingCard({
  title,
  area,
  type,
  price,
  priceDh,
  tag = "For sale",
  beds,
  baths,
  sqft,
  imageGradient = "linear-gradient(135deg,#3a5d70,#1E3340 70%,#0F1115)",
  saved: savedProp = false
}) {
  const [saved, setSaved] = useState(savedProp);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "var(--shadow-sm)",
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
      transition: "transform 200ms ease, box-shadow 200ms ease"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4/3",
      background: `linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(15,17,21,0.55) 100%), ${imageGradient}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14,
      background: "rgba(255,255,255,0.94)",
      color: "var(--bh-slate-blue)",
      borderRadius: 999,
      padding: "5px 12px",
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      fontFamily: "var(--font-sans)"
    }
  }, tag), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setSaved(!saved);
    },
    style: {
      position: "absolute",
      top: 14,
      right: 14,
      width: 34,
      height: 34,
      borderRadius: 999,
      border: "none",
      background: "rgba(255,255,255,0.94)",
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      color: saved ? "var(--bh-pink)" : "var(--bh-slate-blue)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph ${saved ? "ph-fill ph-heart" : "ph-heart"}`,
    style: {
      fontSize: 16
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 14,
      left: 14,
      right: 14,
      color: "#fff",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 30,
      letterSpacing: "-0.01em",
      lineHeight: 1
    }
  }, price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.85,
      marginTop: 4
    }
  }, priceDh)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.25,
      color: "var(--bh-slate-blue)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      color: "var(--fg-muted)",
      letterSpacing: "0.04em"
    }
  }, area, " \xB7 ", type), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 6,
      paddingTop: 12,
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement(ListingStat, {
    icon: "bed",
    value: `${beds} bed`
  }), /*#__PURE__*/React.createElement(ListingStat, {
    icon: "bathtub",
    value: `${baths} bath`
  }), /*#__PURE__*/React.createElement(ListingStat, {
    icon: "cube",
    value: `${sqft} sqft`
  }))));
}
function ListingStat({
  icon,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--bh-slate-blue)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph ph-${icon}`,
    style: {
      color: "var(--fg-muted)"
    }
  }), /*#__PURE__*/React.createElement("span", null, value));
}

// ----------- Agent Card -----------

function AgentCard({
  name,
  role,
  area,
  years,
  deals,
  portraitGradient = "linear-gradient(135deg,#d9b9a0,#8d6c54)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bh-bone)",
      borderRadius: 24,
      padding: 28,
      display: "flex",
      gap: 20,
      alignItems: "center",
      color: "var(--bh-slate-blue)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 112,
      height: 112,
      borderRadius: 999,
      background: portraitGradient,
      flexShrink: 0,
      boxShadow: "inset 0 -20px 40px rgba(0,0,0,0.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--fg-muted)"
    }
  }, role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 28,
      lineHeight: 1.1,
      letterSpacing: "-0.01em"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--fg-muted)",
      marginTop: 4
    }
  }, years, " at Betterhomes \xB7 ", deals, "+ closed deals \xB7 ", area)));
}

// ----------- Marketing Header / Nav -----------

function MarketingHeader({
  activeNav = "Buy",
  onNav
}) {
  const items = ["Buy", "Rent", "Off-plan", "Sell", "Manage", "Insights"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "18px 32px",
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    height: 20
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 32,
      flex: 1
    }
  }, items.map(item => {
    const active = item === activeNav;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      onClick: () => onNav?.(item),
      style: {
        border: "none",
        background: active ? "var(--bh-slate-blue)" : "transparent",
        color: active ? "#fff" : "var(--bh-slate-blue)",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 500,
        padding: "8px 16px",
        borderRadius: 999,
        cursor: "pointer",
        letterSpacing: "0.01em",
        transition: "background 150ms"
      }
    }, item);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      border: "none",
      background: "transparent",
      padding: 8,
      cursor: "pointer",
      color: "var(--bh-slate-blue)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-heart",
    style: {
      fontSize: 20
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "user-circle"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "List a property"))));
}

// ----------- Hero -----------

function Hero({
  onSearch
}) {
  const [q, setQ] = useState("Dubai Marina");
  const [dealType, setDealType] = useState("Buy");
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      backgroundImage: `
          linear-gradient(180deg, rgba(31,52,63,0.05) 0%, rgba(31,52,63,0.55) 65%, rgba(31,52,63,0.85) 100%),
          url("${window.__resources.heroPhoto}")
        `,
      backgroundSize: "cover",
      backgroundPosition: "center 62%",
      color: "#fff",
      padding: "104px 32px 96px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.7)"
    }
  }, "Homegrown since 1986"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(48px, 7vw, 96px)",
      lineHeight: 1.05,
      margin: 0,
      color: "#fff",
      letterSpacing: "-0.015em",
      maxWidth: 900,
      textWrap: "balance"
    }
  }, "We know Dubai because we helped build it."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-epic)",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.85)",
      maxWidth: 620,
      margin: 0
    }
  }, "From a desk in Linda's dining room to 40,000 closed deals \u2014 Betterhomes has been Dubai's residential broker for forty years."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 999,
      padding: 8,
      display: "flex",
      alignItems: "center",
      gap: 6,
      width: "min(720px, 100%)",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      padding: 2,
      gap: 4,
      background: "var(--bh-paper)",
      borderRadius: 999
    }
  }, ["Buy", "Rent"].map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => setDealType(d),
    style: {
      border: "none",
      background: dealType === d ? "var(--bh-slate-blue)" : "transparent",
      color: dealType === d ? "#fff" : "var(--bh-slate-blue)",
      borderRadius: 999,
      padding: "8px 18px",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer"
    }
  }, d))), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-magnifying-glass",
    style: {
      color: "var(--fg-muted)",
      marginLeft: 8
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Area, building, or community",
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--bh-slate-blue)",
      background: "transparent",
      padding: "0 4px"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    icon: "arrow-right",
    onClick: () => onSearch?.(q, dealType)
  }, "Search")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      flexWrap: "wrap",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "rgba(255,255,255,0.6)"
    }
  }, ["Dubai Marina", "Palm Jumeirah", "Downtown", "Business Bay", "JBR", "DIFC"].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setQ(p),
    style: {
      border: "none",
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      fontSize: 12,
      letterSpacing: "0.04em"
    }
  }, p, " \u2197")))));
}

// ----------- Deck pages (Brand Deck Signature template) -----------
//
// All three layouts share the same chrome:
//   • Top: hero photo with optional slate-serif title overlay
//   • Bottom: Mist footer panel containing the betterhomes wordmark +
//     "Trust Better. Get Better" tagline (left), and EST 1986 badge (right)
//
// The variants only change what sits on the photo: a serif title + sub
// (Cover), a bold title alone (Subheading), or a split title + body column
// next to a cropped photo (Standard).

const BH_DECK_HERO = `url("${window.__resources.heroPhoto}")`;
function DeckFooter() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      background: "var(--bh-mist)",
      padding: "2.4cqi 4cqi",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "2cqi"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.8cqi",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "betterhomes",
    style: {
      display: "block",
      width: "16cqi",
      height: "2.4cqi",
      backgroundColor: "var(--bh-slate-blue)",
      WebkitMask: `url("${window.__resources.wordmark}") left center / contain no-repeat`,
      mask: `url("${window.__resources.wordmark}") left center / contain no-repeat`
    }
  }), /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "Trust Better. Get Better",
    style: {
      display: "block",
      width: "13cqi",
      height: "1.5cqi",
      backgroundColor: "var(--bh-slate-blue)",
      WebkitMask: `url("${window.__resources.tagline}") left center / contain no-repeat`,
      mask: `url("${window.__resources.tagline}") left center / contain no-repeat`
    }
  })), /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "EST 1986",
    style: {
      display: "inline-block",
      width: "6.5cqi",
      aspectRatio: "489 / 98",
      backgroundColor: "var(--bh-slate-blue)",
      WebkitMask: `url("${window.__resources.est}") center / contain no-repeat`,
      mask: `url("${window.__resources.est}") center / contain no-repeat`
    }
  }));
}

// Shared shell for any deck slide. Renders a photo top area + Mist footer.
function DeckSignatureShell({
  children,
  photo = BH_DECK_HERO,
  vignette = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "16/9",
      borderRadius: "clamp(8px, 2cqi, 24px)",
      overflow: "hidden",
      background: "var(--bh-mist)",
      boxShadow: "var(--shadow-md)",
      display: "flex",
      flexDirection: "column",
      containerType: "inline-size"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      backgroundImage: photo,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, vignette && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 35%, rgba(255,255,255,0) 60%)",
      pointerEvents: "none"
    }
  }), children), /*#__PURE__*/React.createElement(DeckFooter, null));
}
function DeckCover({
  title = "Header of the\nPresentation",
  sub = "Sub Header"
}) {
  return /*#__PURE__*/React.createElement(DeckSignatureShell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      padding: "6% 6% 0",
      color: "var(--bh-slate-blue)",
      display: "flex",
      flexDirection: "column",
      gap: "1.2cqi"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "6.4cqi",
      lineHeight: 1.05,
      margin: 0,
      letterSpacing: "-0.005em",
      color: "var(--bh-slate-blue)",
      maxWidth: "55%",
      whiteSpace: "pre-line"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "1.8cqi",
      color: "var(--bh-slate-blue)",
      marginTop: "0.6cqi"
    }
  }, sub)));
}
function DeckSubheading({
  title = "Q4 highlights."
}) {
  return /*#__PURE__*/React.createElement(DeckSignatureShell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "5%",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "9cqi",
      lineHeight: 1.05,
      color: "var(--bh-slate-blue)",
      textAlign: "center",
      letterSpacing: "-0.015em"
    }
  }, title)));
}
function DeckStandard({
  title = "A 40-year lens on Dubai property.",
  body
}) {
  const para = body || "Forty years on from when Linda opened the doors of her first office, the city is no longer a frontier — it's one of the world's most resilient housing markets, with year-on-year transaction growth in nearly every sub-community we cover.";
  return /*#__PURE__*/React.createElement(DeckSignatureShell, {
    vignette: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      zIndex: 1,
      padding: "4%",
      gap: "4%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 44%",
      background: "var(--bh-mist)",
      borderRadius: "clamp(4px, 1.2cqi, 12px)",
      padding: "4% 4.5%",
      display: "flex",
      flexDirection: "column",
      gap: "3%",
      justifyContent: "center",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "3.8cqi",
      lineHeight: 1.1,
      color: "var(--bh-slate-blue)",
      letterSpacing: "-0.005em"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-epic)",
      fontWeight: 400,
      fontSize: "1.7cqi",
      lineHeight: 1.5,
      color: "var(--bh-slate-blue)",
      opacity: 0.85
    }
  }, para)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  })));
}

// ----------- Footer -----------

function MarketingFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--bh-slate-blue)",
      color: "#fff",
      padding: "72px 32px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
      gap: 40,
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    color: "#fff",
    height: 28
  }), /*#__PURE__*/React.createElement(Tagline, {
    color: "rgba(255,255,255,0.85)",
    height: 12
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-epic)",
      fontSize: 15,
      fontWeight: 400,
      color: "rgba(255,255,255,0.7)",
      marginTop: 22,
      lineHeight: 1.55,
      maxWidth: 340
    }
  }, "It all began in Linda's home, from a small desk in the corner of her dining room. Forty years on, we're Dubai's residential broker."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 22
    }
  }, ["instagram-logo", "linkedin-logo", "whatsapp-logo", "youtube-logo", "tiktok-logo"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph ph-${s}`,
    style: {
      fontSize: 20
    }
  }))))), [{
    title: "Buy",
    items: ["Apartments", "Villas", "Townhouses", "Off-plan", "All listings"]
  }, {
    title: "Rent",
    items: ["Apartments", "Villas", "Short-term", "Commercial"]
  }, {
    title: "Services",
    items: ["Property management", "Mortgage advisory", "Conveyancing", "Concierge"]
  }, {
    title: "Company",
    items: ["About", "Agents", "Careers", "Press", "Contact"]
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--bh-sand)"
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginTop: 16
    }
  }, col.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 400,
      color: "rgba(255,255,255,0.85)",
      textDecoration: "none"
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(255,255,255,0.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 24,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "rgba(255,255,255,0.5)",
      letterSpacing: "0.04em"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 Betterhomes LLC \xB7 RERA #1234 \xB7 Dubai, UAE"), /*#__PURE__*/React.createElement(EstBadge, {
    color: "rgba(255,255,255,0.85)",
    size: 18
  }))));
}

// ----------- Section: featured listings strip -----------

function FeaturedListingsStrip({
  listings
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 32px 40px",
      background: "var(--bh-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bh-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Hot properties"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(32px,4vw,56px)",
      letterSpacing: "-0.01em",
      lineHeight: 1.1,
      color: "var(--bh-slate-blue)",
      margin: 0
    }
  }, "This week, on the Marina.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "md",
    iconRight: "arrow-right"
  }, "View all listings")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, listings.map((l, i) => /*#__PURE__*/React.createElement(ListingCard, _extends({
    key: i
  }, l))))));
}

// ----------- Section: agent feature -----------

function AgentFeature() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "40px 32px 80px",
      background: "var(--bh-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bh-eyebrow"
  }, "Meet our team"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(32px,4vw,56px)",
      lineHeight: 1.1,
      letterSpacing: "-0.01em",
      color: "var(--bh-slate-blue)",
      margin: 0
    }
  }, "Agents who know", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--bh-denim-blue)"
    }
  }, " their neighbourhood"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-epic)",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--fg-default)",
      maxWidth: 480,
      margin: 0
    }
  }, "Our agents specialise \u2014 by community, by building, by price band. They'll tell you when a property isn't right for you, and they'll show you four better ones the same afternoon."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "users-three"
  }, "Browse agents"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "chat-circle"
  }, "Talk to one now"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(AgentCard, {
    name: "Priya Sharma",
    role: "Senior agent",
    area: "Palm Jumeirah",
    years: "8 years",
    deals: "300",
    portraitGradient: "linear-gradient(135deg,#d9b9a0,#8d6c54)"
  }), /*#__PURE__*/React.createElement(AgentCard, {
    name: "Omar Al-Hashimi",
    role: "Director, off-plan",
    area: "Downtown & Business Bay",
    years: "11 years",
    deals: "450",
    portraitGradient: "linear-gradient(135deg,#a4b6c1,#3a5d70)"
  })))));
}

// ----------- Section: category seals -----------

function CategoryRail() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "60px 32px",
      background: "var(--bh-bone)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bh-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "The Betterhomes newsroom"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(28px,3.5vw,44px)",
      letterSpacing: "-0.01em",
      lineHeight: 1.1,
      color: "var(--bh-slate-blue)",
      margin: 0
    }
  }, "From the desk."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 18
    }
  }, ["sold-leased", "hot-properties", "review", "blogs", "training", "milestone"].map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    kind: k,
    size: 104,
    showLabel: true
  }))))));
}

// ----------- Section: deck preview band -----------

function DeckPreviewBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 32px",
      background: "var(--bh-paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bh-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "For clients"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(28px,3.5vw,44px)",
      letterSpacing: "-0.01em",
      lineHeight: 1.1,
      color: "var(--bh-slate-blue)",
      margin: 0
    }
  }, "Reports, slides, and quarterly briefings.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(DeckCover, null), /*#__PURE__*/React.createElement(DeckSubheading, {
    title: "Q4 highlights."
  }), /*#__PURE__*/React.createElement(DeckStandard, {
    title: "A 40-year lens on Dubai property."
  }))));
}

// expose everything
Object.assign(window, {
  Wordmark,
  Monogram,
  Tagline,
  TaglineLockup,
  EstBadge,
  Button,
  Badge,
  Seal,
  ListingCard,
  AgentCard,
  MarketingHeader,
  Hero,
  MarketingFooter,
  DeckCover,
  DeckSubheading,
  DeckStandard,
  FeaturedListingsStrip,
  AgentFeature,
  CategoryRail,
  DeckPreviewBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/betterhomes/components.standalone.jsx", error: String((e && e.message) || e) }); }

})();
