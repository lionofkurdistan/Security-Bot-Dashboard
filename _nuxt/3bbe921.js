(window.webpackJsonp = window.webpackJsonp || []).push([
    [24], {
        285: function(t, o, n) {
            "use strict";
            n.r(o);
            n(48), n(55);
            var e = {
                    mounted: function() {
                        window.location.replace("https://discord.com/oauth2/authorize?client_id=651095740390834176&scope=identify%20guilds&redirect_uri=" + window.location.origin + "/callback&response_type=code&prompt=none")
                    },
                    head: function() {
                        return {
                            title: "Security Bot | Login",
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: "Login using your Discord account."
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: "Security Bot | Login"
                            }, {
                                hid: "og:url",
                                property: "og:url",
                                content: "https://securitybot.xyz/login"
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: "Login using your Discord account."
                            }]
                        }
                    }
                },
                c = n(24),
                component = Object(c.a)(e, (function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("div")
                }), [], !1, null, null, null);
            o.default = component.exports
        }
    }
]);