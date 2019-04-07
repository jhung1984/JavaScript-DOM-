/* jdf- jquery-1.6.4.js Date:2014-03-20 17:05:52 */ ! function (a, b) {
    function k(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(j, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : f.isNaN(d) ? i.test(d) ? f.parseJSON(d) : d : parseFloat(d)
                } catch (g) {}
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function l(a) {
        for (var b in a)
            if ("toJSON" !== b) return !1;
        return !0
    }

    function m(a, c, d) {
        var e = c + "defer",
            g = c + "queue",
            h = c + "mark",
            i = f.data(a, e, b, !0);
        !i || "queue" !== d && f.data(a, g, b, !0) || "mark" !== d && f.data(a, h, b, !0) || setTimeout(function () {
            f.data(a, g, b, !0) || f.data(a, h, b, !0) || (f.removeData(a, e, !0), i.resolve())
        }, 0)
    }

    function C() {
        return !1
    }

    function D() {
        return !0
    }

    function J(a, c, d) {
        var e = f.extend({}, d[0]);
        e.type = a, e.originalEvent = {}, e.liveFired = b, f.event.handle.call(c, e), e.isDefaultPrevented() && d[0].preventDefault()
    }

    function L(a) {
        var b, c, d, e, g, h, i, j, k, m, n, o, p = [],
            q = [],
            r = f._data(this, "events");
        if (a.liveFired !== this && r && r.live && !a.target.disabled && (!a.button || "click" !== a.type)) {
            a.namespace && (n = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), a.liveFired = this;
            var s = r.live.slice(0);
            for (i = 0; i < s.length; i++) g = s[i], g.origType.replace(w, "") === a.type ? q.push(g.selector) : s.splice(i--, 1);
            for (e = f(a.target).closest(q, a.currentTarget), j = 0, k = e.length; k > j; j++)
                for (m = e[j], i = 0; i < s.length; i++) g = s[i], m.selector !== g.selector || n && !n.test(g.namespace) || m.elem.disabled || (h = m.elem, d = null, ("mouseenter" === g.preType || "mouseleave" === g.preType) && (a.type = g.preType, d = f(a.relatedTarget).closest(g.selector)[0], d && f.contains(h, d) && (d = h)), d && d === h || p.push({
                    "elem": h,
                    "handleObj": g,
                    "level": m.level
                }));
            for (j = 0, k = p.length; k > j && (e = p[j], !(c && e.level > c)) && (a.currentTarget = e.elem, a.data = e.handleObj.data, a.handleObj = e.handleObj, o = e.handleObj.origHandler.apply(e.elem, arguments), o !== !1 && !a.isPropagationStopped() || (c = e.level, o === !1 && (b = !1), !a.isImmediatePropagationStopped())); j++);
            return b
        }
    }

    function M(a, b) {
        return (a && "*" !== a ? a + "." : "") + b.replace(y, "`").replace(z, "&")
    }

    function U(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }

    function V(a, b, c) {
        if (b = b || 0, f.isFunction(b)) return f.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function (a) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = f.grep(a, function (a) {
                return 1 === a.nodeType
            });
            if (Q.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function fb(a) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function gb(a, b) {
        if (1 === b.nodeType && f.hasData(a)) {
            var c = f.expando,
                d = f.data(a),
                e = f.data(b, d);
            if (d = d[c]) {
                var g = d.events;
                if (e = e[c] = f.extend({}, d), g) {
                    delete e.handle, e.events = {};
                    for (var h in g)
                        for (var i = 0, j = g[h].length; j > i; i++) f.event.add(b, h + (g[h][i].namespace ? "." : "") + g[h][i].namespace, g[h][i], g[h][i].data)
                }
            }
        }
    }

    function hb(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? b.outerHTML = a.outerHTML : "input" !== c || "checkbox" !== a.type && "radio" !== a.type ? "option" === c ? b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando))
    }

    function ib(a) {
        return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
    }

    function jb(a) {
        ("checkbox" === a.type || "radio" === a.type) && (a.defaultChecked = a.checked)
    }

    function kb(a) {
        f.nodeName(a, "input") ? jb(a) : "getElementsByTagName" in a && f.grep(a.getElementsByTagName("input"), jb)
    }

    function lb(a, b) {
        b.src ? f.ajax({
            "url": b.src,
            "async": !1,
            "dataType": "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(db, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }

    function yb(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight,
            e = "width" === b ? tb : ub;
        return d > 0 ? ("border" !== c && f.each(e, function () {
            c || (d -= parseFloat(f.css(a, "padding" + this)) || 0), "margin" === c ? d += parseFloat(f.css(a, c + this)) || 0 : d -= parseFloat(f.css(a, "border" + this + "Width")) || 0
        }), d + "px") : (d = vb(a, b, b), (0 > d || null == d) && (d = a.style[b] || 0), d = parseFloat(d) || 0, c && f.each(e, function () {
            d += parseFloat(f.css(a, "padding" + this)) || 0, "padding" !== c && (d += parseFloat(f.css(a, "border" + this + "Width")) || 0), "margin" === c && (d += parseFloat(f.css(a, c + this)) || 0)
        }), d + "px")
    }

    function Vb(a) {
        return function (b, c) {
            if ("string" != typeof b && (c = b, b = "*"), f.isFunction(c))
                for (var h, i, j, d = b.toLowerCase().split(Lb), e = 0, g = d.length; g > e; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
        }
    }

    function Wb(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        for (var l, h = a[f], i = 0, j = h ? h.length : 0, k = a === Pb; j > i && (k || !l); i++) l = h[i](c, d, e), "string" == typeof l && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = Wb(a, c, d, e, l, g)));
        return !k && l || g["*"] || (l = Wb(a, c, d, e, "*", g)), l
    }

    function Xb(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function Yb(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function (b, e) {
            c || Ab.test(a) ? d(a, e) : Yb(a + "[" + ("object" == typeof e || f.isArray(e) ? b : "") + "]", e, c, d)
        });
        else if (c || null == b || "object" != typeof b) d(a, b);
        else
            for (var e in b) Yb(a + "[" + e + "]", b[e], c, d)
    }

    function Zb(a, c, d) {
        var h, i, j, k, e = a.contents,
            f = a.dataTypes,
            g = a.responseFields;
        for (i in g) i in d && (c[g[i]] = d[i]);
        for (;
            "*" === f[0];) f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                } if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        return j ? (j !== f[0] && f.unshift(j), d[j]) : void 0
    }

    function $b(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var g, h, j, l, m, n, o, p, d = a.dataTypes,
            e = {},
            i = d.length,
            k = d[0];
        for (g = 1; i > g; g++) {
            if (1 === g)
                for (h in a.converters) "string" == typeof h && (e[h.toLowerCase()] = a.converters[h]);
            if (l = k, k = d[g], "*" === k) k = l;
            else if ("*" !== l && l !== k) {
                if (m = l + " " + k, n = e[m] || e["* " + k], !n) {
                    p = b;
                    for (o in e)
                        if (j = o.split(" "), (j[0] === l || "*" === j[0]) && (p = e[j[1] + " " + k])) {
                            o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                            break
                        }
                }
                n || p || f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function ec() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function fc() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function oc() {
        return setTimeout(pc, 0), nc = f.now()
    }

    function pc() {
        nc = b
    }

    function qc(a, b) {
        var c = {};
        return f.each(mc.concat.apply([], mc.slice(0, b)), function () {
            c[this] = a
        }), c
    }

    function rc(a) {
        if (!gc[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove(), ("none" === e || "" === e) && (hc || (hc = c.createElement("iframe"), hc.frameBorder = hc.width = hc.height = 0), b.appendChild(hc), ic && hc.createElement || (ic = (hc.contentWindow || hc.contentDocument).document, ic.write(("CSS1Compat" === c.compatMode ? "<!doctype html>" : "") + "<html><body>"), ic.close()), d = ic.createElement(a), ic.body.appendChild(d), e = f.css(d, "display"), b.removeChild(hc)), gc[a] = e
        }
        return gc[a]
    }

    function uc(a) {
        return f.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function () {
            function K() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        return void setTimeout(K, 1)
                    }
                    e.ready()
                }
            }
            var h, A, B, C, e = function (a, b) {
                    return new e.fn.init(a, b, h)
                },
                f = a.jQuery,
                g = a.$,
                i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /\d/,
                n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                o = /^[\],:{}\s]*$/,
                p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                r = /(?:^|:|,)(?:\s*\[)+/g,
                s = /(webkit)[ \/]([\w.]+)/,
                t = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                u = /(msie) ([\w.]+)/,
                v = /(mozilla)(?:.*? rv:([\w.]+))?/,
                w = /-([a-z]|[0-9])/gi,
                x = /^-ms-/,
                y = function (a, b) {
                    return (b + "").toUpperCase()
                },
                z = d.userAgent,
                D = Object.prototype.toString,
                E = Object.prototype.hasOwnProperty,
                F = Array.prototype.push,
                G = Array.prototype.slice,
                H = String.prototype.trim,
                I = Array.prototype.indexOf,
                J = {};
            return e.fn = e.prototype = {
                "constructor": e,
                "init": function (a, d, f) {
                    var g, h, j, k;
                    if (!a) return this;
                    if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                    if ("body" === a && !d && c.body) return this.context = c, this[0] = c.body, this.selector = a, this.length = 1, this;
                    if ("string" == typeof a) {
                        if (g = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : i.exec(a), !g || !g[1] && d) return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a);
                        if (g[1]) return d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = n.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes), e.merge(this, a);
                        if (h = c.getElementById(g[2]), h && h.parentNode) {
                            if (h.id !== g[2]) return f.find(a);
                            this.length = 1, this[0] = h
                        }
                        return this.context = c, this.selector = a, this
                    }
                    return e.isFunction(a) ? f.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), e.makeArray(a, this))
                },
                "selector": "",
                "jquery": "1.6.4",
                "length": 0,
                "size": function () {
                    return this.length
                },
                "toArray": function () {
                    return G.call(this, 0)
                },
                "get": function (a) {
                    return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                },
                "pushStack": function (a, b, c) {
                    var d = this.constructor();
                    return e.isArray(a) ? F.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
                },
                "each": function (a, b) {
                    return e.each(this, a, b)
                },
                "ready": function (a) {
                    return e.bindReady(), B.done(a), this
                },
                "eq": function (a) {
                    return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
                },
                "first": function () {
                    return this.eq(0)
                },
                "last": function () {
                    return this.eq(-1)
                },
                "slice": function () {
                    return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","))
                },
                "map": function (a) {
                    return this.pushStack(e.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                "end": function () {
                    return this.prevObject || this.constructor(null)
                },
                "push": F,
                "sort": [].sort,
                "splice": [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
                var a, c, d, f, g, h, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                for ("boolean" == typeof i && (l = i, i = arguments[1] || {}, j = 2), "object" == typeof i || e.isFunction(i) || (i = {}), k === j && (i = this, --j); k > j; j++)
                    if (null != (a = arguments[j]))
                        for (c in a) d = i[c], f = a[c], i !== f && (l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f));
                return i
            }, e.extend({
                "noConflict": function (b) {
                    return a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f), e
                },
                "isReady": !1,
                "readyWait": 1,
                "holdReady": function (a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                "ready": function (a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) return setTimeout(e.ready, 1);
                        if (e.isReady = !0, a !== !0 && --e.readyWait > 0) return;
                        B.resolveWith(c, [e]), e.fn.trigger && e(c).trigger("ready").unbind("ready")
                    }
                },
                "bindReady": function () {
                    if (!B) {
                        if (B = e._Deferred(), "complete" === c.readyState) return setTimeout(e.ready, 1);
                        if (c.addEventListener) c.addEventListener("DOMContentLoaded", C, !1), a.addEventListener("load", e.ready, !1);
                        else if (c.attachEvent) {
                            c.attachEvent("onreadystatechange", C), a.attachEvent("onload", e.ready);
                            var b = !1;
                            try {
                                b = null == a.frameElement
                            } catch (d) {}
                            c.documentElement.doScroll && b && K()
                        }
                    }
                },
                "isFunction": function (a) {
                    return "function" === e.type(a)
                },
                "isArray": Array.isArray || function (a) {
                    return "array" === e.type(a)
                },
                "isWindow": function (a) {
                    return a && "object" == typeof a && "setInterval" in a
                },
                "isNaN": function (a) {
                    return null == a || !m.test(a) || isNaN(a)
                },
                "type": function (a) {
                    return null == a ? String(a) : J[D.call(a)] || "object"
                },
                "isPlainObject": function (a) {
                    if (!a || "object" !== e.type(a) || a.nodeType || e.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !E.call(a, "constructor") && !E.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a);
                    return d === b || E.call(a, d)
                },
                "isEmptyObject": function (a) {
                    for (var b in a) return !1;
                    return !0
                },
                "error": function (a) {
                    throw a
                },
                "parseJSON": function (b) {
                    return "string" == typeof b && b ? (b = e.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : o.test(b.replace(p, "@").replace(q, "]").replace(r, "")) ? new Function("return " + b)() : void e.error("Invalid JSON: " + b)) : null
                },
                "parseXML": function (c) {
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }
                    return d && d.documentElement && !d.getElementsByTagName("parsererror").length || e.error("Invalid XML: " + c), d
                },
                "noop": function () {},
                "globalEval": function (b) {
                    b && j.test(b) && (a.execScript || function (b) {
                        a.eval.call(a, b)
                    })(b)
                },
                "camelCase": function (a) {
                    return a.replace(x, "ms-").replace(w, y)
                },
                "nodeName": function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                "each": function (a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d)
                        if (i) {
                            for (f in a)
                                if (c.apply(a[f], d) === !1) break
                        } else
                            for (; h > g && c.apply(a[g++], d) !== !1;);
                    else if (i) {
                        for (f in a)
                            if (c.call(a[f], f, a[f]) === !1) break
                    } else
                        for (; h > g && c.call(a[g], g, a[g++]) !== !1;);
                    return a
                },
                "trim": H ? function (a) {
                    return null == a ? "" : H.call(a)
                } : function (a) {
                    return null == a ? "" : a.toString().replace(k, "").replace(l, "")
                },
                "makeArray": function (a, b) {
                    var c = b || [];
                    if (null != a) {
                        var d = e.type(a);
                        null == a.length || "string" === d || "function" === d || "regexp" === d || e.isWindow(a) ? F.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                "inArray": function (a, b) {
                    if (!b) return -1;
                    if (I) return I.call(b, a);
                    for (var c = 0, d = b.length; d > c; c++)
                        if (b[c] === a) return c;
                    return -1
                },
                "merge": function (a, c) {
                    var d = a.length,
                        e = 0;
                    if ("number" == typeof c.length)
                        for (var f = c.length; f > e; e++) a[d++] = c[e];
                    else
                        for (; c[e] !== b;) a[d++] = c[e++];
                    return a.length = d, a
                },
                "grep": function (a, b, c) {
                    var e, d = [];
                    c = !!c;
                    for (var f = 0, g = a.length; g > f; f++) e = !!b(a[f], f), c !== e && d.push(a[f]);
                    return d
                },
                "map": function (a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && "number" == typeof j && (j > 0 && a[0] && a[j - 1] || 0 === j || e.isArray(a));
                    if (k)
                        for (; j > i; i++) f = c(a[i], i, d), null != f && (h[h.length] = f);
                    else
                        for (g in a) f = c(a[g], g, d), null != f && (h[h.length] = f);
                    return h.concat.apply([], h)
                },
                "guid": 1,
                "proxy": function (a, c) {
                    if ("string" == typeof c) {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) return b;
                    var f = G.call(arguments, 2),
                        g = function () {
                            return a.apply(c, f.concat(G.call(arguments)))
                        };
                    return g.guid = a.guid = a.guid || g.guid || e.guid++, g
                },
                "access": function (a, c, d, f, g, h) {
                    var i = a.length;
                    if ("object" == typeof c) {
                        for (var j in c) e.access(a, j, c[j], f, g, d);
                        return a
                    }
                    if (d !== b) {
                        f = !h && f && e.isFunction(d);
                        for (var k = 0; i > k; k++) g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                        return a
                    }
                    return i ? g(a[0], c) : b
                },
                "now": function () {
                    return (new Date).getTime()
                },
                "uaMatch": function (a) {
                    a = a.toLowerCase();
                    var b = s.exec(a) || t.exec(a) || u.exec(a) || a.indexOf("compatible") < 0 && v.exec(a) || [];
                    return {
                        "browser": b[1] || "",
                        "version": b[2] || "0"
                    }
                },
                "sub": function () {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (c, d) {
                        return d && d instanceof e && !(d instanceof a) && (d = a(d)), e.fn.init.call(this, c, d, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                "browser": {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                J["[object " + b + "]"] = b.toLowerCase()
            }), A = e.uaMatch(z), A.browser && (e.browser[A.browser] = !0, e.browser.version = A.version), e.browser.webkit && (e.browser.safari = !0), j.test("\xa0") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? C = function () {
                c.removeEventListener("DOMContentLoaded", C, !1), e.ready()
            } : c.attachEvent && (C = function () {
                "complete" === c.readyState && (c.detachEvent("onreadystatechange", C), e.ready())
            }), e
        }(),
        g = "done fail isResolved isRejected promise then always pipe".split(" "),
        h = [].slice;
    f.extend({
        "_Deferred": function () {
            var b, c, d, a = [],
                e = {
                    "done": function () {
                        if (!d) {
                            var g, h, i, j, k, c = arguments;
                            for (b && (k = b, b = 0), g = 0, h = c.length; h > g; g++) i = c[g], j = f.type(i), "array" === j ? e.done.apply(e, i) : "function" === j && a.push(i);
                            k && e.resolveWith(k[0], k[1])
                        }
                        return this
                    },
                    "resolveWith": function (e, f) {
                        if (!d && !b && !c) {
                            f = f || [], c = 1;
                            try {
                                for (; a[0];) a.shift().apply(e, f)
                            } finally {
                                b = [e, f], c = 0
                            }
                        }
                        return this
                    },
                    "resolve": function () {
                        return e.resolveWith(this, arguments), this
                    },
                    "isResolved": function () {
                        return !(!c && !b)
                    },
                    "cancel": function () {
                        return d = 1, a = [], this
                    }
                };
            return e
        },
        "Deferred": function (a) {
            var d, b = f._Deferred(),
                c = f._Deferred();
            return f.extend(b, {
                "then": function (a, c) {
                    return b.done(a).fail(c), this
                },
                "always": function () {
                    return b.done.apply(b, arguments).fail.apply(this, arguments)
                },
                "fail": c.done,
                "rejectWith": c.resolveWith,
                "reject": c.resolve,
                "isRejected": c.isResolved,
                "pipe": function (a, c) {
                    return f.Deferred(function (d) {
                        f.each({
                            "done": [a, "resolve"],
                            "fail": [c, "reject"]
                        }, function (a, c) {
                            var h, e = c[0],
                                g = c[1];
                            b[a](f.isFunction(e) ? function () {
                                h = e.apply(this, arguments), h && f.isFunction(h.promise) ? h.promise().then(d.resolve, d.reject) : d[g + "With"](this === b ? d : this, [h])
                            } : d[g])
                        })
                    }).promise()
                },
                "promise": function (a) {
                    if (null == a) {
                        if (d) return d;
                        d = a = {}
                    }
                    for (var c = g.length; c--;) a[g[c]] = b[g[c]];
                    return a
                }
            }), b.done(c.cancel).fail(b.cancel), delete b.cancel, a && a.call(b, b), b
        },
        "when": function (a) {
            function i(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? h.call(arguments, 0) : c, --e || g.resolveWith(g, h.call(b, 0))
                }
            }
            var b = arguments,
                c = 0,
                d = b.length,
                e = d,
                g = 1 >= d && a && f.isFunction(a.promise) ? a : f.Deferred();
            if (d > 1) {
                for (; d > c; c++) b[c] && f.isFunction(b[c].promise) ? b[c].promise().then(i(c), g.reject) : --e;
                e || g.resolveWith(g, b)
            } else g !== a && g.resolveWith(g, d ? [a] : []);
            return g.promise()
        }
    }), f.support = function () {
        var d, e, g, h, i, j, k, l, m, n, o, p, q, s, t, u, a = c.createElement("div"),
            b = c.documentElement;
        if (a.setAttribute("className", "t"), a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = a.getElementsByTagName("*"), e = a.getElementsByTagName("a")[0], !d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = a.getElementsByTagName("input")[0], k = {
            "leadingWhitespace": 3 === a.firstChild.nodeType,
            "tbody": !a.getElementsByTagName("tbody").length,
            "htmlSerialize": !!a.getElementsByTagName("link").length,
            "style": /top/.test(e.getAttribute("style")),
            "hrefNormalized": "/a" === e.getAttribute("href"),
            "opacity": /^0.55$/.test(e.style.opacity),
            "cssFloat": !!e.style.cssFloat,
            "checkOn": "on" === i.value,
            "optSelected": h.selected,
            "getSetAttribute": "t" !== a.className,
            "submitBubbles": !0,
            "changeBubbles": !0,
            "focusinBubbles": !1,
            "deleteExpando": !0,
            "noCloneEvent": !0,
            "inlineBlockNeedsLayout": !1,
            "shrinkWrapBlocks": !1,
            "reliableMarginRight": !0
        }, i.checked = !0, k.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, k.optDisabled = !h.disabled;
        try {
            delete a.test
        } catch (v) {
            k.deleteExpando = !1
        }!a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function () {
            k.noCloneEvent = !1
        }), a.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), k.radioValue = "t" === i.value, i.setAttribute("checked", "checked"), a.appendChild(i), l = c.createDocumentFragment(), l.appendChild(a.firstChild), k.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, a.innerHTML = "", a.style.width = a.style.paddingLeft = "1px", m = c.getElementsByTagName("body")[0], o = c.createElement(m ? "div" : "body"), p = {
            "visibility": "hidden",
            "width": 0,
            "height": 0,
            "border": 0,
            "margin": 0,
            "background": "none"
        }, m && f.extend(p, {
            "position": "absolute",
            "left": "-1000px",
            "top": "-1000px"
        });
        for (t in p) o.style[t] = p[t];
        if (o.appendChild(a), n = m || b, n.insertBefore(o, n.firstChild), k.appendChecked = i.checked, k.boxModel = 2 === a.offsetWidth, "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, k.inlineBlockNeedsLayout = 2 === a.offsetWidth, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", k.shrinkWrapBlocks = 2 !== a.offsetWidth), a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", q = a.getElementsByTagName("td"), u = 0 === q[0].offsetHeight, q[0].style.display = "", q[1].style.display = "none", k.reliableHiddenOffsets = u && 0 === q[0].offsetHeight, a.innerHTML = "", c.defaultView && c.defaultView.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", a.appendChild(j), k.reliableMarginRight = 0 === (parseInt((c.defaultView.getComputedStyle(j, null) || {
                "marginRight": 0
            }).marginRight, 10) || 0)), o.innerHTML = "", n.removeChild(o), a.attachEvent)
            for (t in {
                    "submit": 1,
                    "change": 1,
                    "focusin": 1
                }) s = "on" + t, u = s in a, u || (a.setAttribute(s, "return;"), u = "function" == typeof a[s]), k[t + "Bubbles"] = u;
        return o = l = g = h = m = j = a = i = null, k
    }(), f.boxModel = f.support.boxModel;
    var i = /^(?:\{.*\}|\[.*\])$/,
        j = /([A-Z])/g;
    f.extend({
        "cache": {},
        "uuid": 0,
        "expando": "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        "noData": {
            "embed": !0,
            "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            "applet": !0
        },
        "hasData": function (a) {
            return a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando], !!a && !l(a)
        },
        "data": function (a, c, d, e) {
            if (f.acceptData(a)) {
                var g, h, i = f.expando,
                    j = "string" == typeof c,
                    k = a.nodeType,
                    l = k ? f.cache : a,
                    m = k ? a[f.expando] : a[f.expando] && f.expando;
                if (!(!m || e && m && l[m] && !l[m][i]) || !j || d !== b) return m || (k ? a[f.expando] = m = ++f.uuid : m = f.expando), l[m] || (l[m] = {}, k || (l[m].toJSON = f.noop)), ("object" == typeof c || "function" == typeof c) && (e ? l[m][i] = f.extend(l[m][i], c) : l[m] = f.extend(l[m], c)), g = l[m], e && (g[i] || (g[i] = {}), g = g[i]), d !== b && (g[f.camelCase(c)] = d), "events" !== c || g[c] ? (j ? (h = g[c], null == h && (h = g[f.camelCase(c)])) : h = g, h) : g[i] && g[i].events
            }
        },
        "removeData": function (a, b, c) {
            if (f.acceptData(a)) {
                var d, e = f.expando,
                    g = a.nodeType,
                    h = g ? f.cache : a,
                    i = g ? a[f.expando] : f.expando;
                if (h[i] && !(b && (d = c ? h[i][e] : h[i], d && (d[b] || (b = f.camelCase(b)), delete d[b], !l(d))) || c && (delete h[i][e], !l(h[i])))) {
                    var j = h[i][e];
                    f.support.deleteExpando || !h.setInterval ? delete h[i] : h[i] = null, j ? (h[i] = {}, g || (h[i].toJSON = f.noop), h[i][e] = j) : g && (f.support.deleteExpando ? delete a[f.expando] : a.removeAttribute ? a.removeAttribute(f.expando) : a[f.expando] = null)
                }
            }
        },
        "_data": function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        "acceptData": function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return !(b === !0 || a.getAttribute("classid") !== b)
            }
            return !0
        }
    }), f.fn.extend({
        "data": function (a, c) {
            var d = null;
            if ("undefined" == typeof a) {
                if (this.length && (d = f.data(this[0]), 1 === this[0].nodeType))
                    for (var g, e = this[0].attributes, h = 0, i = e.length; i > h; h++) g = e[h].name, 0 === g.indexOf("data-") && (g = f.camelCase(g.substring(5)), k(this[0], g, d[g]));
                return d
            }
            if ("object" == typeof a) return this.each(function () {
                f.data(this, a)
            });
            var j = a.split(".");
            return j[1] = j[1] ? "." + j[1] : "", c === b ? (d = this.triggerHandler("getData" + j[1] + "!", [j[0]]), d === b && this.length && (d = f.data(this[0], a), d = k(this[0], a, d)), d === b && j[1] ? this.data(j[0]) : d) : this.each(function () {
                var b = f(this),
                    d = [j[0], c];
                b.triggerHandler("setData" + j[1] + "!", d), f.data(this, a, c), b.triggerHandler("changeData" + j[1] + "!", d)
            })
        },
        "removeData": function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        "_mark": function (a, c) {
            a && (c = (c || "fx") + "mark", f.data(a, c, (f.data(a, c, b, !0) || 0) + 1, !0))
        },
        "_unmark": function (a, c, d) {
            if (a !== !0 && (d = c, c = a, a = !1), c) {
                d = d || "fx";
                var e = d + "mark",
                    g = a ? 0 : (f.data(c, e, b, !0) || 1) - 1;
                g ? f.data(c, e, g, !0) : (f.removeData(c, e, !0), m(c, d, "mark"))
            }
        },
        "queue": function (a, c, d) {
            if (a) {
                c = (c || "fx") + "queue";
                var e = f.data(a, c, b, !0);
                return d && (!e || f.isArray(d) ? e = f.data(a, c, f.makeArray(d), !0) : e.push(d)), e || []
            }
        },
        "dequeue": function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift();
            "inprogress" === d && (d = c.shift()), d && ("fx" === b && c.unshift("inprogress"), d.call(a, function () {
                f.dequeue(a, b)
            })), c.length || (f.removeData(a, b + "queue", !0), m(a, b, "queue"))
        }
    }), f.fn.extend({
        "queue": function (a, c) {
            return "string" != typeof a && (c = a, a = "fx"), c === b ? f.queue(this[0], a) : this.each(function () {
                var b = f.queue(this, a, c);
                "fx" === a && "inprogress" !== b[0] && f.dequeue(this, a)
            })
        },
        "dequeue": function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        },
        "delay": function (a, b) {
            return a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function () {
                var c = this;
                setTimeout(function () {
                    f.dequeue(c, b)
                }, a)
            })
        },
        "clearQueue": function (a) {
            return this.queue(a || "fx", [])
        },
        "promise": function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            "string" != typeof a && (c = a, a = b), a = a || "fx";
            for (var l, d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark"; g--;)(l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f._Deferred(), !0)) && (h++, l.done(m));
            return m(), d.promise()
        }
    });
    var u, v, n = /[\n\t\r]/g,
        o = /\s+/,
        p = /\r/g,
        q = /^(?:button|input)$/i,
        r = /^(?:button|input|object|select|textarea)$/i,
        s = /^a(?:rea)?$/i,
        t = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
    f.fn.extend({
        "attr": function (a, b) {
            return f.access(this, a, b, !0, f.attr)
        },
        "removeAttr": function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        },
        "prop": function (a, b) {
            return f.access(this, a, b, !0, f.prop)
        },
        "removeProp": function (a) {
            return a = f.propFix[a] || a, this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        "addClass": function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a)
                for (b = a.split(o), c = 0, d = this.length; d > c; c++)
                    if (e = this[c], 1 === e.nodeType)
                        if (e.className || 1 !== b.length) {
                            for (g = " " + e.className + " ", h = 0, i = b.length; i > h; h++) ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                            e.className = f.trim(g)
                        } else e.className = a;
            return this
        },
        "removeClass": function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a || a === b)
                for (c = (a || "").split(o), d = 0, e = this.length; e > d; d++)
                    if (g = this[d], 1 === g.nodeType && g.className)
                        if (a) {
                            for (h = (" " + g.className + " ").replace(n, " "), i = 0, j = c.length; j > i; i++) h = h.replace(" " + c[i] + " ", " ");
                            g.className = f.trim(h)
                        } else g.className = "";
            return this
        },
        "toggleClass": function (a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return this.each(f.isFunction(a) ? function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c)
                    for (var e, g = 0, h = f(this), i = b, j = a.split(o); e = j[g++];) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e);
                else("undefined" === c || "boolean" === c) && (this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || "")
            })
        },
        "hasClass": function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(n, " ").indexOf(b) > -1) return !0;
            return !1
        },
        "val": function (a) {
            var c, d, e = this[0];
            if (!arguments.length) return e ? (c = f.valHooks[e.nodeName.toLowerCase()] || f.valHooks[e.type], c && "get" in c && (d = c.get(e, "value")) !== b ? d : (d = e.value, "string" == typeof d ? d.replace(p, "") : null == d ? "" : d)) : b;
            var g = f.isFunction(a);
            return this.each(function (d) {
                var h, e = f(this);
                1 === this.nodeType && (h = g ? a.call(this, d, e.val()) : a, null == h ? h = "" : "number" == typeof h ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                    return null == a ? "" : a + ""
                })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type], c && "set" in c && c.set(this, h, "value") !== b || (this.value = h))
            })
        }
    }), f.extend({
        "valHooks": {
            "option": {
                "get": function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            "select": {
                "get": function (a) {
                    var b, c = a.selectedIndex,
                        d = [],
                        e = a.options,
                        g = "select-one" === a.type;
                    if (0 > c) return null;
                    for (var h = g ? c : 0, i = g ? c + 1 : e.length; i > h; h++) {
                        var j = e[h];
                        if (!(!j.selected || (f.support.optDisabled ? j.disabled : null !== j.getAttribute("disabled")) || j.parentNode.disabled && f.nodeName(j.parentNode, "optgroup"))) {
                            if (b = f(j).val(), g) return b;
                            d.push(b)
                        }
                    }
                    return g && !d.length && e.length ? f(e[c]).val() : d
                },
                "set": function (a, b) {
                    var c = f.makeArray(b);
                    return f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        "attrFn": {
            "val": !0,
            "css": !0,
            "html": !0,
            "text": !0,
            "data": !0,
            "width": !0,
            "height": !0,
            "offset": !0
        },
        "attrFix": {
            "tabindex": "tabIndex"
        },
        "attr": function (a, c, d, e) {
            var g = a.nodeType;
            if (!a || 3 === g || 8 === g || 2 === g) return b;
            if (e && c in f.attrFn) return f(a)[c](d);
            if (!("getAttribute" in a)) return f.prop(a, c, d);
            var h, i, j = 1 !== g || !f.isXMLDoc(a);
            return j && (c = f.attrFix[c] || c, i = f.attrHooks[c], i || (t.test(c) ? i = v : u && (i = u))), d !== b ? null === d ? (f.removeAttr(a, c), b) : i && "set" in i && j && (h = i.set(a, d, c)) !== b ? h : (a.setAttribute(c, "" + d), d) : i && "get" in i && j && null !== (h = i.get(a, c)) ? h : (h = a.getAttribute(c), null === h ? b : h)
        },
        "removeAttr": function (a, b) {
            var c;
            1 === a.nodeType && (b = f.attrFix[b] || b, f.attr(a, b, ""), a.removeAttribute(b), t.test(b) && (c = f.propFix[b] || b) in a && (a[c] = !1))
        },
        "attrHooks": {
            "type": {
                "set": function (a, b) {
                    if (q.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && "radio" === b && f.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            },
            "value": {
                "get": function (a, b) {
                    return u && f.nodeName(a, "button") ? u.get(a, b) : b in a ? a.value : null
                },
                "set": function (a, b, c) {
                    return u && f.nodeName(a, "button") ? u.set(a, b, c) : void(a.value = b)
                }
            }
        },
        "propFix": {
            "tabindex": "tabIndex",
            "readonly": "readOnly",
            "for": "htmlFor",
            "class": "className",
            "maxlength": "maxLength",
            "cellspacing": "cellSpacing",
            "cellpadding": "cellPadding",
            "rowspan": "rowSpan",
            "colspan": "colSpan",
            "usemap": "useMap",
            "frameborder": "frameBorder",
            "contenteditable": "contentEditable"
        },
        "prop": function (a, c, d) {
            var e = a.nodeType;
            if (!a || 3 === e || 8 === e || 2 === e) return b;
            var g, h, i = 1 !== e || !f.isXMLDoc(a);
            return i && (c = f.propFix[c] || c, h = f.propHooks[c]), d !== b ? h && "set" in h && (g = h.set(a, d, c)) !== b ? g : a[c] = d : h && "get" in h && null !== (g = h.get(a, c)) ? g : a[c]
        },
        "propHooks": {
            "tabIndex": {
                "get": function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : r.test(a.nodeName) || s.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabIndex = f.propHooks.tabIndex, v = {
        "get": function (a, c) {
            var d;
            return f.prop(a, c) === !0 || (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        "set": function (a, b, c) {
            var d;
            return b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, f.support.getSetAttribute || (u = f.valHooks.button = {
        "get": function (a, c) {
            var d;
            return d = a.getAttributeNode(c), d && "" !== d.nodeValue ? d.nodeValue : b
        },
        "set": function (a, b, d) {
            var e = a.getAttributeNode(d);
            return e || (e = c.createAttribute(d), a.setAttributeNode(e)), e.nodeValue = b + ""
        }
    }, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            "set": function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        })
    })), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            "get": function (a) {
                var d = a.getAttribute(c, 2);
                return null === d ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        "get": function (a) {
            return a.style.cssText.toLowerCase() || b
        },
        "set": function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        "get": function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            "get": function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            "set": function (a, b) {
                return f.isArray(b) ? a.checked = f.inArray(f(a).val(), b) >= 0 : void 0
            }
        })
    });
    var w = /\.(.*)$/,
        x = /^(?:textarea|input|select)$/i,
        y = /\./g,
        z = / /g,
        A = /[^\w\s.|`]/g,
        B = function (a) {
            return a.replace(A, "\\$&")
        };
    f.event = {
        "add": function (a, c, d, e) {
            if (3 !== a.nodeType && 8 !== a.nodeType) {
                if (d === !1) d = C;
                else if (!d) return;
                var g, h;
                d.handler && (g = d, d = g.handler), d.guid || (d.guid = f.guid++);
                var i = f._data(a);
                if (i) {
                    var j = i.events,
                        k = i.handle;
                    j || (i.events = j = {}), k || (i.handle = k = function (a) {
                        return "undefined" == typeof f || a && f.event.triggered === a.type ? b : f.event.handle.apply(k.elem, arguments)
                    }), k.elem = a, c = c.split(" ");
                    for (var l, n, m = 0; l = c[m++];) {
                        h = g ? f.extend({}, g) : {
                            "handler": d,
                            "data": e
                        }, l.indexOf(".") > -1 ? (n = l.split("."), l = n.shift(), h.namespace = n.slice(0).sort().join(".")) : (n = [], h.namespace = ""), h.type = l, h.guid || (h.guid = d.guid);
                        var o = j[l],
                            p = f.event.special[l] || {};
                        o || (o = j[l] = [], p.setup && p.setup.call(a, e, n, k) !== !1 || (a.addEventListener ? a.addEventListener(l, k, !1) : a.attachEvent && a.attachEvent("on" + l, k))), p.add && (p.add.call(a, h), h.handler.guid || (h.handler.guid = d.guid)), o.push(h), f.event.global[l] = !0
                    }
                    a = null
                }
            }
        },
        "global": {},
        "remove": function (a, c, d, e) {
            if (3 !== a.nodeType && 8 !== a.nodeType) {
                d === !1 && (d = C);
                var g, h, j, l, m, n, o, p, q, r, k = 0,
                    s = f.hasData(a) && f._data(a),
                    t = s && s.events;
                if (s && t)
                    if (c && c.type && (d = c.handler, c = c.type), !c || "string" == typeof c && "." === c.charAt(0)) {
                        c = c || "";
                        for (h in t) f.event.remove(a, h + c)
                    } else {
                        for (c = c.split(" "); h = c[k++];)
                            if (r = h, q = null, l = h.indexOf(".") < 0, m = [], l || (m = h.split("."), h = m.shift(), n = new RegExp("(^|\\.)" + f.map(m.slice(0).sort(), B).join("\\.(?:.*\\.)?") + "(\\.|$)")), p = t[h])
                                if (d) {
                                    for (o = f.event.special[h] || {}, j = e || 0; j < p.length && (q = p[j], d.guid !== q.guid || ((l || n.test(q.namespace)) && (null == e && p.splice(j--, 1), o.remove && o.remove.call(a, q)), null == e)); j++);
                                    (0 === p.length || null != e && 1 === p.length) && (o.teardown && o.teardown.call(a, m) !== !1 || f.removeEvent(a, h, s.handle), g = null, delete t[h])
                                } else
                                    for (j = 0; j < p.length; j++) q = p[j], (l || n.test(q.namespace)) && (f.event.remove(a, r, q.handler, j), p.splice(j--, 1));
                        if (f.isEmptyObject(t)) {
                            var u = s.handle;
                            u && (u.elem = null), delete s.events, delete s.handle, f.isEmptyObject(s) && f.removeData(a, b, !0)
                        }
                    }
            }
        },
        "customEvent": {
            "getData": !0,
            "setData": !0,
            "changeData": !0
        },
        "trigger": function (c, d, e, g) {
            var j, h = c.type || c,
                i = [];
            if (h.indexOf("!") >= 0 && (h = h.slice(0, -1), j = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort()), e && !f.event.customEvent[h] || f.event.global[h]) {
                if (c = "object" == typeof c ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.exclusive = j, c.namespace = i.join("."), c.namespace_re = new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)"), (g || !e) && (c.preventDefault(), c.stopPropagation()), !e) return void f.each(f.cache, function () {
                    var a = f.expando,
                        b = this[a];
                    b && b.events && b.events[h] && f.event.trigger(c, d, b.handle.elem)
                });
                if (3 !== e.nodeType && 8 !== e.nodeType) {
                    c.result = b, c.target = e, d = null != d ? f.makeArray(d) : [], d.unshift(c);
                    var k = e,
                        l = h.indexOf(":") < 0 ? "on" + h : "";
                    do {
                        var m = f._data(k, "handle");
                        c.currentTarget = k, m && m.apply(k, d), l && f.acceptData(k) && k[l] && k[l].apply(k, d) === !1 && (c.result = !1, c.preventDefault()), k = k.parentNode || k.ownerDocument || k === c.target.ownerDocument && a
                    } while (k && !c.isPropagationStopped());
                    if (!c.isDefaultPrevented()) {
                        var n, o = f.event.special[h] || {};
                        if (!(o._default && o._default.call(e.ownerDocument, c) !== !1 || "click" === h && f.nodeName(e, "a") || !f.acceptData(e))) {
                            try {
                                l && e[h] && (n = e[l], n && (e[l] = null), f.event.triggered = h, e[h]())
                            } catch (p) {}
                            n && (e[l] = n), f.event.triggered = b
                        }
                    }
                    return c.result
                }
            }
        },
        "handle": function (c) {
            c = f.event.fix(c || a.event);
            var d = ((f._data(this, "events") || {})[c.type] || []).slice(0),
                e = !c.exclusive && !c.namespace,
                g = Array.prototype.slice.call(arguments, 0);
            g[0] = c, c.currentTarget = this;
            for (var h = 0, i = d.length; i > h; h++) {
                var j = d[h];
                if (e || c.namespace_re.test(j.namespace)) {
                    c.handler = j.handler, c.data = j.data, c.handleObj = j;
                    var k = j.handler.apply(this, g);
                    if (k !== b && (c.result = k, k === !1 && (c.preventDefault(), c.stopPropagation())), c.isImmediatePropagationStopped()) break
                }
            }
            return c.result
        },
        "props": "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        "fix": function (a) {
            if (a[f.expando]) return a;
            var d = a;
            a = f.Event(d);
            for (var g, e = this.props.length; e;) g = this.props[--e], a[g] = d[g];
            if (a.target || (a.target = a.srcElement || c), 3 === a.target.nodeType && (a.target = a.target.parentNode), !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement), null == a.pageX && null != a.clientX) {
                var h = a.target.ownerDocument || c,
                    i = h.documentElement,
                    j = h.body;
                a.pageX = a.clientX + (i && i.scrollLeft || j && j.scrollLeft || 0) - (i && i.clientLeft || j && j.clientLeft || 0), a.pageY = a.clientY + (i && i.scrollTop || j && j.scrollTop || 0) - (i && i.clientTop || j && j.clientTop || 0)
            }
            return null != a.which || null == a.charCode && null == a.keyCode || (a.which = null != a.charCode ? a.charCode : a.keyCode), !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey), a.which || a.button === b || (a.which = 1 & a.button ? 1 : 2 & a.button ? 3 : 4 & a.button ? 2 : 0), a
        },
        "guid": 1e8,
        "proxy": f.proxy,
        "special": {
            "ready": {
                "setup": f.bindReady,
                "teardown": f.noop
            },
            "live": {
                "add": function (a) {
                    f.event.add(this, M(a.origType, a.selector), f.extend({}, a, {
                        "handler": L,
                        "guid": a.handler.guid
                    }))
                },
                "remove": function (a) {
                    f.event.remove(this, M(a.origType, a.selector), a)
                }
            },
            "beforeunload": {
                "setup": function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                "teardown": function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        }
    }, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        return this.preventDefault ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? D : C) : this.type = a, b && f.extend(this, b), this.timeStamp = f.now(), void(this[f.expando] = !0)) : new f.Event(a, b)
    }, f.Event.prototype = {
        "preventDefault": function () {
            this.isDefaultPrevented = D;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        "stopPropagation": function () {
            this.isPropagationStopped = D;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        "stopImmediatePropagation": function () {
            this.isImmediatePropagationStopped = D, this.stopPropagation()
        },
        "isDefaultPrevented": C,
        "isPropagationStopped": C,
        "isImmediatePropagationStopped": C
    };
    var E = function (a) {
            var b = a.relatedTarget,
                c = !1,
                d = a.type;
            a.type = a.data, b !== this && (b && (c = f.contains(this, b)), c || (f.event.handle.apply(this, arguments), a.type = d))
        },
        F = function (a) {
            a.type = a.data, f.event.handle.apply(this, arguments)
        };
    if (f.each({
            "mouseenter": "mouseover",
            "mouseleave": "mouseout"
        }, function (a, b) {
            f.event.special[a] = {
                "setup": function (c) {
                    f.event.add(this, b, c && c.selector ? F : E, a)
                },
                "teardown": function (a) {
                    f.event.remove(this, b, a && a.selector ? F : E)
                }
            }
        }), f.support.submitBubbles || (f.event.special.submit = {
            "setup": function () {
                return f.nodeName(this, "form") ? !1 : (f.event.add(this, "click.specialSubmit", function (a) {
                    var b = a.target,
                        c = f.nodeName(b, "input") || f.nodeName(b, "button") ? b.type : "";
                    "submit" !== c && "image" !== c || !f(b).closest("form").length || J("submit", this, arguments)
                }), void f.event.add(this, "keypress.specialSubmit", function (a) {
                    var b = a.target,
                        c = f.nodeName(b, "input") || f.nodeName(b, "button") ? b.type : "";
                    "text" !== c && "password" !== c || !f(b).closest("form").length || 13 !== a.keyCode || J("submit", this, arguments)
                }))
            },
            "teardown": function () {
                f.event.remove(this, ".specialSubmit")
            }
        }), !f.support.changeBubbles) {
        var G, H = function (a) {
                var b = f.nodeName(a, "input") ? a.type : "",
                    c = a.value;
                return "radio" === b || "checkbox" === b ? c = a.checked : "select-multiple" === b ? c = a.selectedIndex > -1 ? f.map(a.options, function (a) {
                    return a.selected
                }).join("-") : "" : f.nodeName(a, "select") && (c = a.selectedIndex), c
            },
            I = function (a) {
                var d, e, c = a.target;
                x.test(c.nodeName) && !c.readOnly && (d = f._data(c, "_change_data"), e = H(c), ("focusout" !== a.type || "radio" !== c.type) && f._data(c, "_change_data", e), d !== b && e !== d && (null != d || e) && (a.type = "change", a.liveFired = b, f.event.trigger(a, arguments[1], c)))
            };
        f.event.special.change = {
            "filters": {
                "focusout": I,
                "beforedeactivate": I,
                "click": function (a) {
                    var b = a.target,
                        c = f.nodeName(b, "input") ? b.type : "";
                    ("radio" === c || "checkbox" === c || f.nodeName(b, "select")) && I.call(this, a)
                },
                "keydown": function (a) {
                    var b = a.target,
                        c = f.nodeName(b, "input") ? b.type : "";
                    (13 === a.keyCode && !f.nodeName(b, "textarea") || 32 === a.keyCode && ("checkbox" === c || "radio" === c) || "select-multiple" === c) && I.call(this, a)
                },
                "beforeactivate": function (a) {
                    var b = a.target;
                    f._data(b, "_change_data", H(b))
                }
            },
            "setup": function () {
                if ("file" === this.type) return !1;
                for (var c in G) f.event.add(this, c + ".specialChange", G[c]);
                return x.test(this.nodeName)
            },
            "teardown": function () {
                return f.event.remove(this, ".specialChange"), x.test(this.nodeName)
            }
        }, G = f.event.special.change.filters, G.focus = G.beforeactivate
    }
    f.support.focusinBubbles || f.each({
        "focus": "focusin",
        "blur": "focusout"
    }, function (a, b) {
        function e(a) {
            var c = f.event.fix(a);
            c.type = b, c.originalEvent = {}, f.event.trigger(c, null, c.target), c.isDefaultPrevented() && a.preventDefault()
        }
        var d = 0;
        f.event.special[b] = {
            "setup": function () {
                0 === d++ && c.addEventListener(a, e, !0)
            },
            "teardown": function () {
                0 === --d && c.removeEventListener(a, e, !0)
            }
        }
    }), f.each(["bind", "one"], function (a, c) {
        f.fn[c] = function (a, d, e) {
            var g;
            if ("object" == typeof a) {
                for (var h in a) this[c](h, d, a[h], e);
                return this
            }
            if ((2 === arguments.length || d === !1) && (e = d, d = b), "one" === c ? (g = function (a) {
                    return f(this).unbind(a, g), e.apply(this, arguments)
                }, g.guid = e.guid || f.guid++) : g = e, "unload" === a && "one" !== c) this.one(a, d, e);
            else
                for (var i = 0, j = this.length; j > i; i++) f.event.add(this[i], a, g, d);
            return this
        }
    }), f.fn.extend({
        "unbind": function (a, b) {
            if ("object" != typeof a || a.preventDefault)
                for (var d = 0, e = this.length; e > d; d++) f.event.remove(this[d], a, b);
            else
                for (var c in a) this.unbind(c, a[c]);
            return this
        },
        "delegate": function (a, b, c, d) {
            return this.live(b, c, d, a)
        },
        "undelegate": function (a, b, c) {
            return 0 === arguments.length ? this.unbind("live") : this.die(b, null, c, a)
        },
        "trigger": function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        },
        "triggerHandler": function (a, b) {
            return this[0] ? f.event.trigger(a, b, this[0], !0) : void 0
        },
        "toggle": function (a) {
            var b = arguments,
                c = a.guid || f.guid++,
                d = 0,
                e = function (c) {
                    var e = (f.data(this, "lastToggle" + a.guid) || 0) % d;
                    return f.data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
                };
            for (e.guid = c; d < b.length;) b[d++].guid = c;
            return this.click(e)
        },
        "hover": function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var K = {
        "focus": "focusin",
        "blur": "focusout",
        "mouseenter": "mouseover",
        "mouseleave": "mouseout"
    };
    f.each(["live", "die"], function (a, c) {
            f.fn[c] = function (a, d, e, g) {
                var h, j, k, l, i = 0,
                    m = g || this.selector,
                    n = g ? this : f(this.context);
                if ("object" == typeof a && !a.preventDefault) {
                    for (var o in a) n[c](o, d, a[o], m);
                    return this
                }
                if ("die" === c && !a && g && "." === g.charAt(0)) return n.unbind(g), this;
                for ((d === !1 || f.isFunction(d)) && (e = d || C, d = b), a = (a || "").split(" "); null != (h = a[i++]);)
                    if (j = w.exec(h), k = "", j && (k = j[0], h = h.replace(w, "")), "hover" !== h)
                        if (l = h, K[h] ? (a.push(K[h] + k), h += k) : h = (K[h] || h) + k, "live" === c)
                            for (var p = 0, q = n.length; q > p; p++) f.event.add(n[p], "live." + M(h, m), {
                                "data": d,
                                "selector": m,
                                "handler": e,
                                "origType": h,
                                "origHandler": e,
                                "preType": l
                            });
                        else n.unbind("live." + M(h, m), e);
                else a.push("mouseenter" + k, "mouseleave" + k);
                return this
            }
        }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (a, b) {
            f.fn[b] = function (a, c) {
                return null == c && (c = a, a = null), arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
            }, f.attrFn && (f.attrFn[b] = !0)
        }),
        function () {
            function t(a, b, c, d, e, f) {
                for (var g = 0, h = d.length; h > g; g++) {
                    var i = d[g];
                    if (i) {
                        var j = !1;
                        for (i = i[a]; i;) {
                            if (i.sizcache === c) {
                                j = d[i.sizset];
                                break
                            }
                            if (1 !== i.nodeType || f || (i.sizcache = c, i.sizset = g), i.nodeName.toLowerCase() === b) {
                                j = i;
                                break
                            }
                            i = i[a]
                        }
                        d[g] = j
                    }
                }
            }

            function u(a, b, c, d, e, f) {
                for (var g = 0, h = d.length; h > g; g++) {
                    var i = d[g];
                    if (i) {
                        var j = !1;
                        for (i = i[a]; i;) {
                            if (i.sizcache === c) {
                                j = d[i.sizset];
                                break
                            }
                            if (1 === i.nodeType)
                                if (f || (i.sizcache = c, i.sizset = g), "string" != typeof b) {
                                    if (i === b) {
                                        j = !0;
                                        break
                                    }
                                } else if (k.filter(b, [i]).length > 0) {
                                j = i;
                                break
                            }
                            i = i[a]
                        }
                        d[g] = j
                    }
                }
            }
            var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                d = 0,
                e = Object.prototype.toString,
                g = !1,
                h = !0,
                i = /\\/g,
                j = /\W/;
            [0, 0].sort(function () {
                return h = !1, 0
            });
            var k = function (b, d, f, g) {
                f = f || [], d = d || c;
                var h = d;
                if (1 !== d.nodeType && 9 !== d.nodeType) return [];
                if (!b || "string" != typeof b) return f;
                var i, j, n, o, q, r, s, t, u = !0,
                    w = k.isXML(d),
                    x = [],
                    y = b;
                do
                    if (a.exec(""), i = a.exec(y), i && (y = i[3], x.push(i[1]), i[2])) {
                        o = i[3];
                        break
                    } while (i);
                if (x.length > 1 && m.exec(b))
                    if (2 === x.length && l.relative[x[0]]) j = v(x[0] + x[1], d);
                    else
                        for (j = l.relative[x[0]] ? [d] : k(x.shift(), d); x.length;) b = x.shift(), l.relative[b] && (b += x.shift()), j = v(b, j);
                else if (!g && x.length > 1 && 9 === d.nodeType && !w && l.match.ID.test(x[0]) && !l.match.ID.test(x[x.length - 1]) && (q = k.find(x.shift(), d, w), d = q.expr ? k.filter(q.expr, q.set)[0] : q.set[0]), d)
                    for (q = g ? {
                            "expr": x.pop(),
                            "set": p(g)
                        } : k.find(x.pop(), 1 !== x.length || "~" !== x[0] && "+" !== x[0] || !d.parentNode ? d : d.parentNode, w), j = q.expr ? k.filter(q.expr, q.set) : q.set, x.length > 0 ? n = p(j) : u = !1; x.length;) r = x.pop(), s = r, l.relative[r] ? s = x.pop() : r = "", null == s && (s = d), l.relative[r](n, s, w);
                else n = x = [];
                if (n || (n = j), n || k.error(r || b), "[object Array]" === e.call(n))
                    if (u)
                        if (d && 1 === d.nodeType)
                            for (t = 0; null != n[t]; t++) n[t] && (n[t] === !0 || 1 === n[t].nodeType && k.contains(d, n[t])) && f.push(j[t]);
                        else
                            for (t = 0; null != n[t]; t++) n[t] && 1 === n[t].nodeType && f.push(j[t]);
                else f.push.apply(f, n);
                else p(n, f);
                return o && (k(o, h, f, g), k.uniqueSort(f)), f
            };
            k.uniqueSort = function (a) {
                if (r && (g = h, a.sort(r), g))
                    for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
                return a
            }, k.matches = function (a, b) {
                return k(a, null, null, b)
            }, k.matchesSelector = function (a, b) {
                return k(b, null, null, [a]).length > 0
            }, k.find = function (a, b, c) {
                var d;
                if (!a) return [];
                for (var e = 0, f = l.order.length; f > e; e++) {
                    var g, h = l.order[e];
                    if (g = l.leftMatch[h].exec(a)) {
                        var j = g[1];
                        if (g.splice(1, 1), "\\" !== j.substr(j.length - 1) && (g[1] = (g[1] || "").replace(i, ""), d = l.find[h](g, b, c), null != d)) {
                            a = a.replace(l.match[h], "");
                            break
                        }
                    }
                }
                return d || (d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []), {
                    "set": d,
                    "expr": a
                }
            }, k.filter = function (a, c, d, e) {
                for (var f, g, h = a, i = [], j = c, m = c && c[0] && k.isXML(c[0]); a && c.length;) {
                    for (var n in l.filter)
                        if (null != (f = l.leftMatch[n].exec(a)) && f[2]) {
                            var o, p, q = l.filter[n],
                                r = f[1];
                            if (g = !1, f.splice(1, 1), "\\" === r.substr(r.length - 1)) continue;
                            if (j === i && (i = []), l.preFilter[n])
                                if (f = l.preFilter[n](f, j, d, i, e, m)) {
                                    if (f === !0) continue
                                } else g = o = !0;
                            if (f)
                                for (var s = 0; null != (p = j[s]); s++)
                                    if (p) {
                                        o = q(p, f, s, j);
                                        var t = e ^ !!o;
                                        d && null != o ? t ? g = !0 : j[s] = !1 : t && (i.push(p), g = !0)
                                    } if (o !== b) {
                                if (d || (j = i), a = a.replace(l.match[n], ""), !g) return [];
                                break
                            }
                        } if (a === h) {
                        if (null != g) break;
                        k.error(a)
                    }
                    h = a
                }
                return j
            }, k.error = function (a) {
                throw "Syntax error, unrecognized expression: " + a
            };
            var l = k.selectors = {
                    "order": ["ID", "NAME", "TAG"],
                    "match": {
                        "ID": /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        "CLASS": /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        "NAME": /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        "ATTR": /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        "TAG": /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        "CHILD": /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        "POS": /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        "PSEUDO": /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    "leftMatch": {},
                    "attrMap": {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    "attrHandle": {
                        "href": function (a) {
                            return a.getAttribute("href")
                        },
                        "type": function (a) {
                            return a.getAttribute("type")
                        }
                    },
                    "relative": {
                        "+": function (a, b) {
                            var c = "string" == typeof b,
                                d = c && !j.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var h, f = 0, g = a.length; g > f; f++)
                                if (h = a[f]) {
                                    for (;
                                        (h = h.previousSibling) && 1 !== h.nodeType;);
                                    a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                                } e && k.filter(b, a, !0)
                        },
                        ">": function (a, b) {
                            var c, d = "string" == typeof b,
                                e = 0,
                                f = a.length;
                            if (d && !j.test(b)) {
                                for (b = b.toLowerCase(); f > e; e++)
                                    if (c = a[e]) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                    }
                            } else {
                                for (; f > e; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && k.filter(b, a, !0)
                            }
                        },
                        "": function (a, b, c) {
                            var e, f = d++,
                                g = u;
                            "string" != typeof b || j.test(b) || (b = b.toLowerCase(), e = b, g = t), g("parentNode", b, f, a, e, c)
                        },
                        "~": function (a, b, c) {
                            var e, f = d++,
                                g = u;
                            "string" != typeof b || j.test(b) || (b = b.toLowerCase(), e = b, g = t), g("previousSibling", b, f, a, e, c)
                        }
                    },
                    "find": {
                        "ID": function (a, b, c) {
                            if ("undefined" != typeof b.getElementById && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        "NAME": function (a, b) {
                            if ("undefined" != typeof b.getElementsByName) {
                                for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; f > e; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                                return 0 === c.length ? null : c
                            }
                        },
                        "TAG": function (a, b) {
                            return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a[1]) : void 0
                        }
                    },
                    "preFilter": {
                        "CLASS": function (a, b, c, d, e, f) {
                            if (a = " " + a[1].replace(i, "") + " ", f) return a;
                            for (var h, g = 0; null != (h = b[g]); g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                            return !1
                        },
                        "ID": function (a) {
                            return a[1].replace(i, "")
                        },
                        "TAG": function (a) {
                            return a[1].replace(i, "").toLowerCase()
                        },
                        "CHILD": function (a) {
                            if ("nth" === a[1]) {
                                a[2] || k.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                            } else a[2] && k.error(a[0]);
                            return a[0] = d++, a
                        },
                        "ATTR": function (a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(i, "");
                            return !f && l.attrMap[g] && (a[1] = l.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(i, ""), "~=" === a[2] && (a[4] = " " + a[4] + " "), a
                        },
                        "PSEUDO": function (b, c, d, e, f) {
                            if ("not" === b[1]) {
                                if (!((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))) {
                                    var g = k.filter(b[3], c, d, !0 ^ f);
                                    return d || e.push.apply(e, g), !1
                                }
                                b[3] = k(b[3], null, null, c)
                            } else if (l.match.POS.test(b[0]) || l.match.CHILD.test(b[0])) return !0;
                            return b
                        },
                        "POS": function (a) {
                            return a.unshift(!0), a
                        }
                    },
                    "filters": {
                        "enabled": function (a) {
                            return a.disabled === !1 && "hidden" !== a.type
                        },
                        "disabled": function (a) {
                            return a.disabled === !0
                        },
                        "checked": function (a) {
                            return a.checked === !0
                        },
                        "selected": function (a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                        },
                        "parent": function (a) {
                            return !!a.firstChild
                        },
                        "empty": function (a) {
                            return !a.firstChild
                        },
                        "has": function (a, b, c) {
                            return !!k(c[3], a).length
                        },
                        "header": function (a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        "text": function (a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
                        },
                        "radio": function (a) {
                            return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                        },
                        "checkbox": function (a) {
                            return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                        },
                        "file": function (a) {
                            return "input" === a.nodeName.toLowerCase() && "file" === a.type
                        },
                        "password": function (a) {
                            return "input" === a.nodeName.toLowerCase() && "password" === a.type
                        },
                        "submit": function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "submit" === a.type
                        },
                        "image": function (a) {
                            return "input" === a.nodeName.toLowerCase() && "image" === a.type
                        },
                        "reset": function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "reset" === a.type
                        },
                        "button": function (a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        "input": function (a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        "focus": function (a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    "setFilters": {
                        "first": function (a, b) {
                            return 0 === b
                        },
                        "last": function (a, b, c, d) {
                            return b === d.length - 1
                        },
                        "even": function (a, b) {
                            return b % 2 === 0
                        },
                        "odd": function (a, b) {
                            return b % 2 === 1
                        },
                        "lt": function (a, b, c) {
                            return b < c[3] - 0
                        },
                        "gt": function (a, b, c) {
                            return b > c[3] - 0
                        },
                        "nth": function (a, b, c) {
                            return c[3] - 0 === b
                        },
                        "eq": function (a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    "filter": {
                        "PSEUDO": function (a, b, c, d) {
                            var e = b[1],
                                f = l.filters[e];
                            if (f) return f(a, c, b, d);
                            if ("contains" === e) return (a.textContent || a.innerText || k.getText([a]) || "").indexOf(b[3]) >= 0;
                            if ("not" === e) {
                                for (var g = b[3], h = 0, i = g.length; i > h; h++)
                                    if (g[h] === a) return !1;
                                return !0
                            }
                            k.error(e)
                        },
                        "CHILD": function (a, b) {
                            var c = b[1],
                                d = a;
                            switch (c) {
                                case "only":
                                case "first":
                                    for (; d = d.previousSibling;)
                                        if (1 === d.nodeType) return !1;
                                    if ("first" === c) return !0;
                                    d = a;
                                case "last":
                                    for (; d = d.nextSibling;)
                                        if (1 === d.nodeType) return !1;
                                    return !0;
                                case "nth":
                                    var e = b[2],
                                        f = b[3];
                                    if (1 === e && 0 === f) return !0;
                                    var g = b[0],
                                        h = a.parentNode;
                                    if (h && (h.sizcache !== g || !a.nodeIndex)) {
                                        var i = 0;
                                        for (d = h.firstChild; d; d = d.nextSibling) 1 === d.nodeType && (d.nodeIndex = ++i);
                                        h.sizcache = g
                                    }
                                    var j = a.nodeIndex - f;
                                    return 0 === e ? 0 === j : j % e === 0 && j / e >= 0
                            }
                        },
                        "ID": function (a, b) {
                            return 1 === a.nodeType && a.getAttribute("id") === b
                        },
                        "TAG": function (a, b) {
                            return "*" === b && 1 === a.nodeType || a.nodeName.toLowerCase() === b
                        },
                        "CLASS": function (a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                        },
                        "ATTR": function (a, b) {
                            var c = b[1],
                                d = l.attrHandle[c] ? l.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return null == d ? "!=" === f : "=" === f ? e === g : "*=" === f ? e.indexOf(g) >= 0 : "~=" === f ? (" " + e + " ").indexOf(g) >= 0 : g ? "!=" === f ? e !== g : "^=" === f ? 0 === e.indexOf(g) : "$=" === f ? e.substr(e.length - g.length) === g : "|=" === f ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                        },
                        "POS": function (a, b, c, d) {
                            var e = b[2],
                                f = l.setFilters[e];
                            return f ? f(a, c, b, d) : void 0
                        }
                    }
                },
                m = l.match.POS,
                n = function (a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var o in l.match) l.match[o] = new RegExp(l.match[o].source + /(?![^\[]*\])(?![^\(]*\))/.source), l.leftMatch[o] = new RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[o].source.replace(/\\(\d+)/g, n));
            var p = function (a, b) {
                return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
            } catch (q) {
                p = function (a, b) {
                    var c = 0,
                        d = b || [];
                    if ("[object Array]" === e.call(a)) Array.prototype.push.apply(d, a);
                    else if ("number" == typeof a.length)
                        for (var f = a.length; f > c; c++) d.push(a[c]);
                    else
                        for (; a[c]; c++) d.push(a[c]);
                    return d
                }
            }
            var r, s;
            c.documentElement.compareDocumentPosition ? r = function (a, b) {
                    return a === b ? (g = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                } : (r = function (a, b) {
                    if (a === b) return g = !0, 0;
                    if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                    var c, d, e = [],
                        f = [],
                        h = a.parentNode,
                        i = b.parentNode,
                        j = h;
                    if (h === i) return s(a, b);
                    if (!h) return -1;
                    if (!i) return 1;
                    for (; j;) e.unshift(j), j = j.parentNode;
                    for (j = i; j;) f.unshift(j), j = j.parentNode;
                    c = e.length, d = f.length;
                    for (var k = 0; c > k && d > k; k++)
                        if (e[k] !== f[k]) return s(e[k], f[k]);
                    return k === c ? s(a, f[k], -1) : s(e[k], b, 1)
                }, s = function (a, b, c) {
                    if (a === b) return c;
                    for (var d = a.nextSibling; d;) {
                        if (d === b) return -1;
                        d = d.nextSibling
                    }
                    return 1
                }), k.getText = function (a) {
                    for (var c, b = "", d = 0; a[d]; d++) c = a[d], 3 === c.nodeType || 4 === c.nodeType ? b += c.nodeValue : 8 !== c.nodeType && (b += k.getText(c.childNodes));
                    return b
                },
                function () {
                    var a = c.createElement("div"),
                        d = "script" + (new Date).getTime(),
                        e = c.documentElement;
                    a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (l.find.ID = function (a, c, d) {
                        if ("undefined" != typeof c.getElementById && !d) {
                            var e = c.getElementById(a[1]);
                            return e ? e.id === a[1] || "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                        }
                    }, l.filter.ID = function (a, b) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return 1 === a.nodeType && c && c.nodeValue === b
                    }), e.removeChild(a), e = a = null
                }(),
                function () {
                    var a = c.createElement("div");
                    a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (l.find.TAG = function (a, b) {
                        var c = b.getElementsByTagName(a[1]);
                        if ("*" === a[1]) {
                            for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                            c = d
                        }
                        return c
                    }), a.innerHTML = "<a href='#'></a>", a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (l.attrHandle.href = function (a) {
                        return a.getAttribute("href", 2)
                    }), a = null
                }(), c.querySelectorAll && ! function () {
                    var a = k,
                        b = c.createElement("div"),
                        d = "__sizzle__";
                    if (b.innerHTML = "<p class='TEST'></p>", !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                        k = function (b, e, f, g) {
                            if (e = e || c, !g && !k.isXML(e)) {
                                var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (h && (1 === e.nodeType || 9 === e.nodeType)) {
                                    if (h[1]) return p(e.getElementsByTagName(b), f);
                                    if (h[2] && l.find.CLASS && e.getElementsByClassName) return p(e.getElementsByClassName(h[2]), f)
                                }
                                if (9 === e.nodeType) {
                                    if ("body" === b && e.body) return p([e.body], f);
                                    if (h && h[3]) {
                                        var i = e.getElementById(h[3]);
                                        if (!i || !i.parentNode) return p([], f);
                                        if (i.id === h[3]) return p([i], f)
                                    }
                                    try {
                                        return p(e.querySelectorAll(b), f)
                                    } catch (j) {}
                                } else if (1 === e.nodeType && "object" !== e.nodeName.toLowerCase()) {
                                    var m = e,
                                        n = e.getAttribute("id"),
                                        o = n || d,
                                        q = e.parentNode,
                                        r = /^\s*[+~]/.test(b);
                                    n ? o = o.replace(/'/g, "\\$&") : e.setAttribute("id", o), r && q && (e = e.parentNode);
                                    try {
                                        if (!r || q) return p(e.querySelectorAll("[id='" + o + "'] " + b), f)
                                    } catch (s) {} finally {
                                        n || m.removeAttribute("id")
                                    }
                                }
                            }
                            return a(b, e, f, g)
                        };
                        for (var e in a) k[e] = a[e];
                        b = null
                    }
                }(),
                function () {
                    var a = c.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var d = !b.call(c.createElement("div"), "div"),
                            e = !1;
                        try {
                            b.call(c.documentElement, "[test!='']:sizzle")
                        } catch (f) {
                            e = !0
                        }
                        k.matchesSelector = function (a, c) {
                            if (c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !k.isXML(a)) try {
                                if (e || !l.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                    var f = b.call(a, c);
                                    if (f || !d || a.document && 11 !== a.document.nodeType) return f
                                }
                            } catch (g) {}
                            return k(c, null, null, [a]).length > 0
                        }
                    }
                }(),
                function () {
                    var a = c.createElement("div");
                    a.innerHTML = "<div class='test e'></div><div class='test'></div>", a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (l.order.splice(1, 0, "CLASS"), l.find.CLASS = function (a, b, c) {
                        return "undefined" == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a[1])
                    }, a = null))
                }(), k.contains = c.documentElement.contains ? function (a, b) {
                    return a !== b && (a.contains ? a.contains(b) : !0)
                } : c.documentElement.compareDocumentPosition ? function (a, b) {
                    return !!(16 & a.compareDocumentPosition(b))
                } : function () {
                    return !1
                }, k.isXML = function (a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? "HTML" !== b.nodeName : !1
                };
            var v = function (a, b) {
                for (var c, d = [], e = "", f = b.nodeType ? [b] : b; c = l.match.PSEUDO.exec(a);) e += c[0], a = a.replace(l.match.PSEUDO, "");
                a = l.relative[a] ? a + "*" : a;
                for (var g = 0, h = f.length; h > g; g++) k(a, f[g], d);
                return k.filter(e, d)
            };
            f.find = k, f.expr = k.selectors, f.expr[":"] = f.expr.filters, f.unique = k.uniqueSort, f.text = k.getText, f.isXMLDoc = k.isXML, f.contains = k.contains
        }();
    var N = /Until$/,
        O = /^(?:parents|prevUntil|prevAll)/,
        P = /,/,
        Q = /^.[^:#\[\.,]*$/,
        R = Array.prototype.slice,
        S = f.expr.match.POS,
        T = {
            "children": !0,
            "contents": !0,
            "next": !0,
            "prev": !0
        };
    f.fn.extend({
        "find": function (a) {
            var c, d, b = this;
            if ("string" != typeof a) return f(a).filter(function () {
                for (c = 0, d = b.length; d > c; c++)
                    if (f.contains(b[c], this)) return !0
            });
            var g, h, i, e = this.pushStack("", "find", a);
            for (c = 0, d = this.length; d > c; c++)
                if (g = e.length, f.find(a, this[c], e), c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; g > i; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            } return e
        },
        "has": function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; c > a; a++)
                    if (f.contains(this, b[a])) return !0
            })
        },
        "not": function (a) {
            return this.pushStack(V(this, a, !1), "not", a)
        },
        "filter": function (a) {
            return this.pushStack(V(this, a, !0), "filter", a)
        },
        "is": function (a) {
            return !!a && ("string" == typeof a ? f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        "closest": function (a, b) {
            var d, e, c = [],
                g = this[0];
            if (f.isArray(a)) {
                var h, i, j = {},
                    k = 1;
                if (g && a.length) {
                    for (d = 0, e = a.length; e > d; d++) i = a[d], j[i] || (j[i] = S.test(i) ? f(i, b || this.context) : i);
                    for (; g && g.ownerDocument && g !== b;) {
                        for (i in j) h = j[i], (h.jquery ? h.index(g) > -1 : f(g).is(h)) && c.push({
                            "selector": i,
                            "elem": g,
                            "level": k
                        });
                        g = g.parentNode, k++
                    }
                }
                return c
            }
            var l = S.test(a) || "string" != typeof a ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; e > d; d++)
                for (g = this[d]; g;) {
                    if (l ? l.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    if (g = g.parentNode, !g || !g.ownerDocument || g === b || 11 === g.nodeType) break
                }
            return c = c.length > 1 ? f.unique(c) : c, this.pushStack(c, "closest", a)
        },
        "index": function (a) {
            return a ? "string" == typeof a ? f.inArray(this[0], f(a)) : f.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        "add": function (a, b) {
            var c = "string" == typeof a ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(U(c[0]) || U(d[0]) ? d : f.unique(d))
        },
        "andSelf": function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        "parent": function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        "parents": function (a) {
            return f.dir(a, "parentNode")
        },
        "parentsUntil": function (a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        "next": function (a) {
            return f.nth(a, 2, "nextSibling")
        },
        "prev": function (a) {
            return f.nth(a, 2, "previousSibling")
        },
        "nextAll": function (a) {
            return f.dir(a, "nextSibling")
        },
        "prevAll": function (a) {
            return f.dir(a, "previousSibling")
        },
        "nextUntil": function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        "prevUntil": function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        "siblings": function (a) {
            return f.sibling(a.parentNode.firstChild, a)
        },
        "children": function (a) {
            return f.sibling(a.firstChild)
        },
        "contents": function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c),
                g = R.call(arguments);
            return N.test(a) || (d = c), d && "string" == typeof d && (e = f.filter(d, e)), e = this.length > 1 && !T[a] ? f.unique(e) : e, (this.length > 1 || P.test(d)) && O.test(a) && (e = e.reverse()), this.pushStack(e, a, g.join(","))
        }
    }), f.extend({
        "filter": function (a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        "dir": function (a, c, d) {
            for (var e = [], g = a[c]; g && 9 !== g.nodeType && (d === b || 1 !== g.nodeType || !f(g).is(d));) 1 === g.nodeType && e.push(g), g = g[c];
            return e
        },
        "nth": function (a, b, c) {
            b = b || 1;
            for (var e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
            return a
        },
        "sibling": function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ab = /<(?:script|object|embed|option|style)/i,
        bb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        cb = /\/(java|ecma)script/i,
        db = /^\s*<!(?:\[CDATA\[|\-\-)/,
        eb = {
            "option": [1, "<select multiple='multiple'>", "</select>"],
            "legend": [1, "<fieldset>", "</fieldset>"],
            "thead": [1, "<table>", "</table>"],
            "tr": [2, "<table><tbody>", "</tbody></table>"],
            "td": [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            "col": [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            "area": [1, "<map>", "</map>"],
            "_default": [0, "", ""]
        };
    eb.optgroup = eb.option, eb.tbody = eb.tfoot = eb.colgroup = eb.caption = eb.thead, eb.th = eb.td, f.support.htmlSerialize || (eb._default = [1, "div<div>", "</div>"]), f.fn.extend({
        "text": function (a) {
            return f.isFunction(a) ? this.each(function (b) {
                var c = f(this);
                c.text(a.call(this, b, c.text()))
            }) : "object" != typeof a && a !== b ? this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a)) : f.text(this)
        },
        "wrapAll": function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        "wrapInner": function (a) {
            return this.each(f.isFunction(a) ? function (b) {
                f(this).wrapInner(a.call(this, b))
            } : function () {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        "wrap": function (a) {
            return this.each(function () {
                f(this).wrapAll(a)
            })
        },
        "unwrap": function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        "append": function () {
            return this.domManip(arguments, !0, function (a) {
                1 === this.nodeType && this.appendChild(a)
            })
        },
        "prepend": function () {
            return this.domManip(arguments, !0, function (a) {
                1 === this.nodeType && this.insertBefore(a, this.firstChild)
            })
        },
        "before": function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f(arguments[0]);
                return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
            }
        },
        "after": function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                return a.push.apply(a, f(arguments[0]).toArray()), a
            }
        },
        "remove": function (a, b) {
            for (var d, c = 0; null != (d = this[c]); c++)(!a || f.filter(a, [d]).length) && (b || 1 !== d.nodeType || (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d));
            return this
        },
        "empty": function () {
            for (var b, a = 0; null != (b = this[a]); a++)
                for (1 === b.nodeType && f.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        "clone": function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return f.clone(this, a, b)
            })
        },
        "html": function (a) {
            if (a === b) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(W, "") : null;
            if ("string" != typeof a || ab.test(a) || !f.support.leadingWhitespace && X.test(a) || eb[(Z.exec(a) || ["", ""])[1].toLowerCase()]) f.isFunction(a) ? this.each(function (b) {
                var c = f(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            else {
                a = a.replace(Y, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; d > c; c++) 1 === this[c].nodeType && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            }
            return this
        },
        "replaceWith": function (a) {
            return this[0] && this[0].parentNode ? f.isFunction(a) ? this.each(function (b) {
                var c = f(this),
                    d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = f(a).detach()), this.each(function () {
                var b = this.nextSibling,
                    c = this.parentNode;
                f(this).remove(), b ? f(b).before(a) : f(c).append(a)
            })) : this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        "detach": function (a) {
            return this.remove(a, !0)
        },
        "domManip": function (a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && 3 === arguments.length && "string" == typeof j && bb.test(j)) return this.each(function () {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                if (i = j && j.parentNode, e = f.support.parentNode && i && 11 === i.nodeType && i.childNodes.length === this.length ? {
                        "fragment": i
                    } : f.buildFragment(a, this, k), h = e.fragment, g = 1 === h.childNodes.length ? h = h.firstChild : h.firstChild) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; m > l; l++) d.call(c ? fb(this[l], g) : this[l], e.cacheable || m > 1 && n > l ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, lb)
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i;
        return b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), 1 === a.length && "string" == typeof a[0] && a[0].length < 512 && i === c && "<" === a[0].charAt(0) && !ab.test(a[0]) && (f.support.checkClone || !bb.test(a[0])) && (g = !0, h = f.fragments[a[0]], h && 1 !== h && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[a[0]] = h ? e : 1), {
            "fragment": e,
            "cacheable": g
        }
    }, f.fragments = {}, f.each({
        "appendTo": "append",
        "prependTo": "prepend",
        "insertBefore": "before",
        "insertAfter": "after",
        "replaceAll": "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [],
                e = f(c),
                g = 1 === this.length && this[0].parentNode;
            if (g && 11 === g.nodeType && 1 === g.childNodes.length && 1 === e.length) return e[b](this[0]), this;
            for (var h = 0, i = e.length; i > h; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        "clone": function (a, b, c) {
            var e, g, h, d = a.cloneNode(!0);
            if (!(f.support.noCloneEvent && f.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || f.isXMLDoc(a)))
                for (hb(a, d), e = ib(a), g = ib(d), h = 0; e[h]; ++h) g[h] && hb(e[h], g[h]);
            if (b && (gb(a, d), c))
                for (e = ib(a), g = ib(d), h = 0; e[h]; ++h) gb(e[h], g[h]);
            return e = g = null, d
        },
        "clean": function (a, b, d, e) {
            var g;
            b = b || c, "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var i, k, h = [], j = 0; null != (k = a[j]); j++)
                if ("number" == typeof k && (k += ""), k) {
                    if ("string" == typeof k)
                        if (_.test(k)) {
                            k = k.replace(Y, "<$1></$2>");
                            var l = (Z.exec(k) || ["", ""])[1].toLowerCase(),
                                m = eb[l] || eb._default,
                                n = m[0],
                                o = b.createElement("div");
                            for (o.innerHTML = m[1] + k + m[2]; n--;) o = o.lastChild;
                            if (!f.support.tbody) {
                                var p = $.test(k),
                                    q = "table" !== l || p ? "<table>" !== m[1] || p ? [] : o.childNodes : o.firstChild && o.firstChild.childNodes;
                                for (i = q.length - 1; i >= 0; --i) f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                            }!f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild), k = o.childNodes
                        } else k = b.createTextNode(k);
                    var r;
                    if (!f.support.appendChecked)
                        if (k[0] && "number" == typeof (r = k.length))
                            for (i = 0; r > i; i++) kb(k[i]);
                        else kb(k);
                    k.nodeType ? h.push(k) : h = f.merge(h, k)
                } if (d)
                for (g = function (a) {
                        return !a.type || cb.test(a.type)
                    }, j = 0; h[j]; j++)
                    if (!e || !f.nodeName(h[j], "script") || h[j].type && "text/javascript" !== h[j].type.toLowerCase()) {
                        if (1 === h[j].nodeType) {
                            var s = f.grep(h[j].getElementsByTagName("script"), g);
                            h.splice.apply(h, [j + 1, 0].concat(s))
                        }
                        d.appendChild(h[j])
                    } else e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
            return h
        },
        "cleanData": function (a) {
            for (var b, c, j, d = f.cache, e = f.expando, g = f.event.special, h = f.support.deleteExpando, i = 0; null != (j = a[i]); i++)
                if ((!j.nodeName || !f.noData[j.nodeName.toLowerCase()]) && (c = j[f.expando])) {
                    if (b = d[c] && d[c][e], b && b.events) {
                        for (var k in b.events) g[k] ? f.event.remove(j, k) : f.removeEvent(j, k, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    h ? delete j[f.expando] : j.removeAttribute && j.removeAttribute(f.expando), delete d[c]
                }
        }
    });
    var vb, wb, xb, mb = /alpha\([^)]*\)/i,
        nb = /opacity=([^)]*)/,
        ob = /([A-Z]|^ms)/g,
        pb = /^-?\d+(?:px)?$/i,
        qb = /^-?\d/,
        rb = /^([\-+])=([\-+.\de]+)/,
        sb = {
            "position": "absolute",
            "visibility": "hidden",
            "display": "block"
        },
        tb = ["Left", "Right"],
        ub = ["Top", "Bottom"];
    f.fn.css = function (a, c) {
        return 2 === arguments.length && c === b ? this : f.access(this, a, c, !0, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }, f.extend({
        "cssHooks": {
            "opacity": {
                "get": function (a, b) {
                    if (b) {
                        var c = vb(a, "opacity", "opacity");
                        return "" === c ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        "cssNumber": {
            "fillOpacity": !0,
            "fontWeight": !0,
            "lineHeight": !0,
            "opacity": !0,
            "orphans": !0,
            "widows": !0,
            "zIndex": !0,
            "zoom": !0
        },
        "cssProps": {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        "style": function (a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                if (c = f.cssProps[i] || i, d === b) return k && "get" in k && (g = k.get(a, !1, e)) !== b ? g : j[c];
                if (h = typeof d, "string" === h && (g = rb.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number"), !(null == d || "number" === h && isNaN(d) || ("number" !== h || f.cssNumber[i] || (d += "px"), k && "set" in k && (d = k.set(a, d)) === b))) try {
                    j[c] = d
                } catch (l) {}
            }
        },
        "css": function (a, c, d) {
            var e, g;
            return c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, "cssFloat" === c && (c = "float"), g && "get" in g && (e = g.get(a, !0, d)) !== b ? e : vb ? vb(a, c) : void 0
        },
        "swap": function (a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }), f.curCSS = f.css, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            "get": function (a, c, d) {
                var e;
                return c ? 0 !== a.offsetWidth ? yb(a, b, d) : (f.swap(a, sb, function () {
                    e = yb(a, b, d)
                }), e) : void 0
            },
            "set": function (a, b) {
                return pb.test(b) ? (b = parseFloat(b), b >= 0 ? b + "px" : void 0) : b
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        "get": function (a, b) {
            return nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        "set": function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNaN(b) ? "" : "alpha(opacity=" + 100 * b + ")",
                g = d && d.filter || c.filter || "";
            c.zoom = 1, b >= 1 && "" === f.trim(g.replace(mb, "")) && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = mb.test(g) ? g.replace(mb, e) : g + " " + e)
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            "get": function (a, b) {
                var c;
                return f.swap(a, {
                    "display": "inline-block"
                }, function () {
                    c = b ? vb(a, "margin-right", "marginRight") : a.style.marginRight
                }), c
            }
        })
    }), c.defaultView && c.defaultView.getComputedStyle && (wb = function (a, c) {
        var d, e, g;
        return c = c.replace(ob, "-$1").toLowerCase(), (e = a.ownerDocument.defaultView) ? ((g = e.getComputedStyle(a, null)) && (d = g.getPropertyValue(c), "" !== d || f.contains(a.ownerDocument.documentElement, a) || (d = f.style(a, c))), d) : b
    }), c.documentElement.currentStyle && (xb = function (a, b) {
        var c, d = a.currentStyle && a.currentStyle[b],
            e = a.runtimeStyle && a.runtimeStyle[b],
            f = a.style;
        return !pb.test(d) && qb.test(d) && (c = f.left, e && (a.runtimeStyle.left = a.currentStyle.left), f.left = "fontSize" === b ? "1em" : d || 0, d = f.pixelLeft + "px", f.left = c, e && (a.runtimeStyle.left = e)), "" === d ? "auto" : d
    }), vb = wb || xb, f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return 0 === b && 0 === c || !f.support.reliableHiddenOffsets && "none" === (a.style.display || f.css(a, "display"))
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    });
    var Rb, Sb, zb = /%20/g,
        Ab = /\[\]$/,
        Bb = /\r?\n/g,
        Cb = /#.*$/,
        Db = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Eb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Fb = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Gb = /^(?:GET|HEAD)$/,
        Hb = /^\/\//,
        Ib = /\?/,
        Jb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Kb = /^(?:select|textarea)/i,
        Lb = /\s+/,
        Mb = /([?&])_=[^&]*/,
        Nb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        Ob = f.fn.load,
        Pb = {},
        Qb = {},
        Tb = ["*/"] + ["*"];
    try {
        Rb = e.href
    } catch (Ub) {
        Rb = c.createElement("a"), Rb.href = "", Rb = Rb.href
    }
    Sb = Nb.exec(Rb.toLowerCase()) || [], f.fn.extend({
        "load": function (a, c, d) {
            if ("string" != typeof a && Ob) return Ob.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : "object" == typeof c && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            return f.ajax({
                "url": a,
                "type": h,
                "dataType": "html",
                "data": c,
                "complete": function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(Jb, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            }), this
        },
        "serialize": function () {
            return f.param(this.serializeArray())
        },
        "serializeArray": function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Kb.test(this.nodeName) || Eb.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return null == c ? null : f.isArray(c) ? f.map(c, function (a) {
                    return {
                        "name": b.name,
                        "value": a.replace(Bb, "\r\n")
                    }
                }) : {
                    "name": b.name,
                    "value": c.replace(Bb, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.bind(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            return f.isFunction(d) && (g = g || e, e = d, d = b), f.ajax({
                "type": c,
                "url": a,
                "data": d,
                "success": e,
                "dataType": g
            })
        }
    }), f.extend({
        "getScript": function (a, c) {
            return f.get(a, b, c, "script")
        },
        "getJSON": function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        "ajaxSetup": function (a, b) {
            return b ? Xb(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), Xb(a, b), a
        },
        "ajaxSettings": {
            "url": Rb,
            "isLocal": Fb.test(Sb[1]),
            "global": !0,
            "type": "GET",
            "contentType": "application/x-www-form-urlencoded",
            "processData": !0,
            "async": !0,
            "accepts": {
                "xml": "application/xml, text/xml",
                "html": "text/html",
                "text": "text/plain",
                "json": "application/json, text/javascript",
                "*": Tb
            },
            "contents": {
                "xml": /xml/,
                "html": /html/,
                "json": /json/
            },
            "responseFields": {
                "xml": "responseXML",
                "text": "responseText"
            },
            "converters": {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            "flatOptions": {
                "context": !0,
                "url": !0
            }
        },
        "ajaxPrefilter": Vb(Pb),
        "ajaxTransport": Vb(Qb),
        "ajax": function (a, c) {
            function w(a, c, l, m) {
                if (2 !== s) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, y, z, w = c,
                        x = l ? Zb(d, v, l) : b;
                    if (a >= 200 && 300 > a || 304 === a)
                        if (d.ifModified && ((y = v.getResponseHeader("Last-Modified")) && (f.lastModified[k] = y), (z = v.getResponseHeader("Etag")) && (f.etag[k] = z)), 304 === a) w = "notmodified", o = !0;
                        else try {
                            r = $b(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        } else u = w, (!w || a) && (w = "error", 0 > a && (a = 0));
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.resolveWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var k, n, o, p, q, r, t, u, d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f._Deferred(),
                j = d.statusCode || {},
                l = {},
                m = {},
                s = 0,
                v = {
                    "readyState": 0,
                    "setRequestHeader": function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    "getAllResponseHeaders": function () {
                        return 2 === s ? n : null
                    },
                    "getResponseHeader": function (a) {
                        var c;
                        if (2 === s) {
                            if (!o)
                                for (o = {}; c = Db.exec(n);) o[c[1].toLowerCase()] = c[2];
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    "overrideMimeType": function (a) {
                        return s || (d.mimeType = a), this
                    },
                    "abort": function (a) {
                        return a = a || "abort", p && p.abort(a), w(0, a), this
                    }
                };
            if (h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.done, v.statusCode = function (a) {
                    if (a) {
                        var b;
                        if (2 > s)
                            for (b in a) j[b] = [j[b], a[b]];
                        else b = a[v.status], v.then(b, b)
                    }
                    return this
                }, d.url = ((a || d.url) + "").replace(Cb, "").replace(Hb, Sb[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(Lb), null == d.crossDomain && (r = Nb.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == Sb[1] && r[2] == Sb[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (Sb[3] || ("http:" === Sb[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = f.param(d.data, d.traditional)), Wb(Pb, d, c, v), 2 === s) return !1;
            if (t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Gb.test(d.type), t && 0 === f.active++ && f.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (Ib.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url, d.cache === !1)) {
                var x = f.now(),
                    y = d.url.replace(Mb, "$1_=" + x);
                d.url = y + (y === d.url ? (Ib.test(d.url) ? "&" : "?") + "_=" + x : "")
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Tb + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || 2 === s)) return v.abort(), !1;
            for (u in {
                    "success": 1,
                    "error": 1,
                    "complete": 1
                }) v[u](d[u]);
            if (p = Wb(Qb, d, c, v)) {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    2 > s ? w(-1, z) : f.error(z)
                }
            } else w(-1, "No Transport");
            return v
        },
        "param": function (a, c) {
            var d = [],
                e = function (a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (c === b && (c = f.ajaxSettings.traditional), f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
                e(this.name, this.value)
            });
            else
                for (var g in a) Yb(g, a[g], c, e);
            return d.join("&").replace(zb, "+")
        }
    }), f.extend({
        "active": 0,
        "lastModified": {},
        "etag": {}
    });
    var ac = (f.now(), /(\=)\?(&|$)|\?\?/i);
    f.ajaxSetup({
        "jsonp": "callback",
        "jsonpCallback": function () {
            return "jQuery" + Math.floor(1e7 * Math.random())
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = "application/x-www-form-urlencoded" === b.contentType && "string" == typeof b.data;
        if ("jsonp" === b.dataTypes[0] || b.jsonp !== !1 && (ac.test(b.url) || e && ac.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            return b.jsonp !== !1 && (j = j.replace(ac, l), b.url === j && (e && (k = k.replace(ac, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                return g || f.error(h + " was not called"), g[0]
            }, b.dataTypes[0] = "json", "script"
        }
    }), f.ajaxSetup({
        "accepts": {
            "script": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        "contents": {
            "script": /javascript|ecmascript/
        },
        "converters": {
            "text script": function (a) {
                return f.globalEval(a), a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                "send": function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        (c || !d.readyState || /loaded|complete/.test(d.readyState)) && (d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success"))
                    }, e.insertBefore(d, e.firstChild)
                },
                "abort": function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var dc, bc = a.ActiveXObject ? function () {
            for (var a in dc) dc[a](0, 1)
        } : !1,
        cc = 0;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
            return !this.isLocal && ec() || fc()
        } : ec,
        function (a) {
            f.extend(f.support, {
                "ajax": !!a,
                "cors": !!a && "withCredentials" in a
            })
        }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
            if (!c.crossDomain || f.support.cors) {
                var d;
                return {
                    "send": function (e, g) {
                        var i, j, h = c.xhr();
                        if (c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async), c.xhrFields)
                            for (j in c.xhrFields) h[j] = c.xhrFields[j];
                        c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (j in e) h.setRequestHeader(j, e[j])
                        } catch (k) {}
                        h.send(c.hasContent && c.data || null), d = function (a, e) {
                            var j, k, l, m, n;
                            try {
                                if (d && (e || 4 === h.readyState))
                                    if (d = b, i && (h.onreadystatechange = f.noop, bc && delete dc[i]), e) 4 !== h.readyState && h.abort();
                                    else {
                                        j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                        try {
                                            k = h.statusText
                                        } catch (o) {
                                            k = ""
                                        }
                                        j || !c.isLocal || c.crossDomain ? 1223 === j && (j = 204) : j = m.text ? 200 : 404
                                    }
                            } catch (p) {
                                e || g(-1, p)
                            }
                            m && g(j, k, m, l)
                        }, c.async && 4 !== h.readyState ? (i = ++cc, bc && (dc || (dc = {}, f(a).unload(bc)), dc[i] = d), h.onreadystatechange = d) : d()
                    },
                    "abort": function () {
                        d && d(0, 1)
                    }
                }
            }
        });
    var hc, ic, lc, nc, gc = {},
        jc = /^(?:toggle|show|hide)$/,
        kc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        mc = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    f.fn.extend({
        "show": function (a, b, c) {
            var d, e;
            if (a || 0 === a) return this.animate(qc("show", 3), a, b, c);
            for (var g = 0, h = this.length; h > g; g++) d = this[g], d.style && (e = d.style.display, f._data(d, "olddisplay") || "none" !== e || (e = d.style.display = ""), "" === e && "none" === f.css(d, "display") && f._data(d, "olddisplay", rc(d.nodeName)));
            for (g = 0; h > g; g++) d = this[g], d.style && (e = d.style.display, ("" === e || "none" === e) && (d.style.display = f._data(d, "olddisplay") || ""));
            return this
        },
        "hide": function (a, b, c) {
            if (a || 0 === a) return this.animate(qc("hide", 3), a, b, c);
            for (var d = 0, e = this.length; e > d; d++)
                if (this[d].style) {
                    var g = f.css(this[d], "display");
                    "none" === g || f._data(this[d], "olddisplay") || f._data(this[d], "olddisplay", g)
                } for (d = 0; e > d; d++) this[d].style && (this[d].style.display = "none");
            return this
        },
        "_toggle": f.fn.toggle,
        "toggle": function (a, b, c) {
            var d = "boolean" == typeof a;
            return f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(qc("toggle", 3), a, b, c), this
        },
        "fadeTo": function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                "opacity": b
            }, a, c, d)
        },
        "animate": function (a, b, c, d) {
            var e = f.speed(b, c, d);
            return f.isEmptyObject(a) ? this.each(e.complete, [!1]) : (a = f.extend({}, a), this[e.queue === !1 ? "each" : "queue"](function () {
                e.queue === !1 && f._mark(this);
                var g, h, i, j, k, l, m, n, o, b = f.extend({}, e),
                    c = 1 === this.nodeType,
                    d = c && f(this).is(":hidden");
                b.animatedProperties = {};
                for (i in a) {
                    if (g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing", "hide" === h && d || "show" === h && !d) return b.complete.call(this);
                    !c || "height" !== g && "width" !== g || (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === f.css(this, "display") && "none" === f.css(this, "float") && (f.support.inlineBlockNeedsLayout ? (j = rc(this.nodeName), "inline" === j ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                }
                null != b.overflow && (this.style.overflow = "hidden");
                for (i in a) k = new f.fx(this, b, i), h = a[i], jc.test(h) ? k["toggle" === h ? d ? "show" : "hide" : h]() : (l = kc.exec(h), m = k.cur(), l ? (n = parseFloat(l[2]), o = l[3] || (f.cssNumber[i] ? "" : "px"), "px" !== o && (f.style(this, i, (n || 1) + o), m = (n || 1) / k.cur() * m, f.style(this, i, m + o)), l[1] && (n = ("-=" === l[1] ? -1 : 1) * n + m), k.custom(m, n, o)) : k.custom(m, h, ""));
                return !0
            }))
        },
        "stop": function (a, b) {
            return a && this.queue([]), this.each(function () {
                var a = f.timers,
                    c = a.length;
                for (b || f._unmark(!0, this); c--;) a[c].elem === this && (b && a[c](!0), a.splice(c, 1))
            }), b || this.dequeue(), this
        }
    }), f.each({
        "slideDown": qc("show", 1),
        "slideUp": qc("hide", 1),
        "slideToggle": qc("toggle", 1),
        "fadeIn": {
            "opacity": "show"
        },
        "fadeOut": {
            "opacity": "hide"
        },
        "fadeToggle": {
            "opacity": "toggle"
        }
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        "speed": function (a, b, c) {
            var d = a && "object" == typeof a ? f.extend({}, a) : {
                "complete": c || !c && b || f.isFunction(a) && a,
                "duration": a,
                "easing": c && b || b && !f.isFunction(b) && b
            };
            return d.duration = f.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default, d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue !== !1 ? f.dequeue(this) : a !== !1 && f._unmark(this)
            }, d
        },
        "easing": {
            "linear": function (a, b, c, d) {
                return c + d * a
            },
            "swing": function (a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        "timers": [],
        "fx": function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        "update": function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        "cur": function () {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a
        },
        "custom": function (a, b, c) {
            function g(a) {
                return d.step(a)
            }
            var d = this,
                e = f.fx;
            this.startTime = nc || oc(), this.start = a, this.end = b, this.unit = c || this.unit || (f.cssNumber[this.prop] ? "" : "px"), this.now = this.start, this.pos = this.state = 0, g.elem = this.elem, g() && f.timers.push(g) && !lc && (lc = setInterval(e.tick, e.interval))
        },
        "show": function () {
            this.options.orig[this.prop] = f.style(this.elem, this.prop), this.options.show = !0, this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), f(this.elem).show()
        },
        "hide": function () {
            this.options.orig[this.prop] = f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        "step": function (a) {
            var g, h, b = nc || oc(),
                c = !0,
                d = this.elem,
                e = this.options;
            if (a || b >= e.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), e.animatedProperties[this.prop] = !0;
                for (g in e.animatedProperties) e.animatedProperties[g] !== !0 && (c = !1);
                if (c) {
                    if (null == e.overflow || f.support.shrinkWrapBlocks || f.each(["", "X", "Y"], function (a, b) {
                            d.style["overflow" + b] = e.overflow[a]
                        }), e.hide && f(d).hide(), e.hide || e.show)
                        for (var i in e.animatedProperties) f.style(d, i, e.orig[i]);
                    e.complete.call(d)
                }
                return !1
            }
            return 1 / 0 == e.duration ? this.now = b : (h = b - this.startTime, this.state = h / e.duration, this.pos = f.easing[e.animatedProperties[this.prop]](this.state, h, 0, 1, e.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, f.extend(f.fx, {
        "tick": function () {
            for (var a = f.timers, b = 0; b < a.length; ++b) a[b]() || a.splice(b--, 1);
            a.length || f.fx.stop()
        },
        "interval": 13,
        "stop": function () {
            clearInterval(lc), lc = null
        },
        "speeds": {
            "slow": 600,
            "fast": 200,
            "_default": 400
        },
        "step": {
            "opacity": function (a) {
                f.style(a.elem, "opacity", a.now)
            },
            "_default": function (a) {
                a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = ("width" === a.prop || "height" === a.prop ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var sc = /^t(?:able|d|h)$/i,
        tc = /^(?:body|html)$/i;
    f.fn.offset = "getBoundingClientRect" in c.documentElement ? function (a) {
        var c, b = this[0];
        if (a) return this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect()
        } catch (d) {}
        var e = b.ownerDocument,
            g = e.documentElement;
        if (!c || !f.contains(g, b)) return c ? {
            "top": c.top,
            "left": c.left
        } : {
            "top": 0,
            "left": 0
        };
        var h = e.body,
            i = uc(e),
            j = g.clientTop || h.clientTop || 0,
            k = g.clientLeft || h.clientLeft || 0,
            l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
            m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft,
            n = c.top + l - j,
            o = c.left + m - k;
        return {
            "top": n,
            "left": o
        }
    } : function (a) {
        var b = this[0];
        if (a) return this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        f.offset.initialize();
        for (var c, d = b.offsetParent, e = b, g = b.ownerDocument, h = g.documentElement, i = g.body, j = g.defaultView, k = j ? j.getComputedStyle(b, null) : b.currentStyle, l = b.offsetTop, m = b.offsetLeft;
            (b = b.parentNode) && b !== i && b !== h && (!f.offset.supportsFixedPosition || "fixed" !== k.position);) c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, !f.offset.doesNotAddBorder || f.offset.doesAddBorderForTableAndCells && sc.test(b.nodeName) || (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.offset.subtractsBorderForOverflowNotVisible && "visible" !== c.overflow && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c;
        return ("relative" === k.position || "static" === k.position) && (l += i.offsetTop, m += i.offsetLeft), f.offset.supportsFixedPosition && "fixed" === k.position && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft)), {
            "top": l,
            "left": m
        }
    }, f.offset = {
        "initialize": function () {
            var d, e, h, a = c.body,
                b = c.createElement("div"),
                i = parseFloat(f.css(a, "marginTop")) || 0,
                j = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            f.extend(b.style, {
                "position": "absolute",
                "top": 0,
                "left": 0,
                "margin": 0,
                "border": 0,
                "width": "1px",
                "height": "1px",
                "visibility": "hidden"
            }), b.innerHTML = j, a.insertBefore(b, a.firstChild), d = b.firstChild, e = d.firstChild, h = d.nextSibling.firstChild.firstChild, this.doesNotAddBorder = 5 !== e.offsetTop, this.doesAddBorderForTableAndCells = 5 === h.offsetTop, e.style.position = "fixed", e.style.top = "20px", this.supportsFixedPosition = 20 === e.offsetTop || 15 === e.offsetTop, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", this.subtractsBorderForOverflowNotVisible = -5 === e.offsetTop, this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== i, a.removeChild(b), f.offset.initialize = f.noop
        },
        "bodyOffset": function (a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return f.offset.initialize(), f.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0), {
                "top": b,
                "left": c
            }
        },
        "setOffset": function (a, b, c) {
            var d = f.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var m, n, e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = ("absolute" === d || "fixed" === d) && f.inArray("auto", [h, i]) > -1,
                k = {},
                l = {};
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), null != b.top && (k.top = b.top - g.top + m), null != b.left && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        "position": function () {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = tc.test(b[0].nodeName) ? {
                    "top": 0,
                    "left": 0
                } : b.offset();
            return c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0, {
                "top": c.top - d.top,
                "left": c.left - d.left
            }
        },
        "offsetParent": function () {
            return this.map(function () {
                for (var a = this.offsetParent || c.body; a && !tc.test(a.nodeName) && "static" === f.css(a, "position");) a = a.offsetParent;
                return a
            })
        }
    }), f.each(["Left", "Top"], function (a, c) {
        var d = "scroll" + c;
        f.fn[d] = function (c) {
            var e, g;
            return c === b ? (e = this[0]) ? (g = uc(e), g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]) : null : this.each(function () {
                g = uc(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
            })
        }
    }), f.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function () {
            var a = this[0];
            return a && a.style ? parseFloat(f.css(a, d, "padding")) : null
        }, f.fn["outer" + c] = function (a) {
            var b = this[0];
            return b && b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : null
        }, f.fn[d] = function (a) {
            var e = this[0];
            if (!e) return null == a ? null : this;
            if (f.isFunction(a)) return this.each(function (b) {
                var c = f(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c],
                    h = e.document.body;
                return "CSS1Compat" === e.document.compatMode && g || h && h["client" + c] || g
            }
            if (9 === e.nodeType) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var i = f.css(e, d),
                    j = parseFloat(i);
                return f.isNaN(j) ? i : j
            }
            return this.css(d, "string" == typeof a ? a : a + "px")
        }
    }), a.jQuery = a.$ = f
}(window);
var o2 = o2 || {};
o2.detect = {
    browser: function () {
        var ua = navigator.userAgent.toLowerCase(),
            opera = window.opera,
            result = {
                engine: 0,
                system: 0,
                browser: 0,
                version: 0
            },
            systemList = {},
            ieBrowserList = {},
            engineList = {},
            i;
        systemList = {
            macintosh: ua.indexOf("macintosh") > -1,
            windows: ua.indexOf("windows") > -1,
            linux: ua.indexOf("linux") > -1,
            android: ua.indexOf("android") > -1,
            ipad: ua.indexOf("ipad") > -1,
            iphone: ua.indexOf("iphone") > -1
        };
        ieBrowserList = {
            ie6: !window.XMLHttpRequest || engineList.quirk,
            ie7: /msie 7/i.test(ua),
            ie8: document.documentMode == 8,
            ie9: document.documentMode == 9,
            ie10: document.documentMode == 10,
            ie11: document.documentMode == 11
        };
        engineList = {
            ie: /msie/i.test(ua),
            quirk: document.compatMode == "BackCompat",
            webkit: ua.indexOf(" applewebkit/") > -1,
            opera: (!!opera && opera.version),
            gecko: navigator.product == "Gecko" && !engineList.webkit && !engineList.opera
        };
        if (engineList.ie) {
            for (i in ieBrowserList) {
                if (ieBrowserList[i]) {
                    result.engine = "ie";
                    result.browser = i;
                    result.version = /msie 7/i.test(ua) ? 7 : document.documentMode;
                    getSystem();
                    return result
                }
            }
        }
        if (engineList.webkit) {
            if (ua.indexOf("safari") > -1) {
                if (ua.indexOf("chrome") > -1) {
                    result.browser = "chrome";
                    result.version = "latest"
                } else {
                    result.browser = "safari";
                    result.version = parseInt(ua.match(/ applewebkit\/(\d+)/)[1])
                }
            } else {
                result.browser = "webkit";
                result.version = "unknown"
            }
            result.engine = "webkit";
            getSystem();
            return result
        }
        if (engineList.opera) {
            result.engine = "opera";
            result.browser = "opera";
            result.version = parseInt(opera.version());
            getSystem();
            return result
        }
        if (engineList.gecko) {
            if (ua.indexOf("firefox") > -1) {
                result.browser = "firefox";
                result.version = ua.match(/rv:(\d+)/)[1]
            } else {
                result.browser = "unknown";
                result.version = "unknown"
            }
            result.engine = "gecko";
            getSystem();
            return result
        }
        return result;

        function getSystem() {
            var i;
            for (i in systemList) {
                if (systemList[i]) {
                    result.system = i
                }
            }
        }
    },
    css3test: function (prop) {
        var div = document.createElement("div"),
            vendors = "Khtml Ms O Moz Webkit".split(" "),
            len = vendors.length - 1;
        if (prop in div.style) {
            return true
        }
        prop = prop.replace(/^[a-z]/, function (val) {
            return val.toUpperCase()
        });
        len = vendors.length - 1;
        while (len >= 0) {
            if (vendors[len] + prop in div.style) {
                return true
            }
            len--
        }
        return false
    }
};
o2.init = function () {
    var browser = o2.detect.browser();
    var cssTest = o2.detect.css3test("transition") ? ("csstransitions") : ("no-csstransitions");
    cssTest = o2.detect.css3test("animation") ? (cssTest + " cssanimations") : (cssTest + " no-cssanimations");
    var classList = [];
    classList.push(cssTest, browser.engine, browser.browser, browser.version);
    $("html").addClass(classList.join(" o2_"))
};
o2.init();
! function (t) {
    "use strict";

    function e(t, e, n) {
        var i;
        return i = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
            t.apply(this, arguments)
        }, $.extend(i, t), s.prototype = t.prototype, i.prototype = new s, e && $.extend(i.prototype, e), n && $.extend(i, n), i.prototype.constructor = i, i.__super__ = t.prototype, i
    }

    function n(t, n) {
        var i = e(this, t, n);
        return i.extend = this.extend, i
    }

    function i(t) {
        "undefined" != typeof t && t.callbacks ? this.callbacks = t.callbacks : this.callbacks = {}
    }
    var c = /\s+/,
        r = [].slice,
        o = t._ || (t._ = {}),
        s = function () {};
    i.extend = n, i.prototype = {
        on: function (t, e, n) {
            var i, r, o, s, a;
            if (!e) return this;
            for (t = t.split(c), i = this.callbacks; r = t.shift();) a = i[r], o = a ? a.tail : {}, o.next = s = {}, o.context = n, o.callback = e, i[r] = {
                tail: s,
                next: a ? a.next : o
            };
            return this
        },
        off: function (t, e, n) {
            var i, r, s, a, l, f;
            if (r = this.callbacks) {
                if (!(t || e || n)) return delete this.callbacks, this;
                for (t = t ? t.split(c) : o.keys(r); i = t.shift();)
                    if (s = r[i], delete r[i], s && (e || n))
                        for (a = s.tail;
                            (s = s.next) !== a;) l = s.callback, f = s.context, (e && l !== e || n && f !== n) && this.on(i, l, f);
                return this
            }
        },
        trigger: function (t) {
            var e, n, i, o, s, a, l;
            if (!(i = this.callbacks)) return this;
            for (a = i.all, t = t.split(c), l = r.call(arguments, 1); e = t.shift();) {
                if (n = i[e])
                    for (o = n.tail;
                        (n = n.next) !== o;) n.callback.apply(n.context || this, l);
                if (n = a)
                    for (o = n.tail, s = [e].concat(l);
                        (n = n.next) !== o;) n.callback.apply(n.context || this, s)
            }
            return this
        }
    }, o.Events = i, o.eventCenter = new i
}(window, void 0);
var base_library = function (e) {
    function __webpack_require__(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, __webpack_require__), r.l = !0, r.exports
    }
    var t = {};
    return __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function (e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, __webpack_require__.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    }, __webpack_require__.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 1)
}([function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (r) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    e.exports = n
}, function (e, t, n) {
    "use strict";

    function assign(e, t) {
        if (e === undefined || null === e) throw new TypeError("Cannot convert first argument to object");
        for (var n = Object(e), r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            if (o !== undefined && null !== o)
                for (var i = Object.keys(Object(o)), a = 0, s = i.length; a < s; a++) {
                    var u = i[a],
                        l = Object.getOwnPropertyDescriptor(o, u);
                    l !== undefined && l.enumerable && (n[u] = o[u])
                }
        }
        return n
    }

    function polyfill() {
        Object.assign || Object.defineProperty(Object, "assign", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: assign
        })
    }
    e.exports = {
        assign: assign,
        polyfill: polyfill
    }
}, function (e, t, n) {
    (function (t, r) {
        ! function (t, n) {
            e.exports = n()
        }(0, function () {
            "use strict";

            function objectOrFunction(e) {
                var t = typeof e;
                return null !== e && ("object" === t || "function" === t)
            }

            function isFunction(e) {
                return "function" == typeof e
            }

            function setScheduler(e) {
                s = e
            }

            function setAsap(e) {
                u = e
            }

            function useVertxTimer() {
                return void 0 !== a ? function () {
                    a(flush)
                } : useSetTimeout()
            }

            function useSetTimeout() {
                var e = setTimeout;
                return function () {
                    return e(flush, 1)
                }
            }

            function flush() {
                for (var e = 0; e < i; e += 2) {
                    (0, h[e])(h[e + 1]), h[e] = undefined, h[e + 1] = undefined
                }
                i = 0
            }

            function then(e, t) {
                var n = arguments,
                    r = this,
                    o = new this.constructor(noop);
                o[v] === undefined && makePromise(o);
                var i = r._state;
                return i ? function () {
                    var e = n[i - 1];
                    u(function () {
                        return invokeCallback(i, o, e, r._result)
                    })
                }() : subscribe(r, o, e, t), o
            }

            function resolve$1(e) {
                var t = this;
                if (e && "object" == typeof e && e.constructor === t) return e;
                var n = new t(noop);
                return resolve(n, e), n
            }

            function noop() {}

            function selfFulfillment() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function cannotReturnOwn() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function getThen(e) {
                try {
                    return e.then
                } catch (t) {
                    return C.error = t, C
                }
            }

            function tryThen(e, t, n, r) {
                try {
                    e.call(t, n, r)
                } catch (o) {
                    return o
                }
            }

            function handleForeignThenable(e, t, n) {
                u(function (e) {
                    var r = !1,
                        o = tryThen(n, t, function (n) {
                            r || (r = !0, t !== n ? resolve(e, n) : fulfill(e, n))
                        }, function (t) {
                            r || (r = !0, reject(e, t))
                        }, "Settle: " + (e._label || " unknown promise"));
                    !r && o && (r = !0, reject(e, o))
                }, e)
            }

            function handleOwnThenable(e, t) {
                t._state === g ? fulfill(e, t._result) : t._state === b ? reject(e, t._result) : subscribe(t, undefined, function (t) {
                    return resolve(e, t)
                }, function (t) {
                    return reject(e, t)
                })
            }

            function handleMaybeThenable(e, t, n) {
                t.constructor === e.constructor && n === then && t.constructor.resolve === resolve$1 ? handleOwnThenable(e, t) : n === C ? (reject(e, C.error), C.error = null) : n === undefined ? fulfill(e, t) : isFunction(n) ? handleForeignThenable(e, t, n) : fulfill(e, t)
            }

            function resolve(e, t) {
                e === t ? reject(e, selfFulfillment()) : objectOrFunction(t) ? handleMaybeThenable(e, t, getThen(t)) : fulfill(e, t)
            }

            function publishRejection(e) {
                e._onerror && e._onerror(e._result), publish(e)
            }

            function fulfill(e, t) {
                e._state === y && (e._result = t, e._state = g, 0 !== e._subscribers.length && u(publish, e))
            }

            function reject(e, t) {
                e._state === y && (e._state = b, e._result = t, u(publishRejection, e))
            }

            function subscribe(e, t, n, r) {
                var o = e._subscribers,
                    i = o.length;
                e._onerror = null, o[i] = t, o[i + g] = n, o[i + b] = r, 0 === i && e._state && u(publish, e)
            }

            function publish(e) {
                var t = e._subscribers,
                    n = e._state;
                if (0 !== t.length) {
                    for (var r = undefined, o = undefined, i = e._result, a = 0; a < t.length; a += 3) r = t[a], o = t[a + n], r ? invokeCallback(n, r, o, i) : o(i);
                    e._subscribers.length = 0
                }
            }

            function ErrorObject() {
                this.error = null
            }

            function tryCatch(e, t) {
                try {
                    return e(t)
                } catch (n) {
                    return _.error = n, _
                }
            }

            function invokeCallback(e, t, n, r) {
                var o = isFunction(n),
                    i = undefined,
                    a = undefined,
                    s = undefined,
                    u = undefined;
                if (o) {
                    if (i = tryCatch(n, r), i === _ ? (u = !0, a = i.error, i.error = null) : s = !0, t === i) return void reject(t, cannotReturnOwn())
                } else i = r, s = !0;
                t._state !== y || (o && s ? resolve(t, i) : u ? reject(t, a) : e === g ? fulfill(t, i) : e === b && reject(t, i))
            }

            function initializePromise(e, t) {
                try {
                    t(function (t) {
                        resolve(e, t)
                    }, function (t) {
                        reject(e, t)
                    })
                } catch (n) {
                    reject(e, n)
                }
            }

            function nextId() {
                return k++
            }

            function makePromise(e) {
                e[v] = k++, e._state = undefined, e._result = undefined, e._subscribers = []
            }

            function Enumerator$1(e, t) {
                this._instanceConstructor = e, this.promise = new e(noop), this.promise[v] || makePromise(this.promise), o(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? fulfill(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && fulfill(this.promise, this._result))) : reject(this.promise, validationError())
            }

            function validationError() {
                return new Error("Array Methods must be provided an Array")
            }

            function all$1(e) {
                return new Enumerator$1(this, e).promise
            }

            function race$1(e) {
                var t = this;
                return new t(o(e) ? function (n, r) {
                    for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r)
                } : function (e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }

            function reject$1(e) {
                var t = this,
                    n = new t(noop);
                return reject(n, e), n
            }

            function needsResolver() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function needsNew() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function Promise$2(e) {
                this[v] = nextId(), this._result = this._state = undefined, this._subscribers = [], noop !== e && ("function" != typeof e && needsResolver(), this instanceof Promise$2 ? initializePromise(this, e) : needsNew())
            }

            function polyfill$1() {
                var e = undefined;
                if (void 0 !== r) e = r;
                else if ("undefined" != typeof self) e = self;
                else try {
                    e = Function("return this")()
                } catch (o) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var n = null;
                    try {
                        n = Object.prototype.toString.call(t.resolve())
                    } catch (o) {}
                    if ("[object Promise]" === n && !t.cast) return
                }
                e.Promise = Promise$2
            }
            var e = undefined;
            e = Array.isArray ? Array.isArray : function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            var o = e,
                i = 0,
                a = undefined,
                s = undefined,
                u = function (e, t) {
                    h[i] = e, h[i + 1] = t, 2 === (i += 2) && (s ? s(flush) : m())
                },
                l = "undefined" != typeof window ? window : undefined,
                c = l || {},
                p = c.MutationObserver || c.WebKitMutationObserver,
                f = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                h = new Array(1e3),
                m = undefined;
            m = f ? function () {
                return function () {
                    return t.nextTick(flush)
                }
            }() : p ? function () {
                var e = 0,
                    t = new p(flush),
                    n = document.createTextNode("");
                return t.observe(n, {
                        characterData: !0
                    }),
                    function () {
                        n.data = e = ++e % 2
                    }
            }() : d ? function () {
                var e = new MessageChannel;
                return e.port1.onmessage = flush,
                    function () {
                        return e.port2.postMessage(0)
                    }
            }() : l === undefined ? function () {
                try {
                    var e = n(5);
                    return a = e.runOnLoop || e.runOnContext, useVertxTimer()
                } catch (t) {
                    return useSetTimeout()
                }
            }() : useSetTimeout();
            var v = Math.random().toString(36).substring(16),
                y = void 0,
                g = 1,
                b = 2,
                C = new ErrorObject,
                _ = new ErrorObject,
                k = 0;
            return Enumerator$1.prototype._enumerate = function (e) {
                for (var t = 0; this._state === y && t < e.length; t++) this._eachEntry(e[t], t)
            }, Enumerator$1.prototype._eachEntry = function (e, t) {
                var n = this._instanceConstructor,
                    r = n.resolve;
                if (r === resolve$1) {
                    var o = getThen(e);
                    if (o === then && e._state !== y) this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof o) this._remaining--, this._result[t] = e;
                    else if (n === Promise$2) {
                        var i = new n(noop);
                        handleMaybeThenable(i, e, o), this._willSettleAt(i, t)
                    } else this._willSettleAt(new n(function (t) {
                        return t(e)
                    }), t)
                } else this._willSettleAt(r(e), t)
            }, Enumerator$1.prototype._settledAt = function (e, t, n) {
                var r = this.promise;
                r._state === y && (this._remaining--, e === b ? reject(r, n) : this._result[t] = n), 0 === this._remaining && fulfill(r, this._result)
            }, Enumerator$1.prototype._willSettleAt = function (e, t) {
                var n = this;
                subscribe(e, undefined, function (e) {
                    return n._settledAt(g, t, e)
                }, function (e) {
                    return n._settledAt(b, t, e)
                })
            }, Promise$2.all = all$1, Promise$2.race = race$1, Promise$2.resolve = resolve$1, Promise$2.reject = reject$1, Promise$2._setScheduler = setScheduler, Promise$2._setAsap = setAsap, Promise$2._asap = u, Promise$2.prototype = {
                constructor: Promise$2,
                then: then,
                "catch": function (e) {
                    return this.then(null, e)
                }
            }, Promise$2.polyfill = polyfill$1, Promise$2.Promise = Promise$2, Promise$2
        })
    }).call(t, n(4), n(0))
}, function (e, t) {
    function defaultSetTimout() {
        throw new Error("setTimeout has not been defined")
    }

    function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined")
    }

    function runTimeout(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === defaultSetTimout || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }

    function runClearTimeout(e) {
        if (r === clearTimeout) return clearTimeout(e);
        if ((r === defaultClearTimeout || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
        try {
            return r(e)
        } catch (t) {
            try {
                return r.call(null, e)
            } catch (t) {
                return r.call(this, e)
            }
        }
    }

    function cleanUpNextTick() {
        s && i && (s = !1, i.length ? a = i.concat(a) : u = -1, a.length && drainQueue())
    }

    function drainQueue() {
        if (!s) {
            var e = runTimeout(cleanUpNextTick);
            s = !0;
            for (var t = a.length; t;) {
                for (i = a, a = []; ++u < t;) i && i[u].run();
                u = -1, t = a.length
            }
            i = null, s = !1, runClearTimeout(e)
        }
    }

    function Item(e, t) {
        this.fun = e, this.array = t
    }

    function noop() {}
    var n, r, o = e.exports = {};
    ! function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
        } catch (e) {
            n = defaultSetTimout
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
        } catch (e) {
            r = defaultClearTimeout
        }
    }();
    var i, a = [],
        s = !1,
        u = -1;
    o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        a.push(new Item(e, t)), 1 !== a.length || s || runTimeout(drainQueue)
    }, Item.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = noop, o.addListener = noop, o.once = noop, o.off = noop, o.removeListener = noop, o.removeAllListeners = noop, o.emit = noop, o.prependListener = noop, o.prependOnceListener = noop, o.listeners = function (e) {
        return []
    }, o.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function () {
        return "/"
    }, o.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function () {
        return 0
    }
}, function (e, t) {}, function (e, t, n) {
    (function (t) {
        ! function (t, n) {
            e.exports = n()
        }(0, function () {
            "use strict";

            function toObject(e) {
                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }

            function serializeParams(e) {
                return e ? Object.keys(e).map(function (t) {
                    return t + "=" + i(e[t])
                }).join("&") : ""
            }

            function isFunction(e) {
                return "function" == typeof e
            }

            function getUrlQueryParamByName(e, t) {
                e || (e = window.location.href), t = t.replace(/[[]]/g, "\\$&");
                var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)"),
                    r = n.exec(e);
                return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
            }

            function updateQueryStringParamByName(e, t, n) {
                var r = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
                    o = -1 !== e.indexOf("?") ? "&" : "?";
                return e.match(r) ? e.replace(r, "$1" + t + "=" + n + "$2") : e + o + t + "=" + n
            }

            function jsonp$1(e, t, n) {
                if (isFunction(e) ? (n = e, t = {}) : e && "object" === (void 0 === e ? "undefined" : l(e)) && (n = t, t = e || {}, e = t.url), isFunction(t) && (n = t, t = {}), t || (t = {}), t = o({}, y, t), e = e || t.url, n = n || f, e && "string" == typeof e) {
                    var r = generateJsonpUrlWithParams(e, t.params),
                        i = getDataFromStore({
                            useStore: t.useStore,
                            storeKey: r,
                            storeCheck: t.storeCheck,
                            storeCheckKey: t.storeCheckKey,
                            storeSign: t.storeSign,
                            dataCheck: t.dataCheck
                        });
                    if (i) {
                        if (n(null, i), !jsonp$1.promiseClose && p) return new Promise(function (e) {
                            return e(i)
                        })
                    } else {
                        if (t.originalUrl = r, !jsonp$1.promiseClose && p) return new Promise(function (e, o) {
                            fetchData(r, t, function (t, r) {
                                if (t) return n(t), o(t);
                                n(null, r), e(r)
                            })
                        });
                        fetchData(r, t, n)
                    }
                } else if (n(new Error("Param url is needed!")), !jsonp$1.promiseClose && p) return new Promise(function (e, t) {
                    return t(new Error("Param url is needed!"))
                })
            }

            function generateJsonpUrlWithParams(e, t) {
                return t = "string" == typeof t ? t : serializeParams(t), e += (~e.indexOf("?") ? "&" : "?") + t, e = e.replace("?&", "?")
            }

            function fetchData(e, t, n) {
                function cleanup(e) {
                    l.parentNode && l.parentNode.removeChild(l), c[e] = f, clearTimeout(c["timer_" + e])
                }
                var r = t.originalUrl,
                    o = t.charset,
                    i = t.name || "__jsonp" + g++,
                    a = getUrlQueryParamByName(e, t.jsonp),
                    s = arguments[3] || null;
                a ? "?" === a && (e = updateQueryStringParamByName(e, t.jsonp, d(i))) : e += ("&" === e.split("").pop() ? "" : "&") + t.jsonp + "=" + d(i), t.cache || (e += "&_=" + (new Date).getTime()), clearTimeout(c["timer_" + i]);
                var u = c[i];
                c[i] = function (e) {
                    if (u && u(e), cleanup(i), s && (e.__$$backupCall = s), t.dataCheck) {
                        if (!1 !== t.dataCheck(e)) return setDataToStore({
                            useStore: t.useStore,
                            storeKey: r,
                            data: e
                        }), n(null, e);
                        !1 === fallback(r, t, n) && n(new Error("Data check error, and no fallback"))
                    } else setDataToStore({
                        useStore: t.useStore,
                        storeKey: r,
                        data: e
                    }), n(null, e)
                };
                var l = appendScriptTagToHead({
                        url: e,
                        charset: o
                    }),
                    p = null != t.timeout ? t.timeout : v;
                c["timer_" + i] = setTimeout(function () {
                    return cleanup(i), "number" == typeof t.retryTimes && t.retryTimes > 0 ? (t.retryTimes--, fetchData(r, t, n)) : !1 === fallback(r, t, n) ? n(new Error("Timeout and no data return")) : void 0
                }, p)
            }

            function storeCheckFn(e, t, n) {
                return !!(e && t && n) && (e[t] && e[t] === n)
            }

            function getDataFromStore(e) {
                var t = e.useStore,
                    n = e.storeKey,
                    r = e.storeCheck,
                    o = e.storeCheckKey,
                    i = e.storeSign,
                    a = e.dataCheck;
                if (t = !!t && u.enabled) {
                    var s = u.get(n);
                    if ((r = r || storeCheckFn)(s, o, i) && (!a || s && a && !1 !== a(s))) return s
                }
                return null
            }

            function getDataFromStoreWithoutCheck(e) {
                var t = e.useStore,
                    n = e.storeKey,
                    r = e.dataCheck;
                if (t = !!t && u.enabled) {
                    var o = u.get(n);
                    if (!r || o && r && !1 !== r(o)) return o
                }
                return null
            }

            function setDataToStore(e) {
                var t = e.useStore,
                    n = e.storeKey,
                    r = e.data;
                (t = !!t && u.enabled) && u.set(n, r)
            }

            function fallback(e, t, n) {
                var r = t.backup,
                    o = void 0;
                if (r) {
                    if ("string" == typeof r) return delete t.backup, o = generateJsonpUrlWithParams(r, t.params), fetchData(o, t, n, {
                        backup: r
                    });
                    if (Array.isArray(r) && r.length) {
                        var i = r.shift();
                        return o = generateJsonpUrlWithParams(i, t.params), fetchData(o, t, n, {
                            backup: i
                        })
                    }
                }
                var a = getDataFromStoreWithoutCheck({
                    useStore: t.useStore,
                    storeKey: e,
                    dataCheck: t.dataCheck
                });
                return !!a && (n(null, a), !0)
            }

            function appendScriptTagToHead(e) {
                var t = e.url,
                    n = e.charset;
                if (h) {
                    var r = h.createElement("script");
                    return r.type = "text/javascript", n && (r.charset = n), r.src = t, m.appendChild(r), r
                }
            }
            var e = Object.getOwnPropertySymbols,
                n = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable,
                o = function () {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
                                return t[e]
                            }).join("")) return !1;
                        var r = {};
                        return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                            r[e] = e
                        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                    } catch (o) {
                        return !1
                    }
                }() ? Object.assign : function (t, o) {
                    for (var i, a, s = toObject(t), u = 1; u < arguments.length; u++) {
                        i = Object(arguments[u]);
                        for (var l in i) n.call(i, l) && (s[l] = i[l]);
                        if (e) {
                            a = e(i);
                            for (var c = 0; c < a.length; c++) r.call(i, a[c]) && (s[a[c]] = i[a[c]])
                        }
                    }
                    return s
                },
                i = encodeURIComponent,
                a = "undefined" != typeof window ? window : t,
                s = a["localStorage"],
                u = {
                    disabled: !1,
                    set: function (e, t) {
                        return void 0 === t ? u.remove(e) : (s.setItem(e, u.serialize(t)), t)
                    },
                    get: function (e, t) {
                        var n = u.deserialize(s.getItem(e));
                        return void 0 === n ? t : n
                    },
                    remove: function (e) {
                        s.removeItem(e)
                    },
                    clear: function () {
                        s.clear()
                    },
                    has: function (e) {
                        return void 0 !== u.get(e)
                    },
                    forEach: function (e) {
                        for (var t = 0; t < s.length; t++) {
                            var n = s.key(t);
                            e(n, u.get(n))
                        }
                    },
                    getAll: function () {
                        var e = {};
                        return u.forEach(function (t, n) {
                            e[t] = n
                        }), e
                    },
                    serialize: function (e) {
                        return JSON.stringify(e)
                    },
                    deserialize: function (e) {
                        if ("string" == typeof e) try {
                            return JSON.parse(e)
                        } catch (t) {
                            return e || void 0
                        }
                    }
                };
            try {
                u.set("__store__", "__store__"), "__store__" !== u.get("__store__") && (u.disabled = !0), u.remove("__store__")
            } catch (b) {
                u.disabled = !0
            }
            u.enabled = !u.disabled;
            var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                c = "undefined" != typeof window ? window : t,
                p = function () {
                    return "Promise" in c && l(isFunction(Promise))
                }(),
                f = function () {},
                d = encodeURIComponent,
                h = c.document,
                m = h ? h.head || h.getElementsByTagName("head")[0] : null,
                v = 2e3,
                y = {
                    timeout: v,
                    retryTimes: 2,
                    backup: null,
                    params: {},
                    jsonp: "callback",
                    name: null,
                    cache: !1,
                    useStore: !1,
                    storeCheck: null,
                    storeSign: null,
                    storeCheckKey: null,
                    dataCheck: null,
                    charset: "UTF-8"
                },
                g = (new Date).getTime();
            return jsonp$1
        })
    }).call(t, n(0))
}, function (e, t, n) {
    e.exports = n(8)["default"], e.exports["default"] = e.exports
}, function (e, t, n) {
    "use strict";

    function noop() {}

    function isNumber(e) {
        return "number" == typeof e
    }

    function isString(e) {
        return "string" == typeof e
    }

    function isFunction(e) {
        return "function" == typeof e
    }

    function isBoolean(e) {
        return !0 === e || !1 === e
    }

    function isUndefined(e) {
        return e === undefined
    }

    function shallowEqual(e, t) {
        if (null === e || null === t) return !1;
        if (Object.is(e, t)) return !0;
        var n = e ? Object.keys(e) : [],
            r = t ? Object.keys(t) : [];
        if (n.length !== r.length) return !1;
        for (var o = 0; o < n.length; o++) {
            var i = n[o];
            if (!t.hasOwnProperty(i) || !Object.is(e[i], t[i])) return !1
        }
        return !0
    }

    function isAttrAnEvent(e) {
        return "o" === e[0] && "n" === e[1]
    }

    function extend(e, t) {
        if (!t) return e;
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }

    function clone(e) {
        return extend({}, e)
    }

    function isNullOrUndef(e) {
        return e === undefined || null === e
    }

    function isInvalid(e) {
        return isNullOrUndef(e) || !0 === e || !1 === e
    }

    function isVNode(e) {
        return !isNullOrUndef(e) && 2 === e.vtype
    }

    function isVText(e) {
        return !isNullOrUndef(e) && 1 === e.vtype
    }

    function isComponent(e) {
        return !isInvalid(e) && e.isReactComponent === g
    }

    function isPortal(e, t) {
        return (32 & e) > 0
    }

    function isComposite(e) {
        return !isNullOrUndef(e) && 4 === e.vtype
    }

    function isValidElement(e) {
        return !isNullOrUndef(e) && e.vtype
    }

    function noop$1() {}

    function attachEvent(e, t, n) {
        if ((t = fixEvent(e, t)) === _) return void processOnPropertyChangeEvent(e, n);
        var r = w.get(t);
        if (1 === x[t]) {
            r || (r = new m);
            var o = attachEventToNode(e, t, r);
            w.set(t, r), isFunction(n) && r.set(e, {
                eventHandler: n,
                event: o
            })
        } else r || (r = {
            items: new m
        }, r.event = attachEventToDocument(s, t, r), w.set(t, r)), isFunction(n) && (k && (e.onclick = noop$1), r.items.set(e, n))
    }

    function detachEvent(e, t, n) {
        if ((t = fixEvent(e, t)) !== _) {
            var r = w.get(t);
            if (1 === x[t] && r) {
                var o = r.get(e);
                if (o) {
                    e.removeEventListener(parseEventName(t), o.event, !1);
                    var i = r.size;
                    r["delete"](e) && 0 === i && w["delete"](t)
                }
            } else if (r && r.items) {
                var a = r.items;
                a["delete"](e) && 0 === a.size && (s.removeEventListener(parseEventName(t), r.event, !1), w["delete"](t))
            }
        }
    }

    function propertyChangeHandler(e) {
        if ("value" === e.propertyName) {
            var t = e.target || e.srcElement,
                n = t.value;
            if (n !== O) {
                O = n;
                var r = j[t.name];
                isFunction(r) && r.call(t, e)
            }
        }
    }

    function processOnPropertyChangeEvent(e, t) {
        j[e.name] = t, E || (e.addEventListener("focusin", function () {
            unbindOnPropertyChange(), bindOnPropertyChange(e)
        }, !1), e.addEventListener("focusout", unbindOnPropertyChange, !1))
    }

    function bindOnPropertyChange(e) {
        N = e, O = e.value, P = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value"), Object.defineProperty(N, "value", {
            get: function () {
                return P.get.call(this)
            },
            set: function (e) {
                O = e, P.set.call(this, e)
            }
        }), N.addEventListener("propertychange", propertyChangeHandler, !1)
    }

    function unbindOnPropertyChange() {
        N && (delete N.value, N.removeEventListener("propertychange", propertyChangeHandler, !1), N = null, O = null, P = null)
    }

    function detectCanUseOnInputNode(e) {
        var t = e.nodeName && e.nodeName.toLowerCase(),
            n = e.type;
        return "input" === t && /text|password/.test(n) || "textarea" === t
    }

    function fixEvent(e, t) {
        return t = "onDoubleClick" === t ? "ondblclick" : "onTouchTap" === t ? "onclick" : "onChange" === t && detectCanUseOnInputNode(e) ? C in window ? C : _ : t.toLowerCase()
    }

    function parseEventName(e) {
        return e.substr(2)
    }

    function stopPropagation() {
        this.cancelBubble = !0, this.stopImmediatePropagation()
    }

    function dispatchEvent(e, t, n, r, o) {
        var i = n.get(t);
        if ((!i || (r--, o.currentTarget = t, Object.defineProperties(e, {
                nativeEvent: {
                    value: e
                }
            }), i(e), !e.cancelBubble)) && r > 0) {
            var a = t.parentNode;
            if (null === a || "click" === e.type && 1 === a.nodeType && a.disabled) return;
            dispatchEvent(e, a, n, r, o)
        }
    }

    function attachEventToDocument(e, t, n) {
        var r = function (e) {
            var t = n.items,
                r = t.size;
            if (r > 0) {
                var o = {
                    currentTarget: e.target
                };
                try {
                    Object.defineProperties(e, {
                        currentTarget: {
                            configurable: !0,
                            get: function () {
                                return o.currentTarget
                            }
                        },
                        stopPropagation: {
                            value: stopPropagation
                        }
                    })
                } catch (i) {}
                dispatchEvent(e, e.target, n.items, r, o)
            }
        };
        return e.addEventListener(parseEventName(t), r, !1), r
    }

    function attachEventToNode(e, t, n) {
        var r = function (t) {
            var r = n.get(e);
            if (r && r.eventHandler) {
                var o = {
                    currentTarget: e
                };
                Object.defineProperties(t, {
                    currentTarget: {
                        configurable: !0,
                        get: function () {
                            return o.currentTarget
                        }
                    }
                }), r.eventHandler(t)
            }
        };
        return e.addEventListener(parseEventName(t), r, !1), r
    }

    function unmountChildren(e, t) {
        if (l(e))
            for (var n = 0, r = e.length; n < r; n++) unmount(e[n], t);
        else unmount(e, t)
    }

    function unmount(e, t) {
        if (!isInvalid(e)) {
            var n = e.vtype,
                r = e.dom;
            if ((12 & n) > 0) A.beforeUnmount(e), e.destroy();
            else if ((2 & n) > 0) {
                var o = e.props,
                    i = e.children,
                    a = e.ref;
                unmountChildren(i);
                for (var s in o) isAttrAnEvent(s) && detachEvent(r, s, o[s]);
                null !== a && b.detach(e, a, r)
            } else 32 & n && unmountChildren(e.children, e.type);
            isNullOrUndef(t) || isNullOrUndef(r) || t.removeChild(r)
        }
    }

    function patch(e, t, n, r, o) {
        var i, a = e.dom;
        if (isSameVNode(e, t)) {
            var s = t.vtype;
            if (2 & s) o = isNullOrUndef(o) ? e.isSvg : o, o && (t.isSvg = o), patchProps(a, t.props, e.props, e, o), patchChildren(a, e.children, t.children, r, o), null !== t.ref && b.update(e, t, a), i = a;
            else if ((12 & s) > 0) i = t.update(e, t, r), A.afterUpdate(t);
            else {
                if (1 & s) return patchVText(e, t);
                32 & s && patchChildren(e.type, e.children, t.children, r, o)
            }
            t.dom = i || a
        } else unmount(e), i = createElement(t, o, r), null !== t && (t.dom = i), null !== n && n.replaceChild(i, a);
        return i
    }

    function patchArrayChildren(e, t, n, r, o) {
        var i = t.length,
            a = n.length;
        if (0 === i) {
            if (a > 0)
                for (var s = 0; s < a; s++) mountChild(n[s], e, r, o)
        } else 0 === a ? (unmountChildren(t), e.textContent = "") : isKeyed(t, n) ? patchKeyedChildren(t, n, e, r, o, i, a) : patchNonKeyedChildren(e, t, n, r, o, i, a)
    }

    function patchChildren(e, t, n, r, o) {
        var i = l(t),
            a = l(n);
        i && a ? patchArrayChildren(e, t, n, r, o) : i || a ? i && !a ? patchArrayChildren(e, t, [n], r, o) : !i && a && patchArrayChildren(e, [t], n, r, o) : patch(t, n, e, r, o)
    }

    function patchNonKeyedChildren(e, t, n, r, o, i, a) {
        for (var s = Math.min(i, a), u = 0; u < s;) patch(t[u], n[u], e, r, o), u++;
        if (i < a)
            for (u = s; u < a; u++) null !== e && e.appendChild(createElement(n[u], o, r));
        else if (i > a)
            for (u = s; u < i; u++) unmount(t[u], e)
    }

    function patchKeyedChildren(e, t, n, r, o, i, a) {
        var s, u, l, c, p, f, d, h = i - 1,
            v = a - 1,
            y = 0,
            g = 0,
            b = e[y],
            C = t[g],
            _ = e[h],
            k = t[v];
        e: {
            for (; b.key === C.key;) {
                if (patch(b, C, n, r, o), y++, g++, y > h || g > v) break e;
                b = e[y], C = t[g]
            }
            for (; _.key === k.key;) {
                if (patch(_, k, n, r, o), h--, v--, y > h || g > v) break e;
                _ = e[h], k = t[v]
            }
        }
        if (y > h) {
            if (g <= v)
                for (f = v + 1, p = f < a ? t[f].dom : null; g <= v;) d = t[g], g++, attachNewNode(n, createElement(d, o, r), p)
        } else if (g > v)
            for (; y <= h;) unmount(e[y++], n);
        else {
            var w = h - y + 1,
                x = v - g + 1,
                E = new Array(x);
            for (s = 0; s < x; s++) E[s] = -1;
            var S = !1,
                T = 0,
                N = 0;
            if (x <= 4 || w * x <= 16) {
                for (s = y; s <= h; s++)
                    if (l = e[s], N < x)
                        for (u = g; u <= v; u++)
                            if (c = t[u], l.key === c.key) {
                                E[u - g] = s, T > u ? S = !0 : T = u, patch(l, c, n, r, o), N++, e[s] = null;
                                break
                            }
            } else {
                var O = new m;
                for (s = g; s <= v; s++) O.set(t[s].key, s);
                for (s = y; s <= h; s++) l = e[s], N < x && (u = O.get(l.key)) !== undefined && (c = t[u], E[u - g] = s, T > u ? S = !0 : T = u, patch(l, c, n, r, o), N++, e[s] = null)
            }
            if (w === i && 0 === N)
                for (unmountChildren(e), n.textContent = ""; g < x;) d = t[g], g++, attachNewNode(n, createElement(d, o, r), null);
            else {
                for (s = w - N; s > 0;) null !== (l = e[y++]) && (unmount(l, n), s--);
                if (S) {
                    var P = lis(E);
                    for (u = P.length - 1, s = x - 1; s >= 0; s--) - 1 === E[s] ? (T = s + g, d = t[T], f = T + 1, attachNewNode(n, createElement(d, o, r), f < a ? t[f].dom : null)) : u < 0 || s !== P[u] ? (T = s + g, d = t[T], f = T + 1, attachNewNode(n, d.dom, f < a ? t[f].dom : null)) : u--
                } else if (N !== x)
                    for (s = x - 1; s >= 0; s--) - 1 === E[s] && (T = s + g, d = t[T], f = T + 1, attachNewNode(n, createElement(d, o, r), f < a ? t[f].dom : null))
            }
        }
    }

    function attachNewNode(e, t, n) {
        isNullOrUndef(n) ? e.appendChild(t) : e.insertBefore(t, n)
    }

    function lis(e) {
        var t = e.slice(),
            n = [];
        n.push(0);
        for (var r, o, i = 0, a = e.length; i < a; ++i)
            if (-1 !== e[i]) {
                var s = n[n.length - 1];
                if (e[s] < e[i]) t[i] = s, n.push(i);
                else {
                    for (r = 0, o = n.length - 1; r < o;) {
                        var u = (r + o) / 2 | 0;
                        e[n[u]] < e[i] ? r = u + 1 : o = u
                    }
                    e[i] < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i)
                }
            } for (r = n.length, o = n[r - 1]; r-- > 0;) n[r] = o, o = t[o];
        return n
    }

    function isKeyed(e, t) {
        return t.length > 0 && !isNullOrUndef(t[0]) && !isNullOrUndef(t[0].key) && e.length > 0 && !isNullOrUndef(e[0]) && !isNullOrUndef(e[0].key)
    }

    function isSameVNode(e, t) {
        return !(isInvalid(e) || isInvalid(t) || l(e) || l(t)) && (e.type === t.type && e.vtype === t.vtype && e.key === t.key)
    }

    function patchVText(e, t) {
        var n = e.dom;
        if (null !== n) {
            var r = t.text;
            return t.dom = n, e.text !== r && (n.nodeValue = r), n
        }
    }

    function setStyle(e, t, n) {
        return isNullOrUndef(n) || isNumber(n) && isNaN(n) ? void(e[t] = "") : "float" === t ? (e["cssFloat"] = n, void(e["styleFloat"] = n)) : void(e[t] = !isNumber(n) || M.test(t) ? n : n + "px")
    }

    function patchEvent(e, t, n, r) {
        t !== n && (isFunction(t) && detachEvent(r, e, t), attachEvent(r, e, n))
    }

    function patchStyle(e, t, n) {
        var r, o, i = n.style;
        if (isString(t)) return void(i.cssText = t);
        if (isNullOrUndef(e) || isString(e))
            for (r in t) o = t[r], setStyle(i, r, o);
        else
            for (r in t)(o = t[r]) !== e[r] && setStyle(i, r, o)
    }

    function patchProp(e, t, n, r, o, i) {
        if (n !== r || "value" === t) {
            if ("className" === t && (t = "class"), 1 === V[t]) return;
            if ("class" !== t || i)
                if ("dangerouslySetInnerHTML" === t) {
                    var a = n && n.__html,
                        s = r && r.__html;
                    a !== s && (isNullOrUndef(s) || (isValidElement(o) && o.children !== y && (unmountChildren(o.children), o.children = []), e.innerHTML = s))
                } else if (isAttrAnEvent(t)) patchEvent(t, n, r, e);
            else if ("style" === t) patchStyle(n, r, e);
            else if ("list" !== t && "type" !== t && !i && t in e) setProperty(e, t, null == r ? "" : r), null != r && !1 !== r || e.removeAttribute(t);
            else if (isNullOrUndef(r) || !1 === r) e.removeAttribute(t);
            else {
                var u = $.DOMAttributeNamespaces[t];
                if (i && u)
                    if (r) e.setAttributeNS(u, t, r);
                    else {
                        var l = t.indexOf(":"),
                            c = l > -1 ? t.substr(l + 1) : t;
                        e.removeAttributeNS(u, c)
                    }
                else isFunction(r) || e.setAttribute(t, r)
            } else e.className = r
        }
    }

    function setProperty(e, t, n) {
        try {
            e[t] = n
        } catch (r) {}
    }

    function patchProps(e, t, n, r, o) {
        for (var i in n) {
            var a = n[i];
            isNullOrUndef(t[i]) && !isNullOrUndef(a) && (isAttrAnEvent(i) ? detachEvent(e, i, a) : "dangerouslySetInnerHTML" === i ? e.textContent = "" : "className" === i ? e.removeAttribute("class") : e.removeAttribute(i))
        }
        for (var s in t) patchProp(e, s, n[s], t[s], r, o)
    }

    function createElement(e, t, n, r) {
        var o;
        if (isValidElement(e)) {
            var i = e.vtype;
            12 & i ? (o = e.init(n, r), A.afterMount(e)) : 1 & i ? (o = s.createTextNode(e.text), e.dom = o) : 2 & i ? o = mountVNode$1(e, t, n, r) : 16 & i ? o = e.dom = s.createTextNode("") : isPortal(i, e) && (e.type.appendChild(createElement(e.children, t, n, r)), o = s.createTextNode(""))
        } else if (isString(e) || isNumber(e)) o = s.createTextNode(e);
        else if (isNullOrUndef(e) || isBoolean(e)) o = s.createTextNode("");
        else {
            if (!l(e)) throw new Error("Unsupported VNode.");
            o = s.createDocumentFragment(), e.forEach(function (e) {
                if (!isInvalid(e)) {
                    var i = createElement(e, t, n, r);
                    i && o.appendChild(i)
                }
            })
        }
        return o
    }

    function mountVNode$1(e, t, n, r) {
        e.isSvg ? t = !0 : "svg" === e.type ? t = !0 : u || (t = !1), t && (e.namespace = D, e.isSvg = t);
        var o = t ? s.createElementNS(e.namespace, e.type) : s.createElement(e.type);
        setProps(o, e, t), "foreignObject" === e.type && (t = !1);
        var i = e.children;
        if (l(i))
            for (var a = 0, c = i.length; a < c; a++) mountChild(i[a], o, n, t, r);
        else mountChild(i, o, n, t, r);
        return e.dom = o, null !== e.ref && b.attach(e, e.ref, o), o
    }

    function mountChild(e, t, n, r, o) {
        e.parentContext = n || g;
        var i = createElement(e, r, n, o);
        null !== i && t.appendChild(i)
    }

    function setProps(e, t, n) {
        var r = t.props;
        for (var o in r) patchProp(e, o, null, r[o], null, n)
    }

    function createVText(e) {
        return {
            text: e,
            vtype: 1,
            dom: null
        }
    }

    function createVoid() {
        return {
            dom: null,
            vtype: 16
        }
    }

    function errorCatcher(e, t) {
        try {
            return e()
        } catch (n) {
            errorHandler(t, n)
        }
    }

    function errorHandler(e, t) {
        for (var n;;) {
            if (isFunction(e.componentDidCatch)) {
                n = e;
                break
            }
            if (!e._parentComponent) break;
            e = e._parentComponent
        }
        if (!n) throw t;
        var r = n._disable;
        n._disable = !1, n.componentDidCatch(t), n._disable = r
    }

    function ensureVirtualNode(e) {
        return isNumber(e) || isString(e) ? createVText(e) : isInvalid(e) ? createVoid() : e
    }

    function mountVNode(e, t, n) {
        return createElement(e, !1, t, n)
    }

    function mountComponent(e, t, n) {
        var r = e.ref;
        e.component = new e.type(e.props, t);
        var o = e.component;
        o.vnode = e, isComponent(n) && (o._parentComponent = n), isFunction(o.componentWillMount) && (errorCatcher(function () {
            o.componentWillMount()
        }, o), o.state = o.getState()), o._dirty = !1;
        var i = renderComponent(o);
        i.parentVNode = e, o._rendered = i, isFunction(o.componentDidMount) && R.push(o), isNullOrUndef(r) || b.attach(e, r, e.dom);
        var a = e.dom = mountVNode(i, getChildContext(o, t), o);
        return o._disable = !1, a
    }

    function mountStatelessComponent(e, t) {
        var n = e.type(e.props, t);
        return e._rendered = ensureVirtualNode(n), e._rendered.parentVNode = e, e.dom = mountVNode(e._rendered, t)
    }

    function getChildContext(e, t) {
        return e.getChildContext ? extend(t, e.getChildContext()) : t
    }

    function renderComponent(e) {
        v.current = e;
        var t;
        return errorCatcher(function () {
            t = e.render()
        }, e), t = ensureVirtualNode(t), v.current = null, t
    }

    function flushMount() {
        if (R.length) {
            var e = R.slice(0);
            R.length = 0, e.forEach(function (e) {
                isFunction(e) ? e() : e.componentDidMount && errorCatcher(function () {
                    e.componentDidMount()
                }, e)
            })
        }
    }

    function reRenderComponent(e, t) {
        var n = t.component = e.component,
            r = t.props,
            o = n.context;
        return n._disable = !0, isFunction(n.componentWillReceiveProps) && errorCatcher(function () {
            n.componentWillReceiveProps(r, o)
        }, n), n._disable = !1, n.prevProps = n.props, n.prevState = n.state, n.prevContext = n.context, n.props = r, n.context = o, isNullOrUndef(t.ref) || b.update(e, t), updateComponent(n)
    }

    function reRenderStatelessComponent(e, t, n, r) {
        var o = e._rendered,
            i = t.type(t.props, n);
        return i.parentVNode = t, t._rendered = i, t.dom = patch(o, i, o && o.dom || r, n)
    }

    function updateComponent(e, t) {
        void 0 === t && (t = !1);
        var n = e.vnode,
            r = n.dom,
            o = e.props,
            i = e.getState(),
            a = e.context,
            s = e.prevProps || o,
            u = e.prevState || e.state,
            l = e.prevContext || a;
        e.props = s, e.context = l;
        var c = !1;
        if (!t && isFunction(e.shouldComponentUpdate) && !1 === e.shouldComponentUpdate(o, i, a) ? c = !0 : isFunction(e.componentWillUpdate) && errorCatcher(function () {
                e.componentWillUpdate(o, i, a)
            }, e), e.props = o, e.state = i, e.context = a, e._dirty = !1, !c) {
            var p = e._rendered,
                f = renderComponent(e);
            f.parentVNode = n;
            var d = getChildContext(e, a),
                h = p.dom && p.dom.parentNode;
            for (r = n.dom = patch(p, f, h || null, d), e._rendered = f, isFunction(e.componentDidUpdate) && errorCatcher(function () {
                    e.componentDidUpdate(s, u, a)
                }, e); n = n.parentVNode;)(12 & n.vtype) > 0 && (n.dom = r)
        }
        if (e.prevProps = e.props, e.prevState = e.state, e.prevContext = e.context, e._pendingCallbacks)
            for (; e._pendingCallbacks.length;) e._pendingCallbacks.pop().call(e);
        return flushMount(), r
    }

    function unmountComponent(e) {
        var t = e.component;
        isFunction(t.componentWillUnmount) && errorCatcher(function () {
            t.componentWillUnmount()
        }, t), t._disable = !0, unmount(t._rendered), isNullOrUndef(e.ref) || b.detach(e, e.ref, e.dom)
    }

    function unmountStatelessComponent(e) {
        unmount(e._rendered)
    }

    function enqueueRender(e) {
        !e._dirty && (e._dirty = !0) && 1 === I.push(e) && p(rerender)
    }

    function rerender() {
        var e, t = I;
        for (I = []; e = t.pop();) e._dirty && updateComponent(e)
    }

    function render(e, t, n) {
        if (!t) throw new Error(t + " should be a DOM Element");
        var r, o = t._component;
        return A.roots.push(e), o !== undefined ? (A.roots = A.roots.filter(function (e) {
            return e !== o
        }), r = patch(o, e, t, {})) : (r = mountVNode(e, {}), t.appendChild(r)), t && (t._component = e), flushMount(), n && n(), isComposite(e) ? e.component : r
    }

    function createVNode(e, t, n, r, o, i, a) {
        return {
            type: e,
            key: r || null,
            vtype: 2,
            props: t || g,
            children: n,
            namespace: o || null,
            _owner: i,
            dom: null,
            ref: a || null
        }
    }

    function h(e, t, n) {
        var r;
        return t.children && (n || (n = t.children)), l(n) ? (r = [], addChildren(r, n, e)) : isString(n) || isNumber(n) ? n = createVText(String(n)) : isValidElement(n) || (n = y), t.children = r !== undefined ? r : n, createVNode(e, t, t.children, t.key, t.namespace, t.owner, t.ref)
    }

    function addChildren(e, t, n) {
        if (isString(t) || isNumber(t)) e.push(createVText(String(t)));
        else if (isValidElement(t)) e.push(t);
        else if (l(t))
            for (var r = 0; r < t.length; r++) addChildren(e, t[r], n);
        else e.push(createVoid())
    }

    function transformPropsForRealTag(e, t) {
        var n = {};
        for (var r in t) {
            var o = t[r];
            if ("defaultValue" !== r) {
                var i = $.DOMAttributeNames[r];
                i && i !== r ? n[i] = o : n[r] = o
            } else n.value = t.value || t.defaultValue
        }
        return n
    }

    function transformPropsForComponent(e, t) {
        var n = {};
        for (var r in e) {
            var o = e[r];
            n[r] = o
        }
        if (t)
            for (var i in t) isUndefined(n[i]) && (n[i] = t[i]);
        return n
    }

    function createElement$2(e, t) {
        for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
        var o = n;
        n && (1 === n.length ? o = n[0] : 0 === n.length && (o = undefined));
        var i;
        return isString(e) ? (i = transformPropsForRealTag(e, t), i.owner = v.current, h(e, i, o)) : isFunction(e) ? (i = transformPropsForComponent(t, e.defaultProps), i.children && i.children !== y || (i.children = o || y), i.owner = v.current, e.prototype && e.prototype.render ? new q(e, i) : new W(e, i)) : e
    }

    function cloneElement(e, t) {
        for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
        if (isVText(e)) return createVText(e.text);
        if (isString(e)) return createVText(e);
        if (!isInvalid(e) && isPortal(e.vtype, e) || e && 16 & e.vtype) return createVoid();
        var o = clone(extend(clone(e.props), t));
        e.namespace && (o.namespace = e.namespace), 4 & e.vtype && !isNullOrUndef(e.ref) && (o.ref = e.ref);
        var i = (arguments.length > 2 ? [].slice.call(arguments, 2) : e.children || o.children) || [];
        if (i.length && 1 === i.length && (i = n[0]), l(e)) return e.map(function (e) {
            return cloneElement(e)
        });
        var a = createElement$2(e.type, o);
        if (l(i)) {
            var s = i.map(function (e) {
                return cloneElement(e, e.props)
            });
            0 === s.length && (s = y), isVNode(a) && (a.children = s), a.props.children = s
        } else i && (isVNode(a) && (a.children = cloneElement(i)), a.props.children = cloneElement(i, i.props));
        return a
    }

    function flatten(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            var o = e[n];
            l(o) ? flatten(o, t) : t.push(o)
        }
        return t
    }

    function hydrate(e, t, n) {
        if (null !== t) {
            for (var r = t.lastChild; r;) {
                var o = r.previousSibling;
                t.removeChild(r), r = o
            }
            return render(e, t, n)
        }
    }

    function createPortal(e, t) {
        return {
            type: t,
            vtype: 32,
            children: e,
            dom: null
        }
    }

    function unmountComponentAtNode(e) {
        var t = e._component;
        return !!isValidElement(t) && (unmount(t, e), delete e._component, !0)
    }

    function findDOMNode(e) {
        return isInvalid(e) ? null : isComponent(e) ? e.vnode.dom : isValidElement(e) ? e.dom : e
    }

    function createFactory(e) {
        return createElement$2.bind(null, e)
    }

    function unstable_renderSubtreeIntoContainer(e, t, n, r) {
        var o = createElement$2(K, {
                context: e.context
            }, t),
            i = render(o, n);
        return r && r.call(i), i
    }

    function isValidElement$1(e) {
        return isValidElement(e) && (6 & e.vtype) > 0
    }
    var r, o = function () {
            var e;
            if (void 0 !== o) e = o;
            else if ("undefined" != typeof self) e = self;
            else try {
                e = Function("return this")()
            } catch (t) {
                throw new Error("global object is unavailable in this environment")
            }
            return e
        }(),
        i = "undefined" != typeof window,
        a = {
            createElement: noop,
            createElementNS: noop,
            createTextNode: noop
        },
        s = i ? document : a,
        u = isFunction(s.createAttributeNS),
        l = Array.isArray,
        c = "Promise" in o;
    c && (r = Promise.resolve());
    var p = function (e) {
        for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
        if (e = isFunction(e) ? e.bind.apply(e, [null].concat(t)) : e, c) return r.then(e);
        ("requestAnimationFrame" in o ? requestAnimationFrame : setTimeout)(e)
    };
    Object.is = Object.is || function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t
    };
    var f = function () {
        this.cache = [], this.size = 0
    };
    f.prototype.set = function (e, t) {
        var n = this,
            r = this.cache.length;
        if (!r) return this.cache.push({
            k: e,
            v: t
        }), void(this.size += 1);
        for (var o = 0; o < r; o++) {
            var i = n.cache[o];
            if (i.k === e) return void(i.v = t)
        }
        this.cache.push({
            k: e,
            v: t
        }), this.size += 1
    }, f.prototype.get = function (e) {
        var t = this,
            n = this.cache.length;
        if (n)
            for (var r = 0; r < n; r++) {
                var o = t.cache[r];
                if (o.k === e) return o.v
            }
    }, f.prototype.has = function (e) {
        var t = this,
            n = this.cache.length;
        if (!n) return !1;
        for (var r = 0; r < n; r++) {
            if (t.cache[r].k === e) return !0
        }
        return !1
    }, f.prototype["delete"] = function (e) {
        for (var t = this, n = this.cache.length, r = 0; r < n; r++) {
            if (t.cache[r].k === e) return t.cache.splice(r, 1), t.size -= 1, !0
        }
        return !1
    }, f.prototype.clear = function () {
        var e = this,
            t = this.cache.length;
        if (this.size = 0, t)
            for (; t;) e.cache.pop(), t--
    };
    var d, m = "Map" in o ? Map : f,
        v = {
            current: null
        },
        y = [],
        g = {};
    ! function (e) {
        e[e["Text"] = 1] = "Text", e[e["Node"] = 2] = "Node", e[e["Composite"] = 4] = "Composite", e[e["Stateless"] = 8] = "Stateless", e[e["Void"] = 16] = "Void", e[e["Portal"] = 32] = "Portal"
    }(d || (d = {}));
    var b = {
            update: function (e, t, n) {
                var r = null != e && e.ref,
                    o = null != t && t.ref;
                r !== o && (this.detach(e, r, e.dom), this.attach(t, o, n))
            },
            attach: function (e, t, n) {
                var r = isComposite(e) ? e.component : n;
                if (isFunction(t)) t(r);
                else if (isString(t)) {
                    var o = e._owner;
                    o && isFunction(o.render) && (o.refs[t] = r)
                }
            },
            detach: function (e, t, n) {
                var r = isComposite(e) ? e.component : n;
                if (isFunction(t)) t(null);
                else if (isString(t)) {
                    var o = e._owner;
                    o.refs[t] === r && isFunction(o.render) && delete o.refs[t]
                }
            }
        },
        C = "oninput",
        _ = "onpropertychange",
        k = i && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
        w = new m,
        x = {
            onmousemove: 1,
            ontouchmove: 1,
            onmouseleave: 1,
            onmouseenter: 1,
            onload: 1,
            onunload: 1,
            onscroll: 1,
            onfocus: 1,
            onblur: 1,
            onrowexit: 1,
            onbeforeunload: 1,
            onstop: 1,
            ondragdrop: 1,
            ondragenter: 1,
            ondragexit: 1,
            ondraggesture: 1,
            ondragover: 1,
            oncontextmenu: 1,
            onerror: 1,
            onabort: 1,
            oncanplay: 1,
            oncanplaythrough: 1,
            ondurationchange: 1,
            onemptied: 1,
            onended: 1,
            onloadeddata: 1,
            onloadedmetadata: 1,
            onloadstart: 1,
            onencrypted: 1,
            onpause: 1,
            onplay: 1,
            onplaying: 1,
            onprogress: 1,
            onratechange: 1,
            onseeking: 1,
            onseeked: 1,
            onstalled: 1,
            onsuspend: 1,
            ontimeupdate: 1,
            onvolumechange: 1,
            onwaiting: 1
        };
    x[_] = 1;
    var E = !1;
    if (i && navigator.userAgent.indexOf("MSIE 9") >= 0) {
        var S = [],
            T = [];
        s.addEventListener("selectionchange", function () {
            var e = s.activeElement;
            if (detectCanUseOnInputNode(e)) {
                var t = S.indexOf(e),
                    n = S[t] || S.push(e);
                if (n.value !== T[t]) {
                    var r = s.createEvent("CustomEvent");
                    r.initCustomEvent("input", !0, !0, undefined), T[t] = n.value, e.dispatchEvent(r)
                }
            }
        })
    }
    "undefined" == typeof Event || Event.prototype.persist || (Event.prototype.persist = noop$1);
    var N, O, P, j = {},
        A = {
            afterMount: noop$1,
            afterUpdate: noop$1,
            beforeUnmount: noop$1,
            roots: [],
            debug: !1
        },
        U = {
            ev: "http://www.w3.org/2001/xml-events",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace"
        },
        F = {
            accentHeight: "accent-height",
            accumulate: 0,
            additive: 0,
            alignmentBaseline: "alignment-baseline",
            allowReorder: "allowReorder",
            alphabetic: 0,
            amplitude: 0,
            arabicForm: "arabic-form",
            ascent: 0,
            attributeName: "attributeName",
            attributeType: "attributeType",
            autoReverse: "autoReverse",
            azimuth: 0,
            baseFrequency: "baseFrequency",
            baseProfile: "baseProfile",
            baselineShift: "baseline-shift",
            bbox: 0,
            begin: 0,
            bias: 0,
            by: 0,
            calcMode: "calcMode",
            capHeight: "cap-height",
            clip: 0,
            clipPath: "clip-path",
            clipRule: "clip-rule",
            clipPathUnits: "clipPathUnits",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            contentScriptType: "contentScriptType",
            contentStyleType: "contentStyleType",
            cursor: 0,
            cx: 0,
            cy: 0,
            d: 0,
            decelerate: 0,
            descent: 0,
            diffuseConstant: "diffuseConstant",
            direction: 0,
            display: 0,
            divisor: 0,
            dominantBaseline: "dominant-baseline",
            dur: 0,
            dx: 0,
            dy: 0,
            edgeMode: "edgeMode",
            elevation: 0,
            enableBackground: "enable-background",
            end: 0,
            evEvent: "ev:event",
            exponent: 0,
            externalResourcesRequired: "externalResourcesRequired",
            fill: 0,
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            filter: 0,
            filterRes: "filterRes",
            filterUnits: "filterUnits",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            focusable: 0,
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            format: 0,
            from: 0,
            fx: 0,
            fy: 0,
            g1: 0,
            g2: 0,
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            glyphRef: "glyphRef",
            gradientTransform: "gradientTransform",
            gradientUnits: "gradientUnits",
            hanging: 0,
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            ideographic: 0,
            imageRendering: "image-rendering",
            "in": 0,
            in2: 0,
            intercept: 0,
            k: 0,
            k1: 0,
            k2: 0,
            k3: 0,
            k4: 0,
            kernelMatrix: "kernelMatrix",
            kernelUnitLength: "kernelUnitLength",
            kerning: 0,
            keyPoints: "keyPoints",
            keySplines: "keySplines",
            keyTimes: "keyTimes",
            lengthAdjust: "lengthAdjust",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            limitingConeAngle: "limitingConeAngle",
            local: 0,
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            markerHeight: "markerHeight",
            markerUnits: "markerUnits",
            markerWidth: "markerWidth",
            mask: 0,
            maskContentUnits: "maskContentUnits",
            maskUnits: "maskUnits",
            mathematical: 0,
            mode: 0,
            numOctaves: "numOctaves",
            offset: 0,
            opacity: 0,
            operator: 0,
            order: 0,
            orient: 0,
            orientation: 0,
            origin: 0,
            overflow: 0,
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pathLength: "pathLength",
            patternContentUnits: "patternContentUnits",
            patternTransform: "patternTransform",
            patternUnits: "patternUnits",
            pointerEvents: "pointer-events",
            points: 0,
            pointsAtX: "pointsAtX",
            pointsAtY: "pointsAtY",
            pointsAtZ: "pointsAtZ",
            preserveAlpha: "preserveAlpha",
            preserveAspectRatio: "preserveAspectRatio",
            primitiveUnits: "primitiveUnits",
            r: 0,
            radius: 0,
            refX: "refX",
            refY: "refY",
            renderingIntent: "rendering-intent",
            repeatCount: "repeatCount",
            repeatDur: "repeatDur",
            requiredExtensions: "requiredExtensions",
            requiredFeatures: "requiredFeatures",
            restart: 0,
            result: 0,
            rotate: 0,
            rx: 0,
            ry: 0,
            scale: 0,
            seed: 0,
            shapeRendering: "shape-rendering",
            slope: 0,
            spacing: 0,
            specularConstant: "specularConstant",
            specularExponent: "specularExponent",
            speed: 0,
            spreadMethod: "spreadMethod",
            startOffset: "startOffset",
            stdDeviation: "stdDeviation",
            stemh: 0,
            stemv: 0,
            stitchTiles: "stitchTiles",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            string: 0,
            stroke: 0,
            strokeDasharray: "stroke-dasharray",
            strokeDashoffset: "stroke-dashoffset",
            strokeLinecap: "stroke-linecap",
            strokeLinejoin: "stroke-linejoin",
            strokeMiterlimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            surfaceScale: "surfaceScale",
            systemLanguage: "systemLanguage",
            tableValues: "tableValues",
            targetX: "targetX",
            targetY: "targetY",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            textLength: "textLength",
            to: 0,
            transform: 0,
            u1: 0,
            u2: 0,
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicode: 0,
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            values: 0,
            vectorEffect: "vector-effect",
            version: 0,
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            viewBox: "viewBox",
            viewTarget: "viewTarget",
            visibility: 0,
            widths: 0,
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            x: 0,
            xHeight: "x-height",
            x1: 0,
            x2: 0,
            xChannelSelector: "xChannelSelector",
            xlinkActuate: "xlink:actuate",
            xlinkArcrole: "xlink:arcrole",
            xlinkHref: "xlink:href",
            xlinkRole: "xlink:role",
            xlinkShow: "xlink:show",
            xlinkTitle: "xlink:title",
            xlinkType: "xlink:type",
            xmlBase: "xml:base",
            xmlId: "xml:id",
            xmlns: 0,
            xmlnsXlink: "xmlns:xlink",
            xmlLang: "xml:lang",
            xmlSpace: "xml:space",
            y: 0,
            y1: 0,
            y2: 0,
            yChannelSelector: "yChannelSelector",
            z: 0,
            zoomAndPan: "zoomAndPan"
        },
        $ = {
            Properties: {},
            DOMAttributeNamespaces: {
                "ev:event": U.ev,
                "xlink:actuate": U.xlink,
                "xlink:arcrole": U.xlink,
                "xlink:href": U.xlink,
                "xlink:role": U.xlink,
                "xlink:show": U.xlink,
                "xlink:title": U.xlink,
                "xlink:type": U.xlink,
                "xml:base": U.xml,
                "xml:id": U.xml,
                "xml:lang": U.xml,
                "xml:space": U.xml
            },
            DOMAttributeNames: {}
        };
    Object.keys(F).forEach(function (e) {
        $.Properties[e] = 0, F[e] && ($.DOMAttributeNames[e] = F[e])
    });
    var V = {
            children: 1,
            key: 1,
            ref: 1,
            owner: 1
        },
        M = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
        D = "http://www.w3.org/2000/svg",
        R = [],
        I = [],
        L = function (e, t) {
            this._dirty = !0, this._disable = !0, this._pendingStates = [], this.isReactComponent = g, this.state || (this.state = {}), this.props = e || {}, this.context = t || g, this.refs = {}
        };
    L.prototype.setState = function (e, t) {
        e && (this._pendingStates = this._pendingStates || []).push(e), isFunction(t) && (this._pendingCallbacks = this._pendingCallbacks || []).push(t), this._disable || enqueueRender(this)
    }, L.prototype.getState = function () {
        var e = this,
            t = this,
            n = t._pendingStates,
            r = t.state,
            o = t.props;
        if (!n.length) return r;
        var i = clone(r),
            a = n.concat();
        return this._pendingStates.length = 0, a.forEach(function (t) {
            isFunction(t) && (t = t.call(e, r, o)), extend(i, t)
        }), i
    }, L.prototype.forceUpdate = function (e) {
        isFunction(e) && (this._pendingCallbacks = this._pendingCallbacks || []).push(e), updateComponent(this, !0)
    }, L.prototype.render = function (e, t, n) {};
    var z = function (e) {
            function PureComponent() {
                e.apply(this, arguments), this.isPureComponent = !0
            }
            return e && (PureComponent.__proto__ = e), PureComponent.prototype = Object.create(e && e.prototype), PureComponent.prototype.constructor = PureComponent, PureComponent.prototype.shouldComponentUpdate = function (e, t) {
                return !shallowEqual(this.props, e) || !shallowEqual(this.state, t)
            }, PureComponent
        }(L),
        q = function (e, t) {
            this.vtype = 4, this.type = e, this.name = e.name || e.toString().match(/^function\s*([^\s(]+)/)[1], e.displayName = this.name, this._owner = t.owner, delete t.owner, (this.ref = t.ref) && delete t.ref, this.props = t, this.key = t.key || null, this.dom = null
        };
    q.prototype.init = function (e, t) {
        return mountComponent(this, e, t)
    }, q.prototype.update = function (e, t, n, r) {
        return reRenderComponent(e, this)
    }, q.prototype.destroy = function () {
        unmountComponent(this)
    };
    var W = function (e, t) {
        this.vtype = 8, this.type = e, this._owner = t.owner, delete t.owner, this.props = t, this.key = t.key
    };
    W.prototype.init = function (e) {
        return mountStatelessComponent(this, e)
    }, W.prototype.update = function (e, t, n) {
        var r = t.props,
            o = t.context,
            i = r.onShouldComponentUpdate;
        return isFunction(i) && !i(e.props, r, o) ? (t._rendered = e._rendered, e.dom) : reRenderStatelessComponent(e, this, n, e.dom)
    }, W.prototype.destroy = function () {
        unmountStatelessComponent(this)
    };
    var H = {
            map: function (e, t, n) {
                return isNullOrUndef(e) ? e : (e = H.toArray(e), n && n !== e && (t = t.bind(n)), e.map(t))
            },
            forEach: function (e, t, n) {
                if (!isNullOrUndef(e)) {
                    e = H.toArray(e), n && n !== e && (t = t.bind(n));
                    for (var r = 0, o = e.length; r < o; r++) {
                        t(isInvalid(e[r]) ? null : e[r], r, e)
                    }
                }
            },
            count: function (e) {
                return e = H.toArray(e), e.length
            },
            only: function (e) {
                if (e = H.toArray(e), 1 !== e.length) throw new Error("Children.only() expects only one child.");
                return e[0]
            },
            toArray: function (e) {
                if (isNullOrUndef(e)) return [];
                if (l(e)) {
                    var t = [];
                    return flatten(e, t), t
                }
                return y.concat(e)
            }
        },
        K = function (e) {
            function WrapperComponent() {
                e.apply(this, arguments)
            }
            return e && (WrapperComponent.__proto__ = e), WrapperComponent.prototype = Object.create(e && e.prototype), WrapperComponent.prototype.constructor = WrapperComponent, WrapperComponent.prototype.getChildContext = function () {
                return this.props.context
            }, WrapperComponent.prototype.render = function () {
                return this.props.children
            }, WrapperComponent
        }(L),
        B = p,
        X = {
            Children: H,
            Component: L,
            PureComponent: z,
            createElement: createElement$2,
            cloneElement: cloneElement,
            render: render,
            nextTick: p,
            options: A,
            findDOMNode: findDOMNode,
            isValidElement: isValidElement$1,
            unmountComponentAtNode: unmountComponentAtNode,
            createPortal: createPortal,
            unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
            hydrate: hydrate,
            createFactory: createFactory,
            unstable_batchedUpdates: B,
            version: "15.4.2"
        };
    t.Children = H, t.Component = L, t.PureComponent = z, t.createElement = createElement$2, t.cloneElement = cloneElement, t.render = render, t.nextTick = p, t.options = A, t.findDOMNode = findDOMNode, t.isValidElement = isValidElement$1, t.unmountComponentAtNode = unmountComponentAtNode, t.createPortal = createPortal, t.unstable_renderSubtreeIntoContainer = unstable_renderSubtreeIntoContainer, t.hydrate = hydrate, t.createFactory = createFactory, t.unstable_batchedUpdates = B, t.version = "15.4.2", t["default"] = X
}]);
! function (e) {
    function __webpack_require__(t) {
        if (n[t]) return n[t].exports;
        var i = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, __webpack_require__), i.l = !0, i.exports
    }
    var t = window["webpackJsonp"];
    window["webpackJsonp"] = function (n, r, o) {
        for (var a, l, c = 0, s = []; c < n.length; c++) l = n[c], i[l] && s.push(i[l][0]), i[l] = 0;
        for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
        for (t && t(n, r, o); s.length;) s.shift()()
    };
    var n = {},
        i = {
            38: 0
        };
    __webpack_require__.e = function (e) {
        function onScriptComplete() {
            o.onerror = o.onload = null, clearTimeout(a);
            var t = i[e];
            0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), i[e] = undefined)
        }
        var t = i[e];
        if (0 === t) return new Promise(function (e) {
            e()
        });
        if (t) return t[2];
        var n = new Promise(function (n, r) {
            t = i[e] = [n, r]
        });
        t[2] = n;
        var r = document.getElementsByTagName("head")[0],
            o = document.createElement("script");
        o.type = "text/javascript", o.charset = "utf-8", o.async = !0, o.timeout = 12e4, __webpack_require__.nc && o.setAttribute("nonce", __webpack_require__.nc), o.src = __webpack_require__.p + "chunk/" + ({
            0: "corechn1",
            1: "toolbar",
            2: "more2",
            3: "chn",
            4: "serviceSprite",
            5: "more",
            6: "live",
            7: "special",
            8: "scene",
            9: "company",
            10: "seckill",
            11: "enjoy",
            12: "footer",
            13: "newpeople",
            14: "joytop",
            15: "floorhd",
            16: "sidePopMenu",
            17: "fallback",
            18: "legacy",
            19: "shortcutUserinfoDropdown",
            20: "shortcutMyjdDropdown",
            21: "news.mock",
            22: "mock/logo.mock",
            23: "mock/scene.mock",
            24: "mock/enjoy-mock_s3-js",
            25: "mock/enjoy-mock_s2-js",
            26: "mock/enjoy-mock_s1-js",
            27: "mock/enjoy-mock_a2-js",
            28: "mock/enjoy-mock_a1-js",
            29: "mock/vogue_3-mock-js",
            30: "mock/vogue_2-mock-js",
            31: "mock/vogue_1-mock-js",
            32: "mock/tech_2-mock-js",
            33: "mock/tech_1-mock-js",
            34: "mock/life_2-mock-js",
            35: "mock/life_1-mock-js",
            36: "mock/house_2-mock-js",
            37: "mock/house_1-mock-js"
        } [e] || e) + ".chunk.js";
        var a = setTimeout(onScriptComplete, 12e4);
        return o.onerror = o.onload = onScriptComplete, r.appendChild(o), n
    }, __webpack_require__.m = e, __webpack_require__.c = n, __webpack_require__.d = function (e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, __webpack_require__.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    }, __webpack_require__.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, __webpack_require__.p = "//misc.360buyimg.com/mtd/pc/index_2017/2.1.0/", __webpack_require__.oe = function (e) {
        throw console.error(e), e
    }, __webpack_require__(__webpack_require__.s = 24)
}([function (e, t, n) {
    e.exports = n(12)(7)
}, function (e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function classnames() {
        for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
                var i = void 0 === n ? "undefined" : o(n);
                if ("string" === i || "number" === i) e.push(n);
                else if (Array.isArray(n) && n.length) {
                    var r = classnames.apply(null, n);
                    r && e.push(r)
                } else if ("object" === i)
                    for (var a in n)({}).hasOwnProperty.call(n, a) && n[a] && e.push(a)
            }
        }
        return e.join(" ")
    }

    function isNotEmptyObj(e) {
        if (e)
            for (var t in e)
                if (Object.prototype.hasOwnProperty.call(e, t)) return !0;
        return !1
    }

    function isSkuSelf(e) {
        if (!e) return !1;
        var t = parseInt(e);
        return t >= 100001 && t <= 9999999 || t >= 100000000001 && t <= 109999999999
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isIE8 = t.isNotEmptyObj = t.notifyMoreCtnAsync = t.isSkuSelf = t.classnames = t.isCharacterKey = t.cookieCheck = t.getAreaLv4 = t.shouldAnimate = t.loadingPlaceholder = t.isInViewport = t.getElementPos = t.loadLegacy = t.eventCenter = t.merge = t.bindHotkey = t.getHash = t.getJda = t.getUuid = t.getPin = t.isInternational = t.webpSupported = t.padding = t.getDomInfo = t.splitArr = t.throttle = t.getDomain = t.getNewuserinfo = t.afterLoad = t.getSpoint = t.getCompanyinfo = t.getUserinfo = t.getLoginstatus = t.getBiAttr = t.getRandomData = t.loadAsync = t.createCookie = t.readCookie = t.dconsole = t.mergeClassName = t.isRetina = t.isWide = t.isdebug = t.o2Control = t.processImage = t.replaceMImageUrl = t.getImageDomain = t.setImageQuality = t.clipImage = t.resizeImage = t.sendClog = undefined;
    var i = function () {
            function sliceIterator(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = undefined;
                try {
                    for (var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                } catch (c) {
                    r = !0, o = c
                } finally {
                    try {
                        !i && l["return"] && l["return"]()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }
            return function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return sliceIterator(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    n(13);
    var a = n(0),
        l = _interopRequireDefault(a),
        c = n(32),
        s = _interopRequireDefault(c),
        u = n(14),
        d = _interopRequireDefault(u),
        f = n(4);
    pageConfig.clog = {
        logDomain: "//s-nfa.jd.com/bd?info=",
        logV: "1.0"
    };
    var p = pageConfig.clog;
    pageConfig.sendClog = function (e) {
        if (e.length) {
            var t = [],
                n = {};
            e.each(function (e) {
                var i = $(this).attr("fclog");
                n[i] || (n[i] = !0, t.push(i))
            }), p && p.logDomain && t.length > 0 && ((new Image).src = p.logDomain + t.join("||") + "&v=" + p.logV)
        }
    };
    var m = function (e) {
        var t = e.clogs,
            n = e.logV,
            i = e.logDomain,
            r = void 0;
        r = Array.isArray(t) ? t.join("||") : t, (new Image).src = "" + (i || p.logDomain) + r + "&v=" + (n || p.logV)
    };
    window.login = function () {
        return location.href = "https://passport.jd.com/new/login.aspx?ReturnUrl=" + escape(location.href).replace(/\//g, "%2F"), !1
    }, window.regist = function () {
        return location.href = "https://reg.jd.com/reg/person?ReturnUrl=" + escape(location.href), !1
    };
    var h = function merge() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            for (var i = t.shift() || {}, r = void 0; t.length;)
                if (r = t.shift(), Array.isArray(i) && Array.isArray(r)) r.forEach(function (e) {
                    i.push(e)
                });
                else
                    for (var a in r) {
                        var l = r[a];
                        "object" === (void 0 === l ? "undefined" : o(l)) && "object" === o(i[a]) || Array.isArray(l) && Array.isArray(i[a]) ? merge(i[a], l) : i[a] = l
                    }
            return i
        },
        g = function () {},
        v = function (e) {
            return String(e) in pageConfig.isdebug
        },
        b = window.o2Control || function () {
            var e = function () {
                this.cookieName = "o2Control", this.store = {};
                var e = y(this.cookieName) || "";
                this._init(e)
            };
            return e.prototype._init = function (e) {
                if (0 !== e.length) {
                    var t = e.split("|"),
                        n = t.length,
                        i = void 0;
                    for (i = 0; i < n; i++) {
                        var r = t[i].split("=");
                        r[1] === undefined ? this.store[r[0]] = !0 : this.store[r[0]] = r[1]
                    }
                }
            }, e.prototype.set = function (e, t) {
                var n = [],
                    i = void 0,
                    r = void 0,
                    o = void 0;
                this.store[e] = t === undefined || t;
                for (i in this.store) r = "", !1 !== (o = this.store[i]) && (r = i, !0 !== o && (r += "=" + o), n.push(r));
                w(this.cookieName, n.join("|"), 365)
            }, e.prototype.get = function (e) {
                return this.store[e]
            }, new e
        }(),
        y = function (e) {
            for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                for (var r = n[i];
                    " " === r.charAt(0);) r = r.substring(1, r.length);
                if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
            }
            return null
        },
        w = function (e, t, n, i) {
            var r = i || "/",
                o = void 0,
                a = void 0;
            n ? (o = new Date, o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), a = "; expires=" + o.toGMTString()) : a = "", document.cookie = e + "=" + t + a + "; path=" + r
        },
        k = !! function () {
            if (window.devicePixelRatio > 1 || window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx)").matches) return !0
        }(),
        S = [10, 11, 12, 13, 14, 20, 30],
        C = function (e, t, n) {
            return !e || /\.gif/.test(e) ? e : e.replace(/^https?:/, "").replace(/(360buyimg\.com\/[^\/]+)\/([^\/]+)/, function (e, i, r) {
                var o = r.replace(/s\d+x\d+_([\s\S]+)/, function (e, t) {
                    return t
                });
                return i + "/s" + (k ? t : n) + "_" + o
            })
        },
        x = function (e, t) {
            if (!e || /\.gif/.test(e)) return e;
            var n = "";
            return e.replace(/!cc_\d+x\d+/, "").replace(/(!q\d{0,2}.(jpg|jpeg|png|bmp|webp))/, function (e, t) {
                return n = t, ""
            }) + "!cc_" + t + n
        },
        E = function (e, t) {
            if (!e || /\.gif/.test(e)) return e;
            var n = String(Math.max(+t, 0) % 100 + 100).substr(1),
                i = "";
            return e.replace(/!q[^!]+/, "").replace(/!c[cr][^!]+/, function (e) {
                return i = e, ""
            }) + "!q" + n + i
        },
        j = !1;
    v(11) ? t.webpSupported = j = !0 : v(12) ? t.webpSupported = j = !1 : pageConfig.disableWebp ? t.webpSupported = j = !1 : function () {
        var e = new Image;
        e.onload = function () {
            t.webpSupported = j = e.width > 0 && e.height > 0, b.set("webp", j)
        }, e.onerror = function () {
            t.webpSupported = j = !1, b.set("webp", !1)
        }, e.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA"
    }();
    var I = function (e) {
        var t = String(e).match(/(\d)/);
        return t = t && t[1] ? t[1] : String(10 * Math.random()).substring(0, 1), "//img" + S[t % 7] + ".360buyimg.com/"
    };
    pageConfig.FN_GetImageDomain = I;
    var P = function () {
        var e = location.hostname,
            t = "jd.com";
        return /\byiyaojd.com\b/.test(e) ? t = "yiyaojd.com" : /jd.com/.test(e) ? t = "jd.com" : /jd360.hk/.test(e) ? t = "jd360.hk" : /jd.hk/.test(e) ? t = "jd.hk" : /360buy.com/.test(e) && (t = "360buy.com"), t
    };
    pageConfig.FN_getDomain = P;
    var T = function (e, t) {
            return e ? e.replace(/^http(s?):/, "").replace(/\/\/m.360buyimg.com\//, function () {
                return I(t)
            }) : ""
        },
        O = function (e) {
            return !e || /\.gif/.test(e) ? e : e.replace(/\.webp/g, "") + ".webp"
        },
        A = function (e, t) {
            var n = e && e.replace(/!.*$/g, ""),
                o = r({
                    clip: !1,
                    resize: !1,
                    quality: 90,
                    replacem: !0,
                    webp: !1
                }, t);
            if (o.resize) {
                var a = i(o.resize, 2),
                    l = a[0],
                    c = a[1];
                n = pageConfig.enableRetina ? C(n, l, c) : C(n, c, c)
            }
            return o.clip && (n = x(n, o.clip)), o.quality && (n = E(n, o.quality)), o.replacem && (n = T(n, o.replacem)), !0 === j && o.webp && (n = O(n)), n
        },
        N = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t.filter(function (e) {
                return !!e
            }).join(" ")
        },
        L = function () {
            if (v(1)) return window.console;
            var e = ["debug", "error", "info", "log", "warn", "dir", "dirxml", "table", "trace", "group", "groupCollapsed", "groupEnd", "clear", "count", "assert", "markTimeline", "profile", "profileEnd", "timeline", "timelineEnd", "time", "timeEnd", "timeStamp", "memory"],
                t = {};
            return e.forEach(function (e) {
                t[e] = g
            }), t
        }(),
        R = function (e) {
            if (!Array.isArray(e)) return e;
            for (var t = 0, n = 0, i = void 0, r = [], o = 0; o < e.length; o++) i = e[o].weight ? parseInt(e[o].weight) : 1, r[o] = [], r[o].push(t), t += i, r[o].push(t);
            n = Math.ceil(t * Math.random());
            for (var a = 0; a < r.length; a++)
                if (n > r[a][0] && n <= r[a][1]) return e[a]
        },
        M = "",
        D = "-1",
        U = "",
        z = function (e) {
            return e && M || (M = y("pin") || M), M
        },
        q = function (e) {
            if (!e || !M) {
                var t = y("__jda") || "";
                D = t.split(".")[1] || D
            }
            return D
        },
        B = function (e) {
            return e && U || (U = y("__jda") || U), U
        },
        H = function (e, t) {
            return Math.abs(function (t) {
                for (var n = 0, i = 0; i < e.length; i++) n = (n << 5) - n + e.charCodeAt(i), n &= n;
                return n
            }()) % t
        },
        F = function (e) {
            var t = r({
                jsonp: "callback",
                retryTimes: 3,
                timeout: pageConfig.reqTimeout || 5e3
            }, e);
            t.name && (window[t.name] = g), v(6) && (t.url = "//loadAsyncError.jd.com", t.timeout = 1500), v(7) && (t.url = "//loadAsyncError.jd.com", t.retryTimes = 0, t.timeout = 1500, t.backup = null), v(8) && (t.url = "//loadAsyncError.jd.com", t.timeout = 999999999);
            var n = (0, s["default"])(t);
            return t.reportBackupId && n.then(function (e) {
                e.__$$backupCall && d["default"].processBackup(t.reportBackupId)
            }), t.reportHidedId && n["catch"](function (e) {
                t.backup && d["default"].processBackup(t.reportBackupId), d["default"].processHidedFloor(t.reportHidedId)
            }), v(9) && (n.then(function (n) {
                L.groupCollapsed("%c请求成功: " + e.url, "color: #B1B479"), L.log("请求参数:", t), L.log("返回结果:", n), L.groupEnd()
            }), n["catch"](function (n) {
                L.groupCollapsed("%c请求失败: " + e.url, "color: #D05A6E"), L.log("请求参数:", t), L.log("错误对象:", n), L.groupEnd()
            })), n
        },
        W = g,
        J = {},
        K = function (e) {
            return J.loginstatus || (J.loginstatus = new Promise(function (e, t) {
                F({
                    url: f.APIS.ISLOGIN,
                    name: "jsonpLogin",
                    dataCheck: function () {
                        function dataCheck(e) {
                            return !!(e && e.Identity && e.Identity.IsAuthenticated)
                        }
                        return dataCheck
                    }()
                }).then(function (t) {
                    e({
                        isLogin: !0,
                        nick: t.Identity.Unick,
                        name: t.Identity.Name,
                        Identity: t.Identity
                    })
                })["catch"](function () {
                    e({
                        isLogin: !1,
                        Identity: {
                            IsAuthenticated: !1
                        }
                    })
                })
            })), J.loginstatus
        },
        V = function (e) {
            return J.userinfo || (J.userinfo = new Promise(function (e, t) {
                K().then(function (t) {
                    t.isLogin ? F({
                        url: f.APIS.USERINFO,
                        timeout: 1e3,
                        name: "jsonpUserinfo"
                    }).then(function (t) {
                        v(130) && (t.userLevel = 7), t.isCompany = 7 === t.userLevel, t.userLevel = Number(t.userLevel) || 1, t.plusStatus = Number(t.plusStatus) || 0, v(131) && (t.plusStatus = 0), v(132) && (t.plusStatus = 1), v(133) && (t.plusStatus = 2), v(134) && (t.plusStatus = 3), v(135) && (t.plusStatus = 4), v(136) && (t.plusStatus = 5), e(t)
                    })["catch"](function () {
                        e({})
                    }) : e({})
                })
            })), J.userinfo
        },
        G = function () {
            return J.userlevel || (J.userlevel = new Promise(function (e, t) {
                var n = z(!0);
                if (null == n || "" === n) return void e(null);
                F({
                    url: f.APIS.USER_LEVEL,
                    timeout: 1e3,
                    name: "jsonpUserLevel",
                    params: {
                        param1: decodeURIComponent(n)
                    }
                }).then(function (t) {
                    e(0 === t.code ? t.data : null)
                })["catch"](function () {
                    e(null)
                })
            })), J.userlevel
        },
        Y = function () {
            return J.usercompany || (J.usercompany = new Promise(function (e, t) {
                G().then(function (t) {
                    e(90 === t ? {
                        isCompany: !0
                    } : {
                        isCompany: !1
                    })
                })
            })), J.usercompany
        },
        Q = function () {
            return J.afterload || (J.afterload = new Promise(function (e, t) {
                var n = function onload() {
                    window.removeEventListener("load", onload), e()
                };
                "complete" === document.readyState ? n() : window.addEventListener("load", n)
            })), J.afterload
        },
        X = function () {
            return J.newuserinfo || (J.newuserinfo = new Promise(function (e, t) {
                K().then(function (t) {
                    t.isLogin ? F({
                        url: f.APIS.USER_ISNEW,
                        name: "jsonpNewuserinfo",
                        dataCheck: function () {
                            function dataCheck(e) {
                                if (!e || "10000" !== e.STATE) return !1
                            }
                            return dataCheck
                        }()
                    }).then(function (t) {
                        pageConfig.isNewUser = t.isNew, e({
                            isNew: t.isNew
                        })
                    })["catch"](function () {
                        pageConfig.isNewUser = !1, e({
                            isNew: !1
                        })
                    }) : e({
                        isNew: !1
                    })
                })
            })), J.newuserinfo
        },
        Z = function () {
            if (!J.moreCtnAsync) {
                var e = z(),
                    t = B();
                if (!e || !t) return Promise.resolve({});
                J.moreCtnAsync = new Promise(function (e, t) {
                    F({
                        url: f.APIS.MORE_OTHERS2_NOTIFY,
                        params: {
                            pin: z(),
                            jda: B()
                        },
                        name: "jsonpMoreCtnAsync"
                    }).then(function () {
                        e({
                            success: !0
                        })
                    })["catch"](function () {
                        e({})
                    })
                })
            }
            return J.moreCtnAsync
        },
        ee = function () {
            return J.spoint || (J.spoint = new Promise(function (e, t) {
                K().then(function (t) {
                    t.isLogin ? F({
                        url: f.APIS.USER_SPOINT,
                        params: {
                            pin: z()
                        },
                        name: "jsonpSpoint",
                        dataCheck: function () {
                            function dataCheck(e) {
                                return !!e
                            }
                            return dataCheck
                        }()
                    }).then(function (t) {
                        e({
                            spoint: Number(t.totalScore)
                        })
                    })["catch"](function () {
                        e({
                            spoint: ""
                        })
                    }) : e({
                        spoint: ""
                    })
                })
            })), J.spoint
        },
        te = function (e, t, n) {
            var i = n,
                r = void 0,
                o = void 0,
                a = void 0,
                l = null,
                c = 0;
            i || (i = {});
            var s = function () {
                c = !1 === i.leading ? 0 : (new Date).getTime(), l = null, a = e.apply(r, o), l || (r = o = null)
            };
            return function () {
                var n = (new Date).getTime();
                c || !1 !== i.leading || (c = n);
                var u = t - (n - c);
                return r = this, o = arguments, u <= 0 || u > t ? (clearTimeout(l), l = null, c = n, a = e.apply(r, o), l || (r = o = null)) : l || !1 === i.trailing || (l = setTimeout(s, u)), a
            }
        },
        ne = function (e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0,
                n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0",
                i = String(e),
                r = t - i.length;
            return "" + (r > 0 ? Array(1 + r).join(n) : "") + i
        },
        ie = function (e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1,
                n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2],
                i = Array.prototype.slice.call(e),
                r = [];
            if (n) {
                var o = void 0;
                for (e.length % t != 0 && (o = e.slice(-1 * t)); i.length >= t;) r.push(i.splice(0, t));
                o && r.push(o)
            } else
                for (; i.length > 0;) r.push(i.splice(0, t));
            return r
        },
        re = function (e) {
            var t = $(e),
                n = t.offset();
            return {
                left: n.left,
                top: n.top,
                width: t.width(),
                height: t.height()
            }
        },
        oe = function () {
            document.body.addEventListener("keyup", function (e) {
                var t = document.activeElement.tagName.toLowerCase();
                if ("input" !== t && "textarea" !== t) {
                    var n = e || window.event;
                    switch (n.keyCode || n.which) {
                        case 68:
                            window.pageConfig.clientViewTop || (window.pageConfig.clientViewTop = 0), window.pageConfig.clientViewTop += document.documentElement.clientHeight, window.scrollTo(0, pageConfig.clientViewTop);
                            break;
                        case 83:
                            window.scrollTo(0, 0), window.pageConfig.clientViewTop = 0, document.getElementById("key").focus();
                            break;
                        case 84:
                            window.scrollTo(0, 0), window.pageConfig.clientViewTop = 0
                    }
                }
            })
        },
        ae = function () {
            return n.e(18).then(n.bind(null, 111)).then(function () {
                seajs.config({
                    alias: {
                        "home/widget/mobile_pop": f.URLS.HEAD_MOBILE
                    }
                })
            })
        },
        le = _ && _.eventCenter,
        ce = function (e) {
            if (e.getBoundingClientRect) {
                var t = e.getBoundingClientRect(),
                    n = t.top,
                    i = t.height,
                    r = window.pageYOffset + n;
                return {
                    top: r,
                    bottom: r + i
                }
            }
        },
        se = null,
        ue = null,
        de = void 0;
    window.addEventListener("resize", function () {
        var e = null,
            n = $("html"),
            i = function onResize() {
                var i = window.innerWidth,
                    r = window.innerHeight;
                v(2) ? t.isWide = de = !1 : v(3) ? t.isWide = de = !0 : t.isWide = de = i >= 1190, pageConfig.wideVersion !== de && (pageConfig.wideVersion = de, de ? (n.removeClass("o2_mini"), n.addClass("o2_wide"), n.addClass("root61")) : (n.removeClass("o2_wide"), n.removeClass("root61"), n.addClass("o2_mini")), _.eventCenter.trigger("isWideChange", {
                    detail: {
                        isWide: de
                    }
                })), _.eventCenter.trigger("home:resize"), se === i && ue === r || (e && window.clearTimeout(e), e = window.setTimeout(onResize, 100)), se = i, ue = r
            };
        return i(), i
    }());
    var fe = function (e, t) {
            var n = void 0,
                i = void 0;
            if (t) {
                var r = ce(t);
                n = r.top, i = r.bottom
            } else n = e.top, i = e.bottom;
            return window.pageYOffset < i && window.pageYOffset + ue > n
        },
        pe = /^ *contury_/.test(y("PCSYCity")),
        me = function (e, t) {
            var n = t.error;
            return t.pastDelay ? l["default"].createElement("div", {
                className: "mod_lazyload",
                style: e
            }) : n ? "" : l["default"].createElement("div", {
                className: "mod_lazyload",
                style: e
            })
        },
        he = Date.now(),
        ge = he > 15292512e5 && he < 15293376e5 || v(618),
        ve = function () {
            var e = y("ipLoc-djd");
            if (/\d+-\d+-\d+-\d+/.test(e)) return e.replace(/-/g, "_")
        },
        _e = function () {
            (new Image).src = "//ccc.jd.com/cookie_check"
        },
        be = {
            MAC_ENTER: 3,
            BACKSPACE: 8,
            TAB: 9,
            NUM_CENTER: 12,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAUSE: 19,
            CAPS_LOCK: 20,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PRINT_SCREEN: 44,
            INSERT: 45,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            QUESTION_MARK: 63,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            META: 91,
            WIN_KEY_RIGHT: 92,
            CONTEXT_MENU: 93,
            NUM_ZERO: 96,
            NUM_ONE: 97,
            NUM_TWO: 98,
            NUM_THREE: 99,
            NUM_FOUR: 100,
            NUM_FIVE: 101,
            NUM_SIX: 102,
            NUM_SEVEN: 103,
            NUM_EIGHT: 104,
            NUM_NINE: 105,
            NUM_MULTIPLY: 106,
            NUM_PLUS: 107,
            NUM_MINUS: 109,
            NUM_PERIOD: 110,
            NUM_DIVISION: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            NUMLOCK: 144,
            SEMICOLON: 186,
            DASH: 189,
            EQUALS: 187,
            COMMA: 188,
            PERIOD: 190,
            SLASH: 191,
            APOSTROPHE: 192,
            SINGLE_QUOTE: 222,
            OPEN_SQUARE_BRACKET: 219,
            BACKSLASH: 220,
            CLOSE_SQUARE_BRACKET: 221,
            WIN_KEY: 224,
            MAC_FF_META: 224,
            WIN_IME: 229
        },
        ye = function (e) {
            if (e >= be.ZERO && e <= be.NINE) return !0;
            if (e >= be.NUM_ZERO && e <= be.NUM_MULTIPLY) return !0;
            if (e >= be.A && e <= be.Z) return !0;
            if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e) return !0;
            switch (e) {
                case be.WIN_IME:
                case be.QUESTION_MARK:
                case be.NUM_PLUS:
                case be.NUM_MINUS:
                case be.NUM_PERIOD:
                case be.NUM_DIVISION:
                case be.SEMICOLON:
                case be.DASH:
                case be.EQUALS:
                case be.COMMA:
                case be.PERIOD:
                case be.SLASH:
                case be.APOSTROPHE:
                case be.SINGLE_QUOTE:
                case be.OPEN_SQUARE_BRACKET:
                case be.BACKSLASH:
                case be.CLOSE_SQUARE_BRACKET:
                    return !0;
                default:
                    return !1
            }
        },
        we = 8 === document.documentMode;
    t.sendClog = m, t.resizeImage = C, t.clipImage = x, t.setImageQuality = E, t.getImageDomain = I, t.replaceMImageUrl = T, t.processImage = A, t.o2Control = b, t.isdebug = v, t.isWide = de, t.isRetina = k, t.mergeClassName = N, t.dconsole = L, t.readCookie = y, t.createCookie = w, t.loadAsync = F, t.getRandomData = R, t.getBiAttr = W, t.getLoginstatus = K, t.getUserinfo = V, t.getCompanyinfo = Y, t.getSpoint = ee, t.afterLoad = Q, t.getNewuserinfo = X, t.getDomain = P, t.throttle = te, t.splitArr = ie, t.getDomInfo = re, t.padding = ne, t.webpSupported = j, t.isInternational = pe, t.getPin = z, t.getUuid = q, t.getJda = B, t.getHash = H, t.bindHotkey = oe, t.merge = h, t.eventCenter = le, t.loadLegacy = ae, t.getElementPos = ce, t.isInViewport = fe, t.loadingPlaceholder = me, t.shouldAnimate = ge, t.getAreaLv4 = ve, t.cookieCheck = _e, t.isCharacterKey = ye, t.classnames = classnames, t.isSkuSelf = isSkuSelf, t.notifyMoreCtnAsync = Z, t.isNotEmptyObj = isNotEmptyObj, t.isIE8 = we
}, function (e, t, n) {
    e.exports = n.p + "static/images/sprite.shortcutDropdown.png"
}, function (e, t, n) {
    e.exports = n.p + "static/images/sprite.shortcutDropdown@2x.png"
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PLUSARRAY = t.SHOWNTHEMES = t.CONSTS = t.URLS = t.APIS = undefined;
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(7),
        a = n(1),
        l = {
            BLANK_IMG: "//misc.360buyimg.com/mtd/pc/common/img/blank.png",
            BLANK_AVATAR: "//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg",
            LOGO: a.isRetina ? "//img10.360buyimg.com/da/jfs/t17371/157/2401374190/7797/d908e60/5af2ba86Nb72d2cf3.jpg" : "//img30.360buyimg.com/da/jfs/t16705/67/2414698135/3404/b8a6860/5af2ba84N24f6a11b.jpg",
            SECKILL: "//miaosha.jd.com",
            SECKILL_BRAND: "//miaosha.jd.com/pinpailist.html",
            SECKILL_TYPE: "//miaosha.jd.com/brandlist.html",
            SECKILL_PREFIX: "//miaosha.jd.com/#",
            TOP_PREFIX: "//top.jd.com/",
            MIME_PREFIX: "//jdiscover.jd.com",
            SHOPPINGCART: "//cart.jd.com/",
            MASSHOP: "//huiguang.jd.com",
            JOY: "//hellojoy.jd.com/",
            NEWS: "//kuaibao.jd.com/",
            HOME: "//home.jd.com",
            LOGIN: "//passport.jd.com",
            LOGOUT: "//passport.jd.com/uc/login?ltype=logout",
            REGIST: "//reg.jd.com",
            XINREN: "//xinren.jd.com/?channel=99",
            VIP: "//vip.jd.com",
            MIAOSHA: "//miaosha.jd.com",
            DAILY: "//ypzj.jd.com",
            GOODREC: "//fxhh.jd.com",
            GOODREC_PREFIX: "//fxhh.jd.com/?linkIds=",
            SHOP_PREFIX: "http://mall.jd.com/index-",
            SHOP_SUFIX: ".html",
            TOP: "//top.jd.com",
            GOODSHOP: "//haodian.jd.com",
            PLUS: "//plus.jd.com",
            PLUS_TOPBAR: "//plus.jd.com/index?flow_system=appicon&flow_entrance=appicon1&flow_channel=pc",
            PLUS_USERINFO_Y: "//plus.jd.com/index?flow_system=appicon&flow_entrance=appicon2&flow_channel=pc",
            PLUS_USERINFO_N: "//plus.jd.com/index?flow_system=appicon&flow_entrance=appicon3&flow_channel=pc",
            PLUSSALE: "//sale.jd.com/act/Xno3MQRklCIm.html",
            COMPANY_B: "//b.jd.com",
            COMPANY_BVIP: "//bvip.jd.com",
            VIP_USER: "//vip.jd.com/",
            PLUS_USER: "//plus.jd.com/index",
            LIVE: "//jdlive.jd.com/home.html",
            HEAD_MOBILE: "//nfa.jd.com/loadFa.action?aid=0_0_8762"
        },
        c = {
            SECKILL: "//ai.jd.com/index_new.php?app=Seckill&action=pcIndexMiaoShaArea",
            SECKILL_BACKUP: "//www.3.cn/bup/index_new.php?app=Seckill&action=pcIndexMiaoShaArea",
            SECKILL_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/90a25281b9.js",
            TOPCATE: "//ch.jd.com/homecate2?source=pc",
            TOPCATE_BACKUP: "//www.3.cn/bup/homecate2",
            TOPCATE_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/9a50600072.js",
            TOPRANK: "//ch.jd.com/homepro?source=pc",
            TOPRANK_BACKUP: "//www.3.cn/bup/homepro",
            DAILY: "//f.3.cn/recommend/list/get",
            DAILY_BACKUP: "//www.3.cn/index/recommend_bak/list",
            DAILY_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/621e5ff1e7.js",
            MIME: "//f.3.cn/recommend/info/get",
            MIME_BACKUP: "//www.3.cn/index/recommend_bak/info",
            MIME_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/d5c5fac495.js",
            GOODREC: "//ai.jd.com/index_new.php?app=Discovergoods&action=getDiscZdmGoodsListForIndex&tag=2",
            GOODREC_BACKUP: "//www.3.cn/bup/index_new.php?app=Discovergoods&action=getDiscZdmGoodsListForIndex&tag=2",
            GOODREC_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/a38657e597.js",
            MASSHOP: "//f.3.cn/index-floor-scene?argv=stroll",
            MASSHOP_BACKUP: "//www.3.cn/index/bak/stroll",
            MASSHOP_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/e17565c9a0.js",
            COUPON: "//f.3.cn/index-floor-scene?argv=coupon",
            COUPON_BACKUP: "//www.3.cn/index/bak/coupon",
            COUPON_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/89481b7ed6.js",
            ENJOY: "//f.3.cn/index-floor-scene?argv=enjoy",
            ENJOY_BACKUP: "//www.3.cn/index/bak/enjoy",
            ENJOY_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/42d3760bef.js",
            NEWPEOPLE: "//f.3.cn/index-floor-scene?argv=npeople",
            NEWPEOPLE_BACKUP: "//www.3.cn/index/bak/npeople",
            NEWPEOPLE_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/c2103cb719.js",
            COMPANY: "//f.3.cn/index-floor-scene?argv=customer",
            COMPANY_BACKUP: "//www.3.cn/index/bak/company",
            COMPANY_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/040f301456.js",
            STAGEINFO: "//f.3.cn/index-floor-scene?argv=info",
            STAGEINFO_BACKUP: "//www.3.cn/index/bak/info",
            STAGEINFO_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/a5fb919e44.js",
            CHN: "//f.3.cn/index-floor-shop",
            CHN_BAK: "//www.3.cn/index/bak/",
            SCENE: "//f.3.cn/index-floor-scene?argv=joy",
            SCENE_BACKUP: "//www.3.cn/index/bak/joy",
            SCENE_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/bed3c32918.js",
            SPECIAL: "//f.3.cn/index-floor-scene?argv=special",
            SPECIAL_BACKUP: "//www.3.cn/index/bak/special",
            SPECIAL_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/c7a873e001.js",
            LIVE: "//f.3.cn/index-floor-scene?argv=live",
            LIVE_BACKUP: "//www.3.cn/index/bak/live",
            LIVE_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/1aaf0a677e.js",
            PRICE: "//p.3.cn/prices/mgets?source=pc_home",
            PROMOTE_PRICE: "//dy.jd.com/promotePrice?priceInfos=tag",
            GOOD_COUPON: "//pjapi.jd.com/coupon/batchGetSkuExistCoupon",
            CATEA: "//dc.3.cn/category/get",
            CATEA_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/98f0d0ea3a.js",
            CATEB: "//ai.jd.com/index_new.php?app=ABdata&action=ABData&key=BtestData",
            CATEB_BACKUP: "//www.3.cn/bup/index_new.php?app=ABdata&action=ABData&key=BtestData",
            CATEB_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/7cb47c9ae4.js",
            FOCUS: "//f.3.cn/recommend/focus_gateway/get",
            FOCUS_BACKUP: "//www.3.cn/index/recommend_bak/focus_gateway",
            FOCUS_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/293c3a4359.js",
            REC: "//floor.jd.com/recommend/today_gateway/get",
            REC_BACKUP: "//www.3.cn/index/recommend_bak/today_gateway",
            REC_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/3741125c32.js",
            REC_ERRLOG: "//mercury.jd.com/log.gif?t=rec.619066&v=src=rec$errorcode=",
            ISLOGIN: "//passport.jd.com/loginservice.aspx?method=Login",
            USERINFO: "//passport.jd.com/user/petName/getUserInfoForMiniJd.action",
            USER_SPOINT: "//floor.jd.com/user/score/get",
            USER_NAME: "//passport.jd.com/new/helloService.ashx",
            USER_ISNEW: "//ai.jd.com/index_new.php?app=Newuser&action=isNewuser",
            USER_LEVEL: "//dy.jd.com/jsf_user_level",
            USER_ISCOMPANY: "//corp.jd.com/publicSoa/userInfo/getUserLevel",
            HOTWORDS: "//floor.jd.com/user/hotwords/get",
            HOTWORDS_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/2b340c1a7e.js",
            HEAD_SERVICE: "//dc.3.cn/client/get",
            HEAD_SERVICE_BACKUP: "//d.jd.com/client/get",
            HEAD_SITENAV: "//dc.3.cn/navigation/get",
            HEAD_SITENAV_BACKUP: "//d.jd.com/navigation/get",
            MYJD_GETHOMECOUNT: "//minijd.jd.com/getHomeCount",
            MYJD_GETMYJDANSWERCOUNT: "//question.jd.com/myjd/getMyJdAnswerCount.action",
            MYJD_REDUCEPRODUCTCOUNT: "//follow-soa.jd.com/rpc/product/queryForReduceProductCount.action?sysName=misc",
            MYJD_GETCOUPONCOUNT: "//quan.jd.com/getcouponcount.action",
            MYJD_MSGCENTER: "//joycenter.jd.com/msgCenter/init.action",
            MYJD_QUERYBT: "//btshow.jd.com/ious/queryBT.do?sourceType=137",
            MORE_GOODS: "//diviner.jd.com/diviner?p=610009&lid=1",
            MORE_GOODS_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/7a55efa35e.js",
            MORE_GOODS2: "//floor.jd.com/user/feed/get",
            MORE_GOODS_STOBACKUP2: "//storage.jd.com/fd1f0b5a9b65f5e8/d643e3b2c8.js",
            MORE_PRESELL: "//f.3.cn/recommend/pre_sale/get",
            MORE_PRESELLPRICE: "//yuding.jd.com/presaleInfo/getPresaleInfo.action",
            MORE_CHOSEN: "//dy.jd.com/jsf_selection_online",
            MORE_YUSHOU: "//dy.jd.com/jsf_yy_hide_price",
            MORE_OTHERS: "//f.3.cn/index-floor-scene?argv=feed",
            MORE_OTHERS_BACKUP: "//www.3.cn/index/bak/feed",
            MORE_OTHERS_STOBACKUP: "//storage.jd.com/7ff749b346d2f947/143d03c33e.js",
            MORE2_OTHERS: "//papi-service.jd.com/feed/content/aggregate/?format=jsonp",
            MORE2_OTHERS_BACKUP: "//www.3.cn/bup/feed/content/aggregate/",
            MORE2_OTHERS_BACKUP1: "//storage.jd.com/fd1f0b5a9b65f5e8/30a9de95f5.js",
            MORE_OTHERS2_NOTIFY: "//papi-service.jd.com/feed/content/async/?format=jsonp",
            MORE_FIND: "//diviner.jd.com/diviner?p=619028&&lid=1&ec=utf-8",
            NEWS: "//floor.jd.com/recommend/news/get",
            NEWS_BAK: "//storage.360buyimg.com/17a4b79c9deabd62/jsonNews.js",
            JOYTOP: "//f.3.cn/index-floor-scene?argv=mtop",
            JOYTOP_BAK: "//www.3.cn/index/bak/mtop",
            LOGO: "//f.3.cn/index-floor-scene?argv=logo",
            LOGO_BAK: "//www.3.cn/index/bak/logo"
        };
    (0, a.isdebug)(29) || ((0, a.isdebug)(30) || pageConfig.goodShopSectionStart && o.USER.unifiedHash < pageConfig.goodShopSectionStart) && (c.CHN = "//f.3.cn/index-floor-scene", c.CHN_BAK = "//www.3.cn/index/bak/"), (0, a.isdebug)(17) && (c.USER_SPOINT = "//floor.jd.com/user/score/get?auth=qazwsc"), (0, a.isdebug)(18) && (l.JOY = "//portal.cms.jd.com/preview/preview/preview/6153"), (0, a.isdebug)(20) && (c.PRICE = "//p.3.local/prices/mgets?source=pc_home");
    var s = {
            REQ_TIMES: 3e3,
            REQ_TIMEOUT: 3e3,
            CLSTAGPREFIX: pageConfig.clstagPrefix.replace(/\|$/, ""),
            LAZYIMGOPTS: {
                once: !0,
                offset: [300, 300],
                placeholder: r["default"].createElement("div", {
                    className: "mod_loading"
                })
            },
            LAZYIMPROPTS: {
                once: !0,
                offset: [-100, -100],
                placeholder: r["default"].createElement("div", {
                    style: "width:1px;height:0;"
                })
            },
            AREA: (0, a.getAreaLv4)()
        },
        u = !0;
    (0, a.isdebug)(31) || ((0, a.isdebug)(32) || pageConfig.newsSectionStart && o.USER.unifiedHash < pageConfig.newsSectionStart) && (u = !1), s.showNews = u;
    var d = 2;
    (0, a.isdebug)(36) || ((0, a.isdebug)(35) ? d = 1 : (0, a.isdebug)(34) ? d = 0 : pageConfig.more1SectionStart && o.USER.unifiedHash < pageConfig.more1SectionStart ? d = 1 : pageConfig.more0SectionStart && o.USER.unifiedHash < pageConfig.more0SectionStart && (d = 0)), s.moreVersion = d;
    var f = "开通PLUS 平均省1012元/年",
        p = [f, f, f, "现在续费PLUS享特惠价", "续费PLUS 平均省1012元/年", "只差一步 激活PLUS享特权"],
        m = [];
    t.APIS = c, t.URLS = l, t.CONSTS = s, t.SHOWNTHEMES = m, t.PLUSARRAY = p
}, function (e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function isWebpackReady(e) {
        return "object" === r(n.m) && e().every(function (e) {
            return void 0 !== e && "undefined" != typeof n.m[e]
        })
    }

    function load(e) {
        var t = e(),
            n = {
                loading: !0,
                loaded: null,
                error: null
            };
        return n.promise = t.then(function (e) {
            return n.loading = !1, n.loaded = e, e
        })["catch"](function (e) {
            throw n.loading = !1, n.error = e, e
        }), n
    }

    function loadMap(e) {
        var t = {
                loading: !1,
                loaded: {},
                error: null
            },
            n = [];
        try {
            Object.keys(e).forEach(function (i) {
                var r = load(e[i]);
                r.loading ? t.loading = !0 : (t.loaded[i] = r.loaded, t.error = r.error), n.push(r.promise), r.promise.then(function (e) {
                    t.loaded[i] = e
                })["catch"](function (e) {
                    t.error = e
                })
            })
        } catch (i) {
            t.error = i
        }
        return t.promise = Promise.all(n).then(function (e) {
            return t.loading = !1, e
        })["catch"](function (e) {
            throw t.loading = !1, e
        }), t
    }

    function resolve(e) {
        return e && e.__esModule ? e["default"] : e
    }

    function render(e, t) {
        return a["default"].createElement(resolve(e), t)
    }

    function createLoadableComponent(e, t) {
        function init() {
            return r || (r = e(n.loader)), r.promise
        }
        if (!t.loading) throw new Error("Nerv-loadable requires a `loading` component");
        var n = Object.assign({
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                render: render,
                webpack: null,
                modules: null
            }, t),
            r = null;
        return l.push(init), "function" == typeof n.webpack && c.push(function () {
                if (isWebpackReady(n.webpack)) return init()
            }),
            function (e) {
                function LoadableComponent(e) {
                    _classCallCheck(this, LoadableComponent);
                    var t = _possibleConstructorReturn(this, (LoadableComponent.__proto__ || Object.getPrototypeOf(LoadableComponent)).call(this, e));
                    return init(), t.state = {
                        error: r.error,
                        pastDelay: !1,
                        timedOut: !1,
                        loading: r.loading,
                        loaded: r.loaded
                    }, t
                }
                return _inherits(LoadableComponent, e), i(LoadableComponent, [{
                    key: "componentWillMount",
                    value: function () {
                        function componentWillMount() {
                            var e = this;
                            if (this._mounted = !0, this.context.loadable && Array.isArray(n.modules) && n.modules.forEach(function (t) {
                                    e.context.loadable.report(t)
                                }), r.loading) {
                                "number" == typeof n.delay && (0 === n.delay ? this.setState({
                                    pastDelay: !0
                                }) : this._delay = setTimeout(function () {
                                    e.setState({
                                        pastDelay: !0
                                    })
                                }, n.delay)), "number" == typeof n.timeout && (this._timeout = setTimeout(function () {
                                    e.setState({
                                        timedOut: !0
                                    })
                                }, n.timeout));
                                var t = function () {
                                    function update() {
                                        e._mounted && (e.setState({
                                            error: r.error,
                                            loaded: r.loaded,
                                            loading: r.loading
                                        }), e._clearTimeouts())
                                    }
                                    return update
                                }();
                                r.promise.then(function () {
                                    if (e.props.test) {
                                        var n = a["default"].findDOMNode(e),
                                            i = function () {
                                                function onClick(e) {
                                                    e.stopPropagation(), e.preventDefault(), n.removeEventListener("click", onClick), t()
                                                }
                                                return onClick
                                            }();
                                        n.addEventListener("click", i)
                                    } else t()
                                })["catch"](function (e) {
                                    throw t(), e
                                })
                            }
                        }
                        return componentWillMount
                    }()
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        function componentWillUnmount() {
                            this._mounted = !1, this._clearTimeouts()
                        }
                        return componentWillUnmount
                    }()
                }, {
                    key: "_clearTimeouts",
                    value: function () {
                        function _clearTimeouts() {
                            clearTimeout(this._delay), clearTimeout(this._timeout)
                        }
                        return _clearTimeouts
                    }()
                }, {
                    key: "render",
                    value: function () {
                        function render() {
                            return this.state.loading || this.state.error ? a["default"].createElement(n.loading, {
                                isLoading: this.state.loading,
                                pastDelay: this.state.pastDelay,
                                timedOut: this.state.timedOut,
                                error: this.state.error
                            }) : this.state.loaded ? n.render(this.state.loaded, this.props) : null
                        }
                        return render
                    }()
                }], [{
                    key: "preload",
                    value: function () {
                        function preload() {
                            return init()
                        }
                        return preload
                    }()
                }]), LoadableComponent
            }(a["default"].Component)
    }

    function Loadable(e) {
        return createLoadableComponent(load, e)
    }

    function LoadableMap(e) {
        if ("function" != typeof e.render) throw new Error("LoadableMap requires a `render(loaded, props)` function");
        return createLoadableComponent(loadMap, e)
    }

    function flushInitializers(e) {
        for (var t = []; e.length;) {
            var n = e.pop();
            t.push(n())
        }
        return Promise.all(t).then(function () {
            if (e.length) return flushInitializers(e)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }(),
        r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = n(0),
        a = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(o),
        l = [],
        c = [];
    Loadable.Map = LoadableMap;
    var s = function (e) {
        function Capture() {
            return _classCallCheck(this, Capture), _possibleConstructorReturn(this, (Capture.__proto__ || Object.getPrototypeOf(Capture)).apply(this, arguments))
        }
        return _inherits(Capture, e), i(Capture, [{
            key: "getChildContext",
            value: function () {
                function getChildContext() {
                    return {
                        loadable: {
                            report: this.props.report
                        }
                    }
                }
                return getChildContext
            }()
        }, {
            key: "render",
            value: function () {
                function render() {
                    return this.props.children[0]
                }
                return render
            }()
        }]), Capture
    }(a["default"].Component);
    Loadable.Capture = s, Loadable.preloadAll = function () {
        return new Promise(function (e, t) {
            flushInitializers(l).then(e, t)
        })
    }, Loadable.preloadReady = function () {
        return new Promise(function (e, t) {
            flushInitializers(c).then(e, e)
        })
    }, t["default"] = Loadable
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.processUrl = t.sendImageLog = t.sendImpr = t.isClogSent = t.cancelClog = t.sendClog = t.initClicklogger = t.getjQLogParams = t.generateLogParams = t.logClick = t.logImpr = undefined;
    var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = n(1),
        a = n(4),
        l = function (e) {
            var t = String(e) || "",
                n = t.match(/c-nfa\.jd\.com[\s\S]+url=([\s\S]+)$/);
            return n && n[1] ? n[1] : e
        },
        c = {
            arr: [],
            timer: null,
            log: function () {
                function log(e) {
                    var t = void 0;
                    if (t = e || this.arr.shift()) {
                        if ((0, o.isdebug)(13)) {
                            o.dconsole.groupCollapsed("%c" + t.comment + "曝光: " + t.logData.poi, "color: rgb(255, 208, 64)"), o.dconsole.log(t.logData), o.dconsole.groupEnd()
                        }
                        window.expLogJSON && window.expLogJSON("pc_homepage", "basic", JSON.stringify(t.logData))
                    } else this.stop()
                }
                return log
            }(),
            start: function () {
                function start() {
                    var e = this;
                    this.timer || (this.timer = setInterval(function () {
                        e.log()
                    }, pageConfig.logInterval || 100))
                }
                return start
            }(),
            stop: function () {
                function stop() {
                    this.timer && clearInterval(this.timer), this.timer = null
                }
                return stop
            }(),
            push: function () {
                function push(e, t) {
                    var n = this;
                    t ? this.log(e) : this.arr.push(e), (0, o.afterLoad)().then(function () {
                        n.start()
                    })
                }
                return push
            }()
        },
        s = function (e) {
            var t = e.rept,
                n = t === undefined ? "impr" : t,
                i = e.poi,
                r = i === undefined ? null : i,
                a = e.text,
                s = a === undefined ? null : a,
                u = e.url,
                d = u === undefined ? null : u,
                f = e.desc,
                p = f === undefined ? null : f,
                m = e.mcinfo,
                h = m === undefined ? null : m,
                g = e.biclk,
                v = g === undefined ? null : g,
                _ = e.comment,
                b = _ === undefined ? "" : _;
            arguments.length > 1 && arguments[1] !== undefined && arguments[1];
            r = r.replace(/_/g, "|");
            var y = s || "";
            y = String(y).replace(/ +/g, " ").replace(/[\r\n]/g, ""), y = 0 === y.length ? null : y;
            var w = p || "";
            w = String(w).replace(/ +/g, " ").replace(/[\r\n]/g, ""), w = 0 === w.length ? null : w;
            var k = l(d);
            (0, o.isdebug)(5) || c.push({
                comment: b,
                logData: {
                    rept: n,
                    poi: r,
                    text: y,
                    url: k,
                    desc: w,
                    mcinfo: h,
                    biclk: v
                }
            })
        },
        u = function (e) {
            var t = e.rept,
                n = t === undefined ? "clk" : t,
                i = e.poi,
                r = i === undefined ? null : i,
                a = e.text,
                c = a === undefined ? null : a,
                s = e.url,
                u = s === undefined ? null : s,
                d = e.desc,
                f = d === undefined ? null : d,
                p = e.mcinfo,
                m = p === undefined ? null : p,
                h = e.biclk,
                g = h === undefined ? null : h,
                v = e.comment,
                _ = v === undefined ? "" : v;
            r = r.replace(/_/g, "|");
            var b = c || "";
            b = String(b).replace(/ +/g, " ").replace(/[\r\n]/g, ""), b = 0 === b.length ? null : b;
            var y = f || "";
            y = String(y).replace(/ +/g, " ").replace(/[\r\n]/g, ""), y = 0 === y.length ? null : y;
            var w = l(u);
            if ((0, o.isdebug)(13)) {
                o.dconsole.groupCollapsed("%c" + _ + "点击: " + r, "color: #2EA9DF"), o.dconsole.log({
                    rept: n,
                    poi: r,
                    text: b,
                    url: w,
                    desc: y,
                    mcinfo: m,
                    biclk: g
                }), o.dconsole.groupEnd()
            }(0, o.isdebug)(5) || window.log && window.log("pc_homepage", "basic", n, r, b, w, y, m, g)
        },
        d = ["text", "url", "desc", "mcinfo", "biclk"],
        f = function (e) {
            var t = e || {},
                n = t.ext_columns || t,
                i = {};
            d.forEach(function (e) {
                e in n && (i[e] = n[e])
            });
            var r = JSON.stringify(i);
            return ' data-log="' + encodeURIComponent(r) + '" '
        },
        p = function (e) {
            var t = void 0,
                n = void 0;
            e.target && e.currentTarget ? (t = $(e.target), n = $(e.currentTarget)) : (t = $(e), n = t);
            var i = t.text() || null,
                r = t.closest("a").eq(0).attr("href") || null;
            r = /javascript/.test(r) ? null : r;
            var o = n.attr("clstag") || "",
                a = o.match(/h\|keycount\|([\s\S]+)$/),
                l = a ? a[1] : null,
                c = {
                    text: i,
                    url: r,
                    poi: l
                },
                s = t.closest("[data-log]").eq(0).attr("data-log") || "{}",
                u = JSON.parse(decodeURIComponent(s));
            return d.forEach(function (e) {
                u[e] && (c[e] = u[e])
            }), c
        },
        m = function () {
            $("#logo").delegate("[clstag]", "click", function (e) {
                if (!$(".logo_scene").length) {
                    var t = p(e),
                        n = t.url,
                        i = void 0,
                        r = void 0;
                    if ($("#J_logo_extend").length) {
                        var o = Promos.__instances.logo.activeData;
                        i = "head|logo|02", n = o.href, r = o.alt
                    } else i = "head|logo|01";
                    n && i && u({
                        poi: i,
                        url: n,
                        text: r || null,
                        comment: "京东Logo"
                    })
                }
            }), $("#shortcut").delegate("[clstag]", "click", function (e) {
                var t = p(e),
                    n = t.url,
                    i = t.poi,
                    r = t.text;
                r && n && i ? (r = r.replace(/<[\s\S]*>/, ""), u({
                    poi: i,
                    url: n,
                    text: r,
                    comment: "Topbar"
                })) : i && u({
                    poi: i,
                    comment: "Topbar"
                })
            }), $("#search").delegate("[clstag]", "click", function (e) {
                var t = p(e),
                    n = t.text,
                    i = t.url,
                    r = t.poi;
                n && i && r ? u({
                    poi: r,
                    url: i,
                    text: n,
                    comment: "搜索区 - 主体"
                }) : r && u({
                    poi: r,
                    comment: "搜索区 - 主体"
                })
            }), $("#hotwords").delegate("[clstag]", "click", function (e) {
                var t = p(e),
                    n = t.text,
                    i = t.url,
                    r = t.poi;
                n && i && r && u({
                    poi: r,
                    url: i,
                    text: n,
                    comment: "搜索区 - 热词"
                })
            }), $("#navitems").delegate("[clstag]", "click", function (e) {
                var t = p(e),
                    n = t.text,
                    i = t.url,
                    r = t.poi;
                n && i && r && u({
                    poi: r,
                    url: i,
                    text: n,
                    comment: "横导航"
                })
            }), $("#settleup").bind("click", function (e) {
                var t = p(e),
                    n = t.url,
                    i = t.poi;
                n && i ? u({
                    poi: i,
                    url: n,
                    comment: "购物车"
                }) : i && u({
                    poi: i,
                    comment: "购物车"
                })
            }), $("#treasure").bind("click", function (e) {
                var t = p(e),
                    n = t.url,
                    i = t.poi;
                n && i && u({
                    poi: i,
                    url: n,
                    comment: "直通车"
                })
            }), $("#app").delegate("#J_event_lk[clstag]", "click", function (e) {
                var t = p(e),
                    n = t.url,
                    i = t.poi,
                    r = void 0;
                if (Promos && Promos.__instances && Promos.__instances.logo && Promos.__instances.logo.activeData) {
                    r = Promos.__instances.logo.activeData.alt
                }
                n && i && u({
                    poi: i,
                    url: n,
                    text: r || null,
                    comment: "顶通"
                })
            }), $("#J_cate").delegate("[clstag]", "click", function (e) {
                var t = p(e),
                    n = t.text,
                    i = t.url,
                    r = t.poi;
                r && u({
                    poi: r,
                    url: i,
                    text: n,
                    comment: "左侧分类"
                })
            }), $("#J_user").delegate("[clstag]", "click", function (e) {
                var t = p(e),
                    n = t.text,
                    i = t.url,
                    r = t.poi;
                i && r && u({
                    poi: r,
                    url: i,
                    text: n,
                    comment: "登录卡片"
                })
            }), a.CONSTS.showNews || $("#J_news").delegate("[clstag]", "click", function (e) {
                var t = p(e),
                    n = t.text,
                    i = t.url,
                    r = t.poi;
                n && r && u({
                    poi: r,
                    url: i,
                    text: n,
                    comment: "快报"
                })
            }), $("#J_service").delegate("[clstag]", "click", function (e) {
                var t = p(e),
                    n = t.text,
                    i = t.url,
                    r = t.poi;
                i && r && u({
                    poi: r,
                    url: i,
                    text: n,
                    comment: "生活服务"
                })
            })
        },
        h = function () {
            if (Promos && Promos.__instances && "object" === r(Promos.__instances)) {
                var e = Promos.__instances,
                    t = e["top"],
                    n = e["fsbg"],
                    i = e["promo"],
                    o = e["logo"];
                if (t && t.activeData) {
                    var a = t.activeData;
                    s({
                        poi: "head|adtop|01",
                        url: a.href,
                        text: a.alt || null,
                        comment: "顶通"
                    })
                }
                if (n && n.activeData) {
                    var c = n.activeData;
                    s({
                        poi: "head|adback|null",
                        url: c.href,
                        text: c.alt || null,
                        comment: "背板"
                    })
                }
                if (i && i.activeData) {
                    var u = i.activeData;
                    s({
                        poi: "head|adbtn|null",
                        url: u.href,
                        text: u.alt || null,
                        comment: "直通车"
                    })
                }
                if (o && o.activeData) {
                    var d = o.activeData;
                    s({
                        poi: "head|logo|02",
                        url: l(d.href),
                        text: d.alt || null,
                        comment: "京东logo"
                    })
                }
            }
        },
        g = {
            clogArr: [],
            isActive: !1,
            bound: !1,
            add: function () {
                function add(e) {
                    this.clogArr.push(e), this._start(), this._ensureBound()
                }
                return add
            }(),
            _ensureBound: function () {
                function _ensureBound() {
                    this.bound || (this.bound = !0, window.addEventListener("scroll", this.onScroll))
                }
                return _ensureBound
            }(),
            _unBind: function () {
                function _unBind() {
                    this.bound = !1, window.removeEventListener("scroll", this.onScroll)
                }
                return _unBind
            }(),
            _start: function () {
                function _start() {
                    var e = this;
                    this.isActive || (this.isActive = !0, this.timer = setInterval(function () {
                        var t = e.clogArr.shift();
                        if (!t) return e._stop();
                        var n = (0, o.getElementPos)(t.el);
                        !t.el || (0, o.isInViewport)(n) ? e._send(t.clog) : e.monitorArr.push(i({}, t, {
                            posObj: n
                        }))
                    }, 200))
                }
                return _start
            }(),
            cancleMonitor: function () {
                function cancleMonitor(e) {
                    for (var t = this.monitorArr.length; t--;) {
                        if (e === this.monitorArr[t].clog) {
                            this.monitorArr.splice(t, 1);
                            break
                        }
                    }
                }
                return cancleMonitor
            }(),
            _stop: function () {
                function _stop() {
                    this.isActive = !1, clearInterval(this.timer)
                }
                return _stop
            }(),
            monitorArr: [],
            _send: function () {
                function _send(e) {
                    var t = new Image;
                    !/[a-zA-Z]/.test(e) && pageConfig.clog && pageConfig.clog.logDomain && pageConfig.clog.logV ? t.src = pageConfig.clog.logDomain + e + "&v=" + pageConfig.clog.logV : t.src = e, this.sent[e] = 1
                }
                return _send
            }(),
            _onScroll: function () {
                function _onScroll() {
                    if (this.monitorArr.length)
                        for (var e = this.monitorArr.length; e--;) {
                            var t = this.monitorArr[e];
                            (0, o.isInViewport)(t.posObj) && (this._send(t.clog), this.monitorArr.splice(e, 1))
                        } else this._unBind()
                }
                return _onScroll
            }(),
            sent: {}
        };
    g.onScroll = (0, o.throttle)(function () {
        g._onScroll()
    }, 200);
    var v = function (e) {
            return g.sent[e]
        },
        _ = function (e) {
            if (e) {
                var t = void 0;
                if ("string" == typeof opts) t = {
                    clog: e
                };
                else {
                    if ("object" !== (void 0 === e ? "undefined" : r(e)) || !e.clog) return;
                    t = e
                }
                v(t.clog) || (0, o.afterLoad)().then(function () {
                    g.add(t)
                })
            }
        },
        b = function (e) {
            e && g.cancleMonitor(e)
        },
        y = function (e) {
            var t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
            if (e && !(e.length < 10)) {
                var n = new Image,
                    i = t ? "m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer) + "&random=" + Math.random() : "",
                    r = e + (i ? (-1 === e.indexOf("?") ? "?" : "&") + i : "");
                if ((0, o.isdebug)(13)) {
                    o.dconsole.log("%cImageLog: " + r, "color: #2EA9DF")
                }
                n.setAttribute("src", r)
            }
        };
    t.logImpr = s, t.logClick = u, t.generateLogParams = f, t.getjQLogParams = p, t.initClicklogger = m, t.sendClog = _, t.cancelClog = b, t.isClogSent = v, t.sendImpr = h, t.sendImageLog = y, t.processUrl = l
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.USER = undefined;
    var i = n(1),
        r = (0, i.getUuid)(),
        o = {
            pin: decodeURIComponent((0, i.getPin)()),
            uuid: r,
            jda: (0, i.getJda)(),
            unifiedHash: (0, i.getHash)(r, 1e4)
        };
    t.USER = o, t["default"] = o
}, function (e, t) {
    function cssWithMappingToString(e, t) {
        var n = e[1] || "",
            i = e[3];
        if (!i) return n;
        if (t && "function" == typeof btoa) {
            var r = toComment(i);
            return [n].concat(i.sources.map(function (e) {
                return "/*# sourceURL=" + i.sourceRoot + e + " */"
            })).concat([r]).join("\n")
        }
        return [n].join("\n")
    }

    function toComment(e) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
    }
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map(function (t) {
                var n = cssWithMappingToString(t, e);
                return t[2] ? "@media " + t[2] + "{" + n + "}" : n
            }).join("")
        }, t.i = function (e, n) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var i = {}, r = 0; r < this.length; r++) {
                var o = this[r][0];
                "number" == typeof o && (i[o] = !0)
            }
            for (r = 0; r < e.length; r++) {
                var a = e[r];
                "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
            }
        }, t
    }
}, function (e, t, n) {
    function addStylesToDom(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                o = i[r.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) o.parts.push(addStyle(r.parts[a], t))
            } else {
                for (var l = [], a = 0; a < r.parts.length; a++) l.push(addStyle(r.parts[a], t));
                i[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: l
                }
            }
        }
    }

    function listToStyles(e, t) {
        for (var n = [], i = {}, r = 0; r < e.length; r++) {
            var o = e[r],
                a = t.base ? o[0] + t.base : o[0],
                l = o[1],
                c = o[2],
                s = o[3],
                u = {
                    css: l,
                    media: c,
                    sourceMap: s
                };
            i[a] ? i[a].parts.push(u) : n.push(i[a] = {
                id: a,
                parts: [u]
            })
        }
        return n
    }

    function insertStyleElement(e, t) {
        var n = o(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var i = c[c.length - 1];
        if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), c.push(t);
        else {
            if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(t)
        }
    }

    function removeStyleElement(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = c.indexOf(e);
        t >= 0 && c.splice(t, 1)
    }

    function createStyleElement(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css", addAttrs(t, e.attrs), insertStyleElement(e, t), t
    }

    function createLinkElement(e) {
        var t = document.createElement("link");
        return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", addAttrs(t, e.attrs), insertStyleElement(e, t), t
    }

    function addAttrs(e, t) {
        Object.keys(t).forEach(function (n) {
            e.setAttribute(n, t[n])
        })
    }

    function addStyle(e, t) {
        var n, i, r, o;
        if (t.transform && e.css) {
            if (!(o = t.transform(e.css))) return function () {};
            e.css = o
        }
        if (t.singleton) {
            var c = l++;
            n = a || (a = createStyleElement(t)), i = applyToSingletonTag.bind(null, n, c, !1), r = applyToSingletonTag.bind(null, n, c, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = createLinkElement(t), i = updateLink.bind(null, n, t), r = function () {
            removeStyleElement(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = createStyleElement(t), i = applyToTag.bind(null, n), r = function () {
            removeStyleElement(n)
        });
        return i(e),
            function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    i(e = t)
                } else r()
            }
    }

    function applyToSingletonTag(e, t, n, i) {
        var r = n ? "" : i.css;
        if (e.styleSheet) e.styleSheet.cssText = u(t, r);
        else {
            var o = document.createTextNode(r),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
        }
    }

    function applyToTag(e, t) {
        var n = t.css,
            i = t.media;
        if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }

    function updateLink(e, t, n) {
        var i = n.css,
            r = n.sourceMap,
            o = t.convertToAbsoluteUrls === undefined && r;
        (t.convertToAbsoluteUrls || o) && (i = s(i)), r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        var a = new Blob([i], {
                type: "text/css"
            }),
            l = e.href;
        e.href = URL.createObjectURL(a), l && URL.revokeObjectURL(l)
    }
    var i = {},
        r = function (e) {
            var t;
            return function () {
                return void 0 === t && (t = e.apply(this, arguments)), t
            }
        }(function () {
            return window && document && document.all && !window.atob
        }),
        o = function (e) {
            var t = {};
            return function (n) {
                return "undefined" == typeof t[n] && (t[n] = e.call(this, n)), t[n]
            }
        }(function (e) {
            return document.querySelector(e)
        }),
        a = null,
        l = 0,
        c = [],
        s = n(30);
    e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        t = t || {}, t.attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = r()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = listToStyles(e, t);
        return addStylesToDom(n, t),
            function (e) {
                for (var r = [], o = 0; o < n.length; o++) {
                    var a = n[o],
                        l = i[a.id];
                    l.refs--, r.push(l)
                }
                if (e) {
                    addStylesToDom(listToStyles(e, t), t)
                }
                for (var o = 0; o < r.length; o++) {
                    var l = r[o];
                    if (0 === l.refs) {
                        for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                        delete i[l.id]
                    }
                }
            }
    };
    var u = function () {
        var e = [];
        return function (t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }()
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAbCAYAAADYtRcLAAAAAklEQVR4AewaftIAAALFSURBVO3BTYhVVQAA4O9cn454xr+F0dA1FbOwQDBOgkFQizYtslzUokhCyBZCUWRBm9JVWSujRSW1iRDBCMKiaNMiqQ5URIU/pOgNRaJMHME3+m7PrpHKTMHj8Rim+b5Q17W/VSkNYzMewM04hD04jp1lzm2XCSG4Wt2lR6HLVb4Yvr7Wo5ZLqpRuxF4s949RvICleLVKaXuZ81EDNHpmlssFjdp/a+mqUhrGXix3pTfLnDv4uUrpKWyvUnq2zPmcAblp068EdAhFbe41HQGnTxbqTqBAbVwtjc1Y7kp7MaNKaWmZ85Ey57Eqpc/xGHaYQLj9Pf20+MVT/hIQOfTlDGd/v2DVXagxhmBcLY37cARLEDTuwUK8oatKaQ7ewgHsMCgHNeYFh3+Mdm9dZOTO+81fsMeSeIQLqI2r0PiozHkZTmhsw+P4tMy51ngfC7DSoBXoDPltf3L83Byj7aX++OkO9YUZFCbU0ggaBzGC3WXO31cpjeiqUgpYg4CZ/sUPp5/Tq1uMYwUKdM6J60+497pTOoe3mHnrYmFlzRhq42pptDTW4SV8XKX0LR7VVeZcVyk9iA/xlQE6tnW+i2rMLo5aNW+YMOzsrsrRsblCMKGWxi9VSivKnA9iU5XSK3ga31UpPVzm/FmZ8ydVShsx0wDtf32RRq2lRkdjnvMCgokUGjvxZJXSLI1dGMW1eERXldIcrME7BijGthjbYhwzFM8bih1DsWMonhfjmBjbYmyLsS3GthjbYmyLsS3Ude2iKqUSW/BamfOBKqUNeBvLsBAbsa3M+aRLQggms8IlZc4VnsHdVUovYwPO4HmsxhNlzidNmzZt2v9RqKn1KBBc5d2R1bUePXT8m6CPWvps3aF9ehZn66fCFNbSZ2tvW2+yKExhLXWtZyGYzFr6bN/Xe/RqOM7WT4UprKXPPrhhrcmiMIX9CRYv4u0MBGIsAAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAxCAYAAAAsoQwQAAAAAklEQVR4AewaftIAAAZnSURBVO3B248V9QEA4G9+Z4a9zLLAclHwALLiBRCrdWwV0WptTLUPTdombeJT0/4R/R+a9KF/Q03fmrZvfWi0aRRbxlsUUS4V2IMLC7vrsswuC3Nmiq7NkYsRocme1fN9UV3XrtbKsghD2IYH8SDuxWaMoIFpHMYBnMI5nMFhtLDQzPO2LxBFkavVl1kC0WWu8mq6pbYEYteXYgt2YAe2Yxs2YZVFA5hAhQILGMQmVDiDGT1fSXCVVpYN4n78DL/CT7EH27FKR8Ak3sareBtt3I89GG1l2YCeryT4nFaWDWI3nsWP8D3cjbVIdFzCIbyB15t5fhDvYwwF1uAebG9l2aBlqCyCsgjKIiiLoCyCsgjKIiiLoCyCsgjKIiiLoCyCsgjKIiiLoCyCsgjKIiiLoCyCsgjKIiiLoCyCsgjKIiiLoCyCsghin2ll2TC24Dk8j11Y4fqm8QE+wJTLmnletbLsKGZwH7YiwXwry8abeV5YRvrWtS2FWMed2Im9+BZWuFaJWXyIw5hEXyvL+nCxmedTmGplWYXVWIlNqHHUMvLwiyd9sVqjURNbVNJuR4jcqljHQ9iJUaxwfQs4hZOYQx+GsYASbYs+xgS2YhtW46hlpLGpcl01IowwNdnvEyNrL2hM1dQ1kVsS68hwLzb4YgMYxDqMYganccaVAlZiFH2Yxl99iWjPH3WNGddqYwQLsb/9brWpyVh7rjCymud+XYoGSybRcNNiHdtwO9qYRx+CKwWsRz8SnMV+zKPSsRmP4/u4hBO+Dob48AChrzQczdn/r5iNA5q7+7ROnFW22bYd825arOM8xnAM/diBpkUXMYs5VEgwiH6UzTxfcFkrywaxAY9iL3ajQPB1EJgdGjV/pM/E8cNWDq+WPfNbG/ZOOjb+B0P1OI0xtyLWcQjzOIRV+DmaFs3gXfwHFzCMGqdwUcd6PINncZdFKUYsdxEu0T97t3Ov9zt44Jh3N2+0oVht1cRmF469Y2QosDBGhNpNiXWM4Qxew3o8qeM8cryEaYxgDWZwXscGPIHHsVpHv6+J80eCxr2lPe157x2svfzO7+00bihsN7cwTI0ItZsS66hRoUSBsyiQokALBzCBIaxBjXM6+rEOa10pstzVPnVp9JKLaWLudOTptcetmDjk9D/O6/vlRtY0fKp202IdAxjGMC7iAF7BTlTYggcwhkmMY66Z55WOWRzDSWxEsOiCG3Dg3G8shV2uY9i1+pldddL8QvDoU7X9u3dpTPf5ztq/27fuuLlGzFrMu2mxjhh9SDCOl9DGk7gbD2MbxvAGXmnm+VFX+ggvYxWexh2YxmnLTDURuUKEmh8Mvs8QhiLPb9lHQKP23Mz7tCPV8YgItZsS64gQI2nm+TyOtbKsxCyexHfxKB7GVqxpZdmrOIHpZp5fxFm8hhVYgQcwjeOWmddfuMP1hKjyiaoOGqHtE+2qIUQ1alUd3IpYR4ESQ60sG2rm+flmnrdaWbaAWbQxgO14HFtwJ17Cm60sG2/mednKsnG8gRQf4RImLTPzp2NfLvb/FnS0MIvN2NHKspUua+b5GezHP/EOFrAe38YP8RTuQ+qyZp638THO4AjewluWmSStJGklSStJWknSSpJWkrSSpJUkrSRpJUkrSVpJ0kqSVpK0kqSVJK0kaSVJK0laSdJKklaStJKklSStJGklSStJWknSSpJWgo7DmMDt2I2NPtPM8xkcxgc4o+MO3IdRDOsYxlqLPsRBPTck1nESNbZiBDtbWeayyWaeT+I4/o2tGMRtmMPHmEbdyrINGMEODOIsTmFCzw2J6rr2P60sS3EXduE2zOAg3mrm+YVWlm3CU/gFHsNZvIg/Ywp34R6kGMN7ONHM83lXiaJIz7WCz2nmeYFDOIgppGhiVyvLdqKJfosGsAIxVqKJTRjAFA7haDPP5/XcsOAqzTy/gP9gHw6ggQfwBPbiQaxDhQSjeAT34CLexD4cb+Z5qecriV1fgY8QkGIVhrAS/biA0zhv0RBmMYuTmMCCnp6enp6enp5vqqimtgQiIld5ceNDtSXwwvibkS4R9HSVoKerxLrIj4/ssyTSft0i6OkqQU9XCXq6SqyLPPbIT3zTBT1dJejpKrG6tiSiSM+1gp6uEvR0lVgX2bf/T5bCUNqvWwQ9XSXo6SpBT1eJdZG/bH/MN13Q01WCnq7yX1uHOvebvBEPAAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = base_library
}, function (e, t, n) {
    "use strict";
    e.exports = n(28).polyfill()
}, function (e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        getDownloadSpeed: function () {
            function getDownloadSpeed() {
                try {
                    if ((window.performance || window.webkitPerformance || {}).timing) {
                        var e = $("html").html().length,
                            t = e / 1024,
                            n = performance.timing.responseEnd - performance.timing.requestStart;
                        return Math.round(.25 * t / (n / 1e3))
                    }
                } catch (i) {}
                return 0
            }
            return getDownloadSpeed
        }(),
        getRank: function () {
            function getRank() {
                var e = this.getDownloadSpeed();
                return e < 25 ? 31 : e < 50 ? 32 : e < 75 ? 33 : e < 100 ? 34 : e < 150 ? 35 : e < 200 ? 36 : e < 250 ? 37 : e < 300 ? 38 : e < 350 ? 39 : e < 400 ? 40 : e < 450 ? 41 : e < 500 ? 42 : e < 1e3 ? 43 : 44
            }
            return getRank
        }(),
        getSpeedInfo: function () {
            function getSpeedInfo() {
                var e = Math.floor(100 * Math.random()),
                    t = this.getDownloadSpeed(),
                    n = window.pageConfig || {},
                    i = n && n.O2_REPORT;
                return void 0 !== i && "number" == typeof i || (i = 100), i > 0 && e >= 0 && e <= i && t > 0 ? "s" + this.getRank() + "=" + t + "&s50=" + t : ""
            }
            return getSpeedInfo
        }(),
        getScreenSection: function () {
            function getScreenSection() {
                var e = document.documentElement.clientWidth;
                return e >= 1190 ? 68 : e >= 990 ? 69 : 70
            }
            return getScreenSection
        }(),
        getScreenRatio: function () {
            function getScreenRatio() {
                var e = window.screen.width,
                    t = window.screen.height,
                    n = {
                        51: {
                            width: 800,
                            height: 600
                        },
                        52: {
                            width: 960,
                            height: 640
                        },
                        53: {
                            width: 1024,
                            height: 768
                        },
                        54: {
                            width: 1136,
                            height: 640
                        },
                        55: {
                            width: 1152,
                            height: 864
                        },
                        56: {
                            width: 1280,
                            height: 768
                        },
                        57: {
                            width: 1280,
                            height: 800
                        },
                        58: {
                            width: 1280,
                            height: 960
                        },
                        59: {
                            width: 1280,
                            height: 1024
                        },
                        60: {
                            width: 1366,
                            height: 768
                        },
                        61: {
                            width: 1440,
                            height: 900
                        },
                        62: {
                            width: 1600,
                            height: 1024
                        },
                        63: {
                            width: 1600,
                            height: 1200
                        },
                        64: {
                            width: 1920,
                            height: 1080
                        },
                        65: {
                            width: 1920,
                            height: 1200
                        },
                        66: {
                            width: 2560,
                            height: 1440
                        },
                        67: {
                            width: 2560,
                            height: 1600
                        }
                    };
                for (var i in n)
                    if (e === n[i].width && t === n[i].height) return i
            }
            return getScreenRatio
        }(),
        getBrowser: function () {
            function getBrowser() {
                var e, t = {},
                    n = navigator.userAgent.toLowerCase();
                return (e = n.match(/rv:([\d.]+)\) like gecko/)) ? t.ie = e[1] : (e = n.match(/msie ([\d.]+)/)) ? t.ie = e[1] : (e = n.match(/firefox\/([\d.]+)/)) ? t.firefox = e[1] : (e = n.match(/metasr/)) ? t.sougou = !0 : (e = n.match(/qqbrowser/)) ? t.qq = !0 : (e = n.match(/version\/([\d.]+).*safari/)) ? t.safari = e[1] : (e = n.match(/chrome\/([\d.]+)/)) ? t.chrome = e[1] : (e = n.match(/opera.([\d.]+)/)) ? t.opera = e[1] : (e = n.match(/ipad/)) && (t.ipad = !0), t.chrome ? 11 : t.firefox ? 12 : t.safari ? 13 : t.opera ? 14 : t.ie ? "6.0" === t.ie ? 15 : "7.0" === t.ie ? 16 : "8.0" === t.ie ? 17 : "9.0" === t.ie ? 18 : "10.0" === t.ie ? 19 : "11.0" === t.ie ? 20 : 21 : t.sougou ? 22 : t.qq ? 23 : t.ipad ? 24 : 25
            }
            return getBrowser
        }(),
        getBaseData: function () {
            function getBaseData() {
                var e = window["_REPORT_"],
                    t = e && e["START"],
                    n = [];
                if (e && t) {
                    var i = e["CSS"],
                        r = e["FS"],
                        o = e["JS"],
                        a = e["DOM"];
                    i && n.push("s72=" + (i.getTime() - t.getTime())), r && n.push("s73=" + (r.getTime() - t.getTime())), o && n.push("s74=" + (o.getTime() - t.getTime())), a && n.push("s75=" + (a.getTime() - t.getTime())), n.push("s76=" + ((new Date).getTime() - t.getTime()))
                }
                return n.join("&")
            }
            return getBaseData
        }(),
        getRetina: function () {
            function getRetina() {
                return window.devicePixelRatio > 1 || window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx)").matches ? "s71=1" : ""
            }
            return getRetina
        }(),
        processRetina: function () {
            function processRetina() {
                var e = this.getRetina();
                e && this.processCore(e)
            }
            return processRetina
        }(),
        getSystem: function () {
            function getSystem() {
                var e = navigator.userAgent.toLowerCase();
                if (-1 !== e.indexOf("macintosh") || -1 !== e.indexOf("mac os x")) return 6;
                if (-1 !== e.indexOf("linux")) return 7;
                var t = {
                    "nt 5.1": 1,
                    "nt 5.2": 1,
                    "nt 6.0": 2,
                    "nt 6.1": 3,
                    "nt 6.2": 4,
                    "nt 6.3": 4,
                    "nt 6.4": 5,
                    "nt 10.0": 5
                };
                for (var n in t)
                    if (-1 !== e.indexOf(n)) return t[n];
                return 8
            }
            return getSystem
        }(),
        _getErrorInfo: function () {
            function _getErrorInfo(e) {
                var t = [];
                t.push("s" + this.getSystem() + "=1"), t.push("s" + this.getBrowser() + "=1"), t.push("s30=1");
                var n = this.getDownloadSpeed();
                return n > 0 && t.push("s" + this.getRank() + "=" + n), t.push("s" + (50 + e) + "=1"), t.join("&")
            }
            return _getErrorInfo
        }(),
        processBackup: function () {
            function processBackup(e) {
                this.pBackupId && this.processCore(this._getErrorInfo(e), this.pBackupId)
            }
            return processBackup
        }(),
        processHidedFloor: function () {
            function processHidedFloor(e) {
                this.pFloorId && this.processCore(this._getErrorInfo(e), this.pFloorId)
            }
            return processHidedFloor
        }(),
        processTempl: function () {
            function processTempl(e) {
                this.pTemplId && this.processCore(this._getErrorInfo(e), this.pTemplId)
            }
            return processTempl
        }(),
        processSpeed: function () {
            function processSpeed() {
                var e = this.getSpeedInfo();
                e && this.processCore(e)
            }
            return processSpeed
        }(),
        processJsError: function () {
            function processJsError() {
                var e = window,
                    t = window.pageConfig || {},
                    n = Math.floor(100 * Math.random()),
                    i = t && t.O2_ERROR_REPORT;
                void 0 !== i && "number" == typeof i || (i = 100), i > 0 && n >= 0 && n <= i && $(e).bind("error.o2report", function (t, n, i, r, o) {
                    var a = "";
                    if (r = r || e.event && e.event.errorCharacter || 0, o && o.stack) t = o.stack.toString();
                    else if (arguments.callee) {
                        for (var l = [t], c = arguments.callee.caller, s = 3; c && --s > 0 && (l.push(c.toString()), c !== c.caller);) c = c.caller;
                        t = l.join(",")
                    }
                    if (a = JSON.stringify(t) + (n ? ";URL:" + n : "") + (i ? ";Line:" + i : "") + (r ? ";Column:" + r : ""), e.lastErrMsg) {
                        if (e.lastErrMsg.indexOf(t) > -1) return;
                        e.lastErrMsg += "|" + t
                    } else e.lastErrMsg = t;
                    setTimeout(function () {
                        a = encodeURIComponent(a), (new Image).src = "//wq.jd.com/webmonitor/collect/badjs.json?Content=" + a + "&t=" + Math.random()
                    }, 1e3)
                })
            }
            return processJsError
        }(),
        _firstReport: !1,
        processAllData: function () {
            function processAllData() {
                if (!this._firstReport) {
                    this._firstReport = !0;
                    var e = this.getSpeedInfo(),
                        t = this.getRetina();
                    if (t || e) {
                        var n = this.getBaseData(),
                            i = this.getBrowser(),
                            r = this.getScreenRatio(),
                            o = this.getSystem(),
                            a = [];
                        a.push("s" + o + "=1"), a.push("s" + i + "=1"), a.push("s30=1"), e && a.push(e), r && a.push("s" + r + "=1"), a.push("s" + this.getScreenSection() + "=1"), t && a.push(t), n && a.push(n), this.processCore(a.join("&"))
                    }
                }
            }
            return processAllData
        }(),
        image: null,
        processCore: function () {
            function processCore(e, t) {
                var n = t || this.pid;
                this.image = new Image, this.image.src = "//fd.3.cn/cesu/r?pid=" + n + "&" + e + "&_=" + (new Date).getTime()
            }
            return processCore
        }(),
        debug: function () {
            function debug(e) {
                "undefined" != typeof console.log && console.log(e)
            }
            return debug
        }(),
        pid: 0,
        pFloorId: 0,
        pBackupId: 0,
        pTemplId: 0,
        init: function () {
            function init(e, t, n, i) {
                var r = this;
                if (!e) return void r.debug("pageId must be provided!");
                r.pid = e, r.pFloorId = n, r.pBackupId = t, r.pTemplId = i, $(window).bind("load.o2report", function () {
                    r.processAllData()
                }), r.processJsError()
            }
            return init
        }()
    };
    window.o2Report = n, t["default"] = n
}, function (e, t) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }(),
        i = function () {
            function Tab(e) {
                _classCallCheck(this, Tab), this.conf = $.extend({
                    container: null,
                    head: null,
                    headItems: null,
                    content: null,
                    contentItems: null,
                    startAt: 0,
                    activeClass: "active",
                    hash: !1,
                    hoverToSwitch: !1,
                    onBeforeSwitch: function () {
                        function onBeforeSwitch() {}
                        return onBeforeSwitch
                    }(),
                    onAfterSwitch: function () {
                        function onAfterSwitch() {}
                        return onAfterSwitch
                    }(),
                    onFirstShow: function () {
                        function onFirstShow() {}
                        return onFirstShow
                    }()
                }, e), this.index = undefined;
                var t = this.conf;
                this.$el = $(t.container), this.$head = t.head ? $(t.head) : this.$el.children(".mod_tab_head, .J_tab_head"), this.$headItems = t.headItems ? "string" == typeof t.headItems ? this.$head.children(t.headItems) : $(t.headItems) : this.$head.children(".mod_tab_head_item, .J_tab_head_item"), this.$content = t.content ? $(t.content) : this.$el.children(".mod_tab_content, .J_tab_content"), this.$contentItems = t.contentItems ? "string" == typeof t.contentItems ? this.$content.children(t.contentItems) : $(t.contentItems) : this.$content.children(".mod_tab_content_item, .J_tab_content_item"), this.tabLength = this.$headItems.length;
                for (var n = 0, i = this.$headItems.length; n < i; n++) this.$headItems[n].hasShown = !1;
                this.init()
            }
            return n(Tab, [{
                key: "init",
                value: function () {
                    function init() {
                        var e = this.conf,
                            t = -1,
                            n = window.location.hash;
                        e.hash && n.length > 1 ? this.switchTo(n) : ("string" == typeof e.startAt ? (this.$active = this.$headItems.filter(e.startAt), t = this.$active.length ? this.$active.index() : 0) : t = "number" == typeof e.startAt ? e.startAt : 0, this.switchTo(t)), this.initEvent()
                    }
                    return init
                }()
            }, {
                key: "initEvent",
                value: function () {
                    function initEvent() {
                        var e = this,
                            t = e.conf,
                            n = "click";
                        t.hoverToSwitch && (n = "mouseenter"), this.$head.delegate(".mod_tab_head_item, .J_tab_head_item", n, function (t) {
                            t && t.preventDefault();
                            var n = $(this).index();
                            e.switchTo(n)
                        })
                    }
                    return initEvent
                }()
            }, {
                key: "switchTo",
                value: function () {
                    function switchTo(e) {
                        var t = e,
                            n = this.conf;
                        if (n.hash) {
                            var i = void 0;
                            if ("string" == typeof t && (i = t.replace("#", ""), this.$active = this.$headItems.filter("[data-hash$=" + i + "]"), t = this.$active.index()), "number" == typeof t && (i = this.$headItems.eq(t).attr("data-hash")), -1 === t) return -1;
                            window.location.hash = i
                        }
                        if ((t = parseInt(t, 10)) !== this.index) return this.index = t, "function" == typeof n.onBeforeSwitch && n.onBeforeSwitch.call(this, t, this), this.$headItems.removeClass(n.activeClass).eq(t).addClass(n.activeClass), this.$contentItems.hide().eq(t).show(), "function" == typeof n.onAfterSwitch && n.onAfterSwitch.call(this, t, this), this.$headItems[t].hasShown || "function" != typeof n.onFirstShow || (n.onFirstShow.call(this, t, this), this.$headItems[t].hasShown = !0), this
                    }
                    return switchTo
                }()
            }, {
                key: "switchToNext",
                value: function () {
                    function switchToNext() {
                        var e = this.index + 1;
                        return e >= this.tabLength && (e = 0), this.switchTo(e), this
                    }
                    return switchToNext
                }()
            }, {
                key: "switchToPrev",
                value: function () {
                    function switchToPrev() {
                        var e = this.index - 1;
                        return e < 0 && (e = this.tabLength - 1), this.switchTo(e), this
                    }
                    return switchToPrev
                }()
            }, {
                key: "destroy",
                value: function () {
                    function destroy() {
                        this.unbind(), this.$el.remove()
                    }
                    return destroy
                }()
            }, {
                key: "unbind",
                value: function () {
                    function unbind() {
                        return this.$head.undelegate(), this
                    }
                    return unbind
                }()
            }, {
                key: "setOptions",
                value: function () {
                    function setOptions(e) {
                        return $.extend(this.conf, e), this
                    }
                    return setOptions
                }()
            }]), Tab
        }();
    t["default"] = i
}, function (e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function (e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
        }
    }();
    n(69);
    var r = n(0),
        o = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(r),
        a = n(1),
        l = function (e) {
            function Lazyimg() {
                _classCallCheck(this, Lazyimg);
                var e = _possibleConstructorReturn(this, (Lazyimg.__proto__ || Object.getPrototypeOf(Lazyimg)).apply(this, arguments));
                return e.loaded = !1, e.retryCount = 0, e.getCtnRef = function (t) {
                    var n = (0, r.findDOMNode)(t);
                    n && (e.ctnDom = n)
                }, e.getImgRef = function (t) {
                    var n = (0, r.findDOMNode)(t);
                    n && (e.imgDom = n)
                }, e.load = e.load.bind(e), e
            }
            return _inherits(Lazyimg, e), i(Lazyimg, [{
                key: "done",
                value: function () {
                    function done() {
                        var e = this.props.src,
                            t = this.props.className;
                        this.imgDom && (this.imgDom.src = e), this.ctnDom && (this.ctnDom.className = (0, a.mergeClassName)("lazyimg", "lazyimg_loaded", t))
                    }
                    return done
                }()
            }, {
                key: "error",
                value: function () {
                    function error() {
                        var e = this.props.errSrc,
                            t = this.props.className;
                        this.imgDom && (this.imgDom.src = e, "dataset" in this.imgDom && (this.imgDom.dataset.src = this.props.src)), this.ctnDom && (this.ctnDom.className = (0, a.mergeClassName)("lazyimg", "lazyimg_loaded", "lazyimg_error", t))
                    }
                    return error
                }()
            }, {
                key: "load",
                value: function () {
                    function load(e) {
                        var t = this;
                        clearTimeout(this.retryTimer);
                        var n = new Image,
                            i = !1,
                            r = n.onload = function () {
                                if (i) return void(n.onload = null);
                                t.done(), i = !0, n.onload = null
                            };
                        n.onerror = function () {
                            n.onerror = null, t.retryCount < (t.props.retryTimes || 2) ? t.retryTimer = setTimeout(function () {
                                t.retryCount++, t.load(e)
                            }, 10) : t.error()
                        }, n.src = e, n.complete && r()
                    }
                    return load
                }()
            }, {
                key: "componentDidMount",
                value: function () {
                    function componentDidMount() {
                        this.load(this.props.src)
                    }
                    return componentDidMount
                }()
            }, {
                key: "componentWillReceiveProps",
                value: function () {
                    function componentWillReceiveProps(e) {
                        e.src !== this.props.src && (this.retryCount = 0, this.load(e.src))
                    }
                    return componentWillReceiveProps
                }()
            }, {
                key: "render",
                value: function () {
                    function render() {
                        var e = this.props,
                            t = e.lazySrc,
                            n = e.className,
                            i = e.alt;
                        return o["default"].createElement("div", {
                            ref: this.getCtnRef,
                            className: (0, a.mergeClassName)("lazyimg", n)
                        }, o["default"].createElement("img", {
                            src: t,
                            ref: this.getImgRef,
                            className: "lazyimg_img",
                            alt: i
                        }))
                    }
                    return render
                }()
            }]), Lazyimg
        }(o["default"].Component);
    l.defaultProps = {
        lazySrc: "//misc.360buyimg.com/mtd/pc/common/img/blank.png",
        src: "//misc.360buyimg.com/mtd/pc/common/img/blank.png",
        errSrc: "//misc.360buyimg.com/mtd/pc/common/img/blank.png"
    }, t["default"] = l
}, function (e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function debounce(e, t, n) {
        var i = void 0,
            r = void 0,
            o = void 0,
            a = void 0,
            l = void 0,
            c = function () {
                function later() {
                    var c = +new Date - a;
                    c < t && c >= 0 ? i = setTimeout(later, t - c) : (i = null, n || (l = e.apply(o, r), i || (o = null, r = null)))
                }
                return later
            }();
        return function () {
            function debounced() {
                o = this, r = arguments, a = +new Date;
                var s = n && !i;
                return i || (i = setTimeout(c, t)), s && (l = e.apply(o, r), o = null, r = null), l
            }
            return debounced
        }()
    }

    function throttle(e, t, n) {
        t = t || 250;
        var i = void 0,
            r = void 0;
        return function () {
            var o = n || this,
                a = +new Date,
                l = arguments;
            i && a < i + t ? (clearTimeout(r), r = setTimeout(function () {
                i = a, e.apply(o, l)
            }, t)) : (i = a, e.apply(o, l))
        }
    }

    function getWinSize() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight
        }
    }

    function lazyLoadHandler() {
        u.forEach(function (e) {
            return checkVisible(e)
        }), clearOnce()
    }

    function clearOnce() {
        d.forEach(function (e) {
            var t = u.indexOf(e);
            t >= 0 && u.splice(t, 1)
        }), d = []
    }

    function checkVisible(e) {
        var t = a["default"].findDOMNode(e);
        if (t) {
            var n = void 0;
            if (e.props.overflow && (n = getScrollParent(t)), n && n !== window ? checkOverflowVisible(e, n) : checkNormalVisible(e)) {
                if (!e.visible) {
                    e.props.once && d.push(e);
                    var i = function () {
                        clearTimeout(e._timer), e.visible = !0, e.props.onLoad && e.props.onLoad(), e.forceUpdate()
                    };
                    if (e.props.test) {
                        var r = function onClick(e) {
                            e.stopPropagation(), e.preventDefault(), t.removeEventListener("click", onClick), i()
                        };
                        t.addEventListener("click", r)
                    } else i()
                }
            } else e.props.once && e.visible || (e.visible = !1, e.props.unmountIfInvisible && e.forceUpdate())
        }
    }

    function checkOverflowVisible(e, t) {
        var n = a["default"].findDOMNode(e),
            i = void 0,
            r = void 0;
        try {
            var o = t.getBoundingClientRect();
            i = o.top, r = o.height
        } catch (g) {
            i = h.top, r = h.height
        }
        var l = getWinSize().height,
            c = Math.max(i, 0),
            s = Math.min(l, i + r) - c,
            u = void 0,
            d = void 0;
        try {
            var f = n.getBoundingClientRect();
            u = f.top, d = f.height
        } catch (g) {
            u = h.top, d = h.height
        }
        var p = u - c,
            m = Array.isArray(e.props.offset) ? e.props.offset : [0 | e.props.offset, 0 | e.props.offset];
        return p - m[0] <= s && p + d + m[1] >= 0
    }

    function checkNormalVisible(e) {
        var t = a["default"].findDOMNode(e);
        if (!(t.offsetWidth || t.offsetHeight || t.getClientRects && t.getClientRects().length)) return !1;
        var n = void 0,
            i = void 0;
        try {
            var r = t.getBoundingClientRect();
            n = r.top, i = r.height
        } catch (c) {
            n = h.top, i = h.height
        }
        var o = getWinSize().height,
            l = Array.isArray(e.props.offset) ? e.props.offset : [0 | e.props.offset, 0 | e.props.offset];
        return n - l[0] <= o && n + i + l[1] >= 0
    }

    function getScrollParent(e) {
        if (!e || 1 !== e.nodeType || !e.nodeName) return window;
        for (var t = e, n = /(scroll|auto)/; t;) {
            if (!e.parentNode) return window;
            var i = getStyle(t),
                r = i.overflow,
                o = i["overflow-x"],
                a = i["overflow-y"];
            if (n.test(r) && n.test(o) && n.test(a)) return t;
            t = t.parentNode
        }
        return window
    }

    function isNative(e) {
        return "function" == typeof e && /native code/.test(e.toString())
    }

    function getStyle(e) {
        return isNative(window.getComputedStyle) ? window.getComputedStyle(e, null) : e.currentStyle
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        r = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }();
    t.checkVisible = checkVisible, t.checkNormalVisible = checkNormalVisible;
    var o = n(0),
        a = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(o),
        l = "throttle",
        c = "debounce",
        s = "data-lazyload-listened",
        u = [],
        d = [],
        f = null,
        p = null,
        m = l,
        h = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        },
        g = {
            throttle: throttle,
            debounce: debounce
        },
        v = function (e) {
            function LazyLoad() {
                _classCallCheck(this, LazyLoad);
                var e = _possibleConstructorReturn(this, (LazyLoad.__proto__ || Object.getPrototypeOf(LazyLoad)).apply(this, arguments));
                return e.visible = !1, e
            }
            return _inherits(LazyLoad, e), r(LazyLoad, [{
                key: "componentDidMount",
                value: function () {
                    function componentDidMount() {
                        var e = window,
                            t = this.props,
                            n = t.throttle,
                            i = t.debounce,
                            r = t.overflow,
                            o = t.scroll,
                            d = t.resize,
                            h = !1,
                            v = 300;
                        void 0 !== n && m !== l ? (h = !0, m = l, v = n >>> 0) : void 0 !== i && m !== c && (h = !0, m = c, v = i >>> 0), h && (e.removeEventListener("scroll", f), e.removeEventListener("resize", p), f = null, p = null), f || (f = g[m](lazyLoadHandler, v));
                        var _ = void 0;
                        if (r && (_ = getScrollParent(a["default"].findDOMNode(this))), _ && _ !== window) {
                            if (_.getAttribute) {
                                var b = 1 + _.getAttribute(s) | 0;
                                1 === b && _.addEventListener("scroll", f), _.setAttribute(s, b)
                            }
                        } else if ((0 === u.length || h) && (o && e.addEventListener("scroll", f), d)) {
                            var y = getWinSize(),
                                w = y.width,
                                k = y.height,
                                S = null;
                            p = function () {
                                function resizeLazyHandler() {
                                    var e = getWinSize(),
                                        t = e.width,
                                        n = e.height;
                                    w === t && k === n || (S && clearTimeout(S), S = setTimeout(f, 0)), w = t, k = n
                                }
                                return resizeLazyHandler
                            }(), e.addEventListener("resize", p)
                        }
                        u.push(this), checkVisible(this)
                    }
                    return componentDidMount
                }()
            }, {
                key: "shouldComponentUpdate",
                value: function () {
                    function shouldComponentUpdate() {
                        return this.visible
                    }
                    return shouldComponentUpdate
                }()
            }, {
                key: "componentDidUpdate",
                value: function () {
                    function componentDidUpdate() {
                        var e = a["default"].findDOMNode(this);
                        (!e || 3 === e.nodeType && "" === e.textContent) && f && f()
                    }
                    return componentDidUpdate
                }()
            }, {
                key: "componentWillUnmount",
                value: function () {
                    function componentWillUnmount() {
                        var e = window;
                        if (this.props.overflow) {
                            var t = getScrollParent(a["default"].findDOMNode(this));
                            if (t && t.getAttribute) {
                                var n = -1 | t.getAttribute(s);
                                0 === n ? (t.removeEventListener("scroll", f), t.removeAttribute(s)) : t.setAttribute(s, n)
                            }
                        }
                        var i = u.indexOf(this);
                        i >= 0 && u.splice(i, 1), 0 === u.length && (e.removeEventListener("scroll", f), e.removeEventListener("scroll", f))
                    }
                    return componentWillUnmount
                }()
            }, {
                key: "render",
                value: function () {
                    function render() {
                        var e = this.props,
                            t = e.children,
                            n = e.placeholder,
                            r = e.placeholderClassName,
                            o = e.height,
                            l = e.style,
                            c = e.title;
                        return this.visible ? 1 === t.length ? t[0] : t : n && "Widget" === n.type ? n : a["default"].createElement("div", {
                            className: r,
                            style: i({
                                height: o
                            }, l),
                            title: c
                        })
                    }
                    return render
                }()
            }]), LazyLoad
        }(a["default"].Component);
    v.defaultProps = {
        once: !1,
        throttle: 300,
        offset: 0,
        scroll: !0,
        resize: !0,
        unmountIfInvisible: !1,
        placeholderClassName: "mod_lazyload_placeholder"
    }, t["default"] = v
}, function (e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function extend(e, t) {
        if (!t) return e;
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }

    function getWidth(e) {
        if (!e) return 0;
        var t = e.getBoundingClientRect().width || e.offsetWidth;
        return t > 0 ? t : (t = d(e, "width"), (t < 0 || null == t) && (t = e.style["width"] || 0), t = parseFloat(t) || 0)
    }

    function getHeight(e) {
        if (!e) return 0;
        var t = e.getBoundingClientRect().height || e.offsetHeight;
        return t > 0 ? t : (t = d(e, "height"), (t < 0 || null == t) && (t = e.style["height"] || 0), t = parseFloat(t) || 0)
    }

    function addClassName(e, t) {
        var n = e;
        return null === t || t === undefined || !1 === t ? n : (n = n || "", n = n.split(" "), n.push(t), n = n.join(" "))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        r = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }(),
        o = n(0),
        a = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(o),
        l = function () {
            return "transition" in document.documentElement.style || "WebkitTransition" in document.documentElement.style
        }(),
        c = function (e) {
            function Slider() {
                _classCallCheck(this, Slider);
                var e = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
                return e.sliderItems = [], e.sliderWrapperRef = function (t) {
                    e.sliderWrapper = t
                }, e.sliderItemsRef = function (t) {
                    var n = a["default"].findDOMNode(t);
                    e.sliderItems.indexOf(n) < 0 && null !== n && (e.sliderItems[n.getAttribute("data-index")] = n)
                }, e.state = {
                    currentSlide: e.props.currentSlide,
                    lazyLoadedList: []
                }, e.pauseState = !1, e
            }
            return _inherits(Slider, e), r(Slider, [{
                key: "componentWillReceiveProps",
                value: function () {
                    function componentWillReceiveProps(e) {
                        this.sliderItems.splice(this.props.children.length), this.pause(), this.initSlider(e)
                    }
                    return componentWillReceiveProps
                }()
            }, {
                key: "componentWillMount",
                value: function () {
                    function componentWillMount() {
                        var e = [],
                            t = this.props,
                            n = this.state,
                            i = t.children,
                            r = t.slidesToShow,
                            o = t.lazyLoad,
                            a = n.currentSlide;
                        i.forEach(function (t, n) {
                            n >= a && n < a + r && e.push(n)
                        }), o && 0 === n.lazyLoadedList.length && this.setState({
                            lazyLoadedList: e
                        })
                    }
                    return componentWillMount
                }()
            }, {
                key: "componentDidMount",
                value: function () {
                    function componentDidMount() {
                        this.initSlider()
                    }
                    return componentDidMount
                }()
            }, {
                key: "initSlider",
                value: function () {
                    function initSlider(e) {
                        var t = this,
                            n = e || this.props,
                            i = n.slidesToShow,
                            r = n.children,
                            o = n.fade,
                            l = n.vertical,
                            c = n.verticalMargin,
                            s = n.noChangeSelf,
                            u = r.length;
                        if (!(u <= 0)) {
                            var d = void 0;
                            d = l ? getWidth(a["default"].findDOMNode(this)) : getWidth(a["default"].findDOMNode(this)) / i;
                            var f = this.state.currentSlide,
                                p = getHeight(a["default"].findDOMNode(this).querySelector('[data-index="0"]')),
                                m = p * i;
                            l && (m += (u - 1) * c);
                            var h = {};
                            if (l ? h.height = (u + 2 * i) * p : h.width = (u + 2 * i) * d, !s) {
                                var g = this.getSliderLeftOffset({
                                    currentSlide: f,
                                    slideCount: u,
                                    slideWidth: d,
                                    slideHeight: p
                                }, n);
                                h = Object.assign(this.getSliderWrapperStyle(g), h)
                            }
                            var v = this.state.lazyLoadedList.concat();
                            r.forEach(function (e, t) {
                                t >= f && t < f + i && v.indexOf(t) < 0 && v.push(t)
                            }), this.setState({
                                mounted: !0,
                                slideWidth: d,
                                slideHeight: p,
                                listHeight: m,
                                slideCount: u,
                                lazyLoadedList: v,
                                wrapperStyle: h
                            }, function () {
                                o && t.sliderItems.forEach(function (e, n) {
                                    n === t.state.currentSlide ? (e.style.opacity = 1, e.style.filter = "alpha(opacity=100)", e.style.zIndex = 1) : (e.style.opacity = 0, e.style.filter = "alpha(opacity=0)", e.style.zIndex = 0)
                                }), n.autoPlay && (t.pauseState = !1), t.autoPlay(n)
                            })
                        }
                    }
                    return initSlider
                }()
            }, {
                key: "autoPlay",
                value: function () {
                    function autoPlay(e) {
                        var t = e || this.props;
                        this.autoPlayTimer && clearTimeout(this.autoPlayTimer), t.autoPlay && !this.pauseState && (this.autoPlayTimer = setTimeout(this.play.bind(this), t.autoPlayInterval))
                    }
                    return autoPlay
                }()
            }, {
                key: "play",
                value: function () {
                    function play() {
                        if (!this.state.mounted) return !1;
                        if (!this.canGoNext()) return !1;
                        var e = this.state.currentSlide + this.props.slidesToScroll;
                        this.slideTo(e)
                    }
                    return play
                }()
            }, {
                key: "pause",
                value: function () {
                    function pause() {
                        this.autoPlayTimer && clearTimeout(this.autoPlayTimer), this.pauseState = !0
                    }
                    return pause
                }()
            }, {
                key: "slideTo",
                value: function () {
                    function slideTo(e) {
                        var t = this,
                            n = void 0,
                            r = void 0,
                            o = this.props,
                            a = o.fade,
                            l = o.infinite,
                            c = o.afterChange,
                            s = o.beforeChange,
                            u = o.speed,
                            d = o.slidesToScroll,
                            m = o.slidesToShow,
                            h = o.easeType,
                            g = o.noChangeSelf,
                            v = this.state,
                            _ = v.slideCount,
                            b = v.lazyLoadedList;
                        if (!this.animating) {
                            if (n = this.state.currentSlide, a) {
                                if (!1 === l && (e < 0 || e >= _)) return;
                                return r = e < 0 ? e + _ : e >= _ ? e - _ : e, this.props.lazyLoad && b.indexOf(r) < 0 && this.setState({
                                    lazyLoadedList: b.concat(r)
                                }), s && s.call(this, n, r), this.animating = !0, g || this.sliderItems.forEach(function (e, t) {
                                    t === r ? (e.style.zIndex = 1, f(e, u, h)) : t === n && (e.style.zIndex = 0, p(e, u))
                                }), this.setState({
                                    currentSlide: r
                                }, function () {
                                    var e = this;
                                    this.animationEndCallback = setTimeout(function () {
                                        e.animating = !1, c && c.call(e, r), delete e.animationEndCallback
                                    }, u)
                                }), void this.autoPlay()
                            }
                            var y = this.getSliderLeftOffset(i({}, this.state, {
                                currentSlide: n
                            }));
                            r = e, n = r < 0 ? !1 === l ? 0 : _ % d != 0 ? _ - _ % d : _ + r : r >= _ ? !1 === l ? _ - m : _ % d != 0 ? 0 : r - _ : r;
                            var w = this.getSliderLeftOffset(i({}, this.state, {
                                    currentSlide: r
                                })),
                                k = this.getSliderLeftOffset(i({}, this.state, {
                                    currentSlide: n
                                }));
                            if (!1 === l && (w = k), this.props.beforeChange && this.props.beforeChange(this.state.currentSlide, n), this.props.lazyLoad) {
                                for (var S = !0, C = [], x = r; x < r + m; x++)(S = S && this.state.lazyLoadedList.indexOf(x) >= 0) || (x < 0 ? C.push(x + _) : C.push(x));
                                S ? this.slideCore(n, y, w, k) : this.setState({
                                    lazyLoadedList: this.state.lazyLoadedList.concat(C)
                                }, function () {
                                    t.slideCore(n, y, w, k)
                                })
                            } else this.slideCore(n, y, w, k)
                        }
                    }
                    return slideTo
                }()
            }, {
                key: "slideCore",
                value: function () {
                    function slideCore(e, t, n, i) {
                        var r = this.props,
                            o = r.vertical,
                            a = r.afterChange,
                            l = r.speed,
                            c = r.easeType,
                            s = r.noChangeSelf;
                        this.animating = !0, s || m(this.sliderWrapper, l, c, o, t, n), this.setState({
                            currentSlide: e
                        }, function () {
                            var t = this;
                            this.animationEndCallback = setTimeout(function () {
                                if (t.animating = !1, !s) {
                                    var n = t.getSliderWrapperStyle(i);
                                    for (var r in n) t.sliderWrapper.style[r] = n[r]
                                }
                                a && a.call(t, e), delete t.animationEndCallback
                            }, l)
                        }), this.autoPlay()
                    }
                    return slideCore
                }()
            }, {
                key: "changeSlide",
                value: function () {
                    function changeSlide(e, t) {
                        var n = void 0,
                            i = void 0,
                            r = this.props,
                            o = r.slidesToScroll,
                            a = r.slidesToShow,
                            l = this.state,
                            c = l.slideCount,
                            s = l.currentSlide,
                            u = c % o != 0,
                            d = u ? 0 : (c - s) % o;
                        "previous" === e ? (n = 0 === d ? o : a - d, i = s - n) : "next" === e ? (n = 0 === d ? o : d, i = s + n) : "indicate" === e && (this.animating = !1, clearTimeout(this.animationEndCallback), i = t.index * o), this.slideTo(i)
                    }
                    return changeSlide
                }()
            }, {
                key: "slideToPrev",
                value: function () {
                    function slideToPrev() {
                        this.changeSlide("previous")
                    }
                    return slideToPrev
                }()
            }, {
                key: "slideToNext",
                value: function () {
                    function slideToNext() {
                        this.canGoNext() && this.changeSlide("next")
                    }
                    return slideToNext
                }()
            }, {
                key: "slideToTarget",
                value: function () {
                    function slideToTarget(e) {
                        this.changeSlide("indicate", {
                            index: e
                        })
                    }
                    return slideToTarget
                }()
            }, {
                key: "onSliderOver",
                value: function () {
                    function onSliderOver(e) {
                        this.props.pauseOnHover && this.pause()
                    }
                    return onSliderOver
                }()
            }, {
                key: "onSliderOut",
                value: function () {
                    function onSliderOut(e) {
                        this.props.pauseOnHover && (this.pauseState = !1, this.autoPlay())
                    }
                    return onSliderOut
                }()
            }, {
                key: "canGoNext",
                value: function () {
                    function canGoNext() {
                        if (!this.props.infinite) {
                            var e = this.state.slideCount,
                                t = this.props.slidesToShow,
                                n = this.state.currentSlide;
                            if (e <= t || n >= e - t) return !1
                        }
                        return !0
                    }
                    return canGoNext
                }()
            }, {
                key: "canGoPrev",
                value: function () {
                    function canGoPrev() {
                        if (!this.props.infinite) {
                            var e = this.state.slideCount,
                                t = this.props.slidesToShow;
                            if (0 === this.state.currentSlide || e <= t) return !1
                        }
                        return !0
                    }
                    return canGoPrev
                }()
            }, {
                key: "checkChildren",
                value: function () {
                    function checkChildren(e) {
                        var t = this,
                            n = e.children;
                        if (n && n.length) {
                            var i = n.concat().map(function (e) {
                                return "function" == typeof e.tagName ? a["default"].cloneElement(e) : t.checkChildren(e)
                            });
                            e.children = i
                        }
                        return e
                    }
                    return checkChildren
                }()
            }, {
                key: "renderSlides",
                value: function () {
                    function renderSlides() {
                        var e = this,
                            t = this.props,
                            n = this.state,
                            i = t.children,
                            r = [],
                            o = [],
                            l = [],
                            c = void 0,
                            s = i.length,
                            u = t.fade,
                            d = t.infinite,
                            f = t.lazyLoad,
                            p = t.slidesToShow,
                            m = t.slidesToScroll,
                            h = n.currentSlide,
                            g = n.lazyLoadedList,
                            v = n.slideCount;
                        return i.forEach(function (t, n) {
                            var i = t;
                            f && g.indexOf(n) < 0 && (i = a["default"].createElement("div", null));
                            var _ = e.getSlideStyle(n),
                                b = ["slider_item"];
                            i.props.className && (b = b.concat(i.props.className.split(" ")));
                            var y = b.slice(0);
                            h <= n && n < h + p ? y.push("slider_active") : n >= h + p && n < h + p + m || h >= v - 1 && 0 === n ? y.push("slider_next") : (n < h && n >= h - p - m || 0 === h && n === v - 1) && y.push("slider_prev"), _ = extend(i.props.style || {}, _), r.push(a["default"].cloneElement(i, {
                                key: "slider_original" + (i.key ? i.key : n),
                                "data-index": n,
                                className: y.join(" "),
                                style: _,
                                ref: e.sliderItemsRef
                            })), d && !u && (n >= s - p && (c = -(s - n), o.push(a["default"].cloneElement(i, {
                                key: "slider_pre_clone" + (i.key ? i.key : c),
                                "data-index": c,
                                className: b.join(" "),
                                style: _,
                                ref: e.sliderItemsRef
                            }))), n < p && (c = s + n, l.push(a["default"].cloneElement(i, {
                                key: "slider_last_clone" + (i.key ? i.key : c),
                                "data-index": c,
                                className: b.join(" "),
                                style: _,
                                ref: e.sliderItemsRef
                            }))))
                        }), o.concat(r, l)
                    }
                    return renderSlides
                }()
            }, {
                key: "getSlideStyle",
                value: function () {
                    function getSlideStyle(e) {
                        var t = this.props,
                            n = this.state,
                            i = {};
                        return i.width = n.slideWidth, t.vertical || (i["float"] = "left"), t.fade && (i.position = "relative", i.left = -e * n.slideWidth, l && (i.transition = "opacity " + t.speed + "ms " + t.easeType, i.WebkitTransition = "opacity " + t.speed + "ms " + t.easeType)), i
                    }
                    return getSlideStyle
                }()
            }, {
                key: "getSliderWrapperStyle",
                value: function () {
                    function getSliderWrapperStyle(e, t) {
                        var n = t || this.props,
                            i = this.state,
                            r = i.slideCount,
                            o = i.slideWidth,
                            a = i.slideHeight,
                            c = n.slidesToShow,
                            s = n.vertical,
                            u = {
                                opacity: 1
                            };
                        if (s ? u.height = (r + 2 * c) * a : u.width = (r + 2 * c) * o, l) {
                            var d = s ? "translate3d(0px, " + e + "px, 0px)" : "translate3d(" + e + "px, 0px, 0px)";
                            extend(u, {
                                WebkitTransform: d,
                                transform: d,
                                transition: "none",
                                WebkitTransition: "none",
                                msTransform: s ? "translateY(" + e + "px)" : "translateX(" + e + "px)"
                            })
                        } else extend(u, {
                            position: "relative"
                        }), s ? extend(u, {
                            marginTop: e + "px"
                        }) : extend(u, {
                            marginLeft: e + "px"
                        });
                        return u
                    }
                    return getSliderWrapperStyle
                }()
            }, {
                key: "getSliderLeftOffset",
                value: function () {
                    function getSliderLeftOffset(e, t) {
                        var n = e.currentSlide,
                            i = e.slideCount,
                            r = e.slideWidth,
                            o = e.slideHeight,
                            a = t || this.props,
                            l = a.vertical,
                            c = a.fade,
                            s = a.infinite,
                            u = a.slidesToShow,
                            d = a.slidesToScroll,
                            f = 0,
                            p = 0;
                        if (c) return 0;
                        if (s) i >= u && (f = r * u * -1, p = o * u * -1), i % d != 0 && n + d > i && i > u && (n > i ? (f = (u - (n - i)) * r * -1, p = (u - (n - i)) * o * -1) : (f = i % d * r * -1, p = i % d * o * -1));
                        else if (i % d != 0 && n + d > i && i > u) {
                            var m = u - i % d;
                            f = m * r
                        }
                        return f = l ? n * o * -1 + p : n * r * -1 + f
                    }
                    return getSliderLeftOffset
                }()
            }, {
                key: "render",
                value: function () {
                    function render() {
                        var e = this.props,
                            t = void 0,
                            n = void 0,
                            i = void 0,
                            r = {
                                overflow: "hidden"
                            };
                        e.vertical && (r.height = this.state.listHeight);
                        var o = this.canGoNext(),
                            l = this.canGoPrev(),
                            c = addClassName("slider_control slider_control_prev", e.prevArrowClassName),
                            s = addClassName("slider_control slider_control_next", e.nextArrowClassName),
                            u = {
                                clickHandler: this.slideToPrev.bind(this),
                                arrow: e.prevArrow,
                                className: c,
                                text: e.prevArrowText || "<",
                                canGo: l
                            },
                            d = {
                                clickHandler: this.slideToNext.bind(this),
                                arrow: e.nextArrow,
                                className: s,
                                text: e.nextArrowText || ">",
                                canGo: o
                            };
                        e.arrows && (t = a["default"].createElement(h, u), n = a["default"].createElement(h, d));
                        var f = {
                            count: Math.ceil(e.children.length / this.props.slidesToScroll),
                            currentIndex: Math.ceil(this.state.currentSlide / this.props.slidesToScroll),
                            itemHandler: this.slideToTarget.bind(this),
                            indicatorHoverToSlide: e.indicatorHoverToSlide,
                            customIndicator: e.customIndicator
                        };
                        e.indicators && (i = a["default"].createElement(g, f));
                        var p = addClassName("slider", e.className),
                            m = this.renderSlides();
                        return a["default"].createElement("div", {
                            className: p
                        }, m.length > 1 && t, m.length > 0 && a["default"].createElement("div", {
                            className: "slider_list",
                            onMouseEnter: this.onSliderOver.bind(this),
                            onMouseLeave: this.onSliderOut.bind(this),
                            style: r
                        }, a["default"].createElement("div", {
                            className: "slider_wrapper",
                            ref: this.sliderWrapperRef,
                            style: this.state.wrapperStyle
                        }, m)), m.length > 1 && n, m.length > 1 && i)
                    }
                    return render
                }()
            }]), Slider
        }(a["default"].Component);
    c.defaultProps = {
        autoPlay: !1,
        autoPlayInterval: 3e3,
        currentSlide: 0,
        customIndicator: function () {
            function customIndicator() {
                return a["default"].createElement("i", null)
            }
            return customIndicator
        }(),
        easeType: "ease-in-out",
        fade: !1,
        indicators: !0,
        infinite: !0,
        lazyLoad: !1,
        noChangeSelf: !1,
        pauseOnHover: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        vertical: !1
    };
    var s = void 0,
        u = void 0;
    document.defaultView && document.defaultView.getComputedStyle && (s = function (e, t) {
        var n = void 0,
            i = void 0,
            r = void 0,
            o = t.replace(/([A-Z]|^ms)/g, "-$1").toLowerCase();
        return (i = e.ownerDocument.defaultView) ? ((r = i.getComputedStyle(e, null)) && ("" !== (n = r.getPropertyValue(o)) || jQuery.contains(e.ownerDocument.documentElement, e) || (n = jQuery.style(e, o))), n) : undefined
    }), document.documentElement.currentStyle && (u = function (e, t) {
        var n = void 0,
            i = e.currentStyle && e.currentStyle[t],
            r = e.runtimeStyle && e.runtimeStyle[t],
            o = e.style;
        return !/^-?\d+(?:px)?$/i.test(i) && /^-?\d/.test(i) && (n = o.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : i || 0, i = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), "" === i ? "auto" : i
    });
    var d = s || u,
        f = function (e, t, n, i) {
            if (e) {
                if (l) return e.style.opacity = 1, void(e.style.transition = "opacity " + t + "ms " + n);
                if (e.style.opacity = 0, e.style.filter = "alpha(opacity=0)", t) {
                    var r = 0,
                        o = null,
                        a = function done() {
                            r += 16 / t, r >= 1 ? (o && clearTimeout(o), r = 1, e.style.opacity = r, e.style.filter = "alpha(opacity=" + 100 * r + ")", i && i()) : (e.style.opacity = r, e.style.filter = "alpha(opacity=" + 100 * r + ")", o && clearTimeout(o), o = setTimeout(done, 16))
                        };
                    o = setTimeout(a, 16)
                } else e.style.opacity = 1, e.style.filter = "alpha(opacity=100)"
            }
        },
        p = function (e, t, n, i) {
            if (e) {
                if (l) return e.style.opacity = 0, void(e.style.transition = "opacity " + t + "ms " + n);
                if (e.style.opacity = 1, e.style.filter = "alpha(opacity=100)", t) {
                    var r = 1,
                        o = null,
                        a = function done() {
                            r -= 16 / t, r <= 0 ? (o && clearTimeout(o), r = 0, e.style.opacity = r, e.style.filter = "alpha(opacity=" + 100 * r + ")", i && i()) : (e.style.opacity = r, e.style.filter = "alpha(opacity=" + 100 * r + ")", o && clearTimeout(o), o = setTimeout(done, 16))
                        };
                    o = setTimeout(a, 16)
                } else e.style.opacity = 0, e.style.filter = "alpha(opacity=0)"
            }
        },
        m = function (e, t, n, i, r, o) {
            if (l) return e.style.msTransition = "msTransform " + t + "ms " + n, e.style.webkitTransition = "webkitTransform " + t + "ms " + n, e.style.transition = "transform " + t + "ms " + n, void(i ? (e.style.webkitTransform = "translate3d(0px, " + o + "px, 0px)", e.style.msTransform = "translateY(" + o + "px)", e.style.transform = "translate3d(0px, " + o + "px, 0px)") : (e.style.webkitTransform = "translate3d(" + o + "px, 0px, 0px)", e.style.msTransform = "translateX(" + o + "px)", e.style.transform = "translate3d(" + o + "px, 0px, 0px)"));
            if (i ? e.top = r + "px" : e.left = r + "px", t && o !== r) {
                var a = null,
                    c = o - r,
                    s = r,
                    u = function done() {
                        c > 0 ? (s += 30 * Math.abs(c / t), s >= o ? (a && clearTimeout(a), s = o, i ? e.style.marginTop = s + "px" : e.style.marginLeft = s + "px") : (i ? e.style.marginTop = s + "px" : e.style.marginLeft = s + "px", a && clearTimeout(a), a = setTimeout(done, 30))) : (s -= 30 * Math.abs(c / t), s <= o ? (a && clearTimeout(a), s = o, i ? e.style.marginTop = s + "px" : e.style.marginLeft = s + "px") : (i ? e.style.marginTop = s + "px" : e.style.marginLeft = s + "px", a && clearTimeout(a), a = setTimeout(done, 30)))
                    };
                a = setTimeout(u, 16)
            } else i ? e.top = o + "px" : e.left = o + "px"
        },
        h = function (e) {
            function Arrow() {
                return _classCallCheck(this, Arrow), _possibleConstructorReturn(this, (Arrow.__proto__ || Object.getPrototypeOf(Arrow)).apply(this, arguments))
            }
            return _inherits(Arrow, e), r(Arrow, [{
                key: "onClick",
                value: function () {
                    function onClick(e) {
                        e && e.preventDefault(), this.props.clickHandler()
                    }
                    return onClick
                }()
            }, {
                key: "render",
                value: function () {
                    function render() {
                        var e = this.props,
                            t = e.canGo,
                            n = e.className,
                            i = this.onClick.bind(this);
                        t || (n = addClassName(n, "slider_control_disabled"), i = null);
                        var r = {
                            className: n,
                            onClick: i
                        };
                        return e.arrow ? e.arrow : a["default"].createElement("button", r, this.props.text)
                    }
                    return render
                }()
            }]), Arrow
        }(a["default"].Component),
        g = function (e) {
            function Indicators() {
                return _classCallCheck(this, Indicators), _possibleConstructorReturn(this, (Indicators.__proto__ || Object.getPrototypeOf(Indicators)).apply(this, arguments))
            }
            return _inherits(Indicators, e), r(Indicators, [{
                key: "onItemHandler",
                value: function () {
                    function onItemHandler(e, t) {
                        t && t.preventDefault(), this.props.itemHandler(e)
                    }
                    return onItemHandler
                }()
            }, {
                key: "renderIndicatorItems",
                value: function () {
                    function renderIndicatorItems() {
                        var e = this,
                            t = this.props,
                            n = t.count,
                            i = t.currentIndex,
                            r = t.indicatorHoverToSlide,
                            o = t.customIndicator;
                        return function () {
                            for (var t = [], l = 0; l < n; l++) {
                                var c = "slider_indicators_btn",
                                    s = e.onItemHandler.bind(e, l),
                                    u = e.onItemHandler.bind(e, l);
                                l === n - 1 && (c = addClassName(c, "slider_indicators_btn_last")), l === i && (c = addClassName(c, "slider_indicators_btn_active"));
                                var d = o(l);
                                r ? t.push(a["default"].cloneElement(d, {
                                    className: c,
                                    onMouseEnter: s
                                }, d.children)) : t.push(a["default"].cloneElement(d, {
                                    className: c,
                                    onClick: u
                                }, d.children))
                            }
                            return t
                        }()
                    }
                    return renderIndicatorItems
                }()
            }, {
                key: "setStyle",
                value: function () {
                    function setStyle() {
                        var e = a["default"].findDOMNode(this),
                            t = getWidth(e);
                        e.style.marginLeft = -t / 2 + "px"
                    }
                    return setStyle
                }()
            }, {
                key: "componentDidMount",
                value: function () {
                    function componentDidMount() {
                        this.setStyle()
                    }
                    return componentDidMount
                }()
            }, {
                key: "componentWillUpdate",
                value: function () {
                    function componentWillUpdate(e) {
                        e.count !== this.props.count && this.setStyle()
                    }
                    return componentWillUpdate
                }()
            }, {
                key: "shouldComponentUpdate",
                value: function () {
                    function shouldComponentUpdate(e, t) {
                        return e.currentIndex !== this.props.currentIndex || e.count !== this.props.count
                    }
                    return shouldComponentUpdate
                }()
            }, {
                key: "render",
                value: function () {
                    function render() {
                        var e = this.renderIndicatorItems();
                        return a["default"].createElement("div", {
                            className: "slider_indicators"
                        }, e)
                    }
                    return render
                }()
            }]), Indicators
        }(a["default"].Component);
    t["default"] = c
}, function (e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function (e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
        }
    }();
    n(64);
    var r = n(4),
        o = n(7),
        a = n(1),
        l = n(6),
        c = function () {
            function Cate(e) {
                var t = this;
                _classCallCheck(this, Cate), this.postSendImpl = function (e) {
                    try {
                        t._sideImplTimer && clearTimeout(t._sideImplTimer), t._sideImplTimer = setTimeout(function () {
                            if (e.hasClass("cate_menu_item_on")) {
                                var t = e.data("index"),
                                    n = e.find(".cate_menu_lk").map(function (e, t) {
                                        return (t.innerText || "").trim()
                                    }).get().join("/"),
                                    i = {
                                        poi: "head|category|" + (0, a.padding)(t, 2) + "a",
                                        text: n,
                                        comment: "导航二级菜单"
                                    };
                                (0, l.logImpr)(i)
                            }
                        }, 1e3)
                    } catch (n) {
                        a.dconsole.log(n)
                    }
                }, this.conf = $.extend({
                    $el: null
                }, e)
            }
            return i(Cate, [{
                key: "init",
                value: function () {
                    function init() {
                        var e = this.conf,
                            t = e.$el.attr("data-type"),
                            n = pageConfig.leftCateABtestSwitch;
                        e.type = t || "home", e.isSubDataLoaded = !1, e.isPopMenuBinded = !1, e.dataUrl = r.APIS.CATEA, e.dataBackupUrl = r.APIS.CATEA_STOBACKUP, e.scriptCharset = "gb2312";
                        var i = o.USER.jda,
                            a = !0;
                        if (n && "string" == typeof i) {
                            var l = pageConfig.leftCateABtestSection || {
                                    start: 1e3,
                                    end: 2e3
                                },
                                c = o.USER.unifiedHash;
                            c > l.start && c <= l.end && (a = !1)
                        }
                        "boolean" == typeof pageConfig.isCateUseA ? pageConfig.isCateUseA || (e.dataUrl = r.APIS.CATEB, e.dataBackupUrl = r.APIS.CATEB_BACKUP, e.scriptCharset = "utf-8") : a || (e.dataUrl = r.APIS.CATEB, e.dataBackupUrl = r.APIS.CATEB_BACKUP, e.scriptCharset = "utf-8"), pageConfig.leftCateABtestUseA = a, e.imgIndex = 0, this.$popCtn = $(".JS_popCtn", this.conf.$el), this.loaded = !1, this.initEvent()
                    }
                    return init
                }()
            }, {
                key: "initEvent",
                value: function () {
                    function initEvent() {
                        var e = this,
                            t = this.conf.$el,
                            n = null,
                            i = null,
                            r = null,
                            o = !1;
                        t.bind("mouseenter", function () {
                            i && clearTimeout(i), i = setTimeout(function () {
                                o || (o = !0, e.initSubCate())
                            }, 200)
                        }).one("mousemove", function () {
                            r && clearTimeout(r), r = setTimeout(function () {
                                o || (o = !0, e.initSubCate())
                            }, 200)
                        }).one("mouseleave", function () {
                            t.find(".cate_menu_item").removeClass("hover")
                        }).delegate(".cate_menu_item", "mouseenter", function (t) {
                            n && clearTimeout(n), n = setTimeout(function () {
                                e.conf.isPopMenuBinded || (e._hoverel = $(t.currentTarget), e.$popCtn.show())
                            }, 200)
                        }).bind("mouseleave", function () {
                            n && clearTimeout(n), i && clearTimeout(i), e.conf.isPopMenuBinded || e.$popCtn.hide()
                        })
                    }
                    return initEvent
                }()
            }, {
                key: "loadImg",
                value: function () {
                    function loadImg(e) {
                        var t = e.getAttribute("data-lazy-img"),
                            n = new Image,
                            i = !1;
                        if (n.onload = function () {
                                if (i) return void(n.onload = null);
                                e.src = t, i = !0, n.onload = null
                            }, n.src = t, n.complete) {
                            if (i) return void(n.onload = null);
                            e.src = t, i = !0, n.onload = null
                        }
                    }
                    return loadImg
                }()
            }, {
                key: "initSubCate",
                value: function () {
                    function initSubCate() {
                        var e = this,
                            t = e.conf.$el;
                        e.conf.isSubDataLoaded || e.getSubCateData(this.conf.type, function () {
                            var i = $("#J_popCtn");
                            n.e(16).then(n.bind(null, 114)).then(function (n) {
                                new(0, n["default"])({
                                    $container: t,
                                    navItemHook: ".cate_menu_item",
                                    navItemOn: "cate_menu_item_on",
                                    popItemHook: ".cate_part",
                                    itemEnterCallBack: function () {
                                        function itemEnterCallBack(n) {
                                            var r = $(window).scrollTop(),
                                                o = t.offset().top,
                                                a = 0;
                                            r > o && (a = r - o), i.css({
                                                top: a
                                            }), $("img", n.$displayEl).each(function (t, n) {
                                                e.loadImg(n)
                                            }), e.postSendImpl(n.$item)
                                        }
                                        return itemEnterCallBack
                                    }()
                                }).checkRun(), e.$popCtn.is(":hidden") || e._hoverel.trigger("mouseenter.itemEnter"), e.conf.isPopMenuBinded = !0
                            })
                        })
                    }
                    return initSubCate
                }()
            }, {
                key: "getSubCateData",
                value: function () {
                    function getSubCateData(e, t) {
                        var n = this.conf;
                        (0, a.loadAsync)({
                            url: n.dataUrl,
                            charset: n.scriptCharset,
                            cache: !0,
                            name: "getCategoryCallback",
                            backup: n.dataBackupUrl,
                            timeout: r.CONSTS.REQ_TIMEOUT,
                            dataCheck: function () {
                                function dataCheck(e) {
                                    return !!(e && e.data && e.data.length)
                                }
                                return dataCheck
                            }()
                        }).then($.proxy(function (e) {
                            this.render(e), this.conf.isSubDataLoaded = !0, t && t()
                        }, this))
                    }
                    return getSubCateData
                }()
            }, {
                key: "padding",
                value: function () {
                    function padding(e) {
                        return (e < 9 ? "0" : "") + (1 + e)
                    }
                    return padding
                }()
            }, {
                key: "render",
                value: function () {
                    function render(e) {
                        var t = this,
                            n = e.data,
                            i = t.padding,
                            r = "",
                            o = function () {
                                function clstagPrefix(e, t, n, i) {
                                    return "h|keycount|head|category_" + Array.prototype.slice.call(arguments).join("")
                                }
                                return clstagPrefix
                            }(),
                            a = void 0,
                            l = n.length,
                            c = void 0,
                            s = void 0,
                            u = void 0,
                            d = void 0,
                            f = void 0,
                            p = void 0,
                            m = void 0,
                            h = void 0,
                            g = void 0,
                            v = void 0,
                            _ = void 0,
                            b = void 0,
                            y = void 0,
                            w = void 0,
                            k = void 0,
                            S = void 0,
                            C = void 0,
                            x = void 0;
                        for (a = 0; a < l; a++) {
                            for (c = n[a], S = '<div class="cate_part_col1">', C = '<div class="cate_part_col2">', w = "", u = c.t.length, s = 0; s < u; s++) w += t.getLinkHtml({
                                str: c.t[s],
                                linkClass: "cate_channel_lk",
                                imagesWidth: null,
                                imagesHeight: 24,
                                level: null,
                                textPrefix: null,
                                textSuffix: '<i class="iconfont cate_channel_arrow">&#xe601;</i>',
                                clstag: o(i(a), "b", i(s))
                            });
                            for (w = '<div class="cate_channel">' + w + "</div>", S += w, y = "", u = c.s.length, s = 0; s < u; s++)
                                for (d = c.s[s], p = d.s.length, f = 0; f < p; f++) {
                                    if (m = d.s[f].s, v = t.getLinkHtml({
                                            str: d.s[f].n,
                                            linkClass: "cate_detail_tit_lk",
                                            imagesWidth: null,
                                            imagesHeight: null,
                                            level: 2,
                                            textPrefix: null,
                                            textSuffix: '<i class="iconfont cate_detail_tit_arrow">&#xe601;</i>'
                                        }), b = '<dt class="cate_detail_tit" clstag="' + o(i(a), "c", i(f)) + '">' + v + "</dt>", _ = "", 0 !== m)
                                        for (g = m.length, h = 0; h < g; h++) _ += t.getLinkHtml({
                                            str: m[h].n,
                                            linkClass: "cate_detail_con_lk",
                                            imagesWidth: null,
                                            imagesHeight: 16,
                                            level: 3,
                                            textPrefix: null,
                                            textSuffix: null,
                                            index: h
                                        });
                                    _ = '<dd class="cate_detail_con" clstag="' + o(i(a), "d", i(f)) + '">' + _ + "</dd>", y += '<dl class="cate_detail_item cate_detail_item' + (f + 1) + '">' + b + _ + "</dl>"
                                }
                            for (y = '<div class="cate_detail">' + y + "</div>", S += y + "</div>", k = "", u = c.b.length, s = 0; s < u; s++) s < 8 && (k += t.getLinkHtml({
                                str: c.b[s],
                                linkClass: "cate_brand_lk",
                                imagesWidth: 83,
                                imagesHeight: 35,
                                clstag: o(i(a), "e", i(s))
                            }));
                            for (k = '<div class="cate_brand">' + k + "</div>", C += k, x = "", u = c.p.length, s = 0; s < u; s++) s < 2 && (x += t.getLinkHtml({
                                str: c.p[s],
                                linkClass: "cate_promotion_lk",
                                imagesWidth: 168,
                                imagesHeight: 134,
                                clstag: o(i(a), "f", i(s))
                            }));
                            x = '<div class="cate_promotion">' + x + "</div>", C += x + "</div>", r += '<div class="cate_part clearfix" id="cate_item' + (a + 1) + '" data-id="' + c.id + '">' + S + C + "</div>"
                        }
                        this.$popCtn.html(r).removeClass("mod_loading")
                    }
                    return render
                }()
            }, {
                key: "getLinkHtml",
                value: function () {
                    function getLinkHtml(e) {
                        var t = e.str,
                            n = e.linkClass,
                            i = e.imagesWidth,
                            r = e.imagesHeight,
                            o = e.level,
                            a = e.textPrefix,
                            l = e.textSuffix,
                            c = e.index,
                            s = e.clstag ? ' clstag="' + e.clstag + '"' : "",
                            u = t.split("|"),
                            d = [],
                            f = "";
                        u[0] = u[0].replace(/ /g, "");
                        var p = /^\d.*\d$/.test(u[0]) ? u[0] : u[0].replace(/^(http:\/\/|\/\/)/, "");
                        void 0 !== o && /^\d.*\d$/.test(u[0]) && (2 === o ? p = "channel.jd.com/" + u[0] + ".html" : 3 === o && (2 === u[0].split("-").length ? p = "channel.jd.com/" + u[0] + ".html" : 3 === u[0].split("-").length && (p = "list.jd.com/list.html?cat=" + u[0].replace(/-/g, ",")))), p = "//" + p, "https:" === location.protocol && Cate.NO_HTTPS_DOMAIN_REG.test(p) && (p = "http:" + p), u[2], n && d.push(n), d.length > 0 && (f = 'class="' + d.join(" ") + '"');
                        var m = "";
                        return m = u[0] ? '<a href="' + p + '" ' + f + s + ' target="_blank">' : "<span " + f.replace(/lk/, "txt") + ">", u[2] ? (this.conf.imgIndex > 4 && (this.conf.imgIndex = 0), i = i ? ' width="' + i + '"' : "", r = r ? ' height="' + r + '"' : "", m += '<img data-lazy-img="//img1' + this.conf.imgIndex + ".360buyimg.com/" + u[2] + '"  ' + i + r + ' src="//misc.360buyimg.com/mtd/pc/common/img/blank.png" data-webp="no"/>', this.conf.imgIndex += 1) : m += (a || "") + u[1] + (l || ""), u[0] ? m += "</a>" : m += "</span>", 3 === o && 0 === c && 1 === parseInt(u[3], 10) && u[0] && (d.push(n + "_hot"), f = 'class="' + d.join(" ") + '"', m = '<a href="' + p + '" ' + f + ' target="_blank"><i class="cate_con_hot_l"></i>' + (a || "") + u[1] + (l || "") + '<i class="cate_con_hot_r"></i></a>'), m
                    }
                    return getLinkHtml
                }()
            }]), Cate
        }();
    c.NO_HTTPS_DOMAIN_REG = /^\/\/(car\.jd\.com|group\.jd\.com|huishou\.jd\.com|dujia\.jd\.com)/, t["default"] = c
}, function (e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
            function sliceIterator(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = undefined;
                try {
                    for (var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                } catch (c) {
                    r = !0, o = c
                } finally {
                    try {
                        !i && l["return"] && l["return"]()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }
            return function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return sliceIterator(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        r = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }();
    n(71);
    var o = n(0),
        a = _interopRequireDefault(o),
        l = n(4),
        c = n(7),
        s = n(1),
        u = n(72),
        d = _interopRequireDefault(u),
        f = n(73),
        p = _interopRequireDefault(f),
        m = n(6),
        h = function (e) {
            function User() {
                _classCallCheck(this, User);
                var e = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
                return e.clstagPrefix = l.CONSTS.CLSTAGPREFIX, e.poi = "head|login", e.getExtraInfo = function (t) {
                    var n = i(t, 2),
                        r = n[0],
                        o = n[1];
                    return new Promise(function (t, n) {
                        var i = o.userLevel,
                            a = o.plusStatus,
                            s = l.PLUSARRAY[a] || l.PLUSARRAY[0],
                            u = {};
                        "userLevel" in o && Object.assign(u, {
                            vipPromo: s.replace(/<span[\s\S]+span>/g, "").replace(/>/g, ""),
                            plusStatus: a,
                            userLevel: i - 1,
                            userLevelTxt: e.getUserlevelText(i),
                            isCompany: 7 === i,
                            realImgUrl: o.imgUrl
                        });
                        var d = r.nick || r.name || c.USER.pin;
                        "string" == typeof d && d.length && (u.nickName = d), u.isLogin = r.isLogin, t(u)
                    })
                }, e.state = {
                    homeUrl: l.URLS.HOME,
                    loginUrl: l.URLS.LOGIN,
                    logoutUrl: l.URLS.LOGOUT,
                    registUrl: l.URLS.REGIST,
                    xinrenUrl: l.URLS.XINREN,
                    plusUrl: l.URLS.PLUS_USERINFO_N,
                    vipUrl: l.URLS.PLUS_USERINFO_Y,
                    vipPromo: "",
                    plusStatus: 0,
                    userLevel: 1,
                    isLogin: !1,
                    isNew: !1,
                    nickName: "",
                    imgUrl: "//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg"
                }, e
            }
            return _inherits(User, e), r(User, [{
                key: "getUserlevelText",
                value: function () {
                    function getUserlevelText(e) {
                        return {
                            1: "注册会员",
                            2: "铜牌会员",
                            3: "银牌会员",
                            4: "金牌会员",
                            5: "钻石会员",
                            6: "VIP会员",
                            7: "企业会员"
                        } [e] || "注册会员"
                    }
                    return getUserlevelText
                }()
            }, {
                key: "getBaseInfo",
                value: function () {
                    function getBaseInfo() {
                        return Promise.all([(0, s.getLoginstatus)(), (0, s.getUserinfo)()])
                    }
                    return getBaseInfo
                }()
            }, {
                key: "sendImpr",
                value: function () {
                    function sendImpr() {
                        (0, m.logImpr)({
                            poi: "head|login|null",
                            comment: "登录卡片"
                        })
                    }
                    return sendImpr
                }()
            }, {
                key: "componentDidMount",
                value: function () {
                    function componentDidMount() {
                        var e = this;
                        this.getBaseInfo().then(this.getExtraInfo).then(function (t) {
                            e.setState(t), (0, s.afterLoad)().then(function () {
                                var n = {
                                        infoReady: !0,
                                        btnReady: !0
                                    },
                                    i = [];
                                i.push((0, s.getNewuserinfo)().then(function (e) {
                                    n.isNew = e.isNew
                                })), t.isCompany || i.push((0, s.getSpoint)().then(function (e) {
                                    n.spoint = e.spoint
                                })), t.realImgUrl && (n.imgUrl = t.realImgUrl), Promise.all(i).then(function () {
                                    e.setState(n, e.sendImpr)
                                })["catch"](function () {
                                    e.setState(n, e.sendImpr)
                                })
                            })
                        })
                    }
                    return componentDidMount
                }()
            }, {
                key: "render",
                value: function () {
                    function render() {
                        var e = this.state,
                            t = e.homeUrl,
                            n = e.plusStatus,
                            i = e.userLevel,
                            r = e.imgUrl,
                            o = e.isLogin,
                            l = e.nickName,
                            c = e.isCompany,
                            u = e.spoint,
                            f = e.userLevelTxt,
                            m = e.isNew,
                            h = e.plusUrl,
                            g = e.xinrenUrl,
                            v = e.vipUrl,
                            _ = e.vipPromo,
                            b = e.btnReady,
                            y = e.logoutUrl,
                            w = {
                                isLogin: o,
                                nickName: l,
                                homeUrl: t,
                                isCompany: c,
                                spoint: u,
                                userLevelTxt: f,
                                logoutUrl: y
                            },
                            k = this.clstagPrefix + "|" + this.poi,
                            S = {
                                clstagPrefix: k,
                                isNew: m,
                                isLogin: o,
                                isCompany: c,
                                plusUrl: h,
                                xinrenUrl: g,
                                vipUrl: v,
                                vipPromo: _,
                                btnReady: b
                            };
                        return a["default"].createElement("div", {
                            className: (0, s.mergeClassName)("user_inner", "user_level" + i, "user_plus" + n)
                        }, a["default"].createElement("div", {
                            className: "J_user_avatar user_avatar"
                        }, a["default"].createElement("a", {
                            className: "user_avatar_lk",
                            href: t,
                            target: "_blank",
                            clstag: k + "_01"
                        }, a["default"].createElement("img", {
                            src: r
                        }))), a["default"].createElement(d["default"], w), a["default"].createElement(p["default"], S))
                    }
                    return render
                }()
            }]), User
        }(a["default"].PureComponent);
    t["default"] = h
}, function (e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        r = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }(),
        o = n(0),
        a = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(o);
    n(74);
    var l = n(1),
        c = n(4),
        s = n(6),
        u = n(7),
        d = ["热门", "推荐", "最新", "热评", "热议", "HOT"],
        f = function (e) {
            function News() {
                _classCallCheck(this, News);
                var e = _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).apply(this, arguments));
                return e.clstagPrefix = c.CONSTS.CLSTAGPREFIX, e.poi = "head|news", e.state = {
                    list: []
                }, e
            }
            return _inherits(News, e), r(News, [{
                key: "processData",
                value: function () {
                    function processData(e) {
                        var t = this,
                            n = e.data;
                        if (0 !== e.code) return void l.dconsole.error("数据错误0", e);
                        if (!n || n.length < 4) return void l.dconsole.error("数据错误1", e);
                        n[0].tag = "公告", n[0].linkType = n[0].tag + "01", n[0].linkUrl = c.URLS.NEWS + "notice?id=" + n[0].id, n[1].tag = "活动", n[1].linkType = n[1].tag + "01", n[1].linkUrl = n[1].url;
                        var i = (0, l.getHash)(n[2].title + n[2].id || "", 6);
                        n[2].tag = d[i], n[2].linkType = n[2].tag + "03", n[2].linkUrl = c.URLS.NEWS + "article?id=" + n[2].id, n[3].tag = d[(i + 1) % d.length], n[3].linkType = n[3].tag + "04", n[3].linkUrl = c.URLS.NEWS + "article?id=" + n[3].id, this.moreLink = this.getMoreLink(n), this.setState({
                            list: n
                        }, function () {
                            (0, s.logImpr)({
                                poi: t.poi + "|null",
                                comment: "京东快报"
                            }), (0, s.logImpr)({
                                poi: t.poi + "|a",
                                url: t.moreLink,
                                text: "更多",
                                comment: "京东快报"
                            }), n.forEach(function (e, n) {
                                (0, s.logImpr)({
                                    poi: t.poi + "|b" + (0, l.padding)(n + 1, 2),
                                    url: e.linkUrl,
                                    text: e.title,
                                    comment: "京东快报",
                                    desc: (e.id || "") + "-" + e.linkType
                                })
                            })
                        })
                    }
                    return processData
                }()
            }, {
                key: "componentDidMount",
                value: function () {
                    function componentDidMount() {
                        window._news = this, this.requestData().then(this.processData.bind(this))
                    }
                    return componentDidMount
                }()
            }, {
                key: "requestData",
                value: function () {
                    function requestData() {
                        var e = void 0;
                        if ((0, l.isdebug)(21)) e = n.e(21).then(n.bind(null, 115)).then(function (e) {
                            return e["default"]
                        });
                        else {
                            var t = {
                                pin: u.USER.pin,
                                uuid: u.USER.uuid,
                                jda: u.USER.jda
                            };
                            e = (0, l.loadAsync)({
                                url: c.APIS.NEWS,
                                name: "jsonpNews",
                                params: t,
                                backup: c.APIS.NEWS_BAK,
                                reportBackupId: 27,
                                reportHidedFloor: 27
                            })
                        }
                        return e
                    }
                    return requestData
                }()
            }, {
                key: "getMoreLink",
                value: function () {
                    function getMoreLink(e) {
                        var t = e.slice(2, 4).map(function (e) {
                            return e.id
                        }).join(",");
                        return c.URLS.NEWS + "?ids=" + t
                    }
                    return getMoreLink
                }()
            }, {
                key: "render",
                value: function () {
                    function render() {
                        var e = this,
                            t = this.state.list;
                        return 0 === t.length ? "" : a["default"].createElement("div", {
                            className: "news2"
                        }, a["default"].createElement("div", {
                            className: "news_hd"
                        }, a["default"].createElement("h5", {
                            className: "news_tit"
                        }, "京东快报"), a["default"].createElement("a", {
                            href: this.moreLink,
                            target: "_blank",
                            className: "news_more",
                            clstag: this.clstagPrefix + "|" + this.poi + "|a",
                            onClick: function () {
                                function onClick() {
                                    (0, s.logClick)({
                                        poi: e.poi + "|a",
                                        text: "更多",
                                        url: e.moreLink
                                    })
                                }
                                return onClick
                            }()
                        }, "更多 ", a["default"].createElement("i", {
                            className: "iconfont"
                        }, ""))), a["default"].createElement("ul", {
                            className: "news_list"
                        }, t.map(function (t, n) {
                            var r = e.poi + "|b" + (0, l.padding)(n + 1, 2);
                            return a["default"].createElement("li", {
                                className: (0, l.mergeClassName)("news_item", "news_item__" + n)
                            }, a["default"].createElement("a", {
                                href: t.linkUrl,
                                target: "_blank",
                                className: "news_link",
                                clstag: e.clstagPrefix + "|" + r,
                                onClick: function () {
                                    function onClick() {
                                        (0, s.logClick)(i({
                                            poi: r,
                                            text: t.title,
                                            url: t.linkUrl,
                                            desc: t.id + "-" + t.linkType
                                        }, t.ext_columns))
                                    }
                                    return onClick
                                }()
                            }, a["default"].createElement("span", {
                                className: "news_tag"
                            }, t.tag), t.title))
                        })))
                    }
                    return render
                }()
            }]), News
        }(a["default"].Component);
    t["default"] = f
}, function (e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function (e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
        }
    }();
    n(76);
    var r = n(15),
        o = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(r),
        a = function () {
            function News2(e) {
                _classCallCheck(this, News2), this.conf = $.extend({
                    $el: null
                }, e), this.conf.$el && (this.supportTransform = o2.detect.css3test("transform"))
            }
            return i(News2, [{
                key: "init",
                value: function () {
                    function init() {
                        var e = this.conf.$el,
                            t = $(".J_news_tab", e);
                        new o["default"]({
                            container: t,
                            startAt: 0,
                            hash: !1,
                            activeClass: "mod_tab_head_item_on",
                            hoverToSwitch: !0,
                            onBeforeSwitch: function () {
                                function onBeforeSwitch() {}
                                return onBeforeSwitch
                            }(),
                            onAfterSwitch: $.proxy(function (e) {
                                var n = 0,
                                    i = t.find(".J_news_tab_active");
                                this.supportTransform ? (n = 54 * e, i.css({
                                    transform: "translateX(" + n + "px)",
                                    "-webkit-transform": "translateX(" + n + "px)",
                                    "-moz-transform": "translateX(" + n + "px)",
                                    "-ms-transform": "translateX(" + n + "px)"
                                })) : (n = 54 * e, i.css("left", n + "px"))
                            }, this)
                        }).init()
                    }
                    return init
                }()
            }]), News2
        }();
    t["default"] = a
}, function (e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }(),
        r = n(0),
        o = _interopRequireDefault(r);
    n(77);
    var a = n(15),
        l = _interopRequireDefault(a),
        c = n(1),
        s = n(78),
        u = _interopRequireDefault(s),
        d = n(79),
        f = _interopRequireDefault(d),
        p = n(80),
        m = _interopRequireDefault(p),
        h = n(81),
        g = _interopRequireDefault(h),
        v = n(82),
        _ = _interopRequireDefault(v),
        b = n(83),
        y = _interopRequireDefault(b),
        w = n(84),
        k = _interopRequireDefault(w),
        S = n(85),
        C = _interopRequireDefault(S),
        x = n(86),
        E = _interopRequireDefault(x),
        j = n(87),
        I = _interopRequireDefault(j),
        P = n(88),
        T = _interopRequireDefault(P),
        O = n(89),
        A = _interopRequireDefault(O),
        N = n(6),
        L = 8 === document.documentMode;
    L || $(".service_ico_baitiao svg").length || (o["default"].render(o["default"].createElement(u["default"], {
        className: "service_ico_svg"
    }), $(".service_ico_baitiao")[0]), o["default"].render(o["default"].createElement(f["default"], {
        className: "service_ico_svg"
    }), $(".service_ico_dianying")[0]), o["default"].render(o["default"].createElement(m["default"], {
        className: "service_ico_svg"
    }), $(".service_ico_huafei")[0]), o["default"].render(o["default"].createElement(g["default"], {
        className: "service_ico_svg"
    }), $(".service_ico_huoche")[0]), o["default"].render(o["default"].createElement(_["default"], {
        className: "service_ico_svg"
    }), $(".service_ico_jiayou")[0]), o["default"].render(o["default"].createElement(y["default"], {
        className: "service_ico_svg"
    }), $(".service_ico_jipiao")[0]), o["default"].render(o["default"].createElement(k["default"], {
        className: "service_ico_svg"
    }), $(".service_ico_jiudian")[0]), o["default"].render(o["default"].createElement(C["default"], {
        className: "service_ico_svg"
    }), $(".service_ico_licai")[0]), o["default"].render(o["default"].createElement(E["default"], {
        className: "service_ico_svg"
    }), $(".service_ico_lipin")[0]), o["default"].render(o["default"].createElement(I["default"], {
        className: "service_ico_svg"
    }), $(".service_ico_qyg")[0]), o["default"].render(o["default"].createElement(T["default"], {
        className: "service_ico_svg"
    }), $(".service_ico_youxi")[0]), o["default"].render(o["default"].createElement(A["default"], {
        className: "service_ico_svg"
    }), $(".service_ico_zhongchou")[0]));
    var R = !0,
        M = function () {
            function Service(e) {
                var t = this;
                _classCallCheck(this, Service), this.postSendImpl = function (e) {
                    try {
                        t._menuTabTimer && clearTimeout(t._menuTabTimer), t._menuTabTimer = setTimeout(function () {
                            if (e.hasClass("service_frame_on")) {
                                var t = e.index(),
                                    n = {
                                        poi: "head|shortcut|" + (0, c.padding)(t + 1, 2),
                                        comment: "12宫格hover"
                                    };
                                (0, N.logImpr)(n)
                            }
                        }, 1e3)
                    } catch (n) {
                        c.dconsole.log(n)
                    }
                };
                var n = this,
                    i = e.container;
                this.opts = $.extend({
                    container: i,
                    head: $(".J_tab_head", i),
                    content: $(".J_tab_content", i),
                    close: $(".J_service_pop_close", i),
                    expandClass: "service_expand",
                    colExpandClass: "col_expand",
                    activeClass: "service_frame_on",
                    hoverToSwitch: !0,
                    afterSwitch: null,
                    data: [{
                        isIframe: !0,
                        url: "//chongzhi.jd.com/jdhome-czindex-2017.html"
                    }, {
                        url: "//misc.360buyimg.com/virtuals/squares/2.0/js/jipiao.js"
                    }, {
                        url: "//misc.360buyimg.com/virtuals/squares/2.0/js/hotel.js"
                    }, {
                        url: "//misc.360buyimg.com/virtuals/squares/2.0/js/game.js"
                    }],
                    onAfterSwitch: function () {
                        function onAfterSwitch(e, t) {
                            var i = t.$contentItems.eq(e),
                                r = n.opts.data[e];
                            i[0].loaded || (r.isIframe ? (i.removeClass("mod_loading"), i.html($('<iframe width="160" height="180" frameborder="0" scrolling="no" src="' + r.url + '">'))) : (0, c.loadLegacy)().then(function () {
                                seajs.use(r.url, function (e) {
                                    i.removeClass("mod_loading"), e.init({
                                        el: i
                                    })
                                })
                            }), i[0].loaded = !0)
                        }
                        return onAfterSwitch
                    }()
                }, e)
            }
            return i(Service, [{
                key: "loadSprite",
                value: function () {
                    function loadSprite() {
                        L || n.e(4).then(n.bind(null, 116)).then(function (e) {
                            o["default"].render(o["default"].createElement(e["default"], null), document.getElementById("J_service"))
                        })
                    }
                    return loadSprite
                }()
            }, {
                key: "init",
                value: function () {
                    function init() {
                        var e = this,
                            t = !1,
                            n = !1,
                            i = this,
                            r = null;
                        this.loadSprite(), this.opts.head.delegate(".mod_tab_head_item", "mouseenter", function (o) {
                            var a = $(o.currentTarget);
                            R && (R = !1, i.opts.startAt = a.index(), i.tab = new l["default"](i.opts)), e.postSendImpl(a), clearTimeout(r), r = setTimeout(function () {
                                t || n || (i.opts.col.addClass(i.opts.colExpandClass), i.opts.container.addClass(i.opts.expandClass), t = !0)
                            }, 200)
                        }), this.opts.container.delegate(".mod_tab_head_item, .J_tab_head", "mouseleave", function (e) {
                            n = !1, clearTimeout(r)
                        }), this.opts.close.bind("click", function (e) {
                            clearTimeout(r), t = !1, n = !0, i.opts.col.removeClass(i.opts.colExpandClass), i.opts.container.removeClass(i.opts.expandClass)
                        })
                    }
                    return init
                }()
            }]), Service
        }();
    t["default"] = M
}, function (e, t, n) {
    e.exports = n(25)
}, function (e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        r = function () {
            function sliceIterator(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = undefined;
                try {
                    for (var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                } catch (c) {
                    r = !0, o = c
                } finally {
                    try {
                        !i && l["return"] && l["return"]()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }
            return function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return sliceIterator(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        o = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }();
    n(26), n(13);
    var a = n(0),
        l = _interopRequireDefault(a),
        c = n(17),
        s = _interopRequireDefault(c);
    n(29), n(31);
    var u = n(4),
        d = n(1),
        f = n(7),
        p = _interopRequireDefault(f),
        m = n(14),
        h = _interopRequireDefault(m),
        g = n(6),
        v = n(33),
        _ = _interopRequireDefault(v),
        b = n(39),
        y = _interopRequireDefault(b),
        w = n(62),
        k = _interopRequireDefault(w),
        S = n(90),
        C = _interopRequireDefault(S),
        x = n(93),
        E = _interopRequireDefault(x),
        j = n(94),
        I = _interopRequireDefault(j),
        P = n(95),
        T = _interopRequireDefault(P),
        O = n(96),
        A = _interopRequireDefault(O),
        N = n(97),
        L = _interopRequireDefault(N),
        R = n(98),
        M = _interopRequireDefault(R),
        D = n(99),
        U = _interopRequireDefault(D),
        z = n(100),
        q = _interopRequireDefault(z),
        B = n(101),
        H = _interopRequireDefault(B),
        F = n(102),
        W = _interopRequireDefault(F),
        J = n(103),
        K = _interopRequireDefault(J),
        V = n(104),
        G = _interopRequireDefault(V),
        Y = n(105),
        Q = _interopRequireDefault(Y),
        X = n(106),
        Z = _interopRequireDefault(X),
        ee = n(107);
    n(108), h["default"].init(939, 951, 941, 942), (0, g.initClicklogger)(), (0, g.logImpr)({
        poi: "head|null|null",
        comment: "区域"
    }, !0);
    var te = !0;
    (0, d.isdebug)(15) || ((0, d.isdebug)(16) || pageConfig.gatewaySection && p["default"].unifiedHash > pageConfig.gatewaySection) && (te = !1);
    var ne = !0;
    (0, d.isdebug)(10) || (window.pageConfig.timestamp < 15401376e5 || window.pageConfig.timestamp > 15422976e5) && (ne = !1), (0, d.isdebug)(20) && (pageConfig.enableEnjoy = !1);
    var ie = pageConfig.enjoyType,
        re = null,
        oe = null;
    if (ie) {
        switch (ie) {
            case "A1":
            case "A2":
                oe = 365;
                break;
            case "S1":
                oe = 500;
                break;
            case "S2":
                oe = 620;
                break;
            case "S3":
                oe = 590;
                break;
            default:
                oe = 365
        }
        re = (0, K["default"])(oe)
    }
    var ae = function (e) {
        function Index() {
            _classCallCheck(this, Index);
            var e = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
            return e.chnHideMap = {}, e.lazyloadOptions = {
                offset: 200,
                once: !0,
                placeholderClassName: "mod_lazyload"
            }, e.chnOnHide = function (t, n) {
                e.chnHideMap[t] ? e.chnHideMap[t]++ : e.chnHideMap[t] = 1, e.chnHideMap[t] === n && (document.getElementById("J_" + t).style.display = "none")
            }, e.state = {
                isNew: !1,
                isCompany: !1,
                list: [{
                    isPlaceholder: !0,
                    cnt: 2
                }, {
                    isPlaceholder: !0,
                    cnt: 2
                }, {
                    isPlaceholder: !0,
                    cnt: 3
                }, {
                    isPlaceholder: !0,
                    cnt: 2
                }]
            }, e
        }
        return _inherits(Index, e), o(Index, [{
            key: "requestStageInfo",
            value: function () {
                function requestStageInfo() {
                    return (0, d.loadAsync)({
                        url: u.APIS.STAGEINFO,
                        name: "jsonpStageinfo",
                        params: {
                            pin: p["default"].pin,
                            uuid: p["default"].uuid
                        },
                        backup: [u.APIS.STAGEINFO_BACKUP, u.APIS.STAGEINFO_STOBACKUP],
                        reportBackupId: 25,
                        reportHidedFloor: 25
                    })
                }
                return requestStageInfo
            }()
        }, {
            key: "componentDidMount",
            value: function () {
                function componentDidMount() {
                    var e = this;
                    this.requestStageInfo().then(function (t) {
                        e.setState({
                            list: t.data || []
                        })
                    })["catch"](function () {
                        e.setState({
                            list: []
                        })
                    }), (0, d.bindHotkey)(), (0, d.afterLoad)().then(function () {
                        e.runDelayedWorks(), pageConfig.enableEnjoy || Promise.all([(0, d.getNewuserinfo)(), (0, d.getCompanyinfo)()]).then(function (t) {
                            var n = r(t, 2),
                                i = n[0],
                                o = n[1],
                                a = i.isNew,
                                l = o.isCompany;
                            e.setState({
                                isNew: a,
                                isCompany: l
                            })
                        })
                    })
                }
                return componentDidMount
            }()
        }, {
            key: "loadToolbar",
            value: function () {
                function loadToolbar() {
                    return n.e(1).then(n.bind(null, 110)).then(function (e) {
                        e["default"]()
                    })
                }
                return loadToolbar
            }()
        }, {
            key: "runDelayedWorks",
            value: function () {
                function runDelayedWorks() {
                    var e = this;
                    if (null === (0, d.readCookie)("PCSYCityID") && ((new Image).src = "//floor.jd.com/recommend/lbs/get?t=" + (new Date).getTime()), (0, d.cookieCheck)(), (0, d.loadLegacy)().then(function () {
                            setTimeout(function () {
                                e.loadToolbar()
                            }, 3e3), Promise.all([(0, d.getNewuserinfo)(), (0, d.getCompanyinfo)()]).then(function (e) {
                                var t = r(e, 2),
                                    n = t[0],
                                    i = t[1];
                                n.isNew && !i.isCompany && (seajs.config({
                                    alias: {
                                        ad_noob: "//nfa.jd.com/loadFa.action?aid=0_0_8857"
                                    }
                                }), seajs.use("ad_noob", function (e) {
                                    var t = [],
                                        n = [],
                                        i = void 0;
                                    e.forEach(function (e, r) {
                                        if ("floor" !== e.id) {
                                            if ("fsbgclog" === e.id) return void(i = e.clog);
                                            var o = Promos.__instances[e.id];
                                            o && (t.push(o.deferred), n.push(e))
                                        }
                                    }), $.when.apply($, t).then(function () {
                                        var e = Array.prototype.slice.call(arguments);
                                        $.each(e, function (e, t) {
                                            t.activeData && t.activeData.isTop || ("fsbg" === t.opts.id && i && (n[e].fclog = i), t.changeTo(n[e]))
                                        })
                                    })
                                }))
                            })
                        }), /iPad/i.test(window.navigator.userAgent)) {
                        var t = document.createElement("script");
                        t.src = "//nfa.jd.com/loadFa.js?aid=2_955_8766", document.body.appendChild(t)
                    }! function () {
                        var e = document.createElement("script");
                        e.src = "//h5.360buyimg.com/ws_js/jdwebm.js?v=pcHome", document.body.appendChild(e)
                    }(), setTimeout(function () {
                        (0, g.sendImpr)()
                    }, 1e3)
                }
                return runDelayedWorks
            }()
        }, {
            key: "getEnjoy",
            value: function () {
                function getEnjoy() {
                    if (re) {
                        var e = i({}, this.lazyloadOptions);
                        return l["default"].createElement(s["default"], i({
                            title: "大促楼层",
                            height: oe
                        }, e), l["default"].createElement(re, null))
                    }
                    return ""
                }
                return getEnjoy
            }()
        }, {
            key: "getNew",
            value: function () {
                function getNew() {
                    var e = this.state.isNew;
                    return !this.state.isCompany && e ? l["default"].createElement(s["default"], i({
                        title: "新人楼层"
                    }, this.lazyloadOptions), l["default"].createElement(A["default"], null)) : ""
                }
                return getNew
            }()
        }, {
            key: "getCompany",
            value: function () {
                function getCompany() {
                    return this.state.isCompany ? l["default"].createElement(s["default"], this.lazyloadOptions, l["default"].createElement(L["default"], null)) : ""
                }
                return getCompany
            }()
        }, {
            key: "render",
            value: function () {
                function render() {
                    var e = this,
                        t = this.state.list;
                    return l["default"].createElement("div", {
                        className: "floors"
                    }, this.getCompany(), l["default"].createElement(s["default"], i({
                        title: "京东秒杀",
                        style: {
                            height: "275px",
                            marginBottom: "30px"
                        }
                    }, this.lazyloadOptions), l["default"].createElement(E["default"], null)), this.getNew(), this.getEnjoy(), l["default"].createElement(s["default"], i({
                        title: "核心场景1",
                        height: 480
                    }, this.lazyloadOptions), l["default"].createElement(I["default"], null)), l["default"].createElement(s["default"], i({
                        title: "核心场景2",
                        height: 480
                    }, this.lazyloadOptions), l["default"].createElement(T["default"], null)), t && t.map(function (t, n) {
                        for (var r = [], o = 0; o < t.cnt; o++) {
                            var a = o === t.cnt - 1 ? 1 + n : 0;
                            r.push(l["default"].createElement(s["default"], i({
                                title: "场景" + t.name + (o + 1),
                                height: 480
                            }, e.lazyloadOptions), t.isPlaceholder ? l["default"].createElement("div", {
                                className: "chn mod_lazyload"
                            }) : l["default"].createElement(M["default"], {
                                stage: t.name,
                                idx: 1 + o,
                                imprPos: a,
                                onError: e.chnOnHide.bind(e, t.name, t.cnt)
                            })))
                        }
                        return l["default"].createElement("div", {
                            id: "J_" + t.name,
                            className: (0, d.mergeClassName)("stage", "stage_" + (1 + n))
                        }, l["default"].createElement(s["default"], i({
                            title: "场景" + t.name,
                            height: 65,
                            style: {
                                backgroundImage: "none"
                            }
                        }, e.lazyloadOptions), t.isPlaceholder ? l["default"].createElement("div", {
                            style: "height: 97px;"
                        }) : l["default"].createElement(U["default"], {
                            title: t.title
                        })), r)
                    }), te ? l["default"].createElement(s["default"], i({
                        title: "JOY寻宝",
                        height: 585
                    }, this.lazyloadOptions), l["default"].createElement(q["default"], null)) : "", l["default"].createElement(s["default"], i({
                        title: "特色推荐",
                        height: 450
                    }, this.lazyloadOptions), l["default"].createElement(H["default"], null)), l["default"].createElement(s["default"], i({
                        title: "京东直播",
                        height: 520
                    }, this.lazyloadOptions), l["default"].createElement(W["default"], null)), l["default"].createElement(s["default"], i({
                        title: "还没逛够",
                        height: 730
                    }, this.lazyloadOptions), 0 === u.CONSTS.moreVersion ? l["default"].createElement(Q["default"], null) : l["default"].createElement(G["default"], null)), l["default"].createElement(s["default"], i({
                        height: 500
                    }, this.lazyloadOptions), l["default"].createElement(Z["default"], null)))
                }
                return render
            }()
        }]), Index
    }(l["default"].Component);
    if ((0, _["default"])(), (0, y["default"])(), document.getElementsByClassName("focus_item").length > 1) n.e(17).then(n.bind(null, 132)).then(function (e) {
        e["default"]()
    });
    else {
        ne && (0, ee.initJoytop)(), (0, k["default"])();
        var le = "number" == typeof pageConfig.logoSectionStart ? pageConfig.logoSectionStart : -1,
            ce = pageConfig.logoSectionEnd || 0;
        8 !== document.documentMode && (p["default"].unifiedHash > le && p["default"].unifiedHash <= ce || (0, d.isdebug)(23)) ? (0, C["default"])() : (0, v.sendImprPlainLogo)(), l["default"].render(l["default"].createElement(ae, null), document.getElementById("app"))
    }
}, function (e, t, n) {
    "use strict";
    n(27).polyfill()
}, function (e, t, n) {
    e.exports = n(12)(2)
}, function (e, t, n) {
    e.exports = n(12)(3)
}, function (e, t) {}, function (e, t) {
    e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
            i = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
            var r = t.trim().replace(/^"(.*)"$/, function (e, t) {
                return t
            }).replace(/^'(.*)'$/, function (e, t) {
                return t
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return e;
            var o;
            return o = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : i + r.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")"
        })
    }
}, function (e, t) {}, function (e, t, n) {
    e.exports = n(12)(6)
}, function (e, t, n) {
    function sendImprPlainLogo() {
        (0, o.logImpr)({
            url: $("#logo a").attr("href"),
            poi: "head|logo|01",
            comment: "京东logo"
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    t.sendImprPlainLogo = sendImprPlainLogo;
    var o = n(6);
    n(34);
    var a = n(1),
        l = n(4),
        c = n(7);
    n(35), n(36);
    var s = n(37),
        u = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(s),
        d = function () {
            var e = l.CONSTS.CLSTAGPREFIX + "|head|search";
            (0, a.loadAsync)({
                url: l.APIS.HOTWORDS,
                params: {
                    pin: c.USER.pin,
                    uuid: c.USER.uuid
                },
                backup: [l.APIS.HOTWORDS_STOBACKUP],
                charset: "utf-8",
                cache: !0,
                name: "jsonpHotWords"
            }).then(function (t) {
                if (t && "object" === (void 0 === t ? "undefined" : r(t)) && Array.isArray(t.data)) {
                    var n = t.data,
                        l = "",
                        c = [],
                        s = [],
                        u = 0,
                        d = [],
                        f = [],
                        p = 0,
                        m = [],
                        h = [],
                        g = 0,
                        v = $('<div id="J_searchbg" class="search_bg" />'),
                        _ = $("#key").css("background", "transparent").before(v),
                        b = $("#search .button");
                    d = Array.isArray(n[0]) ? n[0].filter(function (e) {
                        return 1 === e.c
                    }) : [], n.slice(1).forEach(function (e, t) {
                        e.n && (2 === e.c ? c.push(e) : "" === e.c && m.push(e))
                    });
                    var y = function () {
                        var e = {};
                        return function (t) {
                            var n = t.n;
                            return !(n in e) && (e[n] = !0)
                        }
                    }();
                    if (d.forEach(function (e, t) {
                            p >= 4 || y(e) && (f.push(e), p++)
                        }), f.length) {
                        var w = f[0];
                        l += '<a href="' + w.u + '" id="specHotWord" class="style-red" target="_blank">' + w.n + "</a>"
                    }
                    c.forEach(function (e, t) {
                        u >= 10 || y(e) && (s.push(e), u++)
                    }), m.forEach(function (e, t) {
                        g >= 9 || y(e) && (h.push(e), g++, l += '<a href="' + e.u + '" target="_blank">' + e.n + "</a>")
                    }), $("#hotwords").html(l), $.each($("#hotwords a"), function (t, n) {
                        $(n).attr("clstag", e + "_d0" + (t + 1));
                        var r = (0, o.getjQLogParams)(n);
                        (0, o.logImpr)(i({}, r, {
                            comment: "热搜词"
                        }))
                    });
                    ! function () {
                        var e = f.length;
                        if (e && 1 !== e) {
                            var t = 0,
                                n = void 0,
                                i = void 0,
                                r = $("#specHotWord"),
                                o = function setAutoSpecHotWords(o) {
                                    clearTimeout(n), o && (i = f[t], r.html(i.n).attr("href", i.u), n = setTimeout(function () {
                                        t = (t + 1) % e, setAutoSpecHotWords(!0)
                                    }, 3e3))
                                };
                            r.bind("mouseenter", function () {
                                o(!1)
                            }).bind("mouseleave", function () {
                                o(!0)
                            }), o(!0)
                        }
                    }();
                    ! function () {
                        if (s.length) {
                            var e = 0,
                                t = s.length,
                                n = void 0,
                                i = !1,
                                r = void 0,
                                o = function () {
                                    return /[^ ]/.test(_.val())
                                },
                                l = function setAutoSearchWords(o) {
                                    clearTimeout(n), i = o, o && (r = s[e], v.html(r.n), n = setTimeout(function () {
                                        e = (e + 1) % t, setAutoSearchWords(!0)
                                    }, 6e3))
                                };
                            _.bind("focus", function () {
                                l(!1), v.css("color", "#c8c8c8")
                            }).bind("blur", function () {
                                o() || (v.css("color", ""), l(!0))
                            }).bind("keydown", function (e) {
                                if (13 === e.keyCode) return o() ? search("key") : search("key", r.d || r.n), l(!1), !1;
                                (0, a.isCharacterKey)(e.keyCode) && v.html("")
                            }).bind("keyup", function () {
                                o() ? v.html("") : v.html(r.n)
                            }).removeAttr("onkeydown"), b.bind("click", function (e) {
                                return i ? search("key", r.d || r.n) : search("key"), l(!1), !1
                            }).removeAttr("onclick"), _.is(":focus") || l(!0)
                        }
                    }()
                }
            })
        },
        f = function () {
            var e = $(window),
                t = $("#search"),
                n = !1,
                i = function () {
                    e.scrollTop() > 660 && !1 === n ? (n = !0, t.addClass("search-fix")) : e.scrollTop() <= 660 && !0 === n && (n = !1, t.removeClass("search-fix"))
                };
            e.bind("scroll.searchFix", (0, a.throttle)(function () {
                i()
            }, 100)), i()
        },
        p = function () {
            (0, u["default"])()
        },
        m = function () {
            d(), f(), p()
        };
    t["default"] = m
}, function (e, t) {}, function (e, t) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    window.search = function (e, t) {
        var i, r = "//search.jd.com/Search?keyword={keyword}&enc={enc}{additional}",
            o = search.additinal || "";
        if ("string" == typeof t && "" != t ? o += "&spm=a.0.0" : t = document.getElementById(e).value, t = t.replace(/^\s*(.*?)\s*$/, "$1"), t.length > 100 && (t = t.substring(0, 100)), "" == t) return void(window.location.href = window.location.href);
        var a = 0;
        "undefined" != typeof window.pageConfig && "undefined" != typeof window.pageConfig.searchType && (a = window.pageConfig.searchType);
        var l = "&cid{level}={cid}",
            c = "string" == typeof search.cid ? search.cid : "",
            s = "string" == typeof search.cLevel ? search.cLevel : "",
            u = "string" == typeof search.ev_val ? search.ev_val : "";
        switch (a) {
            case 0:
                break;
            case 1:
                s = "-1", o += "&book=y";
                break;
            case 2:
                s = "-1", o += "&mvd=music";
                break;
            case 3:
                s = "-1", o += "&mvd=movie";
                break;
            case 4:
                s = "-1", o += "&mvd=education";
                break;
            case 5:
                var d = "&other_filters=%3Bcid1%2CL{cid1}M{cid1}[cid2]";
                switch (s) {
                    case "51":
                        l = d.replace(/\[cid2]/, ""), l = l.replace(/\{cid1}/g, "5272");
                        break;
                    case "52":
                        l = d.replace(/\{cid1}/g, "5272"), l = l.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                        break;
                    case "61":
                        l = d.replace(/\[cid2]/, ""), l = l.replace(/\{cid1}/g, "5273");
                        break;
                    case "62":
                        l = d.replace(/\{cid1}/g, "5273"), l = l.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                        break;
                    case "71":
                        l = d.replace(/\[cid2]/, ""), l = l.replace(/\{cid1}/g, "5274");
                        break;
                    case "72":
                        l = d.replace(/\{cid1}/g, "5274"), l = l.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                        break;
                    case "81":
                        l = d.replace(/\[cid2]/, ""), l = l.replace(/\{cid1}/g, "5275");
                        break;
                    case "82":
                        l = d.replace(/\{cid1}/g, "5275"), l = l.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}")
                }
                r = "//search-e.jd.com/searchDigitalBook?ajaxSearch=0&enc=utf-8&key={keyword}&page=1{additional}";
                break;
            case 6:
                s = "-1", r = "//music.jd.com/8_0_desc_0_0_1_15.html?key={keyword}";
                break;
            case 7:
                r = "//s-e.jd.com/Search?key={keyword}&enc=utf-8";
                break;
            case 8:
                r = "//search.jd.hk/Search?keyword={keyword}&enc=utf-8";
                break;
            case 9:
                o += "&market=1";
                break;
            case 10:
                o += "&gp=2"
        }
        if ("string" == typeof c && "" != c && "string" == typeof s) {
            var f = /^(?:[1-8])?([1-3])$/;
            s = "-1" == s ? "" : f.test(s) ? RegExp.$1 : "";
            var p = l.replace(/\{level}/, s);
            p = p.replace(/\{cid}/g, c), o += p
        }
        if ("string" == typeof u && "" != u && (o += "&ev=" + u), t = encodeURIComponent(t), i = r.replace(/\{keyword}/, t), i = i.replace(/\{enc}/, "utf-8"), i = i.replace(/\{additional}/, o), "object" === ("undefined" == typeof $o ? "undefined" : n($o)) && ("string" == typeof $o.lastKeyword && (i += "&wq=" + encodeURIComponent($o.lastKeyword)), "string" == typeof $o.pvid && (i += "&pvid=" + $o.pvid)), i.indexOf("/search.jd.com/") > 0) try {
            JA.tracker.ngloader("search.000009", {
                "key": t,
                "posid": e,
                "target": i
            })
        } catch (m) {}
        "undefined" != typeof search.isSubmitted && 0 != search.isSubmitted || (setTimeout(function () {
            window.location.href = i
        }, 50), search.isSubmitted = !0)
    }, window.$o = function (e) {
        function SearchBox() {
            this.length = 0, this.index = -1, this.iLastModified = 0, this.lastKeyword = !1, this.keep_keyword = "", this.pvid = p, this.enable_remind = !0, this.IME = !1
        }
        var t = $("#key");
        if (!(t.length < 1)) {
            var i = {};
            i.replace = function (e, t) {
                return e.replace(/#{(.*?)}/g, function () {
                    var e = arguments[1];
                    return "undefined" != typeof t[e] ? t[e] : arguments[0]
                })
            }, i.genPvid = function () {
                var e = (new Date).getTime();
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                    var n = (e + 16 * Math.random()) % 16 | 0;
                    return e = Math.floor(e / 16), ("x" == t ? n : 3 & n | 8).toString(16)
                })
            }, i.getQueryString = function (t, n) {
                var i = new RegExp("(^|\\?|&)" + t + "=([^&]*)(\\s|&|$)", "i"),
                    r = n || e.location.search;
                return i.test(r) ? RegExp.$2 : ""
            }, i.htmlspecialchars = function (e) {
                return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : ""
            }, i.htmlspecialcharsDecode = function (e) {
                return "string" == typeof e ? e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"') : ""
            }, String.prototype.isEmpty = function () {
                return 0 == this.length
            }, i.textSelect = function (e, t, n) {
                if ("string" == typeof e && (e = document.getElementById(e)), e) {
                    var i = 1 * t,
                        r = 1 * n,
                        o = e.value.length;
                    if (o)
                        if (i || (i = 0), r || (r = o), i > o && (i = o), i < 0 && (i = o + i), r < 0 && (r = o + r), e.createTextRange) {
                            var a = e.createTextRange();
                            a.moveStart("character", -o), a.moveEnd("character", -o), a.moveStart("character", i), a.moveEnd("character", r), a.select()
                        } else e.setSelectionRange(i, r), e.focus()
                }
            }, i.getSelectText = function (e) {
                return document.selection ? document.selection.createRange().text : e ? e.value.substring(e.selectionStart, e.selectionEnd) : ""
            };
            var r = '<a style="color:#005AA0" onclick="$o.del(event)">删除</a>',
                o = '<li id="d_#{id}" suggest-pos="#{suggest_pos}" title="#{title}" onclick="$o.clickItem(this)" #{history_mark}><div class="search-item" #{history_style}>#{keyword}</div><div class="search-count">#{search_count}</div></li>',
                a = '<li class="brand-search"><div id="d_#{id}" class="info J_shop_box" style="cursor:default;">#{guide}</div>#{categorys}</li>',
                l = '<div id="d_#{id}" suggest-pos="#{suggest_pos}" class="#{className}" title="#{title}" act="#{act_value}" onclick="$o.clickItem(this)"><div class="search-item">在#{act_name}</div><div class="search-count">约#{amount}个商品</div></div>',
                c = '<div id="d_#{id}" suggest-pos="#{suggest_pos}" class="#{className}" title="#{title}" act="#{act_value}" onclick="$o.clickItem(this)"><div class="search-item">#{act_name}</div><div class="search-count">约#{amount}个商品</div></div>',
                s = '<div id="d_#{id}" class="bs-item J_shop_box"><a class="logo" href="//mall.jd.com/index-#{shop_id}.html"><img width="90" height="30" src="#{shop_logo}"/></a><a class="name" href="//mall.jd.com/index-#{shop_id}.html">#{shop_name}</a></div>',
                u = '<div id="d_#{id}" class="#{className}"><a href="#{link}" style="float:left;width:100%;">#{prom_name}</a></div>',
                d = $("#shelper"),
                f = null != navigator.userAgent.toLowerCase().match(/chrome/),
                p = i.genPvid(),
                m = "//hiswd.jd.com/?pvid=" + p,
                h = function (e) {
                    var t = !1;
                    switch (e.location.host) {
                        case "cn.jd.com":
                        case "global.jd.com":
                            t = !0
                    }
                    return t
                }(e),
                g = function (e) {
                    var t = "",
                        n = "";
                    switch (e.location.host) {
                        case "cn.jd.com":
                        case "global.jd.com":
                            t += "//suggest-squanqiu.jd.com/?terminal=shouquanqiu";
                            break;
                        default:
                            t += "//dd-search.jd.com/?terminal=pc&newjson=1"
                    }
                    if (t += "&ver=2&zip=1&key=#{keyword}&pvid=" + p + "&t=#{time}&curr_url=" + encodeURIComponent(e.location.host + e.location.pathname), e.QUERY_KEYWORD && (t += "&search_key=" + encodeURIComponent(e.QUERY_KEYWORD)), e.pageConfig && e.pageConfig.product && e.pageConfig.product.cat) n = "&cid1=" + (e.pageConfig.product.cat[0] || ""), n += "&cid2=" + (e.pageConfig.product.cat[1] || ""), n += "&cid3=" + (e.pageConfig.product.cat[2] || "");
                    else if ("list.jd.com" == e.location.host)
                        if (e.pageConfig && e.pageConfig.queryParam) n = "&cid1=" + (e.pageConfig.queryParam.c1 || ""), n += "&cid2=" + (e.pageConfig.queryParam.c2 || ""), n += "&cid3=" + (e.pageConfig.queryParam.c3 || "");
                        else {
                            var r = decodeURIComponent(i.getQueryString("cat")).split(",");
                            n = "&cid1=" + (r[0] || ""), n += "&cid2=" + (r[1] || ""), n += "&cid3=" + (r[2] || "")
                        } return t + n
                }(e);
            SearchBox.prototype.init = function () {
                this.length = 0, this.index = -1, this.version = 0, search.additinal = ""
            }, SearchBox.prototype.hideTip = function () {
                this.init(), this.lastKeyword = !1;
                var e = i.getSelectText(t[0]);
                this.keep_keyword && e && this.keep_keyword + e == t.val() && t.val(this.keep_keyword), d.html("").hide()
            }, SearchBox.prototype.clickItem = function (e) {
                var n = e.getAttribute("cid"),
                    r = "&suggest=" + e.getAttribute("suggest-pos") + "." + this.version;
                search.cid = null != n && "" != n ? n : null;
                var o = e.getAttribute("cLevel");
                search.cLevel = null != o && "" != o ? o : null;
                var a = e.getAttribute("title");
                null == a || $.trim(a).isEmpty() || t.val(i.htmlspecialcharsDecode(a)), null !== e.getAttribute("act") && (r += e.getAttribute("act")), search.additinal = r, search("key")
            }, SearchBox.prototype.mouseenter = function (e) {
                var e = $(e);
                e.attr("history") && e.find(".search-count").html(r), e.hasClass("J_shop_box") ? e.find(".name").css("text-decoration", "underline") : e.css("background", "#FFDFC6");
                var t = e.attr("id").split("_"),
                    n = parseInt(t[1], 10);
                if (n != this.index) {
                    if (this.index > -1) {
                        var i = $("#d_" + this.index);
                        i.css("background", "#FFF"), i.attr("history") && i.find(".search-count").html("搜索历史"), i.hasClass("J_shop_box") && i.find(".name").css("text-decoration", "none")
                    }
                    this.index = n
                }
            }, SearchBox.prototype.mouseleave = function (e) {
                e.css("background", "#FFF"), e.attr("history") && e.find(".search-count").html("搜索历史")
            }, SearchBox.prototype.selectItemNode = function (e) {
                var n = this,
                    o = $("#d_" + n.index);
                o.css("background-color", "#FFF"), o.attr("history") && o.find(".search-count").html("搜索历史"), o.hasClass("J_shop_box") && o.find(".name").css("text-decoration", "none"), -1 == n.index && -1 == e && (e = 0), n.index = (n.length + n.index + e) % n.length;
                var a = $("#d_" + n.index),
                    l = "&suggest=" + a.attr("suggest-pos") + "." + n.version;
                if (a.length > 0) {
                    a.attr("history") && a.find(".search-count").html(r), a.hasClass("J_shop_box") ? a.find(".name").css("text-decoration", "underline") : a.css("background-color", "#FFDFC6");
                    var c = a.attr("title");
                    null == c || $.trim(c).isEmpty() || t.val(i.htmlspecialcharsDecode(c));
                    var s = a.attr("cid");
                    search.cid = null != s && "" != s ? s : null;
                    var u = a.attr("cLevel");
                    search.cLevel = null != u && "" != u ? u : null, void 0 !== a.attr("act") && (l += a.attr("act")), search.additinal = l
                }
            }, SearchBox.prototype.input = function () {
                var e = this;
                e.timeoutId && clearTimeout(e.timeoutId), e.timeoutId = setTimeout(function () {
                    var n = $.trim(t.val());
                    if (n === e.lastKeyword) return !1;
                    e.lastKeyword = n, $.ajax({
                        url: n ? i.replace(g, {
                            keyword: encodeURIComponent(n),
                            time: (new Date).getTime()
                        }) : m,
                        dataType: "jsonp",
                        scriptCharset: "utf-8",
                        jsonp: "callback",
                        cache: !0,
                        success: function (t) {
                            return function (n) {
                                e.iLastModified > t || (e.iLastModified = t, h ? e.onloadGLOBALItems(n) : e.onloadItems(n))
                            }
                        }((new Date).getTime())
                    })
                }, 150)
            }, SearchBox.prototype.keydown_up = function (n) {
                var i = this,
                    r = n || e.event;
                0 == t.length && (t = $("#key")), 0 == d.length && (d = $("tie"));
                var o = r.keyCode;
                switch (o) {
                    case 38:
                        i.selectItemNode(-1);
                        break;
                    case 40:
                        i.selectItemNode(1);
                        break;
                    case 27:
                        i.hideTip();
                        break;
                    case 37:
                    case 39:
                        break;
                    default:
                        i.IME = 229 == o, 8 == o || 46 == o ? i.disableRemind() : i.enable_remind = !0, $.browser.mozilla || i.input()
                }
            }, SearchBox.prototype.onloadGLOBALItems = function (r) {
                if (!r || !r.length) return this.hideTip(), !1;
                this.init();
                var c = this,
                    f = e.pageConfig && e.pageConfig.searchType ? e.pageConfig.searchType : 0,
                    p = 1,
                    m = sCategoriesHtml = "",
                    h = iLen = iItemLen = 0,
                    g = r.length,
                    v = 0,
                    _ = i.htmlspecialchars(t.val());
                for (r[g - 1] && r[g - 1].version && (c.version = r[g - 1].version); h < g; h++) {
                    var b = r[h];
                    if (b && (b.key || b.pcif) && (!b.pcif || 0 == iItemLen))
                        if (b.rem && c.remindKey(b.rem.rei, b.rem.req), b.pcif) {
                            if (0 == f) {
                                for (var y = 0, w = b.pcif.length; y < w; y++) switch (b.pcif[y].iftp) {
                                    case "0":
                                        break;
                                    case "1":
                                        sCategoriesHtml += i.replace(l, {
                                            id: ++iLen,
                                            title: i.htmlspecialchars(b.pcif[y].shq),
                                            className: "item1",
                                            act_name: "<strong> 全球购 </strong>",
                                            act_value: "&gp=1",
                                            amount: b.pcif[y].wds,
                                            suggest_pos: p + ".wor.0"
                                        });
                                        break;
                                    case "2":
                                        sCategoriesHtml += i.replace(l, {
                                            id: ++iLen,
                                            title: i.htmlspecialchars(b.pcif[y].shq),
                                            className: "item1",
                                            act_name: b.pcif[y].acp ? ' <img src="//img11.360buyimg.com/img/' + b.pcif[y].acp + '"> ' : "<strong> " + b.pcif[y].acq + " </strong>",
                                            act_value: b.pcif[y].acu,
                                            amount: b.pcif[y].acc,
                                            suggest_pos: p + ".acq.0"
                                        });
                                        break;
                                    case "3":
                                        sCategoriesHtml += i.replace(u, {
                                            id: ++iLen,
                                            className: "item1",
                                            link: b.pcif[y].pru + (b.pcif[y].pru.indexOf("?") > 0 ? "&" : "?") + "suggest=1.prom.0." + c.version + "&wq=" + encodeURIComponent(t.val()),
                                            prom_name: b.pcif[y].prt.replace("&", ' <img src="' + b.pcif[y].prp + '"> ')
                                        });
                                        break;
                                    case "4":
                                        sCategoriesHtml += i.replace(l, {
                                            id: ++iLen,
                                            title: i.htmlspecialchars(b.pcif[y].shq),
                                            className: "item1",
                                            act_name: b.pcif[y].icu ? ' <img src="' + b.pcif[y].icu + '"> ' : "<strong> " + b.pcif[y].act + " </strong>",
                                            act_value: b.pcif[y].ftt,
                                            amount: b.pcif[y].acc,
                                            suggest_pos: p + ".acq.0"
                                        });
                                        break;
                                    case "5":
                                        m += i.replace(a, {
                                            id: 0,
                                            guide: b.pcif[y].ssq,
                                            categorys: i.replace(s, {
                                                id: 1,
                                                shop_id: b.pcif[y].shid,
                                                shop_name: b.pcif[y].shn,
                                                shop_logo: "//img30.360buyimg.com/n1/s90x30_" + b.pcif[y].shp
                                            })
                                        }), iItemLen++, v = 1
                                }
                                v && (iLen = 1)
                            }
                        } else {
                            var k = i.htmlspecialchars(b.key),
                                S = b.his ? "搜索历史" : i.replace("约#{amount}个商品", {
                                    amount: b.qre
                                }),
                                C = b.his ? 'history="1"' : "",
                                x = b.his ? 'style="color:#005AA0"' : "",
                                E = k.indexOf(_),
                                j = _.length && 0 == E && !b.his ? _ + "<strong>" + k.substring(E + _.length) + "</strong>" : k;
                            0 == iItemLen && 0 == iLen && (iLen = -1), 0 == iItemLen && iLen > 0 ? m += i.replace('<li class="fore1"><div id="d_#{id}" suggest-pos="#{suggest_pos}" class="fore1" title="#{title}" onclick="$o.clickItem(this)" #{history_mark}><div class="search-item" #{history_style}>#{keyword}</div><div class="search-count">#{search_count}</div></div>#{categorys}</li>', {
                                id: 0,
                                title: k,
                                keyword: j,
                                suggest_pos: p++ + (b.his ? ".his.0" : ".def.0"),
                                categorys: sCategoriesHtml,
                                search_count: S,
                                history_mark: C,
                                history_style: x
                            }) : m += i.replace(o, {
                                id: ++iLen,
                                title: k,
                                keyword: j,
                                suggest_pos: p++ + (b.his ? ".his.0" : ".def.0"),
                                search_count: S,
                                history_mark: C,
                                history_style: x
                            }), iItemLen++
                        }
                }
                c.length = ++iLen, "" != m ? (m += "object" == (void 0 === b ? "undefined" : n(b)) && b.his ? '<li class="close" onclick="$o.del(event)">全部删除</li>' : '<li class="close" onclick="$o.hideTip()">关闭</li>', d.html(m).show().find('[id^="d_"]').bind("mouseleave", function () {
                    c.mouseleave($(this))
                }).bind("mouseenter", function () {
                    c.mouseenter($(this))
                })) : d.html("").hide()
            }, SearchBox.prototype.onloadItems = function (r) {
                if (!r || !r.length) return this.hideTip(), !1;
                this.init();
                var l = this,
                    f = e.pageConfig && e.pageConfig.searchType ? e.pageConfig.searchType : 0,
                    p = 1,
                    m = sCategoriesHtml = "",
                    h = iLen = iItemLen = 0,
                    g = r.length,
                    v = 0,
                    _ = i.htmlspecialchars(t.val());
                for (r[g - 1] && r[g - 1].version && (l.version = r[g - 1].version); h < g; h++) {
                    var b = r[h];
                    if (b && (b.key || b.pcif) && (!b.pcif || 0 == iItemLen))
                        if (b.rem && l.remindKey(b.rem.rei, b.rem.req), b.pcif) {
                            if (0 == f) {
                                for (var y = 0, w = b.pcif.length; y < w; y++) switch (b.pcif[y].iftp) {
                                    case "0":
                                        break;
                                    case "1":
                                        sCategoriesHtml += i.replace(c, {
                                            id: ++iLen,
                                            title: i.htmlspecialchars(b.pcif[y].shq),
                                            className: "item1",
                                            act_name: ' <img class="dropdown-simg" src="https://img30.360buyimg.com/uba/jfs/t23851/25/1308766769/1435/39f22c3b/5b5983e7N8824e17c.png">在海囤全球下搜索' + b.pcif[y].shq,
                                            act_value: "&gp=1",
                                            amount: b.pcif[y].wds,
                                            suggest_pos: p + ".wor.0"
                                        });
                                        break;
                                    case "2":
                                        sCategoriesHtml += i.replace(c, {
                                            id: ++iLen,
                                            title: i.htmlspecialchars(b.pcif[y].shq),
                                            className: "item1",
                                            act_name: b.pcif[y].acp ? ' <img src="//img11.360buyimg.com/img/' + b.pcif[y].acp + '"> 在' + b.pcif[y].acq + "下搜索" + b.pcif[y].shq : "<strong> " + b.pcif[y].acq + " </strong>",
                                            act_value: b.pcif[y].acu,
                                            amount: b.pcif[y].acc,
                                            suggest_pos: p + ".acq.0"
                                        });
                                        break;
                                    case "3":
                                        sCategoriesHtml += i.replace(u, {
                                            id: ++iLen,
                                            className: "item1",
                                            link: b.pcif[y].pru + (b.pcif[y].pru.indexOf("?") > 0 ? "&" : "?") + "suggest=1.prom.0." + l.version + "&wq=" + encodeURIComponent(t.val()),
                                            prom_name: b.pcif[y].prt.replace("&", ' <img src="' + b.pcif[y].prp + '"> ')
                                        });
                                        break;
                                    case "4":
                                        sCategoriesHtml += i.replace(c, {
                                            id: ++iLen,
                                            title: i.htmlspecialchars(b.pcif[y].shq),
                                            className: "item1",
                                            act_name: ' <img class="dropdown-simg" src="https://img12.360buyimg.com/uba/jfs/t24568/321/1310443574/1688/ed91c737/5b5983e7Nf3dcb3b5.png">在艺术品下搜索' + b.pcif[y].shq,
                                            act_value: b.pcif[y].ftt,
                                            amount: b.pcif[y].acc,
                                            suggest_pos: p + ".acq.0"
                                        });
                                        break;
                                    case "5":
                                        m += i.replace(a, {
                                            id: 0,
                                            guide: b.pcif[y].ssq,
                                            categorys: i.replace(s, {
                                                id: 1,
                                                shop_id: b.pcif[y].shid,
                                                shop_name: b.pcif[y].shn,
                                                shop_logo: "//img30.360buyimg.com/n1/s90x30_" + b.pcif[y].shp
                                            })
                                        }), iItemLen++, v = 1
                                }
                                v && (iLen = 1), m += i.replace('<li class="fore1">#{categorys}</li>', {
                                    id: 0,
                                    title: k,
                                    keyword: j,
                                    suggest_pos: p++ + (b.his ? ".his.0" : ".def.0"),
                                    categorys: sCategoriesHtml,
                                    search_count: S,
                                    history_mark: C,
                                    history_style: x
                                })
                            }
                        } else {
                            var k = i.htmlspecialchars(b.key),
                                S = b.his ? "搜索历史" : i.replace("约#{amount}个商品", {
                                    amount: b.qre
                                }),
                                C = b.his ? 'history="1"' : "",
                                x = b.his ? 'style="color:#005AA0"' : "",
                                E = k.indexOf(_),
                                j = _.length && 0 == E && !b.his ? _ + "<strong>" + k.substring(E + _.length) + "</strong>" : k;
                            0 == iItemLen && 0 == iLen && (iLen = -1), m += i.replace(o, {
                                id: ++iLen,
                                title: k,
                                keyword: j,
                                suggest_pos: p++ + (b.his ? ".his.0" : ".def.0"),
                                search_count: S,
                                history_mark: C,
                                history_style: x
                            }), iItemLen++
                        }
                }
                l.length = ++iLen, "" != m ? (m += "object" == (void 0 === b ? "undefined" : n(b)) && b.his ? '<li class="close" onclick="$o.del(event)">全部删除</li>' : '<li class="close" onclick="$o.hideTip()">关闭</li>', d.html(m).show().find('[id^="d_"]').bind("mouseleave", function () {
                    l.mouseleave($(this))
                }).bind("mouseenter", function () {
                    l.mouseenter($(this))
                })) : d.html("").hide()
            }, SearchBox.prototype.disableRemind = function () {
                search.additinal = "&suggest=1.rem.0." + this.version, this.enable_remind = !1
            }, SearchBox.prototype.remindKey = function (e, n) {
                t.val() == e && this.enable_remind && (f && this.IME && /\w/.test(e.substr(-1)) || (t.val(n), this.keep_keyword = e, search.additinal = "&suggest=1.rem.1." + this.version, i.textSelect("key", e.length)))
            }, SearchBox.prototype.bind_input = function () {
                $.browser.mozilla ? (t.bind("keydown", function (e) {
                    v.keydown_up(e)
                }), t.bind("input", function (e) {
                    v.input(e)
                })) : t.bind("keydown", function (e) {
                    v.keydown_up(e)
                }), t.focus(function () {
                    setTimeout(function () {
                        v.input()
                    }, 10)
                }), d.parent().bind("mouseenter", function () {
                    v.e_position = !0, v.timeoutId && clearTimeout(v.timeoutId)
                }).bind("mouseleave", function () {
                    v.e_position = !1, v.timeoutId = setTimeout(function () {
                        v.hideTip()
                    }, 500)
                }), $(document).click(function () {
                    v.e_position || (v.hideTip(), v.uploader.clear())
                })
            }, SearchBox.prototype.del = function (t) {
                var n = this;
                t = t || e.event, e.event ? (t.cancelBubble = !0, t.returnValue = !1) : (t.stopPropagation(), t.preventDefault());
                var i = $(t.srcElement ? t.srcElement : t.target),
                    r = i.parent().parent().attr("title");
                $.ajax({
                    url: m + (r == undefined ? "&delall=1" : "&del=" + encodeURIComponent(r)),
                    dataType: "jsonp",
                    scriptCharset: "utf-8",
                    success: function () {
                        function success(e) {
                            n.onloadItems(e)
                        }
                        return success
                    }()
                })
            }, SearchBox.prototype.uploader = {
                init: function () {
                    function init() {
                        var n = this;
                        switch (e.location.host) {
                            case "search.jd.com":
                            case "www.jd.com":
                                break;
                            default:
                                return !1
                        }
                        t.bind("click", function () {
                            n.clear()
                        }).after('<span class="photo-search-btn"><form id="search-img-upload" clstag="h|keycount|2016|03d" method="post" action="//search.jd.com/image?op=upload" enctype="multipart/form-data" target="search_upload"><span class="upload-bg"></span><input type="file" name="file" class="upload-trigger" accept="image/png,image/jpeg,image/jpg"></form></span>'), $("#search-img-upload").find("input").click(function () {
                            v.hideTip(), n.clear()
                        }).change(function () {
                            n.msg("图片上传中，大批相似商品正在赶来，请稍等......"), n.old_domain = document.domain, document.domain = "jd.com", $("body").append('<iframe id="J_image_upload" name="search_upload" style="display:none;"></iframe>'), $("#J_image_upload").load(function () {
                                !n.is_callback && n.msg("抱歉，图片上传失败", "网络状况不好，请重新上传试试~")
                            });
                            try {
                                JA.tracker.ngloader("search.000013", {
                                    url: e.location.href
                                })
                            } catch (t) {}
                            $("#search-img-upload").submit()
                        })
                    }
                    return init
                }(),
                msg: function () {
                    function msg(e, t) {
                        var n = $("#photo-search-dropdown");
                        n = n.length ? n : $('<div id="photo-search-dropdown"><div class="photo-search-tip"><div class="tip-inner tip-error"><i class="tip-icon"></i><div class="tip-main"><h5 class="tip-title"></h5><div class="tip-hint"></div></div></div></div></div>').insertAfter("#shelper");
                        var i = n.find(".tip-inner");
                        t ? i.addClass("tip-error").find(".tip-title").show().html(e).next().html(t) : i.removeClass("tip-error").find(".tip-title").hide().next().html(e)
                    }
                    return msg
                }(),
                callback: function () {
                    function callback(t) {
                        if (this.is_callback = 1, "ERROR" == t.split(".")[0]) switch (t.split(".")[1]) {
                            case "UPLOAD_RETRY":
                                this.msg("抱歉，图片上传失败", "网络状况不好，请重新上传试试~");
                                break;
                            case "UPLOAD_SIZE":
                                this.msg("抱歉，图片上传失败", "图片不能大于4M，请换一张图试试~");
                                break;
                            case "UPLOAD_MIN_WH":
                                this.msg("抱歉，图片上传失败", "图片尺寸不能小于201x201 px");
                                break;
                            case "UPLOAD_FORMAT":
                                this.msg("抱歉，图片上传失败", "只支持jpg或png格式的图片");
                                break;
                            case "UPLOAD_JSF":
                                this.msg("抱歉，图片上传失败", "网络状况不好，请重新上传试试~");
                                break;
                            default:
                                this.clear()
                        } else e.location.href = "//search.jd.com/image?path=" + encodeURIComponent(t) + "&op=search"
                    }
                    return callback
                }(),
                clear: function () {
                    function clear() {
                        this.old_domain && (document.domain = this.old_domain), this.is_callback = 0, $("#J_image_upload").remove(), $("#photo-search-dropdown").remove()
                    }
                    return clear
                }()
            };
            var v = new SearchBox;
            return v.bind_input(), v.uploader.init(), v
        }
    }(window)
}, function (e, t) {
    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }! function () {
        function inArray(e, t) {
            for (var n = !1, i = 0, r = e.length; i < r; i++) {
                var o = e[i];
                o = o.replace(/\[/gm, "\\["), o = o.replace(/\]/gm, "\\]");
                if (new RegExp(o).test(t)) {
                    n = e[i];
                    break
                }
            }
            return n
        }

        function siblingIndex(e) {
            for (var t = 0, n = e.parentNode.firstChild; n; n = n.nextSibling)
                if (1 === n.nodeType) {
                    if (n === e) break;
                    t += 1
                } return t
        }

        function getDomByTreeStr(e) {
            var t = e.substr(1).split("/"),
                n = t.shift(),
                i = [];
            if (n.indexOf("id") > -1) {
                var r = /\".*?\"/gi;
                n = n.match(r)[0].replace(/\"/gi, function () {
                    return ""
                });
                for (var o = 0; o < t.length; o++) {
                    var a = t[o];
                    a = a.match(/\d+/)[0], i.push(parseInt(a))
                }
                for (var l = document.getElementById(n), c = 0; c < i.length; c++) {
                    var s = i[c];
                    l = l.children[s]
                }
                return l
            }
        }

        function getDomTree(e) {
            if ("html" == e.nodeName.toLowerCase() || "body" == e.nodeName.toLowerCase()) return null;
            var t;
            return t = e.getAttribute("id") ? e.nodeName.toLowerCase() + '[id="' + e.getAttribute("id") + '"]/' : e.nodeName.toLowerCase() + "[" + siblingIndex(e) + "]/" + function getDomTreeParent(e) {
                var t = e.parentNode,
                    n = "";
                if (t) try {
                    var i = t.getAttribute("id"),
                        r = /^ad\d+/gi;
                    i && !r.test(i) ? n += t.nodeName.toLowerCase() + '[id="' + t.getAttribute("id") + '"]/' : (n += t.nodeName.toLowerCase() + "[" + siblingIndex(t) + "]/", n += getDomTreeParent(t))
                } catch (o) {}
                return n
            }(e), t.split("/").reverse().join("/")
        }

        function getDomTreeBind(e) {
            var t = i.getTarget(e),
                n = getDomTree(t);
            if (!document.getElementById("tracelessLogDebug")) {
                var r = document.createElement("textarea");
                r.id = "tracelessLogDebug", r.style.border = "1px #C81623 solid", r.style.padding = "5px 10px", r.style.width = "900px", r.style.height = "20px", r.style.background = "#C81623", r.style.color = "#fff", r.style.zIndex = 100, r.style.opacity = .7, r.style.position = "fixed", r.style.left = "50%", r.style.top = "0px", r.style.marginLeft = "-450px", document.getElementsByTagName("body")[0].appendChild(r)
            }
            "tracelessLogDebug" != t.getAttribute("id") && (document.getElementById("tracelessLogDebug").innerHTML = n), i.preventDefault(e)
        }

        function getScrollTop() {
            var e = 0;
            return document.documentElement && document.documentElement.scrollTop ? e = document.documentElement.scrollTop : document.body && (e = document.body.scrollTop), e
        }

        function initDeepGather() {
            function getRange() {
                var e = r.scrollTop(),
                    t = r.height() + e;
                return t = t < 3e4 ? t : 3e4, {
                    t: e,
                    b: t
                }
            }

            function sendData() {
                if (o.length > 0) {
                    for (var e = 0; e < o.length; e++) o[e]["d"] = parseFloat(o[e]["d"].toFixed(2));
                    var t = JSON.stringify(o);
                    f(t)
                }
            }

            function timeOutTrigger() {
                window.clearTimeout(n), window.clearInterval(t), n = window.setTimeout(function () {
                    i = getRange(), i.d = .5, o.push(i), t = window.setInterval(function () {
                        e && (!1 === document.hidden ? (a = !1, 0 === o.length ? (i.d = 0, o.push(i)) : i.d += .01) : !1 === a && (sendData(), o = [], a = !0))
                    }, 10)
                }, 500)
            }
            var e = "boolean" == typeof document.hidden;
            if (e) {
                var t, n, i, r = $(window),
                    o = [];
                setInterval(function () {
                    e && !1 === document.hidden && (sendData(), o = [])
                }, 5e3);
                var a = !1;
                r.bind("scroll", function (e) {
                    timeOutTrigger()
                }), timeOutTrigger()
            }
        }

        function getBrowserInfo(e) {
            return function (e) {
                e === undefined && (e = window.navigator.userAgent), e = e.toLowerCase();
                var t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                    n = /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || [],
                    i = {},
                    r = {
                        browser: t[5] || t[3] || t[1] || "",
                        version: t[2] || t[4] || "0",
                        versionNumber: t[4] || t[2] || "0",
                        platform: n[0] || ""
                    };
                if (r.browser && (i[r.browser] = !0, i.version = r.version, i.versionNumber = parseInt(r.versionNumber, 10)), r.platform && (i[r.platform] = !0), (i.cros || i.mac || i.linux || i.win) && (i.desktop = !0), (i.chrome || i.opr || i.safari) && (i.webkit = !0), i.rv || i.iemobile) {
                    r.browser = "msie", i["msie"] = !0
                }
                if (i.edge) {
                    delete i.edge;
                    r.browser = "msedge", i["msedge"] = !0
                }
                if (i.opr) {
                    r.browser = "opera", i["opera"] = !0
                }
                i.name = r.browser, i.platform = r.platform;
                var o = !1;
                return (t = /liebaofast\/([\w.]+)/.exec(e) || /liebao\/([\w.]+)/.exec(e) || /lbbrowser/.exec(e)) && (i.name = "liebao", i.version = t[1] || "0", o = !0), /metasr/.test(e) && (i.name = "sougou", i.version = "0", i.versionNumber = 0), (t = /maxthon\/([\w.]+)/.exec(e) || /maxthon/.exec(e)) && (i.name = "maxthon", i.version = t[1] || "0", o = !0), /360[se]e/.test(e) && (i.name = "360", i.version = "0", i.versionNumber = "0"), (t = /qqbrowser\/([\w.]+)/.exec(e) || /tencenttraveler ([\w.]+)/.exec(e)) && (i.name = "qq", i.version = t[1] || "0", o = !0), o && (i.versionNumber = parseInt(i.version, 10)), i
            }(e || window.navigator.userAgent)
        }
        var e;
        if (!window.uba_lab_tag) {
            window.uba_lab_tag = !0;
            var t = {
                    "www.jd.com": ['/div[id="cate_item1"]', '/div[id="cate_item2"]', '/div[id="cate_item3"]', '/div[id="cate_item4"]', '/div[id="cate_item5"]', '/div[id="cate_item6"]', '/div[id="cate_item7"]', '/div[id="cate_item8"]', '/div[id="cate_item9"]', '/div[id="cate_item10"]', '/div[id="cate_item11"]', '/div[id="cate_item12"]', '/div[id="cate_item13"]', '/div[id="cate_item14"]', '/div[id="cate_item15"]', '/li[id="ttbar-myjd"]/div[1]', '/li[id="ttbar-serv"]/div[1]', '/li[id="ttbar-navs"]/div[1]', '/div[id="settleup-content"]']
                },
                n = {
                    universal: ['/li[id="d_0"]', '/li[id="d_1"]', '/li[id="d_2"]', '/li[id="d_3"]', '/li[id="d_4"]', '/li[id="d_5"]', '/li[id="d_6"]', '/li[id="d_7"]', '/li[id="d_8"]', '/li[id="d_9"]', '/li[id="nav-licai"]/ul[1]', '/li[id="nav-zhongchou"]/ul[1]', '/li[id="nav-baoxian"]/ul[1]', '/li[id="nav-baitiao"]/ul[2]', '/li[id="nav-loan"]/ul[1]', '/li[id="nav-caimi"]/ul[1]', '/li[id="nav-dongjia"]/ul[1]', '/div[id="J_searchRecommend"]', '/div[id="J_searchKeyWords"]', '/div[id="J_userCenterBoard"]', '/div[id="ceilinglamp"]'],
                    urls: (e = {
                        "www.jd.com": ['/li[id="ttbar-myjd"]/div[1]', '/div[id="ttbar-apps-main"]', '/div[id="ttbar-atte-main"]', '/li[id="ttbar-serv"]/div[1]', '/li[id="ttbar-navs"]/div[1]', '/div[id="cate_item', '/div[id="lift"]/ul[0]', '/div[id="settleup-content"]', '/ul[id="mcart-sigle"]', '/div[id="settleup-content"]', '/div[id="category-item', '/div[id="J-global-toolbar'],
                        "shouji.jd.com": ['/div[id="phoneCategorys"]/div[0]/div[1]'],
                        "channel.jd.com/fashion.html": ['/div[id="p-categroy"]/div[1]'],
                        "jr.jd.com": ['/div[id="container"]/div[0]/div[0]/div[0]/div[1]'],
                        "tuan.jd.com/quanguo-index.html": ['/div[id="categorys-2015"]/div[1]/div[7]/div[1]', '/div[id="categorys-2015"]/div[1]/div[8]/div[1]', '/div[id="categorys-2015"]/div[1]/div[9]/div[1]', '/div[id="categorys-2015"]/div[1]/div[10]/div[1]', '/ul[id="shelperTuan"]'],
                        "chaoshi.jd.com": [],
                        "book.jd.com": ['/div[id="p-category"]/div[0]/div[1]'],
                        "diannao.jd.com": ['/div[id="oaCategorys"]/div[0]/div[1]'],
                        "channel.jd.com/electronic.html": ['/div[id="comCategorys"]/div[1]/div[1]/div[0]/div[1]'],
                        "www.jd.hk": [],
                        "channel.jd.com/sports.html": ['/div[id="sortlist"]/div[0]'],
                        "auction.jd.com/home.html": ['/div[id="focus"]/div[0]/div[0]'],
                        "channel.jd.com/food.html": ['/div[id="p-category"]/div[0]/div[1]'],
                        "e.jd.com/ebook.html": ['/div[id="p-category"]/div[0]/div[1]'],
                        "channel.jd.com/beauty.html": ['/div[id="beauty"]/div[0]/div[0]/div[0]/div[0]/div[1]'],
                        "channel.jd.com/luxury.html": ['/div[id="p-categroy"]/div[1]'],
                        "channel.jd.com/furniture.html": ['/div[id="sortlist"]/div[0]'],
                        "shuma.jd.com": ['/div[id="oaCategorys"]/div[0]/div[1]'],
                        "baby.jd.com": ['/div[id="p-category"]/div[0]/div[1]'],
                        "channel.jd.com/home.html": ['/div[id="sortlist"]/div[0]'],
                        "channel.jd.com/health.html": ['/div[id="p-category"]/div[0]/div[1]'],
                        "channel.jd.com/1620-1625.html": ['/div[id="p-category"]/div[1]'],
                        "channel.jd.com/watch.html": ['/div[id="p-category"]/div[0]/div[2]']
                    }, _defineProperty(e, "channel.jd.com/luxury.html", ['/div[id="p-categroy"]/div[1]']), _defineProperty(e, "channel.jd.com/wine.html", ['/div[id="p-category"]/div[0]/div[1]']), _defineProperty(e, "fresh.jd.com", ["/html[0]/body[1]/div[5]/div[0]/div[0]/ul[1]"]), _defineProperty(e, "china.jd.com", ['/div[id="p-category"]/div[0]/div[1]']), _defineProperty(e, "mvd.jd.com", ['/div[id="p-category"]/div[0]/div[1]']), _defineProperty(e, "e.jd.com/ebook.html", ['/div[id="p-category"]/div[0]/div[1]']), e)
                },
                i = {
                    addHandler: function () {
                        function addHandler(e, t, n) {
                            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
                        }
                        return addHandler
                    }(),
                    removeHandler: function () {
                        function removeHandler(e, t, n) {
                            e.addEventListener ? e.removeEventListener(t, n, !1) : e.attachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
                        }
                        return removeHandler
                    }(),
                    getEvent: function () {
                        function getEvent(e) {
                            return e || window.event
                        }
                        return getEvent
                    }(),
                    getTarget: function () {
                        function getTarget(e) {
                            return e.target || e.srcElement
                        }
                        return getTarget
                    }(),
                    preventDefault: function () {
                        function preventDefault(e) {
                            e.preventDefault ? e.preventDefault() : e.returnValue = !1
                        }
                        return preventDefault
                    }(),
                    stopPropagation: function () {
                        function stopPropagation(e) {
                            e.stopPropagaiton ? e.stopPropagaiton() : e.cancelBubble = !0
                        }
                        return stopPropagation
                    }()
                },
                r = function (e, t) {
                    return Math.abs(function (e) {
                        for (var t = 0, n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t &= t;
                        return t
                    }(e)) % t
                },
                o = function (e) {
                    for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                        for (var r = n[i];
                            " " == r.charAt(0);) r = r.substring(1, r.length);
                        if (0 == r.indexOf(t)) return r.substring(t.length, r.length)
                    }
                    return null
                },
                a = function (e) {
                    var t = "uas_log_" + (new Date).getTime(),
                        n = window[t] = new Image;
                    n.onload = n.onerror = function () {
                        window[t] = null
                    }, n.src = e, n = null
                },
                l = o("pin") ? o("pin") : "",
                c = o("__jda") ? o("__jda").split(".")[1] : "",
                s = o("__jdb") ? o("__jdb").split(".")[2] : "",
                u = o("__jda") ? o("__jda").split(".")[5] : "",
                d = function (e) {
                    if (e.clientX > 1 && e.clientY > 1) {
                        var t = e.clientX - window.screen.width / 2,
                            n = e.clientY + getScrollTop(),
                            i = window.screen.width,
                            r = "cw=" + t + "$ch=" + n + "$sw=" + i + "$zb=" + u + "$labt=1";
                        r = encodeURIComponent(r);
                        var o = encodeURIComponent(document.referrer),
                            d = "//mercury.jd.com/log.gif?t=uas.000000&m=UA-J2011-1&pin=" + l + "&uid=" + c + "&sid=" + s + "&v=" + r + "&ref=" + o + "&rm=" + (new Date).getTime();
                        a(d)
                    }
                },
                f = function (e) {
                    var t = "d=" + e + "$zb=" + u + "$labt=2";
                    t = encodeURIComponent(t);
                    var n = encodeURIComponent(document.referrer),
                        i = "//mercury.jd.com/log.gif?t=uas.000000&m=UA-J2011-1&pin=" + l + "&uid=" + c + "&sid=" + s + "&v=" + t + "&ref=" + n + "&rm=" + (new Date).getTime();
                    a(i)
                },
                p = function (e, t) {
                    if (e.clientX > 1 && e.clientY > 1) {
                        var n = getDomByTreeStr(t),
                            i = $(n).offset(),
                            r = e.clientX,
                            o = e.clientY + getScrollTop(),
                            d = window.screen.width,
                            f = "cw=" + (r - i.left) + "$ch=" + (o - i.top) + "$sw=" + d + "$zb=" + u + "$labt=3$smid=" + t;
                        f = encodeURIComponent(f);
                        var p = encodeURIComponent(document.referrer),
                            m = "//mercury.jd.com/log.gif?t=uas.000000&m=UA-J2011-1&pin=" + l + "&uid=" + c + "&sid=" + s + "&v=" + f + "&ref=" + p + "&rm=" + (new Date).getTime();
                        a(m)
                    }
                };
            /isdebug=(-\d)*-30/.test(location.search) && i.addHandler(document, "click", function (e) {
                i.getEvent(e);
                getDomTreeBind(e)
            });
            var m = function (e) {
                    var t = e.url.toLowerCase(),
                        n = /http.*?\/\//gi,
                        i = location.href.toLowerCase();
                    if (i = i.replace(n, function (e) {
                            return ""
                        }), i.indexOf(t) > -1) return !0;
                    if (e.skus && i.indexOf("item.jd.com") > -1)
                        for (var r in e.skus) {
                            var o = e.skus[r] + ".html";
                            if (i.indexOf(o) > -1) return !0
                        }
                    return !1
                },
                h = function () {
                    var e = [];
                    return function (t, n) {
                        if (n = n || !1, e = e.concat(t || []), n) {
                            var i = e.join("$");
                            e = [], i = encodeURIComponent(i);
                            var r = encodeURIComponent(document.referrer),
                                o = "//mercury.jd.com/log.gif?t=uas.000000&m=UA-J2011-1&pin=" + l + "&uid=" + c + "&sid=" + s + "&v=" + i + "&ref=" + r + "&rm=" + (new Date).getTime();
                            a(o)
                        }
                    }
                }();
            i.addHandler(window, "load", function (e) {
                c && $.ajax({
                    url: "//d.jd.com/lab/get",
                    dataType: "jsonp",
                    jsonpCallback: "lab",
                    cache: !0,
                    success: function () {
                        function success(e) {
                            e && $.each(e, function (o) {
                                var a = e[o],
                                    l = a.url.toLowerCase(),
                                    s = (new Date).getTime();
                                if (a.url && a.startOn && a.endOn && a.percent && m(a) && s >= a.startOn && s <= a.endOn + 864e5 && r(c, 1e4) <= 100 * parseInt(a.percent)) return i.addHandler(document, "click", function (e) {
                                    f('[{"t":0,"b":0,"d":0}]'), i.removeHandler(document, "click", arguments.callee)
                                }), i.addHandler(document, "click", function (e) {
                                    var r = i.getEvent(e),
                                        o = i.getTarget(e);
                                    if (o.parentNode) {
                                        var a = getDomTree(o);
                                        if (inArray(n.universal, a) || n.urls[l] && inArray(n.urls[l], a) || d(r), t[l]) {
                                            var c = inArray(t[l], a);
                                            c && p(r, c)
                                        }
                                    }
                                }), initDeepGather(), !1
                            })
                        }
                        return success
                    }()
                })
            });
            var g = null;
            switch (location.href) {
                case "http://train.jd.com/":
                    g = "train";
                    break;
                case "http://menpiao.jd.com/":
                    g = "menpiao";
                    break;
                case "http://what.jd.com/what/index":
                case "http://what.jd.com/index":
                    g = "what";
                    break;
                case "http://faner.jd.com/":
                    g = "faner";
                    break;
                case "http://chaoshi.jd.com/":
                    g = "chaoshi"
            }
            c && null != g && (h([g + "_pv=1"], !0), function () {
                function makesureLoad() {
                    if (o || 3 == l) return void clearInterval(a);
                    l++, onload()
                }

                function onload(t) {
                    function delayLoad() {
                        var e = a.domContentLoadedEventEnd - l,
                            t = a.loadEventEnd - l;
                        if (!(t < 0 && "msie" === r.name && 9 === r.versionNumber)) {
                            var c = a.domInteractive - l;
                            if (window.chrome && window.chrome.loadTimes) {
                                var s = window.chrome.loadTimes();
                                n = parseInt(1e3 * (s.firstPaintTime - s.startLoadTime), 10)
                            } else "number" == typeof a.msFirstPaint && (n = a.msFirstPaint - l);
                            n = Math.max(0, n), t = Math.max(0, t);
                            var d = {
                                dr: e,
                                lp: t,
                                fp: n,
                                di: c,
                                labt: 100,
                                zb: void 0 !== u ? u : 0,
                                ecr: i
                            };
                            o = !0, h(obj2Array(d), !0)
                        }
                    }
                    var a = e.timing,
                        l = a.navigationStart;
                    window.setTimeout(delayLoad, 0)
                }

                function obj2Array(e) {
                    var t = [];
                    for (var n in e) e.hasOwnProperty(n) && t.push(n + "=" + e[n]);
                    return t
                }

                function contentLoad(e) {
                    for (var n = t.body.querySelectorAll("*"), r = 0, o = 0; r < n.length; ++r) {
                        var a = n[r].tagName.toLowerCase();
                        "script" !== a && "link" !== a && "noscript" !== a && o++
                    }
                    i = o
                }
                var e = window.performance || window.webkitPerformance || window.mozPerformance || window.msPerformance,
                    t = window.document,
                    n = -1,
                    i = -1,
                    r = getBrowserInfo(),
                    o = !1,
                    a = null,
                    l = 0;
                h(["br=" + [r.platform, r.name, r.versionNumber].join(".")]), e && window.addEventListener ? ("complete" === t.readyState || "interactive" === t.readyState ? contentLoad() : t.addEventListener("DOMContentLoaded", contentLoad), "msie" === r.name && 9 === r.versionNumber && (a = setInterval(makesureLoad, 1e3)), window.addEventListener("load", onload)) : h(obj2Array({
                    dr: 0,
                    lp: 0,
                    fp: 0,
                    di: 0,
                    labt: 100,
                    zb: void 0 !== u ? u : 0,
                    ecr: 0
                }), !0)
            }())
        }
    }()
}, function (e, t, n) {
    function init() {
        l.init()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(38),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1),
        a = n(4);
    ! function () {
        $("#settleup").removeClass("dorpdown").addClass("dropdown").find(".dorpdown-layer").removeClass("dorpdown-layer").addClass("dropdown-layer")
    }();
    var l = {
        el: null,
        init: function () {
            function init() {
                var e = this;
                e.el = $("#settleup"), e.el.find(".ci-right").html("&gt;"), e.el.find(".dropdown-layer").html('<div id="J_cart_pop"><span class="loading"></span></div>'), e.el.find(".cw-icon .ci-right").after('<i class="ci-count" id="shopping-amount"></i>'), null != e.DATA_Amount && $("#shopping-amount").text(e.DATA_Amount), null != this.el && this.el.bind("mouseenter", function () {
                    e.FN_Refresh()
                })
            }
            return init
        }(),
        DATA_Cookie: "cn",
        DATA_Amount: (0, o.readCookie)("cn") || "0",
        URL_Serv: "//cart.jd.com/cart/miniCartServiceNew.action",
        TPL_NoGoods: '\n    <div class="cart_pop">\n      <div class="cart_empty">\n        <i class="cart_empty_img"></i>\n        购物车中还没有商品，赶紧选购吧！\n      </div>\n    </div>',
        TPL_List: {
            wrap: '\n      <div id="J_cart_pop" class="cart_pop">\n        <div class="cart_hd">\n          <h4 class="cart_hd_title">最新加入的商品</h4>\n        </div>\n        <div class="cart_bd J_cart_bd"></div>\n        <div class="cart_ft">\n          <div class="cart_ft_info">\n            共<span class="cart_num">{%= o.Num %}</span>件商品 共计<span class="cart_num">&yen; {%= o.TotalPromotionPrice.toFixed(2) %}</span>\n          </div>\n          <a class="cart_ft_lk" href="{%= o.URLS.SHOPPINGCART %}" title="去购物车">去购物车</a>\n        </div>\n      </div>',
            single: '\n      <ul class="cart_singlelist">\n        {% $.each(o.TheSkus, function (k, list) { %}\n          <li class="cart_item">\n            <div class="cart_item_inner">\n              <div class="cart_img">\n                <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                  <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                </a>\n              </div>\n              <div class="cart_name">\n                <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n              </div>\n              <div class="cart_info">\n                <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                {% if (parseInt(list.FanPrice) > 0) { %}\n                  <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                {% } %}\n                {% if (parseInt(list.Score) > 0) { %}\n                  <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                {% } %}\n                <a class="cart_delete J_delete" data-id="{%= list.Id %}" data-method="RemoveProduct" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n              </div>\n              {% $.each(list.CouponAD, function (k, jq) { %}\n                <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}京券 {%= jq.LimitAd %}\n              </div>\n              {% }); %}\n            </div>\n          </li>\n        {% }); %}\n      </ul>',
            gift: '\n      <ul class="cart_giftlist">\n        {% $.each(o.TheGifts, function (k, list) { %}\n          <li class="cart_item">\n            <div class="cart_item_inner">\n              <div class="cart_img">\n                <a class="cart_img_lk" href="//item.jd.com/{%= list.MainSKU.Id %}.html" target="_blank">\n                  <img src="{%= o.getImageDomain(list.MainSKU.Id) %}n5/{%= list.MainSKU.ImgUrl %}" width="50" height="50" alt="">\n                </a>\n              </div>\n              <div class="cart_name">\n                <a class="cart_name_lk" href="//item.jd.com/{%= list.MainSKU.Id %}.html" title="{%= list.MainSKU.Name %}" target="_blank">{%= list.MainSKU.Name %}</a>\n              </div>\n              <div class="cart_info">\n                <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                {% if (parseInt(list.FanPrice) > 0) { %}\n                  <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                {% } %}\n                {% if (parseInt(list.Score) > 0) { %}\n                  <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                {% } %}\n                <a class="cart_delete J_delete" data-id="{%= list.MainSKU.Id %}" data-method="RemoveProduct" data-type="{%= list.MainSKU.ItemType %}" href="javascript:;">删除</a>\n              </div>\n              {% $.each(list.Skus, function (k, gift) { %}\n                <div class="cart_gift">\n                  <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                </div>\n              {% }); %}\n              {% $.each(list.CouponAD, function (k, jq) { %}\n                <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n              </div>\n              {% }); %}\n            </div>\n          </li>\n        {% }); %}\n      </ul>',
            suit: '\n      <ul class="cart_suitlist">\n        {% $.each(o.TheSuit, function (k, suit) { %}\n          {% var isVirtual = !!suit.VskuId; %}\n          <li class="cart_item cart_suit{%= isVirtual ? " cart_suit_virtual" : "" %}">\n            <div class="cart_item_hd">\n              <div class="cart_item_hd_info">\n                {% if (isVirtual) { %}\n                  <a href="//item.jd.com/{%= suit.VskuId %}.html" target="_blank">\n                    <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                  </a>\n                {% } else { %}\n                  <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                {% } %}\n              </div>\n              {% if (isVirtual) { %}\n                <a class="cart_delete J_delete" data-id="{%= suit.VskuId %}" data-method="RemoveSuit" data-type="{%= suit.SuitType %}" href="javascript:;">删除</a>\n              {% } %}\n              <div class="cart_item_hd_price">小计：<span class="cart_num">&yen;{%= (suit.PromotionPrice*suit.Num).toFixed(2) %}</span></div>\n            </div>\n            <ul class="cart_item_bd">\n              {% $.each(suit.Skus, function (k, list) { %}\n                <li class="cart_item">\n                  <div class="cart_item_inner">\n                    <div class="cart_img">\n                      <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                        <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                      </a>\n                    </div>\n                    <div class="cart_name">\n                      <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n                    </div>\n                    <div class="cart_info">\n                      <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                      {% if (parseInt(list.FanPrice) > 0) { %}\n                        <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                      {% } %}\n                      {% if (parseInt(list.Score) > 0) { %}\n                        <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                      {% } %}\n                      {% if (!isVirtual) { %}\n                        <a class="cart_delete J_delete" data-id="{%= list.Id %}|{%= suit.Id %}" data-method="RemoveSuit" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n                      {% } %}\n                    </div>\n                    {% $.each(list.Gifts, function (k, gift) { %}\n                      <div class="cart_gift">\n                        <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                      </div>\n                    {% }); %}\n                    {% $.each(list.CouponAD, function (k, jq) { %}\n                      <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n                    </div>\n                    {% }); %}\n                  </div>\n                </li>\n              {% }); %}\n            </ul>\n          </li>\n        {% }); %}\n      </ul>',
            mj: '\n      <ul class="cart_manjianlist">\n        {% $.each(o.ManJian, function (k, mj) { %}\n          <li class="cart_item">\n            <div class="cart_item_hd">\n              <div class="cart_item_hd_info">\n                <span class="cart_tag cart_tag_green">满减</span>\n                {% if (mj.ManFlag) { %}已购满{% if (mj.ManNum > 0) { %}{%= mj.ManNum %}件{% } else { %}{%= mj.ManPrice %}元{% } %}，已减{%= mj.JianPrice %}元\n                {% } else { %}购满{% if (mj.ManNum > 0) { %}{%= mj.ManNum %}件{% } else { %}{%= mj.ManPrice %}元{% } %}，即可享受满减优惠{% } %}\n                </div>\n              <div class="cart_item_hd_price">小计：&yen;{%= (mj.PromotionPrice*mj.Num).toFixed(2) %}</div>\n            </div>\n            {% if ($.isArray(mj.Skus) && mj.Skus.length) { %}\n              <ul class="cart_item_bd">\n                {% $.each(mj.Skus, function (k, list) { %}\n                  <li class="cart_item">\n                    <div class="cart_item_inner">\n                      <div class="cart_img">\n                        <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                          <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                        </a>\n                      </div>\n                      <div class="cart_name">\n                        <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n                      </div>\n                      <div class="cart_info">\n                        <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                        {% if (parseInt(list.FanPrice) > 0) { %}\n                          <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                        {% } %}\n                        {% if (parseInt(list.Score) > 0) { %}\n                          <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                        {% } %}\n                        <a class="cart_delete J_delete" data-id="{%= list.Id %}|{%= mj.Id %}" data-method="RemoveSuit" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n                      </div>\n                      {% $.each(list.Gifts, function (k, gift) { %}\n                        <div class="cart_gift">\n                          <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                        </div>\n                      {% }); %}\n                      {% $.each(list.CouponAD, function (k, jq) { %}\n                        <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n                      </div>\n                      {% }); %}\n                    </div>\n                  </li>\n                {% }); %}\n              </ul>\n            {% } %}\n            {% if ($.isArray(mj.Suits) && mj.Suits.length) { %}\n              <ul class="cart_item_bd">\n                {% $.each(mj.Suits, function (k, suit) { %}\n                  {% var isVirtual = !!suit.VskuId; %}\n                  <li class="cart_item cart_suit{%= isVirtual ? " cart_suit_virtual" : "" %}">\n                    <div class="cart_item_hd">\n                      <div class="cart_item_hd_info">\n                        {% if (isVirtual) { %}\n                          <a href="//item.jd.com/{%= suit.VskuId %}.html" target="_blank">\n                            <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                          </a>\n                        {% } else { %}\n                          <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                        {% } %}\n                      </div>\n                      {% if (isVirtual) { %}\n                        <a class="cart_delete J_delete" data-id="{%= suit.VskuId %}|{%= mj.Id %}" data-method="RemoveSuit" data-type="{%= suit.SuitType %}" href="javascript:;">删除</a>\n                      {% } %}\n                      <div class="cart_item_hd_price">小计：<span class="cart_num">&yen;{%= (suit.PromotionPrice*suit.Num).toFixed(2) %}</span></div>\n                    </div>\n                    <ul class="cart_item_bd">\n                      {% $.each(suit.Skus, function (k, list) { %}\n                        <li class="cart_item">\n                          <div class="cart_item_inner">\n                            <div class="cart_img">\n                              <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                                <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                              </a>\n                            </div>\n                            <div class="cart_name">\n                              <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n                            </div>\n                            <div class="cart_info">\n                              <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                              {% if (parseInt(list.FanPrice) > 0) { %}\n                                <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                              {% } %}\n                              {% if (parseInt(list.Score) > 0) { %}\n                                <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                              {% } %}\n                              {% if (!isVirtual) { %}\n                                <a class="cart_delete J_delete" data-id="{%= list.Id %}|{%= suit.Id %}" data-method="RemoveSuit" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n                              {% } %}\n                            </div>\n                            {% $.each(list.Gifts, function (k, gift) { %}\n                              <div class="cart_gift">\n                                <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                              </div>\n                            {% }); %}\n                            {% $.each(list.CouponAD, function (k, jq) { %}\n                              <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n                            </div>\n                            {% }); %}\n                          </div>\n                        </li>\n                      {% }); %}\n                    </ul>\n                  </li>\n                {% }); %}\n              </ul>\n            {% } %}\n          </li>\n        {% }); %}\n      </ul>',
            mz: '\n      <ul class="cart_manzenglist">\n        {% $.each(o.ManZeng, function (k, mz) { %}\n          <li class="cart_item">\n            <div class="cart_item_hd">\n              <div class="cart_item_hd_info">\n                <span class="cart_tag cart_tag_orange">{% if(mz.FullRefundType == 24) { %}换购{% } else if (mz.AddMoney > 0) { %}加价购{% } else { %}满赠{% } %}</span>\n                {% if(mz.AddMoney > 0 || mz.FullRefundType == 24) { %}\n                  {% if(mz.ManFlag) { %}\n                    已购满{% if (mz.FullRefundType == 24) { %}{%= mz.ManNum %}件{% } else { %}{%= mz.ManPrice %}元{% } %}，您{% if(mz.ManGifts.length > 0) { %}已{% } else { %}可{% } %}加价换购商品\n                  {% } else { %}\n                    购满{% if (mz.FullRefundType == 24) { %}{%= mz.ManNum %}件{% } else { %}{%= mz.ManPrice %}元{% } %}，即可加价换购商品\n                  {% } %}\n                {% } else { %}\n                  {% if(mz.ManFlag) { %}\n                    已购满{%= mz.ManPrice %}元，您{% if(mz.ManGifts.length > 0) { %}已{% } else { %}可{% } %}领赠品\n                  {% } else { %}\n                    购满{%= mz.ManPrice %}元，即可领取赠品\n                  {% } %}\n                {% } %}\n              </div>\n              <div class="cart_item_hd_price">小计：&yen;{%= (mz.PromotionPrice*mz.Num).toFixed(2) %}</div>\n            </div>\n            {% if ($.isArray(mz.ManGifts) && mz.ManGifts.length) { %}\n              <ul class="cart_item_bd">\n                {% $.each(mz.ManGifts, function (k, gift) { %}\n                  <li class="cart_item cart_item_mz">\n                    <div class="cart_item_inner">\n                      <div class="cart_gift">\n                        <a class="cart_gift_lk" href="{%= gift.Id %}" target="_blank">[{% if(mz.AddMoney > 0 || mz.FullRefundType == 24) { %}换购品{% } else { %}赠品{% } %}]{%= gift.Name %}</a>×{%= gift.Num %}\n                      </div>\n                    </div>\n                  </li>\n                {% }); %}\n              </ul>\n            {% } %}\n            {% if ($.isArray(mz.Skus) && mz.Skus.length) { %}\n              <ul class="cart_item_bd">\n                {% $.each(mz.Skus, function (k, list) { %}\n                  <li class="cart_item">\n                    <div class="cart_item_inner">\n                      <div class="cart_img">\n                        <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                          <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                        </a>\n                      </div>\n                      <div class="cart_name">\n                        <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n                      </div>\n                      <div class="cart_info">\n                        <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                        {% if (parseInt(list.FanPrice) > 0) { %}\n                          <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                        {% } %}\n                        {% if (parseInt(list.Score) > 0) { %}\n                          <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                        {% } %}\n                        <a class="cart_delete J_delete" data-id="{%= list.Id %}|{%= mz.Id %}" data-method="RemoveSuit" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n                      </div>\n                      {% $.each(list.Gifts, function (k, gift) { %}\n                        <div class="cart_gift">\n                          <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                        </div>\n                      {% }); %}\n                      {% $.each(list.CouponAD, function (k, jq) { %}\n                        <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n                      </div>\n                      {% }); %}\n                    </div>\n                  </li>\n                {% }); %}\n              </ul>\n            {% } %}\n            {% if ($.isArray(mz.Suits) && mz.Suits.length) { %}\n              <ul class="cart_item_bd">\n                {% $.each(mz.Suits, function (k, suit) { %}\n                  {% var isVirtual = !!suit.VskuId; %}\n                  <li class="cart_item cart_suit{%= isVirtual ? " cart_suit_virtual" : "" %}">\n                    <div class="cart_item_hd">\n                      <div class="cart_item_hd_info">\n                        {% if (isVirtual) { %}\n                          <a href="//item.jd.com/{%= suit.VskuId %}.html" target="_blank">\n                            <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                          </a>\n                        {% } else { %}\n                          <span class="cart_suit_tag">[套装]</span> {%= suit.Name %}\n                        {% } %}\n                      </div>\n                      {% if (isVirtual) { %}\n                        <a class="cart_delete J_delete" data-id="{%= suit.VskuId %}|{%= mz.Id %}" data-method="RemoveSuit" data-type="{%= suit.SuitType %}" href="javascript:;">删除</a>\n                      {% } %}\n                      <div class="cart_item_hd_price">小计：<span class="cart_num">&yen;{%= (suit.PromotionPrice*suit.Num).toFixed(2) %}</span></div>\n                    </div>\n                    <ul class="cart_item_bd">\n                      {% $.each(suit.Skus, function (k, list) { %}\n                        <li class="cart_item">\n                          <div class="cart_item_inner">\n                            <div class="cart_img">\n                              <a class="cart_img_lk" href="//item.jd.com/{%= list.Id %}.html" target="_blank">\n                                <img src="{%= o.getImageDomain(list.Id) %}n5/{%= list.ImgUrl %}" width="50" height="50" alt="">\n                              </a>\n                            </div>\n                            <div class="cart_name">\n                              <a class="cart_name_lk" href="//item.jd.com/{%= list.Id %}.html" title="{%= list.Name %}" target="_blank">{%= list.Name %}</a>\n                            </div>\n                            <div class="cart_info">\n                              <div class="cart_price">&yen;{%= list.PromotionPrice.toFixed(2) %}×{%= list.Num %}</div>\n                              {% if (parseInt(list.FanPrice) > 0) { %}\n                                <div class="cart_tag cart_tag_green">返现：&yen;{%= list.FanPrice %}</div>\n                              {% } %}\n                              {% if (parseInt(list.Score) > 0) { %}\n                                <div class="cart_tag cart_tag_orange">送京豆：{%= list.Score %}</div>\n                              {% } %}\n                              {% if (!isVirtual) { %}\n                                <a class="cart_delete J_delete" data-id="{%= list.Id %}|{%= suit.Id %}" data-method="RemoveSuit" data-type="{%= list.ItemType %}" href="javascript:;">删除</a>\n                              {% } %}\n                            </div>\n                            {% $.each(list.Gifts, function (k, gift) { %}\n                              <div class="cart_gift">\n                                <a class="cart_gift_lk" href="//item.jd.com/{%= gift.Id %}.html" target="_blank">[{% if(gift.Type==2) { %}赠品{% } %}{% if(gift.Type==1) { %}附件{% } %}] {%= gift.Name %}</a>\n                              </div>\n                            {% }); %}\n                            {% $.each(list.CouponAD, function (k, jq) { %}\n                              <div class="cart_gift cart_gift_jq">[赠券] 赠送{%= jq.Jing %}元京券 {%= jq.LimitAd %}\n                            </div>\n                            {% }); %}\n                          </div>\n                        </li>\n                      {% }); %}\n                    </ul>\n                  </li>\n                {% }); %}\n              </ul>\n            {% } %}\n          </li>\n        {% }); %}\n      </ul>'
        },
        FN_BindEvents: function () {
            function FN_BindEvents() {
                var e = this;
                $("#J_cart_pop .J_delete").bind("click", function () {
                    var t = $(this).attr("data-id").split("|"),
                        n = $(this).attr("data-method"),
                        i = $(this).attr("data-type"),
                        r = {
                            method: n,
                            type: i,
                            cartId: t[0]
                        };
                    t && (t.length > 1 && t[1] && (r.targetId = t[1]), (0, o.loadAsync)({
                        url: e.URL_Serv,
                        params: r,
                        dataType: "jsonp"
                    }).then(function (t) {
                        t.Result && e.FN_Refresh()
                    }))
                })
            }
            return FN_BindEvents
        }(),
        FN_Refresh: function () {
            function FN_Refresh() {
                var e = this,
                    t = this.el,
                    n = t.find(".dropdown-layer").eq(0);
                (0, o.loadAsync)({
                    url: e.URL_Serv,
                    params: {
                        method: "GetCart"
                    },
                    dataType: "jsonp"
                }).then(function (t) {
                    var i = t.Cart,
                        l = i.TheSkus.length + i.TheSuit.length + i.TheGifts.length + i.ManJian.length + i.ManZeng.length;
                    t.Cart.getImageDomain = o.getImageDomain, t.Cart.URLS = a.URLS;
                    var c = (0, r["default"])(e.TPL_List.single, t.Cart),
                        s = (0, r["default"])(e.TPL_List.gift, t.Cart),
                        u = (0, r["default"])(e.TPL_List.suit, t.Cart),
                        d = (0, r["default"])(e.TPL_List.mz, t.Cart),
                        f = (0, r["default"])(e.TPL_List.mj, t.Cart);
                    l > 0 ? (n.html((0, r["default"])(e.TPL_List.wrap, t.Cart)), n.find(".J_cart_bd").html(c + s + u + f + d)) : n.html(e.TPL_NoGoods), e.FN_BindEvents()
                }), e.DATA_Amount = (0, o.readCookie)(e.DATA_Cookie), null != e.DATA_Amount && $("#shopping-amount").text(e.DATA_Amount).parent().show()
            }
            return FN_Refresh
        }()
    };
    t["default"] = init
}, function (e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function tmpl(e, t) {
        var n = /[^\w\-.:]/.test(e) ? new Function(tmpl.arg + ",tmpl", "var _e=tmpl.encode" + tmpl.helper + ",_s='" + e.replace(tmpl.regexp, tmpl.func) + "';return _s;") : tmpl.cache[e] = tmpl.cache[e] || tmpl(tmpl.load(e));
        return t ? n(t, tmpl) : function (e) {
            return n(e, tmpl)
        }
    };
    n.cache = {}, n.load = function (e) {
        return document.getElementById(e).innerHTML
    }, n.regexp = /([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g, n.func = function (e, t, n, i, r, o) {
        return t ? {
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            " ": " "
        } [t] || "\\" + t : n ? "=" === n ? "'+_e(" + i + ")+'" : "'+(" + i + "==null?'':" + i + ")+'" : r ? "';" : o ? "_s+='" : void 0
    }, n.encReg = /[<>&"'\x00]/g, n.encMap = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&#39;"
    }, n.encode = function (e) {
        return (null == e ? "" : "" + e).replace(n.encReg, function (e) {
            return n.encMap[e] || ""
        })
    }, n.arg = "o", n.helper = ",print=function(s,e){_s+=e?(s==null?'':s):_e(s);},include=function(s,d){_s+=tmpl(s,d);}", t["default"] = n
}, function (e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function (e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
        }
    }();
    n(40);
    var r = n(0),
        o = _interopRequireDefault(r),
        a = n(41),
        l = _interopRequireDefault(a),
        c = n(45),
        s = _interopRequireDefault(c),
        u = n(48),
        d = _interopRequireDefault(u),
        f = n(49),
        p = _interopRequireDefault(f),
        m = n(51),
        h = _interopRequireDefault(m),
        g = n(54),
        v = _interopRequireDefault(g),
        _ = n(56),
        b = _interopRequireDefault(_),
        y = n(58),
        w = _interopRequireDefault(y),
        k = function (e) {
            function Shortcut() {
                _classCallCheck(this, Shortcut);
                var e = _possibleConstructorReturn(this, (Shortcut.__proto__ || Object.getPrototypeOf(Shortcut)).apply(this, arguments));
                return e.props.ctn.innerHTML = "", e
            }
            return _inherits(Shortcut, e), i(Shortcut, [{
                key: "render",
                value: function () {
                    function render() {
                        return o["default"].createElement("div", {
                            className: "w"
                        }, o["default"].createElement("ul", {
                            className: "fl",
                            clstag: "h|keycount|head|topbar_01"
                        }, o["default"].createElement(l["default"], null)), o["default"].createElement("ul", {
                            className: "fr"
                        }, o["default"].createElement(w["default"], null), o["default"].createElement("li", {
                            className: "spacer"
                        }), o["default"].createElement("li", {
                            className: "shortcut_btn fore2",
                            clstag: "h|keycount|head|topbar_03"
                        }, o["default"].createElement("div", {
                            className: "dt"
                        }, o["default"].createElement("a", {
                            target: "_blank",
                            href: "//order.jd.com/center/list.action"
                        }, "我的订单"))), o["default"].createElement("li", {
                            className: "spacer"
                        }), o["default"].createElement(h["default"], null), o["default"].createElement("li", {
                            className: "spacer"
                        }), o["default"].createElement(d["default"], null), o["default"].createElement("li", {
                            className: "spacer"
                        }), o["default"].createElement(s["default"], null), o["default"].createElement("li", {
                            className: "spacer"
                        }), o["default"].createElement(v["default"], null), o["default"].createElement("li", {
                            className: "spacer"
                        }), o["default"].createElement(b["default"], null), o["default"].createElement("li", {
                            className: "spacer"
                        }), o["default"].createElement(p["default"], null)))
                    }
                    return render
                }()
            }]), Shortcut
        }(o["default"].Component),
        S = function () {
            var e = document.getElementById("shortcut");
            o["default"].render(o["default"].createElement(k, {
                ctn: e
            }), e)
        };
    t["default"] = S
}, function (e, t) {}, function (e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function trim(e) {
        return (e || "").replace(/(^\s*)|(\s*$)/g, "")
    }

    function isBlank(e) {
        var t = arguments;
        if (t.length > 1) {
            for (var n = 0, i = t.length; n < i; n++)
                if (isBlank(t[n])) return !0;
            return !1
        }
        return "undefined" === String(e) || "null" === String(e) || "string" == typeof e && "" === trim(e)
    }

    function changeAreaByIdSeq(e, t) {
        var n = {
                provinceId: 0,
                provinceName: "",
                cityId: 0,
                cityName: "",
                districtId: 0,
                districtName: "",
                townId: 0,
                townName: ""
            },
            i = e.split("-");
        "0" === i[0] && (i = f);
        var r = getProvince(i[0]).value;
        n.provinceId = r.id, n.provinceName = r.name, t(n)
    }

    function getProvinceList() {
        var e = [];
        return h.provinceList && h.provinceList.length > 0 ? e = h.provinceList : ($.each(h.province, function (t, n) {
            e.push({
                id: t.replace("_", ""),
                name: n
            })
        }), h.provinceList = e), e
    }

    function getProvince(e) {
        var t = {
                id: e,
                name: ""
            },
            n = 0,
            i = h.province["_" + e];
        return i || (i = h.province["_" + f[0]], n = 1, t.id = f[0]), t.name = i, {
            value: t,
            isDefault: n
        }
    }

    function loadLocal(e, t) {
        var n = e.initArea || v(e.cookieMapping.allLocal) || e.defaultArea || p;
        isBlank(e.initArea) && e.syncServer ? g.sync(function (e) {
            changeAreaByIdSeq(e && e.adds || n || n, t)
        }) : changeAreaByIdSeq(n, t)
    }

    function localObjectToList(e) {
        return e && [{
            id: e.provinceId,
            name: e.provinceName
        }, {
            id: e.cityId,
            name: e.cityName
        }, {
            id: e.districtId,
            name: e.districtName
        }, {
            id: e.townId,
            name: e.townName
        }] || []
    }

    function localObjectToArray(e, t, n) {
        $.each(localObjectToList(e), function (e, i) {
            isBlank(i.id) || 0 === i.id || (t.push(i.id), n.push(i.name))
        })
    }

    function longAreaNameProcess(e, t, n, i) {
        var r = "";
        if (t.name.length >= n.longerAreaSize ? r = "longer-area" : t.name.length >= n.longAreaSize && (r = "long-area"), i && n.className.selected || r) {
            var o = $(e);
            i && n.className.selected && o.find("a:first").addClass(n.className.selected), r && o.addClass(r), e = $("<div/>").html(o).html(), e = e.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        }
        return t.tpl ? $.tpl(t.tpl, t) : $.tpl(e, t)
    }

    function renderProvinceList(e, t, n, i) {
        var r = this,
            o = r.options.provinceList,
            a = [],
            l = [];
        return l = o || getProvinceList(), $.each(l, function (e, n) {
            a.push(longAreaNameProcess(t, n, r.options, n.id == i.provinceId))
        }), $.tpl(e, {
            list: a.join(""),
            index: n
        })
    }

    function bindAreaSelectEvent() {
        var e = this,
            t = e.el,
            n = e.options,
            i = n.className;
        $("." + i.content_content, t).undelegate("a[data-id]", "click").delegate("a[data-id]", "click", function (r) {
            r.preventDefault();
            var o = $(this),
                a = {
                    id: o.data("id"),
                    name: o.html()
                },
                l = saveSelectedLocal(t, a.id, 0);
            n.className.selected && $("." + i.content_content + " a." + n.className.selected, t).removeClass(n.className.selected), changeAreaByIdSeq(l, function (t) {
                n.className.selected && o.addClass(n.className.selected), n.selectedClose && showAreaContent.call(e, !1), drawSelectAreaText.call(e, t), $.isFunction(n.onChange) && n.onChange.call(e, o, a, t), n.writeCookie && writeCookie(n, t.provinceId, l), n.syncServer && n.writeServer && writeServer(l, t.provinceId)
            })
        }), $("." + i.content_content, t).undelegate("a[data-onchange=1]", "click").delegate("a[data-onchange=1]", "click", function () {
            var r = $(this);
            n.className.selected && ($("." + i.content_content + " a." + n.className.selected, t).removeClass(n.className.selected), r.addClass(n.className.selected)), n.selectedClose && showAreaContent.call(e, !1), $.isFunction(n.onChange) && n.onChange.call(e, r)
        })
    }

    function writeCookie(e, t, n) {
        v(e.cookieMapping.areaId, t, e.cookieOpts), v(e.cookieMapping.allLocal, n, e.cookieOpts)
    }

    function writeServer(e, t) {
        g.sync(e, t)
    }

    function showAreaContent(e) {
        var t = this,
            n = t.options.className.hover;
        e ? (m > -1 && (clearTimeout(m), m = -1), offsetBoxLeft.call(t), t.el.addClass(n), m = setTimeout(function () {
            t.el.addClass(n)
        }, 1)) : (m > -1 && (clearTimeout(m), m = -1), t.el.removeClass(n))
    }

    function offsetBoxLeft() {
        var e = this,
            t = e.el,
            n = $(e.css.content),
            i = $(e.css.text).width(),
            r = n.width(),
            o = $(d).width(),
            a = t.offset().left,
            l = $(e.css.text).offset().left;
        if (n.data("left") ? n.css("left", n.data("left")) : n.data("left", n.css("left")), a + r > o) {
            var c = r - i - 10;
            c > l && (c -= c - l + i - 20), n.css({
                left: "-" + c + "px"
            })
        } else a < -1 * parseInt(n.css("left")) && n.css({
            left: "0px"
        })
    }

    function convertAreaIdList(e) {
        return e ? [e.provinceId, e.cityId, e.districtId, e.townId] : [0, 0, 0, 0]
    }

    function saveSelectedLocal(e, t, n) {
        var i = e.data("select-local");
        return i = i && i.split("-") || [0, 0, 0, 0], "object" === (void 0 === t ? "undefined" : r(t)) ? i = convertAreaIdList(t) : (i = h.city[t]) && (i = (i + "-0").split("-")), i = i.join("-"), e.data("select-local", i), i
    }

    function drawSelectAreaContent(e, t) {
        var n = this,
            i = n.el,
            r = n.options,
            o = r.tplContentWrap,
            a = r.tplContentItem;
        $(n.css.content_content).html(renderProvinceList.call(n, o, a, 0, e)), -1 == t && saveSelectedLocal(i, e), bindAreaSelectEvent.call(n, r)
    }

    function drawSelectAreaText(e) {
        var t = this,
            n = [],
            i = [];
        localObjectToArray(e, i, n), i = i.join("-"), n = n.join(""), $(t.css.text_text).html(n).attr("data-id", i).attr("title", n)
    }

    function transformClassName(e, t) {
        var n = {};
        return $.each(t, function (i, r) {
            var o = i.split("_"),
                a = [],
                l = o.length;
            $.each(o, function (e, n) {
                if (a.push("." + t[n]), l > 1 && 2 + e == l) return a.push("." + r), !1
            }), n[i] = e + " " + a.join(" ")
        }), n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }(),
        r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    n(42);
    var o = n(1),
        a = n(4),
        l = n(44),
        c = _interopRequireDefault(l),
        s = n(0),
        u = _interopRequireDefault(s);
    $.tpl = function (e, t) {
        var n = "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');";
        return fn = new Function("obj", n), t ? fn(t) : fn
    };
    var d = window,
        f = [1, 72, 0, 0],
        p = f.join("-"),
        m = -1,
        h = {
            province: {
                "北京": 1,
                "上海": 2,
                "天津": 3,
                "重庆": 4,
                "河北": 5,
                "山西": 6,
                "河南": 7,
                "辽宁": 8,
                "吉林": 9,
                "黑龙江": 10,
                "内蒙古": 11,
                "江苏": 12,
                "山东": 13,
                "安徽": 14,
                "浙江": 15,
                "福建": 16,
                "湖北": 17,
                "湖南": 18,
                "广东": 19,
                "广西": 20,
                "江西": 21,
                "四川": 22,
                "海南": 23,
                "贵州": 24,
                "云南": 25,
                "西藏": 26,
                "陕西": 27,
                "甘肃": 28,
                "青海": 29,
                "宁夏": 30,
                "新疆": 31,
                "港澳": 52993,
                "台湾": 32,
                "钓鱼岛": 84,
                "海外": 53283
            },
            city: {
                1: "1-72-2799",
                2: "2-2813-51976",
                3: "3-51035-39620",
                4: "4-113-9775",
                5: "5-142-143",
                6: "6-303-304",
                7: "7-412-415",
                8: "8-560-567",
                9: "9-639-640",
                10: "10-727-728",
                11: "11-799-801",
                12: "12-904-905",
                13: "13-2900-2908",
                14: "14-1151-1153",
                15: "15-1158-1224",
                16: "16-1303-1305",
                17: "17-1432-1435",
                18: "18-1482-1485",
                19: "19-1601-3633",
                20: "20-3168-3169",
                21: "21-1827-1828",
                22: "22-2103-2105",
                23: "23-3690-3693",
                24: "24-2144-2145",
                25: "25-4108-6823",
                26: "26-3970-3972",
                27: "27-2428-2429",
                28: "28-2525-2526",
                29: "29-2580-2581",
                30: "30-2628-2629",
                31: "31-4110-4122",
                52993: "52993-52994-52996",
                32: "32-2768-2769",
                84: "84-1310-0",
                53283: "53283-53284-0"
            },
            area: {},
            serverLocal: null,
            provinceList: null
        };
    h.province = function () {
        var e = {};
        return $.each(h.province, function (t, n) {
            e["_" + n] = t
        }), e
    }();
    var g = {
            getUrl: "//uprofile.jd.com/u/getadds?callback=?",
            setUrl: "//uprofile.jd.com/u/setadds",
            sync: function () {
                function sync(e, t) {
                    if ($.isFunction(e)) {
                        if (h.serverLocal) return h.serverLocal;
                        e({
                            addr: v("ipLoc-djd")
                        })
                    } else {
                        var n = {
                            domain: ".jd.com",
                            path: "/",
                            expires: 10
                        };
                        v("areaId", t, n), v("ipLoc-djd", e, n)
                    }
                }
                return sync
            }()
        },
        v = function (e, t, n) {
            if (void 0 === t) {
                var i = null;
                if (document.cookie && "" !== document.cookie)
                    for (var r = document.cookie.split(";"), o = 0; o < r.length; o++) {
                        var a = jQuery.trim(r[o]).split("=");
                        if (a[0] === e && a.length > 1) {
                            try {
                                i = decodeURIComponent(a[1])
                            } catch (f) {
                                i = a[1]
                            }
                            break
                        }
                    }
                return i
            }
            n = n || {}, null === t && (t = "", n.expires = -1);
            var l = "";
            if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
                var c;
                "number" == typeof n.expires ? (c = new Date, c.setTime(c.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : c = n.expires, l = "; expires=" + c.toUTCString()
            }
            var s = n.path ? "; path=" + n.path : "",
                u = n.domain ? "; domain=" + n.domain : "",
                d = n.secure ? "; secure" : "";
            document.cookie = [e, "=", encodeURIComponent(t), l, s, u, d].join("")
        },
        _ = function (e) {
            function HeadAreamini() {
                var e, t, n, i;
                _classCallCheck(this, HeadAreamini);
                for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                return t = n = _possibleConstructorReturn(this, (e = HeadAreamini.__proto__ || Object.getPrototypeOf(HeadAreamini)).call.apply(e, [this].concat(o))), n.defaultOptions = {
                    hasCssLink: !0,
                    baseVersion: "1.0.0",
                    cssLinkVersion: "1.0.0",
                    syncServer: !1,
                    initArea: null,
                    defaultArea: null,
                    provinceList: null,
                    provinceExtend: !0,
                    longAreaSize: 4,
                    longerAreaSize: 12,
                    cookieMapping: {
                        areaId: "areaId",
                        allLocal: "ipLoc-djd"
                    },
                    writeCookie: !0,
                    cookieOpts: {
                        expires: null,
                        path: null,
                        domain: null,
                        secure: null
                    },
                    writeServer: !0,
                    className: {
                        hover: "ui-areamini-hover",
                        text: "ui-areamini-text-wrap",
                        text_text: "ui-areamini-text",
                        content: "ui-areamini-content-wrap",
                        close: "ui-areamini-close",
                        content_tab: "ui-areamini-tab",
                        content_content: "ui-areamini-content",
                        content_content_list: "ui-areamini-content-list",
                        selected: ""
                    },
                    tplContentWrap: '<ul class="ui-areamini-content-list"><%=list%></ul>',
                    tplContentItem: '<li><a data-id="<%=id%>" href="javascript:void(0)"><%=name%></a></li>',
                    event: "hover",
                    onReady: null,
                    onChange: null,
                    selectedClose: !0
                }, n.css = {}, i = t, _possibleConstructorReturn(n, i)
            }
            return _inherits(HeadAreamini, e), i(HeadAreamini, [{
                key: "shouldComponentUpdate",
                value: function () {
                    function shouldComponentUpdate() {
                        return !1
                    }
                    return shouldComponentUpdate
                }()
            }, {
                key: "init",
                value: function () {
                    function init(e, t) {
                        var n = this;
                        n.el = e, n.options = (0, o.merge)({}, this.defaultOptions, t);
                        var i = n.options,
                            r = n.el;
                        i.scopeLevel = 1, n.css = transformClassName("#" + r[0].id, i.className), i.provinceList && i.provinceExtend && (i.provinceList = $.extend(!0, [], getProvinceList().concat(i.provinceList))), loadLocal(i, function (e) {
                            drawSelectAreaText.call(n, e), drawSelectAreaContent.call(n, e, -1);
                            var t = "hover" == i.event ? "mouseenter" : "click";
                            $(n.css.text).bind(t, function () {
                                return showAreaContent.call(n, !0), !1
                            }), $(r).bind("mouseleave", function (e) {
                                showAreaContent.call(n, !1)
                            }), $(n.css.close).bind("click", function () {
                                showAreaContent.call(n, !1)
                            }), $.isFunction(i.onReady) && i.onReady.call(n, e)
                        })
                    }
                    return init
                }()
            }, {
                key: "componentDidMount",
                value: function () {
                    function componentDidMount() {
                        this.init($("#ttbar-mycity"), {
                            hasCssLink: !1,
                            className: {
                                hover: "hover",
                                selected: "selected"
                            },
                            provinceList: [],
                            tplContentWrap: '<div class="ui-areamini-content-list"><%=list%></div>',
                            tplContentItem: '<div class="item"><a data-id="<%=id%>" href="javascript:void(0)"><%=name%></a></div>',
                            syncServer: !0,
                            writeCookie: !1,
                            threeWordDeal: function () {
                                function threeWordDeal(e) {
                                    var t = e.find(".ui-areamini-text").html(),
                                        n = e.find(".dd-spacer");
                                    3 === t.length ? n.addClass("dd-spacer-extend") : n.removeClass("dd-spacer-extend")
                                }
                                return threeWordDeal
                            }(),
                            onReady: function () {
                                function onReady(e) {
                                    this.el.find(".ui-areamini-text-wrap").show();
                                    var t = v("areaId");
                                    if (c["default"].check() && t) {
                                        var n = "areaId";
                                        c["default"].get(n) ? c["default"].get(n) !== t && (c["default"].set(n, t), c["default"].clearByReg("^jd_home_2015_")) : c["default"].set(n, t)
                                    }
                                    this.options.threeWordDeal(this.el);
                                    var i = this.el.find(".dropdown-layer"),
                                        r = a.CONSTS.CLSTAGPREFIX,
                                        o = "head|topbar",
                                        l = $('\n          <div class="areamini_inter">\n            <div class="areamini_inter_split" />\n            <p class="areamini_inter_desc">Available Sites</p>\n            <ul class="areamini_inter_list">\n              <li class="areamini_inter_item">\n                <a class="areamini_inter_lk" href="//www.joybuy.com/?source=1&visitor_from=2" target=\'_blank\'\n                  clstag="' + r + "|" + o + '_0101">\n                  <div class="areamini_inter_ico areamini_inter_ico_global" />\n                  <div class="areamini_inter_name">Global Site</div>\n                </a>\n              </li>\n              <li class="areamini_inter_item">\n                <a class="areamini_inter_lk" href="//www.jd.ru/?source=1&visitor_from=2" target=\'_blank\'\n                  clstag="' + r + "|" + o + '_0102">\n                  <div class="areamini_inter_ico areamini_inter_ico_russia" />\n                  <div class="areamini_inter_name">Сайт России</div>\n                </a>\n              </li>\n              <li class="areamini_inter_item">\n                <a class="areamini_inter_lk" href="//www.jd.id/?source=1&visitor_from=2" target=\'_blank\'\n                  clstag="' + r + "|" + o + '_0103">\n                  <div class="areamini_inter_ico areamini_inter_ico_indonesia" />\n                  <div class="areamini_inter_name">Situs Indonesia</div>\n                </a>\n              </li>\n              <li class="areamini_inter_item">\n                <a class="areamini_inter_lk" href="//www.joybuy.es/?source=1&visitor_from=2" target=\'_blank\'\n                  clstag="' + r + "|" + o + '_0104">\n                  <div class="areamini_inter_ico areamini_inter_ico_spain" />\n                  <div class="areamini_inter_name">Sitio de España</div>\n                </a>\n              </li>\n              <li class="areamini_inter_item">\n                <a class="areamini_inter_lk" href="//www.jd.co.th/?source=1&visitor_from=2" target=\'_blank\'\n                  clstag="' + r + "|" + o + '_0105">\n                  <div class="areamini_inter_ico areamini_inter_ico_thailand" />\n                  <div class="areamini_inter_name">เว็บไซต์ประเทศไทย</div>\n                </a>\n              </li>\n            </ul>\n          </div>');
                                    i.append(l)
                                }
                                return onReady
                            }(),
                            onChange: function () {
                                function onChange(e, t, n) {
                                    this.options.threeWordDeal(this.el), void 0 !== t && window.location.reload()
                                }
                                return onChange
                            }()
                        })
                    }
                    return componentDidMount
                }()
            }, {
                key: "render",
                value: function () {
                    function render() {
                        return u["default"].createElement("li", {
                            className: "shortcut_btn dropdown",
                            id: "ttbar-mycity"
                        }, u["default"].createElement("div", {
                            className: "dt cw-icon ui-areamini-text-wrap",
                            style: "display:none;"
                        }, u["default"].createElement("i", {
                            className: "iconfont"
                        }, ""), u["default"].createElement("span", {
                            className: "ui-areamini-text"
                        })), u["default"].createElement("div", {
                            className: "dd dropdown-layer"
                        }, u["default"].createElement("div", {
                            className: "dd-spacer"
                        }), u["default"].createElement("div", {
                            className: "ui-areamini-content-wrap"
                        }, u["default"].createElement("div", {
                            className: "ui-areamini-content"
                        }))))
                    }
                    return render
                }()
            }]), HeadAreamini
        }(u["default"].PureComponent);
    t["default"] = _
}, function (e, t, n) {
    var i = n(43);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {};
    r.transform = void 0;
    n(9)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    t = e.exports = n(8)(undefined), t.push([e.i, '@charset "UTF-8";\n/* 城市选择 */\n#ttbar-mycity .item {\n  float: left;\n  width: 60px;\n  padding: 2px 0; }\n\n#ttbar-mycity .item a {\n  float: left;\n  padding: 0 8px; }\n\n#ttbar-mycity .item a:hover {\n  background-color: #f4f4f4; }\n\n#ttbar-mycity .item a.selected {\n  background-color: #f10215;\n  color: #fff; }\n\n.ui-areamini-content-list {\n  overflow: hidden; }\n\n.areamini_inter {\n  margin: 10px 0 10px 10px; }\n\n.areamini_inter_split {\n  width: 262px;\n  height: 0;\n  border-bottom: dotted 1px #eee; }\n\n.areamini_inter_desc {\n  margin: 9px 0; }\n\n.areamini_inter_list {\n  overflow: hidden; }\n\n.areamini_inter_item {\n  float: left;\n  width: 145px;\n  height: 26px;\n  line-height: 26px; }\n\n.areamini_inter_lk {\n  display: block;\n  overflow: hidden; }\n\n.areamini_inter_ico {\n  float: left;\n  position: relative;\n  top: 7px;\n  margin-right: 8px;\n  width: 15px;\n  height: 10px;\n  border: solid 1px transparent; }\n\n.areamini_inter_ico_global {\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  height: 12px;\n  margin-top: -1px;\n  background-image: url(' + n(10) + "); }\n\n.areamini_inter_ico_russia {\n  background-repeat: no-repeat;\n  background-position: -20px 0;\n  background-image: url(" + n(10) + ");\n  border: solid 1px #ebebeb; }\n\n.areamini_inter_ico_indonesia {\n  background-repeat: no-repeat;\n  background-position: 0 -17px;\n  background-image: url(" + n(10) + ");\n  border: solid 1px #ebebeb; }\n\n.areamini_inter_ico_thailand {\n  background-repeat: no-repeat;\n  background-position: -20px -17px;\n  background-image: url(" + n(10) + "); }\n\n.areamini_inter_ico_spain {\n  background-repeat: no-repeat;\n  background-position: -40px 0;\n  background-image: url(" + n(10) + "); }\n\n.areamini_inter_name {\n  float: left;\n  width: 120px; }\n\n@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min--moz-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 3 / 2), only screen and (min-device-pixel-ratio: 1.5) {\n  .areamini_inter_ico_global {\n    background-repeat: no-repeat;\n    -moz-background-size: 50px 24.5px;\n         background-size: 50px 24.5px;\n    background-position: 0 0;\n    background-image: url(" + n(11) + "); }\n  .areamini_inter_ico_russia {\n    background-repeat: no-repeat;\n    -moz-background-size: 50px 24.5px;\n         background-size: 50px 24.5px;\n    background-position: -17.5px 0;\n    background-image: url(" + n(11) + ");\n    border: solid 1px #ebebeb; }\n  .areamini_inter_ico_indonesia {\n    background-repeat: no-repeat;\n    -moz-background-size: 50px 24.5px;\n         background-size: 50px 24.5px;\n    background-position: 0 -14.5px;\n    background-image: url(" + n(11) + ");\n    border: solid 1px #ebebeb; }\n  .areamini_inter_ico_thailand {\n    background-repeat: no-repeat;\n    -moz-background-size: 50px 24.5px;\n         background-size: 50px 24.5px;\n    background-position: -17.5px -14.5px;\n    background-image: url(" + n(11) + "); }\n  .areamini_inter_ico_spain {\n    background-repeat: no-repeat;\n    -moz-background-size: 50px 24.5px;\n         background-size: 50px 24.5px;\n    background-position: -35px 0;\n    background-image: url(" + n(11) + "); } }\n", ""])
}, function (e, t, n) {
    var i, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    (i = function (e, t, n) {
        return {
            check: function () {
                function check() {
                    return "object" === r(window.localStorage)
                }
                return check
            }(),
            has: function () {
                function has(e) {
                    return !!localStorage.getItem(e)
                }
                return has
            }(),
            set: function () {
                function set(e, t) {
                    try {
                        localStorage.setItem(e, JSON.stringify(t))
                    } catch (n) {}
                }
                return set
            }(),
            get: function () {
                function get(e) {
                    try {
                        return JSON.parse(localStorage.getItem(e))
                    } catch (t) {}
                }
                return get
            }(),
            remove: function () {
                function remove(e) {
                    localStorage.removeItem(e)
                }
                return remove
            }(),
            clearByReg: function () {
                function clearByReg(e) {
                    var t = new RegExp(e),
                        n = window.localStorage;
                    for (var i in n) t.test(i) && this.remove(i)
                }
                return clearByReg
            }(),
            clear: function () {
                function clear() {
                    localStorage.clear()
                }
                return clear
            }()
        }
    }.call(t, n, t, e)) !== undefined && (e.exports = i)
}, function (e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }(),
        r = n(0),
        o = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(r),
        a = n(6);
    n(46);
    var l = function (e) {
        function ShortcutCompany() {
            var e, t, n, i;
            _classCallCheck(this, ShortcutCompany);
            for (var r = arguments.length, o = Array(r), l = 0; l < r; l++) o[l] = arguments[l];
            return t = n = _possibleConstructorReturn(this, (e = ShortcutCompany.__proto__ || Object.getPrototypeOf(ShortcutCompany)).call.apply(e, [this].concat(o))), n.enterStamp = null, n.poi = "head|topbar_company", n.onMouseenter = function () {
                n.enterStamp = Date.now()
            }, n.onMouseleave = function () {
                !n.enterStamp || Date.now() - n.enterStamp < 1e3 || (n.enterStamp = null, (0, a.logImpr)({
                    poi: n.poi
                }))
            }, i = t, _possibleConstructorReturn(n, i)
        }
        return _inherits(ShortcutCompany, e), i(ShortcutCompany, [{
            key: "getDropdown",
            value: function () {
                function getDropdown() {
                    return o["default"].createElement("div", {
                        className: "dd dropdown-layer"
                    }, o["default"].createElement("div", {
                        className: "dd-inner"
                    }, o["default"].createElement("div", {
                        className: "item"
                    }, o["default"].createElement("a", {
                        href: "//b.jd.com",
                        target: "_blank"
                    }, "企业购")), o["default"].createElement("div", {
                        className: "item"
                    }, o["default"].createElement("a", {
                        href: "//shang.jd.com",
                        target: "_blank"
                    }, "商用场景馆")), o["default"].createElement("div", {
                        className: "item"
                    }, o["default"].createElement("a", {
                        href: "//imall.jd.com",
                        target: "_blank"
                    }, "工业品")), o["default"].createElement("div", {
                        className: "item"
                    }, o["default"].createElement("a", {
                        href: "//o.jd.com",
                        target: "_blank"
                    }, "礼品卡"))))
                }
                return getDropdown
            }()
        }, {
            key: "render",
            value: function () {
                function render() {
                    return o["default"].createElement("li", {
                        className: "shortcut_btn fore5 dropdown shortcut_btn_company",
                        clstag: "h|keycount|head|topbar_06",
                        onMouseenter: this.onMouseenter,
                        onMouseleave: this.onMouseleave
                    }, o["default"].createElement("div", {
                        className: "dt cw-icon"
                    }, o["default"].createElement("a", {
                        target: "_blank",
                        href: "//b.jd.com/"
                    }, "企业采购"), o["default"].createElement("i", {
                        className: "iconfont"
                    }, "")), this.getDropdown())
                }
                return render
            }()
        }]), ShortcutCompany
    }(r.Component);
    t["default"] = l
}, function (e, t, n) {
    var i = n(47);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {};
    r.transform = void 0;
    n(9)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    t = e.exports = n(8)(undefined), t.push([e.i, "/*\r\n * Filename: /src/home/component/shortcut/shortcutCompany.css\r\n * Created Date: 2018-05-21 17:36:07\r\n * Author: Littly\r\n * Copyright (c) 2018 JD.COM\r\n */\n.shortcut_btn_company .dropdown-layer {\n  left: 0;\n  width: 140px;\n  padding: 10px 0 10px 15px; }\n\n.shortcut_btn_company .item {\n  display: inline-block;\n  width: 56px;\n  white-space: nowrap; }\n", ""])
}, function (e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }(),
        r = n(0),
        o = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(r),
        a = n(1),
        l = n(4),
        c = function (e) {
            function ShortcutMember() {
                var e, t, n, i;
                _classCallCheck(this, ShortcutMember);
                for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                return t = n = _possibleConstructorReturn(this, (e = ShortcutMember.__proto__ || Object.getPrototypeOf(ShortcutMember)).call.apply(e, [this].concat(o))), n.state = {
                    isCompany: !1
                }, i = t, _possibleConstructorReturn(n, i)
            }
            return _inherits(ShortcutMember, e), i(ShortcutMember, [{
                key: "componentDidMount",
                value: function () {
                    function componentDidMount() {
                        var e = this;
                        (0, a.getCompanyinfo)().then(function (t) {
                            var n = t.isCompany;
                            e.setState({
                                isCompany: n
                            })
                        })
                    }
                    return componentDidMount
                }()
            }, {
                key: "render",
                value: function () {
                    function render() {
                        var e = this.state.isCompany;
                        return o["default"].createElement("li", {
                            className: "shortcut_btn fore4",
                            clstag: "h|keycount|head|topbar_05"
                        }, o["default"].createElement("div", {
                            className: "dt"
                        }, o["default"].createElement("a", {
                            target: "_blank",
                            href: e ? l.URLS.COMPANY_BVIP : l.URLS.VIP_USER
                        }, "京东会员")))
                    }
                    return render
                }()
            }]), ShortcutMember
        }(r.Component);
    t["default"] = c
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n(50);
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1),
        a = n(6),
        l = function () {
            var e = this,
                t = !1,
                n = Date.now(),
                i = function () {
                    n = Date.now(), e.$mobile.addClass("mobile_on"), t || (t = !0, (0, o.loadLegacy)().then(function () {
                        seajs.use("home/widget/mobile_pop", function (t) {
                            t({
                                $el: e.$mobilePop
                            })
                        })
                    }))
                },
                l = function () {
                    clearTimeout(null), e.$mobile.removeClass("mobile_on"), Date.now() - n < 1e3 || (0, a.logImpr)({
                        poi: "head|topbar_qrcode"
                    })
                };
            return r["default"].createElement("li", {
                id: "J_mobile",
                className: "shortcut_btn fore10 mobile",
                clstag: "h|keycount|head|topbar_09",
                ref: function () {
                    function ref(t) {
                        e.$mobile = $(t)
                    }
                    return ref
                }(),
                onmouseenter: i,
                onmouseleave: l
            }, r["default"].createElement("div", {
                className: "dt mobile_txt"
            }, "手机京东"), r["default"].createElement("div", {
                className: "mobile_static"
            }, r["default"].createElement("div", {
                className: "mobile_static_qrcode"
            })), r["default"].createElement("div", {
                id: "J_mobile_pop",
                className: "mod_loading mobile_pop",
                ref: function () {
                    function ref(t) {
                        e.$mobilePop = $(t)
                    }
                    return ref
                }()
            }))
        };
    t["default"] = l
}, function (e, t) {}, function (e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function (e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
        }
    }();
    n(52);
    var r = n(0),
        o = _interopRequireDefault(r),
        a = n(5),
        l = _interopRequireDefault(a),
        c = n(6),
        s = (0, l["default"])({
            loader: function () {
                function loader() {
                    return n.e(20).then(n.bind(null, 112))
                }
                return loader
            }(),
            loading: function () {
                function loading(e) {
                    return e.pastDelay ? o["default"].createElement("div", null) : (e.err, o["default"].createElement("div", null))
                }
                return loading
            }(),
            render: function () {
                function render(e, t) {
                    return o["default"].createElement(e["default"], t)
                }
                return render
            }(),
            delay: 0
        }),
        u = function (e) {
            function ShortcutNerv() {
                _classCallCheck(this, ShortcutNerv);
                var e = _possibleConstructorReturn(this, (ShortcutNerv.__proto__ || Object.getPrototypeOf(ShortcutNerv)).apply(this, arguments));
                return e.onMouseenter = function () {
                    e.enterStamp = Date.now(), e.state.renderDropdown || e.setState({
                        renderDropdown: !0
                    })
                }, e.onMouseleave = function () {
                    !e.enterStamp || Date.now() - e.enterStamp < 1e3 || (e.enterStamp = null, (0, c.logImpr)({
                        poi: "head|topbar_myJD"
                    }))
                }, e.state = {}, e
            }
            return _inherits(ShortcutNerv, e), i(ShortcutNerv, [{
                key: "getDropdown",
                value: function () {
                    function getDropdown() {
                        return this.state.renderDropdown ? o["default"].createElement(s, null) : ""
                    }
                    return getDropdown
                }()
            }, {
                key: "render",
                value: function () {
                    function render() {
                        return o["default"].createElement("li", {
                            id: "ttbar-myjd",
                            className: "shortcut_btn fore3 dropdown",
                            clstag: "h|keycount|head|topbar_04",
                            onMouseenter: this.onMouseenter,
                            onMouseleave: this.onMouseleave
                        }, o["default"].createElement("div", {
                            className: "dt cw-icon"
                        }, o["default"].createElement("a", {
                            target: "_blank",
                            href: "//home.jd.com/"
                        }, "我的京东"), o["default"].createElement("i", {
                            className: "iconfont"
                        }, "")), this.getDropdown())
                    }
                    return render
                }()
            }]), ShortcutNerv
        }(o["default"].PureComponent);
    t["default"] = u
}, function (e, t, n) {
    var i = n(53);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {};
    r.transform = void 0;
    n(9)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    t = e.exports = n(8)(undefined), t.push([e.i, '@charset "UTF-8";\n/* 我的京东 */\n#ttbar-myjd .dorpdown-layer,\n#ttbar-myjd .dropdown-layer {\n  left: 0;\n  width: 280px; }\n\n#ttbar-myjd .myjdlist {\n  padding: 10px 0 10px 15px;\n  overflow: hidden; }\n\n#ttbar-myjd .myjdlist .fore1,\n#ttbar-myjd .myjdlist .fore2 {\n  float: left;\n  width: 126px; }\n\n#ttbar-myjd .myjdlist_2 {\n  border-top: solid 1px #f1f1f1; }\n\n#ttbar-myjd .user-level1,\n#ttbar-myjd .user-level2,\n#ttbar-myjd .user-level3,\n#ttbar-myjd .user-level4,\n#ttbar-myjd .user-level5,\n#ttbar-myjd .user-level6 {\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  line-height: 17px;\n  vertical-align: middle;\n  margin-left: 5px;\n  background: url(//img13.360buyimg.com/uba/jfs/t3484/9/128280995/3519/c85623fa/58004db6Na4b20277.gif); }\n\n#ttbar-myjd .user-level2 {\n  background-position: 0 -17px; }\n\n#ttbar-myjd .user-level3 {\n  background-position: 0 -34px; }\n\n#ttbar-myjd .user-level4 {\n  background-position: 0 -51px; }\n\n#ttbar-myjd .user-level5 {\n  background-position: 0 -68px; }\n\n#ttbar-myjd .user-level6 {\n  background-position: 0 -85px; }\n', ""])
}, function (e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function (e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
        }
    }();
    n(55);
    var r = n(0),
        o = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(r),
        a = n(1),
        l = n(4),
        c = n(6),
        s = function (e) {
            function shortService() {
                _classCallCheck(this, shortService);
                var e = _possibleConstructorReturn(this, (shortService.__proto__ || Object.getPrototypeOf(shortService)).apply(this, arguments));
                return e.onMouseenter = function () {
                    e.enterStamp = Date.now(), e.loaded || (e.loaded = !0, e.requestData())
                }, e.onMouseleave = function () {
                    !e.enterStamp || Date.now() - e.enterStamp < 1e3 || (e.enterStamp = null, (0, c.logImpr)({
                        poi: "head|topbar_website"
                    }))
                }, e.state = {
                    cus: [],
                    bus: []
                }, e
            }
            return _inherits(shortService, e), i(shortService, [{
                key: "processData",
                value: function () {
                    function processData(e) {
                        var t = [],
                            n = [];
                        return e.forEach(function (e) {
                            (0 === e.c ? t : n).push(e)
                        }), {
                            cus: t,
                            bus: n
                        }
                    }
                    return processData
                }()
            }, {
                key: "requestData",
                value: function () {
                    function requestData() {
                        var e = this;
                        (0, a.loadAsync)({
                            url: l.APIS.HEAD_SERVICE,
                            backup: l.APIS.HEAD_SERVICE_BACKUP,
                            charset: "gb2312",
                            cache: !0,
                            name: "jsonpshortService"
                        }).then(function (t) {
                            var n = e.processData(t.data),
                                i = n.cus,
                                r = n.bus;
                            e.setState({
                                cus: i,
                                bus: r
                            })
                        })
                    }
                    return requestData
                }()
            }, {
                key: "getItem",
                value: function () {
                    function getItem(e) {
                        return o["default"].createElement("div", {
                            className: "item"
                        }, o["default"].createElement("a", {
                            href: e.u,
                            target: "_blank",
                            className: e.c || !1
                        }, e.n))
                    }
                    return getItem
                }()
            }, {
                key: "getContent",
                value: function () {
                    function getContent() {
                        var e = this,
                            t = this.state,
                            n = t.cus,
                            i = t.bus;
                        if (n.length || i.length) {
                            var r = [];
                            return r.push(o["default"].createElement("div", {
                                className: "item-client"
                            }, "客户")), n.forEach(function (t) {
                                r.push(e.getItem(t))
                            }), r.push(o["default"].createElement("div", {
                                className: "item-business"
                            }, "商户")), i.forEach(function (t) {
                                r.push(e.getItem(t))
                            }), o["default"].createElement("div", {
                                className: "dd dropdown-layer"
                            }, r)
                        }
                        return o["default"].createElement("div", {
                            className: "dd dropdown-layer"
                        }, o["default"].createElement("div", {
                            className: "dd-inner"
                        }, o["default"].createElement("span", {
                            className: "loading"
                        })))
                    }
                    return getContent
                }()
            }, {
                key: "render",
                value: function () {
                    function render() {
                        return o["default"].createElement("li", {
                            id: "ttbar-serv",
                            className: "shortcut_btn fore8 dropdown",
                            clstag: "h|keycount|head|topbar_07",
                            onMouseenter: this.onMouseenter,
                            onMouseleave: this.onMouseleave
                        }, o["default"].createElement("div", {
                            className: "dt cw-icon"
                        }, "客户服务", o["default"].createElement("i", {
                            className: "iconfont"
                        }, "")), this.getContent())
                    }
                    return render
                }()
            }]), shortService
        }(o["default"].Component);
    t["default"] = s
}, function (e, t) {}, function (e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        r = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }();
    n(57);
    var o = n(0),
        a = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(o),
        l = n(1),
        c = n(4),
        s = n(6),
        u = function (e) {
            function shortcutSitenav() {
                _classCallCheck(this, shortcutSitenav);
                var e = _possibleConstructorReturn(this, (shortcutSitenav.__proto__ || Object.getPrototypeOf(shortcutSitenav)).apply(this, arguments));
                return e.onMouseenter = function () {
                    e.enterStamp = Date.now(), e.loaded || (e.loaded = !0, e.requestData())
                }, e.onMouseleave = function () {
                    !e.enterStamp || Date.now() - e.enterStamp < 1e3 || (e.enterStamp = null, (0, s.logImpr)({
                        poi: "head|topbar_client"
                    }))
                }, e.state = {
                    list: []
                }, e
            }
            return _inherits(shortcutSitenav, e), r(shortcutSitenav, [{
                key: "requestData",
                value: function () {
                    function requestData() {
                        var e = this;
                        (0, l.loadAsync)({
                            url: c.APIS.HEAD_SITENAV,
                            backup: c.APIS.HEAD_SITENAV_BACKUP,
                            charset: "gb2312",
                            cache: !0,
                            name: "jsonpshortcutSitenav",
                            dataCheck: function () {
                                function dataCheck(e) {
                                    if (!e || "object" !== (void 0 === e ? "undefined" : i(e))) return !1
                                }
                                return dataCheck
                            }()
                        }).then(function (t) {
                            e.setState({
                                list: t.data
                            })
                        })
                    }
                    return requestData
                }()
            }, {
                key: "getContent",
                value: function () {
                    function getContent() {
                        var e = this.state.list;
                        if (e.length) {
                            var t = e.map(function (e, t) {
                                var n = e.u ? a["default"].createElement("a", {
                                        href: e.u,
                                        target: "_blank",
                                        className: e.c || !1
                                    }, e.n) : e.n,
                                    i = e.s.map(function (e) {
                                        return a["default"].createElement("div", {
                                            className: "item"
                                        }, a["default"].createElement("a", {
                                            href: e.u,
                                            target: "_blank",
                                            className: e.c || !1
                                        }, e.n))
                                    });
                                return a["default"].createElement("dl", {
                                    className: "fore" + (t + 1)
                                }, a["default"].createElement("dt", null, n), a["default"].createElement("dd", null, i))
                            });
                            return a["default"].createElement("div", {
                                className: "dd dropdown-layer"
                            }, t)
                        }
                        return a["default"].createElement("div", {
                            className: "dd dropdown-layer"
                        }, a["default"].createElement("div", {
                            className: "dd-inner"
                        }, a["default"].createElement("span", {
                            className: "loading"
                        })))
                    }
                    return getContent
                }()
            }, {
                key: "render",
                value: function () {
                    function render() {
                        return a["default"].createElement("li", {
                            id: "ttbar-navs",
                            className: "shortcut_btn fore9 dropdown",
                            clstag: "h|keycount|head|topbar_08",
                            onMouseenter: this.onMouseenter,
                            onMouseleave: this.onMouseleave
                        }, a["default"].createElement("div", {
                            className: "dt cw-icon"
                        }, "网站导航", a["default"].createElement("i", {
                            className: "iconfont"
                        }, "")), this.getContent())
                    }
                    return render
                }()
            }]), shortcutSitenav
        }(a["default"].Component);
    t["default"] = u
}, function (e, t) {}, function (e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
            function sliceIterator(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = undefined;
                try {
                    for (var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                } catch (c) {
                    r = !0, o = c
                } finally {
                    try {
                        !i && l["return"] && l["return"]()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }
            return function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return sliceIterator(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        r = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }();
    n(59), n(60);
    var o = n(0),
        a = _interopRequireDefault(o),
        l = n(1),
        c = n(4),
        s = n(7),
        u = n(6),
        d = n(5),
        f = _interopRequireDefault(d),
        p = (0, f["default"])({
            loader: function () {
                function loader() {
                    return n.e(19).then(n.bind(null, 113))
                }
                return loader
            }(),
            loading: function () {
                function loading(e) {
                    return e.pastDelay ? a["default"].createElement("div", null) : (e.err, a["default"].createElement("div", null))
                }
                return loading
            }(),
            render: function () {
                function render(e, t) {
                    return a["default"].createElement(e["default"], t)
                }
                return render
            }(),
            delay: 0
        }),
        m = function (e) {
            function ShortcutUserinfo() {
                _classCallCheck(this, ShortcutUserinfo);
                var e = _possibleConstructorReturn(this, (ShortcutUserinfo.__proto__ || Object.getPrototypeOf(ShortcutUserinfo)).apply(this, arguments));
                return e.onMouseenter = function () {
                    var t = e.state.renderDropdown;
                    e.enterStamp = Date.now(), t || e.setState({
                        renderDropdown: !0
                    })
                }, e.onMouseleave = function () {
                    !e.enterStamp || Date.now() - e.enterStamp < 1e3 || (e.enterStamp = null, (0, u.logImpr)({
                        poi: "head|topbar_login"
                    }))
                }, e.state = {
                    isCompany: !1,
                    userLevel: 1,
                    plusStatus: 1,
                    imgUrl: "//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg",
                    spoint: "",
                    dangerHTML: '<a target="_blank" href="javascript:login();" class="link-login">你好，请登录</a>&nbsp;&nbsp;<a href="javascript:regist();" class="link-regist style-red">免费注册</a>'
                }, e
            }
            return _inherits(ShortcutUserinfo, e), r(ShortcutUserinfo, [{
                key: "requestUsername",
                value: function () {
                    function requestUsername() {
                        return (0, l.loadAsync)({
                            url: c.APIS.USER_NAME,
                            timeout: 1e3,
                            params: {
                                pin: s.USER.pin,
                                uuid: s.USER.uuid
                            },
                            charset: "gb2312",
                            name: "jsonpHelloService",
                            dataCheck: function () {
                                function dataCheck(e) {
                                    if (!e) return !1
                                }
                                return dataCheck
                            }()
                        })
                    }
                    return requestUsername
                }()
            }, {
                key: "requestUserinfo",
                value: function () {
                    function requestUserinfo() {
                        return (0, l.getUserinfo)()
                    }
                    return requestUserinfo
                }()
            }, {
                key: "runDelayedWorks",
                value: function () {
                    function runDelayedWorks() {
                        Array.isArray(this.ssoList) && this.ssoList.forEach(function (e) {
                            document.createElement("img").src = e
                        })
                    }
                    return runDelayedWorks
                }()
            }, {
                key: "getPop",
                value: function () {
                    function getPop() {
                        var e = this.state,
                            t = e.renderDropdown,
                            n = e.userLevel,
                            i = e.plusStatus,
                            r = e.imgUrl,
                            o = e.spoint;
                        return t ? a["default"].createElement(p, {
                            userLevel: n,
                            plusStatus: i,
                            imgUrl: r,
                            spoint: o
                        }) : ""
                    }
                    return getPop
                }()
            }, {
                key: "componentDidMount",
                value: function () {
                    function componentDidMount() {
                        var e = this;
                        Promise.all([this.requestUsername(), this.requestUserinfo(), (0, l.getCompanyinfo)()]).then(function (t) {
                            var n = i(t, 3),
                                r = n[0],
                                o = n[1],
                                a = n[2].isCompany;
                            r.nick ? (e.ssoList = r.sso, e.setState({
                                nick: r.nick,
                                userLevel: o.userLevel,
                                plusStatus: o.plusStatus,
                                isCompany: a
                            }), (0, l.afterLoad)().then(function () {
                                e.setState({
                                    imgUrl: o.imgUrl
                                })
                            })) : e.setState({
                                dangerHTML: r.info
                            })
                        }), (0, l.getSpoint)().then(function (t) {
                            e.setState({
                                spoint: t.spoint
                            })
                        }), (0, l.afterLoad)().then(function () {
                            e.runDelayedWorks()
                        })
                    }
                    return componentDidMount
                }()
            }, {
                key: "render",
                value: function () {
                    function render() {
                        var e = this.state,
                            t = e.nick,
                            n = e.plusStatus,
                            i = e.isCompany;
                        return t ? a["default"].createElement("li", {
                            id: "ttbar-login",
                            className: (0, l.mergeClassName)("shortcut_btn", "fore1", "dropdown", "shortcut_userico" + n, i ? "shortcut_userico_company" : ""),
                            clstag: "h|keycount|head|topbar_02",
                            onMouseenter: this.onMouseenter,
                            onMouseleave: this.onMouseleave
                        }, a["default"].createElement("div", {
                            className: "dt cw-icon"
                        }, a["default"].createElement("i", {
                            className: "shortcut_userico_ico"
                        }), a["default"].createElement("a", {
                            className: "nickname",
                            target: "_blank",
                            href: "//home.jd.com/"
                        }, t), a["default"].createElement("i", {
                            className: "iconfont"
                        }, "")), this.getPop()) : a["default"].createElement("li", {
                            id: "ttbar-login",
                            className: "shortcut_btn fore1 dropdown",
                            clstag: "h|keycount|head|topbar_02",
                            dangerouslySetInnerHTML: {
                                __html: this.state.dangerHTML
                            }
                        })
                    }
                    return render
                }()
            }]), ShortcutUserinfo
        }(a["default"].Component);
    t["default"] = m
}, function (e, t) {}, function (e, t, n) {
    var i = n(61);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {};
    r.transform = void 0;
    n(9)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    t = e.exports = n(8)(undefined), t.push([e.i, ".dropdown .link-logout {\n  float: right;\n  margin-right: 10px;\n  line-height: 1.2; }\n\n#ttbar-login .dropdown-layer {\n  left: 0;\n  width: 270px; }\n\n#ttbar-login .shortcut_userico3 .dropdown-layer {\n  border-color: #dfc676; }\n\n#ttbar-login .slider_control {\n  background: none;\n  text-align: left;\n  margin-top: -50px;\n  padding-bottom: 80px;\n  padding-top: 25px; }\n\n#ttbar-login .slider_control i {\n  position: static;\n  right: auto;\n  top: auto;\n  color: #999; }\n\n#ttbar-login .slider_control:hover {\n  color: #999; }\n\n.userinfo {\n  padding: 10px 0 10px 15px;\n  overflow: hidden; }\n\n.userbadge {\n  position: relative;\n  height: 88px;\n  overflow: hidden;\n  padding-top: 10px;\n  border-top: 1px solid #d8d8d8; }\n\n.badge_list {\n  width: 210px;\n  text-align: center;\n  margin: auto; }\n\n.badge_item {\n  float: left;\n  width: 70px;\n  text-align: center; }\n\n#ttbar-login .badge_item i {\n  display: block;\n  width: 55px;\n  height: 55px;\n  margin: 0 auto; }\n\n.badge_item .icobadage {\n  display: block;\n  width: 55px;\n  height: 55px;\n  background-repeat: no-repeat; }\n\n.badge_item a {\n  display: block;\n  cursor: pointer; }\n\n.badge_item .slider_item {\n  width: 70px; }\n\n.u-name {\n  display: inline;\n  line-height: 1.5;\n  padding: 0 3px; }\n\n.badge_item.fore1 .u-name {\n  background: #ceaa62;\n  color: #fff; }\n\n.u-pic {\n  float: left;\n  margin-right: 10px;\n  position: relative;\n  width: 60px;\n  height: 60px;\n  -moz-border-radius: 50%;\n       border-radius: 50%;\n  border: solid 2px #f5f5f5;\n  overflow: hidden; }\n  .u-pic img {\n    width: 60px; }\n\n.u-plus {\n  padding: 10px 0 0;\n  overflow: hidden; }\n\n.u-msg {\n  font-family: 'Microsoft Yahei', 'simsun', sans-serif;\n  padding-top: 4px; }\n  .u-msg .style-red {\n    color: #c81623; }\n\n#ttbar-login.shortcut_userico_company .u-msg a {\n  color: #b79c6f; }\n\n#ttbar-login .shortcut_userico3 .u-pic a {\n  border-color: #e1c56c; }\n\n.o2_mini #ttbar-login.dropdown {\n  width: 140px;\n  overflow: visible;\n  white-space: normal;\n  text-align: left; }\n\n.userinfo_ico_icodropdown {\n  display: block; }\n\n.icobadage_plus {\n  background-repeat: no-repeat;\n  background-position: -59px 0;\n  background-image: url(" + n(2) + "); }\n\n.badge_dis .icobadage_plus {\n  background-repeat: no-repeat;\n  background-position: -177px -59px;\n  background-image: url(" + n(2) + "); }\n\n.icobadage_yfdm {\n  background-repeat: no-repeat;\n  background-position: 0 -59px;\n  background-image: url(" + n(2) + "); }\n\n.badge_dis .icobadage_yfdm {\n  background-repeat: no-repeat;\n  background-position: -59px -59px;\n  background-image: url(" + n(2) + "); }\n\n.icobadage_yfsm {\n  background-repeat: no-repeat;\n  background-position: -118px 0;\n  background-image: url(" + n(2) + "); }\n\n.badge_dis .icobadage_yfsm {\n  background-repeat: no-repeat;\n  background-position: -118px -59px;\n  background-image: url(" + n(2) + "); }\n\n.icobadage_srtq {\n  background-repeat: no-repeat;\n  background-position: 0 -118px;\n  background-image: url(" + n(2) + "); }\n\n.badge_dis .icobadage_srtq {\n  background-repeat: no-repeat;\n  background-position: -59px -118px;\n  background-image: url(" + n(2) + "); }\n\n.icobadage_sdtk {\n  background-repeat: no-repeat;\n  background-position: -118px -118px;\n  background-image: url(" + n(2) + "); }\n\n.badge_dis .icobadage_sdtk {\n  background-repeat: no-repeat;\n  background-position: -177px 0;\n  background-image: url(" + n(2) + "); }\n\n.icobadage_smhx {\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  background-image: url(" + n(2) + "); }\n\n.badge_dis .icobadage_smhx {\n  background-repeat: no-repeat;\n  background-position: -177px -118px;\n  background-image: url(" + n(2) + "); }\n\n.icobadage_jxzlb {\n  background-repeat: no-repeat;\n  background-position: 0 -177px;\n  background-image: url(" + n(2) + "); }\n\n.badge_dis .icobadage_jxzlb {\n  background-repeat: no-repeat;\n  background-position: -59px -177px;\n  background-image: url(" + n(2) + "); }\n\n.icobadage_gbzx {\n  background-repeat: no-repeat;\n  background-position: -118px -177px;\n  background-image: url(" + n(2) + "); }\n\n.badge_dis .icobadage_gbzx {\n  background-repeat: no-repeat;\n  background-position: -177px -177px;\n  background-image: url(" + n(2) + "); }\n\n.icobadage_qy_zxj {\n  background-repeat: no-repeat;\n  background-position: -236px 0;\n  background-image: url(" + n(2) + "); }\n\n.icobadage_qy_zzfp {\n  background-repeat: no-repeat;\n  background-position: -236px -59px;\n  background-image: url(" + n(2) + "); }\n\n.icobadage_qy_mfxz {\n  background-repeat: no-repeat;\n  background-position: -236px -118px;\n  background-image: url(" + n(2) + "); }\n\n.icobadage_qy_shsm {\n  background-repeat: no-repeat;\n  background-position: -236px -177px;\n  background-image: url(" + n(2) + "); }\n\n.icobadage_qy_zskf {\n  background-repeat: no-repeat;\n  background-position: 0 -236px;\n  background-image: url(" + n(2) + "); }\n\n@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min--moz-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 3 / 2), only screen and (min-device-pixel-ratio: 1.5) {\n  .icobadage_plus {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -56.5px 0;\n    background-image: url(" + n(3) + "); }\n  .badge_dis .icobadage_plus {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -169.5px -56.5px;\n    background-image: url(" + n(3) + "); }\n  .icobadage_yfdm {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: 0 -56.5px;\n    background-image: url(" + n(3) + "); }\n  .badge_dis .icobadage_yfdm {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -56.5px -56.5px;\n    background-image: url(" + n(3) + "); }\n  .icobadage_yfsm {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -113px 0;\n    background-image: url(" + n(3) + "); }\n  .badge_dis .icobadage_yfsm {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -113px -56.5px;\n    background-image: url(" + n(3) + "); }\n  .icobadage_srtq {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: 0 -113px;\n    background-image: url(" + n(3) + "); }\n  .badge_dis .icobadage_srtq {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -56.5px -113px;\n    background-image: url(" + n(3) + "); }\n  .icobadage_sdtk {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -113px -113px;\n    background-image: url(" + n(3) + "); }\n  .badge_dis .icobadage_sdtk {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -169.5px 0;\n    background-image: url(" + n(3) + "); }\n  .icobadage_smhx {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: 0 0;\n    background-image: url(" + n(3) + "); }\n  .badge_dis .icobadage_smhx {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -169.5px -113px;\n    background-image: url(" + n(3) + "); }\n  .icobadage_jxzlb {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: 0 -169.5px;\n    background-image: url(" + n(3) + "); }\n  .badge_dis .icobadage_jxzlb {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -56.5px -169.5px;\n    background-image: url(" + n(3) + "); }\n  .icobadage_gbzx {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -113px -169.5px;\n    background-image: url(" + n(3) + "); }\n  .badge_dis .icobadage_gbzx {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -169.5px -169.5px;\n    background-image: url(" + n(3) + "); }\n  .icobadage_qy_zxj {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -226px 0;\n    background-image: url(" + n(3) + "); }\n  .icobadage_qy_zzfp {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -226px -56.5px;\n    background-image: url(" + n(3) + "); }\n  .icobadage_qy_mfxz {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -226px -113px;\n    background-image: url(" + n(3) + "); }\n  .icobadage_qy_shsm {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: -226px -169.5px;\n    background-image: url(" + n(3) + "); }\n  .icobadage_qy_zskf {\n    background-repeat: no-repeat;\n    -moz-background-size: 280px 280px;\n         background-size: 280px 280px;\n    background-position: 0 -226px;\n    background-image: url(" + n(3) + "); } }\n", ""])
}, function (e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n(63);
    var i = n(0),
        r = _interopRequireDefault(i),
        o = n(19),
        a = _interopRequireDefault(o),
        l = n(65),
        c = _interopRequireDefault(l),
        s = n(67),
        u = _interopRequireDefault(s),
        d = n(20),
        f = _interopRequireDefault(d),
        p = n(21),
        m = _interopRequireDefault(p),
        h = n(22),
        g = _interopRequireDefault(h),
        v = n(23),
        _ = _interopRequireDefault(v),
        b = n(6),
        y = n(4),
        w = function () {
            $("#J_fs_act").delegate("[clstag]", "click", function (e) {
                var t = (0, b.getjQLogParams)(e),
                    n = t.url,
                    i = t.poi;
                n && i && (0, b.logClick)({
                    poi: i,
                    url: n,
                    comment: "背板"
                })
            })
        };
    t["default"] = function () {
        new a["default"]({
            $el: $(".J_cate")
        }).init();
        var e = document.getElementById("J_focus");
        if (r["default"].render(r["default"].createElement(c["default"], {
                ctn: e
            }), e), r["default"].render(r["default"].createElement(u["default"], null), document.getElementById("J_rec")), $("#J_user").removeClass("mod_loading"), r["default"].render(r["default"].createElement(f["default"], null), document.getElementById("J_user")), y.CONSTS.showNews) {
            var t = document.getElementById("J_news");
            t.innerHTML = "", r["default"].render(r["default"].createElement(m["default"], null), t)
        } else $(".J_news_tab").css({
            display: "block"
        }), new g["default"]({
            $el: $(".J_news")
        }).init();
        new _["default"]({
            container: $("#J_service"),
            col: $("#J_fs_col4")
        }).init(), w()
    }
}, function (e, t) {}, function (e, t) {}, function (e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        r = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }(),
        o = n(0),
        a = _interopRequireDefault(o);
    n(66);
    var l = n(4),
        c = n(7),
        s = n(1),
        u = n(6),
        d = n(18),
        f = _interopRequireDefault(d),
        p = function (e) {
            function Focus() {
                _classCallCheck(this, Focus);
                var e = _possibleConstructorReturn(this, (Focus.__proto__ || Object.getPrototypeOf(Focus)).apply(this, arguments));
                e.sliderOptions = {
                    arrows: !0,
                    indicators: !0,
                    indicatorHoverToSlide: !0,
                    fade: !0,
                    pauseOnHover: !0,
                    autoPlay: !0,
                    autoPlayInterval: 3e3,
                    easeType: "ease-in-out",
                    speed: 500
                }, e.clstagPrefix = l.CONSTS.CLSTAGPREFIX, e.poi = "head|focus", e.imgList = [], e.logSl = function () {
                    (0, u.logClick)({
                        poi: e.poi + "_sl",
                        comment: "首焦"
                    })
                }, e.logSr = function () {
                    (0, u.logClick)({
                        poi: e.poi + "_sr",
                        comment: "首焦"
                    })
                }, e.prevArrowText = a["default"].createElement("i", {
                    className: "iconfont",
                    clstag: e.clstagPrefix + "|" + e.poi + "_sl",
                    onClick: e.logSl
                }, ""), e.nextArrowText = a["default"].createElement("i", {
                    className: "iconfont",
                    clstag: e.clstagPrefix + "|" + e.poi + "_sr",
                    onClick: e.logSr
                }, ""), e.customIndicator = function (t) {
                    return a["default"].createElement("i", {
                        clstag: e.clstagPrefix + "|" + e.poi + "_s" + (0, s.padding)(1 + t, 2),
                        onClick: function () {
                            function onClick() {
                                (0, u.logClick)({
                                    poi: e.poi + "_s" + (0, s.padding)(1 + t, 2),
                                    comment: "首焦"
                                })
                            }
                            return onClick
                        }()
                    })
                }, e.imprMap = {
                    0: !0
                }, e.loadMap = {
                    0: !0,
                    1: !0
                }, e.beforeChange = function (t, n) {
                    var i = e.state.list.length;
                    e.loadImg(n), e.loadImg((n + 1) % i), e.sendClog(n, t), e.imprMap[n] || (e.sendImpr(n), e.imprMap[n] = !0)
                };
                var t = void 0;
                return t = pageConfig.focusData && pageConfig.focusData.length ? [pageConfig.focusData[0]] : [], e.props.ctn.innerHTML = "", e.state = {
                    enableActMark: pageConfig.enableActMark,
                    list: t
                }, e
            }
            return _inherits(Focus, e), r(Focus, [{
                key: "processData",
                value: function () {
                    function processData(e) {
                        var t = this,
                            n = function () {
                                function normalizeUrl(e) {
                                    var t = e || "";
                                    return t.replace(/url=([^?]+)$/, function (e, n) {
                                        t = n
                                    }), t
                                }
                                return normalizeUrl
                            }(),
                            r = [];
                        return [0, 1, 2, 4, 3, 5, 6, 7].forEach(function (t, i) {
                            if (e[t])
                                if (Array.isArray(e[t]))
                                    for (var o = e[t].concat(); o.length;) {
                                        var a = Math.floor(Math.random() * o.length),
                                            l = o.splice(a, 1)[0],
                                            c = n(l.href);
                                        if (-1 === $.inArray(c, r)) {
                                            r.push(c), e[t] = [l];
                                            break
                                        }
                                    } else {
                                        var s = e[t],
                                            u = n(s.href);
                                        r.push(u)
                                    }
                        }), e.map(function (e, n) {
                            var r = (0, s.getRandomData)(e),
                                o = r.ext_columns || {};
                            return pageConfig.clog.logDomain = pageConfig.clog.logDomain || e.logDomain, pageConfig.clog.logV = pageConfig.clog.logV || e.logV, r.img = 0 === n ? r.src : (0, s.processImage)(r.src, {
                                resize: ["590x470", "590x470"],
                                clip: "590x470",
                                replacem: n,
                                webp: !0
                            }), r.extColumns = i({
                                poi: t.poi + "_" + (0, s.padding)(1 + n, 2),
                                url: r.href
                            }, o), r
                        })
                    }
                    return processData
                }()
            }, {
                key: "requestData",
                value: function () {
                    function requestData() {
                        var e = this;
                        return (0, s.loadAsync)({
                            url: l.APIS.FOCUS,
                            name: "jsonpFocus",
                            params: {
                                pin: c.USER.pin,
                                uuid: c.USER.uuid,
                                jda: c.USER.jda
                            },
                            backup: [l.APIS.FOCUS_BACKUP, l.APIS.FOCUS_STOBACKUP],
                            retryTimes: 3,
                            timeout: 1e3,
                            reportBackupId: 1,
                            reportHidedFloor: 1,
                            dataCheck: function () {
                                function dataCheck(e) {
                                    if (e.data && $.isArray(e.data) && e.data.length >= 7) return !0
                                }
                                return dataCheck
                            }()
                        }).then(function (t) {
                            var n = e.state.list || [],
                                i = n.concat(t.data);
                            e.setState({
                                list: e.processData(i)
                            }, function () {
                                e.sendImpr(0), e.sendClog(0)
                            })
                        })
                    }
                    return requestData
                }()
            }, {
                key: "componentDidMount",
                value: function () {
                    function componentDidMount() {
                        this.requestData()
                    }
                    return componentDidMount
                }()
            }, {
                key: "getSliderItem",
                value: function () {
                    function getSliderItem(e, t) {
                        var n = this,
                            r = this.state.enableActMark,
                            o = Boolean(e.clog);
                        return o && -1 !== [2, 3, 5].indexOf(t + 1) && (o = "1" === e.sourceTag), a["default"].createElement("li", {
                            className: "focus_item"
                        }, a["default"].createElement("a", {
                            href: e.href,
                            className: "focus_item_lk",
                            clstag: this.clstagPrefix + "|" + this.poi + "_" + (0, s.padding)(1 + t, 2),
                            target: "_blank",
                            onClick: function () {
                                function onClick() {
                                    (0, u.logClick)(i({}, e.extColumns, {
                                        comment: "首焦"
                                    }))
                                }
                                return onClick
                            }()
                        }, t < 1 && r && a["default"].createElement("i", {
                            "class": "mod_actmark mod_actmark_focus"
                        }), t < 2 ? a["default"].createElement("img", {
                            className: "focus_item_img",
                            ref: function () {
                                function ref(e) {
                                    n.imgList[t] = e
                                }
                                return ref
                            }(),
                            src: e.src,
                            alt: e.alt
                        }) : a["default"].createElement("img", {
                            className: "focus_item_img",
                            ref: function () {
                                function ref(e) {
                                    n.imgList[t] = e
                                }
                                return ref
                            }(),
                            src: l.URLS.BLANK_IMG,
                            "data-src": e.src,
                            alt: e.alt
                        }), o && a["default"].createElement("i", {
                            className: "focus_item_atag"
                        })))
                    }
                    return getSliderItem
                }()
            }, {
                key: "loadImg",
                value: function () {
                    function loadImg(e) {
                        if (!this.loadMap[e]) {
                            this.loadMap[e] = !0;
                            var t = this.imgList[e],
                                n = t.getAttribute("data-src"),
                                i = new Image,
                                r = !1,
                                o = function () {
                                    function replaceSrc() {
                                        r || (r = !0, t.setAttribute("src", n), t.removeAttribute("data-src"))
                                    }
                                    return replaceSrc
                                }();
                            i.onload = o, i.src = n, i.complete && o()
                        }
                    }
                    return loadImg
                }()
            }, {
                key: "sendClog",
                value: function () {
                    function sendClog(e) {
                        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1,
                            n = this.state.list,
                            i = n[e];
                        if (-1 !== t) {
                            var r = n[t];
                            r.clog && !(0, u.isClogSent)(r.clog) && (0, u.cancelClog)(r.clog)
                        }
                        i.clog && (0, u.sendClog)({
                            clog: i.clog,
                            el: this.sliderDom,
                            monitor: !0
                        })
                    }
                    return sendClog
                }()
            }, {
                key: "sendImpr",
                value: function () {
                    function sendImpr(e) {
                        var t = this.state.list,
                            n = t[e],
                            r = n.extColumns;
                        (0, u.logImpr)(i({}, r, {
                            comment: "首焦"
                        }))
                    }
                    return sendImpr
                }()
            }, {
                key: "getSlider",
                value: function () {
                    function getSlider() {
                        var e = this,
                            t = this.state.list;
                        return a["default"].createElement(f["default"], i({
                            className: "focus_list J_focus_list"
                        }, this.sliderOptions, {
                            beforeChange: this.beforeChange,
                            afterChange: this.afterChange,
                            prevArrowText: this.prevArrowText,
                            nextArrowText: this.nextArrowText,
                            customIndicator: this.customIndicator
                        }), t.map(function (t, n) {
                            return e.getSliderItem(t, n)
                        }))
                    }
                    return getSlider
                }()
            }, {
                key: "render",
                value: function () {
                    function render() {
                        var e = this;
                        return a["default"].createElement("div", {
                            className: "J_focus_main focus_main",
                            ref: function () {
                                function ref(t) {
                                    e.sliderDom = t
                                }
                                return ref
                            }()
                        }, this.getSlider())
                    }
                    return render
                }()
            }]), Focus
        }(a["default"].Component);
    t["default"] = p
}, function (e, t) {}, function (e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        r = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }();
    n(68);
    var o = n(0),
        a = _interopRequireDefault(o),
        l = n(4),
        c = n(7),
        s = n(16),
        u = _interopRequireDefault(s),
        d = n(1),
        f = n(6),
        p = function (e) {
            function Rec() {
                _classCallCheck(this, Rec);
                var e = _possibleConstructorReturn(this, (Rec.__proto__ || Object.getPrototypeOf(Rec)).apply(this, arguments));
                return e.recLen = 3, e.clstagPrefix = l.CONSTS.CLSTAGPREFIX, e.poi = "head|recom", e.state = {
                    list: [{}, {}, {}]
                }, e
            }
            return _inherits(Rec, e), r(Rec, [{
                key: "monitor",
                value: function () {
                    function monitor(e) {
                        if (e) {
                            var t = new Image;
                            t.src = e + "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer) + "&random=" + Math.random(), t = null
                        }
                    }
                    return monitor
                }()
            }, {
                key: "errorMonitor",
                value: function () {
                    function errorMonitor(e, t) {
                        var n = l.APIS.REC_ERRLOG;
                        e ? e.length || this.monitor(n + "2") : /timeout/i.test(t) ? this.monitor(n + "3") : this.monitor(n + "4")
                    }
                    return errorMonitor
                }()
            }, {
                key: "processData",
                value: function () {
                    function processData(e) {
                        var t = this;
                        return e.map(function (e, n) {
                            var r = Array.isArray(e) ? (0, d.getRandomData)(e) : e,
                                o = r.ext_columns || {};
                            return r.url = r.t.replace(/^http(s?):/, ""), r.imgUrl = (0, d.processImage)(r.img, {
                                resize: ["380x300", "190x150"],
                                clip: "190x150",
                                replacem: r.id,
                                quality: 90
                            }), r.extColumns = i({
                                poi: t.poi + "_" + (0, d.padding)(1 + n, 2),
                                url: r.url
                            }, o), d.isInternational && 0 === n && (r.extColumns.poi = t.poi + "_04"), r
                        })
                    }
                    return processData
                }()
            }, {
                key: "getData",
                value: function () {
                    function getData() {
                        var e = this,
                            t = [],
                            n = void 0;
                        pageConfig.recData && Array.isArray(pageConfig.recData.data) && (t = pageConfig.recData.data, n = pageConfig.recData.impr);
                        var i = [];
                        t.forEach(function (e) {
                            e.isTop && i.push(e)
                        }), 0 >= this.recLen ? this.setState({
                            list: i
                        }) : (0, d.loadAsync)({
                            url: l.APIS.REC,
                            params: {
                                pin: c.USER.pin,
                                uuid: c.USER.uuid,
                                jda: c.USER.jda
                            },
                            backup: [l.APIS.REC_BACKUP, l.APIS.REC_STOBACKUP],
                            name: "jsonpRec",
                            retryTimes: 2,
                            timeout: 1e3,
                            reportBackupId: 2,
                            reportHidedFloor: 2,
                            dataCheck: function () {
                                function dataCheck(e) {
                                    if (2 !== e.errCode && e && e.data && e.data.length) return !0
                                }
                                return dataCheck
                            }()
                        }).then(function (t) {
                            for (var r = t.data.concat(); i.length < e.recLen && r.length;) {
                                var o = r.shift();
                                i.push(o)
                            }
                            e.setState({
                                list: e.processData(i)
                            }), (0, d.afterLoad)().then(function () {
                                var t = e.state.list;
                                t.forEach(function (e) {
                                    (0, f.logImpr)(e.extColumns)
                                }), n && e.monitor(n), e.errorMonitor(t)
                            })
                        })["catch"](function (t) {
                            (0, d.afterLoad)().then(function () {
                                e.errorMonitor(null, t.message)
                            })
                        })
                    }
                    return getData
                }()
            }, {
                key: "componentDidMount",
                value: function () {
                    function componentDidMount() {
                        this.getData()
                    }
                    return componentDidMount
                }()
            }, {
                key: "getRecItems",
                value: function () {
                    function getRecItems() {
                        var e = this.state.list,
                            t = this.clstagPrefix,
                            n = this.poi;
                        return e.map(function (e, i) {
                            var r = t + "|" + n + "_" + (0, d.padding)(1 + i, 2);
                            return d.isInternational && (r = t + "|" + n + "_04"), a["default"].createElement("div", {
                                className: "rec_item",
                                ref: function () {
                                    function ref(t) {
                                        e.clog && (0, f.sendClog)({
                                            clog: e.clog,
                                            el: t,
                                            monitor: !0
                                        })
                                    }
                                    return ref
                                }()
                            }, e.url ? a["default"].createElement("a", {
                                className: "rec_lk mod_loading",
                                href: e.url,
                                target: "_blank",
                                clstag: r,
                                onClick: function () {
                                    function onClick() {
                                        (0, f.logClick)(e.extColumns)
                                    }
                                    return onClick
                                }()
                            }, a["default"].createElement(u["default"], {
                                className: "J_rec_img rec_img",
                                src: e.imgUrl
                            })) : a["default"].createElement(u["default"], {
                                className: "J_rec_img rec_img",
                                src: e.imgUrl
                            }))
                        })
                    }
                    return getRecItems
                }()
            }, {
                key: "render",
                value: function () {
                    function render() {
                        return a["default"].createElement("div", {
                            className: "rec_inner"
                        }, this.getRecItems())
                    }
                    return render
                }()
            }]), Rec
        }(a["default"].Component);
    t["default"] = p
}, function (e, t) {}, function (e, t, n) {
    var i = n(70);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {};
    r.transform = void 0;
    n(9)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    t = e.exports = n(8)(undefined), t.push([e.i, ".lazyimg {\n  position: relative;\n  overflow: hidden;\n  background: #eee;\n  -webkit-transition: background 0.2s linear;\n  -o-transition: background 0.2s linear;\n  -moz-transition: background 0.2s linear;\n  transition: background 0.2s linear; }\n\n.lazyimg_img {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  -webkit-transition: opacity 0.2s linear;\n  -o-transition: opacity 0.2s linear;\n  -moz-transition: opacity 0.2s linear;\n  transition: opacity 0.2s linear;\n  -webkit-backface-visibility: hidden; }\n\n.lazyimg_loaded {\n  -webkit-transition: background 0.2s linear, opacity 0.2s linear !important;\n  -o-transition: background 0.2s linear, opacity 0.2s linear !important;\n  -moz-transition: background 0.2s linear, opacity 0.2s linear !important;\n  transition: background 0.2s linear, opacity 0.2s linear !important;\n  /* transition: background .2s linear; */\n  background: transparent; }\n\n.lazyimg_loaded .lazyimg_img {\n  opacity: 1; }\n", ""])
}, function (e, t) {}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(4),
        a = function (e) {
            var t = e.isLogin,
                n = e.nickName,
                i = e.homeUrl,
                a = e.isCompany,
                l = e.spoint,
                c = e.userLevelTxt,
                s = e.logoutUrl,
                u = void 0,
                d = void 0;
            return t ? (u = r["default"].createElement("p", null, r["default"].createElement("i", {
                className: "user_plusico"
            }), "Hi，", r["default"].createElement("a", {
                href: i,
                target: "_blank"
            }, n)), d = a ? r["default"].createElement("p", {
                className: "user_sl"
            }, r["default"].createElement("a", {
                className: "user_company",
                href: o.URLS.COMPANY_BVIP,
                target: "_blank",
                title: "企业会员"
            }, r["default"].createElement("i", {
                className: "user_company_ico"
            }), "企业会员"), r["default"].createElement("a", {
                className: "user_logout",
                href: s
            }, "退出")) : r["default"].createElement("p", {
                className: "user_sl"
            }, r["default"].createElement("a", {
                className: "user_spoint",
                href: "//vip.jd.com/",
                target: "_blank",
                title: "京享值" + (l || "")
            }, r["default"].createElement("i", {
                className: "user_spoint_ico"
            })), r["default"].createElement("a", {
                className: "user_lv",
                href: "//vip.jd.com",
                target: "_blank",
                title: c
            }, r["default"].createElement("i", {
                className: "user_lvico"
            })), r["default"].createElement("a", {
                className: "user_logout",
                href: s
            }, "退出"))) : (u = n && n.length ? r["default"].createElement("p", null, "Hi,", " ", r["default"].createElement("a", {
                href: i,
                target: "_blank"
            }, n)) : r["default"].createElement("p", {
                className: "user_tip"
            }, "Hi~欢迎来到京东！"), d = r["default"].createElement("p", null, r["default"].createElement("a", {
                href: "javascript:login();",
                className: "user_login"
            }, "登录"), r["default"].createElement("a", {
                href: "javascript:regist();",
                className: "user_reg"
            }, "注册"))), r["default"].createElement("div", {
                className: "user_show"
            }, u, d)
        };
    t["default"] = a
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(4),
        a = function (e) {
            var t = e.btnReady,
                n = e.isNew,
                i = e.isLogin,
                a = e.isCompany,
                l = e.clstagPrefix,
                c = e.plusUrl,
                s = e.xinrenUrl,
                u = e.vipUrl,
                d = e.vipPromo,
                f = void 0;
            return f = a ? r["default"].createElement("a", {
                className: "user_profit_lk user_profit_lk_long user_profit_lk_company",
                href: o.URLS.COMPANY_B,
                target: "_blank",
                clstag: l + "_04"
            }, "企业专享价格多采多惠") : !n && i && t ? r["default"].createElement("a", {
                className: "user_profit_lk user_profit_lk_long",
                href: u,
                target: "_blank",
                clstag: l + "_04"
            }, d) : [r["default"].createElement("a", {
                className: "user_profit_lk",
                href: s,
                target: "_blank",
                clstag: l + "_02"
            }, "新人福利"), r["default"].createElement("a", {
                className: "user_profit_lk user_profit_lk_plus",
                href: c,
                target: "_blank",
                clstag: l + "_03"
            }, "PLUS会员")], r["default"].createElement("div", {
                className: "user_profit"
            }, t ? f : "")
        };
    t["default"] = a
}, function (e, t, n) {
    var i = n(75);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {};
    r.transform = void 0;
    n(9)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    t = e.exports = n(8)(undefined), t.push([e.i, ".news2 {\n  overflow: hidden;\n  height: 130px;\n  background: #fff; }\n  .news2 .news_hd {\n    padding: 8px 0 0;\n    position: relative;\n    line-height: 13px;\n    font-size: 0; }\n  .news2 .news_list {\n    position: relative;\n    padding-top: 8px;\n    margin: 0 15px;\n    height: 88px; }\n  .news2 .news_tit {\n    display: inline-block;\n    font-size: 13px;\n    margin-left: 15px;\n    color: #1e1e1e; }\n  .news2 .news_more {\n    position: absolute;\n    right: 12px;\n    top: 8px;\n    font-size: 12px;\n    color: #999; }\n    .news2 .news_more:hover {\n      color: currentColor; }\n  .news2 .news_item {\n    line-height: 21px;\n    max-width: 160px;\n    _width: 160px;\n    white-space: nowrap;\n    -o-text-overflow: ellipsis;\n       text-overflow: ellipsis;\n    overflow: hidden;\n    color: #999; }\n    .news2 .news_item.news_item_0 {\n      color: #8c9fac;\n      border-left-color: #8c9fac; }\n\n.news_tag {\n  display: inline-block;\n  position: relative;\n  font-size: 12px;\n  height: 16px;\n  width: 35px;\n  line-height: 16px;\n  text-align: center;\n  vertical-align: 0;\n  -moz-border-radius: 2px;\n       border-radius: 2px;\n  color: #fff;\n  background-color: #e47f7f;\n  margin-right: 6px; }\n  .news_item__0 .news_tag {\n    background-color: #90b0c6; }\n  .news_item__1 .news_tag {\n    background-color: #e0b95a; }\n", ""])
}, function (e, t) {}, function (e, t) {}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i);
    t["default"] = function (e) {
        return r["default"].createElement("svg", null, r["default"].createElement("use", {
            xlinkHref: "#icon_baitiao"
        }))
    }
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i);
    t["default"] = function (e) {
        return r["default"].createElement("svg", null, r["default"].createElement("use", {
            xlinkHref: "#icon_dianyingpiao"
        }))
    }
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i);
    t["default"] = function (e) {
        return r["default"].createElement("svg", null, r["default"].createElement("use", {
            xlinkHref: "#icon_huafei"
        }))
    }
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i);
    t["default"] = function (e) {
        return r["default"].createElement("svg", null, r["default"].createElement("use", {
            xlinkHref: "#icon_huochepiao"
        }))
    }
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i);
    t["default"] = function (e) {
        return r["default"].createElement("svg", null, r["default"].createElement("use", {
            xlinkHref: "#icon_jiayouka"
        }))
    }
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i);
    t["default"] = function (e) {
        return r["default"].createElement("svg", null, r["default"].createElement("use", {
            xlinkHref: "#icon_jipiao"
        }))
    }
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i);
    t["default"] = function (e) {
        return r["default"].createElement("svg", null, r["default"].createElement("use", {
            xlinkHref: "#icon_jiudian"
        }))
    }
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i);
    t["default"] = function (e) {
        return r["default"].createElement("svg", null, r["default"].createElement("use", {
            xlinkHref: "#icon_licai"
        }))
    }
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i);
    t["default"] = function (e) {
        return r["default"].createElement("svg", null, r["default"].createElement("use", {
            xlinkHref: "#icon_lipinka"
        }))
    }
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i);
    t["default"] = function (e) {
        return r["default"].createElement("svg", null, r["default"].createElement("use", {
            xlinkHref: "#icon_qiyegou"
        }))
    }
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i);
    t["default"] = function (e) {
        return r["default"].createElement("svg", null, r["default"].createElement("use", {
            xlinkHref: "#icon_youxi"
        }))
    }
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i);
    t["default"] = function (e) {
        return r["default"].createElement("svg", null, r["default"].createElement("use", {
            xlinkHref: "#icon_zhongchou"
        }))
    }
}, function (e, t, n) {
    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        r = function () {
            function sliceIterator(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = undefined;
                try {
                    for (var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                } catch (c) {
                    r = !0, o = c
                } finally {
                    try {
                        !i && l["return"] && l["return"]()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }
            return function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return sliceIterator(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        o = function () {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }(),
        a = n(0),
        l = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(a),
        c = n(1),
        s = n(6);
    n(91);
    var u = n(4),
        d = n(7),
        f = 0,
        p = 0,
        m = 1518455;
    window.addEventListener("resize", function () {
        var e = function () {
            f = $(window).height()
        };
        return e(), e
    }()), window.addEventListener("scroll", function () {
        p = window.pageYOffset
    });
    var h = function (e) {
        function Logo() {
            var e, t, n, i;
            _classCallCheck(this, Logo);
            for (var o = arguments.length, l = Array(o), d = 0; d < o; d++) l[d] = arguments[d];
            return t = n = _possibleConstructorReturn(this, (e = Logo.__proto__ || Object.getPrototypeOf(Logo)).call.apply(e, [this].concat(l))), n.poiPrefix = "head|logo", n.domInfo = {}, n.showState = !1, n.showLimit = 2, n.isAnimating = !1, n.animationDuration = 5200, n.replayTimer = null, n.hideTimer = null, n.showTextTimer = null, n.showTextStamp = 2600, n.shouldStopCycling = !0, n.showCount = 0, n.isInterruptable = !1, n.imageDom = null, n.enterStamp = null, n.logObj = {}, n.lastImage = null, n.isHovered = !1, n.isHover = !1, n.isOld = !1, n.state = {
                url: "//www.jd.com",
                text: null,
                imprUrl: null,
                clkUrl: null
            }, n.getImageRef = function (e) {
                var t = (0, a.findDOMNode)(e);
                null !== t && (n.imageDom = t)
            }, n.getSceneDom = function (e) {
                var t = (0, a.findDOMNode)(e);
                null !== t && (n.sceneDom = t)
            }, n.processData = function (e) {
                var t = e.data;
                u.SHOWNTHEMES.push(t.theme_id);
                var i = t.joy_word.split("$"),
                    o = r(i, 4),
                    a = o[0],
                    l = o[1],
                    c = l === undefined ? "#555" : l,
                    s = o[2],
                    d = s === undefined ? "#fff" : s,
                    f = o[3],
                    p = f === undefined ? "#555" : f,
                    h = {
                        url: u.URLS.JOY + "?babelChannel=" + m + "&activityId=" + t.theme_id + "&source=01",
                        imgUrl: t.joy_image_url + "?v=" + Math.random(),
                        text: a,
                        color: c,
                        btnColor: p,
                        btnBgColor: d,
                        imprUrl: t.exposal_url,
                        clkUrl: t.click_url,
                        extColumns: t.ext_columns || {}
                    };
                return -1 === t.joy_word.indexOf("$") && (n.isOld = !0, n.animationDuration = 4200), Promise.resolve(h)
            }, n.shouldFadeout = !1, n.onScroll = (0, c.throttle)(function () {
                var e = p <= n.domInfo.top + n.domInfo.height && p + f >= n.domInfo.top;
                e !== n.showState && (n.showState = e, n.showState && (n.showCount >= n.showLimit || n.ensureIdle(function () {
                    n.isInterruptable = !1, n.isHover = !1, n.startAnimateLogo()
                })))
            }), n.onLogoMouseenter = function () {
                n.shouldStopCycling = !1, n.isHover = !0, n.enterStamp = Date.now(), n.isAnimating || (n.isHovered = !0), n.ensureIdle(function () {
                    n.startAnimateLogo(!0)
                })
            }, n.onLogoMouseleave = function () {
                n.shouldStopCycling = !0, n.shouldFadeout && (n.shouldFadeout = !1, n.fadeOut()), n.isOld && n.isInterruptable && (n.replayTimer && clearTimeout(n.replayTimer), n.showTextTimer && clearTimeout(n.showTextTimer), n.shouldStopCycling = !0, n.fadeOut()), n.enterStamp && (0, s.logImpr)(n.getRealLogObj()), n.enterStamp = null
            }, n.onLogoClick = function (e) {
                var t = n.state.clkUrl;
                n.sendLog(t), (0, s.logClick)(n.logObj)
            }, n.sendImpl = function () {
                n._hasSentImpl || ((0, s.logImpr)({
                    poi: "head|logo|03",
                    url: (0, s.processUrl)(n.state.url),
                    comment: "京东logo"
                }), n._hasSentImpl = !0)
            }, i = t, _possibleConstructorReturn(n, i)
        }
        return _inherits(Logo, e), o(Logo, [{
            key: "requestData",
            value: function () {
                function requestData() {
                    var e = void 0;
                    if ((0, c.isdebug)(21)) e = n.e(22).then(n.bind(null, 117)).then(function (e) {
                        return e["default"]
                    });
                    else {
                        var t = {
                            pin: d.USER.pin,
                            uuid: d.USER.uuid
                        };
                        e = (0, c.loadAsync)({
                            url: u.APIS.LOGO,
                            name: "jsonpLogo",
                            params: t,
                            backup: u.APIS.LOGO_BAK,
                            reportBackupId: 27,
                            reportHidedFloor: 27
                        })
                    }
                    return e
                }
                return requestData
            }()
        }, {
            key: "verifyData",
            value: function () {
                function verifyData(e) {
                    var t = new Error("Logo dataCheck failed");
                    if (!e) return Promise.reject(t);
                    if (!e.data) return Promise.reject(t);
                    var n = e.data;
                    return n.joy_image_url && n.joy_word && n.theme_id ? Promise.resolve(e) : Promise.reject(t)
                }
                return verifyData
            }()
        }, {
            key: "loadImage",
            value: function () {
                function loadImage(e) {
                    return new Promise(function (t, n) {
                        var i = e.imgUrl,
                            r = new Image,
                            o = !1;
                        if (r.onload = function () {
                                if (o) return void(r.onload = null);
                                t(e), o = !0, r.onload = null
                            }, r.src = i, r.complete) {
                            if (o) return void(r.onload = null);
                            t(e), o = !0, r.onload = null
                        }
                        r.onerror = function () {
                            n(e)
                        }
                    })
                }
                return loadImage
            }()
        }, {
            key: "getRealLogObj",
            value: function () {
                function getRealLogObj() {
                    var e = Object.assign({}, this.logObj),
                        t = e.desc;
                    return e.desc = this.isHover ? t + "#hover-" + (Date.now() - this.enterStamp) : t + "#exposal", e
                }
                return getRealLogObj
            }()
        }, {
            key: "startAnimateLogo",
            value: function () {
                function startAnimateLogo() {
                    var e = this,
                        t = arguments.length > 0 && arguments[0] !== undefined && arguments[0],
                        n = 8 === document.documentMode || 9 === document.documentMode,
                        r = t ? "logo_scene_withBg" : "",
                        o = n ? "logo_scene_legacy" : "",
                        a = "logo_scene_animateend",
                        l = void 0;
                    this.isHover && this.lastImage ? l = this.lastImage : (l = this.requestData().then(this.verifyData), this.lastImage = l),
                        function () {
                            function requestAnimation() {
                                e.isAnimating && l.then(e.processData).then(e.loadImage).then(function (t) {
                                    var l = t.imgUrl,
                                        c = t.url,
                                        u = t.text,
                                        d = t.color,
                                        f = t.btnColor,
                                        p = t.btnBgColor,
                                        m = t.imprUrl,
                                        h = t.clkUrl,
                                        g = t.extColumns;
                                    e.isAnimating && (e.hideTimer && clearTimeout(e.hideTimer), e.logObj = i({}, g, {
                                        desc: g.desc.replace(/\$#[0-9a-f]{6}\$#[0-9a-f]{6}\$#[0-9a-f]{6}/, ""),
                                        poi: e.poiPrefix + "|03",
                                        url: c,
                                        comment: "百变Logo"
                                    }), e.sceneDom.className = "logo_scene " + r, e.sceneDom.offsetWidth, e.sceneDom.className = "logo_scene " + a + " " + r + " " + o, e.isHover || e.showCount++, e.imageDom.style.backgroundImage = "url(" + l + ")", e.showTextTimer && clearTimeout(e.showTextTimer), e.showTextTimer = setTimeout(function () {
                                        if (n && (e.sceneDom.className = "logo_scene " + a + " " + r), e.isHovered) {
                                            var t = i({}, e.logObj, {
                                                desc: e.logObj.desc + "#complete-" + e.animationDuration
                                            });
                                            (0, s.logImpr)(t)
                                        }
                                    }, e.showTextStamp), e.replayTimer && clearTimeout(e.replayTimer), e.replayTimer = setTimeout(function () {
                                        e.isInterruptable = !0, e.shouldStopCycling ? e.fadeOut() : (e.shouldFadeout = !0, e.isOld && requestAnimation())
                                    }, e.animationDuration), e.sendLog(m), e.sendImpl(), e.isHover || (0, s.logImpr)(e.getRealLogObj()), e.setState({
                                        url: c,
                                        text: u,
                                        color: d,
                                        btnColor: f,
                                        btnBgColor: p,
                                        imprUrl: m,
                                        clkUrl: h
                                    }))
                                })["catch"](function (t) {
                                    e.isAnimating = !1, e.replayTimer && clearTimeout(e.replayTimer), e.showTextTimer && clearTimeout(e.showTextTimer), e.hideTimer && clearTimeout(e.hideTimer), c.dconsole.log(t)
                                })
                            }
                            return requestAnimation
                        }()()
                }
                return startAnimateLogo
            }()
        }, {
            key: "ensureIdle",
            value: function () {
                function ensureIdle(e) {
                    if (this.isAnimating) return !1;
                    this.isAnimating = !0, e()
                }
                return ensureIdle
            }()
        }, {
            key: "sendLog",
            value: function () {
                function sendLog(e) {
                    (new Image).src = e
                }
                return sendLog
            }()
        }, {
            key: "fadeOut",
            value: function () {
                function fadeOut() {
                    var e = this;
                    this.isAnimating = !1, this.sceneDom.className = "logo_scene logo_scene_fade", this.sceneDom.offsetWidth, this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = setTimeout(function () {
                        e.isHovered = !1, e.sceneDom.className = "logo_scene logo_scene_hide", e.sceneDom.offsetWidth
                    }, 800)
                }
                return fadeOut
            }()
        }, {
            key: "componentDidMount",
            value: function () {
                function componentDidMount() {
                    this.domInfo = (0, c.getDomInfo)(l["default"].findDOMNode(this)), window.addEventListener("scroll", this.onScroll), this.onScroll()
                }
                return componentDidMount
            }()
        }, {
            key: "componentWillUnmount",
            value: function () {
                function componentWillUnmount() {
                    window.removeEventListener("scroll", this.onScroll)
                }
                return componentWillUnmount
            }()
        }, {
            key: "render",
            value: function () {
                function render() {
                    var e = this.state,
                        t = e.url,
                        n = e.text,
                        i = e.color,
                        r = e.btnColor,
                        o = e.btnBgColor;
                    return l["default"].createElement("a", {
                        href: t,
                        className: "logo_scene",
                        target: "_blank",
                        onClick: this.onLogoClick,
                        ref: this.getSceneDom,
                        clstag: u.CONSTS.CLSTAGPREFIX + "|" + this.poiPrefix + "_03"
                    }, l["default"].createElement("div", {
                        className: "logo_scene_img",
                        ref: this.getImageRef
                    }), l["default"].createElement("span", {
                        className: "logo_scene_text",
                        style: {
                            color: i
                        },
                        dangerouslySetInnerHTML: {
                            __html: n
                        }
                    }), this.isOld || l["default"].createElement("span", {
                        className: "logo_scene_btn",
                        style: {
                            color: r,
                            backgroundColor: o
                        }
                    }, "去看看>"))
                }
                return render
            }()
        }]), Logo
    }(a.Component);
    t["default"] = function () {
        if (!$("#J_logo_extend").length || (0, c.isdebug)(22)) {
            var e = document.getElementById("logo"),
                t = l["default"].createElement(h, null);
            l["default"].render(t, e), e.addEventListener("mouseenter", function () {
                t.component.onLogoMouseenter()
            }), e.addEventListener("mouseleave", function () {
                t.component.onLogoMouseleave()
            })
        }
    }
}, function (e, t, n) {
    var i = n(92);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {};
    r.transform = void 0;
    n(9)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    t = e.exports = n(8)(undefined), t.push([e.i, ".logo_scene {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  text-align: center; }\n\n.logo_scene_img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  clear: both; }\n\n.logo_scene_text {\n  position: absolute;\n  left: 35px;\n  bottom: 77px;\n  display: inline-block;\n  width: 120px;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: bold;\n  background: transparent;\n  color: #555;\n  text-align: center;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  z-index: 1; }\n\n.logo_scene_btn {\n  position: absolute;\n  width: 60px;\n  height: 20px;\n  top: 105px;\n  left: 50%;\n  margin-left: -32px;\n  text-indent: 4px;\n  /* font-weight: bold; */\n  color: #555;\n  font-size: 12px;\n  line-height: 20px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: #fff;\n  -moz-border-radius: 11px;\n       border-radius: 11px;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n\n.logo_scene_withBg {\n  background: #fff; }\n\n.logo_scene_animateend .logo_scene_img {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  -webkit-transition: opacity 0.2s 0.1s linear;\n  -o-transition: opacity 0.2s 0.1s linear;\n  -moz-transition: opacity 0.2s 0.1s linear;\n  transition: opacity 0.2s 0.1s linear; }\n\n.logo_scene_animateend .logo_scene_text,\n.logo_scene_animateend .logo_scene_btn {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  -webkit-transition: opacity 0.2s 2.6s linear;\n  -o-transition: opacity 0.2s 2.6s linear;\n  -moz-transition: opacity 0.2s 2.6s linear;\n  transition: opacity 0.2s 2.6s linear; }\n\n.logo_scene_legacy .logo_scene_text,\n.logo_scene_legacy .logo_scene_btn {\n  display: none; }\n\n.logo_scene_fade .logo_scene_img,\n.logo_scene_fade .logo_scene_text,\n.logo_scene_fade .logo_scene_btn {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -webkit-transition: opacity 0.6s linear;\n  -o-transition: opacity 0.6s linear;\n  -moz-transition: opacity 0.6s linear;\n  transition: opacity 0.6s linear; }\n\n.logo_scene_hide {\n  display: none; }\n", ""])
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1),
        a = (0, r["default"])({
            loader: function () {
                function loader() {
                    return n.e(10).then(n.bind(null, 118))
                }
                return loader
            }(),
            loading: o.loadingPlaceholder.bind(null, {
                height: "275px",
                marginBottom: "30px"
            }),
            delay: 0
        });
    t["default"] = a
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1),
        a = (0, r["default"])({
            loader: function () {
                function loader() {
                    return n.e(0).then(n.bind(null, 119))
                }
                return loader
            }(),
            loading: o.loadingPlaceholder.bind(null, {
                height: "480px"
            }),
            delay: 0
        });
    t["default"] = a
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1),
        a = (0, r["default"])({
            loader: function () {
                function loader() {
                    return n.e(0).then(n.bind(null, 120))
                }
                return loader
            }(),
            loading: o.loadingPlaceholder.bind(null, {
                height: "480px"
            }),
            delay: 0
        });
    t["default"] = a
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1),
        a = (0, r["default"])({
            loader: function () {
                function loader() {
                    return n.e(13).then(n.bind(null, 121))
                }
                return loader
            }(),
            loading: o.loadingPlaceholder.bind(null),
            delay: 0
        });
    t["default"] = a
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1),
        a = (0, r["default"])({
            loader: function () {
                function loader() {
                    return n.e(9).then(n.bind(null, 122))
                }
                return loader
            }(),
            loading: o.loadingPlaceholder.bind(null, {
                height: "280px"
            }),
            delay: 0
        });
    t["default"] = a
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1),
        a = (0, r["default"])({
            loader: function () {
                function loader() {
                    return n.e(3).then(n.bind(null, 123))
                }
                return loader
            }(),
            loading: o.loadingPlaceholder.bind(null, {
                height: o.isWide ? "450px" : "375px;"
            }),
            delay: 0
        });
    t["default"] = a
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1),
        a = (0, r["default"])({
            loader: function () {
                function loader() {
                    return n.e(15).then(n.bind(null, 109))
                }
                return loader
            }(),
            loading: o.loadingPlaceholder.bind(null, {
                height: "65px",
                backgroundImage: "none"
            }),
            delay: 0
        });
    t["default"] = a
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1),
        a = (0, r["default"])({
            loader: function () {
                function loader() {
                    return n.e(8).then(n.bind(null, 124))
                }
                return loader
            }(),
            loading: o.loadingPlaceholder.bind(null, {
                height: "585px"
            }),
            delay: 0
        });
    t["default"] = a
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1),
        a = (0, r["default"])({
            loader: function () {
                function loader() {
                    return n.e(7).then(n.bind(null, 125))
                }
                return loader
            }(),
            loading: o.loadingPlaceholder.bind(null, {
                height: "450px"
            }),
            delay: 0
        });
    t["default"] = a
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1),
        a = (0, r["default"])({
            loader: function () {
                function loader() {
                    return n.e(6).then(n.bind(null, 126))
                }
                return loader
            }(),
            loading: o.loadingPlaceholder.bind(null, {
                height: "550px"
            }),
            delay: 0
        });
    t["default"] = a
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1);
    t["default"] = function (e) {
        return (0, r["default"])({
            loader: function () {
                function loader() {
                    return n.e(11).then(n.bind(null, 127))
                }
                return loader
            }(),
            loading: o.loadingPlaceholder.bind(null, {
                height: e + "px"
            }),
            delay: 0
        })
    }
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1),
        a = (0, r["default"])({
            loader: function () {
                function loader() {
                    return n.e(2).then(n.bind(null, 128))
                }
                return loader
            }(),
            loading: o.loadingPlaceholder.bind(null, {
                height: "730px"
            }),
            delay: 0
        });
    t["default"] = a
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1),
        a = (0, r["default"])({
            loader: function () {
                function loader() {
                    return n.e(5).then(n.bind(null, 129))
                }
                return loader
            }(),
            loading: o.loadingPlaceholder.bind(null, {
                height: "730px"
            }),
            delay: 0
        });
    t["default"] = a
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        r = function (e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i),
        o = n(1),
        a = (0, r["default"])({
            loader: function () {
                function loader() {
                    return n.e(12).then(n.bind(null, 130))
                }
                return loader
            }(),
            loading: o.loadingPlaceholder.bind(null, {
                height: "500px"
            }),
            delay: 0
        });
    t["default"] = a
}, function (e, t, n) {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initJoytop = undefined;
    var i = n(0),
        r = _interopRequireDefault(i),
        o = n(5),
        a = _interopRequireDefault(o),
        l = (0, a["default"])({
            loader: function () {
                function loader() {
                    return n.e(14).then(n.bind(null, 131))
                }
                return loader
            }(),
            loading: function () {
                function loading() {
                    return r["default"].createElement("div", null)
                }
                return loading
            }(),
            delay: 0
        }),
        c = function () {
            var e = $("#app"),
                t = document.createElement("div");
            e.prepend(t), $(function () {
                $("#J_event").css("display", "none")
            }), r["default"].render(r["default"].createElement(l, null), t)
        };
    t.initJoytop = c
}, function (e, t, n) {
    var i = {
        staff: "%c本页面由%c 凹凸实验室（JDC-多终端研发部） %c负责开发，你可以通过 https://aotu.io 了解我们。\n\n如果你对我们在做的事情也有兴趣，欢迎加入 %caotu@jd.com%c（注明来自console）\n\n",
        freshTec: "%c本项目骄傲的使用了 凹凸实验室 出品的Nerv框架，相关内容及生态你可以通过官网了解更多。\nhttps://nerv.aotu.io/%c\n\n",
        funExp: "%c%c"
    };
    ! function () {
        if (window.console && console.log && navigator.userAgent.toLowerCase().match(/chrome\/([\d.]+)/)) {
            var e = i.staff + i.freshTec + i.funExp;
            e = e.replace(/%c/g, ""), e = "%c" + e, console.log(e, "color: #6190e8;")
        }
    }()
}]);