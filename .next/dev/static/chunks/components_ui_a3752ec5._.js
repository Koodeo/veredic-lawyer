(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/custom-cursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CustomCursor() {
    _s();
    const [cursorLabel, setCursorLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [cursorState, setCursorState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('default');
    const cursorX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const cursorY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const ringX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(cursorX, {
        stiffness: 25,
        damping: 15,
        mass: 0.5
    });
    const ringY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(cursorY, {
        stiffness: 25,
        damping: 15,
        mass: 0.5
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const handleMouseMove = {
                "CustomCursor.useEffect.handleMouseMove": (e)=>{
                    cursorX.set(e.clientX);
                    cursorY.set(e.clientY);
                }
            }["CustomCursor.useEffect.handleMouseMove"];
            const handleMouseOver = {
                "CustomCursor.useEffect.handleMouseOver": (e)=>{
                    const target = e.target;
                    // Check for interactive elements
                    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('h-cta') || target.classList.contains('btn-solid') || target.classList.contains('btn-line')) {
                        setCursorLabel('View');
                        setCursorState('on');
                    } else if (target.classList.contains('sv-card')) {
                        setCursorLabel('Explore');
                        setCursorState('on');
                    } else if (target.classList.contains('t-card')) {
                        setCursorLabel('Profile');
                        setCursorState('on');
                    } else if (target.classList.contains('tc')) {
                        setCursorLabel('Read');
                        setCursorState('on');
                    } else if (target.classList.contains('sv-track')) {
                        setCursorLabel('Drag');
                        setCursorState('drag');
                    }
                }
            }["CustomCursor.useEffect.handleMouseOver"];
            const handleMouseOut = {
                "CustomCursor.useEffect.handleMouseOut": (e)=>{
                    const target = e.target;
                    const relatedTarget = e.relatedTarget;
                    // Only reset if not moving to another interactive element
                    if (!relatedTarget || !relatedTarget.tagName?.match(/A|BUTTON/) && !relatedTarget.classList.contains('h-cta') && !relatedTarget.classList.contains('btn-solid') && !relatedTarget.classList.contains('btn-line') && !relatedTarget.classList.contains('sv-card') && !relatedTarget.classList.contains('t-card') && !relatedTarget.classList.contains('tc') && !relatedTarget.classList.contains('sv-track')) {
                        setCursorLabel('');
                        setCursorState('default');
                    }
                }
            }["CustomCursor.useEffect.handleMouseOut"];
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseover', handleMouseOver);
            window.addEventListener('mouseout', handleMouseOut);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('mouseover', handleMouseOver);
                    window.removeEventListener('mouseout', handleMouseOut);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        cursorX,
        cursorY
    ]);
    // Don't show custom cursor on touch devices
    const [isTouch, setIsTouch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
        }
    }["CustomCursor.useEffect"], []);
    if (isTouch) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "9c9c4ddc479ab91b",
                children: "body{cursor:none!important}body.cur-on .cursor-dot{background:var(--slate);width:58px;height:58px}body.cur-on .cursor-label{opacity:1}body.cur-on .cursor-ring{opacity:0}body.cur-drag .cursor-dot{background:var(--gold);width:68px;height:68px}body.cur-drag .cursor-label{opacity:1;color:var(--charcoal)}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 9999,
                    pointerEvents: 'none'
                },
                className: "jsx-9c9c4ddc479ab91b" + " " + `cursor-wrap ${cursorState === 'on' ? 'cur-on' : cursorState === 'drag' ? 'cur-drag' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "cursor-dot",
                        style: {
                            position: 'absolute',
                            width: 8,
                            height: 8,
                            background: 'var(--charcoal)',
                            borderRadius: '50%',
                            transform: 'translate(-50%, -50%)',
                            transition: 'width 0.35s cubic-bezier(0.16, 1, 0.3, 1), height 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s, opacity 0.3s',
                            x: cursorX,
                            y: cursorY
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ui/custom-cursor.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "cursor-ring",
                        style: {
                            position: 'absolute',
                            width: 38,
                            height: 38,
                            border: '1px solid rgba(28,30,33,0.2)',
                            borderRadius: '50%',
                            transform: 'translate(-50%, -50%)',
                            transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s, border-color 0.3s',
                            x: ringX,
                            y: ringY
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ui/custom-cursor.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "cursor-label",
                        style: {
                            position: 'absolute',
                            transform: 'translate(-50%, -50%)',
                            fontFamily: 'var(--font-body)',
                            fontSize: 9,
                            fontWeight: 300,
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                            color: 'var(--cream)',
                            whiteSpace: 'nowrap',
                            opacity: 0,
                            transition: 'opacity 0.25s',
                            x: cursorX,
                            y: cursorY
                        },
                        children: cursorLabel
                    }, void 0, false, {
                        fileName: "[project]/components/ui/custom-cursor.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/custom-cursor.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CustomCursor, "bXh3oiDwVQU9GIgRSbGGC8JqPJw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/page-loader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function PageLoader() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showContent, setShowContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageLoader.useEffect": ()=>{
            const ticker = setInterval({
                "PageLoader.useEffect.ticker": ()=>{
                    setProgress({
                        "PageLoader.useEffect.ticker": (prev)=>{
                            const increment = Math.random() * 9 + 2;
                            const newProgress = prev + increment;
                            if (newProgress >= 100) {
                                clearInterval(ticker);
                                setTimeout({
                                    "PageLoader.useEffect.ticker": ()=>{
                                        setIsLoading(false);
                                        setTimeout({
                                            "PageLoader.useEffect.ticker": ()=>{
                                                setShowContent(true);
                                            }
                                        }["PageLoader.useEffect.ticker"], 820);
                                    }
                                }["PageLoader.useEffect.ticker"], 180);
                                return 100;
                            }
                            return newProgress;
                        }
                    }["PageLoader.useEffect.ticker"]);
                }
            }["PageLoader.useEffect.ticker"], 45);
            return ({
                "PageLoader.useEffect": ()=>clearInterval(ticker)
            })["PageLoader.useEffect"];
        }
    }["PageLoader.useEffect"], []);
    const panelVariants = {
        initial: {
            scaleY: 1
        },
        exit: {
            scaleY: 0
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "jsx-b99559d74cce4df1" + " " + "loader",
            children: [
                [
                    0,
                    1,
                    2,
                    3,
                    4
                ].map((index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "l-panel",
                        variants: panelVariants,
                        initial: "initial",
                        exit: "exit",
                        transition: {
                            duration: 0.8,
                            ease: [
                                0.76,
                                0,
                                0.24,
                                1
                            ],
                            delay: index * 0.055
                        },
                        style: {
                            flex: 1,
                            background: 'var(--charcoal)',
                            transformOrigin: 'top'
                        }
                    }, index, false, {
                        fileName: "[project]/components/ui/page-loader.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b99559d74cce4df1" + " " + "loader-hud",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b99559d74cce4df1" + " " + "loader-num",
                            children: Math.floor(progress)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/page-loader.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b99559d74cce4df1" + " " + "loader-word",
                            children: "Veredic"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/page-loader.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/page-loader.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "loader-progress",
                    style: {
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        height: 2,
                        zIndex: 8001,
                        background: 'linear-gradient(90deg, var(--gold) 0%, rgba(201,179,152,0.25) 100%)',
                        width: `${progress}%`,
                        transition: 'width 0.08s linear'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ui/page-loader.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "b99559d74cce4df1",
                    children: ".loader.jsx-b99559d74cce4df1{z-index:8000;pointer-events:none;display:flex;position:fixed;inset:0;overflow:hidden}.loader-hud.jsx-b99559d74cce4df1{z-index:8001;pointer-events:none;justify-content:space-between;align-items:flex-end;display:flex;position:fixed;bottom:56px;left:64px;right:64px}.loader-num.jsx-b99559d74cce4df1{font-family:var(--font-display);color:#f7f3f10f;font-size:max(80px,min(14vw,180px));font-weight:300;line-height:1;transition:none}.loader-word.jsx-b99559d74cce4df1{font-family:var(--font-display);letter-spacing:.32em;text-transform:uppercase;color:#f7f3f142;align-self:center;font-size:15px;font-weight:300}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/page-loader.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/page-loader.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(PageLoader, "jyoXqE2Nf6W9b+gwGkkmKdPRrpg=");
_c = PageLoader;
var _c;
__turbopack_context__.k.register(_c, "PageLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_ui_a3752ec5._.js.map