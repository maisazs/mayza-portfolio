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
        id: "react",
        name: "React",
        icon: "react",
        orbit: "inner",
        angle: -90
    },
    {
        id: "next",
        name: "Next.js",
        icon: "next",
        orbit: "inner",
        angle: 30
    },
    {
        id: "typescript",
        name: "TypeScript",
        icon: "typescript",
        orbit: "inner",
        angle: 150
    },
    {
        id: "javascript",
        name: "JavaScript",
        icon: "javascript",
        orbit: "middle",
        angle: -20
    },
    {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: "tailwind",
        orbit: "middle",
        angle: 100
    },
    {
        id: "gsap",
        name: "GSAP",
        icon: "gsap",
        orbit: "middle",
        angle: 220
    },
    {
        id: "html",
        name: "HTML",
        icon: "html",
        orbit: "outer",
        angle: 15
    },
    {
        id: "css",
        name: "CSS",
        icon: "css",
        orbit: "outer",
        angle: 135
    },
    {
        id: "wordpress",
        name: "WordPress",
        icon: "wordpress",
        orbit: "outer",
        angle: 255
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
const ORBIT_ORDER = [
    "inner",
    "middle",
    "outer"
];
function SkillIcon({ name }) {
    const commonProps = {
        viewBox: "0 0 64 64",
        width: 36,
        height: 36,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": true
    };
    switch(name){
        case "react":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...commonProps,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "32",
                        cy: "32",
                        r: "4.5",
                        fill: "#61DAFB"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "32",
                        cy: "32",
                        rx: "25",
                        ry: "9.5",
                        stroke: "#61DAFB",
                        strokeWidth: "2.8"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "32",
                        cy: "32",
                        rx: "25",
                        ry: "9.5",
                        stroke: "#61DAFB",
                        strokeWidth: "2.8",
                        transform: "rotate(60 32 32)"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "32",
                        cy: "32",
                        rx: "25",
                        ry: "9.5",
                        stroke: "#61DAFB",
                        strokeWidth: "2.8",
                        transform: "rotate(120 32 32)"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Skills.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this);
        case "next":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...commonProps,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "32",
                        cy: "32",
                        r: "25",
                        fill: "#050505"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20 44V20l25 31",
                        stroke: "#fffefd",
                        strokeWidth: "3.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M43 20v17",
                        stroke: "#fffefd",
                        strokeWidth: "3.2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Skills.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this);
        case "typescript":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...commonProps,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "7",
                        y: "7",
                        width: "50",
                        height: "50",
                        rx: "7",
                        fill: "#3178C6"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17 22h23M28.5 22v25",
                        stroke: "#fffefd",
                        strokeWidth: "3.2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M43 30c-5-3-9-1.5-9 2 0 5 11 2.5 11 8 0 4-4 6-10 3",
                        stroke: "#fffefd",
                        strokeWidth: "3.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Skills.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this);
        case "javascript":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...commonProps,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "7",
                        y: "7",
                        width: "50",
                        height: "50",
                        rx: "5",
                        fill: "#F7DF1E"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M29 21v23c0 5-3 7-7 7-3 0-5-1-7-3",
                        stroke: "#050505",
                        strokeWidth: "3",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M48 28c-3-3-9-3-9 1 0 5 11 3 11 9 0 5-6 7-12 3",
                        stroke: "#050505",
                        strokeWidth: "3",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Skills.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this);
        case "tailwind":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...commonProps,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10 25c6-10 13-14 22-12 7 1 10 6 14 10 4 4 7 5 12 2-6 10-13 14-22 12-7-1-10-6-14-10-4-4-7-5-12-2Z",
                        fill: "#06B6D4"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10 42c6-10 13-14 22-12 7 1 10 6 14 10 4 4 7 5 12 2-6 10-13 14-22 12-7-1-10-6-14-10-4-4-7-5-12-2Z",
                        fill: "#06B6D4",
                        opacity: "0.76"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Skills.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this);
        case "html":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...commonProps,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M13 8h38l-4 44-15 4-15-4-4-44Z",
                        fill: "#E34F26"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22 20h21l-1 8H24l1 8h16l-1 9-8 2-8-2-.5-5",
                        stroke: "#fffefd",
                        strokeWidth: "2.8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Skills.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, this);
        case "css":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...commonProps,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M13 8h38l-4 44-15 4-15-4-4-44Z",
                        fill: "#1572B6"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22 20h21l-1 8H26l-1 7h16l-1 10-8 2-8-2-.5-5",
                        stroke: "#fffefd",
                        strokeWidth: "2.8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Skills.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this);
        case "gsap":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...commonProps,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 18h40M12 32h31M12 46h23",
                        stroke: "#88CE02",
                        strokeWidth: "4",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m44 25 8 7-8 7",
                        stroke: "#88CE02",
                        strokeWidth: "4",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Skills.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, this);
        case "wordpress":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...commonProps,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "32",
                        cy: "32",
                        r: "26",
                        fill: "#21759B"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "32",
                        cy: "32",
                        r: "20",
                        stroke: "#fffefd",
                        strokeWidth: "2.2"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m18 22 10 25 6-16 7 16 7-23M16 22h14M37 22h10",
                        stroke: "#fffefd",
                        strokeWidth: "2.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Skills.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Skills.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, this);
        default:
            return null;
    }
}
_c = SkillIcon;
function Skills() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Skills.useGSAP": ()=>{
            const section = root.current;
            if (!section) {
                return;
            }
            const orbitFrame = section.querySelector(".skills__orbit-frame");
            const orbitElements = ORBIT_ORDER.map({
                "Skills.useGSAP.orbitElements": (orbitName)=>section.querySelector(`[data-orbit="${orbitName}"]`)
            }["Skills.useGSAP.orbitElements"]);
            if (!orbitFrame || orbitElements.some({
                "Skills.useGSAP": (orbit)=>!orbit
            }["Skills.useGSAP"])) {
                return;
            }
            const speedByOrbit = {
                inner: 7.6,
                middle: 5.2,
                outer: 3.4
            };
            const directionByOrbit = {
                inner: 1,
                middle: -1,
                outer: 1
            };
            const initialAngleByOrbit = {
                inner: -14,
                middle: 24,
                outer: -32
            };
            const runtime = ORBIT_ORDER.map({
                "Skills.useGSAP.runtime": (orbitName, index)=>{
                    const element = orbitElements[index];
                    const items = Array.from(element.querySelectorAll(".skills-orbit__item"));
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].set(items, {
                        xPercent: -50,
                        yPercent: -50,
                        force3D: true
                    });
                    return {
                        name: orbitName,
                        element,
                        items,
                        radius: 0,
                        angle: initialAngleByOrbit[orbitName],
                        baseSpeed: speedByOrbit[orbitName],
                        direction: directionByOrbit[orbitName],
                        paused: false,
                        setX: items.map({
                            "Skills.useGSAP.runtime": (item)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickSetter(item, "x", "px")
                        }["Skills.useGSAP.runtime"]),
                        setY: items.map({
                            "Skills.useGSAP.runtime": (item)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickSetter(item, "y", "px")
                        }["Skills.useGSAP.runtime"])
                    };
                }
            }["Skills.useGSAP.runtime"]);
            const allItems = runtime.flatMap({
                "Skills.useGSAP.allItems": (orbit)=>orbit.items
            }["Skills.useGSAP.allItems"]);
            const cleanupListeners = [];
            let targetSpeed = 1;
            let currentSpeed = 1;
            let lastFrameWidth = 0;
            const updateRadii = {
                "Skills.useGSAP.updateRadii": ()=>{
                    const currentFrameWidth = orbitFrame.clientWidth;
                    if (currentFrameWidth === lastFrameWidth) {
                        return;
                    }
                    lastFrameWidth = currentFrameWidth;
                    runtime.forEach({
                        "Skills.useGSAP.updateRadii": (orbit)=>{
                            orbit.radius = orbit.element.getBoundingClientRect().width / 2;
                        }
                    }["Skills.useGSAP.updateRadii"]);
                }
            }["Skills.useGSAP.updateRadii"];
            const renderOrbitPositions = {
                "Skills.useGSAP.renderOrbitPositions": ()=>{
                    runtime.forEach({
                        "Skills.useGSAP.renderOrbitPositions": (orbit)=>{
                            orbit.items.forEach({
                                "Skills.useGSAP.renderOrbitPositions": (item, itemIndex)=>{
                                    const offset = Number(item.dataset.angle ?? 0);
                                    const angleInRadians = (orbit.angle + offset) * Math.PI / 180;
                                    const x = Math.cos(angleInRadians) * orbit.radius;
                                    const y = Math.sin(angleInRadians) * orbit.radius;
                                    orbit.setX[itemIndex](x);
                                    orbit.setY[itemIndex](y);
                                    const horizontalDistance = Math.abs(x);
                                    const verticalDistance = Math.abs(y);
                                    if (horizontalDistance >= verticalDistance) {
                                        item.dataset.labelPosition = x >= 0 ? "right" : "left";
                                    } else {
                                        item.dataset.labelPosition = y >= 0 ? "bottom" : "top";
                                    }
                                }
                            }["Skills.useGSAP.renderOrbitPositions"]);
                        }
                    }["Skills.useGSAP.renderOrbitPositions"]);
                }
            }["Skills.useGSAP.renderOrbitPositions"];
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            updateRadii();
            renderOrbitPositions();
            const ticker = {
                "Skills.useGSAP.ticker": (_time, deltaTime)=>{
                    const delta = Math.min(deltaTime / 1000, 0.05);
                    updateRadii();
                    targetSpeed += (1 - targetSpeed) * Math.min(1, delta * 2.7);
                    currentSpeed += (targetSpeed - currentSpeed) * Math.min(1, delta * 7.5);
                    runtime.forEach({
                        "Skills.useGSAP.ticker": (orbit)=>{
                            if (!orbit.paused) {
                                orbit.angle += orbit.baseSpeed * orbit.direction * currentSpeed * delta;
                            }
                        }
                    }["Skills.useGSAP.ticker"]);
                    renderOrbitPositions();
                }
            }["Skills.useGSAP.ticker"];
            if (!prefersReducedMotion) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.add(ticker);
            }
            runtime.forEach({
                "Skills.useGSAP": (orbit)=>{
                    orbit.items.forEach({
                        "Skills.useGSAP": (item)=>{
                            const pauseOrbit = {
                                "Skills.useGSAP.pauseOrbit": ()=>{
                                    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                                        orbit.paused = true;
                                    }
                                }
                            }["Skills.useGSAP.pauseOrbit"];
                            const resumeOrbit = {
                                "Skills.useGSAP.resumeOrbit": ()=>{
                                    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                                        orbit.paused = false;
                                    }
                                }
                            }["Skills.useGSAP.resumeOrbit"];
                            const pauseOnFocus = {
                                "Skills.useGSAP.pauseOnFocus": ()=>{
                                    orbit.paused = true;
                                }
                            }["Skills.useGSAP.pauseOnFocus"];
                            const resumeOnBlur = {
                                "Skills.useGSAP.resumeOnBlur": ()=>{
                                    orbit.paused = false;
                                    item.classList.remove("is-active");
                                }
                            }["Skills.useGSAP.resumeOnBlur"];
                            const toggleOnTouch = {
                                "Skills.useGSAP.toggleOnTouch": ()=>{
                                    if (!window.matchMedia("(hover: none), (pointer: coarse)").matches) {
                                        return;
                                    }
                                    const willActivate = !item.classList.contains("is-active");
                                    allItems.forEach({
                                        "Skills.useGSAP.toggleOnTouch": (otherItem)=>{
                                            otherItem.classList.remove("is-active");
                                        }
                                    }["Skills.useGSAP.toggleOnTouch"]);
                                    runtime.forEach({
                                        "Skills.useGSAP.toggleOnTouch": (otherOrbit)=>{
                                            otherOrbit.paused = false;
                                        }
                                    }["Skills.useGSAP.toggleOnTouch"]);
                                    if (willActivate) {
                                        item.classList.add("is-active");
                                        orbit.paused = true;
                                    }
                                }
                            }["Skills.useGSAP.toggleOnTouch"];
                            item.addEventListener("pointerenter", pauseOrbit);
                            item.addEventListener("pointerleave", resumeOrbit);
                            item.addEventListener("focus", pauseOnFocus);
                            item.addEventListener("blur", resumeOnBlur);
                            item.addEventListener("click", toggleOnTouch);
                            cleanupListeners.push({
                                "Skills.useGSAP": ()=>{
                                    item.removeEventListener("pointerenter", pauseOrbit);
                                    item.removeEventListener("pointerleave", resumeOrbit);
                                    item.removeEventListener("focus", pauseOnFocus);
                                    item.removeEventListener("blur", resumeOnBlur);
                                    item.removeEventListener("click", toggleOnTouch);
                                }
                            }["Skills.useGSAP"]);
                        }
                    }["Skills.useGSAP"]);
                }
            }["Skills.useGSAP"]);
            const clearActiveItems = {
                "Skills.useGSAP.clearActiveItems": (event)=>{
                    const target = event.target;
                    if (allItems.some({
                        "Skills.useGSAP.clearActiveItems": (item)=>item.contains(target)
                    }["Skills.useGSAP.clearActiveItems"])) {
                        return;
                    }
                    allItems.forEach({
                        "Skills.useGSAP.clearActiveItems": (item)=>{
                            item.classList.remove("is-active");
                        }
                    }["Skills.useGSAP.clearActiveItems"]);
                    runtime.forEach({
                        "Skills.useGSAP.clearActiveItems": (orbit)=>{
                            orbit.paused = false;
                        }
                    }["Skills.useGSAP.clearActiveItems"]);
                }
            }["Skills.useGSAP.clearActiveItems"];
            document.addEventListener("pointerdown", clearActiveItems);
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].matchMedia();
            mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", {
                "Skills.useGSAP": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].set(orbitFrame, {
                        scale: 0.58,
                        y: 56,
                        transformOrigin: "center center"
                    });
                    const pinnedTimeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].timeline({
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: "+=2800",
                            pin: true,
                            pinSpacing: true,
                            scrub: 0.85,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                            onUpdate: {
                                "Skills.useGSAP.pinnedTimeline": (self)=>{
                                    const velocity = Math.abs(self.getVelocity());
                                    targetSpeed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(1, 6.2, 1 + velocity / 450);
                                }
                            }["Skills.useGSAP.pinnedTimeline"]
                        }
                    });
                    pinnedTimeline.to(orbitFrame, {
                        scale: 1,
                        y: 0,
                        ease: "none",
                        duration: 0.62
                    }, 0).fromTo(".skills__cloud--one", {
                        x: -18,
                        rotate: -5
                    }, {
                        x: 34,
                        rotate: 3,
                        ease: "none",
                        duration: 1
                    }, 0).fromTo(".skills__cloud--two", {
                        x: 24,
                        rotate: 4
                    }, {
                        x: -28,
                        rotate: -3,
                        ease: "none",
                        duration: 1
                    }, 0).fromTo(".skills__photo-sticker", {
                        rotate: -8,
                        y: 18
                    }, {
                        rotate: 3,
                        y: -12,
                        ease: "none",
                        duration: 1
                    }, 0);
                    const entrance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].timeline({
                        scrollTrigger: {
                            trigger: section,
                            start: "top 76%",
                            once: true
                        }
                    });
                    entrance.from(".skills__header", {
                        y: 30,
                        autoAlpha: 0,
                        duration: 0.75,
                        ease: "power3.out"
                    }).from(".skills__collage-piece", {
                        scale: 0.7,
                        rotate: -5,
                        autoAlpha: 0,
                        duration: 0.55,
                        stagger: 0.06,
                        ease: "back.out(1.5)"
                    }, "-=0.4").from(".skills-orbit__item", {
                        scale: 0.62,
                        autoAlpha: 0,
                        duration: 0.42,
                        stagger: 0.04,
                        ease: "back.out(1.4)"
                    }, "-=0.42");
                    return ({
                        "Skills.useGSAP": ()=>{
                            pinnedTimeline.kill();
                            entrance.kill();
                        }
                    })["Skills.useGSAP"];
                }
            }["Skills.useGSAP"]);
            const handleResize = {
                "Skills.useGSAP.handleResize": ()=>{
                    lastFrameWidth = 0;
                    updateRadii();
                    renderOrbitPositions();
                }
            }["Skills.useGSAP.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "Skills.useGSAP": ()=>{
                    mm.revert();
                    if (!prefersReducedMotion) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.remove(ticker);
                    }
                    cleanupListeners.forEach({
                        "Skills.useGSAP": (cleanup)=>cleanup()
                    }["Skills.useGSAP"]);
                    document.removeEventListener("pointerdown", clearActiveItems);
                    window.removeEventListener("resize", handleResize);
                }
            })["Skills.useGSAP"];
        }
    }["Skills.useGSAP"], {
        scope: root
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: root,
        id: "skills",
        className: "skills numeric-texture",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "skills__layout",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "skills__header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                            title: "Tecnologias que fazem parte da minha stack.",
                            description: "Ferramentas com as quais já trabalhei e continuo aprofundando meus conhecimentos no desenvolvimento front-end.",
                            light: true
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Skills.tsx",
                            lineNumber: 668,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "skills__meta",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Skills.tsx",
                            lineNumber: 674,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Skills.tsx",
                    lineNumber: 667,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "skills__stage",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "skills__cloud skills__cloud--one skills__collage-piece",
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/sections/Skills.tsx",
                                    lineNumber: 683,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/sections/Skills.tsx",
                                    lineNumber: 684,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/sections/Skills.tsx",
                                    lineNumber: 685,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Skills.tsx",
                            lineNumber: 679,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "skills__cloud skills__cloud--two skills__collage-piece",
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/sections/Skills.tsx",
                                    lineNumber: 692,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/sections/Skills.tsx",
                                    lineNumber: 693,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/sections/Skills.tsx",
                                    lineNumber: 694,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Skills.tsx",
                            lineNumber: 688,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "skills__tape skills__tape--one skills__collage-piece",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Skills.tsx",
                            lineNumber: 697,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "skills__tape skills__tape--two skills__collage-piece",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Skills.tsx",
                            lineNumber: 702,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "skills__checker skills__collage-piece",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "stack club"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Skills.tsx",
                                lineNumber: 711,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Skills.tsx",
                            lineNumber: 707,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "skills__photo-sticker skills__collage-piece",
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "build"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Skills.tsx",
                                    lineNumber: 718,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "✦"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Skills.tsx",
                                    lineNumber: 719,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: "repeat"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Skills.tsx",
                                    lineNumber: 720,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Skills.tsx",
                            lineNumber: 714,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "skills__star skills__star--one skills__collage-piece",
                            "aria-hidden": "true",
                            children: "✦"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Skills.tsx",
                            lineNumber: 723,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "skills__star skills__star--two skills__collage-piece",
                            "aria-hidden": "true",
                            children: "✦"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Skills.tsx",
                            lineNumber: 730,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "skills__orbit-frame",
                            "aria-label": "Tecnologias utilizadas no desenvolvimento",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skills__paper-blob",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Skills.tsx",
                                    lineNumber: 741,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skills__core",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "SKILLS"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Skills.tsx",
                                            lineNumber: 744,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "</>"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Skills.tsx",
                                            lineNumber: 745,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "hover nos ícones"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Skills.tsx",
                                            lineNumber: 746,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Skills.tsx",
                                    lineNumber: 743,
                                    columnNumber: 13
                                }, this),
                                ORBIT_ORDER.map((orbitName)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `skills-orbit skills-orbit--${orbitName}`,
                                        "data-orbit": orbitName,
                                        "aria-label": `Órbita ${orbitName}`,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$skills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"].filter((skill)=>skill.orbit === orbitName).map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "skills-orbit__item",
                                                "data-angle": skill.angle,
                                                "data-skill": skill.id,
                                                "aria-label": skill.name,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "skills-orbit__icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillIcon, {
                                                            name: skill.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/Skills.tsx",
                                                            lineNumber: 770,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Skills.tsx",
                                                        lineNumber: 769,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "skills-orbit__label",
                                                        children: skill.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Skills.tsx",
                                                        lineNumber: 773,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, skill.id, true, {
                                                fileName: "[project]/components/sections/Skills.tsx",
                                                lineNumber: 761,
                                                columnNumber: 21
                                            }, this))
                                    }, orbitName, false, {
                                        fileName: "[project]/components/sections/Skills.tsx",
                                        lineNumber: 750,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Skills.tsx",
                            lineNumber: 737,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Skills.tsx",
                    lineNumber: 678,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Skills.tsx",
            lineNumber: 666,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Skills.tsx",
        lineNumber: 661,
        columnNumber: 5
    }, this);
}
_s(Skills, "zB1iyNZzwhay0S5kVAi3Ku2nFuE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c1 = Skills;
var _c, _c1;
__turbopack_context__.k.register(_c, "SkillIcon");
__turbopack_context__.k.register(_c1, "Skills");
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