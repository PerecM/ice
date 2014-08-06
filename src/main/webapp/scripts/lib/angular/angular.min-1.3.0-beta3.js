/*
 AngularJS v1.3.0-beta.3
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (Q, T, s) {
    'use strict';
    function C(b) {
        return function () {
            var a = arguments[0], c, a = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.3.0-beta.3/" + (b ? b + "/" : "") + a;
            for (c = 1; c < arguments.length; c++)a = a + (1 == c ? "?" : "&") + "p" + (c - 1) + "=" + encodeURIComponent("function" == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[c] ? "undefined" : "string" != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
            return Error(a)
        }
    }

    function cb(b) {
        if (null == b || Ba(b))return!1;
        var a = b.length;
        return 1 === b.nodeType && a ? !0 : A(b) || J(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
    }

    function r(b, a, c) {
        var d;
        if (b)if (F(b))for (d in b)"prototype" == d || ("length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d)) || a.call(c, b[d], d); else if (b.forEach && b.forEach !== r)b.forEach(a, c); else if (cb(b))for (d = 0; d < b.length; d++)a.call(c, b[d], d); else for (d in b)b.hasOwnProperty(d) && a.call(c, b[d], d);
        return b
    }

    function Sb(b) {
        var a = [], c;
        for (c in b)b.hasOwnProperty(c) && a.push(c);
        return a.sort()
    }

    function Zc(b, a, c) {
        for (var d = Sb(b), e = 0; e < d.length; e++)a.call(c, b[d[e]], d[e]);
        return d
    }

    function Tb(b) {
        return function (a, c) {
            b(c, a)
        }
    }

    function db() {
        for (var b = ia.length, a; b;) {
            b--;
            a = ia[b].charCodeAt(0);
            if (57 == a)return ia[b] = "A", ia.join("");
            if (90 == a)ia[b] = "0"; else return ia[b] = String.fromCharCode(a + 1), ia.join("")
        }
        ia.unshift("0");
        return ia.join("")
    }

    function Ub(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function t(b) {
        var a = b.$$hashKey;
        r(arguments, function (a) {
            a !== b && r(a, function (a, c) {
                b[c] = a
            })
        });
        Ub(b, a);
        return b
    }

    function P(b) {
        return parseInt(b,
            10)
    }

    function Vb(b, a) {
        return t(new (t(function () {
        }, {prototype: b})), a)
    }

    function z() {
    }

    function Ca(b) {
        return b
    }

    function Y(b) {
        return function () {
            return b
        }
    }

    function D(b) {
        return"undefined" === typeof b
    }

    function w(b) {
        return"undefined" !== typeof b
    }

    function W(b) {
        return null != b && "object" === typeof b
    }

    function A(b) {
        return"string" === typeof b
    }

    function zb(b) {
        return"number" === typeof b
    }

    function oa(b) {
        return"[object Date]" === ua.call(b)
    }

    function J(b) {
        return"[object Array]" === ua.call(b)
    }

    function F(b) {
        return"function" === typeof b
    }

    function eb(b) {
        return"[object RegExp]" === ua.call(b)
    }

    function Ba(b) {
        return b && b.document && b.location && b.alert && b.setInterval
    }

    function $c(b) {
        return!(!b || !(b.nodeName || b.prop && b.attr && b.find))
    }

    function ad(b, a, c) {
        var d = [];
        r(b, function (b, f, h) {
            d.push(a.call(c, b, f, h))
        });
        return d
    }

    function fb(b, a) {
        if (b.indexOf)return b.indexOf(a);
        for (var c = 0; c < b.length; c++)if (a === b[c])return c;
        return-1
    }

    function Da(b, a) {
        var c = fb(b, a);
        0 <= c && b.splice(c, 1);
        return a
    }

    function $(b, a) {
        if (Ba(b) || b && b.$evalAsync && b.$watch)throw Na("cpws");
        if (a) {
            if (b === a)throw Na("cpi");
            if (J(b))for (var c = a.length = 0; c < b.length; c++)a.push($(b[c])); else {
                c = a.$$hashKey;
                r(a, function (b, c) {
                    delete a[c]
                });
                for (var d in b)a[d] = $(b[d]);
                Ub(a, c)
            }
        } else(a = b) && (J(b) ? a = $(b, []) : oa(b) ? a = new Date(b.getTime()) : eb(b) ? a = RegExp(b.source) : W(b) && (a = $(b, {})));
        return a
    }

    function Wb(b, a) {
        a = a || {};
        for (var c in b)!b.hasOwnProperty(c) || "$" === c.charAt(0) && "$" === c.charAt(1) || (a[c] = b[c]);
        return a
    }

    function va(b, a) {
        if (b === a)return!0;
        if (null === b || null === a)return!1;
        if (b !== b && a !== a)return!0;
        var c = typeof b, d;
        if (c == typeof a && "object" == c)if (J(b)) {
            if (!J(a))return!1;
            if ((c = b.length) == a.length) {
                for (d = 0; d < c; d++)if (!va(b[d], a[d]))return!1;
                return!0
            }
        } else {
            if (oa(b))return oa(a) && b.getTime() == a.getTime();
            if (eb(b) && eb(a))return b.toString() == a.toString();
            if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || Ba(b) || Ba(a) || J(a))return!1;
            c = {};
            for (d in b)if ("$" !== d.charAt(0) && !F(b[d])) {
                if (!va(b[d], a[d]))return!1;
                c[d] = !0
            }
            for (d in a)if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== s && !F(a[d]))return!1;
            return!0
        }
        return!1
    }

    function Xb() {
        return T.securityPolicy && T.securityPolicy.isActive || T.querySelector && !(!T.querySelector("[ng-csp]") && !T.querySelector("[data-ng-csp]"))
    }

    function gb(b, a) {
        var c = 2 < arguments.length ? wa.call(arguments, 2) : [];
        return!F(a) || a instanceof RegExp ? a : c.length ? function () {
            return arguments.length ? a.apply(b, c.concat(wa.call(arguments, 0))) : a.apply(b, c)
        } : function () {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        }
    }

    function bd(b, a) {
        var c = a;
        "string" === typeof b && "$" === b.charAt(0) ? c =
            s : Ba(a) ? c = "$WINDOW" : a && T === a ? c = "$DOCUMENT" : a && (a.$evalAsync && a.$watch) && (c = "$SCOPE");
        return c
    }

    function pa(b, a) {
        return"undefined" === typeof b ? s : JSON.stringify(b, bd, a ? "  " : null)
    }

    function Yb(b) {
        return A(b) ? JSON.parse(b) : b
    }

    function Oa(b) {
        "function" === typeof b ? b = !0 : b && 0 !== b.length ? (b = O("" + b), b = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)) : b = !1;
        return b
    }

    function fa(b) {
        b = v(b).clone();
        try {
            b.empty()
        } catch (a) {
        }
        var c = v("<div>").append(b).html();
        try {
            return 3 === b[0].nodeType ? O(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
                function (a, b) {
                    return"<" + O(b)
                })
        } catch (d) {
            return O(c)
        }
    }

    function Zb(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {
        }
    }

    function $b(b) {
        var a = {}, c, d;
        r((b || "").split("&"), function (b) {
            b && (c = b.split("="), d = Zb(c[0]), w(d) && (b = w(c[1]) ? Zb(c[1]) : !0, a[d] ? J(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
        });
        return a
    }

    function ac(b) {
        var a = [];
        r(b, function (b, d) {
            J(b) ? r(b, function (b) {
                a.push(xa(d, !0) + (!0 === b ? "" : "=" + xa(b, !0)))
            }) : a.push(xa(d, !0) + (!0 === b ? "" : "=" + xa(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function Ab(b) {
        return xa(b,
            !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function xa(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+")
    }

    function cd(b, a) {
        function c(a) {
            a && d.push(a)
        }

        var d = [b], e, f, h = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], g = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        r(h, function (a) {
            h[a] = !0;
            c(T.getElementById(a));
            a = a.replace(":", "\\:");
            b.querySelectorAll && (r(b.querySelectorAll("." + a), c), r(b.querySelectorAll("." +
                a + "\\:"), c), r(b.querySelectorAll("[" + a + "]"), c))
        });
        r(d, function (a) {
            if (!e) {
                var b = g.exec(" " + a.className + " ");
                b ? (e = a, f = (b[2] || "").replace(/\s+/g, ",")) : r(a.attributes, function (b) {
                    !e && h[b.name] && (e = a, f = b.value)
                })
            }
        });
        e && a(e, f ? [f] : [])
    }

    function bc(b, a) {
        var c = function () {
            b = v(b);
            if (b.injector()) {
                var c = b[0] === T ? "document" : fa(b);
                throw Na("btstrpd", c);
            }
            a = a || [];
            a.unshift(["$provide", function (a) {
                a.value("$rootElement", b)
            }]);
            a.unshift("ng");
            c = cc(a);
            c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate",
                function (a, b, c, d, e) {
                    a.$apply(function () {
                        b.data("$injector", d);
                        c(b)(a)
                    })
                }]);
            return c
        }, d = /^NG_DEFER_BOOTSTRAP!/;
        if (Q && !d.test(Q.name))return c();
        Q.name = Q.name.replace(d, "");
        Pa.resumeBootstrap = function (b) {
            r(b, function (b) {
                a.push(b)
            });
            c()
        }
    }

    function hb(b, a) {
        a = a || "_";
        return b.replace(dd, function (b, d) {
            return(d ? a : "") + b.toLowerCase()
        })
    }

    function Bb(b, a, c) {
        if (!b)throw Na("areq", a || "?", c || "required");
        return b
    }

    function Qa(b, a, c) {
        c && J(b) && (b = b[b.length - 1]);
        Bb(F(b), a, "not a function, got " + (b && "object" == typeof b ?
            b.constructor.name || "Object" : typeof b));
        return b
    }

    function ya(b, a) {
        if ("hasOwnProperty" === b)throw Na("badname", a);
    }

    function dc(b, a, c) {
        if (!a)return b;
        a = a.split(".");
        for (var d, e = b, f = a.length, h = 0; h < f; h++)d = a[h], b && (b = (e = b)[d]);
        return!c && F(b) ? gb(e, b) : b
    }

    function Cb(b) {
        var a = b[0];
        b = b[b.length - 1];
        if (a === b)return v(a);
        var c = [a];
        do {
            a = a.nextSibling;
            if (!a)break;
            c.push(a)
        } while (a !== b);
        return v(c)
    }

    function ed(b) {
        var a = C("$injector"), c = C("ng");
        b = b.angular || (b.angular = {});
        b.$$minErr = b.$$minErr || C;
        return b.module ||
            (b.module = function () {
                var b = {};
                return function (e, f, h) {
                    if ("hasOwnProperty" === e)throw c("badname", "module");
                    f && b.hasOwnProperty(e) && (b[e] = null);
                    return b[e] || (b[e] = function () {
                        function b(a, d, e) {
                            return function () {
                                c[e || "push"]([a, d, arguments]);
                                return n
                            }
                        }

                        if (!f)throw a("nomod", e);
                        var c = [], d = [], l = b("$injector", "invoke"), n = {_invokeQueue: c, _runBlocks: d, requires: f, name: e, provider: b("$provide", "provider"), factory: b("$provide", "factory"), service: b("$provide", "service"), value: b("$provide", "value"), constant: b("$provide",
                            "constant", "unshift"), animation: b("$animateProvider", "register"), filter: b("$filterProvider", "register"), controller: b("$controllerProvider", "register"), directive: b("$compileProvider", "directive"), config: l, run: function (a) {
                            d.push(a);
                            return this
                        }};
                        h && l(h);
                        return n
                    }())
                }
            }())
    }

    function fd(b) {
        t(b, {bootstrap: bc, copy: $, extend: t, equals: va, element: v, forEach: r, injector: cc, noop: z, bind: gb, toJson: pa, fromJson: Yb, identity: Ca, isUndefined: D, isDefined: w, isString: A, isFunction: F, isObject: W, isNumber: zb, isElement: $c, isArray: J,
            version: gd, isDate: oa, lowercase: O, uppercase: Ea, callbacks: {counter: 0}, $$minErr: C, $$csp: Xb});
        Ra = ed(Q);
        try {
            Ra("ngLocale")
        } catch (a) {
            Ra("ngLocale", []).provider("$locale", hd)
        }
        Ra("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({$$sanitizeUri: id});
            a.provider("$compile", ec).directive({a: jd, input: fc, textarea: fc, form: kd, script: ld, select: md, style: nd, option: od, ngBind: pd, ngBindHtml: qd, ngBindTemplate: rd, ngClass: sd, ngClassEven: td, ngClassOdd: ud, ngCloak: vd, ngController: wd, ngForm: xd, ngHide: yd, ngIf: zd, ngInclude: Ad,
                ngInit: Bd, ngNonBindable: Cd, ngPluralize: Dd, ngRepeat: Ed, ngShow: Fd, ngStyle: Gd, ngSwitch: Hd, ngSwitchWhen: Id, ngSwitchDefault: Jd, ngOptions: Kd, ngTransclude: Ld, ngModel: Md, ngList: Nd, ngChange: Od, required: gc, ngRequired: gc, ngValue: Pd}).directive({ngInclude: Qd}).directive(Db).directive(hc);
            a.provider({$anchorScroll: Rd, $animate: Sd, $browser: Td, $cacheFactory: Ud, $controller: Vd, $document: Wd, $exceptionHandler: Xd, $filter: ic, $interpolate: Yd, $interval: Zd, $http: $d, $httpBackend: ae, $location: be, $log: ce, $parse: de, $rootScope: ee,
                $q: fe, $sce: ge, $sceDelegate: he, $sniffer: ie, $templateCache: je, $timeout: ke, $window: le, $$rAF: me, $$asyncCallback: ne})
        }])
    }

    function Sa(b) {
        return b.replace(oe, function (a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(pe, "Moz$1")
    }

    function Eb(b, a, c, d) {
        function e(b) {
            var e = c && b ? [this.filter(b)] : [this], m = a, k, l, n, q, p, u;
            if (!d || null != b)for (; e.length;)for (k = e.shift(), l = 0, n = k.length; l < n; l++)for (q = v(k[l]), m ? q.triggerHandler("$destroy") : m = !m, p = 0, q = (u = q.children()).length; p < q; p++)e.push(Fa(u[p]));
            return f.apply(this, arguments)
        }

        var f = Fa.fn[b], f = f.$original || f;
        e.$original = f;
        Fa.fn[b] = e
    }

    function N(b) {
        if (b instanceof N)return b;
        A(b) && (b = aa(b));
        if (!(this instanceof N)) {
            if (A(b) && "<" != b.charAt(0))throw Fb("nosel");
            return new N(b)
        }
        if (A(b)) {
            var a = T.createElement("div");
            a.innerHTML = "<div>&#160;</div>" + b;
            a.removeChild(a.firstChild);
            Gb(this, a.childNodes);
            v(T.createDocumentFragment()).append(this)
        } else Gb(this, b)
    }

    function Hb(b) {
        return b.cloneNode(!0)
    }

    function Ga(b) {
        jc(b);
        var a = 0;
        for (b = b.childNodes || []; a < b.length; a++)Ga(b[a])
    }

    function kc(b, a, c, d) {
        if (w(d))throw Fb("offargs");
        var e = ja(b, "events");
        ja(b, "handle") && (D(a) ? r(e, function (a, c) {
            Ta(b, c, a);
            delete e[c]
        }) : r(a.split(" "), function (a) {
            D(c) ? (Ta(b, a, e[a]), delete e[a]) : Da(e[a] || [], c)
        }))
    }

    function jc(b, a) {
        var c = b[ib], d = Ua[c];
        d && (a ? delete Ua[c].data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), kc(b)), delete Ua[c], b[ib] = s))
    }

    function ja(b, a, c) {
        var d = b[ib], d = Ua[d || -1];
        if (w(c))d || (b[ib] = d = ++qe, d = Ua[d] = {}), d[a] = c; else return d && d[a]
    }

    function lc(b, a, c) {
        var d = ja(b, "data"), e = w(c), f = !e &&
            w(a), h = f && !W(a);
        d || h || ja(b, "data", d = {});
        if (e)d[a] = c; else if (f) {
            if (h)return d && d[a];
            t(d, a)
        } else return d
    }

    function Ib(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
    }

    function jb(b, a) {
        a && b.setAttribute && r(a.split(" "), function (a) {
            b.setAttribute("class", aa((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + aa(a) + " ", " ")))
        })
    }

    function kb(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g,
                " ");
            r(a.split(" "), function (a) {
                a = aa(a);
                -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            });
            b.setAttribute("class", aa(c))
        }
    }

    function Gb(b, a) {
        if (a) {
            a = a.nodeName || !w(a.length) || Ba(a) ? [a] : a;
            for (var c = 0; c < a.length; c++)b.push(a[c])
        }
    }

    function mc(b, a) {
        return lb(b, "$" + (a || "ngController") + "Controller")
    }

    function lb(b, a, c) {
        b = v(b);
        9 == b[0].nodeType && (b = b.find("html"));
        for (a = J(a) ? a : [a]; b.length;) {
            for (var d = b[0], e = 0, f = a.length; e < f; e++)if ((c = b.data(a[e])) !== s)return c;
            b = v(d.parentNode || 11 === d.nodeType && d.host)
        }
    }

    function nc(b) {
        for (var a =
            0, c = b.childNodes; a < c.length; a++)Ga(c[a]);
        for (; b.firstChild;)b.removeChild(b.firstChild)
    }

    function oc(b, a) {
        var c = mb[a.toLowerCase()];
        return c && pc[b.nodeName] && c
    }

    function re(b, a) {
        var c = function (c, e) {
            c.preventDefault || (c.preventDefault = function () {
                c.returnValue = !1
            });
            c.stopPropagation || (c.stopPropagation = function () {
                c.cancelBubble = !0
            });
            c.target || (c.target = c.srcElement || T);
            if (D(c.defaultPrevented)) {
                var f = c.preventDefault;
                c.preventDefault = function () {
                    c.defaultPrevented = !0;
                    f.call(c)
                };
                c.defaultPrevented = !1
            }
            c.isDefaultPrevented =
                function () {
                    return c.defaultPrevented || !1 === c.returnValue
                };
            var h = Wb(a[e || c.type] || []);
            r(h, function (a) {
                a.call(b, c)
            });
            8 >= V ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented)
        };
        c.elem = b;
        return c
    }

    function Ha(b) {
        var a = typeof b, c;
        "object" == a && null !== b ? "function" == typeof(c = b.$$hashKey) ? c = b.$$hashKey() : c === s && (c = b.$$hashKey = db()) : c = b;
        return a + ":" + c
    }

    function Va(b) {
        r(b, this.put, this)
    }

    function qc(b) {
        var a, c;
        "function" == typeof b ? (a = b.$inject) || (a = [], b.length && (c = b.toString().replace(se, ""), c = c.match(te), r(c[1].split(ue), function (b) {
            b.replace(ve, function (b, c, d) {
                a.push(d)
            })
        })), b.$inject = a) : J(b) ? (c = b.length - 1, Qa(b[c], "fn"), a = b.slice(0, c)) : Qa(b, "fn", !0);
        return a
    }

    function cc(b) {
        function a(a) {
            return function (b, c) {
                if (W(b))r(b, Tb(a)); else return a(b, c)
            }
        }

        function c(a, b) {
            ya(a, "service");
            if (F(b) || J(b))b = n.instantiate(b);
            if (!b.$get)throw Wa("pget", a);
            return l[a + g] = b
        }

        function d(a, b) {
            return c(a, {$get: b})
        }

        function e(a) {
            var b = [],
                c, d, f, g;
            r(a, function (a) {
                if (!k.get(a)) {
                    k.put(a, !0);
                    try {
                        if (A(a))for (c = Ra(a), b = b.concat(e(c.requires)).concat(c._runBlocks), d = c._invokeQueue, f = 0, g = d.length; f < g; f++) {
                            var h = d[f], m = n.get(h[0]);
                            m[h[1]].apply(m, h[2])
                        } else F(a) ? b.push(n.invoke(a)) : J(a) ? b.push(n.invoke(a)) : Qa(a, "module")
                    } catch (l) {
                        throw J(a) && (a = a[a.length - 1]), l.message && (l.stack && -1 == l.stack.indexOf(l.message)) && (l = l.message + "\n" + l.stack), Wa("modulerr", a, l.stack || l.message || l);
                    }
                }
            });
            return b
        }

        function f(a, b) {
            function c(d) {
                if (a.hasOwnProperty(d)) {
                    if (a[d] ===
                        h)throw Wa("cdep", m.join(" <- "));
                    return a[d]
                }
                try {
                    return m.unshift(d), a[d] = h, a[d] = b(d)
                } catch (e) {
                    throw a[d] === h && delete a[d], e;
                } finally {
                    m.shift()
                }
            }

            function d(a, b, e) {
                var f = [], g = qc(a), h, m, k;
                m = 0;
                for (h = g.length; m < h; m++) {
                    k = g[m];
                    if ("string" !== typeof k)throw Wa("itkn", k);
                    f.push(e && e.hasOwnProperty(k) ? e[k] : c(k))
                }
                a.$inject || (a = a[h]);
                return a.apply(b, f)
            }

            return{invoke: d, instantiate: function (a, b) {
                var c = function () {
                }, e;
                c.prototype = (J(a) ? a[a.length - 1] : a).prototype;
                c = new c;
                e = d(a, c, b);
                return W(e) || F(e) ? e : c
            }, get: c,
                annotate: qc, has: function (b) {
                    return l.hasOwnProperty(b + g) || a.hasOwnProperty(b)
                }}
        }

        var h = {}, g = "Provider", m = [], k = new Va, l = {$provide: {provider: a(c), factory: a(d), service: a(function (a, b) {
            return d(a, ["$injector", function (a) {
                return a.instantiate(b)
            }])
        }), value: a(function (a, b) {
            return d(a, Y(b))
        }), constant: a(function (a, b) {
            ya(a, "constant");
            l[a] = b;
            q[a] = b
        }), decorator: function (a, b) {
            var c = n.get(a + g), d = c.$get;
            c.$get = function () {
                var a = p.invoke(d, c);
                return p.invoke(b, null, {$delegate: a})
            }
        }}}, n = l.$injector = f(l, function () {
            throw Wa("unpr",
                m.join(" <- "));
        }), q = {}, p = q.$injector = f(q, function (a) {
            a = n.get(a + g);
            return p.invoke(a.$get, a)
        });
        r(e(b), function (a) {
            p.invoke(a || z)
        });
        return p
    }

    function Rd() {
        var b = !0;
        this.disableAutoScrolling = function () {
            b = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
            function e(a) {
                var b = null;
                r(a, function (a) {
                    b || "a" !== O(a.nodeName) || (b = a)
                });
                return b
            }

            function f() {
                var b = c.hash(), d;
                b ? (d = h.getElementById(b)) ? d.scrollIntoView() : (d = e(h.getElementsByName(b))) ? d.scrollIntoView() : "top" === b && a.scrollTo(0, 0) :
                    a.scrollTo(0, 0)
            }

            var h = a.document;
            b && d.$watch(function () {
                return c.hash()
            }, function () {
                d.$evalAsync(f)
            });
            return f
        }]
    }

    function ne() {
        this.$get = ["$$rAF", "$timeout", function (b, a) {
            return b.supported ? function (a) {
                return b(a)
            } : function (b) {
                return a(b, 0, !1)
            }
        }]
    }

    function we(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, wa.call(arguments, 1))
            } finally {
                if (u--, 0 === u)for (; I.length;)try {
                    I.pop()()
                } catch (b) {
                    c.error(b)
                }
            }
        }

        function f(a, b) {
            (function nb() {
                r(E, function (a) {
                    a()
                });
                y = b(nb, a)
            })()
        }

        function h() {
            x = null;
            H != g.url() && (H = g.url(),
                r(ba, function (a) {
                    a(g.url())
                }))
        }

        var g = this, m = a[0], k = b.location, l = b.history, n = b.setTimeout, q = b.clearTimeout, p = {};
        g.isMock = !1;
        var u = 0, I = [];
        g.$$completeOutstandingRequest = e;
        g.$$incOutstandingRequestCount = function () {
            u++
        };
        g.notifyWhenNoOutstandingRequests = function (a) {
            r(E, function (a) {
                a()
            });
            0 === u ? a() : I.push(a)
        };
        var E = [], y;
        g.addPollFn = function (a) {
            D(y) && f(100, n);
            E.push(a);
            return a
        };
        var H = k.href, K = a.find("base"), x = null;
        g.url = function (a, c) {
            k !== b.location && (k = b.location);
            l !== b.history && (l = b.history);
            if (a) {
                if (H !=
                    a)return H = a, d.history ? c ? l.replaceState(null, "", a) : (l.pushState(null, "", a), K.attr("href", K.attr("href"))) : (x = a, c ? k.replace(a) : k.href = a), g
            } else return x || k.href.replace(/%27/g, "'")
        };
        var ba = [], R = !1;
        g.onUrlChange = function (a) {
            if (!R) {
                if (d.history)v(b).on("popstate", h);
                if (d.hashchange)v(b).on("hashchange", h); else g.addPollFn(h);
                R = !0
            }
            ba.push(a);
            return a
        };
        g.baseHref = function () {
            var a = K.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var M = {}, Z = "", U = g.baseHref();
        g.cookies = function (a, b) {
            var d,
                e, f, g;
            if (a)b === s ? m.cookie = escape(a) + "=;path=" + U + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : A(b) && (d = (m.cookie = escape(a) + "=" + escape(b) + ";path=" + U).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")); else {
                if (m.cookie !== Z)for (Z = m.cookie, d = Z.split("; "), M = {}, f = 0; f < d.length; f++)e = d[f], g = e.indexOf("="), 0 < g && (a = unescape(e.substring(0, g)), M[a] === s && (M[a] = unescape(e.substring(g + 1))));
                return M
            }
        };
        g.defer = function (a, b) {
            var c;
            u++;
            c = n(function () {
                delete p[c];
                e(a)
            }, b || 0);
            p[c] = !0;
            return c
        };
        g.defer.cancel = function (a) {
            return p[a] ? (delete p[a], q(a), e(z), !0) : !1
        }
    }

    function Td() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (b, a, c, d) {
            return new we(b, d, a, c)
        }]
    }

    function Ud() {
        this.$get = function () {
            function b(b, d) {
                function e(a) {
                    a != n && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, n), n = a, n.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }

                if (b in a)throw C("$cacheFactory")("iid", b);
                var h = 0, g = t({}, d, {id: b}), m = {}, k = d && d.capacity || Number.MAX_VALUE, l = {}, n = null, q = null;
                return a[b] = {put: function (a, b) {
                    if (k < Number.MAX_VALUE) {
                        var c = l[a] || (l[a] = {key: a});
                        e(c)
                    }
                    if (!D(b))return a in m || h++, m[a] = b, h > k && this.remove(q.key), b
                }, get: function (a) {
                    if (k < Number.MAX_VALUE) {
                        var b = l[a];
                        if (!b)return;
                        e(b)
                    }
                    return m[a]
                }, remove: function (a) {
                    if (k < Number.MAX_VALUE) {
                        var b = l[a];
                        if (!b)return;
                        b == n && (n = b.p);
                        b == q && (q = b.n);
                        f(b.n, b.p);
                        delete l[a]
                    }
                    delete m[a];
                    h--
                }, removeAll: function () {
                    m = {};
                    h = 0;
                    l = {};
                    n = q = null
                }, destroy: function () {
                    l = g = m = null;
                    delete a[b]
                }, info: function () {
                    return t({}, g, {size: h})
                }}
            }

            var a = {};
            b.info = function () {
                var b = {};
                r(a, function (a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function (b) {
                return a[b]
            };
            return b
        }
    }

    function je() {
        this.$get = ["$cacheFactory", function (b) {
            return b("templates")
        }]
    }

    function ec(b, a) {
        var c = {}, d = "Directive", e = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, f = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, h = /^<\s*(tr|th|td|thead|tbody|tfoot)(\s+[^>]*)?>/i, g = /^(on[a-z]+|formaction)$/;
        this.directive = function k(a, e) {
            ya(a, "directive");
            A(a) ? (Bb(e, "directiveFactory"), c.hasOwnProperty(a) || (c[a] = [], b.factory(a +
                d, ["$injector", "$exceptionHandler", function (b, d) {
                var e = [];
                r(c[a], function (c, f) {
                    try {
                        var g = b.invoke(c);
                        F(g) ? g = {compile: Y(g)} : !g.compile && g.link && (g.compile = Y(g.link));
                        g.priority = g.priority || 0;
                        g.index = f;
                        g.name = g.name || a;
                        g.require = g.require || g.controller && g.name;
                        g.restrict = g.restrict || "A";
                        e.push(g)
                    } catch (h) {
                        d(h)
                    }
                });
                return e
            }])), c[a].push(e)) : r(a, Tb(k));
            return this
        };
        this.aHrefSanitizationWhitelist = function (b) {
            return w(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist =
            function (b) {
                return w(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
            };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, b, n, q, p, u, I, E, y, H, K, x) {
            function ba(a, b, c, d, e) {
                a instanceof v || (a = v(a));
                r(a, function (b, c) {
                    3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = v(b).wrap("<span></span>").parent()[0])
                });
                var f = M(a, b, a, c, d, e);
                R(a, "ng-scope");
                return function (b, c, d) {
                    Bb(b, "scope");
                    var e = c ? Ia.clone.call(a) : a;
                    r(d, function (a, b) {
                        e.data("$" + b + "Controller", a)
                    });
                    d = 0;
                    for (var g = e.length; d < g; d++) {
                        var h = e[d].nodeType;
                        1 !== h && 9 !== h || e.eq(d).data("$scope", b)
                    }
                    c && c(e, b);
                    f && f(b, e, e);
                    return e
                }
            }

            function R(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function M(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, k, l, n, p, q, u;
                    f = c.length;
                    var ca = Array(f);
                    for (p = 0; p < f; p++)ca[p] = c[p];
                    u = p = 0;
                    for (q = h.length; p < q; u++)k = ca[u], c = h[p++], f = h[p++], l = v(k), c ? (c.scope ? (n = a.$new(), l.data("$scope", n)) : n = a, (l = c.transclude) ||
                        !e && b ? c(f, n, k, d, Z(a, l || b)) : c(f, n, k, d, e)) : f && f(a, k.childNodes, s, e)
                }

                for (var h = [], k, l, n, p, q = 0; q < a.length; q++)k = new Jb, l = U(a[q], [], k, 0 === q ? d : s, e), (f = l.length ? Xa(l, a[q], k, b, c, null, [], [], f) : null) && f.scope && R(v(a[q]), "ng-scope"), k = f && f.terminal || !(n = a[q].childNodes) || !n.length ? null : M(n, f ? f.transclude : b), h.push(f, k), p = p || f || k, f = null;
                return p ? g : null
            }

            function Z(a, b) {
                return function (c, d, e) {
                    var f = !1;
                    c || (c = a.$new(), f = c.$$transcluded = !0);
                    d = b(c, d, e);
                    if (f)d.on("$destroy", gb(c, c.$destroy));
                    return d
                }
            }

            function U(a, b, c, d, g) {
                var h = c.$attr, k;
                switch (a.nodeType) {
                    case 1:
                        w(b, ka(Ja(a).toLowerCase()), "E", d, g);
                        var l, n, p;
                        k = a.attributes;
                        for (var q = 0, u = k && k.length; q < u; q++) {
                            var I = !1, E = !1;
                            l = k[q];
                            if (!V || 8 <= V || l.specified) {
                                n = l.name;
                                p = ka(n);
                                la.test(p) && (n = hb(p.substr(6), "-"));
                                var H = p.replace(/(Start|End)$/, "");
                                p === H + "Start" && (I = n, E = n.substr(0, n.length - 5) + "end", n = n.substr(0, n.length - 6));
                                p = ka(n.toLowerCase());
                                h[p] = n;
                                c[p] = l = aa(l.value);
                                oc(a, p) && (c[p] = !0);
                                ga(a, b, l, p);
                                w(b, p, "A", d, g, I, E)
                            }
                        }
                        a = a.className;
                        if (A(a) && "" !== a)for (; k = f.exec(a);)p =
                            ka(k[2]), w(b, p, "C", d, g) && (c[p] = aa(k[3])), a = a.substr(k.index + k[0].length);
                        break;
                    case 3:
                        N(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (k = e.exec(a.nodeValue))p = ka(k[1]), w(b, p, "M", d, g) && (c[p] = aa(k[2]))
                        } catch (x) {
                        }
                }
                b.sort(C);
                return b
            }

            function B(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a)throw ha("uterdir", b, c);
                        1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else d.push(a);
                return v(d)
            }

            function za(a, b, c) {
                return function (d, e, f, g, h) {
                    e = B(e[0],
                        b, c);
                    return a(d, e, f, g, h)
                }
            }

            function Xa(a, c, d, e, f, g, h, k, p) {
                function q(a, b, c, d) {
                    if (a) {
                        c && (a = za(a, c, d));
                        a.require = G.require;
                        if (M === G || G.$$isolateScope)a = rc(a, {isolateScope: !0});
                        h.push(a)
                    }
                    if (b) {
                        c && (b = za(b, c, d));
                        b.require = G.require;
                        if (M === G || G.$$isolateScope)b = rc(b, {isolateScope: !0});
                        k.push(b)
                    }
                }

                function E(a, b, c) {
                    var d, e = "data", f = !1;
                    if (A(a)) {
                        for (; "^" == (d = a.charAt(0)) || "?" == d;)a = a.substr(1), "^" == d && (e = "inheritedData"), f = f || "?" == d;
                        d = null;
                        c && "data" === e && (d = c[a]);
                        d = d || b[e]("$" + a + "Controller");
                        if (!d && !f)throw ha("ctreq",
                            a, ga);
                    } else J(a) && (d = [], r(a, function (a) {
                        d.push(E(a, b, c))
                    }));
                    return d
                }

                function H(a, e, f, g, p) {
                    function q(a, b) {
                        var c;
                        2 > arguments.length && (b = a, a = s);
                        Ka && (c = za);
                        return p(a, b, c)
                    }

                    var x, ca, y, B, ba, U, za = {}, w;
                    x = c === f ? d : Wb(d, new Jb(v(f), d.$attr));
                    ca = x.$$element;
                    if (M) {
                        var xe = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        g = v(f);
                        U = e.$new(!0);
                        Z && Z === M.$$originalDirective ? g.data("$isolateScope", U) : g.data("$isolateScopeNoTemplate", U);
                        R(g, "ng-isolate-scope");
                        r(M.scope, function (a, c) {
                            var d = a.match(xe) || [], f = d[3] || c, g = "?" == d[2], d = d[1],
                                h, k, n, p;
                            U.$$isolateBindings[c] = d + f;
                            switch (d) {
                                case "@":
                                    x.$observe(f, function (a) {
                                        U[c] = a
                                    });
                                    x.$$observers[f].$$scope = e;
                                    x[f] && (U[c] = b(x[f])(e));
                                    break;
                                case "=":
                                    if (g && !x[f])break;
                                    k = u(x[f]);
                                    p = k.literal ? va : function (a, b) {
                                        return a === b
                                    };
                                    n = k.assign || function () {
                                        h = U[c] = k(e);
                                        throw ha("nonassign", x[f], M.name);
                                    };
                                    h = U[c] = k(e);
                                    U.$watch(function () {
                                        var a = k(e);
                                        p(a, U[c]) || (p(a, h) ? n(e, a = U[c]) : U[c] = a);
                                        return h = a
                                    }, null, k.literal);
                                    break;
                                case "&":
                                    k = u(x[f]);
                                    U[c] = function (a) {
                                        return k(e, a)
                                    };
                                    break;
                                default:
                                    throw ha("iscp", M.name, c,
                                        a);
                            }
                        })
                    }
                    w = p && q;
                    K && r(K, function (a) {
                        var b = {$scope: a === M || a.$$isolateScope ? U : e, $element: ca, $attrs: x, $transclude: w}, c;
                        ba = a.controller;
                        "@" == ba && (ba = x[a.name]);
                        c = I(ba, b);
                        za[a.name] = c;
                        Ka || ca.data("$" + a.name + "Controller", c);
                        a.controllerAs && (b.$scope[a.controllerAs] = c)
                    });
                    g = 0;
                    for (y = h.length; g < y; g++)try {
                        B = h[g], B(B.isolateScope ? U : e, ca, x, B.require && E(B.require, ca, za), w)
                    } catch (t) {
                        n(t, fa(ca))
                    }
                    g = e;
                    M && (M.template || null === M.templateUrl) && (g = U);
                    a && a(g, f.childNodes, s, p);
                    for (g = k.length - 1; 0 <= g; g--)try {
                        B = k[g], B(B.isolateScope ?
                            U : e, ca, x, B.require && E(B.require, ca, za), w)
                    } catch (L) {
                        n(L, fa(ca))
                    }
                }

                p = p || {};
                for (var x = -Number.MAX_VALUE, y, K = p.controllerDirectives, M = p.newIsolateScopeDirective, Z = p.templateDirective, w = p.nonTlbTranscludeDirective, Xa = !1, Ka = p.hasElementTranscludeDirective, L = d.$$element = v(c), G, ga, t, C = e, N, la = 0, P = a.length; la < P; la++) {
                    G = a[la];
                    var S = G.$$start, V = G.$$end;
                    S && (L = B(c, S, V));
                    t = s;
                    if (x > G.priority)break;
                    if (t = G.scope)y = y || G, G.templateUrl || (Q("new/isolated scope", M, G, L), W(t) && (M = G));
                    ga = G.name;
                    !G.templateUrl && G.controller &&
                    (t = G.controller, K = K || {}, Q("'" + ga + "' controller", K[ga], G, L), K[ga] = G);
                    if (t = G.transclude)Xa = !0, G.$$tlb || (Q("transclusion", w, G, L), w = G), "element" == t ? (Ka = !0, x = G.priority, t = B(c, S, V), L = d.$$element = v(T.createComment(" " + ga + ": " + d[ga] + " ")), c = L[0], ob(f, v(wa.call(t, 0)), c), C = ba(t, e, x, g && g.name, {nonTlbTranscludeDirective: w})) : (t = v(Hb(c)).contents(), L.empty(), C = ba(t, e));
                    if (G.template)if (Q("template", Z, G, L), Z = G, t = F(G.template) ? G.template(L, d) : G.template, t = sc(t), G.replace) {
                        g = G;
                        t = D(t);
                        c = t[0];
                        if (1 != t.length || 1 !== c.nodeType)throw ha("tplrt",
                            ga, "");
                        ob(f, L, c);
                        P = {$attr: {}};
                        t = U(c, [], P);
                        var X = a.splice(la + 1, a.length - (la + 1));
                        M && nb(t);
                        a = a.concat(t).concat(X);
                        z(d, P);
                        P = a.length
                    } else L.html(t);
                    if (G.templateUrl)Q("template", Z, G, L), Z = G, G.replace && (g = G), H = O(a.splice(la, a.length - la), L, d, f, C, h, k, {controllerDirectives: K, newIsolateScopeDirective: M, templateDirective: Z, nonTlbTranscludeDirective: w}), P = a.length; else if (G.compile)try {
                        N = G.compile(L, d, C), F(N) ? q(null, N, S, V) : N && q(N.pre, N.post, S, V)
                    } catch (Y) {
                        n(Y, fa(L))
                    }
                    G.terminal && (H.terminal = !0, x = Math.max(x, G.priority))
                }
                H.scope =
                    y && !0 === y.scope;
                H.transclude = Xa && C;
                p.hasElementTranscludeDirective = Ka;
                return H
            }

            function nb(a) {
                for (var b = 0, c = a.length; b < c; b++)a[b] = Vb(a[b], {$$isolateScope: !0})
            }

            function w(b, e, f, g, h, l, p) {
                if (e === h)return null;
                h = null;
                if (c.hasOwnProperty(e)) {
                    var q;
                    e = a.get(e + d);
                    for (var u = 0, I = e.length; u < I; u++)try {
                        q = e[u], (g === s || g > q.priority) && -1 != q.restrict.indexOf(f) && (l && (q = Vb(q, {$$start: l, $$end: p})), b.push(q), h = q)
                    } catch (x) {
                        n(x)
                    }
                }
                return h
            }

            function z(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                r(a, function (d, e) {
                    "$" != e.charAt(0) &&
                    (b[e] && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                r(b, function (b, f) {
                    "class" == f ? (R(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function D(a) {
                var b;
                a = aa(a);
                if (b = h.exec(a)) {
                    b = b[1].toLowerCase();
                    a = v("<table>" + a + "</table>");
                    if (/(thead|tbody|tfoot)/.test(b))return a.children(b);
                    a = a.children("tbody");
                    return"tr" === b ? a.children("tr") : a.children("tr").contents()
                }
                return v("<div>" +
                    a + "</div>").contents()
            }

            function O(a, b, c, d, e, f, g, h) {
                var k = [], l, n, u = b[0], I = a.shift(), x = t({}, I, {templateUrl: null, transclude: null, replace: null, $$originalDirective: I}), E = F(I.templateUrl) ? I.templateUrl(b, c) : I.templateUrl;
                b.empty();
                q.get(H.getTrustedResourceUrl(E), {cache: p}).success(function (p) {
                    var q, H;
                    p = sc(p);
                    if (I.replace) {
                        p = D(p);
                        q = p[0];
                        if (1 != p.length || 1 !== q.nodeType)throw ha("tplrt", I.name, E);
                        p = {$attr: {}};
                        ob(d, b, q);
                        var y = U(q, [], p);
                        W(I.scope) && nb(y);
                        a = y.concat(a);
                        z(c, p)
                    } else q = u, b.html(p);
                    a.unshift(x);
                    l = Xa(a, q, c, e, b, I, f, g, h);
                    r(d, function (a, c) {
                        a == q && (d[c] = b[0])
                    });
                    for (n = M(b[0].childNodes, e); k.length;) {
                        p = k.shift();
                        H = k.shift();
                        var B = k.shift(), K = k.shift(), y = b[0];
                        if (H !== u) {
                            var ba = H.className;
                            h.hasElementTranscludeDirective && I.replace || (y = Hb(q));
                            ob(B, v(H), y);
                            R(v(y), ba)
                        }
                        H = l.transclude ? Z(p, l.transclude) : K;
                        l(n, p, y, d, H)
                    }
                    k = null
                }).error(function (a, b, c, d) {
                    throw ha("tpload", d.url);
                });
                return function (a, b, c, d, e) {
                    k ? (k.push(b), k.push(c), k.push(d), k.push(e)) : l(n, b, c, d, e)
                }
            }

            function C(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function Q(a, b, c, d) {
                if (b)throw ha("multidir", b.name, c.name, a, fa(d));
            }

            function N(a, c) {
                var d = b(c, !0);
                d && a.push({priority: 0, compile: Y(function (a, b) {
                    var c = b.parent(), e = c.data("$binding") || [];
                    e.push(d);
                    R(c.data("$binding", e), "ng-binding");
                    a.$watch(d, function (a) {
                        b[0].nodeValue = a
                    })
                })})
            }

            function Ka(a, b) {
                if ("srcdoc" == b)return H.HTML;
                var c = Ja(a);
                if ("xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b))return H.RESOURCE_URL
            }

            function ga(a, c, d, e) {
                var f = b(d, !0);
                if (f) {
                    if ("multiple" === e && "SELECT" === Ja(a))throw ha("selmulti", fa(a));
                    c.push({priority: 100, compile: function () {
                        return{pre: function (c, d, h) {
                            d = h.$$observers || (h.$$observers = {});
                            if (g.test(e))throw ha("nodomevents");
                            if (f = b(h[e], !0, Ka(a, e)))h[e] = f(c), (d[e] || (d[e] = [])).$$inter = !0, (h.$$observers && h.$$observers[e].$$scope || c).$watch(f, function (a, b) {
                                "class" === e && a != b ? h.$updateClass(a, b) : h.$set(e, a)
                            })
                        }}
                    }})
                }
            }

            function ob(a, b, c) {
                var d = b[0], e = b.length, f = d.parentNode, g, h;
                if (a)for (g =
                               0, h = a.length; g < h; g++)if (a[g] == d) {
                    a[g++] = c;
                    h = g + e - 1;
                    for (var k = a.length; g < k; g++, h++)h < k ? a[g] = a[h] : delete a[g];
                    a.length -= e - 1;
                    break
                }
                f && f.replaceChild(c, d);
                a = T.createDocumentFragment();
                a.appendChild(d);
                c[v.expando] = d[v.expando];
                d = 1;
                for (e = b.length; d < e; d++)f = b[d], v(f).remove(), a.appendChild(f), delete b[d];
                b[0] = c;
                b.length = 1
            }

            function rc(a, b) {
                return t(function () {
                    return a.apply(null, arguments)
                }, a, b)
            }

            var Jb = function (a, b) {
                this.$$element = a;
                this.$attr = b || {}
            };
            Jb.prototype = {$normalize: ka, $addClass: function (a) {
                a && 0 <
                    a.length && K.addClass(this.$$element, a)
            }, $removeClass: function (a) {
                a && 0 < a.length && K.removeClass(this.$$element, a)
            }, $updateClass: function (a, b) {
                var c = tc(a, b), d = tc(b, a);
                0 === c.length ? K.removeClass(this.$$element, d) : 0 === d.length ? K.addClass(this.$$element, c) : K.setClass(this.$$element, c, d)
            }, $set: function (a, b, c, d) {
                var e = oc(this.$$element[0], a);
                e && (this.$$element.prop(a, b), d = e);
                this[a] = b;
                d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = hb(a, "-"));
                e = Ja(this.$$element);
                if ("A" === e && "href" === a || "IMG" === e &&
                    "src" === a)this[a] = b = x(b, "src" === a);
                !1 !== c && (null === b || b === s ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                (c = this.$$observers) && r(c[a], function (a) {
                    try {
                        a(b)
                    } catch (c) {
                        n(c)
                    }
                })
            }, $observe: function (a, b) {
                var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
                e.push(b);
                E.$evalAsync(function () {
                    e.$$inter || b(c[a])
                });
                return function () {
                    Da(e, b)
                }
            }};
            var P = b.startSymbol(), S = b.endSymbol(), sc = "{{" == P || "}}" == S ? Ca : function (a) {
                return a.replace(/\{\{/g, P).replace(/}}/g, S)
            }, la = /^ngAttr[A-Z]/;
            return ba
        }]
    }

    function ka(b) {
        return Sa(b.replace(ye, ""))
    }

    function tc(b, a) {
        var c = "", d = b.split(/\s+/), e = a.split(/\s+/), f = 0;
        a:for (; f < d.length; f++) {
            for (var h = d[f], g = 0; g < e.length; g++)if (h == e[g])continue a;
            c += (0 < c.length ? " " : "") + h
        }
        return c
    }

    function Vd() {
        var b = {}, a = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (a, d) {
            ya(a, "controller");
            W(a) ? t(b, a) : b[a] = d
        };
        this.$get = ["$injector", "$window", function (c, d) {
            return function (e, f) {
                var h, g, m;
                A(e) && (h = e.match(a), g = h[1], m = h[3], e = b.hasOwnProperty(g) ? b[g] : dc(f.$scope, g, !0) || dc(d,
                    g, !0), Qa(e, g, !0));
                h = c.instantiate(e, f);
                if (m) {
                    if (!f || "object" != typeof f.$scope)throw C("$controller")("noscp", g || e.name, m);
                    f.$scope[m] = h
                }
                return h
            }
        }]
    }

    function Wd() {
        this.$get = ["$window", function (b) {
            return v(b.document)
        }]
    }

    function Xd() {
        this.$get = ["$log", function (b) {
            return function (a, c) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function uc(b) {
        var a = {}, c, d, e;
        if (!b)return a;
        r(b.split("\n"), function (b) {
            e = b.indexOf(":");
            c = O(aa(b.substr(0, e)));
            d = aa(b.substr(e + 1));
            c && (a[c] = a[c] ? a[c] + (", " + d) : d)
        });
        return a
    }

    function vc(b) {
        var a =
            W(b) ? b : s;
        return function (c) {
            a || (a = uc(b));
            return c ? a[O(c)] || null : a
        }
    }

    function wc(b, a, c) {
        if (F(c))return c(b, a);
        r(c, function (c) {
            b = c(b, a)
        });
        return b
    }

    function $d() {
        var b = /^\s*(\[|\{[^\{])/, a = /[\}\]]\s*$/, c = /^\)\]\}',?\n/, d = {"Content-Type": "application/json;charset=utf-8"}, e = this.defaults = {transformResponse: [function (d) {
            A(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = Yb(d)));
            return d
        }], transformRequest: [function (a) {
            return W(a) && "[object File]" !== ua.call(a) && "[object Blob]" !== ua.call(a) ? pa(a) : a
        }], headers: {common: {Accept: "application/json, text/plain, */*"},
            post: $(d), put: $(d), patch: $(d)}, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN"}, f = this.interceptors = [], h = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, b, c, d, n, q) {
            function p(a) {
                function c(a) {
                    var b = t({}, a, {data: wc(a.data, a.headers, d.transformResponse)});
                    return 200 <= a.status && 300 > a.status ? b : n.reject(b)
                }

                var d = {method: "get", transformRequest: e.transformRequest, transformResponse: e.transformResponse}, f = function (a) {
                    function b(a) {
                        var c;
                        r(a, function (b, d) {
                            F(b) && (c = b(), null != c ? a[d] = c : delete a[d])
                        })
                    }

                    var c = e.headers, d = t({}, a.headers), f, g, c = t({}, c.common, c[O(a.method)]);
                    b(c);
                    b(d);
                    a:for (f in c) {
                        a = O(f);
                        for (g in d)if (O(g) === a)continue a;
                        d[f] = c[f]
                    }
                    return d
                }(a);
                t(d, a);
                d.headers = f;
                d.method = Ea(d.method);
                (a = Kb(d.url) ? b.cookies()[d.xsrfCookieName || e.xsrfCookieName] : s) && (f[d.xsrfHeaderName || e.xsrfHeaderName] = a);
                var g = [function (a) {
                    f = a.headers;
                    var b = wc(a.data, vc(f), a.transformRequest);
                    D(a.data) && r(f, function (a, b) {
                        "content-type" === O(b) && delete f[b]
                    });
                    D(a.withCredentials) && !D(e.withCredentials) && (a.withCredentials = e.withCredentials);
                    return u(a, b, f).then(c, c)
                }, s], h = n.when(d);
                for (r(y, function (a) {
                    (a.request || a.requestError) && g.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && g.push(a.response, a.responseError)
                }); g.length;) {
                    a = g.shift();
                    var k = g.shift(), h = h.then(a, k)
                }
                h.success = function (a) {
                    h.then(function (b) {
                        a(b.data, b.status, b.headers, d)
                    });
                    return h
                };
                h.error = function (a) {
                    h.then(null, function (b) {
                        a(b.data, b.status, b.headers, d)
                    });
                    return h
                };
                return h
            }

            function u(b, c, f) {
                function h(a, b, c) {
                    y && (200 <= a && 300 > a ? y.put(s, [a, b, uc(c)]) : y.remove(s));
                    k(b, a, c);
                    d.$$phase || d.$apply()
                }

                function k(a, c, d) {
                    c = Math.max(c, 0);
                    (200 <= c && 300 > c ? q.resolve : q.reject)({data: a, status: c, headers: vc(d), config: b})
                }

                function m() {
                    var a = fb(p.pendingRequests, b);
                    -1 !== a && p.pendingRequests.splice(a, 1)
                }

                var q = n.defer(), u = q.promise, y, r, s = I(b.url, b.params);
                p.pendingRequests.push(b);
                u.then(m, m);
                (b.cache || e.cache) && (!1 !== b.cache && "GET" == b.method) && (y = W(b.cache) ? b.cache : W(e.cache) ? e.cache :
                    E);
                if (y)if (r = y.get(s), w(r)) {
                    if (r.then)return r.then(m, m), r;
                    J(r) ? k(r[1], r[0], $(r[2])) : k(r, 200, {})
                } else y.put(s, u);
                D(r) && a(b.method, s, c, h, f, b.timeout, b.withCredentials, b.responseType);
                return u
            }

            function I(a, b) {
                if (!b)return a;
                var c = [];
                Zc(b, function (a, b) {
                    null === a || D(a) || (J(a) || (a = [a]), r(a, function (a) {
                        W(a) && (a = pa(a));
                        c.push(xa(b) + "=" + xa(a))
                    }))
                });
                0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
                return a
            }

            var E = c("$http"), y = [];
            r(f, function (a) {
                y.unshift(A(a) ? q.get(a) : q.invoke(a))
            });
            r(h, function (a, b) {
                var c = A(a) ? q.get(a) : q.invoke(a);
                y.splice(b, 0, {response: function (a) {
                    return c(n.when(a))
                }, responseError: function (a) {
                    return c(n.reject(a))
                }})
            });
            p.pendingRequests = [];
            (function (a) {
                r(arguments, function (a) {
                    p[a] = function (b, c) {
                        return p(t(c || {}, {method: a, url: b}))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function (a) {
                r(arguments, function (a) {
                    p[a] = function (b, c, d) {
                        return p(t(d || {}, {method: a, url: b, data: c}))
                    }
                })
            })("post", "put");
            p.defaults = e;
            return p
        }]
    }

    function ze(b) {
        if (8 >= V && (!b.match(/^(get|post|head|put|delete|options)$/i) || !Q.XMLHttpRequest))return new Q.ActiveXObject("Microsoft.XMLHTTP");
        if (Q.XMLHttpRequest)return new Q.XMLHttpRequest;
        throw C("$httpBackend")("noxhr");
    }

    function ae() {
        this.$get = ["$browser", "$window", "$document", function (b, a, c) {
            return Ae(b, ze, b.defer, a.angular.callbacks, c[0])
        }]
    }

    function Ae(b, a, c, d, e) {
        function f(a, b, c) {
            var f = e.createElement("script"), h = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            h = function (a) {
                Ta(f, "load", h);
                Ta(f, "error", h);
                e.body.removeChild(f);
                f = null;
                var g = -1, u = "unknown";
                a && ("load" !==
                    a.type || d[b].called || (a = {type: "error"}), u = a.type, g = "error" === a.type ? 404 : 200);
                c && c(g, u)
            };
            pb(f, "load", h);
            pb(f, "error", h);
            e.body.appendChild(f);
            return h
        }

        var h = -1;
        return function (e, m, k, l, n, q, p, u) {
            function I() {
                y = h;
                K && K();
                x && x.abort()
            }

            function E(a, d, e, f) {
                R && c.cancel(R);
                K = x = null;
                0 === d && (d = e ? 200 : "file" == qa(m).protocol ? 404 : 0);
                a(1223 == d ? 204 : d, e, f);
                b.$$completeOutstandingRequest(z)
            }

            var y;
            b.$$incOutstandingRequestCount();
            m = m || b.url();
            if ("jsonp" == O(e)) {
                var H = "_" + (d.counter++).toString(36);
                d[H] = function (a) {
                    d[H].data =
                        a;
                    d[H].called = !0
                };
                var K = f(m.replace("JSON_CALLBACK", "angular.callbacks." + H), H, function (a, b) {
                    E(l, a, d[H].data, "", b);
                    d[H] = z
                })
            } else {
                var x = a(e);
                x.open(e, m, !0);
                r(n, function (a, b) {
                    w(a) && x.setRequestHeader(b, a)
                });
                x.onreadystatechange = function () {
                    if (x && 4 == x.readyState) {
                        var a = null, b = null;
                        y !== h && (a = x.getAllResponseHeaders(), b = "response"in x ? x.response : x.responseText);
                        E(l, y || x.status, b, a)
                    }
                };
                p && (x.withCredentials = !0);
                if (u)try {
                    x.responseType = u
                } catch (s) {
                    if ("json" !== u)throw s;
                }
                x.send(k || null)
            }
            if (0 < q)var R = c(I, q); else q &&
            q.then && q.then(I)
        }
    }

    function Yd() {
        var b = "{{", a = "}}";
        this.startSymbol = function (a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
            function f(f, k, l) {
                for (var n, q, p = 0, u = [], I = f.length, E = !1, y = []; p < I;)-1 != (n = f.indexOf(b, p)) && -1 != (q = f.indexOf(a, n + h)) ? (p != n && u.push(f.substring(p, n)), u.push(p = c(E = f.substring(n + h, q))), p.exp = E, p = q + g, E = !0) : (p != I && u.push(f.substring(p)), p = I);
                (I = u.length) || (u.push(""), I = 1);
                if (l && 1 < u.length)throw xc("noconcat",
                    f);
                if (!k || E)return y.length = I, p = function (a) {
                    try {
                        for (var b = 0, c = I, g; b < c; b++)"function" == typeof(g = u[b]) && (g = g(a), g = l ? e.getTrusted(l, g) : e.valueOf(g), null === g || D(g) ? g = "" : "string" != typeof g && (g = pa(g))), y[b] = g;
                        return y.join("")
                    } catch (h) {
                        a = xc("interr", f, h.toString()), d(a)
                    }
                }, p.exp = f, p.parts = u, p
            }

            var h = b.length, g = a.length;
            f.startSymbol = function () {
                return b
            };
            f.endSymbol = function () {
                return a
            };
            return f
        }]
    }

    function Zd() {
        this.$get = ["$rootScope", "$window", "$q", function (b, a, c) {
            function d(d, h, g, m) {
                var k = a.setInterval,
                    l = a.clearInterval, n = c.defer(), q = n.promise, p = 0, u = w(m) && !m;
                g = w(g) ? g : 0;
                q.then(null, null, d);
                q.$$intervalId = k(function () {
                    n.notify(p++);
                    0 < g && p >= g && (n.resolve(p), l(q.$$intervalId), delete e[q.$$intervalId]);
                    u || b.$apply()
                }, h);
                e[q.$$intervalId] = n;
                return q
            }

            var e = {};
            d.cancel = function (a) {
                return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1
            };
            return d
        }]
    }

    function hd() {
        this.$get = function () {
            return{id: "en-us", NUMBER_FORMATS: {DECIMAL_SEP: ".",
                GROUP_SEP: ",", PATTERNS: [
                    {minInt: 1, minFrac: 0, maxFrac: 3, posPre: "", posSuf: "", negPre: "-", negSuf: "", gSize: 3, lgSize: 3},
                    {minInt: 1, minFrac: 2, maxFrac: 2, posPre: "\u00a4", posSuf: "", negPre: "(\u00a4", negSuf: ")", gSize: 3, lgSize: 3}
                ], CURRENCY_SYM: "$"}, DATETIME_FORMATS: {MONTH: "January February March April May June July August September October November December".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), AMPMS: ["AM", "PM"], medium: "MMM d, y h:mm:ss a", "short": "M/d/yy h:mm a", fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", mediumDate: "MMM d, y", shortDate: "M/d/yy", mediumTime: "h:mm:ss a", shortTime: "h:mm a"}, pluralCat: function (b) {
                return 1 === b ? "one" : "other"
            }}
        }
    }

    function yc(b) {
        b = b.split("/");
        for (var a = b.length; a--;)b[a] = Ab(b[a]);
        return b.join("/")
    }

    function zc(b, a, c) {
        b = qa(b, c);
        a.$$protocol = b.protocol;
        a.$$host = b.hostname;
        a.$$port = P(b.port) || Be[b.protocol] || null
    }

    function Ac(b, a, c) {
        var d = "/" !== b.charAt(0);
        d && (b = "/" + b);
        b = qa(b, c);
        a.$$path = decodeURIComponent(d && "/" === b.pathname.charAt(0) ? b.pathname.substring(1) : b.pathname);
        a.$$search = $b(b.search);
        a.$$hash = decodeURIComponent(b.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
    }

    function ma(b, a) {
        if (0 === a.indexOf(b))return a.substr(b.length)
    }

    function Ya(b) {
        var a = b.indexOf("#");
        return-1 == a ? b : b.substr(0, a)
    }

    function Lb(b) {
        return b.substr(0, Ya(b).lastIndexOf("/") + 1)
    }

    function Bc(b, a) {
        this.$$html5 = !0;
        a = a ||
            "";
        var c = Lb(b);
        zc(b, this, b);
        this.$$parse = function (a) {
            var e = ma(c, a);
            if (!A(e))throw Mb("ipthprfx", a, c);
            Ac(e, this, b);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function () {
            var a = ac(this.$$search), b = this.$$hash ? "#" + Ab(this.$$hash) : "";
            this.$$url = yc(this.$$path) + (a ? "?" + a : "") + b;
            this.$$absUrl = c + this.$$url.substr(1)
        };
        this.$$rewrite = function (d) {
            var e;
            if ((e = ma(b, d)) !== s)return d = e, (e = ma(a, e)) !== s ? c + (ma("/", e) || e) : b + d;
            if ((e = ma(c, d)) !== s)return c + e;
            if (c == d + "/")return c
        }
    }

    function Nb(b, a) {
        var c =
            Lb(b);
        zc(b, this, b);
        this.$$parse = function (d) {
            var e = ma(b, d) || ma(c, d), e = "#" == e.charAt(0) ? ma(a, e) : this.$$html5 ? e : "";
            if (!A(e))throw Mb("ihshprfx", d, a);
            Ac(e, this, b);
            d = this.$$path;
            var f = /^\/?.*?:(\/.*)/;
            0 === e.indexOf(b) && (e = e.replace(b, ""));
            f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
            this.$$path = d;
            this.$$compose()
        };
        this.$$compose = function () {
            var c = ac(this.$$search), e = this.$$hash ? "#" + Ab(this.$$hash) : "";
            this.$$url = yc(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
        };
        this.$$rewrite = function (a) {
            if (Ya(b) ==
                Ya(a))return a
        }
    }

    function Cc(b, a) {
        this.$$html5 = !0;
        Nb.apply(this, arguments);
        var c = Lb(b);
        this.$$rewrite = function (d) {
            var e;
            if (b == Ya(d))return d;
            if (e = ma(c, d))return b + a + e;
            if (c === d + "/")return c
        }
    }

    function qb(b) {
        return function () {
            return this[b]
        }
    }

    function Dc(b, a) {
        return function (c) {
            if (D(c))return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function be() {
        var b = "", a = !1;
        this.hashPrefix = function (a) {
            return w(a) ? (b = a, this) : b
        };
        this.html5Mode = function (b) {
            return w(b) ? (a = b, this) : a
        };
        this.$get = ["$rootScope", "$browser",
            "$sniffer", "$rootElement", function (c, d, e, f) {
                function h(a) {
                    c.$broadcast("$locationChangeSuccess", g.absUrl(), a)
                }

                var g, m = d.baseHref(), k = d.url();
                a ? (m = k.substring(0, k.indexOf("/", k.indexOf("//") + 2)) + (m || "/"), e = e.history ? Bc : Cc) : (m = Ya(k), e = Nb);
                g = new e(m, "#" + b);
                g.$$parse(g.$$rewrite(k));
                f.on("click", function (a) {
                    if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
                        for (var b = v(a.target); "a" !== O(b[0].nodeName);)if (b[0] === f[0] || !(b = b.parent())[0])return;
                        var e = b.prop("href");
                        W(e) && "[object SVGAnimatedString]" === e.toString() &&
                        (e = qa(e.animVal).href);
                        var h = g.$$rewrite(e);
                        e && (!b.attr("target") && h && !a.isDefaultPrevented()) && (a.preventDefault(), h != d.url() && (g.$$parse(h), c.$apply(), Q.angular["ff-684208-preventDefault"] = !0))
                    }
                });
                g.absUrl() != k && d.url(g.absUrl(), !0);
                d.onUrlChange(function (a) {
                    g.absUrl() != a && (c.$evalAsync(function () {
                        var b = g.absUrl();
                        g.$$parse(a);
                        c.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (g.$$parse(b), d.url(b)) : h(b)
                    }), c.$$phase || c.$digest())
                });
                var l = 0;
                c.$watch(function () {
                    var a = d.url(), b = g.$$replace;
                    l && a == g.absUrl() || (l++, c.$evalAsync(function () {
                        c.$broadcast("$locationChangeStart", g.absUrl(), a).defaultPrevented ? g.$$parse(a) : (d.url(g.absUrl(), b), h(a))
                    }));
                    g.$$replace = !1;
                    return l
                });
                return g
            }]
    }

    function ce() {
        var b = !0, a = this;
        this.debugEnabled = function (a) {
            return w(a) ? (b = a, this) : b
        };
        this.$get = ["$window", function (c) {
            function d(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || z;
                a = !1;
                try {
                    a = !!e.apply
                } catch (m) {
                }
                return a ? function () {
                    var a = [];
                    r(arguments, function (b) {
                        a.push(d(b))
                    });
                    return e.apply(b, a)
                } : function (a, b) {
                    e(a, null == b ? "" : b)
                }
            }

            return{log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                var c = e("debug");
                return function () {
                    b && c.apply(a, arguments)
                }
            }()}
        }]
    }

    function da(b, a) {
        if ("constructor" === b)throw Aa("isecfld", a);
        return b
    }

    function Za(b, a) {
        if (b) {
            if (b.constructor === b)throw Aa("isecfn", a);
            if (b.document &&
                b.location && b.alert && b.setInterval)throw Aa("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find))throw Aa("isecdom", a);
        }
        return b
    }

    function rb(b, a, c, d, e) {
        e = e || {};
        a = a.split(".");
        for (var f, h = 0; 1 < a.length; h++) {
            f = da(a.shift(), d);
            var g = b[f];
            g || (g = {}, b[f] = g);
            b = g;
            b.then && e.unwrapPromises && (ra(d), "$$v"in b || function (a) {
                a.then(function (b) {
                    a.$$v = b
                })
            }(b), b.$$v === s && (b.$$v = {}), b = b.$$v)
        }
        f = da(a.shift(), d);
        return b[f] = c
    }

    function Ec(b, a, c, d, e, f, h) {
        da(b, f);
        da(a, f);
        da(c, f);
        da(d, f);
        da(e, f);
        return h.unwrapPromises ?
            function (g, h) {
                var k = h && h.hasOwnProperty(b) ? h : g, l;
                if (null == k)return k;
                (k = k[b]) && k.then && (ra(f), "$$v"in k || (l = k, l.$$v = s, l.then(function (a) {
                    l.$$v = a
                })), k = k.$$v);
                if (!a)return k;
                if (null == k)return s;
                (k = k[a]) && k.then && (ra(f), "$$v"in k || (l = k, l.$$v = s, l.then(function (a) {
                    l.$$v = a
                })), k = k.$$v);
                if (!c)return k;
                if (null == k)return s;
                (k = k[c]) && k.then && (ra(f), "$$v"in k || (l = k, l.$$v = s, l.then(function (a) {
                    l.$$v = a
                })), k = k.$$v);
                if (!d)return k;
                if (null == k)return s;
                (k = k[d]) && k.then && (ra(f), "$$v"in k || (l = k, l.$$v = s, l.then(function (a) {
                    l.$$v =
                        a
                })), k = k.$$v);
                if (!e)return k;
                if (null == k)return s;
                (k = k[e]) && k.then && (ra(f), "$$v"in k || (l = k, l.$$v = s, l.then(function (a) {
                    l.$$v = a
                })), k = k.$$v);
                return k
            } : function (f, h) {
            var k = h && h.hasOwnProperty(b) ? h : f;
            if (null == k)return k;
            k = k[b];
            if (!a)return k;
            if (null == k)return s;
            k = k[a];
            if (!c)return k;
            if (null == k)return s;
            k = k[c];
            if (!d)return k;
            if (null == k)return s;
            k = k[d];
            return e ? null == k ? s : k = k[e] : k
        }
    }

    function Ce(b, a) {
        da(b, a);
        return function (a, d) {
            return null == a ? s : (d && d.hasOwnProperty(b) ? d : a)[b]
        }
    }

    function De(b, a, c) {
        da(b, c);
        da(a,
            c);
        return function (c, e) {
            if (null == c)return s;
            c = (e && e.hasOwnProperty(b) ? e : c)[b];
            return null == c ? s : c[a]
        }
    }

    function Fc(b, a, c) {
        if (Ob.hasOwnProperty(b))return Ob[b];
        var d = b.split("."), e = d.length, f;
        if (a.unwrapPromises || 1 !== e)if (a.unwrapPromises || 2 !== e)if (a.csp)f = 6 > e ? Ec(d[0], d[1], d[2], d[3], d[4], c, a) : function (b, f) {
            var g = 0, h;
            do h = Ec(d[g++], d[g++], d[g++], d[g++], d[g++], c, a)(b, f), f = s, b = h; while (g < e);
            return h
        }; else {
            var h = "var p;\n";
            r(d, function (b, d) {
                da(b, c);
                h += "if(s == null) return undefined;\ns=" + (d ? "s" : '((k&&k.hasOwnProperty("' +
                    b + '"))?k:s)') + '["' + b + '"];\n' + (a.unwrapPromises ? 'if (s && s.then) {\n pw("' + c.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
            });
            var h = h + "return s;", g = new Function("s", "k", "pw", h);
            g.toString = Y(h);
            f = a.unwrapPromises ? function (a, b) {
                return g(a, b, ra)
            } : g
        } else f = De(d[0], d[1], c); else f = Ce(d[0], c);
        "hasOwnProperty" !== b && (Ob[b] = f);
        return f
    }

    function de() {
        var b = {}, a = {csp: !1, unwrapPromises: !1, logPromiseWarnings: !0};
        this.unwrapPromises =
            function (b) {
                return w(b) ? (a.unwrapPromises = !!b, this) : a.unwrapPromises
            };
        this.logPromiseWarnings = function (b) {
            return w(b) ? (a.logPromiseWarnings = b, this) : a.logPromiseWarnings
        };
        this.$get = ["$filter", "$sniffer", "$log", function (c, d, e) {
            a.csp = d.csp;
            ra = function (b) {
                a.logPromiseWarnings && !Gc.hasOwnProperty(b) && (Gc[b] = !0, e.warn("[$parse] Promise found in the expression `" + b + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
            };
            return function (d) {
                var e;
                switch (typeof d) {
                    case "string":
                        if (b.hasOwnProperty(d))return b[d];
                        e = new Pb(a);
                        e = (new $a(e, c, a)).parse(d, !1);
                        "hasOwnProperty" !== d && (b[d] = e);
                        return e;
                    case "function":
                        return d;
                    default:
                        return z
                }
            }
        }]
    }

    function fe() {
        this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
            return Ee(function (a) {
                b.$evalAsync(a)
            }, a)
        }]
    }

    function Ee(b, a) {
        function c(a) {
            return a
        }

        function d(a) {
            return h(a)
        }

        var e = function () {
            var h = [], k, l;
            return l = {resolve: function (a) {
                if (h) {
                    var c = h;
                    h = s;
                    k = f(a);
                    c.length && b(function () {
                        for (var a, b = 0, d = c.length; b < d; b++)a = c[b], k.then(a[0], a[1], a[2])
                    })
                }
            }, reject: function (a) {
                l.resolve(g(a))
            },
                notify: function (a) {
                    if (h) {
                        var c = h;
                        h.length && b(function () {
                            for (var b, d = 0, e = c.length; d < e; d++)b = c[d], b[2](a)
                        })
                    }
                }, promise: {then: function (b, f, g) {
                    var l = e(), I = function (d) {
                        try {
                            l.resolve((F(b) ? b : c)(d))
                        } catch (e) {
                            l.reject(e), a(e)
                        }
                    }, E = function (b) {
                        try {
                            l.resolve((F(f) ? f : d)(b))
                        } catch (c) {
                            l.reject(c), a(c)
                        }
                    }, y = function (b) {
                        try {
                            l.notify((F(g) ? g : c)(b))
                        } catch (d) {
                            a(d)
                        }
                    };
                    h ? h.push([I, E, y]) : k.then(I, E, y);
                    return l.promise
                }, "catch": function (a) {
                    return this.then(null, a)
                }, "finally": function (a) {
                    function b(a, c) {
                        var d = e();
                        c ? d.resolve(a) :
                            d.reject(a);
                        return d.promise
                    }

                    function d(e, f) {
                        var g = null;
                        try {
                            g = (a || c)()
                        } catch (h) {
                            return b(h, !1)
                        }
                        return g && F(g.then) ? g.then(function () {
                            return b(e, f)
                        }, function (a) {
                            return b(a, !1)
                        }) : b(e, f)
                    }

                    return this.then(function (a) {
                        return d(a, !0)
                    }, function (a) {
                        return d(a, !1)
                    })
                }}}
        }, f = function (a) {
            return a && F(a.then) ? a : {then: function (c) {
                var d = e();
                b(function () {
                    d.resolve(c(a))
                });
                return d.promise
            }}
        }, h = function (a) {
            var b = e();
            b.reject(a);
            return b.promise
        }, g = function (c) {
            return{then: function (f, g) {
                var h = e();
                b(function () {
                    try {
                        h.resolve((F(g) ?
                            g : d)(c))
                    } catch (b) {
                        h.reject(b), a(b)
                    }
                });
                return h.promise
            }}
        };
        return{defer: e, reject: h, when: function (g, k, l, n) {
            var q = e(), p, u = function (b) {
                try {
                    return(F(k) ? k : c)(b)
                } catch (d) {
                    return a(d), h(d)
                }
            }, I = function (b) {
                try {
                    return(F(l) ? l : d)(b)
                } catch (c) {
                    return a(c), h(c)
                }
            }, E = function (b) {
                try {
                    return(F(n) ? n : c)(b)
                } catch (d) {
                    a(d)
                }
            };
            b(function () {
                f(g).then(function (a) {
                    p || (p = !0, q.resolve(f(a).then(u, I, E)))
                }, function (a) {
                    p || (p = !0, q.resolve(I(a)))
                }, function (a) {
                    p || q.notify(E(a))
                })
            });
            return q.promise
        }, all: function (a) {
            var b = e(), c = 0, d = J(a) ?
                [] : {};
            r(a, function (a, e) {
                c++;
                f(a).then(function (a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            });
            0 === c && b.resolve(d);
            return b.promise
        }}
    }

    function me() {
        this.$get = ["$window", "$timeout", function (b, a) {
            var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.mozCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function (a) {
                var b = c(a);
                return function () {
                    d(b)
                }
            } :
                function (b) {
                    var c = a(b, 16.66, !1);
                    return function () {
                        a.cancel(c)
                    }
                };
            f.supported = e;
            return f
        }]
    }

    function ee() {
        var b = 10, a = C("$rootScope"), c = null;
        this.digestTtl = function (a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (d, e, f, h) {
            function g() {
                this.$id = db();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue = [];
                this.$$postDigestQueue =
                    [];
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$isolateBindings = {}
            }

            function m(b) {
                if (q.$$phase)throw a("inprog", q.$$phase);
                q.$$phase = b
            }

            function k(a, b) {
                var c = f(a);
                Qa(c, b);
                return c
            }

            function l(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function n() {
            }

            g.prototype = {constructor: g, $new: function (a) {
                a ? (a = new g, a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (a = function () {
                }, a.prototype = this, a =
                    new a, a.$id = db());
                a["this"] = a;
                a.$$listeners = {};
                a.$$listenerCount = {};
                a.$parent = this;
                a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
                a.$$prevSibling = this.$$childTail;
                this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                return a
            }, $watch: function (a, b, d) {
                var e = k(a, "watch"), f = this.$$watchers, g = {fn: b, last: n, get: e, exp: a, eq: !!d};
                c = null;
                if (!F(b)) {
                    var h = k(b || z, "listener");
                    g.fn = function (a, b, c) {
                        h(c)
                    }
                }
                if ("string" == typeof a && e.constant) {
                    var m = g.fn;
                    g.fn = function (a, b, c) {
                        m.call(this, a, b, c);
                        Da(f, g)
                    }
                }
                f || (f = this.$$watchers = []);
                f.unshift(g);
                return function () {
                    Da(f, g);
                    c = null
                }
            }, $watchCollection: function (a, b) {
                var c = this, d, e, g, h = 1 < b.length, k = 0, m = f(a), l = [], n = {}, q = !0, r = 0;
                return this.$watch(function () {
                    d = m(c);
                    var a, b;
                    if (W(d))if (cb(d))for (e !== l && (e = l, r = e.length = 0, k++), a = d.length, r !== a && (k++, e.length = r = a), b = 0; b < a; b++)e[b] !== e[b] && d[b] !== d[b] || e[b] === d[b] || (k++, e[b] = d[b]); else {
                        e !== n && (e = n = {}, r = 0, k++);
                        a = 0;
                        for (b in d)d.hasOwnProperty(b) && (a++, e.hasOwnProperty(b) ?
                            e[b] !== d[b] && (k++, e[b] = d[b]) : (r++, e[b] = d[b], k++));
                        if (r > a)for (b in k++, e)e.hasOwnProperty(b) && !d.hasOwnProperty(b) && (r--, delete e[b])
                    } else e !== d && (e = d, k++);
                    return k
                }, function () {
                    q ? (q = !1, b(d, d, c)) : b(d, g, c);
                    if (h)if (W(d))if (cb(d)) {
                        g = Array(d.length);
                        for (var a = 0; a < d.length; a++)g[a] = d[a]
                    } else for (a in g = {}, d)Hc.call(d, a) && (g[a] = d[a]); else g = d
                })
            }, $digest: function () {
                var d, f, g, h, k = this.$$asyncQueue, l = this.$$postDigestQueue, r, x, s = b, R, M = [], w, t, B;
                m("$digest");
                c = null;
                do {
                    x = !1;
                    for (R = this; k.length;) {
                        try {
                            B = k.shift(),
                                B.scope.$eval(B.expression)
                        } catch (v) {
                            q.$$phase = null, e(v)
                        }
                        c = null
                    }
                    a:do {
                        if (h = R.$$watchers)for (r = h.length; r--;)try {
                            if (d = h[r])if ((f = d.get(R)) !== (g = d.last) && !(d.eq ? va(f, g) : "number" == typeof f && "number" == typeof g && isNaN(f) && isNaN(g)))x = !0, c = d, d.last = d.eq ? $(f) : f, d.fn(f, g === n ? f : g, R), 5 > s && (w = 4 - s, M[w] || (M[w] = []), t = F(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, t += "; newVal: " + pa(f) + "; oldVal: " + pa(g), M[w].push(t)); else if (d === c) {
                                x = !1;
                                break a
                            }
                        } catch (A) {
                            q.$$phase = null, e(A)
                        }
                        if (!(h = R.$$childHead || R !== this &&
                            R.$$nextSibling))for (; R !== this && !(h = R.$$nextSibling);)R = R.$parent
                    } while (R = h);
                    if ((x || k.length) && !s--)throw q.$$phase = null, a("infdig", b, pa(M));
                } while (x || k.length);
                for (q.$$phase = null; l.length;)try {
                    l.shift()()
                } catch (z) {
                    e(z)
                }
            }, $destroy: function () {
                if (!this.$$destroyed) {
                    var a = this.$parent;
                    this.$broadcast("$destroy");
                    this.$$destroyed = !0;
                    this !== q && (r(this.$$listenerCount, gb(null, l, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling &&
                        (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null)
                }
            }, $eval: function (a, b) {
                return f(a)(this, b)
            }, $evalAsync: function (a) {
                q.$$phase || q.$$asyncQueue.length || h.defer(function () {
                    q.$$asyncQueue.length && q.$digest()
                });
                this.$$asyncQueue.push({scope: this, expression: a})
            }, $$postDigest: function (a) {
                this.$$postDigestQueue.push(a)
            }, $apply: function (a) {
                try {
                    return m("$apply"),
                        this.$eval(a)
                } catch (b) {
                    e(b)
                } finally {
                    q.$$phase = null;
                    try {
                        q.$digest()
                    } catch (c) {
                        throw e(c), c;
                    }
                }
            }, $on: function (a, b) {
                var c = this.$$listeners[a];
                c || (this.$$listeners[a] = c = []);
                c.push(b);
                var d = this;
                do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                var e = this;
                return function () {
                    c[fb(c, b)] = null;
                    l(e, 1, a)
                }
            }, $emit: function (a, b) {
                var c = [], d, f = this, g = !1, h = {name: a, targetScope: f, stopPropagation: function () {
                        g = !0
                    }, preventDefault: function () {
                        h.defaultPrevented = !0
                    }, defaultPrevented: !1},
                    k = [h].concat(wa.call(arguments, 1)), l, m;
                do {
                    d = f.$$listeners[a] || c;
                    h.currentScope = f;
                    l = 0;
                    for (m = d.length; l < m; l++)if (d[l])try {
                        d[l].apply(null, k)
                    } catch (n) {
                        e(n)
                    } else d.splice(l, 1), l--, m--;
                    if (g)break;
                    f = f.$parent
                } while (f);
                return h
            }, $broadcast: function (a, b) {
                for (var c = this, d = this, f = {name: a, targetScope: this, preventDefault: function () {
                    f.defaultPrevented = !0
                }, defaultPrevented: !1}, g = [f].concat(wa.call(arguments, 1)), h, k; c = d;) {
                    f.currentScope = c;
                    d = c.$$listeners[a] || [];
                    h = 0;
                    for (k = d.length; h < k; h++)if (d[h])try {
                        d[h].apply(null,
                            g)
                    } catch (l) {
                        e(l)
                    } else d.splice(h, 1), h--, k--;
                    if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))for (; c !== this && !(d = c.$$nextSibling);)c = c.$parent
                }
                return f
            }};
            var q = new g;
            return q
        }]
    }

    function id() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*(https?|ftp|file|blob):|data:image\//;
        this.aHrefSanitizationWhitelist = function (a) {
            return w(a) ? (b = a, this) : b
        };
        this.imgSrcSanitizationWhitelist = function (b) {
            return w(b) ? (a = b, this) : a
        };
        this.$get = function () {
            return function (c, d) {
                var e = d ? a : b, f;
                if (!V ||
                    8 <= V)if (f = qa(c).href, "" !== f && !f.match(e))return"unsafe:" + f;
                return c
            }
        }
    }

    function Fe(b) {
        if ("self" === b)return b;
        if (A(b)) {
            if (-1 < b.indexOf("***"))throw sa("iwcard", b);
            b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return RegExp("^" + b + "$")
        }
        if (eb(b))return RegExp("^" + b.source + "$");
        throw sa("imatcher");
    }

    function Ic(b) {
        var a = [];
        w(b) && r(b, function (b) {
            a.push(Fe(b))
        });
        return a
    }

    function he() {
        this.SCE_CONTEXTS = ea;
        var b = ["self"], a = [];
        this.resourceUrlWhitelist = function (a) {
            arguments.length && (b = Ic(a));
            return b
        };
        this.resourceUrlBlacklist = function (b) {
            arguments.length && (a = Ic(b));
            return a
        };
        this.$get = ["$injector", function (c) {
            function d(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                a && (b.prototype = new a);
                b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }

            var e = function (a) {
                throw sa("unsafe");
            };
            c.has("$sanitize") &&
            (e = c.get("$sanitize"));
            var f = d(), h = {};
            h[ea.HTML] = d(f);
            h[ea.CSS] = d(f);
            h[ea.URL] = d(f);
            h[ea.JS] = d(f);
            h[ea.RESOURCE_URL] = d(h[ea.URL]);
            return{trustAs: function (a, b) {
                var c = h.hasOwnProperty(a) ? h[a] : null;
                if (!c)throw sa("icontext", a, b);
                if (null === b || b === s || "" === b)return b;
                if ("string" !== typeof b)throw sa("itype", a);
                return new c(b)
            }, getTrusted: function (c, d) {
                if (null === d || d === s || "" === d)return d;
                var f = h.hasOwnProperty(c) ? h[c] : null;
                if (f && d instanceof f)return d.$$unwrapTrustedValue();
                if (c === ea.RESOURCE_URL) {
                    var f =
                        qa(d.toString()), l, n, q = !1;
                    l = 0;
                    for (n = b.length; l < n; l++)if ("self" === b[l] ? Kb(f) : b[l].exec(f.href)) {
                        q = !0;
                        break
                    }
                    if (q)for (l = 0, n = a.length; l < n; l++)if ("self" === a[l] ? Kb(f) : a[l].exec(f.href)) {
                        q = !1;
                        break
                    }
                    if (q)return d;
                    throw sa("insecurl", d.toString());
                }
                if (c === ea.HTML)return e(d);
                throw sa("unsafe");
            }, valueOf: function (a) {
                return a instanceof f ? a.$$unwrapTrustedValue() : a
            }}
        }]
    }

    function ge() {
        var b = !0;
        this.enabled = function (a) {
            arguments.length && (b = !!a);
            return b
        };
        this.$get = ["$parse", "$sniffer", "$sceDelegate", function (a, c, d) {
            if (b && c.msie && 8 > c.msieDocumentMode)throw sa("iequirks");
            var e = $(ea);
            e.isEnabled = function () {
                return b
            };
            e.trustAs = d.trustAs;
            e.getTrusted = d.getTrusted;
            e.valueOf = d.valueOf;
            b || (e.trustAs = e.getTrusted = function (a, b) {
                return b
            }, e.valueOf = Ca);
            e.parseAs = function (b, c) {
                var d = a(c);
                return d.literal && d.constant ? d : function (a, c) {
                    return e.getTrusted(b, d(a, c))
                }
            };
            var f = e.parseAs, h = e.getTrusted, g = e.trustAs;
            r(ea, function (a, b) {
                var c = O(b);
                e[Sa("parse_as_" + c)] = function (b) {
                    return f(a, b)
                };
                e[Sa("get_trusted_" + c)] = function (b) {
                    return h(a,
                        b)
                };
                e[Sa("trust_as_" + c)] = function (b) {
                    return g(a, b)
                }
            });
            return e
        }]
    }

    function ie() {
        this.$get = ["$window", "$document", function (b, a) {
            var c = {}, d = P((/android (\d+)/.exec(O((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, h = f.documentMode, g, m = /^(Moz|webkit|O|ms)(?=[A-Z])/, k = f.body && f.body.style, l = !1, n = !1;
            if (k) {
                for (var q in k)if (l = m.exec(q)) {
                    g = l[0];
                    g = g.substr(0, 1).toUpperCase() + g.substr(1);
                    break
                }
                g || (g = "WebkitOpacity"in k && "webkit");
                l = !!("transition"in k || g + "Transition"in
                    k);
                n = !!("animation"in k || g + "Animation"in k);
                !d || l && n || (l = A(f.body.style.webkitTransition), n = A(f.body.style.webkitAnimation))
            }
            return{history: !(!b.history || !b.history.pushState || 4 > d || e), hashchange: "onhashchange"in b && (!h || 7 < h), hasEvent: function (a) {
                if ("input" == a && 9 == V)return!1;
                if (D(c[a])) {
                    var b = f.createElement("div");
                    c[a] = "on" + a in b
                }
                return c[a]
            }, csp: Xb(), vendorPrefix: g, transitions: l, animations: n, android: d, msie: V, msieDocumentMode: h}
        }]
    }

    function ke() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler",
            function (b, a, c, d) {
                function e(e, g, m) {
                    var k = c.defer(), l = k.promise, n = w(m) && !m;
                    g = a.defer(function () {
                        try {
                            k.resolve(e())
                        } catch (a) {
                            k.reject(a), d(a)
                        } finally {
                            delete f[l.$$timeoutId]
                        }
                        n || b.$apply()
                    }, g);
                    l.$$timeoutId = g;
                    f[g] = k;
                    return l
                }

                var f = {};
                e.cancel = function (b) {
                    return b && b.$$timeoutId in f ? (f[b.$$timeoutId].reject("canceled"), delete f[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
                };
                return e
            }]
    }

    function qa(b, a) {
        var c = b;
        V && (S.setAttribute("href", c), c = S.href);
        S.setAttribute("href", c);
        return{href: S.href, protocol: S.protocol ?
            S.protocol.replace(/:$/, "") : "", host: S.host, search: S.search ? S.search.replace(/^\?/, "") : "", hash: S.hash ? S.hash.replace(/^#/, "") : "", hostname: S.hostname, port: S.port, pathname: "/" === S.pathname.charAt(0) ? S.pathname : "/" + S.pathname}
    }

    function Kb(b) {
        b = A(b) ? qa(b) : b;
        return b.protocol === Jc.protocol && b.host === Jc.host
    }

    function le() {
        this.$get = Y(Q)
    }

    function ic(b) {
        function a(d, e) {
            if (W(d)) {
                var f = {};
                r(d, function (b, c) {
                    f[c] = a(c, b)
                });
                return f
            }
            return b.factory(d + c, e)
        }

        var c = "Filter";
        this.register = a;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b +
                    c)
            }
        }];
        a("currency", Kc);
        a("date", Lc);
        a("filter", Ge);
        a("json", He);
        a("limitTo", Ie);
        a("lowercase", Je);
        a("number", Mc);
        a("orderBy", Nc);
        a("uppercase", Ke)
    }

    function Ge() {
        return function (b, a, c) {
            if (!J(b))return b;
            var d = typeof c, e = [];
            e.check = function (a) {
                for (var b = 0; b < e.length; b++)if (!e[b](a))return!1;
                return!0
            };
            "function" !== d && (c = "boolean" === d && c ? function (a, b) {
                return Pa.equals(a, b)
            } : function (a, b) {
                if (a && b && "object" === typeof a && "object" === typeof b) {
                    for (var d in a)if ("$" !== d.charAt(0) && Hc.call(a, d) && c(a[d], b[d]))return!0;
                    return!1
                }
                b = ("" + b).toLowerCase();
                return-1 < ("" + a).toLowerCase().indexOf(b)
            });
            var f = function (a, b) {
                if ("string" == typeof b && "!" === b.charAt(0))return!f(a, b.substr(1));
                switch (typeof a) {
                    case "boolean":
                    case "number":
                    case "string":
                        return c(a, b);
                    case "object":
                        switch (typeof b) {
                            case "object":
                                return c(a, b);
                            default:
                                for (var d in a)if ("$" !== d.charAt(0) && f(a[d], b))return!0
                        }
                        return!1;
                    case "array":
                        for (d = 0; d < a.length; d++)if (f(a[d], b))return!0;
                        return!1;
                    default:
                        return!1
                }
            };
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                    a =
                    {$: a};
                case "object":
                    for (var h in a)(function (b) {
                        "undefined" != typeof a[b] && e.push(function (c) {
                            return f("$" == b ? c : c && c[b], a[b])
                        })
                    })(h);
                    break;
                case "function":
                    e.push(a);
                    break;
                default:
                    return b
            }
            d = [];
            for (h = 0; h < b.length; h++) {
                var g = b[h];
                e.check(g) && d.push(g)
            }
            return d
        }
    }

    function Kc(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            D(d) && (d = a.CURRENCY_SYM);
            return Oc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
        }
    }

    function Mc(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            return Oc(b, a.PATTERNS[0],
                a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function Oc(b, a, c, d, e) {
        if (null == b || !isFinite(b) || W(b))return"";
        var f = 0 > b;
        b = Math.abs(b);
        var h = b + "", g = "", m = [], k = !1;
        if (-1 !== h.indexOf("e")) {
            var l = h.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > e + 1 ? h = "0" : (g = h, k = !0)
        }
        if (k)0 < e && (-1 < b && 1 > b) && (g = b.toFixed(e)); else {
            h = (h.split(Pc)[1] || "").length;
            D(e) && (e = Math.min(Math.max(a.minFrac, h), a.maxFrac));
            h = Math.pow(10, e);
            b = Math.round(b * h) / h;
            b = ("" + b).split(Pc);
            h = b[0];
            b = b[1] || "";
            var l = 0, n = a.lgSize, q = a.gSize;
            if (h.length >= n + q)for (l = h.length -
                n, k = 0; k < l; k++)0 === (l - k) % q && 0 !== k && (g += c), g += h.charAt(k);
            for (k = l; k < h.length; k++)0 === (h.length - k) % n && 0 !== k && (g += c), g += h.charAt(k);
            for (; b.length < e;)b += "0";
            e && "0" !== e && (g += d + b.substr(0, e))
        }
        m.push(f ? a.negPre : a.posPre);
        m.push(g);
        m.push(f ? a.negSuf : a.posSuf);
        return m.join("")
    }

    function sb(b, a, c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a;)b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function X(b, a, c, d) {
        c = c || 0;
        return function (e) {
            e = e["get" + b]();
            if (0 < c || e > -c)e += c;
            0 === e && -12 == c && (e = 12);
            return sb(e, a, d)
        }
    }

    function tb(b, a) {
        return function (c, d) {
            var e = c["get" + b](), f = Ea(a ? "SHORT" + b : b);
            return d[f][e]
        }
    }

    function Qc(b) {
        var a = (new Date(b, 0, 1)).getDay();
        return new Date(b, 0, (4 >= a ? 5 : 12) - a)
    }

    function Rc(b) {
        return function (a) {
            var c = Qc(a.getFullYear());
            a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
            a = 1 + Math.round(a / 6048E5);
            return sb(a, b)
        }
    }

    function Lc(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var f = 0, h = 0, g = b[8] ? a.setUTCFullYear : a.setFullYear, m = b[8] ? a.setUTCHours : a.setHours;
                b[9] &&
                (f = P(b[9] + b[10]), h = P(b[9] + b[11]));
                g.call(a, P(b[1]), P(b[2]) - 1, P(b[3]));
                f = P(b[4] || 0) - f;
                h = P(b[5] || 0) - h;
                g = P(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                m.call(a, f, h, g, b)
            }
            return a
        }

        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, e) {
            var f = "", h = [], g, m;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            A(c) && (c = Le.test(c) ? P(c) : a(c));
            zb(c) && (c = new Date(c));
            if (!oa(c))return c;
            for (; e;)(m = Me.exec(e)) ? (h = h.concat(wa.call(m, 1)), e =
                h.pop()) : (h.push(e), e = null);
            r(h, function (a) {
                g = Ne[a];
                f += g ? g(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return f
        }
    }

    function He() {
        return function (b) {
            return pa(b, !0)
        }
    }

    function Ie() {
        return function (b, a) {
            if (!J(b) && !A(b))return b;
            a = P(a);
            if (A(b))return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : "";
            var c = [], d, e;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            0 < a ? (d = 0, e = a) : (d = b.length + a, e = b.length);
            for (; d < e; d++)c.push(b[d]);
            return c
        }
    }

    function Nc(b) {
        return function (a, c, d) {
            function e(a, b) {
                return Oa(b) ? function (b, c) {
                    return a(c, b)
                } : a
            }

            function f(a, b) {
                var c = typeof a, d = typeof b;
                return c == d ? ("string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
            }

            if (!J(a) || !c)return a;
            c = J(c) ? c : [c];
            c = ad(c, function (a) {
                var c = !1, d = a || Ca;
                if (A(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0))c = "-" == a.charAt(0), a = a.substring(1);
                    d = b(a);
                    if (d.constant) {
                        var g = d();
                        return e(function (a, b) {
                            return f(a[g], b[g])
                        }, c)
                    }
                }
                return e(function (a, b) {
                    return f(d(a), d(b))
                }, c)
            });
            for (var h = [], g = 0; g < a.length; g++)h.push(a[g]);
            return h.sort(e(function (a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e)return e
                }
                return 0
            }, d))
        }
    }

    function ta(b) {
        F(b) && (b = {link: b});
        b.restrict = b.restrict || "AC";
        return Y(b)
    }

    function Sc(b, a, c, d) {
        function e(a, c) {
            c = c ? "-" + hb(c, "-") : "";
            d.removeClass(b, (a ? ub : vb) + c);
            d.addClass(b, (a ? vb : ub) + c)
        }

        var f = this, h = b.parent().controller("form") || wb, g = 0, m = f.$error = {}, k = [];
        f.$name = a.name || a.ngForm;
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        h.$addControl(f);
        b.addClass(La);
        e(!0);
        f.$addControl = function (a) {
            ya(a.$name,
                "input");
            k.push(a);
            a.$name && (f[a.$name] = a)
        };
        f.$removeControl = function (a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            r(m, function (b, c) {
                f.$setValidity(c, !0, a)
            });
            Da(k, a)
        };
        f.$setValidity = function (a, b, c) {
            var d = m[a];
            if (b)d && (Da(d, c), d.length || (g--, g || (e(b), f.$valid = !0, f.$invalid = !1), m[a] = !1, e(!0, a), h.$setValidity(a, !0, f))); else {
                g || e(b);
                if (d) {
                    if (-1 != fb(d, c))return
                } else m[a] = d = [], g++, e(!1, a), h.$setValidity(a, !1, f);
                d.push(c);
                f.$valid = !1;
                f.$invalid = !0
            }
        };
        f.$setDirty = function () {
            d.removeClass(b, La);
            d.addClass(b,
                xb);
            f.$dirty = !0;
            f.$pristine = !1;
            h.$setDirty()
        };
        f.$setPristine = function () {
            d.removeClass(b, xb);
            d.addClass(b, La);
            f.$dirty = !1;
            f.$pristine = !0;
            r(k, function (a) {
                a.$setPristine()
            })
        }
    }

    function na(b, a, c, d) {
        b.$setValidity(a, c);
        return c ? d : s
    }

    function Oe(b, a, c) {
        var d = c.prop("validity");
        W(d) && (c = function (c) {
            if (b.$error[a] || !(d.badInput || d.customError || d.typeMismatch) || d.valueMissing)return c;
            b.$setValidity(a, !1)
        }, b.$parsers.push(c), b.$formatters.push(c))
    }

    function ab(b, a, c, d, e, f) {
        var h = a.prop("validity");
        if (!e.android) {
            var g =
                !1;
            a.on("compositionstart", function (a) {
                g = !0
            });
            a.on("compositionend", function () {
                g = !1;
                m()
            })
        }
        var m = function () {
            if (!g) {
                var e = a.val();
                Oa(c.ngTrim || "T") && (e = aa(e));
                if (d.$viewValue !== e || h && "" === e && !h.valueMissing)b.$$phase ? d.$setViewValue(e) : b.$apply(function () {
                    d.$setViewValue(e)
                })
            }
        };
        if (e.hasEvent("input"))a.on("input", m); else {
            var k, l = function () {
                k || (k = f.defer(function () {
                    m();
                    k = null
                }))
            };
            a.on("keydown", function (a) {
                a = a.keyCode;
                91 === a || (15 < a && 19 > a || 37 <= a && 40 >= a) || l()
            });
            if (e.hasEvent("paste"))a.on("paste cut",
                l)
        }
        a.on("change", m);
        d.$render = function () {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        };
        var n = c.ngPattern;
        n && ((e = n.match(/^\/(.*)\/([gim]*)$/)) ? (n = RegExp(e[1], e[2]), e = function (a) {
            return na(d, "pattern", d.$isEmpty(a) || n.test(a), a)
        }) : e = function (c) {
            var e = b.$eval(n);
            if (!e || !e.test)throw C("ngPattern")("noregexp", n, e, fa(a));
            return na(d, "pattern", d.$isEmpty(c) || e.test(c), c)
        }, d.$formatters.push(e), d.$parsers.push(e));
        if (c.ngMinlength) {
            var q = P(c.ngMinlength);
            e = function (a) {
                return na(d, "minlength", d.$isEmpty(a) ||
                    a.length >= q, a)
            };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
        if (c.ngMaxlength) {
            var p = P(c.ngMaxlength);
            e = function (a) {
                return na(d, "maxlength", d.$isEmpty(a) || a.length <= p, a)
            };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
    }

    function yb(b, a) {
        return function (c) {
            var d;
            return oa(c) ? c : A(c) && (b.lastIndex = 0, c = b.exec(c)) ? (c.shift(), d = {yyyy: 0, MM: 1, dd: 1, HH: 0, mm: 0}, r(c, function (b, c) {
                c < a.length && (d[a[c]] = +b)
            }), new Date(d.yyyy, d.MM - 1, d.dd, d.HH, d.mm)) : NaN
        }
    }

    function bb(b, a, c, d) {
        return function (e, f, h, g, m, k, l) {
            ab(e, f, h, g, m, k);
            g.$parsers.push(function (d) {
                if (g.$isEmpty(d))return g.$setValidity(b,
                    !0), null;
                if (a.test(d))return g.$setValidity(b, !0), c(d);
                g.$setValidity(b, !1);
                return s
            });
            g.$formatters.push(function (a) {
                return oa(a) ? l("date")(a, d) : ""
            });
            h.min && (e = function (a) {
                var b = g.$isEmpty(a) || c(a) >= c(h.min);
                g.$setValidity("min", b);
                return b ? a : s
            }, g.$parsers.push(e), g.$formatters.push(e));
            h.max && (e = function (a) {
                var b = g.$isEmpty(a) || c(a) <= c(h.max);
                g.$setValidity("max", b);
                return b ? a : s
            }, g.$parsers.push(e), g.$formatters.push(e))
        }
    }

    function Qb(b, a) {
        b = "ngClass" + b;
        return function () {
            return{restrict: "AC", link: function (c, d, e) {
                function f(b) {
                    if (!0 === a || c.$index % 2 === a) {
                        var d = h(b || "");
                        g ? va(b, g) || e.$updateClass(d, h(g)) : e.$addClass(d)
                    }
                    g = $(b)
                }

                function h(a) {
                    if (J(a))return a.join(" ");
                    if (W(a)) {
                        var b = [];
                        r(a, function (a, c) {
                            a && b.push(c)
                        });
                        return b.join(" ")
                    }
                    return a
                }

                var g;
                c.$watch(e[b], f, !0);
                e.$observe("class", function (a) {
                    f(c.$eval(e[b]))
                });
                "ngClass" !== b && c.$watch("$index", function (d, f) {
                    var g = d & 1;
                    if (g !== f & 1) {
                        var n = h(c.$eval(e[b]));
                        g === a ? e.$addClass(n) : e.$removeClass(n)
                    }
                })
            }}
        }
    }

    var O = function (b) {
        return A(b) ? b.toLowerCase() : b
    }, Hc =
        Object.prototype.hasOwnProperty, Ea = function (b) {
        return A(b) ? b.toUpperCase() : b
    }, V, v, Fa, wa = [].slice, Pe = [].push, ua = Object.prototype.toString, Na = C("ng"), Pa = Q.angular || (Q.angular = {}), Ra, Ja, ia = ["0", "0", "0"];
    V = P((/msie (\d+)/.exec(O(navigator.userAgent)) || [])[1]);
    isNaN(V) && (V = P((/trident\/.*; rv:(\d+)/.exec(O(navigator.userAgent)) || [])[1]));
    z.$inject = [];
    Ca.$inject = [];
    var aa = function () {
        return String.prototype.trim ? function (b) {
            return A(b) ? b.trim() : b
        } : function (b) {
            return A(b) ? b.replace(/^\s\s*/, "").replace(/\s\s*$/,
                "") : b
        }
    }();
    Ja = 9 > V ? function (b) {
        b = b.nodeName ? b : b[0];
        return b.scopeName && "HTML" != b.scopeName ? Ea(b.scopeName + ":" + b.nodeName) : b.nodeName
    } : function (b) {
        return b.nodeName ? b.nodeName : b[0].nodeName
    };
    var dd = /[A-Z]/g, gd = {full: "1.3.0-beta.3", major: 1, minor: 3, dot: 0, codeName: "emotional-waffles"}, Ua = N.cache = {}, ib = N.expando = "ng-" + (new Date).getTime(), qe = 1, pb = Q.document.addEventListener ? function (b, a, c) {
        b.addEventListener(a, c, !1)
    } : function (b, a, c) {
        b.attachEvent("on" + a, c)
    }, Ta = Q.document.removeEventListener ? function (b, a, c) {
        b.removeEventListener(a, c, !1)
    } : function (b, a, c) {
        b.detachEvent("on" + a, c)
    };
    N._data = function (b) {
        return this.cache[b[this.expando]] || {}
    };
    var oe = /([\:\-\_]+(.))/g, pe = /^moz([A-Z])/, Fb = C("jqLite"), Ia = N.prototype = {ready: function (b) {
        function a() {
            c || (c = !0, b())
        }

        var c = !1;
        "complete" === T.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), N(Q).on("load", a))
    }, toString: function () {
        var b = [];
        r(this, function (a) {
            b.push("" + a)
        });
        return"[" + b.join(", ") + "]"
    }, eq: function (b) {
        return 0 <= b ? v(this[b]) : v(this[this.length +
            b])
    }, length: 0, push: Pe, sort: [].sort, splice: [].splice}, mb = {};
    r("multiple selected checked disabled readOnly required open".split(" "), function (b) {
        mb[O(b)] = b
    });
    var pc = {};
    r("input select option textarea button form details".split(" "), function (b) {
        pc[Ea(b)] = !0
    });
    r({data: lc, inheritedData: lb, scope: function (b) {
        return v(b).data("$scope") || lb(b.parentNode || b, ["$isolateScope", "$scope"])
    }, isolateScope: function (b) {
        return v(b).data("$isolateScope") || v(b).data("$isolateScopeNoTemplate")
    }, controller: mc, injector: function (b) {
        return lb(b,
            "$injector")
    }, removeAttr: function (b, a) {
        b.removeAttribute(a)
    }, hasClass: Ib, css: function (b, a, c) {
        a = Sa(a);
        if (w(c))b.style[a] = c; else {
            var d;
            8 >= V && (d = b.currentStyle && b.currentStyle[a], "" === d && (d = "auto"));
            d = d || b.style[a];
            8 >= V && (d = "" === d ? s : d);
            return d
        }
    }, attr: function (b, a, c) {
        var d = O(a);
        if (mb[d])if (w(c))c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || z).specified ? d : s; else if (w(c))b.setAttribute(a, c); else if (b.getAttribute)return b = b.getAttribute(a,
            2), null === b ? s : b
    }, prop: function (b, a, c) {
        if (w(c))b[a] = c; else return b[a]
    }, text: function () {
        function b(b, d) {
            var e = a[b.nodeType];
            if (D(d))return e ? b[e] : "";
            b[e] = d
        }

        var a = [];
        9 > V ? (a[1] = "innerText", a[3] = "nodeValue") : a[1] = a[3] = "textContent";
        b.$dv = "";
        return b
    }(), val: function (b, a) {
        if (D(a)) {
            if ("SELECT" === Ja(b) && b.multiple) {
                var c = [];
                r(b.options, function (a) {
                    a.selected && c.push(a.value || a.text)
                });
                return 0 === c.length ? null : c
            }
            return b.value
        }
        b.value = a
    }, html: function (b, a) {
        if (D(a))return b.innerHTML;
        for (var c = 0, d = b.childNodes; c <
            d.length; c++)Ga(d[c]);
        b.innerHTML = a
    }, empty: nc}, function (b, a) {
        N.prototype[a] = function (a, d) {
            var e, f;
            if (b !== nc && (2 == b.length && b !== Ib && b !== mc ? a : d) === s) {
                if (W(a)) {
                    for (e = 0; e < this.length; e++)if (b === lc)b(this[e], a); else for (f in a)b(this[e], f, a[f]);
                    return this
                }
                e = b.$dv;
                f = e === s ? Math.min(this.length, 1) : this.length;
                for (var h = 0; h < f; h++) {
                    var g = b(this[h], a, d);
                    e = e ? e + g : g
                }
                return e
            }
            for (e = 0; e < this.length; e++)b(this[e], a, d);
            return this
        }
    });
    r({removeData: jc, dealoc: Ga, on: function a(c, d, e, f) {
        if (w(f))throw Fb("onargs");
        var h =
            ja(c, "events"), g = ja(c, "handle");
        h || ja(c, "events", h = {});
        g || ja(c, "handle", g = re(c, h));
        r(d.split(" "), function (d) {
            var f = h[d];
            if (!f) {
                if ("mouseenter" == d || "mouseleave" == d) {
                    var l = T.body.contains || T.body.compareDocumentPosition ? function (a, c) {
                        var d = 9 === a.nodeType ? a.documentElement : a, e = c && c.parentNode;
                        return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16))
                    } : function (a, c) {
                        if (c)for (; c = c.parentNode;)if (c === a)return!0;
                        return!1
                    };
                    h[d] = [];
                    a(c, {mouseleave: "mouseout",
                        mouseenter: "mouseover"}[d], function (a) {
                        var c = a.relatedTarget;
                        c && (c === this || l(this, c)) || g(a, d)
                    })
                } else pb(c, d, g), h[d] = [];
                f = h[d]
            }
            f.push(e)
        })
    }, off: kc, one: function (a, c, d) {
        a = v(a);
        a.on(c, function f() {
            a.off(c, d);
            a.off(c, f)
        });
        a.on(c, d)
    }, replaceWith: function (a, c) {
        var d, e = a.parentNode;
        Ga(a);
        r(new N(c), function (c) {
            d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
            d = c
        })
    }, children: function (a) {
        var c = [];
        r(a.childNodes, function (a) {
            1 === a.nodeType && c.push(a)
        });
        return c
    }, contents: function (a) {
        return a.contentDocument ||
            a.childNodes || []
    }, append: function (a, c) {
        r(new N(c), function (c) {
            1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c)
        })
    }, prepend: function (a, c) {
        if (1 === a.nodeType) {
            var d = a.firstChild;
            r(new N(c), function (c) {
                a.insertBefore(c, d)
            })
        }
    }, wrap: function (a, c) {
        c = v(c)[0];
        var d = a.parentNode;
        d && d.replaceChild(c, a);
        c.appendChild(a)
    }, remove: function (a) {
        Ga(a);
        var c = a.parentNode;
        c && c.removeChild(a)
    }, after: function (a, c) {
        var d = a, e = a.parentNode;
        r(new N(c), function (a) {
            e.insertBefore(a, d.nextSibling);
            d = a
        })
    }, addClass: kb, removeClass: jb,
        toggleClass: function (a, c, d) {
            c && r(c.split(" "), function (c) {
                var f = d;
                D(f) && (f = !Ib(a, c));
                (f ? kb : jb)(a, c)
            })
        }, parent: function (a) {
            return(a = a.parentNode) && 11 !== a.nodeType ? a : null
        }, next: function (a) {
            if (a.nextElementSibling)return a.nextElementSibling;
            for (a = a.nextSibling; null != a && 1 !== a.nodeType;)a = a.nextSibling;
            return a
        }, find: function (a, c) {
            return a.getElementsByTagName ? a.getElementsByTagName(c) : []
        }, clone: Hb, triggerHandler: function (a, c, d) {
            c = (ja(a, "events") || {})[c];
            d = d || [];
            var e = [
                {preventDefault: z, stopPropagation: z}
            ];
            r(c, function (c) {
                c.apply(a, e.concat(d))
            })
        }}, function (a, c) {
        N.prototype[c] = function (c, e, f) {
            for (var h, g = 0; g < this.length; g++)D(h) ? (h = a(this[g], c, e, f), w(h) && (h = v(h))) : Gb(h, a(this[g], c, e, f));
            return w(h) ? h : this
        };
        N.prototype.bind = N.prototype.on;
        N.prototype.unbind = N.prototype.off
    });
    Va.prototype = {put: function (a, c) {
        this[Ha(a)] = c
    }, get: function (a) {
        return this[Ha(a)]
    }, remove: function (a) {
        var c = this[a = Ha(a)];
        delete this[a];
        return c
    }};
    var te = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, ue = /,/, ve = /^\s*(_?)(\S+?)\1\s*$/, se =
        /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Wa = C("$injector"), Qe = C("$animate"), Sd = ["$provide", function (a) {
        this.$$selectors = {};
        this.register = function (c, d) {
            var e = c + "-animation";
            if (c && "." != c.charAt(0))throw Qe("notcsel", c);
            this.$$selectors[c.substr(1)] = e;
            a.factory(e, d)
        };
        this.classNameFilter = function (a) {
            1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
            return this.$$classNameFilter
        };
        this.$get = ["$timeout", "$$asyncCallback", function (a, d) {
            return{enter: function (a, c, h, g) {
                h ? h.after(a) : (c && c[0] ||
                    (c = h.parent()), c.append(a));
                g && d(g)
            }, leave: function (a, c) {
                a.remove();
                c && d(c)
            }, move: function (a, c, d, g) {
                this.enter(a, c, d, g)
            }, addClass: function (a, c, h) {
                c = A(c) ? c : J(c) ? c.join(" ") : "";
                r(a, function (a) {
                    kb(a, c)
                });
                h && d(h)
            }, removeClass: function (a, c, h) {
                c = A(c) ? c : J(c) ? c.join(" ") : "";
                r(a, function (a) {
                    jb(a, c)
                });
                h && d(h)
            }, setClass: function (a, c, h, g) {
                r(a, function (a) {
                    kb(a, c);
                    jb(a, h)
                });
                g && d(g)
            }, enabled: z}
        }]
    }], ha = C("$compile");
    ec.$inject = ["$provide", "$$sanitizeUriProvider"];
    var ye = /^(x[\:\-_]|data[\:\-_])/i, xc = C("$interpolate"),
        Re = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Be = {http: 80, https: 443, ftp: 21}, Mb = C("$location");
    Cc.prototype = Nb.prototype = Bc.prototype = {$$html5: !1, $$replace: !1, absUrl: qb("$$absUrl"), url: function (a, c) {
        if (D(a))return this.$$url;
        var d = Re.exec(a);
        d[1] && this.path(decodeURIComponent(d[1]));
        (d[2] || d[1]) && this.search(d[3] || "");
        this.hash(d[5] || "", c);
        return this
    }, protocol: qb("$$protocol"), host: qb("$$host"), port: qb("$$port"), path: Dc("$$path", function (a) {
        return"/" == a.charAt(0) ? a : "/" + a
    }), search: function (a, c) {
        switch (arguments.length) {
            case 0:
                return this.$$search;
            case 1:
                if (A(a))this.$$search = $b(a); else if (W(a))this.$$search = a; else throw Mb("isrcharg");
                break;
            default:
                D(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
        }
        this.$$compose();
        return this
    }, hash: Dc("$$hash", Ca), replace: function () {
        this.$$replace = !0;
        return this
    }};
    var Aa = C("$parse"), Gc = {}, ra, Ma = {"null": function () {
        return null
    }, "true": function () {
        return!0
    }, "false": function () {
        return!1
    }, undefined: z, "+": function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return w(d) ? w(e) ? d + e : d : w(e) ? e : s
    }, "-": function (a, c, d, e) {
        d = d(a, c);
        e =
            e(a, c);
        return(w(d) ? d : 0) - (w(e) ? e : 0)
    }, "*": function (a, c, d, e) {
        return d(a, c) * e(a, c)
    }, "/": function (a, c, d, e) {
        return d(a, c) / e(a, c)
    }, "%": function (a, c, d, e) {
        return d(a, c) % e(a, c)
    }, "^": function (a, c, d, e) {
        return d(a, c) ^ e(a, c)
    }, "=": z, "===": function (a, c, d, e) {
        return d(a, c) === e(a, c)
    }, "!==": function (a, c, d, e) {
        return d(a, c) !== e(a, c)
    }, "==": function (a, c, d, e) {
        return d(a, c) == e(a, c)
    }, "!=": function (a, c, d, e) {
        return d(a, c) != e(a, c)
    }, "<": function (a, c, d, e) {
        return d(a, c) < e(a, c)
    }, ">": function (a, c, d, e) {
        return d(a, c) > e(a, c)
    }, "<=": function (a, c, d, e) {
        return d(a, c) <= e(a, c)
    }, ">=": function (a, c, d, e) {
        return d(a, c) >= e(a, c)
    }, "&&": function (a, c, d, e) {
        return d(a, c) && e(a, c)
    }, "||": function (a, c, d, e) {
        return d(a, c) || e(a, c)
    }, "&": function (a, c, d, e) {
        return d(a, c) & e(a, c)
    }, "|": function (a, c, d, e) {
        return e(a, c)(a, c, d(a, c))
    }, "!": function (a, c, d) {
        return!d(a, c)
    }}, Se = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, Pb = function (a) {
        this.options = a
    };
    Pb.prototype = {constructor: Pb, lex: function (a) {
        this.text = a;
        this.index = 0;
        this.ch = s;
        this.lastCh = ":";
        this.tokens = [];
        var c;
        for (a = []; this.index < this.text.length;) {
            this.ch = this.text.charAt(this.index);
            if (this.is("\"'"))this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(this.ch))this.readIdent(), this.was("{,") && ("{" === a[0] && (c = this.tokens[this.tokens.length - 1])) && (c.json = -1 === c.text.indexOf(".")); else if (this.is("(){}[].,;:?"))this.tokens.push({index: this.index, text: this.ch, json: this.was(":[,") && this.is("{[") || this.is("}]:,")}), this.is("{[") &&
                a.unshift(this.ch), this.is("}]") && a.shift(), this.index++; else if (this.isWhitespace(this.ch)) {
                this.index++;
                continue
            } else {
                var d = this.ch + this.peek(), e = d + this.peek(2), f = Ma[this.ch], h = Ma[d], g = Ma[e];
                g ? (this.tokens.push({index: this.index, text: e, fn: g}), this.index += 3) : h ? (this.tokens.push({index: this.index, text: d, fn: h}), this.index += 2) : f ? (this.tokens.push({index: this.index, text: this.ch, fn: f, json: this.was("[,:") && this.is("+-")}), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index +
                    1)
            }
            this.lastCh = this.ch
        }
        return this.tokens
    }, is: function (a) {
        return-1 !== a.indexOf(this.ch)
    }, was: function (a) {
        return-1 !== a.indexOf(this.lastCh)
    }, peek: function (a) {
        a = a || 1;
        return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
    }, isNumber: function (a) {
        return"0" <= a && "9" >= a
    }, isWhitespace: function (a) {
        return" " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
    }, isIdent: function (a) {
        return"a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
    }, isExpOperator: function (a) {
        return"-" === a || "+" === a || this.isNumber(a)
    },
        throwError: function (a, c, d) {
            d = d || this.index;
            c = w(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
            throw Aa("lexerr", a, c, this.text);
        }, readNumber: function () {
            for (var a = "", c = this.index; this.index < this.text.length;) {
                var d = O(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d))a += d; else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e))a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1))a += d; else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length -
                        1))break; else this.throwError("Invalid exponent")
                }
                this.index++
            }
            a *= 1;
            this.tokens.push({index: c, text: a, json: !0, fn: function () {
                return a
            }})
        }, readIdent: function () {
            for (var a = this, c = "", d = this.index, e, f, h, g; this.index < this.text.length;) {
                g = this.text.charAt(this.index);
                if ("." === g || this.isIdent(g) || this.isNumber(g))"." === g && (e = this.index), c += g; else break;
                this.index++
            }
            if (e)for (f = this.index; f < this.text.length;) {
                g = this.text.charAt(f);
                if ("(" === g) {
                    h = c.substr(e - d + 1);
                    c = c.substr(0, e - d);
                    this.index = f;
                    break
                }
                if (this.isWhitespace(g))f++;
                else break
            }
            d = {index: d, text: c};
            if (Ma.hasOwnProperty(c))d.fn = Ma[c], d.json = Ma[c]; else {
                var m = Fc(c, this.options, this.text);
                d.fn = t(function (a, c) {
                    return m(a, c)
                }, {assign: function (d, e) {
                    return rb(d, c, e, a.text, a.options)
                }})
            }
            this.tokens.push(d);
            h && (this.tokens.push({index: e, text: ".", json: !1}), this.tokens.push({index: e + 1, text: h, json: !1}))
        }, readString: function (a) {
            var c = this.index;
            this.index++;
            for (var d = "", e = a, f = !1; this.index < this.text.length;) {
                var h = this.text.charAt(this.index), e = e + h;
                if (f)"u" === h ? (h = this.text.substring(this.index +
                    1, this.index + 5), h.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + h + "]"), this.index += 4, d += String.fromCharCode(parseInt(h, 16))) : d = (f = Se[h]) ? d + f : d + h, f = !1; else if ("\\" === h)f = !0; else {
                    if (h === a) {
                        this.index++;
                        this.tokens.push({index: c, text: e, string: d, json: !0, fn: function () {
                            return d
                        }});
                        return
                    }
                    d += h
                }
                this.index++
            }
            this.throwError("Unterminated quote", c)
        }};
    var $a = function (a, c, d) {
        this.lexer = a;
        this.$filter = c;
        this.options = d
    };
    $a.ZERO = function () {
        return 0
    };
    $a.prototype = {constructor: $a, parse: function (a, c) {
        this.text = a;
        this.json = c;
        this.tokens = this.lexer.lex(a);
        c && (this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function () {
            this.throwError("is not valid json", {text: a, index: 0})
        });
        var d = c ? this.primary() : this.statements();
        0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
        d.literal = !!d.literal;
        d.constant = !!d.constant;
        return d
    }, primary: function () {
        var a;
        if (this.expect("("))a = this.filterChain(), this.consume(")"); else if (this.expect("["))a =
            this.arrayDeclaration(); else if (this.expect("{"))a = this.object(); else {
            var c = this.expect();
            (a = c.fn) || this.throwError("not a primary expression", c);
            c.json && (a.constant = !0, a.literal = !0)
        }
        for (var d; c = this.expect("(", "[", ".");)"(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
        return a
    }, throwError: function (a, c) {
        throw Aa("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
    }, peekToken: function () {
        if (0 ===
            this.tokens.length)throw Aa("ueoe", this.text);
        return this.tokens[0]
    }, peek: function (a, c, d, e) {
        if (0 < this.tokens.length) {
            var f = this.tokens[0], h = f.text;
            if (h === a || h === c || h === d || h === e || !(a || c || d || e))return f
        }
        return!1
    }, expect: function (a, c, d, e) {
        return(a = this.peek(a, c, d, e)) ? (this.json && !a.json && this.throwError("is not valid json", a), this.tokens.shift(), a) : !1
    }, consume: function (a) {
        this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
    }, unaryFn: function (a, c) {
        return t(function (d, e) {
            return a(d,
                e, c)
        }, {constant: c.constant})
    }, ternaryFn: function (a, c, d) {
        return t(function (e, f) {
            return a(e, f) ? c(e, f) : d(e, f)
        }, {constant: a.constant && c.constant && d.constant})
    }, binaryFn: function (a, c, d) {
        return t(function (e, f) {
            return c(e, f, a, d)
        }, {constant: a.constant && d.constant})
    }, statements: function () {
        for (var a = []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))return 1 === a.length ? a[0] : function (c, d) {
            for (var e, f = 0; f < a.length; f++) {
                var h = a[f];
                h && (e = h(c, d))
            }
            return e
        }
    }, filterChain: function () {
        for (var a =
            this.expression(), c; ;)if (c = this.expect("|"))a = this.binaryFn(a, c.fn, this.filter()); else return a
    }, filter: function () {
        for (var a = this.expect(), c = this.$filter(a.text), d = []; ;)if (a = this.expect(":"))d.push(this.expression()); else {
            var e = function (a, e, g) {
                g = [g];
                for (var m = 0; m < d.length; m++)g.push(d[m](a, e));
                return c.apply(a, g)
            };
            return function () {
                return e
            }
        }
    }, expression: function () {
        return this.assignment()
    }, assignment: function () {
        var a = this.ternary(), c, d;
        return(d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" +
            this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), function (d, f) {
            return a.assign(d, c(d, f), f)
        }) : a
    }, ternary: function () {
        var a = this.logicalOR(), c, d;
        if (this.expect("?")) {
            c = this.ternary();
            if (d = this.expect(":"))return this.ternaryFn(a, c, this.ternary());
            this.throwError("expected :", d)
        } else return a
    }, logicalOR: function () {
        for (var a = this.logicalAND(), c; ;)if (c = this.expect("||"))a = this.binaryFn(a, c.fn, this.logicalAND()); else return a
    }, logicalAND: function () {
        var a = this.equality(), c;
        if (c =
            this.expect("&&"))a = this.binaryFn(a, c.fn, this.logicalAND());
        return a
    }, equality: function () {
        var a = this.relational(), c;
        if (c = this.expect("==", "!=", "===", "!=="))a = this.binaryFn(a, c.fn, this.equality());
        return a
    }, relational: function () {
        var a = this.additive(), c;
        if (c = this.expect("<", ">", "<=", ">="))a = this.binaryFn(a, c.fn, this.relational());
        return a
    }, additive: function () {
        for (var a = this.multiplicative(), c; c = this.expect("+", "-");)a = this.binaryFn(a, c.fn, this.multiplicative());
        return a
    }, multiplicative: function () {
        for (var a =
            this.unary(), c; c = this.expect("*", "/", "%");)a = this.binaryFn(a, c.fn, this.unary());
        return a
    }, unary: function () {
        var a;
        return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn($a.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
    }, fieldAccess: function (a) {
        var c = this, d = this.expect().text, e = Fc(d, this.options, this.text);
        return t(function (c, d, g) {
            return e(g || a(c, d))
        }, {assign: function (e, h, g) {
            return rb(a(e, g), d, h, c.text, c.options)
        }})
    }, objectIndex: function (a) {
        var c =
            this, d = this.expression();
        this.consume("]");
        return t(function (e, f) {
            var h = a(e, f), g = d(e, f), m;
            if (!h)return s;
            (h = Za(h[g], c.text)) && (h.then && c.options.unwrapPromises) && (m = h, "$$v"in h || (m.$$v = s, m.then(function (a) {
                m.$$v = a
            })), h = h.$$v);
            return h
        }, {assign: function (e, f, h) {
            var g = d(e, h);
            return Za(a(e, h), c.text)[g] = f
        }})
    }, functionCall: function (a, c) {
        var d = [];
        if (")" !== this.peekToken().text) {
            do d.push(this.expression()); while (this.expect(","))
        }
        this.consume(")");
        var e = this;
        return function (f, h) {
            for (var g = [], m = c ? c(f, h) :
                f, k = 0; k < d.length; k++)g.push(d[k](f, h));
            k = a(f, h, m) || z;
            Za(m, e.text);
            Za(k, e.text);
            g = k.apply ? k.apply(m, g) : k(g[0], g[1], g[2], g[3], g[4]);
            return Za(g, e.text)
        }
    }, arrayDeclaration: function () {
        var a = [], c = !0;
        if ("]" !== this.peekToken().text) {
            do {
                if (this.peek("]"))break;
                var d = this.expression();
                a.push(d);
                d.constant || (c = !1)
            } while (this.expect(","))
        }
        this.consume("]");
        return t(function (c, d) {
            for (var h = [], g = 0; g < a.length; g++)h.push(a[g](c, d));
            return h
        }, {literal: !0, constant: c})
    }, object: function () {
        var a = [], c = !0;
        if ("}" !== this.peekToken().text) {
            do {
                if (this.peek("}"))break;
                var d = this.expect(), d = d.string || d.text;
                this.consume(":");
                var e = this.expression();
                a.push({key: d, value: e});
                e.constant || (c = !1)
            } while (this.expect(","))
        }
        this.consume("}");
        return t(function (c, d) {
            for (var e = {}, m = 0; m < a.length; m++) {
                var k = a[m];
                e[k.key] = k.value(c, d)
            }
            return e
        }, {literal: !0, constant: c})
    }};
    var Ob = {}, sa = C("$sce"), ea = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, S = T.createElement("a"), Jc = qa(Q.location.href, !0);
    ic.$inject = ["$provide"];
    Kc.$inject = ["$locale"];
    Mc.$inject = ["$locale"];
    var Pc = ".", Ne = {yyyy: X("FullYear", 4), yy: X("FullYear", 2, 0, !0), y: X("FullYear", 1), MMMM: tb("Month"), MMM: tb("Month", !0), MM: X("Month", 2, 1), M: X("Month", 1, 1), dd: X("Date", 2), d: X("Date", 1), HH: X("Hours", 2), H: X("Hours", 1), hh: X("Hours", 2, -12), h: X("Hours", 1, -12), mm: X("Minutes", 2), m: X("Minutes", 1), ss: X("Seconds", 2), s: X("Seconds", 1), sss: X("Milliseconds", 3), EEEE: tb("Day"), EEE: tb("Day", !0), a: function (a, c) {
        return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
    }, Z: function (a) {
        a = -1 * a.getTimezoneOffset();
        return a = (0 <= a ? "+" : "") + (sb(Math[0 <
            a ? "floor" : "ceil"](a / 60), 2) + sb(Math.abs(a % 60), 2))
    }, ww: Rc(2), w: Rc(1)}, Me = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, Le = /^\-?\d+$/;
    Lc.$inject = ["$locale"];
    var Je = Y(O), Ke = Y(Ea);
    Nc.$inject = ["$parse"];
    var jd = Y({restrict: "E", compile: function (a, c) {
        8 >= V && (c.href || c.name || c.$set("href", ""), a.append(T.createComment("IE fix")));
        if (!c.href && !c.xlinkHref && !c.name)return function (a, c) {
            var f = "[object SVGAnimatedString]" === ua.call(c.prop("href")) ? "xlink:href" : "href";
            c.on("click",
                function (a) {
                    c.attr(f) || a.preventDefault()
                })
        }
    }}), Db = {};
    r(mb, function (a, c) {
        if ("multiple" != a) {
            var d = ka("ng-" + c);
            Db[d] = function () {
                return{priority: 100, link: function (a, f, h) {
                    a.$watch(h[d], function (a) {
                        h.$set(c, !!a)
                    })
                }}
            }
        }
    });
    r(["src", "srcset", "href"], function (a) {
        var c = ka("ng-" + a);
        Db[c] = function () {
            return{priority: 99, link: function (d, e, f) {
                var h = a, g = a;
                "href" === a && "[object SVGAnimatedString]" === ua.call(e.prop("href")) && (g = "xlinkHref", f.$attr[g] = "xlink:href", h = null);
                f.$observe(c, function (a) {
                    a && (f.$set(g, a), V && h &&
                        e.prop(h, f[g]))
                })
            }}
        }
    });
    var wb = {$addControl: z, $removeControl: z, $setValidity: z, $setDirty: z, $setPristine: z};
    Sc.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var Tc = function (a) {
        return["$timeout", function (c) {
            return{name: "form", restrict: a ? "EAC" : "E", controller: Sc, compile: function () {
                return{pre: function (a, e, f, h) {
                    if (!f.action) {
                        var g = function (a) {
                            a.preventDefault ? a.preventDefault() : a.returnValue = !1
                        };
                        pb(e[0], "submit", g);
                        e.on("$destroy", function () {
                            c(function () {
                                Ta(e[0], "submit", g)
                            }, 0, !1)
                        })
                    }
                    var m = e.parent().controller("form"),
                        k = f.name || f.ngForm;
                    k && rb(a, k, h, k);
                    if (m)e.on("$destroy", function () {
                        m.$removeControl(h);
                        k && rb(a, k, s, k);
                        t(h, wb)
                    })
                }}
            }}
        }]
    }, kd = Tc(), xd = Tc(!0), Te = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Ue = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i, Ve = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Uc = /^(\d{4})-(\d{2})-(\d{2})$/, Vc = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)$/, Rb = /^(\d{4})-W(\d\d)$/, Wc = /^(\d{4})-(\d\d)$/, Xc = /^(\d\d):(\d\d)$/, Yc = {text: ab, date: bb("date", Uc, yb(Uc,
        ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": bb("datetimelocal", Vc, yb(Vc, ["yyyy", "MM", "dd", "HH", "mm"]), "yyyy-MM-ddTHH:mm"), time: bb("time", Xc, yb(Xc, ["HH", "mm"]), "HH:mm"), week: bb("week", Rb, function (a) {
        if (oa(a))return a;
        if (A(a)) {
            Rb.lastIndex = 0;
            var c = Rb.exec(a);
            if (c) {
                a = +c[1];
                var d = +c[2], c = Qc(a), d = 7 * (d - 1);
                return new Date(a, 0, c.getDate() + d)
            }
        }
        return NaN
    }, "yyyy-Www"), month: bb("month", Wc, yb(Wc, ["yyyy", "MM"]), "yyyy-MM"), number: function (a, c, d, e, f, h) {
        ab(a, c, d, e, f, h);
        e.$parsers.push(function (a) {
            var c = e.$isEmpty(a);
            if (c || Ve.test(a))return e.$setValidity("number", !0), "" === a ? null : c ? a : parseFloat(a);
            e.$setValidity("number", !1);
            return s
        });
        Oe(e, "number", c);
        e.$formatters.push(function (a) {
            return e.$isEmpty(a) ? "" : "" + a
        });
        d.min && (a = function (a) {
            var c = parseFloat(d.min);
            return na(e, "min", e.$isEmpty(a) || a >= c, a)
        }, e.$parsers.push(a), e.$formatters.push(a));
        d.max && (a = function (a) {
            var c = parseFloat(d.max);
            return na(e, "max", e.$isEmpty(a) || a <= c, a)
        }, e.$parsers.push(a), e.$formatters.push(a));
        e.$formatters.push(function (a) {
            return na(e,
                "number", e.$isEmpty(a) || zb(a), a)
        })
    }, url: function (a, c, d, e, f, h) {
        ab(a, c, d, e, f, h);
        a = function (a) {
            return na(e, "url", e.$isEmpty(a) || Te.test(a), a)
        };
        e.$formatters.push(a);
        e.$parsers.push(a)
    }, email: function (a, c, d, e, f, h) {
        ab(a, c, d, e, f, h);
        a = function (a) {
            return na(e, "email", e.$isEmpty(a) || Ue.test(a), a)
        };
        e.$formatters.push(a);
        e.$parsers.push(a)
    }, radio: function (a, c, d, e) {
        D(d.name) && c.attr("name", db());
        c.on("click", function () {
            c[0].checked && a.$apply(function () {
                e.$setViewValue(d.value)
            })
        });
        e.$render = function () {
            c[0].checked =
                d.value == e.$viewValue
        };
        d.$observe("value", e.$render)
    }, checkbox: function (a, c, d, e) {
        var f = d.ngTrueValue, h = d.ngFalseValue;
        A(f) || (f = !0);
        A(h) || (h = !1);
        c.on("click", function () {
            a.$apply(function () {
                e.$setViewValue(c[0].checked)
            })
        });
        e.$render = function () {
            c[0].checked = e.$viewValue
        };
        e.$isEmpty = function (a) {
            return a !== f
        };
        e.$formatters.push(function (a) {
            return a === f
        });
        e.$parsers.push(function (a) {
            return a ? f : h
        })
    }, hidden: z, button: z, submit: z, reset: z, file: z}, fc = ["$browser", "$sniffer", "$filter", function (a, c, d) {
        return{restrict: "E",
            require: "?ngModel", link: function (e, f, h, g) {
                g && (Yc[O(h.type)] || Yc.text)(e, f, h, g, c, a, d)
            }}
    }], vb = "ng-valid", ub = "ng-invalid", La = "ng-pristine", xb = "ng-dirty", We = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function (a, c, d, e, f, h) {
        function g(a, c) {
            c = c ? "-" + hb(c, "-") : "";
            h.removeClass(e, (a ? ub : vb) + c);
            h.addClass(e, (a ? vb : ub) + c)
        }

        this.$modelValue = this.$viewValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name = d.name;
        var m = f(d.ngModel), k = m.assign;
        if (!k)throw C("ngModel")("nonassign", d.ngModel, fa(e));
        this.$render = z;
        this.$isEmpty = function (a) {
            return D(a) || "" === a || null === a || a !== a
        };
        var l = e.inheritedData("$formController") || wb, n = 0, q = this.$error = {};
        e.addClass(La);
        g(!0);
        this.$setValidity = function (a, c) {
            q[a] !== !c && (c ? (q[a] && n--, n || (g(!0), this.$valid = !0, this.$invalid = !1)) : (g(!1), this.$invalid = !0, this.$valid = !1, n++), q[a] = !c, g(c, a), l.$setValidity(a, c, this))
        };
        this.$setPristine = function () {
            this.$dirty = !1;
            this.$pristine = !0;
            h.removeClass(e, xb);
            h.addClass(e, La)
        };
        this.$setViewValue = function (d) {
            this.$viewValue = d;
            this.$pristine && (this.$dirty = !0, this.$pristine = !1, h.removeClass(e, La), h.addClass(e, xb), l.$setDirty());
            r(this.$parsers, function (a) {
                d = a(d)
            });
            this.$modelValue !== d && (this.$modelValue = d, k(a, d), r(this.$viewChangeListeners, function (a) {
                try {
                    a()
                } catch (d) {
                    c(d)
                }
            }))
        };
        var p = this;
        a.$watch(function () {
            var c = m(a);
            if (p.$modelValue !== c) {
                var d = p.$formatters, e = d.length;
                for (p.$modelValue = c; e--;)c = d[e](c);
                p.$viewValue !==
                c && (p.$viewValue = c, p.$render())
            }
            return c
        })
    }], Md = function () {
        return{require: ["ngModel", "^?form"], controller: We, link: function (a, c, d, e) {
            var f = e[0], h = e[1] || wb;
            h.$addControl(f);
            a.$on("$destroy", function () {
                h.$removeControl(f)
            })
        }}
    }, Od = Y({require: "ngModel", link: function (a, c, d, e) {
        e.$viewChangeListeners.push(function () {
            a.$eval(d.ngChange)
        })
    }}), gc = function () {
        return{require: "?ngModel", link: function (a, c, d, e) {
            if (e) {
                d.required = !0;
                var f = function (a) {
                    if (d.required && e.$isEmpty(a))e.$setValidity("required", !1); else return e.$setValidity("required",
                        !0), a
                };
                e.$formatters.push(f);
                e.$parsers.unshift(f);
                d.$observe("required", function () {
                    f(e.$viewValue)
                })
            }
        }}
    }, Nd = function () {
        return{require: "ngModel", link: function (a, c, d, e) {
            var f = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
            e.$parsers.push(function (a) {
                if (!D(a)) {
                    var c = [];
                    a && r(a.split(f), function (a) {
                        a && c.push(aa(a))
                    });
                    return c
                }
            });
            e.$formatters.push(function (a) {
                return J(a) ? a.join(", ") : s
            });
            e.$isEmpty = function (a) {
                return!a || !a.length
            }
        }}
    }, Xe = /^(true|false|\d+)$/, Pd = function () {
        return{priority: 100,
            compile: function (a, c) {
                return Xe.test(c.ngValue) ? function (a, c, f) {
                    f.$set("value", a.$eval(f.ngValue))
                } : function (a, c, f) {
                    a.$watch(f.ngValue, function (a) {
                        f.$set("value", a)
                    })
                }
            }}
    }, pd = ta(function (a, c, d) {
        c.addClass("ng-binding").data("$binding", d.ngBind);
        a.$watch(d.ngBind, function (a) {
            c.text(a == s ? "" : a)
        })
    }), rd = ["$interpolate", function (a) {
        return function (c, d, e) {
            c = a(d.attr(e.$attr.ngBindTemplate));
            d.addClass("ng-binding").data("$binding", c);
            e.$observe("ngBindTemplate", function (a) {
                d.text(a)
            })
        }
    }], qd = ["$sce", "$parse",
        function (a, c) {
            return function (d, e, f) {
                e.addClass("ng-binding").data("$binding", f.ngBindHtml);
                var h = c(f.ngBindHtml);
                d.$watch(function () {
                    return(h(d) || "").toString()
                }, function (c) {
                    e.html(a.getTrustedHtml(h(d)) || "")
                })
            }
        }], sd = Qb("", !0), ud = Qb("Odd", 0), td = Qb("Even", 1), vd = ta({compile: function (a, c) {
        c.$set("ngCloak", s);
        a.removeClass("ng-cloak")
    }}), wd = [function () {
        return{scope: !0, controller: "@", priority: 500}
    }], hc = {};
    r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
        function (a) {
            var c = ka("ng-" + a);
            hc[c] = ["$parse", function (d) {
                return{compile: function (e, f) {
                    var h = d(f[c]);
                    return function (c, d, e) {
                        d.on(O(a), function (a) {
                            c.$apply(function () {
                                h(c, {$event: a})
                            })
                        })
                    }
                }}
            }]
        });
    var zd = ["$animate", function (a) {
        return{transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function (c, d, e, f, h) {
            var g, m, k;
            c.$watch(e.ngIf, function (f) {
                Oa(f) ? m || (m = c.$new(), h(m, function (c) {
                    c[c.length++] = T.createComment(" end ngIf: " + e.ngIf + " ");
                    g = {clone: c};
                    a.enter(c, d.parent(), d)
                })) : (k && (k.remove(),
                    k = null), m && (m.$destroy(), m = null), g && (k = Cb(g.clone), a.leave(k, function () {
                    k = null
                }), g = null))
            })
        }}
    }], Ad = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function (a, c, d, e, f) {
        return{restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: Pa.noop, compile: function (h, g) {
            var m = g.ngInclude || g.src, k = g.onload || "", l = g.autoscroll;
            return function (g, h, p, r, s) {
                var t = 0, y, v, K, x = function () {
                    v && (v.remove(), v = null);
                    y && (y.$destroy(), y = null);
                    K && (e.leave(K, function () {
                        v = null
                    }), v = K, K = null)
                };
                g.$watch(f.parseAsResourceUrl(m),
                    function (f) {
                        var m = function () {
                            !w(l) || l && !g.$eval(l) || d()
                        }, p = ++t;
                        f ? (a.get(f, {cache: c}).success(function (a) {
                            if (p === t) {
                                var c = g.$new();
                                r.template = a;
                                a = s(c, function (a) {
                                    x();
                                    e.enter(a, null, h, m)
                                });
                                y = c;
                                K = a;
                                y.$emit("$includeContentLoaded");
                                g.$eval(k)
                            }
                        }).error(function () {
                            p === t && x()
                        }), g.$emit("$includeContentRequested")) : (x(), r.template = null)
                    })
            }
        }}
    }], Qd = ["$compile", function (a) {
        return{restrict: "ECA", priority: -400, require: "ngInclude", link: function (c, d, e, f) {
            d.html(f.template);
            a(d.contents())(c)
        }}
    }], Bd = ta({priority: 450,
        compile: function () {
            return{pre: function (a, c, d) {
                a.$eval(d.ngInit)
            }}
        }}), Cd = ta({terminal: !0, priority: 1E3}), Dd = ["$locale", "$interpolate", function (a, c) {
        var d = /{}/g;
        return{restrict: "EA", link: function (e, f, h) {
            var g = h.count, m = h.$attr.when && f.attr(h.$attr.when), k = h.offset || 0, l = e.$eval(m) || {}, n = {}, q = c.startSymbol(), p = c.endSymbol(), s = /^when(Minus)?(.+)$/;
            r(h, function (a, c) {
                s.test(c) && (l[O(c.replace("when", "").replace("Minus", "-"))] = f.attr(h.$attr[c]))
            });
            r(l, function (a, e) {
                n[e] = c(a.replace(d, q + g + "-" + k + p))
            });
            e.$watch(function () {
                var c =
                    parseFloat(e.$eval(g));
                if (isNaN(c))return"";
                c in l || (c = a.pluralCat(c - k));
                return n[c](e, f, !0)
            }, function (a) {
                f.text(a)
            })
        }}
    }], Ed = ["$parse", "$animate", function (a, c) {
        var d = C("ngRepeat");
        return{transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, link: function (e, f, h, g, m) {
            var k = h.ngRepeat, l = k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), n, q, p, s, t, w, y = {$id: Ha};
            if (!l)throw d("iexp", k);
            h = l[1];
            g = l[2];
            (l = l[3]) ? (n = a(l), q = function (a, c, d) {
                w && (y[w] = a);
                y[t] = c;
                y.$index = d;
                return n(e,
                    y)
            }) : (p = function (a, c) {
                return Ha(c)
            }, s = function (a) {
                return a
            });
            l = h.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
            if (!l)throw d("iidexp", h);
            t = l[3] || l[1];
            w = l[2];
            var H = {};
            e.$watchCollection(g, function (a) {
                var g, h, l = f[0], n, y = {}, A, B, z, D, C, L, J = [];
                if (cb(a))C = a, n = q || p; else {
                    n = q || s;
                    C = [];
                    for (z in a)a.hasOwnProperty(z) && "$" != z.charAt(0) && C.push(z);
                    C.sort()
                }
                A = C.length;
                h = J.length = C.length;
                for (g = 0; g < h; g++)if (z = a === C ? g : C[g], D = a[z], D = n(z, D, g), ya(D, "`track by` id"), H.hasOwnProperty(D))L = H[D], delete H[D], y[D] =
                    L, J[g] = L; else {
                    if (y.hasOwnProperty(D))throw r(J, function (a) {
                        a && a.scope && (H[a.id] = a)
                    }), d("dupes", k, D);
                    J[g] = {id: D};
                    y[D] = !1
                }
                for (z in H)H.hasOwnProperty(z) && (L = H[z], g = Cb(L.clone), c.leave(g), r(g, function (a) {
                    a.$$NG_REMOVED = !0
                }), L.scope.$destroy());
                g = 0;
                for (h = C.length; g < h; g++) {
                    z = a === C ? g : C[g];
                    D = a[z];
                    L = J[g];
                    J[g - 1] && (l = J[g - 1].clone[J[g - 1].clone.length - 1]);
                    if (L.scope) {
                        B = L.scope;
                        n = l;
                        do n = n.nextSibling; while (n && n.$$NG_REMOVED);
                        L.clone[0] != n && c.move(Cb(L.clone), null, v(l));
                        l = L.clone[L.clone.length - 1]
                    } else B = e.$new();
                    B[t] = D;
                    w && (B[w] = z);
                    B.$index = g;
                    B.$first = 0 === g;
                    B.$last = g === A - 1;
                    B.$middle = !(B.$first || B.$last);
                    B.$odd = !(B.$even = 0 === (g & 1));
                    L.scope || m(B, function (a) {
                        a[a.length++] = T.createComment(" end ngRepeat: " + k + " ");
                        c.enter(a, null, v(l));
                        l = a;
                        L.scope = B;
                        L.clone = a;
                        y[L.id] = L
                    })
                }
                H = y
            })
        }}
    }], Fd = ["$animate", function (a) {
        return function (c, d, e) {
            c.$watch(e.ngShow, function (c) {
                a[Oa(c) ? "removeClass" : "addClass"](d, "ng-hide")
            })
        }
    }], yd = ["$animate", function (a) {
        return function (c, d, e) {
            c.$watch(e.ngHide, function (c) {
                a[Oa(c) ? "addClass" : "removeClass"](d,
                    "ng-hide")
            })
        }
    }], Gd = ta(function (a, c, d) {
        a.$watch(d.ngStyle, function (a, d) {
            d && a !== d && r(d, function (a, d) {
                c.css(d, "")
            });
            a && c.css(a)
        }, !0)
    }), Hd = ["$animate", function (a) {
        return{restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
            this.cases = {}
        }], link: function (c, d, e, f) {
            var h, g, m, k = [];
            c.$watch(e.ngSwitch || e.on, function (d) {
                var n, q = k.length;
                if (0 < q) {
                    if (m) {
                        for (n = 0; n < q; n++)m[n].remove();
                        m = null
                    }
                    m = [];
                    for (n = 0; n < q; n++) {
                        var p = g[n];
                        k[n].$destroy();
                        m[n] = p;
                        a.leave(p, function () {
                            m.splice(n, 1);
                            0 === m.length && (m = null)
                        })
                    }
                }
                g =
                    [];
                k = [];
                if (h = f.cases["!" + d] || f.cases["?"])c.$eval(e.change), r(h, function (d) {
                    var e = c.$new();
                    k.push(e);
                    d.transclude(e, function (c) {
                        var e = d.element;
                        g.push(c);
                        a.enter(c, e.parent(), e)
                    })
                })
            })
        }}
    }], Id = ta({transclude: "element", priority: 800, require: "^ngSwitch", link: function (a, c, d, e, f) {
        e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
        e.cases["!" + d.ngSwitchWhen].push({transclude: f, element: c})
    }}), Jd = ta({transclude: "element", priority: 800, require: "^ngSwitch", link: function (a, c, d, e, f) {
        e.cases["?"] = e.cases["?"] ||
            [];
        e.cases["?"].push({transclude: f, element: c})
    }}), Ld = ta({link: function (a, c, d, e, f) {
        if (!f)throw C("ngTransclude")("orphan", fa(c));
        f(function (a) {
            c.empty();
            c.append(a)
        })
    }}), ld = ["$templateCache", function (a) {
        return{restrict: "E", terminal: !0, compile: function (c, d) {
            "text/ng-template" == d.type && a.put(d.id, c[0].text)
        }}
    }], Ye = C("ngOptions"), Kd = Y({terminal: !0}), md = ["$compile", "$parse", function (a, c) {
        var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
            e = {$setViewValue: z};
        return{restrict: "E", require: ["select", "?ngModel"], controller: ["$element", "$scope", "$attrs", function (a, c, d) {
            var m = this, k = {}, l = e, n;
            m.databound = d.ngModel;
            m.init = function (a, c, d) {
                l = a;
                n = d
            };
            m.addOption = function (c) {
                ya(c, '"option value"');
                k[c] = !0;
                l.$viewValue == c && (a.val(c), n.parent() && n.remove())
            };
            m.removeOption = function (a) {
                this.hasOption(a) && (delete k[a], l.$viewValue == a && this.renderUnknownOption(a))
            };
            m.renderUnknownOption = function (c) {
                c = "? " + Ha(c) + " ?";
                n.val(c);
                a.prepend(n);
                a.val(c);
                n.prop("selected",
                    !0)
            };
            m.hasOption = function (a) {
                return k.hasOwnProperty(a)
            };
            c.$on("$destroy", function () {
                m.renderUnknownOption = z
            })
        }], link: function (e, h, g, m) {
            function k(a, c, d, e) {
                d.$render = function () {
                    var a = d.$viewValue;
                    e.hasOption(a) ? (A.parent() && A.remove(), c.val(a), "" === a && C.prop("selected", !0)) : D(a) && C ? c.val("") : e.renderUnknownOption(a)
                };
                c.on("change", function () {
                    a.$apply(function () {
                        A.parent() && A.remove();
                        d.$setViewValue(c.val())
                    })
                })
            }

            function l(a, c, d) {
                var e;
                d.$render = function () {
                    var a = new Va(d.$viewValue);
                    r(c.find("option"),
                        function (c) {
                            c.selected = w(a.get(c.value))
                        })
                };
                a.$watch(function () {
                    va(e, d.$viewValue) || (e = $(d.$viewValue), d.$render())
                });
                c.on("change", function () {
                    a.$apply(function () {
                        var a = [];
                        r(c.find("option"), function (c) {
                            c.selected && a.push(c.value)
                        });
                        d.$setViewValue(a)
                    })
                })
            }

            function n(e, f, g) {
                function h() {
                    var a = {"": []}, c = [""], d, k, s, t, u;
                    t = g.$modelValue;
                    u = x(e) || [];
                    var C = n ? Sb(u) : u, D, B, E;
                    B = {};
                    s = !1;
                    var F, K;
                    if (p)if (v && J(t))for (s = new Va([]), E = 0; E < t.length; E++)B[m] = t[E], s.put(v(e, B), t[E]); else s = new Va(t);
                    for (E = 0; D = C.length,
                        E < D; E++) {
                        k = E;
                        if (n) {
                            k = C[E];
                            if ("$" === k.charAt(0))continue;
                            B[n] = k
                        }
                        B[m] = u[k];
                        d = q(e, B) || "";
                        (k = a[d]) || (k = a[d] = [], c.push(d));
                        p ? d = w(s.remove(v ? v(e, B) : r(e, B))) : (v ? (d = {}, d[m] = t, d = v(e, d) === v(e, B)) : d = t === r(e, B), s = s || d);
                        F = l(e, B);
                        F = w(F) ? F : "";
                        k.push({id: v ? v(e, B) : n ? C[E] : E, label: F, selected: d})
                    }
                    p || (z || null === t ? a[""].unshift({id: "", label: "", selected: !s}) : s || a[""].unshift({id: "?", label: "", selected: !0}));
                    B = 0;
                    for (C = c.length; B < C; B++) {
                        d = c[B];
                        k = a[d];
                        A.length <= B ? (t = {element: H.clone().attr("label", d), label: k.label}, u = [t], A.push(u),
                            f.append(t.element)) : (u = A[B], t = u[0], t.label != d && t.element.attr("label", t.label = d));
                        F = null;
                        E = 0;
                        for (D = k.length; E < D; E++)s = k[E], (d = u[E + 1]) ? (F = d.element, d.label !== s.label && F.text(d.label = s.label), d.id !== s.id && F.val(d.id = s.id), d.selected !== s.selected && F.prop("selected", d.selected = s.selected)) : ("" === s.id && z ? K = z : (K = y.clone()).val(s.id).attr("selected", s.selected).text(s.label), u.push({element: K, label: s.label, id: s.id, selected: s.selected}), F ? F.after(K) : t.element.append(K), F = K);
                        for (E++; u.length > E;)u.pop().element.remove()
                    }
                    for (; A.length >
                               B;)A.pop()[0].element.remove()
                }

                var k;
                if (!(k = t.match(d)))throw Ye("iexp", t, fa(f));
                var l = c(k[2] || k[1]), m = k[4] || k[6], n = k[5], q = c(k[3] || ""), r = c(k[2] ? k[1] : m), x = c(k[7]), v = k[8] ? c(k[8]) : null, A = [
                    [
                        {element: f, label: ""}
                    ]
                ];
                z && (a(z)(e), z.removeClass("ng-scope"), z.remove());
                f.empty();
                f.on("change", function () {
                    e.$apply(function () {
                        var a, c = x(e) || [], d = {}, h, k, l, q, t, w, u;
                        if (p)for (k = [], q = 0, w = A.length; q < w; q++)for (a = A[q], l = 1, t = a.length; l < t; l++) {
                            if ((h = a[l].element)[0].selected) {
                                h = h.val();
                                n && (d[n] = h);
                                if (v)for (u = 0; u < c.length &&
                                    (d[m] = c[u], v(e, d) != h); u++); else d[m] = c[h];
                                k.push(r(e, d))
                            }
                        } else {
                            h = f.val();
                            if ("?" == h)k = s; else if ("" === h)k = null; else if (v)for (u = 0; u < c.length; u++) {
                                if (d[m] = c[u], v(e, d) == h) {
                                    k = r(e, d);
                                    break
                                }
                            } else d[m] = c[h], n && (d[n] = h), k = r(e, d);
                            1 < A[0].length && A[0][1].id !== h && (A[0][1].selected = !1)
                        }
                        g.$setViewValue(k)
                    })
                });
                g.$render = h;
                e.$watch(h)
            }

            if (m[1]) {
                var q = m[0];
                m = m[1];
                var p = g.multiple, t = g.ngOptions, z = !1, C, y = v(T.createElement("option")), H = v(T.createElement("optgroup")), A = y.clone();
                g = 0;
                for (var x = h.children(), F = x.length; g < F; g++)if ("" ===
                    x[g].value) {
                    C = z = x.eq(g);
                    break
                }
                q.init(m, z, A);
                p && (m.$isEmpty = function (a) {
                    return!a || 0 === a.length
                });
                t ? n(e, h, m) : p ? l(e, h, m) : k(e, h, m, q)
            }
        }}
    }], od = ["$interpolate", function (a) {
        var c = {addOption: z, removeOption: z};
        return{restrict: "E", priority: 100, compile: function (d, e) {
            if (D(e.value)) {
                var f = a(d.text(), !0);
                f || e.$set("value", d.text())
            }
            return function (a, d, e) {
                var k = d.parent(), l = k.data("$selectController") || k.parent().data("$selectController");
                l && l.databound ? d.prop("selected", !1) : l = c;
                f ? a.$watch(f, function (a, c) {
                    e.$set("value",
                        a);
                    a !== c && l.removeOption(c);
                    l.addOption(a)
                }) : l.addOption(e.value);
                d.on("$destroy", function () {
                    l.removeOption(e.value)
                })
            }
        }}
    }], nd = Y({restrict: "E", terminal: !1});
    Q.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((Fa = Q.jQuery) ? (v = Fa, t(Fa.fn, {scope: Ia.scope, isolateScope: Ia.isolateScope, controller: Ia.controller, injector: Ia.injector, inheritedData: Ia.inheritedData}), Eb("remove", !0, !0, !1), Eb("empty", !1, !1, !1), Eb("html", !1, !1, !0)) : v = N, Pa.element = v, fd(Pa), v(T).ready(function () {
        cd(T,
            bc)
    }))
})(window, document);
!angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>');
//# sourceMappingURL=angular.min.js.map
