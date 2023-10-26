/* compressed */
/*! sp_class/assets/js/jquery-3.7.1.min.js
 */
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (ie, e) {
  "use strict";
  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat
      ? function (e) {
          return oe.flat.call(e);
        }
      : function (e) {
          return oe.concat.apply([], e);
        },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    y = function (e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0,
    };

  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script");
    if (((o.text = e), t))
      for (r in u)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[i.call(e)] || "object"
      : typeof e;
  }
  var t = "3.7.1",
    l = /HTML$/i,
    ce = function (e, t) {
      return new ce.fn.init(e, t);
    };

  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !v(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }

  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  (ce.fn = ce.prototype =
    {
      jquery: t,
      constructor: ce,
      length: 0,
      toArray: function () {
        return ae.call(this);
      },
      get: function (e) {
        return null == e
          ? ae.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = ce.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return ce.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          ce.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(ae.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: oe.sort,
      splice: oe.splice,
    }),
    (ce.extend = ce.fn.extend =
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
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || v(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || ce.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = ce.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    ce.extend({
      expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== i.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = ue.call(t, "constructor") && t.constructor) &&
              o.call(n) === a))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        m(
          e,
          {
            nonce: t && t.nonce,
          },
          n
        );
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (c(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (!i) while ((t = e[r++])) n += ce.text(t);
        return 1 === i || 11 === i
          ? e.textContent
          : 9 === i
          ? e.documentElement.textContent
          : 3 === i || 4 === i
          ? e.nodeValue
          : n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (c(Object(e))
              ? ce.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : se.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !l.test(t || (n && n.nodeName) || "HTML");
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (c(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: le,
    }),
    "function" == typeof Symbol &&
      (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
    ce.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return (
      e === n ||
      !(
        !n ||
        1 !== n.nodeType ||
        !(e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    );
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

  function p(e, t) {
    return t
      ? "\0" === e
        ? "\ufffd"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e;
  }
  ce.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var ye = C,
    me = s;
  !(function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function (e, t) {
        return e === t && (a = !0), 0;
      },
      f =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        ge +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p =
        "\\[" +
        ge +
        "*(" +
        t +
        ")(?:" +
        ge +
        "*([*^$|!~]?=)" +
        ge +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        t +
        "))|)" +
        ge +
        "*\\]",
      g =
        ":(" +
        t +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        p +
        ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ge +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ge +
            "*(?:([+-]|)" +
            ge +
            "*(\\d+)|))" +
            ge +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ge +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ge +
            "*((?:-\\d)?\\d*)" +
            ge +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      M = function () {
        V();
      },
      R = J(
        function (e) {
          return !0 === e.disabled && fe(e, "fieldset");
        },
        {
          dir: "parentNode",
          next: "legend",
        }
      );
    try {
      k.apply((oe = ae.call(ye.childNodes)), ye.childNodes),
        oe[ye.childNodes.length].nodeType;
    } catch (e) {
      k = {
        apply: function (e, t) {
          me.apply(e, ae.call(t));
        },
        call: function (e) {
          me.apply(e, ae.call(arguments, 1));
        },
      };
    }

    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (V(e), (e = e || T), C)) {
        if (11 !== p && (u = L.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return k.call(n, a), n;
            } else if (
              f &&
              (a = f.getElementById(i)) &&
              I.contains(e, a) &&
              a.id === i
            )
              return k.call(n, a), n;
          } else {
            if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && e.getElementsByClassName)
              return k.apply(n, e.getElementsByClassName(i)), n;
          }
        if (!(h[t + " "] || (d && d.test(t)))) {
          if (((c = t), (f = e), 1 === p && (x.test(t) || m.test(t)))) {
            ((f = (H.test(t) && U(e.parentNode)) || e) == e && le.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = ce.escapeSelector(s))
                : e.setAttribute("id", (s = S))),
              (o = (l = Y(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
            c = l.join(",");
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r);
    }

    function W() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }

    function F(e) {
      return (e[S] = !0), e;
    }

    function $(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }

    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t;
      };
    }

    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t;
      };
    }

    function z(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && R(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }

    function X(a) {
      return F(function (o) {
        return (
          (o = +o),
          F(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }

    function U(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return (
        n != T &&
          9 === n.nodeType &&
          n.documentElement &&
          ((r = (T = n).documentElement),
          (C = !ce.isXMLDoc(T)),
          (i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
          r.msMatchesSelector &&
            ye != T &&
            (t = T.defaultView) &&
            t.top !== t &&
            t.addEventListener("unload", M),
          (le.getById = $(function (e) {
            return (
              (r.appendChild(e).id = ce.expando),
              !T.getElementsByName || !T.getElementsByName(ce.expando).length
            );
          })),
          (le.disconnectedMatch = $(function (e) {
            return i.call(e, "*");
          })),
          (le.scope = $(function () {
            return T.querySelectorAll(":scope");
          })),
          (le.cssHas = $(function () {
            try {
              return T.querySelector(":has(*,:jqfake)"), !1;
            } catch (e) {
              return !0;
            }
          })),
          le.getById
            ? ((b.filter.ID = function (e) {
                var t = e.replace(O, P);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((b.filter.ID = function (e) {
                var n = e.replace(O, P);
                return function (e) {
                  var t =
                    "undefined" != typeof e.getAttributeNode &&
                    e.getAttributeNode("id");
                  return t && t.value === n;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e)
                      return [o];
                    (i = t.getElementsByName(e)), (r = 0);
                    while ((o = i[r++]))
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                  }
                  return [];
                }
              })),
          (b.find.TAG = function (e, t) {
            return "undefined" != typeof t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e);
          }),
          (b.find.CLASS = function (e, t) {
            if ("undefined" != typeof t.getElementsByClassName && C)
              return t.getElementsByClassName(e);
          }),
          (d = []),
          $(function (e) {
            var t;
            (r.appendChild(e).innerHTML =
              "<a id='" +
              S +
              "' href='' disabled='disabled'></a><select id='" +
              S +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll("[selected]").length ||
                d.push("\\[" + ge + "*(?:value|" + f + ")"),
              e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="),
              e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"),
              e.querySelectorAll(":checked").length || d.push(":checked"),
              (t = T.createElement("input")).setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              (r.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(":disabled").length &&
                d.push(":enabled", ":disabled"),
              (t = T.createElement("input")).setAttribute("name", ""),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")");
          }),
          le.cssHas || d.push(":has"),
          (d = d.length && new RegExp(d.join("|"))),
          (l = function (e, t) {
            if (e === t) return (a = !0), 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return (
              n ||
              (1 &
                (n =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1) ||
              (!le.sortDetached && t.compareDocumentPosition(e) === n)
                ? e === T || (e.ownerDocument == ye && I.contains(ye, e))
                  ? -1
                  : t === T || (t.ownerDocument == ye && I.contains(ye, t))
                  ? 1
                  : o
                  ? se.call(o, e) - se.call(o, t)
                  : 0
                : 4 & n
                ? -1
                : 1)
            );
          })),
        T
      );
    }
    for (e in ((I.matches = function (e, t) {
      return I(e, null, null, t);
    }),
    (I.matchesSelector = function (e, t) {
      if ((V(e), C && !h[t + " "] && (!d || !d.test(t))))
        try {
          var n = i.call(e, t);
          if (
            n ||
            le.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          h(t, !0);
        }
      return 0 < I(t, T, null, [e]).length;
    }),
    (I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
    }),
    (I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }),
    (I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((a = !le.sortStable),
        (o = !le.sortStable && ae.call(e, 0)),
        de.call(e, l),
        a)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return (o = null), e;
    }),
    (ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }),
    ((b = ce.expr =
      {
        cacheLength: 50,
        createPseudo: F,
        match: D,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0,
          },
          " ": {
            dir: "parentNode",
          },
          "+": {
            dir: "previousSibling",
            first: !0,
          },
          "~": {
            dir: "previousSibling",
          },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(O, P)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(O, P)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || I.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && I.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return D.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    j.test(n) &&
                    (t = Y(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(O, P).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return fe(e, t);
                };
          },
          CLASS: function (e) {
            var t = s[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) &&
                s(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = I.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (d, e, t, h, g) {
            var v = "nth" !== d.slice(0, 3),
              y = "last" !== d.slice(-4),
              m = "of-type" === e;
            return 1 === h && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u = v !== y ? "nextSibling" : "previousSibling",
                    l = e.parentNode,
                    c = m && e.nodeName.toLowerCase(),
                    f = !n && !m,
                    p = !1;
                  if (l) {
                    if (v) {
                      while (u) {
                        o = e;
                        while ((o = o[u]))
                          if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                        s = u = "only" === d && !s && "nextSibling";
                      }
                      return !0;
                    }
                    if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
                      (p =
                        (a =
                          (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E &&
                          r[1]) && r[2]),
                        (o = a && l.childNodes[a]);
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (1 === o.nodeType && ++p && o === e) {
                          i[d] = [E, a, p];
                          break;
                        }
                    } else if (
                      (f &&
                        (p = a =
                          (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E &&
                          r[1]),
                      !1 === p)
                    )
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (
                          (m ? fe(o, c) : 1 === o.nodeType) &&
                          ++p &&
                          (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]),
                          o === e)
                        )
                          break;
                    return (p -= g) === h || (p % h == 0 && 0 <= p / h);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                I.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? F(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = se.call(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: F(function (e) {
            var r = [],
              i = [],
              s = ne(e.replace(ve, "$1"));
            return s[S]
              ? F(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: F(function (t) {
            return function (e) {
              return 0 < I(t, e).length;
            };
          }),
          contains: F(function (t) {
            return (
              (t = t.replace(O, P)),
              function (e) {
                return -1 < (e.textContent || ce.text(e)).indexOf(t);
              }
            );
          }),
          lang: F(function (n) {
            return (
              A.test(n || "") || I.error("unsupported lang: " + n),
              (n = n.replace(O, P).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = C
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = ie.location && ie.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === r;
          },
          focus: function (e) {
            return (
              e ===
                (function () {
                  try {
                    return T.activeElement;
                  } catch (e) {}
                })() &&
              T.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: z(!1),
          disabled: z(!0),
          checked: function (e) {
            return (
              (fe(e, "input") && !!e.checked) ||
              (fe(e, "option") && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return q.test(e.nodeName);
          },
          input: function (e) {
            return N.test(e.nodeName);
          },
          button: function (e) {
            return (fe(e, "input") && "button" === e.type) || fe(e, "button");
          },
          text: function (e) {
            var t;
            return (
              fe(e, "input") &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: X(function () {
            return [0];
          }),
          last: X(function (e, t) {
            return [t - 1];
          }),
          eq: X(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: X(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: X(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: X(function (e, t, n) {
            var r;
            for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: X(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0,
    }))
      b.pseudos[e] = B(e);
    for (e in {
      submit: !0,
      reset: !0,
    })
      b.pseudos[e] = _(e);

    function G() {}

    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      (a = e), (s = []), (u = b.preFilter);
      while (a) {
        for (o in ((n && !(r = y.exec(a))) ||
          (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
        (n = !1),
        (r = m.exec(a)) &&
          ((n = r.shift()),
          i.push({
            value: n,
            type: r[0].replace(ve, " "),
          }),
          (a = a.slice(n.length))),
        b.filter))
          !(r = D[o].exec(a)) ||
            (u[o] && !(r = u[o](r))) ||
            ((n = r.shift()),
            i.push({
              value: n,
              type: o,
              matches: r,
            }),
            (a = a.slice(n.length)));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }

    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }

    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[s])) if (1 === e.nodeType || c) return a(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o = [E, f];
            if (n) {
              while ((e = e[s]))
                if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
            } else
              while ((e = e[s]))
                if (1 === e.nodeType || c)
                  if (((i = e[S] || (e[S] = {})), u && fe(e, u))) e = e[s] || e;
                  else {
                    if ((r = i[l]) && r[0] === E && r[1] === f)
                      return (o[2] = r[2]);
                    if (((i[l] = o)[2] = a(e, t, n))) return !0;
                  }
            return !1;
          };
    }

    function K(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }

    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }

    function ee(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = ee(v)),
        y && !y[S] && (y = ee(y, e)),
        F(function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u = [],
            l = [],
            c = t.length,
            f =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            p = !d || (!e && h) ? f : Z(f, u, d, n, r);
          if (
            (g ? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r) : (s = p), v)
          ) {
            (i = Z(s, l)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = s.length);
                while (o--) (a = s[o]) && i.push((p[o] = a));
                y(null, (s = []), i, r);
              }
              o = s.length;
              while (o--)
                (a = s[o]) &&
                  -1 < (i = y ? se.call(e, a) : u[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (s = Z(s === t ? s.splice(c, s.length) : s)), y ? y(null, t, s, r) : k.apply(t, s);
        })
      );
    }

    function te(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = J(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = J(
            function (e) {
              return -1 < se.call(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t != w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [J(K(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return ee(
              1 < s && K(c),
              1 < s &&
                Q(
                  e.slice(0, s - 1).concat({
                    value: " " === e[s - 2].type ? "*" : "",
                  })
                ).replace(ve, "$1"),
              t,
              s < n && te(e.slice(s, n)),
              n < r && te((e = e.slice(n))),
              n < r && Q(e)
            );
          }
          c.push(t);
        }
      return K(c);
    }

    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "];
      if (!a) {
        t || (t = Y(e)), (n = t.length);
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(
          e,
          ((v = o),
          (m = 0 < (y = i).length),
          (x = 0 < v.length),
          (r = function (e, t, n, r, i) {
            var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || (x && b.find.TAG("*", i)),
              h = (E += null == p ? 1 : Math.random() || 0.1),
              g = d.length;
            for (
              i && (w = t == T || t || i);
              l !== g && null != (o = d[l]);
              l++
            ) {
              if (x && o) {
                (a = 0), t || o.ownerDocument == T || (V(o), (n = !C));
                while ((s = v[a++]))
                  if (s(o, t || T, n)) {
                    k.call(r, o);
                    break;
                  }
                i && (E = h);
              }
              m && ((o = !s && o) && u--, e && c.push(o));
            }
            if (((u += l), m && l !== u)) {
              a = 0;
              while ((s = y[a++])) s(c, f, t, n);
              if (e) {
                if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                f = Z(f);
              }
              k.apply(r, f),
                i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r);
            }
            return i && ((E = h), (w = p)), c;
          }),
          m ? F(r) : r)
        )).selector = e;
      }
      return a;
    }

    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && Y((e = l.selector || e));
      if (((n = n || []), 1 === c.length)) {
        if (
          2 < (o = c[0] = c[0].slice(0)).length &&
          "ID" === (a = o[0]).type &&
          9 === t.nodeType &&
          C &&
          b.relative[o[1].type]
        ) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0]))
            return n;
          l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (((a = o[i]), b.relative[(s = a.type)])) break;
          if (
            (u = b.find[s]) &&
            (r = u(
              a.matches[0].replace(O, P),
              (H.test(o[0].type) && U(t.parentNode)) || t
            ))
          ) {
            if ((o.splice(i, 1), !(e = r.length && Q(o))))
              return k.apply(n, r), n;
            break;
          }
        }
      }
      return (
        (l || ne(e, c))(r, t, !C, n, !t || (H.test(e) && U(t.parentNode)) || t),
        n
      );
    }
    (G.prototype = b.filters = b.pseudos),
      (b.setFilters = new G()),
      (le.sortStable = S.split("").sort(l).join("") === S),
      V(),
      (le.sortDetached = $(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
      })),
      (ce.find = I),
      (ce.expr[":"] = ce.expr.pseudos),
      (ce.unique = ce.uniqueSort),
      (I.compile = ne),
      (I.select = re),
      (I.setDocument = V),
      (I.tokenize = Y),
      (I.escape = ce.escapeSelector),
      (I.getText = ce.text),
      (I.isXML = ce.isXMLDoc),
      (I.selectors = ce.expr),
      (I.support = ce.support),
      (I.uniqueSort = ce.uniqueSort);
  })();
  var d = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && ce(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    h = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function T(e, n, r) {
    return v(n)
      ? ce.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? ce.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? ce.grep(e, function (e) {
          return -1 < se.call(n, e) !== r;
        })
      : ce.filter(n, e, r);
  }
  (ce.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? ce.find.matchesSelector(r, e)
          ? [r]
          : []
        : ce.find.matches(
            e,
            ce.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    ce.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            ce(e).filter(function () {
              for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
        return 1 < r ? ce.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(T(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(T(this, e || [], !0));
      },
      is: function (e) {
        return !!T(
          this,
          "string" == typeof e && b.test(e) ? ce(e) : e || [],
          !1
        ).length;
      },
    });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || k), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : S.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof ce ? t[0] : t),
          ce.merge(
            this,
            ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
          ),
          w.test(r[1]) && ce.isPlainObject(t))
        )
          for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = C.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : v(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(ce)
      : ce.makeArray(e, this);
  }).prototype = ce.fn),
    (k = ce(C));
  var E = /^(?:parents|prev(?:Until|All))/,
    j = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0,
    };

  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ce.fn.extend({
    has: function (e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e);
      if (!b.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && ce.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? se.call(ce(e), this[0])
          : se.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ce.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return d(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return d(e, "parentNode", n);
        },
        next: function (e) {
          return A(e, "nextSibling");
        },
        prev: function (e) {
          return A(e, "previousSibling");
        },
        nextAll: function (e) {
          return d(e, "nextSibling");
        },
        prevAll: function (e) {
          return d(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return d(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return d(e, "previousSibling", n);
        },
        siblings: function (e) {
          return h((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return h(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (fe(e, "template") && (e = e.content || e),
              ce.merge([], e.childNodes));
        },
      },
      function (r, i) {
        ce.fn[r] = function (e, t) {
          var n = ce.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ce.filter(t, n)),
            1 < this.length &&
              (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var D = /[^\x20\t\r\n\f]+/g;

  function N(e) {
    return e;
  }

  function q(e) {
    throw e;
  }

  function L(e, t, n, r) {
    var i;
    try {
      e && v((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && v((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (ce.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          ce.each(e.match(D) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : ce.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                ce.each(e, function (e, t) {
                  v(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== x(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            ce.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = ce.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    ce.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              ce.Callbacks("memory"),
              ce.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return ce
                .Deferred(function (r) {
                  ce.each(o, function (e, t) {
                    var n = v(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && v(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;

              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          v(t)
                            ? s
                              ? t.call(e, l(u, o, N, s), l(u, o, q, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, N, s),
                                  l(u, o, q, s),
                                  l(u, o, N, o.notifyWith)
                                ))
                            : (a !== N && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            ce.Deferred.exceptionHook &&
                              ce.Deferred.exceptionHook(e, t.error),
                              u <= i + 1 &&
                                (a !== q && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (ce.Deferred.getErrorHook
                        ? (t.error = ce.Deferred.getErrorHook())
                        : ce.Deferred.getStackHook &&
                          (t.error = ce.Deferred.getStackHook()),
                      ie.setTimeout(t));
                };
              }
              return ce
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)),
                    o[1][3].add(l(0, e, v(t) ? t : N)),
                    o[2][3].add(l(0, e, v(n) ? n : q));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ce.extend(e, a) : a;
            },
          },
          s = {};
        return (
          ce.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = ae.call(arguments),
          o = ce.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? ae.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (L(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || v(i[t] && i[t].then))
        )
          return o.then();
        while (t--) L(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (ce.Deferred.exceptionHook = function (e, t) {
    ie.console &&
      ie.console.warn &&
      e &&
      H.test(e.name) &&
      ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (ce.readyException = function (e) {
      ie.setTimeout(function () {
        throw e;
      });
    });
  var O = ce.Deferred();

  function P() {
    C.removeEventListener("DOMContentLoaded", P),
      ie.removeEventListener("load", P),
      ce.ready();
  }
  (ce.fn.ready = function (e) {
    return (
      O.then(e)["catch"](function (e) {
        ce.readyException(e);
      }),
      this
    );
  }),
    ce.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --ce.readyWait : ce.isReady) ||
          ((ce.isReady = !0) !== e && 0 < --ce.readyWait) ||
          O.resolveWith(C, [ce]);
      },
    }),
    (ce.ready.then = O.then),
    "complete" === C.readyState ||
    ("loading" !== C.readyState && !C.documentElement.doScroll)
      ? ie.setTimeout(ce.ready)
      : (C.addEventListener("DOMContentLoaded", P),
        ie.addEventListener("load", P));
  var M = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n))
        for (s in ((i = !0), n)) M(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        v(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(ce(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    R = /^-ms-/,
    I = /-([a-z])/g;

  function W(e, t) {
    return t.toUpperCase();
  }

  function F(e) {
    return e.replace(R, "ms-").replace(I, W);
  }
  var $ = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function B() {
    this.expando = ce.expando + B.uid++;
  }
  (B.uid = 1),
    (B.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            $(e) &&
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
        if ("string" == typeof t) i[F(t)] = n;
        else for (r in t) i[F(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][F(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(F)
              : (t = F(t)) in r
              ? [t]
              : t.match(D) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || ce.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !ce.isEmptyObject(t);
      },
    });
  var _ = new B(),
    z = new B(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;

  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(U, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : X.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        z.set(e, t, n);
      } else n = void 0;
    return n;
  }
  ce.extend({
    hasData: function (e) {
      return z.hasData(e) || _.hasData(e);
    },
    data: function (e, t, n) {
      return z.access(e, t, n);
    },
    removeData: function (e, t) {
      z.remove(e, t);
    },
    _data: function (e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function (e, t) {
      _.remove(e, t);
    },
  }),
    ce.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = z.get(o)), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = F(r.slice(5))), V(o, r, i[r]));
            _.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              z.set(this, n);
            })
          : M(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = z.get(o, n))
                    ? t
                    : void 0 !== (t = V(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  z.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          z.remove(this, e);
        });
      },
    }),
    ce.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = _.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = _.access(e, t, ce.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ce.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ce._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                ce.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          _.get(e, n) ||
          _.access(e, n, {
            empty: ce.Callbacks("once memory").add(function () {
              _.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    ce.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? ce.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ce.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ce.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = _.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function (e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = {
      composed: !0,
    };
  J.getRootNode &&
    (K = function (e) {
      return (
        ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
      );
    });
  var ee = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && K(e) && "none" === ce.css(e, "display"))
    );
  };

  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return ce.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (ce.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (ce.cssNumber[t] || ("px" !== l && +u)) &&
        Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        ce.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), ce.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ne = {};

  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = _.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ee(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ne[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = ce.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ne[s] = u)))))
          : "none" !== n && ((l[c] = "none"), _.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function () {
      return re(this, !0);
    },
    hide: function () {
      return re(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ee(this) ? ce(this).show() : ce(this).hide();
          });
    },
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  (xe = C.createDocumentFragment().appendChild(C.createElement("div"))),
    (be = C.createElement("input")).setAttribute("type", "radio"),
    be.setAttribute("checked", "checked"),
    be.setAttribute("name", "t"),
    xe.appendChild(be),
    (le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (xe.innerHTML = "<textarea>x</textarea>"),
    (le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue),
    (xe.innerHTML = "<option></option>"),
    (le.option = !!xe.lastChild);
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };

  function Se(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n
    );
  }

  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
  }
  (ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead),
    (ke.th = ke.td),
    le.option ||
      (ke.optgroup = ke.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;

  function Ae(e, t, n, r, i) {
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
        if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
        else if (je.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (Te.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ke[s] || ke._default),
            (a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          ce.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < ce.inArray(o, r)) i && i.push(o);
      else if (
        ((l = K(o)), (a = Se(f.appendChild(o), "script")), l && Ee(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) Ce.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;

  function Ne() {
    return !0;
  }

  function qe() {
    return !1;
  }

  function Le(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Le(e, s, n, r, t[s], o);
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
      i = qe;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return ce().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = ce.guid++))),
      e.each(function () {
        ce.event.add(this, t, i, r, n);
      })
    );
  }

  function He(e, r, t) {
    t
      ? (_.set(e, r, !1),
        ce.event.add(e, r, {
          namespace: !1,
          handler: function (e) {
            var t,
              n = _.get(this, r);
            if (1 & e.isTrigger && this[r]) {
              if (n)
                (ce.event.special[r] || {}).delegateType && e.stopPropagation();
              else if (
                ((n = ae.call(arguments)),
                _.set(this, r, n),
                this[r](),
                (t = _.get(this, r)),
                _.set(this, r, !1),
                n !== t)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), t;
            } else
              n &&
                (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = Ne));
          },
        }))
      : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  (ce.event = {
    global: {},
    add: function (t, e, n, r, i) {
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
        v = _.get(t);
      if ($(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && ce.find.matchesSelector(J, i),
          n.guid || (n.guid = ce.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof ce && ce.event.triggered !== e.type
                  ? ce.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(D) || [""]).length);
        while (l--)
          (d = g = (s = De.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = ce.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = ce.event.special[d] || {}),
              (c = ce.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && ce.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (ce.event.global[d] = !0));
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
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = De.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = ce.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                ce.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = ce.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (ce.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
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
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < ce(i, this).index(l)
                  : ce.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length &&
              s.push({
                elem: l,
                handlers: o,
              });
          }
      return (
        (l = this),
        u < t.length &&
          s.push({
            elem: l,
            handlers: t.slice(u),
          }),
        s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: {
        noBubble: !0,
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (we.test(t.type) &&
              t.click &&
              fe(t, "input") &&
              _.get(t, "click")) ||
            fe(t, "a")
          );
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
    (ce.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (ce.Event = function (e, t) {
      if (!(this instanceof ce.Event)) return new ce.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ne
              : qe),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && ce.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[ce.expando] = !0);
    }),
    (ce.Event.prototype = {
      constructor: ce.Event,
      isDefaultPrevented: qe,
      isPropagationStopped: qe,
      isImmediatePropagationStopped: qe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ne),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ne),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ne),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    ce.each(
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
        code: !0,
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
        which: !0,
      },
      ce.event.addProp
    ),
    ce.each(
      {
        focus: "focusin",
        blur: "focusout",
      },
      function (r, i) {
        function o(e) {
          if (C.documentMode) {
            var t = _.get(this, "handle"),
              n = ce.event.fix(e);
            (n.type = "focusin" === e.type ? "focus" : "blur"),
              (n.isSimulated = !0),
              t(e),
              n.target === n.currentTarget && t(n);
          } else ce.event.simulate(i, e.target, ce.event.fix(e));
        }
        (ce.event.special[r] = {
          setup: function () {
            var e;
            if ((He(this, r, !0), !C.documentMode)) return !1;
            (e = _.get(this, i)) || this.addEventListener(i, o),
              _.set(this, i, (e || 0) + 1);
          },
          trigger: function () {
            return He(this, r), !0;
          },
          teardown: function () {
            var e;
            if (!C.documentMode) return !1;
            (e = _.get(this, i) - 1)
              ? _.set(this, i, e)
              : (this.removeEventListener(i, o), _.remove(this, i));
          },
          _default: function (e) {
            return _.get(e.target, r);
          },
          delegateType: i,
        }),
          (ce.event.special[i] = {
            setup: function () {
              var e = this.ownerDocument || this.document || this,
                t = C.documentMode ? this : e,
                n = _.get(t, i);
              n ||
                (C.documentMode
                  ? this.addEventListener(i, o)
                  : e.addEventListener(r, o, !0)),
                _.set(t, i, (n || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this.document || this,
                t = C.documentMode ? this : e,
                n = _.get(t, i) - 1;
              n
                ? _.set(t, i, n)
                : (C.documentMode
                    ? this.removeEventListener(i, o)
                    : e.removeEventListener(r, o, !0),
                  _.remove(t, i));
            },
          });
      }
    ),
    ce.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        ce.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || ce.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    ce.fn.extend({
      on: function (e, t, n, r) {
        return Le(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Le(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ce(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
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
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = qe),
          this.each(function () {
            ce.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

  function Re(e, t) {
    return (
      (fe(e, "table") &&
        fe(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        ce(e).children("tbody")[0]) ||
      e
    );
  }

  function Ie(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }

  function We(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }

  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events))
        for (i in (_.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      z.hasData(e) && ((o = z.access(e)), (a = ce.extend({}, o)), z.set(t, a));
    }
  }

  function $e(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || (1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = ce.clone(u, !0, !0)), s && ce.merge(a, Se(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (
          l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0;
          c < s;
          c++
        )
          (u = a[c]),
            Ce.test(u.type || "") &&
              !_.access(u, "globalEval") &&
              ce.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? ce._evalUrl &&
                  !u.noModule &&
                  ce._evalUrl(
                    u.src,
                    {
                      nonce: u.nonce || u.getAttribute("nonce"),
                    },
                    l
                  )
                : m(u.textContent.replace(Me, ""), u, l));
    }
    return n;
  }

  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || ce.cleanData(Se(r)),
        r.parentNode &&
          (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  ce.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e);
      if (
        !(
          le.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          ce.isXMLDoc(e)
        )
      )
        for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++)
            Fe(o[r], a[r]);
        else Fe(e, c);
      return (
        0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if ($(n)) {
          if ((t = n[_.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
            n[_.expando] = void 0;
          }
          n[z.expando] && (n[z.expando] = void 0);
        }
    },
  }),
    ce.fn.extend({
      detach: function (e) {
        return Be(this, e, !0);
      },
      remove: function (e) {
        return Be(this, e);
      },
      text: function (e) {
        return M(
          this,
          function (e) {
            return void 0 === e
              ? ce.text(this)
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
        return $e(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Re(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return $e(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Re(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (ce.cleanData(Se(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ce.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return M(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Oe.test(e) &&
              !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = ce.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (ce.cleanData(Se(t, !1)), (t.innerHTML = e));
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
        var n = [];
        return $e(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            ce.inArray(this, n) < 0 &&
              (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    ce.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        ce.fn[e] = function (e) {
          for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              ce(r[o])[a](t),
              s.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    ze = /^--/,
    Xe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = ie), t.getComputedStyle(e);
    },
    Ue = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join("|"), "i");

  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = ze.test(t),
      u = e.style;
    return (
      (n = n || Xe(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace(ve, "$1") || void 0),
        "" !== a || K(e) || (a = ce.style(e, t)),
        !le.pixelBoxStyles() &&
          _e.test(a) &&
          Ve.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }

  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          J.removeChild(u),
          (l = null);
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement("div"),
      l = C.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (le.clearCloneStyle = "content-box" === l.style.backgroundClip),
      ce.extend(le, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = C.createElement("table")),
              (t = C.createElement("tr")),
              (n = C.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "box-sizing:content-box;border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              J.appendChild(e).appendChild(t).appendChild(n),
              (r = ie.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              J.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {};

  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return (
      t ||
      (e in Je
        ? e
        : (Ke[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length;
              while (n--) if ((e = Qe[n] + t) in Je) return e;
            })(e) || e))
    );
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    nt = {
      letterSpacing: "0",
      fontWeight: "400",
    };

  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (l += ce.css(e, n + Q[a], !0, i)),
        r
          ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)),
            "margin" !== n &&
              (u -= ce.css(e, "border" + Q[a] + "Width", !0, i)))
          : ((u += ce.css(e, "padding" + Q[a], !0, i)),
            "padding" !== n
              ? (u += ce.css(e, "border" + Q[a] + "Width", !0, i))
              : (s += ce.css(e, "border" + Q[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u + l
    );
  }

  function ot(e, t, n) {
    var r = Xe(e),
      i =
        (!le.boxSizingReliable() || n) &&
        "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!le.boxSizingReliable() && i) ||
        (!le.reliableTrDimensions() && fe(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === ce.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === ce.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        it(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }

  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = ze.test(t),
          l = e.style;
        if (
          (u || (t = Ze(s)),
          (a = ce.cssHooks[t] || ce.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = Y.exec(n)) &&
          i[1] &&
          ((n = te(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (ce.cssNumber[s] ? "" : "px")),
            le.clearCloneStyle ||
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
        s = F(t);
      return (
        ze.test(t) || (t = Ze(s)),
        (a = ce.cssHooks[t] || ce.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Ge(e, t, r)),
        "normal" === i && t in nt && (i = nt[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    ce.each(["height", "width"], function (e, u) {
      ce.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !et.test(ce.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ot(e, u, n)
              : Ue(e, tt, function () {
                  return ot(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Xe(e),
            o = !le.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
            s = n ? it(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  it(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = Y.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = ce.css(e, u))),
            rt(0, t, s)
          );
        },
      };
    }),
    (ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ge(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ue(
                e,
                {
                  marginLeft: 0,
                },
                function () {
                  return e.getBoundingClientRect().left;
                }
              )) + "px"
        );
    })),
    ce.each(
      {
        margin: "",
        padding: "",
        border: "Width",
      },
      function (i, o) {
        (ce.cssHooks[i + o] = {
          expand: function (e) {
            for (
              var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
              t < 4;
              t++
            )
              n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
            return n;
          },
        }),
          "margin" !== i && (ce.cssHooks[i + o].set = rt);
      }
    ),
    ce.fn.extend({
      css: function (e, t) {
        return M(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Xe(e), i = t.length; a < i; a++)
                o[t[a]] = ce.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((ce.Tween = at).prototype = {
      constructor: at,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || ce.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (ce.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = at.propHooks[this.prop];
        return e && e.get ? e.get(this) : at.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = at.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                ce.easing[this.easing](
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
          n && n.set ? n.set(this) : at.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = at.prototype),
    ((at.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          ce.fx.step[e.prop]
            ? ce.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : ce.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = at.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (ce.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (ce.fx = at.prototype.init),
    (ce.fx.step = {});
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;

  function dt() {
    ut &&
      (!1 === C.hidden && ie.requestAnimationFrame
        ? ie.requestAnimationFrame(dt)
        : ie.setTimeout(dt, ce.fx.interval),
      ce.fx.tick());
  }

  function ht() {
    return (
      ie.setTimeout(function () {
        st = void 0;
      }),
      (st = Date.now())
    );
  }

  function gt(e, t) {
    var n,
      r = 0,
      i = {
        height: e,
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = Q[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }

  function vt(e, t, n) {
    for (
      var r,
        i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }

  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = st || ht(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(
          !0,
          {
            specialEasing: {},
            easing: ce.easing._default,
          },
          t
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ce.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = F(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = ce.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = yt.prefilters[r].call(l, o, c, l.opts)))
        return (
          v(n.stop) &&
            (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      ce.map(c, vt, l),
      v(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      ce.fx.timer(
        ce.extend(u, {
          elem: o,
          anim: l,
          queue: l.opts.queue,
        })
      ),
      l
    );
  }
  (ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return te(n.elem, e, Y.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      v(e) ? ((t = e), (e = ["*"])) : (e = e.match(D));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (yt.tweeners[n] = yt.tweeners[n] || []),
          yt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
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
          g = e.nodeType && ee(e),
          v = _.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = ce._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, ce.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ft.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || ce.style(e, r);
          }
        if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = _.get(e, "display")),
            "none" === (c = ce.css(e, "display")) &&
              (l
                ? (c = l)
                : (re([e], !0),
                  (l = e.style.display || l),
                  (c = ce.css(e, "display")),
                  re([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === ce.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = _.access(e, "fxshow", {
                    display: l,
                  })),
              o && (v.hidden = !g),
              g && re([e], !0),
              p.done(function () {
                for (r in (g || re([e]), _.remove(e, "fxshow"), d))
                  ce.style(e, r, d[r]);
              })),
              (u = vt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    },
  })),
    (ce.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? ce.extend({}, e)
          : {
              complete: n || (!n && t) || (v(e) && e),
              duration: e,
              easing: (n && t) || (t && !v(t) && t),
            };
      return (
        ce.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in ce.fx.speeds
              ? (r.duration = ce.fx.speeds[r.duration])
              : (r.duration = ce.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
        }),
        r
      );
    }),
    ce.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ee).css("opacity", 0).show().end().animate(
          {
            opacity: t,
          },
          e,
          n,
          r
        );
      },
      animate: function (t, e, n, r) {
        var i = ce.isEmptyObject(t),
          o = ce.speed(e, n, r),
          a = function () {
            var e = yt(this, ce.extend({}, t), o);
            (i || _.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = ce.timers,
              r = _.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || ce.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = _.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = ce.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                ce.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    ce.each(["toggle", "show", "hide"], function (e, r) {
      var i = ce.fn[r];
      ce.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(gt(r, !0), e, t, n);
      };
    }),
    ce.each(
      {
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
          opacity: "show",
        },
        fadeOut: {
          opacity: "hide",
        },
        fadeToggle: {
          opacity: "toggle",
        },
      },
      function (e, r) {
        ce.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (ce.timers = []),
    (ce.fx.tick = function () {
      var e,
        t = 0,
        n = ce.timers;
      for (st = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || ce.fx.stop(), (st = void 0);
    }),
    (ce.fx.timer = function (e) {
      ce.timers.push(e), ce.fx.start();
    }),
    (ce.fx.interval = 13),
    (ce.fx.start = function () {
      ut || ((ut = !0), dt());
    }),
    (ce.fx.stop = function () {
      ut = null;
    }),
    (ce.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400,
    }),
    (ce.fn.delay = function (r, e) {
      return (
        (r = (ce.fx && ce.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = ie.setTimeout(e, r);
          t.stop = function () {
            ie.clearTimeout(n);
          };
        })
      );
    }),
    (lt = C.createElement("input")),
    (ct = C.createElement("select").appendChild(C.createElement("option"))),
    (lt.type = "checkbox"),
    (le.checkOn = "" !== lt.value),
    (le.optSelected = ct.selected),
    ((lt = C.createElement("input")).value = "t"),
    (lt.type = "radio"),
    (le.radioValue = "t" === lt.value);
  var mt,
    xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function (e, t) {
      return M(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    },
  }),
    ce.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? ce.prop(e, t, n)
            : ((1 === o && ce.isXMLDoc(e)) ||
                (i =
                  ce.attrHooks[t.toLowerCase()] ||
                  (ce.expr.match.bool.test(t) ? mt : void 0)),
              void 0 !== n
                ? null === n
                  ? void ce.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = ce.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!le.radioValue && "radio" === t && fe(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(D);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (mt = {
      set: function (e, t, n) {
        return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = xt[t] || ce.find.attr;
      xt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = xt[o]),
            (xt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (xt[o] = i)),
          r
        );
      };
    });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;

  function Tt(e) {
    return (e.match(D) || []).join(" ");
  }

  function Ct(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }

  function kt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(D)) || [];
  }
  ce.fn.extend({
    prop: function (e, t) {
      return M(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    },
  }),
    ce.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && ce.isXMLDoc(e)) ||
              ((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
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
            var t = ce.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: {
        for: "htmlFor",
        class: "className",
      },
    }),
    le.optSelected ||
      (ce.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    ce.each(
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
        ce.propFix[this.toLowerCase()] = this;
      }
    ),
    ce.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).addClass(t.call(this, e, Ct(this)));
            })
          : (e = kt(t)).length
          ? this.each(function () {
              if (
                ((r = Ct(this)), (n = 1 === this.nodeType && " " + Tt(r) + " "))
              ) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                (a = Tt(n)), r !== a && this.setAttribute("class", a);
              }
            })
          : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).removeClass(t.call(this, e, Ct(this)));
            })
          : arguments.length
          ? (e = kt(t)).length
            ? this.each(function () {
                if (
                  ((r = Ct(this)),
                  (n = 1 === this.nodeType && " " + Tt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o];
                    while (-1 < n.indexOf(" " + i + " "))
                      n = n.replace(" " + i + " ", " ");
                  }
                  (a = Tt(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = "string" === a || Array.isArray(t);
        return v(t)
          ? this.each(function (e) {
              ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
            })
          : "boolean" == typeof n && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = kt(t)),
            this.each(function () {
              if (s)
                for (o = ce(this), i = 0; i < e.length; i++)
                  (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== t && "boolean" !== a) ||
                  ((r = Ct(this)) && _.set(this, "__className__", r),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      r || !1 === t ? "" : _.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var St = /\r/g;
  ce.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = v(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, ce(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = ce.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                ce.valHooks[this.type] ||
                ce.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(St, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    ce.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ce.find.attr(e, "value");
            return null != t ? t : Tt(ce.text(e));
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
                (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))
              ) {
                if (((t = ce(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = ce.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    ce.each(["radio", "checkbox"], function () {
      (ce.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < ce.inArray(ce(e).val(), t));
        },
      }),
        le.checkOn ||
          (ce.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Et = ie.location,
    jt = {
      guid: Date.now(),
    },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        ce.error(
          "Invalid XML: " +
            (n
              ? ce
                  .map(n.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : e)
        ),
      t
    );
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function (e) {
      e.stopPropagation();
    };
  ce.extend(ce.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || C),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Dt.test(d + ce.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[ce.expando]
            ? e
            : new ce.Event(d, "object" == typeof e && e)).isTrigger = r
            ? 2
            : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : ce.makeArray(t, [e])),
          (c = ce.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !y(n)) {
          for (
            s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || C) &&
            p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (_.get(o, "events") || Object.create(null))[e.type] &&
              _.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              $(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !$(n) ||
            (u &&
              v(n[d]) &&
              !y(n) &&
              ((a = n[u]) && (n[u] = null),
              (ce.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Nt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Nt),
              (ce.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = ce.extend(new ce.Event(), n, {
        type: e,
        isSimulated: !0,
      });
      ce.event.trigger(r, null, t);
    },
  }),
    ce.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ce.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return ce.event.trigger(e, t, n, !0);
      },
    });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;

  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      ce.each(e, function (e, t) {
        r || qt.test(n)
          ? i(n, t)
          : Pt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== x(e)) i(n, e);
    else for (t in e) Pt(n + "[" + t + "]", e[t], r, i);
  }
  (ce.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = v(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
      ce.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Pt(n, e[n], t, i);
    return r.join("&");
  }),
    ce.fn.extend({
      serialize: function () {
        return ce.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ce.prop(this, "elements");
          return e ? ce.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !ce(this).is(":disabled") &&
              Ot.test(this.nodeName) &&
              !Ht.test(e) &&
              (this.checked || !we.test(e))
            );
          })
          .map(function (e, t) {
            var n = ce(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? ce.map(n, function (e) {
                  return {
                    name: t.name,
                    value: e.replace(Lt, "\r\n"),
                  };
                })
              : {
                  name: t.name,
                  value: n.replace(Lt, "\r\n"),
                };
          })
          .get();
      },
    });
  var Mt = /%20/g,
    Rt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    zt = "*/".concat("*"),
    Xt = C.createElement("a");

  function Ut(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }

  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;

    function l(e) {
      var r;
      return (
        (s[e] = !0),
        ce.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }

  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e;
  }
  (Xt.href = Et.href),
    ce.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": zt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": ce.parseXML,
        },
        flatOptions: {
          url: !0,
          context: !0,
        },
      },
      ajaxSetup: function (e, t) {
        return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
      },
      ajaxPrefilter: Ut(Bt),
      ajaxTransport: Ut(_t),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = ce.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
          x = ce.Deferred(),
          b = ce.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Wt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace(
            $t,
            Et.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""]),
          null == v.crossDomain)
        ) {
          r = C.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = ce.param(v.data, v.traditional)),
          Vt(Bt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = ce.event && v.global) &&
          0 == ce.active++ &&
          ce.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ft.test(v.type)),
        (f = v.url.replace(Rt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Mt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (At.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(It, "$1")),
              (o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (ce.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", ce.lastModified[f]),
          ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Vt(_t, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = ie.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");

        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && ie.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
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
              })(v, T, n)),
            !i &&
              -1 < ce.inArray("script", v.dataTypes) &&
              ce.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
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
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
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
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return {
                state: "success",
                data: t,
              };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (ce.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --ce.active || ce.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return ce.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ce.get(e, void 0, t, "script");
      },
    }),
    ce.each(["get", "post"], function (e, i) {
      ce[i] = function (e, t, n, r) {
        return (
          v(t) && ((r = r || n), (n = t), (t = void 0)),
          ce.ajax(
            ce.extend(
              {
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n,
              },
              ce.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    ce.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (ce._evalUrl = function (e, t, n) {
      return ce.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function () {},
        },
        dataFilter: function (e) {
          ce.globalEval(e, t, n);
        },
      });
    }),
    ce.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (v(e) && (e = e.call(this[0])),
            (t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return v(n)
          ? this.each(function (e) {
              ce(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = ce(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = v(t);
        return this.each(function (e) {
          ce(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              ce(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (ce.expr.pseudos.hidden = function (e) {
      return !ce.expr.pseudos.visible(e);
    }),
    (ce.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (ce.ajaxSettings.xhr = function () {
      try {
        return new ie.XMLHttpRequest();
      } catch (e) {}
    });
  var Yt = {
      0: 200,
      1223: 204,
    },
    Qt = ce.ajaxSettings.xhr();
  (le.cors = !!Qt && "withCredentials" in Qt),
    (le.ajax = Qt = !!Qt),
    ce.ajaxTransport(function (i) {
      var o, a;
      if (le.cors || (Qt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Yt[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? {
                              binary: r.response,
                            }
                          : {
                              text: r.responseText,
                            },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      ie.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    ce.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    ce.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {
        script: /\b(?:java|ecma)script\b/,
      },
      converters: {
        "text script": function (e) {
          return ce.globalEval(e), e;
        },
      },
    }),
    ce.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    ce.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = ce("<script>")
              .attr(n.scriptAttrs || {})
              .prop({
                charset: n.scriptCharset,
                src: n.url,
              })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              C.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++;
      return (this[e] = !0), e;
    },
  }),
    ce.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Zt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Zt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Zt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || ce.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = ie[r]),
          (ie[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? ce(ie).removeProp(r) : (ie[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(r)),
              o && v(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (le.createHTMLDocument =
      (((Jt = C.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Jt.childNodes.length)),
    (ce.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (le.createHTMLDocument
              ? (((r = (t =
                  C.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = C.location.href),
                t.head.appendChild(r))
              : (t = C)),
          (o = !n && []),
          (i = w.exec(e))
            ? [t.createElement(i[1])]
            : ((i = Ae([e], t, o)),
              o && o.length && ce(o).remove(),
              ce.merge([], i.childNodes)));
      var r, i, o;
    }),
    (ce.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
        v(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          ce
            .ajax({
              url: e,
              type: i || "GET",
              dataType: "html",
              data: t,
            })
            .done(function (e) {
              (o = arguments),
                a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (ce.expr.pseudos.animated = function (t) {
      return ce.grep(ce.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (ce.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = ce.css(e, "position"),
          c = ce(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = ce.css(e, "top")),
          (u = ce.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          v(t) && (t = t.call(e, n, ce.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    ce.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                ce.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset,
              })
            : {
                top: 0,
                left: 0,
              }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = {
              top: 0,
              left: 0,
            };
          if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === ce.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0)),
              (i.left += ce.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - ce.css(r, "marginTop", !0),
            left: t.left - i.left - ce.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
          return e || J;
        });
      },
    }),
    ce.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (t, i) {
        var o = "pageYOffset" === i;
        ce.fn[t] = function (e) {
          return M(
            this,
            function (e, t, n) {
              var r;
              if (
                (y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    ce.each(["top", "left"], function (e, n) {
      ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
        if (t)
          return (t = Ge(e, n)), _e.test(t) ? ce(e).position()[n] + "px" : t;
      });
    }),
    ce.each(
      {
        Height: "height",
        Width: "width",
      },
      function (a, s) {
        ce.each(
          {
            padding: "inner" + a,
            content: s,
            "": "outer" + a,
          },
          function (r, o) {
            ce.fn[o] = function (e, t) {
              var n = arguments.length && (r || "boolean" != typeof e),
                i = r || (!0 === e || !0 === t ? "margin" : "border");
              return M(
                this,
                function (e, t, n) {
                  var r;
                  return y(e)
                    ? 0 === o.indexOf("outer")
                      ? e["inner" + a]
                      : e.document.documentElement["client" + a]
                    : 9 === e.nodeType
                    ? ((r = e.documentElement),
                      Math.max(
                        e.body["scroll" + a],
                        r["scroll" + a],
                        e.body["offset" + a],
                        r["offset" + a],
                        r["client" + a]
                      ))
                    : void 0 === n
                    ? ce.css(e, t, i)
                    : ce.style(e, t, n, i);
                },
                s,
                n ? e : void 0,
                n
              );
            };
          }
        );
      }
    ),
    ce.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ce.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    ce.fn.extend({
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
      hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e);
      },
    }),
    ce.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        ce.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (ce.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
      return (
        (r = ae.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(ae.call(arguments)));
        }).guid = e.guid =
          e.guid || ce.guid++),
        i
      );
  }),
    (ce.holdReady = function (e) {
      e ? ce.readyWait++ : ce.ready(!0);
    }),
    (ce.isArray = Array.isArray),
    (ce.parseJSON = JSON.parse),
    (ce.nodeName = fe),
    (ce.isFunction = v),
    (ce.isWindow = y),
    (ce.camelCase = F),
    (ce.type = x),
    (ce.now = Date.now),
    (ce.isNumeric = function (e) {
      var t = ce.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (ce.trim = function (e) {
      return null == e ? "" : (e + "").replace(en, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ce;
      });
  var tn = ie.jQuery,
    nn = ie.$;
  return (
    (ce.noConflict = function (e) {
      return (
        ie.$ === ce && (ie.$ = nn),
        e && ie.jQuery === ce && (ie.jQuery = tn),
        ce
      );
    }),
    "undefined" == typeof e && (ie.jQuery = ie.$ = ce),
    ce
  );
});

/*! sp_class/assets/js/jquery.infieldlabel.min.js
 */
/*
 * jquery.infieldlabel
 * A simple jQuery plugin for adding labels that sit over a form field and fade away when the fields are populated.
 *
 * Copyright (c) 2009 - 2013 Doug Neiner <doug@dougneiner.com> (http://code.dougneiner.com)
 * Source: https://github.com/dcneiner/In-Field-Labels-jQuery-Plugin
 * Dual licensed MIT or GPL
 *   MIT (http://www.opensource.org/licenses/mit-license)
 *   GPL (http://www.opensource.org/licenses/gpl-license)
 *
 * @version 0.1.5 - MODIFIED BY FIRMSEEK WITH base.$field.is(':-webkit-autofill')
 *                - MODIFIED BY FIRMSEEK WITH base.$field[0].validity.badInput, for number-type fields that have input but no val()
 */
(function ($) {
  $.InFieldLabels = function (label, field, options) {
    // To avoid scope issues, use 'base' instead of 'this'
    // to reference this class from internal events and functions.
    var base = this;

    // Access to jQuery and DOM versions of each element
    base.$label = $(label);
    base.label = label;

    base.$field = $(field);
    base.field = field;

    base.$label.data("InFieldLabels", base);
    base.showing = true;

    base.init = function () {
      var initialSet;

      // Merge supplied options with default options
      base.options = $.extend({}, $.InFieldLabels.defaultOptions, options);

      // Add provided class name to the label, if set
      if (base.options.className) {
        base.$label.addClass(base.options.className);
      }

      // Check if the field is already filled in
      // add a short delay to handle autocomplete
      setTimeout(function () {
        if (
          base.$field.val() !== "" ||
          base.$field.is(":-webkit-autofill") ||
          (base.$field[0].validity && base.$field[0].validity.badInput)
        ) {
          base.$label.hide();
          base.showing = false;
        } else {
          base.$label.show();
          base.showing = true;
        }
      }, 200);

      base.$field
        .focus(function () {
          base.fadeOnFocus();
        })
        .blur(function () {
          base.checkForEmpty(true);
        })
        .bind("keydown.infieldlabel", function (e) {
          // Use of a namespace (.infieldlabel) allows us to
          // unbind just this method later
          base.hideOnChange(e);
        })
        .bind("paste", function () {
          // Since you can not paste an empty string we can assume
          // that the field is not empty and the label can be cleared.
          base.setOpacity(0.0);
        })
        .change(function () {
          base.checkForEmpty();
        })
        .bind("onPropertyChange", function () {
          base.checkForEmpty();
        })
        .bind("keyup.infieldlabel", function () {
          base.checkForEmpty();
        });

      if (base.options.pollDuration > 0) {
        initialSet = setInterval(function () {
          if (
            base.$field.val() !== "" ||
            (base.$field[0].validity && base.$field[0].validity.badInput)
          ) {
            base.$label.hide();
            base.showing = false;
            clearInterval(initialSet);
          }
        }, base.options.pollDuration);
      }
    };

    // If the label is currently showing
    // then fade it down to the amount
    // specified in the settings
    base.fadeOnFocus = function () {
      if (base.showing) {
        base.setOpacity(base.options.fadeOpacity);
      }
    };

    base.setOpacity = function (opacity) {
      base.$label.stop().animate(
        {
          opacity: opacity,
        },
        base.options.fadeDuration,
        function () {
          if (opacity === 0.0) {
            base.$label.hide();
          }
        }
      );
      base.showing = opacity > 0.0;
    };

    // Checks for empty as a fail safe
    // set blur to true when passing from
    // the blur event
    base.checkForEmpty = function (blur) {
      if (
        base.$field.val() === "" &&
        !(base.$field[0].validity && base.$field[0].validity.badInput)
      ) {
        base.prepForShow();
        base.setOpacity(blur ? 1.0 : base.options.fadeOpacity);
      } else {
        base.setOpacity(0.0);
      }
    };

    base.prepForShow = function () {
      if (!base.showing) {
        // Prepare for a animate in...
        base.$label
          .css({
            opacity: 0.0,
          })
          .show();

        // Reattach the keydown event
        base.$field.bind("keydown.infieldlabel", function (e) {
          base.hideOnChange(e);
        });
      }
    };

    base.hideOnChange = function (e) {
      if (
        e.keyCode === 16 || // Skip Shift
        e.keyCode === 9 // Skip Tab
      ) {
        return;
      }

      if (base.showing) {
        base.$label.hide();
        base.showing = false;
      }

      // Remove keydown event to save on CPU processing
      base.$field.unbind("keydown.infieldlabel");
    };

    // Run the initialization method
    base.init();
  };

  $.InFieldLabels.defaultOptions = {
    fadeOpacity: 0.5, // Once a field has focus, how transparent should the label be
    fadeDuration: 300, // How long should it take to animate from 1.0 opacity to the fadeOpacity
    pollDuration: 0, // If set to a number greater than zero, this will poll until content is detected in a field
    enabledInputTypes: [
      "text",
      "search",
      "tel",
      "url",
      "email",
      "password",
      "number",
      "textarea",
    ],
    className: false, // Class assigned to enhanced labels
  };

  $.fn.inFieldLabels = function (options) {
    var allowed_types =
      (options && options.enabledInputTypes) ||
      $.InFieldLabels.defaultOptions.enabledInputTypes;

    return this.each(function () {
      // Find input or textarea based on for= attribute
      // The for attribute on the label must contain the ID
      // of the input or textarea element
      var for_attr = $(this).attr("for"),
        field,
        restrict_type;
      if (!for_attr) {
        return; // Nothing to attach, since the for field wasn't used
      }

      // Find the referenced input or textarea element
      field = document.getElementById(for_attr);
      if (!field) {
        return; // No element found
      }

      // Restrict input type
      restrict_type = $.inArray(field.type, allowed_types);

      if (restrict_type === -1 && field.nodeName !== "TEXTAREA") {
        return; // Again, nothing to attach
      }

      // Only create object for matched input types and textarea
      new $.InFieldLabels(this, field, options);
    });
  };
})(jQuery);

/*! sp_class/assets/js/autocomplete-1.1.3.min.js
 */
!(function ($) {
  var reEscape = new RegExp(
    "(\\" +
      ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"].join(
        "|\\"
      ) +
      ")",
    "g"
  );

  function fnFormatResult(e, t, s) {
    var i = "(" + s.replace(reEscape, "\\$1") + ")";
    return e.replace(new RegExp(i, "gi"), "<strong>$1</strong>");
  }

  function Autocomplete(e, t) {
    (this.el = $(e)),
      this.el.attr("autocomplete", "off"),
      this.el.closest("form").attr("autocomplete", "off"),
      (this.suggestions = []),
      (this.data = []),
      (this.badQueries = []),
      (this.selectedIndex = -1),
      (this.currentValue = this.el.val()),
      (this.intervalId = 0),
      (this.cachedResponse = []),
      (this.onChangeInterval = null),
      (this.ignoreValueChange = !1),
      (this.serviceUrl = t.serviceUrl),
      (this.queryName = t.queryName),
      (this.isLocal = !1),
      (this.options = {
        autoSubmit: !1,
        minChars: 1,
        maxHeight: 300,
        deferRequestBy: 0,
        width: 0,
        highlight: !0,
        params: {},
        fnFormatResult: fnFormatResult,
        delimiter: null,
        zIndex: 9999,
        queryName: "ajax_autocomplete_search",
      }),
      this.initialize(),
      this.setOptions(t);
  }
  ($.fn.autocomplete = function (e) {
    return new Autocomplete(this.get(0) || $("<input />"), e);
  }),
    (Autocomplete.prototype = {
      killerFn: null,
      initialize: function () {
        var t, e, s;
        (t = this),
          (s =
            "Autocomplete_" +
            (e = Math.floor(1048576 * Math.random()).toString(16))),
          (this.killerFn = function (e) {
            0 === $(e.target).parents(".autocomplete").length &&
              (t.killSuggestions(), t.disableKillerFn());
          }),
          this.options.width || (this.options.width = this.el.width()),
          (this.mainContainerId = "AutocompleteContainter_" + e),
          $(
            '<div id="' +
              this.mainContainerId +
              '" style="position:absolute;z-index:9999;"><div class="autocomplete-w1"><div class="autocomplete" id="' +
              s +
              '" style="display:none; width:300px;"></div></div></div>'
          ).appendTo("body"),
          (this.container = $("#" + s)),
          this.fixPosition(),
          window.opera
            ? this.el.keypress(function (e) {
                t.onKeyPress(e);
              })
            : this.el.keydown(function (e) {
                t.onKeyPress(e);
              }),
          this.el.keyup(function (e) {
            t.onKeyUp(e);
          }),
          this.el.blur(function () {
            t.enableKillerFn();
          }),
          this.el.focus(function () {
            t.fixPosition();
          });
      },
      setOptions: function (e) {
        var t = this.options;
        $.extend(t, e),
          t.lookup &&
            ((this.isLocal = !0),
            $.isArray(t.lookup) &&
              (t.lookup = {
                suggestions: t.lookup,
                data: [],
              })),
          $("#" + this.mainContainerId)
            .css({
              zIndex: t.zIndex,
            })
            .addClass(t.wrapperClass),
          this.container.css({
            maxHeight: t.maxHeight + "px",
            width: t.width,
          });
      },
      clearCache: function () {
        (this.cachedResponse = []), (this.badQueries = []);
      },
      disable: function () {
        this.disabled = !0;
      },
      enable: function () {
        this.disabled = !1;
      },
      fixPosition: function () {
        var e = this.el.offset();
        (e.left -= ($("html").outerWidth() - $("body").outerWidth()) / 2),
          $("#" + this.mainContainerId).css({
            top: e.top + this.el.innerHeight() + "px",
            left: e.left + "px",
          });
      },
      enableKillerFn: function () {
        $(document).bind("click", this.killerFn);
      },
      disableKillerFn: function () {
        $(document).unbind("click", this.killerFn);
      },
      killSuggestions: function () {
        var e = this;
        this.stopKillSuggestions(),
          (this.intervalId = window.setInterval(function () {
            e.hide(), e.stopKillSuggestions();
          }, 300));
      },
      stopKillSuggestions: function () {
        window.clearInterval(this.intervalId);
      },
      onKeyPress: function (e) {
        if (!this.disabled && this.enabled) {
          switch (e.keyCode) {
            case 27:
              this.el.val(this.currentValue), this.hide();
              break;
            case 13:
              return -1 !== this.selectedIndex
                ? (this.container.children(".selected[data-url]").click()
                    .length && e.stopImmediatePropagation(),
                  e.preventDefault(),
                  !1)
                : void this.hide();
            case 38:
              this.moveUp();
              break;
            case 40:
              this.moveDown();
              break;
            default:
              return;
          }
          e.stopImmediatePropagation(), e.preventDefault();
        }
      },
      onKeyUp: function (e) {
        if (!this.disabled) {
          switch (e.keyCode) {
            case 38:
            case 40:
              return;
          }
          if (
            (clearInterval(this.onChangeInterval),
            this.currentValue !== this.el.val())
          )
            if (0 < this.options.deferRequestBy) {
              var t = this;
              this.onChangeInterval = setInterval(function () {
                t.onValueChange();
              }, this.options.deferRequestBy);
            } else this.onValueChange();
        }
      },
      onValueChange: function () {
        clearInterval(this.onChangeInterval),
          (this.currentValue = this.el.val());
        var e = this.getQuery(this.currentValue);
        (this.selectedIndex = -1),
          this.ignoreValueChange
            ? (this.ignoreValueChange = !1)
            : "" === e || e.length < this.options.minChars
            ? this.hide()
            : this.getSuggestions(e);
      },
      getQuery: function (e) {
        var t, s;
        return (t = this.options.delimiter)
          ? ((s = e.split(t)), $.trim(s[s.length - 1]))
          : $.trim(e);
      },
      getSuggestionsLocal: function (e) {
        var t, s, i, n, o;
        for (
          i = (s = this.options.lookup).suggestions.length,
            t = {
              suggestions: [],
              data: [],
            },
            e = e.toLowerCase(),
            o = 0;
          o < i;
          o++
        )
          0 === (n = s.suggestions[o]).toLowerCase().indexOf(e) &&
            (t.suggestions.push(n), t.data.push(s.data[o]));
        return t;
      },
      getSuggestions: function (e) {
        var t, s;
        (t = this.isLocal
          ? this.getSuggestionsLocal(e)
          : this.cachedResponse[e]) && $.isArray(t.suggestions)
          ? ((this.suggestions = t.suggestions),
            (this.data = t.data),
            this.suggest())
          : this.isBadQuery(e) ||
            (((s = this).options.params[s.options.queryName] = e),
            $.get(
              this.serviceUrl,
              s.options.params,
              function (e) {
                s.processResponse(e);
              },
              "text"
            ));
      },
      isBadQuery: function (e) {
        for (var t = this.badQueries.length; t--; )
          if (0 === e.indexOf(this.badQueries[t])) return !0;
        return !1;
      },
      hide: function () {
        (this.enabled = !1), (this.selectedIndex = -1), this.container.hide();
      },
      suggest: function () {
        if (0 !== this.suggestions.length) {
          var t, e, s, i, n, o, a, l, r;
          (e = (t = this).suggestions.length),
            (i = this.options.fnFormatResult),
            (n = this.getQuery(this.currentValue)),
            (l = function (e) {
              return function () {
                t.activate(e);
              };
            }),
            (r = function (e) {
              return function () {
                t.select(e);
              };
            }),
            this.container.hide().empty();
          var h = [];
          for (o = 0; o < e; o++) {
            if (
              ((a = this.suggestions[o]),
              (innerAnswer = i(a, this.data[o], n)),
              0 <= a.indexOf("FS-AJAX-HEADER"))
            )
              (fs_header = a
                .replace("FS-AJAX-HEADER", "")
                .replace("... ", "")
                .replace(" ...", "")),
                (s = $("<h2>" + fs_header + "</h2>"));
            else if (0 <= a.indexOf("[[@")) {
              var u = o,
                c = a.indexOf("[[@") + 3,
                d = a.indexOf("@]]", c);
              h[u] = a.substring(c, d);
              var g = "[[@" + h[u] + "@]]";
              (final_s = a.replace(g, "")),
                (final_s_inner = final_s),
                0 <= a.indexOf("FS-AJAX-FOOTER") &&
                  ((final_s = final_s_inner.replace("FS-AJAX-FOOTER", "")),
                  (final_s_inner =
                    '<span class="autoCompleteMore">' + final_s + "</span>")),
                (s = $(
                  (t.selectedIndex === o
                    ? '<div data-url="' + h[u] + '" class="selected"'
                    : '<div data-url="' + h[u] + '"') +
                    '">' +
                    final_s_inner +
                    "</div>"
                )).mouseover(l(o)),
                s.click(function () {
                  window.location = $(this).data("url");
                });
            } else
              (s = $(
                (t.selectedIndex === o ? '<div class="selected"' : "<div") +
                  ' title="' +
                  a +
                  '">' +
                  innerAnswer +
                  "</div>"
              )).mouseover(l(o)),
                s.click(r(o));
            this.container.append(s);
          }
          (this.enabled = !0), this.container.show();
        } else this.hide();
      },
      processResponse: function (text) {
        var response,
          qName = this.options.queryName;
        try {
          response = eval("(" + text + ")");
        } catch (e) {
          return;
        }
        $.isArray(response.data) || (response.data = []),
          this.options.noCache ||
            ((this.cachedResponse[response[qName]] = response),
            0 === response.suggestions.length &&
              this.badQueries.push(response[qName])),
          response[qName] === this.getQuery(this.currentValue) &&
            ((this.suggestions = response.suggestions),
            (this.data = response.data),
            this.suggest());
      },
      activate: function (e) {
        var t, s;
        return (
          (t = this.container.children()),
          -1 !== this.selectedIndex &&
            t.length > this.selectedIndex &&
            $(t.get(this.selectedIndex)).removeClass(),
          (this.selectedIndex = e),
          -1 !== this.selectedIndex &&
            t.length > this.selectedIndex &&
            ((s = t.get(this.selectedIndex)), $(s).addClass("selected")),
          s
        );
      },
      deactivate: function (e, t) {
        (e.className = ""),
          this.selectedIndex === t && (this.selectedIndex = -1);
      },
      select: function (e) {
        var t, s;
        (t = this.suggestions[e]) &&
          (this.el.focus(),
          this.el.val(t),
          this.options.autoSubmit &&
            0 < (s = this.el.parents("form")).length &&
            s.get(0).submit(),
          (this.ignoreValueChange = !0),
          this.hide(),
          this.onSelect(e));
      },
      moveUp: function () {
        if (-1 !== this.selectedIndex)
          return 0 === this.selectedIndex
            ? ((this.container.children().get(0).className = ""),
              (this.selectedIndex = -1),
              void this.el.val(this.currentValue))
            : void this.adjustScroll(this.selectedIndex - 1);
      },
      moveDown: function () {
        this.selectedIndex !== this.suggestions.length - 1 &&
          this.adjustScroll(this.selectedIndex + 1);
      },
      adjustScroll: function (e) {
        var t, s, i;
        (t = this.activate(e).offsetTop),
          (i = (s = this.container.scrollTop()) + this.options.maxHeight - 25),
          t < s
            ? this.container.scrollTop(t)
            : i < t &&
              this.container.scrollTop(t - this.options.maxHeight + 25),
          this.el.val(this.getValue(this.suggestions[e]));
      },
      onSelect: function (e) {
        var t, s, i, n;
        (s = (t = this).options.onSelect),
          (i = t.suggestions[e]),
          (n = t.data[e]),
          t.el.val(t.getValue(i)),
          $.isFunction(s) && s(i, n, t.el);
      },
      getValue: function (e) {
        return /^((FS-)|(\[\[@))/.test(e)
          ? this.currentValue
          : (t = this.options.delimiter)
          ? 1 === (i = (s = this.currentValue).split(t)).length
            ? e
            : s.substr(0, s.length - i[i.length - 1].length) + e
          : e;
        var t, s, i;
      },
    });
})(jQuery);

/*! sp_class/assets/js/fs.force-target.js
 */
$("body").on(
  "click focus mouseover",
  'a[target],a[href$=pdf],a[href$=doc],a[href$=docx],a[href*="//"]:not([href*="//' +
    location.hostname +
    '"])',
  function () {
    this.target = this.target || "_blank";
    this.rel = $.trim(
      (this.rel || "").replace(/\s*noopener/g, "") + " noopener"
    );
  }
);

/*! sp_class/assets/js/what-input.min.js
 */
// version v1.1.4?
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define([], function () {
        return t();
      })
    : "object" == typeof exports
    ? (module.exports = t())
    : (e.whatInput = t());
})(this, function () {
  "use strict";

  function e(e) {
    clearTimeout(a),
      n(e),
      (p = !0),
      (a = setTimeout(function () {
        p = !1;
      }, 1e3));
  }

  function t(e) {
    p || n(e);
  }

  function n(e) {
    var t = o(e),
      n = i(e),
      d = m[e.type];
    "pointer" === d && (d = r(e)),
      w !== d &&
        ((!h &&
          w &&
          "keyboard" === d &&
          "tab" !== b[t] &&
          y.indexOf(n.nodeName.toLowerCase()) >= 0) ||
          ((w = d),
          f.setAttribute("data-whatinput", w),
          -1 === v.indexOf(w) && v.push(w))),
      "keyboard" === d && u(t);
  }

  function o(e) {
    return e.keyCode ? e.keyCode : e.which;
  }

  function i(e) {
    return e.target || e.srcElement;
  }

  function r(e) {
    return "number" == typeof e.pointerType ? k[e.pointerType] : e.pointerType;
  }

  function u(e) {
    -1 === c.indexOf(b[e]) && b[e] && c.push(b[e]);
  }

  function d(e) {
    var t = o(e),
      n = c.indexOf(b[t]);
    -1 !== n && c.splice(n, 1);
  }

  function s() {
    var n = "mousedown";
    window.PointerEvent
      ? (n = "pointerdown")
      : window.MSPointerEvent && (n = "MSPointerDown"),
      f.addEventListener(n, t),
      f.addEventListener("mouseenter", t),
      "ontouchstart" in window && f.addEventListener("touchstart", e),
      f.addEventListener("keydown", t),
      document.addEventListener("keyup", d);
  }
  var a,
    c = [],
    f = document.body,
    p = !1,
    w = null,
    y = ["input", "select", "textarea"],
    h = f.hasAttribute("data-whatinput-formtyping"),
    m = {
      keydown: "keyboard",
      mousedown: "mouse",
      mouseenter: "mouse",
      touchstart: "touch",
      pointerdown: "pointer",
      MSPointerDown: "pointer",
    },
    v = [],
    b = {
      9: "tab",
      13: "enter",
      16: "shift",
      27: "esc",
      32: "space",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
    },
    k = {
      2: "touch",
      3: "touch",
      4: "mouse",
    };
  return (
    "addEventListener" in window && Array.prototype.indexOf && s(),
    {
      ask: function () {
        return w;
      },
      keys: function () {
        return c;
      },
      types: function () {
        return v;
      },
      set: n,
    }
  );
});

/*! sp_class/assets/js/jquery.customSelect.0.5.1.min.js
 */
/*!
 * jquery.customSelect() - v0.5.1
 * http://adam.co/lab/jquery/customselect/
 * 2014-04-19
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License
 */
(function (a) {
  a.fn.extend({
    customSelect: function (c) {
      if (typeof document.body.style.maxHeight === "undefined") {
        return this;
      }
      var e = {
          customClass: "customSelect",
          mapClass: true,
          mapStyle: true,
        },
        c = a.extend(e, c),
        d = c.customClass,
        f = function (h, k) {
          var g = h.find(":selected"),
            j = k.children(":first"),
            i = g.html() || "&nbsp;";
          j.html(i);
          if (g.attr("disabled")) {
            k.addClass(b("DisabledOption"));
          } else {
            k.removeClass(b("DisabledOption"));
          }
          setTimeout(function () {
            k.removeClass(b("Open"));
            a(document).off("mouseup.customSelect");
          }, 60);
        },
        b = function (g) {
          return d + g;
        };
      return this.each(function () {
        var g = a(this),
          i = a("<span />").addClass(b("Inner")),
          h = a("<span />");
        g.after(h.append(i));
        h.addClass(d);
        if (c.mapClass) {
          h.addClass(g.attr("class"));
        }
        if (c.mapStyle) {
          h.attr("style", g.attr("style"));
        }
        g.addClass("hasCustomSelect")
          .on("render.customSelect", function () {
            f(g, h);
            g.css("width", "");
            var k =
              parseInt(g.outerWidth(), 10) -
              (parseInt(h.outerWidth(), 10) - parseInt(h.width(), 10));
            h.css({
              display: "inline-block",
            });
            var j = h.outerHeight();
            if (g.attr("disabled")) {
              h.addClass(b("Disabled"));
            } else {
              h.removeClass(b("Disabled"));
            }
            i.css({
              width: k,
              display: "inline-block",
            });
            g.css({
              "-webkit-appearance": "menulist-button",
              width: h.outerWidth(),
              position: "absolute",
              opacity: 0,
              height: j,
              fontSize: h.css("font-size"),
            });
          })
          .on("change.customSelect", function () {
            h.addClass(b("Changed"));
            f(g, h);
          })
          .on("keyup.customSelect", function (j) {
            if (!h.hasClass(b("Open"))) {
              g.trigger("blur.customSelect");
              g.trigger("focus.customSelect");
            } else {
              if (j.which == 13 || j.which == 27) {
                f(g, h);
              }
            }
          })
          .on("mousedown.customSelect", function () {
            h.removeClass(b("Changed"));
          })
          .on("mouseup.customSelect", function (j) {
            if (!h.hasClass(b("Open"))) {
              if (
                a("." + b("Open")).not(h).length > 0 &&
                typeof InstallTrigger !== "undefined"
              ) {
                g.trigger("focus.customSelect");
              } else {
                h.addClass(b("Open"));
                j.stopPropagation();
                a(document).one("mouseup.customSelect", function (k) {
                  if (
                    k.target != g.get(0) &&
                    a.inArray(k.target, g.find("*").get()) < 0
                  ) {
                    g.trigger("blur.customSelect");
                  } else {
                    f(g, h);
                  }
                });
              }
            }
          })
          .on("focus.customSelect", function () {
            h.removeClass(b("Changed")).addClass(b("Focus"));
          })
          .on("blur.customSelect", function () {
            h.removeClass(b("Focus") + " " + b("Open"));
          })
          .on("mouseenter.customSelect", function () {
            h.addClass(b("Hover"));
          })
          .on("mouseleave.customSelect", function () {
            h.removeClass(b("Hover"));
          })
          .trigger("render.customSelect");
      });
    },
  });
})(jQuery);

/*! sp_class/assets/js/multimedia-popup-1.3.1.min.js
 */
!(function (e) {
  "use strict";
  window.initMultiMedia = function (a) {
    var l = e.extend(
        {},
        {
          player_el: "mediaPlayer",
          player_width: "100%",
          player_height: "100%",
          player_autostart: !0,
          player_wrapper_el: "popupPlayerWrapper",
          player_inline_wrapper_el: "inlineMultimediaPlaceholder",
          player_wrapper_trans_speed: "normal",
          player_playlist_el: "popupPlayerPlaylist",
          player_playlist_items_title: null,
          player_playlist_items: "ul.results_list li",
          player_playlist_direction: "horizontal",
          player_playlist_toggle_speed: 200,
          player_playlist_ajax_el: "#item_relatedsame > div",
          player_sidebar_el: "popupPlayerSidebar",
          player_sidebar_ajax_el: "#item_bio, #item_area, #item_industry",
          launch_trigger: ".triggerPopupPlayer",
          close_trigger: "closeButton",
          background_curtain_el: "backgroundPopup",
          background_curtain_trans_speed: "normal",
          background_curtain_opacity: "0.7",
          href_player: [
            'a[href*="youtube.com/watch?"]',
            'a[href*="youtu.be/"]',
            'a[href*="vimeo.com/"]',
          ],
        },
        a
      ),
      r = 0;

    function t(a) {
      var r = e("." + l.player_playlist_el)
        .find("div.results")
        .find("> ul");
      if (r.length) {
        var t = !1,
          p = e("." + l.player_el).width(),
          _ = r.find("li").length,
          n = 10 * _ + 20;
        _ * r.find("li:first").width() + n > p && (t = !0),
          t
            ? (e("." + l.player_playlist_el).addClass(
                "playlistHorizontalToggles"
              ),
              e("#playlistPrev").length && e("#playlistPrev").remove(),
              e("#playlistNext").length && e("#playlistNext").remove(),
              e("." + l.player_playlist_el).prepend(
                "<a id='playlistPrev' href='#'><span>&lsaquo;</span></a>"
              ),
              e("." + l.player_playlist_el).append(
                "<a id='playlistNext' href='#'><span>&rsaquo;</span></a>"
              ),
              e("." + l.player_playlist_el).on(
                "click touchend",
                "a#playlistPrev",
                function () {
                  return i("prev"), !1;
                }
              ),
              e("." + l.player_playlist_el).on(
                "click touchend",
                "a#playlistNext",
                function () {
                  return i("next"), !1;
                }
              ))
            : e("." + l.player_playlist_el).hasClass(
                "playlistHorizontalToggles"
              ) &&
              e("." + l.player_playlist_el).removeClass(
                "playlistHorizontalToggles"
              );
      }
    }

    function i(a) {
      var r = e("." + l.player_playlist_el)
        .find("div.results")
        .find("> ul");
      "prev" == a &&
        (r.is(":animated") ||
          (r.find("li:last").prependTo(r),
          r.css({
            left: "-150px",
          }),
          r.stop(!0).animate(
            {
              left: "+=150",
            },
            l.player_playlist_toggle_speed
          ))),
        "next" == a &&
          (r.is(":animated") ||
            r.stop(!0).animate(
              {
                left: "-=150",
              },
              l.player_playlist_toggle_speed,
              function () {
                r.find("li:first").appendTo(r),
                  r.css({
                    left: "0px",
                  });
              }
            ));
    }
    Array.isArray(l.href_player) &&
      (l.launch_trigger += ", " + l.href_player.join(", ")),
      e("body").on("click", l.launch_trigger, function (a) {
        if (e(this).parents("." + l.player_wrapper_el).length)
          var i = e(this)
            .parents("." + l.player_wrapper_el)
            .attr("id")
            .split("_")
            .pop();
        else i = 1 + Math.floor(1e5 * Math.random());
        if (e(this).is("a"))
          var p = e(this).attr("data-id"),
            _ = e(this).attr("href"),
            n = e(this).attr("data-url");
        else
          (p = e(this).find(l.launch_trigger).attr("data-id")),
            (_ = e(this).find(l.launch_trigger).attr("href")),
            (n = e(this).find(l.launch_trigger).attr("data-url"));
        n && p
          ? (n = n.replace(/(^\w+:|^)/, ""))
          : l.href_player && (n = _.replace(/(^\w+:|^)/, "")),
          (function (a, i, p, _, n) {
            var s, o, y;
            if (i.parents("div").hasClass(l.player_inline_wrapper_el))
              var d = !0;
            else {
              var d = !1;
              a = 1;
            }
            s = _.indexOf("ftp.firmseek.com") >= 0 ? "internal" : "external";
            if (
              !(_ = (function (e, a) {
                var r = e,
                  t = e.match(
                    /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
                  );
                if (null != t) {
                  var i = l.player_autostart && !a ? "&autoplay=1" : "";
                  r =
                    "https://www.youtube.com/embed/" +
                    t[1] +
                    "?playsinline=1&rel=0&showinfo=0&modestbranding=1&cc_load_policy=1" +
                    i;
                }
                if (r.match(/vimeo.com/)) {
                  var p = e.match(
                    /(?:https?:\/{2})?(?:w{3}\.)?vimeo.com(?:\/api\/oembed.json?url=|\/)([0-9]+)/
                  );
                  if (null == p) return "";
                  var _ = l.player_autostart && !a ? "&autoplay=1" : "";
                  r =
                    "https://player.vimeo.com/video/" +
                    p[1] +
                    "?color=ffffff&title=0&byline=0&portrait=0" +
                    _;
                }
                return r;
              })(_, d))
            )
              return !1;
            if (0 == r) {
              d
                ? ((o = l.player_wrapper_el + " inlinePlayer"), (y = ""))
                : ((o = l.player_wrapper_el),
                  (y =
                    "<button aria-label='Close' class='" +
                    l.close_trigger +
                    "' data-id='" +
                    a +
                    "'>x</button>"));
              var c =
                "<div data-title='" +
                l.player_playlist_items_title +
                "' class='" +
                o +
                "' id='" +
                l.player_wrapper_el +
                "_" +
                a +
                "'>" +
                y +
                "<div class='" +
                l.player_el +
                "' id='" +
                l.player_el +
                "_" +
                a +
                "'></div><div class='" +
                l.player_playlist_el +
                "' id='" +
                l.player_playlist_el +
                "_" +
                a +
                "'></div><div class='" +
                l.player_sidebar_el +
                "' id='" +
                l.player_sidebar_el +
                "_" +
                a +
                "'></div></div>";
              d
                ? (i.after(c),
                  e("." + l.player_inline_wrapper_el)
                    .find(e(l.launch_trigger))
                    .hide(),
                  e("#" + l.player_wrapper_el + "_" + a).show())
                : (e("body").append(c),
                  e("body").append(
                    "<div id='" + l.background_curtain_el + "'></div>"
                  ),
                  e("#" + l.background_curtain_el).css({
                    opacity: l.background_curtain_opacity,
                  }),
                  e("#" + l.background_curtain_el).fadeIn(
                    l.background_curtain_trans_speed
                  ),
                  e("#" + l.player_wrapper_el + "_" + a).fadeIn(
                    l.player_wrapper_trans_speed,
                    function () {
                      e(this)
                        .children("button." + l.close_trigger)
                        .focus(),
                        e("button." + l.close_trigger).data(
                          "launchingElement",
                          i
                        );
                    }
                  ));
            }
            e("#" + l.player_wrapper_el + "_" + a).hasClass(
              "playerWithPlaylist"
            ) &&
              e("#" + l.player_wrapper_el + "_" + a).removeClass(
                "playerWithPlaylist"
              );
            e("#" + l.player_wrapper_el + "_" + a).hasClass(
              "playerWithSidebar"
            ) &&
              e("#" + l.player_wrapper_el + "_" + a).removeClass(
                "playerWithSidebar"
              );
            e("#" + l.player_el + "_" + a).empty(""),
              (function (a, r, i, p, _) {
                var n = null,
                  s = !1;
                if ((n != r && (s = !1), !s))
                  if ("internal" == p) {
                    var o = i.split(".").pop();
                    "mp4" == o || "m4v" == o
                      ? e("<video />", {
                          src: i,
                          type: "video/mp4",
                          controls: !0,
                        }).appendTo("#" + l.player_el + "_" + a)
                      : "mp3" == o &&
                        e("<audio />", {
                          src: i,
                          type: "audio/mp3",
                          controls: !0,
                        }).appendTo("#" + l.player_el + "_" + a),
                      l.player_autostart &&
                        (e("." + l.player_el + " > *")[0].autoplay = !0);
                  } else
                    e("<iframe>", {
                      src: i,
                      frameborder: 0,
                      allowfullscreen: !0,
                      allow:
                        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                    }).appendTo("#" + l.player_el + "_" + a);
                (function () {
                  var a;

                  function i() {
                    e("." + l.player_inline_wrapper_el)
                      .find(l.launch_trigger)
                      .first()
                      .hide(),
                      e("." + l.player_inline_wrapper_el)
                        .find("." + l.player_wrapper_el)
                        .show(),
                      "horizontal" == l.player_playlist_direction && t(r);
                  }
                  e(window).resize(function () {
                    clearTimeout(a), (a = setTimeout(i, 250));
                  });
                })(),
                  (n = r);
              })(a, p, _, s),
              e("#" + l.player_playlist_el + "_" + a).empty(),
              e("#" + l.player_sidebar_el + "_" + a).empty(),
              e("#" + l.player_playlist_el + "_" + a).load(
                n + " " + l.player_playlist_ajax_el,
                function (r) {
                  if ("0" != e(this).html().length) {
                    if (
                      (e(this).show(),
                      e("#" + l.player_wrapper_el + "_" + a).addClass(
                        "playerWithPlaylist"
                      ),
                      l.player_playlist_items_title)
                    ) {
                      var i = "<h2>" + l.player_playlist_items_title + "</h2>";
                      e(i).prependTo(e(this));
                    }
                    "horizontal" == l.player_playlist_direction && t(a);
                  }
                }
              ),
              e("#" + l.player_sidebar_el + "_" + a).load(
                n + " " + l.player_sidebar_ajax_el,
                function (r) {
                  "0" != e(this).html().length &&
                    (e(this).show(),
                    e("#" + l.player_wrapper_el + "_" + a).addClass(
                      "playerWithSidebar"
                    ),
                    "horizontal" == l.player_playlist_direction && t(a));
                }
              ),
              e("button." + l.close_trigger).on("click", function (t) {
                !(function (a, t) {
                  e("#" + l.background_curtain_el).fadeOut(
                    l.background_curtain_trans_speed,
                    function () {
                      e(this).remove();
                    }
                  ),
                    e("#" + l.player_wrapper_el + "_" + a).fadeOut(
                      l.player_wrapper_trans_speed,
                      function () {
                        "internal" == t &&
                          e("#" + l.player_el + "_" + a + " > *")[0].pause(),
                          e(this).remove();
                      }
                    ),
                    (r = 0);
                })(a, s);
                var i = e(this).data("launchingElement");
                e(i).focus();
              }),
              d || (r = p);
            return !0;
          })(i, e(this), p, n, _) && a.preventDefault();
      }),
      e(l.launch_trigger).each(function () {
        e(this).parents("div").hasClass(l.player_inline_wrapper_el) &&
          ((r = 0), e(this).trigger("click")),
          (r = 0);
      });
  };
})(jQuery);

/*! sp_class/assets/js/jquery.smooth-scroll.min.js
 */
/* https://github.com/kswedberg/jquery-smooth-scroll 2.2.0 */
!(function (t) {
  var e = {},
    l = function (e) {
      var l = [],
        o = e.dir && "left" === e.dir ? "scrollLeft" : "scrollTop";
      return (
        this.each(function () {
          var e = t(this);
          if (this !== document && this !== window)
            return !document.scrollingElement ||
              (this !== document.documentElement && this !== document.body)
              ? void (e[o]() > 0
                  ? l.push(this)
                  : (e[o](1), e[o]() > 0 && l.push(this), e[o](0)))
              : (l.push(document.scrollingElement), !1);
        }),
        l.length ||
          this.each(function () {
            this === document.documentElement &&
              "smooth" === t(this).css("scrollBehavior") &&
              (l = [this]),
              l.length || "BODY" !== this.nodeName || (l = [this]);
          }),
        "first" === e.el && l.length > 1 && (l = [l[0]]),
        l
      );
    },
    o = /^([\-\+]=)(\d+)/;
  t.fn.extend({
    scrollable: function (t) {
      var e = l.call(this, {
        dir: t,
      });
      return this.pushStack(e);
    },
    firstScrollable: function (t) {
      var e = l.call(this, {
        el: "first",
        dir: t,
      });
      return this.pushStack(e);
    },
    smoothScroll: function (e, l) {
      if ("options" === (e = e || {}))
        return l
          ? this.each(function () {
              var e = t(this),
                o = t.extend(e.data("ssOpts") || {}, l);
              t(this).data("ssOpts", o);
            })
          : this.first().data("ssOpts");
      var o = t.extend({}, t.fn.smoothScroll.defaults, e),
        s = function (e) {
          var l = function (t) {
              return t.replace(/(:|\.|\/)/g, "\\$1");
            },
            s = this,
            n = t(this),
            r = t.extend({}, o, n.data("ssOpts") || {}),
            c = o.exclude,
            i = r.excludeWithin,
            a = 0,
            h = 0,
            f = !0,
            u = {},
            d = t.smoothScroll.filterPath(location.pathname),
            m = t.smoothScroll.filterPath(s.pathname),
            p = location.hostname === s.hostname || !s.hostname,
            g = r.scrollTarget || m === d,
            v = l(s.hash);
          if (
            (v && !t(v).length && (f = !1), r.scrollTarget || (p && g && v))
          ) {
            for (; f && a < c.length; ) n.is(l(c[a++])) && (f = !1);
            for (; f && h < i.length; ) n.closest(i[h++]).length && (f = !1);
          } else f = !1;
          f &&
            (r.preventDefault && e.preventDefault(),
            t.extend(u, r, {
              scrollTarget: r.scrollTarget || v,
              link: s,
            }),
            t.smoothScroll(u));
        };
      return (
        null !== e.delegateSelector
          ? this.off("click.smoothscroll", e.delegateSelector).on(
              "click.smoothscroll",
              e.delegateSelector,
              s
            )
          : this.off("click.smoothscroll").on("click.smoothscroll", s),
        this
      );
    },
  });
  var s = function (t) {
      var e = {
          relative: "",
        },
        l = "string" == typeof t && o.exec(t);
      return (
        "number" == typeof t
          ? (e.px = t)
          : l && ((e.relative = l[1]), (e.px = parseFloat(l[2]) || 0)),
        e
      );
    },
    n = function (e) {
      var l = t(e.scrollTarget);
      e.autoFocus &&
        l.length &&
        (l[0].focus(),
        l.is(document.activeElement) ||
          (l.prop({
            tabIndex: -1,
          }),
          l[0].focus())),
        e.afterScroll.call(e.link, e);
    };
  (t.smoothScroll = function (l, o) {
    if ("options" === l && "object" == typeof o) return t.extend(e, o);
    var r,
      c,
      i,
      a,
      h = s(l),
      f = 0,
      u = "offset",
      d = "scrollTop",
      m = {},
      p = {};
    h.px
      ? (r = t.extend(
          {
            link: null,
          },
          t.fn.smoothScroll.defaults,
          e
        ))
      : ((r = t.extend(
          {
            link: null,
          },
          t.fn.smoothScroll.defaults,
          l || {},
          e
        )).scrollElement &&
          ((u = "position"),
          "static" === r.scrollElement.css("position") &&
            r.scrollElement.css("position", "relative")),
        o && (h = s(o))),
      (d = "left" === r.direction ? "scrollLeft" : d),
      r.scrollElement
        ? ((c = r.scrollElement),
          h.px || /^(?:HTML|BODY)$/.test(c[0].nodeName) || (f = c[d]()))
        : (c = t("html, body").firstScrollable(r.direction)),
      r.beforeScroll.call(c, r),
      (a = h.px
        ? h
        : {
            relative: "",
            px:
              (t(r.scrollTarget)[u]() && t(r.scrollTarget)[u]()[r.direction]) ||
              0,
          }),
      (m[d] = a.relative + (a.px + f + r.offset)),
      "auto" === (i = r.speed) &&
        (i = Math.abs(m[d] - c[d]()) / r.autoCoefficient),
      (p = {
        duration: i,
        easing: r.easing,
        complete: function () {
          n(r);
        },
      }),
      r.step && (p.step = r.step),
      c.length ? c.stop().animate(m, p) : n(r);
  }),
    (t.smoothScroll.version = "2.2.0"),
    (t.smoothScroll.filterPath = function (t) {
      return (t = t || "")
        .replace(/^\//, "")
        .replace(/(?:index|default).[a-zA-Z]{3,4}$/, "")
        .replace(/\/$/, "");
    }),
    (t.fn.smoothScroll.defaults = {
      exclude: [],
      excludeWithin: [],
      offset: 0,
      direction: "top",
      delegateSelector: null,
      scrollElement: null,
      scrollTarget: null,
      autoFocus: !1,
      beforeScroll: function () {},
      afterScroll: function () {},
      easing: "swing",
      speed: 400,
      autoCoefficient: 2,
      preventDefault: !0,
    });
})(jQuery);

/*! sp_class/assets/js/fs.google-analytics.min.js
 */
function gaClickTracker() {
  "use strict";
  var i =
      /\.(zip|exe|dmg|xls.*|ppt.*|mp3|mp4|txt|rar|wma|mov|avi|wmv|flv|wav|vcf|vcs|epub)$/i,
    j = /\.(pdf|doc.*)$/i,
    k = /\.rss$/i,
    l = "",
    m = null,
    n = function () {
      clearTimeout(m), (window.location.href = l);
    },
    g = function () {
      var e = "function" == typeof gtag && "function" == typeof ga,
        f = !e && "function" == typeof ga && "function" == typeof ga.getAll,
        o = !e && !f && window._gaq,
        r = null;
      if (
        (e || f || o) &&
        ((e || f) &&
          ga.getAll().forEach(function (a) {
            r = a.get("trackingId");
          }),
        !r || !window["ga-disable-" + r])
      ) {
        var t = $(this),
          q = !1,
          a = this.href;
        $(this).data("url") && (a = "multimedia");
        var u =
          document.domain.split(".").reverse()[1] +
          "." +
          document.domain.split(".").reverse()[0];
        a = a.replace(new RegExp(".+//[^/]+" + u + "/", "g"), "/");
        var b = null,
          c = null,
          d = null,
          p = 0,
          g = !1,
          h = a;
        if (!a.match(/^javascript:/i)) {
          if (a.match(/^mailto\:/i))
            (b = "email"), (c = "click"), (d = a.replace(/^mailto\:/i, ""));
          else if (a.match(/^tel\:/i))
            (b = "phone"), (c = "click"), (d = a.replace(/^tel\:/i, ""));
          else if (a.match(j)) q = !0;
          else if (a.match(k))
            (q = !0),
              (b = "rss"),
              (c = "click"),
              (d = a.replace(/^mailto\:/i, ""));
          else if (a.match(i))
            (b = "download"),
              (c =
                "click-" +
                (/[.]/.exec(a) ? /[^.]+$/.exec(a)[0] : "").toLowerCase()),
              (d = a.replace(/ /g, "-"));
          else if (a.match(/^https?\:/i))
            (b = "external"),
              (c = "click"),
              (d = a.replace(/^https?\:\/\//i, "")),
              (g = !0);
          else if (a.match(/^tel\:/i))
            (b = "telephone"), (c = "click"), (d = a.replace(/^tel\:/i, ""));
          else {
            if ("multimedia" != a) return;
            (b = "multimedia"), (c = "click"), (d = $(this).data("url"));
          }
          var s = !0;
          o && _gaq.push(["_set", "hitCallback", null]);
          var v = /^_blank$/i.test(t.attr("target")),
            w = /^(download|external)$/.test(b);
          return (
            !v && (q || w)
              ? ((l = h),
                q
                  ? (o
                      ? (_gaq.push(["_set", "hitCallback", n]),
                        _gaq.push(["_trackPageview", h]))
                      : f
                      ? ga("send", "pageview", {
                          page: h,
                          hitCallback: n,
                        })
                      : e &&
                        gtag("config", r, {
                          page_location: h,
                        }),
                    (s = !1))
                  : (o
                      ? (_gaq.push(["_set", "hitCallback", n]),
                        _gaq.push(["_trackEvent", b, c, d, p, g]))
                      : f
                      ? ga("send", "event", b, c, d, p, {
                          nonInteraction: g,
                          hitCallback: n,
                        })
                      : e &&
                        gtag("event", c, {
                          event_category: b,
                          event_label: d,
                          value: p,
                          non_interaction: g,
                          event_callback: n,
                        }),
                    (s = !1)))
              : q
              ? o
                ? _gaq.push(["_trackPageview", h])
                : f
                ? ga("send", "pageview", {
                    page: h,
                  })
                : e &&
                  gtag("config", r, {
                    page_location: h,
                  })
              : o
              ? _gaq.push(["_trackEvent", b, c, d, p, g])
              : f
              ? ga("send", "event", b, c, d, p, {
                  nonInteraction: g,
                })
              : e &&
                gtag("event", c, {
                  event_category: b,
                  event_label: d,
                  value: p,
                  non_interaction: g,
                }),
            s || (m = setTimeout(n, 750)),
            s
          );
        }
      }
    };
  if (
    ($("body").on ? $("body").on("click", "a[href]", g) : $("a[href]").click(g),
    document.location.hash.match("#spsscme-(.+)"))
  ) {
    var a = "SocialShare",
      b = "visit",
      c = document.location.pathname,
      d = !0,
      e = 0,
      f = "function" == typeof gtag && "function" == typeof ga,
      h = !f && "function" == typeof ga;
    f || h || !window._gaq
      ? h
        ? ga("send", "event", a, b, c, e, {
            nonInteraction: d,
          })
        : f &&
          gtag("event", b, {
            event_category: a,
            event_label: c,
            value: e,
            non_interaction: d,
          })
      : _gaq.push(["_trackEvent", a, b, c, e, d]);
  }
}

function gaSearchTracker() {
  "use strict";
  var a = "function" == typeof gtag && "function" == typeof ga,
    b = !a && "function" == typeof ga,
    d = !a && !b && window._gaq;
  if (a || b || d) {
    var e = null;
    if (
      ((a || b) &&
        ga.getAll().forEach(function (a) {
          e = a.get("trackingId");
        }),
      e && window["ga-disable-" + e])
    )
      return;
    if (!document.location.search) {
      var c = $("body#search #searchtext[value]").val();
      c &&
        (d
          ? _gaq.push(["_trackEvent", "internal search", c])
          : b
          ? ga("send", "event", "internal search", c)
          : a &&
            gtag("event", "search", {
              event_label: c,
            }));
    }
  }
}

/*! sp_class/assets/js/fs.base-jump-links.min.js
 */
$(document).ready(function () {
  var o;
  $('base[href]:not([href=""])').length &&
    ((o = document.location),
    $("body").on("click", 'a[href^="#"]', function (e) {
      var t = $(this).attr("href");
      "function" == typeof $.escapeSelector &&
        t &&
        (t = "#" + $.escapeSelector(t.replace(/^#/, ""))),
        $.smoothScroll &&
          $(t).length &&
          $.smoothScroll({
            scrollTarget: t,
            offset: -($("body").data("headerHeight") || 0),
          }),
        (o.href = o.href.split("#")[0] + t),
        e.preventDefault();
    }));
});

/*! sp_class/assets/js/jquery.mb.browser.min.js
 */
/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.browser.min.js
 *
 *  Copyright (c) 2001-2013. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 17/01/13 0.12
 *  *****************************************************************************
 */
(function () {
  if (!jQuery.browser) {
    jQuery.browser = {};
    jQuery.browser.mozilla = !1;
    jQuery.browser.webkit = !1;
    jQuery.browser.opera = !1;
    jQuery.browser.msie = !1;
    var a = navigator.userAgent;
    jQuery.browser.name = navigator.appName;
    jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion);
    jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
    var c, b;
    if (-1 != (b = a.indexOf("Opera"))) {
      if (
        ((jQuery.browser.opera = !0),
        (jQuery.browser.name = "Opera"),
        (jQuery.browser.fullVersion = a.substring(b + 6)),
        -1 != (b = a.indexOf("Version")))
      )
        jQuery.browser.fullVersion = a.substring(b + 8);
    } else if (-1 != (b = a.indexOf("MSIE")))
      (jQuery.browser.msie = !0),
        (jQuery.browser.name = "Microsoft Internet Explorer"),
        (jQuery.browser.fullVersion = a.substring(b + 5));
    else if (-1 != (b = a.indexOf("Chrome")))
      (jQuery.browser.webkit = !0),
        (jQuery.browser.name = "Chrome"),
        (jQuery.browser.fullVersion = a.substring(b + 7));
    else if (-1 != (b = a.indexOf("Safari"))) {
      if (
        ((jQuery.browser.webkit = !0),
        (jQuery.browser.name = "Safari"),
        (jQuery.browser.fullVersion = a.substring(b + 7)),
        -1 != (b = a.indexOf("Version")))
      )
        jQuery.browser.fullVersion = a.substring(b + 8);
    } else if (-1 != (b = a.indexOf("Firefox")))
      (jQuery.browser.mozilla = !0),
        (jQuery.browser.name = "Firefox"),
        (jQuery.browser.fullVersion = a.substring(b + 8));
    else if ((c = a.lastIndexOf(" ") + 1) < (b = a.lastIndexOf("/")))
      (jQuery.browser.name = a.substring(c, b)),
        (jQuery.browser.fullVersion = a.substring(b + 1)),
        jQuery.browser.name.toLowerCase() ==
          jQuery.browser.name.toUpperCase() &&
          (jQuery.browser.name = navigator.appName);
    if (-1 != (a = jQuery.browser.fullVersion.indexOf(";")))
      jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, a);
    if (-1 != (a = jQuery.browser.fullVersion.indexOf(" ")))
      jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, a);
    jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10);
    isNaN(jQuery.browser.majorVersion) &&
      ((jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion)),
      (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)));
    jQuery.browser.version = jQuery.browser.majorVersion;
  }
})(jQuery);

/*! sp_class/assets/js/jquery.ba-hashchange.min.js
 */
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function ($, e, b) {
  var c = "hashchange",
    h = document,
    f,
    g = $.event.special,
    i = h.documentMode,
    d = "on" + c in e && (i === b || i > 7);

  function a(j) {
    j = j || location.href;
    return "#" + j.replace(/^[^#]*#?(.*)$/, "$1");
  }
  $.fn[c] = function (j) {
    return j ? this.bind(c, j) : this.trigger(c);
  };
  $.fn[c].delay = 50;
  g[c] = $.extend(g[c], {
    setup: function () {
      if (d) {
        return false;
      }
      $(f.start);
    },
    teardown: function () {
      if (d) {
        return false;
      }
      $(f.stop);
    },
  });
  f = (function () {
    var j = {},
      p,
      m = a(),
      k = function (q) {
        return q;
      },
      l = k,
      o = k;
    j.start = function () {
      p || n();
    };
    j.stop = function () {
      p && clearTimeout(p);
      p = b;
    };

    function n() {
      var r = a(),
        q = o(m);
      if (r !== m) {
        l((m = r), q);
        $(e).trigger(c);
      } else {
        if (q !== m) {
          location.href = location.href.replace(/#.*/, "") + q;
        }
      }
      p = setTimeout(n, $.fn[c].delay);
    }
    $.browser.msie &&
      !d &&
      (function () {
        var q, r;
        j.start = function () {
          if (!q) {
            r = $.fn[c].src;
            r = r && r + a();
            q = $('<iframe tabindex="-1" title="empty"/>')
              .hide()
              .one("load", function () {
                r || l(a());
                n();
              })
              .attr("src", r || "javascript:0")
              .insertAfter("body")[0].contentWindow;
            h.onpropertychange = function () {
              try {
                if (event.propertyName === "title") {
                  q.document.title = h.title;
                }
              } catch (s) {}
            };
          }
        };
        j.stop = k;
        o = function () {
          return a(q.location.href);
        };
        l = function (v, s) {
          var u = q.document,
            t = $.fn[c].domain;
          if (v !== s) {
            u.title = h.title;
            u.open();
            t && u.write('<script>document.domain="' + t + '"</script>');
            u.close();
            q.location.hash = v;
          }
        };
      })();
    return j;
  })();
})(jQuery, this);

/*! sp_class/assets/js/fs.tablinks.min.js
 */
$(function () {
  "use strict";
  var i,
    t,
    a,
    r,
    n,
    l = "current",
    o = "visibleTab",
    s = $(".contentSection").filter("div,section");
  s.length &&
    ((i = $('<nav id="tabLinks" aria-label="Tabs" />')),
    s.each(function () {
      var t = "#" + this.id;
      this.id += "-tab";
      var e = $(this).children("h1,h2,.sectionTitle,div.title").first();
      $("<a />")
        .attr({
          href: e.attr("href") || t,
          target: e.attr("target"),
        })
        .text(e.text())
        .appendTo(i);
    }),
    (t = s.first().prev(".sp_pencil")).length || (t = s.first()),
    i.insertBefore(t),
    (a = function (t) {
      var e = $("body").data("headerHeight") || 0,
        a = $(window).scrollTop(),
        i = a + 0.85 * ($(window).height() - e),
        r = $(t).offset().top;
      (r < a || i < r) &&
        ($.smoothScroll
          ? $.smoothScroll({
              scrollTarget: t,
              offset: -e,
            })
          : $(window).scrollTop(r - 10 + e));
    }),
    (r = function (t) {
      if ((t instanceof $ && (t = t.attr("id")), !t)) return !1;
      (t = "#" + t.replace("#", "")),
        $(t).length && (t = t.replace(/-tab$/, ""));
      var e = "#ViewAll" == t,
        a = i.children('a[href="' + t + '"]');
      return (
        !(!a.length && !e) &&
        (a.hasClass("current") ||
          (i.children().removeClass(l),
          a.addClass(l),
          e
            ? (s.show().addClass(o), $("a#tabViewAll, a#tabViewMore").hide())
            : ((e = s
                .hide()
                .removeClass(o)
                .filter(t + "-tab")
                .show()
                .addClass(o)),
              (t =
                $("body").data("whatintent") || $("html").data("whatintent")),
              n ||
                ((e = e
                  .find("h1,h2,h3,h4,h5,h6,p,li")
                  .filter(":visible")
                  .first()),
                "keyboard" == t &&
                  (e.attr("tabindex") || e.attr("tabindex", -1), e.focus())),
              $("a#tabViewAll, a#tabViewMore").show()),
          $("select").trigger("render")),
        !0)
      );
    }),
    $(window).on("hashchange.fstablinks", function () {
      var t = location.hash.replace(/^#/, ""),
        t =
          "function" == typeof $.escapeSelector
            ? $.escapeSelector(t)
            : t.replace(/(:|\.|\[|\]\/#)/g, "\\$1");
      if (r((t = t && "#" + t))) "#ViewAll" == t || n || a(i);
      else {
        var e = $(t);
        e.length || (e = $("a[name='" + t.replace("#", "") + "']").first());
        t = e.closest(s).filter(":hidden");
        if (t.length) return r(t), void a(e);
        s.filter("." + o).length || r(s.not("[data-no-autoopen]").first());
      }
    }),
    (n = !0),
    $(window).trigger("hashchange.fstablinks"),
    setTimeout(function () {
      n = !1;
    }, 100));
});

/*! sp_class/assets/js/jquery.cookie.min.js
 */
jQuery.cookie = function (d, e, b) {
  if (arguments.length > 1 && String(e) !== "[object Object]") {
    b = jQuery.extend({}, b);
    if (e === null || e === undefined) {
      b.expires = -1;
    }
    if (typeof b.expires === "number") {
      var g = b.expires,
        c = (b.expires = new Date());
      c.setDate(c.getDate() + g);
    }
    e = String(e);
    return (document.cookie = [
      encodeURIComponent(d),
      "=",
      b.raw ? e : encodeURIComponent(e),
      b.expires ? "; expires=" + b.expires.toUTCString() : "",
      b.path ? "; path=" + b.path : "",
      b.domain ? "; domain=" + b.domain : "",
      b.secure ? "; secure" : "",
    ].join(""));
  }
  b = e || {};
  var a,
    f = b.raw
      ? function (h) {
          return h;
        }
      : decodeURIComponent;
  return (a = new RegExp("(?:^|; )" + encodeURIComponent(d) + "=([^;]*)").exec(
    document.cookie
  ))
    ? f(a[1])
    : null;
};

/*! sp_class/assets/js/fs.socialshare.min.js
 */
var SocialShare = (function () {
  "use strict";

  function h() {}
  return (
    (h.sites = {
      linkedin: {
        name: "LinkedIn",
        base_url: "https://www.linkedin.com/shareArticle",
        args: {
          text: "text",
          url: "url",
        },
      },
      facebook: {
        name: "Facebook",
        base_url: "https://www.facebook.com/sharer/sharer.php",
        args: {
          text: "quote",
          url: "u",
        },
      },
      twitter: {
        name: "Twitter/X",
        base_url: "https://www.twitter.com/intent/tweet",
        keep_url_protocol: !0,
        args: {
          text: "text",
          url: "url",
        },
      },
      email: {
        name: "Email",
        base_url: "mailto:",
        args: {
          text: "subject",
          url: "body",
        },
      },
      print: {
        name: "Print",
        base_url: "javascript:window.print()",
        args: {},
      },
    }),
    (h.get_share_anchors = function (e, t) {
      (t = t || {}),
        ("object" == typeof e && e) || (e = h.get_share_urls(e, t));
      var r = {},
        a = t.anchor_html || "{name}";
      for (var s in e) {
        var i,
          n,
          o = e[s],
          c = h.sites[s];
        "object" == typeof c &&
          ((i = {
            href: o,
            "data-share-site": (c.site = s),
            target: "_blank",
          }),
          /^javascript:/.test(i.href) &&
            ((i.onclick =
              i.href.replace(/^javascript:/, "") + "; return false;"),
            (i.href = "#")),
          "object" == typeof t.anchor_attrs &&
            (i = $.extend(i, t.anchor_attrs)),
          (n = a),
          $.each(["site", "name"], function (e, t) {
            n = n.replace(new RegExp("{" + t + "}", "g"), c[t]);
          }),
          (r[s] = $("<a>" + n + "</a>").attr(i)),
          "email" === s &&
            r[s]
              .on("click", function (e) {
                return e.stopPropagation(), !0;
              })
              .removeAttr("target"));
      }
      return r;
    }),
    (h.get_share_urls = function (e, t) {
      void 0 === t && (t = {}), (t.url = e || document.location.href);
      var r = {};
      for (var a in h.sites) {
        var s = h.sites[a];
        if (!t.sites || 0 <= t.sites.indexOf(a)) {
          var i = {};
          for (var n in s.args) {
            var o = s.args[n],
              c = t[n] || t[a + "-" + n];
            c &&
              ("url" != n ||
                s.keep_url_protocol ||
                (c = c.replace("/^(https?:)?//(www\\.)?/", "")),
              (i[o] = c));
          }
          var l = jQuery.param(i).replace(/\+/g, "%20");
          (r[a] = s.base_url), l && (r[a] += "?" + l);
        }
      }
      if (t.sites && 1 < t.sites.length) {
        var u = {};
        for (var p in t.sites) u[t.sites[p]] = r[t.sites[p]];
        r = u;
      }
      return r;
    }),
    h
  );
})();

/*! sp_class/assets/js/fs.sharebutton.min.js
 */
jQuery(function () {
  "use strict";

  function u(e, t) {
    return (
      !!g(e).data("eventInProgress") ||
      (t ||
        (g(e).data("eventInProgress", !0),
        setTimeout(function () {
          g(e).data("eventInProgress", !1);
        }, 250)),
      !1)
    );
  }

  function p(e, t) {
    var a = g(e).attr("data-socialshare-" + t) || g(e).attr("addthis:" + t);
    if (!a)
      switch (t) {
        case "url":
          a = document.location.href;
          break;
        case "title":
          a = document.title;
      }
    return a;
  }
  var g = jQuery,
    a = window,
    v = g(a),
    e = g("body"),
    m = "hasFocus",
    _ = "buttonHovered",
    t =
      ".socialshare_button, .addthis_button, .addthis_button_compact, .addthis_pill_style";
  e.on("click", 'a[data-share-site][href^="http"]', function (e) {
    e.preventDefault(), (this.target = this.target || "_blank");
    var t = a.open(
      "",
      "_blank",
      "width=800,height=410,scrollbars=1,resizable=1"
    );
    (t.opener = null), (t.location = this.href);
  }),
    g('[class^="socialshare_button_"], [class^="addthis_button_"]').each(
      function () {
        var e = g(this),
          t = e
            .attr("class")
            .replace(/^.*(socialshare|addthis)_button_([^ ]+).*$/, "$2"),
          a = p(e, "url");
        switch (t) {
          case "preferred_1":
            t = "linkedin";
            break;
          case "preferred_2":
            t = "facebook";
            break;
          case "preferred_3":
            t = "twitter";
            break;
          case "compact":
            return void (
              e.children().length ||
              e.prepend(
                "<img class='defaultShareIcon' src='sp_class/assets/images/share.svgz' alt='Share' title='Share' /> "
              )
            );
        }
        var s = SocialShare.get_share_anchors(a, {
          sites: [t],
          anchor_html:
            "<img class='defaultShareIcon' src='sp_class/assets/images/share-{site}.svgz' alt='{name}' title='{name}' />",
          text: p(e, "title"),
        })[t];
        s
          ? (e.attr({
              href: s.attr("href"),
              "data-share-site": s.attr("data-share-site"),
            }),
            e.children("img,svg").length || e.prepend(s.html()))
          : e.hide();
      }
    ),
    void 0 === a.socialshare_config && (a.socialshare_config = {}),
    void 0 === a.addthis_config && (a.addthis_config = {});
  var b = g
      .extend(
        {
          services_compact: "linkedin, facebook, twitter, email",
        },
        a.socialshare_config,
        a.addthis_config
      )
      .services_compact.split(/\s*,\s*/),
    S = g('<div id="socialShareList" tabindex="-1" />'),
    k = g('<span tabindex="0" />');
  g(".addthis_pill_style:empty").append(
    "<img class='defaultShareIcon' src='sp_class/assets/images/share.svgz' alt='' /> Share"
  ),
    g(t).attr("href", "#socialShare"),
    e.on("mouseenter", t, function (e) {
      var t = g(this);
      u(t);
      var a = t.data("socialShareList");
      if (!a) {
        var s = g("<div />"),
          r = p(t, "url"),
          i = SocialShare.get_share_anchors(r, {
            sites: b,
            anchor_html:
              "<img src='sp_class/assets/images/share-{site}.svgz' alt='' />{name}",
            text: p(t, "title"),
          });
        g.each(i, function (e, t) {
          s.append(g("<div/>").append(t));
        }),
          (a = s.children()),
          t.data("socialShareList", a),
          s.remove();
      }
      S.empty()
        .data("button", this)
        .removeClass("dropUp dropLeft " + m)
        .addClass(_)
        .append(a)
        .appendTo("body"),
        k.appendTo("body");
      var o = t.children("img, span, div").filter(":visible");
      (!o.length || t.outerHeight() > o.outerHeight()) && (o = t);
      var n = o.offset(),
        c = o.outerHeight(),
        l = {
          top: n.top + c,
          left: n.left,
        };
      S.css("margin", 0);
      var d = S.outerHeight(),
        h = S.outerWidth();
      l.top + d > v.scrollTop() + v.height() &&
        ((l.top -= c + d), S.addClass("dropUp"));
      var f = l.left + h - v.scrollLeft() - v.width();
      0 < f && ((l.left -= 15 + f), S.addClass("dropRight")),
        S.offset(l),
        S.css("margin", ""),
        /white|(fff)|(255.+){2}/i.test(S.find("a").css("color")) &&
          S.addClass("fixWhiteLinks");
    }),
    e.on("click", t, function (e) {
      e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
      var t = g(this);
      u(t) ||
        (S.hasClass(m) || S.hasClass(_)
          ? S.removeClass(_ + " " + m)
          : (g(this).trigger("mouseenter"),
            S.data("eventInProgress", !0).focus()));
    }),
    e.on("mouseleave focusout", t, function (e) {
      u(S) || S.removeClass(_);
    }),
    S.on("focusin mouseenter", function (e) {
      S.addClass(m);
    }),
    S.on("mouseleave", function (e) {
      S.removeClass(m);
    }),
    S.on("focusout", function (e) {
      var t = g(S.data("button"));
      u(t) ||
        S[0].contains(e.relatedTarget) ||
        (S.removeClass(m + " " + _), t.focus());
    });
});

/*! sp_class/assets/js/fs.cycle-1.0.min.js
 */
!(function (g) {
  "use strict";
  g.fn.fsCycle = function (t) {
    var s = g.extend(
      {
        timeout: 5e3,
        initialTimeout: null,
        transitionTimeout: null,
        pagers: !1,
        prev: !0,
        next: !0,
        pause: !1,
        moveElements: !1,
        minItems: 2,
      },
      t
    );
    if (!this.length) return this;
    if (1 < this.length)
      return (
        this.each(function () {
          g(this).fsCycle(t);
        }),
        this
      );
    var u = this,
      o = u.children().first(),
      l = o.children(),
      c = g(),
      e = null,
      d = null,
      n = !0,
      i = !1,
      a = !1,
      m = null;
    if (l.length < s.minItems) return this;
    var f = function () {
        if (!a && s.timeout) {
          var t = s.timeout;
          n && null !== s.initialTimeout && ((t = s.initialTimeout), (n = !1)),
            clearTimeout(e),
            (e = setTimeout(r, t));
        }
      },
      r = function () {
        var t = l.filter(".current").next();
        t.length || (t = l.first()), h(t);
      },
      p = function (t) {
        ("boolean" == typeof t && t === a) ||
          ((a = !a)
            ? (u.addClass("paused"), clearTimeout(e), (m = null))
            : (u.removeClass("paused"), r()));
      },
      v = function () {
        var t = l.filter(".current").prev();
        t.length || (t = l.last()), h(t, !0);
      },
      h = function (e, t) {
        if (!e.length) return !1;
        if (u.hasClass("animating"))
          return (
            m ||
              (m = function () {
                (m = null), h(e, t);
              }),
            !1
          );
        var n = "transitionend.fsCycle_" + new Date().getTime();
        u.addClass("animating"),
          f(),
          c.children().removeClass("current"),
          g(e.data("pager")).addClass("current"),
          e.addClass("next");
        var i = function () {
          l
            .removeClass("previous")
            .removeClass("next")
            .filter(".current")
            .addClass("previous")
            .removeClass("current"),
            e.addClass("current");
        };
        if (s.moveElements) {
          var a = function () {
            a = null;
            var t = e.prevAll().get().reverse();
            o.append(t), (l = o.children());
          };
          t ? (a(), setTimeout(i, 0)) : i();
        } else i();
        setTimeout(function () {
          o.one(n, function (t) {
            clearTimeout(d),
              u.removeClass("animating"),
              "function" == typeof a && a(),
              m && setTimeout(m, 1);
          });
        }, 100);
        var r = s.transitionTimeout;
        null === r &&
          (r = r
            ? s.timeout
              ? Math.min(s.timeout - 5, r)
              : 1050
            : s.timeout - 5),
          r &&
            (clearTimeout(d),
            (d = setTimeout(function () {
              o.triggerHandler(n);
            }, r)));
      };
    if (
      (u.hover(
        function () {
          i = !0;
        },
        function () {
          i = !1;
        }
      ),
      g("body").on("keydown", function (t) {
        if (i)
          switch (t.keyCode) {
            case 39:
              r();
              break;
            case 37:
              v();
              break;
            case 16:
              a || p(!0);
              break;
            case 27:
              p();
          }
      }),
      g("body").on("keyup", function (t) {
        16 == t.keyCode && p(!1);
      }),
      s.prev || s.pagers || s.next)
    ) {
      var C = g("<div class='animControls'></div>").appendTo(u);
      s.prev &&
        g('<button type="button" class="animPrev">Prev</button>')
          .click(v)
          .appendTo(C),
        s.pagers &&
          ((c = g('<div class="animPagers" />')),
          l.each(function (t) {
            var e = g(this),
              n = g('<button type="button" />')
                .text(t + 1)
                .data("target", e)
                .appendTo(c);
            e.data("pager", n);
          }),
          c
            .on("click", "button", function () {
              h(g(this).data("target"));
            })
            .appendTo(C)),
        s.pause &&
          g('<button type="button" class="animPause">Pause</button>')
            .click(p)
            .appendTo(C),
        s.next &&
          g('<button type="button" class="animNext">Next</button>')
            .click(r)
            .appendTo(C);
    }
    return (
      u.addClass("animStarted"),
      l.first().addClass("current"),
      c.children().first().addClass("current"),
      f(),
      this
    );
  };
})(jQuery);

/*! sp_class/assets/js/jquery.smooth-scroll.min.js
 */
/* https://github.com/kswedberg/jquery-smooth-scroll 2.2.0 */
!(function (t) {
  var e = {},
    l = function (e) {
      var l = [],
        o = e.dir && "left" === e.dir ? "scrollLeft" : "scrollTop";
      return (
        this.each(function () {
          var e = t(this);
          if (this !== document && this !== window)
            return !document.scrollingElement ||
              (this !== document.documentElement && this !== document.body)
              ? void (e[o]() > 0
                  ? l.push(this)
                  : (e[o](1), e[o]() > 0 && l.push(this), e[o](0)))
              : (l.push(document.scrollingElement), !1);
        }),
        l.length ||
          this.each(function () {
            this === document.documentElement &&
              "smooth" === t(this).css("scrollBehavior") &&
              (l = [this]),
              l.length || "BODY" !== this.nodeName || (l = [this]);
          }),
        "first" === e.el && l.length > 1 && (l = [l[0]]),
        l
      );
    },
    o = /^([\-\+]=)(\d+)/;
  t.fn.extend({
    scrollable: function (t) {
      var e = l.call(this, {
        dir: t,
      });
      return this.pushStack(e);
    },
    firstScrollable: function (t) {
      var e = l.call(this, {
        el: "first",
        dir: t,
      });
      return this.pushStack(e);
    },
    smoothScroll: function (e, l) {
      if ("options" === (e = e || {}))
        return l
          ? this.each(function () {
              var e = t(this),
                o = t.extend(e.data("ssOpts") || {}, l);
              t(this).data("ssOpts", o);
            })
          : this.first().data("ssOpts");
      var o = t.extend({}, t.fn.smoothScroll.defaults, e),
        s = function (e) {
          var l = function (t) {
              return t.replace(/(:|\.|\/)/g, "\\$1");
            },
            s = this,
            n = t(this),
            r = t.extend({}, o, n.data("ssOpts") || {}),
            c = o.exclude,
            i = r.excludeWithin,
            a = 0,
            h = 0,
            f = !0,
            u = {},
            d = t.smoothScroll.filterPath(location.pathname),
            m = t.smoothScroll.filterPath(s.pathname),
            p = location.hostname === s.hostname || !s.hostname,
            g = r.scrollTarget || m === d,
            v = l(s.hash);
          if (
            (v && !t(v).length && (f = !1), r.scrollTarget || (p && g && v))
          ) {
            for (; f && a < c.length; ) n.is(l(c[a++])) && (f = !1);
            for (; f && h < i.length; ) n.closest(i[h++]).length && (f = !1);
          } else f = !1;
          f &&
            (r.preventDefault && e.preventDefault(),
            t.extend(u, r, {
              scrollTarget: r.scrollTarget || v,
              link: s,
            }),
            t.smoothScroll(u));
        };
      return (
        null !== e.delegateSelector
          ? this.off("click.smoothscroll", e.delegateSelector).on(
              "click.smoothscroll",
              e.delegateSelector,
              s
            )
          : this.off("click.smoothscroll").on("click.smoothscroll", s),
        this
      );
    },
  });
  var s = function (t) {
      var e = {
          relative: "",
        },
        l = "string" == typeof t && o.exec(t);
      return (
        "number" == typeof t
          ? (e.px = t)
          : l && ((e.relative = l[1]), (e.px = parseFloat(l[2]) || 0)),
        e
      );
    },
    n = function (e) {
      var l = t(e.scrollTarget);
      e.autoFocus &&
        l.length &&
        (l[0].focus(),
        l.is(document.activeElement) ||
          (l.prop({
            tabIndex: -1,
          }),
          l[0].focus())),
        e.afterScroll.call(e.link, e);
    };
  (t.smoothScroll = function (l, o) {
    if ("options" === l && "object" == typeof o) return t.extend(e, o);
    var r,
      c,
      i,
      a,
      h = s(l),
      f = 0,
      u = "offset",
      d = "scrollTop",
      m = {},
      p = {};
    h.px
      ? (r = t.extend(
          {
            link: null,
          },
          t.fn.smoothScroll.defaults,
          e
        ))
      : ((r = t.extend(
          {
            link: null,
          },
          t.fn.smoothScroll.defaults,
          l || {},
          e
        )).scrollElement &&
          ((u = "position"),
          "static" === r.scrollElement.css("position") &&
            r.scrollElement.css("position", "relative")),
        o && (h = s(o))),
      (d = "left" === r.direction ? "scrollLeft" : d),
      r.scrollElement
        ? ((c = r.scrollElement),
          h.px || /^(?:HTML|BODY)$/.test(c[0].nodeName) || (f = c[d]()))
        : (c = t("html, body").firstScrollable(r.direction)),
      r.beforeScroll.call(c, r),
      (a = h.px
        ? h
        : {
            relative: "",
            px:
              (t(r.scrollTarget)[u]() && t(r.scrollTarget)[u]()[r.direction]) ||
              0,
          }),
      (m[d] = a.relative + (a.px + f + r.offset)),
      "auto" === (i = r.speed) &&
        (i = Math.abs(m[d] - c[d]()) / r.autoCoefficient),
      (p = {
        duration: i,
        easing: r.easing,
        complete: function () {
          n(r);
        },
      }),
      r.step && (p.step = r.step),
      c.length ? c.stop().animate(m, p) : n(r);
  }),
    (t.smoothScroll.version = "2.2.0"),
    (t.smoothScroll.filterPath = function (t) {
      return (t = t || "")
        .replace(/^\//, "")
        .replace(/(?:index|default).[a-zA-Z]{3,4}$/, "")
        .replace(/\/$/, "");
    }),
    (t.fn.smoothScroll.defaults = {
      exclude: [],
      excludeWithin: [],
      offset: 0,
      direction: "top",
      delegateSelector: null,
      scrollElement: null,
      scrollTarget: null,
      autoFocus: !1,
      beforeScroll: function () {},
      afterScroll: function () {},
      easing: "swing",
      speed: 400,
      autoCoefficient: 2,
      preventDefault: !0,
    });
})(jQuery);

/*! sp_class/assets/js/jquery.mark.min.js
 */
/*!***************************************************
 * mark.js v9.0.0
 * https://markjs.io/
 * Copyright (c) 2014–2018, Julian Kühnel
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(require("jquery")))
    : "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : (e.Mark = t(e.jQuery));
})(this, function (e) {
  "use strict";

  function t(e) {
    return (t =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
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
          })(e);
  }

  function n(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }

  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }

  function o(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e;
  }

  function i() {
    return (i =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
  }
  e = e && e.hasOwnProperty("default") ? e.default : e;
  var a =
      /* */
      (function () {
        function e(t) {
          var r =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 5e3;
          n(this, e),
            (this.ctx = t),
            (this.iframes = r),
            (this.exclude = o),
            (this.iframesTimeout = i);
        }
        return (
          o(
            e,
            [
              {
                key: "getContexts",
                value: function () {
                  var e = [];
                  return (
                    (void 0 !== this.ctx && this.ctx
                      ? NodeList.prototype.isPrototypeOf(this.ctx)
                        ? Array.prototype.slice.call(this.ctx)
                        : Array.isArray(this.ctx)
                        ? this.ctx
                        : "string" == typeof this.ctx
                        ? Array.prototype.slice.call(
                            document.querySelectorAll(this.ctx)
                          )
                        : [this.ctx]
                      : []
                    ).forEach(function (t) {
                      var n =
                        e.filter(function (e) {
                          return e.contains(t);
                        }).length > 0;
                      -1 !== e.indexOf(t) || n || e.push(t);
                    }),
                    e
                  );
                },
              },
              {
                key: "getIframeContents",
                value: function (e, t) {
                  var n,
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : function () {};
                  try {
                    var o = e.contentWindow;
                    if (((n = o.document), !o || !n))
                      throw new Error("iframe inaccessible");
                  } catch (e) {
                    r();
                  }
                  n && t(n);
                },
              },
              {
                key: "isIframeBlank",
                value: function (e) {
                  var t = "about:blank",
                    n = e.getAttribute("src").trim();
                  return e.contentWindow.location.href === t && n !== t && n;
                },
              },
              {
                key: "observeIframeLoad",
                value: function (e, t, n) {
                  var r = this,
                    o = !1,
                    i = null,
                    a = function a() {
                      if (!o) {
                        (o = !0), clearTimeout(i);
                        try {
                          r.isIframeBlank(e) ||
                            (e.removeEventListener("load", a),
                            r.getIframeContents(e, t, n));
                        } catch (e) {
                          n();
                        }
                      }
                    };
                  e.addEventListener("load", a),
                    (i = setTimeout(a, this.iframesTimeout));
                },
              },
              {
                key: "onIframeReady",
                value: function (e, t, n) {
                  try {
                    "complete" === e.contentWindow.document.readyState
                      ? this.isIframeBlank(e)
                        ? this.observeIframeLoad(e, t, n)
                        : this.getIframeContents(e, t, n)
                      : this.observeIframeLoad(e, t, n);
                  } catch (e) {
                    n();
                  }
                },
              },
              {
                key: "waitForIframes",
                value: function (e, t) {
                  var n = this,
                    r = 0;
                  this.forEachIframe(
                    e,
                    function () {
                      return !0;
                    },
                    function (e) {
                      r++,
                        n.waitForIframes(e.querySelector("html"), function () {
                          --r || t();
                        });
                    },
                    function (e) {
                      e || t();
                    }
                  );
                },
              },
              {
                key: "forEachIframe",
                value: function (t, n, r) {
                  var o = this,
                    i =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : function () {},
                    a = t.querySelectorAll("iframe"),
                    s = a.length,
                    c = 0;
                  a = Array.prototype.slice.call(a);
                  var u = function () {
                    --s <= 0 && i(c);
                  };
                  s || u(),
                    a.forEach(function (t) {
                      e.matches(t, o.exclude)
                        ? u()
                        : o.onIframeReady(
                            t,
                            function (e) {
                              n(t) && (c++, r(e)), u();
                            },
                            u
                          );
                    });
                },
              },
              {
                key: "createIterator",
                value: function (e, t, n) {
                  return document.createNodeIterator(e, t, n, !1);
                },
              },
              {
                key: "createInstanceOnIframe",
                value: function (t) {
                  return new e(t.querySelector("html"), this.iframes);
                },
              },
              {
                key: "compareNodeIframe",
                value: function (e, t, n) {
                  if (
                    e.compareDocumentPosition(n) &
                    Node.DOCUMENT_POSITION_PRECEDING
                  ) {
                    if (null === t) return !0;
                    if (
                      t.compareDocumentPosition(n) &
                      Node.DOCUMENT_POSITION_FOLLOWING
                    )
                      return !0;
                  }
                  return !1;
                },
              },
              {
                key: "getIteratorNode",
                value: function (e) {
                  var t = e.previousNode();
                  return {
                    prevNode: t,
                    node:
                      null === t ? e.nextNode() : e.nextNode() && e.nextNode(),
                  };
                },
              },
              {
                key: "checkIframeFilter",
                value: function (e, t, n, r) {
                  var o = !1,
                    i = !1;
                  return (
                    r.forEach(function (e, t) {
                      e.val === n && ((o = t), (i = e.handled));
                    }),
                    this.compareNodeIframe(e, t, n)
                      ? (!1 !== o || i
                          ? !1 === o || i || (r[o].handled = !0)
                          : r.push({
                              val: n,
                              handled: !0,
                            }),
                        !0)
                      : (!1 === o &&
                          r.push({
                            val: n,
                            handled: !1,
                          }),
                        !1)
                  );
                },
              },
              {
                key: "handleOpenIframes",
                value: function (e, t, n, r) {
                  var o = this;
                  e.forEach(function (e) {
                    e.handled ||
                      o.getIframeContents(e.val, function (e) {
                        o.createInstanceOnIframe(e).forEachNode(t, n, r);
                      });
                  });
                },
              },
              {
                key: "iterateThroughNodes",
                value: function (e, t, n, r, o) {
                  for (
                    var i,
                      a,
                      s,
                      c = this,
                      u = this.createIterator(t, e, r),
                      l = [],
                      h = [];
                    (s = void 0),
                      (s = c.getIteratorNode(u)),
                      (a = s.prevNode),
                      (i = s.node);

                  )
                    this.iframes &&
                      this.forEachIframe(
                        t,
                        function (e) {
                          return c.checkIframeFilter(i, a, e, l);
                        },
                        function (t) {
                          c.createInstanceOnIframe(t).forEachNode(
                            e,
                            function (e) {
                              return h.push(e);
                            },
                            r
                          );
                        }
                      ),
                      h.push(i);
                  h.forEach(function (e) {
                    n(e);
                  }),
                    this.iframes && this.handleOpenIframes(l, e, n, r),
                    o();
                },
              },
              {
                key: "forEachNode",
                value: function (e, t, n) {
                  var r = this,
                    o =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : function () {},
                    i = this.getContexts(),
                    a = i.length;
                  a || o(),
                    i.forEach(function (i) {
                      var s = function () {
                        r.iterateThroughNodes(e, i, t, n, function () {
                          --a <= 0 && o();
                        });
                      };
                      r.iframes ? r.waitForIframes(i, s) : s();
                    });
                },
              },
            ],
            [
              {
                key: "matches",
                value: function (e, t) {
                  var n = "string" == typeof t ? [t] : t,
                    r =
                      e.matches ||
                      e.matchesSelector ||
                      e.msMatchesSelector ||
                      e.mozMatchesSelector ||
                      e.oMatchesSelector ||
                      e.webkitMatchesSelector;
                  if (r) {
                    var o = !1;
                    return (
                      n.every(function (t) {
                        return !r.call(e, t) || ((o = !0), !1);
                      }),
                      o
                    );
                  }
                  return !1;
                },
              },
            ]
          ),
          e
        );
      })(),
    s =
      /* */
      (function () {
        function e(t) {
          n(this, e),
            (this.opt = i(
              {},
              {
                diacritics: !0,
                synonyms: {},
                accuracy: "partially",
                caseSensitive: !1,
                ignoreJoiners: !1,
                ignorePunctuation: [],
                wildcards: "disabled",
              },
              t
            ));
        }
        return (
          o(e, [
            {
              key: "create",
              value: function (e) {
                return (
                  "disabled" !== this.opt.wildcards &&
                    (e = this.setupWildcardsRegExp(e)),
                  (e = this.escapeStr(e)),
                  Object.keys(this.opt.synonyms).length &&
                    (e = this.createSynonymsRegExp(e)),
                  (this.opt.ignoreJoiners ||
                    this.opt.ignorePunctuation.length) &&
                    (e = this.setupIgnoreJoinersRegExp(e)),
                  this.opt.diacritics && (e = this.createDiacriticsRegExp(e)),
                  (e = this.createMergedBlanksRegExp(e)),
                  (this.opt.ignoreJoiners ||
                    this.opt.ignorePunctuation.length) &&
                    (e = this.createJoinersRegExp(e)),
                  "disabled" !== this.opt.wildcards &&
                    (e = this.createWildcardsRegExp(e)),
                  (e = this.createAccuracyRegExp(e)),
                  new RegExp(e, "gm".concat(this.opt.caseSensitive ? "" : "i"))
                );
              },
            },
            {
              key: "sortByLength",
              value: function (e) {
                return e.sort(function (e, t) {
                  return e.length === t.length
                    ? e > t
                      ? 1
                      : -1
                    : t.length - e.length;
                });
              },
            },
            {
              key: "escapeStr",
              value: function (e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
              },
            },
            {
              key: "createSynonymsRegExp",
              value: function (e) {
                var t = this,
                  n = this.opt.synonyms,
                  r = this.opt.caseSensitive ? "" : "i",
                  o =
                    this.opt.ignoreJoiners || this.opt.ignorePunctuation.length
                      ? "\0"
                      : "";
                for (var i in n)
                  if (n.hasOwnProperty(i)) {
                    var a = Array.isArray(n[i]) ? n[i] : [n[i]];
                    a.unshift(i),
                      (a = this.sortByLength(a)
                        .map(function (e) {
                          return (
                            "disabled" !== t.opt.wildcards &&
                              (e = t.setupWildcardsRegExp(e)),
                            (e = t.escapeStr(e))
                          );
                        })
                        .filter(function (e) {
                          return "" !== e;
                        })).length > 1 &&
                        (e = e.replace(
                          new RegExp(
                            "(".concat(
                              a
                                .map(function (e) {
                                  return t.escapeStr(e);
                                })
                                .join("|"),
                              ")"
                            ),
                            "gm".concat(r)
                          ),
                          o +
                            "(".concat(
                              a
                                .map(function (e) {
                                  return t.processSynonyms(e);
                                })
                                .join("|"),
                              ")"
                            ) +
                            o
                        ));
                  }
                return e;
              },
            },
            {
              key: "processSynonyms",
              value: function (e) {
                return (
                  (this.opt.ignoreJoiners ||
                    this.opt.ignorePunctuation.length) &&
                    (e = this.setupIgnoreJoinersRegExp(e)),
                  e
                );
              },
            },
            {
              key: "setupWildcardsRegExp",
              value: function (e) {
                return (e = e.replace(/(?:\\)*\?/g, function (e) {
                  return "\\" === e.charAt(0) ? "?" : "";
                })).replace(/(?:\\)*\*/g, function (e) {
                  return "\\" === e.charAt(0) ? "*" : "";
                });
              },
            },
            {
              key: "createWildcardsRegExp",
              value: function (e) {
                var t = "withSpaces" === this.opt.wildcards;
                return e
                  .replace(/\u0001/g, t ? "[\\S\\s]?" : "\\S?")
                  .replace(/\u0002/g, t ? "[\\S\\s]*?" : "\\S*");
              },
            },
            {
              key: "setupIgnoreJoinersRegExp",
              value: function (e) {
                return e.replace(/[^(|)\\]/g, function (e, t, n) {
                  var r = n.charAt(t + 1);
                  return /[(|)\\]/.test(r) || "" === r ? e : e + "\0";
                });
              },
            },
            {
              key: "createJoinersRegExp",
              value: function (e) {
                var t = [],
                  n = this.opt.ignorePunctuation;
                return (
                  Array.isArray(n) &&
                    n.length &&
                    t.push(this.escapeStr(n.join(""))),
                  this.opt.ignoreJoiners &&
                    t.push("\\u00ad\\u200b\\u200c\\u200d"),
                  t.length
                    ? e.split(/\u0000+/).join("[".concat(t.join(""), "]*"))
                    : e
                );
              },
            },
            {
              key: "createDiacriticsRegExp",
              value: function (e) {
                var t = this.opt.caseSensitive ? "" : "i",
                  n = this.opt.caseSensitive
                    ? [
                        "aàáảãạăằắẳẵặâầấẩẫậäåāą",
                        "AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
                        "cçćč",
                        "CÇĆČ",
                        "dđď",
                        "DĐĎ",
                        "eèéẻẽẹêềếểễệëěēę",
                        "EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
                        "iìíỉĩịîïī",
                        "IÌÍỈĨỊÎÏĪ",
                        "lł",
                        "LŁ",
                        "nñňń",
                        "NÑŇŃ",
                        "oòóỏõọôồốổỗộơởỡớờợöøō",
                        "OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
                        "rř",
                        "RŘ",
                        "sšśșş",
                        "SŠŚȘŞ",
                        "tťțţ",
                        "TŤȚŢ",
                        "uùúủũụưừứửữựûüůū",
                        "UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
                        "yýỳỷỹỵÿ",
                        "YÝỲỶỸỴŸ",
                        "zžżź",
                        "ZŽŻŹ",
                      ]
                    : [
                        "aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
                        "cçćčCÇĆČ",
                        "dđďDĐĎ",
                        "eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
                        "iìíỉĩịîïīIÌÍỈĨỊÎÏĪ",
                        "lłLŁ",
                        "nñňńNÑŇŃ",
                        "oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
                        "rřRŘ",
                        "sšśșşSŠŚȘŞ",
                        "tťțţTŤȚŢ",
                        "uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
                        "yýỳỷỹỵÿYÝỲỶỸỴŸ",
                        "zžżźZŽŻŹ",
                      ],
                  r = [];
                return (
                  e.split("").forEach(function (o) {
                    n.every(function (n) {
                      if (-1 !== n.indexOf(o)) {
                        if (r.indexOf(n) > -1) return !1;
                        (e = e.replace(
                          new RegExp("[".concat(n, "]"), "gm".concat(t)),
                          "[".concat(n, "]")
                        )),
                          r.push(n);
                      }
                      return !0;
                    });
                  }),
                  e
                );
              },
            },
            {
              key: "createMergedBlanksRegExp",
              value: function (e) {
                return e.replace(/[\s]+/gim, "[\\s]+");
              },
            },
            {
              key: "createAccuracyRegExp",
              value: function (e) {
                var t = this,
                  n = this.opt.accuracy,
                  r = "string" == typeof n ? n : n.value,
                  o = "string" == typeof n ? [] : n.limiters,
                  i = "";
                switch (
                  (o.forEach(function (e) {
                    i += "|".concat(t.escapeStr(e));
                  }),
                  r)
                ) {
                  case "partially":
                  default:
                    return "()(".concat(e, ")");
                  case "complementary":
                    return (
                      (i =
                        "\\s" +
                        (i ||
                          this.escapeStr(
                            "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿"
                          ))),
                      "()([^".concat(i, "]*").concat(e, "[^").concat(i, "]*)")
                    );
                  case "exactly":
                    return "(^|\\s"
                      .concat(i, ")(")
                      .concat(e, ")(?=$|\\s")
                      .concat(i, ")");
                }
              },
            },
          ]),
          e
        );
      })(),
    c =
      /* */
      (function () {
        function e(t) {
          n(this, e), (this.ctx = t), (this.ie = !1);
          var r = window.navigator.userAgent;
          (r.indexOf("MSIE") > -1 || r.indexOf("Trident") > -1) &&
            (this.ie = !0);
        }
        return (
          o(e, [
            {
              key: "log",
              value: function (e) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "debug",
                  r = this.opt.log;
                this.opt.debug &&
                  "object" === t(r) &&
                  "function" == typeof r[n] &&
                  r[n]("mark.js: ".concat(e));
              },
            },
            {
              key: "getSeparatedKeywords",
              value: function (e) {
                var t = this,
                  n = [];
                return (
                  e.forEach(function (e) {
                    t.opt.separateWordSearch
                      ? e.split(" ").forEach(function (e) {
                          e.trim() && -1 === n.indexOf(e) && n.push(e);
                        })
                      : e.trim() && -1 === n.indexOf(e) && n.push(e);
                  }),
                  {
                    keywords: n.sort(function (e, t) {
                      return t.length - e.length;
                    }),
                    length: n.length,
                  }
                );
              },
            },
            {
              key: "isNumeric",
              value: function (e) {
                return Number(parseFloat(e)) == e;
              },
            },
            {
              key: "checkRanges",
              value: function (e) {
                var t = this;
                if (
                  !Array.isArray(e) ||
                  "[object Object]" !== Object.prototype.toString.call(e[0])
                )
                  return (
                    this.log(
                      "markRanges() will only accept an array of objects"
                    ),
                    this.opt.noMatch(e),
                    []
                  );
                var n = [],
                  r = 0;
                return (
                  e
                    .sort(function (e, t) {
                      return e.start - t.start;
                    })
                    .forEach(function (e) {
                      var o = t.callNoMatchOnInvalidRanges(e, r),
                        i = o.start,
                        a = o.end;
                      o.valid &&
                        ((e.start = i), (e.length = a - i), n.push(e), (r = a));
                    }),
                  n
                );
              },
            },
            {
              key: "callNoMatchOnInvalidRanges",
              value: function (e, t) {
                var n,
                  r,
                  o = !1;
                return (
                  e && void 0 !== e.start
                    ? ((r =
                        (n = parseInt(e.start, 10)) + parseInt(e.length, 10)),
                      this.isNumeric(e.start) &&
                      this.isNumeric(e.length) &&
                      r - t > 0 &&
                      r - n > 0
                        ? (o = !0)
                        : (this.log(
                            "Ignoring invalid or overlapping range: " +
                              "".concat(JSON.stringify(e))
                          ),
                          this.opt.noMatch(e)))
                    : (this.log(
                        "Ignoring invalid range: ".concat(JSON.stringify(e))
                      ),
                      this.opt.noMatch(e)),
                  {
                    start: n,
                    end: r,
                    valid: o,
                  }
                );
              },
            },
            {
              key: "checkWhitespaceRanges",
              value: function (e, t, n) {
                var r,
                  o = !0,
                  i = n.length,
                  a = t - i,
                  s = parseInt(e.start, 10) - a;
                return (
                  (r = (s = s > i ? i : s) + parseInt(e.length, 10)) > i &&
                    ((r = i),
                    this.log(
                      "End range automatically set to the max value of ".concat(
                        i
                      )
                    )),
                  s < 0 || r - s < 0 || s > i || r > i
                    ? ((o = !1),
                      this.log("Invalid range: ".concat(JSON.stringify(e))),
                      this.opt.noMatch(e))
                    : "" === n.substring(s, r).replace(/\s+/g, "") &&
                      ((o = !1),
                      this.log(
                        "Skipping whitespace only range: " + JSON.stringify(e)
                      ),
                      this.opt.noMatch(e)),
                  {
                    start: s,
                    end: r,
                    valid: o,
                  }
                );
              },
            },
            {
              key: "getTextNodes",
              value: function (e) {
                var t = this,
                  n = "",
                  r = [];
                this.iterator.forEachNode(
                  NodeFilter.SHOW_TEXT,
                  function (e) {
                    r.push({
                      start: n.length,
                      end: (n += e.textContent).length,
                      node: e,
                    });
                  },
                  function (e) {
                    return t.matchesExclude(e.parentNode)
                      ? NodeFilter.FILTER_REJECT
                      : NodeFilter.FILTER_ACCEPT;
                  },
                  function () {
                    e({
                      value: n,
                      nodes: r,
                    });
                  }
                );
              },
            },
            {
              key: "matchesExclude",
              value: function (e) {
                return a.matches(
                  e,
                  this.opt.exclude.concat([
                    "script",
                    "style",
                    "title",
                    "head",
                    "html",
                  ])
                );
              },
            },
            {
              key: "wrapRangeInTextNode",
              value: function (e, t, n) {
                var r = this.opt.element ? this.opt.element : "mark",
                  o = e.splitText(t),
                  i = o.splitText(n - t),
                  a = document.createElement(r);
                return (
                  a.setAttribute("data-markjs", "true"),
                  this.opt.className &&
                    a.setAttribute("class", this.opt.className),
                  (a.textContent = o.textContent),
                  o.parentNode.replaceChild(a, o),
                  i
                );
              },
            },
            {
              key: "wrapRangeInMappedTextNode",
              value: function (e, t, n, r, o) {
                var i = this;
                e.nodes.every(function (a, s) {
                  var c = e.nodes[s + 1];
                  if (void 0 === c || c.start > t) {
                    if (!r(a.node)) return !1;
                    var u = t - a.start,
                      l = (n > a.end ? a.end : n) - a.start,
                      h = e.value.substr(0, a.start),
                      f = e.value.substr(l + a.start);
                    if (
                      ((a.node = i.wrapRangeInTextNode(a.node, u, l)),
                      (e.value = h + f),
                      e.nodes.forEach(function (t, n) {
                        n >= s &&
                          (e.nodes[n].start > 0 &&
                            n !== s &&
                            (e.nodes[n].start -= l),
                          (e.nodes[n].end -= l));
                      }),
                      (n -= l),
                      o(a.node.previousSibling, a.start),
                      !(n > a.end))
                    )
                      return !1;
                    t = a.end;
                  }
                  return !0;
                });
              },
            },
            {
              key: "wrapGroups",
              value: function (e, t, n, r) {
                return (
                  r(
                    (e = this.wrapRangeInTextNode(e, t, t + n)).previousSibling
                  ),
                  e
                );
              },
            },
            {
              key: "separateGroups",
              value: function (e, t, n, r, o) {
                for (var i = t.length, a = 1; a < i; a++) {
                  var s = e.textContent.indexOf(t[a]);
                  t[a] &&
                    s > -1 &&
                    r(t[a], e) &&
                    (e = this.wrapGroups(e, s, t[a].length, o));
                }
                return e;
              },
            },
            {
              key: "wrapMatches",
              value: function (e, t, n, r, o) {
                var i = this,
                  a = 0 === t ? 0 : t + 1;
                this.getTextNodes(function (t) {
                  t.nodes.forEach(function (t) {
                    var o;
                    for (
                      t = t.node;
                      null !== (o = e.exec(t.textContent)) && "" !== o[a];

                    ) {
                      if (i.opt.separateGroups)
                        t = i.separateGroups(t, o, a, n, r);
                      else {
                        if (!n(o[a], t)) continue;
                        var s = o.index;
                        if (0 !== a)
                          for (var c = 1; c < a; c++) s += o[c].length;
                        t = i.wrapGroups(t, s, o[a].length, r);
                      }
                      e.lastIndex = 0;
                    }
                  }),
                    o();
                });
              },
            },
            {
              key: "wrapMatchesAcrossElements",
              value: function (e, t, n, r, o) {
                var i = this,
                  a = 0 === t ? 0 : t + 1;
                this.getTextNodes(function (t) {
                  for (var s; null !== (s = e.exec(t.value)) && "" !== s[a]; ) {
                    var c = s.index;
                    if (0 !== a) for (var u = 1; u < a; u++) c += s[u].length;
                    var l = c + s[a].length;
                    i.wrapRangeInMappedTextNode(
                      t,
                      c,
                      l,
                      function (e) {
                        return n(s[a], e);
                      },
                      function (t, n) {
                        (e.lastIndex = n), r(t);
                      }
                    );
                  }
                  o();
                });
              },
            },
            {
              key: "wrapRangeFromIndex",
              value: function (e, t, n, r) {
                var o = this;
                this.getTextNodes(function (i) {
                  var a = i.value.length;
                  e.forEach(function (e, r) {
                    var s = o.checkWhitespaceRanges(e, a, i.value),
                      c = s.start,
                      u = s.end;
                    s.valid &&
                      o.wrapRangeInMappedTextNode(
                        i,
                        c,
                        u,
                        function (n) {
                          return t(n, e, i.value.substring(c, u), r);
                        },
                        function (t) {
                          n(t, e);
                        }
                      );
                  }),
                    r();
                });
              },
            },
            {
              key: "unwrapMatches",
              value: function (e) {
                for (
                  var t = e.parentNode, n = document.createDocumentFragment();
                  e.firstChild;

                )
                  n.appendChild(e.removeChild(e.firstChild));
                t.replaceChild(n, e),
                  this.ie ? this.normalizeTextNode(t) : t.normalize();
              },
            },
            {
              key: "normalizeTextNode",
              value: function (e) {
                if (e) {
                  if (3 === e.nodeType)
                    for (; e.nextSibling && 3 === e.nextSibling.nodeType; )
                      (e.nodeValue += e.nextSibling.nodeValue),
                        e.parentNode.removeChild(e.nextSibling);
                  else this.normalizeTextNode(e.firstChild);
                  this.normalizeTextNode(e.nextSibling);
                }
              },
            },
            {
              key: "markRegExp",
              value: function (e, t) {
                var n = this;
                (this.opt = t),
                  this.log('Searching with expression "'.concat(e, '"'));
                var r = 0,
                  o = "wrapMatches";
                this.opt.acrossElements && (o = "wrapMatchesAcrossElements"),
                  this[o](
                    e,
                    this.opt.ignoreGroups,
                    function (e, t) {
                      return n.opt.filter(t, e, r);
                    },
                    function (e) {
                      r++, n.opt.each(e);
                    },
                    function () {
                      0 === r && n.opt.noMatch(e), n.opt.done(r);
                    }
                  );
              },
            },
            {
              key: "mark",
              value: function (e, t) {
                var n = this;
                this.opt = t;
                var r = 0,
                  o = "wrapMatches",
                  i = this.getSeparatedKeywords("string" == typeof e ? [e] : e),
                  a = i.keywords,
                  c = i.length;
                this.opt.acrossElements && (o = "wrapMatchesAcrossElements"),
                  0 === c
                    ? this.opt.done(r)
                    : (function e(t) {
                        var i = new s(n.opt).create(t),
                          u = 0;
                        n.log('Searching with expression "'.concat(i, '"')),
                          n[o](
                            i,
                            1,
                            function (e, o) {
                              return n.opt.filter(o, t, r, u);
                            },
                            function (e) {
                              u++, r++, n.opt.each(e);
                            },
                            function () {
                              0 === u && n.opt.noMatch(t),
                                a[c - 1] === t
                                  ? n.opt.done(r)
                                  : e(a[a.indexOf(t) + 1]);
                            }
                          );
                      })(a[0]);
              },
            },
            {
              key: "markRanges",
              value: function (e, t) {
                var n = this;
                this.opt = t;
                var r = 0,
                  o = this.checkRanges(e);
                o && o.length
                  ? (this.log(
                      "Starting to mark with the following ranges: " +
                        JSON.stringify(o)
                    ),
                    this.wrapRangeFromIndex(
                      o,
                      function (e, t, r, o) {
                        return n.opt.filter(e, t, r, o);
                      },
                      function (e, t) {
                        r++, n.opt.each(e, t);
                      },
                      function () {
                        n.opt.done(r);
                      }
                    ))
                  : this.opt.done(r);
              },
            },
            {
              key: "unmark",
              value: function (e) {
                var t = this;
                this.opt = e;
                var n = this.opt.element ? this.opt.element : "*";
                (n += "[data-markjs]"),
                  this.opt.className && (n += ".".concat(this.opt.className)),
                  this.log('Removal selector "'.concat(n, '"')),
                  this.iterator.forEachNode(
                    NodeFilter.SHOW_ELEMENT,
                    function (e) {
                      t.unwrapMatches(e);
                    },
                    function (e) {
                      var r = a.matches(e, n),
                        o = t.matchesExclude(e);
                      return !r || o
                        ? NodeFilter.FILTER_REJECT
                        : NodeFilter.FILTER_ACCEPT;
                    },
                    this.opt.done
                  );
              },
            },
            {
              key: "opt",
              set: function (e) {
                this._opt = i(
                  {},
                  {
                    element: "",
                    className: "",
                    exclude: [],
                    iframes: !1,
                    iframesTimeout: 5e3,
                    separateWordSearch: !0,
                    acrossElements: !1,
                    ignoreGroups: 0,
                    each: function () {},
                    noMatch: function () {},
                    filter: function () {
                      return !0;
                    },
                    done: function () {},
                    debug: !1,
                    log: window.console,
                  },
                  e
                );
              },
              get: function () {
                return this._opt;
              },
            },
            {
              key: "iterator",
              get: function () {
                return new a(
                  this.ctx,
                  this.opt.iframes,
                  this.opt.exclude,
                  this.opt.iframesTimeout
                );
              },
            },
          ]),
          e
        );
      })();
  return (
    (e.fn.mark = function (e, t) {
      return new c(this.get()).mark(e, t), this;
    }),
    (e.fn.markRegExp = function (e, t) {
      return new c(this.get()).markRegExp(e, t), this;
    }),
    (e.fn.markRanges = function (e, t) {
      return new c(this.get()).markRanges(e, t), this;
    }),
    (e.fn.unmark = function (e) {
      return new c(this.get()).unmark(e), this;
    }),
    e
  );
});

/*! sp_class/assets/js/fs.search-highlighter.js
 */
jQuery(function () {
  var highlighter = function () {
    var config = $.extend(
      {
        shortWordMaxLength: 4,
        maxWordHighlights: 100,
        maxTotalHighlights: 100,
        excludeElements: ["h1", "h1 *"],
        expandContent: false,
      },
      window["fsSearchHighlightConfig"]
    );
    var cookieVal = atob($.cookie("lastsearch") || "");
    var expandContent = function () {
      if (!config.expandContent) return;
      var $allMarks = $("mark[data-markjs]");
      var $firstMark = $allMarks.first();
      if (!$firstMark.length) {
        return;
      }
      if (
        $("#pageTitle").text().toLowerCase().indexOf(cookieVal.toLowerCase()) >=
        0
      ) {
        return;
      }
      if (!$firstMark.is(":visible")) {
        var $section = $firstMark.closest("section");
        if ($section.length) {
          var id = $section.attr("id").replace("-tab", "");
          if (id) {
            if (history.replaceState) {
              history.replaceState({}, "", "#" + id);
              $(window).trigger("hashchange");
            } else {
              document.location.hash = id;
            }
          }
          setTimeout(function () {
            $section.children(".sectionTitle:visible").click();
          }, 50);
        }
      }
      setTimeout(function () {
        $allMarks
          .closest(".expandableList:not(.expanded)")
          .children(".toggleExpand")
          .click();
        $allMarks.closest(".extraItems").next("button").click();
        $allMarks.parents().prev(".expandableHeading:not(.expanded)").click();
      }, 50);
    };
    var noFunc = function () {};
    var maxFilter = function (node, term, totalCounter, counter) {
      return (
        counter < config.maxWordHighlights &&
        totalCounter < config.maxTotalHighlights
      );
    };
    var storeKeyword = function (newKeyword) {
      if (newKeyword)
        $.cookie("lastsearch", btoa(newKeyword), {
          path: "/",
        });
      else
        $.cookie("lastsearch", null, {
          path: "/",
        });
    };
    if (!cookieVal) {
      var searchMatch = location.search.match(/test-search-term=([^&]+)/);
      if (searchMatch) {
        cookieVal = decodeURIComponent(searchMatch[1].replace("+", " "));
      }
    }
    var $searchFields = $("[name*='searchtext'],[name*='keyword']");
    var newKeyword = $searchFields.filter("[value]").val() || "";
    if (cookieVal && !newKeyword) {
      var $content = $("body:not(#search) #content");
      var hasQuotes = /^['"].+['"]$/.test(cookieVal);
      var shortWords = "";
      var longWords = "";
      cookieVal = cookieVal.replace(/['"]/g, "");
      if (!hasQuotes) {
        $.each(cookieVal.split(/\W/g), function (i, word) {
          if (word.length <= config.shortWordMaxLength)
            shortWords += " " + word;
          else longWords += " " + word;
        });
        shortWords = $.trim(shortWords);
        longWords = $.trim(longWords);
      }
      if (hasQuotes) {
        $content.mark(cookieVal, {
          exclude: config.excludeElements,
          filter: maxFilter,
          separateWordSearch: false,
          done: expandContent,
        });
      } else {
        $content.mark(shortWords, {
          exclude: config.excludeElements,
          filter: maxFilter,
          accuracy: "exactly",
          done: function () {
            $content.mark(longWords, {
              exclude: config.excludeElements,
              filter: maxFilter,
              done: expandContent,
            });
          },
        });
      }
    }
    storeKeyword(newKeyword);
    $("[name^='searchtext']").keyup(function () {
      newKeyword = this.value;
    });
    $("body").on("click", "a[href]", function (event) {
      storeKeyword(newKeyword);
    });
    setTimeout(function () {
      $("body").on("click", function () {
        $("mark:visible").unmark();
      });
    }, 500);
  };
  setTimeout(highlighter, 500);
});

/*! sp_class/assets/js/fs.searchpopup-0.1.js
 */
(function ($) {
  "use strict";
  $.fn.searchPopup = function (options) {
    var settings = $.extend(
      {
        url: "search-popup?do_site_search=1",
        queryName: "searchtext",
        minChars: 3,
        wrapperClass: "",
        wrapperID: "searchPopup",
        appendTo: "body",
        scrollOffset: 80,
        stayOpen: false,
      },
      options
    );
    var $searchInput = $(this);
    $searchInput.add($searchInput.closest("form")).attr("autocomplete", "off");
    var currKeyword = null;
    var currRequest = null;
    var $selectedResult = null;
    var $resultsDiv = $("<div />")
      .attr({
        class: settings.wrapperClass,
        id: settings.wrapperID,
      })
      .appendTo(settings.appendTo)
      .hide();
    $resultsDiv.on("click", ".selectable", function (e) {
      if (!$(e.target).is("a")) {
        var $link = $(this).find("a");
        if ($link.length) {
          $link[0].click();
          e.preventDefault();
        }
      }
    });
    $searchInput.on("keydown", function (e) {
      switch (e.key) {
        case "ArrowUp":
        case "Up":
          selectNextResult(true);
          e.preventDefault();
          break;
        case "ArrowDown":
        case "Down":
          selectNextResult();
          e.preventDefault();
          break;
        case "Enter":
          if ($selectedResult) {
            var $link = $selectedResult.find("a");
            if ($link.length) {
              $link[0].click();
              e.preventDefault();
            }
          }
          break;
      }
    });
    $searchInput.on("keyup", function (e) {
      var newKeyword = this.value;
      var prevKeyword = currKeyword;
      currKeyword = newKeyword;
      if (!newKeyword || newKeyword.length < settings.minChars) {
        $resultsDiv.empty().hide();
        $selectedResult = null;
        return;
      }
      if (newKeyword != prevKeyword) {
        $selectedResult = null;
        if (currRequest) {
          currRequest.abort();
        }
        currRequest = $.ajax({
          url: settings.url,
          data: settings.queryName + "=" + encodeURIComponent(newKeyword),
          success: function (msg) {
            $resultsDiv.empty().scrollTop(0).append(msg).show();
            currRequest = null;
          },
        });
      }
    });
    if (!settings.stayOpen) {
      $searchInput.on("blur", function (e) {
        if ($resultsDiv.is(":hover")) {
          $resultsDiv.one("mouseout", function () {
            $resultsDiv.hide();
          });
        } else {
          $resultsDiv.hide();
        }
      });
    }
    var selectResult = function ($obj) {
      $selectedResult = $obj.first(".selectable");
      if (
        !$selectedResult.length ||
        !document.body.contains($selectedResult[0])
      ) {
        $selectedResult = null;
        return false;
      }
      $selectedResult.addClass("selected").siblings().removeClass("selected");
      if ($.smoothScroll) {
        $.smoothScroll({
          scrollElement: $resultsDiv,
          scrollTarget: $selectedResult,
          offset: -settings.scrollOffset,
        });
      }
    };
    var selectFirstResult = function () {
      selectResult($resultsDiv.children(".selectable").first());
    };
    var selectNextResult = function (reverse) {
      if (!$selectedResult) {
        return selectFirstResult();
      }
      if (reverse) return selectResult($selectedResult.prevAll(".selectable"));
      return selectResult($selectedResult.nextAll(".selectable"));
    };
  };
})(jQuery);

function homeAnimation() {
  if (!$("#index").length) return false;
  $("#homeAnimation").fsCycle({
    timeout: 8500,
    pagers: true,
    prev: false,
    next: false,
  });
  $(".animPagers").on("click", "button", function () {
    $("#homeAnimation .results_list")
      .find("div")
      .each(function () {
        var that = this;
        $(that).removeClass("previous");
        that.style.animation = "none";
        setTimeout(function () {
          that.style.animation = "";
        }, 10);
      });
  });
  $(".animPagers button:first-child").click();
}

function repositionDrops($drop, windowWidth, parentWidth, gparentWidth) {
  if (!windowWidth) {
    windowWidth = $(window).width();
  }
  if (!parentWidth) parentWidth = 0;
  if (!$drop) {
    $("#mainNav > ul > li > ul").each(function () {
      repositionDrops($(this), windowWidth);
    });
    return;
  }
  $drop.css({
    display: "block",
    visibility: "hidden",
    left: "",
  });
  var dropWidth = $drop.outerWidth();
  var dropLeft = $drop.position().left;
  if (!dropWidth) {
    $drop.css({
      display: "",
      visibility: "",
    });
    return;
  }
  var distanceToRight =
    windowWidth -
    $drop.parent().offset().left -
    dropWidth -
    dropLeft -
    (parseInt($drop.css("marginLeft")) || 0);
  var distanceToLeft = distanceToRight + dropWidth - windowWidth;
  if (parentWidth && distanceToRight < 0) {
    var spaceOnLeft = Math.abs(distanceToLeft) - parentWidth;
    var spaceOnRight = distanceToRight + dropWidth;
    var mostSpace = Math.max(spaceOnLeft, spaceOnRight);
    if (gparentWidth && spaceOnRight > 175) {
      mostSpace = spaceOnRight;
    }
    if (mostSpace < dropWidth) {
      dropWidth = mostSpace;
      $drop
        .css({
          width: dropWidth,
        })
        .find("a")
        .css("white-space", "normal");
    }
    if (mostSpace == spaceOnLeft) {
      $drop.css({
        left: -dropWidth,
      });
    }
  } else {
    if (distanceToRight < 0) {
      $drop.css("left", distanceToRight + dropLeft);
    } else {
      if (distanceToLeft > 0) $drop.css("left", distanceToLeft + dropLeft);
    }
  }
  $drop.find("> li > ul").each(function () {
    repositionDrops($(this), windowWidth, dropWidth, parentWidth);
  });
  $drop.css({
    display: "",
    visibility: "",
  });
}

function handleWindowChanges() {
  var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (w > 767) {
  }
  if (w <= 767) {
    $(".contentSection:first .sectionTitle")
      .toggleClass("isOpen")
      .nextAll()
      .slideToggle();
  }
  if (w > 1279) {
    window.addEventListener("scroll", function () {
      if ($(window).scrollTop() > 30) $("body").addClass("scrolled");
      else $("body").removeClass("scrolled");
    });
  }
}

function mobileTabExpander() {
  $("body").on("click keypress", ".sectionTitle", function (e) {
    if (e.keyCode && e.keyCode != 13 && e.keyCode != 32) return;
    $(this).toggleClass("isOpen").nextAll().slideToggle();
  });
}

function paymentForm() {
  $("#autoPayForm").submit();
  var $amount = $("input#amount");
  $amount.on("change mouseleave", function () {
    if (!this.value) return;
    var rawNum = Number(this.value.replace(/[^0-9\.]/g, ""));
    this.value = rawNum
      .toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })
      .replace("$", "");
  });
  $amount
    .closest("form")
    .find("[type=submit]")
    .mouseover(function () {
      $amount.trigger("change");
    });
}

function LMPExpander() {
  if (!$("#lpmHighlights").length) return false;
  if ("objectFit" in document.documentElement.style === false) {
    $("#lpmHighlights")
      .find(".content")
      .each(function () {
        var $img = $(this).find("img");
        $img.parent().css({
          background:
            "linear-gradient(to right, rgba(48, 54, 52, 1) 59%, rgba(48, 54, 52, .9) 63%, rgba(48, 54, 52, 0) 85%), url(" +
            $img.attr("src") +
            ") right top no-repeat",
        });
        $img.remove();
      });
  }
  $("#lpmHighlights").on("click", ".introcontent", function () {
    var $parent = $(this).parent().parent();
    var tTop = $parent.position().top;
    $("#lpmHighlights > div.content").remove();
    if ($parent.hasClass("current")) {
      $("button.close").click();
      $parent.removeClass("current");
      return;
    }
    $("div.current").removeClass("current");
    $parent.addClass("current");
    var $bucketGoesHere;
    $parent
      .nextAll("div")
      .addBack()
      .each(function () {
        if (tTop != $(this).position().top) {
          return false;
        }
        $bucketGoesHere = $(this);
      });
    $("#lpmHighlights .results_list > div.content").remove();
    var endTop = $parent.offset().top + $parent.height() - 100;
    $parent
      .find(".content")
      .clone()
      .insertAfter($bucketGoesHere)
      .addClass("expand")
      .slideDown(500)
      .find("button.close")
      .click(function () {
        $(this)
          .parent()
          .parent()
          .parent()
          .slideUp(500, function () {
            $(this).remove();
            $parent.removeClass("current");
          });
      });
    $("html, body").animate(
      {
        scrollTop: endTop,
      },
      500,
      function () {
        $parent.find(".innerContent").focus();
      }
    );
  });
}
jQuery(function () {
  "use strict";
  if ($("#styles-example").length) {
    color_reference({
      "#mainNav": "Main Navigation",
    });
  }
  if ($("body.contact-item").length) {
    $(window).bind("resizeEnd", function () {
      if (window.map) {
        var mapID = map.getDiv().id;
        if ($("#mainContent").find("#" + mapID).length) eval(mapID + "_init()");
      }
    });
  }
  paymentForm();
  handleWindowChanges();
  $(window).resize(function () {
    var currWidth = $(window).width();
    if (lastWindowWidth != currWidth) {
      lastWindowWidth = currWidth;
      if (this.resizeTO) clearTimeout(this.resizeTO);
      this.resizeTO = setTimeout(function () {
        $(this).trigger("resizeEnd");
        handleWindowChanges();
        repositionDrops();
      }, 250);
    }
  });
  homeAnimation();
  initMultiMedia();
  emailPopup();
  cookiePopup();
  resultsListExpandos();
  showLabelsInline();
  $("select").customSelect();
  mobileMenu();
  siteSearch();
  servicesSearch();
  homeBioSearch();
  attorneyCarousel();
  slantExpander();
  practiceExpander();
  subContentExpander();
  mobileTabExpander();
  LMPExpander();
  jumpHandler();
  expandableHeadings();
  gaClickTracker();
  keepOpen();
  experienceMap();
  initExpMaps();
  bioSearch();
  if ($(".relatedAttorneyList").find("li").length > 15) {
    $(".relatedAttorneyList").addClass("nameOnly");
  }
  if ($(".people-item #tabLinks > a").length > 1) {
    $("#tabLinks").on("click", "a", function () {
      if ($(this).attr("href") == "#Overview")
        $("#bio_ofnote").removeClass("hideMe");
      else $("#bio_ofnote").addClass("hideMe");
    });
  }
  if ($(".capabilities-item #tabLinks > a").length > 1) {
    $(window).hashchange();
  }
  if ($("#tabLinks").length) $("#tabLinks").insertAfter("#banner");
});
