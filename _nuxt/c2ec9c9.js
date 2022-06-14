(window.webpackJsonp = window.webpackJsonp || []).push([
    [28], {
        289: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = {
                    data: function() {
                        return {
                            premium: [{
                                name: "Premium - Tier 1",
                                price: "$3.49",
                                features: ["Can be activated in 1 server", "A powerful anti spam", "Anti ghost-ping", "Anti mention", "Anti webhook creation", "Channel & Role recovery"]
                            }, {
                                name: "Premium - Tier 2",
                                price: "$5.99",
                                features: ["Can be activated in 2 servers", "A powerful anti spam", "Anti ghost-ping", "Anti mention", "Anti webhook creation", "Channel & Role recovery"]
                            }, {
                                name: "Premium - Tier 3",
                                price: "$13.99",
                                features: ["Can be activated in 5 servers", "A powerful anti spam", "Anti ghost-ping", "Anti mention", "Anti webhook creation", "Channel & Role recovery"]
                            }],
                            premiumPlus: [{
                                price: "$12.00",
                                name: "Premium Plus - Tier 1",
                                features: ["Can be added to 1 server", "Custom bot name, avatar and status", "A powerful anti spam", "Anti ghost-ping", "Anti mention", "Anti webhook creation", "Channel & Role recovery"]
                            }, {
                                price: "$15.00",
                                name: "Premium Plus - Tier 2",
                                features: ["Can be added to 2 servers", "Custom bot name, avatar and status", "A powerful anti spam", "Anti ghost-ping", "Anti mention", "Anti webhook creation", "Channel & Role recovery"]
                            }, {
                                price: "$22.00",
                                name: "Premium Plus - Tier 3",
                                features: ["Can be added to 5 server", "Custom bot name, avatar and status", "A powerful anti spam", "Anti ghost-ping", "Anti mention", "Anti webhook creation", "Channel & Role recovery"]
                            }]
                        }
                    },
                    head: function() {
                        return {
                            title: "Security Bot | Premium",
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: "Get ultimate nuke protection with the premium version of Security Bot for a price of less than $4."
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: "Security Bot | Premium"
                            }, {
                                hid: "og:url",
                                property: "og:url",
                                content: "https://securitybot.xyz/premium"
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: "Get ultimate nuke protection with the premium version of Security Bot for a price of less than $4."
                            }]
                        }
                    }
                },
                o = n(24),
                component = Object(o.a)(r, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "flex flex-col place-items-center gap-12 py-14"
                    }, [n("h2", {
                        staticClass: "text-4xl font-semibold"
                    }, [e._v("Plans")]), e._v(" "), n("div", {
                        staticClass: "flex flex-row gap-4 justify-center w-full flex-wrap"
                    }, e._l(e.premium, (function(t) {
                        return n("div", {
                            key: t.name,
                            staticClass: "\n        flex flex-col\n        justify-center\n        place-items-center\n        bg-gray-800\n        p-4\n        rounded-xl\n        w-72\n        gap-2\n        h-96\n      "
                        }, [n("h1", {
                            staticClass: "text-center font-semibold text-xl"
                        }, [e._v(e._s(t.name))]), e._v(" "), n("h2", {
                            staticClass: "text-center font-bold text-2xl"
                        }, [e._v("\n        " + e._s(t.price)), n("span", {
                            staticClass: "text-sm font-normal"
                        }, [e._v("/month")])]), e._v(" "), n("div", {
                            staticClass: "flex flex-col justify-center gap-1"
                        }, [n("h2", {
                            staticClass: "font-bold text-xl text-gray-200"
                        }, [e._v("Features:")]), e._v(" "), n("div", {
                            staticClass: "flex flex-col text-md text-gray-300"
                        }, e._l(t.features, (function(t) {
                            return n("p", {
                                key: t
                            }, [e._v("\n            - " + e._s(t) + "\n          ")])
                        })), 0)]), e._v(" "), n("nuxt-link", {
                            staticClass: "p-2 rounded-xl bg-blue-900 mt-auto",
                            attrs: {
                                to: "/patreon"
                            }
                        }, [e._v("Subscribe Now")])], 1)
                    })), 0), e._v(" "), n("div", {
                        staticClass: "flex flex-row gap-4 justify-center w-full flex-wrap"
                    }, e._l(e.premiumPlus, (function(t) {
                        return n("div", {
                            key: t.name,
                            staticClass: "\n        flex flex-col\n        justify-center\n        place-items-center\n        bg-gray-800\n        p-4\n        rounded-xl\n        w-72\n        gap-2\n        h-96\n      "
                        }, [n("h1", {
                            staticClass: "text-center font-semibold text-xl"
                        }, [e._v(e._s(t.name))]), e._v(" "), n("h2", {
                            staticClass: "text-center font-bold text-2xl"
                        }, [e._v("\n        " + e._s(t.price)), n("span", {
                            staticClass: "text-sm font-normal"
                        }, [e._v("/month")])]), e._v(" "), n("div", {
                            staticClass: "flex flex-col justify-center gap-1"
                        }, [n("h2", {
                            staticClass: "font-bold text-xl text-gray-200"
                        }, [e._v("Features:")]), e._v(" "), n("div", {
                            staticClass: "flex flex-col text-md text-gray-300"
                        }, e._l(t.features, (function(t) {
                            return n("p", {
                                key: t
                            }, [e._v("\n            - " + e._s(t) + "\n          ")])
                        })), 0)]), e._v(" "), n("nuxt-link", {
                            staticClass: "p-2 rounded-xl bg-blue-900 mt-auto",
                            attrs: {
                                to: "/patreon"
                            }
                        }, [e._v("Subscribe Now")])], 1)
                    })), 0)])
                }), [], !1, null, null, null);
            t.default = component.exports
        }
    }
]);