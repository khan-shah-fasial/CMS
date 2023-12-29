/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document)
                        throw new Error(
                            "jQuery requires a window with a document"
                        );
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType;
        },
        y = function e(t) {
            return null != t && t === t.window;
        },
        v = { type: !0, src: !0, noModule: !0 };
    function m(e, t, n) {
        var i,
            o = (t = t || r).createElement("script");
        if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o);
    }
    function x(e) {
        return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? l[c.call(e)] || "object"
            : typeof e;
    }
    var b = "3.3.1",
        w = function (e, t) {
            return new w.fn.init(e, t);
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (w.fn = w.prototype =
        {
            jquery: "3.3.1",
            constructor: w,
            length: 0,
            toArray: function () {
                return o.call(this);
            },
            get: function (e) {
                return null == e
                    ? o.call(this)
                    : e < 0
                    ? this[e + this.length]
                    : this[e];
            },
            pushStack: function (e) {
                var t = w.merge(this.constructor(), e);
                return (t.prevObject = this), t;
            },
            each: function (e) {
                return w.each(this, e);
            },
            map: function (e) {
                return this.pushStack(
                    w.map(this, function (t, n) {
                        return e.call(t, n, t);
                    })
                );
            },
            slice: function () {
                return this.pushStack(o.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: s,
            sort: n.sort,
            splice: n.splice,
        }),
        (w.extend = w.fn.extend =
            function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for (
                    "boolean" == typeof a &&
                        ((l = a), (a = arguments[s] || {}), s++),
                        "object" == typeof a || g(a) || (a = {}),
                        s === u && ((a = this), s--);
                    s < u;
                    s++
                )
                    if (null != (e = arguments[s]))
                        for (t in e)
                            (n = a[t]),
                                a !== (r = e[t]) &&
                                    (l &&
                                    r &&
                                    (w.isPlainObject(r) ||
                                        (i = Array.isArray(r)))
                                        ? (i
                                              ? ((i = !1),
                                                (o =
                                                    n && Array.isArray(n)
                                                        ? n
                                                        : []))
                                              : (o =
                                                    n && w.isPlainObject(n)
                                                        ? n
                                                        : {}),
                                          (a[t] = w.extend(l, o, r)))
                                        : void 0 !== r && (a[t] = r));
                return a;
            }),
        w.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return (
                    !(!e || "[object Object]" !== c.call(e)) &&
                    (!(t = i(e)) ||
                        ("function" ==
                            typeof (n =
                                f.call(t, "constructor") && t.constructor) &&
                            p.call(n) === d))
                );
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e) {
                m(e);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (C(e)) {
                    for (n = e.length; r < n; r++)
                        if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(T, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return (
                    null != e &&
                        (C(Object(e))
                            ? w.merge(n, "string" == typeof e ? [e] : e)
                            : s.call(n, e)),
                    n
                );
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
                    (r = !t(e[o], o)) !== s && i.push(e[o]);
                return i;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    s = [];
                if (C(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && s.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return a.apply([], s);
            },
            guid: 1,
            support: h,
        }),
        "function" == typeof Symbol &&
            (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (e, t) {
                l["[object " + t + "]"] = t.toLowerCase();
            }
        );
    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return (
            !g(e) &&
            !y(e) &&
            ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
        );
    }
    var E = (function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            y,
            v,
            m,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function (e, t) {
                return e === t && (f = !0), 0;
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1;
            },
            P =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I =
                "\\[" +
                M +
                "*(" +
                R +
                ")(?:" +
                M +
                "*([*^$|!~]?=)" +
                M +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                R +
                "))|)" +
                M +
                "*\\]",
            W =
                ":(" +
                R +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                I +
                ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp(
                "^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$",
                "g"
            ),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        M +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        M +
                        "*(?:([+-]|)" +
                        M +
                        "*(\\d+)|))" +
                        M +
                        "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                        M +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        M +
                        "*((?:-\\d)?\\d*)" +
                        M +
                        "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n
                    ? t
                    : r < 0
                    ? String.fromCharCode(r + 65536)
                    : String.fromCharCode(
                          (r >> 10) | 55296,
                          (1023 & r) | 56320
                      );
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t
                    ? "\0" === e
                        ? "\ufffd"
                        : e.slice(0, -1) +
                          "\\" +
                          e.charCodeAt(e.length - 1).toString(16) +
                          " "
                    : "\\" + e;
            },
            re = function () {
                p();
            },
            ie = me(
                function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            L.apply((A = H.call(w.childNodes)), w.childNodes),
                A[w.childNodes.length].nodeType;
        } catch (e) {
            L = {
                apply: A.length
                    ? function (e, t) {
                          q.apply(e, H.call(t));
                      }
                    : function (e, t) {
                          var n = e.length,
                              r = 0;
                          while ((e[n++] = t[r++]));
                          e.length = n - 1;
                      },
            };
        }
        function oe(e, t, r, i) {
            var o,
                s,
                l,
                c,
                f,
                h,
                v,
                m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
            )
                return r;
            if (
                !i &&
                ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
            ) {
                if (11 !== T && (f = J.exec(e)))
                    if ((o = f[1])) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r;
                        } else if (
                            m &&
                            (l = m.getElementById(o)) &&
                            x(t, l) &&
                            l.id === o
                        )
                            return r.push(l), r;
                    } else {
                        if (f[2])
                            return L.apply(r, t.getElementsByTagName(e)), r;
                        if (
                            (o = f[3]) &&
                            n.getElementsByClassName &&
                            t.getElementsByClassName
                        )
                            return L.apply(r, t.getElementsByClassName(o)), r;
                    }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) (m = t), (v = e);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id"))
                            ? (c = c.replace(te, ne))
                            : t.setAttribute("id", (c = b)),
                            (s = (h = a(e)).length);
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        (v = h.join(",")),
                            (m = (K.test(e) && ge(t.parentNode)) || t);
                    }
                    if (v)
                        try {
                            return L.apply(r, m.querySelectorAll(v)), r;
                        } catch (e) {
                        } finally {
                            c === b && t.removeAttribute("id");
                        }
                }
            }
            return u(e.replace(B, "$1"), t, r, i);
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return (
                    e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                    (t[n + " "] = i)
                );
            }
            return t;
        }
        function se(e) {
            return (e[b] = !0), e;
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t;
        }
        function ce(e, t) {
            var n = t && e,
                r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function de(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e ||
                              (t.isDisabled !== !e && ie(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function he(e) {
            return se(function (t) {
                return (
                    (t = +t),
                    se(function (n, r) {
                        var i,
                            o = e([], n.length, t),
                            a = o.length;
                        while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                    })
                );
            });
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        (n = oe.support = {}),
            (o = oe.isXML =
                function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName;
                }),
            (p = oe.setDocument =
                function (e) {
                    var t,
                        i,
                        a = e ? e.ownerDocument || e : w;
                    return a !== d && 9 === a.nodeType && a.documentElement
                        ? ((d = a),
                          (h = d.documentElement),
                          (g = !o(d)),
                          w !== d &&
                              (i = d.defaultView) &&
                              i.top !== i &&
                              (i.addEventListener
                                  ? i.addEventListener("unload", re, !1)
                                  : i.attachEvent &&
                                    i.attachEvent("onunload", re)),
                          (n.attributes = ue(function (e) {
                              return (
                                  (e.className = "i"),
                                  !e.getAttribute("className")
                              );
                          })),
                          (n.getElementsByTagName = ue(function (e) {
                              return (
                                  e.appendChild(d.createComment("")),
                                  !e.getElementsByTagName("*").length
                              );
                          })),
                          (n.getElementsByClassName = Q.test(
                              d.getElementsByClassName
                          )),
                          (n.getById = ue(function (e) {
                              return (
                                  (h.appendChild(e).id = b),
                                  !d.getElementsByName ||
                                      !d.getElementsByName(b).length
                              );
                          })),
                          n.getById
                              ? ((r.filter.ID = function (e) {
                                    var t = e.replace(Z, ee);
                                    return function (e) {
                                        return e.getAttribute("id") === t;
                                    };
                                }),
                                (r.find.ID = function (e, t) {
                                    if (
                                        "undefined" !=
                                            typeof t.getElementById &&
                                        g
                                    ) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : [];
                                    }
                                }))
                              : ((r.filter.ID = function (e) {
                                    var t = e.replace(Z, ee);
                                    return function (e) {
                                        var n =
                                            "undefined" !=
                                                typeof e.getAttributeNode &&
                                            e.getAttributeNode("id");
                                        return n && n.value === t;
                                    };
                                }),
                                (r.find.ID = function (e, t) {
                                    if (
                                        "undefined" !=
                                            typeof t.getElementById &&
                                        g
                                    ) {
                                        var n,
                                            r,
                                            i,
                                            o = t.getElementById(e);
                                        if (o) {
                                            if (
                                                (n =
                                                    o.getAttributeNode("id")) &&
                                                n.value === e
                                            )
                                                return [o];
                                            (i = t.getElementsByName(e)),
                                                (r = 0);
                                            while ((o = i[r++]))
                                                if (
                                                    (n =
                                                        o.getAttributeNode(
                                                            "id"
                                                        )) &&
                                                    n.value === e
                                                )
                                                    return [o];
                                        }
                                        return [];
                                    }
                                })),
                          (r.find.TAG = n.getElementsByTagName
                              ? function (e, t) {
                                    return "undefined" !=
                                        typeof t.getElementsByTagName
                                        ? t.getElementsByTagName(e)
                                        : n.qsa
                                        ? t.querySelectorAll(e)
                                        : void 0;
                                }
                              : function (e, t) {
                                    var n,
                                        r = [],
                                        i = 0,
                                        o = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        while ((n = o[i++]))
                                            1 === n.nodeType && r.push(n);
                                        return r;
                                    }
                                    return o;
                                }),
                          (r.find.CLASS =
                              n.getElementsByClassName &&
                              function (e, t) {
                                  if (
                                      "undefined" !=
                                          typeof t.getElementsByClassName &&
                                      g
                                  )
                                      return t.getElementsByClassName(e);
                              }),
                          (v = []),
                          (y = []),
                          (n.qsa = Q.test(d.querySelectorAll)) &&
                              (ue(function (e) {
                                  (h.appendChild(e).innerHTML =
                                      "<a id='" +
                                      b +
                                      "'></a><select id='" +
                                      b +
                                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                      e.querySelectorAll("[msallowcapture^='']")
                                          .length &&
                                          y.push("[*^$]=" + M + "*(?:''|\"\")"),
                                      e.querySelectorAll("[selected]").length ||
                                          y.push(
                                              "\\[" + M + "*(?:value|" + P + ")"
                                          ),
                                      e.querySelectorAll("[id~=" + b + "-]")
                                          .length || y.push("~="),
                                      e.querySelectorAll(":checked").length ||
                                          y.push(":checked"),
                                      e.querySelectorAll("a#" + b + "+*")
                                          .length || y.push(".#.+[+~]");
                              }),
                              ue(function (e) {
                                  e.innerHTML =
                                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                  var t = d.createElement("input");
                                  t.setAttribute("type", "hidden"),
                                      e
                                          .appendChild(t)
                                          .setAttribute("name", "D"),
                                      e.querySelectorAll("[name=d]").length &&
                                          y.push("name" + M + "*[*^$|!~]?="),
                                      2 !==
                                          e.querySelectorAll(":enabled")
                                              .length &&
                                          y.push(":enabled", ":disabled"),
                                      (h.appendChild(e).disabled = !0),
                                      2 !==
                                          e.querySelectorAll(":disabled")
                                              .length &&
                                          y.push(":enabled", ":disabled"),
                                      e.querySelectorAll("*,:x"),
                                      y.push(",.*:");
                              })),
                          (n.matchesSelector = Q.test(
                              (m =
                                  h.matches ||
                                  h.webkitMatchesSelector ||
                                  h.mozMatchesSelector ||
                                  h.oMatchesSelector ||
                                  h.msMatchesSelector)
                          )) &&
                              ue(function (e) {
                                  (n.disconnectedMatch = m.call(e, "*")),
                                      m.call(e, "[s!='']:x"),
                                      v.push("!=", W);
                              }),
                          (y = y.length && new RegExp(y.join("|"))),
                          (v = v.length && new RegExp(v.join("|"))),
                          (t = Q.test(h.compareDocumentPosition)),
                          (x =
                              t || Q.test(h.contains)
                                  ? function (e, t) {
                                        var n =
                                                9 === e.nodeType
                                                    ? e.documentElement
                                                    : e,
                                            r = t && t.parentNode;
                                        return (
                                            e === r ||
                                            !(
                                                !r ||
                                                1 !== r.nodeType ||
                                                !(n.contains
                                                    ? n.contains(r)
                                                    : e.compareDocumentPosition &&
                                                      16 &
                                                          e.compareDocumentPosition(
                                                              r
                                                          ))
                                            )
                                        );
                                    }
                                  : function (e, t) {
                                        if (t)
                                            while ((t = t.parentNode))
                                                if (t === e) return !0;
                                        return !1;
                                    }),
                          (D = t
                              ? function (e, t) {
                                    if (e === t) return (f = !0), 0;
                                    var r =
                                        !e.compareDocumentPosition -
                                        !t.compareDocumentPosition;
                                    return (
                                        r ||
                                        (1 &
                                            (r =
                                                (e.ownerDocument || e) ===
                                                (t.ownerDocument || t)
                                                    ? e.compareDocumentPosition(
                                                          t
                                                      )
                                                    : 1) ||
                                        (!n.sortDetached &&
                                            t.compareDocumentPosition(e) === r)
                                            ? e === d ||
                                              (e.ownerDocument === w && x(w, e))
                                                ? -1
                                                : t === d ||
                                                  (t.ownerDocument === w &&
                                                      x(w, t))
                                                ? 1
                                                : c
                                                ? O(c, e) - O(c, t)
                                                : 0
                                            : 4 & r
                                            ? -1
                                            : 1)
                                    );
                                }
                              : function (e, t) {
                                    if (e === t) return (f = !0), 0;
                                    var n,
                                        r = 0,
                                        i = e.parentNode,
                                        o = t.parentNode,
                                        a = [e],
                                        s = [t];
                                    if (!i || !o)
                                        return e === d
                                            ? -1
                                            : t === d
                                            ? 1
                                            : i
                                            ? -1
                                            : o
                                            ? 1
                                            : c
                                            ? O(c, e) - O(c, t)
                                            : 0;
                                    if (i === o) return ce(e, t);
                                    n = e;
                                    while ((n = n.parentNode)) a.unshift(n);
                                    n = t;
                                    while ((n = n.parentNode)) s.unshift(n);
                                    while (a[r] === s[r]) r++;
                                    return r
                                        ? ce(a[r], s[r])
                                        : a[r] === w
                                        ? -1
                                        : s[r] === w
                                        ? 1
                                        : 0;
                                }),
                          d)
                        : d;
                }),
            (oe.matches = function (e, t) {
                return oe(e, null, null, t);
            }),
            (oe.matchesSelector = function (e, t) {
                if (
                    ((e.ownerDocument || e) !== d && p(e),
                    (t = t.replace(z, "='$1']")),
                    n.matchesSelector &&
                        g &&
                        !S[t + " "] &&
                        (!v || !v.test(t)) &&
                        (!y || !y.test(t)))
                )
                    try {
                        var r = m.call(e, t);
                        if (
                            r ||
                            n.disconnectedMatch ||
                            (e.document && 11 !== e.document.nodeType)
                        )
                            return r;
                    } catch (e) {}
                return oe(t, d, null, [e]).length > 0;
            }),
            (oe.contains = function (e, t) {
                return (e.ownerDocument || e) !== d && p(e), x(e, t);
            }),
            (oe.attr = function (e, t) {
                (e.ownerDocument || e) !== d && p(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o =
                        i && N.call(r.attrHandle, t.toLowerCase())
                            ? i(e, t, !g)
                            : void 0;
                return void 0 !== o
                    ? o
                    : n.attributes || !g
                    ? e.getAttribute(t)
                    : (o = e.getAttributeNode(t)) && o.specified
                    ? o.value
                    : null;
            }),
            (oe.escape = function (e) {
                return (e + "").replace(te, ne);
            }),
            (oe.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (oe.uniqueSort = function (e) {
                var t,
                    r = [],
                    i = 0,
                    o = 0;
                if (
                    ((f = !n.detectDuplicates),
                    (c = !n.sortStable && e.slice(0)),
                    e.sort(D),
                    f)
                ) {
                    while ((t = e[o++])) t === e[o] && (i = r.push(o));
                    while (i--) e.splice(r[i], 1);
                }
                return (c = null), e;
            }),
            (i = oe.getText =
                function (e) {
                    var t,
                        n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += i(e);
                        } else if (3 === o || 4 === o) return e.nodeValue;
                    } else while ((t = e[r++])) n += i(t);
                    return n;
                }),
            ((r = oe.selectors =
                {
                    cacheLength: 50,
                    createPseudo: se,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": { dir: "parentNode", first: !0 },
                        " ": { dir: "parentNode" },
                        "+": { dir: "previousSibling", first: !0 },
                        "~": { dir: "previousSibling" },
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return (
                                (e[1] = e[1].replace(Z, ee)),
                                (e[3] = (e[3] || e[4] || e[5] || "").replace(
                                    Z,
                                    ee
                                )),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                e.slice(0, 4)
                            );
                        },
                        CHILD: function (e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                "nth" === e[1].slice(0, 3)
                                    ? (e[3] || oe.error(e[0]),
                                      (e[4] = +(e[4]
                                          ? e[5] + (e[6] || 1)
                                          : 2 *
                                            ("even" === e[3] ||
                                                "odd" === e[3]))),
                                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                    : e[3] && oe.error(e[0]),
                                e
                            );
                        },
                        PSEUDO: function (e) {
                            var t,
                                n = !e[6] && e[2];
                            return V.CHILD.test(e[0])
                                ? null
                                : (e[3]
                                      ? (e[2] = e[4] || e[5] || "")
                                      : n &&
                                        X.test(n) &&
                                        (t = a(n, !0)) &&
                                        (t =
                                            n.indexOf(")", n.length - t) -
                                            n.length) &&
                                        ((e[0] = e[0].slice(0, t)),
                                        (e[2] = n.slice(0, t))),
                                  e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(Z, ee).toLowerCase();
                            return "*" === e
                                ? function () {
                                      return !0;
                                  }
                                : function (e) {
                                      return (
                                          e.nodeName &&
                                          e.nodeName.toLowerCase() === t
                                      );
                                  };
                        },
                        CLASS: function (e) {
                            var t = E[e + " "];
                            return (
                                t ||
                                ((t = new RegExp(
                                    "(^|" + M + ")" + e + "(" + M + "|$)"
                                )) &&
                                    E(e, function (e) {
                                        return t.test(
                                            ("string" == typeof e.className &&
                                                e.className) ||
                                                ("undefined" !=
                                                    typeof e.getAttribute &&
                                                    e.getAttribute("class")) ||
                                                ""
                                        );
                                    }))
                            );
                        },
                        ATTR: function (e, t, n) {
                            return function (r) {
                                var i = oe.attr(r, e);
                                return null == i
                                    ? "!=" === t
                                    : !t ||
                                          ((i += ""),
                                          "=" === t
                                              ? i === n
                                              : "!=" === t
                                              ? i !== n
                                              : "^=" === t
                                              ? n && 0 === i.indexOf(n)
                                              : "*=" === t
                                              ? n && i.indexOf(n) > -1
                                              : "$=" === t
                                              ? n && i.slice(-n.length) === n
                                              : "~=" === t
                                              ? (
                                                    " " +
                                                    i.replace($, " ") +
                                                    " "
                                                ).indexOf(n) > -1
                                              : "|=" === t &&
                                                (i === n ||
                                                    i.slice(0, n.length + 1) ===
                                                        n + "-"));
                            };
                        },
                        CHILD: function (e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i
                                ? function (e) {
                                      return !!e.parentNode;
                                  }
                                : function (t, n, u) {
                                      var l,
                                          c,
                                          f,
                                          p,
                                          d,
                                          h,
                                          g =
                                              o !== a
                                                  ? "nextSibling"
                                                  : "previousSibling",
                                          y = t.parentNode,
                                          v = s && t.nodeName.toLowerCase(),
                                          m = !u && !s,
                                          x = !1;
                                      if (y) {
                                          if (o) {
                                              while (g) {
                                                  p = t;
                                                  while ((p = p[g]))
                                                      if (
                                                          s
                                                              ? p.nodeName.toLowerCase() ===
                                                                v
                                                              : 1 === p.nodeType
                                                      )
                                                          return !1;
                                                  h = g =
                                                      "only" === e &&
                                                      !h &&
                                                      "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (
                                              ((h = [
                                                  a
                                                      ? y.firstChild
                                                      : y.lastChild,
                                              ]),
                                              a && m)
                                          ) {
                                              (x =
                                                  (d =
                                                      (l =
                                                          (c =
                                                              (f =
                                                                  (p = y)[b] ||
                                                                  (p[b] = {}))[
                                                                  p.uniqueID
                                                              ] ||
                                                              (f[p.uniqueID] =
                                                                  {}))[e] ||
                                                          [])[0] === T &&
                                                      l[1]) && l[2]),
                                                  (p = d && y.childNodes[d]);
                                              while (
                                                  (p =
                                                      (++d && p && p[g]) ||
                                                      (x = d = 0) ||
                                                      h.pop())
                                              )
                                                  if (
                                                      1 === p.nodeType &&
                                                      ++x &&
                                                      p === t
                                                  ) {
                                                      c[e] = [T, d, x];
                                                      break;
                                                  }
                                          } else if (
                                              (m &&
                                                  (x = d =
                                                      (l =
                                                          (c =
                                                              (f =
                                                                  (p = t)[b] ||
                                                                  (p[b] = {}))[
                                                                  p.uniqueID
                                                              ] ||
                                                              (f[p.uniqueID] =
                                                                  {}))[e] ||
                                                          [])[0] === T && l[1]),
                                              !1 === x)
                                          )
                                              while (
                                                  (p =
                                                      (++d && p && p[g]) ||
                                                      (x = d = 0) ||
                                                      h.pop())
                                              )
                                                  if (
                                                      (s
                                                          ? p.nodeName.toLowerCase() ===
                                                            v
                                                          : 1 === p.nodeType) &&
                                                      ++x &&
                                                      (m &&
                                                          ((c =
                                                              (f =
                                                                  p[b] ||
                                                                  (p[b] = {}))[
                                                                  p.uniqueID
                                                              ] ||
                                                              (f[p.uniqueID] =
                                                                  {}))[e] = [
                                                              T,
                                                              x,
                                                          ]),
                                                      p === t)
                                                  )
                                                      break;
                                          return (
                                              (x -= i) === r ||
                                              (x % r == 0 && x / r >= 0)
                                          );
                                      }
                                  };
                        },
                        PSEUDO: function (e, t) {
                            var n,
                                i =
                                    r.pseudos[e] ||
                                    r.setFilters[e.toLowerCase()] ||
                                    oe.error("unsupported pseudo: " + e);
                            return i[b]
                                ? i(t)
                                : i.length > 1
                                ? ((n = [e, e, "", t]),
                                  r.setFilters.hasOwnProperty(e.toLowerCase())
                                      ? se(function (e, n) {
                                            var r,
                                                o = i(e, t),
                                                a = o.length;
                                            while (a--)
                                                e[(r = O(e, o[a]))] = !(n[r] =
                                                    o[a]);
                                        })
                                      : function (e) {
                                            return i(e, 0, n);
                                        })
                                : i;
                        },
                    },
                    pseudos: {
                        not: se(function (e) {
                            var t = [],
                                n = [],
                                r = s(e.replace(B, "$1"));
                            return r[b]
                                ? se(function (e, t, n, i) {
                                      var o,
                                          a = r(e, null, i, []),
                                          s = e.length;
                                      while (s--)
                                          (o = a[s]) && (e[s] = !(t[s] = o));
                                  })
                                : function (e, i, o) {
                                      return (
                                          (t[0] = e),
                                          r(t, null, o, n),
                                          (t[0] = null),
                                          !n.pop()
                                      );
                                  };
                        }),
                        has: se(function (e) {
                            return function (t) {
                                return oe(e, t).length > 0;
                            };
                        }),
                        contains: se(function (e) {
                            return (
                                (e = e.replace(Z, ee)),
                                function (t) {
                                    return (
                                        (
                                            t.textContent ||
                                            t.innerText ||
                                            i(t)
                                        ).indexOf(e) > -1
                                    );
                                }
                            );
                        }),
                        lang: se(function (e) {
                            return (
                                U.test(e || "") ||
                                    oe.error("unsupported lang: " + e),
                                (e = e.replace(Z, ee).toLowerCase()),
                                function (t) {
                                    var n;
                                    do {
                                        if (
                                            (n = g
                                                ? t.lang
                                                : t.getAttribute("xml:lang") ||
                                                  t.getAttribute("lang"))
                                        )
                                            return (
                                                (n = n.toLowerCase()) === e ||
                                                0 === n.indexOf(e + "-")
                                            );
                                    } while (
                                        (t = t.parentNode) &&
                                        1 === t.nodeType
                                    );
                                    return !1;
                                }
                            );
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root: function (e) {
                            return e === h;
                        },
                        focus: function (e) {
                            return (
                                e === d.activeElement &&
                                (!d.hasFocus || d.hasFocus()) &&
                                !!(e.type || e.href || ~e.tabIndex)
                            );
                        },
                        enabled: de(!1),
                        disabled: de(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return (
                                ("input" === t && !!e.checked) ||
                                ("option" === t && !!e.selected)
                            );
                        },
                        selected: function (e) {
                            return (
                                e.parentNode && e.parentNode.selectedIndex,
                                !0 === e.selected
                            );
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (e) {
                            return !r.pseudos.empty(e);
                        },
                        header: function (e) {
                            return Y.test(e.nodeName);
                        },
                        input: function (e) {
                            return G.test(e.nodeName);
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return (
                                ("input" === t && "button" === e.type) ||
                                "button" === t
                            );
                        },
                        text: function (e) {
                            var t;
                            return (
                                "input" === e.nodeName.toLowerCase() &&
                                "text" === e.type &&
                                (null == (t = e.getAttribute("type")) ||
                                    "text" === t.toLowerCase())
                            );
                        },
                        first: he(function () {
                            return [0];
                        }),
                        last: he(function (e, t) {
                            return [t - 1];
                        }),
                        eq: he(function (e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: he(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: he(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: he(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0; )
                                e.push(r);
                            return e;
                        }),
                        gt: he(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t; )
                                e.push(r);
                            return e;
                        }),
                    },
                }).pseudos.nth = r.pseudos.eq);
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0,
        })
            r.pseudos[t] = fe(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
        function ye() {}
        (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = oe.tokenize =
                function (e, t) {
                    var n,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l,
                        c = k[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    (s = e), (u = []), (l = r.preFilter);
                    while (s) {
                        (n && !(i = F.exec(s))) ||
                            (i && (s = s.slice(i[0].length) || s),
                            u.push((o = []))),
                            (n = !1),
                            (i = _.exec(s)) &&
                                ((n = i.shift()),
                                o.push({
                                    value: n,
                                    type: i[0].replace(B, " "),
                                }),
                                (s = s.slice(n.length)));
                        for (a in r.filter)
                            !(i = V[a].exec(s)) ||
                                (l[a] && !(i = l[a](i))) ||
                                ((n = i.shift()),
                                o.push({ value: n, type: a, matches: i }),
                                (s = s.slice(n.length)));
                        if (!n) break;
                    }
                    return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
                });
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first
                ? function (t, n, i) {
                      while ((t = t[r]))
                          if (1 === t.nodeType || a) return e(t, n, i);
                      return !1;
                  }
                : function (t, n, u) {
                      var l,
                          c,
                          f,
                          p = [T, s];
                      if (u) {
                          while ((t = t[r]))
                              if ((1 === t.nodeType || a) && e(t, n, u))
                                  return !0;
                      } else
                          while ((t = t[r]))
                              if (1 === t.nodeType || a)
                                  if (
                                      ((f = t[b] || (t[b] = {})),
                                      (c =
                                          f[t.uniqueID] ||
                                          (f[t.uniqueID] = {})),
                                      i && i === t.nodeName.toLowerCase())
                                  )
                                      t = t[r] || t;
                                  else {
                                      if (
                                          (l = c[o]) &&
                                          l[0] === T &&
                                          l[1] === s
                                      )
                                          return (p[2] = l[2]);
                                      if (((c[o] = p), (p[2] = e(t, n, u))))
                                          return !0;
                                  }
                      return !1;
                  };
        }
        function xe(e) {
            return e.length > 1
                ? function (t, n, r) {
                      var i = e.length;
                      while (i--) if (!e[i](t, n, r)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n;
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) &&
                    ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Te(e, t, n, r, i, o) {
            return (
                r && !r[b] && (r = Te(r)),
                i && !i[b] && (i = Te(i, o)),
                se(function (o, a, s, u) {
                    var l,
                        c,
                        f,
                        p = [],
                        d = [],
                        h = a.length,
                        g = o || be(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || (!o && t) ? g : we(g, p, e, s, u),
                        v = n ? (i || (o ? e : h || r) ? [] : a) : y;
                    if ((n && n(y, v, s, u), r)) {
                        (l = we(v, d)), r(l, [], s, u), (c = l.length);
                        while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                (l = []), (c = v.length);
                                while (c--) (f = v[c]) && l.push((y[c] = f));
                                i(null, (v = []), l, u);
                            }
                            c = v.length;
                            while (c--)
                                (f = v[c]) &&
                                    (l = i ? O(o, f) : p[c]) > -1 &&
                                    (o[l] = !(a[l] = f));
                        }
                    } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
                })
            );
        }
        function Ce(e) {
            for (
                var t,
                    n,
                    i,
                    o = e.length,
                    a = r.relative[e[0].type],
                    s = a || r.relative[" "],
                    u = a ? 1 : 0,
                    c = me(
                        function (e) {
                            return e === t;
                        },
                        s,
                        !0
                    ),
                    f = me(
                        function (e) {
                            return O(t, e) > -1;
                        },
                        s,
                        !0
                    ),
                    p = [
                        function (e, n, r) {
                            var i =
                                (!a && (r || n !== l)) ||
                                ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return (t = null), i;
                        },
                    ];
                u < o;
                u++
            )
                if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
                else {
                    if (
                        (n = r.filter[e[u].type].apply(null, e[u].matches))[b]
                    ) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type]) break;
                        return Te(
                            u > 1 && xe(p),
                            u > 1 &&
                                ve(
                                    e.slice(0, u - 1).concat({
                                        value: " " === e[u - 2].type ? "*" : "",
                                    })
                                ).replace(B, "$1"),
                            n,
                            u < i && Ce(e.slice(u, i)),
                            i < o && Ce((e = e.slice(i))),
                            i < o && ve(e)
                        );
                    }
                    p.push(n);
                }
            return xe(p);
        }
        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function (o, a, s, u, c) {
                    var f,
                        h,
                        y,
                        v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || (i && r.find.TAG("*", c)),
                        E = (T += null == w ? 1 : Math.random() || 0.1),
                        k = C.length;
                    for (
                        c && (l = a === d || a || c);
                        m !== k && null != (f = C[m]);
                        m++
                    ) {
                        if (i && f) {
                            (h = 0),
                                a || f.ownerDocument === d || (p(f), (s = !g));
                            while ((y = e[h++]))
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break;
                                }
                            c && (T = E);
                        }
                        n && ((f = !y && f) && v--, o && x.push(f));
                    }
                    if (((v += m), n && m !== v)) {
                        h = 0;
                        while ((y = t[h++])) y(x, b, a, s);
                        if (o) {
                            if (v > 0)
                                while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b);
                        }
                        L.apply(u, b),
                            c &&
                                !o &&
                                b.length > 0 &&
                                v + t.length > 1 &&
                                oe.uniqueSort(u);
                    }
                    return c && ((T = E), (l = w)), x;
                };
            return n ? se(o) : o;
        }
        return (
            (s = oe.compile =
                function (e, t) {
                    var n,
                        r = [],
                        i = [],
                        o = S[e + " "];
                    if (!o) {
                        t || (t = a(e)), (n = t.length);
                        while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                        (o = S(e, Ee(i, r))).selector = e;
                    }
                    return o;
                }),
            (u = oe.select =
                function (e, t, n, i) {
                    var o,
                        u,
                        l,
                        c,
                        f,
                        p = "function" == typeof e && e,
                        d = !i && a((e = p.selector || e));
                    if (((n = n || []), 1 === d.length)) {
                        if (
                            (u = d[0] = d[0].slice(0)).length > 2 &&
                            "ID" === (l = u[0]).type &&
                            9 === t.nodeType &&
                            g &&
                            r.relative[u[1].type]
                        ) {
                            if (
                                !(t = (r.find.ID(
                                    l.matches[0].replace(Z, ee),
                                    t
                                ) || [])[0])
                            )
                                return n;
                            p && (t = t.parentNode),
                                (e = e.slice(u.shift().value.length));
                        }
                        o = V.needsContext.test(e) ? 0 : u.length;
                        while (o--) {
                            if (((l = u[o]), r.relative[(c = l.type)])) break;
                            if (
                                (f = r.find[c]) &&
                                (i = f(
                                    l.matches[0].replace(Z, ee),
                                    (K.test(u[0].type) && ge(t.parentNode)) || t
                                ))
                            ) {
                                if ((u.splice(o, 1), !(e = i.length && ve(u))))
                                    return L.apply(n, i), n;
                                break;
                            }
                        }
                    }
                    return (
                        (p || s(e, d))(
                            i,
                            t,
                            !g,
                            n,
                            !t || (K.test(e) && ge(t.parentNode)) || t
                        ),
                        n
                    );
                }),
            (n.sortStable = b.split("").sort(D).join("") === b),
            (n.detectDuplicates = !!f),
            p(),
            (n.sortDetached = ue(function (e) {
                return (
                    1 & e.compareDocumentPosition(d.createElement("fieldset"))
                );
            })),
            ue(function (e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                );
            }) ||
                le("type|href|height|width", function (e, t, n) {
                    if (!n)
                        return e.getAttribute(
                            t,
                            "type" === t.toLowerCase() ? 1 : 2
                        );
                }),
            (n.attributes &&
                ue(function (e) {
                    return (
                        (e.innerHTML = "<input/>"),
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    );
                })) ||
                le("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue;
                }),
            ue(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                le(P, function (e, t, n) {
                    var r;
                    if (!n)
                        return !0 === e[t]
                            ? t.toLowerCase()
                            : (r = e.getAttributeNode(t)) && r.specified
                            ? r.value
                            : null;
                }),
            oe
        );
    })(e);
    (w.find = E),
        (w.expr = E.selectors),
        (w.expr[":"] = w.expr.pseudos),
        (w.uniqueSort = w.unique = E.uniqueSort),
        (w.text = E.getText),
        (w.isXMLDoc = E.isXML),
        (w.contains = E.contains),
        (w.escapeSelector = E.escape);
    var k = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        S = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t)
            ? w.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? w.grep(e, function (e) {
                  return (e === t) !== n;
              })
            : "string" != typeof t
            ? w.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
              })
            : w.filter(t, e, n);
    }
    (w.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? w.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : w.find.matches(
                      e,
                      w.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        w.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        w(e).filter(function () {
                            for (t = 0; t < r; t++)
                                if (w.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                    w.find(e, i[t], n);
                return r > 1 ? w.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(j(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(j(this, e || [], !0));
            },
            is: function (e) {
                return !!j(
                    this,
                    "string" == typeof e && D.test(e) ? w(e) : e || [],
                    !1
                ).length;
            },
        });
    var q,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || q), "string" == typeof e)) {
            if (
                !(i =
                    "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                        ? [null, e, null]
                        : L.exec(e)) ||
                (!i[1] && t)
            )
                return !t || t.jquery
                    ? (t || n).find(e)
                    : this.constructor(t).find(e);
            if (i[1]) {
                if (
                    ((t = t instanceof w ? t[0] : t),
                    w.merge(
                        this,
                        w.parseHTML(
                            i[1],
                            t && t.nodeType ? t.ownerDocument || t : r,
                            !0
                        )
                    ),
                    A.test(i[1]) && w.isPlainObject(t))
                )
                    for (i in t)
                        g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (
                (o = r.getElementById(i[2])) &&
                    ((this[0] = o), (this.length = 1)),
                this
            );
        }
        return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : g(e)
            ? void 0 !== n.ready
                ? n.ready(e)
                : e(w)
            : w.makeArray(e, this);
    }).prototype = w.fn),
        (q = w(r));
    var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (
                            n.nodeType < 11 &&
                            (a
                                ? a.index(n) > -1
                                : 1 === n.nodeType &&
                                  w.find.matchesSelector(n, e))
                        ) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        },
        index: function (e) {
            return e
                ? "string" == typeof e
                    ? u.call(w(e), this[0])
                    : u.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function (e) {
            return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
            );
        },
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    w.each(
        {
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
                return k(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
                return k(e, "parentNode", n);
            },
            next: function (e) {
                return P(e, "nextSibling");
            },
            prev: function (e) {
                return P(e, "previousSibling");
            },
            nextAll: function (e) {
                return k(e, "nextSibling");
            },
            prevAll: function (e) {
                return k(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
                return k(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
                return k(e, "previousSibling", n);
            },
            siblings: function (e) {
                return S((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
                return S(e.firstChild);
            },
            contents: function (e) {
                return N(e, "iframe")
                    ? e.contentDocument
                    : (N(e, "template") && (e = e.content || e),
                      w.merge([], e.childNodes));
            },
        },
        function (e, t) {
            w.fn[e] = function (n, r) {
                var i = w.map(this, t, n);
                return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = w.filter(r, i)),
                    this.length > 1 &&
                        (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()),
                    this.pushStack(i)
                );
            };
        }
    );
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return (
            w.each(e.match(M) || [], function (e, n) {
                t[n] = !0;
            }),
            t
        );
    }
    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length)
                        !1 === o[s].apply(n[0], n[1]) &&
                            e.stopOnFalse &&
                            ((s = o.length), (n = !1));
                }
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
            },
            l = {
                add: function () {
                    return (
                        o &&
                            (n && !t && ((s = o.length - 1), a.push(n)),
                            (function t(n) {
                                w.each(n, function (n, r) {
                                    g(r)
                                        ? (e.unique && l.has(r)) || o.push(r)
                                        : r &&
                                          r.length &&
                                          "string" !== x(r) &&
                                          t(r);
                                });
                            })(arguments),
                            n && !t && u()),
                        this
                    );
                },
                remove: function () {
                    return (
                        w.each(arguments, function (e, t) {
                            var n;
                            while ((n = w.inArray(t, o, n)) > -1)
                                o.splice(n, 1), n <= s && s--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                    return o && (o = []), this;
                },
                disable: function () {
                    return (i = a = []), (o = n = ""), this;
                },
                disabled: function () {
                    return !o;
                },
                lock: function () {
                    return (i = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                    return !!i;
                },
                fireWith: function (e, n) {
                    return (
                        i ||
                            ((n = [e, (n = n || []).slice ? n.slice() : n]),
                            a.push(n),
                            t || u()),
                        this
                    );
                },
                fire: function () {
                    return l.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return l;
    };
    function I(e) {
        return e;
    }
    function W(e) {
        throw e;
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && g((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    w.extend({
        Deferred: function (t) {
            var n = [
                    [
                        "notify",
                        "progress",
                        w.Callbacks("memory"),
                        w.Callbacks("memory"),
                        2,
                    ],
                    [
                        "resolve",
                        "done",
                        w.Callbacks("once memory"),
                        w.Callbacks("once memory"),
                        0,
                        "resolved",
                    ],
                    [
                        "reject",
                        "fail",
                        w.Callbacks("once memory"),
                        w.Callbacks("once memory"),
                        1,
                        "rejected",
                    ],
                ],
                r = "pending",
                i = {
                    state: function () {
                        return r;
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                        return i.then(null, e);
                    },
                    pipe: function () {
                        var e = arguments;
                        return w
                            .Deferred(function (t) {
                                w.each(n, function (n, r) {
                                    var i = g(e[r[4]]) && e[r[4]];
                                    o[r[1]](function () {
                                        var e = i && i.apply(this, arguments);
                                        e && g(e.promise)
                                            ? e
                                                  .promise()
                                                  .progress(t.notify)
                                                  .done(t.resolve)
                                                  .fail(t.reject)
                                            : t[r[0] + "With"](
                                                  this,
                                                  i ? [e] : arguments
                                              );
                                    });
                                }),
                                    (e = null);
                            })
                            .promise();
                    },
                    then: function (t, r, i) {
                        var o = 0;
                        function a(t, n, r, i) {
                            return function () {
                                var s = this,
                                    u = arguments,
                                    l = function () {
                                        var e, l;
                                        if (!(t < o)) {
                                            if (
                                                (e = r.apply(s, u)) ===
                                                n.promise()
                                            )
                                                throw new TypeError(
                                                    "Thenable self-resolution"
                                                );
                                            (l =
                                                e &&
                                                ("object" == typeof e ||
                                                    "function" == typeof e) &&
                                                e.then),
                                                g(l)
                                                    ? i
                                                        ? l.call(
                                                              e,
                                                              a(o, n, I, i),
                                                              a(o, n, W, i)
                                                          )
                                                        : (o++,
                                                          l.call(
                                                              e,
                                                              a(o, n, I, i),
                                                              a(o, n, W, i),
                                                              a(
                                                                  o,
                                                                  n,
                                                                  I,
                                                                  n.notifyWith
                                                              )
                                                          ))
                                                    : (r !== I &&
                                                          ((s = void 0),
                                                          (u = [e])),
                                                      (i || n.resolveWith)(
                                                          s,
                                                          u
                                                      ));
                                        }
                                    },
                                    c = i
                                        ? l
                                        : function () {
                                              try {
                                                  l();
                                              } catch (e) {
                                                  w.Deferred.exceptionHook &&
                                                      w.Deferred.exceptionHook(
                                                          e,
                                                          c.stackTrace
                                                      ),
                                                      t + 1 >= o &&
                                                          (r !== W &&
                                                              ((s = void 0),
                                                              (u = [e])),
                                                          n.rejectWith(s, u));
                                              }
                                          };
                                t
                                    ? c()
                                    : (w.Deferred.getStackHook &&
                                          (c.stackTrace =
                                              w.Deferred.getStackHook()),
                                      e.setTimeout(c));
                            };
                        }
                        return w
                            .Deferred(function (e) {
                                n[0][3].add(
                                    a(0, e, g(i) ? i : I, e.notifyWith)
                                ),
                                    n[1][3].add(a(0, e, g(t) ? t : I)),
                                    n[2][3].add(a(0, e, g(r) ? r : W));
                            })
                            .promise();
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, i) : i;
                    },
                },
                o = {};
            return (
                w.each(n, function (e, t) {
                    var a = t[2],
                        s = t[5];
                    (i[t[1]] = a.add),
                        s &&
                            a.add(
                                function () {
                                    r = s;
                                },
                                n[3 - e][2].disable,
                                n[3 - e][3].disable,
                                n[0][2].lock,
                                n[0][3].lock
                            ),
                        a.add(t[3].fire),
                        (o[t[0]] = function () {
                            return (
                                o[t[0] + "With"](
                                    this === o ? void 0 : this,
                                    arguments
                                ),
                                this
                            );
                        }),
                        (o[t[0] + "With"] = a.fireWith);
                }),
                i.promise(o),
                t && t.call(o, o),
                o
            );
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        (r[e] = this),
                            (i[e] =
                                arguments.length > 1 ? o.call(arguments) : n),
                            --t || a.resolveWith(r, i);
                    };
                };
            if (
                t <= 1 &&
                ($(e, a.done(s(n)).resolve, a.reject, !t),
                "pending" === a.state() || g(i[n] && i[n].then))
            )
                return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise();
        },
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (t, n) {
        e.console &&
            e.console.warn &&
            t &&
            B.test(t.name) &&
            e.console.warn(
                "jQuery.Deferred exception: " + t.message,
                t.stack,
                n
            );
    }),
        (w.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var F = w.Deferred();
    (w.fn.ready = function (e) {
        return (
            F.then(e)["catch"](function (e) {
                w.readyException(e);
            }),
            this
        );
    }),
        w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) ||
                    ((w.isReady = !0),
                    (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
            },
        }),
        (w.ready.then = F.then);
    function _() {
        r.removeEventListener("DOMContentLoaded", _),
            e.removeEventListener("load", _),
            w.ready();
    }
    "complete" === r.readyState ||
    ("loading" !== r.readyState && !r.documentElement.doScroll)
        ? e.setTimeout(w.ready)
        : (r.addEventListener("DOMContentLoaded", _),
          e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a);
            } else if (
                void 0 !== r &&
                ((i = !0),
                g(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(w(e), n);
                          }))),
                t)
            )
                for (; s < u; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        X = /^-ms-/,
        U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase();
    }
    function G(e) {
        return e.replace(X, "ms-").replace(U, V);
    }
    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Q() {
        this.expando = w.expando + Q.uid++;
    }
    (Q.uid = 1),
        (Q.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return (
                    t ||
                        ((t = {}),
                        Y(e) &&
                            (e.nodeType
                                ? (e[this.expando] = t)
                                : Object.defineProperty(e, this.expando, {
                                      value: t,
                                      configurable: !0,
                                  }))),
                    t
                );
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[G(t)] = n;
                else for (r in t) i[G(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][G(t)];
            },
            access: function (e, t, n) {
                return void 0 === t ||
                    (t && "string" == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t)
                            ? t.map(G)
                            : (t = G(t)) in r
                            ? [t]
                            : t.match(M) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || w.isEmptyObject(r)) &&
                        (e.nodeType
                            ? (e[this.expando] = void 0)
                            : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t);
            },
        });
    var J = new Q(),
        K = new Q(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
    function te(e) {
        return (
            "true" === e ||
            ("false" !== e &&
                ("null" === e
                    ? null
                    : e === +e + ""
                    ? +e
                    : Z.test(e)
                    ? JSON.parse(e)
                    : e))
        );
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
            ) {
                try {
                    n = te(n);
                } catch (e) {}
                K.set(e, t, n);
            } else n = void 0;
        return n;
    }
    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
            return K.access(e, t, n);
        },
        removeData: function (e, t) {
            K.remove(e, t);
        },
        _data: function (e, t, n) {
            return J.access(e, t, n);
        },
        _removeData: function (e, t) {
            J.remove(e, t);
        },
    }),
        w.fn.extend({
            data: function (e, t) {
                var n,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (
                        this.length &&
                        ((i = K.get(o)),
                        1 === o.nodeType && !J.get(o, "hasDataAttrs"))
                    ) {
                        n = a.length;
                        while (n--)
                            a[n] &&
                                0 === (r = a[n].name).indexOf("data-") &&
                                ((r = G(r.slice(5))), ne(o, r, i[r]));
                        J.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          K.set(this, e);
                      })
                    : z(
                          this,
                          function (t) {
                              var n;
                              if (o && void 0 === t) {
                                  if (void 0 !== (n = K.get(o, e))) return n;
                                  if (void 0 !== (n = ne(o, e))) return n;
                              } else
                                  this.each(function () {
                                      K.set(this, e, t);
                                  });
                          },
                          null,
                          t,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    K.remove(this, e);
                });
            },
        }),
        w.extend({
            queue: function (e, t, n) {
                var r;
                if (e)
                    return (
                        (t = (t || "fx") + "queue"),
                        (r = J.get(e, t)),
                        n &&
                            (!r || Array.isArray(n)
                                ? (r = J.access(e, t, w.makeArray(n)))
                                : r.push(n)),
                        r || []
                    );
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = w.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = w._queueHooks(e, t),
                    a = function () {
                        w.dequeue(e, t);
                    };
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(e, a, o)),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    J.get(e, n) ||
                    J.access(e, n, {
                        empty: w.Callbacks("once memory").add(function () {
                            J.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        w.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? w.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = w.queue(this, e, t);
                              w._queueHooks(this, e),
                                  "fx" === e &&
                                      "inprogress" !== n[0] &&
                                      w.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    w.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = w.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)),
                    (e = e || "fx");
                while (a--)
                    (n = J.get(o[a], e + "queueHooks")) &&
                        n.empty &&
                        (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function (e, t) {
            return (
                "none" === (e = t || e).style.display ||
                ("" === e.style.display &&
                    w.contains(e.ownerDocument, e) &&
                    "none" === w.css(e, "display"))
            );
        },
        se = function (e, t, n, r) {
            var i,
                o,
                a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        };
    function ue(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return w.css(e, t, "");
                  },
            u = s(),
            l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--)
                w.style(e, t, c + l),
                    (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                    (c /= o);
            (c *= 2), w.style(e, t, c + l), (n = n || []);
        }
        return (
            n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
        );
    }
    var le = {};
    function ce(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return (
            i ||
            ((t = n.body.appendChild(n.createElement(r))),
            (i = w.css(t, "display")),
            t.parentNode.removeChild(t),
            "none" === i && (i = "block"),
            (le[r] = i),
            i)
        );
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style &&
                ((n = r.style.display),
                t
                    ? ("none" === n &&
                          ((i[o] = J.get(r, "display") || null),
                          i[o] || (r.style.display = "")),
                      "" === r.style.display && ae(r) && (i[o] = ce(r)))
                    : "none" !== n &&
                      ((i[o] = "none"), J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    w.fn.extend({
        show: function () {
            return fe(this, !0);
        },
        hide: function () {
            return fe(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ae(this) ? w(this).show() : w(this).hide();
                  });
        },
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    (ge.optgroup = ge.option),
        (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
        (ge.th = ge.td);
    function ye(e, t) {
        var n;
        return (
            (n =
                "undefined" != typeof e.getElementsByTagName
                    ? e.getElementsByTagName(t || "*")
                    : "undefined" != typeof e.querySelectorAll
                    ? e.querySelectorAll(t || "*")
                    : []),
            void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n
        );
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (
            var o,
                a,
                s,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
            d < h;
            d++
        )
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    (a = a || f.appendChild(t.createElement("div"))),
                        (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
                        (u = ge[s] || ge._default),
                        (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]),
                        (c = u[0]);
                    while (c--) a = a.lastChild;
                    w.merge(p, a.childNodes),
                        ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (
                ((l = w.contains(o.ownerDocument, o)),
                (a = ye(f.appendChild(o), "script")),
                l && ve(a),
                n)
            ) {
                c = 0;
                while ((o = a[c++])) he.test(o.type || "") && n.push(o);
            }
        return f;
    }
    !(function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e.innerHTML = "<textarea>x</textarea>"),
            (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0;
    }
    function ke() {
        return !1;
    }
    function Se() {
        try {
            return r.activeElement;
        } catch (e) {}
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && ((r = r || n), (n = void 0));
            for (s in t) De(e, s, n, r, t[s], o);
            return e;
        }
        if (
            (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                      ? ((i = r), (r = void 0))
                      : ((i = r), (r = n), (n = void 0))),
            !1 === i)
        )
            i = ke;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return w().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = w.guid++))),
            e.each(function () {
                w.event.add(this, t, i, r, n);
            })
        );
    }
    (w.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.get(e);
            if (y) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && w.find.matchesSelector(be, i),
                    n.guid || (n.guid = w.guid++),
                    (u = y.events) || (u = y.events = {}),
                    (a = y.handle) ||
                        (a = y.handle =
                            function (t) {
                                return "undefined" != typeof w &&
                                    w.event.triggered !== t.type
                                    ? w.event.dispatch.apply(e, arguments)
                                    : void 0;
                            }),
                    (l = (t = (t || "").match(M) || [""]).length);
                while (l--)
                    (d = g = (s = Ce.exec(t[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d &&
                            ((f = w.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = w.event.special[d] || {}),
                            (c = w.extend(
                                {
                                    type: d,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext:
                                        i && w.expr.match.needsContext.test(i),
                                    namespace: h.join("."),
                                },
                                o
                            )),
                            (p = u[d]) ||
                                (((p = u[d] = []).delegateCount = 0),
                                (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                                    (e.addEventListener &&
                                        e.addEventListener(d, a))),
                            f.add &&
                                (f.add.call(e, c),
                                c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (w.event.global[d] = !0));
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (
                        ((s = Ce.exec(t[l]) || []),
                        (d = g = s[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d)
                    ) {
                        (f = w.event.special[d] || {}),
                            (p =
                                u[
                                    (d = (r ? f.delegateType : f.bindType) || d)
                                ] || []),
                            (s =
                                s[2] &&
                                new RegExp(
                                    "(^|\\.)" +
                                        h.join("\\.(?:.*\\.|)") +
                                        "(\\.|$)"
                                )),
                            (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r &&
                                        r !== c.selector &&
                                        ("**" !== r || !c.selector)) ||
                                    (p.splice(o, 1),
                                    c.selector && p.delegateCount--,
                                    f.remove && f.remove.call(e, c));
                        a &&
                            !p.length &&
                            ((f.teardown &&
                                !1 !== f.teardown.call(e, h, y.handle)) ||
                                w.removeEvent(e, d, y.handle),
                            delete u[d]);
                    } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t = w.event.fix(e),
                n,
                r,
                i,
                o,
                a,
                s,
                u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++)
                u[n] = arguments[n];
            if (
                ((t.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, t))
            ) {
                (s = w.event.handlers.call(this, t, l)), (n = 0);
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    (t.currentTarget = o.elem), (r = 0);
                    while (
                        (a = o.handlers[r++]) &&
                        !t.isImmediatePropagationStopped()
                    )
                        (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
                            ((t.handleObj = a),
                            (t.data = a.data),
                            void 0 !==
                                (i = (
                                    (w.event.special[a.origType] || {})
                                        .handle || a.handler
                                ).apply(o.elem, u)) &&
                                !1 === (t.result = i) &&
                                (t.preventDefault(), t.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (
                        1 === l.nodeType &&
                        ("click" !== e.type || !0 !== l.disabled)
                    ) {
                        for (o = [], a = {}, n = 0; n < u; n++)
                            void 0 === a[(i = (r = t[n]).selector + " ")] &&
                                (a[i] = r.needsContext
                                    ? w(i, this).index(l) > -1
                                    : w.find(i, this, null, [l]).length),
                                a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (
                (l = this),
                u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
                s
            );
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t)
                    ? function () {
                          if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[e];
                      },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t,
                    });
                },
            });
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if (
                        "checkbox" === this.type &&
                        this.click &&
                        N(this, "input")
                    )
                        return this.click(), !1;
                },
                _default: function (e) {
                    return N(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (w.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (w.Event = function (e, t) {
            if (!(this instanceof w.Event)) return new w.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                          ? Ee
                          : ke),
                  (this.target =
                      e.target && 3 === e.target.nodeType
                          ? e.target.parentNode
                          : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && w.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: ke,
            isPropagationStopped: ke,
            isImmediatePropagationStopped: ke,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ee),
                    e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ee),
                    e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ee),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        w.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && we.test(e.type)
                        ? null != e.charCode
                            ? e.charCode
                            : e.keyCode
                        : !e.which && void 0 !== t && Te.test(e.type)
                        ? 1 & t
                            ? 1
                            : 2 & t
                            ? 3
                            : 4 & t
                            ? 2
                            : 0
                        : e.which;
                },
            },
            w.event.addProp
        ),
        w.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (e, t) {
                w.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n,
                            r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return (
                            (i && (i === r || w.contains(r, i))) ||
                                ((e.type = o.origType),
                                (n = o.handler.apply(this, arguments)),
                                (e.type = t)),
                            n
                        );
                    },
                };
            }
        ),
        w.fn.extend({
            on: function (e, t, n, r) {
                return De(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return De(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (r = e.handleObj),
                        w(e.delegateTarget).off(
                            r.namespace
                                ? r.origType + "." + r.namespace
                                : r.origType,
                            r.selector,
                            r.handler
                        ),
                        this
                    );
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) ||
                        ((n = t), (t = void 0)),
                    !1 === n && (n = ke),
                    this.each(function () {
                        w.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Ne =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr")
            ? w(e).children("tbody")[0] || e
            : e;
    }
    function He(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Oe(e) {
        return (
            "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
            e
        );
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (
                J.hasData(e) &&
                ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))
            ) {
                delete a.handle, (a.events = {});
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++)
                        w.event.add(t, i, l[i][n]);
            }
            K.hasData(e) &&
                ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type)
            ? (t.checked = e.checked)
            : ("input" !== n && "textarea" !== n) ||
              (t.defaultValue = e.defaultValue);
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i,
            o,
            s,
            u,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || (p > 1 && "string" == typeof y && !h.checkClone && je.test(y)))
            return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
            });
        if (
            p &&
            ((i = xe(t, e[0].ownerDocument, !1, e, r)),
            (o = i.firstChild),
            1 === i.childNodes.length && (i = o),
            o || r)
        ) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
                (l = i),
                    f !== d &&
                        ((l = w.clone(l, !0, !0)),
                        u && w.merge(s, ye(l, "script"))),
                    n.call(e[f], l, f);
            if (u)
                for (
                    c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0;
                    f < u;
                    f++
                )
                    (l = s[f]),
                        he.test(l.type || "") &&
                            !J.access(l, "globalEval") &&
                            w.contains(c, l) &&
                            (l.src && "module" !== (l.type || "").toLowerCase()
                                ? w._evalUrl && w._evalUrl(l.src)
                                : m(l.textContent.replace(qe, ""), c, l));
        }
        return e;
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || w.cleanData(ye(r)),
                r.parentNode &&
                    (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
                    r.parentNode.removeChild(r));
        return e;
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (
                !(
                    h.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    w.isXMLDoc(e)
                )
            )
                for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++)
                    Me(o[r], a[r]);
            if (t)
                if (n)
                    for (
                        o = o || ye(e), a = a || ye(s), r = 0, i = o.length;
                        r < i;
                        r++
                    )
                        Pe(o[r], a[r]);
                else Pe(e, s);
            return (
                (a = ye(s, "script")).length > 0 &&
                    ve(a, !u && ye(e, "script")),
                s
            );
        },
        cleanData: function (e) {
            for (
                var t, n, r, i = w.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
            )
                if (Y(n)) {
                    if ((t = n[J.expando])) {
                        if (t.events)
                            for (r in t.events)
                                i[r]
                                    ? w.event.remove(n, r)
                                    : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0;
                    }
                    n[K.expando] && (n[K.expando] = void 0);
                }
        },
    }),
        w.fn.extend({
            detach: function (e) {
                return Ie(this, e, !0);
            },
            remove: function (e) {
                return Ie(this, e);
            },
            text: function (e) {
                return z(
                    this,
                    function (e) {
                        return void 0 === e
                            ? w.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType &&
                                      11 !== this.nodeType &&
                                      9 !== this.nodeType) ||
                                      (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Re(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        Le(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Re(this, arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = Le(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return Re(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Re(this, arguments, function (e) {
                    this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                        (w.cleanData(ye(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return w.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return z(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if (
                            "string" == typeof e &&
                            !Ae.test(e) &&
                            !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                        (w.cleanData(ye(t, !1)),
                                        (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return Re(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 &&
                            (w.cleanData(ye(this)),
                            n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        w.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (e, t) {
                w.fn[e] = function (e) {
                    for (
                        var n, r = [], i = w(e), o = i.length - 1, a = 0;
                        a <= o;
                        a++
                    )
                        (n = a === o ? this : this.clone(!0)),
                            w(i[a])[t](n),
                            s.apply(r, n.get());
                    return this.pushStack(r);
                };
            }
        );
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        Be = new RegExp(oe.join("|"), "i");
    !(function () {
        function t() {
            if (c) {
                (l.style.cssText =
                    "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (c.style.cssText =
                        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                (i = "1%" !== t.top),
                    (u = 12 === n(t.marginLeft)),
                    (c.style.right = "60%"),
                    (s = 36 === n(t.right)),
                    (o = 36 === n(t.width)),
                    (c.style.position = "absolute"),
                    (a = 36 === c.offsetWidth || "absolute"),
                    be.removeChild(l),
                    (c = null);
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var i,
            o,
            a,
            s,
            u,
            l = r.createElement("div"),
            c = r.createElement("div");
        c.style &&
            ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
            w.extend(h, {
                boxSizingReliable: function () {
                    return t(), o;
                },
                pixelBoxStyles: function () {
                    return t(), s;
                },
                pixelPosition: function () {
                    return t(), i;
                },
                reliableMarginLeft: function () {
                    return t(), u;
                },
                scrollboxSize: function () {
                    return t(), a;
                },
            }));
    })();
    function Fe(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (
            (n = n || $e(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                    w.contains(e.ownerDocument, e) ||
                    (a = w.style(e, t)),
                !h.pixelBoxStyles() &&
                    We.test(a) &&
                    Be.test(t) &&
                    ((r = s.width),
                    (i = s.minWidth),
                    (o = s.maxWidth),
                    (s.minWidth = s.maxWidth = s.width = a),
                    (a = n.width),
                    (s.width = r),
                    (s.minWidth = i),
                    (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = { position: "absolute", visibility: "hidden", display: "block" },
        Ve = { letterSpacing: "0", fontWeight: "400" },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;
    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--) if ((e = Ge[n] + t) in Ye) return e;
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t;
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
                r
                    ? ("content" === n &&
                          (u -= w.css(e, "padding" + oe[a], !0, i)),
                      "margin" !== n &&
                          (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
                    : ((u += w.css(e, "padding" + oe[a], !0, i)),
                      "padding" !== n
                          ? (u += w.css(e, "border" + oe[a] + "Width", !0, i))
                          : (s += w.css(e, "border" + oe[a] + "Width", !0, i)));
        return (
            !r &&
                o >= 0 &&
                (u += Math.max(
                    0,
                    Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                            o -
                            u -
                            s -
                            0.5
                    )
                )),
            u
        );
    }
    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto";
        }
        return (
            (a = a && (h.boxSizingReliable() || i === e.style[t])),
            ("auto" === i ||
                (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) &&
                ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
            (i = parseFloat(i) || 0) +
                Ze(e, t, n || (o ? "border" : "content"), a, r, i) +
                "px"
        );
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if (
                    (u || (t = Je(s)),
                    (a = w.cssHooks[t] || w.cssHooks[s]),
                    void 0 === n)
                )
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                        ? i
                        : l[t];
                "string" == (o = typeof n) &&
                    (i = ie.exec(n)) &&
                    i[1] &&
                    ((n = ue(e, t, i)), (o = "number")),
                    null != n &&
                        n === n &&
                        ("number" === o &&
                            (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
                        h.clearCloneStyle ||
                            "" !== n ||
                            0 !== t.indexOf("background") ||
                            (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                            (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = G(t);
            return (
                Xe.test(t) || (t = Je(s)),
                (a = w.cssHooks[t] || w.cssHooks[s]) &&
                    "get" in a &&
                    (i = a.get(e, !0, n)),
                void 0 === i && (i = Fe(e, t, r)),
                "normal" === i && t in Ve && (i = Ve[t]),
                "" === n || n
                    ? ((o = parseFloat(i)),
                      !0 === n || isFinite(o) ? o || 0 : i)
                    : i
            );
        },
    }),
        w.each(["height", "width"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n)
                        return !ze.test(w.css(e, "display")) ||
                            (e.getClientRects().length &&
                                e.getBoundingClientRect().width)
                            ? et(e, t, r)
                            : se(e, Ue, function () {
                                  return et(e, t, r);
                              });
                },
                set: function (e, n, r) {
                    var i,
                        o = $e(e),
                        a = "border-box" === w.css(e, "boxSizing", !1, o),
                        s = r && Ze(e, t, r, a, o);
                    return (
                        a &&
                            h.scrollboxSize() === o.position &&
                            (s -= Math.ceil(
                                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                                    parseFloat(o[t]) -
                                    Ze(e, t, "border", !1, o) -
                                    0.5
                            )),
                        s &&
                            (i = ie.exec(n)) &&
                            "px" !== (i[3] || "px") &&
                            ((e.style[t] = n), (n = w.css(e, t))),
                        Ke(e, n, s)
                    );
                },
            };
        }),
        (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Fe(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            se(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (w.cssHooks[e + t] = {
                expand: function (n) {
                    for (
                        var r = 0,
                            i = {},
                            o = "string" == typeof n ? n.split(" ") : [n];
                        r < 4;
                        r++
                    )
                        i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                },
            }),
                "margin" !== e && (w.cssHooks[e + t].set = Ke);
        }),
        w.fn.extend({
            css: function (e, t) {
                return z(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = $e(e), i = t.length; a < i; a++)
                                o[t[a]] = w.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
        });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
    }
    (w.Tween = tt),
        (tt.prototype = {
            constructor: tt,
            init: function (e, t, n, r, i, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || w.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (w.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = tt.propHooks[this.prop];
                return e && e.get
                    ? e.get(this)
                    : tt.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = tt.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t =
                              w.easing[this.easing](
                                  e,
                                  this.options.duration * e,
                                  0,
                                  1,
                                  this.options.duration
                              ))
                        : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : tt.propHooks._default.set(this),
                    this
                );
            },
        }),
        (tt.prototype.init.prototype = tt.prototype),
        (tt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
                        ? t
                        : 0;
                },
                set: function (e) {
                    w.fx.step[e.prop]
                        ? w.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (null == e.elem.style[w.cssProps[e.prop]] &&
                              !w.cssHooks[e.prop])
                        ? (e.elem[e.prop] = e.now)
                        : w.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (tt.propHooks.scrollTop = tt.propHooks.scrollLeft =
            {
                set: function (e) {
                    e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                },
            }),
        (w.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (w.fx = tt.prototype.init),
        (w.fx.step = {});
    var nt,
        rt,
        it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;
    function at() {
        rt &&
            (!1 === r.hidden && e.requestAnimationFrame
                ? e.requestAnimationFrame(at)
                : e.setTimeout(at, w.fx.interval),
            w.fx.tick());
    }
    function st() {
        return (
            e.setTimeout(function () {
                nt = void 0;
            }),
            (nt = Date.now())
        );
    }
    function ut(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function lt(e, t, n) {
        for (
            var r,
                i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                o = 0,
                a = i.length;
            o < a;
            o++
        )
            if ((r = i[o].call(n, t, e))) return r;
    }
    function ct(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue ||
            (null == (a = w._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                    a.unqueued || s();
                })),
            a.unqueued++,
            p.always(function () {
                p.always(function () {
                    a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                });
            }));
        for (r in t)
            if (((i = t[r]), it.test(i))) {
                if (
                    (delete t[r],
                    (o = o || "toggle" === i),
                    i === (g ? "hide" : "show"))
                ) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0;
                }
                d[r] = (y && y[r]) || w.style(e, r);
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (l = y && y.display) && (l = J.get(e, "display")),
                "none" === (c = w.css(e, "display")) &&
                    (l
                        ? (c = l)
                        : (fe([e], !0),
                          (l = e.style.display || l),
                          (c = w.css(e, "display")),
                          fe([e]))),
                ("inline" === c || ("inline-block" === c && null != l)) &&
                    "none" === w.css(e, "float") &&
                    (u ||
                        (p.done(function () {
                            h.display = l;
                        }),
                        null == l &&
                            ((c = h.display), (l = "none" === c ? "" : c))),
                    (h.display = "inline-block"))),
                n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                        (h.overflow = n.overflow[0]),
                            (h.overflowX = n.overflow[1]),
                            (h.overflowY = n.overflow[2]);
                    })),
                (u = !1);
            for (r in d)
                u ||
                    (y
                        ? "hidden" in y && (g = y.hidden)
                        : (y = J.access(e, "fxshow", { display: l })),
                    o && (y.hidden = !g),
                    g && fe([e], !0),
                    p.done(function () {
                        g || fe([e]), J.remove(e, "fxshow");
                        for (r in d) w.style(e, r, d[r]);
                    })),
                    (u = lt(g ? y[r] : 0, r, p)),
                    r in y ||
                        ((y[r] = u.start),
                        g && ((u.end = u.start), (u.start = 0)));
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (
                ((r = G(n)),
                (i = t[r]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (a = w.cssHooks[r]) && "expand" in a)
            ) {
                (o = a.expand(o)), delete e[r];
                for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
            } else t[r] = i;
    }
    function pt(e, t, n) {
        var r,
            i,
            o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (i) return !1;
                for (
                    var t = nt || st(),
                        n = Math.max(0, l.startTime + l.duration - t),
                        r = 1 - (n / l.duration || 0),
                        o = 0,
                        a = l.tweens.length;
                    o < a;
                    o++
                )
                    l.tweens[o].run(r);
                return (
                    s.notifyWith(e, [l, r, n]),
                    r < 1 && a
                        ? n
                        : (a || s.notifyWith(e, [l, 1, 0]),
                          s.resolveWith(e, [l]),
                          !1)
                );
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(
                    !0,
                    { specialEasing: {}, easing: w.easing._default },
                    n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(
                        e,
                        l.opts,
                        t,
                        n,
                        l.opts.specialEasing[t] || l.opts.easing
                    );
                    return l.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return (
                        t
                            ? (s.notifyWith(e, [l, 1, 0]),
                              s.resolveWith(e, [l, t]))
                            : s.rejectWith(e, [l, t]),
                        this
                    );
                },
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if ((r = pt.prefilters[o].call(l, e, c, l.opts)))
                return (
                    g(r.stop) &&
                        (w._queueHooks(l.elem, l.opts.queue).stop =
                            r.stop.bind(r)),
                    r
                );
        return (
            w.map(c, lt, l),
            g(l.opts.start) && l.opts.start.call(e, l),
            l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
            w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
            l
        );
    }
    (w.Animation = w.extend(pt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
            for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                    (pt.tweeners[n] = pt.tweeners[n] || []),
                    pt.tweeners[n].unshift(t);
        },
        prefilters: [ct],
        prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
    })),
        (w.speed = function (e, t, n) {
            var r =
                e && "object" == typeof e
                    ? w.extend({}, e)
                    : {
                          complete: n || (!n && t) || (g(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !g(t) && t),
                      };
            return (
                w.fx.off
                    ? (r.duration = 0)
                    : "number" != typeof r.duration &&
                      (r.duration in w.fx.speeds
                          ? (r.duration = w.fx.speeds[r.duration])
                          : (r.duration = w.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    g(r.old) && r.old.call(this),
                        r.queue && w.dequeue(this, r.queue);
                }),
                r
            );
        }),
        w.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    a = function () {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0);
                    };
                return (
                    (a.finish = a),
                    i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = w.timers,
                            a = J.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a)
                                a[i] && a[i].stop && ot.test(i) && r(a[i]);
                        for (i = o.length; i--; )
                            o[i].elem !== this ||
                                (null != e && o[i].queue !== e) ||
                                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                        (!t && n) || w.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = J.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = w.timers,
                            a = r ? r.length : 0;
                        for (
                            n.finish = !0,
                                w.queue(this, e, []),
                                i && i.stop && i.stop.call(this, !0),
                                t = o.length;
                            t--;

                        )
                            o[t].elem === this &&
                                o[t].queue === e &&
                                (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(ut(t, !0), e, r, i);
            };
        }),
        w.each(
            {
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
                w.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r);
                };
            }
        ),
        (w.timers = []),
        (w.fx.tick = function () {
            var e,
                t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), (nt = void 0);
        }),
        (w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
            rt || ((rt = !0), at());
        }),
        (w.fx.stop = function () {
            rt = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (t, n) {
            return (
                (t = w.fx ? w.fx.speeds[t] || t : t),
                (n = n || "fx"),
                this.queue(n, function (n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function () {
                        e.clearTimeout(i);
                    };
                })
            );
        }),
        (function () {
            var e = r.createElement("input"),
                t = r
                    .createElement("select")
                    .appendChild(r.createElement("option"));
            (e.type = "checkbox"),
                (h.checkOn = "" !== e.value),
                (h.optSelected = t.selected),
                ((e = r.createElement("input")).value = "t"),
                (e.type = "radio"),
                (h.radioValue = "t" === e.value);
        })();
    var dt,
        ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        },
    }),
        w.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? w.prop(e, t, n)
                        : ((1 === o && w.isXMLDoc(e)) ||
                              (i =
                                  w.attrHooks[t.toLowerCase()] ||
                                  (w.expr.match.bool.test(t) ? dt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void w.removeAttr(e, t)
                                  : i &&
                                    "set" in i &&
                                    void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = w.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!h.radioValue && "radio" === t && N(e, "input")) {
                            var n = e.value;
                            return (
                                e.setAttribute("type", t), n && (e.value = n), t
                            );
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(M);
                if (i && 1 === e.nodeType)
                    while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (dt = {
            set: function (e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || w.find.attr;
            ht[t] = function (e, t, r) {
                var i,
                    o,
                    a = t.toLowerCase();
                return (
                    r ||
                        ((o = ht[a]),
                        (ht[a] = i),
                        (i = null != n(e, t, r) ? a : null),
                        (ht[a] = o)),
                    i
                );
            };
        });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        },
    }),
        w.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && w.isXMLDoc(e)) ||
                            ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                        void 0 !== n
                            ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                ? r
                                : (e[t] = n)
                            : i && "get" in i && null !== (r = i.get(e, t))
                            ? r
                            : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = w.find.attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : gt.test(e.nodeName) ||
                              (yt.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        h.optSelected ||
            (w.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return (
                        t && t.parentNode && t.parentNode.selectedIndex, null
                    );
                },
                set: function (e) {
                    var t = e.parentNode;
                    t &&
                        (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        w.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                w.propFix[this.toLowerCase()] = this;
            }
        );
    function vt(e) {
        return (e.match(M) || []).join(" ");
    }
    function mt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function xt(e) {
        return Array.isArray(e)
            ? e
            : "string" == typeof e
            ? e.match(M) || []
            : [];
    }
    w.fn.extend({
        addClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).addClass(e.call(this, t, mt(this)));
                });
            if ((t = xt(e)).length)
                while ((n = this[u++]))
                    if (
                        ((i = mt(n)),
                        (r = 1 === n.nodeType && " " + vt(i) + " "))
                    ) {
                        a = 0;
                        while ((o = t[a++]))
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
            return this;
        },
        removeClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).removeClass(e.call(this, t, mt(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while ((n = this[u++]))
                    if (
                        ((i = mt(n)),
                        (r = 1 === n.nodeType && " " + vt(i) + " "))
                    ) {
                        a = 0;
                        while ((o = t[a++]))
                            while (r.indexOf(" " + o + " ") > -1)
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
                ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                : g(e)
                ? this.each(function (n) {
                      w(this).toggleClass(e.call(this, n, mt(this), t), t);
                  })
                : this.each(function () {
                      var t, i, o, a;
                      if (r) {
                          (i = 0), (o = w(this)), (a = xt(e));
                          while ((t = a[i++]))
                              o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      } else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
                  });
        },
        hasClass: function (e) {
            var t,
                n,
                r = 0;
            t = " " + e + " ";
            while ((n = this[r++]))
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1;
        },
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t,
                n,
                r,
                i = this[0];
            {
                if (arguments.length)
                    return (
                        (r = g(e)),
                        this.each(function (n) {
                            var i;
                            1 === this.nodeType &&
                                (null ==
                                (i = r ? e.call(this, n, w(this).val()) : e)
                                    ? (i = "")
                                    : "number" == typeof i
                                    ? (i += "")
                                    : Array.isArray(i) &&
                                      (i = w.map(i, function (e) {
                                          return null == e ? "" : e + "";
                                      })),
                                ((t =
                                    w.valHooks[this.type] ||
                                    w.valHooks[this.nodeName.toLowerCase()]) &&
                                    "set" in t &&
                                    void 0 !== t.set(this, i, "value")) ||
                                    (this.value = i));
                        })
                    );
                if (i)
                    return (t =
                        w.valHooks[i.type] ||
                        w.valHooks[i.nodeName.toLowerCase()]) &&
                        "get" in t &&
                        void 0 !== (n = t.get(i, "value"))
                        ? n
                        : "string" == typeof (n = i.value)
                        ? n.replace(bt, "")
                        : null == n
                        ? ""
                        : n;
            }
        },
    }),
        w.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = w.find.attr(e, "value");
                        return null != t ? t : vt(w.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (
                                ((n = i[r]).selected || r === o) &&
                                !n.disabled &&
                                (!n.parentNode.disabled ||
                                    !N(n.parentNode, "optgroup"))
                            ) {
                                if (((t = w(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = w.makeArray(t),
                            a = i.length;
                        while (a--)
                            ((r = i[a]).selected =
                                w.inArray(w.valHooks.option.get(r), o) > -1) &&
                                (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        w.each(["radio", "checkbox"], function () {
            (w.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t))
                        return (e.checked = w.inArray(w(e).val(), t) > -1);
                },
            }),
                h.checkOn ||
                    (w.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value")
                            ? "on"
                            : e.value;
                    });
        }),
        (h.focusin = "onfocusin" in e);
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
            e.stopPropagation();
        };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a,
                s,
                u,
                l,
                c,
                p,
                d,
                h,
                v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((s = h = u = i = i || r),
                3 !== i.nodeType &&
                    8 !== i.nodeType &&
                    !wt.test(m + w.event.triggered) &&
                    (m.indexOf(".") > -1 &&
                        ((m = (x = m.split(".")).shift()), x.sort()),
                    (c = m.indexOf(":") < 0 && "on" + m),
                    (t = t[w.expando]
                        ? t
                        : new w.Event(m, "object" == typeof t && t)),
                    (t.isTrigger = o ? 2 : 3),
                    (t.namespace = x.join(".")),
                    (t.rnamespace = t.namespace
                        ? new RegExp(
                              "(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          )
                        : null),
                    (t.result = void 0),
                    t.target || (t.target = i),
                    (n = null == n ? [t] : w.makeArray(n, [t])),
                    (d = w.event.special[m] || {}),
                    o || !d.trigger || !1 !== d.trigger.apply(i, n)))
            ) {
                if (!o && !d.noBubble && !y(i)) {
                    for (
                        l = d.delegateType || m,
                            wt.test(l + m) || (s = s.parentNode);
                        s;
                        s = s.parentNode
                    )
                        v.push(s), (u = s);
                    u === (i.ownerDocument || r) &&
                        v.push(u.defaultView || u.parentWindow || e);
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped())
                    (h = s),
                        (t.type = a > 1 ? l : d.bindType || m),
                        (p =
                            (J.get(s, "events") || {})[t.type] &&
                            J.get(s, "handle")) && p.apply(s, n),
                        (p = c && s[c]) &&
                            p.apply &&
                            Y(s) &&
                            ((t.result = p.apply(s, n)),
                            !1 === t.result && t.preventDefault());
                return (
                    (t.type = m),
                    o ||
                        t.isDefaultPrevented() ||
                        (d._default && !1 !== d._default.apply(v.pop(), n)) ||
                        !Y(i) ||
                        (c &&
                            g(i[m]) &&
                            !y(i) &&
                            ((u = i[c]) && (i[c] = null),
                            (w.event.triggered = m),
                            t.isPropagationStopped() &&
                                h.addEventListener(m, Tt),
                            i[m](),
                            t.isPropagationStopped() &&
                                h.removeEventListener(m, Tt),
                            (w.event.triggered = void 0),
                            u && (i[c] = u))),
                    t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
            w.event.trigger(r, null, t);
        },
    }),
        w.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    w.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0);
            },
        }),
        h.focusin ||
            w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                    w.event.simulate(t, e.target, w.event.fix(e));
                };
                w.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t);
                        i || r.addEventListener(e, n, !0),
                            J.access(r, t, (i || 0) + 1);
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t) - 1;
                        i
                            ? J.access(r, t, i)
                            : (r.removeEventListener(e, n, !0), J.remove(r, t));
                    },
                };
            });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return (
            (n && !n.getElementsByTagName("parsererror").length) ||
                w.error("Invalid XML: " + t),
            n
        );
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, function (t, i) {
                n || St.test(e)
                    ? r(e, i)
                    : jt(
                          e +
                              "[" +
                              ("object" == typeof i && null != i ? t : "") +
                              "]",
                          i,
                          n,
                          r
                      );
            });
        else if (n || "object" !== x(t)) r(e, t);
        else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
    }
    (w.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = g(t) ? t() : t;
                r[r.length] =
                    encodeURIComponent(e) +
                    "=" +
                    encodeURIComponent(null == n ? "" : n);
            };
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
            w.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) jt(n, e[n], t, i);
        return r.join("&");
    }),
        w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = w.prop(this, "elements");
                    return e ? w.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !w(this).is(":disabled") &&
                            At.test(this.nodeName) &&
                            !Nt.test(e) &&
                            (this.checked || !pe.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = w(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? w.map(n, function (e) {
                                  return {
                                      name: t.name,
                                      value: e.replace(Dt, "\r\n"),
                                  };
                              })
                            : { name: t.name, value: n.replace(Dt, "\r\n") };
                    })
                    .get();
            },
        });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n))
                while ((r = o[i++]))
                    "+" === r[0]
                        ? ((r = r.slice(1) || "*"),
                          (e[r] = e[r] || []).unshift(n))
                        : (e[r] = e[r] || []).push(n);
        };
    }
    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;
        function a(s) {
            var u;
            return (
                (i[s] = !0),
                w.each(e[s] || [], function (e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || o || i[l]
                        ? o
                            ? !(u = l)
                            : void 0
                        : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
            );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
    }
    function zt(e, t) {
        var n,
            r,
            i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e;
    }
    function Xt(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0])
            u.shift(),
                void 0 === r &&
                    (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break;
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                a || (a = i);
            }
            o = o || a;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function Ut(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (
                (e.responseFields[o] && (n[e.responseFields[o]] = t),
                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                (u = o),
                (o = c.shift()))
            )
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if (
                                (s = i.split(" "))[1] === o &&
                                (a = l[u + " " + s[0]] || l["* " + s[0]])
                            ) {
                                !0 === a
                                    ? (a = l[i])
                                    : !0 !== l[i] &&
                                      ((o = s[0]), c.unshift(s[1]));
                                break;
                            }
                    if (!0 !== a)
                        if (a && e["throws"]) t = a(t);
                        else
                            try {
                                t = a(t);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a
                                        ? e
                                        : "No conversion from " +
                                          u +
                                          " to " +
                                          o,
                                };
                            }
                }
        return { state: "success", data: t };
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while ((t = Ot.exec(a)))
                                    s[t[1].toLowerCase()] = t[2];
                            }
                            t = s[e.toLowerCase()];
                        }
                        return null == t ? null : t;
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null;
                    },
                    setRequestHeader: function (e, t) {
                        return (
                            null == c &&
                                ((e = T[e.toLowerCase()] =
                                    T[e.toLowerCase()] || e),
                                (b[e] = t)),
                            this
                        );
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else for (t in e) x[t] = [x[t], e[t]];
                        return this;
                    },
                    abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this;
                    },
                };
            if (
                (v.promise(E),
                (h.url = ((t || h.url || Ct.href) + "").replace(
                    Rt,
                    Ct.protocol + "//"
                )),
                (h.type = n.method || n.type || h.method || h.type),
                (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [
                    "",
                ]),
                null == h.crossDomain)
            ) {
                l = r.createElement("a");
                try {
                    (l.href = h.url),
                        (l.href = l.href),
                        (h.crossDomain =
                            Bt.protocol + "//" + Bt.host !=
                            l.protocol + "//" + l.host);
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if (
                (h.data &&
                    h.processData &&
                    "string" != typeof h.data &&
                    (h.data = w.param(h.data, h.traditional)),
                _t(It, h, n, E),
                c)
            )
                return E;
            (f = w.event && h.global) &&
                0 == w.active++ &&
                w.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Mt.test(h.type)),
                (o = h.url.replace(Lt, "")),
                h.hasContent
                    ? h.data &&
                      h.processData &&
                      0 ===
                          (h.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                          ) &&
                      (h.data = h.data.replace(qt, "+"))
                    : ((d = h.url.slice(o.length)),
                      h.data &&
                          (h.processData || "string" == typeof h.data) &&
                          ((o += (kt.test(o) ? "&" : "?") + h.data),
                          delete h.data),
                      !1 === h.cache &&
                          ((o = o.replace(Ht, "$1")),
                          (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
                      (h.url = o + d)),
                h.ifModified &&
                    (w.lastModified[o] &&
                        E.setRequestHeader(
                            "If-Modified-Since",
                            w.lastModified[o]
                        ),
                    w.etag[o] &&
                        E.setRequestHeader("If-None-Match", w.etag[o])),
                ((h.data && h.hasContent && !1 !== h.contentType) ||
                    n.contentType) &&
                    E.setRequestHeader("Content-Type", h.contentType),
                E.setRequestHeader(
                    "Accept",
                    h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                        ? h.accepts[h.dataTypes[0]] +
                              ("*" !== h.dataTypes[0]
                                  ? ", " + $t + "; q=0.01"
                                  : "")
                        : h.accepts["*"]
                );
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
                return E.abort();
            if (
                ((C = "abort"),
                m.add(h.complete),
                E.done(h.success),
                E.fail(h.error),
                (i = _t(Wt, h, n, E)))
            ) {
                if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c))
                    return E;
                h.async &&
                    h.timeout > 0 &&
                    (u = e.setTimeout(function () {
                        E.abort("timeout");
                    }, h.timeout));
                try {
                    (c = !1), i.send(b, k);
                } catch (e) {
                    if (c) throw e;
                    k(-1, e);
                }
            } else k(-1, "No Transport");
            function k(t, n, r, s) {
                var l,
                    p,
                    d,
                    b,
                    T,
                    C = n;
                c ||
                    ((c = !0),
                    u && e.clearTimeout(u),
                    (i = void 0),
                    (a = s || ""),
                    (E.readyState = t > 0 ? 4 : 0),
                    (l = (t >= 200 && t < 300) || 304 === t),
                    r && (b = Xt(h, E, r)),
                    (b = Ut(h, b, E, l)),
                    l
                        ? (h.ifModified &&
                              ((T = E.getResponseHeader("Last-Modified")) &&
                                  (w.lastModified[o] = T),
                              (T = E.getResponseHeader("etag")) &&
                                  (w.etag[o] = T)),
                          204 === t || "HEAD" === h.type
                              ? (C = "nocontent")
                              : 304 === t
                              ? (C = "notmodified")
                              : ((C = b.state),
                                (p = b.data),
                                (l = !(d = b.error))))
                        : ((d = C),
                          (!t && C) || ((C = "error"), t < 0 && (t = 0))),
                    (E.status = t),
                    (E.statusText = (n || C) + ""),
                    l
                        ? v.resolveWith(g, [p, C, E])
                        : v.rejectWith(g, [E, C, d]),
                    E.statusCode(x),
                    (x = void 0),
                    f &&
                        y.trigger(l ? "ajaxSuccess" : "ajaxError", [
                            E,
                            h,
                            l ? p : d,
                        ]),
                    m.fireWith(g, [E, C]),
                    f &&
                        (y.trigger("ajaxComplete", [E, h]),
                        --w.active || w.event.trigger("ajaxStop")));
            }
            return E;
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json");
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script");
        },
    }),
        w.each(["get", "post"], function (e, t) {
            w[t] = function (e, n, r, i) {
                return (
                    g(n) && ((i = i || r), (r = n), (n = void 0)),
                    w.ajax(
                        w.extend(
                            {
                                url: e,
                                type: t,
                                dataType: i,
                                data: n,
                                success: r,
                            },
                            w.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        (w._evalUrl = function (e) {
            return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0,
            });
        }),
        w.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (g(e) && (e = e.call(this[0])),
                        (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstElementChild)
                                    e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (e) {
                return g(e)
                    ? this.each(function (t) {
                          w(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = w(this),
                              n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = g(e);
                return this.each(function (n) {
                    w(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            w(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (w.expr.pseudos.hidden = function (e) {
            return !w.expr.pseudos.visible(e);
        }),
        (w.expr.pseudos.visible = function (e) {
            return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
            );
        }),
        (w.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (e) {}
        });
    var Vt = { 0: 200, 1223: 204 },
        Gt = w.ajaxSettings.xhr();
    (h.cors = !!Gt && "withCredentials" in Gt),
        (h.ajax = Gt = !!Gt),
        w.ajaxTransport(function (t) {
            var n, r;
            if (h.cors || (Gt && !t.crossDomain))
                return {
                    send: function (i, o) {
                        var a,
                            s = t.xhr();
                        if (
                            (s.open(
                                t.type,
                                t.url,
                                t.async,
                                t.username,
                                t.password
                            ),
                            t.xhrFields)
                        )
                            for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        t.mimeType &&
                            s.overrideMimeType &&
                            s.overrideMimeType(t.mimeType),
                            t.crossDomain ||
                                i["X-Requested-With"] ||
                                (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i) s.setRequestHeader(a, i[a]);
                        (n = function (e) {
                            return function () {
                                n &&
                                    ((n =
                                        r =
                                        s.onload =
                                        s.onerror =
                                        s.onabort =
                                        s.ontimeout =
                                        s.onreadystatechange =
                                            null),
                                    "abort" === e
                                        ? s.abort()
                                        : "error" === e
                                        ? "number" != typeof s.status
                                            ? o(0, "error")
                                            : o(s.status, s.statusText)
                                        : o(
                                              Vt[s.status] || s.status,
                                              s.statusText,
                                              "text" !==
                                                  (s.responseType || "text") ||
                                                  "string" !=
                                                      typeof s.responseText
                                                  ? { binary: s.response }
                                                  : { text: s.responseText },
                                              s.getAllResponseHeaders()
                                          ));
                            };
                        }),
                            (s.onload = n()),
                            (r = s.onerror = s.ontimeout = n("error")),
                            void 0 !== s.onabort
                                ? (s.onabort = r)
                                : (s.onreadystatechange = function () {
                                      4 === s.readyState &&
                                          e.setTimeout(function () {
                                              n && r();
                                          });
                                  }),
                            (n = n("abort"));
                        try {
                            s.send((t.hasContent && t.data) || null);
                        } catch (e) {
                            if (n) throw e;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        w.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        w.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return w.globalEval(e), e;
                },
            },
        }),
        w.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
        }),
        w.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, o) {
                        (t = w("<script>")
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(),
                                        (n = null),
                                        e &&
                                            o(
                                                "error" === e.type ? 404 : 200,
                                                e.type
                                            );
                                })
                            )),
                            r.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
            }
        });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return (this[e] = !0), e;
        },
    }),
        w.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i,
                o,
                a,
                s =
                    !1 !== t.jsonp &&
                    (Qt.test(t.url)
                        ? "url"
                        : "string" == typeof t.data &&
                          0 ===
                              (t.contentType || "").indexOf(
                                  "application/x-www-form-urlencoded"
                              ) &&
                          Qt.test(t.data) &&
                          "data");
            if (s || "jsonp" === t.dataTypes[0])
                return (
                    (i = t.jsonpCallback =
                        g(t.jsonpCallback)
                            ? t.jsonpCallback()
                            : t.jsonpCallback),
                    s
                        ? (t[s] = t[s].replace(Qt, "$1" + i))
                        : !1 !== t.jsonp &&
                          (t.url +=
                              (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    (t.converters["script json"] = function () {
                        return a || w.error(i + " was not called"), a[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (o = e[i]),
                    (e[i] = function () {
                        a = arguments;
                    }),
                    r.always(function () {
                        void 0 === o ? w(e).removeProp(i) : (e[i] = o),
                            t[i] &&
                                ((t.jsonpCallback = n.jsonpCallback),
                                Yt.push(i)),
                            a && g(o) && o(a[0]),
                            (a = o = void 0);
                    }),
                    "script"
                );
        }),
        (h.createHTMLDocument = (function () {
            var e = r.implementation.createHTMLDocument("").body;
            return (
                (e.innerHTML = "<form></form><form></form>"),
                2 === e.childNodes.length
            );
        })()),
        (w.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && ((n = t), (t = !1));
            var i, o, a;
            return (
                t ||
                    (h.createHTMLDocument
                        ? (((i = (t =
                              r.implementation.createHTMLDocument(
                                  ""
                              )).createElement("base")).href = r.location.href),
                          t.head.appendChild(i))
                        : (t = r)),
                (o = A.exec(e)),
                (a = !n && []),
                o
                    ? [t.createElement(o[1])]
                    : ((o = xe([e], t, a)),
                      a && a.length && w(a).remove(),
                      w.merge([], o.childNodes))
            );
        }),
        (w.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
                g(t)
                    ? ((n = t), (t = void 0))
                    : t && "object" == typeof t && (i = "POST"),
                a.length > 0 &&
                    w
                        .ajax({
                            url: e,
                            type: i || "GET",
                            dataType: "html",
                            data: t,
                        })
                        .done(function (e) {
                            (o = arguments),
                                a.html(
                                    r
                                        ? w("<div>")
                                              .append(w.parseHTML(e))
                                              .find(r)
                                        : e
                                );
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(
                                            this,
                                            o || [e.responseText, t, e]
                                        );
                                    });
                                }
                        ),
                this
            );
        }),
        w.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (e, t) {
                w.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        (w.expr.pseudos.animated = function (e) {
            return w.grep(w.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (w.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = w.css(e, "position"),
                    f = w(e),
                    p = {};
                "static" === c && (e.style.position = "relative"),
                    (s = f.offset()),
                    (o = w.css(e, "top")),
                    (u = w.css(e, "left")),
                    (l =
                        ("absolute" === c || "fixed" === c) &&
                        (o + u).indexOf("auto") > -1)
                        ? ((a = (r = f.position()).top), (i = r.left))
                        : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    g(t) && (t = t.call(e, n, w.extend({}, s))),
                    null != t.top && (p.top = t.top - s.top + a),
                    null != t.left && (p.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, p) : f.css(p);
            },
        }),
        w.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              w.offset.setOffset(this, e, t);
                          });
                var t,
                    n,
                    r = this[0];
                if (r)
                    return r.getClientRects().length
                        ? ((t = r.getBoundingClientRect()),
                          (n = r.ownerDocument.defaultView),
                          {
                              top: t.top + n.pageYOffset,
                              left: t.left + n.pageXOffset,
                          })
                        : { top: 0, left: 0 };
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === w.css(r, "position"))
                        t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()),
                            (n = r.ownerDocument),
                            (e = r.offsetParent || n.documentElement);
                        while (
                            e &&
                            (e === n.body || e === n.documentElement) &&
                            "static" === w.css(e, "position")
                        )
                            e = e.parentNode;
                        e &&
                            e !== r &&
                            1 === e.nodeType &&
                            (((i = w(e).offset()).top += w.css(
                                e,
                                "borderTopWidth",
                                !0
                            )),
                            (i.left += w.css(e, "borderLeftWidth", !0)));
                    }
                    return {
                        top: t.top - i.top - w.css(r, "marginTop", !0),
                        left: t.left - i.left - w.css(r, "marginLeft", !0),
                    };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === w.css(e, "position"))
                        e = e.offsetParent;
                    return e || be;
                });
            },
        }),
        w.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
                var n = "pageYOffset" === t;
                w.fn[e] = function (r) {
                    return z(
                        this,
                        function (e, r, i) {
                            var o;
                            if (
                                (y(e)
                                    ? (o = e)
                                    : 9 === e.nodeType && (o = e.defaultView),
                                void 0 === i)
                            )
                                return o ? o[t] : e[r];
                            o
                                ? o.scrollTo(
                                      n ? o.pageXOffset : i,
                                      n ? i : o.pageYOffset
                                  )
                                : (e[r] = i);
                        },
                        e,
                        r,
                        arguments.length
                    );
                };
            }
        ),
        w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
                if (n)
                    return (
                        (n = Fe(e, t)),
                        We.test(n) ? w(e).position()[t] + "px" : n
                    );
            });
        }),
        w.each({ Height: "height", Width: "width" }, function (e, t) {
            w.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                    w.fn[r] = function (i, o) {
                        var a =
                                arguments.length &&
                                (n || "boolean" != typeof i),
                            s =
                                n ||
                                (!0 === i || !0 === o ? "margin" : "border");
                        return z(
                            this,
                            function (t, n, i) {
                                var o;
                                return y(t)
                                    ? 0 === r.indexOf("outer")
                                        ? t["inner" + e]
                                        : t.document.documentElement[
                                              "client" + e
                                          ]
                                    : 9 === t.nodeType
                                    ? ((o = t.documentElement),
                                      Math.max(
                                          t.body["scroll" + e],
                                          o["scroll" + e],
                                          t.body["offset" + e],
                                          o["offset" + e],
                                          o["client" + e]
                                      ))
                                    : void 0 === i
                                    ? w.css(t, n, s)
                                    : w.style(t, n, i, s);
                            },
                            t,
                            a ? i : void 0,
                            a
                        );
                    };
                }
            );
        }),
        w.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
            ),
            function (e, t) {
                w.fn[t] = function (e, n) {
                    return arguments.length > 0
                        ? this.on(t, null, e, n)
                        : this.trigger(t);
                };
            }
        ),
        w.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        w.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
            },
        }),
        (w.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
                return (
                    (r = o.call(arguments, 2)),
                    (i = function () {
                        return e.apply(t || this, r.concat(o.call(arguments)));
                    }),
                    (i.guid = e.guid = e.guid || w.guid++),
                    i
                );
        }),
        (w.holdReady = function (e) {
            e ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = N),
        (w.isFunction = g),
        (w.isWindow = y),
        (w.camelCase = G),
        (w.type = x),
        (w.now = Date.now),
        (w.isNumeric = function (e) {
            var t = w.type(e);
            return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return w;
            });
    var Jt = e.jQuery,
        Kt = e.$;
    return (
        (w.noConflict = function (t) {
            return (
                e.$ === w && (e.$ = Kt),
                t && e.jQuery === w && (e.jQuery = Jt),
                w
            );
        }),
        t || (e.jQuery = e.$ = w),
        w
    );
});

/*!
 * Bootstrap v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define(e)
        : ((t =
              "undefined" != typeof globalThis
                  ? globalThis
                  : t || self).bootstrap = e());
})(this, function () {
    "use strict";
    const t = {
            find: (t, e = document.documentElement) =>
                [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) =>
                Element.prototype.querySelector.call(e, t),
            children: (t, e) =>
                [].concat(...t.children).filter((t) => t.matches(e)),
            parents(t, e) {
                const i = [];
                let n = t.parentNode;
                for (
                    ;
                    n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;

                )
                    n.matches(e) && i.push(n), (n = n.parentNode);
                return i;
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i; ) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling;
                }
                return [];
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i; ) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling;
                }
                return [];
            },
        },
        e = (t) => {
            do {
                t += Math.floor(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
        },
        i = (t) => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
                i.includes("#") &&
                    !i.startsWith("#") &&
                    (i = "#" + i.split("#")[1]),
                    (e = i && "#" !== i ? i.trim() : null);
            }
            return e;
        },
        n = (t) => {
            const e = i(t);
            return e && document.querySelector(e) ? e : null;
        },
        s = (t) => {
            const e = i(t);
            return e ? document.querySelector(e) : null;
        },
        o = (t) => {
            t.dispatchEvent(new Event("transitionend"));
        },
        r = (t) =>
            !(!t || "object" != typeof t) &&
            (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        a = (e) =>
            r(e)
                ? e.jquery
                    ? e[0]
                    : e
                : "string" == typeof e && e.length > 0
                ? t.findOne(e)
                : null,
        l = (t, e, i) => {
            Object.keys(i).forEach((n) => {
                const s = i[n],
                    o = e[n],
                    a =
                        o && r(o)
                            ? "element"
                            : null == (l = o)
                            ? "" + l
                            : {}.toString
                                  .call(l)
                                  .match(/\s([a-z]+)/i)[1]
                                  .toLowerCase();
                var l;
                if (!new RegExp(s).test(a))
                    throw new TypeError(
                        `${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`
                    );
            });
        },
        c = (t) =>
            !(!r(t) || 0 === t.getClientRects().length) &&
            "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        h = (t) =>
            !t ||
            t.nodeType !== Node.ELEMENT_NODE ||
            !!t.classList.contains("disabled") ||
            (void 0 !== t.disabled
                ? t.disabled
                : t.hasAttribute("disabled") &&
                  "false" !== t.getAttribute("disabled")),
        d = (t) => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot
                ? t
                : t.parentNode
                ? d(t.parentNode)
                : null;
        },
        u = () => {},
        f = (t) => t.offsetHeight,
        p = () => {
            const { jQuery: t } = window;
            return t && !document.body.hasAttribute("data-bs-no-jquery")
                ? t
                : null;
        },
        m = [],
        g = () => "rtl" === document.documentElement.dir,
        _ = (t) => {
            var e;
            (e = () => {
                const e = p();
                if (e) {
                    const i = t.NAME,
                        n = e.fn[i];
                    (e.fn[i] = t.jQueryInterface),
                        (e.fn[i].Constructor = t),
                        (e.fn[i].noConflict = () => (
                            (e.fn[i] = n), t.jQueryInterface
                        ));
                }
            }),
                "loading" === document.readyState
                    ? (m.length ||
                          document.addEventListener("DOMContentLoaded", () => {
                              m.forEach((t) => t());
                          }),
                      m.push(e))
                    : e();
        },
        b = (t) => {
            "function" == typeof t && t();
        },
        v = (t, e, i = !0) => {
            if (!i) return void b(t);
            const n =
                ((t) => {
                    if (!t) return 0;
                    let { transitionDuration: e, transitionDelay: i } =
                        window.getComputedStyle(t);
                    const n = Number.parseFloat(e),
                        s = Number.parseFloat(i);
                    return n || s
                        ? ((e = e.split(",")[0]),
                          (i = i.split(",")[0]),
                          1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
                        : 0;
                })(e) + 5;
            let s = !1;
            const r = ({ target: i }) => {
                i === e &&
                    ((s = !0), e.removeEventListener("transitionend", r), b(t));
            };
            e.addEventListener("transitionend", r),
                setTimeout(() => {
                    s || o(e);
                }, n);
        },
        y = (t, e, i, n) => {
            let s = t.indexOf(e);
            if (-1 === s) return t[!i && n ? t.length - 1 : 0];
            const o = t.length;
            return (
                (s += i ? 1 : -1),
                n && (s = (s + o) % o),
                t[Math.max(0, Math.min(s, o - 1))]
            );
        },
        w = /[^.]*(?=\..*)\.|.*/,
        E = /\..*/,
        A = /::\d+$/,
        T = {};
    let O = 1;
    const C = { mouseenter: "mouseover", mouseleave: "mouseout" },
        k = /^(mouseenter|mouseleave)/i,
        L = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
        ]);
    function x(t, e) {
        return (e && `${e}::${O++}`) || t.uidEvent || O++;
    }
    function D(t) {
        const e = x(t);
        return (t.uidEvent = e), (T[e] = T[e] || {}), T[e];
    }
    function S(t, e, i = null) {
        const n = Object.keys(t);
        for (let s = 0, o = n.length; s < o; s++) {
            const o = t[n[s]];
            if (o.originalHandler === e && o.delegationSelector === i) return o;
        }
        return null;
    }
    function I(t, e, i) {
        const n = "string" == typeof e,
            s = n ? i : e;
        let o = M(t);
        return L.has(o) || (o = t), [n, s, o];
    }
    function N(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        if ((i || ((i = n), (n = null)), k.test(e))) {
            const t = (t) =>
                function (e) {
                    if (
                        !e.relatedTarget ||
                        (e.relatedTarget !== e.delegateTarget &&
                            !e.delegateTarget.contains(e.relatedTarget))
                    )
                        return t.call(this, e);
                };
            n ? (n = t(n)) : (i = t(i));
        }
        const [o, r, a] = I(e, i, n),
            l = D(t),
            c = l[a] || (l[a] = {}),
            h = S(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && s);
        const d = x(r, e.replace(w, "")),
            u = o
                ? (function (t, e, i) {
                      return function n(s) {
                          const o = t.querySelectorAll(e);
                          for (
                              let { target: r } = s;
                              r && r !== this;
                              r = r.parentNode
                          )
                              for (let a = o.length; a--; )
                                  if (o[a] === r)
                                      return (
                                          (s.delegateTarget = r),
                                          n.oneOff && P.off(t, s.type, e, i),
                                          i.apply(r, [s])
                                      );
                          return null;
                      };
                  })(t, i, n)
                : (function (t, e) {
                      return function i(n) {
                          return (
                              (n.delegateTarget = t),
                              i.oneOff && P.off(t, n.type, e),
                              e.apply(t, [n])
                          );
                      };
                  })(t, i);
        (u.delegationSelector = o ? i : null),
            (u.originalHandler = r),
            (u.oneOff = s),
            (u.uidEvent = d),
            (c[d] = u),
            t.addEventListener(a, u, o);
    }
    function j(t, e, i, n, s) {
        const o = S(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    function M(t) {
        return (t = t.replace(E, "")), C[t] || t;
    }
    const P = {
            on(t, e, i, n) {
                N(t, e, i, n, !1);
            },
            one(t, e, i, n) {
                N(t, e, i, n, !0);
            },
            off(t, e, i, n) {
                if ("string" != typeof e || !t) return;
                const [s, o, r] = I(e, i, n),
                    a = r !== e,
                    l = D(t),
                    c = e.startsWith(".");
                if (void 0 !== o) {
                    if (!l || !l[r]) return;
                    return void j(t, l, r, o, s ? i : null);
                }
                c &&
                    Object.keys(l).forEach((i) => {
                        !(function (t, e, i, n) {
                            const s = e[i] || {};
                            Object.keys(s).forEach((o) => {
                                if (o.includes(n)) {
                                    const n = s[o];
                                    j(
                                        t,
                                        e,
                                        i,
                                        n.originalHandler,
                                        n.delegationSelector
                                    );
                                }
                            });
                        })(t, l, i, e.slice(1));
                    });
                const h = l[r] || {};
                Object.keys(h).forEach((i) => {
                    const n = i.replace(A, "");
                    if (!a || e.includes(n)) {
                        const e = h[i];
                        j(t, l, r, e.originalHandler, e.delegationSelector);
                    }
                });
            },
            trigger(t, e, i) {
                if ("string" != typeof e || !t) return null;
                const n = p(),
                    s = M(e),
                    o = e !== s,
                    r = L.has(s);
                let a,
                    l = !0,
                    c = !0,
                    h = !1,
                    d = null;
                return (
                    o &&
                        n &&
                        ((a = n.Event(e, i)),
                        n(t).trigger(a),
                        (l = !a.isPropagationStopped()),
                        (c = !a.isImmediatePropagationStopped()),
                        (h = a.isDefaultPrevented())),
                    r
                        ? ((d = document.createEvent("HTMLEvents")),
                          d.initEvent(s, l, !0))
                        : (d = new CustomEvent(e, {
                              bubbles: l,
                              cancelable: !0,
                          })),
                    void 0 !== i &&
                        Object.keys(i).forEach((t) => {
                            Object.defineProperty(d, t, { get: () => i[t] });
                        }),
                    h && d.preventDefault(),
                    c && t.dispatchEvent(d),
                    d.defaultPrevented && void 0 !== a && a.preventDefault(),
                    d
                );
            },
        },
        H = new Map();
    var R = {
        set(t, e, i) {
            H.has(t) || H.set(t, new Map());
            const n = H.get(t);
            n.has(e) || 0 === n.size
                ? n.set(e, i)
                : console.error(
                      `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                          Array.from(n.keys())[0]
                      }.`
                  );
        },
        get: (t, e) => (H.has(t) && H.get(t).get(e)) || null,
        remove(t, e) {
            if (!H.has(t)) return;
            const i = H.get(t);
            i.delete(e), 0 === i.size && H.delete(t);
        },
    };
    class B {
        constructor(t) {
            (t = a(t)) &&
                ((this._element = t),
                R.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            R.remove(this._element, this.constructor.DATA_KEY),
                P.off(this._element, this.constructor.EVENT_KEY),
                Object.getOwnPropertyNames(this).forEach((t) => {
                    this[t] = null;
                });
        }
        _queueCallback(t, e, i = !0) {
            v(t, e, i);
        }
        static getInstance(t) {
            return R.get(t, this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return (
                this.getInstance(t) ||
                new this(t, "object" == typeof e ? e : null)
            );
        }
        static get VERSION() {
            return "5.0.2";
        }
        static get NAME() {
            throw new Error(
                'You have to implement the static method "NAME", for each component!'
            );
        }
        static get DATA_KEY() {
            return "bs." + this.NAME;
        }
        static get EVENT_KEY() {
            return "." + this.DATA_KEY;
        }
    }
    class W extends B {
        static get NAME() {
            return "alert";
        }
        close(t) {
            const e = t ? this._getRootElement(t) : this._element,
                i = this._triggerCloseEvent(e);
            null === i || i.defaultPrevented || this._removeElement(e);
        }
        _getRootElement(t) {
            return s(t) || t.closest(".alert");
        }
        _triggerCloseEvent(t) {
            return P.trigger(t, "close.bs.alert");
        }
        _removeElement(t) {
            t.classList.remove("show");
            const e = t.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(t), t, e);
        }
        _destroyElement(t) {
            t.remove(), P.trigger(t, "closed.bs.alert");
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = W.getOrCreateInstance(this);
                "close" === t && e[t](this);
            });
        }
        static handleDismiss(t) {
            return function (e) {
                e && e.preventDefault(), t.close(this);
            };
        }
    }
    P.on(
        document,
        "click.bs.alert.data-api",
        '[data-bs-dismiss="alert"]',
        W.handleDismiss(new W())
    ),
        _(W);
    class q extends B {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute(
                "aria-pressed",
                this._element.classList.toggle("active")
            );
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = q.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    function z(t) {
        return (
            "true" === t ||
            ("false" !== t &&
                (t === Number(t).toString()
                    ? Number(t)
                    : "" === t || "null" === t
                    ? null
                    : t))
        );
    }
    function $(t) {
        return t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
    }
    P.on(
        document,
        "click.bs.button.data-api",
        '[data-bs-toggle="button"]',
        (t) => {
            t.preventDefault();
            const e = t.target.closest('[data-bs-toggle="button"]');
            q.getOrCreateInstance(e).toggle();
        }
    ),
        _(q);
    const U = {
            setDataAttribute(t, e, i) {
                t.setAttribute("data-bs-" + $(e), i);
            },
            removeDataAttribute(t, e) {
                t.removeAttribute("data-bs-" + $(e));
            },
            getDataAttributes(t) {
                if (!t) return {};
                const e = {};
                return (
                    Object.keys(t.dataset)
                        .filter((t) => t.startsWith("bs"))
                        .forEach((i) => {
                            let n = i.replace(/^bs/, "");
                            (n =
                                n.charAt(0).toLowerCase() +
                                n.slice(1, n.length)),
                                (e[n] = z(t.dataset[i]));
                        }),
                    e
                );
            },
            getDataAttribute: (t, e) => z(t.getAttribute("data-bs-" + $(e))),
            offset(t) {
                const e = t.getBoundingClientRect();
                return {
                    top: e.top + document.body.scrollTop,
                    left: e.left + document.body.scrollLeft,
                };
            },
            position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
        },
        F = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0,
        },
        V = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean",
        },
        K = "next",
        X = "prev",
        Y = "left",
        Q = "right",
        G = { ArrowLeft: Q, ArrowRight: Y };
    class Z extends B {
        constructor(e, i) {
            super(e),
                (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this.touchStartX = 0),
                (this.touchDeltaX = 0),
                (this._config = this._getConfig(i)),
                (this._indicatorsElement = t.findOne(
                    ".carousel-indicators",
                    this._element
                )),
                (this._touchSupported =
                    "ontouchstart" in document.documentElement ||
                    navigator.maxTouchPoints > 0),
                (this._pointerEvent = Boolean(window.PointerEvent)),
                this._addEventListeners();
        }
        static get Default() {
            return F;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(K);
        }
        nextWhenVisible() {
            !document.hidden && c(this._element) && this.next();
        }
        prev() {
            this._slide(X);
        }
        pause(e) {
            e || (this._isPaused = !0),
                t.findOne(
                    ".carousel-item-next, .carousel-item-prev",
                    this._element
                ) && (o(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
        }
        cycle(t) {
            t || (this._isPaused = !1),
                this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                this._config &&
                    this._config.interval &&
                    !this._isPaused &&
                    (this._updateInterval(),
                    (this._interval = setInterval(
                        (document.visibilityState
                            ? this.nextWhenVisible
                            : this.next
                        ).bind(this),
                        this._config.interval
                    )));
        }
        to(e) {
            this._activeElement = t.findOne(
                ".active.carousel-item",
                this._element
            );
            const i = this._getItemIndex(this._activeElement);
            if (e > this._items.length - 1 || e < 0) return;
            if (this._isSliding)
                return void P.one(this._element, "slid.bs.carousel", () =>
                    this.to(e)
                );
            if (i === e) return this.pause(), void this.cycle();
            const n = e > i ? K : X;
            this._slide(n, this._items[e]);
        }
        _getConfig(t) {
            return (
                (t = {
                    ...F,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t ? t : {}),
                }),
                l("carousel", t, V),
                t
            );
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40) return;
            const e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e && this._slide(e > 0 ? Q : Y);
        }
        _addEventListeners() {
            this._config.keyboard &&
                P.on(this._element, "keydown.bs.carousel", (t) =>
                    this._keydown(t)
                ),
                "hover" === this._config.pause &&
                    (P.on(this._element, "mouseenter.bs.carousel", (t) =>
                        this.pause(t)
                    ),
                    P.on(this._element, "mouseleave.bs.carousel", (t) =>
                        this.cycle(t)
                    )),
                this._config.touch &&
                    this._touchSupported &&
                    this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            const e = (t) => {
                    !this._pointerEvent ||
                    ("pen" !== t.pointerType && "touch" !== t.pointerType)
                        ? this._pointerEvent ||
                          (this.touchStartX = t.touches[0].clientX)
                        : (this.touchStartX = t.clientX);
                },
                i = (t) => {
                    this.touchDeltaX =
                        t.touches && t.touches.length > 1
                            ? 0
                            : t.touches[0].clientX - this.touchStartX;
                },
                n = (t) => {
                    !this._pointerEvent ||
                        ("pen" !== t.pointerType &&
                            "touch" !== t.pointerType) ||
                        (this.touchDeltaX = t.clientX - this.touchStartX),
                        this._handleSwipe(),
                        "hover" === this._config.pause &&
                            (this.pause(),
                            this.touchTimeout &&
                                clearTimeout(this.touchTimeout),
                            (this.touchTimeout = setTimeout(
                                (t) => this.cycle(t),
                                500 + this._config.interval
                            )));
                };
            t.find(".carousel-item img", this._element).forEach((t) => {
                P.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
            }),
                this._pointerEvent
                    ? (P.on(this._element, "pointerdown.bs.carousel", (t) =>
                          e(t)
                      ),
                      P.on(this._element, "pointerup.bs.carousel", (t) => n(t)),
                      this._element.classList.add("pointer-event"))
                    : (P.on(this._element, "touchstart.bs.carousel", (t) =>
                          e(t)
                      ),
                      P.on(this._element, "touchmove.bs.carousel", (t) => i(t)),
                      P.on(this._element, "touchend.bs.carousel", (t) => n(t)));
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = G[t.key];
            e && (t.preventDefault(), this._slide(e));
        }
        _getItemIndex(e) {
            return (
                (this._items =
                    e && e.parentNode
                        ? t.find(".carousel-item", e.parentNode)
                        : []),
                this._items.indexOf(e)
            );
        }
        _getItemByOrder(t, e) {
            const i = t === K;
            return y(this._items, e, i, this._config.wrap);
        }
        _triggerSlideEvent(e, i) {
            const n = this._getItemIndex(e),
                s = this._getItemIndex(
                    t.findOne(".active.carousel-item", this._element)
                );
            return P.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: e,
                direction: i,
                from: s,
                to: n,
            });
        }
        _setActiveIndicatorElement(e) {
            if (this._indicatorsElement) {
                const i = t.findOne(".active", this._indicatorsElement);
                i.classList.remove("active"), i.removeAttribute("aria-current");
                const n = t.find("[data-bs-target]", this._indicatorsElement);
                for (let t = 0; t < n.length; t++)
                    if (
                        Number.parseInt(
                            n[t].getAttribute("data-bs-slide-to"),
                            10
                        ) === this._getItemIndex(e)
                    ) {
                        n[t].classList.add("active"),
                            n[t].setAttribute("aria-current", "true");
                        break;
                    }
            }
        }
        _updateInterval() {
            const e =
                this._activeElement ||
                t.findOne(".active.carousel-item", this._element);
            if (!e) return;
            const i = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            i
                ? ((this._config.defaultInterval =
                      this._config.defaultInterval || this._config.interval),
                  (this._config.interval = i))
                : (this._config.interval =
                      this._config.defaultInterval || this._config.interval);
        }
        _slide(e, i) {
            const n = this._directionToOrder(e),
                s = t.findOne(".active.carousel-item", this._element),
                o = this._getItemIndex(s),
                r = i || this._getItemByOrder(n, s),
                a = this._getItemIndex(r),
                l = Boolean(this._interval),
                c = n === K,
                h = c ? "carousel-item-start" : "carousel-item-end",
                d = c ? "carousel-item-next" : "carousel-item-prev",
                u = this._orderToDirection(n);
            if (r && r.classList.contains("active"))
                return void (this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(r, u).defaultPrevented) return;
            if (!s || !r) return;
            (this._isSliding = !0),
                l && this.pause(),
                this._setActiveIndicatorElement(r),
                (this._activeElement = r);
            const p = () => {
                P.trigger(this._element, "slid.bs.carousel", {
                    relatedTarget: r,
                    direction: u,
                    from: o,
                    to: a,
                });
            };
            if (this._element.classList.contains("slide")) {
                r.classList.add(d),
                    f(r),
                    s.classList.add(h),
                    r.classList.add(h);
                const t = () => {
                    r.classList.remove(h, d),
                        r.classList.add("active"),
                        s.classList.remove("active", d, h),
                        (this._isSliding = !1),
                        setTimeout(p, 0);
                };
                this._queueCallback(t, s, !0);
            } else s.classList.remove("active"), r.classList.add("active"), (this._isSliding = !1), p();
            l && this.cycle();
        }
        _directionToOrder(t) {
            return [Q, Y].includes(t)
                ? g()
                    ? t === Y
                        ? X
                        : K
                    : t === Y
                    ? K
                    : X
                : t;
        }
        _orderToDirection(t) {
            return [K, X].includes(t)
                ? g()
                    ? t === X
                        ? Y
                        : Q
                    : t === X
                    ? Q
                    : Y
                : t;
        }
        static carouselInterface(t, e) {
            const i = Z.getOrCreateInstance(t, e);
            let { _config: n } = i;
            "object" == typeof e && (n = { ...n, ...e });
            const s = "string" == typeof e ? e : n.slide;
            if ("number" == typeof e) i.to(e);
            else if ("string" == typeof s) {
                if (void 0 === i[s])
                    throw new TypeError(`No method named "${s}"`);
                i[s]();
            } else n.interval && n.ride && (i.pause(), i.cycle());
        }
        static jQueryInterface(t) {
            return this.each(function () {
                Z.carouselInterface(this, t);
            });
        }
        static dataApiClickHandler(t) {
            const e = s(this);
            if (!e || !e.classList.contains("carousel")) return;
            const i = {
                    ...U.getDataAttributes(e),
                    ...U.getDataAttributes(this),
                },
                n = this.getAttribute("data-bs-slide-to");
            n && (i.interval = !1),
                Z.carouselInterface(e, i),
                n && Z.getInstance(e).to(n),
                t.preventDefault();
        }
    }
    P.on(
        document,
        "click.bs.carousel.data-api",
        "[data-bs-slide], [data-bs-slide-to]",
        Z.dataApiClickHandler
    ),
        P.on(window, "load.bs.carousel.data-api", () => {
            const e = t.find('[data-bs-ride="carousel"]');
            for (let t = 0, i = e.length; t < i; t++)
                Z.carouselInterface(e[t], Z.getInstance(e[t]));
        }),
        _(Z);
    const J = { toggle: !0, parent: "" },
        tt = { toggle: "boolean", parent: "(string|element)" };
    class et extends B {
        constructor(e, i) {
            super(e),
                (this._isTransitioning = !1),
                (this._config = this._getConfig(i)),
                (this._triggerArray = t.find(
                    `[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`
                ));
            const s = t.find('[data-bs-toggle="collapse"]');
            for (let e = 0, i = s.length; e < i; e++) {
                const i = s[e],
                    o = n(i),
                    r = t.find(o).filter((t) => t === this._element);
                null !== o &&
                    r.length &&
                    ((this._selector = o), this._triggerArray.push(i));
            }
            (this._parent = this._config.parent ? this._getParent() : null),
                this._config.parent ||
                    this._addAriaAndCollapsedClass(
                        this._element,
                        this._triggerArray
                    ),
                this._config.toggle && this.toggle();
        }
        static get Default() {
            return J;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._element.classList.contains("show")
                ? this.hide()
                : this.show();
        }
        show() {
            if (
                this._isTransitioning ||
                this._element.classList.contains("show")
            )
                return;
            let e, i;
            this._parent &&
                ((e = t
                    .find(".show, .collapsing", this._parent)
                    .filter((t) =>
                        "string" == typeof this._config.parent
                            ? t.getAttribute("data-bs-parent") ===
                              this._config.parent
                            : t.classList.contains("collapse")
                    )),
                0 === e.length && (e = null));
            const n = t.findOne(this._selector);
            if (e) {
                const t = e.find((t) => n !== t);
                if (
                    ((i = t ? et.getInstance(t) : null),
                    i && i._isTransitioning)
                )
                    return;
            }
            if (P.trigger(this._element, "show.bs.collapse").defaultPrevented)
                return;
            e &&
                e.forEach((t) => {
                    n !== t && et.collapseInterface(t, "hide"),
                        i || R.set(t, "bs.collapse", null);
                });
            const s = this._getDimension();
            this._element.classList.remove("collapse"),
                this._element.classList.add("collapsing"),
                (this._element.style[s] = 0),
                this._triggerArray.length &&
                    this._triggerArray.forEach((t) => {
                        t.classList.remove("collapsed"),
                            t.setAttribute("aria-expanded", !0);
                    }),
                this.setTransitioning(!0);
            const o = "scroll" + (s[0].toUpperCase() + s.slice(1));
            this._queueCallback(
                () => {
                    this._element.classList.remove("collapsing"),
                        this._element.classList.add("collapse", "show"),
                        (this._element.style[s] = ""),
                        this.setTransitioning(!1),
                        P.trigger(this._element, "shown.bs.collapse");
                },
                this._element,
                !0
            ),
                (this._element.style[s] = this._element[o] + "px");
        }
        hide() {
            if (
                this._isTransitioning ||
                !this._element.classList.contains("show")
            )
                return;
            if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented)
                return;
            const t = this._getDimension();
            (this._element.style[t] =
                this._element.getBoundingClientRect()[t] + "px"),
                f(this._element),
                this._element.classList.add("collapsing"),
                this._element.classList.remove("collapse", "show");
            const e = this._triggerArray.length;
            if (e > 0)
                for (let t = 0; t < e; t++) {
                    const e = this._triggerArray[t],
                        i = s(e);
                    i &&
                        !i.classList.contains("show") &&
                        (e.classList.add("collapsed"),
                        e.setAttribute("aria-expanded", !1));
                }
            this.setTransitioning(!0),
                (this._element.style[t] = ""),
                this._queueCallback(
                    () => {
                        this.setTransitioning(!1),
                            this._element.classList.remove("collapsing"),
                            this._element.classList.add("collapse"),
                            P.trigger(this._element, "hidden.bs.collapse");
                    },
                    this._element,
                    !0
                );
        }
        setTransitioning(t) {
            this._isTransitioning = t;
        }
        _getConfig(t) {
            return (
                ((t = { ...J, ...t }).toggle = Boolean(t.toggle)),
                l("collapse", t, tt),
                t
            );
        }
        _getDimension() {
            return this._element.classList.contains("width")
                ? "width"
                : "height";
        }
        _getParent() {
            let { parent: e } = this._config;
            e = a(e);
            const i = `[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;
            return (
                t.find(i, e).forEach((t) => {
                    const e = s(t);
                    this._addAriaAndCollapsedClass(e, [t]);
                }),
                e
            );
        }
        _addAriaAndCollapsedClass(t, e) {
            if (!t || !e.length) return;
            const i = t.classList.contains("show");
            e.forEach((t) => {
                i
                    ? t.classList.remove("collapsed")
                    : t.classList.add("collapsed"),
                    t.setAttribute("aria-expanded", i);
            });
        }
        static collapseInterface(t, e) {
            let i = et.getInstance(t);
            const n = {
                ...J,
                ...U.getDataAttributes(t),
                ...("object" == typeof e && e ? e : {}),
            };
            if (
                (!i &&
                    n.toggle &&
                    "string" == typeof e &&
                    /show|hide/.test(e) &&
                    (n.toggle = !1),
                i || (i = new et(t, n)),
                "string" == typeof e)
            ) {
                if (void 0 === i[e])
                    throw new TypeError(`No method named "${e}"`);
                i[e]();
            }
        }
        static jQueryInterface(t) {
            return this.each(function () {
                et.collapseInterface(this, t);
            });
        }
    }
    P.on(
        document,
        "click.bs.collapse.data-api",
        '[data-bs-toggle="collapse"]',
        function (e) {
            ("A" === e.target.tagName ||
                (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
                e.preventDefault();
            const i = U.getDataAttributes(this),
                s = n(this);
            t.find(s).forEach((t) => {
                const e = et.getInstance(t);
                let n;
                e
                    ? (null === e._parent &&
                          "string" == typeof i.parent &&
                          ((e._config.parent = i.parent),
                          (e._parent = e._getParent())),
                      (n = "toggle"))
                    : (n = i),
                    et.collapseInterface(t, n);
            });
        }
    ),
        _(et);
    var it = "top",
        nt = "bottom",
        st = "right",
        ot = "left",
        rt = [it, nt, st, ot],
        at = rt.reduce(function (t, e) {
            return t.concat([e + "-start", e + "-end"]);
        }, []),
        lt = [].concat(rt, ["auto"]).reduce(function (t, e) {
            return t.concat([e, e + "-start", e + "-end"]);
        }, []),
        ct = [
            "beforeRead",
            "read",
            "afterRead",
            "beforeMain",
            "main",
            "afterMain",
            "beforeWrite",
            "write",
            "afterWrite",
        ];
    function ht(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function dt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return (e && e.defaultView) || window;
        }
        return t;
    }
    function ut(t) {
        return t instanceof dt(t).Element || t instanceof Element;
    }
    function ft(t) {
        return t instanceof dt(t).HTMLElement || t instanceof HTMLElement;
    }
    function pt(t) {
        return (
            "undefined" != typeof ShadowRoot &&
            (t instanceof dt(t).ShadowRoot || t instanceof ShadowRoot)
        );
    }
    var mt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function (t) {
                var i = e.styles[t] || {},
                    n = e.attributes[t] || {},
                    s = e.elements[t];
                ft(s) &&
                    ht(s) &&
                    (Object.assign(s.style, i),
                    Object.keys(n).forEach(function (t) {
                        var e = n[t];
                        !1 === e
                            ? s.removeAttribute(t)
                            : s.setAttribute(t, !0 === e ? "" : e);
                    }));
            });
        },
        effect: function (t) {
            var e = t.state,
                i = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0",
                    },
                    arrow: { position: "absolute" },
                    reference: {},
                };
            return (
                Object.assign(e.elements.popper.style, i.popper),
                (e.styles = i),
                e.elements.arrow &&
                    Object.assign(e.elements.arrow.style, i.arrow),
                function () {
                    Object.keys(e.elements).forEach(function (t) {
                        var n = e.elements[t],
                            s = e.attributes[t] || {},
                            o = Object.keys(
                                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
                            ).reduce(function (t, e) {
                                return (t[e] = ""), t;
                            }, {});
                        ft(n) &&
                            ht(n) &&
                            (Object.assign(n.style, o),
                            Object.keys(s).forEach(function (t) {
                                n.removeAttribute(t);
                            }));
                    });
                }
            );
        },
        requires: ["computeStyles"],
    };
    function gt(t) {
        return t.split("-")[0];
    }
    function _t(t) {
        var e = t.getBoundingClientRect();
        return {
            width: e.width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top,
        };
    }
    function bt(t) {
        var e = _t(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
        return (
            Math.abs(e.width - i) <= 1 && (i = e.width),
            Math.abs(e.height - n) <= 1 && (n = e.height),
            { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
        );
    }
    function vt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && pt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            } while (n);
        }
        return !1;
    }
    function yt(t) {
        return dt(t).getComputedStyle(t);
    }
    function wt(t) {
        return ["table", "td", "th"].indexOf(ht(t)) >= 0;
    }
    function Et(t) {
        return (
            (ut(t) ? t.ownerDocument : t.document) || window.document
        ).documentElement;
    }
    function At(t) {
        return "html" === ht(t)
            ? t
            : t.assignedSlot ||
                  t.parentNode ||
                  (pt(t) ? t.host : null) ||
                  Et(t);
    }
    function Tt(t) {
        return ft(t) && "fixed" !== yt(t).position ? t.offsetParent : null;
    }
    function Ot(t) {
        for (
            var e = dt(t), i = Tt(t);
            i && wt(i) && "static" === yt(i).position;

        )
            i = Tt(i);
        return i &&
            ("html" === ht(i) ||
                ("body" === ht(i) && "static" === yt(i).position))
            ? e
            : i ||
                  (function (t) {
                      var e =
                          -1 !==
                          navigator.userAgent.toLowerCase().indexOf("firefox");
                      if (
                          -1 !== navigator.userAgent.indexOf("Trident") &&
                          ft(t) &&
                          "fixed" === yt(t).position
                      )
                          return null;
                      for (
                          var i = At(t);
                          ft(i) && ["html", "body"].indexOf(ht(i)) < 0;

                      ) {
                          var n = yt(i);
                          if (
                              "none" !== n.transform ||
                              "none" !== n.perspective ||
                              "paint" === n.contain ||
                              -1 !==
                                  ["transform", "perspective"].indexOf(
                                      n.willChange
                                  ) ||
                              (e && "filter" === n.willChange) ||
                              (e && n.filter && "none" !== n.filter)
                          )
                              return i;
                          i = i.parentNode;
                      }
                      return null;
                  })(t) ||
                  e;
    }
    function Ct(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
    }
    var kt = Math.max,
        Lt = Math.min,
        xt = Math.round;
    function Dt(t, e, i) {
        return kt(t, Lt(e, i));
    }
    function St(t) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
    }
    function It(t, e) {
        return e.reduce(function (e, i) {
            return (e[i] = t), e;
        }, {});
    }
    var Nt = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (t) {
                var e,
                    i = t.state,
                    n = t.name,
                    s = t.options,
                    o = i.elements.arrow,
                    r = i.modifiersData.popperOffsets,
                    a = gt(i.placement),
                    l = Ct(a),
                    c = [ot, st].indexOf(a) >= 0 ? "height" : "width";
                if (o && r) {
                    var h = (function (t, e) {
                            return St(
                                "number" !=
                                    typeof (t =
                                        "function" == typeof t
                                            ? t(
                                                  Object.assign({}, e.rects, {
                                                      placement: e.placement,
                                                  })
                                              )
                                            : t)
                                    ? t
                                    : It(t, rt)
                            );
                        })(s.padding, i),
                        d = bt(o),
                        u = "y" === l ? it : ot,
                        f = "y" === l ? nt : st,
                        p =
                            i.rects.reference[c] +
                            i.rects.reference[l] -
                            r[l] -
                            i.rects.popper[c],
                        m = r[l] - i.rects.reference[l],
                        g = Ot(o),
                        _ = g
                            ? "y" === l
                                ? g.clientHeight || 0
                                : g.clientWidth || 0
                            : 0,
                        b = p / 2 - m / 2,
                        v = h[u],
                        y = _ - d[c] - h[f],
                        w = _ / 2 - d[c] / 2 + b,
                        E = Dt(v, w, y),
                        A = l;
                    i.modifiersData[n] =
                        (((e = {})[A] = E), (e.centerOffset = E - w), e);
                }
            },
            effect: function (t) {
                var e = t.state,
                    i = t.options.element,
                    n = void 0 === i ? "[data-popper-arrow]" : i;
                null != n &&
                    ("string" != typeof n ||
                        (n = e.elements.popper.querySelector(n))) &&
                    vt(e.elements.popper, n) &&
                    (e.elements.arrow = n);
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
        },
        jt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function Mt(t) {
        var e,
            i = t.popper,
            n = t.popperRect,
            s = t.placement,
            o = t.offsets,
            r = t.position,
            a = t.gpuAcceleration,
            l = t.adaptive,
            c = t.roundOffsets,
            h =
                !0 === c
                    ? (function (t) {
                          var e = t.x,
                              i = t.y,
                              n = window.devicePixelRatio || 1;
                          return {
                              x: xt(xt(e * n) / n) || 0,
                              y: xt(xt(i * n) / n) || 0,
                          };
                      })(o)
                    : "function" == typeof c
                    ? c(o)
                    : o,
            d = h.x,
            u = void 0 === d ? 0 : d,
            f = h.y,
            p = void 0 === f ? 0 : f,
            m = o.hasOwnProperty("x"),
            g = o.hasOwnProperty("y"),
            _ = ot,
            b = it,
            v = window;
        if (l) {
            var y = Ot(i),
                w = "clientHeight",
                E = "clientWidth";
            y === dt(i) &&
                "static" !== yt((y = Et(i))).position &&
                ((w = "scrollHeight"), (E = "scrollWidth")),
                (y = y),
                s === it &&
                    ((b = nt), (p -= y[w] - n.height), (p *= a ? 1 : -1)),
                s === ot &&
                    ((_ = st), (u -= y[E] - n.width), (u *= a ? 1 : -1));
        }
        var A,
            T = Object.assign({ position: r }, l && jt);
        return a
            ? Object.assign(
                  {},
                  T,
                  (((A = {})[b] = g ? "0" : ""),
                  (A[_] = m ? "0" : ""),
                  (A.transform =
                      (v.devicePixelRatio || 1) < 2
                          ? "translate(" + u + "px, " + p + "px)"
                          : "translate3d(" + u + "px, " + p + "px, 0)"),
                  A)
              )
            : Object.assign(
                  {},
                  T,
                  (((e = {})[b] = g ? p + "px" : ""),
                  (e[_] = m ? u + "px" : ""),
                  (e.transform = ""),
                  e)
              );
    }
    var Pt = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = i.gpuAcceleration,
                    s = void 0 === n || n,
                    o = i.adaptive,
                    r = void 0 === o || o,
                    a = i.roundOffsets,
                    l = void 0 === a || a,
                    c = {
                        placement: gt(e.placement),
                        popper: e.elements.popper,
                        popperRect: e.rects.popper,
                        gpuAcceleration: s,
                    };
                null != e.modifiersData.popperOffsets &&
                    (e.styles.popper = Object.assign(
                        {},
                        e.styles.popper,
                        Mt(
                            Object.assign({}, c, {
                                offsets: e.modifiersData.popperOffsets,
                                position: e.options.strategy,
                                adaptive: r,
                                roundOffsets: l,
                            })
                        )
                    )),
                    null != e.modifiersData.arrow &&
                        (e.styles.arrow = Object.assign(
                            {},
                            e.styles.arrow,
                            Mt(
                                Object.assign({}, c, {
                                    offsets: e.modifiersData.arrow,
                                    position: "absolute",
                                    adaptive: !1,
                                    roundOffsets: l,
                                })
                            )
                        )),
                    (e.attributes.popper = Object.assign(
                        {},
                        e.attributes.popper,
                        { "data-popper-placement": e.placement }
                    ));
            },
            data: {},
        },
        Ht = { passive: !0 },
        Rt = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (t) {
                var e = t.state,
                    i = t.instance,
                    n = t.options,
                    s = n.scroll,
                    o = void 0 === s || s,
                    r = n.resize,
                    a = void 0 === r || r,
                    l = dt(e.elements.popper),
                    c = [].concat(
                        e.scrollParents.reference,
                        e.scrollParents.popper
                    );
                return (
                    o &&
                        c.forEach(function (t) {
                            t.addEventListener("scroll", i.update, Ht);
                        }),
                    a && l.addEventListener("resize", i.update, Ht),
                    function () {
                        o &&
                            c.forEach(function (t) {
                                t.removeEventListener("scroll", i.update, Ht);
                            }),
                            a && l.removeEventListener("resize", i.update, Ht);
                    }
                );
            },
            data: {},
        },
        Bt = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function Wt(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
            return Bt[t];
        });
    }
    var qt = { start: "end", end: "start" };
    function zt(t) {
        return t.replace(/start|end/g, function (t) {
            return qt[t];
        });
    }
    function $t(t) {
        var e = dt(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
    }
    function Ut(t) {
        return _t(Et(t)).left + $t(t).scrollLeft;
    }
    function Ft(t) {
        var e = yt(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }
    function Vt(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = (function t(e) {
                return ["html", "body", "#document"].indexOf(ht(e)) >= 0
                    ? e.ownerDocument.body
                    : ft(e) && Ft(e)
                    ? e
                    : t(At(e));
            })(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = dt(n),
            r = s ? [o].concat(o.visualViewport || [], Ft(n) ? n : []) : n,
            a = e.concat(r);
        return s ? a : a.concat(Vt(At(r)));
    }
    function Kt(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height,
        });
    }
    function Xt(t, e) {
        return "viewport" === e
            ? Kt(
                  (function (t) {
                      var e = dt(t),
                          i = Et(t),
                          n = e.visualViewport,
                          s = i.clientWidth,
                          o = i.clientHeight,
                          r = 0,
                          a = 0;
                      return (
                          n &&
                              ((s = n.width),
                              (o = n.height),
                              /^((?!chrome|android).)*safari/i.test(
                                  navigator.userAgent
                              ) || ((r = n.offsetLeft), (a = n.offsetTop))),
                          { width: s, height: o, x: r + Ut(t), y: a }
                      );
                  })(t)
              )
            : ft(e)
            ? (function (t) {
                  var e = _t(t);
                  return (
                      (e.top = e.top + t.clientTop),
                      (e.left = e.left + t.clientLeft),
                      (e.bottom = e.top + t.clientHeight),
                      (e.right = e.left + t.clientWidth),
                      (e.width = t.clientWidth),
                      (e.height = t.clientHeight),
                      (e.x = e.left),
                      (e.y = e.top),
                      e
                  );
              })(e)
            : Kt(
                  (function (t) {
                      var e,
                          i = Et(t),
                          n = $t(t),
                          s = null == (e = t.ownerDocument) ? void 0 : e.body,
                          o = kt(
                              i.scrollWidth,
                              i.clientWidth,
                              s ? s.scrollWidth : 0,
                              s ? s.clientWidth : 0
                          ),
                          r = kt(
                              i.scrollHeight,
                              i.clientHeight,
                              s ? s.scrollHeight : 0,
                              s ? s.clientHeight : 0
                          ),
                          a = -n.scrollLeft + Ut(t),
                          l = -n.scrollTop;
                      return (
                          "rtl" === yt(s || i).direction &&
                              (a +=
                                  kt(i.clientWidth, s ? s.clientWidth : 0) - o),
                          { width: o, height: r, x: a, y: l }
                      );
                  })(Et(t))
              );
    }
    function Yt(t) {
        return t.split("-")[1];
    }
    function Qt(t) {
        var e,
            i = t.reference,
            n = t.element,
            s = t.placement,
            o = s ? gt(s) : null,
            r = s ? Yt(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case it:
                e = { x: a, y: i.y - n.height };
                break;
            case nt:
                e = { x: a, y: i.y + i.height };
                break;
            case st:
                e = { x: i.x + i.width, y: l };
                break;
            case ot:
                e = { x: i.x - n.width, y: l };
                break;
            default:
                e = { x: i.x, y: i.y };
        }
        var c = o ? Ct(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case "start":
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case "end":
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }
    function Gt(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = void 0 === n ? t.placement : n,
            o = i.boundary,
            r = void 0 === o ? "clippingParents" : o,
            a = i.rootBoundary,
            l = void 0 === a ? "viewport" : a,
            c = i.elementContext,
            h = void 0 === c ? "popper" : c,
            d = i.altBoundary,
            u = void 0 !== d && d,
            f = i.padding,
            p = void 0 === f ? 0 : f,
            m = St("number" != typeof p ? p : It(p, rt)),
            g = "popper" === h ? "reference" : "popper",
            _ = t.elements.reference,
            b = t.rects.popper,
            v = t.elements[u ? g : h],
            y = (function (t, e, i) {
                var n =
                        "clippingParents" === e
                            ? (function (t) {
                                  var e = Vt(At(t)),
                                      i =
                                          ["absolute", "fixed"].indexOf(
                                              yt(t).position
                                          ) >= 0 && ft(t)
                                              ? Ot(t)
                                              : t;
                                  return ut(i)
                                      ? e.filter(function (t) {
                                            return (
                                                ut(t) &&
                                                vt(t, i) &&
                                                "body" !== ht(t)
                                            );
                                        })
                                      : [];
                              })(t)
                            : [].concat(e),
                    s = [].concat(n, [i]),
                    o = s[0],
                    r = s.reduce(function (e, i) {
                        var n = Xt(t, i);
                        return (
                            (e.top = kt(n.top, e.top)),
                            (e.right = Lt(n.right, e.right)),
                            (e.bottom = Lt(n.bottom, e.bottom)),
                            (e.left = kt(n.left, e.left)),
                            e
                        );
                    }, Xt(t, o));
                return (
                    (r.width = r.right - r.left),
                    (r.height = r.bottom - r.top),
                    (r.x = r.left),
                    (r.y = r.top),
                    r
                );
            })(ut(v) ? v : v.contextElement || Et(t.elements.popper), r, l),
            w = _t(_),
            E = Qt({
                reference: w,
                element: b,
                strategy: "absolute",
                placement: s,
            }),
            A = Kt(Object.assign({}, b, E)),
            T = "popper" === h ? A : w,
            O = {
                top: y.top - T.top + m.top,
                bottom: T.bottom - y.bottom + m.bottom,
                left: y.left - T.left + m.left,
                right: T.right - y.right + m.right,
            },
            C = t.modifiersData.offset;
        if ("popper" === h && C) {
            var k = C[s];
            Object.keys(O).forEach(function (t) {
                var e = [st, nt].indexOf(t) >= 0 ? 1 : -1,
                    i = [it, nt].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e;
            });
        }
        return O;
    }
    function Zt(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = i.boundary,
            o = i.rootBoundary,
            r = i.padding,
            a = i.flipVariations,
            l = i.allowedAutoPlacements,
            c = void 0 === l ? lt : l,
            h = Yt(n),
            d = h
                ? a
                    ? at
                    : at.filter(function (t) {
                          return Yt(t) === h;
                      })
                : rt,
            u = d.filter(function (t) {
                return c.indexOf(t) >= 0;
            });
        0 === u.length && (u = d);
        var f = u.reduce(function (e, i) {
            return (
                (e[i] = Gt(t, {
                    placement: i,
                    boundary: s,
                    rootBoundary: o,
                    padding: r,
                })[gt(i)]),
                e
            );
        }, {});
        return Object.keys(f).sort(function (t, e) {
            return f[t] - f[e];
        });
    }
    var Jt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e = t.state,
                i = t.options,
                n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (
                    var s = i.mainAxis,
                        o = void 0 === s || s,
                        r = i.altAxis,
                        a = void 0 === r || r,
                        l = i.fallbackPlacements,
                        c = i.padding,
                        h = i.boundary,
                        d = i.rootBoundary,
                        u = i.altBoundary,
                        f = i.flipVariations,
                        p = void 0 === f || f,
                        m = i.allowedAutoPlacements,
                        g = e.options.placement,
                        _ = gt(g),
                        b =
                            l ||
                            (_ !== g && p
                                ? (function (t) {
                                      if ("auto" === gt(t)) return [];
                                      var e = Wt(t);
                                      return [zt(t), e, zt(e)];
                                  })(g)
                                : [Wt(g)]),
                        v = [g].concat(b).reduce(function (t, i) {
                            return t.concat(
                                "auto" === gt(i)
                                    ? Zt(e, {
                                          placement: i,
                                          boundary: h,
                                          rootBoundary: d,
                                          padding: c,
                                          flipVariations: p,
                                          allowedAutoPlacements: m,
                                      })
                                    : i
                            );
                        }, []),
                        y = e.rects.reference,
                        w = e.rects.popper,
                        E = new Map(),
                        A = !0,
                        T = v[0],
                        O = 0;
                    O < v.length;
                    O++
                ) {
                    var C = v[O],
                        k = gt(C),
                        L = "start" === Yt(C),
                        x = [it, nt].indexOf(k) >= 0,
                        D = x ? "width" : "height",
                        S = Gt(e, {
                            placement: C,
                            boundary: h,
                            rootBoundary: d,
                            altBoundary: u,
                            padding: c,
                        }),
                        I = x ? (L ? st : ot) : L ? nt : it;
                    y[D] > w[D] && (I = Wt(I));
                    var N = Wt(I),
                        j = [];
                    if (
                        (o && j.push(S[k] <= 0),
                        a && j.push(S[I] <= 0, S[N] <= 0),
                        j.every(function (t) {
                            return t;
                        }))
                    ) {
                        (T = C), (A = !1);
                        break;
                    }
                    E.set(C, j);
                }
                if (A)
                    for (
                        var M = function (t) {
                                var e = v.find(function (e) {
                                    var i = E.get(e);
                                    if (i)
                                        return i
                                            .slice(0, t)
                                            .every(function (t) {
                                                return t;
                                            });
                                });
                                if (e) return (T = e), "break";
                            },
                            P = p ? 3 : 1;
                        P > 0 && "break" !== M(P);
                        P--
                    );
                e.placement !== T &&
                    ((e.modifiersData[n]._skip = !0),
                    (e.placement = T),
                    (e.reset = !0));
            }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
    };
    function te(t, e, i) {
        return (
            void 0 === i && (i = { x: 0, y: 0 }),
            {
                top: t.top - e.height - i.y,
                right: t.right - e.width + i.x,
                bottom: t.bottom - e.height + i.y,
                left: t.left - e.width - i.x,
            }
        );
    }
    function ee(t) {
        return [it, st, nt, ot].some(function (e) {
            return t[e] >= 0;
        });
    }
    var ie = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (t) {
                var e = t.state,
                    i = t.name,
                    n = e.rects.reference,
                    s = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    r = Gt(e, { elementContext: "reference" }),
                    a = Gt(e, { altBoundary: !0 }),
                    l = te(r, n),
                    c = te(a, s, o),
                    h = ee(l),
                    d = ee(c);
                (e.modifiersData[i] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: h,
                    hasPopperEscaped: d,
                }),
                    (e.attributes.popper = Object.assign(
                        {},
                        e.attributes.popper,
                        {
                            "data-popper-reference-hidden": h,
                            "data-popper-escaped": d,
                        }
                    ));
            },
        },
        ne = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.offset,
                    o = void 0 === s ? [0, 0] : s,
                    r = lt.reduce(function (t, i) {
                        return (
                            (t[i] = (function (t, e, i) {
                                var n = gt(t),
                                    s = [ot, it].indexOf(n) >= 0 ? -1 : 1,
                                    o =
                                        "function" == typeof i
                                            ? i(
                                                  Object.assign({}, e, {
                                                      placement: t,
                                                  })
                                              )
                                            : i,
                                    r = o[0],
                                    a = o[1];
                                return (
                                    (r = r || 0),
                                    (a = (a || 0) * s),
                                    [ot, st].indexOf(n) >= 0
                                        ? { x: a, y: r }
                                        : { x: r, y: a }
                                );
                            })(i, e.rects, o)),
                            t
                        );
                    }, {}),
                    a = r[e.placement],
                    l = a.x,
                    c = a.y;
                null != e.modifiersData.popperOffsets &&
                    ((e.modifiersData.popperOffsets.x += l),
                    (e.modifiersData.popperOffsets.y += c)),
                    (e.modifiersData[n] = r);
            },
        },
        se = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (t) {
                var e = t.state,
                    i = t.name;
                e.modifiersData[i] = Qt({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: "absolute",
                    placement: e.placement,
                });
            },
            data: {},
        },
        oe = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.mainAxis,
                    o = void 0 === s || s,
                    r = i.altAxis,
                    a = void 0 !== r && r,
                    l = i.boundary,
                    c = i.rootBoundary,
                    h = i.altBoundary,
                    d = i.padding,
                    u = i.tether,
                    f = void 0 === u || u,
                    p = i.tetherOffset,
                    m = void 0 === p ? 0 : p,
                    g = Gt(e, {
                        boundary: l,
                        rootBoundary: c,
                        padding: d,
                        altBoundary: h,
                    }),
                    _ = gt(e.placement),
                    b = Yt(e.placement),
                    v = !b,
                    y = Ct(_),
                    w = "x" === y ? "y" : "x",
                    E = e.modifiersData.popperOffsets,
                    A = e.rects.reference,
                    T = e.rects.popper,
                    O =
                        "function" == typeof m
                            ? m(
                                  Object.assign({}, e.rects, {
                                      placement: e.placement,
                                  })
                              )
                            : m,
                    C = { x: 0, y: 0 };
                if (E) {
                    if (o || a) {
                        var k = "y" === y ? it : ot,
                            L = "y" === y ? nt : st,
                            x = "y" === y ? "height" : "width",
                            D = E[y],
                            S = E[y] + g[k],
                            I = E[y] - g[L],
                            N = f ? -T[x] / 2 : 0,
                            j = "start" === b ? A[x] : T[x],
                            M = "start" === b ? -T[x] : -A[x],
                            P = e.elements.arrow,
                            H = f && P ? bt(P) : { width: 0, height: 0 },
                            R = e.modifiersData["arrow#persistent"]
                                ? e.modifiersData["arrow#persistent"].padding
                                : { top: 0, right: 0, bottom: 0, left: 0 },
                            B = R[k],
                            W = R[L],
                            q = Dt(0, A[x], H[x]),
                            z = v ? A[x] / 2 - N - q - B - O : j - q - B - O,
                            $ = v ? -A[x] / 2 + N + q + W + O : M + q + W + O,
                            U = e.elements.arrow && Ot(e.elements.arrow),
                            F = U
                                ? "y" === y
                                    ? U.clientTop || 0
                                    : U.clientLeft || 0
                                : 0,
                            V = e.modifiersData.offset
                                ? e.modifiersData.offset[e.placement][y]
                                : 0,
                            K = E[y] + z - V - F,
                            X = E[y] + $ - V;
                        if (o) {
                            var Y = Dt(f ? Lt(S, K) : S, D, f ? kt(I, X) : I);
                            (E[y] = Y), (C[y] = Y - D);
                        }
                        if (a) {
                            var Q = "x" === y ? it : ot,
                                G = "x" === y ? nt : st,
                                Z = E[w],
                                J = Z + g[Q],
                                tt = Z - g[G],
                                et = Dt(
                                    f ? Lt(J, K) : J,
                                    Z,
                                    f ? kt(tt, X) : tt
                                );
                            (E[w] = et), (C[w] = et - Z);
                        }
                    }
                    e.modifiersData[n] = C;
                }
            },
            requiresIfExists: ["offset"],
        };
    function re(t, e, i) {
        void 0 === i && (i = !1);
        var n,
            s,
            o = Et(e),
            r = _t(t),
            a = ft(e),
            l = { scrollLeft: 0, scrollTop: 0 },
            c = { x: 0, y: 0 };
        return (
            (a || (!a && !i)) &&
                (("body" !== ht(e) || Ft(o)) &&
                    (l =
                        (n = e) !== dt(n) && ft(n)
                            ? {
                                  scrollLeft: (s = n).scrollLeft,
                                  scrollTop: s.scrollTop,
                              }
                            : $t(n)),
                ft(e)
                    ? (((c = _t(e)).x += e.clientLeft), (c.y += e.clientTop))
                    : o && (c.x = Ut(o))),
            {
                x: r.left + l.scrollLeft - c.x,
                y: r.top + l.scrollTop - c.y,
                width: r.width,
                height: r.height,
            }
        );
    }
    var ae = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function le() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        return !e.some(function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function ce(t) {
        void 0 === t && (t = {});
        var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? ae : s;
        return function (t, e, i) {
            void 0 === i && (i = o);
            var s,
                r,
                a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, ae, o),
                    modifiersData: {},
                    elements: { reference: t, popper: e },
                    attributes: {},
                    styles: {},
                },
                l = [],
                c = !1,
                h = {
                    state: a,
                    setOptions: function (i) {
                        d(),
                            (a.options = Object.assign({}, o, a.options, i)),
                            (a.scrollParents = {
                                reference: ut(t)
                                    ? Vt(t)
                                    : t.contextElement
                                    ? Vt(t.contextElement)
                                    : [],
                                popper: Vt(e),
                            });
                        var s,
                            r,
                            c = (function (t) {
                                var e = (function (t) {
                                    var e = new Map(),
                                        i = new Set(),
                                        n = [];
                                    return (
                                        t.forEach(function (t) {
                                            e.set(t.name, t);
                                        }),
                                        t.forEach(function (t) {
                                            i.has(t.name) ||
                                                (function t(s) {
                                                    i.add(s.name),
                                                        []
                                                            .concat(
                                                                s.requires ||
                                                                    [],
                                                                s.requiresIfExists ||
                                                                    []
                                                            )
                                                            .forEach(function (
                                                                n
                                                            ) {
                                                                if (!i.has(n)) {
                                                                    var s =
                                                                        e.get(
                                                                            n
                                                                        );
                                                                    s && t(s);
                                                                }
                                                            }),
                                                        n.push(s);
                                                })(t);
                                        }),
                                        n
                                    );
                                })(t);
                                return ct.reduce(function (t, i) {
                                    return t.concat(
                                        e.filter(function (t) {
                                            return t.phase === i;
                                        })
                                    );
                                }, []);
                            })(
                                ((s = [].concat(n, a.options.modifiers)),
                                (r = s.reduce(function (t, e) {
                                    var i = t[e.name];
                                    return (
                                        (t[e.name] = i
                                            ? Object.assign({}, i, e, {
                                                  options: Object.assign(
                                                      {},
                                                      i.options,
                                                      e.options
                                                  ),
                                                  data: Object.assign(
                                                      {},
                                                      i.data,
                                                      e.data
                                                  ),
                                              })
                                            : e),
                                        t
                                    );
                                }, {})),
                                Object.keys(r).map(function (t) {
                                    return r[t];
                                }))
                            );
                        return (
                            (a.orderedModifiers = c.filter(function (t) {
                                return t.enabled;
                            })),
                            a.orderedModifiers.forEach(function (t) {
                                var e = t.name,
                                    i = t.options,
                                    n = void 0 === i ? {} : i,
                                    s = t.effect;
                                if ("function" == typeof s) {
                                    var o = s({
                                        state: a,
                                        name: e,
                                        instance: h,
                                        options: n,
                                    });
                                    l.push(o || function () {});
                                }
                            }),
                            h.update()
                        );
                    },
                    forceUpdate: function () {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                i = t.popper;
                            if (le(e, i)) {
                                (a.rects = {
                                    reference: re(
                                        e,
                                        Ot(i),
                                        "fixed" === a.options.strategy
                                    ),
                                    popper: bt(i),
                                }),
                                    (a.reset = !1),
                                    (a.placement = a.options.placement),
                                    a.orderedModifiers.forEach(function (t) {
                                        return (a.modifiersData[t.name] =
                                            Object.assign({}, t.data));
                                    });
                                for (
                                    var n = 0;
                                    n < a.orderedModifiers.length;
                                    n++
                                )
                                    if (!0 !== a.reset) {
                                        var s = a.orderedModifiers[n],
                                            o = s.fn,
                                            r = s.options,
                                            l = void 0 === r ? {} : r,
                                            d = s.name;
                                        "function" == typeof o &&
                                            (a =
                                                o({
                                                    state: a,
                                                    options: l,
                                                    name: d,
                                                    instance: h,
                                                }) || a);
                                    } else (a.reset = !1), (n = -1);
                            }
                        }
                    },
                    update:
                        ((s = function () {
                            return new Promise(function (t) {
                                h.forceUpdate(), t(a);
                            });
                        }),
                        function () {
                            return (
                                r ||
                                    (r = new Promise(function (t) {
                                        Promise.resolve().then(function () {
                                            (r = void 0), t(s());
                                        });
                                    })),
                                r
                            );
                        }),
                    destroy: function () {
                        d(), (c = !0);
                    },
                };
            if (!le(t, e)) return h;
            function d() {
                l.forEach(function (t) {
                    return t();
                }),
                    (l = []);
            }
            return (
                h.setOptions(i).then(function (t) {
                    !c && i.onFirstUpdate && i.onFirstUpdate(t);
                }),
                h
            );
        };
    }
    var he = ce(),
        de = ce({ defaultModifiers: [Rt, se, Pt, mt] }),
        ue = ce({ defaultModifiers: [Rt, se, Pt, mt, ne, Jt, oe, Nt, ie] }),
        fe = Object.freeze({
            __proto__: null,
            popperGenerator: ce,
            detectOverflow: Gt,
            createPopperBase: he,
            createPopper: ue,
            createPopperLite: de,
            top: it,
            bottom: nt,
            right: st,
            left: ot,
            auto: "auto",
            basePlacements: rt,
            start: "start",
            end: "end",
            clippingParents: "clippingParents",
            viewport: "viewport",
            popper: "popper",
            reference: "reference",
            variationPlacements: at,
            placements: lt,
            beforeRead: "beforeRead",
            read: "read",
            afterRead: "afterRead",
            beforeMain: "beforeMain",
            main: "main",
            afterMain: "afterMain",
            beforeWrite: "beforeWrite",
            write: "write",
            afterWrite: "afterWrite",
            modifierPhases: ct,
            applyStyles: mt,
            arrow: Nt,
            computeStyles: Pt,
            eventListeners: Rt,
            flip: Jt,
            hide: ie,
            offset: ne,
            popperOffsets: se,
            preventOverflow: oe,
        });
    const pe = new RegExp("ArrowUp|ArrowDown|Escape"),
        me = g() ? "top-end" : "top-start",
        ge = g() ? "top-start" : "top-end",
        _e = g() ? "bottom-end" : "bottom-start",
        be = g() ? "bottom-start" : "bottom-end",
        ve = g() ? "left-start" : "right-start",
        ye = g() ? "right-start" : "left-start",
        we = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0,
        },
        Ee = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)",
        };
    class Ae extends B {
        constructor(t, e) {
            super(t),
                (this._popper = null),
                (this._config = this._getConfig(e)),
                (this._menu = this._getMenuElement()),
                (this._inNavbar = this._detectNavbar()),
                this._addEventListeners();
        }
        static get Default() {
            return we;
        }
        static get DefaultType() {
            return Ee;
        }
        static get NAME() {
            return "dropdown";
        }
        toggle() {
            h(this._element) ||
                (this._element.classList.contains("show")
                    ? this.hide()
                    : this.show());
        }
        show() {
            if (h(this._element) || this._menu.classList.contains("show"))
                return;
            const t = Ae.getParentFromElement(this._element),
                e = { relatedTarget: this._element };
            if (
                !P.trigger(this._element, "show.bs.dropdown", e)
                    .defaultPrevented
            ) {
                if (this._inNavbar)
                    U.setDataAttribute(this._menu, "popper", "none");
                else {
                    if (void 0 === fe)
                        throw new TypeError(
                            "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                        );
                    let e = this._element;
                    "parent" === this._config.reference
                        ? (e = t)
                        : r(this._config.reference)
                        ? (e = a(this._config.reference))
                        : "object" == typeof this._config.reference &&
                          (e = this._config.reference);
                    const i = this._getPopperConfig(),
                        n = i.modifiers.find(
                            (t) => "applyStyles" === t.name && !1 === t.enabled
                        );
                    (this._popper = ue(e, this._menu, i)),
                        n && U.setDataAttribute(this._menu, "popper", "static");
                }
                "ontouchstart" in document.documentElement &&
                    !t.closest(".navbar-nav") &&
                    []
                        .concat(...document.body.children)
                        .forEach((t) => P.on(t, "mouseover", u)),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    this._menu.classList.toggle("show"),
                    this._element.classList.toggle("show"),
                    P.trigger(this._element, "shown.bs.dropdown", e);
            }
        }
        hide() {
            if (h(this._element) || !this._menu.classList.contains("show"))
                return;
            const t = { relatedTarget: this._element };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            (this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update();
        }
        _addEventListeners() {
            P.on(this._element, "click.bs.dropdown", (t) => {
                t.preventDefault(), this.toggle();
            });
        }
        _completeHide(t) {
            P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
                ("ontouchstart" in document.documentElement &&
                    []
                        .concat(...document.body.children)
                        .forEach((t) => P.off(t, "mouseover", u)),
                this._popper && this._popper.destroy(),
                this._menu.classList.remove("show"),
                this._element.classList.remove("show"),
                this._element.setAttribute("aria-expanded", "false"),
                U.removeDataAttribute(this._menu, "popper"),
                P.trigger(this._element, "hidden.bs.dropdown", t));
        }
        _getConfig(t) {
            if (
                ((t = {
                    ...this.constructor.Default,
                    ...U.getDataAttributes(this._element),
                    ...t,
                }),
                l("dropdown", t, this.constructor.DefaultType),
                "object" == typeof t.reference &&
                    !r(t.reference) &&
                    "function" != typeof t.reference.getBoundingClientRect)
            )
                throw new TypeError(
                    "dropdown".toUpperCase() +
                        ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
                );
            return t;
        }
        _getMenuElement() {
            return t.next(this._element, ".dropdown-menu")[0];
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return ve;
            if (t.classList.contains("dropstart")) return ye;
            const e =
                "end" ===
                getComputedStyle(this._menu)
                    .getPropertyValue("--bs-position")
                    .trim();
            return t.classList.contains("dropup") ? (e ? ge : me) : e ? be : _e;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t
                ? t.split(",").map((t) => Number.parseInt(t, 10))
                : "function" == typeof t
                ? (e) => t(e, this._element)
                : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                ],
            };
            return (
                "static" === this._config.display &&
                    (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
                {
                    ...t,
                    ...("function" == typeof this._config.popperConfig
                        ? this._config.popperConfig(t)
                        : this._config.popperConfig),
                }
            );
        }
        _selectMenuItem({ key: e, target: i }) {
            const n = t
                .find(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                    this._menu
                )
                .filter(c);
            n.length && y(n, i, "ArrowDown" === e, !n.includes(i)).focus();
        }
        static dropdownInterface(t, e) {
            const i = Ae.getOrCreateInstance(t, e);
            if ("string" == typeof e) {
                if (void 0 === i[e])
                    throw new TypeError(`No method named "${e}"`);
                i[e]();
            }
        }
        static jQueryInterface(t) {
            return this.each(function () {
                Ae.dropdownInterface(this, t);
            });
        }
        static clearMenus(e) {
            if (
                e &&
                (2 === e.button || ("keyup" === e.type && "Tab" !== e.key))
            )
                return;
            const i = t.find('[data-bs-toggle="dropdown"]');
            for (let t = 0, n = i.length; t < n; t++) {
                const n = Ae.getInstance(i[t]);
                if (!n || !1 === n._config.autoClose) continue;
                if (!n._element.classList.contains("show")) continue;
                const s = { relatedTarget: n._element };
                if (e) {
                    const t = e.composedPath(),
                        i = t.includes(n._menu);
                    if (
                        t.includes(n._element) ||
                        ("inside" === n._config.autoClose && !i) ||
                        ("outside" === n._config.autoClose && i)
                    )
                        continue;
                    if (
                        n._menu.contains(e.target) &&
                        (("keyup" === e.type && "Tab" === e.key) ||
                            /input|select|option|textarea|form/i.test(
                                e.target.tagName
                            ))
                    )
                        continue;
                    "click" === e.type && (s.clickEvent = e);
                }
                n._completeHide(s);
            }
        }
        static getParentFromElement(t) {
            return s(t) || t.parentNode;
        }
        static dataApiKeydownHandler(e) {
            if (
                /input|textarea/i.test(e.target.tagName)
                    ? "Space" === e.key ||
                      ("Escape" !== e.key &&
                          (("ArrowDown" !== e.key && "ArrowUp" !== e.key) ||
                              e.target.closest(".dropdown-menu")))
                    : !pe.test(e.key)
            )
                return;
            const i = this.classList.contains("show");
            if (!i && "Escape" === e.key) return;
            if ((e.preventDefault(), e.stopPropagation(), h(this))) return;
            const n = () =>
                this.matches('[data-bs-toggle="dropdown"]')
                    ? this
                    : t.prev(this, '[data-bs-toggle="dropdown"]')[0];
            return "Escape" === e.key
                ? (n().focus(), void Ae.clearMenus())
                : "ArrowUp" === e.key || "ArrowDown" === e.key
                ? (i || n().click(),
                  void Ae.getInstance(n())._selectMenuItem(e))
                : void ((i && "Space" !== e.key) || Ae.clearMenus());
        }
    }
    P.on(
        document,
        "keydown.bs.dropdown.data-api",
        '[data-bs-toggle="dropdown"]',
        Ae.dataApiKeydownHandler
    ),
        P.on(
            document,
            "keydown.bs.dropdown.data-api",
            ".dropdown-menu",
            Ae.dataApiKeydownHandler
        ),
        P.on(document, "click.bs.dropdown.data-api", Ae.clearMenus),
        P.on(document, "keyup.bs.dropdown.data-api", Ae.clearMenus),
        P.on(
            document,
            "click.bs.dropdown.data-api",
            '[data-bs-toggle="dropdown"]',
            function (t) {
                t.preventDefault(), Ae.dropdownInterface(this);
            }
        ),
        _(Ae);
    class Te {
        constructor() {
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
                this._setElementAttributes(
                    this._element,
                    "paddingRight",
                    (e) => e + t
                ),
                this._setElementAttributes(
                    ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    "paddingRight",
                    (e) => e + t
                ),
                this._setElementAttributes(
                    ".sticky-top",
                    "marginRight",
                    (e) => e - t
                );
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t) => {
                if (
                    t !== this._element &&
                    window.innerWidth > t.clientWidth + n
                )
                    return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t)[e];
                t.style[e] = i(Number.parseFloat(s)) + "px";
            });
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, "paddingRight"),
                this._resetElementAttributes(
                    ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    "paddingRight"
                ),
                this._resetElementAttributes(".sticky-top", "marginRight");
        }
        _saveInitialAttribute(t, e) {
            const i = t.style[e];
            i && U.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t) => {
                const i = U.getDataAttribute(t, e);
                void 0 === i
                    ? t.style.removeProperty(e)
                    : (U.removeDataAttribute(t, e), (t.style[e] = i));
            });
        }
        _applyManipulationCallback(e, i) {
            r(e) ? i(e) : t.find(e, this._element).forEach(i);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
    }
    const Oe = {
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null,
        },
        Ce = {
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)",
        };
    class ke {
        constructor(t) {
            (this._config = this._getConfig(t)),
                (this._isAppended = !1),
                (this._element = null);
        }
        show(t) {
            this._config.isVisible
                ? (this._append(),
                  this._config.isAnimated && f(this._getElement()),
                  this._getElement().classList.add("show"),
                  this._emulateAnimation(() => {
                      b(t);
                  }))
                : b(t);
        }
        hide(t) {
            this._config.isVisible
                ? (this._getElement().classList.remove("show"),
                  this._emulateAnimation(() => {
                      this.dispose(), b(t);
                  }))
                : b(t);
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                (t.className = "modal-backdrop"),
                    this._config.isAnimated && t.classList.add("fade"),
                    (this._element = t);
            }
            return this._element;
        }
        _getConfig(t) {
            return (
                ((t = {
                    ...Oe,
                    ...("object" == typeof t ? t : {}),
                }).rootElement = a(t.rootElement)),
                l("backdrop", t, Ce),
                t
            );
        }
        _append() {
            this._isAppended ||
                (this._config.rootElement.appendChild(this._getElement()),
                P.on(this._getElement(), "mousedown.bs.backdrop", () => {
                    b(this._config.clickCallback);
                }),
                (this._isAppended = !0));
        }
        dispose() {
            this._isAppended &&
                (P.off(this._element, "mousedown.bs.backdrop"),
                this._element.remove(),
                (this._isAppended = !1));
        }
        _emulateAnimation(t) {
            v(t, this._getElement(), this._config.isAnimated);
        }
    }
    const Le = { backdrop: !0, keyboard: !0, focus: !0 },
        xe = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
        };
    class De extends B {
        constructor(e, i) {
            super(e),
                (this._config = this._getConfig(i)),
                (this._dialog = t.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._isShown = !1),
                (this._ignoreBackdropClick = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new Te());
        }
        static get Default() {
            return Le;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
                this._isTransitioning ||
                P.trigger(this._element, "show.bs.modal", { relatedTarget: t })
                    .defaultPrevented ||
                ((this._isShown = !0),
                this._isAnimated() && (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add("modal-open"),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                P.on(
                    this._element,
                    "click.dismiss.bs.modal",
                    '[data-bs-dismiss="modal"]',
                    (t) => this.hide(t)
                ),
                P.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
                    P.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
                        t.target === this._element &&
                            (this._ignoreBackdropClick = !0);
                    });
                }),
                this._showBackdrop(() => this._showElement(t)));
        }
        hide(t) {
            if (
                (t &&
                    ["A", "AREA"].includes(t.target.tagName) &&
                    t.preventDefault(),
                !this._isShown || this._isTransitioning)
            )
                return;
            if (P.trigger(this._element, "hide.bs.modal").defaultPrevented)
                return;
            this._isShown = !1;
            const e = this._isAnimated();
            e && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                P.off(document, "focusin.bs.modal"),
                this._element.classList.remove("show"),
                P.off(this._element, "click.dismiss.bs.modal"),
                P.off(this._dialog, "mousedown.dismiss.bs.modal"),
                this._queueCallback(() => this._hideModal(), this._element, e);
        }
        dispose() {
            [window, this._dialog].forEach((t) => P.off(t, ".bs.modal")),
                this._backdrop.dispose(),
                super.dispose(),
                P.off(document, "focusin.bs.modal");
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new ke({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
            });
        }
        _getConfig(t) {
            return (
                (t = {
                    ...Le,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t ? t : {}),
                }),
                l("modal", t, xe),
                t
            );
        }
        _showElement(e) {
            const i = this._isAnimated(),
                n = t.findOne(".modal-body", this._dialog);
            (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.appendChild(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0),
                n && (n.scrollTop = 0),
                i && f(this._element),
                this._element.classList.add("show"),
                this._config.focus && this._enforceFocus(),
                this._queueCallback(
                    () => {
                        this._config.focus && this._element.focus(),
                            (this._isTransitioning = !1),
                            P.trigger(this._element, "shown.bs.modal", {
                                relatedTarget: e,
                            });
                    },
                    this._dialog,
                    i
                );
        }
        _enforceFocus() {
            P.off(document, "focusin.bs.modal"),
                P.on(document, "focusin.bs.modal", (t) => {
                    document === t.target ||
                        this._element === t.target ||
                        this._element.contains(t.target) ||
                        this._element.focus();
                });
        }
        _setEscapeEvent() {
            this._isShown
                ? P.on(this._element, "keydown.dismiss.bs.modal", (t) => {
                      this._config.keyboard && "Escape" === t.key
                          ? (t.preventDefault(), this.hide())
                          : this._config.keyboard ||
                            "Escape" !== t.key ||
                            this._triggerBackdropTransition();
                  })
                : P.off(this._element, "keydown.dismiss.bs.modal");
        }
        _setResizeEvent() {
            this._isShown
                ? P.on(window, "resize.bs.modal", () => this._adjustDialog())
                : P.off(window, "resize.bs.modal");
        }
        _hideModal() {
            (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                    document.body.classList.remove("modal-open"),
                        this._resetAdjustments(),
                        this._scrollBar.reset(),
                        P.trigger(this._element, "hidden.bs.modal");
                });
        }
        _showBackdrop(t) {
            P.on(this._element, "click.dismiss.bs.modal", (t) => {
                this._ignoreBackdropClick
                    ? (this._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      (!0 === this._config.backdrop
                          ? this.hide()
                          : "static" === this._config.backdrop &&
                            this._triggerBackdropTransition());
            }),
                this._backdrop.show(t);
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (
                P.trigger(this._element, "hidePrevented.bs.modal")
                    .defaultPrevented
            )
                return;
            const { classList: t, scrollHeight: e, style: i } = this._element,
                n = e > document.documentElement.clientHeight;
            (!n && "hidden" === i.overflowY) ||
                t.contains("modal-static") ||
                (n || (i.overflowY = "hidden"),
                t.add("modal-static"),
                this._queueCallback(() => {
                    t.remove("modal-static"),
                        n ||
                            this._queueCallback(() => {
                                i.overflowY = "";
                            }, this._dialog);
                }, this._dialog),
                this._element.focus());
        }
        _adjustDialog() {
            const t =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            ((!i && t && !g()) || (i && !t && g())) &&
                (this._element.style.paddingLeft = e + "px"),
                ((i && !t && !g()) || (!i && t && g())) &&
                    (this._element.style.paddingRight = e + "px");
        }
        _resetAdjustments() {
            (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
        }
        static jQueryInterface(t, e) {
            return this.each(function () {
                const i = De.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    P.on(
        document,
        "click.bs.modal.data-api",
        '[data-bs-toggle="modal"]',
        function (t) {
            const e = s(this);
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                P.one(e, "show.bs.modal", (t) => {
                    t.defaultPrevented ||
                        P.one(e, "hidden.bs.modal", () => {
                            c(this) && this.focus();
                        });
                }),
                De.getOrCreateInstance(e).toggle(this);
        }
    ),
        _(De);
    const Se = { backdrop: !0, keyboard: !0, scroll: !1 },
        Ie = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
    class Ne extends B {
        constructor(t, e) {
            super(t),
                (this._config = this._getConfig(e)),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                this._addEventListeners();
        }
        static get NAME() {
            return "offcanvas";
        }
        static get Default() {
            return Se;
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
                P.trigger(this._element, "show.bs.offcanvas", {
                    relatedTarget: t,
                }).defaultPrevented ||
                ((this._isShown = !0),
                (this._element.style.visibility = "visible"),
                this._backdrop.show(),
                this._config.scroll ||
                    (new Te().hide(),
                    this._enforceFocusOnElement(this._element)),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add("show"),
                this._queueCallback(
                    () => {
                        P.trigger(this._element, "shown.bs.offcanvas", {
                            relatedTarget: t,
                        });
                    },
                    this._element,
                    !0
                ));
        }
        hide() {
            this._isShown &&
                (P.trigger(this._element, "hide.bs.offcanvas")
                    .defaultPrevented ||
                    (P.off(document, "focusin.bs.offcanvas"),
                    this._element.blur(),
                    (this._isShown = !1),
                    this._element.classList.remove("show"),
                    this._backdrop.hide(),
                    this._queueCallback(
                        () => {
                            this._element.setAttribute("aria-hidden", !0),
                                this._element.removeAttribute("aria-modal"),
                                this._element.removeAttribute("role"),
                                (this._element.style.visibility = "hidden"),
                                this._config.scroll || new Te().reset(),
                                P.trigger(this._element, "hidden.bs.offcanvas");
                        },
                        this._element,
                        !0
                    )));
        }
        dispose() {
            this._backdrop.dispose(),
                super.dispose(),
                P.off(document, "focusin.bs.offcanvas");
        }
        _getConfig(t) {
            return (
                (t = {
                    ...Se,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t ? t : {}),
                }),
                l("offcanvas", t, Ie),
                t
            );
        }
        _initializeBackDrop() {
            return new ke({
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide(),
            });
        }
        _enforceFocusOnElement(t) {
            P.off(document, "focusin.bs.offcanvas"),
                P.on(document, "focusin.bs.offcanvas", (e) => {
                    document === e.target ||
                        t === e.target ||
                        t.contains(e.target) ||
                        t.focus();
                }),
                t.focus();
        }
        _addEventListeners() {
            P.on(
                this._element,
                "click.dismiss.bs.offcanvas",
                '[data-bs-dismiss="offcanvas"]',
                () => this.hide()
            ),
                P.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
                    this._config.keyboard && "Escape" === t.key && this.hide();
                });
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Ne.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (
                        void 0 === e[t] ||
                        t.startsWith("_") ||
                        "constructor" === t
                    )
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    P.on(
        document,
        "click.bs.offcanvas.data-api",
        '[data-bs-toggle="offcanvas"]',
        function (e) {
            const i = s(this);
            if (
                (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                h(this))
            )
                return;
            P.one(i, "hidden.bs.offcanvas", () => {
                c(this) && this.focus();
            });
            const n = t.findOne(".offcanvas.show");
            n && n !== i && Ne.getInstance(n).hide(),
                Ne.getOrCreateInstance(i).toggle(this);
        }
    ),
        P.on(window, "load.bs.offcanvas.data-api", () =>
            t
                .find(".offcanvas.show")
                .forEach((t) => Ne.getOrCreateInstance(t).show())
        ),
        _(Ne);
    const je = new Set([
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
        ]),
        Me = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
        Pe =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        He = (t, e) => {
            const i = t.nodeName.toLowerCase();
            if (e.includes(i))
                return (
                    !je.has(i) ||
                    Boolean(Me.test(t.nodeValue) || Pe.test(t.nodeValue))
                );
            const n = e.filter((t) => t instanceof RegExp);
            for (let t = 0, e = n.length; t < e; t++)
                if (n[t].test(i)) return !0;
            return !1;
        };
    function Re(t, e, i) {
        if (!t.length) return t;
        if (i && "function" == typeof i) return i(t);
        const n = new window.DOMParser().parseFromString(t, "text/html"),
            s = Object.keys(e),
            o = [].concat(...n.body.querySelectorAll("*"));
        for (let t = 0, i = o.length; t < i; t++) {
            const i = o[t],
                n = i.nodeName.toLowerCase();
            if (!s.includes(n)) {
                i.remove();
                continue;
            }
            const r = [].concat(...i.attributes),
                a = [].concat(e["*"] || [], e[n] || []);
            r.forEach((t) => {
                He(t, a) || i.removeAttribute(t.nodeName);
            });
        }
        return n.body.innerHTML;
    }
    const Be = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        We = new Set(["sanitize", "allowList", "sanitizeFn"]),
        qe = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)",
        },
        ze = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: g() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: g() ? "right" : "left",
        },
        $e = {
            animation: !0,
            template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
            popperConfig: null,
        },
        Ue = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip",
        };
    class Fe extends B {
        constructor(t, e) {
            if (void 0 === fe)
                throw new TypeError(
                    "Bootstrap's tooltips require Popper (https://popper.js.org)"
                );
            super(t),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._hoverState = ""),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._config = this._getConfig(e)),
                (this.tip = null),
                this._setListeners();
        }
        static get Default() {
            return $e;
        }
        static get NAME() {
            return "tooltip";
        }
        static get Event() {
            return Ue;
        }
        static get DefaultType() {
            return qe;
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    (e._activeTrigger.click = !e._activeTrigger.click),
                        e._isWithActiveTrigger()
                            ? e._enter(null, e)
                            : e._leave(null, e);
                } else {
                    if (this.getTipElement().classList.contains("show"))
                        return void this._leave(null, this);
                    this._enter(null, this);
                }
        }
        dispose() {
            clearTimeout(this._timeout),
                P.off(
                    this._element.closest(".modal"),
                    "hide.bs.modal",
                    this._hideModalHandler
                ),
                this.tip && this.tip.remove(),
                this._popper && this._popper.destroy(),
                super.dispose();
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t = P.trigger(this._element, this.constructor.Event.SHOW),
                i = d(this._element),
                n =
                    null === i
                        ? this._element.ownerDocument.documentElement.contains(
                              this._element
                          )
                        : i.contains(this._element);
            if (t.defaultPrevented || !n) return;
            const s = this.getTipElement(),
                o = e(this.constructor.NAME);
            s.setAttribute("id", o),
                this._element.setAttribute("aria-describedby", o),
                this.setContent(),
                this._config.animation && s.classList.add("fade");
            const r =
                    "function" == typeof this._config.placement
                        ? this._config.placement.call(this, s, this._element)
                        : this._config.placement,
                a = this._getAttachment(r);
            this._addAttachmentClass(a);
            const { container: l } = this._config;
            R.set(s, this.constructor.DATA_KEY, this),
                this._element.ownerDocument.documentElement.contains(
                    this.tip
                ) ||
                    (l.appendChild(s),
                    P.trigger(this._element, this.constructor.Event.INSERTED)),
                this._popper
                    ? this._popper.update()
                    : (this._popper = ue(
                          this._element,
                          s,
                          this._getPopperConfig(a)
                      )),
                s.classList.add("show");
            const c =
                "function" == typeof this._config.customClass
                    ? this._config.customClass()
                    : this._config.customClass;
            c && s.classList.add(...c.split(" ")),
                "ontouchstart" in document.documentElement &&
                    [].concat(...document.body.children).forEach((t) => {
                        P.on(t, "mouseover", u);
                    });
            const h = this.tip.classList.contains("fade");
            this._queueCallback(
                () => {
                    const t = this._hoverState;
                    (this._hoverState = null),
                        P.trigger(this._element, this.constructor.Event.SHOWN),
                        "out" === t && this._leave(null, this);
                },
                this.tip,
                h
            );
        }
        hide() {
            if (!this._popper) return;
            const t = this.getTipElement();
            if (
                P.trigger(this._element, this.constructor.Event.HIDE)
                    .defaultPrevented
            )
                return;
            t.classList.remove("show"),
                "ontouchstart" in document.documentElement &&
                    []
                        .concat(...document.body.children)
                        .forEach((t) => P.off(t, "mouseover", u)),
                (this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger.hover = !1);
            const e = this.tip.classList.contains("fade");
            this._queueCallback(
                () => {
                    this._isWithActiveTrigger() ||
                        ("show" !== this._hoverState && t.remove(),
                        this._cleanTipClass(),
                        this._element.removeAttribute("aria-describedby"),
                        P.trigger(this._element, this.constructor.Event.HIDDEN),
                        this._popper &&
                            (this._popper.destroy(), (this._popper = null)));
                },
                this.tip,
                e
            ),
                (this._hoverState = "");
        }
        update() {
            null !== this._popper && this._popper.update();
        }
        isWithContent() {
            return Boolean(this.getTitle());
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            return (
                (t.innerHTML = this._config.template),
                (this.tip = t.children[0]),
                this.tip
            );
        }
        setContent() {
            const e = this.getTipElement();
            this.setElementContent(
                t.findOne(".tooltip-inner", e),
                this.getTitle()
            ),
                e.classList.remove("fade", "show");
        }
        setElementContent(t, e) {
            if (null !== t)
                return r(e)
                    ? ((e = a(e)),
                      void (this._config.html
                          ? e.parentNode !== t &&
                            ((t.innerHTML = ""), t.appendChild(e))
                          : (t.textContent = e.textContent)))
                    : void (this._config.html
                          ? (this._config.sanitize &&
                                (e = Re(
                                    e,
                                    this._config.allowList,
                                    this._config.sanitizeFn
                                )),
                            (t.innerHTML = e))
                          : (t.textContent = e));
        }
        getTitle() {
            let t = this._element.getAttribute("data-bs-original-title");
            return (
                t ||
                    (t =
                        "function" == typeof this._config.title
                            ? this._config.title.call(this._element)
                            : this._config.title),
                t
            );
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t;
        }
        _initializeOnDelegatedTarget(t, e) {
            const i = this.constructor.DATA_KEY;
            return (
                (e = e || R.get(t.delegateTarget, i)) ||
                    ((e = new this.constructor(
                        t.delegateTarget,
                        this._getDelegateConfig()
                    )),
                    R.set(t.delegateTarget, i, e)),
                e
            );
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t
                ? t.split(",").map((t) => Number.parseInt(t, 10))
                : "function" == typeof t
                ? (e) => t(e, this._element)
                : t;
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements,
                        },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    {
                        name: "arrow",
                        options: { element: `.${this.constructor.NAME}-arrow` },
                    },
                    {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: (t) => this._handlePopperPlacementChange(t),
                    },
                ],
                onFirstUpdate: (t) => {
                    t.options.placement !== t.placement &&
                        this._handlePopperPlacementChange(t);
                },
            };
            return {
                ...e,
                ...("function" == typeof this._config.popperConfig
                    ? this._config.popperConfig(e)
                    : this._config.popperConfig),
            };
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(
                "bs-tooltip-" + this.updateAttachment(t)
            );
        }
        _getAttachment(t) {
            return ze[t.toUpperCase()];
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((t) => {
                if ("click" === t)
                    P.on(
                        this._element,
                        this.constructor.Event.CLICK,
                        this._config.selector,
                        (t) => this.toggle(t)
                    );
                else if ("manual" !== t) {
                    const e =
                            "hover" === t
                                ? this.constructor.Event.MOUSEENTER
                                : this.constructor.Event.FOCUSIN,
                        i =
                            "hover" === t
                                ? this.constructor.Event.MOUSELEAVE
                                : this.constructor.Event.FOCUSOUT;
                    P.on(this._element, e, this._config.selector, (t) =>
                        this._enter(t)
                    ),
                        P.on(this._element, i, this._config.selector, (t) =>
                            this._leave(t)
                        );
                }
            }),
                (this._hideModalHandler = () => {
                    this._element && this.hide();
                }),
                P.on(
                    this._element.closest(".modal"),
                    "hide.bs.modal",
                    this._hideModalHandler
                ),
                this._config.selector
                    ? (this._config = {
                          ...this._config,
                          trigger: "manual",
                          selector: "",
                      })
                    : this._fixTitle();
        }
        _fixTitle() {
            const t = this._element.getAttribute("title"),
                e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) &&
                (this._element.setAttribute("data-bs-original-title", t || ""),
                !t ||
                    this._element.getAttribute("aria-label") ||
                    this._element.textContent ||
                    this._element.setAttribute("aria-label", t),
                this._element.setAttribute("title", ""));
        }
        _enter(t, e) {
            (e = this._initializeOnDelegatedTarget(t, e)),
                t &&
                    (e._activeTrigger[
                        "focusin" === t.type ? "focus" : "hover"
                    ] = !0),
                e.getTipElement().classList.contains("show") ||
                "show" === e._hoverState
                    ? (e._hoverState = "show")
                    : (clearTimeout(e._timeout),
                      (e._hoverState = "show"),
                      e._config.delay && e._config.delay.show
                          ? (e._timeout = setTimeout(() => {
                                "show" === e._hoverState && e.show();
                            }, e._config.delay.show))
                          : e.show());
        }
        _leave(t, e) {
            (e = this._initializeOnDelegatedTarget(t, e)),
                t &&
                    (e._activeTrigger[
                        "focusout" === t.type ? "focus" : "hover"
                    ] = e._element.contains(t.relatedTarget)),
                e._isWithActiveTrigger() ||
                    (clearTimeout(e._timeout),
                    (e._hoverState = "out"),
                    e._config.delay && e._config.delay.hide
                        ? (e._timeout = setTimeout(() => {
                              "out" === e._hoverState && e.hide();
                          }, e._config.delay.hide))
                        : e.hide());
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
            return !1;
        }
        _getConfig(t) {
            const e = U.getDataAttributes(this._element);
            return (
                Object.keys(e).forEach((t) => {
                    We.has(t) && delete e[t];
                }),
                ((t = {
                    ...this.constructor.Default,
                    ...e,
                    ...("object" == typeof t && t ? t : {}),
                }).container =
                    !1 === t.container ? document.body : a(t.container)),
                "number" == typeof t.delay &&
                    (t.delay = { show: t.delay, hide: t.delay }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content &&
                    (t.content = t.content.toString()),
                l("tooltip", t, this.constructor.DefaultType),
                t.sanitize &&
                    (t.template = Re(t.template, t.allowList, t.sanitizeFn)),
                t
            );
        }
        _getDelegateConfig() {
            const t = {};
            if (this._config)
                for (const e in this._config)
                    this.constructor.Default[e] !== this._config[e] &&
                        (t[e] = this._config[e]);
            return t;
        }
        _cleanTipClass() {
            const t = this.getTipElement(),
                e = t.getAttribute("class").match(Be);
            null !== e &&
                e.length > 0 &&
                e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
        }
        _handlePopperPlacementChange(t) {
            const { state: e } = t;
            e &&
                ((this.tip = e.elements.popper),
                this._cleanTipClass(),
                this._addAttachmentClass(this._getAttachment(e.placement)));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Fe.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    _(Fe);
    const Ve = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        Ke = {
            ...Fe.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        },
        Xe = { ...Fe.DefaultType, content: "(string|element|function)" },
        Ye = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover",
        };
    class Qe extends Fe {
        static get Default() {
            return Ke;
        }
        static get NAME() {
            return "popover";
        }
        static get Event() {
            return Ye;
        }
        static get DefaultType() {
            return Xe;
        }
        isWithContent() {
            return this.getTitle() || this._getContent();
        }
        getTipElement() {
            return (
                this.tip ||
                    ((this.tip = super.getTipElement()),
                    this.getTitle() ||
                        t.findOne(".popover-header", this.tip).remove(),
                    this._getContent() ||
                        t.findOne(".popover-body", this.tip).remove()),
                this.tip
            );
        }
        setContent() {
            const e = this.getTipElement();
            this.setElementContent(
                t.findOne(".popover-header", e),
                this.getTitle()
            );
            let i = this._getContent();
            "function" == typeof i && (i = i.call(this._element)),
                this.setElementContent(t.findOne(".popover-body", e), i),
                e.classList.remove("fade", "show");
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(
                "bs-popover-" + this.updateAttachment(t)
            );
        }
        _getContent() {
            return (
                this._element.getAttribute("data-bs-content") ||
                this._config.content
            );
        }
        _cleanTipClass() {
            const t = this.getTipElement(),
                e = t.getAttribute("class").match(Ve);
            null !== e &&
                e.length > 0 &&
                e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Qe.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    _(Qe);
    const Ge = { offset: 10, method: "auto", target: "" },
        Ze = { offset: "number", method: "string", target: "(string|element)" };
    class Je extends B {
        constructor(t, e) {
            super(t),
                (this._scrollElement =
                    "BODY" === this._element.tagName ? window : this._element),
                (this._config = this._getConfig(e)),
                (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                P.on(this._scrollElement, "scroll.bs.scrollspy", () =>
                    this._process()
                ),
                this.refresh(),
                this._process();
        }
        static get Default() {
            return Ge;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            const e =
                    this._scrollElement === this._scrollElement.window
                        ? "offset"
                        : "position",
                i = "auto" === this._config.method ? e : this._config.method,
                s = "position" === i ? this._getScrollTop() : 0;
            (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                t
                    .find(this._selector)
                    .map((e) => {
                        const o = n(e),
                            r = o ? t.findOne(o) : null;
                        if (r) {
                            const t = r.getBoundingClientRect();
                            if (t.width || t.height)
                                return [U[i](r).top + s, o];
                        }
                        return null;
                    })
                    .filter((t) => t)
                    .sort((t, e) => t[0] - e[0])
                    .forEach((t) => {
                        this._offsets.push(t[0]), this._targets.push(t[1]);
                    });
        }
        dispose() {
            P.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
        }
        _getConfig(t) {
            if (
                "string" !=
                    typeof (t = {
                        ...Ge,
                        ...U.getDataAttributes(this._element),
                        ...("object" == typeof t && t ? t : {}),
                    }).target &&
                r(t.target)
            ) {
                let { id: i } = t.target;
                i || ((i = e("scrollspy")), (t.target.id = i)),
                    (t.target = "#" + i);
            }
            return l("scrollspy", t, Ze), t;
        }
        _getScrollTop() {
            return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
            return (
                this._scrollElement.scrollHeight ||
                Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                )
            );
        }
        _getOffsetHeight() {
            return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                i = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t);
            } else {
                if (
                    this._activeTarget &&
                    t < this._offsets[0] &&
                    this._offsets[0] > 0
                )
                    return (this._activeTarget = null), void this._clear();
                for (let e = this._offsets.length; e--; )
                    this._activeTarget !== this._targets[e] &&
                        t >= this._offsets[e] &&
                        (void 0 === this._offsets[e + 1] ||
                            t < this._offsets[e + 1]) &&
                        this._activate(this._targets[e]);
            }
        }
        _activate(e) {
            (this._activeTarget = e), this._clear();
            const i = this._selector
                    .split(",")
                    .map(
                        (t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`
                    ),
                n = t.findOne(i.join(","));
            n.classList.contains("dropdown-item")
                ? (t
                      .findOne(".dropdown-toggle", n.closest(".dropdown"))
                      .classList.add("active"),
                  n.classList.add("active"))
                : (n.classList.add("active"),
                  t.parents(n, ".nav, .list-group").forEach((e) => {
                      t
                          .prev(e, ".nav-link, .list-group-item")
                          .forEach((t) => t.classList.add("active")),
                          t.prev(e, ".nav-item").forEach((e) => {
                              t.children(e, ".nav-link").forEach((t) =>
                                  t.classList.add("active")
                              );
                          });
                  })),
                P.trigger(this._scrollElement, "activate.bs.scrollspy", {
                    relatedTarget: e,
                });
        }
        _clear() {
            t.find(this._selector)
                .filter((t) => t.classList.contains("active"))
                .forEach((t) => t.classList.remove("active"));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Je.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    P.on(window, "load.bs.scrollspy.data-api", () => {
        t.find('[data-bs-spy="scroll"]').forEach((t) => new Je(t));
    }),
        _(Je);
    class ti extends B {
        static get NAME() {
            return "tab";
        }
        show() {
            if (
                this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                this._element.classList.contains("active")
            )
                return;
            let e;
            const i = s(this._element),
                n = this._element.closest(".nav, .list-group");
            if (n) {
                const i =
                    "UL" === n.nodeName || "OL" === n.nodeName
                        ? ":scope > li > .active"
                        : ".active";
                (e = t.find(i, n)), (e = e[e.length - 1]);
            }
            const o = e
                ? P.trigger(e, "hide.bs.tab", { relatedTarget: this._element })
                : null;
            if (
                P.trigger(this._element, "show.bs.tab", { relatedTarget: e })
                    .defaultPrevented ||
                (null !== o && o.defaultPrevented)
            )
                return;
            this._activate(this._element, n);
            const r = () => {
                P.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }),
                    P.trigger(this._element, "shown.bs.tab", {
                        relatedTarget: e,
                    });
            };
            i ? this._activate(i, i.parentNode, r) : r();
        }
        _activate(e, i, n) {
            const s = (
                    !i || ("UL" !== i.nodeName && "OL" !== i.nodeName)
                        ? t.children(i, ".active")
                        : t.find(":scope > li > .active", i)
                )[0],
                o = n && s && s.classList.contains("fade"),
                r = () => this._transitionComplete(e, s, n);
            s && o
                ? (s.classList.remove("show"), this._queueCallback(r, e, !0))
                : r();
        }
        _transitionComplete(e, i, n) {
            if (i) {
                i.classList.remove("active");
                const e = t.findOne(
                    ":scope > .dropdown-menu .active",
                    i.parentNode
                );
                e && e.classList.remove("active"),
                    "tab" === i.getAttribute("role") &&
                        i.setAttribute("aria-selected", !1);
            }
            e.classList.add("active"),
                "tab" === e.getAttribute("role") &&
                    e.setAttribute("aria-selected", !0),
                f(e),
                e.classList.contains("fade") && e.classList.add("show");
            let s = e.parentNode;
            if (
                (s && "LI" === s.nodeName && (s = s.parentNode),
                s && s.classList.contains("dropdown-menu"))
            ) {
                const i = e.closest(".dropdown");
                i &&
                    t
                        .find(".dropdown-toggle", i)
                        .forEach((t) => t.classList.add("active")),
                    e.setAttribute("aria-expanded", !0);
            }
            n && n();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = ti.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    P.on(
        document,
        "click.bs.tab.data-api",
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        function (t) {
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                h(this) || ti.getOrCreateInstance(this).show();
        }
    ),
        _(ti);
    const ei = { animation: "boolean", autohide: "boolean", delay: "number" },
        ii = { animation: !0, autohide: !0, delay: 5e3 };
    class ni extends B {
        constructor(t, e) {
            super(t),
                (this._config = this._getConfig(e)),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners();
        }
        static get DefaultType() {
            return ei;
        }
        static get Default() {
            return ii;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            P.trigger(this._element, "show.bs.toast").defaultPrevented ||
                (this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade"),
                this._element.classList.remove("hide"),
                f(this._element),
                this._element.classList.add("showing"),
                this._queueCallback(
                    () => {
                        this._element.classList.remove("showing"),
                            this._element.classList.add("show"),
                            P.trigger(this._element, "shown.bs.toast"),
                            this._maybeScheduleHide();
                    },
                    this._element,
                    this._config.animation
                ));
        }
        hide() {
            this._element.classList.contains("show") &&
                (P.trigger(this._element, "hide.bs.toast").defaultPrevented ||
                    (this._element.classList.remove("show"),
                    this._queueCallback(
                        () => {
                            this._element.classList.add("hide"),
                                P.trigger(this._element, "hidden.bs.toast");
                        },
                        this._element,
                        this._config.animation
                    )));
        }
        dispose() {
            this._clearTimeout(),
                this._element.classList.contains("show") &&
                    this._element.classList.remove("show"),
                super.dispose();
        }
        _getConfig(t) {
            return (
                (t = {
                    ...ii,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t && t ? t : {}),
                }),
                l("toast", t, this.constructor.DefaultType),
                t
            );
        }
        _maybeScheduleHide() {
            this._config.autohide &&
                (this._hasMouseInteraction ||
                    this._hasKeyboardInteraction ||
                    (this._timeout = setTimeout(() => {
                        this.hide();
                    }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i ||
                this._element.contains(i) ||
                this._maybeScheduleHide();
        }
        _setListeners() {
            P.on(
                this._element,
                "click.dismiss.bs.toast",
                '[data-bs-dismiss="toast"]',
                () => this.hide()
            ),
                P.on(this._element, "mouseover.bs.toast", (t) =>
                    this._onInteraction(t, !0)
                ),
                P.on(this._element, "mouseout.bs.toast", (t) =>
                    this._onInteraction(t, !1)
                ),
                P.on(this._element, "focusin.bs.toast", (t) =>
                    this._onInteraction(t, !0)
                ),
                P.on(this._element, "focusout.bs.toast", (t) =>
                    this._onInteraction(t, !1)
                );
        }
        _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = ni.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return (
        _(ni),
        {
            Alert: W,
            Button: q,
            Carousel: Z,
            Collapse: et,
            Dropdown: Ae,
            Modal: De,
            Offcanvas: Ne,
            Popover: Qe,
            ScrollSpy: Je,
            Tab: ti,
            Toast: ni,
            Tooltip: Fe,
        }
    );
});
//# sourceMappingURL=bootstrap.bundle.min.js.map

/* aos source file script */
!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define([], t)
        : "object" == typeof exports
        ? (exports.AOS = t())
        : (e.AOS = t());
})(this, function () {
    return (function (e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = (n[o] = { exports: {}, id: o, loaded: !1 });
            return (
                e[o].call(i.exports, i, i.exports, t),
                (i.loaded = !0),
                i.exports
            );
        }
        var n = {};
        return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
    })([
        function (e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : { default: e };
            }
            var i =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n)
                                Object.prototype.hasOwnProperty.call(n, o) &&
                                    (e[o] = n[o]);
                        }
                        return e;
                    },
                r = n(1),
                a = (o(r), n(6)),
                u = o(a),
                c = n(7),
                s = o(c),
                f = n(8),
                d = o(f),
                l = n(9),
                p = o(l),
                m = n(10),
                b = o(m),
                v = n(11),
                y = o(v),
                g = n(14),
                h = o(g),
                w = [],
                k = !1,
                x = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1,
                },
                j = function () {
                    var e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                    if ((e && (k = !0), k))
                        return (
                            (w = (0, y.default)(w, x)),
                            (0, b.default)(w, x.once),
                            w
                        );
                },
                O = function () {
                    (w = (0, h.default)()), j();
                },
                M = function () {
                    w.forEach(function (e, t) {
                        e.node.removeAttribute("data-aos"),
                            e.node.removeAttribute("data-aos-easing"),
                            e.node.removeAttribute("data-aos-duration"),
                            e.node.removeAttribute("data-aos-delay");
                    });
                },
                S = function (e) {
                    return (
                        e === !0 ||
                        ("mobile" === e && p.default.mobile()) ||
                        ("phone" === e && p.default.phone()) ||
                        ("tablet" === e && p.default.tablet()) ||
                        ("function" == typeof e && e() === !0)
                    );
                },
                _ = function (e) {
                    (x = i(x, e)), (w = (0, h.default)());
                    var t = document.all && !window.atob;
                    return S(x.disable) || t
                        ? M()
                        : (x.disableMutationObserver ||
                              d.default.isSupported() ||
                              (console.info(
                                  '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                              ),
                              (x.disableMutationObserver = !0)),
                          document
                              .querySelector("body")
                              .setAttribute("data-aos-easing", x.easing),
                          document
                              .querySelector("body")
                              .setAttribute("data-aos-duration", x.duration),
                          document
                              .querySelector("body")
                              .setAttribute("data-aos-delay", x.delay),
                          "DOMContentLoaded" === x.startEvent &&
                          ["complete", "interactive"].indexOf(
                              document.readyState
                          ) > -1
                              ? j(!0)
                              : "load" === x.startEvent
                              ? window.addEventListener(
                                    x.startEvent,
                                    function () {
                                        j(!0);
                                    }
                                )
                              : document.addEventListener(
                                    x.startEvent,
                                    function () {
                                        j(!0);
                                    }
                                ),
                          window.addEventListener(
                              "resize",
                              (0, s.default)(j, x.debounceDelay, !0)
                          ),
                          window.addEventListener(
                              "orientationchange",
                              (0, s.default)(j, x.debounceDelay, !0)
                          ),
                          window.addEventListener(
                              "scroll",
                              (0, u.default)(function () {
                                  (0, b.default)(w, x.once);
                              }, x.throttleDelay)
                          ),
                          x.disableMutationObserver ||
                              d.default.ready("[data-aos]", O),
                          w);
                };
            e.exports = { init: _, refresh: j, refreshHard: O };
        },
        function (e, t) {},
        ,
        ,
        ,
        ,
        function (e, t) {
            (function (t) {
                "use strict";
                function n(e, t, n) {
                    function o(t) {
                        var n = b,
                            o = v;
                        return (b = v = void 0), (k = t), (g = e.apply(o, n));
                    }
                    function r(e) {
                        return (k = e), (h = setTimeout(f, t)), M ? o(e) : g;
                    }
                    function a(e) {
                        var n = e - w,
                            o = e - k,
                            i = t - n;
                        return S ? j(i, y - o) : i;
                    }
                    function c(e) {
                        var n = e - w,
                            o = e - k;
                        return void 0 === w || n >= t || n < 0 || (S && o >= y);
                    }
                    function f() {
                        var e = O();
                        return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
                    }
                    function d(e) {
                        return (
                            (h = void 0), _ && b ? o(e) : ((b = v = void 0), g)
                        );
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h),
                            (k = 0),
                            (b = w = v = h = void 0);
                    }
                    function p() {
                        return void 0 === h ? g : d(O());
                    }
                    function m() {
                        var e = O(),
                            n = c(e);
                        if (((b = arguments), (v = this), (w = e), n)) {
                            if (void 0 === h) return r(w);
                            if (S) return (h = setTimeout(f, t)), o(w);
                        }
                        return void 0 === h && (h = setTimeout(f, t)), g;
                    }
                    var b,
                        v,
                        y,
                        g,
                        h,
                        w,
                        k = 0,
                        M = !1,
                        S = !1,
                        _ = !0;
                    if ("function" != typeof e) throw new TypeError(s);
                    return (
                        (t = u(t) || 0),
                        i(n) &&
                            ((M = !!n.leading),
                            (S = "maxWait" in n),
                            (y = S ? x(u(n.maxWait) || 0, t) : y),
                            (_ = "trailing" in n ? !!n.trailing : _)),
                        (m.cancel = l),
                        (m.flush = p),
                        m
                    );
                }
                function o(e, t, o) {
                    var r = !0,
                        a = !0;
                    if ("function" != typeof e) throw new TypeError(s);
                    return (
                        i(o) &&
                            ((r = "leading" in o ? !!o.leading : r),
                            (a = "trailing" in o ? !!o.trailing : a)),
                        n(e, t, { leading: r, maxWait: t, trailing: a })
                    );
                }
                function i(e) {
                    var t = "undefined" == typeof e ? "undefined" : c(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function r(e) {
                    return (
                        !!e &&
                        "object" ==
                            ("undefined" == typeof e ? "undefined" : c(e))
                    );
                }
                function a(e) {
                    return (
                        "symbol" ==
                            ("undefined" == typeof e ? "undefined" : c(e)) ||
                        (r(e) && k.call(e) == d)
                    );
                }
                function u(e) {
                    if ("number" == typeof e) return e;
                    if (a(e)) return f;
                    if (i(e)) {
                        var t =
                            "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = i(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(l, "");
                    var n = m.test(e);
                    return n || b.test(e)
                        ? v(e.slice(2), n ? 2 : 8)
                        : p.test(e)
                        ? f
                        : +e;
                }
                var c =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      "function" == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? "symbol"
                                      : typeof e;
                              },
                    s = "Expected a function",
                    f = NaN,
                    d = "[object Symbol]",
                    l = /^\s+|\s+$/g,
                    p = /^[-+]0x[0-9a-f]+$/i,
                    m = /^0b[01]+$/i,
                    b = /^0o[0-7]+$/i,
                    v = parseInt,
                    y =
                        "object" ==
                            ("undefined" == typeof t ? "undefined" : c(t)) &&
                        t &&
                        t.Object === Object &&
                        t,
                    g =
                        "object" ==
                            ("undefined" == typeof self
                                ? "undefined"
                                : c(self)) &&
                        self &&
                        self.Object === Object &&
                        self,
                    h = y || g || Function("return this")(),
                    w = Object.prototype,
                    k = w.toString,
                    x = Math.max,
                    j = Math.min,
                    O = function () {
                        return h.Date.now();
                    };
                e.exports = o;
            }).call(
                t,
                (function () {
                    return this;
                })()
            );
        },
        function (e, t) {
            (function (t) {
                "use strict";
                function n(e, t, n) {
                    function i(t) {
                        var n = b,
                            o = v;
                        return (b = v = void 0), (O = t), (g = e.apply(o, n));
                    }
                    function r(e) {
                        return (O = e), (h = setTimeout(f, t)), M ? i(e) : g;
                    }
                    function u(e) {
                        var n = e - w,
                            o = e - O,
                            i = t - n;
                        return S ? x(i, y - o) : i;
                    }
                    function s(e) {
                        var n = e - w,
                            o = e - O;
                        return void 0 === w || n >= t || n < 0 || (S && o >= y);
                    }
                    function f() {
                        var e = j();
                        return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
                    }
                    function d(e) {
                        return (
                            (h = void 0), _ && b ? i(e) : ((b = v = void 0), g)
                        );
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h),
                            (O = 0),
                            (b = w = v = h = void 0);
                    }
                    function p() {
                        return void 0 === h ? g : d(j());
                    }
                    function m() {
                        var e = j(),
                            n = s(e);
                        if (((b = arguments), (v = this), (w = e), n)) {
                            if (void 0 === h) return r(w);
                            if (S) return (h = setTimeout(f, t)), i(w);
                        }
                        return void 0 === h && (h = setTimeout(f, t)), g;
                    }
                    var b,
                        v,
                        y,
                        g,
                        h,
                        w,
                        O = 0,
                        M = !1,
                        S = !1,
                        _ = !0;
                    if ("function" != typeof e) throw new TypeError(c);
                    return (
                        (t = a(t) || 0),
                        o(n) &&
                            ((M = !!n.leading),
                            (S = "maxWait" in n),
                            (y = S ? k(a(n.maxWait) || 0, t) : y),
                            (_ = "trailing" in n ? !!n.trailing : _)),
                        (m.cancel = l),
                        (m.flush = p),
                        m
                    );
                }
                function o(e) {
                    var t = "undefined" == typeof e ? "undefined" : u(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function i(e) {
                    return (
                        !!e &&
                        "object" ==
                            ("undefined" == typeof e ? "undefined" : u(e))
                    );
                }
                function r(e) {
                    return (
                        "symbol" ==
                            ("undefined" == typeof e ? "undefined" : u(e)) ||
                        (i(e) && w.call(e) == f)
                    );
                }
                function a(e) {
                    if ("number" == typeof e) return e;
                    if (r(e)) return s;
                    if (o(e)) {
                        var t =
                            "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = o(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(d, "");
                    var n = p.test(e);
                    return n || m.test(e)
                        ? b(e.slice(2), n ? 2 : 8)
                        : l.test(e)
                        ? s
                        : +e;
                }
                var u =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      "function" == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? "symbol"
                                      : typeof e;
                              },
                    c = "Expected a function",
                    s = NaN,
                    f = "[object Symbol]",
                    d = /^\s+|\s+$/g,
                    l = /^[-+]0x[0-9a-f]+$/i,
                    p = /^0b[01]+$/i,
                    m = /^0o[0-7]+$/i,
                    b = parseInt,
                    v =
                        "object" ==
                            ("undefined" == typeof t ? "undefined" : u(t)) &&
                        t &&
                        t.Object === Object &&
                        t,
                    y =
                        "object" ==
                            ("undefined" == typeof self
                                ? "undefined"
                                : u(self)) &&
                        self &&
                        self.Object === Object &&
                        self,
                    g = v || y || Function("return this")(),
                    h = Object.prototype,
                    w = h.toString,
                    k = Math.max,
                    x = Math.min,
                    j = function () {
                        return g.Date.now();
                    };
                e.exports = n;
            }).call(
                t,
                (function () {
                    return this;
                })()
            );
        },
        function (e, t) {
            "use strict";
            function n(e) {
                var t = void 0,
                    o = void 0,
                    i = void 0;
                for (t = 0; t < e.length; t += 1) {
                    if (((o = e[t]), o.dataset && o.dataset.aos)) return !0;
                    if ((i = o.children && n(o.children))) return !0;
                }
                return !1;
            }
            function o() {
                return (
                    window.MutationObserver ||
                    window.WebKitMutationObserver ||
                    window.MozMutationObserver
                );
            }
            function i() {
                return !!o();
            }
            function r(e, t) {
                var n = window.document,
                    i = o(),
                    r = new i(a);
                (u = t),
                    r.observe(n.documentElement, {
                        childList: !0,
                        subtree: !0,
                        removedNodes: !0,
                    });
            }
            function a(e) {
                e &&
                    e.forEach(function (e) {
                        var t = Array.prototype.slice.call(e.addedNodes),
                            o = Array.prototype.slice.call(e.removedNodes),
                            i = t.concat(o);
                        if (n(i)) return u();
                    });
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var u = function () {};
            t.default = { isSupported: i, ready: r };
        },
        function (e, t) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function o() {
                return (
                    navigator.userAgent ||
                    navigator.vendor ||
                    window.opera ||
                    ""
                );
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            (o.enumerable = o.enumerable || !1),
                                (o.configurable = !0),
                                "value" in o && (o.writable = !0),
                                Object.defineProperty(e, o.key, o);
                        }
                    }
                    return function (t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t;
                    };
                })(),
                r =
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                a =
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                u =
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                c =
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                s = (function () {
                    function e() {
                        n(this, e);
                    }
                    return (
                        i(e, [
                            {
                                key: "phone",
                                value: function () {
                                    var e = o();
                                    return !(
                                        !r.test(e) && !a.test(e.substr(0, 4))
                                    );
                                },
                            },
                            {
                                key: "mobile",
                                value: function () {
                                    var e = o();
                                    return !(
                                        !u.test(e) && !c.test(e.substr(0, 4))
                                    );
                                },
                            },
                            {
                                key: "tablet",
                                value: function () {
                                    return this.mobile() && !this.phone();
                                },
                            },
                        ]),
                        e
                    );
                })();
            t.default = new s();
        },
        function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = function (e, t, n) {
                    var o = e.node.getAttribute("data-aos-once");
                    t > e.position
                        ? e.node.classList.add("aos-animate")
                        : "undefined" != typeof o &&
                          ("false" === o || (!n && "true" !== o)) &&
                          e.node.classList.remove("aos-animate");
                },
                o = function (e, t) {
                    var o = window.pageYOffset,
                        i = window.innerHeight;
                    e.forEach(function (e, r) {
                        n(e, i + o, t);
                    });
                };
            t.default = o;
        },
        function (e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(12),
                r = o(i),
                a = function (e, t) {
                    return (
                        e.forEach(function (e, n) {
                            e.node.classList.add("aos-init"),
                                (e.position = (0, r.default)(e.node, t.offset));
                        }),
                        e
                    );
                };
            t.default = a;
        },
        function (e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(13),
                r = o(i),
                a = function (e, t) {
                    var n = 0,
                        o = 0,
                        i = window.innerHeight,
                        a = {
                            offset: e.getAttribute("data-aos-offset"),
                            anchor: e.getAttribute("data-aos-anchor"),
                            anchorPlacement: e.getAttribute(
                                "data-aos-anchor-placement"
                            ),
                        };
                    switch (
                        (a.offset &&
                            !isNaN(a.offset) &&
                            (o = parseInt(a.offset)),
                        a.anchor &&
                            document.querySelectorAll(a.anchor) &&
                            (e = document.querySelectorAll(a.anchor)[0]),
                        (n = (0, r.default)(e).top),
                        a.anchorPlacement)
                    ) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            n += e.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            n += e.offsetHeight;
                            break;
                        case "top-center":
                            n += i / 2;
                            break;
                        case "bottom-center":
                            n += i / 2 + e.offsetHeight;
                            break;
                        case "center-center":
                            n += i / 2 + e.offsetHeight / 2;
                            break;
                        case "top-top":
                            n += i;
                            break;
                        case "bottom-top":
                            n += e.offsetHeight + i;
                            break;
                        case "center-top":
                            n += e.offsetHeight / 2 + i;
                    }
                    return (
                        a.anchorPlacement || a.offset || isNaN(t) || (o = t),
                        n + o
                    );
                };
            t.default = a;
        },
        function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = function (e) {
                for (
                    var t = 0, n = 0;
                    e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

                )
                    (t +=
                        e.offsetLeft -
                        ("BODY" != e.tagName ? e.scrollLeft : 0)),
                        (n +=
                            e.offsetTop -
                            ("BODY" != e.tagName ? e.scrollTop : 0)),
                        (e = e.offsetParent);
                return { top: n, left: t };
            };
            t.default = n;
        },
        function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = function (e) {
                return (
                    (e = e || document.querySelectorAll("[data-aos]")),
                    Array.prototype.map.call(e, function (e) {
                        return { node: e };
                    })
                );
            };
            t.default = n;
        },
    ]);
});

/* inputTellnput script file */

!(function (a, c, e, n) {
    var l = "intlTelInput",
        i = {
            preferredCountries: ["in", "gb"],
            initialDialCode: !0,
            americaMode: !1,
            onlyCountries: [],
        };
    function o(c, e) {
        (this.element = c),
            (this.options = a.extend({}, i, e)),
            (this._defaults = i),
            (this._name = l),
            this.init();
    }
    (o.prototype = {
        init: function () {
            var c = this;
            if (this.options.onlyCountries.length > 0) {
                var n = [],
                    l = {};
                a.each(this.options.onlyCountries, function (a, e) {
                    var i = c._getCountryData(e);
                    if (i) {
                        n.push(i);
                        var o = i["calling-code"];
                        l[o] ? l[o].push(e) : (l[o] = [e]);
                    }
                }),
                    (intlTelInput.countries = n),
                    (intlTelInput.countryCodes = l);
            }
            var i = [];
            a.each(this.options.preferredCountries, function (a, e) {
                var n = c._getCountryData(e);
                n && i.push(n);
            }),
                (this.defaultCountry = i.length
                    ? i[0]
                    : intlTelInput.countries[0]),
                (this.telInput = a(this.element)),
                this.options.initialDialCode &&
                    "" === this.telInput.val() &&
                    this.telInput.val(
                        "+" + this.defaultCountry["calling-code"] + " "
                    ),
                this.telInput.wrap(a("<div>", { class: "intl-tel-input" }));
            var o = a("<div>", { class: "flag-dropdown f16" }).insertBefore(
                    this.telInput
                ),
                t = a("<div>", { class: "selected-flag" }).appendTo(o),
                d = this.defaultCountry.cca2;
            (this.selectedFlagInner = a("<div>", {
                class: "flag " + d,
            }).appendTo(t)),
                a("<div>", { class: "down-arrow" }).appendTo(
                    this.selectedFlagInner
                ),
                (this.countryList = a("<ul>", {
                    class: "country-list hide",
                }).appendTo(o)),
                i.length &&
                    (this._appendListItems(i, "preferred"),
                    a("<li>", { class: "divider" }).appendTo(this.countryList)),
                this._appendListItems(intlTelInput.countries, ""),
                (this.countryListItems = this.countryList.children(".country")),
                this.countryListItems.first().addClass("active"),
                this.telInput.keyup(function () {
                    var e,
                        n = !1,
                        l = c._getDialCode(c.telInput.val());
                    if (l) {
                        var i = intlTelInput.countryCodes[l];
                        a.each(i, function (a, e) {
                            c.selectedFlagInner.hasClass(e) && (n = !0);
                        }),
                            (e = i[0]);
                    } else e = c.defaultCountry.cca2;
                    n || c._selectFlag(e);
                }),
                this.telInput.keyup(),
                t.click(function (n) {
                    if ((n.stopPropagation(), c.countryList.hasClass("hide"))) {
                        c.countryListItems.removeClass("highlight");
                        var l = c.countryList
                            .children(".active")
                            .addClass("highlight");
                        c.countryList.removeClass("hide"),
                            c._scrollTo(l),
                            a(e).bind("keydown.intlTelInput", function (e) {
                                if (38 == e.which || 40 == e.which) {
                                    var n = c.countryList
                                            .children(".highlight")
                                            .first(),
                                        l = 38 == e.which ? n.prev() : n.next();
                                    l &&
                                        (l.hasClass("divider") &&
                                            (l =
                                                38 == e.which
                                                    ? l.prev()
                                                    : l.next()),
                                        c.countryListItems.removeClass(
                                            "highlight"
                                        ),
                                        l.addClass("highlight"),
                                        c._scrollTo(l));
                                } else if (13 == e.which) {
                                    var i = c.countryList
                                        .children(".highlight")
                                        .first();
                                    i.length && c._selectListItem(i);
                                } else if (9 == e.which || 27 == e.which)
                                    c._closeDropdown();
                                else if (
                                    (e.which >= 97 && e.which <= 122) ||
                                    (e.which >= 65 && e.which <= 90)
                                ) {
                                    var o = String.fromCharCode(e.which),
                                        t = c.countryListItems.filter(
                                            function () {
                                                return (
                                                    a(this).text().charAt(0) ==
                                                        o &&
                                                    !a(this).hasClass(
                                                        "preferred"
                                                    )
                                                );
                                            }
                                        );
                                    if (t.length) {
                                        var d,
                                            s = t.filter(".highlight").first();
                                        (d =
                                            s &&
                                            s.next() &&
                                            s.next().text().charAt(0) == o
                                                ? s.next()
                                                : t.first()),
                                            c.countryListItems.removeClass(
                                                "highlight"
                                            ),
                                            d.addClass("highlight"),
                                            c._scrollTo(d);
                                    }
                                }
                            });
                    } else c._closeDropdown();
                }),
                this.countryListItems.mouseover(function () {
                    c.countryListItems.removeClass("highlight"),
                        a(this).addClass("highlight");
                }),
                this.countryListItems.click(function (e) {
                    var n = a(e.currentTarget);
                    c._selectListItem(n);
                }),
                a("html").click(function (e) {
                    a(e.target).closest(".country-list").length ||
                        c._closeDropdown();
                });
        },
        _getCountryData: function (a) {
            for (var c = 0; c < intlTelInput.countries.length; c++)
                if (intlTelInput.countries[c].cca2 == a)
                    return intlTelInput.countries[c];
        },
        _selectFlag: function (a) {
            this.selectedFlagInner.attr("class", "flag " + a),
                this.countryListItems.removeClass("active");
            var c = this.countryListItems.children(".flag." + a).parent();
            return c.addClass("active"), c;
        },
        selectCountry: function (a) {
            if (!this.selectedFlagInner.hasClass(a)) {
                var c = this._selectFlag(a).attr("data-dial-code");
                this.telInput.val("+" + c + " ");
            }
        },
        _selectListItem: function (a) {
            var c = a.attr("data-country-code");
            this.selectedFlagInner.attr("class", "flag " + c);
            var e = this._updateNumber(
                this.telInput.val(),
                a.attr("data-dial-code")
            );
            this.telInput.val(e),
                this._closeDropdown(),
                this.telInput.focus(),
                this.countryListItems.removeClass("active highlight"),
                a.addClass("active");
        },
        _closeDropdown: function () {
            this.countryList.addClass("hide"),
                a(e).unbind("keydown.intlTelInput");
        },
        _scrollTo: function (a) {
            var c = this.countryList,
                e = c.height(),
                n = c.offset().top,
                l = n + e,
                i = a.outerHeight(),
                o = a.offset().top,
                t = o + i,
                d = o - n + c.scrollTop();
            if (o < n) c.scrollTop(d);
            else if (t > l) {
                var s = e - i;
                c.scrollTop(d - s);
            }
        },
        _updateNumber: function (a, c) {
            var e,
                n = "+" + this._getDialCode(a),
                l = "+" + c;
            return (
                n.length > 1
                    ? ((e = a.replace(n, l)), a == n && (e += " "))
                    : (e =
                          a.length && "+" != a.substr(0, 1)
                              ? l + " " + a.trim()
                              : l + " "),
                this.options.americaMode &&
                    "+1 " == e.substring(0, 3) &&
                    (e = e.substring(3)),
                e
            );
        },
        _getDialCode: function (a) {
            var c = a.trim().split(" ")[0];
            if ("+" == c.substring(0, 1))
                for (
                    var e = c.replace(/\D/g, "").substring(0, 4), n = e.length;
                    n > 0;
                    n--
                )
                    if (((e = e.substring(0, n)), intlTelInput.countryCodes[e]))
                        return e;
            return "";
        },
        _appendListItems: function (c, e) {
            var n = "";
            a.each(c, function (a, c) {
                (n +=
                    "<li class='country " +
                    e +
                    "' data-dial-code='" +
                    c["calling-code"] +
                    "' data-country-code='" +
                    c.cca2 +
                    "'>"),
                    (n += "<div class='flag " + c.cca2 + "'></div>"),
                    (n += "<span class='country-name'>" + c.name + "</span>"),
                    (n +=
                        "<span class='dial-code'>+" +
                        c["calling-code"] +
                        "</span>"),
                    (n += "</li>");
            }),
                this.countryList.append(n);
        },
    }),
        (a.fn[l] = function (c) {
            var e,
                i = arguments;
            return c === n || "object" == typeof c
                ? this.each(function () {
                      a.data(this, "plugin_" + l) ||
                          a.data(this, "plugin_" + l, new o(this, c));
                  })
                : "string" == typeof c && "_" !== c[0] && "init" !== c
                ? (this.each(function () {
                      var n = a.data(this, "plugin_" + l);
                      n instanceof o &&
                          "function" == typeof n[c] &&
                          (e = n[c].apply(n, Array.prototype.slice.call(i, 1)));
                  }),
                  e !== n ? e : this)
                : void 0;
        });
})(jQuery, window, document);
var intlTelInput = {
    countries: [
        { name: "Afghanistan", cca2: "af", "calling-code": "93" },
        { name: "Albania", cca2: "al", "calling-code": "355" },
        { name: "Algeria", cca2: "dz", "calling-code": "213" },
        { name: "American Samoa", cca2: "as", "calling-code": "1684" },
        { name: "Andorra", cca2: "ad", "calling-code": "376" },
        { name: "Angola", cca2: "ao", "calling-code": "244" },
        { name: "Anguilla", cca2: "ai", "calling-code": "1264" },
        { name: "Antigua and Barbuda", cca2: "ag", "calling-code": "1268" },
        { name: "Argentina", cca2: "ar", "calling-code": "54" },
        { name: "Armenia", cca2: "am", "calling-code": "374" },
        { name: "Aruba", cca2: "aw", "calling-code": "297" },
        { name: "Australia", cca2: "au", "calling-code": "61" },
        { name: "Austria", cca2: "at", "calling-code": "43" },
        { name: "Azerbaijan", cca2: "az", "calling-code": "994" },
        { name: "Bahamas", cca2: "bs", "calling-code": "1242" },
        { name: "Bahrain", cca2: "bh", "calling-code": "973" },
        { name: "Bangladesh", cca2: "bd", "calling-code": "880" },
        { name: "Barbados", cca2: "bb", "calling-code": "1246" },
        { name: "Belarus", cca2: "by", "calling-code": "375" },
        { name: "Belgium", cca2: "be", "calling-code": "32" },
        { name: "Belize", cca2: "bz", "calling-code": "501" },
        { name: "Benin", cca2: "bj", "calling-code": "229" },
        { name: "Bermuda", cca2: "bm", "calling-code": "1441" },
        { name: "Bhutan", cca2: "bt", "calling-code": "975" },
        { name: "Bolivia", cca2: "bo", "calling-code": "591" },
        { name: "Bosnia and Herzegovina", cca2: "ba", "calling-code": "387" },
        { name: "Botswana", cca2: "bw", "calling-code": "267" },
        { name: "Brazil", cca2: "br", "calling-code": "55" },
        { name: "Brunei Darussalam", cca2: "bn", "calling-code": "673" },
        { name: "Bulgaria", cca2: "bg", "calling-code": "359" },
        { name: "Burkina Faso", cca2: "bf", "calling-code": "226" },
        { name: "Burundi", cca2: "bi", "calling-code": "257" },
        { name: "Cambodia", cca2: "kh", "calling-code": "855" },
        { name: "Cameroon", cca2: "cm", "calling-code": "237" },
        { name: "Canada", cca2: "ca", "calling-code": "1" },
        { name: "Cape Verde", cca2: "cv", "calling-code": "238" },
        { name: "Cayman Islands", cca2: "ky", "calling-code": "1345" },
        { name: "Central African Republic", cca2: "cf", "calling-code": "236" },
        { name: "Chad", cca2: "td", "calling-code": "235" },
        { name: "Chile", cca2: "cl", "calling-code": "56" },
        { name: "China", cca2: "cn", "calling-code": "86" },
        { name: "Colombia", cca2: "co", "calling-code": "57" },
        { name: "Comoros", cca2: "km", "calling-code": "269" },
        { name: "Congo (DRC)", cca2: "cd", "calling-code": "243" },
        { name: "Congo (Republic)", cca2: "cg", "calling-code": "242" },
        { name: "Cook Islands", cca2: "ck", "calling-code": "682" },
        { name: "Costa Rica", cca2: "cr", "calling-code": "506" },
        { name: "CÃ´te d'Ivoire", cca2: "ci", "calling-code": "225" },
        { name: "Croatia", cca2: "hr", "calling-code": "385" },
        { name: "Cuba", cca2: "cu", "calling-code": "53" },
        { name: "Cyprus", cca2: "cy", "calling-code": "357" },
        { name: "Czech Republic", cca2: "cz", "calling-code": "420" },
        { name: "Denmark", cca2: "dk", "calling-code": "45" },
        { name: "Djibouti", cca2: "dj", "calling-code": "253" },
        { name: "Dominica", cca2: "dm", "calling-code": "1767" },
        { name: "Dominican Republic", cca2: "do", "calling-code": "1809" },
        { name: "Ecuador", cca2: "ec", "calling-code": "593" },
        { name: "Egypt", cca2: "eg", "calling-code": "20" },
        { name: "El Salvador", cca2: "sv", "calling-code": "503" },
        { name: "Equatorial Guinea", cca2: "gq", "calling-code": "240" },
        { name: "Eritrea", cca2: "er", "calling-code": "291" },
        { name: "Estonia", cca2: "ee", "calling-code": "372" },
        { name: "Ethiopia", cca2: "et", "calling-code": "251" },
        { name: "Faroe Islands", cca2: "fo", "calling-code": "298" },
        { name: "Fiji", cca2: "fj", "calling-code": "679" },
        { name: "Finland", cca2: "fi", "calling-code": "358" },
        { name: "France", cca2: "fr", "calling-code": "33" },
        { name: "French Polynesia", cca2: "pf", "calling-code": "689" },
        { name: "Gabon", cca2: "ga", "calling-code": "241" },
        { name: "Gambia", cca2: "gm", "calling-code": "220" },
        { name: "Georgia", cca2: "ge", "calling-code": "995" },
        { name: "Germany", cca2: "de", "calling-code": "49" },
        { name: "Ghana", cca2: "gh", "calling-code": "233" },
        { name: "Gibraltar", cca2: "gi", "calling-code": "350" },
        { name: "Greece", cca2: "gr", "calling-code": "30" },
        { name: "Greenland", cca2: "gl", "calling-code": "299" },
        { name: "Grenada", cca2: "gd", "calling-code": "1473" },
        { name: "Guadeloupe", cca2: "gp", "calling-code": "590" },
        { name: "Guam", cca2: "gu", "calling-code": "1671" },
        { name: "Guatemala", cca2: "gt", "calling-code": "502" },
        { name: "Guernsey", cca2: "gg", "calling-code": "44" },
        { name: "Guinea", cca2: "gn", "calling-code": "224" },
        { name: "Guinea-Bissau", cca2: "gw", "calling-code": "245" },
        { name: "Guyana", cca2: "gy", "calling-code": "592" },
        { name: "Haiti", cca2: "ht", "calling-code": "509" },
        { name: "Honduras", cca2: "hn", "calling-code": "504" },
        { name: "Hong Kong", cca2: "hk", "calling-code": "852" },
        { name: "Hungary", cca2: "hu", "calling-code": "36" },
        { name: "Iceland", cca2: "is", "calling-code": "354" },
        { name: "India", cca2: "in", "calling-code": "91" },
        { name: "Indonesia", cca2: "id", "calling-code": "62" },
        { name: "Iran", cca2: "ir", "calling-code": "98" },
        { name: "Iraq", cca2: "iq", "calling-code": "964" },
        { name: "Ireland", cca2: "ie", "calling-code": "353" },
        { name: "Isle of Man", cca2: "im", "calling-code": "44" },
        { name: "Israel", cca2: "il", "calling-code": "972" },
        { name: "Italy", cca2: "it", "calling-code": "39" },
        { name: "Jamaica", cca2: "jm", "calling-code": "1876" },
        { name: "Japan", cca2: "jp", "calling-code": "81" },
        { name: "Jersey", cca2: "je", "calling-code": "44" },
        { name: "Jordan", cca2: "jo", "calling-code": "962" },
        { name: "Kazakhstan", cca2: "kz", "calling-code": "7" },
        { name: "Kenya", cca2: "ke", "calling-code": "254" },
        { name: "Kiribati", cca2: "ki", "calling-code": "686" },
        { name: "Kuwait", cca2: "kw", "calling-code": "965" },
        { name: "Kyrgyzstan", cca2: "kg", "calling-code": "996" },
        { name: "Laos", cca2: "la", "calling-code": "856" },
        { name: "Latvia", cca2: "lv", "calling-code": "371" },
        { name: "Lebanon", cca2: "lb", "calling-code": "961" },
        { name: "Lesotho", cca2: "ls", "calling-code": "266" },
        { name: "Liberia", cca2: "lr", "calling-code": "231" },
        { name: "Libya", cca2: "ly", "calling-code": "218" },
        { name: "Liechtenstein", cca2: "li", "calling-code": "423" },
        { name: "Lithuania", cca2: "lt", "calling-code": "370" },
        { name: "Luxembourg", cca2: "lu", "calling-code": "352" },
        { name: "Macao", cca2: "mo", "calling-code": "853" },
        { name: "Macedonia", cca2: "mk", "calling-code": "389" },
        { name: "Madagascar", cca2: "mg", "calling-code": "261" },
        { name: "Malawi", cca2: "mw", "calling-code": "265" },
        { name: "Malaysia", cca2: "my", "calling-code": "60" },
        { name: "Maldives", cca2: "mv", "calling-code": "960" },
        { name: "Mali", cca2: "ml", "calling-code": "223" },
        { name: "Malta", cca2: "mt", "calling-code": "356" },
        { name: "Marshall Islands", cca2: "mh", "calling-code": "692" },
        { name: "Martinique", cca2: "mq", "calling-code": "596" },
        { name: "Mauritania", cca2: "mr", "calling-code": "222" },
        { name: "Mauritius", cca2: "mu", "calling-code": "230" },
        { name: "Mexico", cca2: "mx", "calling-code": "52" },
        { name: "Micronesia", cca2: "fm", "calling-code": "691" },
        { name: "Moldova", cca2: "md", "calling-code": "373" },
        { name: "Monaco", cca2: "mc", "calling-code": "377" },
        { name: "Mongolia", cca2: "mn", "calling-code": "976" },
        { name: "Montenegro", cca2: "me", "calling-code": "382" },
        { name: "Montserrat", cca2: "ms", "calling-code": "1664" },
        { name: "Morocco", cca2: "ma", "calling-code": "212" },
        { name: "Mozambique", cca2: "mz", "calling-code": "258" },
        { name: "Myanmar (Burma)", cca2: "mm", "calling-code": "95" },
        { name: "Namibia", cca2: "na", "calling-code": "264" },
        { name: "Nauru", cca2: "nr", "calling-code": "674" },
        { name: "Nepal", cca2: "np", "calling-code": "977" },
        { name: "Netherlands", cca2: "nl", "calling-code": "31" },
        { name: "New Caledonia", cca2: "nc", "calling-code": "687" },
        { name: "New Zealand", cca2: "nz", "calling-code": "64" },
        { name: "Nicaragua", cca2: "ni", "calling-code": "505" },
        { name: "Niger", cca2: "ne", "calling-code": "227" },
        { name: "Nigeria", cca2: "ng", "calling-code": "234" },
        { name: "North Korea", cca2: "kp", "calling-code": "850" },
        { name: "Norway", cca2: "no", "calling-code": "47" },
        { name: "Oman", cca2: "om", "calling-code": "968" },
        { name: "Pakistan", cca2: "pk", "calling-code": "92" },
        { name: "Palau", cca2: "pw", "calling-code": "680" },
        { name: "Palestinian Territory", cca2: "ps", "calling-code": "970" },
        { name: "Panama", cca2: "pa", "calling-code": "507" },
        { name: "Papua New Guinea", cca2: "pg", "calling-code": "675" },
        { name: "Paraguay", cca2: "py", "calling-code": "595" },
        { name: "Peru", cca2: "pe", "calling-code": "51" },
        { name: "Philippines", cca2: "ph", "calling-code": "63" },
        { name: "Poland", cca2: "pl", "calling-code": "48" },
        { name: "Portugal", cca2: "pt", "calling-code": "351" },
        { name: "Puerto Rico", cca2: "pr", "calling-code": "1787" },
        { name: "Qatar", cca2: "qa", "calling-code": "974" },
        { name: "RÃ©union", cca2: "re", "calling-code": "262" },
        { name: "Romania", cca2: "ro", "calling-code": "40" },
        { name: "Russian Federation", cca2: "ru", "calling-code": "7" },
        { name: "Rwanda", cca2: "rw", "calling-code": "250" },
        { name: "Saint Kitts and Nevis", cca2: "kn", "calling-code": "1869" },
        { name: "Saint Lucia", cca2: "lc", "calling-code": "1758" },
        {
            name: "Saint Vincent and the Grenadines",
            cca2: "vc",
            "calling-code": "1784",
        },
        { name: "Samoa", cca2: "ws", "calling-code": "685" },
        { name: "San Marino", cca2: "sm", "calling-code": "378" },
        { name: "SÃ£o TomÃ© and PrÃ­ncipe", cca2: "st", "calling-code": "239" },
        { name: "Saudi Arabia", cca2: "sa", "calling-code": "966" },
        { name: "Senegal", cca2: "sn", "calling-code": "221" },
        { name: "Serbia", cca2: "rs", "calling-code": "381" },
        { name: "Seychelles", cca2: "sc", "calling-code": "248" },
        { name: "Sierra Leone", cca2: "sl", "calling-code": "232" },
        { name: "Singapore", cca2: "sg", "calling-code": "65" },
        { name: "Slovakia", cca2: "sk", "calling-code": "421" },
        { name: "Slovenia", cca2: "si", "calling-code": "386" },
        { name: "Solomon Islands", cca2: "sb", "calling-code": "677" },
        { name: "Somalia", cca2: "so", "calling-code": "252" },
        { name: "South Africa", cca2: "za", "calling-code": "27" },
        { name: "South Korea", cca2: "kr", "calling-code": "82" },
        { name: "Spain", cca2: "es", "calling-code": "34" },
        { name: "Sri Lanka", cca2: "lk", "calling-code": "94" },
        { name: "Sudan", cca2: "sd", "calling-code": "249" },
        { name: "Suriname", cca2: "sr", "calling-code": "597" },
        { name: "Swaziland", cca2: "sz", "calling-code": "268" },
        { name: "Sweden", cca2: "se", "calling-code": "46" },
        { name: "Switzerland", cca2: "ch", "calling-code": "41" },
        { name: "Syrian Arab Republic", cca2: "sy", "calling-code": "963" },
        {
            name: "Taiwan, Province of China",
            cca2: "tw",
            "calling-code": "886",
        },
        { name: "Tajikistan", cca2: "tj", "calling-code": "992" },
        { name: "Tanzania", cca2: "tz", "calling-code": "255" },
        { name: "Thailand", cca2: "th", "calling-code": "66" },
        { name: "Timor-Leste", cca2: "tl", "calling-code": "670" },
        { name: "Togo", cca2: "tg", "calling-code": "228" },
        { name: "Tonga", cca2: "to", "calling-code": "676" },
        { name: "Trinidad and Tobago", cca2: "tt", "calling-code": "1868" },
        { name: "Tunisia", cca2: "tn", "calling-code": "216" },
        { name: "Turkey", cca2: "tr", "calling-code": "90" },
        { name: "Turkmenistan", cca2: "tm", "calling-code": "993" },
        {
            name: "Turks and Caicos Islands",
            cca2: "tc",
            "calling-code": "1649",
        },
        { name: "Tuvalu", cca2: "tv", "calling-code": "688" },
        { name: "Uganda", cca2: "ug", "calling-code": "256" },
        { name: "Ukraine", cca2: "ua", "calling-code": "380" },
        { name: "United Arab Emirates", cca2: "ae", "calling-code": "971" },
        { name: "United Kingdom", cca2: "gb", "calling-code": "44" },
        { name: "United States", cca2: "us", "calling-code": "1" },
        { name: "Uruguay", cca2: "uy", "calling-code": "598" },
        { name: "Uzbekistan", cca2: "uz", "calling-code": "998" },
        { name: "Vanuatu", cca2: "vu", "calling-code": "678" },
        { name: "Vatican City", cca2: "va", "calling-code": "379" },
        { name: "Venezuela", cca2: "ve", "calling-code": "58" },
        { name: "Viet Nam", cca2: "vn", "calling-code": "84" },
        {
            name: "Virgin Islands (British)",
            cca2: "vg",
            "calling-code": "1284",
        },
        { name: "Virgin Islands (U.S.)", cca2: "vi", "calling-code": "1340" },
        { name: "Western Sahara", cca2: "eh", "calling-code": "212" },
        { name: "Yemen", cca2: "ye", "calling-code": "967" },
        { name: "Zambia", cca2: "zm", "calling-code": "260" },
        { name: "Zimbabwe", cca2: "zw", "calling-code": "263" },
    ],
    countryCodes: {
        1: ["us", "ca"],
        7: ["ru", "kz"],
        20: ["eg"],
        27: ["za"],
        30: ["gr"],
        31: ["nl"],
        32: ["be"],
        33: ["fr"],
        34: ["es"],
        36: ["hu"],
        39: ["it"],
        40: ["ro"],
        41: ["ch"],
        43: ["at"],
        44: ["gb", "gg", "im", "je"],
        45: ["dk"],
        46: ["se"],
        47: ["no", "sj"],
        48: ["pl"],
        49: ["de"],
        51: ["pe"],
        52: ["mx"],
        53: ["cu"],
        54: ["ar"],
        55: ["br"],
        56: ["cl"],
        57: ["co"],
        58: ["ve"],
        60: ["my"],
        61: ["au", "cc", "cx"],
        62: ["id"],
        63: ["ph"],
        64: ["nz"],
        65: ["sg"],
        66: ["th"],
        81: ["jp"],
        82: ["kr"],
        84: ["vn"],
        86: ["cn"],
        90: ["tr"],
        91: ["in"],
        92: ["pk"],
        93: ["af"],
        94: ["lk"],
        95: ["mm"],
        98: ["ir"],
        211: ["ss"],
        212: ["ma", "eh"],
        213: ["dz"],
        216: ["tn"],
        218: ["ly"],
        220: ["gm"],
        221: ["sn"],
        222: ["mr"],
        223: ["ml"],
        224: ["gn"],
        225: ["ci"],
        226: ["bf"],
        227: ["ne"],
        228: ["tg"],
        229: ["bj"],
        230: ["mu"],
        231: ["lr"],
        232: ["sl"],
        233: ["gh"],
        234: ["ng"],
        235: ["td"],
        236: ["cf"],
        237: ["cm"],
        238: ["cv"],
        239: ["st"],
        240: ["gq"],
        241: ["ga"],
        242: ["cg"],
        243: ["cd"],
        244: ["ao"],
        245: ["gw"],
        246: ["io"],
        247: ["ac"],
        248: ["sc"],
        249: ["sd"],
        250: ["rw"],
        251: ["et"],
        252: ["so"],
        253: ["dj"],
        254: ["ke"],
        255: ["tz"],
        256: ["ug"],
        257: ["bi"],
        258: ["mz"],
        260: ["zm"],
        261: ["mg"],
        262: ["re", "yt"],
        263: ["zw"],
        264: ["na"],
        265: ["mw"],
        266: ["ls"],
        267: ["bw"],
        268: ["sz"],
        269: ["km"],
        290: ["sh"],
        291: ["er"],
        297: ["aw"],
        298: ["fo"],
        299: ["gl"],
        350: ["gi"],
        351: ["pt"],
        352: ["lu"],
        353: ["ie"],
        354: ["is"],
        355: ["al"],
        356: ["mt"],
        357: ["cy"],
        358: ["fi", "ax"],
        359: ["bg"],
        370: ["lt"],
        371: ["lv"],
        372: ["ee"],
        373: ["md"],
        374: ["am"],
        375: ["by"],
        376: ["ad"],
        377: ["mc"],
        378: ["sm"],
        379: ["va"],
        380: ["ua"],
        381: ["rs"],
        382: ["me"],
        385: ["hr"],
        386: ["si"],
        387: ["ba"],
        389: ["mk"],
        420: ["cz"],
        421: ["sk"],
        423: ["li"],
        500: ["fk"],
        501: ["bz"],
        502: ["gt"],
        503: ["sv"],
        504: ["hn"],
        505: ["ni"],
        506: ["cr"],
        507: ["pa"],
        508: ["pm"],
        509: ["ht"],
        590: ["gp", "bl", "mf"],
        591: ["bo"],
        592: ["gy"],
        593: ["ec"],
        594: ["gf"],
        595: ["py"],
        596: ["mq"],
        597: ["sr"],
        598: ["uy"],
        599: ["cw", "bq"],
        670: ["tl"],
        672: ["nf"],
        673: ["bn"],
        674: ["nr"],
        675: ["pg"],
        676: ["to"],
        677: ["sb"],
        678: ["vu"],
        679: ["fj"],
        680: ["pw"],
        681: ["wf"],
        682: ["ck"],
        683: ["nu"],
        685: ["ws"],
        686: ["ki"],
        687: ["nc"],
        688: ["tv"],
        689: ["pf"],
        690: ["tk"],
        691: ["fm"],
        692: ["mh"],
        850: ["kp"],
        852: ["hk"],
        853: ["mo"],
        855: ["kh"],
        856: ["la"],
        880: ["bd"],
        886: ["tw"],
        960: ["mv"],
        961: ["lb"],
        962: ["jo"],
        963: ["sy"],
        964: ["iq"],
        965: ["kw"],
        966: ["sa"],
        967: ["ye"],
        968: ["om"],
        970: ["ps"],
        971: ["ae"],
        972: ["il"],
        973: ["bh"],
        974: ["qa"],
        975: ["bt"],
        976: ["mn"],
        977: ["np"],
        992: ["tj"],
        993: ["tm"],
        994: ["az"],
        995: ["ge"],
        996: ["kg"],
        998: ["uz"],
        1242: ["bs"],
        1246: ["bb"],
        1264: ["ai"],
        1268: ["ag"],
        1284: ["vg"],
        1340: ["vi"],
        1345: ["ky"],
        1441: ["bm"],
        1473: ["gd"],
        1649: ["tc"],
        1664: ["ms"],
        1671: ["gu"],
        1684: ["as"],
        1758: ["lc"],
        1767: ["dm"],
        1784: ["vc"],
        1787: ["pr"],
        1809: ["do"],
        1868: ["tt"],
        1869: ["kn"],
        1876: ["jm"],
    },
};

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
(function ($, window, document, undefined) {
    /**
     * Creates a carousel.
     * @class The Owl Carousel.
     * @public
     * @param {HTMLElement|jQuery} element - The element to create the carousel for.
     * @param {Object} [options] - The options
     */
    function Owl(element, options) {
        /**
         * Current settings for the carousel.
         * @public
         */
        this.settings = null;

        /**
         * Current options set by the caller including defaults.
         * @public
         */
        this.options = $.extend({}, Owl.Defaults, options);

        /**
         * Plugin element.
         * @public
         */
        this.$element = $(element);

        /**
         * Proxied event handlers.
         * @protected
         */
        this._handlers = {};

        /**
         * References to the running plugins of this carousel.
         * @protected
         */
        this._plugins = {};

        /**
         * Currently suppressed events to prevent them from being retriggered.
         * @protected
         */
        this._supress = {};

        /**
         * Absolute current position.
         * @protected
         */
        this._current = null;

        /**
         * Animation speed in milliseconds.
         * @protected
         */
        this._speed = null;

        /**
         * Coordinates of all items in pixel.
         * @todo The name of this member is missleading.
         * @protected
         */
        this._coordinates = [];

        /**
         * Current breakpoint.
         * @todo Real media queries would be nice.
         * @protected
         */
        this._breakpoint = null;

        /**
         * Current width of the plugin element.
         */
        this._width = null;

        /**
         * All real items.
         * @protected
         */
        this._items = [];

        /**
         * All cloned items.
         * @protected
         */
        this._clones = [];

        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         * @protected
         */
        this._mergers = [];

        /**
         * Widths of all items.
         */
        this._widths = [];

        /**
         * Invalidated parts within the update process.
         * @protected
         */
        this._invalidated = {};

        /**
         * Ordered list of workers for the update process.
         * @protected
         */
        this._pipe = [];

        /**
         * Current state information for the drag operation.
         * @todo #261
         * @protected
         */
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null,
            },
            direction: null,
        };

        /**
         * Current state information and their tags.
         * @type {Object}
         * @protected
         */
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"],
            },
        };

        $.each(
            ["onResize", "onThrottledResize"],
            $.proxy(function (i, handler) {
                this._handlers[handler] = $.proxy(this[handler], this);
            }, this)
        );

        $.each(
            Owl.Plugins,
            $.proxy(function (key, plugin) {
                this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] =
                    new plugin(this);
            }, this)
        );

        $.each(
            Owl.Workers,
            $.proxy(function (priority, worker) {
                this._pipe.push({
                    filter: worker.filter,
                    run: $.proxy(worker.run, this),
                });
            }, this)
        );

        this.setup();
        this.initialize();
    }

    /**
     * Default options for the carousel.
     * @public
     */
    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        rewind: false,
        checkVisibility: true,

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        margin: 0,
        stagePadding: 0,

        merge: false,
        mergeFit: true,
        autoWidth: false,

        startPosition: 0,
        rtl: false,

        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,

        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,

        fallbackEasing: "swing",
        slideTransition: "",

        info: false,

        nestedItemSelector: false,
        itemElement: "div",
        stageElement: "div",

        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
    };

    /**
     * Enumeration for width.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer",
    };

    /**
     * Enumeration for types.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Type = {
        Event: "event",
        State: "state",
    };

    /**
     * Contains all registered plugins.
     * @public
     */
    Owl.Plugins = {};

    /**
     * List of workers involved in the update process.
     */
    Owl.Workers = [
        {
            filter: ["width", "settings"],
            run: function () {
                this._width = this.$element.width();
            },
        },
        {
            filter: ["width", "items", "settings"],
            run: function (cache) {
                cache.current =
                    this._items && this._items[this.relative(this._current)];
            },
        },
        {
            filter: ["items", "settings"],
            run: function () {
                this.$stage.children(".cloned").remove();
            },
        },
        {
            filter: ["width", "items", "settings"],
            run: function (cache) {
                var margin = this.settings.margin || "",
                    grid = !this.settings.autoWidth,
                    rtl = this.settings.rtl,
                    css = {
                        width: "auto",
                        "margin-left": rtl ? margin : "",
                        "margin-right": rtl ? "" : margin,
                    };

                !grid && this.$stage.children().css(css);

                cache.css = css;
            },
        },
        {
            filter: ["width", "items", "settings"],
            run: function (cache) {
                var width =
                        (this.width() / this.settings.items).toFixed(3) -
                        this.settings.margin,
                    merge = null,
                    iterator = this._items.length,
                    grid = !this.settings.autoWidth,
                    widths = [];

                cache.items = {
                    merge: false,
                    width: width,
                };

                while (iterator--) {
                    merge = this._mergers[iterator];
                    merge =
                        (this.settings.mergeFit &&
                            Math.min(merge, this.settings.items)) ||
                        merge;

                    cache.items.merge = merge > 1 || cache.items.merge;

                    widths[iterator] = !grid
                        ? this._items[iterator].width()
                        : width * merge;
                }

                this._widths = widths;
            },
        },
        {
            filter: ["items", "settings"],
            run: function () {
                var clones = [],
                    items = this._items,
                    settings = this.settings,
                    // TODO: Should be computed from number of min width items in stage
                    view = Math.max(settings.items * 2, 4),
                    size = Math.ceil(items.length / 2) * 2,
                    repeat =
                        settings.loop && items.length
                            ? settings.rewind
                                ? view
                                : Math.max(view, size)
                            : 0,
                    append = "",
                    prepend = "";

                repeat /= 2;

                while (repeat > 0) {
                    // Switch to only using appended clones
                    clones.push(this.normalize(clones.length / 2, true));
                    append =
                        append + items[clones[clones.length - 1]][0].outerHTML;
                    clones.push(
                        this.normalize(
                            items.length - 1 - (clones.length - 1) / 2,
                            true
                        )
                    );
                    prepend =
                        items[clones[clones.length - 1]][0].outerHTML + prepend;
                    repeat -= 1;
                }

                this._clones = clones;

                $(append).addClass("cloned").appendTo(this.$stage);
                $(prepend).addClass("cloned").prependTo(this.$stage);
            },
        },
        {
            filter: ["width", "items", "settings"],
            run: function () {
                var rtl = this.settings.rtl ? 1 : -1,
                    size = this._clones.length + this._items.length,
                    iterator = -1,
                    previous = 0,
                    current = 0,
                    coordinates = [];

                while (++iterator < size) {
                    previous = coordinates[iterator - 1] || 0;
                    current =
                        this._widths[this.relative(iterator)] +
                        this.settings.margin;
                    coordinates.push(previous + current * rtl);
                }

                this._coordinates = coordinates;
            },
        },
        {
            filter: ["width", "items", "settings"],
            run: function () {
                var padding = this.settings.stagePadding,
                    coordinates = this._coordinates,
                    css = {
                        width:
                            Math.ceil(
                                Math.abs(coordinates[coordinates.length - 1])
                            ) +
                            padding * 2,
                        "padding-left": padding || "",
                        "padding-right": padding || "",
                    };

                this.$stage.css(css);
            },
        },
        {
            filter: ["width", "items", "settings"],
            run: function (cache) {
                var iterator = this._coordinates.length,
                    grid = !this.settings.autoWidth,
                    items = this.$stage.children();

                if (grid && cache.items.merge) {
                    while (iterator--) {
                        cache.css.width = this._widths[this.relative(iterator)];
                        items.eq(iterator).css(cache.css);
                    }
                } else if (grid) {
                    cache.css.width = cache.items.width;
                    items.css(cache.css);
                }
            },
        },
        {
            filter: ["items"],
            run: function () {
                this._coordinates.length < 1 && this.$stage.removeAttr("style");
            },
        },
        {
            filter: ["width", "items", "settings"],
            run: function (cache) {
                cache.current = cache.current
                    ? this.$stage.children().index(cache.current)
                    : 0;
                cache.current = Math.max(
                    this.minimum(),
                    Math.min(this.maximum(), cache.current)
                );
                this.reset(cache.current);
            },
        },
        {
            filter: ["position"],
            run: function () {
                this.animate(this.coordinates(this._current));
            },
        },
        {
            filter: ["width", "position", "items", "settings"],
            run: function () {
                var rtl = this.settings.rtl ? 1 : -1,
                    padding = this.settings.stagePadding * 2,
                    begin = this.coordinates(this.current()) + padding,
                    end = begin + this.width() * rtl,
                    inner,
                    outer,
                    matches = [],
                    i,
                    n;

                for (i = 0, n = this._coordinates.length; i < n; i++) {
                    inner = this._coordinates[i - 1] || 0;
                    outer = Math.abs(this._coordinates[i]) + padding * rtl;

                    if (
                        (this.op(inner, "<=", begin) &&
                            this.op(inner, ">", end)) ||
                        (this.op(outer, "<", begin) && this.op(outer, ">", end))
                    ) {
                        matches.push(i);
                    }
                }

                this.$stage.children(".active").removeClass("active");
                this.$stage
                    .children(":eq(" + matches.join("), :eq(") + ")")
                    .addClass("active");

                this.$stage.children(".center").removeClass("center");
                if (this.settings.center) {
                    this.$stage
                        .children()
                        .eq(this.current())
                        .addClass("center");
                }
            },
        },
    ];

    /**
     * Create the stage DOM element
     */
    Owl.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass);

        // if the stage is already in the DOM, grab it and skip stage initialization
        if (this.$stage.length) {
            return;
        }

        this.$element.addClass(this.options.loadingClass);

        // create stage
        this.$stage = $("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass,
        }).wrap(
            $("<div/>", {
                class: this.settings.stageOuterClass,
            })
        );

        // append stage
        this.$element.append(this.$stage.parent());
    };

    /**
     * Create item DOM elements
     */
    Owl.prototype.initializeItems = function () {
        var $items = this.$element.find(".owl-item");

        // if the items are already in the DOM, grab them and skip item initialization
        if ($items.length) {
            this._items = $items.get().map(function (item) {
                return $(item);
            });

            this._mergers = this._items.map(function () {
                return 1;
            });

            this.refresh();

            return;
        }

        // append content
        this.replace(this.$element.children().not(this.$stage.parent()));

        // check visibility
        if (this.isVisible()) {
            // update view
            this.refresh();
        } else {
            // invalidate width
            this.invalidate("width");
        }

        this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);
    };

    /**
     * Initializes the carousel.
     * @protected
     */
    Owl.prototype.initialize = function () {
        this.enter("initializing");
        this.trigger("initialize");

        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

        if (this.settings.autoWidth && !this.is("pre-loading")) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find("img");
            nestedSelector = this.settings.nestedItemSelector
                ? "." + this.settings.nestedItemSelector
                : undefined;
            width = this.$element.children(nestedSelector).width();

            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
            }
        }

        this.initializeStage();
        this.initializeItems();

        // register event handlers
        this.registerEventHandlers();

        this.leave("initializing");
        this.trigger("initialized");
    };

    /**
     * @returns {Boolean} visibility of $element
     *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
     *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
     */
    Owl.prototype.isVisible = function () {
        return this.settings.checkVisibility
            ? this.$element.is(":visible")
            : true;
    };

    /**
     * Setups the current settings.
     * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
     * @todo Support for media queries by using `matchMedia` would be nice.
     * @public
     */
    Owl.prototype.setup = function () {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;

        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function (breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });

            settings = $.extend({}, this.options, overwrites[match]);
            if (typeof settings.stagePadding === "function") {
                settings.stagePadding = settings.stagePadding();
            }
            delete settings.responsive;

            // responsive class
            if (settings.responsiveClass) {
                this.$element.attr(
                    "class",
                    this.$element
                        .attr("class")
                        .replace(
                            new RegExp(
                                "(" +
                                    this.options.responsiveClass +
                                    "-)\\S+\\s",
                                "g"
                            ),
                            "$1" + match
                        )
                );
            }
        }

        this.trigger("change", {
            property: { name: "settings", value: settings },
        });
        this._breakpoint = match;
        this.settings = settings;
        this.invalidate("settings");
        this.trigger("changed", {
            property: { name: "settings", value: this.settings },
        });
    };

    /**
     * Updates option logic if necessery.
     * @protected
     */
    Owl.prototype.optionsLogic = function () {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };

    /**
     * Prepares an item before add.
     * @todo Rename event parameter `content` to `item`.
     * @protected
     * @returns {jQuery|HTMLElement} - The item container.
     */
    Owl.prototype.prepare = function (item) {
        var event = this.trigger("prepare", { content: item });

        if (!event.data) {
            event.data = $("<" + this.settings.itemElement + "/>")
                .addClass(this.options.itemClass)
                .append(item);
        }

        this.trigger("prepared", { content: event.data });

        return event.data;
    };

    /**
     * Updates the view.
     * @public
     */
    Owl.prototype.update = function () {
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function (p) {
                return this[p];
            }, this._invalidated),
            cache = {};

        while (i < n) {
            if (
                this._invalidated.all ||
                $.grep(this._pipe[i].filter, filter).length > 0
            ) {
                this._pipe[i].run(cache);
            }
            i++;
        }

        this._invalidated = {};

        !this.is("valid") && this.enter("valid");
    };

    /**
     * Gets the width of the view.
     * @public
     * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
     * @returns {Number} - The width of the view in pixel.
     */
    Owl.prototype.width = function (dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return (
                    this._width -
                    this.settings.stagePadding * 2 +
                    this.settings.margin
                );
        }
    };

    /**
     * Refreshes the carousel primarily for adaptive purposes.
     * @public
     */
    Owl.prototype.refresh = function () {
        this.enter("refreshing");
        this.trigger("refresh");

        this.setup();

        this.optionsLogic();

        this.$element.addClass(this.options.refreshClass);

        this.update();

        this.$element.removeClass(this.options.refreshClass);

        this.leave("refreshing");
        this.trigger("refreshed");
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onThrottledResize = function () {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(
            this._handlers.onResize,
            this.settings.responsiveRefreshRate
        );
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onResize = function () {
        if (!this._items.length) {
            return false;
        }

        if (this._width === this.$element.width()) {
            return false;
        }

        if (!this.isVisible()) {
            return false;
        }

        this.enter("resizing");

        if (this.trigger("resize").isDefaultPrevented()) {
            this.leave("resizing");
            return false;
        }

        this.invalidate("width");

        this.refresh();

        this.leave("resizing");
        this.trigger("resized");
    };

    /**
     * Registers event handlers.
     * @todo Check `msPointerEnabled`
     * @todo #261
     * @protected
     */
    Owl.prototype.registerEventHandlers = function () {
        if ($.support.transition) {
            this.$stage.on(
                $.support.transition.end + ".owl.core",
                $.proxy(this.onTransitionEnd, this)
            );
        }

        if (this.settings.responsive !== false) {
            this.on(window, "resize", this._handlers.onThrottledResize);
        }

        if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on(
                "mousedown.owl.core",
                $.proxy(this.onDragStart, this)
            );
            this.$stage.on(
                "dragstart.owl.core selectstart.owl.core",
                function () {
                    return false;
                }
            );
        }

        if (this.settings.touchDrag) {
            this.$stage.on(
                "touchstart.owl.core",
                $.proxy(this.onDragStart, this)
            );
            this.$stage.on(
                "touchcancel.owl.core",
                $.proxy(this.onDragEnd, this)
            );
        }
    };

    /**
     * Handles `touchstart` and `mousedown` events.
     * @todo Horizontal swipe threshold as option
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragStart = function (event) {
        var stage = null;

        if (event.which === 3) {
            return;
        }

        if ($.support.transform) {
            stage = this.$stage
                .css("transform")
                .replace(/.*\(|\)| /g, "")
                .split(",");
            stage = {
                x: stage[stage.length === 16 ? 12 : 4],
                y: stage[stage.length === 16 ? 13 : 5],
            };
        } else {
            stage = this.$stage.position();
            stage = {
                x: this.settings.rtl
                    ? stage.left +
                      this.$stage.width() -
                      this.width() +
                      this.settings.margin
                    : stage.left,
                y: stage.top,
            };
        }

        if (this.is("animating")) {
            $.support.transform ? this.animate(stage.x) : this.$stage.stop();
            this.invalidate("position");
        }

        this.$element.toggleClass(
            this.options.grabClass,
            event.type === "mousedown"
        );

        this.speed(0);

        this._drag.time = new Date().getTime();
        this._drag.target = $(event.target);
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this.pointer(event);

        $(document).on(
            "mouseup.owl.core touchend.owl.core",
            $.proxy(this.onDragEnd, this)
        );

        $(document).one(
            "mousemove.owl.core touchmove.owl.core",
            $.proxy(function (event) {
                var delta = this.difference(
                    this._drag.pointer,
                    this.pointer(event)
                );

                $(document).on(
                    "mousemove.owl.core touchmove.owl.core",
                    $.proxy(this.onDragMove, this)
                );

                if (Math.abs(delta.x) < Math.abs(delta.y) && this.is("valid")) {
                    return;
                }

                event.preventDefault();

                this.enter("dragging");
                this.trigger("drag");
            }, this)
        );
    };

    /**
     * Handles the `touchmove` and `mousemove` events.
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragMove = function (event) {
        var minimum = null,
            maximum = null,
            pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);

        if (!this.is("dragging")) {
            return;
        }

        event.preventDefault();

        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x =
                ((((stage.x - minimum) % maximum) + maximum) % maximum) +
                minimum;
        } else {
            minimum = this.settings.rtl
                ? this.coordinates(this.maximum())
                : this.coordinates(this.minimum());
            maximum = this.settings.rtl
                ? this.coordinates(this.minimum())
                : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? (-1 * delta.x) / 5 : 0;
            stage.x = Math.max(
                Math.min(stage.x, minimum + pull),
                maximum + pull
            );
        }

        this._drag.stage.current = stage;

        this.animate(stage.x);
    };

    /**
     * Handles the `touchend` and `mouseup` events.
     * @todo #261
     * @todo Threshold for click event
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragEnd = function (event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this._drag.stage.current,
            direction = (delta.x > 0) ^ this.settings.rtl ? "left" : "right";

        $(document).off(".owl.core");

        this.$element.removeClass(this.options.grabClass);

        if ((delta.x !== 0 && this.is("dragging")) || !this.is("valid")) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(
                this.closest(
                    stage.x,
                    delta.x !== 0 ? direction : this._drag.direction
                )
            );
            this.invalidate("position");
            this.update();

            this._drag.direction = direction;

            if (
                Math.abs(delta.x) > 3 ||
                new Date().getTime() - this._drag.time > 300
            ) {
                this._drag.target.one("click.owl.core", function () {
                    return false;
                });
            }
        }

        if (!this.is("dragging")) {
            return;
        }

        this.leave("dragging");
        this.trigger("dragged");
    };

    /**
     * Gets absolute position of the closest item for a coordinate.
     * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
     * @protected
     * @param {Number} coordinate - The coordinate in pixel.
     * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
     * @return {Number} - The absolute position of the closest item.
     */
    Owl.prototype.closest = function (coordinate, direction) {
        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();

        if (!this.settings.freeDrag) {
            // check closest item
            $.each(
                coordinates,
                $.proxy(function (index, value) {
                    // on a left pull, check on current index
                    if (
                        direction === "left" &&
                        coordinate > value - pull &&
                        coordinate < value + pull
                    ) {
                        position = index;
                        // on a right pull, check on previous index
                        // to do so, subtract width from value and set position = index + 1
                    } else if (
                        direction === "right" &&
                        coordinate > value - width - pull &&
                        coordinate < value - width + pull
                    ) {
                        position = index + 1;
                    } else if (
                        this.op(coordinate, "<", value) &&
                        this.op(
                            coordinate,
                            ">",
                            coordinates[index + 1] !== undefined
                                ? coordinates[index + 1]
                                : value - width
                        )
                    ) {
                        position = direction === "left" ? index + 1 : index;
                    }
                    return position === -1;
                }, this)
            );
        }

        if (!this.settings.loop) {
            // non loop boundries
            if (this.op(coordinate, ">", coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, "<", coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }

        return position;
    };

    /**
     * Animates the stage.
     * @todo #270
     * @public
     * @param {Number} coordinate - The coordinate in pixels.
     */
    Owl.prototype.animate = function (coordinate) {
        var animate = this.speed() > 0;

        this.is("animating") && this.onTransitionEnd();

        if (animate) {
            this.enter("animating");
            this.trigger("translate");
        }

        if ($.support.transform3d && $.support.transition) {
            this.$stage.css({
                transform: "translate3d(" + coordinate + "px,0px,0px)",
                transition:
                    this.speed() / 1000 +
                    "s" +
                    (this.settings.slideTransition
                        ? " " + this.settings.slideTransition
                        : ""),
            });
        } else if (animate) {
            this.$stage.animate(
                {
                    left: coordinate + "px",
                },
                this.speed(),
                this.settings.fallbackEasing,
                $.proxy(this.onTransitionEnd, this)
            );
        } else {
            this.$stage.css({
                left: coordinate + "px",
            });
        }
    };

    /**
     * Checks whether the carousel is in a specific state or not.
     * @param {String} state - The state to check.
     * @returns {Boolean} - The flag which indicates if the carousel is busy.
     */
    Owl.prototype.is = function (state) {
        return this._states.current[state] && this._states.current[state] > 0;
    };

    /**
     * Sets the absolute position of the current item.
     * @public
     * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
     * @returns {Number} - The absolute position of the current item.
     */
    Owl.prototype.current = function (position) {
        if (position === undefined) {
            return this._current;
        }

        if (this._items.length === 0) {
            return undefined;
        }

        position = this.normalize(position);

        if (this._current !== position) {
            var event = this.trigger("change", {
                property: { name: "position", value: position },
            });

            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }

            this._current = position;

            this.invalidate("position");

            this.trigger("changed", {
                property: { name: "position", value: this._current },
            });
        }

        return this._current;
    };

    /**
     * Invalidates the given part of the update routine.
     * @param {String} [part] - The part to invalidate.
     * @returns {Array.<String>} - The invalidated parts.
     */
    Owl.prototype.invalidate = function (part) {
        if ($.type(part) === "string") {
            this._invalidated[part] = true;
            this.is("valid") && this.leave("valid");
        }
        return $.map(this._invalidated, function (v, i) {
            return i;
        });
    };

    /**
     * Resets the absolute position of the current item.
     * @public
     * @param {Number} position - The absolute position of the new item.
     */
    Owl.prototype.reset = function (position) {
        position = this.normalize(position);

        if (position === undefined) {
            return;
        }

        this._speed = 0;
        this._current = position;

        this.suppress(["translate", "translated"]);

        this.animate(this.coordinates(position));

        this.release(["translate", "translated"]);
    };

    /**
     * Normalizes an absolute or a relative position of an item.
     * @public
     * @param {Number} position - The absolute or relative position to normalize.
     * @param {Boolean} [relative=false] - Whether the given position is relative or not.
     * @returns {Number} - The normalized position.
     */
    Owl.prototype.normalize = function (position, relative) {
        var n = this._items.length,
            m = relative ? 0 : this._clones.length;

        if (!this.isNumeric(position) || n < 1) {
            position = undefined;
        } else if (position < 0 || position >= n + m) {
            position = ((((position - m / 2) % n) + n) % n) + m / 2;
        }

        return position;
    };

    /**
     * Converts an absolute position of an item into a relative one.
     * @public
     * @param {Number} position - The absolute position to convert.
     * @returns {Number} - The converted position.
     */
    Owl.prototype.relative = function (position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
    };

    /**
     * Gets the maximum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.maximum = function (relative) {
        var settings = this.settings,
            maximum = this._coordinates.length,
            iterator,
            reciprocalItemsWidth,
            elementWidth;

        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
        } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            if (iterator) {
                reciprocalItemsWidth = this._items[--iterator].width();
                elementWidth = this.$element.width();
                while (iterator--) {
                    reciprocalItemsWidth +=
                        this._items[iterator].width() + this.settings.margin;
                    if (reciprocalItemsWidth > elementWidth) {
                        break;
                    }
                }
            }
            maximum = iterator + 1;
        } else if (settings.center) {
            maximum = this._items.length - 1;
        } else {
            maximum = this._items.length - settings.items;
        }

        if (relative) {
            maximum -= this._clones.length / 2;
        }

        return Math.max(maximum, 0);
    };

    /**
     * Gets the minimum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.minimum = function (relative) {
        return relative ? 0 : this._clones.length / 2;
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.items = function (position) {
        if (position === undefined) {
            return this._items.slice();
        }

        position = this.normalize(position, true);
        return this._items[position];
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.mergers = function (position) {
        if (position === undefined) {
            return this._mergers.slice();
        }

        position = this.normalize(position, true);
        return this._mergers[position];
    };

    /**
     * Gets the absolute positions of clones for an item.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
     */
    Owl.prototype.clones = function (position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function (index) {
                return index % 2 === 0
                    ? even + index / 2
                    : odd - (index + 1) / 2;
            };

        if (position === undefined) {
            return $.map(this._clones, function (v, i) {
                return map(i);
            });
        }

        return $.map(this._clones, function (v, i) {
            return v === position ? map(i) : null;
        });
    };

    /**
     * Sets the current animation speed.
     * @public
     * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
     * @returns {Number} - The current animation speed in milliseconds.
     */
    Owl.prototype.speed = function (speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }

        return this._speed;
    };

    /**
     * Gets the coordinate of an item.
     * @todo The name of this method is missleanding.
     * @public
     * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
     * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
     */
    Owl.prototype.coordinates = function (position) {
        var multiplier = 1,
            newPosition = position - 1,
            coordinate;

        if (position === undefined) {
            return $.map(
                this._coordinates,
                $.proxy(function (coordinate, index) {
                    return this.coordinates(index);
                }, this)
            );
        }

        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
            }

            coordinate = this._coordinates[position];
            coordinate +=
                ((this.width() -
                    coordinate +
                    (this._coordinates[newPosition] || 0)) /
                    2) *
                multiplier;
        } else {
            coordinate = this._coordinates[newPosition] || 0;
        }

        coordinate = Math.ceil(coordinate);

        return coordinate;
    };

    /**
     * Calculates the speed for a translation.
     * @protected
     * @param {Number} from - The absolute position of the start item.
     * @param {Number} to - The absolute position of the target item.
     * @param {Number} [factor=undefined] - The time factor in milliseconds.
     * @returns {Number} - The time in milliseconds for the translation.
     */
    Owl.prototype.duration = function (from, to, factor) {
        if (factor === 0) {
            return 0;
        }

        return (
            Math.min(Math.max(Math.abs(to - from), 1), 6) *
            Math.abs(factor || this.settings.smartSpeed)
        );
    };

    /**
     * Slides to the specified item.
     * @public
     * @param {Number} position - The position of the item.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.to = function (position, speed) {
        var current = this.current(),
            revert = null,
            distance = position - this.relative(current),
            direction = (distance > 0) - (distance < 0),
            items = this._items.length,
            minimum = this.minimum(),
            maximum = this.maximum();

        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
            }

            position = current + distance;
            revert =
                ((((position - minimum) % items) + items) % items) + minimum;

            if (
                revert !== position &&
                revert - distance <= maximum &&
                revert - distance > 0
            ) {
                current = revert - distance;
                position = revert;
                this.reset(current);
            }
        } else if (this.settings.rewind) {
            maximum += 1;
            position = ((position % maximum) + maximum) % maximum;
        } else {
            position = Math.max(minimum, Math.min(maximum, position));
        }

        this.speed(this.duration(current, position, speed));
        this.current(position);

        if (this.isVisible()) {
            this.update();
        }
    };

    /**
     * Slides to the next item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.next = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };

    /**
     * Slides to the previous item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.prev = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };

    /**
     * Handles the end of an animation.
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onTransitionEnd = function (event) {
        // if css2 animation then event object is undefined
        if (event !== undefined) {
            event.stopPropagation();

            // Catch only owl-stage transitionEnd event
            if (
                (event.target || event.srcElement || event.originalTarget) !==
                this.$stage.get(0)
            ) {
                return false;
            }
        }

        this.leave("animating");
        this.trigger("translated");
    };

    /**
     * Gets viewport width.
     * @protected
     * @return {Number} - The width in pixel.
     */
    Owl.prototype.viewport = function () {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (
            document.documentElement &&
            document.documentElement.clientWidth
        ) {
            width = document.documentElement.clientWidth;
        } else {
            console.warn("Can not detect viewport width.");
        }
        return width;
    };

    /**
     * Replaces the current content.
     * @public
     * @param {HTMLElement|jQuery|String} content - The new content.
     */
    Owl.prototype.replace = function (content) {
        this.$stage.empty();
        this._items = [];

        if (content) {
            content = content instanceof jQuery ? content : $(content);
        }

        if (this.settings.nestedItemSelector) {
            content = content.find("." + this.settings.nestedItemSelector);
        }

        content
            .filter(function () {
                return this.nodeType === 1;
            })
            .each(
                $.proxy(function (index, item) {
                    item = this.prepare(item);
                    this.$stage.append(item);
                    this._items.push(item);
                    this._mergers.push(
                        item
                            .find("[data-merge]")
                            .addBack("[data-merge]")
                            .attr("data-merge") * 1 || 1
                    );
                }, this)
            );

        this.reset(
            this.isNumeric(this.settings.startPosition)
                ? this.settings.startPosition
                : 0
        );

        this.invalidate("items");
    };

    /**
     * Adds an item.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {HTMLElement|jQuery|String} content - The item content to add.
     * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
     */
    Owl.prototype.add = function (content, position) {
        var current = this.relative(this._current);

        position =
            position === undefined
                ? this._items.length
                : this.normalize(position, true);
        content = content instanceof jQuery ? content : $(content);

        this.trigger("add", { content: content, position: position });

        content = this.prepare(content);

        if (this._items.length === 0 || position === this._items.length) {
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 &&
                this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(
                content
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") * 1 || 1
            );
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(
                position,
                0,
                content
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") * 1 || 1
            );
        }

        this._items[current] && this.reset(this._items[current].index());

        this.invalidate("items");

        this.trigger("added", { content: content, position: position });
    };

    /**
     * Removes an item by its position.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {Number} position - The relative position of the item to remove.
     */
    Owl.prototype.remove = function (position) {
        position = this.normalize(position, true);

        if (position === undefined) {
            return;
        }

        this.trigger("remove", {
            content: this._items[position],
            position: position,
        });

        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);

        this.invalidate("items");

        this.trigger("removed", { content: null, position: position });
    };

    /**
     * Preloads images with auto width.
     * @todo Replace by a more generic approach
     * @protected
     */
    Owl.prototype.preloadAutoWidthImages = function (images) {
        images.each(
            $.proxy(function (i, element) {
                this.enter("pre-loading");
                element = $(element);
                $(new Image())
                    .one(
                        "load",
                        $.proxy(function (e) {
                            element.attr("src", e.target.src);
                            element.css("opacity", 1);
                            this.leave("pre-loading");
                            !this.is("pre-loading") &&
                                !this.is("initializing") &&
                                this.refresh();
                        }, this)
                    )
                    .attr(
                        "src",
                        element.attr("src") ||
                            element.attr("data-src") ||
                            element.attr("data-src-retina")
                    );
            }, this)
        );
    };

    /**
     * Destroys the carousel.
     * @public
     */
    Owl.prototype.destroy = function () {
        this.$element.off(".owl.core");
        this.$stage.off(".owl.core");
        $(document).off(".owl.core");

        if (this.settings.responsive !== false) {
            window.clearTimeout(this.resizeTimer);
            this.off(window, "resize", this._handlers.onThrottledResize);
        }

        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }

        this.$stage.children(".cloned").remove();

        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.remove();
        this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
                "class",
                this.$element
                    .attr("class")
                    .replace(
                        new RegExp(
                            this.options.responsiveClass + "-\\S+\\s",
                            "g"
                        ),
                        ""
                    )
            )
            .removeData("owl.carousel");
    };

    /**
     * Operators to calculate right-to-left and left-to-right.
     * @protected
     * @param {Number} [a] - The left side operand.
     * @param {String} [o] - The operator.
     * @param {Number} [b] - The right side operand.
     */
    Owl.prototype.op = function (a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case "<":
                return rtl ? a > b : a < b;
            case ">":
                return rtl ? a < b : a > b;
            case ">=":
                return rtl ? a <= b : a >= b;
            case "<=":
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };

    /**
     * Attaches to an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The event handler to attach.
     * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
     */
    Owl.prototype.on = function (element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, listener);
        }
    };

    /**
     * Detaches from an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The attached event handler to detach.
     * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
     */
    Owl.prototype.off = function (element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent("on" + event, listener);
        }
    };

    /**
     * Triggers a public event.
     * @todo Remove `status`, `relatedTarget` should be used instead.
     * @protected
     * @param {String} name - The event name.
     * @param {*} [data=null] - The event data.
     * @param {String} [namespace=carousel] - The event namespace.
     * @param {String} [state] - The state which is associated with the event.
     * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
     * @returns {Event} - The event arguments.
     */
    Owl.prototype.trigger = function (name, data, namespace, state, enter) {
        var status = {
                item: { count: this._items.length, index: this.current() },
            },
            handler = $.camelCase(
                $.grep(["on", name, namespace], function (v) {
                    return v;
                })
                    .join("-")
                    .toLowerCase()
            ),
            event = $.Event(
                [name, "owl", namespace || "carousel"].join(".").toLowerCase(),
                $.extend({ relatedTarget: this }, status, data)
            );

        if (!this._supress[name]) {
            $.each(this._plugins, function (name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });

            this.register({ type: Owl.Type.Event, name: name });
            this.$element.trigger(event);

            if (this.settings && typeof this.settings[handler] === "function") {
                this.settings[handler].call(this, event);
            }
        }

        return event;
    };

    /**
     * Enters a state.
     * @param name - The state name.
     */
    Owl.prototype.enter = function (name) {
        $.each(
            [name].concat(this._states.tags[name] || []),
            $.proxy(function (i, name) {
                if (this._states.current[name] === undefined) {
                    this._states.current[name] = 0;
                }

                this._states.current[name]++;
            }, this)
        );
    };

    /**
     * Leaves a state.
     * @param name - The state name.
     */
    Owl.prototype.leave = function (name) {
        $.each(
            [name].concat(this._states.tags[name] || []),
            $.proxy(function (i, name) {
                this._states.current[name]--;
            }, this)
        );
    };

    /**
     * Registers an event or state.
     * @public
     * @param {Object} object - The event or state to register.
     */
    Owl.prototype.register = function (object) {
        if (object.type === Owl.Type.Event) {
            if (!$.event.special[object.name]) {
                $.event.special[object.name] = {};
            }

            if (!$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function (e) {
                    if (
                        _default &&
                        _default.apply &&
                        (!e.namespace || e.namespace.indexOf("owl") === -1)
                    ) {
                        return _default.apply(this, arguments);
                    }
                    return e.namespace && e.namespace.indexOf("owl") > -1;
                };
                $.event.special[object.name].owl = true;
            }
        } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
            } else {
                this._states.tags[object.name] = this._states.tags[
                    object.name
                ].concat(object.tags);
            }

            this._states.tags[object.name] = $.grep(
                this._states.tags[object.name],
                $.proxy(function (tag, i) {
                    return $.inArray(tag, this._states.tags[object.name]) === i;
                }, this)
            );
        }
    };

    /**
     * Suppresses events.
     * @protected
     * @param {Array.<String>} events - The events to suppress.
     */
    Owl.prototype.suppress = function (events) {
        $.each(
            events,
            $.proxy(function (index, event) {
                this._supress[event] = true;
            }, this)
        );
    };

    /**
     * Releases suppressed events.
     * @protected
     * @param {Array.<String>} events - The events to release.
     */
    Owl.prototype.release = function (events) {
        $.each(
            events,
            $.proxy(function (index, event) {
                delete this._supress[event];
            }, this)
        );
    };

    /**
     * Gets unified pointer coordinates from event.
     * @todo #261
     * @protected
     * @param {Event} - The `mousedown` or `touchstart` event.
     * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
     */
    Owl.prototype.pointer = function (event) {
        var result = { x: null, y: null };

        event = event.originalEvent || event || window.event;

        event =
            event.touches && event.touches.length
                ? event.touches[0]
                : event.changedTouches && event.changedTouches.length
                ? event.changedTouches[0]
                : event;

        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
        } else {
            result.x = event.clientX;
            result.y = event.clientY;
        }

        return result;
    };

    /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @protected
     * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
     * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
     */
    Owl.prototype.isNumeric = function (number) {
        return !isNaN(parseFloat(number));
    };

    /**
     * Gets the difference of two vectors.
     * @todo #261
     * @protected
     * @param {Object} - The first vector.
     * @param {Object} - The second vector.
     * @returns {Object} - The difference.
     */
    Owl.prototype.difference = function (first, second) {
        return {
            x: first.x - second.x,
            y: first.y - second.y,
        };
    };

    /**
     * The jQuery Plugin for the Owl Carousel
     * @todo Navigation plugin `next` and `prev`
     * @public
     */
    $.fn.owlCarousel = function (option) {
        var args = Array.prototype.slice.call(arguments, 1);

        return this.each(function () {
            var $this = $(this),
                data = $this.data("owl.carousel");

            if (!data) {
                data = new Owl(this, typeof option == "object" && option);
                $this.data("owl.carousel", data);

                $.each(
                    [
                        "next",
                        "prev",
                        "to",
                        "destroy",
                        "refresh",
                        "replace",
                        "add",
                        "remove",
                    ],
                    function (i, event) {
                        data.register({ type: Owl.Type.Event, name: event });
                        data.$element.on(
                            event + ".owl.carousel.core",
                            $.proxy(function (e) {
                                if (e.namespace && e.relatedTarget !== this) {
                                    this.suppress([event]);
                                    data[event].apply(
                                        this,
                                        [].slice.call(arguments, 1)
                                    );
                                    this.release([event]);
                                }
                            }, data)
                        );
                    }
                );
            }

            if (typeof option == "string" && option.charAt(0) !== "_") {
                data[option].apply(data, args);
            }
        });
    };

    /**
     * The constructor for the jQuery Plugin
     * @public
     */
    $.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
    /**
     * Creates the auto refresh plugin.
     * @class The Auto Refresh Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoRefresh = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Refresh interval.
         * @protected
         * @type {number}
         */
        this._interval = null;

        /**
         * Whether the element is currently visible or not.
         * @protected
         * @type {Boolean}
         */
        this._visible = null;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            "initialized.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoRefresh) {
                    this.watch();
                }
            }, this),
        };

        // set default options
        this._core.options = $.extend(
            {},
            AutoRefresh.Defaults,
            this._core.options
        );

        // register event handlers
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    AutoRefresh.Defaults = {
        autoRefresh: true,
        autoRefreshInterval: 500,
    };

    /**
     * Watches the element.
     */
    AutoRefresh.prototype.watch = function () {
        if (this._interval) {
            return;
        }

        this._visible = this._core.isVisible();
        this._interval = window.setInterval(
            $.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
        );
    };

    /**
     * Refreshes the element.
     */
    AutoRefresh.prototype.refresh = function () {
        if (this._core.isVisible() === this._visible) {
            return;
        }

        this._visible = !this._visible;

        this._core.$element.toggleClass("owl-hidden", !this._visible);

        this._visible && this._core.invalidate("width") && this._core.refresh();
    };

    /**
     * Destroys the plugin.
     */
    AutoRefresh.prototype.destroy = function () {
        var handler, property;

        window.clearInterval(this._interval);

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
    /**
     * Creates the lazy plugin.
     * @class The Lazy Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Lazy = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Already loaded items.
         * @protected
         * @type {Array.<jQuery>}
         */
        this._loaded = [];

        /**
         * Event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
                $.proxy(function (e) {
                    if (!e.namespace) {
                        return;
                    }

                    if (!this._core.settings || !this._core.settings.lazyLoad) {
                        return;
                    }

                    if (
                        (e.property && e.property.name == "position") ||
                        e.type == "initialized"
                    ) {
                        var settings = this._core.settings,
                            n =
                                (settings.center &&
                                    Math.ceil(settings.items / 2)) ||
                                settings.items,
                            i = (settings.center && n * -1) || 0,
                            position =
                                (e.property && e.property.value !== undefined
                                    ? e.property.value
                                    : this._core.current()) + i,
                            clones = this._core.clones().length,
                            load = $.proxy(function (i, v) {
                                this.load(v);
                            }, this);
                        //TODO: Need documentation for this new option
                        if (settings.lazyLoadEager > 0) {
                            n += settings.lazyLoadEager;
                            // If the carousel is looping also preload images that are to the "left"
                            if (settings.loop) {
                                position -= settings.lazyLoadEager;
                                n++;
                            }
                        }

                        while (i++ < n) {
                            this.load(
                                clones / 2 + this._core.relative(position)
                            );
                            clones &&
                                $.each(
                                    this._core.clones(
                                        this._core.relative(position)
                                    ),
                                    load
                                );
                            position++;
                        }
                    }
                }, this),
        };

        // set the default options
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

        // register event handler
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    Lazy.Defaults = {
        lazyLoad: false,
        lazyLoadEager: 0,
    };

    /**
     * Loads all resources of an item at the specified position.
     * @param {Number} position - The absolute position of the item.
     * @protected
     */
    Lazy.prototype.load = function (position) {
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find(".owl-lazy");

        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }

        $elements.each(
            $.proxy(function (index, element) {
                var $element = $(element),
                    image,
                    url =
                        (window.devicePixelRatio > 1 &&
                            $element.attr("data-src-retina")) ||
                        $element.attr("data-src") ||
                        $element.attr("data-srcset");

                this._core.trigger(
                    "load",
                    { element: $element, url: url },
                    "lazy"
                );

                if ($element.is("img")) {
                    $element
                        .one(
                            "load.owl.lazy",
                            $.proxy(function () {
                                $element.css("opacity", 1);
                                this._core.trigger(
                                    "loaded",
                                    { element: $element, url: url },
                                    "lazy"
                                );
                            }, this)
                        )
                        .attr("src", url);
                } else if ($element.is("source")) {
                    $element
                        .one(
                            "load.owl.lazy",
                            $.proxy(function () {
                                this._core.trigger(
                                    "loaded",
                                    { element: $element, url: url },
                                    "lazy"
                                );
                            }, this)
                        )
                        .attr("srcset", url);
                } else {
                    image = new Image();
                    image.onload = $.proxy(function () {
                        $element.css({
                            "background-image": 'url("' + url + '")',
                            opacity: "1",
                        });
                        this._core.trigger(
                            "loaded",
                            { element: $element, url: url },
                            "lazy"
                        );
                    }, this);
                    image.src = url;
                }
            }, this)
        );

        this._loaded.push($item.get(0));
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Lazy.prototype.destroy = function () {
        var handler, property;

        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
    /**
     * Creates the auto height plugin.
     * @class The Auto Height Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoHeight = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        this._previousHeight = null;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": $.proxy(
                function (e) {
                    if (e.namespace && this._core.settings.autoHeight) {
                        this.update();
                    }
                },
                this
            ),
            "changed.owl.carousel": $.proxy(function (e) {
                if (
                    e.namespace &&
                    this._core.settings.autoHeight &&
                    e.property.name === "position"
                ) {
                    this.update();
                }
            }, this),
            "loaded.owl.lazy": $.proxy(function (e) {
                if (
                    e.namespace &&
                    this._core.settings.autoHeight &&
                    e.element
                        .closest("." + this._core.settings.itemClass)
                        .index() === this._core.current()
                ) {
                    this.update();
                }
            }, this),
        };

        // set default options
        this._core.options = $.extend(
            {},
            AutoHeight.Defaults,
            this._core.options
        );

        // register event handlers
        this._core.$element.on(this._handlers);
        this._intervalId = null;
        var refThis = this;

        // These changes have been taken from a PR by gavrochelegnou proposed in #1575
        // and have been made compatible with the latest jQuery version
        $(window).on("load", function () {
            if (refThis._core.settings.autoHeight) {
                refThis.update();
            }
        });

        // Autoresize the height of the carousel when window is resized
        // When carousel has images, the height is dependent on the width
        // and should also change on resize
        $(window).resize(function () {
            if (refThis._core.settings.autoHeight) {
                if (refThis._intervalId != null) {
                    clearTimeout(refThis._intervalId);
                }

                refThis._intervalId = setTimeout(function () {
                    refThis.update();
                }, 250);
            }
        });
    };

    /**
     * Default options.
     * @public
     */
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: "owl-height",
    };

    /**
     * Updates the view.
     */
    AutoHeight.prototype.update = function () {
        var start = this._core._current,
            end = start + this._core.settings.items,
            lazyLoadEnabled = this._core.settings.lazyLoad,
            visible = this._core.$stage.children().toArray().slice(start, end),
            heights = [],
            maxheight = 0;

        $.each(visible, function (index, item) {
            heights.push($(item).height());
        });

        maxheight = Math.max.apply(null, heights);

        if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
            maxheight = this._previousHeight;
        }

        this._previousHeight = maxheight;

        this._core.$stage
            .parent()
            .height(maxheight)
            .addClass(this._core.settings.autoHeightClass);
    };

    AutoHeight.prototype.destroy = function () {
        var handler, property;

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== "function" && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
    /**
     * Creates the video plugin.
     * @class The Video Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Video = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Cache all video URLs.
         * @protected
         * @type {Object}
         */
        this._videos = {};

        /**
         * Current playing item.
         * @protected
         * @type {jQuery}
         */
        this._playing = null;

        /**
         * All event handlers.
         * @todo The cloned content removale is too late
         * @protected
         * @type {Object}
         */
        this._handlers = {
            "initialized.owl.carousel": $.proxy(function (e) {
                if (e.namespace) {
                    this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"],
                    });
                }
            }, this),
            "resize.owl.carousel": $.proxy(function (e) {
                if (
                    e.namespace &&
                    this._core.settings.video &&
                    this.isInFullScreen()
                ) {
                    e.preventDefault();
                }
            }, this),
            "refreshed.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.is("resizing")) {
                    this._core.$stage.find(".cloned .owl-video-frame").remove();
                }
            }, this),
            "changed.owl.carousel": $.proxy(function (e) {
                if (
                    e.namespace &&
                    e.property.name === "position" &&
                    this._playing
                ) {
                    this.stop();
                }
            }, this),
            "prepared.owl.carousel": $.proxy(function (e) {
                if (!e.namespace) {
                    return;
                }

                var $element = $(e.content).find(".owl-video");

                if ($element.length) {
                    $element.css("display", "none");
                    this.fetch($element, $(e.content));
                }
            }, this),
        };

        // set default options
        this._core.options = $.extend({}, Video.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);

        this._core.$element.on(
            "click.owl.video",
            ".owl-video-play-icon",
            $.proxy(function (e) {
                this.play(e);
            }, this)
        );
    };

    /**
     * Default options.
     * @public
     */
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false,
    };

    /**
     * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {jQuery} item - The item containing the video.
     */
    Video.prototype.fetch = function (target, item) {
        var type = (function () {
                if (target.attr("data-vimeo-id")) {
                    return "vimeo";
                } else if (target.attr("data-vzaar-id")) {
                    return "vzaar";
                } else {
                    return "youtube";
                }
            })(),
            id =
                target.attr("data-vimeo-id") ||
                target.attr("data-youtube-id") ||
                target.attr("data-vzaar-id"),
            width = target.attr("data-width") || this._core.settings.videoWidth,
            height =
                target.attr("data-height") || this._core.settings.videoHeight,
            url = target.attr("href");

        if (url) {
            /*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

            id = url.match(
                /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
            );

            if (id[3].indexOf("youtu") > -1) {
                type = "youtube";
            } else if (id[3].indexOf("vimeo") > -1) {
                type = "vimeo";
            } else if (id[3].indexOf("vzaar") > -1) {
                type = "vzaar";
            } else {
                throw new Error("Video URL not supported.");
            }
            id = id[6];
        } else {
            throw new Error("Missing video URL.");
        }

        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height,
        };

        item.attr("data-video", url);

        this.thumbnail(target, this._videos[url]);
    };

    /**
     * Creates video thumbnail.
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {Object} info - The video info object.
     * @see `fetch`
     */
    Video.prototype.thumbnail = function (target, video) {
        var tnLink,
            icon,
            path,
            dimensions =
                video.width && video.height
                    ? "width:" +
                      video.width +
                      "px;height:" +
                      video.height +
                      "px;"
                    : "",
            customTn = target.find("img"),
            srcType = "src",
            lazyClass = "",
            settings = this._core.settings,
            create = function (path) {
                icon = '<div class="owl-video-play-icon"></div>';

                if (settings.lazyLoad) {
                    tnLink = $("<div/>", {
                        class: "owl-video-tn " + lazyClass,
                        srcType: path,
                    });
                } else {
                    tnLink = $("<div/>", {
                        class: "owl-video-tn",
                        style: "opacity:1;background-image:url(" + path + ")",
                    });
                }
                target.after(tnLink);
                target.after(icon);
            };

        // wrap video content into owl-video-wrapper div
        target.wrap(
            $("<div/>", {
                class: "owl-video-wrapper",
                style: dimensions,
            })
        );

        if (this._core.settings.lazyLoad) {
            srcType = "data-src";
            lazyClass = "owl-lazy";
        }

        // custom thumbnail
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }

        if (video.type === "youtube") {
            path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === "vimeo") {
            $.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + video.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (data) {
                    path = data[0].thumbnail_large;
                    create(path);
                },
            });
        } else if (video.type === "vzaar") {
            $.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + video.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (data) {
                    path = data.framegrab_url;
                    create(path);
                },
            });
        }
    };

    /**
     * Stops the current video.
     * @public
     */
    Video.prototype.stop = function () {
        this._core.trigger("stop", null, "video");
        this._playing.find(".owl-video-frame").remove();
        this._playing.removeClass("owl-video-playing");
        this._playing = null;
        this._core.leave("playing");
        this._core.trigger("stopped", null, "video");
    };

    /**
     * Starts the current video.
     * @public
     * @param {Event} event - The event arguments.
     */
    Video.prototype.play = function (event) {
        var target = $(event.target),
            item = target.closest("." + this._core.settings.itemClass),
            video = this._videos[item.attr("data-video")],
            width = video.width || "100%",
            height = video.height || this._core.$stage.height(),
            html,
            iframe;

        if (this._playing) {
            return;
        }

        this._core.enter("playing");
        this._core.trigger("play", null, "video");

        item = this._core.items(this._core.relative(item.index()));

        this._core.reset(item.index());

        html = $(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
        );
        html.attr("height", height);
        html.attr("width", width);
        if (video.type === "youtube") {
            html.attr(
                "src",
                "//www.youtube.com/embed/" +
                    video.id +
                    "?autoplay=1&rel=0&v=" +
                    video.id
            );
        } else if (video.type === "vimeo") {
            html.attr(
                "src",
                "//player.vimeo.com/video/" + video.id + "?autoplay=1"
            );
        } else if (video.type === "vzaar") {
            html.attr(
                "src",
                "//view.vzaar.com/" + video.id + "/player?autoplay=true"
            );
        }

        iframe = $(html)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(item.find(".owl-video"));

        this._playing = item.addClass("owl-video-playing");
    };

    /**
     * Checks whether an video is currently in full screen mode or not.
     * @todo Bad style because looks like a readonly method but changes members.
     * @protected
     * @returns {Boolean}
     */
    Video.prototype.isInFullScreen = function () {
        var element =
            document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement;

        return element && $(element).parent().hasClass("owl-video-frame");
    };

    /**
     * Destroys the plugin.
     */
    Video.prototype.destroy = function () {
        var handler, property;

        this._core.$element.off("click.owl.video");

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
    /**
     * Creates the animate plugin.
     * @class The Navigation Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Animate = function (scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;

        this.handlers = {
            "change.owl.carousel": $.proxy(function (e) {
                if (e.namespace && e.property.name == "position") {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
                $.proxy(function (e) {
                    if (e.namespace) {
                        this.swapping = e.type == "translated";
                    }
                }, this),
            "translate.owl.carousel": $.proxy(function (e) {
                if (
                    e.namespace &&
                    this.swapping &&
                    (this.core.options.animateOut ||
                        this.core.options.animateIn)
                ) {
                    this.swap();
                }
            }, this),
        };

        this.core.$element.on(this.handlers);
    };

    /**
     * Default options.
     * @public
     */
    Animate.Defaults = {
        animateOut: false,
        animateIn: false,
    };

    /**
     * Toggles the animation classes whenever an translations starts.
     * @protected
     * @returns {Boolean|undefined}
     */
    Animate.prototype.swap = function () {
        if (this.core.settings.items !== 1) {
            return;
        }

        if (!$.support.animation || !$.support.transition) {
            return;
        }

        this.core.speed(0);

        var left,
            clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;

        if (this.core.current() === this.previous) {
            return;
        }

        if (outgoing) {
            left =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next);
            previous
                .one($.support.animation.end, clear)
                .css({ left: left + "px" })
                .addClass("animated owl-animated-out")
                .addClass(outgoing);
        }

        if (incoming) {
            next.one($.support.animation.end, clear)
                .addClass("animated owl-animated-in")
                .addClass(incoming);
        }
    };

    Animate.prototype.clear = function (e) {
        $(e.target)
            .css({ left: "" })
            .removeClass("animated owl-animated-out owl-animated-in")
            .removeClass(this.core.settings.animateIn)
            .removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd();
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Animate.prototype.destroy = function () {
        var handler, property;

        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
    /**
     * Creates the autoplay plugin.
     * @class The Autoplay Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Autoplay = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * The autoplay timeout id.
         * @type {Number}
         */
        this._call = null;

        /**
         * Depending on the state of the plugin, this variable contains either
         * the start time of the timer or the current timer value if it's
         * paused. Since we start in a paused state we initialize the timer
         * value.
         * @type {Number}
         */
        this._time = 0;

        /**
         * Stores the timeout currently used.
         * @type {Number}
         */
        this._timeout = 0;

        /**
         * Indicates whenever the autoplay is paused.
         * @type {Boolean}
         */
        this._paused = true;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            "changed.owl.carousel": $.proxy(function (e) {
                if (e.namespace && e.property.name === "settings") {
                    if (this._core.settings.autoplay) {
                        this.play();
                    } else {
                        this.stop();
                    }
                } else if (
                    e.namespace &&
                    e.property.name === "position" &&
                    this._paused
                ) {
                    // Reset the timer. This code is triggered when the position
                    // of the carousel was changed through user interaction.
                    this._time = 0;
                }
            }, this),
            "initialized.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoplay) {
                    this.play();
                }
            }, this),
            "play.owl.autoplay": $.proxy(function (e, t, s) {
                if (e.namespace) {
                    this.play(t, s);
                }
            }, this),
            "stop.owl.autoplay": $.proxy(function (e) {
                if (e.namespace) {
                    this.stop();
                }
            }, this),
            "mouseover.owl.autoplay": $.proxy(function () {
                if (
                    this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating")
                ) {
                    this.pause();
                }
            }, this),
            "mouseleave.owl.autoplay": $.proxy(function () {
                if (
                    this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating")
                ) {
                    this.play();
                }
            }, this),
            "touchstart.owl.core": $.proxy(function () {
                if (
                    this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating")
                ) {
                    this.pause();
                }
            }, this),
            "touchend.owl.core": $.proxy(function () {
                if (this._core.settings.autoplayHoverPause) {
                    this.play();
                }
            }, this),
        };

        // register event handlers
        this._core.$element.on(this._handlers);

        // set default options
        this._core.options = $.extend(
            {},
            Autoplay.Defaults,
            this._core.options
        );
    };

    /**
     * Default options.
     * @public
     */
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false,
    };

    /**
     * Transition to the next slide and set a timeout for the next transition.
     * @private
     * @param {Number} [speed] - The animation speed for the animations.
     */
    Autoplay.prototype._next = function (speed) {
        this._call = window.setTimeout(
            $.proxy(this._next, this, speed),
            this._timeout * (Math.round(this.read() / this._timeout) + 1) -
                this.read()
        );

        if (this._core.is("interacting") || document.hidden) {
            return;
        }
        this._core.next(speed || this._core.settings.autoplaySpeed);
    };

    /**
     * Reads the current timer value when the timer is playing.
     * @public
     */
    Autoplay.prototype.read = function () {
        return new Date().getTime() - this._time;
    };

    /**
     * Starts the autoplay.
     * @public
     * @param {Number} [timeout] - The interval before the next animation starts.
     * @param {Number} [speed] - The animation speed for the animations.
     */
    Autoplay.prototype.play = function (timeout, speed) {
        var elapsed;

        if (!this._core.is("rotating")) {
            this._core.enter("rotating");
        }

        timeout = timeout || this._core.settings.autoplayTimeout;

        // Calculate the elapsed time since the last transition. If the carousel
        // wasn't playing this calculation will yield zero.
        elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

        if (this._paused) {
            // Start the clock.
            this._time = this.read();
            this._paused = false;
        } else {
            // Clear the active timeout to allow replacement.
            window.clearTimeout(this._call);
        }

        // Adjust the origin of the timer to match the new timeout value.
        this._time += (this.read() % timeout) - elapsed;

        this._timeout = timeout;
        this._call = window.setTimeout(
            $.proxy(this._next, this, speed),
            timeout - elapsed
        );
    };

    /**
     * Stops the autoplay.
     * @public
     */
    Autoplay.prototype.stop = function () {
        if (this._core.is("rotating")) {
            // Reset the clock.
            this._time = 0;
            this._paused = true;

            window.clearTimeout(this._call);
            this._core.leave("rotating");
        }
    };

    /**
     * Pauses the autoplay.
     * @public
     */
    Autoplay.prototype.pause = function () {
        if (this._core.is("rotating") && !this._paused) {
            // Pause the clock.
            this._time = this.read();
            this._paused = true;

            window.clearTimeout(this._call);
        }
    };

    /**
     * Destroys the plugin.
     */
    Autoplay.prototype.destroy = function () {
        var handler, property;

        this.stop();

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
    "use strict";

    /**
     * Creates the navigation plugin.
     * @class The Navigation Plugin
     * @param {Owl} carousel - The Owl Carousel.
     */
    var Navigation = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Indicates whether the plugin is initialized or not.
         * @protected
         * @type {Boolean}
         */
        this._initialized = false;

        /**
         * The current paging indexes.
         * @protected
         * @type {Array}
         */
        this._pages = [];

        /**
         * All DOM elements of the user interface.
         * @protected
         * @type {Object}
         */
        this._controls = {};

        /**
         * Markup for an indicator.
         * @protected
         * @type {Array.<String>}
         */
        this._templates = [];

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * Overridden methods of the carousel.
         * @protected
         * @type {Object}
         */
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to,
        };

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            "prepared.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.push(
                        '<div class="' +
                            this._core.settings.dotClass +
                            '">' +
                            $(e.content)
                                .find("[data-dot]")
                                .addBack("[data-dot]")
                                .attr("data-dot") +
                            "</div>"
                    );
                }
            }, this),
            "added.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(
                        e.position,
                        0,
                        this._templates.pop()
                    );
                }
            }, this),
            "remove.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            "changed.owl.carousel": $.proxy(function (e) {
                if (e.namespace && e.property.name == "position") {
                    this.draw();
                }
            }, this),
            "initialized.owl.carousel": $.proxy(function (e) {
                if (e.namespace && !this._initialized) {
                    this._core.trigger("initialize", null, "navigation");
                    this.initialize();
                    this.update();
                    this.draw();
                    this._initialized = true;
                    this._core.trigger("initialized", null, "navigation");
                }
            }, this),
            "refreshed.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger("refresh", null, "navigation");
                    this.update();
                    this.draw();
                    this._core.trigger("refreshed", null, "navigation");
                }
            }, this),
        };

        // set default options
        this._core.options = $.extend(
            {},
            Navigation.Defaults,
            this._core.options
        );

        // register event handlers
        this.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     * @todo Rename `slideBy` to `navBy`
     */
    Navigation.Defaults = {
        nav: false,
        navText: [
            '<span aria-label="' + "Previous" + '">&#x2039;</span>',
            '<span aria-label="' + "Next" + '">&#x203a;</span>',
        ],
        navSpeed: false,
        navElement: 'button type="button" aria-label="presentation"',
        navContainer: false,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: true,
        dotsEach: false,
        dotsData: false,
        dotsSpeed: false,
        dotsContainer: false,
    };

    /**
     * Initializes the layout of the plugin and extends the carousel.
     * @protected
     */
    Navigation.prototype.initialize = function () {
        var override,
            settings = this._core.settings;

        // create DOM structure for relative navigation
        this._controls.$relative = (
            settings.navContainer
                ? $(settings.navContainer)
                : $("<div>")
                      .addClass(settings.navContainerClass)
                      .appendTo(this.$element)
        ).addClass("disabled");

        this._controls.$previous = $("<" + settings.navElement + ">")
            .addClass(settings.navClass[0])
            .html(settings.navText[0])
            .prependTo(this._controls.$relative)
            .on(
                "click",
                $.proxy(function (e) {
                    this.prev(settings.navSpeed);
                }, this)
            );
        this._controls.$next = $("<" + settings.navElement + ">")
            .addClass(settings.navClass[1])
            .html(settings.navText[1])
            .appendTo(this._controls.$relative)
            .on(
                "click",
                $.proxy(function (e) {
                    this.next(settings.navSpeed);
                }, this)
            );

        // create DOM structure for absolute navigation
        if (!settings.dotsData) {
            this._templates = [
                $('<button role="button" aria-label="presentation">')
                    .addClass(settings.dotClass)
                    .append($("<span>"))
                    .prop("outerHTML"),
            ];
        }

        this._controls.$absolute = (
            settings.dotsContainer
                ? $(settings.dotsContainer)
                : $("<div>")
                      .addClass(settings.dotsClass)
                      .appendTo(this.$element)
        ).addClass("disabled");

        this._controls.$absolute.on(
            "click",
            "button",
            $.proxy(function (e) {
                var index = $(e.target).parent().is(this._controls.$absolute)
                    ? $(e.target).index()
                    : $(e.target).parent().index();

                e.preventDefault();

                this.to(index, settings.dotsSpeed);
            }, this)
        );

        /*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

        // override public methods of the carousel
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    };

    /**
     * Destroys the plugin.
     * @protected
     */
    Navigation.prototype.destroy = function () {
        var handler, control, property, override, settings;
        settings = this._core.settings;

        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            if (control === "$relative" && settings.navContainer) {
                this._controls[control].html("");
            } else {
                this._controls[control].remove();
            }
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    /**
     * Updates the internal state.
     * @protected
     */
    Navigation.prototype.update = function () {
        var i,
            j,
            k,
            lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            maximum = this._core.maximum(true),
            settings = this._core.settings,
            size =
                settings.center || settings.autoWidth || settings.dotsData
                    ? 1
                    : settings.dotsEach || settings.items;

        if (settings.slideBy !== "page") {
            settings.slideBy = Math.min(settings.slideBy, settings.items);
        }

        if (settings.dots || settings.slideBy == "page") {
            this._pages = [];

            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1,
                    });
                    if (Math.min(maximum, i - lower) === maximum) {
                        break;
                    }
                    (j = 0), ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    };

    /**
     * Draws the user interface.
     * @todo The option `dotsData` wont work.
     * @protected
     */
    Navigation.prototype.draw = function () {
        var difference,
            settings = this._core.settings,
            disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()),
            loop = settings.loop || settings.rewind;

        this._controls.$relative.toggleClass(
            "disabled",
            !settings.nav || disabled
        );

        if (settings.nav) {
            this._controls.$previous.toggleClass(
                "disabled",
                !loop && index <= this._core.minimum(true)
            );
            this._controls.$next.toggleClass(
                "disabled",
                !loop && index >= this._core.maximum(true)
            );
        }

        this._controls.$absolute.toggleClass(
            "disabled",
            !settings.dots || disabled
        );

        if (settings.dots) {
            difference =
                this._pages.length - this._controls.$absolute.children().length;

            if (settings.dotsData && difference !== 0) {
                this._controls.$absolute.html(this._templates.join(""));
            } else if (difference > 0) {
                this._controls.$absolute.append(
                    new Array(difference + 1).join(this._templates[0])
                );
            } else if (difference < 0) {
                this._controls.$absolute.children().slice(difference).remove();
            }

            this._controls.$absolute.find(".active").removeClass("active");
            this._controls.$absolute
                .children()
                .eq($.inArray(this.current(), this._pages))
                .addClass("active");
        }
    };

    /**
     * Extends event data.
     * @protected
     * @param {Event} event - The event object which gets thrown.
     */
    Navigation.prototype.onTrigger = function (event) {
        var settings = this._core.settings;

        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size:
                settings &&
                (settings.center || settings.autoWidth || settings.dotsData
                    ? 1
                    : settings.dotsEach || settings.items),
        };
    };

    /**
     * Gets the current page position of the carousel.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.current = function () {
        var current = this._core.relative(this._core.current());
        return $.grep(
            this._pages,
            $.proxy(function (page, index) {
                return page.start <= current && page.end >= current;
            }, this)
        ).pop();
    };

    /**
     * Gets the current succesor/predecessor position.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.getPosition = function (successor) {
        var position,
            length,
            settings = this._core.settings;

        if (settings.slideBy == "page") {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position =
                this._pages[((position % length) + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor
                ? (position += settings.slideBy)
                : (position -= settings.slideBy);
        }

        return position;
    };

    /**
     * Slides to the next item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.next = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    };

    /**
     * Slides to the previous item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.prev = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    };

    /**
     * Slides to the specified item or page.
     * @public
     * @param {Number} position - The position of the item or page.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
     */
    Navigation.prototype.to = function (position, speed, standard) {
        var length;

        if (!standard && this._pages.length) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(
                this._pages[((position % length) + length) % length].start,
                speed
            );
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
    "use strict";

    /**
     * Creates the hash plugin.
     * @class The Hash Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Hash = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Hash index for the items.
         * @protected
         * @type {Object}
         */
        this._hashes = {};

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            "initialized.owl.carousel": $.proxy(function (e) {
                if (
                    e.namespace &&
                    this._core.settings.startPosition === "URLHash"
                ) {
                    $(window).trigger("hashchange.owl.navigation");
                }
            }, this),
            "prepared.owl.carousel": $.proxy(function (e) {
                if (e.namespace) {
                    var hash = $(e.content)
                        .find("[data-hash]")
                        .addBack("[data-hash]")
                        .attr("data-hash");

                    if (!hash) {
                        return;
                    }

                    this._hashes[hash] = e.content;
                }
            }, this),
            "changed.owl.carousel": $.proxy(function (e) {
                if (e.namespace && e.property.name === "position") {
                    var current = this._core.items(
                            this._core.relative(this._core.current())
                        ),
                        hash = $.map(this._hashes, function (item, hash) {
                            return item === current ? hash : null;
                        }).join();

                    if (!hash || window.location.hash.slice(1) === hash) {
                        return;
                    }

                    window.location.hash = hash;
                }
            }, this),
        };

        // set default options
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);

        // register the event handlers
        this.$element.on(this._handlers);

        // register event listener for hash navigation
        $(window).on(
            "hashchange.owl.navigation",
            $.proxy(function (e) {
                var hash = window.location.hash.substring(1),
                    items = this._core.$stage.children(),
                    position =
                        this._hashes[hash] && items.index(this._hashes[hash]);

                if (
                    position === undefined ||
                    position === this._core.current()
                ) {
                    return;
                }

                this._core.to(this._core.relative(position), false, true);
            }, this)
        );
    };

    /**
     * Default options.
     * @public
     */
    Hash.Defaults = {
        URLhashListener: false,
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Hash.prototype.destroy = function () {
        var handler, property;

        $(window).off("hashchange.owl.navigation");

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
    var style = $("<support>").get(0).style,
        prefixes = "Webkit Moz O ms".split(" "),
        events = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend",
                },
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend",
                },
            },
        },
        tests = {
            csstransforms: function () {
                return !!test("transform");
            },
            csstransforms3d: function () {
                return !!test("perspective");
            },
            csstransitions: function () {
                return !!test("transition");
            },
            cssanimations: function () {
                return !!test("animation");
            },
        };

    function test(property, prefixed) {
        var result = false,
            upper = property.charAt(0).toUpperCase() + property.slice(1);

        $.each(
            (property + " " + prefixes.join(upper + " ") + upper).split(" "),
            function (i, property) {
                if (style[property] !== undefined) {
                    result = prefixed ? property : true;
                    return false;
                }
            }
        );

        return result;
    }

    function prefixed(property) {
        return test(property, true);
    }

    if (tests.csstransitions()) {
        /* jshint -W053 */
        $.support.transition = new String(prefixed("transition"));
        $.support.transition.end = events.transition.end[$.support.transition];
    }

    if (tests.cssanimations()) {
        /* jshint -W053 */
        $.support.animation = new String(prefixed("animation"));
        $.support.animation.end = events.animation.end[$.support.animation];
    }

    if (tests.csstransforms()) {
        /* jshint -W053 */
        $.support.transform = new String(prefixed("transform"));
        $.support.transform3d = tests.csstransforms3d();
    }
})(window.Zepto || window.jQuery, window, document);

//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!(function (a, b) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = b())
        : "function" == typeof define && define.amd
        ? define(b)
        : (a.moment = b());
})(this, function () {
    "use strict";
    function a() {
        return sd.apply(null, arguments);
    }
    function b(a) {
        sd = a;
    }
    function c(a) {
        return (
            a instanceof Array ||
            "[object Array]" === Object.prototype.toString.call(a)
        );
    }
    function d(a) {
        return (
            null != a && "[object Object]" === Object.prototype.toString.call(a)
        );
    }
    function e(a) {
        var b;
        for (b in a) return !1;
        return !0;
    }
    function f(a) {
        return void 0 === a;
    }
    function g(a) {
        return (
            "number" == typeof a ||
            "[object Number]" === Object.prototype.toString.call(a)
        );
    }
    function h(a) {
        return (
            a instanceof Date ||
            "[object Date]" === Object.prototype.toString.call(a)
        );
    }
    function i(a, b) {
        var c,
            d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d;
    }
    function j(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function k(a, b) {
        for (var c in b) j(b, c) && (a[c] = b[c]);
        return (
            j(b, "toString") && (a.toString = b.toString),
            j(b, "valueOf") && (a.valueOf = b.valueOf),
            a
        );
    }
    function l(a, b, c, d) {
        return sb(a, b, c, d, !0).utc();
    }
    function m() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1,
        };
    }
    function n(a) {
        return null == a._pf && (a._pf = m()), a._pf;
    }
    function o(a) {
        if (null == a._isValid) {
            var b = n(a),
                c = ud.call(b.parsedDateParts, function (a) {
                    return null != a;
                }),
                d =
                    !isNaN(a._d.getTime()) &&
                    b.overflow < 0 &&
                    !b.empty &&
                    !b.invalidMonth &&
                    !b.invalidWeekday &&
                    !b.nullInput &&
                    !b.invalidFormat &&
                    !b.userInvalidated &&
                    (!b.meridiem || (b.meridiem && c));
            if (
                (a._strict &&
                    (d =
                        d &&
                        0 === b.charsLeftOver &&
                        0 === b.unusedTokens.length &&
                        void 0 === b.bigHour),
                null != Object.isFrozen && Object.isFrozen(a))
            )
                return d;
            a._isValid = d;
        }
        return a._isValid;
    }
    function p(a) {
        var b = l(NaN);
        return null != a ? k(n(b), a) : (n(b).userInvalidated = !0), b;
    }
    function q(a, b) {
        var c, d, e;
        if (
            (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject),
            f(b._i) || (a._i = b._i),
            f(b._f) || (a._f = b._f),
            f(b._l) || (a._l = b._l),
            f(b._strict) || (a._strict = b._strict),
            f(b._tzm) || (a._tzm = b._tzm),
            f(b._isUTC) || (a._isUTC = b._isUTC),
            f(b._offset) || (a._offset = b._offset),
            f(b._pf) || (a._pf = n(b)),
            f(b._locale) || (a._locale = b._locale),
            vd.length > 0)
        )
            for (c = 0; c < vd.length; c++)
                (d = vd[c]), (e = b[d]), f(e) || (a[d] = e);
        return a;
    }
    function r(b) {
        q(this, b),
            (this._d = new Date(null != b._d ? b._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            wd === !1 && ((wd = !0), a.updateOffset(this), (wd = !1));
    }
    function s(a) {
        return a instanceof r || (null != a && null != a._isAMomentObject);
    }
    function t(a) {
        return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
    }
    function u(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = t(b)), c;
    }
    function v(a, b, c) {
        var d,
            e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; d < e; d++)
            ((c && a[d] !== b[d]) || (!c && u(a[d]) !== u(b[d]))) && g++;
        return g + f;
    }
    function w(b) {
        a.suppressDeprecationWarnings === !1 &&
            "undefined" != typeof console &&
            console.warn &&
            console.warn("Deprecation warning: " + b);
    }
    function x(b, c) {
        var d = !0;
        return k(function () {
            if (
                (null != a.deprecationHandler && a.deprecationHandler(null, b),
                d)
            ) {
                for (var e, f = [], g = 0; g < arguments.length; g++) {
                    if (((e = ""), "object" == typeof arguments[g])) {
                        e += "\n[" + g + "] ";
                        for (var h in arguments[0])
                            e += h + ": " + arguments[0][h] + ", ";
                        e = e.slice(0, -2);
                    } else e = arguments[g];
                    f.push(e);
                }
                w(
                    b +
                        "\nArguments: " +
                        Array.prototype.slice.call(f).join("") +
                        "\n" +
                        new Error().stack
                ),
                    (d = !1);
            }
            return c.apply(this, arguments);
        }, c);
    }
    function y(b, c) {
        null != a.deprecationHandler && a.deprecationHandler(b, c),
            xd[b] || (w(c), (xd[b] = !0));
    }
    function z(a) {
        return (
            a instanceof Function ||
            "[object Function]" === Object.prototype.toString.call(a)
        );
    }
    function A(a) {
        var b, c;
        for (c in a) (b = a[c]), z(b) ? (this[c] = b) : (this["_" + c] = b);
        (this._config = a),
            (this._dayOfMonthOrdinalParseLenient = new RegExp(
                (this._dayOfMonthOrdinalParse.source ||
                    this._ordinalParse.source) +
                    "|" +
                    /\d{1,2}/.source
            ));
    }
    function B(a, b) {
        var c,
            e = k({}, a);
        for (c in b)
            j(b, c) &&
                (d(a[c]) && d(b[c])
                    ? ((e[c] = {}), k(e[c], a[c]), k(e[c], b[c]))
                    : null != b[c]
                    ? (e[c] = b[c])
                    : delete e[c]);
        for (c in a) j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
        return e;
    }
    function C(a) {
        null != a && this.set(a);
    }
    function D(a, b, c) {
        var d = this._calendar[a] || this._calendar.sameElse;
        return z(d) ? d.call(b, c) : d;
    }
    function E(a) {
        var b = this._longDateFormat[a],
            c = this._longDateFormat[a.toUpperCase()];
        return b || !c
            ? b
            : ((this._longDateFormat[a] = c.replace(
                  /MMMM|MM|DD|dddd/g,
                  function (a) {
                      return a.slice(1);
                  }
              )),
              this._longDateFormat[a]);
    }
    function F() {
        return this._invalidDate;
    }
    function G(a) {
        return this._ordinal.replace("%d", a);
    }
    function H(a, b, c, d) {
        var e = this._relativeTime[c];
        return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
    }
    function I(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return z(c) ? c(b) : c.replace(/%s/i, b);
    }
    function J(a, b) {
        var c = a.toLowerCase();
        Hd[c] = Hd[c + "s"] = Hd[b] = a;
    }
    function K(a) {
        return "string" == typeof a ? Hd[a] || Hd[a.toLowerCase()] : void 0;
    }
    function L(a) {
        var b,
            c,
            d = {};
        for (c in a) j(a, c) && ((b = K(c)), b && (d[b] = a[c]));
        return d;
    }
    function M(a, b) {
        Id[a] = b;
    }
    function N(a) {
        var b = [];
        for (var c in a) b.push({ unit: c, priority: Id[c] });
        return (
            b.sort(function (a, b) {
                return a.priority - b.priority;
            }),
            b
        );
    }
    function O(b, c) {
        return function (d) {
            return null != d
                ? (Q(this, b, d), a.updateOffset(this, c), this)
                : P(this, b);
        };
    }
    function P(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
    }
    function Q(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
    }
    function R(a) {
        return (a = K(a)), z(this[a]) ? this[a]() : this;
    }
    function S(a, b) {
        if ("object" == typeof a) {
            a = L(a);
            for (var c = N(a), d = 0; d < c.length; d++)
                this[c[d].unit](a[c[d].unit]);
        } else if (((a = K(a)), z(this[a]))) return this[a](b);
        return this;
    }
    function T(a, b, c) {
        var d = "" + Math.abs(a),
            e = b - d.length,
            f = a >= 0;
        return (
            (f ? (c ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, e)).toString().substr(1) +
            d
        );
    }
    function U(a, b, c, d) {
        var e = d;
        "string" == typeof d &&
            (e = function () {
                return this[d]();
            }),
            a && (Md[a] = e),
            b &&
                (Md[b[0]] = function () {
                    return T(e.apply(this, arguments), b[1], b[2]);
                }),
            c &&
                (Md[c] = function () {
                    return this.localeData().ordinal(
                        e.apply(this, arguments),
                        a
                    );
                });
    }
    function V(a) {
        return a.match(/\[[\s\S]/)
            ? a.replace(/^\[|\]$/g, "")
            : a.replace(/\\/g, "");
    }
    function W(a) {
        var b,
            c,
            d = a.match(Jd);
        for (b = 0, c = d.length; b < c; b++)
            Md[d[b]] ? (d[b] = Md[d[b]]) : (d[b] = V(d[b]));
        return function (b) {
            var e,
                f = "";
            for (e = 0; e < c; e++) f += z(d[e]) ? d[e].call(b, a) : d[e];
            return f;
        };
    }
    function X(a, b) {
        return a.isValid()
            ? ((b = Y(b, a.localeData())), (Ld[b] = Ld[b] || W(b)), Ld[b](a))
            : a.localeData().invalidDate();
    }
    function Y(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a;
        }
        var d = 5;
        for (Kd.lastIndex = 0; d >= 0 && Kd.test(a); )
            (a = a.replace(Kd, c)), (Kd.lastIndex = 0), (d -= 1);
        return a;
    }
    function Z(a, b, c) {
        ce[a] = z(b)
            ? b
            : function (a, d) {
                  return a && c ? c : b;
              };
    }
    function $(a, b) {
        return j(ce, a) ? ce[a](b._strict, b._locale) : new RegExp(_(a));
    }
    function _(a) {
        return aa(
            a
                .replace("\\", "")
                .replace(
                    /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                    function (a, b, c, d, e) {
                        return b || c || d || e;
                    }
                )
        );
    }
    function aa(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function ba(a, b) {
        var c,
            d = b;
        for (
            "string" == typeof a && (a = [a]),
                g(b) &&
                    (d = function (a, c) {
                        c[b] = u(a);
                    }),
                c = 0;
            c < a.length;
            c++
        )
            de[a[c]] = d;
    }
    function ca(a, b) {
        ba(a, function (a, c, d, e) {
            (d._w = d._w || {}), b(a, d._w, d, e);
        });
    }
    function da(a, b, c) {
        null != b && j(de, a) && de[a](b, c._a, c, a);
    }
    function ea(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
    }
    function fa(a, b) {
        return a
            ? c(this._months)
                ? this._months[a.month()]
                : this._months[
                      (this._months.isFormat || oe).test(b)
                          ? "format"
                          : "standalone"
                  ][a.month()]
            : c(this._months)
            ? this._months
            : this._months.standalone;
    }
    function ga(a, b) {
        return a
            ? c(this._monthsShort)
                ? this._monthsShort[a.month()]
                : this._monthsShort[oe.test(b) ? "format" : "standalone"][
                      a.month()
                  ]
            : c(this._monthsShort)
            ? this._monthsShort
            : this._monthsShort.standalone;
    }
    function ha(a, b, c) {
        var d,
            e,
            f,
            g = a.toLocaleLowerCase();
        if (!this._monthsParse)
            for (
                this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    d = 0;
                d < 12;
                ++d
            )
                (f = l([2e3, d])),
                    (this._shortMonthsParse[d] = this.monthsShort(
                        f,
                        ""
                    ).toLocaleLowerCase()),
                    (this._longMonthsParse[d] = this.months(
                        f,
                        ""
                    ).toLocaleLowerCase());
        return c
            ? "MMM" === b
                ? ((e = ne.call(this._shortMonthsParse, g)),
                  e !== -1 ? e : null)
                : ((e = ne.call(this._longMonthsParse, g)), e !== -1 ? e : null)
            : "MMM" === b
            ? ((e = ne.call(this._shortMonthsParse, g)),
              e !== -1
                  ? e
                  : ((e = ne.call(this._longMonthsParse, g)),
                    e !== -1 ? e : null))
            : ((e = ne.call(this._longMonthsParse, g)),
              e !== -1
                  ? e
                  : ((e = ne.call(this._shortMonthsParse, g)),
                    e !== -1 ? e : null));
    }
    function ia(a, b, c) {
        var d, e, f;
        if (this._monthsParseExact) return ha.call(this, a, b, c);
        for (
            this._monthsParse ||
                ((this._monthsParse = []),
                (this._longMonthsParse = []),
                (this._shortMonthsParse = [])),
                d = 0;
            d < 12;
            d++
        ) {
            if (
                ((e = l([2e3, d])),
                c &&
                    !this._longMonthsParse[d] &&
                    ((this._longMonthsParse[d] = new RegExp(
                        "^" + this.months(e, "").replace(".", "") + "$",
                        "i"
                    )),
                    (this._shortMonthsParse[d] = new RegExp(
                        "^" + this.monthsShort(e, "").replace(".", "") + "$",
                        "i"
                    ))),
                c ||
                    this._monthsParse[d] ||
                    ((f =
                        "^" +
                        this.months(e, "") +
                        "|^" +
                        this.monthsShort(e, "")),
                    (this._monthsParse[d] = new RegExp(
                        f.replace(".", ""),
                        "i"
                    ))),
                c && "MMMM" === b && this._longMonthsParse[d].test(a))
            )
                return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d;
        }
    }
    function ja(a, b) {
        var c;
        if (!a.isValid()) return a;
        if ("string" == typeof b)
            if (/^\d+$/.test(b)) b = u(b);
            else if (((b = a.localeData().monthsParse(b)), !g(b))) return a;
        return (
            (c = Math.min(a.date(), ea(a.year(), b))),
            a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c),
            a
        );
    }
    function ka(b) {
        return null != b
            ? (ja(this, b), a.updateOffset(this, !0), this)
            : P(this, "Month");
    }
    function la() {
        return ea(this.year(), this.month());
    }
    function ma(a) {
        return this._monthsParseExact
            ? (j(this, "_monthsRegex") || oa.call(this),
              a ? this._monthsShortStrictRegex : this._monthsShortRegex)
            : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = re),
              this._monthsShortStrictRegex && a
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex);
    }
    function na(a) {
        return this._monthsParseExact
            ? (j(this, "_monthsRegex") || oa.call(this),
              a ? this._monthsStrictRegex : this._monthsRegex)
            : (j(this, "_monthsRegex") || (this._monthsRegex = se),
              this._monthsStrictRegex && a
                  ? this._monthsStrictRegex
                  : this._monthsRegex);
    }
    function oa() {
        function a(a, b) {
            return b.length - a.length;
        }
        var b,
            c,
            d = [],
            e = [],
            f = [];
        for (b = 0; b < 12; b++)
            (c = l([2e3, b])),
                d.push(this.monthsShort(c, "")),
                e.push(this.months(c, "")),
                f.push(this.months(c, "")),
                f.push(this.monthsShort(c, ""));
        for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++)
            (d[b] = aa(d[b])), (e[b] = aa(e[b]));
        for (b = 0; b < 24; b++) f[b] = aa(f[b]);
        (this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i")),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
                "^(" + e.join("|") + ")",
                "i"
            )),
            (this._monthsShortStrictRegex = new RegExp(
                "^(" + d.join("|") + ")",
                "i"
            ));
    }
    function pa(a) {
        return qa(a) ? 366 : 365;
    }
    function qa(a) {
        return (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0;
    }
    function ra() {
        return qa(this.year());
    }
    function sa(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return (
            a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a),
            h
        );
    }
    function ta(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return (
            a < 100 &&
                a >= 0 &&
                isFinite(b.getUTCFullYear()) &&
                b.setUTCFullYear(a),
            b
        );
    }
    function ua(a, b, c) {
        var d = 7 + b - c,
            e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;
        return -e + d - 1;
    }
    function va(a, b, c, d, e) {
        var f,
            g,
            h = (7 + c - d) % 7,
            i = ua(a, d, e),
            j = 1 + 7 * (b - 1) + h + i;
        return (
            j <= 0
                ? ((f = a - 1), (g = pa(f) + j))
                : j > pa(a)
                ? ((f = a + 1), (g = j - pa(a)))
                : ((f = a), (g = j)),
            { year: f, dayOfYear: g }
        );
    }
    function wa(a, b, c) {
        var d,
            e,
            f = ua(a.year(), b, c),
            g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return (
            g < 1
                ? ((e = a.year() - 1), (d = g + xa(e, b, c)))
                : g > xa(a.year(), b, c)
                ? ((d = g - xa(a.year(), b, c)), (e = a.year() + 1))
                : ((e = a.year()), (d = g)),
            { week: d, year: e }
        );
    }
    function xa(a, b, c) {
        var d = ua(a, b, c),
            e = ua(a + 1, b, c);
        return (pa(a) - d + e) / 7;
    }
    function ya(a) {
        return wa(a, this._week.dow, this._week.doy).week;
    }
    function za() {
        return this._week.dow;
    }
    function Aa() {
        return this._week.doy;
    }
    function Ba(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d");
    }
    function Ca(a) {
        var b = wa(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d");
    }
    function Da(a, b) {
        return "string" != typeof a
            ? a
            : isNaN(a)
            ? ((a = b.weekdaysParse(a)), "number" == typeof a ? a : null)
            : parseInt(a, 10);
    }
    function Ea(a, b) {
        return "string" == typeof a
            ? b.weekdaysParse(a) % 7 || 7
            : isNaN(a)
            ? null
            : a;
    }
    function Fa(a, b) {
        return a
            ? c(this._weekdays)
                ? this._weekdays[a.day()]
                : this._weekdays[
                      this._weekdays.isFormat.test(b) ? "format" : "standalone"
                  ][a.day()]
            : c(this._weekdays)
            ? this._weekdays
            : this._weekdays.standalone;
    }
    function Ga(a) {
        return a ? this._weekdaysShort[a.day()] : this._weekdaysShort;
    }
    function Ha(a) {
        return a ? this._weekdaysMin[a.day()] : this._weekdaysMin;
    }
    function Ia(a, b, c) {
        var d,
            e,
            f,
            g = a.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (
                this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    d = 0;
                d < 7;
                ++d
            )
                (f = l([2e3, 1]).day(d)),
                    (this._minWeekdaysParse[d] = this.weekdaysMin(
                        f,
                        ""
                    ).toLocaleLowerCase()),
                    (this._shortWeekdaysParse[d] = this.weekdaysShort(
                        f,
                        ""
                    ).toLocaleLowerCase()),
                    (this._weekdaysParse[d] = this.weekdays(
                        f,
                        ""
                    ).toLocaleLowerCase());
        return c
            ? "dddd" === b
                ? ((e = ne.call(this._weekdaysParse, g)), e !== -1 ? e : null)
                : "ddd" === b
                ? ((e = ne.call(this._shortWeekdaysParse, g)),
                  e !== -1 ? e : null)
                : ((e = ne.call(this._minWeekdaysParse, g)),
                  e !== -1 ? e : null)
            : "dddd" === b
            ? ((e = ne.call(this._weekdaysParse, g)),
              e !== -1
                  ? e
                  : ((e = ne.call(this._shortWeekdaysParse, g)),
                    e !== -1
                        ? e
                        : ((e = ne.call(this._minWeekdaysParse, g)),
                          e !== -1 ? e : null)))
            : "ddd" === b
            ? ((e = ne.call(this._shortWeekdaysParse, g)),
              e !== -1
                  ? e
                  : ((e = ne.call(this._weekdaysParse, g)),
                    e !== -1
                        ? e
                        : ((e = ne.call(this._minWeekdaysParse, g)),
                          e !== -1 ? e : null)))
            : ((e = ne.call(this._minWeekdaysParse, g)),
              e !== -1
                  ? e
                  : ((e = ne.call(this._weekdaysParse, g)),
                    e !== -1
                        ? e
                        : ((e = ne.call(this._shortWeekdaysParse, g)),
                          e !== -1 ? e : null)));
    }
    function Ja(a, b, c) {
        var d, e, f;
        if (this._weekdaysParseExact) return Ia.call(this, a, b, c);
        for (
            this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                d = 0;
            d < 7;
            d++
        ) {
            if (
                ((e = l([2e3, 1]).day(d)),
                c &&
                    !this._fullWeekdaysParse[d] &&
                    ((this._fullWeekdaysParse[d] = new RegExp(
                        "^" + this.weekdays(e, "").replace(".", ".?") + "$",
                        "i"
                    )),
                    (this._shortWeekdaysParse[d] = new RegExp(
                        "^" +
                            this.weekdaysShort(e, "").replace(".", ".?") +
                            "$",
                        "i"
                    )),
                    (this._minWeekdaysParse[d] = new RegExp(
                        "^" + this.weekdaysMin(e, "").replace(".", ".?") + "$",
                        "i"
                    ))),
                this._weekdaysParse[d] ||
                    ((f =
                        "^" +
                        this.weekdays(e, "") +
                        "|^" +
                        this.weekdaysShort(e, "") +
                        "|^" +
                        this.weekdaysMin(e, "")),
                    (this._weekdaysParse[d] = new RegExp(
                        f.replace(".", ""),
                        "i"
                    ))),
                c && "dddd" === b && this._fullWeekdaysParse[d].test(a))
            )
                return d;
            if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a))
                return d;
            if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
            if (!c && this._weekdaysParse[d].test(a)) return d;
        }
    }
    function Ka(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a
            ? ((a = Da(a, this.localeData())), this.add(a - b, "d"))
            : b;
    }
    function La(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d");
    }
    function Ma(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        if (null != a) {
            var b = Ea(a, this.localeData());
            return this.day(this.day() % 7 ? b : b - 7);
        }
        return this.day() || 7;
    }
    function Na(a) {
        return this._weekdaysParseExact
            ? (j(this, "_weekdaysRegex") || Qa.call(this),
              a ? this._weekdaysStrictRegex : this._weekdaysRegex)
            : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = ye),
              this._weekdaysStrictRegex && a
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex);
    }
    function Oa(a) {
        return this._weekdaysParseExact
            ? (j(this, "_weekdaysRegex") || Qa.call(this),
              a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            : (j(this, "_weekdaysShortRegex") ||
                  (this._weekdaysShortRegex = ze),
              this._weekdaysShortStrictRegex && a
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex);
    }
    function Pa(a) {
        return this._weekdaysParseExact
            ? (j(this, "_weekdaysRegex") || Qa.call(this),
              a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ae),
              this._weekdaysMinStrictRegex && a
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex);
    }
    function Qa() {
        function a(a, b) {
            return b.length - a.length;
        }
        var b,
            c,
            d,
            e,
            f,
            g = [],
            h = [],
            i = [],
            j = [];
        for (b = 0; b < 7; b++)
            (c = l([2e3, 1]).day(b)),
                (d = this.weekdaysMin(c, "")),
                (e = this.weekdaysShort(c, "")),
                (f = this.weekdays(c, "")),
                g.push(d),
                h.push(e),
                i.push(f),
                j.push(d),
                j.push(e),
                j.push(f);
        for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++)
            (h[b] = aa(h[b])), (i[b] = aa(i[b])), (j[b] = aa(j[b]));
        (this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i")),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp(
                "^(" + i.join("|") + ")",
                "i"
            )),
            (this._weekdaysShortStrictRegex = new RegExp(
                "^(" + h.join("|") + ")",
                "i"
            )),
            (this._weekdaysMinStrictRegex = new RegExp(
                "^(" + g.join("|") + ")",
                "i"
            ));
    }
    function Ra() {
        return this.hours() % 12 || 12;
    }
    function Sa() {
        return this.hours() || 24;
    }
    function Ta(a, b) {
        U(a, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), b);
        });
    }
    function Ua(a, b) {
        return b._meridiemParse;
    }
    function Va(a) {
        return "p" === (a + "").toLowerCase().charAt(0);
    }
    function Wa(a, b, c) {
        return a > 11 ? (c ? "pm" : "PM") : c ? "am" : "AM";
    }
    function Xa(a) {
        return a ? a.toLowerCase().replace("_", "-") : a;
    }
    function Ya(a) {
        for (var b, c, d, e, f = 0; f < a.length; ) {
            for (
                e = Xa(a[f]).split("-"),
                    b = e.length,
                    c = Xa(a[f + 1]),
                    c = c ? c.split("-") : null;
                b > 0;

            ) {
                if ((d = Za(e.slice(0, b).join("-")))) return d;
                if (c && c.length >= b && v(e, c, !0) >= b - 1) break;
                b--;
            }
            f++;
        }
        return null;
    }
    function Za(a) {
        var b = null;
        if (!Fe[a] && "undefined" != typeof module && module && module.exports)
            try {
                (b = Be._abbr), require("./locale/" + a), $a(b);
            } catch (a) {}
        return Fe[a];
    }
    function $a(a, b) {
        var c;
        return a && ((c = f(b) ? bb(a) : _a(a, b)), c && (Be = c)), Be._abbr;
    }
    function _a(a, b) {
        if (null !== b) {
            var c = Ee;
            if (((b.abbr = a), null != Fe[a]))
                y(
                    "defineLocaleOverride",
                    "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
                ),
                    (c = Fe[a]._config);
            else if (null != b.parentLocale) {
                if (null == Fe[b.parentLocale])
                    return (
                        Ge[b.parentLocale] || (Ge[b.parentLocale] = []),
                        Ge[b.parentLocale].push({ name: a, config: b }),
                        null
                    );
                c = Fe[b.parentLocale]._config;
            }
            return (
                (Fe[a] = new C(B(c, b))),
                Ge[a] &&
                    Ge[a].forEach(function (a) {
                        _a(a.name, a.config);
                    }),
                $a(a),
                Fe[a]
            );
        }
        return delete Fe[a], null;
    }
    function ab(a, b) {
        if (null != b) {
            var c,
                d = Ee;
            null != Fe[a] && (d = Fe[a]._config),
                (b = B(d, b)),
                (c = new C(b)),
                (c.parentLocale = Fe[a]),
                (Fe[a] = c),
                $a(a);
        } else null != Fe[a] && (null != Fe[a].parentLocale ? (Fe[a] = Fe[a].parentLocale) : null != Fe[a] && delete Fe[a]);
        return Fe[a];
    }
    function bb(a) {
        var b;
        if ((a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a))
            return Be;
        if (!c(a)) {
            if ((b = Za(a))) return b;
            a = [a];
        }
        return Ya(a);
    }
    function cb() {
        return Ad(Fe);
    }
    function db(a) {
        var b,
            c = a._a;
        return (
            c &&
                n(a).overflow === -2 &&
                ((b =
                    c[fe] < 0 || c[fe] > 11
                        ? fe
                        : c[ge] < 1 || c[ge] > ea(c[ee], c[fe])
                        ? ge
                        : c[he] < 0 ||
                          c[he] > 24 ||
                          (24 === c[he] &&
                              (0 !== c[ie] || 0 !== c[je] || 0 !== c[ke]))
                        ? he
                        : c[ie] < 0 || c[ie] > 59
                        ? ie
                        : c[je] < 0 || c[je] > 59
                        ? je
                        : c[ke] < 0 || c[ke] > 999
                        ? ke
                        : -1),
                n(a)._overflowDayOfYear && (b < ee || b > ge) && (b = ge),
                n(a)._overflowWeeks && b === -1 && (b = le),
                n(a)._overflowWeekday && b === -1 && (b = me),
                (n(a).overflow = b)),
            a
        );
    }
    function eb(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h = a._i,
            i = He.exec(h) || Ie.exec(h);
        if (i) {
            for (n(a).iso = !0, b = 0, c = Ke.length; b < c; b++)
                if (Ke[b][1].exec(i[1])) {
                    (e = Ke[b][0]), (d = Ke[b][2] !== !1);
                    break;
                }
            if (null == e) return void (a._isValid = !1);
            if (i[3]) {
                for (b = 0, c = Le.length; b < c; b++)
                    if (Le[b][1].exec(i[3])) {
                        f = (i[2] || " ") + Le[b][0];
                        break;
                    }
                if (null == f) return void (a._isValid = !1);
            }
            if (!d && null != f) return void (a._isValid = !1);
            if (i[4]) {
                if (!Je.exec(i[4])) return void (a._isValid = !1);
                g = "Z";
            }
            (a._f = e + (f || "") + (g || "")), lb(a);
        } else a._isValid = !1;
    }
    function fb(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j = {
                " GMT": " +0000",
                " EDT": " -0400",
                " EST": " -0500",
                " CDT": " -0500",
                " CST": " -0600",
                " MDT": " -0600",
                " MST": " -0700",
                " PDT": " -0700",
                " PST": " -0800",
            },
            k = "YXWVUTSRQPONZABCDEFGHIKLM";
        if (
            ((b = a._i
                .replace(/\([^\)]*\)|[\n\t]/g, " ")
                .replace(/(\s\s+)/g, " ")
                .replace(/^\s|\s$/g, "")),
            (c = Ne.exec(b)))
        ) {
            if (
                ((d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : ""),
                (e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY ")),
                (f = "HH:mm" + (c[4] ? ":ss" : "")),
                c[1])
            ) {
                var l = new Date(c[2]),
                    m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                        l.getDay()
                    ];
                if (c[1].substr(0, 3) !== m)
                    return (n(a).weekdayMismatch = !0), void (a._isValid = !1);
            }
            switch (c[5].length) {
                case 2:
                    0 === i
                        ? (h = " +0000")
                        : ((i = k.indexOf(c[5][1].toUpperCase()) - 12),
                          (h =
                              (i < 0 ? " -" : " +") +
                              ("" + i).replace(/^-?/, "0").match(/..$/)[0] +
                              "00"));
                    break;
                case 4:
                    h = j[c[5]];
                    break;
                default:
                    h = j[" GMT"];
            }
            (c[5] = h),
                (a._i = c.splice(1).join("")),
                (g = " ZZ"),
                (a._f = d + e + f + g),
                lb(a),
                (n(a).rfc2822 = !0);
        } else a._isValid = !1;
    }
    function gb(b) {
        var c = Me.exec(b._i);
        return null !== c
            ? void (b._d = new Date(+c[1]))
            : (eb(b),
              void (
                  b._isValid === !1 &&
                  (delete b._isValid,
                  fb(b),
                  b._isValid === !1 &&
                      (delete b._isValid, a.createFromInputFallback(b)))
              ));
    }
    function hb(a, b, c) {
        return null != a ? a : null != b ? b : c;
    }
    function ib(b) {
        var c = new Date(a.now());
        return b._useUTC
            ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()]
            : [c.getFullYear(), c.getMonth(), c.getDate()];
    }
    function jb(a) {
        var b,
            c,
            d,
            e,
            f = [];
        if (!a._d) {
            for (
                d = ib(a),
                    a._w && null == a._a[ge] && null == a._a[fe] && kb(a),
                    null != a._dayOfYear &&
                        ((e = hb(a._a[ee], d[ee])),
                        (a._dayOfYear > pa(e) || 0 === a._dayOfYear) &&
                            (n(a)._overflowDayOfYear = !0),
                        (c = ta(e, 0, a._dayOfYear)),
                        (a._a[fe] = c.getUTCMonth()),
                        (a._a[ge] = c.getUTCDate())),
                    b = 0;
                b < 3 && null == a._a[b];
                ++b
            )
                a._a[b] = f[b] = d[b];
            for (; b < 7; b++)
                a._a[b] = f[b] = null == a._a[b] ? (2 === b ? 1 : 0) : a._a[b];
            24 === a._a[he] &&
                0 === a._a[ie] &&
                0 === a._a[je] &&
                0 === a._a[ke] &&
                ((a._nextDay = !0), (a._a[he] = 0)),
                (a._d = (a._useUTC ? ta : sa).apply(null, f)),
                null != a._tzm &&
                    a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
                a._nextDay && (a._a[he] = 24);
        }
    }
    function kb(a) {
        var b, c, d, e, f, g, h, i;
        if (((b = a._w), null != b.GG || null != b.W || null != b.E))
            (f = 1),
                (g = 4),
                (c = hb(b.GG, a._a[ee], wa(tb(), 1, 4).year)),
                (d = hb(b.W, 1)),
                (e = hb(b.E, 1)),
                (e < 1 || e > 7) && (i = !0);
        else {
            (f = a._locale._week.dow), (g = a._locale._week.doy);
            var j = wa(tb(), f, g);
            (c = hb(b.gg, a._a[ee], j.year)),
                (d = hb(b.w, j.week)),
                null != b.d
                    ? ((e = b.d), (e < 0 || e > 6) && (i = !0))
                    : null != b.e
                    ? ((e = b.e + f), (b.e < 0 || b.e > 6) && (i = !0))
                    : (e = f);
        }
        d < 1 || d > xa(c, f, g)
            ? (n(a)._overflowWeeks = !0)
            : null != i
            ? (n(a)._overflowWeekday = !0)
            : ((h = va(c, d, e, f, g)),
              (a._a[ee] = h.year),
              (a._dayOfYear = h.dayOfYear));
    }
    function lb(b) {
        if (b._f === a.ISO_8601) return void eb(b);
        if (b._f === a.RFC_2822) return void fb(b);
        (b._a = []), (n(b).empty = !0);
        var c,
            d,
            e,
            f,
            g,
            h = "" + b._i,
            i = h.length,
            j = 0;
        for (e = Y(b._f, b._locale).match(Jd) || [], c = 0; c < e.length; c++)
            (f = e[c]),
                (d = (h.match($(f, b)) || [])[0]),
                d &&
                    ((g = h.substr(0, h.indexOf(d))),
                    g.length > 0 && n(b).unusedInput.push(g),
                    (h = h.slice(h.indexOf(d) + d.length)),
                    (j += d.length)),
                Md[f]
                    ? (d ? (n(b).empty = !1) : n(b).unusedTokens.push(f),
                      da(f, d, b))
                    : b._strict && !d && n(b).unusedTokens.push(f);
        (n(b).charsLeftOver = i - j),
            h.length > 0 && n(b).unusedInput.push(h),
            b._a[he] <= 12 &&
                n(b).bigHour === !0 &&
                b._a[he] > 0 &&
                (n(b).bigHour = void 0),
            (n(b).parsedDateParts = b._a.slice(0)),
            (n(b).meridiem = b._meridiem),
            (b._a[he] = mb(b._locale, b._a[he], b._meridiem)),
            jb(b),
            db(b);
    }
    function mb(a, b, c) {
        var d;
        return null == c
            ? b
            : null != a.meridiemHour
            ? a.meridiemHour(b, c)
            : null != a.isPM
            ? ((d = a.isPM(c)),
              d && b < 12 && (b += 12),
              d || 12 !== b || (b = 0),
              b)
            : b;
    }
    function nb(a) {
        var b, c, d, e, f;
        if (0 === a._f.length)
            return (n(a).invalidFormat = !0), void (a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++)
            (f = 0),
                (b = q({}, a)),
                null != a._useUTC && (b._useUTC = a._useUTC),
                (b._f = a._f[e]),
                lb(b),
                o(b) &&
                    ((f += n(b).charsLeftOver),
                    (f += 10 * n(b).unusedTokens.length),
                    (n(b).score = f),
                    (null == d || f < d) && ((d = f), (c = b)));
        k(a, c || b);
    }
    function ob(a) {
        if (!a._d) {
            var b = L(a._i);
            (a._a = i(
                [
                    b.year,
                    b.month,
                    b.day || b.date,
                    b.hour,
                    b.minute,
                    b.second,
                    b.millisecond,
                ],
                function (a) {
                    return a && parseInt(a, 10);
                }
            )),
                jb(a);
        }
    }
    function pb(a) {
        var b = new r(db(qb(a)));
        return b._nextDay && (b.add(1, "d"), (b._nextDay = void 0)), b;
    }
    function qb(a) {
        var b = a._i,
            d = a._f;
        return (
            (a._locale = a._locale || bb(a._l)),
            null === b || (void 0 === d && "" === b)
                ? p({ nullInput: !0 })
                : ("string" == typeof b && (a._i = b = a._locale.preparse(b)),
                  s(b)
                      ? new r(db(b))
                      : (h(b) ? (a._d = b) : c(d) ? nb(a) : d ? lb(a) : rb(a),
                        o(a) || (a._d = null),
                        a))
        );
    }
    function rb(b) {
        var e = b._i;
        f(e)
            ? (b._d = new Date(a.now()))
            : h(e)
            ? (b._d = new Date(e.valueOf()))
            : "string" == typeof e
            ? gb(b)
            : c(e)
            ? ((b._a = i(e.slice(0), function (a) {
                  return parseInt(a, 10);
              })),
              jb(b))
            : d(e)
            ? ob(b)
            : g(e)
            ? (b._d = new Date(e))
            : a.createFromInputFallback(b);
    }
    function sb(a, b, f, g, h) {
        var i = {};
        return (
            (f !== !0 && f !== !1) || ((g = f), (f = void 0)),
            ((d(a) && e(a)) || (c(a) && 0 === a.length)) && (a = void 0),
            (i._isAMomentObject = !0),
            (i._useUTC = i._isUTC = h),
            (i._l = f),
            (i._i = a),
            (i._f = b),
            (i._strict = g),
            pb(i)
        );
    }
    function tb(a, b, c, d) {
        return sb(a, b, c, d, !1);
    }
    function ub(a, b) {
        var d, e;
        if ((1 === b.length && c(b[0]) && (b = b[0]), !b.length)) return tb();
        for (d = b[0], e = 1; e < b.length; ++e)
            (b[e].isValid() && !b[e][a](d)) || (d = b[e]);
        return d;
    }
    function vb() {
        var a = [].slice.call(arguments, 0);
        return ub("isBefore", a);
    }
    function wb() {
        var a = [].slice.call(arguments, 0);
        return ub("isAfter", a);
    }
    function xb(a) {
        for (var b in a)
            if (Re.indexOf(b) === -1 || (null != a[b] && isNaN(a[b])))
                return !1;
        for (var c = !1, d = 0; d < Re.length; ++d)
            if (a[Re[d]]) {
                if (c) return !1;
                parseFloat(a[Re[d]]) !== u(a[Re[d]]) && (c = !0);
            }
        return !0;
    }
    function yb() {
        return this._isValid;
    }
    function zb() {
        return Sb(NaN);
    }
    function Ab(a) {
        var b = L(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        (this._isValid = xb(b)),
            (this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60),
            (this._days = +g + 7 * f),
            (this._months = +e + 3 * d + 12 * c),
            (this._data = {}),
            (this._locale = bb()),
            this._bubble();
    }
    function Bb(a) {
        return a instanceof Ab;
    }
    function Cb(a) {
        return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a);
    }
    function Db(a, b) {
        U(a, 0, 0, function () {
            var a = this.utcOffset(),
                c = "+";
            return (
                a < 0 && ((a = -a), (c = "-")),
                c + T(~~(a / 60), 2) + b + T(~~a % 60, 2)
            );
        });
    }
    function Eb(a, b) {
        var c = (b || "").match(a);
        if (null === c) return null;
        var d = c[c.length - 1] || [],
            e = (d + "").match(Se) || ["-", 0, 0],
            f = +(60 * e[1]) + u(e[2]);
        return 0 === f ? 0 : "+" === e[0] ? f : -f;
    }
    function Fb(b, c) {
        var d, e;
        return c._isUTC
            ? ((d = c.clone()),
              (e =
                  (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf()),
              d._d.setTime(d._d.valueOf() + e),
              a.updateOffset(d, !1),
              d)
            : tb(b).local();
    }
    function Gb(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
    }
    function Hb(b, c, d) {
        var e,
            f = this._offset || 0;
        if (!this.isValid()) return null != b ? this : NaN;
        if (null != b) {
            if ("string" == typeof b) {
                if (((b = Eb(_d, b)), null === b)) return this;
            } else Math.abs(b) < 16 && !d && (b = 60 * b);
            return (
                !this._isUTC && c && (e = Gb(this)),
                (this._offset = b),
                (this._isUTC = !0),
                null != e && this.add(e, "m"),
                f !== b &&
                    (!c || this._changeInProgress
                        ? Xb(this, Sb(b - f, "m"), 1, !1)
                        : this._changeInProgress ||
                          ((this._changeInProgress = !0),
                          a.updateOffset(this, !0),
                          (this._changeInProgress = null))),
                this
            );
        }
        return this._isUTC ? f : Gb(this);
    }
    function Ib(a, b) {
        return null != a
            ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this)
            : -this.utcOffset();
    }
    function Jb(a) {
        return this.utcOffset(0, a);
    }
    function Kb(a) {
        return (
            this._isUTC &&
                (this.utcOffset(0, a),
                (this._isUTC = !1),
                a && this.subtract(Gb(this), "m")),
            this
        );
    }
    function Lb() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var a = Eb($d, this._i);
            null != a ? this.utcOffset(a) : this.utcOffset(0, !0);
        }
        return this;
    }
    function Mb(a) {
        return (
            !!this.isValid() &&
            ((a = a ? tb(a).utcOffset() : 0), (this.utcOffset() - a) % 60 === 0)
        );
    }
    function Nb() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }
    function Ob() {
        if (!f(this._isDSTShifted)) return this._isDSTShifted;
        var a = {};
        if ((q(a, this), (a = qb(a)), a._a)) {
            var b = a._isUTC ? l(a._a) : tb(a._a);
            this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0;
        } else this._isDSTShifted = !1;
        return this._isDSTShifted;
    }
    function Pb() {
        return !!this.isValid() && !this._isUTC;
    }
    function Qb() {
        return !!this.isValid() && this._isUTC;
    }
    function Rb() {
        return !!this.isValid() && this._isUTC && 0 === this._offset;
    }
    function Sb(a, b) {
        var c,
            d,
            e,
            f = a,
            h = null;
        return (
            Bb(a)
                ? (f = { ms: a._milliseconds, d: a._days, M: a._months })
                : g(a)
                ? ((f = {}), b ? (f[b] = a) : (f.milliseconds = a))
                : (h = Te.exec(a))
                ? ((c = "-" === h[1] ? -1 : 1),
                  (f = {
                      y: 0,
                      d: u(h[ge]) * c,
                      h: u(h[he]) * c,
                      m: u(h[ie]) * c,
                      s: u(h[je]) * c,
                      ms: u(Cb(1e3 * h[ke])) * c,
                  }))
                : (h = Ue.exec(a))
                ? ((c = "-" === h[1] ? -1 : 1),
                  (f = {
                      y: Tb(h[2], c),
                      M: Tb(h[3], c),
                      w: Tb(h[4], c),
                      d: Tb(h[5], c),
                      h: Tb(h[6], c),
                      m: Tb(h[7], c),
                      s: Tb(h[8], c),
                  }))
                : null == f
                ? (f = {})
                : "object" == typeof f &&
                  ("from" in f || "to" in f) &&
                  ((e = Vb(tb(f.from), tb(f.to))),
                  (f = {}),
                  (f.ms = e.milliseconds),
                  (f.M = e.months)),
            (d = new Ab(f)),
            Bb(a) && j(a, "_locale") && (d._locale = a._locale),
            d
        );
    }
    function Tb(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b;
    }
    function Ub(a, b) {
        var c = { milliseconds: 0, months: 0 };
        return (
            (c.months = b.month() - a.month() + 12 * (b.year() - a.year())),
            a.clone().add(c.months, "M").isAfter(b) && --c.months,
            (c.milliseconds = +b - +a.clone().add(c.months, "M")),
            c
        );
    }
    function Vb(a, b) {
        var c;
        return a.isValid() && b.isValid()
            ? ((b = Fb(b, a)),
              a.isBefore(b)
                  ? (c = Ub(a, b))
                  : ((c = Ub(b, a)),
                    (c.milliseconds = -c.milliseconds),
                    (c.months = -c.months)),
              c)
            : { milliseconds: 0, months: 0 };
    }
    function Wb(a, b) {
        return function (c, d) {
            var e, f;
            return (
                null === d ||
                    isNaN(+d) ||
                    (y(
                        b,
                        "moment()." +
                            b +
                            "(period, number) is deprecated. Please use moment()." +
                            b +
                            "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                    ),
                    (f = c),
                    (c = d),
                    (d = f)),
                (c = "string" == typeof c ? +c : c),
                (e = Sb(c, d)),
                Xb(this, e, a),
                this
            );
        };
    }
    function Xb(b, c, d, e) {
        var f = c._milliseconds,
            g = Cb(c._days),
            h = Cb(c._months);
        b.isValid() &&
            ((e = null == e || e),
            f && b._d.setTime(b._d.valueOf() + f * d),
            g && Q(b, "Date", P(b, "Date") + g * d),
            h && ja(b, P(b, "Month") + h * d),
            e && a.updateOffset(b, g || h));
    }
    function Yb(a, b) {
        var c = a.diff(b, "days", !0);
        return c < -6
            ? "sameElse"
            : c < -1
            ? "lastWeek"
            : c < 0
            ? "lastDay"
            : c < 1
            ? "sameDay"
            : c < 2
            ? "nextDay"
            : c < 7
            ? "nextWeek"
            : "sameElse";
    }
    function Zb(b, c) {
        var d = b || tb(),
            e = Fb(d, this).startOf("day"),
            f = a.calendarFormat(this, e) || "sameElse",
            g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
        return this.format(g || this.localeData().calendar(f, this, tb(d)));
    }
    function $b() {
        return new r(this);
    }
    function _b(a, b) {
        var c = s(a) ? a : tb(a);
        return (
            !(!this.isValid() || !c.isValid()) &&
            ((b = K(f(b) ? "millisecond" : b)),
            "millisecond" === b
                ? this.valueOf() > c.valueOf()
                : c.valueOf() < this.clone().startOf(b).valueOf())
        );
    }
    function ac(a, b) {
        var c = s(a) ? a : tb(a);
        return (
            !(!this.isValid() || !c.isValid()) &&
            ((b = K(f(b) ? "millisecond" : b)),
            "millisecond" === b
                ? this.valueOf() < c.valueOf()
                : this.clone().endOf(b).valueOf() < c.valueOf())
        );
    }
    function bc(a, b, c, d) {
        return (
            (d = d || "()"),
            ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) &&
                (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
        );
    }
    function cc(a, b) {
        var c,
            d = s(a) ? a : tb(a);
        return (
            !(!this.isValid() || !d.isValid()) &&
            ((b = K(b || "millisecond")),
            "millisecond" === b
                ? this.valueOf() === d.valueOf()
                : ((c = d.valueOf()),
                  this.clone().startOf(b).valueOf() <= c &&
                      c <= this.clone().endOf(b).valueOf()))
        );
    }
    function dc(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b);
    }
    function ec(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b);
    }
    function fc(a, b, c) {
        var d, e, f, g;
        return this.isValid()
            ? ((d = Fb(a, this)),
              d.isValid()
                  ? ((e = 6e4 * (d.utcOffset() - this.utcOffset())),
                    (b = K(b)),
                    "year" === b || "month" === b || "quarter" === b
                        ? ((g = gc(this, d)),
                          "quarter" === b
                              ? (g /= 3)
                              : "year" === b && (g /= 12))
                        : ((f = this - d),
                          (g =
                              "second" === b
                                  ? f / 1e3
                                  : "minute" === b
                                  ? f / 6e4
                                  : "hour" === b
                                  ? f / 36e5
                                  : "day" === b
                                  ? (f - e) / 864e5
                                  : "week" === b
                                  ? (f - e) / 6048e5
                                  : f)),
                    c ? g : t(g))
                  : NaN)
            : NaN;
    }
    function gc(a, b) {
        var c,
            d,
            e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            f = a.clone().add(e, "months");
        return (
            b - f < 0
                ? ((c = a.clone().add(e - 1, "months")),
                  (d = (b - f) / (f - c)))
                : ((c = a.clone().add(e + 1, "months")),
                  (d = (b - f) / (c - f))),
            -(e + d) || 0
        );
    }
    function hc() {
        return this.clone()
            .locale("en")
            .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function ic() {
        if (!this.isValid()) return null;
        var a = this.clone().utc();
        return a.year() < 0 || a.year() > 9999
            ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            : z(Date.prototype.toISOString)
            ? this.toDate().toISOString()
            : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    }
    function jc() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var a = "moment",
            b = "";
        this.isLocal() ||
            ((a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
            (b = "Z"));
        var c = "[" + a + '("]',
            d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            e = "-MM-DD[T]HH:mm:ss.SSS",
            f = b + '[")]';
        return this.format(c + d + e + f);
    }
    function kc(b) {
        b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
        var c = X(this, b);
        return this.localeData().postformat(c);
    }
    function lc(a, b) {
        return this.isValid() && ((s(a) && a.isValid()) || tb(a).isValid())
            ? Sb({ to: this, from: a }).locale(this.locale()).humanize(!b)
            : this.localeData().invalidDate();
    }
    function mc(a) {
        return this.from(tb(), a);
    }
    function nc(a, b) {
        return this.isValid() && ((s(a) && a.isValid()) || tb(a).isValid())
            ? Sb({ from: this, to: a }).locale(this.locale()).humanize(!b)
            : this.localeData().invalidDate();
    }
    function oc(a) {
        return this.to(tb(), a);
    }
    function pc(a) {
        var b;
        return void 0 === a
            ? this._locale._abbr
            : ((b = bb(a)), null != b && (this._locale = b), this);
    }
    function qc() {
        return this._locale;
    }
    function rc(a) {
        switch ((a = K(a))) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0);
        }
        return (
            "week" === a && this.weekday(0),
            "isoWeek" === a && this.isoWeekday(1),
            "quarter" === a && this.month(3 * Math.floor(this.month() / 3)),
            this
        );
    }
    function sc(a) {
        return (
            (a = K(a)),
            void 0 === a || "millisecond" === a
                ? this
                : ("date" === a && (a = "day"),
                  this.startOf(a)
                      .add(1, "isoWeek" === a ? "week" : a)
                      .subtract(1, "ms"))
        );
    }
    function tc() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
    }
    function uc() {
        return Math.floor(this.valueOf() / 1e3);
    }
    function vc() {
        return new Date(this.valueOf());
    }
    function wc() {
        var a = this;
        return [
            a.year(),
            a.month(),
            a.date(),
            a.hour(),
            a.minute(),
            a.second(),
            a.millisecond(),
        ];
    }
    function xc() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds(),
        };
    }
    function yc() {
        return this.isValid() ? this.toISOString() : null;
    }
    function zc() {
        return o(this);
    }
    function Ac() {
        return k({}, n(this));
    }
    function Bc() {
        return n(this).overflow;
    }
    function Cc() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }
    function Dc(a, b) {
        U(0, [a, a.length], 0, b);
    }
    function Ec(a) {
        return Ic.call(
            this,
            a,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }
    function Fc(a) {
        return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function Gc() {
        return xa(this.year(), 1, 4);
    }
    function Hc() {
        var a = this.localeData()._week;
        return xa(this.year(), a.dow, a.doy);
    }
    function Ic(a, b, c, d, e) {
        var f;
        return null == a
            ? wa(this, d, e).year
            : ((f = xa(a, d, e)),
              b > f && (b = f),
              Jc.call(this, a, b, c, d, e));
    }
    function Jc(a, b, c, d, e) {
        var f = va(a, b, c, d, e),
            g = ta(f.year, 0, f.dayOfYear);
        return (
            this.year(g.getUTCFullYear()),
            this.month(g.getUTCMonth()),
            this.date(g.getUTCDate()),
            this
        );
    }
    function Kc(a) {
        return null == a
            ? Math.ceil((this.month() + 1) / 3)
            : this.month(3 * (a - 1) + (this.month() % 3));
    }
    function Lc(a) {
        var b =
            Math.round(
                (this.clone().startOf("day") - this.clone().startOf("year")) /
                    864e5
            ) + 1;
        return null == a ? b : this.add(a - b, "d");
    }
    function Mc(a, b) {
        b[ke] = u(1e3 * ("0." + a));
    }
    function Nc() {
        return this._isUTC ? "UTC" : "";
    }
    function Oc() {
        return this._isUTC ? "Coordinated Universal Time" : "";
    }
    function Pc(a) {
        return tb(1e3 * a);
    }
    function Qc() {
        return tb.apply(null, arguments).parseZone();
    }
    function Rc(a) {
        return a;
    }
    function Sc(a, b, c, d) {
        var e = bb(),
            f = l().set(d, b);
        return e[c](f, a);
    }
    function Tc(a, b, c) {
        if ((g(a) && ((b = a), (a = void 0)), (a = a || ""), null != b))
            return Sc(a, b, c, "month");
        var d,
            e = [];
        for (d = 0; d < 12; d++) e[d] = Sc(a, d, c, "month");
        return e;
    }
    function Uc(a, b, c, d) {
        "boolean" == typeof a
            ? (g(b) && ((c = b), (b = void 0)), (b = b || ""))
            : ((b = a),
              (c = b),
              (a = !1),
              g(b) && ((c = b), (b = void 0)),
              (b = b || ""));
        var e = bb(),
            f = a ? e._week.dow : 0;
        if (null != c) return Sc(b, (c + f) % 7, d, "day");
        var h,
            i = [];
        for (h = 0; h < 7; h++) i[h] = Sc(b, (h + f) % 7, d, "day");
        return i;
    }
    function Vc(a, b) {
        return Tc(a, b, "months");
    }
    function Wc(a, b) {
        return Tc(a, b, "monthsShort");
    }
    function Xc(a, b, c) {
        return Uc(a, b, c, "weekdays");
    }
    function Yc(a, b, c) {
        return Uc(a, b, c, "weekdaysShort");
    }
    function Zc(a, b, c) {
        return Uc(a, b, c, "weekdaysMin");
    }
    function $c() {
        var a = this._data;
        return (
            (this._milliseconds = df(this._milliseconds)),
            (this._days = df(this._days)),
            (this._months = df(this._months)),
            (a.milliseconds = df(a.milliseconds)),
            (a.seconds = df(a.seconds)),
            (a.minutes = df(a.minutes)),
            (a.hours = df(a.hours)),
            (a.months = df(a.months)),
            (a.years = df(a.years)),
            this
        );
    }
    function _c(a, b, c, d) {
        var e = Sb(b, c);
        return (
            (a._milliseconds += d * e._milliseconds),
            (a._days += d * e._days),
            (a._months += d * e._months),
            a._bubble()
        );
    }
    function ad(a, b) {
        return _c(this, a, b, 1);
    }
    function bd(a, b) {
        return _c(this, a, b, -1);
    }
    function cd(a) {
        return a < 0 ? Math.floor(a) : Math.ceil(a);
    }
    function dd() {
        var a,
            b,
            c,
            d,
            e,
            f = this._milliseconds,
            g = this._days,
            h = this._months,
            i = this._data;
        return (
            (f >= 0 && g >= 0 && h >= 0) ||
                (f <= 0 && g <= 0 && h <= 0) ||
                ((f += 864e5 * cd(fd(h) + g)), (g = 0), (h = 0)),
            (i.milliseconds = f % 1e3),
            (a = t(f / 1e3)),
            (i.seconds = a % 60),
            (b = t(a / 60)),
            (i.minutes = b % 60),
            (c = t(b / 60)),
            (i.hours = c % 24),
            (g += t(c / 24)),
            (e = t(ed(g))),
            (h += e),
            (g -= cd(fd(e))),
            (d = t(h / 12)),
            (h %= 12),
            (i.days = g),
            (i.months = h),
            (i.years = d),
            this
        );
    }
    function ed(a) {
        return (4800 * a) / 146097;
    }
    function fd(a) {
        return (146097 * a) / 4800;
    }
    function gd(a) {
        if (!this.isValid()) return NaN;
        var b,
            c,
            d = this._milliseconds;
        if (((a = K(a)), "month" === a || "year" === a))
            return (
                (b = this._days + d / 864e5),
                (c = this._months + ed(b)),
                "month" === a ? c : c / 12
            );
        switch (((b = this._days + Math.round(fd(this._months))), a)) {
            case "week":
                return b / 7 + d / 6048e5;
            case "day":
                return b + d / 864e5;
            case "hour":
                return 24 * b + d / 36e5;
            case "minute":
                return 1440 * b + d / 6e4;
            case "second":
                return 86400 * b + d / 1e3;
            case "millisecond":
                return Math.floor(864e5 * b) + d;
            default:
                throw new Error("Unknown unit " + a);
        }
    }
    function hd() {
        return this.isValid()
            ? this._milliseconds +
                  864e5 * this._days +
                  (this._months % 12) * 2592e6 +
                  31536e6 * u(this._months / 12)
            : NaN;
    }
    function id(a) {
        return function () {
            return this.as(a);
        };
    }
    function jd(a) {
        return (a = K(a)), this.isValid() ? this[a + "s"]() : NaN;
    }
    function kd(a) {
        return function () {
            return this.isValid() ? this._data[a] : NaN;
        };
    }
    function ld() {
        return t(this.days() / 7);
    }
    function md(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d);
    }
    function nd(a, b, c) {
        var d = Sb(a).abs(),
            e = uf(d.as("s")),
            f = uf(d.as("m")),
            g = uf(d.as("h")),
            h = uf(d.as("d")),
            i = uf(d.as("M")),
            j = uf(d.as("y")),
            k = (e <= vf.ss && ["s", e]) ||
                (e < vf.s && ["ss", e]) ||
                (f <= 1 && ["m"]) ||
                (f < vf.m && ["mm", f]) ||
                (g <= 1 && ["h"]) ||
                (g < vf.h && ["hh", g]) ||
                (h <= 1 && ["d"]) ||
                (h < vf.d && ["dd", h]) ||
                (i <= 1 && ["M"]) ||
                (i < vf.M && ["MM", i]) ||
                (j <= 1 && ["y"]) || ["yy", j];
        return (k[2] = b), (k[3] = +a > 0), (k[4] = c), md.apply(null, k);
    }
    function od(a) {
        return void 0 === a ? uf : "function" == typeof a && ((uf = a), !0);
    }
    function pd(a, b) {
        return (
            void 0 !== vf[a] &&
            (void 0 === b
                ? vf[a]
                : ((vf[a] = b), "s" === a && (vf.ss = b - 1), !0))
        );
    }
    function qd(a) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var b = this.localeData(),
            c = nd(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c);
    }
    function rd() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var a,
            b,
            c,
            d = wf(this._milliseconds) / 1e3,
            e = wf(this._days),
            f = wf(this._months);
        (a = t(d / 60)),
            (b = t(a / 60)),
            (d %= 60),
            (a %= 60),
            (c = t(f / 12)),
            (f %= 12);
        var g = c,
            h = f,
            i = e,
            j = b,
            k = a,
            l = d,
            m = this.asSeconds();
        return m
            ? (m < 0 ? "-" : "") +
                  "P" +
                  (g ? g + "Y" : "") +
                  (h ? h + "M" : "") +
                  (i ? i + "D" : "") +
                  (j || k || l ? "T" : "") +
                  (j ? j + "H" : "") +
                  (k ? k + "M" : "") +
                  (l ? l + "S" : "")
            : "P0D";
    }
    var sd, td;
    td = Array.prototype.some
        ? Array.prototype.some
        : function (a) {
              for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
                  if (d in b && a.call(this, b[d], d, b)) return !0;
              return !1;
          };
    var ud = td,
        vd = (a.momentProperties = []),
        wd = !1,
        xd = {};
    (a.suppressDeprecationWarnings = !1), (a.deprecationHandler = null);
    var yd;
    yd = Object.keys
        ? Object.keys
        : function (a) {
              var b,
                  c = [];
              for (b in a) j(a, b) && c.push(b);
              return c;
          };
    var zd,
        Ad = yd,
        Bd = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
        },
        Cd = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
        },
        Dd = "Invalid date",
        Ed = "%d",
        Fd = /\d{1,2}/,
        Gd = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
        },
        Hd = {},
        Id = {},
        Jd =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Kd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Ld = {},
        Md = {},
        Nd = /\d/,
        Od = /\d\d/,
        Pd = /\d{3}/,
        Qd = /\d{4}/,
        Rd = /[+-]?\d{6}/,
        Sd = /\d\d?/,
        Td = /\d\d\d\d?/,
        Ud = /\d\d\d\d\d\d?/,
        Vd = /\d{1,3}/,
        Wd = /\d{1,4}/,
        Xd = /[+-]?\d{1,6}/,
        Yd = /\d+/,
        Zd = /[+-]?\d+/,
        $d = /Z|[+-]\d\d:?\d\d/gi,
        _d = /Z|[+-]\d\d(?::?\d\d)?/gi,
        ae = /[+-]?\d+(\.\d{1,3})?/,
        be =
            /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        ce = {},
        de = {},
        ee = 0,
        fe = 1,
        ge = 2,
        he = 3,
        ie = 4,
        je = 5,
        ke = 6,
        le = 7,
        me = 8;
    zd = Array.prototype.indexOf
        ? Array.prototype.indexOf
        : function (a) {
              var b;
              for (b = 0; b < this.length; ++b) if (this[b] === a) return b;
              return -1;
          };
    var ne = zd;
    U("M", ["MM", 2], "Mo", function () {
        return this.month() + 1;
    }),
        U("MMM", 0, 0, function (a) {
            return this.localeData().monthsShort(this, a);
        }),
        U("MMMM", 0, 0, function (a) {
            return this.localeData().months(this, a);
        }),
        J("month", "M"),
        M("month", 8),
        Z("M", Sd),
        Z("MM", Sd, Od),
        Z("MMM", function (a, b) {
            return b.monthsShortRegex(a);
        }),
        Z("MMMM", function (a, b) {
            return b.monthsRegex(a);
        }),
        ba(["M", "MM"], function (a, b) {
            b[fe] = u(a) - 1;
        }),
        ba(["MMM", "MMMM"], function (a, b, c, d) {
            var e = c._locale.monthsParse(a, d, c._strict);
            null != e ? (b[fe] = e) : (n(c).invalidMonth = a);
        });
    var oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        pe =
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
            ),
        qe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        re = be,
        se = be;
    U("Y", 0, 0, function () {
        var a = this.year();
        return a <= 9999 ? "" + a : "+" + a;
    }),
        U(0, ["YY", 2], 0, function () {
            return this.year() % 100;
        }),
        U(0, ["YYYY", 4], 0, "year"),
        U(0, ["YYYYY", 5], 0, "year"),
        U(0, ["YYYYYY", 6, !0], 0, "year"),
        J("year", "y"),
        M("year", 1),
        Z("Y", Zd),
        Z("YY", Sd, Od),
        Z("YYYY", Wd, Qd),
        Z("YYYYY", Xd, Rd),
        Z("YYYYYY", Xd, Rd),
        ba(["YYYYY", "YYYYYY"], ee),
        ba("YYYY", function (b, c) {
            c[ee] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b);
        }),
        ba("YY", function (b, c) {
            c[ee] = a.parseTwoDigitYear(b);
        }),
        ba("Y", function (a, b) {
            b[ee] = parseInt(a, 10);
        }),
        (a.parseTwoDigitYear = function (a) {
            return u(a) + (u(a) > 68 ? 1900 : 2e3);
        });
    var te = O("FullYear", !0);
    U("w", ["ww", 2], "wo", "week"),
        U("W", ["WW", 2], "Wo", "isoWeek"),
        J("week", "w"),
        J("isoWeek", "W"),
        M("week", 5),
        M("isoWeek", 5),
        Z("w", Sd),
        Z("ww", Sd, Od),
        Z("W", Sd),
        Z("WW", Sd, Od),
        ca(["w", "ww", "W", "WW"], function (a, b, c, d) {
            b[d.substr(0, 1)] = u(a);
        });
    var ue = { dow: 0, doy: 6 };
    U("d", 0, "do", "day"),
        U("dd", 0, 0, function (a) {
            return this.localeData().weekdaysMin(this, a);
        }),
        U("ddd", 0, 0, function (a) {
            return this.localeData().weekdaysShort(this, a);
        }),
        U("dddd", 0, 0, function (a) {
            return this.localeData().weekdays(this, a);
        }),
        U("e", 0, 0, "weekday"),
        U("E", 0, 0, "isoWeekday"),
        J("day", "d"),
        J("weekday", "e"),
        J("isoWeekday", "E"),
        M("day", 11),
        M("weekday", 11),
        M("isoWeekday", 11),
        Z("d", Sd),
        Z("e", Sd),
        Z("E", Sd),
        Z("dd", function (a, b) {
            return b.weekdaysMinRegex(a);
        }),
        Z("ddd", function (a, b) {
            return b.weekdaysShortRegex(a);
        }),
        Z("dddd", function (a, b) {
            return b.weekdaysRegex(a);
        }),
        ca(["dd", "ddd", "dddd"], function (a, b, c, d) {
            var e = c._locale.weekdaysParse(a, d, c._strict);
            null != e ? (b.d = e) : (n(c).invalidWeekday = a);
        }),
        ca(["d", "e", "E"], function (a, b, c, d) {
            b[d] = u(a);
        });
    var ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
            "_"
        ),
        we = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        ye = be,
        ze = be,
        Ae = be;
    U("H", ["HH", 2], 0, "hour"),
        U("h", ["hh", 2], 0, Ra),
        U("k", ["kk", 2], 0, Sa),
        U("hmm", 0, 0, function () {
            return "" + Ra.apply(this) + T(this.minutes(), 2);
        }),
        U("hmmss", 0, 0, function () {
            return (
                "" +
                Ra.apply(this) +
                T(this.minutes(), 2) +
                T(this.seconds(), 2)
            );
        }),
        U("Hmm", 0, 0, function () {
            return "" + this.hours() + T(this.minutes(), 2);
        }),
        U("Hmmss", 0, 0, function () {
            return (
                "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2)
            );
        }),
        Ta("a", !0),
        Ta("A", !1),
        J("hour", "h"),
        M("hour", 13),
        Z("a", Ua),
        Z("A", Ua),
        Z("H", Sd),
        Z("h", Sd),
        Z("k", Sd),
        Z("HH", Sd, Od),
        Z("hh", Sd, Od),
        Z("kk", Sd, Od),
        Z("hmm", Td),
        Z("hmmss", Ud),
        Z("Hmm", Td),
        Z("Hmmss", Ud),
        ba(["H", "HH"], he),
        ba(["k", "kk"], function (a, b, c) {
            var d = u(a);
            b[he] = 24 === d ? 0 : d;
        }),
        ba(["a", "A"], function (a, b, c) {
            (c._isPm = c._locale.isPM(a)), (c._meridiem = a);
        }),
        ba(["h", "hh"], function (a, b, c) {
            (b[he] = u(a)), (n(c).bigHour = !0);
        }),
        ba("hmm", function (a, b, c) {
            var d = a.length - 2;
            (b[he] = u(a.substr(0, d))),
                (b[ie] = u(a.substr(d))),
                (n(c).bigHour = !0);
        }),
        ba("hmmss", function (a, b, c) {
            var d = a.length - 4,
                e = a.length - 2;
            (b[he] = u(a.substr(0, d))),
                (b[ie] = u(a.substr(d, 2))),
                (b[je] = u(a.substr(e))),
                (n(c).bigHour = !0);
        }),
        ba("Hmm", function (a, b, c) {
            var d = a.length - 2;
            (b[he] = u(a.substr(0, d))), (b[ie] = u(a.substr(d)));
        }),
        ba("Hmmss", function (a, b, c) {
            var d = a.length - 4,
                e = a.length - 2;
            (b[he] = u(a.substr(0, d))),
                (b[ie] = u(a.substr(d, 2))),
                (b[je] = u(a.substr(e)));
        });
    var Be,
        Ce = /[ap]\.?m?\.?/i,
        De = O("Hours", !0),
        Ee = {
            calendar: Bd,
            longDateFormat: Cd,
            invalidDate: Dd,
            ordinal: Ed,
            dayOfMonthOrdinalParse: Fd,
            relativeTime: Gd,
            months: pe,
            monthsShort: qe,
            week: ue,
            weekdays: ve,
            weekdaysMin: xe,
            weekdaysShort: we,
            meridiemParse: Ce,
        },
        Fe = {},
        Ge = {},
        He =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Ie =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Je = /Z|[+-]\d\d(?::?\d\d)?/,
        Ke = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
        ],
        Le = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/],
        ],
        Me = /^\/?Date\((\-?\d+)/i,
        Ne =
            /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
    (a.createFromInputFallback = x(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function (a) {
            a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
        }
    )),
        (a.ISO_8601 = function () {}),
        (a.RFC_2822 = function () {});
    var Oe = x(
            "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
                var a = tb.apply(null, arguments);
                return this.isValid() && a.isValid()
                    ? a < this
                        ? this
                        : a
                    : p();
            }
        ),
        Pe = x(
            "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
                var a = tb.apply(null, arguments);
                return this.isValid() && a.isValid()
                    ? a > this
                        ? this
                        : a
                    : p();
            }
        ),
        Qe = function () {
            return Date.now ? Date.now() : +new Date();
        },
        Re = [
            "year",
            "quarter",
            "month",
            "week",
            "day",
            "hour",
            "minute",
            "second",
            "millisecond",
        ];
    Db("Z", ":"),
        Db("ZZ", ""),
        Z("Z", _d),
        Z("ZZ", _d),
        ba(["Z", "ZZ"], function (a, b, c) {
            (c._useUTC = !0), (c._tzm = Eb(_d, a));
        });
    var Se = /([\+\-]|\d\d)/gi;
    a.updateOffset = function () {};
    var Te = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Ue =
            /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    (Sb.fn = Ab.prototype), (Sb.invalid = zb);
    var Ve = Wb(1, "add"),
        We = Wb(-1, "subtract");
    (a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
        (a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
    var Xe = x(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function (a) {
            return void 0 === a ? this.localeData() : this.locale(a);
        }
    );
    U(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100;
    }),
        U(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100;
        }),
        Dc("gggg", "weekYear"),
        Dc("ggggg", "weekYear"),
        Dc("GGGG", "isoWeekYear"),
        Dc("GGGGG", "isoWeekYear"),
        J("weekYear", "gg"),
        J("isoWeekYear", "GG"),
        M("weekYear", 1),
        M("isoWeekYear", 1),
        Z("G", Zd),
        Z("g", Zd),
        Z("GG", Sd, Od),
        Z("gg", Sd, Od),
        Z("GGGG", Wd, Qd),
        Z("gggg", Wd, Qd),
        Z("GGGGG", Xd, Rd),
        Z("ggggg", Xd, Rd),
        ca(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
            b[d.substr(0, 2)] = u(a);
        }),
        ca(["gg", "GG"], function (b, c, d, e) {
            c[e] = a.parseTwoDigitYear(b);
        }),
        U("Q", 0, "Qo", "quarter"),
        J("quarter", "Q"),
        M("quarter", 7),
        Z("Q", Nd),
        ba("Q", function (a, b) {
            b[fe] = 3 * (u(a) - 1);
        }),
        U("D", ["DD", 2], "Do", "date"),
        J("date", "D"),
        M("date", 9),
        Z("D", Sd),
        Z("DD", Sd, Od),
        Z("Do", function (a, b) {
            return a
                ? b._dayOfMonthOrdinalParse || b._ordinalParse
                : b._dayOfMonthOrdinalParseLenient;
        }),
        ba(["D", "DD"], ge),
        ba("Do", function (a, b) {
            b[ge] = u(a.match(Sd)[0], 10);
        });
    var Ye = O("Date", !0);
    U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
        J("dayOfYear", "DDD"),
        M("dayOfYear", 4),
        Z("DDD", Vd),
        Z("DDDD", Pd),
        ba(["DDD", "DDDD"], function (a, b, c) {
            c._dayOfYear = u(a);
        }),
        U("m", ["mm", 2], 0, "minute"),
        J("minute", "m"),
        M("minute", 14),
        Z("m", Sd),
        Z("mm", Sd, Od),
        ba(["m", "mm"], ie);
    var Ze = O("Minutes", !1);
    U("s", ["ss", 2], 0, "second"),
        J("second", "s"),
        M("second", 15),
        Z("s", Sd),
        Z("ss", Sd, Od),
        ba(["s", "ss"], je);
    var $e = O("Seconds", !1);
    U("S", 0, 0, function () {
        return ~~(this.millisecond() / 100);
    }),
        U(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10);
        }),
        U(0, ["SSS", 3], 0, "millisecond"),
        U(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond();
        }),
        U(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond();
        }),
        U(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond();
        }),
        U(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond();
        }),
        U(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond();
        }),
        U(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond();
        }),
        J("millisecond", "ms"),
        M("millisecond", 16),
        Z("S", Vd, Nd),
        Z("SS", Vd, Od),
        Z("SSS", Vd, Pd);
    var _e;
    for (_e = "SSSS"; _e.length <= 9; _e += "S") Z(_e, Yd);
    for (_e = "S"; _e.length <= 9; _e += "S") ba(_e, Mc);
    var af = O("Milliseconds", !1);
    U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
    var bf = r.prototype;
    (bf.add = Ve),
        (bf.calendar = Zb),
        (bf.clone = $b),
        (bf.diff = fc),
        (bf.endOf = sc),
        (bf.format = kc),
        (bf.from = lc),
        (bf.fromNow = mc),
        (bf.to = nc),
        (bf.toNow = oc),
        (bf.get = R),
        (bf.invalidAt = Bc),
        (bf.isAfter = _b),
        (bf.isBefore = ac),
        (bf.isBetween = bc),
        (bf.isSame = cc),
        (bf.isSameOrAfter = dc),
        (bf.isSameOrBefore = ec),
        (bf.isValid = zc),
        (bf.lang = Xe),
        (bf.locale = pc),
        (bf.localeData = qc),
        (bf.max = Pe),
        (bf.min = Oe),
        (bf.parsingFlags = Ac),
        (bf.set = S),
        (bf.startOf = rc),
        (bf.subtract = We),
        (bf.toArray = wc),
        (bf.toObject = xc),
        (bf.toDate = vc),
        (bf.toISOString = ic),
        (bf.inspect = jc),
        (bf.toJSON = yc),
        (bf.toString = hc),
        (bf.unix = uc),
        (bf.valueOf = tc),
        (bf.creationData = Cc),
        (bf.year = te),
        (bf.isLeapYear = ra),
        (bf.weekYear = Ec),
        (bf.isoWeekYear = Fc),
        (bf.quarter = bf.quarters = Kc),
        (bf.month = ka),
        (bf.daysInMonth = la),
        (bf.week = bf.weeks = Ba),
        (bf.isoWeek = bf.isoWeeks = Ca),
        (bf.weeksInYear = Hc),
        (bf.isoWeeksInYear = Gc),
        (bf.date = Ye),
        (bf.day = bf.days = Ka),
        (bf.weekday = La),
        (bf.isoWeekday = Ma),
        (bf.dayOfYear = Lc),
        (bf.hour = bf.hours = De),
        (bf.minute = bf.minutes = Ze),
        (bf.second = bf.seconds = $e),
        (bf.millisecond = bf.milliseconds = af),
        (bf.utcOffset = Hb),
        (bf.utc = Jb),
        (bf.local = Kb),
        (bf.parseZone = Lb),
        (bf.hasAlignedHourOffset = Mb),
        (bf.isDST = Nb),
        (bf.isLocal = Pb),
        (bf.isUtcOffset = Qb),
        (bf.isUtc = Rb),
        (bf.isUTC = Rb),
        (bf.zoneAbbr = Nc),
        (bf.zoneName = Oc),
        (bf.dates = x("dates accessor is deprecated. Use date instead.", Ye)),
        (bf.months = x("months accessor is deprecated. Use month instead", ka)),
        (bf.years = x("years accessor is deprecated. Use year instead", te)),
        (bf.zone = x(
            "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
            Ib
        )),
        (bf.isDSTShifted = x(
            "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
            Ob
        ));
    var cf = C.prototype;
    (cf.calendar = D),
        (cf.longDateFormat = E),
        (cf.invalidDate = F),
        (cf.ordinal = G),
        (cf.preparse = Rc),
        (cf.postformat = Rc),
        (cf.relativeTime = H),
        (cf.pastFuture = I),
        (cf.set = A),
        (cf.months = fa),
        (cf.monthsShort = ga),
        (cf.monthsParse = ia),
        (cf.monthsRegex = na),
        (cf.monthsShortRegex = ma),
        (cf.week = ya),
        (cf.firstDayOfYear = Aa),
        (cf.firstDayOfWeek = za),
        (cf.weekdays = Fa),
        (cf.weekdaysMin = Ha),
        (cf.weekdaysShort = Ga),
        (cf.weekdaysParse = Ja),
        (cf.weekdaysRegex = Na),
        (cf.weekdaysShortRegex = Oa),
        (cf.weekdaysMinRegex = Pa),
        (cf.isPM = Va),
        (cf.meridiem = Wa),
        $a("en", {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (a) {
                var b = a % 10,
                    c =
                        1 === u((a % 100) / 10)
                            ? "th"
                            : 1 === b
                            ? "st"
                            : 2 === b
                            ? "nd"
                            : 3 === b
                            ? "rd"
                            : "th";
                return a + c;
            },
        }),
        (a.lang = x(
            "moment.lang is deprecated. Use moment.locale instead.",
            $a
        )),
        (a.langData = x(
            "moment.langData is deprecated. Use moment.localeData instead.",
            bb
        ));
    var df = Math.abs,
        ef = id("ms"),
        ff = id("s"),
        gf = id("m"),
        hf = id("h"),
        jf = id("d"),
        kf = id("w"),
        lf = id("M"),
        mf = id("y"),
        nf = kd("milliseconds"),
        of = kd("seconds"),
        pf = kd("minutes"),
        qf = kd("hours"),
        rf = kd("days"),
        sf = kd("months"),
        tf = kd("years"),
        uf = Math.round,
        vf = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
        wf = Math.abs,
        xf = Ab.prototype;
    return (
        (xf.isValid = yb),
        (xf.abs = $c),
        (xf.add = ad),
        (xf.subtract = bd),
        (xf.as = gd),
        (xf.asMilliseconds = ef),
        (xf.asSeconds = ff),
        (xf.asMinutes = gf),
        (xf.asHours = hf),
        (xf.asDays = jf),
        (xf.asWeeks = kf),
        (xf.asMonths = lf),
        (xf.asYears = mf),
        (xf.valueOf = hd),
        (xf._bubble = dd),
        (xf.get = jd),
        (xf.milliseconds = nf),
        (xf.seconds = of),
        (xf.minutes = pf),
        (xf.hours = qf),
        (xf.days = rf),
        (xf.weeks = ld),
        (xf.months = sf),
        (xf.years = tf),
        (xf.humanize = qd),
        (xf.toISOString = rd),
        (xf.toString = rd),
        (xf.toJSON = rd),
        (xf.locale = pc),
        (xf.localeData = qc),
        (xf.toIsoString = x(
            "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
            rd
        )),
        (xf.lang = Xe),
        U("X", 0, 0, "unix"),
        U("x", 0, 0, "valueOf"),
        Z("x", Zd),
        Z("X", ae),
        ba("X", function (a, b, c) {
            c._d = new Date(1e3 * parseFloat(a, 10));
        }),
        ba("x", function (a, b, c) {
            c._d = new Date(u(a));
        }),
        (a.version = "2.18.1"),
        b(tb),
        (a.fn = bf),
        (a.min = vb),
        (a.max = wb),
        (a.now = Qe),
        (a.utc = l),
        (a.unix = Pc),
        (a.months = Vc),
        (a.isDate = h),
        (a.locale = $a),
        (a.invalid = p),
        (a.duration = Sb),
        (a.isMoment = s),
        (a.weekdays = Xc),
        (a.parseZone = Qc),
        (a.localeData = bb),
        (a.isDuration = Bb),
        (a.monthsShort = Wc),
        (a.weekdaysMin = Zc),
        (a.defineLocale = _a),
        (a.updateLocale = ab),
        (a.locales = cb),
        (a.weekdaysShort = Yc),
        (a.normalizeUnits = K),
        (a.relativeTimeRounding = od),
        (a.relativeTimeThreshold = pd),
        (a.calendarFormat = Yb),
        (a.prototype = bf),
        a
    );
});

/*! jQuery Validation Plugin - v1.19.5 - 7/1/2022
 * https://jqueryvalidation.org/
 * Copyright (c) 2022 Jörn Zaefferer; Licensed MIT */
!(function (a) {
    "function" == typeof define && define.amd
        ? define(["jquery"], a)
        : "object" == typeof module && module.exports
        ? (module.exports = a(require("jquery")))
        : a(jQuery);
})(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length)
                return void (
                    b &&
                    b.debug &&
                    window.console &&
                    console.warn(
                        "Nothing selected, can't validate, returning nothing."
                    )
                );
            var c = a.data(this[0], "validator");
            return c
                ? c
                : (this.attr("novalidate", "novalidate"),
                  (c = new a.validator(b, this[0])),
                  a.data(this[0], "validator", c),
                  c.settings.onsubmit &&
                      (this.on("click.validate", ":submit", function (b) {
                          (c.submitButton = b.currentTarget),
                              a(this).hasClass("cancel") &&
                                  (c.cancelSubmit = !0),
                              void 0 !== a(this).attr("formnovalidate") &&
                                  (c.cancelSubmit = !0);
                      }),
                      this.on("submit.validate", function (b) {
                          function d() {
                              var d, e;
                              return (
                                  c.submitButton &&
                                      (c.settings.submitHandler ||
                                          c.formSubmitted) &&
                                      (d = a("<input type='hidden'/>")
                                          .attr("name", c.submitButton.name)
                                          .val(a(c.submitButton).val())
                                          .appendTo(c.currentForm)),
                                  !(
                                      c.settings.submitHandler &&
                                      !c.settings.debug
                                  ) ||
                                      ((e = c.settings.submitHandler.call(
                                          c,
                                          c.currentForm,
                                          b
                                      )),
                                      d && d.remove(),
                                      void 0 !== e && e)
                              );
                          }
                          return (
                              c.settings.debug && b.preventDefault(),
                              c.cancelSubmit
                                  ? ((c.cancelSubmit = !1), d())
                                  : c.form()
                                  ? c.pendingRequest
                                      ? ((c.formSubmitted = !0), !1)
                                      : d()
                                  : (c.focusInvalid(), !1)
                          );
                      })),
                  c);
        },
        valid: function () {
            var b, c, d;
            return (
                a(this[0]).is("form")
                    ? (b = this.validate().form())
                    : ((d = []),
                      (b = !0),
                      (c = a(this[0].form).validate()),
                      this.each(function () {
                          (b = c.element(this) && b),
                              b || (d = d.concat(c.errorList));
                      }),
                      (c.errorList = d)),
                b
            );
        },
        rules: function (b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j = this[0],
                k =
                    "undefined" != typeof this.attr("contenteditable") &&
                    "false" !== this.attr("contenteditable");
            if (
                null != j &&
                (!j.form &&
                    k &&
                    ((j.form = this.closest("form")[0]),
                    (j.name = this.attr("name"))),
                null != j.form)
            ) {
                if (b)
                    switch (
                        ((d = a.data(j.form, "validator").settings),
                        (e = d.rules),
                        (f = a.validator.staticRules(j)),
                        b)
                    ) {
                        case "add":
                            a.extend(f, a.validator.normalizeRule(c)),
                                delete f.messages,
                                (e[j.name] = f),
                                c.messages &&
                                    (d.messages[j.name] = a.extend(
                                        d.messages[j.name],
                                        c.messages
                                    ));
                            break;
                        case "remove":
                            return c
                                ? ((i = {}),
                                  a.each(c.split(/\s/), function (a, b) {
                                      (i[b] = f[b]), delete f[b];
                                  }),
                                  i)
                                : (delete e[j.name], f);
                    }
                return (
                    (g = a.validator.normalizeRules(
                        a.extend(
                            {},
                            a.validator.classRules(j),
                            a.validator.attributeRules(j),
                            a.validator.dataRules(j),
                            a.validator.staticRules(j)
                        ),
                        j
                    )),
                    g.required &&
                        ((h = g.required),
                        delete g.required,
                        (g = a.extend({ required: h }, g))),
                    g.remote &&
                        ((h = g.remote),
                        delete g.remote,
                        (g = a.extend(g, { remote: h }))),
                    g
                );
            }
        },
    });
    var b = function (a) {
        return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    };
    a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function (c) {
            return !b("" + a(c).val());
        },
        filled: function (c) {
            var d = a(c).val();
            return null !== d && !!b("" + d);
        },
        unchecked: function (b) {
            return !a(b).prop("checked");
        },
    }),
        (a.validator = function (b, c) {
            (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
                (this.currentForm = c),
                this.init();
        }),
        (a.validator.format = function (b, c) {
            return 1 === arguments.length
                ? function () {
                      var c = a.makeArray(arguments);
                      return c.unshift(b), a.validator.format.apply(this, c);
                  }
                : void 0 === c
                ? b
                : (arguments.length > 2 &&
                      c.constructor !== Array &&
                      (c = a.makeArray(arguments).slice(1)),
                  c.constructor !== Array && (c = [c]),
                  a.each(c, function (a, c) {
                      b = b.replace(
                          new RegExp("\\{" + a + "\\}", "g"),
                          function () {
                              return c;
                          }
                      );
                  }),
                  b);
        }),
        a.extend(a.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: a([]),
                errorLabelContainer: a([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (a) {
                    (this.lastActive = a),
                        this.settings.focusCleanup &&
                            (this.settings.unhighlight &&
                                this.settings.unhighlight.call(
                                    this,
                                    a,
                                    this.settings.errorClass,
                                    this.settings.validClass
                                ),
                            this.hideThese(this.errorsFor(a)));
                },
                onfocusout: function (a) {
                    this.checkable(a) ||
                        (!(a.name in this.submitted) && this.optional(a)) ||
                        this.element(a);
                },
                onkeyup: function (b, c) {
                    var d = [
                        16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225,
                    ];
                    (9 === c.which && "" === this.elementValue(b)) ||
                        a.inArray(c.keyCode, d) !== -1 ||
                        ((b.name in this.submitted || b.name in this.invalid) &&
                            this.element(b));
                },
                onclick: function (a) {
                    a.name in this.submitted
                        ? this.element(a)
                        : a.parentNode.name in this.submitted &&
                          this.element(a.parentNode);
                },
                highlight: function (b, c, d) {
                    "radio" === b.type
                        ? this.findByName(b.name).addClass(c).removeClass(d)
                        : a(b).addClass(c).removeClass(d);
                },
                unhighlight: function (b, c, d) {
                    "radio" === b.type
                        ? this.findByName(b.name).removeClass(c).addClass(d)
                        : a(b).removeClass(c).addClass(d);
                },
            },
            setDefaults: function (b) {
                a.extend(a.validator.defaults, b);
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: a.validator.format(
                    "Please enter no more than {0} characters."
                ),
                minlength: a.validator.format(
                    "Please enter at least {0} characters."
                ),
                rangelength: a.validator.format(
                    "Please enter a value between {0} and {1} characters long."
                ),
                range: a.validator.format(
                    "Please enter a value between {0} and {1}."
                ),
                max: a.validator.format(
                    "Please enter a value less than or equal to {0}."
                ),
                min: a.validator.format(
                    "Please enter a value greater than or equal to {0}."
                ),
                step: a.validator.format("Please enter a multiple of {0}."),
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function b(b) {
                        var c =
                            "undefined" !=
                                typeof a(this).attr("contenteditable") &&
                            "false" !== a(this).attr("contenteditable");
                        if (
                            (!this.form &&
                                c &&
                                ((this.form = a(this).closest("form")[0]),
                                (this.name = a(this).attr("name"))),
                            d === this.form)
                        ) {
                            var e = a.data(this.form, "validator"),
                                f = "on" + b.type.replace(/^validate/, ""),
                                g = e.settings;
                            g[f] &&
                                !a(this).is(g.ignore) &&
                                g[f].call(e, this, b);
                        }
                    }
                    (this.labelContainer = a(
                        this.settings.errorLabelContainer
                    )),
                        (this.errorContext =
                            (this.labelContainer.length &&
                                this.labelContainer) ||
                            a(this.currentForm)),
                        (this.containers = a(this.settings.errorContainer).add(
                            this.settings.errorLabelContainer
                        )),
                        (this.submitted = {}),
                        (this.valueCache = {}),
                        (this.pendingRequest = 0),
                        (this.pending = {}),
                        (this.invalid = {}),
                        this.reset();
                    var c,
                        d = this.currentForm,
                        e = (this.groups = {});
                    a.each(this.settings.groups, function (b, c) {
                        "string" == typeof c && (c = c.split(/\s/)),
                            a.each(c, function (a, c) {
                                e[c] = b;
                            });
                    }),
                        (c = this.settings.rules),
                        a.each(c, function (b, d) {
                            c[b] = a.validator.normalizeRule(d);
                        }),
                        a(this.currentForm)
                            .on(
                                "focusin.validate focusout.validate keyup.validate",
                                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                                b
                            )
                            .on(
                                "click.validate",
                                "select, option, [type='radio'], [type='checkbox']",
                                b
                            ),
                        this.settings.invalidHandler &&
                            a(this.currentForm).on(
                                "invalid-form.validate",
                                this.settings.invalidHandler
                            );
                },
                form: function () {
                    return (
                        this.checkForm(),
                        a.extend(this.submitted, this.errorMap),
                        (this.invalid = a.extend({}, this.errorMap)),
                        this.valid() ||
                            a(this.currentForm).triggerHandler("invalid-form", [
                                this,
                            ]),
                        this.showErrors(),
                        this.valid()
                    );
                },
                checkForm: function () {
                    this.prepareForm();
                    for (
                        var a = 0, b = (this.currentElements = this.elements());
                        b[a];
                        a++
                    )
                        this.check(b[a]);
                    return this.valid();
                },
                element: function (b) {
                    var c,
                        d,
                        e = this.clean(b),
                        f = this.validationTargetFor(e),
                        g = this,
                        h = !0;
                    return (
                        void 0 === f
                            ? delete this.invalid[e.name]
                            : (this.prepareElement(f),
                              (this.currentElements = a(f)),
                              (d = this.groups[f.name]),
                              d &&
                                  a.each(this.groups, function (a, b) {
                                      b === d &&
                                          a !== f.name &&
                                          ((e = g.validationTargetFor(
                                              g.clean(g.findByName(a))
                                          )),
                                          e &&
                                              e.name in g.invalid &&
                                              (g.currentElements.push(e),
                                              (h = g.check(e) && h)));
                                  }),
                              (c = this.check(f) !== !1),
                              (h = h && c),
                              c
                                  ? (this.invalid[f.name] = !1)
                                  : (this.invalid[f.name] = !0),
                              this.numberOfInvalids() ||
                                  (this.toHide = this.toHide.add(
                                      this.containers
                                  )),
                              this.showErrors(),
                              a(b).attr("aria-invalid", !c)),
                        h
                    );
                },
                showErrors: function (b) {
                    if (b) {
                        var c = this;
                        a.extend(this.errorMap, b),
                            (this.errorList = a.map(
                                this.errorMap,
                                function (a, b) {
                                    return {
                                        message: a,
                                        element: c.findByName(b)[0],
                                    };
                                }
                            )),
                            (this.successList = a.grep(
                                this.successList,
                                function (a) {
                                    return !(a.name in b);
                                }
                            ));
                    }
                    this.settings.showErrors
                        ? this.settings.showErrors.call(
                              this,
                              this.errorMap,
                              this.errorList
                          )
                        : this.defaultShowErrors();
                },
                resetForm: function () {
                    a.fn.resetForm && a(this.currentForm).resetForm(),
                        (this.invalid = {}),
                        (this.submitted = {}),
                        this.prepareForm(),
                        this.hideErrors();
                    var b = this.elements()
                        .removeData("previousValue")
                        .removeAttr("aria-invalid");
                    this.resetElements(b);
                },
                resetElements: function (a) {
                    var b;
                    if (this.settings.unhighlight)
                        for (b = 0; a[b]; b++)
                            this.settings.unhighlight.call(
                                this,
                                a[b],
                                this.settings.errorClass,
                                ""
                            ),
                                this.findByName(a[b].name).removeClass(
                                    this.settings.validClass
                                );
                    else
                        a.removeClass(this.settings.errorClass).removeClass(
                            this.settings.validClass
                        );
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid);
                },
                objectLength: function (a) {
                    var b,
                        c = 0;
                    for (b in a)
                        void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
                    return c;
                },
                hideErrors: function () {
                    this.hideThese(this.toHide);
                },
                hideThese: function (a) {
                    a.not(this.containers).text(""), this.addWrapper(a).hide();
                },
                valid: function () {
                    return 0 === this.size();
                },
                size: function () {
                    return this.errorList.length;
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid)
                        try {
                            a(
                                this.findLastActive() ||
                                    (this.errorList.length &&
                                        this.errorList[0].element) ||
                                    []
                            )
                                .filter(":visible")
                                .trigger("focus")
                                .trigger("focusin");
                        } catch (b) {}
                },
                findLastActive: function () {
                    var b = this.lastActive;
                    return (
                        b &&
                        1 ===
                            a.grep(this.errorList, function (a) {
                                return a.element.name === b.name;
                            }).length &&
                        b
                    );
                },
                elements: function () {
                    var b = this,
                        c = {};
                    return a(this.currentForm)
                        .find("input, select, textarea, [contenteditable]")
                        .not(":submit, :reset, :image, :disabled")
                        .not(this.settings.ignore)
                        .filter(function () {
                            var d = this.name || a(this).attr("name"),
                                e =
                                    "undefined" !=
                                        typeof a(this).attr(
                                            "contenteditable"
                                        ) &&
                                    "false" !== a(this).attr("contenteditable");
                            return (
                                !d &&
                                    b.settings.debug &&
                                    window.console &&
                                    console.error(
                                        "%o has no name assigned",
                                        this
                                    ),
                                e &&
                                    ((this.form = a(this).closest("form")[0]),
                                    (this.name = d)),
                                this.form === b.currentForm &&
                                    !(
                                        d in c ||
                                        !b.objectLength(a(this).rules())
                                    ) &&
                                    ((c[d] = !0), !0)
                            );
                        });
                },
                clean: function (b) {
                    return a(b)[0];
                },
                errors: function () {
                    var b = this.settings.errorClass.split(" ").join(".");
                    return a(
                        this.settings.errorElement + "." + b,
                        this.errorContext
                    );
                },
                resetInternals: function () {
                    (this.successList = []),
                        (this.errorList = []),
                        (this.errorMap = {}),
                        (this.toShow = a([])),
                        (this.toHide = a([]));
                },
                reset: function () {
                    this.resetInternals(), (this.currentElements = a([]));
                },
                prepareForm: function () {
                    this.reset(),
                        (this.toHide = this.errors().add(this.containers));
                },
                prepareElement: function (a) {
                    this.reset(), (this.toHide = this.errorsFor(a));
                },
                elementValue: function (b) {
                    var c,
                        d,
                        e = a(b),
                        f = b.type,
                        g =
                            "undefined" != typeof e.attr("contenteditable") &&
                            "false" !== e.attr("contenteditable");
                    return "radio" === f || "checkbox" === f
                        ? this.findByName(b.name).filter(":checked").val()
                        : "number" === f && "undefined" != typeof b.validity
                        ? b.validity.badInput
                            ? "NaN"
                            : e.val()
                        : ((c = g ? e.text() : e.val()),
                          "file" === f
                              ? "C:\\fakepath\\" === c.substr(0, 12)
                                  ? c.substr(12)
                                  : ((d = c.lastIndexOf("/")),
                                    d >= 0
                                        ? c.substr(d + 1)
                                        : ((d = c.lastIndexOf("\\")),
                                          d >= 0 ? c.substr(d + 1) : c))
                              : "string" == typeof c
                              ? c.replace(/\r/g, "")
                              : c);
                },
                check: function (b) {
                    b = this.validationTargetFor(this.clean(b));
                    var c,
                        d,
                        e,
                        f,
                        g = a(b).rules(),
                        h = a.map(g, function (a, b) {
                            return b;
                        }).length,
                        i = !1,
                        j = this.elementValue(b);
                    "function" == typeof g.normalizer
                        ? (f = g.normalizer)
                        : "function" == typeof this.settings.normalizer &&
                          (f = this.settings.normalizer),
                        f && ((j = f.call(b, j)), delete g.normalizer);
                    for (d in g) {
                        e = { method: d, parameters: g[d] };
                        try {
                            if (
                                ((c = a.validator.methods[d].call(
                                    this,
                                    j,
                                    b,
                                    e.parameters
                                )),
                                "dependency-mismatch" === c && 1 === h)
                            ) {
                                i = !0;
                                continue;
                            }
                            if (((i = !1), "pending" === c))
                                return void (this.toHide = this.toHide.not(
                                    this.errorsFor(b)
                                ));
                            if (!c) return this.formatAndAdd(b, e), !1;
                        } catch (k) {
                            throw (
                                (this.settings.debug &&
                                    window.console &&
                                    console.log(
                                        "Exception occurred when checking element " +
                                            b.id +
                                            ", check the '" +
                                            e.method +
                                            "' method.",
                                        k
                                    ),
                                k instanceof TypeError &&
                                    (k.message +=
                                        ".  Exception occurred when checking element " +
                                        b.id +
                                        ", check the '" +
                                        e.method +
                                        "' method."),
                                k)
                            );
                        }
                    }
                    if (!i)
                        return (
                            this.objectLength(g) && this.successList.push(b), !0
                        );
                },
                customDataMessage: function (b, c) {
                    return (
                        a(b).data(
                            "msg" +
                                c.charAt(0).toUpperCase() +
                                c.substring(1).toLowerCase()
                        ) || a(b).data("msg")
                    );
                },
                customMessage: function (a, b) {
                    var c = this.settings.messages[a];
                    return c && (c.constructor === String ? c : c[b]);
                },
                findDefined: function () {
                    for (var a = 0; a < arguments.length; a++)
                        if (void 0 !== arguments[a]) return arguments[a];
                },
                defaultMessage: function (b, c) {
                    "string" == typeof c && (c = { method: c });
                    var d = this.findDefined(
                            this.customMessage(b.name, c.method),
                            this.customDataMessage(b, c.method),
                            (!this.settings.ignoreTitle && b.title) || void 0,
                            a.validator.messages[c.method],
                            "<strong>Warning: No message defined for " +
                                b.name +
                                "</strong>"
                        ),
                        e = /\$?\{(\d+)\}/g;
                    return (
                        "function" == typeof d
                            ? (d = d.call(this, c.parameters, b))
                            : e.test(d) &&
                              (d = a.validator.format(
                                  d.replace(e, "{$1}"),
                                  c.parameters
                              )),
                        d
                    );
                },
                formatAndAdd: function (a, b) {
                    var c = this.defaultMessage(a, b);
                    this.errorList.push({
                        message: c,
                        element: a,
                        method: b.method,
                    }),
                        (this.errorMap[a.name] = c),
                        (this.submitted[a.name] = c);
                },
                addWrapper: function (a) {
                    return (
                        this.settings.wrapper &&
                            (a = a.add(a.parent(this.settings.wrapper))),
                        a
                    );
                },
                defaultShowErrors: function () {
                    var a, b, c;
                    for (a = 0; this.errorList[a]; a++)
                        (c = this.errorList[a]),
                            this.settings.highlight &&
                                this.settings.highlight.call(
                                    this,
                                    c.element,
                                    this.settings.errorClass,
                                    this.settings.validClass
                                ),
                            this.showLabel(c.element, c.message);
                    if (
                        (this.errorList.length &&
                            (this.toShow = this.toShow.add(this.containers)),
                        this.settings.success)
                    )
                        for (a = 0; this.successList[a]; a++)
                            this.showLabel(this.successList[a]);
                    if (this.settings.unhighlight)
                        for (a = 0, b = this.validElements(); b[a]; a++)
                            this.settings.unhighlight.call(
                                this,
                                b[a],
                                this.settings.errorClass,
                                this.settings.validClass
                            );
                    (this.toHide = this.toHide.not(this.toShow)),
                        this.hideErrors(),
                        this.addWrapper(this.toShow).show();
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function () {
                    return a(this.errorList).map(function () {
                        return this.element;
                    });
                },
                showLabel: function (b, c) {
                    var d,
                        e,
                        f,
                        g,
                        h = this.errorsFor(b),
                        i = this.idOrName(b),
                        j = a(b).attr("aria-describedby");
                    h.length
                        ? (h
                              .removeClass(this.settings.validClass)
                              .addClass(this.settings.errorClass),
                          h.html(c))
                        : ((h = a("<" + this.settings.errorElement + ">")
                              .attr("id", i + "-error")
                              .addClass(this.settings.errorClass)
                              .html(c || "")),
                          (d = h),
                          this.settings.wrapper &&
                              (d = h
                                  .hide()
                                  .show()
                                  .wrap("<" + this.settings.wrapper + "/>")
                                  .parent()),
                          this.labelContainer.length
                              ? this.labelContainer.append(d)
                              : this.settings.errorPlacement
                              ? this.settings.errorPlacement.call(this, d, a(b))
                              : d.insertAfter(b),
                          h.is("label")
                              ? h.attr("for", i)
                              : 0 ===
                                    h.parents(
                                        "label[for='" +
                                            this.escapeCssMeta(i) +
                                            "']"
                                    ).length &&
                                ((f = h.attr("id")),
                                j
                                    ? j.match(
                                          new RegExp(
                                              "\\b" +
                                                  this.escapeCssMeta(f) +
                                                  "\\b"
                                          )
                                      ) || (j += " " + f)
                                    : (j = f),
                                a(b).attr("aria-describedby", j),
                                (e = this.groups[b.name]),
                                e &&
                                    ((g = this),
                                    a.each(g.groups, function (b, c) {
                                        c === e &&
                                            a(
                                                "[name='" +
                                                    g.escapeCssMeta(b) +
                                                    "']",
                                                g.currentForm
                                            ).attr(
                                                "aria-describedby",
                                                h.attr("id")
                                            );
                                    })))),
                        !c &&
                            this.settings.success &&
                            (h.text(""),
                            "string" == typeof this.settings.success
                                ? h.addClass(this.settings.success)
                                : this.settings.success(h, b)),
                        (this.toShow = this.toShow.add(h));
                },
                errorsFor: function (b) {
                    var c = this.escapeCssMeta(this.idOrName(b)),
                        d = a(b).attr("aria-describedby"),
                        e = "label[for='" + c + "'], label[for='" + c + "'] *";
                    return (
                        d &&
                            (e =
                                e +
                                ", #" +
                                this.escapeCssMeta(d).replace(/\s+/g, ", #")),
                        this.errors().filter(e)
                    );
                },
                escapeCssMeta: function (a) {
                    return void 0 === a
                        ? ""
                        : a.replace(
                              /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,
                              "\\$1"
                          );
                },
                idOrName: function (a) {
                    return (
                        this.groups[a.name] ||
                        (this.checkable(a) ? a.name : a.id || a.name)
                    );
                },
                validationTargetFor: function (b) {
                    return (
                        this.checkable(b) && (b = this.findByName(b.name)),
                        a(b).not(this.settings.ignore)[0]
                    );
                },
                checkable: function (a) {
                    return /radio|checkbox/i.test(a.type);
                },
                findByName: function (b) {
                    return a(this.currentForm).find(
                        "[name='" + this.escapeCssMeta(b) + "']"
                    );
                },
                getLength: function (b, c) {
                    switch (c.nodeName.toLowerCase()) {
                        case "select":
                            return a("option:selected", c).length;
                        case "input":
                            if (this.checkable(c))
                                return this.findByName(c.name).filter(
                                    ":checked"
                                ).length;
                    }
                    return b.length;
                },
                depend: function (a, b) {
                    return (
                        !this.dependTypes[typeof a] ||
                        this.dependTypes[typeof a](a, b)
                    );
                },
                dependTypes: {
                    boolean: function (a) {
                        return a;
                    },
                    string: function (b, c) {
                        return !!a(b, c.form).length;
                    },
                    function: function (a, b) {
                        return a(b);
                    },
                },
                optional: function (b) {
                    var c = this.elementValue(b);
                    return (
                        !a.validator.methods.required.call(this, c, b) &&
                        "dependency-mismatch"
                    );
                },
                startRequest: function (b) {
                    this.pending[b.name] ||
                        (this.pendingRequest++,
                        a(b).addClass(this.settings.pendingClass),
                        (this.pending[b.name] = !0));
                },
                stopRequest: function (b, c) {
                    this.pendingRequest--,
                        this.pendingRequest < 0 && (this.pendingRequest = 0),
                        delete this.pending[b.name],
                        a(b).removeClass(this.settings.pendingClass),
                        c &&
                        0 === this.pendingRequest &&
                        this.formSubmitted &&
                        this.form() &&
                        0 === this.pendingRequest
                            ? (a(this.currentForm).trigger("submit"),
                              this.submitButton &&
                                  a(
                                      "input:hidden[name='" +
                                          this.submitButton.name +
                                          "']",
                                      this.currentForm
                                  ).remove(),
                              (this.formSubmitted = !1))
                            : !c &&
                              0 === this.pendingRequest &&
                              this.formSubmitted &&
                              (a(this.currentForm).triggerHandler(
                                  "invalid-form",
                                  [this]
                              ),
                              (this.formSubmitted = !1));
                },
                previousValue: function (b, c) {
                    return (
                        (c = ("string" == typeof c && c) || "remote"),
                        a.data(b, "previousValue") ||
                            a.data(b, "previousValue", {
                                old: null,
                                valid: !0,
                                message: this.defaultMessage(b, { method: c }),
                            })
                    );
                },
                destroy: function () {
                    this.resetForm(),
                        a(this.currentForm)
                            .off(".validate")
                            .removeData("validator")
                            .find(".validate-equalTo-blur")
                            .off(".validate-equalTo")
                            .removeClass("validate-equalTo-blur")
                            .find(".validate-lessThan-blur")
                            .off(".validate-lessThan")
                            .removeClass("validate-lessThan-blur")
                            .find(".validate-lessThanEqual-blur")
                            .off(".validate-lessThanEqual")
                            .removeClass("validate-lessThanEqual-blur")
                            .find(".validate-greaterThanEqual-blur")
                            .off(".validate-greaterThanEqual")
                            .removeClass("validate-greaterThanEqual-blur")
                            .find(".validate-greaterThan-blur")
                            .off(".validate-greaterThan")
                            .removeClass("validate-greaterThan-blur");
                },
            },
            classRuleSettings: {
                required: { required: !0 },
                email: { email: !0 },
                url: { url: !0 },
                date: { date: !0 },
                dateISO: { dateISO: !0 },
                number: { number: !0 },
                digits: { digits: !0 },
                creditcard: { creditcard: !0 },
            },
            addClassRules: function (b, c) {
                b.constructor === String
                    ? (this.classRuleSettings[b] = c)
                    : a.extend(this.classRuleSettings, b);
            },
            classRules: function (b) {
                var c = {},
                    d = a(b).attr("class");
                return (
                    d &&
                        a.each(d.split(" "), function () {
                            this in a.validator.classRuleSettings &&
                                a.extend(
                                    c,
                                    a.validator.classRuleSettings[this]
                                );
                        }),
                    c
                );
            },
            normalizeAttributeRule: function (a, b, c, d) {
                /min|max|step/.test(c) &&
                    (null === b || /number|range|text/.test(b)) &&
                    ((d = Number(d)), isNaN(d) && (d = void 0)),
                    d || 0 === d
                        ? (a[c] = d)
                        : b === c &&
                          "range" !== b &&
                          (a["date" === b ? "dateISO" : c] = !0);
            },
            attributeRules: function (b) {
                var c,
                    d,
                    e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods)
                    "required" === c
                        ? ((d = b.getAttribute(c)),
                          "" === d && (d = !0),
                          (d = !!d))
                        : (d = f.attr(c)),
                        this.normalizeAttributeRule(e, g, c, d);
                return (
                    e.maxlength &&
                        /-1|2147483647|524288/.test(e.maxlength) &&
                        delete e.maxlength,
                    e
                );
            },
            dataRules: function (b) {
                var c,
                    d,
                    e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods)
                    (d = f.data(
                        "rule" +
                            c.charAt(0).toUpperCase() +
                            c.substring(1).toLowerCase()
                    )),
                        "" === d && (d = !0),
                        this.normalizeAttributeRule(e, g, c, d);
                return e;
            },
            staticRules: function (b) {
                var c = {},
                    d = a.data(b.form, "validator");
                return (
                    d.settings.rules &&
                        (c =
                            a.validator.normalizeRule(
                                d.settings.rules[b.name]
                            ) || {}),
                    c
                );
            },
            normalizeRules: function (b, c) {
                return (
                    a.each(b, function (d, e) {
                        if (e === !1) return void delete b[d];
                        if (e.param || e.depends) {
                            var f = !0;
                            switch (typeof e.depends) {
                                case "string":
                                    f = !!a(e.depends, c.form).length;
                                    break;
                                case "function":
                                    f = e.depends.call(c, c);
                            }
                            f
                                ? (b[d] = void 0 === e.param || e.param)
                                : (a
                                      .data(c.form, "validator")
                                      .resetElements(a(c)),
                                  delete b[d]);
                        }
                    }),
                    a.each(b, function (a, d) {
                        b[a] =
                            "function" == typeof d && "normalizer" !== a
                                ? d(c)
                                : d;
                    }),
                    a.each(["minlength", "maxlength"], function () {
                        b[this] && (b[this] = Number(b[this]));
                    }),
                    a.each(["rangelength", "range"], function () {
                        var a;
                        b[this] &&
                            (Array.isArray(b[this])
                                ? (b[this] = [
                                      Number(b[this][0]),
                                      Number(b[this][1]),
                                  ])
                                : "string" == typeof b[this] &&
                                  ((a = b[this]
                                      .replace(/[\[\]]/g, "")
                                      .split(/[\s,]+/)),
                                  (b[this] = [Number(a[0]), Number(a[1])])));
                    }),
                    a.validator.autoCreateRanges &&
                        (null != b.min &&
                            null != b.max &&
                            ((b.range = [b.min, b.max]),
                            delete b.min,
                            delete b.max),
                        null != b.minlength &&
                            null != b.maxlength &&
                            ((b.rangelength = [b.minlength, b.maxlength]),
                            delete b.minlength,
                            delete b.maxlength)),
                    b
                );
            },
            normalizeRule: function (b) {
                if ("string" == typeof b) {
                    var c = {};
                    a.each(b.split(/\s/), function () {
                        c[this] = !0;
                    }),
                        (b = c);
                }
                return b;
            },
            addMethod: function (b, c, d) {
                (a.validator.methods[b] = c),
                    (a.validator.messages[b] =
                        void 0 !== d ? d : a.validator.messages[b]),
                    c.length < 3 &&
                        a.validator.addClassRules(
                            b,
                            a.validator.normalizeRule(b)
                        );
            },
            methods: {
                required: function (b, c, d) {
                    if (!this.depend(d, c)) return "dependency-mismatch";
                    if ("select" === c.nodeName.toLowerCase()) {
                        var e = a(c).val();
                        return e && e.length > 0;
                    }
                    return this.checkable(c)
                        ? this.getLength(b, c) > 0
                        : void 0 !== b && null !== b && b.length > 0;
                },
                email: function (a, b) {
                    return (
                        this.optional(b) ||
                        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                            a
                        )
                    );
                },
                url: function (a, b) {
                    return (
                        this.optional(b) ||
                        /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                            a
                        )
                    );
                },
                date: (function () {
                    var a = !1;
                    return function (b, c) {
                        return (
                            a ||
                                ((a = !0),
                                this.settings.debug &&
                                    window.console &&
                                    console.warn(
                                        "The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."
                                    )),
                            this.optional(c) ||
                                !/Invalid|NaN/.test(new Date(b).toString())
                        );
                    };
                })(),
                dateISO: function (a, b) {
                    return (
                        this.optional(b) ||
                        /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                            a
                        )
                    );
                },
                number: function (a, b) {
                    return (
                        this.optional(b) ||
                        /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
                    );
                },
                digits: function (a, b) {
                    return this.optional(b) || /^\d+$/.test(a);
                },
                minlength: function (a, b, c) {
                    var d = Array.isArray(a) ? a.length : this.getLength(a, b);
                    return this.optional(b) || d >= c;
                },
                maxlength: function (a, b, c) {
                    var d = Array.isArray(a) ? a.length : this.getLength(a, b);
                    return this.optional(b) || d <= c;
                },
                rangelength: function (a, b, c) {
                    var d = Array.isArray(a) ? a.length : this.getLength(a, b);
                    return this.optional(b) || (d >= c[0] && d <= c[1]);
                },
                min: function (a, b, c) {
                    return this.optional(b) || a >= c;
                },
                max: function (a, b, c) {
                    return this.optional(b) || a <= c;
                },
                range: function (a, b, c) {
                    return this.optional(b) || (a >= c[0] && a <= c[1]);
                },
                step: function (b, c, d) {
                    var e,
                        f = a(c).attr("type"),
                        g =
                            "Step attribute on input type " +
                            f +
                            " is not supported.",
                        h = ["text", "number", "range"],
                        i = new RegExp("\\b" + f + "\\b"),
                        j = f && !i.test(h.join()),
                        k = function (a) {
                            var b = ("" + a).match(/(?:\.(\d+))?$/);
                            return b && b[1] ? b[1].length : 0;
                        },
                        l = function (a) {
                            return Math.round(a * Math.pow(10, e));
                        },
                        m = !0;
                    if (j) throw new Error(g);
                    return (
                        (e = k(d)),
                        (k(b) > e || l(b) % l(d) !== 0) && (m = !1),
                        this.optional(c) || m
                    );
                },
                equalTo: function (b, c, d) {
                    var e = a(d);
                    return (
                        this.settings.onfocusout &&
                            e.not(".validate-equalTo-blur").length &&
                            e
                                .addClass("validate-equalTo-blur")
                                .on("blur.validate-equalTo", function () {
                                    a(c).valid();
                                }),
                        b === e.val()
                    );
                },
                remote: function (b, c, d, e) {
                    if (this.optional(c)) return "dependency-mismatch";
                    e = ("string" == typeof e && e) || "remote";
                    var f,
                        g,
                        h,
                        i = this.previousValue(c, e);
                    return (
                        this.settings.messages[c.name] ||
                            (this.settings.messages[c.name] = {}),
                        (i.originalMessage =
                            i.originalMessage ||
                            this.settings.messages[c.name][e]),
                        (this.settings.messages[c.name][e] = i.message),
                        (d = ("string" == typeof d && { url: d }) || d),
                        (h = a.param(a.extend({ data: b }, d.data))),
                        i.old === h
                            ? i.valid
                            : ((i.old = h),
                              (f = this),
                              this.startRequest(c),
                              (g = {}),
                              (g[c.name] = b),
                              a.ajax(
                                  a.extend(
                                      !0,
                                      {
                                          mode: "abort",
                                          port: "validate" + c.name,
                                          dataType: "json",
                                          data: g,
                                          context: f.currentForm,
                                          success: function (a) {
                                              var d,
                                                  g,
                                                  h,
                                                  j = a === !0 || "true" === a;
                                              (f.settings.messages[c.name][e] =
                                                  i.originalMessage),
                                                  j
                                                      ? ((h = f.formSubmitted),
                                                        f.resetInternals(),
                                                        (f.toHide =
                                                            f.errorsFor(c)),
                                                        (f.formSubmitted = h),
                                                        f.successList.push(c),
                                                        (f.invalid[c.name] =
                                                            !1),
                                                        f.showErrors())
                                                      : ((d = {}),
                                                        (g =
                                                            a ||
                                                            f.defaultMessage(
                                                                c,
                                                                {
                                                                    method: e,
                                                                    parameters:
                                                                        b,
                                                                }
                                                            )),
                                                        (d[c.name] = i.message =
                                                            g),
                                                        (f.invalid[c.name] =
                                                            !0),
                                                        f.showErrors(d)),
                                                  (i.valid = j),
                                                  f.stopRequest(c, j);
                                          },
                                      },
                                      d
                                  )
                              ),
                              "pending")
                    );
                },
            },
        });
    var c,
        d = {};
    return (
        a.ajaxPrefilter
            ? a.ajaxPrefilter(function (a, b, c) {
                  var e = a.port;
                  "abort" === a.mode && (d[e] && d[e].abort(), (d[e] = c));
              })
            : ((c = a.ajax),
              (a.ajax = function (b) {
                  var e = ("mode" in b ? b : a.ajaxSettings).mode,
                      f = ("port" in b ? b : a.ajaxSettings).port;
                  return "abort" === e
                      ? (d[f] && d[f].abort(),
                        (d[f] = c.apply(this, arguments)),
                        d[f])
                      : c.apply(this, arguments);
              })),
        a
    );
});

/* toaster file script */

!(function (e) {
    e(["jquery"], function (e) {
        return (function () {
            function t(e, t, n) {
                return g({
                    type: O.error,
                    iconClass: m().iconClasses.error,
                    message: e,
                    optionsOverride: n,
                    title: t,
                });
            }
            function n(t, n) {
                return (
                    t || (t = m()),
                    (v = e("#" + t.containerId)),
                    v.length ? v : (n && (v = d(t)), v)
                );
            }
            function o(e, t, n) {
                return g({
                    type: O.info,
                    iconClass: m().iconClasses.info,
                    message: e,
                    optionsOverride: n,
                    title: t,
                });
            }
            function s(e) {
                C = e;
            }
            function i(e, t, n) {
                return g({
                    type: O.success,
                    iconClass: m().iconClasses.success,
                    message: e,
                    optionsOverride: n,
                    title: t,
                });
            }
            function a(e, t, n) {
                return g({
                    type: O.warning,
                    iconClass: m().iconClasses.warning,
                    message: e,
                    optionsOverride: n,
                    title: t,
                });
            }
            function r(e, t) {
                var o = m();
                v || n(o), u(e, o, t) || l(o);
            }
            function c(t) {
                var o = m();
                return (
                    v || n(o),
                    t && 0 === e(":focus", t).length
                        ? void h(t)
                        : void (v.children().length && v.remove())
                );
            }
            function l(t) {
                for (var n = v.children(), o = n.length - 1; o >= 0; o--)
                    u(e(n[o]), t);
            }
            function u(t, n, o) {
                var s = !(!o || !o.force) && o.force;
                return (
                    !(!t || (!s && 0 !== e(":focus", t).length)) &&
                    (t[n.hideMethod]({
                        duration: n.hideDuration,
                        easing: n.hideEasing,
                        complete: function () {
                            h(t);
                        },
                    }),
                    !0)
                );
            }
            function d(t) {
                return (
                    (v = e("<div/>")
                        .attr("id", t.containerId)
                        .addClass(t.positionClass)),
                    v.appendTo(e(t.target)),
                    v
                );
            }
            function p() {
                return {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    closeMethod: !1,
                    closeDuration: !1,
                    closeEasing: !1,
                    closeOnHover: !0,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning",
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    escapeHtml: !1,
                    target: "body",
                    closeHtml: '<button type="button">&times;</button>',
                    closeClass: "toast-close-button",
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1,
                    progressClass: "toast-progress",
                    rtl: !1,
                };
            }
            function f(e) {
                C && C(e);
            }
            function g(t) {
                function o(e) {
                    return (
                        null == e && (e = ""),
                        e
                            .replace(/&/g, "&amp;")
                            .replace(/"/g, "&quot;")
                            .replace(/'/g, "&#39;")
                            .replace(/</g, "&lt;")
                            .replace(/>/g, "&gt;")
                    );
                }
                function s() {
                    c(), u(), d(), p(), g(), C(), l(), i();
                }
                function i() {
                    var e = "";
                    switch (t.iconClass) {
                        case "toast-success":
                        case "toast-info":
                            e = "polite";
                            break;
                        default:
                            e = "assertive";
                    }
                    I.attr("aria-live", e);
                }
                function a() {
                    E.closeOnHover && I.hover(H, D),
                        !E.onclick && E.tapToDismiss && I.click(b),
                        E.closeButton &&
                            j &&
                            j.click(function (e) {
                                e.stopPropagation
                                    ? e.stopPropagation()
                                    : void 0 !== e.cancelBubble &&
                                      e.cancelBubble !== !0 &&
                                      (e.cancelBubble = !0),
                                    E.onCloseClick && E.onCloseClick(e),
                                    b(!0);
                            }),
                        E.onclick &&
                            I.click(function (e) {
                                E.onclick(e), b();
                            });
                }
                function r() {
                    I.hide(),
                        I[E.showMethod]({
                            duration: E.showDuration,
                            easing: E.showEasing,
                            complete: E.onShown,
                        }),
                        E.timeOut > 0 &&
                            ((k = setTimeout(b, E.timeOut)),
                            (F.maxHideTime = parseFloat(E.timeOut)),
                            (F.hideEta = new Date().getTime() + F.maxHideTime),
                            E.progressBar &&
                                (F.intervalId = setInterval(x, 10)));
                }
                function c() {
                    t.iconClass && I.addClass(E.toastClass).addClass(y);
                }
                function l() {
                    E.newestOnTop ? v.prepend(I) : v.append(I);
                }
                function u() {
                    if (t.title) {
                        var e = t.title;
                        E.escapeHtml && (e = o(t.title)),
                            M.append(e).addClass(E.titleClass),
                            I.append(M);
                    }
                }
                function d() {
                    if (t.message) {
                        var e = t.message;
                        E.escapeHtml && (e = o(t.message)),
                            B.append(e).addClass(E.messageClass),
                            I.append(B);
                    }
                }
                function p() {
                    E.closeButton &&
                        (j.addClass(E.closeClass).attr("role", "button"),
                        I.prepend(j));
                }
                function g() {
                    E.progressBar &&
                        (q.addClass(E.progressClass), I.prepend(q));
                }
                function C() {
                    E.rtl && I.addClass("rtl");
                }
                function O(e, t) {
                    if (e.preventDuplicates) {
                        if (t.message === w) return !0;
                        w = t.message;
                    }
                    return !1;
                }
                function b(t) {
                    var n =
                            t && E.closeMethod !== !1
                                ? E.closeMethod
                                : E.hideMethod,
                        o =
                            t && E.closeDuration !== !1
                                ? E.closeDuration
                                : E.hideDuration,
                        s =
                            t && E.closeEasing !== !1
                                ? E.closeEasing
                                : E.hideEasing;
                    if (!e(":focus", I).length || t)
                        return (
                            clearTimeout(F.intervalId),
                            I[n]({
                                duration: o,
                                easing: s,
                                complete: function () {
                                    h(I),
                                        clearTimeout(k),
                                        E.onHidden &&
                                            "hidden" !== P.state &&
                                            E.onHidden(),
                                        (P.state = "hidden"),
                                        (P.endTime = new Date()),
                                        f(P);
                                },
                            })
                        );
                }
                function D() {
                    (E.timeOut > 0 || E.extendedTimeOut > 0) &&
                        ((k = setTimeout(b, E.extendedTimeOut)),
                        (F.maxHideTime = parseFloat(E.extendedTimeOut)),
                        (F.hideEta = new Date().getTime() + F.maxHideTime));
                }
                function H() {
                    clearTimeout(k),
                        (F.hideEta = 0),
                        I.stop(!0, !0)[E.showMethod]({
                            duration: E.showDuration,
                            easing: E.showEasing,
                        });
                }
                function x() {
                    var e =
                        ((F.hideEta - new Date().getTime()) / F.maxHideTime) *
                        100;
                    q.width(e + "%");
                }
                var E = m(),
                    y = t.iconClass || E.iconClass;
                if (
                    ("undefined" != typeof t.optionsOverride &&
                        ((E = e.extend(E, t.optionsOverride)),
                        (y = t.optionsOverride.iconClass || y)),
                    !O(E, t))
                ) {
                    T++, (v = n(E, !0));
                    var k = null,
                        I = e("<div/>"),
                        M = e("<div/>"),
                        B = e("<div/>"),
                        q = e("<div/>"),
                        j = e(E.closeHtml),
                        F = {
                            intervalId: null,
                            hideEta: null,
                            maxHideTime: null,
                        },
                        P = {
                            toastId: T,
                            state: "visible",
                            startTime: new Date(),
                            options: E,
                            map: t,
                        };
                    return (
                        s(),
                        r(),
                        a(),
                        f(P),
                        E.debug && console && console.log(P),
                        I
                    );
                }
            }
            function m() {
                return e.extend({}, p(), b.options);
            }
            function h(e) {
                v || (v = n()),
                    e.is(":visible") ||
                        (e.remove(),
                        (e = null),
                        0 === v.children().length &&
                            (v.remove(), (w = void 0)));
            }
            var v,
                C,
                w,
                T = 0,
                O = {
                    error: "error",
                    info: "info",
                    success: "success",
                    warning: "warning",
                },
                b = {
                    clear: r,
                    remove: c,
                    error: t,
                    getContainer: n,
                    info: o,
                    options: {},
                    subscribe: s,
                    success: i,
                    version: "2.1.4",
                    warning: a,
                };
            return b;
        })();
    });
})(
    "function" == typeof define && define.amd
        ? define
        : function (e, t) {
              "undefined" != typeof module && module.exports
                  ? (module.exports = t(require("jquery")))
                  : (window.toastr = t(window.jQuery));
          }
);
//# sourceMappingURL=toastr.js.map

/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
!(function (n) {
    "function" == typeof define && define.amd
        ? define(["jquery"], n)
        : "object" == typeof module && module.exports
        ? (module.exports = function (e, t) {
              return (
                  void 0 === t &&
                      (t =
                          "undefined" != typeof window
                              ? require("jquery")
                              : require("jquery")(e)),
                  n(t),
                  t
              );
          })
        : n(jQuery);
})(function (t) {
    var e,
        n,
        s,
        p,
        r,
        o,
        h,
        f,
        g,
        m,
        y,
        v,
        i,
        a,
        _,
        s =
            (((u =
                t && t.fn && t.fn.select2 && t.fn.select2.amd
                    ? t.fn.select2.amd
                    : u) &&
                u.requirejs) ||
                (u ? (n = u) : (u = {}),
                (g = {}),
                (m = {}),
                (y = {}),
                (v = {}),
                (i = Object.prototype.hasOwnProperty),
                (a = [].slice),
                (_ = /\.js$/),
                (h = function (e, t) {
                    var n,
                        s,
                        i = c(e),
                        r = i[0],
                        t = t[1];
                    return (
                        (e = i[1]),
                        r && (n = x((r = l(r, t)))),
                        r
                            ? (e =
                                  n && n.normalize
                                      ? n.normalize(
                                            e,
                                            ((s = t),
                                            function (e) {
                                                return l(e, s);
                                            })
                                        )
                                      : l(e, t))
                            : ((r = (i = c((e = l(e, t))))[0]),
                              (e = i[1]),
                              r && (n = x(r))),
                        { f: r ? r + "!" + e : e, n: e, pr: r, p: n }
                    );
                }),
                (f = {
                    require: function (e) {
                        return w(e);
                    },
                    exports: function (e) {
                        var t = g[e];
                        return void 0 !== t ? t : (g[e] = {});
                    },
                    module: function (e) {
                        return {
                            id: e,
                            uri: "",
                            exports: g[e],
                            config:
                                ((t = e),
                                function () {
                                    return (y && y.config && y.config[t]) || {};
                                }),
                        };
                        var t;
                    },
                }),
                (r = function (e, t, n, s) {
                    var i,
                        r,
                        o,
                        a,
                        l,
                        c = [],
                        u = typeof n,
                        d = A((s = s || e));
                    if ("undefined" == u || "function" == u) {
                        for (
                            t =
                                !t.length && n.length
                                    ? ["require", "exports", "module"]
                                    : t,
                                a = 0;
                            a < t.length;
                            a += 1
                        )
                            if ("require" === (r = (o = h(t[a], d)).f))
                                c[a] = f.require(e);
                            else if ("exports" === r)
                                (c[a] = f.exports(e)), (l = !0);
                            else if ("module" === r) i = c[a] = f.module(e);
                            else if (b(g, r) || b(m, r) || b(v, r)) c[a] = x(r);
                            else {
                                if (!o.p) throw new Error(e + " missing " + r);
                                o.p.load(
                                    o.n,
                                    w(s, !0),
                                    (function (t) {
                                        return function (e) {
                                            g[t] = e;
                                        };
                                    })(r),
                                    {}
                                ),
                                    (c[a] = g[r]);
                            }
                        (u = n ? n.apply(g[e], c) : void 0),
                            e &&
                                (i && i.exports !== p && i.exports !== g[e]
                                    ? (g[e] = i.exports)
                                    : (u === p && l) || (g[e] = u));
                    } else e && (g[e] = n);
                }),
                (e =
                    n =
                    o =
                        function (e, t, n, s, i) {
                            if ("string" == typeof e)
                                return f[e] ? f[e](t) : x(h(e, A(t)).f);
                            if (!e.splice) {
                                if (((y = e).deps && o(y.deps, y.callback), !t))
                                    return;
                                t.splice
                                    ? ((e = t), (t = n), (n = null))
                                    : (e = p);
                            }
                            return (
                                (t = t || function () {}),
                                "function" == typeof n && ((n = s), (s = i)),
                                s
                                    ? r(p, e, t, n)
                                    : setTimeout(function () {
                                          r(p, e, t, n);
                                      }, 4),
                                o
                            );
                        }),
                (o.config = function (e) {
                    return o(e);
                }),
                (e._defined = g),
                ((s = function (e, t, n) {
                    if ("string" != typeof e)
                        throw new Error(
                            "See almond README: incorrect module build, no module name"
                        );
                    t.splice || ((n = t), (t = [])),
                        b(g, e) || b(m, e) || (m[e] = [e, t, n]);
                }).amd = { jQuery: !0 }),
                (u.requirejs = e),
                (u.require = n),
                (u.define = s)),
            u.define("almond", function () {}),
            u.define("jquery", [], function () {
                var e = t || $;
                return (
                    null == e &&
                        console &&
                        console.error &&
                        console.error(
                            "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
                        ),
                    e
                );
            }),
            u.define("select2/utils", ["jquery"], function (r) {
                var s = {};
                function c(e) {
                    var t,
                        n = e.prototype,
                        s = [];
                    for (t in n)
                        "function" == typeof n[t] &&
                            "constructor" !== t &&
                            s.push(t);
                    return s;
                }
                (s.Extend = function (e, t) {
                    var n,
                        s = {}.hasOwnProperty;
                    function i() {
                        this.constructor = e;
                    }
                    for (n in t) s.call(t, n) && (e[n] = t[n]);
                    return (
                        (i.prototype = t.prototype),
                        (e.prototype = new i()),
                        (e.__super__ = t.prototype),
                        e
                    );
                }),
                    (s.Decorate = function (s, i) {
                        var e = c(i),
                            t = c(s);
                        function r() {
                            var e = Array.prototype.unshift,
                                t = i.prototype.constructor.length,
                                n = s.prototype.constructor;
                            0 < t &&
                                (e.call(arguments, s.prototype.constructor),
                                (n = i.prototype.constructor)),
                                n.apply(this, arguments);
                        }
                        (i.displayName = s.displayName),
                            (r.prototype = new (function () {
                                this.constructor = r;
                            })());
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            r.prototype[o] = s.prototype[o];
                        }
                        for (var a = 0; a < e.length; a++) {
                            var l = e[a];
                            r.prototype[l] = (function (e) {
                                var t = function () {};
                                e in r.prototype && (t = r.prototype[e]);
                                var n = i.prototype[e];
                                return function () {
                                    return (
                                        Array.prototype.unshift.call(
                                            arguments,
                                            t
                                        ),
                                        n.apply(this, arguments)
                                    );
                                };
                            })(l);
                        }
                        return r;
                    });
                function e() {
                    this.listeners = {};
                }
                (e.prototype.on = function (e, t) {
                    (this.listeners = this.listeners || {}),
                        e in this.listeners
                            ? this.listeners[e].push(t)
                            : (this.listeners[e] = [t]);
                }),
                    (e.prototype.trigger = function (e) {
                        var t = Array.prototype.slice,
                            n = t.call(arguments, 1);
                        (this.listeners = this.listeners || {}),
                            0 === (n = null == n ? [] : n).length && n.push({}),
                            (n[0]._type = e) in this.listeners &&
                                this.invoke(
                                    this.listeners[e],
                                    t.call(arguments, 1)
                                ),
                            "*" in this.listeners &&
                                this.invoke(this.listeners["*"], arguments);
                    }),
                    (e.prototype.invoke = function (e, t) {
                        for (var n = 0, s = e.length; n < s; n++)
                            e[n].apply(this, t);
                    }),
                    (s.Observable = e),
                    (s.generateChars = function (e) {
                        for (var t = "", n = 0; n < e; n++)
                            t += Math.floor(36 * Math.random()).toString(36);
                        return t;
                    }),
                    (s.bind = function (e, t) {
                        return function () {
                            e.apply(t, arguments);
                        };
                    }),
                    (s._convertData = function (e) {
                        for (var t in e) {
                            var n = t.split("-"),
                                s = e;
                            if (1 !== n.length) {
                                for (var i = 0; i < n.length; i++) {
                                    var r = n[i];
                                    (r =
                                        r.substring(0, 1).toLowerCase() +
                                        r.substring(1)) in s || (s[r] = {}),
                                        i == n.length - 1 && (s[r] = e[t]),
                                        (s = s[r]);
                                }
                                delete e[t];
                            }
                        }
                        return e;
                    }),
                    (s.hasScroll = function (e, t) {
                        var n = r(t),
                            s = t.style.overflowX,
                            i = t.style.overflowY;
                        return (
                            (s !== i || ("hidden" !== i && "visible" !== i)) &&
                            ("scroll" === s ||
                                "scroll" === i ||
                                n.innerHeight() < t.scrollHeight ||
                                n.innerWidth() < t.scrollWidth)
                        );
                    }),
                    (s.escapeMarkup = function (e) {
                        var t = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;",
                        };
                        return "string" != typeof e
                            ? e
                            : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                                  return t[e];
                              });
                    }),
                    (s.__cache = {});
                var n = 0;
                return (
                    (s.GetUniqueElementId = function (e) {
                        var t = e.getAttribute("data-select2-id");
                        return (
                            null != t ||
                                ((t = e.id
                                    ? "select2-data-" + e.id
                                    : "select2-data-" +
                                      (++n).toString() +
                                      "-" +
                                      s.generateChars(4)),
                                e.setAttribute("data-select2-id", t)),
                            t
                        );
                    }),
                    (s.StoreData = function (e, t, n) {
                        e = s.GetUniqueElementId(e);
                        s.__cache[e] || (s.__cache[e] = {}),
                            (s.__cache[e][t] = n);
                    }),
                    (s.GetData = function (e, t) {
                        var n = s.GetUniqueElementId(e);
                        return t
                            ? s.__cache[n] && null != s.__cache[n][t]
                                ? s.__cache[n][t]
                                : r(e).data(t)
                            : s.__cache[n];
                    }),
                    (s.RemoveData = function (e) {
                        var t = s.GetUniqueElementId(e);
                        null != s.__cache[t] && delete s.__cache[t],
                            e.removeAttribute("data-select2-id");
                    }),
                    (s.copyNonInternalCssClasses = function (e, t) {
                        var n = (n = e
                                .getAttribute("class")
                                .trim()
                                .split(/\s+/)).filter(function (e) {
                                return 0 === e.indexOf("select2-");
                            }),
                            t = (t = t
                                .getAttribute("class")
                                .trim()
                                .split(/\s+/)).filter(function (e) {
                                return 0 !== e.indexOf("select2-");
                            }),
                            t = n.concat(t);
                        e.setAttribute("class", t.join(" "));
                    }),
                    s
                );
            }),
            u.define("select2/results", ["jquery", "./utils"], function (d, p) {
                function s(e, t, n) {
                    (this.$element = e),
                        (this.data = n),
                        (this.options = t),
                        s.__super__.constructor.call(this);
                }
                return (
                    p.Extend(s, p.Observable),
                    (s.prototype.render = function () {
                        var e = d(
                            '<ul class="select2-results__options" role="listbox"></ul>'
                        );
                        return (
                            this.options.get("multiple") &&
                                e.attr("aria-multiselectable", "true"),
                            (this.$results = e)
                        );
                    }),
                    (s.prototype.clear = function () {
                        this.$results.empty();
                    }),
                    (s.prototype.displayMessage = function (e) {
                        var t = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var n = d(
                                '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
                            ),
                            s = this.options.get("translations").get(e.message);
                        n.append(t(s(e.args))),
                            (n[0].className += " select2-results__message"),
                            this.$results.append(n);
                    }),
                    (s.prototype.hideMessages = function () {
                        this.$results
                            .find(".select2-results__message")
                            .remove();
                    }),
                    (s.prototype.append = function (e) {
                        this.hideLoading();
                        var t = [];
                        if (null != e.results && 0 !== e.results.length) {
                            e.results = this.sort(e.results);
                            for (var n = 0; n < e.results.length; n++) {
                                var s = e.results[n],
                                    s = this.option(s);
                                t.push(s);
                            }
                            this.$results.append(t);
                        } else
                            0 === this.$results.children().length &&
                                this.trigger("results:message", {
                                    message: "noResults",
                                });
                    }),
                    (s.prototype.position = function (e, t) {
                        t.find(".select2-results").append(e);
                    }),
                    (s.prototype.sort = function (e) {
                        return this.options.get("sorter")(e);
                    }),
                    (s.prototype.highlightFirstItem = function () {
                        var e = this.$results.find(
                                ".select2-results__option--selectable"
                            ),
                            t = e.filter(".select2-results__option--selected");
                        (0 < t.length ? t : e).first().trigger("mouseenter"),
                            this.ensureHighlightVisible();
                    }),
                    (s.prototype.setClasses = function () {
                        var t = this;
                        this.data.current(function (e) {
                            var s = e.map(function (e) {
                                return e.id.toString();
                            });
                            t.$results
                                .find(".select2-results__option--selectable")
                                .each(function () {
                                    var e = d(this),
                                        t = p.GetData(this, "data"),
                                        n = "" + t.id;
                                    (null != t.element && t.element.selected) ||
                                    (null == t.element && -1 < s.indexOf(n))
                                        ? (this.classList.add(
                                              "select2-results__option--selected"
                                          ),
                                          e.attr("aria-selected", "true"))
                                        : (this.classList.remove(
                                              "select2-results__option--selected"
                                          ),
                                          e.attr("aria-selected", "false"));
                                });
                        });
                    }),
                    (s.prototype.showLoading = function (e) {
                        this.hideLoading();
                        (e = {
                            disabled: !0,
                            loading: !0,
                            text: this.options
                                .get("translations")
                                .get("searching")(e),
                        }),
                            (e = this.option(e));
                        (e.className += " loading-results"),
                            this.$results.prepend(e);
                    }),
                    (s.prototype.hideLoading = function () {
                        this.$results.find(".loading-results").remove();
                    }),
                    (s.prototype.option = function (e) {
                        var t = document.createElement("li");
                        t.classList.add("select2-results__option"),
                            t.classList.add(
                                "select2-results__option--selectable"
                            );
                        var n,
                            s = { role: "option" },
                            i =
                                window.Element.prototype.matches ||
                                window.Element.prototype.msMatchesSelector ||
                                window.Element.prototype.webkitMatchesSelector;
                        for (n in (((null != e.element &&
                            i.call(e.element, ":disabled")) ||
                            (null == e.element && e.disabled)) &&
                            ((s["aria-disabled"] = "true"),
                            t.classList.remove(
                                "select2-results__option--selectable"
                            ),
                            t.classList.add(
                                "select2-results__option--disabled"
                            )),
                        null == e.id &&
                            t.classList.remove(
                                "select2-results__option--selectable"
                            ),
                        null != e._resultId && (t.id = e._resultId),
                        e.title && (t.title = e.title),
                        e.children &&
                            ((s.role = "group"),
                            (s["aria-label"] = e.text),
                            t.classList.remove(
                                "select2-results__option--selectable"
                            ),
                            t.classList.add("select2-results__option--group")),
                        s)) {
                            var r = s[n];
                            t.setAttribute(n, r);
                        }
                        if (e.children) {
                            var o = d(t),
                                a = document.createElement("strong");
                            (a.className = "select2-results__group"),
                                this.template(e, a);
                            for (
                                var l = [], c = 0;
                                c < e.children.length;
                                c++
                            ) {
                                var u = e.children[c],
                                    u = this.option(u);
                                l.push(u);
                            }
                            i = d("<ul></ul>", {
                                class: "select2-results__options select2-results__options--nested",
                                role: "none",
                            });
                            i.append(l), o.append(a), o.append(i);
                        } else this.template(e, t);
                        return p.StoreData(t, "data", e), t;
                    }),
                    (s.prototype.bind = function (t, e) {
                        var i = this,
                            n = t.id + "-results";
                        this.$results.attr("id", n),
                            t.on("results:all", function (e) {
                                i.clear(),
                                    i.append(e.data),
                                    t.isOpen() &&
                                        (i.setClasses(),
                                        i.highlightFirstItem());
                            }),
                            t.on("results:append", function (e) {
                                i.append(e.data), t.isOpen() && i.setClasses();
                            }),
                            t.on("query", function (e) {
                                i.hideMessages(), i.showLoading(e);
                            }),
                            t.on("select", function () {
                                t.isOpen() &&
                                    (i.setClasses(),
                                    i.options.get("scrollAfterSelect") &&
                                        i.highlightFirstItem());
                            }),
                            t.on("unselect", function () {
                                t.isOpen() &&
                                    (i.setClasses(),
                                    i.options.get("scrollAfterSelect") &&
                                        i.highlightFirstItem());
                            }),
                            t.on("open", function () {
                                i.$results.attr("aria-expanded", "true"),
                                    i.$results.attr("aria-hidden", "false"),
                                    i.setClasses(),
                                    i.ensureHighlightVisible();
                            }),
                            t.on("close", function () {
                                i.$results.attr("aria-expanded", "false"),
                                    i.$results.attr("aria-hidden", "true"),
                                    i.$results.removeAttr(
                                        "aria-activedescendant"
                                    );
                            }),
                            t.on("results:toggle", function () {
                                var e = i.getHighlightedResults();
                                0 !== e.length && e.trigger("mouseup");
                            }),
                            t.on("results:select", function () {
                                var e,
                                    t = i.getHighlightedResults();
                                0 !== t.length &&
                                    ((e = p.GetData(t[0], "data")),
                                    t.hasClass(
                                        "select2-results__option--selected"
                                    )
                                        ? i.trigger("close", {})
                                        : i.trigger("select", { data: e }));
                            }),
                            t.on("results:previous", function () {
                                var e,
                                    t = i.getHighlightedResults(),
                                    n = i.$results.find(
                                        ".select2-results__option--selectable"
                                    ),
                                    s = n.index(t);
                                s <= 0 ||
                                    ((e = s - 1),
                                    0 === t.length && (e = 0),
                                    (s = n.eq(e)).trigger("mouseenter"),
                                    (t = i.$results.offset().top),
                                    (n = s.offset().top),
                                    (s = i.$results.scrollTop() + (n - t)),
                                    0 === e
                                        ? i.$results.scrollTop(0)
                                        : n - t < 0 && i.$results.scrollTop(s));
                            }),
                            t.on("results:next", function () {
                                var e,
                                    t = i.getHighlightedResults(),
                                    n = i.$results.find(
                                        ".select2-results__option--selectable"
                                    ),
                                    s = n.index(t) + 1;
                                s >= n.length ||
                                    ((e = n.eq(s)).trigger("mouseenter"),
                                    (t =
                                        i.$results.offset().top +
                                        i.$results.outerHeight(!1)),
                                    (n = e.offset().top + e.outerHeight(!1)),
                                    (e = i.$results.scrollTop() + n - t),
                                    0 === s
                                        ? i.$results.scrollTop(0)
                                        : t < n && i.$results.scrollTop(e));
                            }),
                            t.on("results:focus", function (e) {
                                e.element[0].classList.add(
                                    "select2-results__option--highlighted"
                                ),
                                    e.element[0].setAttribute(
                                        "aria-selected",
                                        "true"
                                    );
                            }),
                            t.on("results:message", function (e) {
                                i.displayMessage(e);
                            }),
                            d.fn.mousewheel &&
                                this.$results.on("mousewheel", function (e) {
                                    var t = i.$results.scrollTop(),
                                        n =
                                            i.$results.get(0).scrollHeight -
                                            t +
                                            e.deltaY,
                                        t = 0 < e.deltaY && t - e.deltaY <= 0,
                                        n =
                                            e.deltaY < 0 &&
                                            n <= i.$results.height();
                                    t
                                        ? (i.$results.scrollTop(0),
                                          e.preventDefault(),
                                          e.stopPropagation())
                                        : n &&
                                          (i.$results.scrollTop(
                                              i.$results.get(0).scrollHeight -
                                                  i.$results.height()
                                          ),
                                          e.preventDefault(),
                                          e.stopPropagation());
                                }),
                            this.$results.on(
                                "mouseup",
                                ".select2-results__option--selectable",
                                function (e) {
                                    var t = d(this),
                                        n = p.GetData(this, "data");
                                    t.hasClass(
                                        "select2-results__option--selected"
                                    )
                                        ? i.options.get("multiple")
                                            ? i.trigger("unselect", {
                                                  originalEvent: e,
                                                  data: n,
                                              })
                                            : i.trigger("close", {})
                                        : i.trigger("select", {
                                              originalEvent: e,
                                              data: n,
                                          });
                                }
                            ),
                            this.$results.on(
                                "mouseenter",
                                ".select2-results__option--selectable",
                                function (e) {
                                    var t = p.GetData(this, "data");
                                    i
                                        .getHighlightedResults()
                                        .removeClass(
                                            "select2-results__option--highlighted"
                                        )
                                        .attr("aria-selected", "false"),
                                        i.trigger("results:focus", {
                                            data: t,
                                            element: d(this),
                                        });
                                }
                            );
                    }),
                    (s.prototype.getHighlightedResults = function () {
                        return this.$results.find(
                            ".select2-results__option--highlighted"
                        );
                    }),
                    (s.prototype.destroy = function () {
                        this.$results.remove();
                    }),
                    (s.prototype.ensureHighlightVisible = function () {
                        var e,
                            t,
                            n,
                            s,
                            i = this.getHighlightedResults();
                        0 !== i.length &&
                            ((e = this.$results
                                .find(".select2-results__option--selectable")
                                .index(i)),
                            (s = this.$results.offset().top),
                            (t = i.offset().top),
                            (n = this.$results.scrollTop() + (t - s)),
                            (s = t - s),
                            (n -= 2 * i.outerHeight(!1)),
                            e <= 2
                                ? this.$results.scrollTop(0)
                                : (s > this.$results.outerHeight() || s < 0) &&
                                  this.$results.scrollTop(n));
                    }),
                    (s.prototype.template = function (e, t) {
                        var n = this.options.get("templateResult"),
                            s = this.options.get("escapeMarkup"),
                            e = n(e, t);
                        null == e
                            ? (t.style.display = "none")
                            : "string" == typeof e
                            ? (t.innerHTML = s(e))
                            : d(t).append(e);
                    }),
                    s
                );
            }),
            u.define("select2/keys", [], function () {
                return {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
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
                    DELETE: 46,
                };
            }),
            u.define(
                "select2/selection/base",
                ["jquery", "../utils", "../keys"],
                function (n, s, i) {
                    function r(e, t) {
                        (this.$element = e),
                            (this.options = t),
                            r.__super__.constructor.call(this);
                    }
                    return (
                        s.Extend(r, s.Observable),
                        (r.prototype.render = function () {
                            var e = n(
                                '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                            );
                            return (
                                (this._tabindex = 0),
                                null !=
                                s.GetData(this.$element[0], "old-tabindex")
                                    ? (this._tabindex = s.GetData(
                                          this.$element[0],
                                          "old-tabindex"
                                      ))
                                    : null != this.$element.attr("tabindex") &&
                                      (this._tabindex =
                                          this.$element.attr("tabindex")),
                                e.attr("title", this.$element.attr("title")),
                                e.attr("tabindex", this._tabindex),
                                e.attr("aria-disabled", "false"),
                                (this.$selection = e)
                            );
                        }),
                        (r.prototype.bind = function (e, t) {
                            var n = this,
                                s = e.id + "-results";
                            (this.container = e),
                                this.$selection.on("focus", function (e) {
                                    n.trigger("focus", e);
                                }),
                                this.$selection.on("blur", function (e) {
                                    n._handleBlur(e);
                                }),
                                this.$selection.on("keydown", function (e) {
                                    n.trigger("keypress", e),
                                        e.which === i.SPACE &&
                                            e.preventDefault();
                                }),
                                e.on("results:focus", function (e) {
                                    n.$selection.attr(
                                        "aria-activedescendant",
                                        e.data._resultId
                                    );
                                }),
                                e.on("selection:update", function (e) {
                                    n.update(e.data);
                                }),
                                e.on("open", function () {
                                    n.$selection.attr("aria-expanded", "true"),
                                        n.$selection.attr("aria-owns", s),
                                        n._attachCloseHandler(e);
                                }),
                                e.on("close", function () {
                                    n.$selection.attr("aria-expanded", "false"),
                                        n.$selection.removeAttr(
                                            "aria-activedescendant"
                                        ),
                                        n.$selection.removeAttr("aria-owns"),
                                        n.$selection.trigger("focus"),
                                        n._detachCloseHandler(e);
                                }),
                                e.on("enable", function () {
                                    n.$selection.attr("tabindex", n._tabindex),
                                        n.$selection.attr(
                                            "aria-disabled",
                                            "false"
                                        );
                                }),
                                e.on("disable", function () {
                                    n.$selection.attr("tabindex", "-1"),
                                        n.$selection.attr(
                                            "aria-disabled",
                                            "true"
                                        );
                                });
                        }),
                        (r.prototype._handleBlur = function (e) {
                            var t = this;
                            window.setTimeout(function () {
                                document.activeElement == t.$selection[0] ||
                                    n.contains(
                                        t.$selection[0],
                                        document.activeElement
                                    ) ||
                                    t.trigger("blur", e);
                            }, 1);
                        }),
                        (r.prototype._attachCloseHandler = function (e) {
                            n(document.body).on(
                                "mousedown.select2." + e.id,
                                function (e) {
                                    var t = n(e.target).closest(".select2");
                                    n(".select2.select2-container--open").each(
                                        function () {
                                            this != t[0] &&
                                                s
                                                    .GetData(this, "element")
                                                    .select2("close");
                                        }
                                    );
                                }
                            );
                        }),
                        (r.prototype._detachCloseHandler = function (e) {
                            n(document.body).off("mousedown.select2." + e.id);
                        }),
                        (r.prototype.position = function (e, t) {
                            t.find(".selection").append(e);
                        }),
                        (r.prototype.destroy = function () {
                            this._detachCloseHandler(this.container);
                        }),
                        (r.prototype.update = function (e) {
                            throw new Error(
                                "The `update` method must be defined in child classes."
                            );
                        }),
                        (r.prototype.isEnabled = function () {
                            return !this.isDisabled();
                        }),
                        (r.prototype.isDisabled = function () {
                            return this.options.get("disabled");
                        }),
                        r
                    );
                }
            ),
            u.define(
                "select2/selection/single",
                ["jquery", "./base", "../utils", "../keys"],
                function (e, t, n, s) {
                    function i() {
                        i.__super__.constructor.apply(this, arguments);
                    }
                    return (
                        n.Extend(i, t),
                        (i.prototype.render = function () {
                            var e = i.__super__.render.call(this);
                            return (
                                e[0].classList.add("select2-selection--single"),
                                e.html(
                                    '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                                ),
                                e
                            );
                        }),
                        (i.prototype.bind = function (t, e) {
                            var n = this;
                            i.__super__.bind.apply(this, arguments);
                            var s = t.id + "-container";
                            this.$selection
                                .find(".select2-selection__rendered")
                                .attr("id", s)
                                .attr("role", "textbox")
                                .attr("aria-readonly", "true"),
                                this.$selection.attr("aria-labelledby", s),
                                this.$selection.attr("aria-controls", s),
                                this.$selection.on("mousedown", function (e) {
                                    1 === e.which &&
                                        n.trigger("toggle", {
                                            originalEvent: e,
                                        });
                                }),
                                this.$selection.on("focus", function (e) {}),
                                this.$selection.on("blur", function (e) {}),
                                t.on("focus", function (e) {
                                    t.isOpen() || n.$selection.trigger("focus");
                                });
                        }),
                        (i.prototype.clear = function () {
                            var e = this.$selection.find(
                                ".select2-selection__rendered"
                            );
                            e.empty(), e.removeAttr("title");
                        }),
                        (i.prototype.display = function (e, t) {
                            var n = this.options.get("templateSelection");
                            return this.options.get("escapeMarkup")(n(e, t));
                        }),
                        (i.prototype.selectionContainer = function () {
                            return e("<span></span>");
                        }),
                        (i.prototype.update = function (e) {
                            var t, n;
                            0 !== e.length
                                ? ((n = e[0]),
                                  (t = this.$selection.find(
                                      ".select2-selection__rendered"
                                  )),
                                  (e = this.display(n, t)),
                                  t.empty().append(e),
                                  (n = n.title || n.text)
                                      ? t.attr("title", n)
                                      : t.removeAttr("title"))
                                : this.clear();
                        }),
                        i
                    );
                }
            ),
            u.define(
                "select2/selection/multiple",
                ["jquery", "./base", "../utils"],
                function (i, e, c) {
                    function r(e, t) {
                        r.__super__.constructor.apply(this, arguments);
                    }
                    return (
                        c.Extend(r, e),
                        (r.prototype.render = function () {
                            var e = r.__super__.render.call(this);
                            return (
                                e[0].classList.add(
                                    "select2-selection--multiple"
                                ),
                                e.html(
                                    '<ul class="select2-selection__rendered"></ul>'
                                ),
                                e
                            );
                        }),
                        (r.prototype.bind = function (e, t) {
                            var n = this;
                            r.__super__.bind.apply(this, arguments);
                            var s = e.id + "-container";
                            this.$selection
                                .find(".select2-selection__rendered")
                                .attr("id", s),
                                this.$selection.on("click", function (e) {
                                    n.trigger("toggle", { originalEvent: e });
                                }),
                                this.$selection.on(
                                    "click",
                                    ".select2-selection__choice__remove",
                                    function (e) {
                                        var t;
                                        n.isDisabled() ||
                                            ((t = i(this).parent()),
                                            (t = c.GetData(t[0], "data")),
                                            n.trigger("unselect", {
                                                originalEvent: e,
                                                data: t,
                                            }));
                                    }
                                ),
                                this.$selection.on(
                                    "keydown",
                                    ".select2-selection__choice__remove",
                                    function (e) {
                                        n.isDisabled() || e.stopPropagation();
                                    }
                                );
                        }),
                        (r.prototype.clear = function () {
                            var e = this.$selection.find(
                                ".select2-selection__rendered"
                            );
                            e.empty(), e.removeAttr("title");
                        }),
                        (r.prototype.display = function (e, t) {
                            var n = this.options.get("templateSelection");
                            return this.options.get("escapeMarkup")(n(e, t));
                        }),
                        (r.prototype.selectionContainer = function () {
                            return i(
                                '<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>'
                            );
                        }),
                        (r.prototype.update = function (e) {
                            if ((this.clear(), 0 !== e.length)) {
                                for (
                                    var t = [],
                                        n =
                                            this.$selection
                                                .find(
                                                    ".select2-selection__rendered"
                                                )
                                                .attr("id") + "-choice-",
                                        s = 0;
                                    s < e.length;
                                    s++
                                ) {
                                    var i = e[s],
                                        r = this.selectionContainer(),
                                        o = this.display(i, r),
                                        a = n + c.generateChars(4) + "-";
                                    i.id
                                        ? (a += i.id)
                                        : (a += c.generateChars(4)),
                                        r
                                            .find(
                                                ".select2-selection__choice__display"
                                            )
                                            .append(o)
                                            .attr("id", a);
                                    var l = i.title || i.text;
                                    l && r.attr("title", l);
                                    (o = this.options
                                        .get("translations")
                                        .get("removeItem")),
                                        (l = r.find(
                                            ".select2-selection__choice__remove"
                                        ));
                                    l.attr("title", o()),
                                        l.attr("aria-label", o()),
                                        l.attr("aria-describedby", a),
                                        c.StoreData(r[0], "data", i),
                                        t.push(r);
                                }
                                this.$selection
                                    .find(".select2-selection__rendered")
                                    .append(t);
                            }
                        }),
                        r
                    );
                }
            ),
            u.define("select2/selection/placeholder", [], function () {
                function e(e, t, n) {
                    (this.placeholder = this.normalizePlaceholder(
                        n.get("placeholder")
                    )),
                        e.call(this, t, n);
                }
                return (
                    (e.prototype.normalizePlaceholder = function (e, t) {
                        return (t =
                            "string" == typeof t ? { id: "", text: t } : t);
                    }),
                    (e.prototype.createPlaceholder = function (e, t) {
                        var n = this.selectionContainer();
                        n.html(this.display(t)),
                            n[0].classList.add(
                                "select2-selection__placeholder"
                            ),
                            n[0].classList.remove("select2-selection__choice");
                        t = t.title || t.text || n.text();
                        return (
                            this.$selection
                                .find(".select2-selection__rendered")
                                .attr("title", t),
                            n
                        );
                    }),
                    (e.prototype.update = function (e, t) {
                        var n = 1 == t.length && t[0].id != this.placeholder.id;
                        if (1 < t.length || n) return e.call(this, t);
                        this.clear();
                        t = this.createPlaceholder(this.placeholder);
                        this.$selection
                            .find(".select2-selection__rendered")
                            .append(t);
                    }),
                    e
                );
            }),
            u.define(
                "select2/selection/allowClear",
                ["jquery", "../keys", "../utils"],
                function (i, s, a) {
                    function e() {}
                    return (
                        (e.prototype.bind = function (e, t, n) {
                            var s = this;
                            e.call(this, t, n),
                                null == this.placeholder &&
                                    this.options.get("debug") &&
                                    window.console &&
                                    console.error &&
                                    console.error(
                                        "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                                    ),
                                this.$selection.on(
                                    "mousedown",
                                    ".select2-selection__clear",
                                    function (e) {
                                        s._handleClear(e);
                                    }
                                ),
                                t.on("keypress", function (e) {
                                    s._handleKeyboardClear(e, t);
                                });
                        }),
                        (e.prototype._handleClear = function (e, t) {
                            if (!this.isDisabled()) {
                                var n = this.$selection.find(
                                    ".select2-selection__clear"
                                );
                                if (0 !== n.length) {
                                    t.stopPropagation();
                                    var s = a.GetData(n[0], "data"),
                                        i = this.$element.val();
                                    this.$element.val(this.placeholder.id);
                                    var r = { data: s };
                                    if ((this.trigger("clear", r), r.prevented))
                                        this.$element.val(i);
                                    else {
                                        for (var o = 0; o < s.length; o++)
                                            if (
                                                ((r = { data: s[o] }),
                                                this.trigger("unselect", r),
                                                r.prevented)
                                            )
                                                return void this.$element.val(
                                                    i
                                                );
                                        this.$element
                                            .trigger("input")
                                            .trigger("change"),
                                            this.trigger("toggle", {});
                                    }
                                }
                            }
                        }),
                        (e.prototype._handleKeyboardClear = function (e, t, n) {
                            n.isOpen() ||
                                (t.which != s.DELETE &&
                                    t.which != s.BACKSPACE) ||
                                this._handleClear(t);
                        }),
                        (e.prototype.update = function (e, t) {
                            var n, s;
                            e.call(this, t),
                                this.$selection
                                    .find(".select2-selection__clear")
                                    .remove(),
                                this.$selection[0].classList.remove(
                                    "select2-selection--clearable"
                                ),
                                0 <
                                    this.$selection.find(
                                        ".select2-selection__placeholder"
                                    ).length ||
                                    0 === t.length ||
                                    ((n = this.$selection
                                        .find(".select2-selection__rendered")
                                        .attr("id")),
                                    (s = this.options
                                        .get("translations")
                                        .get("removeAllItems")),
                                    (e = i(
                                        '<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>'
                                    )).attr("title", s()),
                                    e.attr("aria-label", s()),
                                    e.attr("aria-describedby", n),
                                    a.StoreData(e[0], "data", t),
                                    this.$selection.prepend(e),
                                    this.$selection[0].classList.add(
                                        "select2-selection--clearable"
                                    ));
                        }),
                        e
                    );
                }
            ),
            u.define(
                "select2/selection/search",
                ["jquery", "../utils", "../keys"],
                function (s, a, l) {
                    function e(e, t, n) {
                        e.call(this, t, n);
                    }
                    return (
                        (e.prototype.render = function (e) {
                            var t = this.options
                                    .get("translations")
                                    .get("search"),
                                n = s(
                                    '<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>'
                                );
                            (this.$searchContainer = n),
                                (this.$search = n.find("textarea")),
                                this.$search.prop(
                                    "autocomplete",
                                    this.options.get("autocomplete")
                                ),
                                this.$search.attr("aria-label", t());
                            e = e.call(this);
                            return (
                                this._transferTabIndex(),
                                e.append(this.$searchContainer),
                                e
                            );
                        }),
                        (e.prototype.bind = function (e, t, n) {
                            var s = this,
                                i = t.id + "-results",
                                r = t.id + "-container";
                            e.call(this, t, n),
                                s.$search.attr("aria-describedby", r),
                                t.on("open", function () {
                                    s.$search.attr("aria-controls", i),
                                        s.$search.trigger("focus");
                                }),
                                t.on("close", function () {
                                    s.$search.val(""),
                                        s.resizeSearch(),
                                        s.$search.removeAttr("aria-controls"),
                                        s.$search.removeAttr(
                                            "aria-activedescendant"
                                        ),
                                        s.$search.trigger("focus");
                                }),
                                t.on("enable", function () {
                                    s.$search.prop("disabled", !1),
                                        s._transferTabIndex();
                                }),
                                t.on("disable", function () {
                                    s.$search.prop("disabled", !0);
                                }),
                                t.on("focus", function (e) {
                                    s.$search.trigger("focus");
                                }),
                                t.on("results:focus", function (e) {
                                    e.data._resultId
                                        ? s.$search.attr(
                                              "aria-activedescendant",
                                              e.data._resultId
                                          )
                                        : s.$search.removeAttr(
                                              "aria-activedescendant"
                                          );
                                }),
                                this.$selection.on(
                                    "focusin",
                                    ".select2-search--inline",
                                    function (e) {
                                        s.trigger("focus", e);
                                    }
                                ),
                                this.$selection.on(
                                    "focusout",
                                    ".select2-search--inline",
                                    function (e) {
                                        s._handleBlur(e);
                                    }
                                ),
                                this.$selection.on(
                                    "keydown",
                                    ".select2-search--inline",
                                    function (e) {
                                        var t;
                                        e.stopPropagation(),
                                            s.trigger("keypress", e),
                                            (s._keyUpPrevented =
                                                e.isDefaultPrevented()),
                                            e.which !== l.BACKSPACE ||
                                                "" !== s.$search.val() ||
                                                (0 <
                                                    (t = s.$selection
                                                        .find(
                                                            ".select2-selection__choice"
                                                        )
                                                        .last()).length &&
                                                    ((t = a.GetData(
                                                        t[0],
                                                        "data"
                                                    )),
                                                    s.searchRemoveChoice(t),
                                                    e.preventDefault()));
                                    }
                                ),
                                this.$selection.on(
                                    "click",
                                    ".select2-search--inline",
                                    function (e) {
                                        s.$search.val() && e.stopPropagation();
                                    }
                                );
                            var t = document.documentMode,
                                o = t && t <= 11;
                            this.$selection.on(
                                "input.searchcheck",
                                ".select2-search--inline",
                                function (e) {
                                    o
                                        ? s.$selection.off(
                                              "input.search input.searchcheck"
                                          )
                                        : s.$selection.off("keyup.search");
                                }
                            ),
                                this.$selection.on(
                                    "keyup.search input.search",
                                    ".select2-search--inline",
                                    function (e) {
                                        var t;
                                        o && "input" === e.type
                                            ? s.$selection.off(
                                                  "input.search input.searchcheck"
                                              )
                                            : (t = e.which) != l.SHIFT &&
                                              t != l.CTRL &&
                                              t != l.ALT &&
                                              t != l.TAB &&
                                              s.handleSearch(e);
                                    }
                                );
                        }),
                        (e.prototype._transferTabIndex = function (e) {
                            this.$search.attr(
                                "tabindex",
                                this.$selection.attr("tabindex")
                            ),
                                this.$selection.attr("tabindex", "-1");
                        }),
                        (e.prototype.createPlaceholder = function (e, t) {
                            this.$search.attr("placeholder", t.text);
                        }),
                        (e.prototype.update = function (e, t) {
                            var n = this.$search[0] == document.activeElement;
                            this.$search.attr("placeholder", ""),
                                e.call(this, t),
                                this.resizeSearch(),
                                n && this.$search.trigger("focus");
                        }),
                        (e.prototype.handleSearch = function () {
                            var e;
                            this.resizeSearch(),
                                this._keyUpPrevented ||
                                    ((e = this.$search.val()),
                                    this.trigger("query", { term: e })),
                                (this._keyUpPrevented = !1);
                        }),
                        (e.prototype.searchRemoveChoice = function (e, t) {
                            this.trigger("unselect", { data: t }),
                                this.$search.val(t.text),
                                this.handleSearch();
                        }),
                        (e.prototype.resizeSearch = function () {
                            this.$search.css("width", "25px");
                            var e = "100%";
                            "" === this.$search.attr("placeholder") &&
                                (e =
                                    0.75 * (this.$search.val().length + 1) +
                                    "em"),
                                this.$search.css("width", e);
                        }),
                        e
                    );
                }
            ),
            u.define(
                "select2/selection/selectionCss",
                ["../utils"],
                function (n) {
                    function e() {}
                    return (
                        (e.prototype.render = function (e) {
                            var t = e.call(this),
                                e = this.options.get("selectionCssClass") || "";
                            return (
                                -1 !== e.indexOf(":all:") &&
                                    ((e = e.replace(":all:", "")),
                                    n.copyNonInternalCssClasses(
                                        t[0],
                                        this.$element[0]
                                    )),
                                t.addClass(e),
                                t
                            );
                        }),
                        e
                    );
                }
            ),
            u.define("select2/selection/eventRelay", ["jquery"], function (o) {
                function e() {}
                return (
                    (e.prototype.bind = function (e, t, n) {
                        var s = this,
                            i = [
                                "open",
                                "opening",
                                "close",
                                "closing",
                                "select",
                                "selecting",
                                "unselect",
                                "unselecting",
                                "clear",
                                "clearing",
                            ],
                            r = [
                                "opening",
                                "closing",
                                "selecting",
                                "unselecting",
                                "clearing",
                            ];
                        e.call(this, t, n),
                            t.on("*", function (e, t) {
                                var n;
                                -1 !== i.indexOf(e) &&
                                    ((t = t || {}),
                                    (n = o.Event("select2:" + e, {
                                        params: t,
                                    })),
                                    s.$element.trigger(n),
                                    -1 !== r.indexOf(e) &&
                                        (t.prevented = n.isDefaultPrevented()));
                            });
                    }),
                    e
                );
            }),
            u.define(
                "select2/translation",
                ["jquery", "require"],
                function (t, n) {
                    function s(e) {
                        this.dict = e || {};
                    }
                    return (
                        (s.prototype.all = function () {
                            return this.dict;
                        }),
                        (s.prototype.get = function (e) {
                            return this.dict[e];
                        }),
                        (s.prototype.extend = function (e) {
                            this.dict = t.extend({}, e.all(), this.dict);
                        }),
                        (s._cache = {}),
                        (s.loadPath = function (e) {
                            var t;
                            return (
                                e in s._cache ||
                                    ((t = n(e)), (s._cache[e] = t)),
                                new s(s._cache[e])
                            );
                        }),
                        s
                    );
                }
            ),
            u.define("select2/diacritics", [], function () {
                return {
                    "Ⓐ": "A",
                    Ａ: "A",
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ầ: "A",
                    Ấ: "A",
                    Ẫ: "A",
                    Ẩ: "A",
                    Ã: "A",
                    Ā: "A",
                    Ă: "A",
                    Ằ: "A",
                    Ắ: "A",
                    Ẵ: "A",
                    Ẳ: "A",
                    Ȧ: "A",
                    Ǡ: "A",
                    Ä: "A",
                    Ǟ: "A",
                    Ả: "A",
                    Å: "A",
                    Ǻ: "A",
                    Ǎ: "A",
                    Ȁ: "A",
                    Ȃ: "A",
                    Ạ: "A",
                    Ậ: "A",
                    Ặ: "A",
                    Ḁ: "A",
                    Ą: "A",
                    Ⱥ: "A",
                    Ɐ: "A",
                    Ꜳ: "AA",
                    Æ: "AE",
                    Ǽ: "AE",
                    Ǣ: "AE",
                    Ꜵ: "AO",
                    Ꜷ: "AU",
                    Ꜹ: "AV",
                    Ꜻ: "AV",
                    Ꜽ: "AY",
                    "Ⓑ": "B",
                    Ｂ: "B",
                    Ḃ: "B",
                    Ḅ: "B",
                    Ḇ: "B",
                    Ƀ: "B",
                    Ƃ: "B",
                    Ɓ: "B",
                    "Ⓒ": "C",
                    Ｃ: "C",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    Ç: "C",
                    Ḉ: "C",
                    Ƈ: "C",
                    Ȼ: "C",
                    Ꜿ: "C",
                    "Ⓓ": "D",
                    Ｄ: "D",
                    Ḋ: "D",
                    Ď: "D",
                    Ḍ: "D",
                    Ḑ: "D",
                    Ḓ: "D",
                    Ḏ: "D",
                    Đ: "D",
                    Ƌ: "D",
                    Ɗ: "D",
                    Ɖ: "D",
                    Ꝺ: "D",
                    Ǳ: "DZ",
                    Ǆ: "DZ",
                    ǲ: "Dz",
                    ǅ: "Dz",
                    "Ⓔ": "E",
                    Ｅ: "E",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ề: "E",
                    Ế: "E",
                    Ễ: "E",
                    Ể: "E",
                    Ẽ: "E",
                    Ē: "E",
                    Ḕ: "E",
                    Ḗ: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ë: "E",
                    Ẻ: "E",
                    Ě: "E",
                    Ȅ: "E",
                    Ȇ: "E",
                    Ẹ: "E",
                    Ệ: "E",
                    Ȩ: "E",
                    Ḝ: "E",
                    Ę: "E",
                    Ḙ: "E",
                    Ḛ: "E",
                    Ɛ: "E",
                    Ǝ: "E",
                    "Ⓕ": "F",
                    Ｆ: "F",
                    Ḟ: "F",
                    Ƒ: "F",
                    Ꝼ: "F",
                    "Ⓖ": "G",
                    Ｇ: "G",
                    Ǵ: "G",
                    Ĝ: "G",
                    Ḡ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ǧ: "G",
                    Ģ: "G",
                    Ǥ: "G",
                    Ɠ: "G",
                    Ꞡ: "G",
                    Ᵹ: "G",
                    Ꝿ: "G",
                    "Ⓗ": "H",
                    Ｈ: "H",
                    Ĥ: "H",
                    Ḣ: "H",
                    Ḧ: "H",
                    Ȟ: "H",
                    Ḥ: "H",
                    Ḩ: "H",
                    Ḫ: "H",
                    Ħ: "H",
                    Ⱨ: "H",
                    Ⱶ: "H",
                    Ɥ: "H",
                    "Ⓘ": "I",
                    Ｉ: "I",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    İ: "I",
                    Ï: "I",
                    Ḯ: "I",
                    Ỉ: "I",
                    Ǐ: "I",
                    Ȉ: "I",
                    Ȋ: "I",
                    Ị: "I",
                    Į: "I",
                    Ḭ: "I",
                    Ɨ: "I",
                    "Ⓙ": "J",
                    Ｊ: "J",
                    Ĵ: "J",
                    Ɉ: "J",
                    "Ⓚ": "K",
                    Ｋ: "K",
                    Ḱ: "K",
                    Ǩ: "K",
                    Ḳ: "K",
                    Ķ: "K",
                    Ḵ: "K",
                    Ƙ: "K",
                    Ⱪ: "K",
                    Ꝁ: "K",
                    Ꝃ: "K",
                    Ꝅ: "K",
                    Ꞣ: "K",
                    "Ⓛ": "L",
                    Ｌ: "L",
                    Ŀ: "L",
                    Ĺ: "L",
                    Ľ: "L",
                    Ḷ: "L",
                    Ḹ: "L",
                    Ļ: "L",
                    Ḽ: "L",
                    Ḻ: "L",
                    Ł: "L",
                    Ƚ: "L",
                    Ɫ: "L",
                    Ⱡ: "L",
                    Ꝉ: "L",
                    Ꝇ: "L",
                    Ꞁ: "L",
                    Ǉ: "LJ",
                    ǈ: "Lj",
                    "Ⓜ": "M",
                    Ｍ: "M",
                    Ḿ: "M",
                    Ṁ: "M",
                    Ṃ: "M",
                    Ɱ: "M",
                    Ɯ: "M",
                    "Ⓝ": "N",
                    Ｎ: "N",
                    Ǹ: "N",
                    Ń: "N",
                    Ñ: "N",
                    Ṅ: "N",
                    Ň: "N",
                    Ṇ: "N",
                    Ņ: "N",
                    Ṋ: "N",
                    Ṉ: "N",
                    Ƞ: "N",
                    Ɲ: "N",
                    Ꞑ: "N",
                    Ꞥ: "N",
                    Ǌ: "NJ",
                    ǋ: "Nj",
                    "Ⓞ": "O",
                    Ｏ: "O",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Ồ: "O",
                    Ố: "O",
                    Ỗ: "O",
                    Ổ: "O",
                    Õ: "O",
                    Ṍ: "O",
                    Ȭ: "O",
                    Ṏ: "O",
                    Ō: "O",
                    Ṑ: "O",
                    Ṓ: "O",
                    Ŏ: "O",
                    Ȯ: "O",
                    Ȱ: "O",
                    Ö: "O",
                    Ȫ: "O",
                    Ỏ: "O",
                    Ő: "O",
                    Ǒ: "O",
                    Ȍ: "O",
                    Ȏ: "O",
                    Ơ: "O",
                    Ờ: "O",
                    Ớ: "O",
                    Ỡ: "O",
                    Ở: "O",
                    Ợ: "O",
                    Ọ: "O",
                    Ộ: "O",
                    Ǫ: "O",
                    Ǭ: "O",
                    Ø: "O",
                    Ǿ: "O",
                    Ɔ: "O",
                    Ɵ: "O",
                    Ꝋ: "O",
                    Ꝍ: "O",
                    Œ: "OE",
                    Ƣ: "OI",
                    Ꝏ: "OO",
                    Ȣ: "OU",
                    "Ⓟ": "P",
                    Ｐ: "P",
                    Ṕ: "P",
                    Ṗ: "P",
                    Ƥ: "P",
                    Ᵽ: "P",
                    Ꝑ: "P",
                    Ꝓ: "P",
                    Ꝕ: "P",
                    "Ⓠ": "Q",
                    Ｑ: "Q",
                    Ꝗ: "Q",
                    Ꝙ: "Q",
                    Ɋ: "Q",
                    "Ⓡ": "R",
                    Ｒ: "R",
                    Ŕ: "R",
                    Ṙ: "R",
                    Ř: "R",
                    Ȑ: "R",
                    Ȓ: "R",
                    Ṛ: "R",
                    Ṝ: "R",
                    Ŗ: "R",
                    Ṟ: "R",
                    Ɍ: "R",
                    Ɽ: "R",
                    Ꝛ: "R",
                    Ꞧ: "R",
                    Ꞃ: "R",
                    "Ⓢ": "S",
                    Ｓ: "S",
                    ẞ: "S",
                    Ś: "S",
                    Ṥ: "S",
                    Ŝ: "S",
                    Ṡ: "S",
                    Š: "S",
                    Ṧ: "S",
                    Ṣ: "S",
                    Ṩ: "S",
                    Ș: "S",
                    Ş: "S",
                    Ȿ: "S",
                    Ꞩ: "S",
                    Ꞅ: "S",
                    "Ⓣ": "T",
                    Ｔ: "T",
                    Ṫ: "T",
                    Ť: "T",
                    Ṭ: "T",
                    Ț: "T",
                    Ţ: "T",
                    Ṱ: "T",
                    Ṯ: "T",
                    Ŧ: "T",
                    Ƭ: "T",
                    Ʈ: "T",
                    Ⱦ: "T",
                    Ꞇ: "T",
                    Ꜩ: "TZ",
                    "Ⓤ": "U",
                    Ｕ: "U",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ũ: "U",
                    Ṹ: "U",
                    Ū: "U",
                    Ṻ: "U",
                    Ŭ: "U",
                    Ü: "U",
                    Ǜ: "U",
                    Ǘ: "U",
                    Ǖ: "U",
                    Ǚ: "U",
                    Ủ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ǔ: "U",
                    Ȕ: "U",
                    Ȗ: "U",
                    Ư: "U",
                    Ừ: "U",
                    Ứ: "U",
                    Ữ: "U",
                    Ử: "U",
                    Ự: "U",
                    Ụ: "U",
                    Ṳ: "U",
                    Ų: "U",
                    Ṷ: "U",
                    Ṵ: "U",
                    Ʉ: "U",
                    "Ⓥ": "V",
                    Ｖ: "V",
                    Ṽ: "V",
                    Ṿ: "V",
                    Ʋ: "V",
                    Ꝟ: "V",
                    Ʌ: "V",
                    Ꝡ: "VY",
                    "Ⓦ": "W",
                    Ｗ: "W",
                    Ẁ: "W",
                    Ẃ: "W",
                    Ŵ: "W",
                    Ẇ: "W",
                    Ẅ: "W",
                    Ẉ: "W",
                    Ⱳ: "W",
                    "Ⓧ": "X",
                    Ｘ: "X",
                    Ẋ: "X",
                    Ẍ: "X",
                    "Ⓨ": "Y",
                    Ｙ: "Y",
                    Ỳ: "Y",
                    Ý: "Y",
                    Ŷ: "Y",
                    Ỹ: "Y",
                    Ȳ: "Y",
                    Ẏ: "Y",
                    Ÿ: "Y",
                    Ỷ: "Y",
                    Ỵ: "Y",
                    Ƴ: "Y",
                    Ɏ: "Y",
                    Ỿ: "Y",
                    "Ⓩ": "Z",
                    Ｚ: "Z",
                    Ź: "Z",
                    Ẑ: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    Ẓ: "Z",
                    Ẕ: "Z",
                    Ƶ: "Z",
                    Ȥ: "Z",
                    Ɀ: "Z",
                    Ⱬ: "Z",
                    Ꝣ: "Z",
                    "ⓐ": "a",
                    ａ: "a",
                    ẚ: "a",
                    à: "a",
                    á: "a",
                    â: "a",
                    ầ: "a",
                    ấ: "a",
                    ẫ: "a",
                    ẩ: "a",
                    ã: "a",
                    ā: "a",
                    ă: "a",
                    ằ: "a",
                    ắ: "a",
                    ẵ: "a",
                    ẳ: "a",
                    ȧ: "a",
                    ǡ: "a",
                    ä: "a",
                    ǟ: "a",
                    ả: "a",
                    å: "a",
                    ǻ: "a",
                    ǎ: "a",
                    ȁ: "a",
                    ȃ: "a",
                    ạ: "a",
                    ậ: "a",
                    ặ: "a",
                    ḁ: "a",
                    ą: "a",
                    ⱥ: "a",
                    ɐ: "a",
                    ꜳ: "aa",
                    æ: "ae",
                    ǽ: "ae",
                    ǣ: "ae",
                    ꜵ: "ao",
                    ꜷ: "au",
                    ꜹ: "av",
                    ꜻ: "av",
                    ꜽ: "ay",
                    "ⓑ": "b",
                    ｂ: "b",
                    ḃ: "b",
                    ḅ: "b",
                    ḇ: "b",
                    ƀ: "b",
                    ƃ: "b",
                    ɓ: "b",
                    "ⓒ": "c",
                    ｃ: "c",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    ç: "c",
                    ḉ: "c",
                    ƈ: "c",
                    ȼ: "c",
                    ꜿ: "c",
                    ↄ: "c",
                    "ⓓ": "d",
                    ｄ: "d",
                    ḋ: "d",
                    ď: "d",
                    ḍ: "d",
                    ḑ: "d",
                    ḓ: "d",
                    ḏ: "d",
                    đ: "d",
                    ƌ: "d",
                    ɖ: "d",
                    ɗ: "d",
                    ꝺ: "d",
                    ǳ: "dz",
                    ǆ: "dz",
                    "ⓔ": "e",
                    ｅ: "e",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ề: "e",
                    ế: "e",
                    ễ: "e",
                    ể: "e",
                    ẽ: "e",
                    ē: "e",
                    ḕ: "e",
                    ḗ: "e",
                    ĕ: "e",
                    ė: "e",
                    ë: "e",
                    ẻ: "e",
                    ě: "e",
                    ȅ: "e",
                    ȇ: "e",
                    ẹ: "e",
                    ệ: "e",
                    ȩ: "e",
                    ḝ: "e",
                    ę: "e",
                    ḙ: "e",
                    ḛ: "e",
                    ɇ: "e",
                    ɛ: "e",
                    ǝ: "e",
                    "ⓕ": "f",
                    ｆ: "f",
                    ḟ: "f",
                    ƒ: "f",
                    ꝼ: "f",
                    "ⓖ": "g",
                    ｇ: "g",
                    ǵ: "g",
                    ĝ: "g",
                    ḡ: "g",
                    ğ: "g",
                    ġ: "g",
                    ǧ: "g",
                    ģ: "g",
                    ǥ: "g",
                    ɠ: "g",
                    ꞡ: "g",
                    ᵹ: "g",
                    ꝿ: "g",
                    "ⓗ": "h",
                    ｈ: "h",
                    ĥ: "h",
                    ḣ: "h",
                    ḧ: "h",
                    ȟ: "h",
                    ḥ: "h",
                    ḩ: "h",
                    ḫ: "h",
                    ẖ: "h",
                    ħ: "h",
                    ⱨ: "h",
                    ⱶ: "h",
                    ɥ: "h",
                    ƕ: "hv",
                    "ⓘ": "i",
                    ｉ: "i",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    ï: "i",
                    ḯ: "i",
                    ỉ: "i",
                    ǐ: "i",
                    ȉ: "i",
                    ȋ: "i",
                    ị: "i",
                    į: "i",
                    ḭ: "i",
                    ɨ: "i",
                    ı: "i",
                    "ⓙ": "j",
                    ｊ: "j",
                    ĵ: "j",
                    ǰ: "j",
                    ɉ: "j",
                    "ⓚ": "k",
                    ｋ: "k",
                    ḱ: "k",
                    ǩ: "k",
                    ḳ: "k",
                    ķ: "k",
                    ḵ: "k",
                    ƙ: "k",
                    ⱪ: "k",
                    ꝁ: "k",
                    ꝃ: "k",
                    ꝅ: "k",
                    ꞣ: "k",
                    "ⓛ": "l",
                    ｌ: "l",
                    ŀ: "l",
                    ĺ: "l",
                    ľ: "l",
                    ḷ: "l",
                    ḹ: "l",
                    ļ: "l",
                    ḽ: "l",
                    ḻ: "l",
                    ſ: "l",
                    ł: "l",
                    ƚ: "l",
                    ɫ: "l",
                    ⱡ: "l",
                    ꝉ: "l",
                    ꞁ: "l",
                    ꝇ: "l",
                    ǉ: "lj",
                    "ⓜ": "m",
                    ｍ: "m",
                    ḿ: "m",
                    ṁ: "m",
                    ṃ: "m",
                    ɱ: "m",
                    ɯ: "m",
                    "ⓝ": "n",
                    ｎ: "n",
                    ǹ: "n",
                    ń: "n",
                    ñ: "n",
                    ṅ: "n",
                    ň: "n",
                    ṇ: "n",
                    ņ: "n",
                    ṋ: "n",
                    ṉ: "n",
                    ƞ: "n",
                    ɲ: "n",
                    ŉ: "n",
                    ꞑ: "n",
                    ꞥ: "n",
                    ǌ: "nj",
                    "ⓞ": "o",
                    ｏ: "o",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    ồ: "o",
                    ố: "o",
                    ỗ: "o",
                    ổ: "o",
                    õ: "o",
                    ṍ: "o",
                    ȭ: "o",
                    ṏ: "o",
                    ō: "o",
                    ṑ: "o",
                    ṓ: "o",
                    ŏ: "o",
                    ȯ: "o",
                    ȱ: "o",
                    ö: "o",
                    ȫ: "o",
                    ỏ: "o",
                    ő: "o",
                    ǒ: "o",
                    ȍ: "o",
                    ȏ: "o",
                    ơ: "o",
                    ờ: "o",
                    ớ: "o",
                    ỡ: "o",
                    ở: "o",
                    ợ: "o",
                    ọ: "o",
                    ộ: "o",
                    ǫ: "o",
                    ǭ: "o",
                    ø: "o",
                    ǿ: "o",
                    ɔ: "o",
                    ꝋ: "o",
                    ꝍ: "o",
                    ɵ: "o",
                    œ: "oe",
                    ƣ: "oi",
                    ȣ: "ou",
                    ꝏ: "oo",
                    "ⓟ": "p",
                    ｐ: "p",
                    ṕ: "p",
                    ṗ: "p",
                    ƥ: "p",
                    ᵽ: "p",
                    ꝑ: "p",
                    ꝓ: "p",
                    ꝕ: "p",
                    "ⓠ": "q",
                    ｑ: "q",
                    ɋ: "q",
                    ꝗ: "q",
                    ꝙ: "q",
                    "ⓡ": "r",
                    ｒ: "r",
                    ŕ: "r",
                    ṙ: "r",
                    ř: "r",
                    ȑ: "r",
                    ȓ: "r",
                    ṛ: "r",
                    ṝ: "r",
                    ŗ: "r",
                    ṟ: "r",
                    ɍ: "r",
                    ɽ: "r",
                    ꝛ: "r",
                    ꞧ: "r",
                    ꞃ: "r",
                    "ⓢ": "s",
                    ｓ: "s",
                    ß: "s",
                    ś: "s",
                    ṥ: "s",
                    ŝ: "s",
                    ṡ: "s",
                    š: "s",
                    ṧ: "s",
                    ṣ: "s",
                    ṩ: "s",
                    ș: "s",
                    ş: "s",
                    ȿ: "s",
                    ꞩ: "s",
                    ꞅ: "s",
                    ẛ: "s",
                    "ⓣ": "t",
                    ｔ: "t",
                    ṫ: "t",
                    ẗ: "t",
                    ť: "t",
                    ṭ: "t",
                    ț: "t",
                    ţ: "t",
                    ṱ: "t",
                    ṯ: "t",
                    ŧ: "t",
                    ƭ: "t",
                    ʈ: "t",
                    ⱦ: "t",
                    ꞇ: "t",
                    ꜩ: "tz",
                    "ⓤ": "u",
                    ｕ: "u",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ũ: "u",
                    ṹ: "u",
                    ū: "u",
                    ṻ: "u",
                    ŭ: "u",
                    ü: "u",
                    ǜ: "u",
                    ǘ: "u",
                    ǖ: "u",
                    ǚ: "u",
                    ủ: "u",
                    ů: "u",
                    ű: "u",
                    ǔ: "u",
                    ȕ: "u",
                    ȗ: "u",
                    ư: "u",
                    ừ: "u",
                    ứ: "u",
                    ữ: "u",
                    ử: "u",
                    ự: "u",
                    ụ: "u",
                    ṳ: "u",
                    ų: "u",
                    ṷ: "u",
                    ṵ: "u",
                    ʉ: "u",
                    "ⓥ": "v",
                    ｖ: "v",
                    ṽ: "v",
                    ṿ: "v",
                    ʋ: "v",
                    ꝟ: "v",
                    ʌ: "v",
                    ꝡ: "vy",
                    "ⓦ": "w",
                    ｗ: "w",
                    ẁ: "w",
                    ẃ: "w",
                    ŵ: "w",
                    ẇ: "w",
                    ẅ: "w",
                    ẘ: "w",
                    ẉ: "w",
                    ⱳ: "w",
                    "ⓧ": "x",
                    ｘ: "x",
                    ẋ: "x",
                    ẍ: "x",
                    "ⓨ": "y",
                    ｙ: "y",
                    ỳ: "y",
                    ý: "y",
                    ŷ: "y",
                    ỹ: "y",
                    ȳ: "y",
                    ẏ: "y",
                    ÿ: "y",
                    ỷ: "y",
                    ẙ: "y",
                    ỵ: "y",
                    ƴ: "y",
                    ɏ: "y",
                    ỿ: "y",
                    "ⓩ": "z",
                    ｚ: "z",
                    ź: "z",
                    ẑ: "z",
                    ż: "z",
                    ž: "z",
                    ẓ: "z",
                    ẕ: "z",
                    ƶ: "z",
                    ȥ: "z",
                    ɀ: "z",
                    ⱬ: "z",
                    ꝣ: "z",
                    Ά: "Α",
                    Έ: "Ε",
                    Ή: "Η",
                    Ί: "Ι",
                    Ϊ: "Ι",
                    Ό: "Ο",
                    Ύ: "Υ",
                    Ϋ: "Υ",
                    Ώ: "Ω",
                    ά: "α",
                    έ: "ε",
                    ή: "η",
                    ί: "ι",
                    ϊ: "ι",
                    ΐ: "ι",
                    ό: "ο",
                    ύ: "υ",
                    ϋ: "υ",
                    ΰ: "υ",
                    ώ: "ω",
                    ς: "σ",
                    "’": "'",
                };
            }),
            u.define("select2/data/base", ["../utils"], function (n) {
                function s(e, t) {
                    s.__super__.constructor.call(this);
                }
                return (
                    n.Extend(s, n.Observable),
                    (s.prototype.current = function (e) {
                        throw new Error(
                            "The `current` method must be defined in child classes."
                        );
                    }),
                    (s.prototype.query = function (e, t) {
                        throw new Error(
                            "The `query` method must be defined in child classes."
                        );
                    }),
                    (s.prototype.bind = function (e, t) {}),
                    (s.prototype.destroy = function () {}),
                    (s.prototype.generateResultId = function (e, t) {
                        e = e.id + "-result-";
                        return (
                            (e += n.generateChars(4)),
                            null != t.id
                                ? (e += "-" + t.id.toString())
                                : (e += "-" + n.generateChars(4)),
                            e
                        );
                    }),
                    s
                );
            }),
            u.define(
                "select2/data/select",
                ["./base", "../utils", "jquery"],
                function (e, a, l) {
                    function n(e, t) {
                        (this.$element = e),
                            (this.options = t),
                            n.__super__.constructor.call(this);
                    }
                    return (
                        a.Extend(n, e),
                        (n.prototype.current = function (e) {
                            var t = this;
                            e(
                                Array.prototype.map.call(
                                    this.$element[0].querySelectorAll(
                                        ":checked"
                                    ),
                                    function (e) {
                                        return t.item(l(e));
                                    }
                                )
                            );
                        }),
                        (n.prototype.select = function (i) {
                            var e,
                                r = this;
                            if (
                                ((i.selected = !0),
                                null != i.element &&
                                    "option" ===
                                        i.element.tagName.toLowerCase())
                            )
                                return (
                                    (i.element.selected = !0),
                                    void this.$element
                                        .trigger("input")
                                        .trigger("change")
                                );
                            this.$element.prop("multiple")
                                ? this.current(function (e) {
                                      var t = [];
                                      (i = [i]).push.apply(i, e);
                                      for (var n = 0; n < i.length; n++) {
                                          var s = i[n].id;
                                          -1 === t.indexOf(s) && t.push(s);
                                      }
                                      r.$element.val(t),
                                          r.$element
                                              .trigger("input")
                                              .trigger("change");
                                  })
                                : ((e = i.id),
                                  this.$element.val(e),
                                  this.$element
                                      .trigger("input")
                                      .trigger("change"));
                        }),
                        (n.prototype.unselect = function (i) {
                            var r = this;
                            if (this.$element.prop("multiple")) {
                                if (
                                    ((i.selected = !1),
                                    null != i.element &&
                                        "option" ===
                                            i.element.tagName.toLowerCase())
                                )
                                    return (
                                        (i.element.selected = !1),
                                        void this.$element
                                            .trigger("input")
                                            .trigger("change")
                                    );
                                this.current(function (e) {
                                    for (var t = [], n = 0; n < e.length; n++) {
                                        var s = e[n].id;
                                        s !== i.id &&
                                            -1 === t.indexOf(s) &&
                                            t.push(s);
                                    }
                                    r.$element.val(t),
                                        r.$element
                                            .trigger("input")
                                            .trigger("change");
                                });
                            }
                        }),
                        (n.prototype.bind = function (e, t) {
                            var n = this;
                            (this.container = e).on("select", function (e) {
                                n.select(e.data);
                            }),
                                e.on("unselect", function (e) {
                                    n.unselect(e.data);
                                });
                        }),
                        (n.prototype.destroy = function () {
                            this.$element.find("*").each(function () {
                                a.RemoveData(this);
                            });
                        }),
                        (n.prototype.query = function (t, e) {
                            var n = [],
                                s = this;
                            this.$element.children().each(function () {
                                var e;
                                ("option" !== this.tagName.toLowerCase() &&
                                    "optgroup" !==
                                        this.tagName.toLowerCase()) ||
                                    ((e = l(this)),
                                    (e = s.item(e)),
                                    null !== (e = s.matches(t, e)) &&
                                        n.push(e));
                            }),
                                e({ results: n });
                        }),
                        (n.prototype.addOptions = function (e) {
                            this.$element.append(e);
                        }),
                        (n.prototype.option = function (e) {
                            var t;
                            e.children
                                ? ((t =
                                      document.createElement(
                                          "optgroup"
                                      )).label = e.text)
                                : void 0 !==
                                  (t = document.createElement("option"))
                                      .textContent
                                ? (t.textContent = e.text)
                                : (t.innerText = e.text),
                                void 0 !== e.id && (t.value = e.id),
                                e.disabled && (t.disabled = !0),
                                e.selected && (t.selected = !0),
                                e.title && (t.title = e.title);
                            e = this._normalizeItem(e);
                            return (
                                (e.element = t), a.StoreData(t, "data", e), l(t)
                            );
                        }),
                        (n.prototype.item = function (e) {
                            var t = {};
                            if (null != (t = a.GetData(e[0], "data"))) return t;
                            var n = e[0];
                            if ("option" === n.tagName.toLowerCase())
                                t = {
                                    id: e.val(),
                                    text: e.text(),
                                    disabled: e.prop("disabled"),
                                    selected: e.prop("selected"),
                                    title: e.prop("title"),
                                };
                            else if ("optgroup" === n.tagName.toLowerCase()) {
                                t = {
                                    text: e.prop("label"),
                                    children: [],
                                    title: e.prop("title"),
                                };
                                for (
                                    var s = e.children("option"), i = [], r = 0;
                                    r < s.length;
                                    r++
                                ) {
                                    var o = l(s[r]),
                                        o = this.item(o);
                                    i.push(o);
                                }
                                t.children = i;
                            }
                            return (
                                ((t = this._normalizeItem(t)).element = e[0]),
                                a.StoreData(e[0], "data", t),
                                t
                            );
                        }),
                        (n.prototype._normalizeItem = function (e) {
                            e !== Object(e) && (e = { id: e, text: e });
                            return (
                                null !=
                                    (e = l.extend({}, { text: "" }, e)).id &&
                                    (e.id = e.id.toString()),
                                null != e.text && (e.text = e.text.toString()),
                                null == e._resultId &&
                                    e.id &&
                                    null != this.container &&
                                    (e._resultId = this.generateResultId(
                                        this.container,
                                        e
                                    )),
                                l.extend({}, { selected: !1, disabled: !1 }, e)
                            );
                        }),
                        (n.prototype.matches = function (e, t) {
                            return this.options.get("matcher")(e, t);
                        }),
                        n
                    );
                }
            ),
            u.define(
                "select2/data/array",
                ["./select", "../utils", "jquery"],
                function (e, t, c) {
                    function s(e, t) {
                        (this._dataToConvert = t.get("data") || []),
                            s.__super__.constructor.call(this, e, t);
                    }
                    return (
                        t.Extend(s, e),
                        (s.prototype.bind = function (e, t) {
                            s.__super__.bind.call(this, e, t),
                                this.addOptions(
                                    this.convertToOptions(this._dataToConvert)
                                );
                        }),
                        (s.prototype.select = function (n) {
                            var e = this.$element
                                .find("option")
                                .filter(function (e, t) {
                                    return t.value == n.id.toString();
                                });
                            0 === e.length &&
                                ((e = this.option(n)), this.addOptions(e)),
                                s.__super__.select.call(this, n);
                        }),
                        (s.prototype.convertToOptions = function (e) {
                            var t = this,
                                n = this.$element.find("option"),
                                s = n
                                    .map(function () {
                                        return t.item(c(this)).id;
                                    })
                                    .get(),
                                i = [];
                            for (var r = 0; r < e.length; r++) {
                                var o,
                                    a,
                                    l = this._normalizeItem(e[r]);
                                0 <= s.indexOf(l.id)
                                    ? ((o = n.filter(
                                          (function (e) {
                                              return function () {
                                                  return c(this).val() == e.id;
                                              };
                                          })(l)
                                      )),
                                      (a = this.item(o)),
                                      (a = c.extend(!0, {}, l, a)),
                                      (a = this.option(a)),
                                      o.replaceWith(a))
                                    : ((a = this.option(l)),
                                      l.children &&
                                          ((l = this.convertToOptions(
                                              l.children
                                          )),
                                          a.append(l)),
                                      i.push(a));
                            }
                            return i;
                        }),
                        s
                    );
                }
            ),
            u.define(
                "select2/data/ajax",
                ["./array", "../utils", "jquery"],
                function (e, t, r) {
                    function n(e, t) {
                        (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
                            null != this.ajaxOptions.processResults &&
                                (this.processResults =
                                    this.ajaxOptions.processResults),
                            n.__super__.constructor.call(this, e, t);
                    }
                    return (
                        t.Extend(n, e),
                        (n.prototype._applyDefaults = function (e) {
                            var t = {
                                data: function (e) {
                                    return r.extend({}, e, { q: e.term });
                                },
                                transport: function (e, t, n) {
                                    e = r.ajax(e);
                                    return e.then(t), e.fail(n), e;
                                },
                            };
                            return r.extend({}, t, e, !0);
                        }),
                        (n.prototype.processResults = function (e) {
                            return e;
                        }),
                        (n.prototype.query = function (t, n) {
                            var s = this;
                            null != this._request &&
                                ("function" == typeof this._request.abort &&
                                    this._request.abort(),
                                (this._request = null));
                            var i = r.extend({ type: "GET" }, this.ajaxOptions);
                            function e() {
                                var e = i.transport(
                                    i,
                                    function (e) {
                                        e = s.processResults(e, t);
                                        s.options.get("debug") &&
                                            window.console &&
                                            console.error &&
                                            ((e &&
                                                e.results &&
                                                Array.isArray(e.results)) ||
                                                console.error(
                                                    "Select2: The AJAX results did not return an array in the `results` key of the response."
                                                )),
                                            n(e);
                                    },
                                    function () {
                                        ("status" in e &&
                                            (0 === e.status ||
                                                "0" === e.status)) ||
                                            s.trigger("results:message", {
                                                message: "errorLoading",
                                            });
                                    }
                                );
                                s._request = e;
                            }
                            "function" == typeof i.url &&
                                (i.url = i.url.call(this.$element, t)),
                                "function" == typeof i.data &&
                                    (i.data = i.data.call(this.$element, t)),
                                this.ajaxOptions.delay && null != t.term
                                    ? (this._queryTimeout &&
                                          window.clearTimeout(
                                              this._queryTimeout
                                          ),
                                      (this._queryTimeout = window.setTimeout(
                                          e,
                                          this.ajaxOptions.delay
                                      )))
                                    : e();
                        }),
                        n
                    );
                }
            ),
            u.define("select2/data/tags", ["jquery"], function (t) {
                function e(e, t, n) {
                    var s = n.get("tags"),
                        i = n.get("createTag");
                    void 0 !== i && (this.createTag = i);
                    i = n.get("insertTag");
                    if (
                        (void 0 !== i && (this.insertTag = i),
                        e.call(this, t, n),
                        Array.isArray(s))
                    )
                        for (var r = 0; r < s.length; r++) {
                            var o = s[r],
                                o = this._normalizeItem(o),
                                o = this.option(o);
                            this.$element.append(o);
                        }
                }
                return (
                    (e.prototype.query = function (e, c, u) {
                        var d = this;
                        this._removeOldTags(),
                            null != c.term && null == c.page
                                ? e.call(this, c, function e(t, n) {
                                      for (
                                          var s = t.results, i = 0;
                                          i < s.length;
                                          i++
                                      ) {
                                          var r = s[i],
                                              o =
                                                  null != r.children &&
                                                  !e(
                                                      { results: r.children },
                                                      !0
                                                  );
                                          if (
                                              (r.text || "").toUpperCase() ===
                                                  (
                                                      c.term || ""
                                                  ).toUpperCase() ||
                                              o
                                          )
                                              return (
                                                  !n &&
                                                  ((t.data = s), void u(t))
                                              );
                                      }
                                      if (n) return !0;
                                      var a,
                                          l = d.createTag(c);
                                      null != l &&
                                          ((a = d.option(l)).attr(
                                              "data-select2-tag",
                                              "true"
                                          ),
                                          d.addOptions([a]),
                                          d.insertTag(s, l)),
                                          (t.results = s),
                                          u(t);
                                  })
                                : e.call(this, c, u);
                    }),
                    (e.prototype.createTag = function (e, t) {
                        if (null == t.term) return null;
                        t = t.term.trim();
                        return "" === t ? null : { id: t, text: t };
                    }),
                    (e.prototype.insertTag = function (e, t, n) {
                        t.unshift(n);
                    }),
                    (e.prototype._removeOldTags = function (e) {
                        this.$element
                            .find("option[data-select2-tag]")
                            .each(function () {
                                this.selected || t(this).remove();
                            });
                    }),
                    e
                );
            }),
            u.define("select2/data/tokenizer", ["jquery"], function (c) {
                function e(e, t, n) {
                    var s = n.get("tokenizer");
                    void 0 !== s && (this.tokenizer = s), e.call(this, t, n);
                }
                return (
                    (e.prototype.bind = function (e, t, n) {
                        e.call(this, t, n),
                            (this.$search =
                                t.dropdown.$search ||
                                t.selection.$search ||
                                n.find(".select2-search__field"));
                    }),
                    (e.prototype.query = function (e, t, n) {
                        var s = this;
                        t.term = t.term || "";
                        var i = this.tokenizer(t, this.options, function (e) {
                            var t,
                                n = s._normalizeItem(e);
                            s.$element.find("option").filter(function () {
                                return c(this).val() === n.id;
                            }).length ||
                                ((t = s.option(n)).attr("data-select2-tag", !0),
                                s._removeOldTags(),
                                s.addOptions([t])),
                                (t = n),
                                s.trigger("select", { data: t });
                        });
                        i.term !== t.term &&
                            (this.$search.length &&
                                (this.$search.val(i.term),
                                this.$search.trigger("focus")),
                            (t.term = i.term)),
                            e.call(this, t, n);
                    }),
                    (e.prototype.tokenizer = function (e, t, n, s) {
                        for (
                            var i = n.get("tokenSeparators") || [],
                                r = t.term,
                                o = 0,
                                a =
                                    this.createTag ||
                                    function (e) {
                                        return { id: e.term, text: e.term };
                                    };
                            o < r.length;

                        ) {
                            var l = r[o];
                            -1 !== i.indexOf(l)
                                ? ((l = r.substr(0, o)),
                                  null != (l = a(c.extend({}, t, { term: l })))
                                      ? (s(l),
                                        (r = r.substr(o + 1) || ""),
                                        (o = 0))
                                      : o++)
                                : o++;
                        }
                        return { term: r };
                    }),
                    e
                );
            }),
            u.define("select2/data/minimumInputLength", [], function () {
                function e(e, t, n) {
                    (this.minimumInputLength = n.get("minimumInputLength")),
                        e.call(this, t, n);
                }
                return (
                    (e.prototype.query = function (e, t, n) {
                        (t.term = t.term || ""),
                            t.term.length < this.minimumInputLength
                                ? this.trigger("results:message", {
                                      message: "inputTooShort",
                                      args: {
                                          minimum: this.minimumInputLength,
                                          input: t.term,
                                          params: t,
                                      },
                                  })
                                : e.call(this, t, n);
                    }),
                    e
                );
            }),
            u.define("select2/data/maximumInputLength", [], function () {
                function e(e, t, n) {
                    (this.maximumInputLength = n.get("maximumInputLength")),
                        e.call(this, t, n);
                }
                return (
                    (e.prototype.query = function (e, t, n) {
                        (t.term = t.term || ""),
                            0 < this.maximumInputLength &&
                            t.term.length > this.maximumInputLength
                                ? this.trigger("results:message", {
                                      message: "inputTooLong",
                                      args: {
                                          maximum: this.maximumInputLength,
                                          input: t.term,
                                          params: t,
                                      },
                                  })
                                : e.call(this, t, n);
                    }),
                    e
                );
            }),
            u.define("select2/data/maximumSelectionLength", [], function () {
                function e(e, t, n) {
                    (this.maximumSelectionLength = n.get(
                        "maximumSelectionLength"
                    )),
                        e.call(this, t, n);
                }
                return (
                    (e.prototype.bind = function (e, t, n) {
                        var s = this;
                        e.call(this, t, n),
                            t.on("select", function () {
                                s._checkIfMaximumSelected();
                            });
                    }),
                    (e.prototype.query = function (e, t, n) {
                        var s = this;
                        this._checkIfMaximumSelected(function () {
                            e.call(s, t, n);
                        });
                    }),
                    (e.prototype._checkIfMaximumSelected = function (e, t) {
                        var n = this;
                        this.current(function (e) {
                            e = null != e ? e.length : 0;
                            0 < n.maximumSelectionLength &&
                            e >= n.maximumSelectionLength
                                ? n.trigger("results:message", {
                                      message: "maximumSelected",
                                      args: {
                                          maximum: n.maximumSelectionLength,
                                      },
                                  })
                                : t && t();
                        });
                    }),
                    e
                );
            }),
            u.define(
                "select2/dropdown",
                ["jquery", "./utils"],
                function (t, e) {
                    function n(e, t) {
                        (this.$element = e),
                            (this.options = t),
                            n.__super__.constructor.call(this);
                    }
                    return (
                        e.Extend(n, e.Observable),
                        (n.prototype.render = function () {
                            var e = t(
                                '<span class="select2-dropdown"><span class="select2-results"></span></span>'
                            );
                            return (
                                e.attr("dir", this.options.get("dir")),
                                (this.$dropdown = e)
                            );
                        }),
                        (n.prototype.bind = function () {}),
                        (n.prototype.position = function (e, t) {}),
                        (n.prototype.destroy = function () {
                            this.$dropdown.remove();
                        }),
                        n
                    );
                }
            ),
            u.define("select2/dropdown/search", ["jquery"], function (r) {
                function e() {}
                return (
                    (e.prototype.render = function (e) {
                        var t = e.call(this),
                            n = this.options.get("translations").get("search"),
                            e = r(
                                '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                            );
                        return (
                            (this.$searchContainer = e),
                            (this.$search = e.find("input")),
                            this.$search.prop(
                                "autocomplete",
                                this.options.get("autocomplete")
                            ),
                            this.$search.attr("aria-label", n()),
                            t.prepend(e),
                            t
                        );
                    }),
                    (e.prototype.bind = function (e, t, n) {
                        var s = this,
                            i = t.id + "-results";
                        e.call(this, t, n),
                            this.$search.on("keydown", function (e) {
                                s.trigger("keypress", e),
                                    (s._keyUpPrevented =
                                        e.isDefaultPrevented());
                            }),
                            this.$search.on("input", function (e) {
                                r(this).off("keyup");
                            }),
                            this.$search.on("keyup input", function (e) {
                                s.handleSearch(e);
                            }),
                            t.on("open", function () {
                                s.$search.attr("tabindex", 0),
                                    s.$search.attr("aria-controls", i),
                                    s.$search.trigger("focus"),
                                    window.setTimeout(function () {
                                        s.$search.trigger("focus");
                                    }, 0);
                            }),
                            t.on("close", function () {
                                s.$search.attr("tabindex", -1),
                                    s.$search.removeAttr("aria-controls"),
                                    s.$search.removeAttr(
                                        "aria-activedescendant"
                                    ),
                                    s.$search.val(""),
                                    s.$search.trigger("blur");
                            }),
                            t.on("focus", function () {
                                t.isOpen() || s.$search.trigger("focus");
                            }),
                            t.on("results:all", function (e) {
                                (null != e.query.term && "" !== e.query.term) ||
                                    (s.showSearch(e)
                                        ? s.$searchContainer[0].classList.remove(
                                              "select2-search--hide"
                                          )
                                        : s.$searchContainer[0].classList.add(
                                              "select2-search--hide"
                                          ));
                            }),
                            t.on("results:focus", function (e) {
                                e.data._resultId
                                    ? s.$search.attr(
                                          "aria-activedescendant",
                                          e.data._resultId
                                      )
                                    : s.$search.removeAttr(
                                          "aria-activedescendant"
                                      );
                            });
                    }),
                    (e.prototype.handleSearch = function (e) {
                        var t;
                        this._keyUpPrevented ||
                            ((t = this.$search.val()),
                            this.trigger("query", { term: t })),
                            (this._keyUpPrevented = !1);
                    }),
                    (e.prototype.showSearch = function (e, t) {
                        return !0;
                    }),
                    e
                );
            }),
            u.define("select2/dropdown/hidePlaceholder", [], function () {
                function e(e, t, n, s) {
                    (this.placeholder = this.normalizePlaceholder(
                        n.get("placeholder")
                    )),
                        e.call(this, t, n, s);
                }
                return (
                    (e.prototype.append = function (e, t) {
                        (t.results = this.removePlaceholder(t.results)),
                            e.call(this, t);
                    }),
                    (e.prototype.normalizePlaceholder = function (e, t) {
                        return (t =
                            "string" == typeof t ? { id: "", text: t } : t);
                    }),
                    (e.prototype.removePlaceholder = function (e, t) {
                        for (
                            var n = t.slice(0), s = t.length - 1;
                            0 <= s;
                            s--
                        ) {
                            var i = t[s];
                            this.placeholder.id === i.id && n.splice(s, 1);
                        }
                        return n;
                    }),
                    e
                );
            }),
            u.define(
                "select2/dropdown/infiniteScroll",
                ["jquery"],
                function (n) {
                    function e(e, t, n, s) {
                        (this.lastParams = {}),
                            e.call(this, t, n, s),
                            (this.$loadingMore = this.createLoadingMore()),
                            (this.loading = !1);
                    }
                    return (
                        (e.prototype.append = function (e, t) {
                            this.$loadingMore.remove(),
                                (this.loading = !1),
                                e.call(this, t),
                                this.showLoadingMore(t) &&
                                    (this.$results.append(this.$loadingMore),
                                    this.loadMoreIfNeeded());
                        }),
                        (e.prototype.bind = function (e, t, n) {
                            var s = this;
                            e.call(this, t, n),
                                t.on("query", function (e) {
                                    (s.lastParams = e), (s.loading = !0);
                                }),
                                t.on("query:append", function (e) {
                                    (s.lastParams = e), (s.loading = !0);
                                }),
                                this.$results.on(
                                    "scroll",
                                    this.loadMoreIfNeeded.bind(this)
                                );
                        }),
                        (e.prototype.loadMoreIfNeeded = function () {
                            var e = n.contains(
                                document.documentElement,
                                this.$loadingMore[0]
                            );
                            !this.loading &&
                                e &&
                                ((e =
                                    this.$results.offset().top +
                                    this.$results.outerHeight(!1)),
                                this.$loadingMore.offset().top +
                                    this.$loadingMore.outerHeight(!1) <=
                                    e + 50 && this.loadMore());
                        }),
                        (e.prototype.loadMore = function () {
                            this.loading = !0;
                            var e = n.extend({}, { page: 1 }, this.lastParams);
                            e.page++, this.trigger("query:append", e);
                        }),
                        (e.prototype.showLoadingMore = function (e, t) {
                            return t.pagination && t.pagination.more;
                        }),
                        (e.prototype.createLoadingMore = function () {
                            var e = n(
                                    '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
                                ),
                                t = this.options
                                    .get("translations")
                                    .get("loadingMore");
                            return e.html(t(this.lastParams)), e;
                        }),
                        e
                    );
                }
            ),
            u.define(
                "select2/dropdown/attachBody",
                ["jquery", "../utils"],
                function (u, o) {
                    function e(e, t, n) {
                        (this.$dropdownParent = u(
                            n.get("dropdownParent") || document.body
                        )),
                            e.call(this, t, n);
                    }
                    return (
                        (e.prototype.bind = function (e, t, n) {
                            var s = this;
                            e.call(this, t, n),
                                t.on("open", function () {
                                    s._showDropdown(),
                                        s._attachPositioningHandler(t),
                                        s._bindContainerResultHandlers(t);
                                }),
                                t.on("close", function () {
                                    s._hideDropdown(),
                                        s._detachPositioningHandler(t);
                                }),
                                this.$dropdownContainer.on(
                                    "mousedown",
                                    function (e) {
                                        e.stopPropagation();
                                    }
                                );
                        }),
                        (e.prototype.destroy = function (e) {
                            e.call(this), this.$dropdownContainer.remove();
                        }),
                        (e.prototype.position = function (e, t, n) {
                            t.attr("class", n.attr("class")),
                                t[0].classList.remove("select2"),
                                t[0].classList.add("select2-container--open"),
                                t.css({ position: "absolute", top: -999999 }),
                                (this.$container = n);
                        }),
                        (e.prototype.render = function (e) {
                            var t = u("<span></span>"),
                                e = e.call(this);
                            return t.append(e), (this.$dropdownContainer = t);
                        }),
                        (e.prototype._hideDropdown = function (e) {
                            this.$dropdownContainer.detach();
                        }),
                        (e.prototype._bindContainerResultHandlers = function (
                            e,
                            t
                        ) {
                            var n;
                            this._containerResultsHandlersBound ||
                                ((n = this),
                                t.on("results:all", function () {
                                    n._positionDropdown(), n._resizeDropdown();
                                }),
                                t.on("results:append", function () {
                                    n._positionDropdown(), n._resizeDropdown();
                                }),
                                t.on("results:message", function () {
                                    n._positionDropdown(), n._resizeDropdown();
                                }),
                                t.on("select", function () {
                                    n._positionDropdown(), n._resizeDropdown();
                                }),
                                t.on("unselect", function () {
                                    n._positionDropdown(), n._resizeDropdown();
                                }),
                                (this._containerResultsHandlersBound = !0));
                        }),
                        (e.prototype._attachPositioningHandler = function (
                            e,
                            t
                        ) {
                            var n = this,
                                s = "scroll.select2." + t.id,
                                i = "resize.select2." + t.id,
                                r = "orientationchange.select2." + t.id,
                                t = this.$container
                                    .parents()
                                    .filter(o.hasScroll);
                            t.each(function () {
                                o.StoreData(this, "select2-scroll-position", {
                                    x: u(this).scrollLeft(),
                                    y: u(this).scrollTop(),
                                });
                            }),
                                t.on(s, function (e) {
                                    var t = o.GetData(
                                        this,
                                        "select2-scroll-position"
                                    );
                                    u(this).scrollTop(t.y);
                                }),
                                u(window).on(
                                    s + " " + i + " " + r,
                                    function (e) {
                                        n._positionDropdown(),
                                            n._resizeDropdown();
                                    }
                                );
                        }),
                        (e.prototype._detachPositioningHandler = function (
                            e,
                            t
                        ) {
                            var n = "scroll.select2." + t.id,
                                s = "resize.select2." + t.id,
                                t = "orientationchange.select2." + t.id;
                            this.$container
                                .parents()
                                .filter(o.hasScroll)
                                .off(n),
                                u(window).off(n + " " + s + " " + t);
                        }),
                        (e.prototype._positionDropdown = function () {
                            var e = u(window),
                                t = this.$dropdown[0].classList.contains(
                                    "select2-dropdown--above"
                                ),
                                n = this.$dropdown[0].classList.contains(
                                    "select2-dropdown--below"
                                ),
                                s = null,
                                i = this.$container.offset();
                            i.bottom = i.top + this.$container.outerHeight(!1);
                            var r = { height: this.$container.outerHeight(!1) };
                            (r.top = i.top), (r.bottom = i.top + r.height);
                            var o = this.$dropdown.outerHeight(!1),
                                a = e.scrollTop(),
                                l = e.scrollTop() + e.height(),
                                c = a < i.top - o,
                                e = l > i.bottom + o,
                                a = { left: i.left, top: r.bottom },
                                l = this.$dropdownParent;
                            "static" === l.css("position") &&
                                (l = l.offsetParent());
                            i = { top: 0, left: 0 };
                            (u.contains(document.body, l[0]) ||
                                l[0].isConnected) &&
                                (i = l.offset()),
                                (a.top -= i.top),
                                (a.left -= i.left),
                                t || n || (s = "below"),
                                e || !c || t
                                    ? !c && e && t && (s = "below")
                                    : (s = "above"),
                                ("above" == s || (t && "below" !== s)) &&
                                    (a.top = r.top - i.top - o),
                                null != s &&
                                    (this.$dropdown[0].classList.remove(
                                        "select2-dropdown--below"
                                    ),
                                    this.$dropdown[0].classList.remove(
                                        "select2-dropdown--above"
                                    ),
                                    this.$dropdown[0].classList.add(
                                        "select2-dropdown--" + s
                                    ),
                                    this.$container[0].classList.remove(
                                        "select2-container--below"
                                    ),
                                    this.$container[0].classList.remove(
                                        "select2-container--above"
                                    ),
                                    this.$container[0].classList.add(
                                        "select2-container--" + s
                                    )),
                                this.$dropdownContainer.css(a);
                        }),
                        (e.prototype._resizeDropdown = function () {
                            var e = {
                                width: this.$container.outerWidth(!1) + "px",
                            };
                            this.options.get("dropdownAutoWidth") &&
                                ((e.minWidth = e.width),
                                (e.position = "relative"),
                                (e.width = "auto")),
                                this.$dropdown.css(e);
                        }),
                        (e.prototype._showDropdown = function (e) {
                            this.$dropdownContainer.appendTo(
                                this.$dropdownParent
                            ),
                                this._positionDropdown(),
                                this._resizeDropdown();
                        }),
                        e
                    );
                }
            ),
            u.define(
                "select2/dropdown/minimumResultsForSearch",
                [],
                function () {
                    function e(e, t, n, s) {
                        (this.minimumResultsForSearch = n.get(
                            "minimumResultsForSearch"
                        )),
                            this.minimumResultsForSearch < 0 &&
                                (this.minimumResultsForSearch = 1 / 0),
                            e.call(this, t, n, s);
                    }
                    return (
                        (e.prototype.showSearch = function (e, t) {
                            return (
                                !(
                                    (function e(t) {
                                        for (
                                            var n = 0, s = 0;
                                            s < t.length;
                                            s++
                                        ) {
                                            var i = t[s];
                                            i.children
                                                ? (n += e(i.children))
                                                : n++;
                                        }
                                        return n;
                                    })(t.data.results) <
                                    this.minimumResultsForSearch
                                ) && e.call(this, t)
                            );
                        }),
                        e
                    );
                }
            ),
            u.define(
                "select2/dropdown/selectOnClose",
                ["../utils"],
                function (s) {
                    function e() {}
                    return (
                        (e.prototype.bind = function (e, t, n) {
                            var s = this;
                            e.call(this, t, n),
                                t.on("close", function (e) {
                                    s._handleSelectOnClose(e);
                                });
                        }),
                        (e.prototype._handleSelectOnClose = function (e, t) {
                            if (t && null != t.originalSelect2Event) {
                                var n = t.originalSelect2Event;
                                if (
                                    "select" === n._type ||
                                    "unselect" === n._type
                                )
                                    return;
                            }
                            n = this.getHighlightedResults();
                            n.length < 1 ||
                                (null !=
                                    (n = s.GetData(n[0], "data")).element &&
                                    n.element.selected) ||
                                (null == n.element && n.selected) ||
                                this.trigger("select", { data: n });
                        }),
                        e
                    );
                }
            ),
            u.define("select2/dropdown/closeOnSelect", [], function () {
                function e() {}
                return (
                    (e.prototype.bind = function (e, t, n) {
                        var s = this;
                        e.call(this, t, n),
                            t.on("select", function (e) {
                                s._selectTriggered(e);
                            }),
                            t.on("unselect", function (e) {
                                s._selectTriggered(e);
                            });
                    }),
                    (e.prototype._selectTriggered = function (e, t) {
                        var n = t.originalEvent;
                        (n && (n.ctrlKey || n.metaKey)) ||
                            this.trigger("close", {
                                originalEvent: n,
                                originalSelect2Event: t,
                            });
                    }),
                    e
                );
            }),
            u.define(
                "select2/dropdown/dropdownCss",
                ["../utils"],
                function (n) {
                    function e() {}
                    return (
                        (e.prototype.render = function (e) {
                            var t = e.call(this),
                                e = this.options.get("dropdownCssClass") || "";
                            return (
                                -1 !== e.indexOf(":all:") &&
                                    ((e = e.replace(":all:", "")),
                                    n.copyNonInternalCssClasses(
                                        t[0],
                                        this.$element[0]
                                    )),
                                t.addClass(e),
                                t
                            );
                        }),
                        e
                    );
                }
            ),
            u.define(
                "select2/dropdown/tagsSearchHighlight",
                ["../utils"],
                function (s) {
                    function e() {}
                    return (
                        (e.prototype.highlightFirstItem = function (e) {
                            var t = this.$results.find(
                                ".select2-results__option--selectable:not(.select2-results__option--selected)"
                            );
                            if (0 < t.length) {
                                var n = t.first(),
                                    t = s.GetData(n[0], "data").element;
                                if (
                                    t &&
                                    t.getAttribute &&
                                    "true" ===
                                        t.getAttribute("data-select2-tag")
                                )
                                    return void n.trigger("mouseenter");
                            }
                            e.call(this);
                        }),
                        e
                    );
                }
            ),
            u.define("select2/i18n/en", [], function () {
                return {
                    errorLoading: function () {
                        return "The results could not be loaded.";
                    },
                    inputTooLong: function (e) {
                        var t = e.input.length - e.maximum,
                            e = "Please delete " + t + " character";
                        return 1 != t && (e += "s"), e;
                    },
                    inputTooShort: function (e) {
                        return (
                            "Please enter " +
                            (e.minimum - e.input.length) +
                            " or more characters"
                        );
                    },
                    loadingMore: function () {
                        return "Loading more results…";
                    },
                    maximumSelected: function (e) {
                        var t = "You can only select " + e.maximum + " item";
                        return 1 != e.maximum && (t += "s"), t;
                    },
                    noResults: function () {
                        return "No results found";
                    },
                    searching: function () {
                        return "Searching…";
                    },
                    removeAllItems: function () {
                        return "Remove all items";
                    },
                    removeItem: function () {
                        return "Remove item";
                    },
                    search: function () {
                        return "Search";
                    },
                };
            }),
            u.define(
                "select2/defaults",
                [
                    "jquery",
                    "./results",
                    "./selection/single",
                    "./selection/multiple",
                    "./selection/placeholder",
                    "./selection/allowClear",
                    "./selection/search",
                    "./selection/selectionCss",
                    "./selection/eventRelay",
                    "./utils",
                    "./translation",
                    "./diacritics",
                    "./data/select",
                    "./data/array",
                    "./data/ajax",
                    "./data/tags",
                    "./data/tokenizer",
                    "./data/minimumInputLength",
                    "./data/maximumInputLength",
                    "./data/maximumSelectionLength",
                    "./dropdown",
                    "./dropdown/search",
                    "./dropdown/hidePlaceholder",
                    "./dropdown/infiniteScroll",
                    "./dropdown/attachBody",
                    "./dropdown/minimumResultsForSearch",
                    "./dropdown/selectOnClose",
                    "./dropdown/closeOnSelect",
                    "./dropdown/dropdownCss",
                    "./dropdown/tagsSearchHighlight",
                    "./i18n/en",
                ],
                function (
                    l,
                    r,
                    o,
                    a,
                    c,
                    u,
                    d,
                    p,
                    h,
                    f,
                    g,
                    t,
                    m,
                    y,
                    v,
                    _,
                    b,
                    $,
                    w,
                    x,
                    A,
                    D,
                    S,
                    E,
                    O,
                    C,
                    L,
                    T,
                    q,
                    I,
                    e
                ) {
                    function n() {
                        this.reset();
                    }
                    return (
                        (n.prototype.apply = function (e) {
                            var t;
                            null ==
                                (e = l.extend(!0, {}, this.defaults, e))
                                    .dataAdapter &&
                                (null != e.ajax
                                    ? (e.dataAdapter = v)
                                    : null != e.data
                                    ? (e.dataAdapter = y)
                                    : (e.dataAdapter = m),
                                0 < e.minimumInputLength &&
                                    (e.dataAdapter = f.Decorate(
                                        e.dataAdapter,
                                        $
                                    )),
                                0 < e.maximumInputLength &&
                                    (e.dataAdapter = f.Decorate(
                                        e.dataAdapter,
                                        w
                                    )),
                                0 < e.maximumSelectionLength &&
                                    (e.dataAdapter = f.Decorate(
                                        e.dataAdapter,
                                        x
                                    )),
                                e.tags &&
                                    (e.dataAdapter = f.Decorate(
                                        e.dataAdapter,
                                        _
                                    )),
                                (null == e.tokenSeparators &&
                                    null == e.tokenizer) ||
                                    (e.dataAdapter = f.Decorate(
                                        e.dataAdapter,
                                        b
                                    ))),
                                null == e.resultsAdapter &&
                                    ((e.resultsAdapter = r),
                                    null != e.ajax &&
                                        (e.resultsAdapter = f.Decorate(
                                            e.resultsAdapter,
                                            E
                                        )),
                                    null != e.placeholder &&
                                        (e.resultsAdapter = f.Decorate(
                                            e.resultsAdapter,
                                            S
                                        )),
                                    e.selectOnClose &&
                                        (e.resultsAdapter = f.Decorate(
                                            e.resultsAdapter,
                                            L
                                        )),
                                    e.tags &&
                                        (e.resultsAdapter = f.Decorate(
                                            e.resultsAdapter,
                                            I
                                        ))),
                                null == e.dropdownAdapter &&
                                    (e.multiple
                                        ? (e.dropdownAdapter = A)
                                        : ((t = f.Decorate(A, D)),
                                          (e.dropdownAdapter = t)),
                                    0 !== e.minimumResultsForSearch &&
                                        (e.dropdownAdapter = f.Decorate(
                                            e.dropdownAdapter,
                                            C
                                        )),
                                    e.closeOnSelect &&
                                        (e.dropdownAdapter = f.Decorate(
                                            e.dropdownAdapter,
                                            T
                                        )),
                                    null != e.dropdownCssClass &&
                                        (e.dropdownAdapter = f.Decorate(
                                            e.dropdownAdapter,
                                            q
                                        )),
                                    (e.dropdownAdapter = f.Decorate(
                                        e.dropdownAdapter,
                                        O
                                    ))),
                                null == e.selectionAdapter &&
                                    (e.multiple
                                        ? (e.selectionAdapter = a)
                                        : (e.selectionAdapter = o),
                                    null != e.placeholder &&
                                        (e.selectionAdapter = f.Decorate(
                                            e.selectionAdapter,
                                            c
                                        )),
                                    e.allowClear &&
                                        (e.selectionAdapter = f.Decorate(
                                            e.selectionAdapter,
                                            u
                                        )),
                                    e.multiple &&
                                        (e.selectionAdapter = f.Decorate(
                                            e.selectionAdapter,
                                            d
                                        )),
                                    null != e.selectionCssClass &&
                                        (e.selectionAdapter = f.Decorate(
                                            e.selectionAdapter,
                                            p
                                        )),
                                    (e.selectionAdapter = f.Decorate(
                                        e.selectionAdapter,
                                        h
                                    ))),
                                (e.language = this._resolveLanguage(
                                    e.language
                                )),
                                e.language.push("en");
                            for (
                                var n = [], s = 0;
                                s < e.language.length;
                                s++
                            ) {
                                var i = e.language[s];
                                -1 === n.indexOf(i) && n.push(i);
                            }
                            return (
                                (e.language = n),
                                (e.translations = this._processTranslations(
                                    e.language,
                                    e.debug
                                )),
                                e
                            );
                        }),
                        (n.prototype.reset = function () {
                            function a(e) {
                                return e.replace(
                                    /[^\u0000-\u007E]/g,
                                    function (e) {
                                        return t[e] || e;
                                    }
                                );
                            }
                            this.defaults = {
                                amdLanguageBase: "./i18n/",
                                autocomplete: "off",
                                closeOnSelect: !0,
                                debug: !1,
                                dropdownAutoWidth: !1,
                                escapeMarkup: f.escapeMarkup,
                                language: {},
                                matcher: function e(t, n) {
                                    if (null == t.term || "" === t.term.trim())
                                        return n;
                                    if (n.children && 0 < n.children.length) {
                                        for (
                                            var s = l.extend(!0, {}, n),
                                                i = n.children.length - 1;
                                            0 <= i;
                                            i--
                                        )
                                            null == e(t, n.children[i]) &&
                                                s.children.splice(i, 1);
                                        return 0 < s.children.length
                                            ? s
                                            : e(t, s);
                                    }
                                    var r = a(n.text).toUpperCase(),
                                        o = a(t.term).toUpperCase();
                                    return -1 < r.indexOf(o) ? n : null;
                                },
                                minimumInputLength: 0,
                                maximumInputLength: 0,
                                maximumSelectionLength: 0,
                                minimumResultsForSearch: 0,
                                selectOnClose: !1,
                                scrollAfterSelect: !1,
                                sorter: function (e) {
                                    return e;
                                },
                                templateResult: function (e) {
                                    return e.text;
                                },
                                templateSelection: function (e) {
                                    return e.text;
                                },
                                theme: "default",
                                width: "resolve",
                            };
                        }),
                        (n.prototype.applyFromElement = function (e, t) {
                            var n = e.language,
                                s = this.defaults.language,
                                i = t.prop("lang"),
                                t = t.closest("[lang]").prop("lang"),
                                t = Array.prototype.concat.call(
                                    this._resolveLanguage(i),
                                    this._resolveLanguage(n),
                                    this._resolveLanguage(s),
                                    this._resolveLanguage(t)
                                );
                            return (e.language = t), e;
                        }),
                        (n.prototype._resolveLanguage = function (e) {
                            if (!e) return [];
                            if (l.isEmptyObject(e)) return [];
                            if (l.isPlainObject(e)) return [e];
                            for (
                                var t,
                                    n = Array.isArray(e) ? e : [e],
                                    s = [],
                                    i = 0;
                                i < n.length;
                                i++
                            )
                                s.push(n[i]),
                                    "string" == typeof n[i] &&
                                        0 < n[i].indexOf("-") &&
                                        ((t = n[i].split("-")[0]), s.push(t));
                            return s;
                        }),
                        (n.prototype._processTranslations = function (e, t) {
                            for (var n = new g(), s = 0; s < e.length; s++) {
                                var i = new g(),
                                    r = e[s];
                                if ("string" == typeof r)
                                    try {
                                        i = g.loadPath(r);
                                    } catch (e) {
                                        try {
                                            (r =
                                                this.defaults.amdLanguageBase +
                                                r),
                                                (i = g.loadPath(r));
                                        } catch (e) {
                                            t &&
                                                window.console &&
                                                console.warn &&
                                                console.warn(
                                                    'Select2: The language file for "' +
                                                        r +
                                                        '" could not be automatically loaded. A fallback will be used instead.'
                                                );
                                        }
                                    }
                                else i = l.isPlainObject(r) ? new g(r) : r;
                                n.extend(i);
                            }
                            return n;
                        }),
                        (n.prototype.set = function (e, t) {
                            var n = {};
                            n[l.camelCase(e)] = t;
                            n = f._convertData(n);
                            l.extend(!0, this.defaults, n);
                        }),
                        new n()
                    );
                }
            ),
            u.define(
                "select2/options",
                ["jquery", "./defaults", "./utils"],
                function (c, n, u) {
                    function e(e, t) {
                        (this.options = e),
                            null != t && this.fromElement(t),
                            null != t &&
                                (this.options = n.applyFromElement(
                                    this.options,
                                    t
                                )),
                            (this.options = n.apply(this.options));
                    }
                    return (
                        (e.prototype.fromElement = function (e) {
                            var t = ["select2"];
                            null == this.options.multiple &&
                                (this.options.multiple = e.prop("multiple")),
                                null == this.options.disabled &&
                                    (this.options.disabled =
                                        e.prop("disabled")),
                                null == this.options.autocomplete &&
                                    e.prop("autocomplete") &&
                                    (this.options.autocomplete =
                                        e.prop("autocomplete")),
                                null == this.options.dir &&
                                    (e.prop("dir")
                                        ? (this.options.dir = e.prop("dir"))
                                        : e.closest("[dir]").prop("dir")
                                        ? (this.options.dir = e
                                              .closest("[dir]")
                                              .prop("dir"))
                                        : (this.options.dir = "ltr")),
                                e.prop("disabled", this.options.disabled),
                                e.prop("multiple", this.options.multiple),
                                u.GetData(e[0], "select2Tags") &&
                                    (this.options.debug &&
                                        window.console &&
                                        console.warn &&
                                        console.warn(
                                            'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                                        ),
                                    u.StoreData(
                                        e[0],
                                        "data",
                                        u.GetData(e[0], "select2Tags")
                                    ),
                                    u.StoreData(e[0], "tags", !0)),
                                u.GetData(e[0], "ajaxUrl") &&
                                    (this.options.debug &&
                                        window.console &&
                                        console.warn &&
                                        console.warn(
                                            "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                                        ),
                                    e.attr(
                                        "ajax--url",
                                        u.GetData(e[0], "ajaxUrl")
                                    ),
                                    u.StoreData(
                                        e[0],
                                        "ajax-Url",
                                        u.GetData(e[0], "ajaxUrl")
                                    ));
                            var n = {};
                            function s(e, t) {
                                return t.toUpperCase();
                            }
                            for (var i = 0; i < e[0].attributes.length; i++) {
                                var r = e[0].attributes[i].name,
                                    o = "data-";
                                r.substr(0, o.length) == o &&
                                    ((r = r.substring(o.length)),
                                    (o = u.GetData(e[0], r)),
                                    (n[r.replace(/-([a-z])/g, s)] = o));
                            }
                            c.fn.jquery &&
                                "1." == c.fn.jquery.substr(0, 2) &&
                                e[0].dataset &&
                                (n = c.extend(!0, {}, e[0].dataset, n));
                            var a,
                                l = c.extend(!0, {}, u.GetData(e[0]), n);
                            for (a in (l = u._convertData(l)))
                                -1 < t.indexOf(a) ||
                                    (c.isPlainObject(this.options[a])
                                        ? c.extend(this.options[a], l[a])
                                        : (this.options[a] = l[a]));
                            return this;
                        }),
                        (e.prototype.get = function (e) {
                            return this.options[e];
                        }),
                        (e.prototype.set = function (e, t) {
                            this.options[e] = t;
                        }),
                        e
                    );
                }
            ),
            u.define(
                "select2/core",
                ["jquery", "./options", "./utils", "./keys"],
                function (t, i, r, s) {
                    var o = function (e, t) {
                        null != r.GetData(e[0], "select2") &&
                            r.GetData(e[0], "select2").destroy(),
                            (this.$element = e),
                            (this.id = this._generateId(e)),
                            (t = t || {}),
                            (this.options = new i(t, e)),
                            o.__super__.constructor.call(this);
                        var n = e.attr("tabindex") || 0;
                        r.StoreData(e[0], "old-tabindex", n),
                            e.attr("tabindex", "-1");
                        t = this.options.get("dataAdapter");
                        this.dataAdapter = new t(e, this.options);
                        n = this.render();
                        this._placeContainer(n);
                        t = this.options.get("selectionAdapter");
                        (this.selection = new t(e, this.options)),
                            (this.$selection = this.selection.render()),
                            this.selection.position(this.$selection, n);
                        t = this.options.get("dropdownAdapter");
                        (this.dropdown = new t(e, this.options)),
                            (this.$dropdown = this.dropdown.render()),
                            this.dropdown.position(this.$dropdown, n);
                        n = this.options.get("resultsAdapter");
                        (this.results = new n(
                            e,
                            this.options,
                            this.dataAdapter
                        )),
                            (this.$results = this.results.render()),
                            this.results.position(
                                this.$results,
                                this.$dropdown
                            );
                        var s = this;
                        this._bindAdapters(),
                            this._registerDomEvents(),
                            this._registerDataEvents(),
                            this._registerSelectionEvents(),
                            this._registerDropdownEvents(),
                            this._registerResultsEvents(),
                            this._registerEvents(),
                            this.dataAdapter.current(function (e) {
                                s.trigger("selection:update", { data: e });
                            }),
                            e[0].classList.add("select2-hidden-accessible"),
                            e.attr("aria-hidden", "true"),
                            this._syncAttributes(),
                            r.StoreData(e[0], "select2", this),
                            e.data("select2", this);
                    };
                    return (
                        r.Extend(o, r.Observable),
                        (o.prototype._generateId = function (e) {
                            return (
                                "select2-" +
                                (null != e.attr("id")
                                    ? e.attr("id")
                                    : null != e.attr("name")
                                    ? e.attr("name") + "-" + r.generateChars(2)
                                    : r.generateChars(4)
                                ).replace(/(:|\.|\[|\]|,)/g, "")
                            );
                        }),
                        (o.prototype._placeContainer = function (e) {
                            e.insertAfter(this.$element);
                            var t = this._resolveWidth(
                                this.$element,
                                this.options.get("width")
                            );
                            null != t && e.css("width", t);
                        }),
                        (o.prototype._resolveWidth = function (e, t) {
                            var n =
                                /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                            if ("resolve" == t) {
                                var s = this._resolveWidth(e, "style");
                                return null != s
                                    ? s
                                    : this._resolveWidth(e, "element");
                            }
                            if ("element" == t) {
                                s = e.outerWidth(!1);
                                return s <= 0 ? "auto" : s + "px";
                            }
                            if ("style" != t)
                                return "computedstyle" != t
                                    ? t
                                    : window.getComputedStyle(e[0]).width;
                            e = e.attr("style");
                            if ("string" != typeof e) return null;
                            for (
                                var i = e.split(";"), r = 0, o = i.length;
                                r < o;
                                r += 1
                            ) {
                                var a = i[r].replace(/\s/g, "").match(n);
                                if (null !== a && 1 <= a.length) return a[1];
                            }
                            return null;
                        }),
                        (o.prototype._bindAdapters = function () {
                            this.dataAdapter.bind(this, this.$container),
                                this.selection.bind(this, this.$container),
                                this.dropdown.bind(this, this.$container),
                                this.results.bind(this, this.$container);
                        }),
                        (o.prototype._registerDomEvents = function () {
                            var t = this;
                            this.$element.on("change.select2", function () {
                                t.dataAdapter.current(function (e) {
                                    t.trigger("selection:update", { data: e });
                                });
                            }),
                                this.$element.on("focus.select2", function (e) {
                                    t.trigger("focus", e);
                                }),
                                (this._syncA = r.bind(
                                    this._syncAttributes,
                                    this
                                )),
                                (this._syncS = r.bind(this._syncSubtree, this)),
                                (this._observer = new window.MutationObserver(
                                    function (e) {
                                        t._syncA(), t._syncS(e);
                                    }
                                )),
                                this._observer.observe(this.$element[0], {
                                    attributes: !0,
                                    childList: !0,
                                    subtree: !1,
                                });
                        }),
                        (o.prototype._registerDataEvents = function () {
                            var n = this;
                            this.dataAdapter.on("*", function (e, t) {
                                n.trigger(e, t);
                            });
                        }),
                        (o.prototype._registerSelectionEvents = function () {
                            var n = this,
                                s = ["toggle", "focus"];
                            this.selection.on("toggle", function () {
                                n.toggleDropdown();
                            }),
                                this.selection.on("focus", function (e) {
                                    n.focus(e);
                                }),
                                this.selection.on("*", function (e, t) {
                                    -1 === s.indexOf(e) && n.trigger(e, t);
                                });
                        }),
                        (o.prototype._registerDropdownEvents = function () {
                            var n = this;
                            this.dropdown.on("*", function (e, t) {
                                n.trigger(e, t);
                            });
                        }),
                        (o.prototype._registerResultsEvents = function () {
                            var n = this;
                            this.results.on("*", function (e, t) {
                                n.trigger(e, t);
                            });
                        }),
                        (o.prototype._registerEvents = function () {
                            var n = this;
                            this.on("open", function () {
                                n.$container[0].classList.add(
                                    "select2-container--open"
                                );
                            }),
                                this.on("close", function () {
                                    n.$container[0].classList.remove(
                                        "select2-container--open"
                                    );
                                }),
                                this.on("enable", function () {
                                    n.$container[0].classList.remove(
                                        "select2-container--disabled"
                                    );
                                }),
                                this.on("disable", function () {
                                    n.$container[0].classList.add(
                                        "select2-container--disabled"
                                    );
                                }),
                                this.on("blur", function () {
                                    n.$container[0].classList.remove(
                                        "select2-container--focus"
                                    );
                                }),
                                this.on("query", function (t) {
                                    n.isOpen() || n.trigger("open", {}),
                                        this.dataAdapter.query(t, function (e) {
                                            n.trigger("results:all", {
                                                data: e,
                                                query: t,
                                            });
                                        });
                                }),
                                this.on("query:append", function (t) {
                                    this.dataAdapter.query(t, function (e) {
                                        n.trigger("results:append", {
                                            data: e,
                                            query: t,
                                        });
                                    });
                                }),
                                this.on("keypress", function (e) {
                                    var t = e.which;
                                    n.isOpen()
                                        ? t === s.ESC ||
                                          (t === s.UP && e.altKey)
                                            ? (n.close(e), e.preventDefault())
                                            : t === s.ENTER || t === s.TAB
                                            ? (n.trigger("results:select", {}),
                                              e.preventDefault())
                                            : t === s.SPACE && e.ctrlKey
                                            ? (n.trigger("results:toggle", {}),
                                              e.preventDefault())
                                            : t === s.UP
                                            ? (n.trigger(
                                                  "results:previous",
                                                  {}
                                              ),
                                              e.preventDefault())
                                            : t === s.DOWN &&
                                              (n.trigger("results:next", {}),
                                              e.preventDefault())
                                        : (t === s.ENTER ||
                                              t === s.SPACE ||
                                              (t === s.DOWN && e.altKey)) &&
                                          (n.open(), e.preventDefault());
                                });
                        }),
                        (o.prototype._syncAttributes = function () {
                            this.options.set(
                                "disabled",
                                this.$element.prop("disabled")
                            ),
                                this.isDisabled()
                                    ? (this.isOpen() && this.close(),
                                      this.trigger("disable", {}))
                                    : this.trigger("enable", {});
                        }),
                        (o.prototype._isChangeMutation = function (e) {
                            var t = this;
                            if (e.addedNodes && 0 < e.addedNodes.length) {
                                for (var n = 0; n < e.addedNodes.length; n++)
                                    if (e.addedNodes[n].selected) return !0;
                            } else {
                                if (e.removedNodes && 0 < e.removedNodes.length)
                                    return !0;
                                if (Array.isArray(e))
                                    return e.some(function (e) {
                                        return t._isChangeMutation(e);
                                    });
                            }
                            return !1;
                        }),
                        (o.prototype._syncSubtree = function (e) {
                            var e = this._isChangeMutation(e),
                                t = this;
                            e &&
                                this.dataAdapter.current(function (e) {
                                    t.trigger("selection:update", { data: e });
                                });
                        }),
                        (o.prototype.trigger = function (e, t) {
                            var n = o.__super__.trigger,
                                s = {
                                    open: "opening",
                                    close: "closing",
                                    select: "selecting",
                                    unselect: "unselecting",
                                    clear: "clearing",
                                };
                            if ((void 0 === t && (t = {}), e in s)) {
                                var i = s[e],
                                    s = { prevented: !1, name: e, args: t };
                                if ((n.call(this, i, s), s.prevented))
                                    return void (t.prevented = !0);
                            }
                            n.call(this, e, t);
                        }),
                        (o.prototype.toggleDropdown = function () {
                            this.isDisabled() ||
                                (this.isOpen() ? this.close() : this.open());
                        }),
                        (o.prototype.open = function () {
                            this.isOpen() ||
                                this.isDisabled() ||
                                this.trigger("query", {});
                        }),
                        (o.prototype.close = function (e) {
                            this.isOpen() &&
                                this.trigger("close", { originalEvent: e });
                        }),
                        (o.prototype.isEnabled = function () {
                            return !this.isDisabled();
                        }),
                        (o.prototype.isDisabled = function () {
                            return this.options.get("disabled");
                        }),
                        (o.prototype.isOpen = function () {
                            return this.$container[0].classList.contains(
                                "select2-container--open"
                            );
                        }),
                        (o.prototype.hasFocus = function () {
                            return this.$container[0].classList.contains(
                                "select2-container--focus"
                            );
                        }),
                        (o.prototype.focus = function (e) {
                            this.hasFocus() ||
                                (this.$container[0].classList.add(
                                    "select2-container--focus"
                                ),
                                this.trigger("focus", {}));
                        }),
                        (o.prototype.enable = function (e) {
                            this.options.get("debug") &&
                                window.console &&
                                console.warn &&
                                console.warn(
                                    'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                                );
                            e = !(e =
                                null == e || 0 === e.length ? [!0] : e)[0];
                            this.$element.prop("disabled", e);
                        }),
                        (o.prototype.data = function () {
                            this.options.get("debug") &&
                                0 < arguments.length &&
                                window.console &&
                                console.warn &&
                                console.warn(
                                    'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                                );
                            var t = [];
                            return (
                                this.dataAdapter.current(function (e) {
                                    t = e;
                                }),
                                t
                            );
                        }),
                        (o.prototype.val = function (e) {
                            if (
                                (this.options.get("debug") &&
                                    window.console &&
                                    console.warn &&
                                    console.warn(
                                        'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                                    ),
                                null == e || 0 === e.length)
                            )
                                return this.$element.val();
                            e = e[0];
                            Array.isArray(e) &&
                                (e = e.map(function (e) {
                                    return e.toString();
                                })),
                                this.$element
                                    .val(e)
                                    .trigger("input")
                                    .trigger("change");
                        }),
                        (o.prototype.destroy = function () {
                            r.RemoveData(this.$container[0]),
                                this.$container.remove(),
                                this._observer.disconnect(),
                                (this._observer = null),
                                (this._syncA = null),
                                (this._syncS = null),
                                this.$element.off(".select2"),
                                this.$element.attr(
                                    "tabindex",
                                    r.GetData(this.$element[0], "old-tabindex")
                                ),
                                this.$element[0].classList.remove(
                                    "select2-hidden-accessible"
                                ),
                                this.$element.attr("aria-hidden", "false"),
                                r.RemoveData(this.$element[0]),
                                this.$element.removeData("select2"),
                                this.dataAdapter.destroy(),
                                this.selection.destroy(),
                                this.dropdown.destroy(),
                                this.results.destroy(),
                                (this.dataAdapter = null),
                                (this.selection = null),
                                (this.dropdown = null),
                                (this.results = null);
                        }),
                        (o.prototype.render = function () {
                            var e = t(
                                '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                            );
                            return (
                                e.attr("dir", this.options.get("dir")),
                                (this.$container = e),
                                this.$container[0].classList.add(
                                    "select2-container--" +
                                        this.options.get("theme")
                                ),
                                r.StoreData(e[0], "element", this.$element),
                                e
                            );
                        }),
                        o
                    );
                }
            ),
            u.define("jquery-mousewheel", ["jquery"], function (e) {
                return e;
            }),
            u.define(
                "jquery.select2",
                [
                    "jquery",
                    "jquery-mousewheel",
                    "./select2/core",
                    "./select2/defaults",
                    "./select2/utils",
                ],
                function (i, e, r, t, o) {
                    var a;
                    return (
                        null == i.fn.select2 &&
                            ((a = ["open", "close", "destroy"]),
                            (i.fn.select2 = function (t) {
                                if ("object" == typeof (t = t || {}))
                                    return (
                                        this.each(function () {
                                            var e = i.extend(!0, {}, t);
                                            new r(i(this), e);
                                        }),
                                        this
                                    );
                                if ("string" != typeof t)
                                    throw new Error(
                                        "Invalid arguments for Select2: " + t
                                    );
                                var n,
                                    s = Array.prototype.slice.call(
                                        arguments,
                                        1
                                    );
                                return (
                                    this.each(function () {
                                        var e = o.GetData(this, "select2");
                                        null == e &&
                                            window.console &&
                                            console.error &&
                                            console.error(
                                                "The select2('" +
                                                    t +
                                                    "') method was called on an element that is not using Select2."
                                            ),
                                            (n = e[t].apply(e, s));
                                    }),
                                    -1 < a.indexOf(t) ? this : n
                                );
                            })),
                        null == i.fn.select2.defaults &&
                            (i.fn.select2.defaults = t),
                        r
                    );
                }
            ),
            { define: u.define, require: u.require });
    function b(e, t) {
        return i.call(e, t);
    }
    function l(e, t) {
        var n,
            s,
            i,
            r,
            o,
            a,
            l,
            c,
            u,
            d,
            p = t && t.split("/"),
            h = y.map,
            f = (h && h["*"]) || {};
        if (e) {
            for (
                t = (e = e.split("/")).length - 1,
                    y.nodeIdCompat &&
                        _.test(e[t]) &&
                        (e[t] = e[t].replace(_, "")),
                    "." === e[0].charAt(0) &&
                        p &&
                        (e = p.slice(0, p.length - 1).concat(e)),
                    c = 0;
                c < e.length;
                c++
            )
                "." === (d = e[c])
                    ? (e.splice(c, 1), --c)
                    : ".." === d &&
                      (0 === c ||
                          (1 === c && ".." === e[2]) ||
                          ".." === e[c - 1] ||
                          (0 < c && (e.splice(c - 1, 2), (c -= 2))));
            e = e.join("/");
        }
        if ((p || f) && h) {
            for (c = (n = e.split("/")).length; 0 < c; --c) {
                if (((s = n.slice(0, c).join("/")), p))
                    for (u = p.length; 0 < u; --u)
                        if (
                            ((i = h[p.slice(0, u).join("/")]), (i = i && i[s]))
                        ) {
                            (r = i), (o = c);
                            break;
                        }
                if (r) break;
                !a && f && f[s] && ((a = f[s]), (l = c));
            }
            !r && a && ((r = a), (o = l)),
                r && (n.splice(0, o, r), (e = n.join("/")));
        }
        return e;
    }
    function w(t, n) {
        return function () {
            var e = a.call(arguments, 0);
            return (
                "string" != typeof e[0] && 1 === e.length && e.push(null),
                o.apply(p, e.concat([t, n]))
            );
        };
    }
    function x(e) {
        var t;
        if (
            (b(m, e) && ((t = m[e]), delete m[e], (v[e] = !0), r.apply(p, t)),
            !b(g, e) && !b(v, e))
        )
            throw new Error("No " + e);
        return g[e];
    }
    function c(e) {
        var t,
            n = e ? e.indexOf("!") : -1;
        return (
            -1 < n &&
                ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
            [t, e]
        );
    }
    function A(e) {
        return e ? c(e) : [];
    }
    var u = s.require("jquery.select2");
    return (t.fn.select2.amd = s), u;
});

/* whatsapp chatbox js file */

(function (window, $, undefined) {
    var WhatsappChatSupport = function (container, options) {
        this.init(container, options);
    };
    WhatsappChatSupport.DEFAULTS = {
        popupFx: "1",
        now: "",
        timezone: "America/Chicago",
        notAvailableMsg: "I am not available today",
        almostAvailableMsg: "I will be available soon",
        dialogNotAvailableMsg: "I am not available today",
        dialogAlmostAvailableMsg: "I will be available soon",
        defaultMsg: "Hi, I have some questions about this page: {{url}}!",
        debug: false,
        onPopupOpen: function () {},
        onPopupClose: function () {},
        whenGoingToWhatsApp: function (number, text) {},
    };
    WhatsappChatSupport.prototype.init = function (container, options) {
        var settings = $.extend(
            true,
            {},
            WhatsappChatSupport.DEFAULTS,
            options
        );
        settings.defaultMsg = settings.defaultMsg
            .split("{{url}}")
            .join(window.location.href);
        settings.defaultMsg = settings.defaultMsg
            .split("[url]")
            .join(window.location.href);
        var $container = $(container);
        var $button = $container.find(".wcs_button");
        var $label = $container.find(".wcs_button_label");
        var $popup = $container.find(".wcs_popup");
        var popup_input = $container.find(".wcs_popup_input");
        var popup_persons = $container.find(".wcs_popup_person_container");
        $container.addClass("wcs-effect-" + settings.popupFx);
        var debug = $('<div class="wcs_debug"></div>');
        if (settings.debug) {
            $("body").append(debug);
        }
        $button.on("click", function () {
            if ($popup[0] != undefined) {
                if ($container.hasClass("wcs-show")) {
                    close_popup();
                } else {
                    open_popup();
                }
            }
        });
        $label.on("click", function () {
            if ($popup[0] != undefined) {
                if ($container.hasClass("wcs-show")) {
                    close_popup();
                } else {
                    open_popup();
                }
            }
        });
        $popup.find(".wcs_popup_close").on("click", function () {
            close_popup();
        });
        $button.on("click", function () {
            var $this = $(this);
            if (
                $this.attr("data-number") != undefined &&
                !$this.hasClass("wcs_button_person_offline")
            ) {
                go_to_whatsapp($this.attr("data-number"), settings.defaultMsg);
            }
        });
        popup_input.on("click", ".fa", function () {
            var $this = $(this);
            go_to_whatsapp(
                popup_input.attr("data-number"),
                popup_input.find('input[type="text"]').val()
            );
        });
        popup_input.find('input[type="text"]').keypress(function (e) {
            if (e.which == 13) {
                var $this = $(this);
                go_to_whatsapp(
                    popup_input.attr("data-number"),
                    popup_input.find('input[type="text"]').val()
                );
            }
        });
        popup_persons.on("click", ".wcs_popup_person", function () {
            var $this = $(this);
            if (!$this.hasClass("wcs_popup_person_offline")) {
                var defaultMsg = settings.defaultMsg;
                if ($this.attr("data-default-msg") !== undefined) {
                    defaultMsg = $this
                        .attr("data-default-msg")
                        .split("{{url}}")
                        .join(window.location.href);
                }
                go_to_whatsapp($this.attr("data-number"), defaultMsg);
            }
        });
        function open_popup() {
            settings.onPopupOpen();
            close_all_popup();
            $label.addClass("wcs_button_label_hide");
            $container.addClass("wcs-show");
            setTimeout(function () {
                $popup.find("input").val(settings.defaultMsg).focus();
            }, 50);
        }
        function close_popup() {
            settings.onPopupClose();
            $label.removeClass("wcs_button_label_hide");
            $container.removeClass("wcs-show");
            $container
                .find(".wcs_popup_input")
                .find('input[type="text"]')
                .val("");
        }
        function close_all_popup() {
            var all_containers = $(".whatsapp_chat_support");
            all_containers.each(function () {
                var $this = $(this);
                $this.removeClass("wcs-show");
                $this
                    .find(".wcs_popup_input")
                    .find('input[type="text"]')
                    .val("");
            });
        }
        function go_to_whatsapp(number, text) {
            settings.whenGoingToWhatsApp(number, text);
            close_popup();
            var WhatsAppUrl = "https://web.whatsapp.com/send";
            if (
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                )
            ) {
                WhatsAppUrl = "https://api.whatsapp.com/send";
            }
            var url = WhatsAppUrl + "?phone=" + number + "&text=" + text;
            console.log(url);
            var win = window.open(url, "_blank");
            win.focus();
        }
        var now = moment();
        debug.append(
            "<div><strong>Original Date</strong> " +
                now.format("YYYY-MM-DD HH:mm:ss") +
                " <br><strong>UTC Offsset</strong> " +
                now.utcOffset() / 60 +
                "</div>"
        );
        if (settings.timezone != "" && settings.now == "") {
            debug.append(
                "<div><strong>Setting Timezone</strong> " +
                    now.format("YYYY-MM-DD HH:mm:ss") +
                    " <br><strong>UTC Offsset</strong> " +
                    now.utcOffset() / 60 +
                    "</div>"
            );
        }
        if (settings.now != "") {
            now = moment(settings.now, "YYYY-MM-DD HH:mm:ss");
            debug.append(
                "<div><strong>Setting Manual Date</strong> " +
                    now.format("YYYY-MM-DD HH:mm:ss") +
                    " <br><strong>UTC Offsset</strong> " +
                    now.utcOffset() / 60 +
                    "</div>"
            );
        }
        if ($button.attr("data-availability") != undefined) {
            var available = is_available(
                $.parseJSON($button.attr("data-availability"))
            );
            if (available.is_available) {
            } else {
                $button.addClass("wcs_button_person_offline");
                $button
                    .find(".wcs_button_person_status")
                    .html(
                        available.almost_available
                            ? settings.almostAvailableMsg
                            : settings.notAvailableMsg
                    );
            }
        }
        if (popup_input.attr("data-availability") != undefined) {
            var available = is_available(
                $.parseJSON(popup_input.attr("data-availability"))
            );
            if (available.is_available) {
            } else {
                popup_input.addClass("wcs_popup_input_offline");
                popup_input.html(
                    available.almost_available
                        ? settings.dialogAlmostAvailableMsg
                        : settings.dialogNotAvailableMsg
                );
            }
        }
        popup_persons.find(".wcs_popup_person").each(function () {
            var $this = $(this);
            if ($this.attr("data-availability") != undefined) {
                var available = is_available(
                    $.parseJSON($this.attr("data-availability"))
                );
                if (available.is_available) {
                } else {
                    $this.addClass("wcs_popup_person_offline");
                    $this
                        .find(".wcs_popup_person_status")
                        .html(
                            available.almost_available
                                ? settings.dialogAlmostAvailableMsg
                                : settings.dialogNotAvailableMsg
                        );
                }
            }
        });
        function is_available(available) {
            var is_available = false;
            var almost_available = false;
            for (var key in available) {
                if (available.hasOwnProperty(key)) {
                    if (get_day_of_week(key) == now.day()) {
                        var start = moment(
                            $.trim(available[key].split("-")[0]),
                            "HH:mm"
                        );
                        var end = moment(
                            $.trim(available[key].split("-")[1]),
                            "HH:mm"
                        );
                        if (now.isAfter(start) && now.isBefore(end)) {
                            is_available = true;
                        } else if (now.isBefore(start)) {
                            almost_available = true;
                        }
                    }
                }
            }
            return {
                is_available: is_available,
                almost_available: almost_available,
            };
        }
        function get_day_of_week(name) {
            name = name.toLowerCase();
            if (name == "sunday") {
                return 0;
            } else if (name == "monday") {
                return 1;
            } else if (name == "tuesday") {
                return 2;
            } else if (name == "wednesday") {
                return 3;
            } else if (name == "thursday") {
                return 4;
            } else if (name == "friday") {
                return 5;
            } else if (name == "saturday") {
                return 6;
            }
        }
    };
    $.fn.whatsappChatSupport = function (options, content, callback) {
        return this.each(function (key, value) {
            var $this = $(this);
            var data = $this.data("whatsappChatSupport");
            if (!data && typeof options != "string") {
                $this.data(
                    "whatsappChatSupport",
                    new WhatsappChatSupport(this, options)
                );
            }
            if (data && typeof options == "string") {
                data[options](content, callback);
            }
        });
    };
})(window, jQuery);

/* init js file script */

//bootstarp modals
function largeModal(url, header) {
    $("#largeModal .modal-body").html("Loading...");
    $("#largeModal .modal-title").html("Loading...");

    $("#largeModal").modal("show");
    $.ajax({
        url: url,
        success: function (response) {
            $("#largeModal .modal-body").html(response);
            $("#largeModal .modal-title").html(header);
        },
    });
}

function smallModal(url, header) {
    $("#smallModal .modal-body").html("Loading...");
    $("#smallModal .modal-title").html("Loading...");

    $("#smallModal").modal("show");
    $.ajax({
        url: url,
        success: function (response) {
            $("#smallModal .modal-body").html(response);
            $("#smallModal .modal-title").html(header);
        },
    });
}

function confirmModal(delete_url, param) {
    $("#confirmModal").modal("show");
    callBackFunction = param;
    document.getElementById("delete_form").setAttribute("action", delete_url);
}

$(".ajaxDeleteForm").submit(function (e) {
    var form = $(this);
    ajaxSubmit(e, form, callBackFunction);
});

function closeModel() {
    //$('.modal .modal-body').html('');
    //$('.modal .modal-title').html('');
}

function closeConfirmModel() {
    $("#confirmModal").modal("hide");
}

//jquery validator
function initValidate(selector) {
    $(selector).validate({
        /*errorElement: 'div',
        errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
        },            
        highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
        },
        unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        }*/
    });
}

//select2
function initSelect2(selector) {
    $(selector).select2();
}

//Form Submition
function ajaxSubmit(e, form, callBackFunction) {
    if (form.valid()) {
        e.preventDefault();

        var btn = $(form).find('button[type="submit"]');
        var btn_text = $(btn).html();
        $(btn).html('<i class="fa fa-refresh fa-spin" aria-hidden="true"></i>');
        $(btn).css("opacity", "0.7");
        $(btn).css("pointer-events", "none");

        var action = form.attr("action");
        var form = e.target;
        var data = new FormData(form);
        $.ajax({
            type: "POST",
            url: action,
            processData: false,
            contentType: false,
            dataType: "json",
            data: data,
            success: function (response) {
                $(btn).html(btn_text);
                $(btn).css("opacity", "1");
                $(btn).css("pointer-events", "inherit");

                if (response.status) {
                    Command: toastr["success"](
                        response.notification,
                        "Success"
                    );
                    callBackFunction(response);
                } else {
                    if (typeof response.notification === "object") {
                        var errors = "";
                        $.each(response.notification, function (key, msg) {
                            errors +=
                                "<div>" + (key + 1) + ". " + msg + "</div>";
                        });
                        Command: toastr["error"](errors, "Alert");
                    } else {
                        Command: toastr["error"](
                            response.notification,
                            "Alert"
                        );
                    }
                }
            },
        });
    } else {
        toastr.error("Please make sure to fill all the necessary fields");
    }
}

//trumbowyg Editor
function initTrumbowyg(target) {
    $(target).trumbowyg({
        btnsDef: {
            // Create a new dropdown
            image: {
                dropdown: ["insertImage", "upload"],
                ico: "insertImage",
            },
            // Define the heading button with different levels
            heading: {
                dropdown: ["h1", "h2", "h3", "h4", "h5", "h6"],
                ico: "pencil", // You can use an appropriate icon
            },
        },
        // Redefine the button pane
        btns: [
            ["viewHTML"],
            ["formatting"],
            ["strong", "em", "del"],
            ["superscript", "subscript"],
            ["link"],
            ["image"], // Our fresh created dropdown
            ["table"],
            ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
            ["unorderedList", "orderedList"],
            ["horizontalRule"],
            ["removeformat"],
            ["fullscreen"],
        ],
        plugins: {
            // Add imagur parameters to upload plugin for demo purposes
            upload: {
                serverPath:
                    $("#baseUrl").attr("href") + "/backend/trumbowyg/upload",
                fileFieldName: "image",
                headers: {},
                urlPropertyName: "file",
            },
            resizimg: true,
        },
    });
}
function destroyTrumbowyg(target) {
    $(target).trumbowyg("destroy");
}

//footer script
$(document).ready(function () {
    initValidate("#add_footer_form");
    $("#add_footer_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    var responseHandler = function (response) {
        $("input, textarea").val("");
        $("select option:first").prop("selected", true);
        setTimeout(function () {
            window.location.href = $("#baseUrl").attr("href") + "/thank-you";
        }, 2000);
    };
});

//popup script
$(document).ready(function () {
    initValidate("#add_popup_form");
    $("#add_popup_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    var responseHandler = function (response) {
        $("input, textarea").val("");
        $("select option:first").prop("selected", true);
        setTimeout(function () {
            window.location.href = $("#baseUrl").attr("href") + "/thank-you";
        }, 2000);
    };
});

//comment script
$(document).ready(function () {
    initValidate("#add_comment_form");
    $("#add_comment_form").submit(function (e) {
        var form = $(this);
        ajaxSubmit(e, form, responseHandler);
    });

    var responseHandler = function (response) {
        $("input, textarea").val("");
        $("select option:first").prop("selected", true);
        setTimeout(function () {
            location.reload();
        }, 2000);
    };
});



/**
 * jQuery.marquee - scrolling text like old marquee element
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
 */
;(function(d){d.fn.marquee=function(w){return this.each(function(){var a=d.extend({},d.fn.marquee.defaults,w),b=d(this),c,k,p,q,h,l=3,x="animation-play-state",e=!1,B=function(a,b,c){for(var d=["webkit","moz","MS","o",""],e=0;e<d.length;e++)d[e]||(b=b.toLowerCase()),a.addEventListener(d[e]+b,c,!1)},E=function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c+":"+a[c]);b.push();return"{"+b.join(",")+"}"},g={pause:function(){e&&a.allowCss3Support?c.css(x,"paused"):d.fn.pause&&c.pause();b.data("runningStatus",
"paused");b.trigger("paused")},resume:function(){e&&a.allowCss3Support?c.css(x,"running"):d.fn.resume&&c.resume();b.data("runningStatus","resumed");b.trigger("resumed")},toggle:function(){g["resumed"==b.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(b.timer);b.css("visibility","hidden").html(b.find(".js-marquee:first"));setTimeout(function(){b.css("visibility","visible")},0)}};if("string"===typeof w)d.isFunction(g[w])&&(c||(c=b.find(".js-marquee-wrapper")),!0===b.data("css3AnimationIsSupported")&&
(e=!0),g[w]());else{var r;d.each(a,function(c,d){r=b.attr("data-"+c);if("undefined"!==typeof r){switch(r){case "true":r=!0;break;case "false":r=!1}a[c]=r}});a.duration=a.speed||a.duration;q="up"==a.direction||"down"==a.direction;a.gap=a.duplicated?a.gap:0;b.wrapInner('<div class="js-marquee"></div>');var f=b.find(".js-marquee").css({"margin-right":a.gap,"float":"left"});a.duplicated&&f.clone(!0).appendTo(b);b.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');c=b.find(".js-marquee-wrapper");
if(q){var m=b.height();c.removeAttr("style");b.height(m);b.find(".js-marquee").css({"float":"none","margin-bottom":a.gap,"margin-right":0});a.duplicated&&b.find(".js-marquee:last").css({"margin-bottom":0});var s=b.find(".js-marquee:first").height()+a.gap;a.duration*=(parseInt(s,10)+parseInt(m,10))/parseInt(m,10)}else h=b.find(".js-marquee:first").width()+a.gap,k=b.width(),a.duration*=(parseInt(h,10)+parseInt(k,10))/parseInt(k,10);a.duplicated&&(a.duration/=2);if(a.allowCss3Support){var f=document.body||
document.createElement("div"),n="marqueeAnimation-"+Math.floor(1E7*Math.random()),z=["Webkit","Moz","O","ms","Khtml"],A="animation",t="",u="";f.style.animation&&(u="@keyframes "+n+" ",e=!0);if(!1===e)for(var y=0;y<z.length;y++)if(void 0!==f.style[z[y]+"AnimationName"]){f="-"+z[y].toLowerCase()+"-";A=f+A;x=f+x;u="@"+f+"keyframes "+n+" ";e=!0;break}e&&(t=n+" "+a.duration/1E3+"s "+a.delayBeforeStart/1E3+"s infinite "+a.css3easing,b.data("css3AnimationIsSupported",!0))}var C=function(){c.css("margin-top",
"up"==a.direction?m+"px":"-"+s+"px")},D=function(){c.css("margin-left","left"==a.direction?k+"px":"-"+h+"px")};a.duplicated?(q?c.css("margin-top","up"==a.direction?m:"-"+(2*s-a.gap)+"px"):c.css("margin-left","left"==a.direction?k+"px":"-"+(2*h-a.gap)+"px"),l=1):q?C():D();var v=function(){a.duplicated&&(1===l?(a._originalDuration=a.duration,a.duration=q?"up"==a.direction?a.duration+m/(s/a.duration):2*a.duration:"left"==a.direction?a.duration+k/(h/a.duration):2*a.duration,t&&(t=n+" "+a.duration/1E3+
"s "+a.delayBeforeStart/1E3+"s "+a.css3easing),l++):2===l&&(a.duration=a._originalDuration,t&&(n+="0",u=d.trim(u)+"0 ",t=n+" "+a.duration/1E3+"s 0s infinite "+a.css3easing),l++));q?a.duplicated?(2<l&&c.css("margin-top","up"==a.direction?0:"-"+s+"px"),p={"margin-top":"up"==a.direction?"-"+s+"px":0}):(C(),p={"margin-top":"up"==a.direction?"-"+c.height()+"px":m+"px"}):a.duplicated?(2<l&&c.css("margin-left","left"==a.direction?0:"-"+h+"px"),p={"margin-left":"left"==a.direction?"-"+h+"px":0}):(D(),p={"margin-left":"left"==
a.direction?"-"+h+"px":k+"px"});b.trigger("beforeStarting");if(e){c.css(A,t);var f=u+" { 100%  "+E(p)+"}",g=d("style");0!==g.length?g.filter(":last").append(f):d("head").append("<style>"+f+"</style>");B(c[0],"AnimationIteration",function(){b.trigger("finished")});B(c[0],"AnimationEnd",function(){v();b.trigger("finished")})}else c.animate(p,a.duration,a.easing,function(){b.trigger("finished");a.pauseOnCycle?b.timer=setTimeout(v,a.delayBeforeStart):v()});b.data("runningStatus","resumed")};b.bind("pause",
g.pause);b.bind("resume",g.resume);a.pauseOnHover&&b.bind("mouseenter mouseleave",g.toggle);e&&a.allowCss3Support?v():b.timer=setTimeout(v,a.delayBeforeStart)}})};d.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:1E3,direction:"left",duplicated:!1,duration:5E3,gap:20,pauseOnCycle:!1,pauseOnHover:!1}})(jQuery);
