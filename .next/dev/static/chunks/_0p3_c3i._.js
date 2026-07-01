(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/paths.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withBasePath",
    ()=>withBasePath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") ?? "";
function withBasePath(path) {
    if (!path.startsWith("/") || path.startsWith("//")) {
        return path;
    }
    return `${basePath}${path}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/config/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navItems",
    ()=>navItems,
    "siteConfig",
    ()=>siteConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/paths.ts [app-client] (ecmascript)");
;
const siteConfig = {
    name: "Mayza Ester",
    role: "Engenheira de Software & Front-end Developer",
    description: "Desenvolvo interfaces que aproximam pessoas, ideias e produtos.",
    email: "contatomayzaester@gmail.com",
    // Substitua pelos dados reais.
    phoneLabel: "ADICIONAR TELEFONE",
    whatsappUrl: "#adicionar-whatsapp",
    linkedinUrl: "#adicionar-linkedin",
    githubUrl: "#adicionar-github",
    cvUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withBasePath"])("/cv/ADICIONAR-CV-AQUI.pdf")
};
const navItems = [
    {
        label: "Sobre",
        href: "#sobre"
    },
    {
        label: "Trajetória",
        href: "#trajetoria"
    },
    {
        label: "Skills",
        href: "#skills"
    },
    {
        label: "Projetos",
        href: "#projetos"
    },
    {
        label: "Contato",
        href: "#contato"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Header() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const onScroll = {
                "Header.useEffect.onScroll": ()=>setScrolled(window.scrollY > 24)
            }["Header.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `site-header ${scrolled ? "site-header--scrolled" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "site-logo",
                href: "#inicio",
                "aria-label": "Voltar ao início",
                children: [
                    "Mayza",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "✦"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 20,
                        columnNumber: 14
                    }, this),
                    "Ester"
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "menu-button",
                type: "button",
                "aria-expanded": open,
                "aria-controls": "main-navigation",
                onClick: ()=>setOpen((current)=>!current),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: open ? "Fechar" : "Menu"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "menu-button__icon",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                id: "main-navigation",
                className: `main-navigation ${open ? "main-navigation--open" : ""}`,
                "aria-label": "Navegação principal",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.href,
                            onClick: ()=>setOpen(false),
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "nav-cta",
                        href: "#contato",
                        onClick: ()=>setOpen(false),
                        children: "Vamos conversar"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Header.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Header, "jPnA7EYNjCLn3fxFn1srHOcQMBA=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/DecorativeStar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecorativeStar",
    ()=>DecorativeStar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/paths.ts [app-client] (ecmascript)");
;
;
;
function DecorativeStar({ variant = "burst", className = "", size = 120, ...props }) {
    const src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withBasePath"])(variant === "burst" ? "/decorations/star-burst.png" : "/decorations/sparkles.png");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: className,
        src: src,
        width: size,
        height: size,
        alt: "",
        "aria-hidden": "true",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/DecorativeStar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = DecorativeStar;
var _c;
__turbopack_context__.k.register(_c, "DecorativeStar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/PhotoPlaceholder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotoPlaceholder",
    ()=>PhotoPlaceholder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function PhotoPlaceholder({ label = "ADICIONAR FOTO DA MAYZA", className = "", orientation = "portrait" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `photo-placeholder photo-placeholder--${orientation} ${className}`,
        role: "img",
        "aria-label": label,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "photo-placeholder__cross",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/ui/PhotoPlaceholder.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "photo-placeholder__label",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui/PhotoPlaceholder.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "photo-placeholder__hint",
                children: "public/images/"
            }, void 0, false, {
                fileName: "[project]/components/ui/PhotoPlaceholder.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/PhotoPlaceholder.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = PhotoPlaceholder;
var _c;
__turbopack_context__.k.register(_c, "PhotoPlaceholder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/gsap.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
"use client";
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Hero.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Hero-module__KTD73a__actions",
  "composition": "Hero-module__KTD73a__composition",
  "decorativeStar": "Hero-module__KTD73a__decorativeStar",
  "displayTitle": "Hero-module__KTD73a__displayTitle",
  "edition": "Hero-module__KTD73a__edition",
  "expertise": "Hero-module__KTD73a__expertise",
  "expertiseIntro": "Hero-module__KTD73a__expertiseIntro",
  "eyebrow": "Hero-module__KTD73a__eyebrow",
  "floatingTag": "Hero-module__KTD73a__floatingTag",
  "footer": "Hero-module__KTD73a__footer",
  "hero": "Hero-module__KTD73a__hero",
  "identity": "Hero-module__KTD73a__identity",
  "microIndex": "Hero-module__KTD73a__microIndex",
  "orbitInner": "Hero-module__KTD73a__orbitInner",
  "orbitOuter": "Hero-module__KTD73a__orbitOuter",
  "pagination": "Hero-module__KTD73a__pagination",
  "portrait": "Hero-module__KTD73a__portrait",
  "portraitGlow": "Hero-module__KTD73a__portraitGlow",
  "portraitImage": "Hero-module__KTD73a__portraitImage",
  "portraitPlaceholder": "Hero-module__KTD73a__portraitPlaceholder",
  "portraitStage": "Hero-module__KTD73a__portraitStage",
  "portraitZone": "Hero-module__KTD73a__portraitZone",
  "scrollLink": "Hero-module__KTD73a__scrollLink",
  "starBurst": "Hero-module__KTD73a__starBurst",
  "starSparkles": "Hero-module__KTD73a__starSparkles",
  "tagShell": "Hero-module__KTD73a__tagShell",
  "tagShellBottom": "Hero-module__KTD73a__tagShellBottom",
  "tagShellTop": "Hero-module__KTD73a__tagShellTop",
  "titleAccent": "Hero-module__KTD73a__titleAccent",
  "titleMask": "Hero-module__KTD73a__titleMask",
  "titleMaskAccent": "Hero-module__KTD73a__titleMaskAccent",
  "titlePrimary": "Hero-module__KTD73a__titlePrimary",
  "topline": "Hero-module__KTD73a__topline",
  "verticalLabel": "Hero-module__KTD73a__verticalLabel",
});
}),
"[project]/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$DecorativeStar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/DecorativeStar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PhotoPlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/PhotoPlaceholder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/paths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/sections/Hero.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
/*
 * Quando sua foto estiver pronta:
 * 1. Salve o arquivo em public/images/mayza-hero.png
 * 2. Troque a string vazia abaixo por "/images/mayza-hero.png"
 *
 * Dê preferência a uma imagem PNG ou WebP com fundo transparente.
 */ const HERO_IMAGE = "/images/mayza-3-V2.png";
function Hero() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Hero.useGSAP": ()=>{
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].matchMedia();
            mm.add("(prefers-reduced-motion: no-preference)", {
                "Hero.useGSAP": ()=>{
                    const introTimeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].timeline({
                        paused: true,
                        defaults: {
                            ease: "power3.out"
                        }
                    });
                    introTimeline.from("[data-hero=topline]", {
                        y: 18,
                        opacity: 0,
                        duration: 0.6
                    }).from("[data-hero-line]", {
                        yPercent: 115,
                        rotate: 2,
                        duration: 1.05,
                        stagger: 0.1
                    }, "-=0.28").from("[data-hero=visual]", {
                        y: 52,
                        scale: 0.94,
                        opacity: 0,
                        duration: 1
                    }, "-=0.72").from("[data-hero=copy]", {
                        y: 24,
                        opacity: 0,
                        duration: 0.72,
                        stagger: 0.12
                    }, "-=0.58").from("[data-hero=decor]", {
                        scale: 0,
                        rotate: -24,
                        opacity: 0,
                        duration: 0.65,
                        stagger: 0.08
                    }, "-=0.54").from("[data-hero=footer] > *", {
                        y: 16,
                        opacity: 0,
                        duration: 0.55,
                        stagger: 0.08
                    }, "-=0.42");
                    const startHeroAnimation = {
                        "Hero.useGSAP.startHeroAnimation": ()=>{
                            introTimeline.play(0);
                        }
                    }["Hero.useGSAP.startHeroAnimation"];
                    const loaderAlreadyFinished = document.documentElement.dataset.portfolioReady === "true";
                    if (loaderAlreadyFinished) {
                        startHeroAnimation();
                    } else {
                        window.addEventListener("portfolio:ready", startHeroAnimation, {
                            once: true
                        });
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to("[data-hero-float]", {
                        y: -9,
                        rotate: 1.5,
                        duration: 2.8,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });
                    return ({
                        "Hero.useGSAP": ()=>{
                            window.removeEventListener("portfolio:ready", startHeroAnimation);
                        }
                    })["Hero.useGSAP"];
                }
            }["Hero.useGSAP"]);
            mm.add("(pointer: fine) and (prefers-reduced-motion: no-preference)", {
                "Hero.useGSAP": ()=>{
                    const section = root.current;
                    const stage = section?.querySelector("[data-tilt-stage]");
                    const layers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray("[data-depth]", section ?? undefined);
                    if (!section || !stage) {
                        return;
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].set(stage, {
                        transformPerspective: 1200,
                        transformOrigin: "50% 50%"
                    });
                    const rotateXTo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(stage, "rotationX", {
                        duration: 0.65,
                        ease: "power3.out"
                    });
                    const rotateYTo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(stage, "rotationY", {
                        duration: 0.65,
                        ease: "power3.out"
                    });
                    const layerMotion = layers.map({
                        "Hero.useGSAP.layerMotion": (layer)=>{
                            const depth = Number(layer.dataset.depth ?? 1);
                            return {
                                xTo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(layer, "x", {
                                    duration: 0.7,
                                    ease: "power3.out"
                                }),
                                yTo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(layer, "y", {
                                    duration: 0.7,
                                    ease: "power3.out"
                                }),
                                depth
                            };
                        }
                    }["Hero.useGSAP.layerMotion"]);
                    const handlePointerMove = {
                        "Hero.useGSAP.handlePointerMove": (event)=>{
                            const bounds = section.getBoundingClientRect();
                            const normalizedX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
                            const normalizedY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
                            rotateYTo(normalizedX * 7);
                            rotateXTo(normalizedY * -6);
                            layerMotion.forEach({
                                "Hero.useGSAP.handlePointerMove": ({ xTo, yTo, depth })=>{
                                    xTo(normalizedX * 11 * depth);
                                    yTo(normalizedY * 9 * depth);
                                }
                            }["Hero.useGSAP.handlePointerMove"]);
                        }
                    }["Hero.useGSAP.handlePointerMove"];
                    const resetTilt = {
                        "Hero.useGSAP.resetTilt": ()=>{
                            rotateXTo(0);
                            rotateYTo(0);
                            layerMotion.forEach({
                                "Hero.useGSAP.resetTilt": ({ xTo, yTo })=>{
                                    xTo(0);
                                    yTo(0);
                                }
                            }["Hero.useGSAP.resetTilt"]);
                        }
                    }["Hero.useGSAP.resetTilt"];
                    section.addEventListener("pointermove", handlePointerMove);
                    section.addEventListener("pointerleave", resetTilt);
                    return ({
                        "Hero.useGSAP": ()=>{
                            section.removeEventListener("pointermove", handlePointerMove);
                            section.removeEventListener("pointerleave", resetTilt);
                        }
                    })["Hero.useGSAP"];
                }
            }["Hero.useGSAP"]);
            return ({
                "Hero.useGSAP": ()=>mm.revert()
            })["Hero.useGSAP"];
        }
    }["Hero.useGSAP"], {
        scope: root
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: root,
        id: "inicio",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].displayTitle,
                "aria-label": "Portfólio front-end de Mayza Ester",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleMask,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titlePrimary,
                            "data-hero-line": true,
                            children: "Front-end"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleMask} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleMaskAccent}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleAccent,
                            "data-hero-line": true,
                            children: "Portfolio"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].composition,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].identity,
                        "data-hero": "copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Mayza Ester"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Desenvolvo interfaces responsivas que aproximam pessoas, ideias e produtos com clareza, cuidado e personalidade."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollLink,
                                href: "#sobre",
                                "aria-label": "Ir para a seção sobre mim",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Explorar"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        "aria-hidden": "true",
                                        children: "↘"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portraitZone,
                        "data-hero": "visual",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portraitStage,
                            "data-tilt-stage": true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orbitOuter,
                                    "data-depth": "0.25",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orbitInner,
                                    "data-depth": "0.4",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portraitGlow,
                                    "data-depth": "0.55",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portraitShadow,
                                    "data-depth": "0.75",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portrait,
                                    "data-depth": "1.05",
                                    children: ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portraitImage,
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withBasePath"])(HERO_IMAGE),
                                        alt: "Mayza Ester",
                                        fill: true,
                                        priority: true,
                                        sizes: "(max-width: 720px) 82vw, (max-width: 1023px) 520px, 430px",
                                        draggable: false
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 280,
                                        columnNumber: 17
                                    }, this) : "TURBOPACK unreachable"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagShell} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagShellTop}`,
                                    "data-depth": "1.35",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floatingTag,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Hero.tsx",
                                                lineNumber: 302,
                                                columnNumber: 17
                                            }, this),
                                            "Interfaces com intenção"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagShell} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagShellBottom}`,
                                    "data-depth": "1.55",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floatingTag,
                                        "data-hero-float": true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Hero.tsx",
                                                lineNumber: 312,
                                                columnNumber: 17
                                            }, this),
                                            "Código + design"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$DecorativeStar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorativeStar"], {
                                    variant: "burst",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decorativeStar} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].starBurst}`,
                                    size: 120,
                                    "data-depth": "1.25",
                                    "data-hero": "decor"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$DecorativeStar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorativeStar"], {
                                    variant: "sparkles",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decorativeStar} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].starSparkles}`,
                                    size: 72,
                                    "data-depth": "1.5",
                                    "data-hero": "decor"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].expertise,
                        "data-hero": "copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].expertiseIntro,
                                children: "Transformo conceitos em experiências digitais funcionais, acessíveis e visualmente cuidadosas."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                "aria-label": "Especialidades",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "UI / Front-end"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 342,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Landing pages"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Next.js & TypeScript"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "WordPress & Elementor"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                "data-hero": "footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "button button--dark",
                            href: "#projetos",
                            children: [
                                "Ver projetos ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    children: "↘"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 353,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 352,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "button button--ghost",
                            href: "#contato",
                            children: [
                                "Falar comigo ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    children: "✦"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 357,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 356,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Hero.tsx",
                    lineNumber: 351,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Hero.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s(Hero, "zB1iyNZzwhay0S5kVAi3Ku2nFuE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/timeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timelineItems",
    ()=>timelineItems
]);
const timelineItems = [
    {
        year: "2019",
        kicker: "Formação",
        title: "Conclusão do ensino médio",
        description: "Concluí o ensino médio e comecei a buscar uma área que combinasse raciocínio, criatividade e a possibilidade de construir soluções."
    },
    {
        year: "2021",
        kicker: "Primeiros caminhos",
        title: "Da Física à programação",
        description: "Ingressei no bacharelado em Física na UFMG. Durante o curso, tive meu primeiro contato com programação por meio de uma disciplina e percebi que era nesse universo que eu queria construir minha carreira."
    },
    {
        year: "2022 — 2026",
        kicker: "Formação técnica",
        title: "Engenharia de Software",
        description: "Redirecionei minha trajetória e iniciei Engenharia de Software no Unileste com bolsa integral pelo ProUni, construindo uma base sólida em lógica, arquitetura, desenvolvimento e produtos digitais."
    },
    {
        year: "2022 — 2023",
        kicker: "Primeira experiência",
        title: "Suporte na Automatec",
        description: "Conquistei minha primeira experiência profissional em tecnologia, atuando por seis meses com suporte. Em 2023, encerrei esse ciclo para me dedicar ao desenvolvimento como programadora."
    },
    {
        year: "2025 — 2026",
        kicker: "Experiência prática",
        title: "Front-end na Tunni",
        description: "Atuei durante um ano como estagiária em desenvolvimento front-end, transformando layouts em interfaces funcionais, responsivas e alinhadas às necessidades de cada projeto."
    },
    {
        year: "Agora",
        kicker: "Próximo capítulo",
        title: "Construindo o que vem a seguir",
        description: "Continuo aprofundando meus conhecimentos e trabalhando em projetos reais. Estou aberta a oportunidades em front-end, novos desafios profissionais e projetos freelancer."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/SectionHeading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionHeading({ eyebrow, title, description, light = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "section-heading",
        children: [
            eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `eyebrow ${light ? "eyebrow--light" : ""}`,
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/components/ui/SectionHeading.tsx",
                lineNumber: 16,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: `section-title ${light ? "section-title--light" : ""}`,
                children: title
            }, void 0, false, {
                fileName: "[project]/components/ui/SectionHeading.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `section-description ${light ? "section-description--light" : ""}`,
                children: description
            }, void 0, false, {
                fileName: "[project]/components/ui/SectionHeading.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/SectionHeading.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = SectionHeading;
var _c;
__turbopack_context__.k.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Timeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeline",
    ()=>Timeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Timeline() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Timeline.useGSAP": ()=>{
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].matchMedia();
            mm.add({
                desktop: "(min-width: 1024px)",
                mobile: "(max-width: 1023px)",
                reduceMotion: "(prefers-reduced-motion: reduce)"
            }, {
                "Timeline.useGSAP": (context)=>{
                    const { desktop, mobile, reduceMotion } = context.conditions;
                    if (reduceMotion) {
                        return;
                    }
                    const cards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(".timeline-card");
                    const dots = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(".timeline-index__dot");
                    const bookTimeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].timeline({
                        scrollTrigger: {
                            trigger: ".timeline__intro",
                            start: "top 76%",
                            once: true
                        }
                    });
                    bookTimeline.from(".timeline__book", {
                        y: 55,
                        rotate: 2,
                        opacity: 0,
                        duration: 0.9,
                        ease: "power3.out"
                    }).from(".timeline__book-cover", {
                        y: 25,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power3.out"
                    }, "-=0.7").from(".timeline__book-page--left", {
                        rotationY: 55,
                        x: 45,
                        opacity: 0,
                        duration: 0.9,
                        ease: "power4.out"
                    }, "-=0.55").from(".timeline__book-page--right", {
                        rotationY: -55,
                        x: -45,
                        opacity: 0,
                        duration: 0.9,
                        ease: "power4.out"
                    }, "-=0.82").from(".timeline__book-page > *", {
                        y: 12,
                        opacity: 0,
                        duration: 0.4,
                        stagger: 0.035,
                        ease: "power2.out"
                    }, "-=0.45");
                    if (desktop) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].set(cards, {
                            autoAlpha: 0,
                            y: 48,
                            rotate: 1.2
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].set(cards[0], {
                            autoAlpha: 1,
                            y: 0,
                            rotate: 0
                        });
                        dots[0]?.classList.add("is-active");
                        const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].timeline({
                            scrollTrigger: {
                                trigger: ".timeline__stage",
                                start: "top top+=80",
                                end: `+=${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelineItems"].length * 580}`,
                                scrub: 0.8,
                                pin: true,
                                anticipatePin: 1
                            }
                        });
                        timeline.to(".timeline-progress__fill", {
                            scaleY: 1,
                            ease: "none",
                            duration: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelineItems"].length
                        }, 0);
                        cards.forEach({
                            "Timeline.useGSAP": (card, index)=>{
                                if (index === 0) {
                                    return;
                                }
                                const previous = cards[index - 1];
                                timeline.to(previous, {
                                    autoAlpha: 0,
                                    y: -42,
                                    rotate: -1.2,
                                    duration: 0.45
                                }, index - 0.25).fromTo(card, {
                                    autoAlpha: 0,
                                    y: 54,
                                    rotate: 1.4
                                }, {
                                    autoAlpha: 1,
                                    y: 0,
                                    rotate: 0,
                                    duration: 0.55,
                                    onStart: {
                                        "Timeline.useGSAP": ()=>{
                                            dots.forEach({
                                                "Timeline.useGSAP": (dot)=>dot.classList.remove("is-active")
                                            }["Timeline.useGSAP"]);
                                            dots[index]?.classList.add("is-active");
                                        }
                                    }["Timeline.useGSAP"],
                                    onReverseComplete: {
                                        "Timeline.useGSAP": ()=>{
                                            dots.forEach({
                                                "Timeline.useGSAP": (dot)=>dot.classList.remove("is-active")
                                            }["Timeline.useGSAP"]);
                                            dots[Math.max(0, index - 1)]?.classList.add("is-active");
                                        }
                                    }["Timeline.useGSAP"]
                                }, index);
                            }
                        }["Timeline.useGSAP"]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(".timeline__orb", {
                            rotate: 240,
                            x: 36,
                            y: -30,
                            ease: "none",
                            scrollTrigger: {
                                trigger: ".timeline__stage",
                                start: "top top+=80",
                                end: `+=${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelineItems"].length * 580}`,
                                scrub: true
                            }
                        });
                    }
                    if (mobile) {
                        cards.forEach({
                            "Timeline.useGSAP": (card)=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(card, {
                                    y: 32,
                                    opacity: 0,
                                    duration: 0.7,
                                    ease: "power3.out",
                                    scrollTrigger: {
                                        trigger: card,
                                        start: "top 84%"
                                    }
                                });
                            }
                        }["Timeline.useGSAP"]);
                    }
                }
            }["Timeline.useGSAP"]);
            return ({
                "Timeline.useGSAP": ()=>{
                    mm.revert();
                }
            })["Timeline.useGSAP"];
        }
    }["Timeline.useGSAP"], {
        scope: root
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: root,
        id: "trajetoria",
        className: "timeline section-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "timeline__intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                        title: "Cada etapa adicionou uma nova camada ao meu trabalho.",
                        description: "Uma linha do tempo entre formação, experiência prática e o próximo capítulo profissional."
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Timeline.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "timeline__book",
                        "aria-label": "Livro aberto com referências pessoais de Mayza",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "timeline__book-cover",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Timeline.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "timeline__book-shadow",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Timeline.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "timeline__book-spread",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "timeline__book-page timeline__book-page--left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "timeline__book-page-number",
                                                children: "01"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 262,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "timeline__book-chapter",
                                                children: "random notes"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "timeline__book-year",
                                                children: "random-notes.js"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "timeline__book-line",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 274,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "timeline__code-window",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "timeline__code-toolbar",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "timeline__code-dots",
                                                                "aria-hidden": "true",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                        fileName: "[project]/components/sections/Timeline.tsx",
                                                                        lineNumber: 285,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                        fileName: "[project]/components/sections/Timeline.tsx",
                                                                        lineNumber: 286,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                        fileName: "[project]/components/sections/Timeline.tsx",
                                                                        lineNumber: 287,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "random-notes.js"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/Timeline.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "timeline__book-code",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "timeline__code-line",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-number",
                                                                            children: "01"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 296,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-content",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-keyword",
                                                                                    children: "const"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 301,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                " ",
                                                                                "platform =",
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-string",
                                                                                    children: '"9¾"'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 305,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                ";"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 300,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "timeline__code-line",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-number",
                                                                            children: "02"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 313,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-content",
                                                                            children: [
                                                                                "playlist.",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-function",
                                                                                    children: "play"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 319,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                "(",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-string",
                                                                                    children: '"Bad Omens"'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 323,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                ");"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 317,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "timeline__code-line",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-number",
                                                                            children: "03"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 331,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-content",
                                                                            children: [
                                                                                "playlist.",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-function",
                                                                                    children: "queue"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 337,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                "(",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-string",
                                                                                    children: '"Shawn Mendes"'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 341,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                ");"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 335,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "timeline__code-line",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-number",
                                                                            children: "04"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 349,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-content",
                                                                            children: [
                                                                                "catCount",
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-operator",
                                                                                    children: "+="
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 355,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                " ",
                                                                                "2;"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 353,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                    lineNumber: 348,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "timeline__code-line",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-number",
                                                                            children: "05"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 363,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-content",
                                                                            children: [
                                                                                "git.",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-function",
                                                                                    children: "commit"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 369,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                "(",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-string",
                                                                                    children: '"mischief managed"'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 373,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                ");"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 367,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "timeline__code-line",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-number",
                                                                            children: "06"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 381,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-content",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "timeline__code-comment",
                                                                                children: "// somewhere between fiction and front-end"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                                                lineNumber: 386,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 385,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Timeline.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 279,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "timeline__book-note timeline__book-note--left",
                                                children: "music on, world off."
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 395,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "timeline__book-mini-note",
                                                children: "currently debugging the plot..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 399,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                className: "timeline__book-footer",
                                                children: "approved by the cats"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 403,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Timeline.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "timeline__book-page timeline__book-page--right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "timeline__book-page-number",
                                                children: "02"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 409,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "timeline__book-chapter",
                                                children: "side quests"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 413,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "timeline__book-year",
                                                children: "side-quests.md"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 417,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "timeline__book-line",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 421,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "timeline__code-window",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "timeline__code-toolbar",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "timeline__code-dots",
                                                                "aria-hidden": "true",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                        fileName: "[project]/components/sections/Timeline.tsx",
                                                                        lineNumber: 432,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                        fileName: "[project]/components/sections/Timeline.tsx",
                                                                        lineNumber: 433,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                        fileName: "[project]/components/sections/Timeline.tsx",
                                                                        lineNumber: 434,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                                lineNumber: 428,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "side-quests.md"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                                lineNumber: 437,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/Timeline.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "timeline__book-code",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "timeline__code-line",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-number",
                                                                            children: "01"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 443,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-content",
                                                                            children: [
                                                                                "nextDestination",
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-operator",
                                                                                    children: "??="
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 449,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-string",
                                                                                    children: '"unknown"'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 452,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                ";"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 447,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                    lineNumber: 442,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "timeline__code-line",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-number",
                                                                            children: "02"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 460,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-content",
                                                                            children: [
                                                                                "team.",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-function",
                                                                                    children: "support"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 466,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                "(",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-string",
                                                                                    children: '"Cruzeiro"'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 470,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                ");"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 464,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                    lineNumber: 459,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "timeline__code-line",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-number",
                                                                            children: "03"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 478,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-content",
                                                                            children: [
                                                                                "book.",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-function",
                                                                                    children: "open"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 484,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                "(",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-string",
                                                                                    children: '"Off Campus"'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 488,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                ");"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 482,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                    lineNumber: 477,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "timeline__code-line",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-number",
                                                                            children: "04"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 496,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-content",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-keyword",
                                                                                    children: "if"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 501,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                " ",
                                                                                "(fear",
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-operator",
                                                                                    children: ">"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 505,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                " ",
                                                                                "faith) ",
                                                                                "{"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 500,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                    lineNumber: 495,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "timeline__code-line",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-number",
                                                                            children: "05"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 513,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-content",
                                                                            children: [
                                                                                "  ",
                                                                                "remember(",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "timeline__code-string",
                                                                                    children: '"grace"'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                                    lineNumber: 519,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                ");"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 517,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                    lineNumber: 512,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "timeline__code-line",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-number",
                                                                            children: "06"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 527,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "timeline__code-content",
                                                                            children: "}"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                                            lineNumber: 531,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/Timeline.tsx",
                                                                    lineNumber: 526,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/sections/Timeline.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Timeline.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 426,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "timeline__book-note timeline__book-note--right",
                                                children: "another chapter, another plot twist."
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 539,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "timeline__book-mini-note",
                                                children: "next trip: loading..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 543,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                className: "timeline__book-footer",
                                                children: "blue heart, always"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 547,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Timeline.tsx",
                                        lineNumber: 408,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Timeline.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "timeline__book-bookmark",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Timeline.tsx",
                                lineNumber: 553,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "timeline__book-star",
                                "aria-hidden": "true",
                                children: "✦"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Timeline.tsx",
                                lineNumber: 558,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Timeline.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Timeline.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "timeline__stage",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "timeline-index",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "timeline-progress",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "timeline-progress__fill"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Timeline.tsx",
                                    lineNumber: 573,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Timeline.tsx",
                                lineNumber: 572,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelineItems"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "timeline-index__dot",
                                    children: String(index + 1).padStart(2, "0")
                                }, item.title, false, {
                                    fileName: "[project]/components/sections/Timeline.tsx",
                                    lineNumber: 577,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Timeline.tsx",
                        lineNumber: 568,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "timeline__cards",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelineItems"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "timeline-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "timeline-card__meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.kicker
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 593,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: item.year
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Timeline.tsx",
                                                lineNumber: 594,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Timeline.tsx",
                                        lineNumber: 592,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Timeline.tsx",
                                        lineNumber: 597,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Timeline.tsx",
                                        lineNumber: 599,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "timeline-card__number",
                                        children: String(index + 1).padStart(2, "0")
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Timeline.tsx",
                                        lineNumber: 601,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.title, true, {
                                fileName: "[project]/components/sections/Timeline.tsx",
                                lineNumber: 588,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Timeline.tsx",
                        lineNumber: 586,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "timeline__aside",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "timeline__orb numeric-texture",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "LEARNING"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Timeline.tsx",
                                        lineNumber: 613,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Timeline.tsx",
                                        lineNumber: 614,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "BUILDING"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Timeline.tsx",
                                        lineNumber: 615,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Timeline.tsx",
                                lineNumber: 612,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "scroll para acompanhar a progressão"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Timeline.tsx",
                                lineNumber: 618,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Timeline.tsx",
                        lineNumber: 608,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Timeline.tsx",
                lineNumber: 567,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Timeline.tsx",
        lineNumber: 235,
        columnNumber: 5
    }, this);
}
_s(Timeline, "zB1iyNZzwhay0S5kVAi3Ku2nFuE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Timeline;
var _c;
__turbopack_context__.k.register(_c, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/skills.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "skills",
    ()=>skills
]);
const skills = [
    {
        index: "01",
        name: "Next.js",
        description: "Aplicações modernas, componentizadas e preparadas para crescer.",
        note: "APP ROUTER / REACT"
    },
    {
        index: "02",
        name: "TypeScript",
        description: "Código mais seguro, previsível e fácil de manter em equipe.",
        note: "TYPES / DX"
    },
    {
        index: "03",
        name: "JavaScript",
        description: "Interações, comportamento e lógica para experiências funcionais.",
        note: "ESNEXT / DOM"
    },
    {
        index: "04",
        name: "Tailwind CSS",
        description: "Sistemas visuais consistentes com agilidade e responsividade.",
        note: "UI / TOKENS"
    },
    {
        index: "05",
        name: "HTML + CSS",
        description: "Estrutura semântica, acessível e visualmente bem resolvida.",
        note: "SEMANTICS / A11Y"
    },
    {
        index: "06",
        name: "GSAP",
        description: "Movimento com intenção, ritmo e narrativa orientada pelo scroll.",
        note: "MOTION / SCROLL"
    },
    {
        index: "07",
        name: "WordPress",
        description: "Páginas gerenciáveis e experiências digitais para negócios reais.",
        note: "CMS / ELEMENTOR"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Skills.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skills",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$skills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/skills.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Skills() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Skills.useGSAP": ()=>{
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].matchMedia();
            mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", {
                "Skills.useGSAP": ()=>{
                    const track = root.current?.querySelector(".skills__track");
                    if (!track) return;
                    const getDistance = {
                        "Skills.useGSAP.getDistance": ()=>Math.max(0, track.scrollWidth - window.innerWidth + 120)
                    }["Skills.useGSAP.getDistance"];
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(track, {
                        x: {
                            "Skills.useGSAP": ()=>-getDistance()
                        }["Skills.useGSAP"],
                        ease: "none",
                        scrollTrigger: {
                            trigger: root.current,
                            start: "top top",
                            end: {
                                "Skills.useGSAP": ()=>`+=${getDistance() + 700}`
                            }["Skills.useGSAP"],
                            pin: true,
                            scrub: 0.85,
                            invalidateOnRefresh: true,
                            anticipatePin: 1
                        }
                    });
                }
            }["Skills.useGSAP"]);
            return ({
                "Skills.useGSAP": ()=>mm.revert()
            })["Skills.useGSAP"];
        }
    }["Skills.useGSAP"], {
        scope: root
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: root,
        id: "skills",
        className: "skills numeric-texture",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skills__header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    title: "Ferramentas que fazem parte do meu trabalho.",
                    description: "Tecnologias que utilizo para transformar layouts em interfaces funcionais.",
                    light: true
                }, void 0, false, {
                    fileName: "[project]/components/sections/Skills.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Skills.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skills__viewport",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "skills__track",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$skills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"].map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "skill-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "skill-card__top",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: skill.index
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Skills.tsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "✦"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Skills.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Skills.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: skill.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Skills.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: skill.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Skills.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "skill-card__note",
                                        children: skill.note
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Skills.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, skill.name, true, {
                                fileName: "[project]/components/sections/Skills.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "skill-card skill-card--closing",
                            "aria-label": "Aprendizado contínuo",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "∞"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Skills.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Em constante evolução."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Skills.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "A stack cresce, mas o compromisso com uma boa experiência permanece."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Skills.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Skills.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Skills.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Skills.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Skills.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(Skills, "zB1iyNZzwhay0S5kVAi3Ku2nFuE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Skills;
var _c;
__turbopack_context__.k.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: "landing-page-autoral",
        name: "Landing page autoral",
        category: "Front-end / Conversão",
        description: "Experiência responsiva com direção visual editorial, componentes reutilizáveis e animações leves.",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind"
        ],
        challenge: "Transformar uma proposta de valor complexa em uma jornada clara.",
        solution: "Arquitetura de informação, hierarquia visual e interações orientadas à leitura.",
        link: "#adicionar-link-projeto-1",
        github: "#adicionar-github-projeto-1",
        featured: true,
        tone: "pink"
    },
    {
        slug: "dashboard-operacional",
        name: "Dashboard operacional",
        category: "Produto digital",
        description: "Interface para acompanhar indicadores e organizar informações sem comprometer a clareza.",
        technologies: [
            "React",
            "TypeScript",
            "CSS"
        ],
        challenge: "Exibir dados densos sem criar sobrecarga visual.",
        solution: "Componentes consistentes, agrupamento lógico e estados de interface bem definidos.",
        link: "#adicionar-link-projeto-2",
        tone: "black"
    },
    {
        slug: "site-institucional",
        name: "Site institucional",
        category: "WordPress",
        description: "Site gerenciável, responsivo e preparado para apresentar serviços com credibilidade.",
        technologies: [
            "WordPress",
            "Elementor",
            "CSS"
        ],
        challenge: "Equilibrar autonomia do cliente e consistência visual.",
        solution: "Sistema de seções reutilizáveis e padrões claros de edição.",
        link: "#adicionar-link-projeto-3",
        tone: "paper"
    },
    {
        slug: "portfolio-interativo",
        name: "Portfólio interativo",
        category: "Motion / Desenvolvimento",
        description: "Narrativa de scroll que transforma trajetória profissional em uma experiência memorável.",
        technologies: [
            "Next.js",
            "GSAP",
            "Tailwind"
        ],
        challenge: "Criar movimento sem prejudicar leitura e performance.",
        solution: "Animações progressivas, breakpoints específicos e suporte a reduced motion.",
        link: "#adicionar-link-projeto-4",
        github: "#adicionar-github-projeto-4",
        tone: "gray"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Projects",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ProjectVisual({ name, category }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "project-visual",
        role: "img",
        "aria-label": `Espaço reservado para a imagem do projeto ${name}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-visual__browser",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/components/sections/Projects.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/components/sections/Projects.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/components/sections/Projects.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Projects.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-visual__content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "ADICIONAR"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Projects.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "CAPA DO PROJETO"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Projects.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "public/projects/"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Projects.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Projects.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "project-visual__category",
                children: category
            }, void 0, false, {
                fileName: "[project]/components/sections/Projects.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Projects.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = ProjectVisual;
function Projects() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Projects.useGSAP": ()=>{
            const cards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(".project-card");
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].matchMedia();
            mm.add("(prefers-reduced-motion: no-preference)", {
                "Projects.useGSAP": ()=>{
                    cards.forEach({
                        "Projects.useGSAP": (card, index)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(card, {
                                y: index % 2 === 0 ? 54 : 82,
                                rotate: index % 2 === 0 ? -0.6 : 0.8,
                                opacity: 0,
                                duration: 0.9,
                                ease: "power3.out",
                                scrollTrigger: {
                                    trigger: card,
                                    start: "top 82%"
                                }
                            });
                        }
                    }["Projects.useGSAP"]);
                }
            }["Projects.useGSAP"]);
            return ({
                "Projects.useGSAP": ()=>mm.revert()
            })["Projects.useGSAP"];
        }
    }["Projects.useGSAP"], {
        scope: root
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: root,
        id: "projetos",
        className: "projects paper-texture section-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                eyebrow: "Projetos / 05",
                title: "Ideias que ganharam estrutura, interface e movimento.",
                description: "Os cards abaixo estão preparados para receber os projetos reais, capas, links e estudos de caso da Mayza."
            }, void 0, false, {
                fileName: "[project]/components/sections/Projects.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "projects__grid",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: `project-card project-card--${project.tone} ${project.featured ? "project-card--featured" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "project-card__visual-link",
                                href: project.link,
                                "aria-label": `Abrir projeto ${project.name}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectVisual, {
                                    name: project.name,
                                    category: project.category
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Projects.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Projects.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "project-card__content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "project-card__index",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: String(index + 1).padStart(2, "0")
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Projects.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: project.category
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Projects.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Projects.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: project.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Projects.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: project.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Projects.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "project-card__tags",
                                        children: project.technologies.map((technology)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: technology
                                            }, technology, false, {
                                                fileName: "[project]/components/sections/Projects.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Projects.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "project-card__details",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                children: "Contexto do projeto"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Projects.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Desafio:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/Projects.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 22
                                                            }, this),
                                                            " ",
                                                            project.challenge
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/Projects.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Solução:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/Projects.tsx",
                                                                lineNumber: 93,
                                                                columnNumber: 22
                                                            }, this),
                                                            " ",
                                                            project.solution
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/Projects.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Projects.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Projects.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "project-card__links",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: project.link,
                                                children: [
                                                    "Ver projeto ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": "true",
                                                        children: "↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Projects.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 52
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Projects.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            project.github ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: project.github,
                                                children: "GitHub"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Projects.tsx",
                                                lineNumber: 99,
                                                columnNumber: 35
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Projects.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Projects.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, project.slug, true, {
                        fileName: "[project]/components/sections/Projects.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/Projects.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Projects.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(Projects, "zB1iyNZzwhay0S5kVAi3Ku2nFuE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c1 = Projects;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectVisual");
__turbopack_context__.k.register(_c1, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/PageLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageLoader",
    ()=>PageLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PageLoader() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const counter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "PageLoader.useGSAP": ()=>{
            const loader = root.current;
            if (!loader) {
                return;
            }
            const finishLoading = {
                "PageLoader.useGSAP.finishLoading": ()=>{
                    document.body.classList.remove("is-loading");
                    document.documentElement.dataset.portfolioReady = "true";
                    window.dispatchEvent(new Event("portfolio:ready"));
                    setFinished(true);
                }
            }["PageLoader.useGSAP.finishLoading"];
            document.body.classList.add("is-loading");
            window.scrollTo(0, 0);
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReducedMotion) {
                finishLoading();
                return;
            }
            const progress = {
                value: 0
            };
            const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].timeline({
                defaults: {
                    ease: "power3.out"
                },
                onComplete: finishLoading
            });
            timeline.from(".page-loader__arch", {
                scaleY: 0.7,
                yPercent: 18,
                duration: 1.1,
                ease: "power4.out"
            }, 0).from(".page-loader__title span", {
                yPercent: 115,
                rotate: 2,
                duration: 0.9
            }, 0.08).from(".page-loader__pill", {
                y: 30,
                scale: 0.85,
                opacity: 0,
                duration: 0.7
            }, 0.32).from(".page-loader__arrow-line", {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 0.8
            }, 0.4).from(".page-loader__meta", {
                y: -12,
                opacity: 0,
                duration: 0.5
            }, 0.48).from(".page-loader__progress", {
                y: 14,
                opacity: 0,
                duration: 0.5
            }, 0.58).to(progress, {
                value: 100,
                duration: 1.65,
                ease: "power2.inOut",
                onUpdate: {
                    "PageLoader.useGSAP": ()=>{
                        if (!counter.current) {
                            return;
                        }
                        const currentValue = Math.round(progress.value);
                        counter.current.textContent = `${String(currentValue).padStart(2, "0")}%`;
                    }
                }["PageLoader.useGSAP"]
            }, 0.12).to(".page-loader__content", {
                y: -30,
                opacity: 0,
                duration: 0.45,
                ease: "power2.in"
            }, 1.7).to(loader, {
                clipPath: "inset(0 0 100% 0)",
                duration: 0.95,
                ease: "power4.inOut"
            }, 1.76);
            return ({
                "PageLoader.useGSAP": ()=>{
                    document.body.classList.remove("is-loading");
                }
            })["PageLoader.useGSAP"];
        }
    }["PageLoader.useGSAP"], {
        scope: root
    });
    if (finished) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: root,
        className: "page-loader",
        role: "status",
        "aria-label": "Carregando portfólio",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-loader__arch",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/ui/PageLoader.tsx",
                lineNumber: 170,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-loader__content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "page-loader__meta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "MAYZA ESTER"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/PageLoader.tsx",
                                lineNumber: 174,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "FRONT-END DEVELOPER"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/PageLoader.tsx",
                                lineNumber: 175,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/PageLoader.tsx",
                        lineNumber: 173,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "page-loader__center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "page-loader__title",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "PORTFÓLIO"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/PageLoader.tsx",
                                    lineNumber: 180,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/PageLoader.tsx",
                                lineNumber: 179,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "page-loader__route",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "page-loader__arrow-line"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/PageLoader.tsx",
                                        lineNumber: 184,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "page-loader__pill",
                                        children: "MAYZA / 2026"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/PageLoader.tsx",
                                        lineNumber: 186,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/PageLoader.tsx",
                                lineNumber: 183,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/PageLoader.tsx",
                        lineNumber: 178,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "page-loader__progress",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "CARREGANDO EXPERIÊNCIA"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/PageLoader.tsx",
                                lineNumber: 193,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: counter,
                                "aria-hidden": "true",
                                children: "00%"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/PageLoader.tsx",
                                lineNumber: 195,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/PageLoader.tsx",
                        lineNumber: 192,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/PageLoader.tsx",
                lineNumber: 172,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/PageLoader.tsx",
        lineNumber: 164,
        columnNumber: 9
    }, this);
}
_s(PageLoader, "4AOGqrwiM8fnZHMaOvxwS5QUxS8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = PageLoader;
var _c;
__turbopack_context__.k.register(_c, "PageLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0p3_c3i._.js.map