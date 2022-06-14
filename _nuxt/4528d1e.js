(window.webpackJsonp = window.webpackJsonp || []).push([
    [30], {
        291: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(2),
                o = (r(25), {
                    fetchOnServer: !1,
                    data: function() {
                        return {
                            loading: !1,
                            shards: null
                        }
                    },
                    methods: {
                        getBorderColor: function(t) {
                            switch (t) {
                                case "DISCONNECTED":
                                    return "border-red-600";
                                case "CONNECTED":
                                    return "border-green-600";
                                default:
                                    return "border-yellow-600"
                            }
                        }
                    },
                    fetch: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            var r;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.loading = !0, e.prev = 1, e.next = 4, t.$axios.get("/v1/stats");
                                    case 4:
                                        r = e.sent, t.shards = r.data, e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), t.$toast.error("Something went wrong while retrieving stats.");
                                    case 11:
                                        t.loading = !1;
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 8]
                            ])
                        })))()
                    },
                    head: function() {
                        return {
                            title: "Security Bot | Stats",
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: "Get real time status of Security Bot's shards, also see the bot lists it uses."
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: "Security Bot | Stats"
                            }, {
                                hid: "og:url",
                                property: "og:url",
                                content: "https://securitybot.xyz/stats"
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: "Get real time status of Security Bot's shards, also see the bot lists it uses."
                            }]
                        }
                    }
                }),
                l = r(24),
                component = Object(l.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "flex flex-col place-items-center gap-8"
                    }, [t._m(0), t._v(" "), r("div", {
                        staticClass: "\n      flex flex-col\n      gap-4\n      bg-black bg-opacity-75\n      place-items-center\n      w-full\n      p-6\n    "
                    }, [r("h2", {
                        staticClass: "text-xl font-semibold"
                    }, [t._v("Shards")]), t._v(" "), r("div", {
                        staticClass: "justify-around flex flex-row flex-wrap gap-6"
                    }, t._l(t.shards, (function(e) {
                        return r("div", {
                            key: e.id,
                            staticClass: "\n          flex flex-row\n          place-items-center\n          justify-center\n          bg-gray-800\n          rounded-xl\n          border\n          p-2\n          w-32\n        ",
                            class: t.getBorderColor(e.status)
                        }, [r("h2", [t._v("Shard #" + t._s(e.id))])])
                    })), 0)]), t._v(" "), t.loading ? r("Loading") : t._e()], 1)
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "\n      flex flex-col\n      gap-4\n      bg-black bg-opacity-75\n      place-items-center\n      w-full\n      p-6\n    "
                    }, [r("h2", {
                        staticClass: "text-xl font-semibold"
                    }, [t._v("Bot Lists")]), t._v(" "), r("div", {
                        staticClass: "justify-around flex flex-row flex-wrap gap-6"
                    }, [r("div", {
                        staticClass: "\n          flex flex-row\n          place-items-center\n          justify-center\n          bg-gray-800\n          rounded-xl\n          p-2\n        "
                    }, [r("a", {
                        attrs: {
                            href: "https://discords.com/bots/bots/651095740390834176",
                            target: "_blank"
                        }
                    }, [r("img", {
                        staticClass: "rounded-xl",
                        attrs: {
                            src: "https://discords.com/bots/api/bot/651095740390834176/widget",
                            title: "Visit Security listed on Discords.com!",
                            alt: "Security's Widget Failed to Load"
                        }
                    })])]), t._v(" "), r("div", {
                        staticClass: "\n          flex flex-row\n          place-items-center\n          justify-center\n          bg-gray-800\n          rounded-xl\n          p-2\n        "
                    }, [r("a", {
                        attrs: {
                            href: "https://top.gg/bot/651095740390834176",
                            target: "_blank"
                        }
                    }, [r("img", {
                        staticClass: "rounded-xl",
                        attrs: {
                            src: "https://top.gg/api/widget/651095740390834176.svg",
                            alt: "Security"
                        }
                    })])]), t._v(" "), r("div", {
                        staticClass: "\n          flex flex-row\n          place-items-center\n          justify-center\n          bg-gray-800\n          rounded-xl\n          p-2\n        "
                    }, [r("a", {
                        attrs: {
                            href: "https://discord.boats/bot/651095740390834176",
                            target: "_blank"
                        }
                    }, [r("img", {
                        staticClass: "rounded-xl",
                        attrs: {
                            src: "https://discord.boats/api/widget/651095740390834176",
                            alt: "Security"
                        }
                    })])])])])
                }], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                Loading: r(175).default
            })
        }
    }
]);