(window.webpackJsonp = window.webpackJsonp || []).push([
    [26], {
        287: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    data: function() {
                        return {
                            partners: [{
                                title: "ServerStats",
                                text: "Show off your member, channel, role, emoji, boost, and, goal count in your server throw the use of channels (also fully customizable).",
                                image: "https://serverstatsbot.com/img/serverstats_icon.aebf7fc4.png",
                                link: "https://serverstatsbot.com/"
                            }]
                        }
                    },
                    head: function() {
                        return {
                            title: "Security Bot | Partners",
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: "See the partners of Security Bot."
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: "Security Bot | Partners"
                            }, {
                                hid: "og:url",
                                property: "og:url",
                                content: "https://securitybot.xyz/partners"
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: "See the partners of Security Bot."
                            }]
                        }
                    }
                },
                l = n(24),
                component = Object(l.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "flex flex-col place-items-center gap-8"
                    }, [n("div", {
                        staticClass: "\n      flex flex-col\n      gap-4\n      bg-black bg-opacity-75\n      place-items-center\n      w-full\n      p-6\n    "
                    }, [n("h2", {
                        staticClass: "text-3xl font-semibold"
                    }, [t._v("Partners")]), t._v(" "), n("div", {
                        staticClass: "justify-around flex flex-row flex-wrap gap-6"
                    }, t._l(t.partners, (function(e) {
                        return n("a", {
                            key: e.title,
                            staticClass: "\n          flex\n          sm:flex-row\n          flex-col\n          place-items-center\n          justify-center\n          bg-gray-800\n          rounded-xl\n          p-2\n          w-10/12\n          md:w-6/12\n        ",
                            attrs: {
                                target: "_blank",
                                href: e.link
                            }
                        }, [n("div", {
                            staticClass: "flex flex-col"
                        }, [n("h2", {
                            staticClass: "text-xl"
                        }, [t._v(t._s(e.title))]), t._v(" "), n("p", {
                            staticClass: "text-gray-300 text-sm"
                        }, [t._v(t._s(e.text))])]), t._v(" "), n("img", {
                            staticClass: "h-24 w-24",
                            attrs: {
                                src: e.image
                            }
                        })])
                    })), 0)]), t._v(" "), n("div", {
                        staticClass: "\n      flex flex-col\n      gap-4\n      bg-black bg-opacity-75\n      place-items-center\n      w-full\n      p-6\n    "
                    }, [n("h2", {
                        staticClass: "text-2xl text-center"
                    }, [t._v("Do you want to become a partner?")]), t._v(" "), n("p", [t._v("\n      Security Bot now accept partners, partners will receive some exclusive\n      perks, as well as getting a speacial partner role.\n    ")]), t._v(" "), n("nuxt-link", {
                        staticClass: "rounded-xl bg-blue-900 button p-2",
                        attrs: {
                            to: "/discord"
                        }
                    }, [t._v("Get More Info")])], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports
        }
    }
]);