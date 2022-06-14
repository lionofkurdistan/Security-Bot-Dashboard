(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        1: function(t, e, n) {
            "use strict";
            n.d(e, "k", (function() {
                return x
            })), n.d(e, "m", (function() {
                return w
            })), n.d(e, "l", (function() {
                return O
            })), n.d(e, "e", (function() {
                return _
            })), n.d(e, "b", (function() {
                return j
            })), n.d(e, "s", (function() {
                return k
            })), n.d(e, "g", (function() {
                return $
            })), n.d(e, "h", (function() {
                return C
            })), n.d(e, "d", (function() {
                return P
            })), n.d(e, "r", (function() {
                return E
            })), n.d(e, "j", (function() {
                return S
            })), n.d(e, "t", (function() {
                return A
            })), n.d(e, "o", (function() {
                return D
            })), n.d(e, "q", (function() {
                return L
            })), n.d(e, "f", (function() {
                return M
            })), n.d(e, "c", (function() {
                return I
            })), n.d(e, "i", (function() {
                return N
            })), n.d(e, "p", (function() {
                return U
            })), n.d(e, "a", (function() {
                return W
            })), n.d(e, "v", (function() {
                return V
            })), n.d(e, "n", (function() {
                return J
            })), n.d(e, "u", (function() {
                return Q
            }));
            n(43), n(13), n(44), n(45), n(31), n(11), n(32);
            var r = n(41),
                o = n(2),
                c = n(8),
                l = n(19),
                f = (n(25), n(20), n(196), n(14), n(30), n(107), n(53), n(21), n(26), n(33), n(42), n(48), n(55), n(150), n(151), n(200), n(113), n(118), n(202), n(61), n(79), n(0)),
                d = n(35);

            function h(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function m(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? h(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function v(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return y(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function x(t) {
                f.a.config.errorHandler && f.a.config.errorHandler(t)
            }

            function w(t) {
                return t.then((function(t) {
                    return t.default || t
                }))
            }

            function O(t) {
                return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
            }

            function _(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = t.$children || [],
                    o = v(r);
                try {
                    for (o.s(); !(e = o.n()).done;) {
                        var c = e.value;
                        c.$fetch ? n.push(c) : c.$children && _(c, n)
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                return n
            }

            function j(t, e) {
                if (e || !t.options.__hasNuxtData) {
                    var n = t.options._originDataFn || t.options.data || function() {
                        return {}
                    };
                    t.options._originDataFn = n, t.options.data = function() {
                        var data = n.call(this, this);
                        return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), m(m({}, data), e)
                    }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
                }
            }

            function k(t) {
                return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = f.a.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
            }

            function $(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
                return Array.prototype.concat.apply([], t.matched.map((function(t, r) {
                    return Object.keys(t[n]).map((function(o) {
                        return e && e.push(r), t[n][o]
                    }))
                })))
            }

            function C(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return $(t, e, "instances")
            }

            function P(t, e) {
                return Array.prototype.concat.apply([], t.matched.map((function(t, n) {
                    return Object.keys(t.components).reduce((function(r, o) {
                        return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], r
                    }), [])
                })))
            }

            function E(t, e) {
                return Promise.all(P(t, function() {
                    var t = Object(o.a)(regeneratorRuntime.mark((function t(n, r, o, c) {
                        var l, f;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if ("function" != typeof n || n.options) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.prev = 1, t.next = 4, n();
                                case 4:
                                    n = t.sent, t.next = 11;
                                    break;
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(1), t.t0 && "ChunkLoadError" === t.t0.name && "undefined" != typeof window && window.sessionStorage && (l = Date.now(), (!(f = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || f + 6e4 < l) && (window.sessionStorage.setItem("nuxt-reload", l), window.location.reload(!0))), t.t0;
                                case 11:
                                    return o.components[c] = n = k(n), t.abrupt("return", "function" == typeof e ? e(n, r, o, c) : n);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function(e, n, r, o) {
                        return t.apply(this, arguments)
                    }
                }()))
            }

            function S(t) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return t.next = 4, E(e);
                            case 4:
                                return t.abrupt("return", m(m({}, e), {}, {
                                    meta: $(e).map((function(t, n) {
                                        return m(m({}, t.options.meta), (e.matched[n] || {}).meta)
                                    }))
                                }));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function A(t, e) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = Object(o.a)(regeneratorRuntime.mark((function t(e, n) {
                    var o, c, f, h;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e.context || (e.context = {
                                    isStatic: !1,
                                    isDev: !1,
                                    isHMR: !1,
                                    app: e,
                                    store: e.store,
                                    payload: n.payload,
                                    error: n.error,
                                    base: e.router.options.base,
                                    env: {
                                        PORT: "3000",
                                        BASE_URL: "https://securitybot.xyz",
                                        BACKEND_BASE_URL: "http://127.0.0.1:25600"
                                    }
                                }, n.req && (e.context.req = n.req), n.res && (e.context.res = n.res), n.ssrContext && (e.context.ssrContext = n.ssrContext), e.context.redirect = function(t, path, n) {
                                    if (t) {
                                        e.context._redirected = !0;
                                        var o = Object(r.a)(path);
                                        if ("number" == typeof t || "undefined" !== o && "object" !== o || (n = path || {}, path = t, o = Object(r.a)(path), t = 302), "object" === o && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(d.d)(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
                                        e.context.next({
                                            path: path,
                                            query: n,
                                            status: t
                                        })
                                    }
                                }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([S(n.route), S(n.from)]);
                            case 3:
                                o = t.sent, c = Object(l.a)(o, 2), f = c[0], h = c[1], n.route && (e.context.route = f), n.from && (e.context.from = h), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function D(t, e) {
                return !t.length || e._redirected || e._errored ? Promise.resolve() : L(t[0], e).then((function() {
                    return D(t.slice(1), e)
                }))
            }

            function L(t, e) {
                var n;
                return (n = 2 === t.length ? new Promise((function(n) {
                    t(e, (function(t, data) {
                        t && e.error(t), n(data = data || {})
                    }))
                })) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
            }

            function M(base, t) {
                if ("hash" === t) return window.location.hash.replace(/^#\//, "");
                base = decodeURI(base).slice(0, -1);
                var path = decodeURI(window.location.pathname);
                base && path.startsWith(base) && (path = path.slice(base.length));
                var e = (path || "/") + window.location.search + window.location.hash;
                return Object(d.c)(e)
            }

            function I(t, e) {
                return function(t, e) {
                    for (var n = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(r.a)(t[i]) && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", H(e)));
                    return function(e, r) {
                        for (var path = "", data = e || {}, o = (r || {}).pretty ? z : encodeURIComponent, c = 0; c < t.length; c++) {
                            var l = t[c];
                            if ("string" != typeof l) {
                                var f = data[l.name || "pathMatch"],
                                    d = void 0;
                                if (null == f) {
                                    if (l.optional) {
                                        l.partial && (path += l.prefix);
                                        continue
                                    }
                                    throw new TypeError('Expected "' + l.name + '" to be defined')
                                }
                                if (Array.isArray(f)) {
                                    if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
                                    if (0 === f.length) {
                                        if (l.optional) continue;
                                        throw new TypeError('Expected "' + l.name + '" to not be empty')
                                    }
                                    for (var h = 0; h < f.length; h++) {
                                        if (d = o(f[h]), !n[c].test(d)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(d) + "`");
                                        path += (0 === h ? l.prefix : l.delimiter) + d
                                    }
                                } else {
                                    if (d = l.asterisk ? F(f) : o(f), !n[c].test(d)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + d + '"');
                                    path += l.prefix + d
                                }
                            } else path += l
                        }
                        return path
                    }
                }(function(t, e) {
                    var n, r = [],
                        o = 0,
                        c = 0,
                        path = "",
                        l = e && e.delimiter || "/";
                    for (; null != (n = B.exec(t));) {
                        var f = n[0],
                            d = n[1],
                            h = n.index;
                        if (path += t.slice(c, h), c = h + f.length, d) path += d[1];
                        else {
                            var m = t[c],
                                v = n[2],
                                y = n[3],
                                x = n[4],
                                w = n[5],
                                O = n[6],
                                _ = n[7];
                            path && (r.push(path), path = "");
                            var j = null != v && null != m && m !== v,
                                k = "+" === O || "*" === O,
                                $ = "?" === O || "*" === O,
                                C = n[2] || l,
                                pattern = x || w;
                            r.push({
                                name: y || o++,
                                prefix: v || "",
                                delimiter: C,
                                optional: $,
                                repeat: k,
                                partial: j,
                                asterisk: Boolean(_),
                                pattern: pattern ? X(pattern) : _ ? ".*" : "[^" + K(C) + "]+?"
                            })
                        }
                    }
                    c < t.length && (path += t.substr(c));
                    path && r.push(path);
                    return r
                }(t, e), e)
            }

            function N(t, e) {
                var n = {},
                    r = m(m({}, t), e);
                for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
                return n
            }

            function U(t) {
                var e;
                if (t.message || "string" == typeof t) e = t.message || t;
                else try {
                    e = JSON.stringify(t, null, 2)
                } catch (n) {
                    e = "[".concat(t.constructor.name, "]")
                }
                return m(m({}, t), {}, {
                    message: e,
                    statusCode: t.statusCode || t.status || t.response && t.response.status || 500
                })
            }
            window.onNuxtReadyCbs = [], window.onNuxtReady = function(t) {
                window.onNuxtReadyCbs.push(t)
            };
            var B = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function z(t, e) {
                var n = e ? /[?#]/g : /[/?#]/g;
                return encodeURI(t).replace(n, (function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function F(t) {
                return z(t, !0)
            }

            function K(t) {
                return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function X(t) {
                return t.replace(/([=!:$/()])/g, "\\$1")
            }

            function H(t) {
                return t && t.sensitive ? "" : "i"
            }

            function W(t, e, n) {
                t.$options[e] || (t.$options[e] = []), t.$options[e].includes(n) || t.$options[e].push(n)
            }
            var V = d.b,
                J = (d.e, d.a);

            function Q(t) {
                try {
                    window.history.scrollRestoration = t
                } catch (t) {}
            }
        },
        114: function(t, e, n) {
            "use strict";
            var r = {};
            r.user = n(195), r.user = r.user.default || r.user, e.a = r
        },
        155: function(t, e, n) {
            var content = n(213);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(47).default)("771aba7f", content, !0, {
                sourceMap: !1
            })
        },
        156: function(t, e, n) {
            var content = n(221);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(47).default)("1968fb14", content, !0, {
                sourceMap: !1
            })
        },
        157: function(t, e, n) {
            var content = n(224);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(47).default)("863dcd4e", content, !0, {
                sourceMap: !1
            })
        },
        174: function(t, e, n) {
            "use strict";
            var r = n(2),
                o = (n(25), n(14), n(80), n(0)),
                c = n(1),
                l = window.__NUXT__;

            function f() {
                if (!this._hydrated) return this.$fetch()
            }

            function d() {
                if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
                    var t;
                    this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                    var data = l.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else
                        for (var e in data) o.a.set(this.$data, e, data[e])
                }
            }

            function h() {
                var t = this;
                return this._fetchPromise || (this._fetchPromise = m.call(this).then((function() {
                    delete t._fetchPromise
                }))), this._fetchPromise
            }

            function m() {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = Object(r.a)(regeneratorRuntime.mark((function t() {
                    var e, n, r, o = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, n = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
                            case 9:
                                t.next = 15;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(6), e = Object(c.p)(t.t0);
                            case 15:
                                if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                    t.next = 19;
                                    break
                                }
                                return t.next = 19, new Promise((function(t) {
                                    return setTimeout(t, r)
                                }));
                            case 19:
                                this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                    return o.$nuxt.nbFetching--
                                }));
                            case 23:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [6, 11]
                    ])
                })))).apply(this, arguments)
            }
            e.a = {
                beforeCreate: function() {
                    Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.a.util.defineReactive(this, "$fetchState", {
                        pending: !1,
                        error: null,
                        timestamp: Date.now()
                    }), this.$fetch = h.bind(this), Object(c.a)(this, "created", d), Object(c.a)(this, "beforeMount", f))
                }
            }
        },
        175: function(t, e, n) {
            "use strict";
            n.r(e);
            n(11);
            var r = {
                    data: function() {
                        return {
                            animations: [{
                                targets: ".rect",
                                opacity: 1,
                                duration: 3e3
                            }, {
                                targets: "#main-rect",
                                delay: 500,
                                opacity: 1,
                                duration: 3e3
                            }, {
                                targets: "#main-rect",
                                loop: !0,
                                duration: 2e3,
                                translateY: [{
                                    value: 451
                                }, {
                                    value: 9
                                }],
                                opacity: [{
                                    value: 1
                                }, {
                                    value: 1
                                }, {
                                    value: .6
                                }, {
                                    value: 1
                                }, {
                                    value: 1
                                }, {
                                    value: .6
                                }, {
                                    value: 1
                                }, {
                                    value: 1
                                }],
                                easing: "linear"
                            }]
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.animations.forEach((function(e) {
                            t.$anime(e)
                        }))
                    }
                },
                o = n(24),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "\n    h-full\n    w-full\n    fixed\n    bg-black bg-opacity-50\n    flex flex-col\n    place-items-center\n    justify-center\n    top-0\n    left-0\n    z-50\n  "
                    }, [r("svg", {
                        staticClass: "h-16 w-16",
                        attrs: {
                            id: "bl",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            viewBox: "0 0 512 512"
                        }
                    }, [r("defs", [r("style", [t._v("\n        .cls-1 {\n          fill: #3089c5;\n        }\n      ")])]), t._v(" "), r("image", {
                        attrs: {
                            href: n(222),
                            x: "82",
                            y: "51",
                            width: "348",
                            height: "410"
                        }
                    }), t._v(" "), r("rect", {
                        staticClass: "cls-1 rect",
                        attrs: {
                            id: "rect-8",
                            x: "23",
                            y: "381",
                            width: "8",
                            height: "110"
                        }
                    }), t._v(" "), r("rect", {
                        staticClass: "cls-1 rect",
                        attrs: {
                            id: "rect-7",
                            x: "23",
                            y: "484",
                            width: "108",
                            height: "7"
                        }
                    }), t._v(" "), r("rect", {
                        staticClass: "cls-1 rect",
                        attrs: {
                            id: "rect-6",
                            x: "379",
                            y: "482",
                            width: "110",
                            height: "8"
                        }
                    }), t._v(" "), r("rect", {
                        staticClass: "cls-1 rect",
                        attrs: {
                            id: "rect-5",
                            x: "482",
                            y: "382",
                            width: "7",
                            height: "108"
                        }
                    }), t._v(" "), r("rect", {
                        staticClass: "cls-1 rect",
                        attrs: {
                            id: "rect-4",
                            x: "481",
                            y: "22",
                            width: "8",
                            height: "110"
                        }
                    }), t._v(" "), r("rect", {
                        staticClass: "cls-1 rect",
                        attrs: {
                            id: "rect-3",
                            x: "381",
                            y: "22",
                            width: "108",
                            height: "7"
                        }
                    }), t._v(" "), r("rect", {
                        staticClass: "cls-1 rect",
                        attrs: {
                            id: "rect-2",
                            x: "22",
                            y: "23",
                            width: "110",
                            height: "8"
                        }
                    }), t._v(" "), r("rect", {
                        staticClass: "cls-1 rect",
                        attrs: {
                            id: "rect-1",
                            x: "22",
                            y: "23",
                            width: "7",
                            height: "108"
                        }
                    }), t._v(" "), r("rect", {
                        staticClass: "cls-1",
                        attrs: {
                            id: "main-rect",
                            x: "32",
                            y: "22",
                            width: "447",
                            height: "9"
                        }
                    })])])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        177: function(t, e, n) {
            n(178), t.exports = n(179)
        },
        179: function(t, e, n) {
            "use strict";
            n.r(e),
                function(t) {
                    n(42), n(43), n(13), n(44), n(45);
                    var e = n(41),
                        r = n(2),
                        o = (n(101), n(185), n(191), n(192), n(25), n(30), n(14), n(11), n(20), n(21), n(61), n(79), n(107), n(53), n(26), n(33), n(80), n(0)),
                        c = n(166),
                        l = n(114),
                        f = n(1),
                        d = n(36),
                        h = n(174),
                        m = n(86);

                    function v(t, e) {
                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (!n) {
                            if (Array.isArray(t) || (n = function(t, e) {
                                    if (!t) return;
                                    if ("string" == typeof t) return y(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    "Object" === n && t.constructor && (n = t.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(t);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e)
                                }(t)) || e && t && "number" == typeof t.length) {
                                n && (t = n);
                                var i = 0,
                                    r = function() {};
                                return {
                                    s: r,
                                    n: function() {
                                        return i >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[i++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: r
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, c = !0,
                            l = !1;
                        return {
                            s: function() {
                                n = n.call(t)
                            },
                            n: function() {
                                var t = n.next();
                                return c = t.done, t
                            },
                            e: function(t) {
                                l = !0, o = t
                            },
                            f: function() {
                                try {
                                    c || null == n.return || n.return()
                                } finally {
                                    if (l) throw o
                                }
                            }
                        }
                    }

                    function y(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                        return n
                    }
                    o.a.__nuxt__fetch__mixin__ || (o.a.mixin(h.a), o.a.__nuxt__fetch__mixin__ = !0), o.a.component(m.a.name, m.a), o.a.component("NLink", m.a), t.fetch || (t.fetch = c.a);
                    var x, w, O = [],
                        _ = window.__NUXT__ || {},
                        j = _.config || {};
                    j._app && (n.p = Object(f.v)(j._app.cdnURL, j._app.assetsPath)), Object.assign(o.a.config, {
                        silent: !0,
                        performance: !1
                    });
                    var k = o.a.config.errorHandler || console.error;

                    function $(t, e, n) {
                        for (var r = function(component) {
                                var t = function(component, t) {
                                    if (!component || !component.options || !component.options[t]) return {};
                                    var option = component.options[t];
                                    if ("function" == typeof option) {
                                        for (var e = arguments.length, n = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) n[r - 2] = arguments[r];
                                        return option.apply(void 0, n)
                                    }
                                    return option
                                }(component, "transition", e, n) || {};
                                return "string" == typeof t ? {
                                    name: t
                                } : t
                            }, o = n ? Object(f.g)(n) : [], c = Math.max(t.length, o.length), l = [], d = function(i) {
                                var e = Object.assign({}, r(t[i])),
                                    n = Object.assign({}, r(o[i]));
                                Object.keys(e).filter((function(t) {
                                    return void 0 !== e[t] && !t.toLowerCase().includes("leave")
                                })).forEach((function(t) {
                                    n[t] = e[t]
                                })), l.push(n)
                            }, i = 0; i < c; i++) d(i);
                        return l
                    }

                    function C(t, e, n) {
                        return P.apply(this, arguments)
                    }

                    function P() {
                        return (P = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                            var o, c, l, d, h = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._routeChanged = Boolean(x.nuxt.err) || n.name !== e.name, this._paramChanged = !this._routeChanged && n.path !== e.path, this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(f.i)(e.query, n.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 9, Object(f.r)(e, (function(t, e) {
                                            return {
                                                Component: t,
                                                instance: e
                                            }
                                        }));
                                    case 9:
                                        o = t.sent, o.some((function(t) {
                                            var r = t.Component,
                                                o = t.instance,
                                                c = r.options.watchQuery;
                                            return !0 === c || (Array.isArray(c) ? c.some((function(t) {
                                                return h._diffQuery[t]
                                            })) : "function" == typeof c && c.apply(o, [e.query, n.query]))
                                        })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                    case 12:
                                        r(), t.next = 26;
                                        break;
                                    case 15:
                                        if (t.prev = 15, t.t0 = t.catch(5), c = t.t0 || {}, l = c.statusCode || c.status || c.response && c.response.status || 500, d = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(d)) {
                                            t.next = 23;
                                            break
                                        }
                                        return window.location.reload(!0), t.abrupt("return");
                                    case 23:
                                        this.error({
                                            statusCode: l,
                                            message: d
                                        }), this.$nuxt.$emit("routeChanged", e, n, c), r();
                                    case 26:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [5, 15]
                            ])
                        })))).apply(this, arguments)
                    }

                    function E(t, e) {
                        return _.serverRendered && e && Object(f.b)(t, e), t._Ctor = t, t
                    }

                    function S(t) {
                        return Object(f.d)(t, function() {
                            var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, o, c) {
                                var l;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if ("function" != typeof e || e.options) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.next = 3, e();
                                        case 3:
                                            e = t.sent;
                                        case 4:
                                            return l = E(Object(f.s)(e), _.data ? _.data[c] : null), r.components[o] = l, t.abrupt("return", l);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e, n, r, o, c) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }

                    function R(t, e, n) {
                        var r = this,
                            o = [],
                            c = !1;
                        if (void 0 !== n && (o = [], (n = Object(f.s)(n)).options.middleware && (o = o.concat(n.options.middleware)), t.forEach((function(t) {
                                t.options.middleware && (o = o.concat(t.options.middleware))
                            }))), o = o.map((function(t) {
                                return "function" == typeof t ? t : ("function" != typeof l.a[t] && (c = !0, r.error({
                                    statusCode: 500,
                                    message: "Unknown middleware " + t
                                })), l.a[t])
                            })), !c) return Object(f.o)(o, e)
                    }

                    function A(t, e, n) {
                        return T.apply(this, arguments)
                    }

                    function T() {
                        return (T = Object(r.a)(regeneratorRuntime.mark((function t(e, n, o) {
                            var c, l, h, m, y, w, _, j, k, C, P, E, S, A, T, D = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 2:
                                        return !1, e === n ? (O = [], !0) : (c = [], O = Object(f.g)(n, c).map((function(t, i) {
                                            return Object(f.c)(n.matched[c[i]].path)(n.params)
                                        }))), l = !1, h = function(path) {
                                            n.path === path.path && D.$loading.finish && D.$loading.finish(), n.path !== path.path && D.$loading.pause && D.$loading.pause(), l || (l = !0, o(path))
                                        }, t.next = 8, Object(f.t)(x, {
                                            route: e,
                                            from: n,
                                            next: h.bind(this)
                                        });
                                    case 8:
                                        if (this._dateLastError = x.nuxt.dateErr, this._hadError = Boolean(x.nuxt.err), m = [], (y = Object(f.g)(e, m)).length) {
                                            t.next = 27;
                                            break
                                        }
                                        return t.next = 15, R.call(this, y, x.context);
                                    case 15:
                                        if (!l) {
                                            t.next = 17;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 17:
                                        return w = (d.a.options || d.a).layout, t.next = 20, this.loadLayout("function" == typeof w ? w.call(d.a, x.context) : w);
                                    case 20:
                                        return _ = t.sent, t.next = 23, R.call(this, y, x.context, _);
                                    case 23:
                                        if (!l) {
                                            t.next = 25;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 25:
                                        return x.context.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", o());
                                    case 27:
                                        return y.forEach((function(t) {
                                            t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                                        })), this.setTransitions($(y, e, n)), t.prev = 29, t.next = 32, R.call(this, y, x.context);
                                    case 32:
                                        if (!l) {
                                            t.next = 34;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 34:
                                        if (!x.context._errored) {
                                            t.next = 36;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 36:
                                        return "function" == typeof(j = y[0].options.layout) && (j = j(x.context)), t.next = 40, this.loadLayout(j);
                                    case 40:
                                        return j = t.sent, t.next = 43, R.call(this, y, x.context, j);
                                    case 43:
                                        if (!l) {
                                            t.next = 45;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 45:
                                        if (!x.context._errored) {
                                            t.next = 47;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 47:
                                        k = !0, t.prev = 48, C = v(y), t.prev = 50, C.s();
                                    case 52:
                                        if ((P = C.n()).done) {
                                            t.next = 63;
                                            break
                                        }
                                        if ("function" == typeof(E = P.value).options.validate) {
                                            t.next = 56;
                                            break
                                        }
                                        return t.abrupt("continue", 61);
                                    case 56:
                                        return t.next = 58, E.options.validate(x.context);
                                    case 58:
                                        if (k = t.sent) {
                                            t.next = 61;
                                            break
                                        }
                                        return t.abrupt("break", 63);
                                    case 61:
                                        t.next = 52;
                                        break;
                                    case 63:
                                        t.next = 68;
                                        break;
                                    case 65:
                                        t.prev = 65, t.t0 = t.catch(50), C.e(t.t0);
                                    case 68:
                                        return t.prev = 68, C.f(), t.finish(68);
                                    case 71:
                                        t.next = 77;
                                        break;
                                    case 73:
                                        return t.prev = 73, t.t1 = t.catch(48), this.error({
                                            statusCode: t.t1.statusCode || "500",
                                            message: t.t1.message
                                        }), t.abrupt("return", o());
                                    case 77:
                                        if (k) {
                                            t.next = 80;
                                            break
                                        }
                                        return this.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", o());
                                    case 80:
                                        return t.next = 82, Promise.all(y.map(function() {
                                            var t = Object(r.a)(regeneratorRuntime.mark((function t(r, i) {
                                                var o, c, l, d, h, v, y, w, p;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (r._path = Object(f.c)(e.matched[m[i]].path)(e.params), r._dataRefresh = !1, o = r._path !== O[i], D._routeChanged && o ? r._dataRefresh = !0 : D._paramChanged && o ? (c = r.options.watchParam, r._dataRefresh = !1 !== c) : D._queryChanged && (!0 === (l = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(l) ? r._dataRefresh = l.some((function(t) {
                                                                    return D._diffQuery[t]
                                                                })) : "function" == typeof l && (S || (S = Object(f.h)(e)), r._dataRefresh = l.apply(S[i], [e.query, n.query]))), D._hadError || !D._isMounted || r._dataRefresh) {
                                                                t.next = 6;
                                                                break
                                                            }
                                                            return t.abrupt("return");
                                                        case 6:
                                                            return d = [], h = r.options.asyncData && "function" == typeof r.options.asyncData, v = Boolean(r.options.fetch) && r.options.fetch.length, y = h && v ? 30 : 45, h && ((w = Object(f.q)(r.options.asyncData, x.context)).then((function(t) {
                                                                Object(f.b)(r, t), D.$loading.increase && D.$loading.increase(y)
                                                            })), d.push(w)), D.$loading.manual = !1 === r.options.loading, v && ((p = r.options.fetch(x.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(t) {
                                                                D.$loading.increase && D.$loading.increase(y)
                                                            })), d.push(p)), t.abrupt("return", Promise.all(d));
                                                        case 14:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 82:
                                        l || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), o()), t.next = 99;
                                        break;
                                    case 85:
                                        if (t.prev = 85, t.t2 = t.catch(29), "ERR_REDIRECT" !== (A = t.t2 || {}).message) {
                                            t.next = 90;
                                            break
                                        }
                                        return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, A));
                                    case 90:
                                        return O = [], Object(f.k)(A), "function" == typeof(T = (d.a.options || d.a).layout) && (T = T(x.context)), t.next = 96, this.loadLayout(T);
                                    case 96:
                                        this.error(A), this.$nuxt.$emit("routeChanged", e, n, A), o();
                                    case 99:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [29, 85],
                                [48, 73],
                                [50, 65, 68, 71]
                            ])
                        })))).apply(this, arguments)
                    }

                    function D(t, n) {
                        Object(f.d)(t, (function(t, n, r, c) {
                            return "object" !== Object(e.a)(t) || t.options || ((t = o.a.extend(t))._Ctor = t, r.components[c] = t), t
                        }))
                    }

                    function L(t) {
                        var e = Boolean(this.$options.nuxt.err);
                        this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
                        var n = e ? (d.a.options || d.a).layout : t.matched[0].components.default.options.layout;
                        "function" == typeof n && (n = n(x.context)), this.setLayout(n)
                    }

                    function M(t) {
                        t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
                    }

                    function I(t, e) {
                        var n = this;
                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                            var r = Object(f.h)(t),
                                c = Object(f.g)(t),
                                l = !1;
                            o.a.nextTick((function() {
                                r.forEach((function(t, i) {
                                    if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                        var e = t.constructor.options.data.call(t);
                                        for (var n in e) o.a.set(t.$data, n, e[n]);
                                        l = !0
                                    }
                                })), l && window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), M(n)
                            }))
                        }
                    }

                    function N(t) {
                        window.onNuxtReadyCbs.forEach((function(e) {
                            "function" == typeof e && e(t)
                        })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), w.afterEach((function(e, n) {
                            o.a.nextTick((function() {
                                return t.$nuxt.$emit("routeChanged", e, n)
                            }))
                        }))
                    }

                    function U() {
                        return (U = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                            var n, r, c, l, d;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return x = e.app, w = e.router, e.store, n = new o.a(x), r = _.layout || "default", t.next = 7, n.loadLayout(r);
                                    case 7:
                                        return n.setLayout(r), c = function() {
                                            n.$mount("#__nuxt"), w.afterEach(D), w.afterEach(L.bind(n)), w.afterEach(I.bind(n)), o.a.nextTick((function() {
                                                N(n)
                                            }))
                                        }, t.next = 11, Promise.all(S(x.context.route));
                                    case 11:
                                        if (l = t.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), l.length && (n.setTransitions($(l, w.currentRoute)), O = w.currentRoute.matched.map((function(t) {
                                                return Object(f.c)(t.path)(w.currentRoute.params)
                                            }))), n.$loading = {}, _.error && n.error(_.error), w.beforeEach(C.bind(n)), w.beforeEach(A.bind(n)), !_.serverRendered || !Object(f.n)(_.routePath, n.context.route.path)) {
                                            t.next = 20;
                                            break
                                        }
                                        return t.abrupt("return", c());
                                    case 20:
                                        return d = function() {
                                            D(w.currentRoute, w.currentRoute), L.call(n, w.currentRoute), M(n), c()
                                        }, t.next = 23, new Promise((function(t) {
                                            return setTimeout(t, 0)
                                        }));
                                    case 23:
                                        A.call(n, w.currentRoute, w.currentRoute, (function(path) {
                                            if (path) {
                                                var t = w.afterEach((function(e, n) {
                                                    t(), d()
                                                }));
                                                w.push(path, void 0, (function(t) {
                                                    t && k(t)
                                                }))
                                            } else d()
                                        }));
                                    case 24:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))).apply(this, arguments)
                    }
                    Object(d.b)(null, _.config).then((function(t) {
                        return U.apply(this, arguments)
                    })).catch(k)
                }.call(this, n(37))
        },
        195: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2);
            n(25);

            function o() {
                return (o = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                e.store, e.app;
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            e.default = function(t) {
                return o.apply(this, arguments)
            }
        },
        212: function(t, e, n) {
            "use strict";
            n(155)
        },
        213: function(t, e, n) {
            var r = n(46)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".nuxt-progress{\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:2px;\n  width:0;\n  opacity:1;\n  transition:width .1s,opacity .4s;\n  background-color:#000;\n  z-index:999999\n}\n.nuxt-progress.nuxt-progress-notransition{\n  transition:none\n}\n.nuxt-progress-failed{\n  background-color:red\n}", ""]), r.locals = {}, t.exports = r
        },
        216: function(t, e, n) {
            var content = n(217);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(47).default)("17bc9ac2", content, !0, {
                sourceMap: !1
            })
        },
        217: function(t, e, n) {
            var r = n(46)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".button{\n  transition:.25s\n}\n\n.button:hover{\n  box-shadow:0 .5em .5em -.4em #000;\n  transform:translateY(-.15em)\n}\n\n.button:disabled{\n  opacity:.5\n}\n\n.button:disabled:hover{\n  box-shadow:none;\n  transform:none\n}\n\nbutton:focus,input:focus,select:focus,textarea:focus{\n  outline:none\n}\n\ninput{\n  border-radius:0.75rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity));\n  padding:0.5rem\n}\n\n.toast{\n  border-radius:0.75rem !important\n}\n\nselect{\n  -webkit-appearance:none;\n  -moz-appearance:none;\n  appearance:none;\n  outline:0;\n  box-shadow:none;\n  border:0!important;\n  border-radius:0.75rem !important;\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity)) !important;\n  padding:0.5rem !important;\n  background-image:none;\n  color:#fff;\n  cursor:pointer\n}\n\nselect::-ms-expand{\n  display:none\n}\n\nhtml{\n  font-size:16px;\n  word-spacing:1px;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  box-sizing:border-box\n}\n\n#__layout,#__nuxt,body,html{\n  height:100%\n}\n\nbody{\n  overflow-y:scroll;\n  background-color:#0c101a;\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity))\n}\n\n*,:after,:before{\n  box-sizing:border-box;\n  margin:0\n}\n\n.disable-scroll{\n  -ms-overflow-style:none;\n  scrollbar-width:none\n}\n\n.disable-scroll::-webkit-scrollbar{\n  display:none\n}", ""]), r.locals = {}, t.exports = r
        },
        220: function(t, e, n) {
            "use strict";
            n(156)
        },
        221: function(t, e, n) {
            var r = n(46)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".main[data-v-0b9d9e10]{\n  display:grid;\n  grid-template-columns:-webkit-min-content 10fr;\n  grid-template-columns:min-content 10fr\n}\n.menu[data-v-0b9d9e10]{\n  display:none\n}\n@media only screen and (max-width:800px){\n.guilds[data-v-0b9d9e10]{\n    display:none\n}\n.menu[data-v-0b9d9e10]{\n    display:block\n}\n.main[data-v-0b9d9e10]{\n    display:flex;\n    flex-direction:column\n}\n.navbar[data-v-0b9d9e10]{\n    display:flex;\n    flex-direction:row;\n    gap:0.5rem;\n    --tw-bg-opacity:1;\n    background-color:rgba(31, 41, 55, var(--tw-bg-opacity));\n    --tw-drop-shadow:drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))\n}\n}\n@-webkit-keyframes fromRight-data-v-0b9d9e10{\n0%{\n    transform:translateX(-100%)\n}\nto{\n    transform:translateX(0)\n}\n}\n@keyframes fromRight-data-v-0b9d9e10{\n0%{\n    transform:translateX(-100%)\n}\nto{\n    transform:translateX(0)\n}\n}\n.navbar-items[data-v-0b9d9e10]{\n  -webkit-animation:fromRight-data-v-0b9d9e10 .2s ease-out 0s 1;\n          animation:fromRight-data-v-0b9d9e10 .2s ease-out 0s 1\n}\n.nuxt-link-exact-active img[data-v-0b9d9e10]{\n  border-radius:1.5rem\n}\n.icon[data-v-0b9d9e10]{\n  height:4rem;\n  width:4rem;\n  border-radius:9999px;\n  padding:0.25rem\n}\n.icon[data-v-0b9d9e10]:hover{\n  border-radius:1.5rem\n}", ""]), r.locals = {}, t.exports = r
        },
        222: function(t, e, n) {
            t.exports = n.p + "img/zoomed-icon.70680e7.png"
        },
        223: function(t, e, n) {
            "use strict";
            n(157)
        },
        224: function(t, e, n) {
            var r = n(46)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".navbar>a[data-v-29a0bec5]{\n  transition:.25s\n}\n@-webkit-keyframes fromRight-data-v-29a0bec5{\n0%{\n    transform:translateX(-100%)\n}\nto{\n    transform:translateX(0)\n}\n}\n@keyframes fromRight-data-v-29a0bec5{\n0%{\n    transform:translateX(-100%)\n}\nto{\n    transform:translateX(0)\n}\n}\n.navbar-items[data-v-29a0bec5]{\n  -webkit-animation:fromRight-data-v-29a0bec5 .3s ease-out 0s 1;\n          animation:fromRight-data-v-29a0bec5 .3s ease-out 0s 1\n}\n.nuxt-link-exact-active[data-v-29a0bec5],.tab[data-v-29a0bec5]:hover{\n  box-shadow:0 .5em .5em -.4em #000;\n  transform:translateY(-.15em)\n}\n.last-tab[data-v-29a0bec5]{\n  position:absolute;\n  right:0px\n}", ""]), r.locals = {}, t.exports = r
        },
        225: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "state", (function() {
                return r
            })), n.d(e, "mutations", (function() {
                return o
            }));
            var r = function() {
                    return {
                        guilds: null
                    }
                },
                o = {
                    setGuilds: function(t, e) {
                        t.guilds = e
                    }
                }
        },
        226: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "state", (function() {
                return r
            })), n.d(e, "mutations", (function() {
                return o
            }));
            var r = function() {
                    return {
                        loggedIn: !1,
                        id: null,
                        username: null,
                        tag: null,
                        avatarUrl: null
                    }
                },
                o = {
                    setUser: function(t, e) {
                        t.id = e.id, t.username = e.username, t.tag = e.tag, t.avatarUrl = e.avatarUrl, t.loggedIn = !0
                    },
                    logout: function(t) {
                        t.loggedIn = !1, t.id = null, t.username = null, t.tag = null, t.avatarUrl = null
                    }
                }
        },
        36: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return Vt
            })), n.d(e, "a", (function() {
                return A
            }));
            n(21), n(13), n(20), n(31), n(11), n(32);
            var r = n(2),
                o = n(8),
                c = (n(25), n(30), n(53), n(14), n(48), n(55), n(0)),
                l = n(29),
                f = n(167),
                d = n(115),
                h = n.n(d),
                m = n(54),
                v = n.n(m),
                y = (n(26), n(33), n(116)),
                x = n(35),
                w = n(1);
            "scrollRestoration" in window.history && (Object(w.u)("manual"), window.addEventListener("beforeunload", (function() {
                Object(w.u)("auto")
            })), window.addEventListener("load", (function() {
                Object(w.u)("manual")
            })));

            function O(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function _(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? O(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : O(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var j = function() {};
            c.a.use(y.a);
            var k = {
                mode: "history",
                base: "/",
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function(t, e, n) {
                    var r = !1,
                        o = t !== e;
                    n ? r = n : o && function(t) {
                        var e = Object(w.g)(t);
                        if (1 === e.length) {
                            var n = e[0].options;
                            return !1 !== (void 0 === n ? {} : n).scrollToTop
                        }
                        return e.some((function(t) {
                            var e = t.options;
                            return e && e.scrollToTop
                        }))
                    }(t) && (r = {
                        x: 0,
                        y: 0
                    });
                    var c = window.$nuxt;
                    return (!o || t.path === e.path && t.hash !== e.hash) && c.$nextTick((function() {
                        return c.$emit("triggerScroll")
                    })), new Promise((function(e) {
                        c.$once("triggerScroll", (function() {
                            if (t.hash) {
                                var n = t.hash;
                                void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                                try {
                                    document.querySelector(n) && (r = {
                                        selector: n
                                    })
                                } catch (t) {
                                    console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                                }
                            }
                            e(r)
                        }))
                    }))
                },
                routes: [{
                    path: "/discord",
                    component: function() {
                        return Object(w.m)(n.e(20).then(n.bind(null, 283)))
                    },
                    name: "discord"
                }, {
                    path: "/invite",
                    component: function() {
                        return Object(w.m)(n.e(23).then(n.bind(null, 284)))
                    },
                    name: "invite"
                }, {
                    path: "/login",
                    component: function() {
                        return Object(w.m)(n.e(24).then(n.bind(null, 285)))
                    },
                    name: "login"
                }, {
                    path: "/logout",
                    component: function() {
                        return Object(w.m)(n.e(25).then(n.bind(null, 286)))
                    },
                    name: "logout"
                }, {
                    path: "/partners",
                    component: function() {
                        return Object(w.m)(n.e(26).then(n.bind(null, 287)))
                    },
                    name: "partners"
                }, {
                    path: "/patreon",
                    component: function() {
                        return Object(w.m)(n.e(27).then(n.bind(null, 288)))
                    },
                    name: "patreon"
                }, {
                    path: "/premium",
                    component: function() {
                        return Object(w.m)(n.e(28).then(n.bind(null, 289)))
                    },
                    name: "premium"
                }, {
                    path: "/setup-guide",
                    component: function() {
                        return Object(w.m)(n.e(29).then(n.bind(null, 290)))
                    },
                    name: "setup-guide"
                }, {
                    path: "/stats",
                    component: function() {
                        return Object(w.m)(n.e(30).then(n.bind(null, 291)))
                    },
                    name: "stats"
                }, {
                    path: "/user",
                    component: function() {
                        return Object(w.m)(n.e(31).then(n.bind(null, 292)))
                    },
                    name: "user"
                }, {
                    path: "/callback/:slug?",
                    component: function() {
                        return Object(w.m)(n.e(19).then(n.bind(null, 293)))
                    },
                    name: "callback-slug"
                }, {
                    path: "/guilds/:slug?",
                    component: function() {
                        return Object(w.m)(Promise.all([n.e(1), n.e(0), n.e(21)]).then(n.bind(null, 294)))
                    },
                    name: "guilds-slug"
                }, {
                    path: "/",
                    component: function() {
                        return Object(w.m)(n.e(22).then(n.bind(null, 295)))
                    },
                    name: "index"
                }],
                fallback: !1
            };

            function $(t, e) {
                var base = e._app && e._app.basePath || k.base,
                    n = new y.a(_(_({}, k), {}, {
                        base: base
                    })),
                    r = n.push;
                n.push = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return r.call(this, t, e, n)
                };
                var o = n.resolve.bind(n);
                return n.resolve = function(t, e, n) {
                    return "string" == typeof t && (t = Object(x.c)(t)), o(t, e, n)
                }, n
            }
            var C = {
                    name: "NuxtChild",
                    functional: !0,
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: ""
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        }
                    },
                    render: function(t, e) {
                        var n = e.parent,
                            data = e.data,
                            r = e.props,
                            o = n.$createElement;
                        data.nuxtChild = !0;
                        for (var c = n, l = n.$nuxt.nuxt.transitions, f = n.$nuxt.nuxt.defaultTransition, d = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && d++, n = n.$parent;
                        data.nuxtChildDepth = d;
                        var h = l[d] || f,
                            m = {};
                        P.forEach((function(t) {
                            void 0 !== h[t] && (m[t] = h[t])
                        }));
                        var v = {};
                        E.forEach((function(t) {
                            "function" == typeof h[t] && (v[t] = h[t].bind(c))
                        }));
                        var y = v.beforeEnter;
                        if (v.beforeEnter = function(t) {
                                if (window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    })), y) return y.call(c, t)
                            }, !1 === h.css) {
                            var x = v.leave;
                            (!x || x.length < 2) && (v.leave = function(t, e) {
                                x && x.call(c, t), c.$nextTick(e)
                            })
                        }
                        var w = o("routerView", data);
                        return r.keepAlive && (w = o("keep-alive", {
                            props: r.keepAliveProps
                        }, [w])), o("transition", {
                            props: m,
                            on: v
                        }, [w])
                    }
                },
                P = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
                E = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
                S = {
                    props: {
                        error: {
                            type: Object,
                            default: null
                        }
                    },
                    data: function() {
                        return {
                            pageNotFound: "404 Not Found"
                        }
                    },
                    mounted: function() {
                        this.$router.push("/")
                    }
                },
                R = n(24),
                A = Object(R.a)(S, (function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("div")
                }), [], !1, null, null, null).exports,
                T = n(19),
                D = (n(113), {
                    name: "Nuxt",
                    components: {
                        NuxtChild: C,
                        NuxtError: A
                    },
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: void 0
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        },
                        name: {
                            type: String,
                            default: "default"
                        }
                    },
                    errorCaptured: function(t) {
                        this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
                    },
                    computed: {
                        routerViewKey: function() {
                            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(w.c)(this.$route.matched[0].path)(this.$route.params);
                            var t = Object(T.a)(this.$route.matched, 1)[0];
                            if (!t) return this.$route.path;
                            var e = t.components.default;
                            if (e && e.options) {
                                var n = e.options;
                                if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                            }
                            return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                        }
                    },
                    beforeCreate: function() {
                        c.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                    },
                    render: function(t) {
                        var e = this;
                        return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                            return e.errorFromNuxtError = !1
                        })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                            props: {
                                to: "/"
                            }
                        }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                            return e.displayingNuxtError = !1
                        })), t(A, {
                            props: {
                                error: this.nuxt.err
                            }
                        })) : t("NuxtChild", {
                            key: this.routerViewKey,
                            props: this.$props
                        })
                    }
                }),
                L = (n(42), n(43), n(44), n(45), n(80), {
                    name: "NuxtLoading",
                    data: function() {
                        return {
                            percent: 0,
                            show: !1,
                            canSucceed: !0,
                            reversed: !1,
                            skipTimerCount: 0,
                            rtl: !1,
                            throttle: 200,
                            duration: 5e3,
                            continuous: !1
                        }
                    },
                    computed: {
                        left: function() {
                            return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                        }
                    },
                    beforeDestroy: function() {
                        this.clear()
                    },
                    methods: {
                        clear: function() {
                            clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                        },
                        start: function() {
                            var t = this;
                            return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                                return t.startTimer()
                            }), this.throttle) : this.startTimer(), this
                        },
                        set: function(t) {
                            return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
                        },
                        get: function() {
                            return this.percent
                        },
                        increase: function(t) {
                            return this.percent = Math.min(100, Math.floor(this.percent + t)), this
                        },
                        decrease: function(t) {
                            return this.percent = Math.max(0, Math.floor(this.percent - t)), this
                        },
                        pause: function() {
                            return clearInterval(this._timer), this
                        },
                        resume: function() {
                            return this.startTimer(), this
                        },
                        finish: function() {
                            return this.percent = this.reversed ? 0 : 100, this.hide(), this
                        },
                        hide: function() {
                            var t = this;
                            return this.clear(), setTimeout((function() {
                                t.show = !1, t.$nextTick((function() {
                                    t.percent = 0, t.reversed = !1
                                }))
                            }), 500), this
                        },
                        fail: function(t) {
                            return this.canSucceed = !1, this
                        },
                        startTimer: function() {
                            var t = this;
                            this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                                t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
                            }), 100)
                        }
                    },
                    render: function(t) {
                        var e = t(!1);
                        return this.show && (e = t("div", {
                            staticClass: "nuxt-progress",
                            class: {
                                "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                            },
                            style: {
                                width: this.percent + "%",
                                left: this.left
                            }
                        })), e
                    }
                }),
                M = (n(212), Object(R.a)(L, undefined, undefined, !1, null, null, null).exports);
            n(214), n(216), n(218);

            function I(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function N(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? I(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : I(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var U = {
                    fetchOnServer: !1,
                    fetch: function() {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.$cookies.get("sid")) {
                                            e.next = 26;
                                            break
                                        }
                                        return e.prev = 1, e.next = 4, t.$axios.get("/v1/user");
                                    case 4:
                                        n = e.sent, t.$store.commit("user/setUser", n.data), e.next = 13;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), t.$cookies.remove("sid"), t.$store.commit("user/logout"), t.$router.push("/login");
                                    case 13:
                                        if (t.guilds) {
                                            e.next = 23;
                                            break
                                        }
                                        return e.prev = 14, e.next = 17, t.$axios.get("/v1/guilds");
                                    case 17:
                                        r = e.sent, t.$store.commit("guilds/setGuilds", r.data), e.next = 23;
                                        break;
                                    case 21:
                                        e.prev = 21, e.t1 = e.catch(14);
                                    case 23:
                                        t.dataLoaded = !0, e.next = 27;
                                        break;
                                    case 26:
                                        t.$router.push("/login");
                                    case 27:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 8],
                                [14, 21]
                            ])
                        })))()
                    },
                    data: function() {
                        return {
                            dataLoaded: !1,
                            menu: !1
                        }
                    },
                    computed: N(N({}, Object(l.b)("user", ["loggedIn", "username", "tag", "avatarUrl"])), Object(l.b)("guilds", ["guilds"])),
                    middleware: "user",
                    methods: {
                        openMenu: function() {
                            this.menu = !0
                        },
                        closeMenu: function() {
                            this.menu = !1
                        }
                    },
                    mounted: function() {}
                },
                B = (n(220), Object(R.a)(U, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "main h-full w-full"
                    }, [n("div", {
                        staticClass: "relative sidebar w-20 guilds"
                    }, [n("div", {
                        staticClass: "\n        fixed\n        gap-2\n        flex flex-col\n        overflow-y-auto\n        top-0\n        px-2\n        py-4\n        bg-gray-800\n        border-r-4 border-black\n        disable-scroll\n        z-50\n        h-full\n      "
                    }, [n("nuxt-link", {
                        attrs: {
                            to: "/"
                        }
                    }, [n("svg", {
                        staticClass: "icon text-blue-900",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z",
                            "clip-rule": "evenodd"
                        }
                    })])]), t._v(" "), n("nuxt-link", {
                        attrs: {
                            to: "/user"
                        }
                    }, [n("img", {
                        staticClass: "icon",
                        attrs: {
                            src: t.avatarUrl
                        }
                    })]), t._v(" "), n("hr", {
                        staticClass: "border-blue-900 border-2"
                    }), t._v(" "), t._l(t.guilds, (function(t) {
                        return n("nuxt-link", {
                            key: t.id,
                            attrs: {
                                to: "/guilds/" + t.id
                            }
                        }, [n("img", {
                            staticClass: "icon",
                            attrs: {
                                src: t.icon
                            }
                        })])
                    }))], 2)]), t._v(" "), n("div", {
                        staticClass: "hidden navbar"
                    }, [n("button", {
                        staticClass: "p-2",
                        on: {
                            click: t.openMenu
                        }
                    }, [n("svg", {
                        staticClass: "h-10 w-10",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                        }
                    }, [n("path", {
                        attrs: {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M4 6h16M4 12h16M4 18h16"
                        }
                    })])])]), t._v(" "), t.menu ? n("div", {
                        staticClass: "menu"
                    }, [n("div", {
                        staticClass: "\n        top-0\n        fixed\n        overflow-scroll\n        disable-scroll\n        navbar-items\n        flex flex-col\n        gap-2\n        p-2\n        h-full\n        flex-1\n        z-10\n        bg-gray-900\n        border-r border-blue-900\n      "
                    }, [n("nuxt-link", {
                        attrs: {
                            to: "/"
                        }
                    }, [n("svg", {
                        staticClass: "icon text-blue-900",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z",
                            "clip-rule": "evenodd"
                        }
                    })])]), t._v(" "), n("nuxt-link", {
                        staticClass: "0",
                        attrs: {
                            to: "/user"
                        }
                    }, [n("img", {
                        staticClass: "icon",
                        attrs: {
                            src: t.avatarUrl
                        }
                    })]), t._v(" "), n("hr", {
                        staticClass: "border-blue-900 border-2 w-20"
                    }), t._v(" "), t._l(t.guilds, (function(t) {
                        return n("nuxt-link", {
                            key: t.id,
                            attrs: {
                                to: "/guilds/" + t.id
                            }
                        }, [n("img", {
                            staticClass: "icon",
                            attrs: {
                                src: t.icon
                            }
                        })])
                    }))], 2), t._v(" "), n("div", {
                        staticClass: "fixed h-screen w-screen top-0 left-0",
                        on: {
                            click: function(e) {
                                return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey ? null : t.closeMenu.apply(null, arguments)
                            }
                        }
                    })]) : t._e(), t._v(" "), t.dataLoaded ? n("Nuxt") : t._e(), t._v(" "), t.dataLoaded ? t._e() : n("Loading")], 1)
                }), [], !1, null, "0b9d9e10", null)),
                z = B.exports;
            installComponents(B, {
                Loading: n(175).default
            });

            function F(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }
            var K = {
                    fetchOnServer: !1,
                    fetch: function() {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            var n;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.$cookies.get("sid")) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.prev = 1, e.next = 4, t.$axios.get("/v1/user");
                                    case 4:
                                        n = e.sent, t.$store.commit("user/setUser", n.data), e.next = 12;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), t.$cookies.remove("sid"), t.$store.commit("user/logout");
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 8]
                            ])
                        })))()
                    },
                    data: function() {
                        return {
                            tabs: [{
                                title: "Home",
                                to: "/"
                            }, {
                                title: "Stats",
                                to: "/stats"
                            }, {
                                title: "Setup",
                                to: "/setup-guide"
                            }, {
                                title: "Premium",
                                to: "/premium"
                            }, {
                                title: "Partners",
                                to: "/partners"
                            }],
                            menu: !1
                        }
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? F(Object(source), !0).forEach((function(e) {
                                Object(o.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : F(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(l.b)("user", ["loggedIn", "username", "tag", "avatarUrl"])),
                    middleware: "user",
                    methods: {
                        toggleMenu: function() {
                            this.menu = !this.menu
                        }
                    },
                    mounted: function() {
                        console.log(this.username)
                    }
                },
                X = (n(223), Object(R.a)(K, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("div", {
                        staticClass: "header mb-10"
                    }, [n("div", {
                        staticClass: "\n        hidden\n        md:flex\n        top-0\n        sticky\n        navbar\n        flex-row\n        gap-4\n        justify-center\n        items-center\n        drop-shadow-lg\n        w-full\n        py-2\n        px-4\n      "
                    }, [t._m(0), t._v(" "), t._l(t.tabs, (function(e) {
                        return n("nuxt-link", {
                            key: e.to,
                            staticClass: "p-4 text-xl rounded-xl tab",
                            attrs: {
                                to: e.to
                            }
                        }, [t._v(t._s(e.title))])
                    })), t._v(" "), t.loggedIn ? n("nuxt-link", {
                        staticClass: "p-4 text-xl rounded-xl tab",
                        attrs: {
                            to: "/user"
                        }
                    }, [t._v(t._s(t.Dashboard))]) : t._e(), t._v(" "), t.loggedIn ? n("nuxt-link", {
                        staticClass: "\n          p-4\n          text-xl\n          rounded-xl\n          tab\n          last-tab\n          flex flex-row\n          place-items-center\n          justify-center\n          gap-1\n        ",
                        attrs: {
                            to: "user"
                        }
                    }, [n("div", {
                        staticClass: "text-lg overflow-hidden",
                        staticStyle: {
                            "max-width": "100px",
                            "max-height": "60px"
                        }
                    }, [t._v("\n          " + t._s(t.username + "#" + t.tag) + "\n        ")]), t._v(" "), n("img", {
                        staticClass: "h-10 w-10 rounded-full",
                        attrs: {
                            src: t.avatarUrl
                        }
                    })]) : n("nuxt-link", {
                        staticClass: "p-4 text-xl rounded-xl tab last-tab",
                        attrs: {
                            to: "login"
                        }
                    }, [t._v("Login")])], 2), t._v(" "), n("div", {
                        staticClass: "\n        navbar-menu\n        w-full\n        md:hidden\n        flex flex-col\n        drop-shadow-lg\n        py-2\n        bg-gray-800\n      "
                    }, [n("div", {
                        staticClass: "flex flex-row justify-between gap-2 z-10"
                    }, [t._m(1), t._v(" "), n("button", {
                        staticClass: "p-2",
                        on: {
                            click: t.toggleMenu
                        }
                    }, [n("svg", {
                        staticClass: "h-10 w-10",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                        }
                    }, [n("path", {
                        attrs: {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M4 6h16M4 12h16M4 18h16"
                        }
                    })])])])]), t._v(" "), t.menu ? n("div", {
                        staticClass: "\n        navbar-items\n        flex flex-col\n        w-full\n        h-full\n        fixed\n        bg-gray-800\n        top-0\n        items-center\n        justify-center\n      "
                    }, [n("button", {
                        staticClass: "right-0 top-0 absolute self-end p-2",
                        on: {
                            click: t.toggleMenu
                        }
                    }, [n("svg", {
                        staticClass: "h-10 w-10",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                        }
                    }, [n("path", {
                        attrs: {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M6 18L18 6M6 6l12 12"
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "\n          self-center\n          place-self-center\n          justify-self-center\n          flex flex-col\n          w-5/12\n        ",
                        on: {
                            click: t.toggleMenu
                        }
                    }, [t._l(t.tabs, (function(e) {
                        return n("nuxt-link", {
                            key: e.to,
                            staticClass: "p-4 text-xl rounded-xl",
                            attrs: {
                                to: e.to
                            }
                        }, [t._v(t._s(e.title))])
                    })), t._v(" "), t.loggedIn ? n("nuxt-link", {
                        staticClass: "\n            p-4\n            text-xl\n            rounded-xl\n            tab\n            flex flex-row\n            place-items-center\n            justify-center\n            gap-1\n          ",
                        attrs: {
                            to: "user"
                        }
                    }, [n("p", {
                        staticClass: "text-lg"
                    }, [t._v(t._s(t.username + "#" + t.tag))]), t._v(" "), n("img", {
                        staticClass: "h-10 w-10 rounded-full",
                        attrs: {
                            src: t.avatarUrl
                        }
                    })]) : n("nuxt-link", {
                        staticClass: "p-4 text-xl rounded-xl tab",
                        attrs: {
                            to: "login"
                        }
                    }, [t._v("Login")])], 2)]) : t._e()]), t._v(" "), n("Nuxt", {
                        staticClass: "body min-h-screen"
                    }), t._v(" "), t._m(2)], 1)
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("a", {
                        staticClass: "flex flex-row place-items-center left-0 absolute",
                        attrs: {
                            href: "/"
                        }
                    }, [n("img", {
                        staticClass: "w-14 h-14",
                        attrs: {
                            src: "icon.png"
                        }
                    }), t._v(" "), n("h2", {
                        staticClass: "text-xl font-semibold"
                    }, [t._v("Security Bot")])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "flex flex-row place-items-center"
                    }, [n("img", {
                        staticClass: "w-14 h-14",
                        attrs: {
                            src: "icon.png"
                        }
                    }), t._v(" "), n("h2", {
                        staticClass: "text-xl font-semibold"
                    }, [t._v("Security Bot")])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "footer bg-gray-800 flex flex-row sm:px-8 py-4 px-4 bottom-0"
                    }, [n("div", {
                        staticClass: "flex flex-col"
                    }, [n("div", {
                        staticClass: "flex flex-col"
                    }, [n("h2", {
                        staticClass: "text-2xl font-semibold"
                    }, [t._v("Security Bot")]), t._v(" "), n("p", {
                        staticClass: "text-md"
                    }, [t._v("Eliminate Unwanted Behavior in Seconds.")]), t._v(" "), n("p", {
                        staticClass: "text-gray-400 text-sm py-2"
                    }, [t._v("\n          © 2021 Security Bot - All rights reserved.\n        ")])])])])
                }], !1, null, "29a0bec5", null).exports);

            function H(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return W(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return W(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function W(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var V = {
                    _dashboard: Object(w.s)(z),
                    _default: Object(w.s)(X)
                },
                J = {
                    render: function(t, e) {
                        var n = t("NuxtLoading", {
                                ref: "loading"
                            }),
                            r = t(this.layout || "nuxt"),
                            o = t("div", {
                                domProps: {
                                    id: "__layout"
                                },
                                key: this.layoutName
                            }, [r]),
                            c = t("transition", {
                                props: {
                                    name: "layout",
                                    mode: "out-in"
                                },
                                on: {
                                    beforeEnter: function(t) {
                                        window.$nuxt.$nextTick((function() {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                }
                            }, [o]);
                        return t("div", {
                            domProps: {
                                id: "__nuxt"
                            }
                        }, [n, c])
                    },
                    data: function() {
                        return {
                            isOnline: !0,
                            layout: null,
                            layoutName: "",
                            nbFetching: 0
                        }
                    },
                    beforeCreate: function() {
                        c.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
                    },
                    created: function() {
                        this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                    },
                    mounted: function() {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.$loading = t.$refs.loading;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    watch: {
                        "nuxt.err": "errorChanged"
                    },
                    computed: {
                        isOffline: function() {
                            return !this.isOnline
                        },
                        isFetching: function() {
                            return this.nbFetching > 0
                        }
                    },
                    methods: {
                        refreshOnlineStatus: function() {
                            void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                        },
                        refresh: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n, r;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((n = Object(w.h)(t.$route)).length) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return t.$loading.start(), r = n.map((function(e) {
                                                var p = [];
                                                if (e.$options.fetch && e.$options.fetch.length && p.push(Object(w.q)(e.$options.fetch, t.context)), e.$fetch) p.push(e.$fetch());
                                                else {
                                                    var n, r = H(Object(w.e)(e.$vnode.componentInstance));
                                                    try {
                                                        for (r.s(); !(n = r.n()).done;) {
                                                            var component = n.value;
                                                            p.push(component.$fetch())
                                                        }
                                                    } catch (t) {
                                                        r.e(t)
                                                    } finally {
                                                        r.f()
                                                    }
                                                }
                                                return e.$options.asyncData && p.push(Object(w.q)(e.$options.asyncData, t.context).then((function(t) {
                                                    for (var n in t) c.a.set(e.$data, n, t[n])
                                                }))), Promise.all(p)
                                            })), e.prev = 5, e.next = 8, Promise.all(r);
                                        case 8:
                                            e.next = 15;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(w.k)(e.t0), t.error(e.t0);
                                        case 15:
                                            t.$loading.finish();
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, 10]
                                ])
                            })))()
                        },
                        errorChanged: function() {
                            if (this.nuxt.err) {
                                this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                                var t = (A.options || A).layout;
                                "function" == typeof t && (t = t(this.context)), this.setLayout(t)
                            }
                        },
                        setLayout: function(t) {
                            return t && V["_" + t] || (t = "default"), this.layoutName = t, this.layout = V["_" + t], this.layout
                        },
                        loadLayout: function(t) {
                            return t && V["_" + t] || (t = "default"), Promise.resolve(V["_" + t])
                        }
                    },
                    components: {
                        NuxtLoading: M
                    }
                };
            n(153), n(61);

            function Q(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return G(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return G(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function G(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            c.a.use(l.a);
            var Y = ["state", "getters", "actions", "mutations"],
                Z = {};
            Z.modules = Z.modules || {}, nt(n(225), "guilds.js"), nt(n(226), "user.js");
            var tt = Z instanceof Function ? Z : function() {
                return new l.a.Store(Object.assign({
                    strict: !1
                }, Z))
            };

            function et(t, e) {
                if (t.state && "function" != typeof t.state) {
                    console.warn("'state' should be a method that returns an object in ".concat(e));
                    var n = Object.assign({}, t.state);
                    t = Object.assign({}, t, {
                        state: function() {
                            return n
                        }
                    })
                }
                return t
            }

            function nt(t, e) {
                t = t.default || t;
                var n = e.replace(/\.(js|mjs)$/, "").split("/"),
                    r = n[n.length - 1],
                    o = "store/".concat(e);
                if (t = "state" === r ? function(t, e) {
                        if ("function" != typeof t) {
                            console.warn("".concat(e, " should export a method that returns an object"));
                            var n = Object.assign({}, t);
                            return function() {
                                return n
                            }
                        }
                        return et(t, e)
                    }(t, o) : et(t, o), Y.includes(r)) {
                    var c = r;
                    at(ot(Z, n, {
                        isProperty: !0
                    }), t, c)
                } else {
                    "index" === r && (n.pop(), r = n[n.length - 1]);
                    var l, f = ot(Z, n),
                        d = Q(Y);
                    try {
                        for (d.s(); !(l = d.n()).done;) {
                            var h = l.value;
                            at(f, t[h], h)
                        }
                    } catch (t) {
                        d.e(t)
                    } finally {
                        d.f()
                    }!1 === t.namespaced && delete f.namespaced
                }
            }

            function ot(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.isProperty,
                    o = void 0 !== r && r;
                if (!e.length || o && 1 === e.length) return t;
                var c = e.shift();
                return t.modules[c] = t.modules[c] || {}, t.modules[c].namespaced = !0, t.modules[c].modules = t.modules[c].modules || {}, ot(t.modules[c], e, {
                    isProperty: o
                })
            }

            function at(t, e, n) {
                e && ("state" === n ? t.state = e || t.state : t[n] = Object.assign({}, t[n], e))
            }
            n(79);

            function it(t) {
                if (!t || !t.functional) return t;
                var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
                return {
                    render: function(n) {
                        var r = {},
                            o = {};
                        for (var c in this.$attrs) e.includes(c) ? o[c] = this.$attrs[c] : r[c] = this.$attrs[c];
                        return n(t, {
                            on: this.$listeners,
                            attrs: r,
                            props: o,
                            scopedSlots: this.$scopedSlots
                        }, this.$slots.default)
                    }
                }
            }
            var st = {
                AntiNuke: function() {
                    return n.e(0).then(n.bind(null, 281)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                AntiSpam: function() {
                    return n.e(4).then(n.bind(null, 272)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                BeastMode: function() {
                    return n.e(5).then(n.bind(null, 274)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                Commands: function() {
                    return n.e(6).then(n.bind(null, 273)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                General: function() {
                    return n.e(7).then(n.bind(null, 266)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                Loading: function() {
                    return Promise.resolve().then(n.bind(null, 175)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                LockedChannelsView: function() {
                    return n.e(8).then(n.bind(null, 256)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                SaveConfirmation: function() {
                    return n.e(9).then(n.bind(null, 247)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                SelectDialog: function() {
                    return n.e(10).then(n.bind(null, 255)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                Status: function() {
                    return n.e(11).then(n.bind(null, 254)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                ToggleButton: function() {
                    return n.e(12).then(n.bind(null, 246)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                Whitelist: function() {
                    return n.e(1).then(n.bind(null, 282)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                WhitelistChannelEdit: function() {
                    return n.e(13).then(n.bind(null, 253)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                WhitelistChannelView: function() {
                    return n.e(14).then(n.bind(null, 269)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                WhitelistRoleEdit: function() {
                    return n.e(15).then(n.bind(null, 268)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                WhitelistRoleView: function() {
                    return n.e(16).then(n.bind(null, 267)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                WhitelistUserEdit: function() {
                    return n.e(17).then(n.bind(null, 271)).then((function(t) {
                        return it(t.default || t)
                    }))
                },
                WhitelistUserView: function() {
                    return n.e(18).then(n.bind(null, 270)).then((function(t) {
                        return it(t.default || t)
                    }))
                }
            };
            for (var ut in st) c.a.component(ut, st[ut]), c.a.component("Lazy" + ut, st[ut]);
            var ct = n(169),
                lt = n.n(ct);
            c.a.component("multiselect", lt.a);
            var ft = n(170),
                pt = n.n(ft);
            c.a.use(pt.a, {
                position: "top-center",
                duration: 2e3,
                className: "toast"
            });
            var ht = void 0;
            ht && ht.forEach((function(t) {
                c.a.toasted.register(t.name, t.message, t.options)
            }));
            var mt = function(t, e) {
                    e("toast", c.a.toasted)
                },
                bt = n(171),
                vt = n.n(bt),
                gt = function(t, e) {
                    var n = t.req,
                        r = t.res,
                        o = !0;
                    e("cookies", vt()(n, r, o))
                },
                yt = n(62),
                xt = n.n(yt),
                wt = n(172),
                Ot = n.n(wt);

            function _t(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function jt(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? _t(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : _t(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function kt(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return $t(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $t(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function $t(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            for (var Ct = {
                    setBaseURL: function(t) {
                        this.defaults.baseURL = t
                    },
                    setHeader: function(t, e) {
                        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            o = kt(Array.isArray(r) ? r : [r]);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var c = n.value;
                                if (!e) return void delete this.defaults.headers[c][t];
                                this.defaults.headers[c][t] = e
                            }
                        } catch (t) {
                            o.e(t)
                        } finally {
                            o.f()
                        }
                    },
                    setToken: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            r = t ? (e ? e + " " : "") + t : null;
                        this.setHeader("Authorization", r, n)
                    },
                    onRequest: function(t) {
                        this.interceptors.request.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onResponse: function(t) {
                        this.interceptors.response.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onRequestError: function(t) {
                        this.interceptors.request.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onResponseError: function(t) {
                        this.interceptors.response.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onError: function(t) {
                        this.onRequestError(t), this.onResponseError(t)
                    },
                    create: function(t) {
                        return Rt(Ot()(t, this.defaults))
                    }
                }, Pt = function() {
                    var t = St[Et];
                    Ct["$" + t] = function() {
                        return this[t].apply(this, arguments).then((function(t) {
                            return t && t.data
                        }))
                    }
                }, Et = 0, St = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; Et < St.length; Et++) Pt();
            var Rt = function(t) {
                    var e = xt.a.create(t);
                    return e.CancelToken = xt.a.CancelToken, e.isCancel = xt.a.isCancel,
                        function(t) {
                            for (var e in Ct) t[e] = Ct[e].bind(t)
                        }(e), e.onRequest((function(t) {
                            t.headers = jt(jt({}, e.defaults.headers.common), t.headers)
                        })), At(e), e
                },
                At = function(t) {
                    var e = {
                            finish: function() {},
                            start: function() {},
                            fail: function() {},
                            set: function() {}
                        },
                        n = function() {
                            var t = "undefined" != typeof window && window.$nuxt;
                            return t && t.$loading && t.$loading.set ? t.$loading : e
                        },
                        r = 0;
                    t.onRequest((function(t) {
                        t && !1 === t.progress || r++
                    })), t.onResponse((function(t) {
                        t && t.config && !1 === t.config.progress || --r <= 0 && (r = 0, n().finish())
                    })), t.onError((function(t) {
                        t && t.config && !1 === t.config.progress || (r--, xt.a.isCancel(t) ? r <= 0 && (r = 0, n().finish()) : (n().fail(), n().finish()))
                    }));
                    var o = function(t) {
                        if (r && t.total) {
                            var progress = 100 * t.loaded / (t.total * r);
                            n().set(Math.min(100, progress))
                        }
                    };
                    t.defaults.onUploadProgress = o, t.defaults.onDownloadProgress = o
                },
                Tt = function(t, e) {
                    var n = t.$config && t.$config.axios || {},
                        r = n.browserBaseURL || n.browserBaseUrl || n.baseURL || n.baseUrl || "https://securitybot.xyz";
                    var o = Rt({
                        baseURL: r,
                        headers: {
                            common: {
                                Accept: "application/json, text/plain, */*"
                            },
                            delete: {},
                            get: {},
                            head: {},
                            post: {},
                            put: {},
                            patch: {}
                        }
                    });
                    t.$axios = o, e("axios", o)
                },
                Dt = n(85);

            function Lt(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function Mt(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? Lt(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Lt(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            c.a.directive("anime", (function(t, e) {
                var n = Mt({
                        targets: t
                    }, e.value),
                    r = e.modifiers;
                Object(Dt.a)(n), r.set && (n = Mt({}, e.value), Dt.a.set(t, n))
            })), c.a.prototype.$anime = Dt.a;
            var It = n(173),
                Nt = n.n(It);

            function Ut(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function qt(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? Ut(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Ut(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var Bt = function() {
                var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n) {
                    var r, o;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (r = e.$config && e.$config.googleAnalytics || {}, "function" != typeof(o = qt(qt({}, {
                                        dev: !0,
                                        debug: {
                                            sendHitTask: !0
                                        },
                                        id: "UA-193148302-1"
                                    }), r)).asyncID) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 6, o.asyncID(e);
                            case 6:
                                o.id = t.sent;
                            case 7:
                                c.a.use(Nt.a, qt(qt({}, {
                                    router: e.app.router
                                }), o)), e.$ga = c.a.$ga, n("ga", c.a.$ga);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, n) {
                    return t.apply(this, arguments)
                }
            }();
            c.a.directive("click-outside", {
                bind: function(t, e, n) {
                    t.clickOutsideEvent = function(r) {
                        t == r.target || t.contains(r.target) || n.context[e.expression](r)
                    }, document.body.addEventListener("click", t.clickOutsideEvent)
                },
                unbind: function(t) {
                    document.body.removeEventListener("click", t.clickOutsideEvent)
                }
            });
            var zt = function(t, e) {
                var n = t.app;
                e("resolveError", function() {
                    var t = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e.response && e.response.data && e.response.data.message ? n.$toast.error(e.response.data.message) : n.$toast.error("Something went wrong, try again.");
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }())
            };

            function Ft(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function Kt(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? Ft(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Ft(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            c.a.component(h.a.name, h.a), c.a.component(v.a.name, Kt(Kt({}, v.a), {}, {
                render: function(t, e) {
                    return v.a._warned || (v.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), v.a.render(t, e)
                }
            })), c.a.component(C.name, C), c.a.component("NChild", C), c.a.component(D.name, D), Object.defineProperty(c.a.prototype, "$nuxt", {
                get: function() {
                    var t = this.$root.$options.$nuxt;
                    return t || "undefined" == typeof window ? t : window.$nuxt
                },
                configurable: !0
            }), c.a.use(f.a, {
                keyName: "head",
                attribute: "data-n-head",
                ssrAttribute: "data-n-head-ssr",
                tagIDKeyName: "hid"
            });
            var Xt = {
                    name: "page",
                    mode: "out-in",
                    appear: !1,
                    appearClass: "appear",
                    appearActiveClass: "appear-active",
                    appearToClass: "appear-to"
                },
                Ht = l.a.Store.prototype.registerModule;

            function Wt(path, t) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = Array.isArray(path) ? !!path.reduce((function(t, path) {
                        return t && t[path]
                    }), this.state) : path in this.state;
                return Ht.call(this, path, t, Kt({
                    preserveState: n
                }, e))
            }

            function Vt(t) {
                return Jt.apply(this, arguments)
            }

            function Jt() {
                return (Jt = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                    var n, o, l, f, d, h, path, m, v = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return m = function(t, e) {
                                    if (!t) throw new Error("inject(key, value) has no key provided");
                                    if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                                    f[t = "$" + t] = e, f.context[t] || (f.context[t] = e), l[t] = f[t];
                                    var n = "__nuxt_" + t + "_installed__";
                                    c.a[n] || (c.a[n] = !0, c.a.use((function() {
                                        Object.prototype.hasOwnProperty.call(c.a.prototype, t) || Object.defineProperty(c.a.prototype, t, {
                                            get: function() {
                                                return this.$root.$options[t]
                                            }
                                        })
                                    })))
                                }, n = v.length > 1 && void 0 !== v[1] ? v[1] : {}, t.next = 4, $(0, n);
                            case 4:
                                return o = t.sent, (l = tt(e)).$router = o, l.registerModule = Wt, f = Kt({
                                    head: {
                                        htmlAttrs: {
                                            lang: "en"
                                        },
                                        meta: [{
                                            charset: "utf-8"
                                        }, {
                                            name: "viewport",
                                            content: "width=device-width, initial-scale=1"
                                        }, {
                                            hid: "og:type",
                                            name: "og:type",
                                            property: "og:type",
                                            content: "website"
                                        }, {
                                            hid: "og:image",
                                            name: "og:image",
                                            property: "og:image",
                                            content: "/fabicon-200x.png"
                                        }, {
                                            name: "theme-color",
                                            content: "#23272a"
                                        }, {
                                            name: "msapplication-TileColor",
                                            content: "#23272a"
                                        }, {
                                            name: "keywords",
                                            content: "server security,discord security,discord protection,discord anti nuke,nuke protection discord bot,moderation discord bot,discord protection bot,anti nuke discord bot,security discord bot,security bot,security bot discord,بوت ديسكورد"
                                        }],
                                        link: [{
                                            rel: "icon",
                                            type: "image/png",
                                            sizes: "100x100",
                                            href: "/fabicon.png"
                                        }, {
                                            rel: "icon",
                                            type: "image/png",
                                            sizes: "200x200",
                                            href: "/fabicon-200x.png"
                                        }],
                                        style: [],
                                        script: []
                                    },
                                    store: l,
                                    router: o,
                                    nuxt: {
                                        defaultTransition: Xt,
                                        transitions: [Xt],
                                        setTransitions: function(t) {
                                            return Array.isArray(t) || (t = [t]), t = t.map((function(t) {
                                                return t = t ? "string" == typeof t ? Object.assign({}, Xt, {
                                                    name: t
                                                }) : Object.assign({}, Xt, t) : Xt
                                            })), this.$options.nuxt.transitions = t, t
                                        },
                                        err: null,
                                        dateErr: null,
                                        error: function(t) {
                                            t = t || null, f.context._errored = Boolean(t), t = t ? Object(w.p)(t) : null;
                                            var n = f.nuxt;
                                            return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
                                        }
                                    }
                                }, J), l.app = f, d = e ? e.next : function(t) {
                                    return f.router.push(t)
                                }, e ? h = o.resolve(e.url).route : (path = Object(w.f)(o.options.base, o.options.mode), h = o.resolve(path).route), t.next = 14, Object(w.t)(f, {
                                    store: l,
                                    route: h,
                                    next: d,
                                    error: f.nuxt.error.bind(f),
                                    payload: e ? e.payload : void 0,
                                    req: e ? e.req : void 0,
                                    res: e ? e.res : void 0,
                                    beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                    ssrContext: e
                                });
                            case 14:
                                m("config", n), window.__NUXT__ && window.__NUXT__.state && l.replaceState(window.__NUXT__.state), t.next = 20;
                                break;
                            case 20:
                                t.next = 23;
                                break;
                            case 23:
                                return t.next = 26, mt(f.context, m);
                            case 26:
                                return t.next = 29, gt(f.context, m);
                            case 29:
                                return t.next = 32, Tt(f.context, m);
                            case 32:
                                t.next = 35;
                                break;
                            case 35:
                                if ("function" != typeof Bt) {
                                    t.next = 38;
                                    break
                                }
                                return t.next = 38, Bt(f.context, m);
                            case 38:
                                t.next = 41;
                                break;
                            case 41:
                                return t.next = 44, zt(f.context, m);
                            case 44:
                                return t.next = 47, new Promise((function(t, e) {
                                    var n = o.resolve(f.context.route.fullPath).route;
                                    if (!n.matched.length) return t();
                                    o.replace(n, t, (function(n) {
                                        if (!n._isRouter) return e(n);
                                        if (2 !== n.type) return t();
                                        var c = o.afterEach(function() {
                                            var e = Object(r.a)(regeneratorRuntime.mark((function e(n, r) {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 3, Object(w.j)(n);
                                                        case 3:
                                                            f.context.route = e.sent, f.context.params = n.params || {}, f.context.query = n.query || {}, c(), t();
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t, n) {
                                                return e.apply(this, arguments)
                                            }
                                        }())
                                    }))
                                }));
                            case 47:
                                return t.abrupt("return", {
                                    store: l,
                                    app: f,
                                    router: o
                                });
                            case 48:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        86: function(t, e, n) {
            "use strict";
            n(80), n(11), n(61), n(79), n(53), n(20), n(14), n(42), n(30), n(43), n(26), n(13), n(44), n(45), n(33);
            var r = n(0);

            function o(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    f = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return l = t.done, t
                    },
                    e: function(t) {
                        f = !0, o = t
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return()
                        } finally {
                            if (f) throw o
                        }
                    }
                }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var l = window.requestIdleCallback || function(t) {
                    var e = Date.now();
                    return setTimeout((function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }), 1)
                },
                f = window.cancelIdleCallback || function(t) {
                    clearTimeout(t)
                },
                d = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
                    t.forEach((function(t) {
                        var e = t.intersectionRatio,
                            link = t.target;
                        e <= 0 || !link.__prefetch || link.__prefetch()
                    }))
                }));
            e.a = {
                name: "NuxtLink",
                extends: r.a.component("RouterLink"),
                props: {
                    prefetch: {
                        type: Boolean,
                        default: !0
                    },
                    noPrefetch: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    this.prefetch && !this.noPrefetch && (this.handleId = l(this.observe, {
                        timeout: 2e3
                    }))
                },
                beforeDestroy: function() {
                    f(this.handleId), this.__observed && (d.unobserve(this.$el), delete this.$el.__prefetch)
                },
                methods: {
                    observe: function() {
                        d && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), d.observe(this.$el), this.__observed = !0)
                    },
                    shouldPrefetch: function() {
                        return this.getPrefetchComponents().length > 0
                    },
                    canPrefetch: function() {
                        var t = navigator.connection;
                        return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                    },
                    getPrefetchComponents: function() {
                        return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                            return t.components.default
                        })).filter((function(t) {
                            return "function" == typeof t && !t.options && !t.__prefetched
                        }))
                    },
                    prefetchLink: function() {
                        if (this.canPrefetch()) {
                            d.unobserve(this.$el);
                            var t, e = o(this.getPrefetchComponents());
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var n = t.value,
                                        r = n();
                                    r instanceof Promise && r.catch((function() {})), n.__prefetched = !0
                                }
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                        }
                    }
                }
            }
        }
    },
    [
        [177, 32, 3, 33]
    ]
]);