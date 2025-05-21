module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/components/arrowButton/ArrowButton.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ArrowButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
'use client';
;
;
;
function ArrowButton({ direction = 'right', onClick, disabled = false }) {
    const Icon = direction === 'left' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "nav-button",
        onClick: onClick,
        disabled: disabled,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            size: 45,
            strokeWidth: 3
        }, void 0, false, {
            fileName: "[project]/app/components/arrowButton/ArrowButton.js",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/arrowButton/ArrowButton.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/components/TypeFilter/TypeFilter.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TypeFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
'use client';
;
;
;
;
function TypeFilter({ label, selected, onClick, style = {}, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `filter-chip ${selected ? 'selected' : ''} ${className}`,
        onClick: onClick,
        style: style,
        children: [
            label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                size: 16,
                className: "plus-icon"
            }, void 0, false, {
                fileName: "[project]/app/components/TypeFilter/TypeFilter.js",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TypeFilter/TypeFilter.js",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/components/budgetSlider/budgetSlider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BudgetSlider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$range$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-range/lib/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const STEP = 10;
const MIN = 0;
const MAX = 500;
function BudgetSlider({ values, setValues }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "budget-slider-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "budget-slider-wrapper",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "budget-tooltip",
                    children: [
                        "$",
                        values[0],
                        " — $",
                        values[1]
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/budgetSlider/budgetSlider.js",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$range$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"], {
                    values: values,
                    step: STEP,
                    min: MIN,
                    max: MAX,
                    onChange: setValues,
                    renderTrack: ({ props, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ...props,
                            className: "budget-track",
                            style: {
                                backgroundColor: '#e0d5ec',
                                position: 'relative'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        top: 0,
                                        left: `calc(${(values[0] - MIN) / (MAX - MIN) * 100}% - 10px)`,
                                        width: `${(values[1] - values[0]) / (MAX - MIN) * 100}%`,
                                        height: '100%',
                                        backgroundColor: '#3b1c85',
                                        borderRadius: '4px 0 0 4px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/budgetSlider/budgetSlider.js",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, void 0),
                                children
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/budgetSlider/budgetSlider.js",
                            lineNumber: 25,
                            columnNumber: 13
                        }, void 0),
                    renderThumb: ({ props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ...props,
                            className: "budget-thumb"
                        }, void 0, false, {
                            fileName: "[project]/app/components/budgetSlider/budgetSlider.js",
                            lineNumber: 48,
                            columnNumber: 13
                        }, void 0)
                }, void 0, false, {
                    fileName: "[project]/app/components/budgetSlider/budgetSlider.js",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "budget-range-labels",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "$0"
                        }, void 0, false, {
                            fileName: "[project]/app/components/budgetSlider/budgetSlider.js",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "$500"
                        }, void 0, false, {
                            fileName: "[project]/app/components/budgetSlider/budgetSlider.js",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/budgetSlider/budgetSlider.js",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/budgetSlider/budgetSlider.js",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/budgetSlider/budgetSlider.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/events/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EventPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$arrowButton$2f$ArrowButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/arrowButton/ArrowButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TypeFilter$2f$TypeFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TypeFilter/TypeFilter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$budgetSlider$2f$budgetSlider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/budgetSlider/budgetSlider.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function EventPage() {
    // Add the types array to the initial state
    const [eventData, setEventData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        budget: 25,
        type: '',
        types: [],
        budgetRange: [
            10,
            50
        ] // Default range for the slider
    });
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setEventData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleTypeSelect = (type)=>{
        setEventData((prev)=>{
            // Check if the type is already selected
            if (prev.types.includes(type)) {
                // If selected, remove it from the array
                return {
                    ...prev,
                    types: prev.types.filter((t)=>t !== type),
                    type: '' // Update single type for backward compatibility
                };
            } else {
                // If not selected, add it to the array
                return {
                    ...prev,
                    types: [
                        ...prev.types,
                        type
                    ],
                    type: type // Update single type for backward compatibility
                };
            }
        });
    };
    const handleNext = ()=>{
        // Here you would navigate to the next page or step
        console.log('Event data:', eventData);
    // This would typically use router.push('/next-step') or similar
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "event-creator-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mobile-frame",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "event-page",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "close-button-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 18,
                            strokeWidth: 3,
                            className: "close-icon"
                        }, void 0, false, {
                            fileName: "[project]/app/events/page.js",
                            lineNumber: 62,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/events/page.js",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "create-event-form",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Create Event"
                            }, void 0, false, {
                                fileName: "[project]/app/events/page.js",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "subtitle",
                                children: "What's the occasion?"
                            }, void 0, false, {
                                fileName: "[project]/app/events/page.js",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "event-name-input",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "name",
                                    value: eventData.name,
                                    onChange: handleInputChange,
                                    placeholder: "Event name",
                                    className: "event-input"
                                }, void 0, false, {
                                    fileName: "[project]/app/events/page.js",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/events/page.js",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "budget-slider-container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "budget-slider-label",
                                        children: "Budget"
                                    }, void 0, false, {
                                        fileName: "[project]/app/events/page.js",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$budgetSlider$2f$budgetSlider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        values: eventData.budgetRange,
                                        setValues: (range)=>setEventData((prev)=>({
                                                    ...prev,
                                                    budgetRange: range
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/app/events/page.js",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/events/page.js",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "type-filter-container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "type-label",
                                        children: "Type"
                                    }, void 0, false, {
                                        fileName: "[project]/app/events/page.js",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "filter-chip-container",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TypeFilter$2f$TypeFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                label: "Food",
                                                selected: eventData.types.includes('Food'),
                                                onClick: ()=>handleTypeSelect('Food'),
                                                className: "food-chip"
                                            }, void 0, false, {
                                                fileName: "[project]/app/events/page.js",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TypeFilter$2f$TypeFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                label: "Activity",
                                                selected: eventData.types.includes('Activity'),
                                                onClick: ()=>handleTypeSelect('Activity'),
                                                className: "activity-chip"
                                            }, void 0, false, {
                                                fileName: "[project]/app/events/page.js",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TypeFilter$2f$TypeFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                label: "Event",
                                                selected: eventData.types.includes('Event'),
                                                onClick: ()=>handleTypeSelect('Event'),
                                                className: "event-chip"
                                            }, void 0, false, {
                                                fileName: "[project]/app/events/page.js",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TypeFilter$2f$TypeFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                label: "Sight Seeing",
                                                selected: eventData.types.includes('Sight Seeing'),
                                                onClick: ()=>handleTypeSelect('Sight Seeing'),
                                                className: "sight-seeing-chip"
                                            }, void 0, false, {
                                                fileName: "[project]/app/events/page.js",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TypeFilter$2f$TypeFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                label: "Other",
                                                selected: eventData.types.includes('Other'),
                                                onClick: ()=>handleTypeSelect('Other'),
                                                className: "other-chip"
                                            }, void 0, false, {
                                                fileName: "[project]/app/events/page.js",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/events/page.js",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/events/page.js",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/events/page.js",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "event-nav",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$arrowButton$2f$ArrowButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                direction: "left",
                                onClick: handleNext
                            }, void 0, false, {
                                fileName: "[project]/app/events/page.js",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$arrowButton$2f$ArrowButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                direction: "right",
                                onClick: handleNext
                            }, void 0, false, {
                                fileName: "[project]/app/events/page.js",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/events/page.js",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/events/page.js",
                lineNumber: 58,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/events/page.js",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/events/page.js",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "hasA11yProp": (()=>hasA11yProp),
    "mergeClasses": (()=>mergeClasses),
    "toCamelCase": (()=>toCamelCase),
    "toKebabCase": (()=>toKebabCase),
    "toPascalCase": (()=>toPascalCase)
});
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>defaultAttributes)
});
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>Icon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>createLucideIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ChevronLeft)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
];
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-left", __iconNode);
;
 //# sourceMappingURL=chevron-left.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChevronLeft": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ChevronRight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-right", __iconNode);
;
 //# sourceMappingURL=chevron-right.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChevronRight": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Plus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
 //# sourceMappingURL=plus.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Plus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>X)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "X": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/react-range/lib/types.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Direction = void 0;
var Direction;
(function(Direction) {
    Direction["Right"] = "to right";
    Direction["Left"] = "to left";
    Direction["Down"] = "to bottom";
    Direction["Up"] = "to top";
})(Direction || (exports.Direction = Direction = {}));
}}),
"[project]/node_modules/react-range/lib/utils.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isIOS = exports.useThumbOverlap = exports.assertUnreachable = exports.voidFn = exports.getTrackBackground = exports.replaceAt = exports.schd = exports.translate = exports.getClosestThumbIndex = exports.translateThumbs = exports.getPaddingAndBorder = exports.getMargin = exports.checkInitialOverlap = exports.checkValuesAgainstBoundaries = exports.checkBoundaries = exports.isVertical = exports.relativeValue = exports.normalizeValue = exports.isStepDivisible = exports.isTouchEvent = exports.getStepDecimals = void 0;
var react_1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var types_1 = __turbopack_context__.r("[project]/node_modules/react-range/lib/types.js [app-ssr] (ecmascript)");
var getStepDecimals = function(step) {
    var decimals = step.toString().split(".")[1];
    return decimals ? decimals.length : 0;
};
exports.getStepDecimals = getStepDecimals;
function isTouchEvent(event) {
    return event.touches && event.touches.length || event.changedTouches && event.changedTouches.length;
}
exports.isTouchEvent = isTouchEvent;
function isStepDivisible(min, max, step) {
    var res = (max - min) / step;
    var precision = 8;
    var roundedRes = Number(res.toFixed(precision));
    return parseInt(roundedRes.toString(), 10) === roundedRes;
}
exports.isStepDivisible = isStepDivisible;
function normalizeValue(value, index, min, max, step, allowOverlap, values) {
    var BIG_NUM = 10e10;
    value = Math.round(value * BIG_NUM) / BIG_NUM;
    if (!allowOverlap) {
        var prev = values[index - 1];
        var next = values[index + 1];
        if (prev && prev > value) return prev;
        if (next && next < value) return next;
    }
    if (value > max) return max;
    if (value < min) return min;
    // `remainder` is a difference between the given value and a full step value
    // that is closest lower to the given value and is in the range between the min value
    // and the given value
    var remainder = Math.floor(value * BIG_NUM - min * BIG_NUM) % Math.floor(step * BIG_NUM);
    var closestLowerNum = Math.floor(value * BIG_NUM - Math.abs(remainder));
    var rounded = remainder === 0 ? value : closestLowerNum / BIG_NUM;
    // Values with a remainder `< step/2` are rounded to the closest lower value
    // while values with a remainder `= > step/2` are rounded to the closest bigger value
    var res = Math.abs(remainder / BIG_NUM) < step / 2 ? rounded : rounded + step;
    var decimalPlaces = (0, exports.getStepDecimals)(step);
    return parseFloat(res.toFixed(decimalPlaces));
}
exports.normalizeValue = normalizeValue;
function relativeValue(value, min, max) {
    return (value - min) / (max - min);
}
exports.relativeValue = relativeValue;
function isVertical(direction) {
    return direction === types_1.Direction.Up || direction === types_1.Direction.Down;
}
exports.isVertical = isVertical;
function checkBoundaries(value, min, max) {
    if (min >= max) {
        throw new RangeError("min (".concat(min, ") is equal/bigger than max (").concat(max, ")"));
    }
    if (value < min) {
        throw new RangeError("value (".concat(value, ") is smaller than min (").concat(min, ")"));
    }
    if (value > max) {
        throw new RangeError("value (".concat(value, ") is bigger than max (").concat(max, ")"));
    }
}
exports.checkBoundaries = checkBoundaries;
function checkValuesAgainstBoundaries(value, min, max) {
    if (value < min) {
        // set selectedValue to min
        return min;
    }
    if (value > max) {
        // set selectedValue to max
        return max;
    } else {
        return value;
    }
}
exports.checkValuesAgainstBoundaries = checkValuesAgainstBoundaries;
function checkInitialOverlap(values) {
    if (values.length < 2) return;
    if (!values.slice(1).every(function(item, i) {
        return values[i] <= item;
    })) {
        throw new RangeError("values={[".concat(values, "]} needs to be sorted when allowOverlap={false}"));
    }
}
exports.checkInitialOverlap = checkInitialOverlap;
function getMargin(element) {
    var style = window.getComputedStyle(element);
    return {
        top: parseInt(style["margin-top"], 10),
        bottom: parseInt(style["margin-bottom"], 10),
        left: parseInt(style["margin-left"], 10),
        right: parseInt(style["margin-right"], 10)
    };
}
exports.getMargin = getMargin;
function getPaddingAndBorder(element) {
    var style = window.getComputedStyle(element);
    return {
        top: parseInt(style["padding-top"], 10) + parseInt(style["border-top-width"], 10),
        bottom: parseInt(style["padding-bottom"], 10) + parseInt(style["border-bottom-width"], 10),
        left: parseInt(style["padding-left"], 10) + parseInt(style["border-left-width"], 10),
        right: parseInt(style["padding-right"], 10) + parseInt(style["border-right-width"], 10)
    };
}
exports.getPaddingAndBorder = getPaddingAndBorder;
function translateThumbs(elements, offsets, rtl) {
    var inverter = rtl ? -1 : 1;
    elements.forEach(function(element, index) {
        return translate(element, inverter * offsets[index].x, offsets[index].y);
    });
}
exports.translateThumbs = translateThumbs;
/**
 * Util function for calculating the index of the thumb that is closes to a given position
 * @param thumbs - array of Thumb element to calculate the distance from
 * @param clientX - target x position (mouse/touch)
 * @param clientY - target y position (mouse/touch)
 * @param direction - the direction of the track
 */ function getClosestThumbIndex(thumbs, clientX, clientY, direction) {
    var thumbIndex = 0;
    var minThumbDistance = getThumbDistance(thumbs[0], clientX, clientY, direction);
    for(var i = 1; i < thumbs.length; i++){
        var thumbDistance = getThumbDistance(thumbs[i], clientX, clientY, direction);
        if (thumbDistance < minThumbDistance) {
            minThumbDistance = thumbDistance;
            thumbIndex = i;
        }
    }
    return thumbIndex;
}
exports.getClosestThumbIndex = getClosestThumbIndex;
function translate(element, x, y) {
    element.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
}
exports.translate = translate;
// adapted from https://github.com/alexreardon/raf-schd
var schd = function(fn) {
    var lastArgs = [];
    var frameId = null;
    var wrapperFn = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        lastArgs = args;
        if (frameId) {
            return;
        }
        frameId = requestAnimationFrame(function() {
            frameId = null;
            fn.apply(void 0, lastArgs);
        });
    };
    return wrapperFn;
};
exports.schd = schd;
function replaceAt(values, index, value) {
    var ret = values.slice(0);
    ret[index] = value;
    return ret;
}
exports.replaceAt = replaceAt;
function getTrackBackground(_a) {
    var values = _a.values, colors = _a.colors, min = _a.min, max = _a.max, _b = _a.direction, direction = _b === void 0 ? types_1.Direction.Right : _b, _c = _a.rtl, rtl = _c === void 0 ? false : _c;
    if (rtl && direction === types_1.Direction.Right) {
        direction = types_1.Direction.Left;
    } else if (rtl && types_1.Direction.Left) {
        direction = types_1.Direction.Right;
    }
    // sort values ascending
    var progress = values.slice(0).sort(function(a, b) {
        return a - b;
    }).map(function(value) {
        return (value - min) / (max - min) * 100;
    });
    var middle = progress.reduce(function(acc, point, index) {
        return "".concat(acc, ", ").concat(colors[index], " ").concat(point, "%, ").concat(colors[index + 1], " ").concat(point, "%");
    }, "");
    return "linear-gradient(".concat(direction, ", ").concat(colors[0], " 0%").concat(middle, ", ").concat(colors[colors.length - 1], " 100%)");
}
exports.getTrackBackground = getTrackBackground;
function voidFn() {}
exports.voidFn = voidFn;
function assertUnreachable(x) {
    throw new Error("Didn't expect to get here");
}
exports.assertUnreachable = assertUnreachable;
/**
 * Util function for grabbing the true largest width of a thumb
 * including the label
 * @param thumbEl - Thumb element to grab the largest width from
 * @param value - Thumb value, not label value
 * @param separator - Label separator value
 */ var getThumbWidth = function(thumbEl, value, separator, decimalPlaces, valueToLabel) {
    if (valueToLabel === void 0) {
        valueToLabel = function(value) {
            return value;
        };
    }
    var width = Math.ceil(__spreadArray([
        thumbEl
    ], Array.from(thumbEl.children), true).reduce(function(width, el) {
        var elWidth = Math.ceil(el.getBoundingClientRect().width);
        /**
         * If a label contains a merged label value, it won't return the true
         * label width for that Thumb. Clone the label and change the value
         * to that individual Thumb value in order to grab the true width.
         */ if (el.innerText && el.innerText.includes(separator) && el.childElementCount === 0) {
            var elClone = el.cloneNode(true);
            elClone.innerHTML = valueToLabel(value.toFixed(decimalPlaces));
            elClone.style.visibility = "hidden";
            document.body.appendChild(elClone);
            elWidth = Math.ceil(elClone.getBoundingClientRect().width);
            document.body.removeChild(elClone);
        }
        return elWidth > width ? elWidth : width;
    }, thumbEl.getBoundingClientRect().width));
    return width;
};
/**
 * Bulk of logic for thumb overlaps
 * Consider a scenario with 5 thumbs;
 * Thumb 1 overlaps with thumb 0 and thumb 2
 * Thumb 2 overlaps with thumb 3
 * We need an array that contains [0, 1, 2, 3]
 * The function needs to return the directly overlapping thumbs
 * and all thumbs overlapping linked to those and so on
 * @param index - Thumb index calculating overlaps for
 * @param offsets - Current Array of Thumb offsets for Range
 * @param thumbs - Array of Thumb elements
 * @param values - Array of Thumb values
 * @param separator - String separator for merged label values
 * @returns overlaps - Array of all overlapping thumbs from the index
 */ var getOverlaps = function(index, offsets, thumbs, values, separator, decimalPlaces, valueToLabel) {
    if (valueToLabel === void 0) {
        valueToLabel = function(value) {
            return value;
        };
    }
    var overlaps = [];
    /**
     * Recursive function for building the overlaps Array
     * If an overlap is found, find the overlaps for that overlap
     * @param thumbIndex current Thumb index to find overlaps from
     */ var buildOverlaps = function(thumbIndex) {
        var thumbXWidth = getThumbWidth(thumbs[thumbIndex], values[thumbIndex], separator, decimalPlaces, valueToLabel);
        var thumbX = offsets[thumbIndex].x;
        /**
         * Iterate through the Thumb offsets, if there is a match
         * add the thumbIndex and siblingIndex to the overlaps Array
         *
         * Then build overlaps from the overlapping siblingIndex
         */ offsets.forEach(function(_a, siblingIndex) {
            var siblingX = _a.x;
            var siblingWidth = getThumbWidth(thumbs[siblingIndex], values[siblingIndex], separator, decimalPlaces, valueToLabel);
            if (thumbIndex !== siblingIndex && (thumbX >= siblingX && thumbX <= siblingX + siblingWidth || thumbX + thumbXWidth >= siblingX && thumbX + thumbXWidth <= siblingX + siblingWidth)) {
                if (!overlaps.includes(siblingIndex)) {
                    overlaps.push(thumbIndex);
                    overlaps.push(siblingIndex);
                    overlaps = __spreadArray(__spreadArray([], overlaps, true), [
                        thumbIndex,
                        siblingIndex
                    ], false);
                    buildOverlaps(siblingIndex);
                }
            }
        });
    };
    buildOverlaps(index);
    // Sort and remove duplicates from the built overlaps
    return Array.from(new Set(overlaps.sort()));
};
/**
 * A custom React Hook for calculating whether a thumb overlaps
 * another and whether labels could/should merge.
 * @param rangeRef - React ref value of Range component
 * @param values - current Range values Array
 * @param index - thumb index
 * @param step - step value, used to calculate the number of decimal places
 * @param separator - string to separate thumb values
 * @returns label value + styling for thumb label
 */ var useThumbOverlap = function(rangeRef, values, index, step, separator, valueToLabel) {
    if (step === void 0) {
        step = 0.1;
    }
    if (separator === void 0) {
        separator = " - ";
    }
    if (valueToLabel === void 0) {
        valueToLabel = function(value) {
            return value;
        };
    }
    var decimalPlaces = (0, exports.getStepDecimals)(step);
    // Create initial label style and value. Label value defaults to thumb value
    var _a = (0, react_1.useState)({}), labelStyle = _a[0], setLabelStyle = _a[1];
    var _b = (0, react_1.useState)(valueToLabel(values[index].toFixed(decimalPlaces))), labelValue = _b[0], setLabelValue = _b[1];
    // When the rangeRef or values change, update the Thumb label values and styling
    (0, react_1.useEffect)(function() {
        if (rangeRef) {
            var thumbs = rangeRef.getThumbs();
            if (thumbs.length < 1) return;
            var newStyle = {};
            var offsets_1 = rangeRef.getOffsets();
            /**
             * Get any overlaps for the given Thumb index. This must return all linked
             * Thumbs. So if there are 4 Thumbs and Thumbs 2, 3 and 4 overlap. If we are
             * getting the overlaps for Thumb 1 and it overlaps only Thumb 2, we must get
             * 2, 3 and 4 also.
             */ var overlaps = getOverlaps(index, offsets_1, thumbs, values, separator, decimalPlaces, valueToLabel);
            // Set a default label value of the Thumb value
            var labelValue_1 = valueToLabel(values[index].toFixed(decimalPlaces));
            /**
             * If there are overlaps for the Thumb, we need to calculate the correct
             * Label value along with the relevant styling. We only want to show a Label
             * for the left most Thumb in an overlapping set.
             * All other Thumbs will be set to display: none.
             */ if (overlaps.length) {
                /**
                 * Get an Array of the offsets for the overlapping Thumbs
                 * This is so we can determine if the Thumb we are looking at
                 * is the left most thumb in an overlapping set
                 */ var offsetsX = overlaps.reduce(function(a, c, i, s) {
                    return a.length ? __spreadArray(__spreadArray([], a, true), [
                        offsets_1[s[i]].x
                    ], false) : [
                        offsets_1[s[i]].x
                    ];
                }, []);
                /**
                 * If our Thumb is the left most Thumb, we can build a Label value
                 * and set the style for that Label
                 */ if (Math.min.apply(Math, offsetsX) === offsets_1[index].x) {
                    /**
                     * First calculate the Label value. To do this,
                     * grab all the values for the Thumbs in our overlaps.
                     * Then convert that to a Set and sort it whilst removing duplicates.
                     */ var labelValues_1 = [];
                    overlaps.forEach(function(thumb) {
                        labelValues_1.push(values[thumb].toFixed(decimalPlaces));
                    });
                    /**
                     *  Update the labelValue with the resulting Array
                     *  joined by our defined separator
                     */ labelValue_1 = Array.from(new Set(labelValues_1.sort(function(a, b) {
                        return parseFloat(a) - parseFloat(b);
                    }))).map(valueToLabel).join(separator);
                    /**
                     * Lastly, build the label styling. The label styling will
                     * position the label and apply a transform so that it's centered.
                     * We want the center point between the left edge of the left most Thumb
                     * and the right edge of the right most Thumb.
                     */ var first = Math.min.apply(Math, offsetsX);
                    var last = Math.max.apply(Math, offsetsX);
                    var lastWidth = thumbs[overlaps[offsetsX.indexOf(last)]].getBoundingClientRect().width;
                    newStyle.left = "".concat(Math.abs(first - (last + lastWidth)) / 2, "px");
                    newStyle.transform = "translate(-50%, 0)";
                } else {
                    // If the Thumb isn't the left most Thumb, hide the Label!
                    newStyle.visibility = "hidden";
                }
            }
            // Update the label value and style
            setLabelValue(labelValue_1);
            setLabelStyle(newStyle);
        }
    }, [
        rangeRef,
        values
    ]);
    return [
        labelValue,
        labelStyle
    ];
};
exports.useThumbOverlap = useThumbOverlap;
/**
 * Util function for calculating the distance of the center of a thumb
 * form a given mouse/touch target's position
 * @param thumbEl - Thumb element to calculate the distance from
 * @param clientX - target x position (mouse/touch)
 * @param clientY - target y position (mouse/touch)
 * @param direction - the direction of the track
 */ function getThumbDistance(thumbEl, clientX, clientY, direction) {
    var _a = thumbEl.getBoundingClientRect(), left = _a.left, top = _a.top, width = _a.width, height = _a.height;
    return isVertical(direction) ? Math.abs(clientY - (top + height / 2)) : Math.abs(clientX - (left + width / 2));
}
var isIOS = function() {
    var _a;
    // @ts-ignore
    var platform = ((_a = navigator.userAgentData) === null || _a === void 0 ? void 0 : _a.platform) || navigator.platform;
    return [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod"
    ].includes(platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
};
exports.isIOS = isIOS;
}}),
"[project]/node_modules/react-range/lib/Range.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var React = __importStar(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
var utils_1 = __turbopack_context__.r("[project]/node_modules/react-range/lib/utils.js [app-ssr] (ecmascript)");
var types_1 = __turbopack_context__.r("[project]/node_modules/react-range/lib/types.js [app-ssr] (ecmascript)");
var INCREASE_KEYS = [
    "ArrowRight",
    "ArrowUp",
    "k",
    "PageUp"
];
var DECREASE_KEYS = [
    "ArrowLeft",
    "ArrowDown",
    "j",
    "PageDown"
];
var Range = function(_super) {
    __extends(Range, _super);
    function Range(props) {
        var _this = _super.call(this, props) || this;
        _this.trackRef = React.createRef();
        _this.thumbRefs = [];
        _this.state = {
            draggedTrackPos: [
                -1,
                -1
            ],
            draggedThumbIndex: -1,
            thumbZIndexes: new Array(_this.props.values.length).fill(0).map(function(t, i) {
                return i;
            }),
            isChanged: false,
            markOffsets: []
        };
        _this.getOffsets = function() {
            var _a = _this.props, direction = _a.direction, values = _a.values, min = _a.min, max = _a.max;
            var trackElement = _this.trackRef.current;
            if (!trackElement) {
                console.warn("No track element found.");
                return [];
            }
            var trackRect = trackElement.getBoundingClientRect();
            var trackPadding = (0, utils_1.getPaddingAndBorder)(trackElement);
            return _this.getThumbs().map(function(thumb, index) {
                var thumbOffsets = {
                    x: 0,
                    y: 0
                };
                var thumbRect = thumb.getBoundingClientRect();
                var thumbMargins = (0, utils_1.getMargin)(thumb);
                switch(direction){
                    case types_1.Direction.Right:
                        thumbOffsets.x = (thumbMargins.left + trackPadding.left) * -1;
                        thumbOffsets.y = ((thumbRect.height - trackRect.height) / 2 + trackPadding.top) * -1;
                        thumbOffsets.x += trackRect.width * (0, utils_1.relativeValue)(values[index], min, max) - thumbRect.width / 2;
                        return thumbOffsets;
                    case types_1.Direction.Left:
                        thumbOffsets.x = (thumbMargins.right + trackPadding.right) * -1;
                        thumbOffsets.y = ((thumbRect.height - trackRect.height) / 2 + trackPadding.top) * -1;
                        thumbOffsets.x += trackRect.width - trackRect.width * (0, utils_1.relativeValue)(values[index], min, max) - thumbRect.width / 2;
                        return thumbOffsets;
                    case types_1.Direction.Up:
                        thumbOffsets.x = ((thumbRect.width - trackRect.width) / 2 + thumbMargins.left + trackPadding.left) * -1;
                        thumbOffsets.y = -trackPadding.left;
                        thumbOffsets.y += trackRect.height - trackRect.height * (0, utils_1.relativeValue)(values[index], min, max) - thumbRect.height / 2;
                        return thumbOffsets;
                    case types_1.Direction.Down:
                        thumbOffsets.x = ((thumbRect.width - trackRect.width) / 2 + thumbMargins.left + trackPadding.left) * -1;
                        thumbOffsets.y = -trackPadding.left;
                        thumbOffsets.y += trackRect.height * (0, utils_1.relativeValue)(values[index], min, max) - thumbRect.height / 2;
                        return thumbOffsets;
                    default:
                        return (0, utils_1.assertUnreachable)(direction);
                }
            });
        };
        _this.getThumbs = function() {
            if (_this.trackRef && _this.trackRef.current) {
                return Array.from(_this.trackRef.current.children).filter(function(el) {
                    return el.hasAttribute("aria-valuenow");
                });
            }
            console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?");
            return [];
        };
        _this.getTargetIndex = function(e) {
            return _this.getThumbs().findIndex(function(child) {
                return child === e.target || child.contains(e.target);
            });
        };
        _this.addTouchEvents = function(e) {
            document.addEventListener("touchmove", _this.schdOnTouchMove, {
                passive: false
            });
            document.addEventListener("touchend", _this.schdOnEnd, {
                passive: false
            });
            document.addEventListener("touchcancel", _this.schdOnEnd, {
                passive: false
            });
        };
        _this.addMouseEvents = function(e) {
            document.addEventListener("mousemove", _this.schdOnMouseMove);
            document.addEventListener("mouseup", _this.schdOnEnd);
        };
        _this.onMouseDownTrack = function(e) {
            var _a;
            if (e.button !== 0 || (0, utils_1.isIOS)()) return;
            e.persist();
            e.preventDefault();
            _this.addMouseEvents(e.nativeEvent);
            if (_this.props.values.length > 1 && _this.props.draggableTrack) {
                if (_this.thumbRefs.some(function(thumbRef) {
                    var _a;
                    return (_a = thumbRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target);
                })) return;
                // handle dragging the whole track
                _this.setState({
                    draggedTrackPos: [
                        e.clientX,
                        e.clientY
                    ]
                }, function() {
                    return _this.onMove(e.clientX, e.clientY);
                });
            } else {
                // get the index of the thumb that is closest to the place where the track is clicked
                var draggedThumbIndex = (0, utils_1.getClosestThumbIndex)(_this.thumbRefs.map(function(t) {
                    return t.current;
                }), e.clientX, e.clientY, _this.props.direction);
                // move the thumb which is closest to the place where the track is clicked
                (_a = _this.thumbRefs[draggedThumbIndex].current) === null || _a === void 0 ? void 0 : _a.focus();
                _this.setState({
                    draggedThumbIndex: draggedThumbIndex
                }, function() {
                    return _this.onMove(e.clientX, e.clientY);
                });
            }
        };
        _this.onResize = function() {
            (0, utils_1.translateThumbs)(_this.getThumbs(), _this.getOffsets(), _this.props.rtl);
            _this.calculateMarkOffsets();
        };
        _this.onTouchStartTrack = function(e) {
            var _a;
            e.persist();
            _this.addTouchEvents(e.nativeEvent);
            if (_this.props.values.length > 1 && _this.props.draggableTrack) {
                if (_this.thumbRefs.some(function(thumbRef) {
                    var _a;
                    return (_a = thumbRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target);
                })) return;
                // handle dragging the whole track
                _this.setState({
                    draggedTrackPos: [
                        e.touches[0].clientX,
                        e.touches[0].clientY
                    ]
                }, function() {
                    return _this.onMove(e.touches[0].clientX, e.touches[0].clientY);
                });
            } else {
                // get the index of the thumb that is closest to the place where the track is clicked
                var draggedThumbIndex = (0, utils_1.getClosestThumbIndex)(_this.thumbRefs.map(function(t) {
                    return t.current;
                }), e.touches[0].clientX, e.touches[0].clientY, _this.props.direction);
                // move the thumb which is closest to the place where the track is clicked
                (_a = _this.thumbRefs[draggedThumbIndex].current) === null || _a === void 0 ? void 0 : _a.focus();
                _this.setState({
                    draggedThumbIndex: draggedThumbIndex
                }, function() {
                    return _this.onMove(e.touches[0].clientX, e.touches[0].clientY);
                });
            }
        };
        _this.onMouseOrTouchStart = function(e) {
            if (_this.props.disabled) return;
            var isTouch = (0, utils_1.isTouchEvent)(e);
            if (!isTouch && e.button !== 0) return;
            var index = _this.getTargetIndex(e);
            if (index === -1) return;
            if (isTouch) {
                _this.addTouchEvents(e);
            } else {
                _this.addMouseEvents(e);
            }
            _this.setState({
                draggedThumbIndex: index,
                thumbZIndexes: _this.state.thumbZIndexes.map(function(t, i) {
                    if (i === index) {
                        return Math.max.apply(Math, _this.state.thumbZIndexes);
                    }
                    return t <= _this.state.thumbZIndexes[index] ? t : t - 1;
                })
            });
        };
        _this.onMouseMove = function(e) {
            e.preventDefault();
            _this.onMove(e.clientX, e.clientY);
        };
        _this.onTouchMove = function(e) {
            e.preventDefault();
            _this.onMove(e.touches[0].clientX, e.touches[0].clientY);
        };
        _this.onKeyDown = function(e) {
            var _a = _this.props, values = _a.values, onChange = _a.onChange, step = _a.step, rtl = _a.rtl, direction = _a.direction;
            var isChanged = _this.state.isChanged;
            var index = _this.getTargetIndex(e.nativeEvent);
            var inverter = rtl || direction === types_1.Direction.Left || direction === types_1.Direction.Down ? -1 : 1;
            if (index === -1) return;
            if (INCREASE_KEYS.includes(e.key)) {
                e.preventDefault();
                _this.setState({
                    draggedThumbIndex: index,
                    isChanged: true
                });
                onChange((0, utils_1.replaceAt)(values, index, _this.normalizeValue(values[index] + inverter * (e.key === "PageUp" ? step * 10 : step), index)));
            } else if (DECREASE_KEYS.includes(e.key)) {
                e.preventDefault();
                _this.setState({
                    draggedThumbIndex: index,
                    isChanged: true
                });
                onChange((0, utils_1.replaceAt)(values, index, _this.normalizeValue(values[index] - inverter * (e.key === "PageDown" ? step * 10 : step), index)));
            } else if (e.key === "Tab") {
                _this.setState({
                    draggedThumbIndex: -1
                }, function() {
                    // If key pressed when thumb was moving, fire onFinalChange
                    if (isChanged) {
                        _this.fireOnFinalChange();
                    }
                });
            } else {
                if (isChanged) {
                    _this.fireOnFinalChange();
                }
            }
        };
        _this.onKeyUp = function(e) {
            var isChanged = _this.state.isChanged;
            _this.setState({
                draggedThumbIndex: -1
            }, function() {
                if (isChanged) {
                    _this.fireOnFinalChange();
                }
            });
        };
        _this.onMove = function(clientX, clientY) {
            var _a = _this.state, draggedThumbIndex = _a.draggedThumbIndex, draggedTrackPos = _a.draggedTrackPos;
            var _b = _this.props, direction = _b.direction, min = _b.min, max = _b.max, onChange = _b.onChange, values = _b.values, step = _b.step, rtl = _b.rtl;
            if (draggedThumbIndex === -1 && draggedTrackPos[0] === -1 && draggedTrackPos[1] === -1) return null;
            var trackElement = _this.trackRef.current;
            // If component was closed down prematurely, A last onMove could be triggered based on requestAnimationFrame()
            if (!trackElement) return null;
            var trackRect = trackElement.getBoundingClientRect();
            var trackLength = (0, utils_1.isVertical)(direction) ? trackRect.height : trackRect.width;
            if (draggedTrackPos[0] !== -1 && draggedTrackPos[1] !== -1) {
                // calculate how much it moved since the last update
                var dX = clientX - draggedTrackPos[0];
                var dY = clientY - draggedTrackPos[1];
                // calculate the delta of the value
                var deltaValue = 0;
                switch(direction){
                    case types_1.Direction.Right:
                    case types_1.Direction.Left:
                        deltaValue = dX / trackLength * (max - min);
                        break;
                    case types_1.Direction.Down:
                    case types_1.Direction.Up:
                        deltaValue = dY / trackLength * (max - min);
                        break;
                    default:
                        (0, utils_1.assertUnreachable)(direction);
                }
                // invert for RTL
                if (rtl) {
                    deltaValue *= -1;
                }
                if (Math.abs(deltaValue) >= step / 2) {
                    // adjust delta so it fits into the range
                    for(var i = 0; i < _this.thumbRefs.length; i++){
                        if (values[i] === max && Math.sign(deltaValue) === 1 || values[i] === min && Math.sign(deltaValue) === -1) return;
                        var thumbValue = values[i] + deltaValue;
                        if (thumbValue > max) deltaValue = max - values[i];
                        else if (thumbValue < min) deltaValue = min - values[i];
                    }
                    // add the delta to each thumb
                    var newValues = values.slice(0);
                    for(var i = 0; i < _this.thumbRefs.length; i++){
                        newValues = (0, utils_1.replaceAt)(newValues, i, _this.normalizeValue(values[i] + deltaValue, i));
                    }
                    _this.setState({
                        draggedTrackPos: [
                            clientX,
                            clientY
                        ]
                    });
                    onChange(newValues);
                }
            } else {
                var newValue = 0;
                switch(direction){
                    case types_1.Direction.Right:
                        newValue = (clientX - trackRect.left) / trackLength * (max - min) + min;
                        break;
                    case types_1.Direction.Left:
                        newValue = (trackLength - (clientX - trackRect.left)) / trackLength * (max - min) + min;
                        break;
                    case types_1.Direction.Down:
                        newValue = (clientY - trackRect.top) / trackLength * (max - min) + min;
                        break;
                    case types_1.Direction.Up:
                        newValue = (trackLength - (clientY - trackRect.top)) / trackLength * (max - min) + min;
                        break;
                    default:
                        (0, utils_1.assertUnreachable)(direction);
                }
                // invert for RTL
                if (rtl) {
                    newValue = max + min - newValue;
                }
                if (Math.abs(values[draggedThumbIndex] - newValue) >= step / 2) {
                    onChange((0, utils_1.replaceAt)(values, draggedThumbIndex, _this.normalizeValue(newValue, draggedThumbIndex)));
                }
            }
        };
        _this.normalizeValue = function(value, index) {
            var _a = _this.props, min = _a.min, max = _a.max, step = _a.step, allowOverlap = _a.allowOverlap, values = _a.values;
            return (0, utils_1.normalizeValue)(value, index, min, max, step, allowOverlap, values);
        };
        _this.onEnd = function(e) {
            e.preventDefault();
            document.removeEventListener("mousemove", _this.schdOnMouseMove);
            document.removeEventListener("touchmove", _this.schdOnTouchMove);
            document.removeEventListener("mouseup", _this.schdOnEnd);
            document.removeEventListener("touchend", _this.schdOnEnd);
            document.removeEventListener("touchcancel", _this.schdOnEnd);
            if (_this.state.draggedThumbIndex === -1 && _this.state.draggedTrackPos[0] === -1 && _this.state.draggedTrackPos[1] === -1) return null;
            _this.setState({
                draggedThumbIndex: -1,
                draggedTrackPos: [
                    -1,
                    -1
                ]
            }, function() {
                _this.fireOnFinalChange();
            });
        };
        _this.fireOnFinalChange = function() {
            _this.setState({
                isChanged: false
            });
            var _a = _this.props, onFinalChange = _a.onFinalChange, values = _a.values;
            if (onFinalChange) {
                onFinalChange(values);
            }
        };
        _this.updateMarkRefs = function(props) {
            if (!props.renderMark) {
                // don't create mark refs unless we are rendering marks
                _this.numOfMarks = undefined;
                _this.markRefs = undefined;
                return;
            }
            _this.numOfMarks = (props.max - props.min) / _this.props.step;
            _this.markRefs = [];
            for(var i = 0; i < _this.numOfMarks + 1; i++){
                _this.markRefs[i] = React.createRef();
            }
        };
        _this.calculateMarkOffsets = function() {
            if (!_this.props.renderMark || !_this.trackRef || !_this.numOfMarks || !_this.markRefs || _this.trackRef.current === null) return;
            var elStyles = window.getComputedStyle(_this.trackRef.current);
            var trackWidth = parseInt(elStyles.width, 10);
            var trackHeight = parseInt(elStyles.height, 10);
            var paddingLeft = parseInt(elStyles.paddingLeft, 10);
            var paddingTop = parseInt(elStyles.paddingTop, 10);
            var res = [];
            for(var i = 0; i < _this.numOfMarks + 1; i++){
                var markHeight = 9999;
                var markWidth = 9999;
                if (_this.markRefs[i].current) {
                    var markRect = _this.markRefs[i].current.getBoundingClientRect();
                    markHeight = markRect.height;
                    markWidth = markRect.width;
                }
                if (_this.props.direction === types_1.Direction.Left || _this.props.direction === types_1.Direction.Right) {
                    res.push([
                        Math.round(trackWidth / _this.numOfMarks * i + paddingLeft - markWidth / 2),
                        -Math.round((markHeight - trackHeight) / 2)
                    ]);
                } else {
                    res.push([
                        Math.round(trackHeight / _this.numOfMarks * i + paddingTop - markHeight / 2),
                        -Math.round((markWidth - trackWidth) / 2)
                    ]);
                }
            }
            _this.setState({
                markOffsets: res
            });
        };
        if (props.step === 0) {
            throw new Error('"step" property should be a positive number');
        }
        _this.schdOnMouseMove = (0, utils_1.schd)(_this.onMouseMove);
        _this.schdOnTouchMove = (0, utils_1.schd)(_this.onTouchMove);
        _this.schdOnEnd = (0, utils_1.schd)(_this.onEnd);
        _this.thumbRefs = props.values.map(function() {
            return React.createRef();
        });
        _this.updateMarkRefs(props);
        return _this;
    }
    Range.prototype.componentDidMount = function() {
        var _this = this;
        var _a = this.props, values = _a.values, min = _a.min, step = _a.step;
        this.resizeObserver = window.ResizeObserver ? new window.ResizeObserver(this.onResize) : {
            observe: function() {
                return window.addEventListener("resize", _this.onResize);
            },
            unobserve: function() {
                return window.removeEventListener("resize", _this.onResize);
            }
        };
        document.addEventListener("touchstart", this.onMouseOrTouchStart, {
            passive: false
        });
        document.addEventListener("mousedown", this.onMouseOrTouchStart, {
            passive: false
        });
        !this.props.allowOverlap && (0, utils_1.checkInitialOverlap)(this.props.values);
        this.props.values.forEach(function(value) {
            return (0, utils_1.checkBoundaries)(value, _this.props.min, _this.props.max);
        });
        this.resizeObserver.observe(this.trackRef.current);
        (0, utils_1.translateThumbs)(this.getThumbs(), this.getOffsets(), this.props.rtl);
        this.calculateMarkOffsets();
        values.forEach(function(value) {
            if (!(0, utils_1.isStepDivisible)(min, value, step)) {
                console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.");
            }
        });
    };
    Range.prototype.componentDidUpdate = function(prevProps, prevState) {
        var _a = this.props, max = _a.max, min = _a.min, step = _a.step, values = _a.values, rtl = _a.rtl;
        if (prevProps.max !== max || prevProps.min !== min || prevProps.step !== step) {
            this.updateMarkRefs(this.props);
        }
        (0, utils_1.translateThumbs)(this.getThumbs(), this.getOffsets(), rtl);
        // ensure offsets are calculated when the refs for the marks have been created
        // and those refs have been mounted to the dom
        // on the state update in calculateOffsets with new markOffsets are calculated
        if (prevProps.max !== max || prevProps.min !== min || prevProps.step !== step || prevState.markOffsets.length !== this.state.markOffsets.length) {
            this.calculateMarkOffsets();
            values.forEach(function(value) {
                if (!(0, utils_1.isStepDivisible)(min, value, step)) {
                    console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.");
                }
            });
        }
    };
    Range.prototype.componentWillUnmount = function() {
        var options = {
            passive: false
        };
        document.removeEventListener("mousedown", this.onMouseOrTouchStart, options);
        // These need to be removed!!
        document.removeEventListener("mousemove", this.schdOnMouseMove);
        document.removeEventListener("touchmove", this.schdOnTouchMove);
        document.removeEventListener("touchstart", this.onMouseOrTouchStart);
        document.removeEventListener("mouseup", this.schdOnEnd);
        document.removeEventListener("touchend", this.schdOnEnd);
        this.resizeObserver.unobserve(this.trackRef.current);
    };
    Range.prototype.render = function() {
        var _this = this;
        var _a = this.props, label = _a.label, labelledBy = _a.labelledBy, renderTrack = _a.renderTrack, renderThumb = _a.renderThumb, _b = _a.renderMark, renderMark = _b === void 0 ? function() {
            return null;
        } : _b, values = _a.values, min = _a.min, max = _a.max, allowOverlap = _a.allowOverlap, disabled = _a.disabled;
        var _c = this.state, draggedThumbIndex = _c.draggedThumbIndex, thumbZIndexes = _c.thumbZIndexes, markOffsets = _c.markOffsets;
        return renderTrack({
            props: {
                style: {
                    // creates stacking context that prevents z-index applied to thumbs
                    // interfere with other elements
                    transform: "scale(1)",
                    cursor: draggedThumbIndex > -1 ? "grabbing" : this.props.draggableTrack ? (0, utils_1.isVertical)(this.props.direction) ? "ns-resize" : "ew-resize" : values.length === 1 && !disabled ? "pointer" : "inherit"
                },
                onMouseDown: disabled ? utils_1.voidFn : this.onMouseDownTrack,
                onTouchStart: disabled ? utils_1.voidFn : this.onTouchStartTrack,
                ref: this.trackRef
            },
            isDragged: this.state.draggedThumbIndex > -1,
            disabled: disabled,
            children: __spreadArray(__spreadArray([], markOffsets.map(function(offset, index, arr) {
                return renderMark({
                    props: {
                        style: _this.props.direction === types_1.Direction.Left || _this.props.direction === types_1.Direction.Right ? {
                            position: "absolute",
                            left: "".concat(offset[0], "px"),
                            marginTop: "".concat(offset[1], "px")
                        } : {
                            position: "absolute",
                            top: "".concat(offset[0], "px"),
                            marginLeft: "".concat(offset[1], "px")
                        },
                        key: "mark".concat(index),
                        ref: _this.markRefs[index]
                    },
                    index: index
                });
            }), true), values.map(function(value, index) {
                var isDragged = _this.state.draggedThumbIndex === index;
                return renderThumb({
                    index: index,
                    value: value,
                    isDragged: isDragged,
                    props: {
                        style: {
                            position: "absolute",
                            zIndex: thumbZIndexes[index],
                            cursor: disabled ? "inherit" : isDragged ? "grabbing" : "grab",
                            userSelect: "none",
                            touchAction: "none",
                            WebkitUserSelect: "none",
                            MozUserSelect: "none",
                            msUserSelect: "none"
                        },
                        key: index,
                        tabIndex: disabled ? undefined : 0,
                        "aria-valuemax": allowOverlap ? max : values[index + 1] || max,
                        "aria-valuemin": allowOverlap ? min : values[index - 1] || min,
                        "aria-valuenow": value,
                        draggable: false,
                        ref: _this.thumbRefs[index],
                        "aria-label": label,
                        "aria-labelledby": labelledBy,
                        role: "slider",
                        onKeyDown: disabled ? utils_1.voidFn : _this.onKeyDown,
                        onKeyUp: disabled ? utils_1.voidFn : _this.onKeyUp
                    }
                });
            }), true)
        });
    };
    Range.defaultProps = {
        label: "Accessibility label",
        labelledBy: null,
        step: 1,
        direction: types_1.Direction.Right,
        rtl: false,
        disabled: false,
        allowOverlap: false,
        draggableTrack: false,
        min: 0,
        max: 100
    };
    return Range;
}(React.Component);
exports.default = Range;
}}),
"[project]/node_modules/react-range/lib/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkValuesAgainstBoundaries = exports.relativeValue = exports.useThumbOverlap = exports.Direction = exports.getTrackBackground = exports.Range = void 0;
var Range_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/react-range/lib/Range.js [app-ssr] (ecmascript)"));
exports.Range = Range_1.default;
var utils_1 = __turbopack_context__.r("[project]/node_modules/react-range/lib/utils.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getTrackBackground", {
    enumerable: true,
    get: function() {
        return utils_1.getTrackBackground;
    }
});
Object.defineProperty(exports, "useThumbOverlap", {
    enumerable: true,
    get: function() {
        return utils_1.useThumbOverlap;
    }
});
Object.defineProperty(exports, "relativeValue", {
    enumerable: true,
    get: function() {
        return utils_1.relativeValue;
    }
});
Object.defineProperty(exports, "checkValuesAgainstBoundaries", {
    enumerable: true,
    get: function() {
        return utils_1.checkValuesAgainstBoundaries;
    }
});
var types_1 = __turbopack_context__.r("[project]/node_modules/react-range/lib/types.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Direction", {
    enumerable: true,
    get: function() {
        return types_1.Direction;
    }
});
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0bc86d32._.js.map