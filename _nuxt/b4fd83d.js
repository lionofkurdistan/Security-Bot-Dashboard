(window.webpackJsonp = window.webpackJsonp || []).push([
    [29], {
        290: function(t, e, n) {
            "use strict";
            n.r(e);
            var l = {
                    data: function() {
                        return {
                            steps: [{
                                title: "Adding the bot",
                                description: "In order to protect your Discord server, you have to invite Security Bot, you can follow these steps:",
                                steps: ["Invite the bot using the invite link.", "Make sure the bot has the highest possible role.", "Make sure the bot has the Administrator permission."]
                            }, {
                                title: "Settings page",
                                description: "Settings page is where you can check and update your Discord server settings.",
                                steps: ["Login.", "Click on the dashboard tab.", "Select your server."]
                            }, {
                                title: "Setting up anti nuke",
                                description: "Anti nuke is the main feature, setting it up is required.",
                                tip: "Security Bot's anti nuke system add limits to almost all the moderation/dangerous actions on your Discord server for free, although there are some heavy things that the normal bot can't handle because it will slow down other features so we have moved them into the premium version.",
                                steps: ["Go to the anti nuke category.", "Change the maximum number of each action, when someone reaches the maximum, Security will punish him/her.", "Change the punishment type of each action.", "Click save button."]
                            }, {
                                title: "Setting up whitelist",
                                description: "Whitelist can be used to allow trusted users bypass anti nuke features, each action has its own whitelisted users & roles, you can even whitelist channels.",
                                steps: ["Go to the whitelist category.", "There you find multiple whitelist types."],
                                types: [{
                                    type: "Whitelisted Roles",
                                    description: "In this category, you can whitelist roles globally, which means they can bypass all the anti nuke features."
                                }, {
                                    type: "Whitelisted Roles: [Action Name]",
                                    description: "In this category, you can whitelist roles just for the selected action, they can't bypass other anti nuke features."
                                }, {
                                    type: "Whitelisted Users",
                                    description: "In this category, you can whitelist users globally, which means they can bypass all the anti nuke features."
                                }, {
                                    type: "Whitelisted Users: [Action Name]",
                                    description: "In this category, you can whitelist users just for the selected action, they can't bypass other anti nuke features."
                                }, {
                                    type: "Whitelisted Channels",
                                    description: "In this category, you can whitelist channels globally, so channel related anti nuke features will not work in them."
                                }, {
                                    type: "Whitelisted Channels: [Action Name]",
                                    description: "In this category, you can whitelist channels for the selected action, so the selected anti nuke feature will not work there."
                                }]
                            }]
                        }
                    },
                    head: function() {
                        return {
                            title: "Security Bot | Setup",
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: "Have no idea where to start? it's fine, we provide a fully setup guide that only takes 8 minutes of your time to read and less than 10 minutes to setup the bot with the settings you like."
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: "Security Bot | Setup"
                            }, {
                                hid: "og:url",
                                property: "og:url",
                                content: "https://securitybot.xyz/setup-guide"
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: "Have no idea where to start? it's fine, we provide a fully setup guide that only takes 8 minutes of your time to read and less than 10 minutes to setup the bot with the settings you like."
                            }]
                        }
                    }
                },
                o = n(24),
                component = Object(o.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "flex flex-col gap-12 place-items-center"
                    }, [n("div", {
                        staticClass: "flex flex-col p-6 bg-gray-900 justify-center w-full gap-4"
                    }, [n("h2", {
                        staticClass: "text-center font-semibold text-lg md:text-3xl text-blue-600"
                    }, [t._v("\n      " + t._s(t.steps[0].title) + "\n    ")]), t._v(" "), n("div", {
                        staticClass: "flex flex-col gap-3"
                    }, [n("p", {
                        staticClass: "text-gray-300 text-md text-center"
                    }, [t._v("\n        " + t._s(t.steps[0].description) + "\n      ")]), t._v(" "), n("div", {
                        staticClass: "flex flex-col gap-1"
                    }, [n("div", {
                        staticClass: "flex flex-col gap-2"
                    }, t._l(t.steps[0].steps.length, (function(i) {
                        return n("p", {
                            key: i,
                            staticClass: "p-2 rounded-xl bg-gray-800 text-pink-600"
                        }, [t._v("\n            " + t._s(i) + ". " + t._s(t.steps[0].steps[i - 1]) + "\n          ")])
                    })), 0)])])]), t._v(" "), n("div", {
                        staticClass: "flex flex-col p-6 bg-gray-900 justify-center w-full gap-4"
                    }, [n("h2", {
                        staticClass: "text-center font-semibold text-lg md:text-3xl text-blue-600"
                    }, [t._v("\n      " + t._s(t.steps[1].title) + "\n    ")]), t._v(" "), n("div", {
                        staticClass: "flex flex-col gap-3"
                    }, [n("p", {
                        staticClass: "text-gray-300 text-md text-center"
                    }, [t._v("\n        " + t._s(t.steps[1].description) + "\n      ")]), t._v(" "), n("div", {
                        staticClass: "flex flex-col gap-1"
                    }, [n("div", {
                        staticClass: "flex flex-col gap-2"
                    }, t._l(t.steps[1].steps.length, (function(i) {
                        return n("p", {
                            key: i,
                            staticClass: "p-2 rounded-xl bg-gray-800 text-pink-600"
                        }, [t._v("\n            " + t._s(i) + ". " + t._s(t.steps[1].steps[i - 1]) + "\n          ")])
                    })), 0)])])]), t._v(" "), n("div", {
                        staticClass: "flex flex-col p-6 bg-gray-900 justify-center w-full gap-4"
                    }, [n("h2", {
                        staticClass: "text-center font-semibold text-lg md:text-3xl text-blue-600"
                    }, [t._v("\n      " + t._s(t.steps[2].title) + "\n    ")]), t._v(" "), n("div", {
                        staticClass: "flex flex-col gap-3"
                    }, [n("p", {
                        staticClass: "text-gray-300 text-md text-center"
                    }, [t._v("\n        " + t._s(t.steps[2].description) + "\n      ")]), t._v(" "), n("div", {
                        staticClass: "flex flex-col gap-1"
                    }, [n("p", {
                        staticClass: "text-gray-400 text-sm"
                    }, [t._v(t._s(t.steps[2].tip))]), t._v(" "), n("div", {
                        staticClass: "flex flex-col gap-2"
                    }, t._l(t.steps[2].steps.length, (function(i) {
                        return n("p", {
                            key: i,
                            staticClass: "p-2 rounded-xl bg-gray-800 text-pink-600"
                        }, [t._v("\n            " + t._s(i) + ". " + t._s(t.steps[2].steps[i - 1]) + "\n          ")])
                    })), 0)])])]), t._v(" "), n("div", {
                        staticClass: "flex flex-col p-6 bg-gray-900 justify-center w-full gap-4"
                    }, [n("h2", {
                        staticClass: "text-center font-semibold text-lg md:text-3xl text-blue-600"
                    }, [t._v("\n      " + t._s(t.steps[3].title) + "\n    ")]), t._v(" "), n("div", {
                        staticClass: "flex flex-col gap-3"
                    }, [n("p", {
                        staticClass: "text-gray-300 text-md text-center"
                    }, [t._v("\n        " + t._s(t.steps[3].description) + "\n      ")]), t._v(" "), n("div", {
                        staticClass: "flex flex-col gap-2"
                    }, [n("p", {
                        staticClass: "text-gray-400 text-sm"
                    }, [t._v(t._s(t.steps[3].tip))]), t._v(" "), n("div", {
                        staticClass: "flex flex-col gap-2"
                    }, t._l(t.steps[3].steps.length, (function(i) {
                        return n("p", {
                            key: i,
                            staticClass: "p-2 rounded-xl bg-gray-800 text-pink-600"
                        }, [t._v("\n            " + t._s(i) + ". " + t._s(t.steps[3].steps[i - 1]) + "\n          ")])
                    })), 0), t._v(" "), t._l(t.steps[3].types, (function(e) {
                        return n("div", {
                            key: e.type,
                            staticClass: "flex flex-col p-2 bg-gray-800 rounded-xl w-full gap-1"
                        }, [n("h2", {
                            staticClass: "text-center font-semibold text-md md:text-xl text-pink-600"
                        }, [t._v("\n            " + t._s(e.type) + "\n          ")]), t._v(" "), n("p", {
                            staticClass: "text-gray-300 text-md text-center"
                        }, [t._v("\n            " + t._s(e.description) + "\n          ")])])
                    }))], 2)])])])
                }), [], !1, null, null, null);
            e.default = component.exports
        }
    }
]);