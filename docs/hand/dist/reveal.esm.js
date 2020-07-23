/*!
 * reveal.js 4.0.2
 * https://revealjs.com
 * MIT licensed
 *
 * Copyright (C) 2020 Hakim El Hattab, https://hakim.se
 */
var e =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {};
function t(e, t, i) {
  return (
    e(
      (i = {
        path: t,
        exports: {},
        require: function (e, t) {
          return (function () {
            throw new Error(
              "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
            );
          })(null == t && i.path);
        },
      }),
      i.exports
    ),
    i.exports
  );
}
var i,
  n = function (e) {
    return e && e.Math == Math && e;
  },
  a =
    n("object" == typeof globalThis && globalThis) ||
    n("object" == typeof window && window) ||
    n("object" == typeof self && self) ||
    n("object" == typeof e && e) ||
    Function("return this")(),
  s = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  },
  r = function (e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
  o = {}.toString,
  l = function (e) {
    return o.call(e).slice(8, -1);
  },
  d = "".split,
  c = r(function () {
    return !Object("z").propertyIsEnumerable(0);
  })
    ? function (e) {
        return "String" == l(e) ? d.call(e, "") : Object(e);
      }
    : Object,
  u = function (e) {
    if (null == e) throw TypeError("Can't call method on " + e);
    return e;
  },
  h = function (e) {
    return c(u(e));
  },
  g = !r(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  v = function (e) {
    return "object" == typeof e ? null !== e : "function" == typeof e;
  },
  p = a.document,
  f = v(p) && v(p.createElement),
  m = function (e) {
    return f ? p.createElement(e) : {};
  },
  b =
    !g &&
    !r(function () {
      return (
        7 !=
        Object.defineProperty(m("div"), "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  y = function (e) {
    if (!v(e)) throw TypeError(String(e) + " is not an object");
    return e;
  },
  w = function (e, t) {
    if (!v(e)) return e;
    var i, n;
    if (t && "function" == typeof (i = e.toString) && !v((n = i.call(e))))
      return n;
    if ("function" == typeof (i = e.valueOf) && !v((n = i.call(e)))) return n;
    if (!t && "function" == typeof (i = e.toString) && !v((n = i.call(e))))
      return n;
    throw TypeError("Can't convert object to primitive value");
  },
  R = Object.defineProperty,
  E = {
    f: g
      ? R
      : function (e, t, i) {
          if ((y(e), (t = w(t, !0)), y(i), b))
            try {
              return R(e, t, i);
            } catch (e) {}
          if ("get" in i || "set" in i)
            throw TypeError("Accessors not supported");
          return "value" in i && (e[t] = i.value), e;
        },
  },
  S = function (e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t,
    };
  },
  A = g
    ? function (e, t, i) {
        return E.f(e, t, S(1, i));
      }
    : function (e, t, i) {
        return (e[t] = i), e;
      },
  k = function (e, t) {
    try {
      A(a, e, t);
    } catch (i) {
      a[e] = t;
    }
    return t;
  },
  L = a["__core-js_shared__"] || k("__core-js_shared__", {}),
  x = t(function (e) {
    (e.exports = function (e, t) {
      return L[e] || (L[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  }),
  C = {}.hasOwnProperty,
  P = function (e, t) {
    return C.call(e, t);
  },
  N = 0,
  M = Math.random(),
  I = function (e) {
    return (
      "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++N + M).toString(36)
    );
  },
  T =
    !!Object.getOwnPropertySymbols &&
    !r(function () {
      return !String(Symbol());
    }),
  D = T && !Symbol.sham && "symbol" == typeof Symbol.iterator,
  O = x("wks"),
  H = a.Symbol,
  B = D ? H : (H && H.withoutSetter) || I,
  U = function (e) {
    return (
      P(O, e) || (T && P(H, e) ? (O[e] = H[e]) : (O[e] = B("Symbol." + e))),
      O[e]
    );
  },
  j = Math.ceil,
  z = Math.floor,
  q = function (e) {
    return isNaN((e = +e)) ? 0 : (e > 0 ? z : j)(e);
  },
  F = Math.min,
  _ = function (e) {
    return e > 0 ? F(q(e), 9007199254740991) : 0;
  },
  W = Math.max,
  V = Math.min,
  K = function (e) {
    return function (t, i, n) {
      var a,
        s = h(t),
        r = _(s.length),
        o = (function (e, t) {
          var i = q(e);
          return i < 0 ? W(i + t, 0) : V(i, t);
        })(n, r);
      if (e && i != i) {
        for (; r > o; ) if ((a = s[o++]) != a) return !0;
      } else
        for (; r > o; o++) if ((e || o in s) && s[o] === i) return e || o || 0;
      return !e && -1;
    };
  },
  X = { includes: K(!0), indexOf: K(!1) },
  $ = {},
  Y = X.indexOf,
  G = function (e, t) {
    var i,
      n = h(e),
      a = 0,
      s = [];
    for (i in n) !P($, i) && P(n, i) && s.push(i);
    for (; t.length > a; ) P(n, (i = t[a++])) && (~Y(s, i) || s.push(i));
    return s;
  },
  J = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  Q =
    Object.keys ||
    function (e) {
      return G(e, J);
    },
  Z = g
    ? Object.defineProperties
    : function (e, t) {
        y(e);
        for (var i, n = Q(t), a = n.length, s = 0; a > s; )
          E.f(e, (i = n[s++]), t[i]);
        return e;
      },
  ee = a,
  te = function (e) {
    return "function" == typeof e ? e : void 0;
  },
  ie = function (e, t) {
    return arguments.length < 2
      ? te(ee[e]) || te(a[e])
      : (ee[e] && ee[e][t]) || (a[e] && a[e][t]);
  },
  ne = ie("document", "documentElement"),
  ae = x("keys"),
  se = function (e) {
    return ae[e] || (ae[e] = I(e));
  },
  re = se("IE_PROTO"),
  oe = function () {},
  le = function (e) {
    return "<script>" + e + "</script>";
  },
  de = function () {
    try {
      i = document.domain && new ActiveXObject("htmlfile");
    } catch (e) {}
    var e, t;
    de = i
      ? (function (e) {
          e.write(le("")), e.close();
          var t = e.parentWindow.Object;
          return (e = null), t;
        })(i)
      : (((t = m("iframe")).style.display = "none"),
        ne.appendChild(t),
        (t.src = String("javascript:")),
        (e = t.contentWindow.document).open(),
        e.write(le("document.F=Object")),
        e.close(),
        e.F);
    for (var n = J.length; n--; ) delete de.prototype[J[n]];
    return de();
  };
$[re] = !0;
var ce =
    Object.create ||
    function (e, t) {
      var i;
      return (
        null !== e
          ? ((oe.prototype = y(e)),
            (i = new oe()),
            (oe.prototype = null),
            (i[re] = e))
          : (i = de()),
        void 0 === t ? i : Z(i, t)
      );
    },
  ue = U("unscopables"),
  he = Array.prototype;
null == he[ue] && E.f(he, ue, { configurable: !0, value: ce(null) });
var ge = function (e) {
    he[ue][e] = !0;
  },
  ve = Function.toString;
"function" != typeof L.inspectSource &&
  (L.inspectSource = function (e) {
    return ve.call(e);
  });
var pe,
  fe,
  me,
  be = L.inspectSource,
  ye = a.WeakMap,
  we = "function" == typeof ye && /native code/.test(be(ye)),
  Re = a.WeakMap;
if (we) {
  var Ee = new Re(),
    Se = Ee.get,
    Ae = Ee.has,
    ke = Ee.set;
  (pe = function (e, t) {
    return ke.call(Ee, e, t), t;
  }),
    (fe = function (e) {
      return Se.call(Ee, e) || {};
    }),
    (me = function (e) {
      return Ae.call(Ee, e);
    });
} else {
  var Le = se("state");
  ($[Le] = !0),
    (pe = function (e, t) {
      return A(e, Le, t), t;
    }),
    (fe = function (e) {
      return P(e, Le) ? e[Le] : {};
    }),
    (me = function (e) {
      return P(e, Le);
    });
}
var xe,
  Ce,
  Pe,
  Ne = {
    set: pe,
    get: fe,
    has: me,
    enforce: function (e) {
      return me(e) ? fe(e) : pe(e, {});
    },
    getterFor: function (e) {
      return function (t) {
        var i;
        if (!v(t) || (i = fe(t)).type !== e)
          throw TypeError("Incompatible receiver, " + e + " required");
        return i;
      };
    },
  },
  Me = {}.propertyIsEnumerable,
  Ie = Object.getOwnPropertyDescriptor,
  Te = {
    f:
      Ie && !Me.call({ 1: 2 }, 1)
        ? function (e) {
            var t = Ie(this, e);
            return !!t && t.enumerable;
          }
        : Me,
  },
  De = Object.getOwnPropertyDescriptor,
  Oe = {
    f: g
      ? De
      : function (e, t) {
          if (((e = h(e)), (t = w(t, !0)), b))
            try {
              return De(e, t);
            } catch (e) {}
          if (P(e, t)) return S(!Te.f.call(e, t), e[t]);
        },
  },
  He = t(function (e) {
    var t = Ne.get,
      i = Ne.enforce,
      n = String(String).split("String");
    (e.exports = function (e, t, s, r) {
      var o = !!r && !!r.unsafe,
        l = !!r && !!r.enumerable,
        d = !!r && !!r.noTargetGet;
      "function" == typeof s &&
        ("string" != typeof t || P(s, "name") || A(s, "name", t),
        (i(s).source = n.join("string" == typeof t ? t : ""))),
        e !== a
          ? (o ? !d && e[t] && (l = !0) : delete e[t],
            l ? (e[t] = s) : A(e, t, s))
          : l
          ? (e[t] = s)
          : k(t, s);
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && t(this).source) || be(this);
    });
  }),
  Be = J.concat("length", "prototype"),
  Ue = {
    f:
      Object.getOwnPropertyNames ||
      function (e) {
        return G(e, Be);
      },
  },
  je = { f: Object.getOwnPropertySymbols },
  ze =
    ie("Reflect", "ownKeys") ||
    function (e) {
      var t = Ue.f(y(e)),
        i = je.f;
      return i ? t.concat(i(e)) : t;
    },
  qe = function (e, t) {
    for (var i = ze(t), n = E.f, a = Oe.f, s = 0; s < i.length; s++) {
      var r = i[s];
      P(e, r) || n(e, r, a(t, r));
    }
  },
  Fe = /#|\.prototype\./,
  _e = function (e, t) {
    var i = Ve[We(e)];
    return i == Xe || (i != Ke && ("function" == typeof t ? r(t) : !!t));
  },
  We = (_e.normalize = function (e) {
    return String(e).replace(Fe, ".").toLowerCase();
  }),
  Ve = (_e.data = {}),
  Ke = (_e.NATIVE = "N"),
  Xe = (_e.POLYFILL = "P"),
  $e = _e,
  Ye = Oe.f,
  Ge = function (e, t) {
    var i,
      n,
      s,
      r,
      o,
      l = e.target,
      d = e.global,
      c = e.stat;
    if ((i = d ? a : c ? a[l] || k(l, {}) : (a[l] || {}).prototype))
      for (n in t) {
        if (
          ((r = t[n]),
          (s = e.noTargetGet ? (o = Ye(i, n)) && o.value : i[n]),
          !$e(d ? n : l + (c ? "." : "#") + n, e.forced) && void 0 !== s)
        ) {
          if (typeof r == typeof s) continue;
          qe(r, s);
        }
        (e.sham || (s && s.sham)) && A(r, "sham", !0), He(i, n, r, e);
      }
  },
  Je = function (e) {
    return Object(u(e));
  },
  Qe = !r(function () {
    function e() {}
    return (
      (e.prototype.constructor = null),
      Object.getPrototypeOf(new e()) !== e.prototype
    );
  }),
  Ze = se("IE_PROTO"),
  et = Object.prototype,
  tt = Qe
    ? Object.getPrototypeOf
    : function (e) {
        return (
          (e = Je(e)),
          P(e, Ze)
            ? e[Ze]
            : "function" == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? et
            : null
        );
      },
  it = U("iterator"),
  nt = !1;
[].keys &&
  ("next" in (Pe = [].keys())
    ? (Ce = tt(tt(Pe))) !== Object.prototype && (xe = Ce)
    : (nt = !0)),
  null == xe && (xe = {}),
  P(xe, it) ||
    A(xe, it, function () {
      return this;
    });
var at = { IteratorPrototype: xe, BUGGY_SAFARI_ITERATORS: nt },
  st = E.f,
  rt = U("toStringTag"),
  ot = function (e, t, i) {
    e &&
      !P((e = i ? e : e.prototype), rt) &&
      st(e, rt, { configurable: !0, value: t });
  },
  lt = at.IteratorPrototype,
  dt =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function () {
          var e,
            t = !1,
            i = {};
          try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
              .set).call(i, []),
              (t = i instanceof Array);
          } catch (e) {}
          return function (i, n) {
            return (
              y(i),
              (function (e) {
                if (!v(e) && null !== e)
                  throw TypeError("Can't set " + String(e) + " as a prototype");
              })(n),
              t ? e.call(i, n) : (i.__proto__ = n),
              i
            );
          };
        })()
      : void 0),
  ct = at.IteratorPrototype,
  ut = at.BUGGY_SAFARI_ITERATORS,
  ht = U("iterator"),
  gt = function () {
    return this;
  },
  vt = Ne.set,
  pt = Ne.getterFor("Array Iterator"),
  ft = (function (e, t, i, n, a, s, r) {
    !(function (e, t, i) {
      var n = t + " Iterator";
      (e.prototype = ce(lt, { next: S(1, i) })), ot(e, n, !1);
    })(i, t, n);
    var o,
      l,
      d,
      c = function (e) {
        if (e === a && p) return p;
        if (!ut && e in g) return g[e];
        switch (e) {
          case "keys":
          case "values":
          case "entries":
            return function () {
              return new i(this, e);
            };
        }
        return function () {
          return new i(this);
        };
      },
      u = t + " Iterator",
      h = !1,
      g = e.prototype,
      v = g[ht] || g["@@iterator"] || (a && g[a]),
      p = (!ut && v) || c(a),
      f = ("Array" == t && g.entries) || v;
    if (
      (f &&
        ((o = tt(f.call(new e()))),
        ct !== Object.prototype &&
          o.next &&
          (tt(o) !== ct &&
            (dt ? dt(o, ct) : "function" != typeof o[ht] && A(o, ht, gt)),
          ot(o, u, !0))),
      "values" == a &&
        v &&
        "values" !== v.name &&
        ((h = !0),
        (p = function () {
          return v.call(this);
        })),
      g[ht] !== p && A(g, ht, p),
      a)
    )
      if (
        ((l = {
          values: c("values"),
          keys: s ? p : c("keys"),
          entries: c("entries"),
        }),
        r)
      )
        for (d in l) (ut || h || !(d in g)) && He(g, d, l[d]);
      else Ge({ target: t, proto: !0, forced: ut || h }, l);
    return l;
  })(
    Array,
    "Array",
    function (e, t) {
      vt(this, { type: "Array Iterator", target: h(e), index: 0, kind: t });
    },
    function () {
      var e = pt(this),
        t = e.target,
        i = e.kind,
        n = e.index++;
      return !t || n >= t.length
        ? ((e.target = void 0), { value: void 0, done: !0 })
        : "keys" == i
        ? { value: n, done: !1 }
        : "values" == i
        ? { value: t[n], done: !1 }
        : { value: [n, t[n]], done: !1 };
    },
    "values"
  );
ge("keys"), ge("values"), ge("entries");
var mt = U("iterator"),
  bt = U("toStringTag"),
  yt = ft.values;
for (var wt in s) {
  var Rt = a[wt],
    Et = Rt && Rt.prototype;
  if (Et) {
    if (Et[mt] !== yt)
      try {
        A(Et, mt, yt);
      } catch (e) {
        Et[mt] = yt;
      }
    if ((Et[bt] || A(Et, bt, wt), s[wt]))
      for (var St in ft)
        if (Et[St] !== ft[St])
          try {
            A(Et, St, ft[St]);
          } catch (e) {
            Et[St] = ft[St];
          }
  }
}
const At = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener/,
  kt = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;
var Lt = function () {
  var e = y(this),
    t = "";
  return (
    e.global && (t += "g"),
    e.ignoreCase && (t += "i"),
    e.multiline && (t += "m"),
    e.dotAll && (t += "s"),
    e.unicode && (t += "u"),
    e.sticky && (t += "y"),
    t
  );
};
function xt(e, t) {
  return RegExp(e, t);
}
var Ct,
  Pt,
  Nt = {
    UNSUPPORTED_Y: r(function () {
      var e = xt("a", "y");
      return (e.lastIndex = 2), null != e.exec("abcd");
    }),
    BROKEN_CARET: r(function () {
      var e = xt("^r", "gy");
      return (e.lastIndex = 2), null != e.exec("str");
    }),
  },
  Mt = RegExp.prototype.exec,
  It = String.prototype.replace,
  Tt = Mt,
  Dt =
    ((Ct = /a/),
    (Pt = /b*/g),
    Mt.call(Ct, "a"),
    Mt.call(Pt, "a"),
    0 !== Ct.lastIndex || 0 !== Pt.lastIndex),
  Ot = Nt.UNSUPPORTED_Y || Nt.BROKEN_CARET,
  Ht = void 0 !== /()??/.exec("")[1];
(Dt || Ht || Ot) &&
  (Tt = function (e) {
    var t,
      i,
      n,
      a,
      s = this,
      r = Ot && s.sticky,
      o = Lt.call(s),
      l = s.source,
      d = 0,
      c = e;
    return (
      r &&
        (-1 === (o = o.replace("y", "")).indexOf("g") && (o += "g"),
        (c = String(e).slice(s.lastIndex)),
        s.lastIndex > 0 &&
          (!s.multiline || (s.multiline && "\n" !== e[s.lastIndex - 1])) &&
          ((l = "(?: " + l + ")"), (c = " " + c), d++),
        (i = new RegExp("^(?:" + l + ")", o))),
      Ht && (i = new RegExp("^" + l + "$(?!\\s)", o)),
      Dt && (t = s.lastIndex),
      (n = Mt.call(r ? i : s, c)),
      r
        ? n
          ? ((n.input = n.input.slice(d)),
            (n[0] = n[0].slice(d)),
            (n.index = s.lastIndex),
            (s.lastIndex += n[0].length))
          : (s.lastIndex = 0)
        : Dt && n && (s.lastIndex = s.global ? n.index + n[0].length : t),
      Ht &&
        n &&
        n.length > 1 &&
        It.call(n[0], i, function () {
          for (a = 1; a < arguments.length - 2; a++)
            void 0 === arguments[a] && (n[a] = void 0);
        }),
      n
    );
  });
var Bt = Tt;
Ge({ target: "RegExp", proto: !0, forced: /./.exec !== Bt }, { exec: Bt });
var Ut = U("species"),
  jt = !r(function () {
    var e = /./;
    return (
      (e.exec = function () {
        var e = [];
        return (e.groups = { a: "7" }), e;
      }),
      "7" !== "".replace(e, "$<a>")
    );
  }),
  zt = "$0" === "a".replace(/./, "$0"),
  qt = U("replace"),
  Ft = !!/./[qt] && "" === /./[qt]("a", "$0"),
  _t = !r(function () {
    var e = /(?:)/,
      t = e.exec;
    e.exec = function () {
      return t.apply(this, arguments);
    };
    var i = "ab".split(e);
    return 2 !== i.length || "a" !== i[0] || "b" !== i[1];
  }),
  Wt = function (e) {
    return function (t, i) {
      var n,
        a,
        s = String(u(t)),
        r = q(i),
        o = s.length;
      return r < 0 || r >= o
        ? e
          ? ""
          : void 0
        : (n = s.charCodeAt(r)) < 55296 ||
          n > 56319 ||
          r + 1 === o ||
          (a = s.charCodeAt(r + 1)) < 56320 ||
          a > 57343
        ? e
          ? s.charAt(r)
          : n
        : e
        ? s.slice(r, r + 2)
        : a - 56320 + ((n - 55296) << 10) + 65536;
    };
  },
  Vt = { codeAt: Wt(!1), charAt: Wt(!0) }.charAt,
  Kt = function (e, t, i) {
    return t + (i ? Vt(e, t).length : 1);
  },
  Xt = function (e, t) {
    var i = e.exec;
    if ("function" == typeof i) {
      var n = i.call(e, t);
      if ("object" != typeof n)
        throw TypeError(
          "RegExp exec method returned something other than an Object or null"
        );
      return n;
    }
    if ("RegExp" !== l(e))
      throw TypeError("RegExp#exec called on incompatible receiver");
    return Bt.call(e, t);
  },
  $t = Math.max,
  Yt = Math.min,
  Gt = Math.floor,
  Jt = /\$([$&'`]|\d\d?|<[^>]*>)/g,
  Qt = /\$([$&'`]|\d\d?)/g;
!(function (e, t, i, n) {
  var a = U(e),
    s = !r(function () {
      var t = {};
      return (
        (t[a] = function () {
          return 7;
        }),
        7 != ""[e](t)
      );
    }),
    o =
      s &&
      !r(function () {
        var t = !1,
          i = /a/;
        return (
          "split" === e &&
            (((i = {}).constructor = {}),
            (i.constructor[Ut] = function () {
              return i;
            }),
            (i.flags = ""),
            (i[a] = /./[a])),
          (i.exec = function () {
            return (t = !0), null;
          }),
          i[a](""),
          !t
        );
      });
  if (
    !s ||
    !o ||
    ("replace" === e && (!jt || !zt || Ft)) ||
    ("split" === e && !_t)
  ) {
    var l = /./[a],
      d = i(
        a,
        ""[e],
        function (e, t, i, n, a) {
          return t.exec === Bt
            ? s && !a
              ? { done: !0, value: l.call(t, i, n) }
              : { done: !0, value: e.call(i, t, n) }
            : { done: !1 };
        },
        {
          REPLACE_KEEPS_$0: zt,
          REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Ft,
        }
      ),
      c = d[0],
      u = d[1];
    He(String.prototype, e, c),
      He(
        RegExp.prototype,
        a,
        2 == t
          ? function (e, t) {
              return u.call(e, this, t);
            }
          : function (e) {
              return u.call(e, this);
            }
      );
  }
  n && A(RegExp.prototype[a], "sham", !0);
})("replace", 2, function (e, t, i, n) {
  var a = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
    s = n.REPLACE_KEEPS_$0,
    r = a ? "$" : "$0";
  return [
    function (i, n) {
      var a = u(this),
        s = null == i ? void 0 : i[e];
      return void 0 !== s ? s.call(i, a, n) : t.call(String(a), i, n);
    },
    function (e, n) {
      if ((!a && s) || ("string" == typeof n && -1 === n.indexOf(r))) {
        var l = i(t, e, this, n);
        if (l.done) return l.value;
      }
      var d = y(e),
        c = String(this),
        u = "function" == typeof n;
      u || (n = String(n));
      var h = d.global;
      if (h) {
        var g = d.unicode;
        d.lastIndex = 0;
      }
      for (var v = []; ; ) {
        var p = Xt(d, c);
        if (null === p) break;
        if ((v.push(p), !h)) break;
        "" === String(p[0]) && (d.lastIndex = Kt(c, _(d.lastIndex), g));
      }
      for (var f, m = "", b = 0, w = 0; w < v.length; w++) {
        p = v[w];
        for (
          var R = String(p[0]),
            E = $t(Yt(q(p.index), c.length), 0),
            S = [],
            A = 1;
          A < p.length;
          A++
        )
          S.push(void 0 === (f = p[A]) ? f : String(f));
        var k = p.groups;
        if (u) {
          var L = [R].concat(S, E, c);
          void 0 !== k && L.push(k);
          var x = String(n.apply(void 0, L));
        } else x = o(R, c, E, S, k, n);
        E >= b && ((m += c.slice(b, E) + x), (b = E + R.length));
      }
      return m + c.slice(b);
    },
  ];
  function o(e, i, n, a, s, r) {
    var o = n + e.length,
      l = a.length,
      d = Qt;
    return (
      void 0 !== s && ((s = Je(s)), (d = Jt)),
      t.call(r, d, function (t, r) {
        var d;
        switch (r.charAt(0)) {
          case "$":
            return "$";
          case "&":
            return e;
          case "`":
            return i.slice(0, n);
          case "'":
            return i.slice(o);
          case "<":
            d = s[r.slice(1, -1)];
            break;
          default:
            var c = +r;
            if (0 === c) return t;
            if (c > l) {
              var u = Gt(c / 10);
              return 0 === u
                ? t
                : u <= l
                ? void 0 === a[u - 1]
                  ? r.charAt(1)
                  : a[u - 1] + r.charAt(1)
                : t;
            }
            d = a[c - 1];
        }
        return void 0 === d ? "" : d;
      })
    );
  }
});
const Zt = (e, t) => {
    for (let i in t) e[i] = t[i];
    return e;
  },
  ei = (e, t) => Array.from(e.querySelectorAll(t)),
  ti = (e, t, i) => {
    i ? e.classList.add(t) : e.classList.remove(t);
  },
  ii = (e) => {
    if ("string" == typeof e) {
      if ("null" === e) return null;
      if ("true" === e) return !0;
      if ("false" === e) return !1;
      if (e.match(/^-?[\d\.]+$/)) return parseFloat(e);
    }
    return e;
  },
  ni = (e, t) => {
    e.style.transform = t;
  },
  ai = (e, t) => {
    let i = e.matches || e.matchesSelector || e.msMatchesSelector;
    return !(!i || !i.call(e, t));
  },
  si = (e, t) => {
    if ("function" == typeof e.closest) return e.closest(t);
    for (; e; ) {
      if (ai(e, t)) return e;
      e = e.parentNode;
    }
    return null;
  },
  ri = (e, t, i, n = "") => {
    let a = e.querySelectorAll("." + i);
    for (let t = 0; t < a.length; t++) {
      let i = a[t];
      if (i.parentNode === e) return i;
    }
    let s = document.createElement(t);
    return (s.className = i), (s.innerHTML = n), e.appendChild(s), s;
  },
  oi = (e) => {
    let t = document.createElement("style");
    return (
      (t.type = "text/css"),
      e &&
        e.length > 0 &&
        (t.styleSheet
          ? (t.styleSheet.cssText = e)
          : t.appendChild(document.createTextNode(e))),
      document.head.appendChild(t),
      t
    );
  },
  li = () => {
    let e = {};
    location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, (t) => {
      e[t.split("=").shift()] = t.split("=").pop();
    });
    for (let t in e) {
      let i = e[t];
      e[t] = ii(unescape(i));
    }
    return void 0 !== e.dependencies && delete e.dependencies, e;
  },
  di = (e, t = 0) => {
    if (e) {
      let i,
        n = e.style.height;
      return (
        (e.style.height = "0px"),
        (e.parentNode.style.height = "auto"),
        (i = t - e.parentNode.offsetHeight),
        (e.style.height = n + "px"),
        e.parentNode.style.removeProperty("height"),
        i
      );
    }
    return t;
  },
  ci = navigator.userAgent,
  ui = document.createElement("div"),
  hi =
    /(iphone|ipod|ipad|android)/gi.test(ci) ||
    ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1),
  gi = /chrome/i.test(ci) && !/edge/i.test(ci),
  vi = /android/gi.test(ci),
  pi = "zoom" in ui.style && !hi && (gi || /Version\/[\d\.]+.*Safari/.test(ci)),
  fi =
    "function" == typeof window.history.replaceState && !/PhantomJS/.test(ci);
class mi {
  constructor(e) {
    (this.Reveal = e),
      (this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this));
  }
  shouldPreload(e) {
    let t = this.Reveal.getConfig().preloadIframes;
    return "boolean" != typeof t && (t = e.hasAttribute("data-preload")), t;
  }
  load(e, t = {}) {
    (e.style.display = this.Reveal.getConfig().display),
      ei(
        e,
        "img[data-src], video[data-src], audio[data-src], iframe[data-src]"
      ).forEach((e) => {
        ("IFRAME" !== e.tagName || this.shouldPreload(e)) &&
          (e.setAttribute("src", e.getAttribute("data-src")),
          e.setAttribute("data-lazy-loaded", ""),
          e.removeAttribute("data-src"));
      }),
      ei(e, "video, audio").forEach((e) => {
        let t = 0;
        ei(e, "source[data-src]").forEach((e) => {
          e.setAttribute("src", e.getAttribute("data-src")),
            e.removeAttribute("data-src"),
            e.setAttribute("data-lazy-loaded", ""),
            (t += 1);
        }),
          t > 0 && e.load();
      });
    let i = e.slideBackgroundElement;
    if (i) {
      i.style.display = "block";
      let n = e.slideBackgroundContentElement,
        a = e.getAttribute("data-background-iframe");
      if (!1 === i.hasAttribute("data-loaded")) {
        i.setAttribute("data-loaded", "true");
        let s = e.getAttribute("data-background-image"),
          r = e.getAttribute("data-background-video"),
          o = e.hasAttribute("data-background-video-loop"),
          l = e.hasAttribute("data-background-video-muted");
        if (s) n.style.backgroundImage = "url(" + encodeURI(s) + ")";
        else if (r && !this.Reveal.isSpeakerNotes()) {
          let e = document.createElement("video");
          o && e.setAttribute("loop", ""),
            l && (e.muted = !0),
            hi &&
              ((e.muted = !0),
              (e.autoplay = !0),
              e.setAttribute("playsinline", "")),
            r.split(",").forEach((t) => {
              e.innerHTML += '<source src="' + t + '">';
            }),
            n.appendChild(e);
        } else if (a && !0 !== t.excludeIframes) {
          let e = document.createElement("iframe");
          e.setAttribute("allowfullscreen", ""),
            e.setAttribute("mozallowfullscreen", ""),
            e.setAttribute("webkitallowfullscreen", ""),
            e.setAttribute("allow", "autoplay"),
            e.setAttribute("data-src", a),
            (e.style.width = "100%"),
            (e.style.height = "100%"),
            (e.style.maxHeight = "100%"),
            (e.style.maxWidth = "100%"),
            n.appendChild(e);
        }
      }
      let s = n.querySelector("iframe[data-src]");
      s &&
        this.shouldPreload(i) &&
        !/autoplay=(1|true|yes)/gi.test(a) &&
        s.getAttribute("src") !== a &&
        s.setAttribute("src", a);
    }
  }
  unload(e) {
    e.style.display = "none";
    let t = this.Reveal.getSlideBackground(e);
    t &&
      ((t.style.display = "none"),
      ei(t, "iframe[src]").forEach((e) => {
        e.removeAttribute("src");
      })),
      ei(
        e,
        "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]"
      ).forEach((e) => {
        e.setAttribute("data-src", e.getAttribute("src")),
          e.removeAttribute("src");
      }),
      ei(e, "video[data-lazy-loaded] source[src], audio source[src]").forEach(
        (e) => {
          e.setAttribute("data-src", e.getAttribute("src")),
            e.removeAttribute("src");
        }
      );
  }
  formatEmbeddedContent() {
    let e = (e, t, i) => {
      ei(
        this.Reveal.getSlidesElement(),
        "iframe[" + e + '*="' + t + '"]'
      ).forEach((t) => {
        let n = t.getAttribute(e);
        n &&
          -1 === n.indexOf(i) &&
          t.setAttribute(e, n + (/\?/.test(n) ? "&" : "?") + i);
      });
    };
    e("src", "youtube.com/embed/", "enablejsapi=1"),
      e("data-src", "youtube.com/embed/", "enablejsapi=1"),
      e("src", "player.vimeo.com/", "api=1"),
      e("data-src", "player.vimeo.com/", "api=1");
  }
  startEmbeddedContent(e) {
    e &&
      !this.Reveal.isSpeakerNotes() &&
      (ei(e, 'img[src$=".gif"]').forEach((e) => {
        e.setAttribute("src", e.getAttribute("src"));
      }),
      ei(e, "video, audio").forEach((e) => {
        if (si(e, ".fragment") && !si(e, ".fragment.visible")) return;
        let t = this.Reveal.getConfig().autoPlayMedia;
        if (
          ("boolean" != typeof t &&
            (t =
              e.hasAttribute("data-autoplay") || !!si(e, ".slide-background")),
          t && "function" == typeof e.play)
        )
          if (e.readyState > 1) this.startEmbeddedMedia({ target: e });
          else if (hi) {
            let t = e.play();
            t &&
              "function" == typeof t.catch &&
              !1 === e.controls &&
              t.catch(() => {
                (e.controls = !0),
                  e.addEventListener("play", () => {
                    e.controls = !1;
                  });
              });
          } else
            e.removeEventListener("loadeddata", this.startEmbeddedMedia),
              e.addEventListener("loadeddata", this.startEmbeddedMedia);
      }),
      ei(e, "iframe[src]").forEach((e) => {
        (si(e, ".fragment") && !si(e, ".fragment.visible")) ||
          this.startEmbeddedIframe({ target: e });
      }),
      ei(e, "iframe[data-src]").forEach((e) => {
        (si(e, ".fragment") && !si(e, ".fragment.visible")) ||
          (e.getAttribute("src") !== e.getAttribute("data-src") &&
            (e.removeEventListener("load", this.startEmbeddedIframe),
            e.addEventListener("load", this.startEmbeddedIframe),
            e.setAttribute("src", e.getAttribute("data-src"))));
      }));
  }
  startEmbeddedMedia(e) {
    let t = !!si(e.target, "html"),
      i = !!si(e.target, ".present");
    t && i && ((e.target.currentTime = 0), e.target.play()),
      e.target.removeEventListener("loadeddata", this.startEmbeddedMedia);
  }
  startEmbeddedIframe(e) {
    let t = e.target;
    if (t && t.contentWindow) {
      let i = !!si(e.target, "html"),
        n = !!si(e.target, ".present");
      if (i && n) {
        let e = this.Reveal.getConfig().autoPlayMedia;
        "boolean" != typeof e &&
          (e = t.hasAttribute("data-autoplay") || !!si(t, ".slide-background")),
          /youtube\.com\/embed\//.test(t.getAttribute("src")) && e
            ? t.contentWindow.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                "*"
              )
            : /player\.vimeo\.com\//.test(t.getAttribute("src")) && e
            ? t.contentWindow.postMessage('{"method":"play"}', "*")
            : t.contentWindow.postMessage("slide:start", "*");
      }
    }
  }
  stopEmbeddedContent(e, t = {}) {
    (t = Zt({ unloadIframes: !0 }, t)),
      e &&
        e.parentNode &&
        (ei(e, "video, audio").forEach((e) => {
          e.hasAttribute("data-ignore") ||
            "function" != typeof e.pause ||
            (e.setAttribute("data-paused-by-reveal", ""), e.pause());
        }),
        ei(e, "iframe").forEach((e) => {
          e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"),
            e.removeEventListener("load", this.startEmbeddedIframe);
        }),
        ei(e, 'iframe[src*="youtube.com/embed/"]').forEach((e) => {
          !e.hasAttribute("data-ignore") &&
            e.contentWindow &&
            "function" == typeof e.contentWindow.postMessage &&
            e.contentWindow.postMessage(
              '{"event":"command","func":"pauseVideo","args":""}',
              "*"
            );
        }),
        ei(e, 'iframe[src*="player.vimeo.com/"]').forEach((e) => {
          !e.hasAttribute("data-ignore") &&
            e.contentWindow &&
            "function" == typeof e.contentWindow.postMessage &&
            e.contentWindow.postMessage('{"method":"pause"}', "*");
        }),
        !0 === t.unloadIframes &&
          ei(e, "iframe[data-src]").forEach((e) => {
            e.setAttribute("src", "about:blank"), e.removeAttribute("src");
          }));
  }
}
class bi {
  constructor(e) {
    this.Reveal = e;
  }
  render() {
    (this.element = document.createElement("div")),
      (this.element.className = "slide-number"),
      this.Reveal.getRevealElement().appendChild(this.element);
  }
  configure(e, t) {
    let i = "none";
    e.slideNumber &&
      !this.Reveal.isPrintingPDF() &&
      ("all" === e.showSlideNumber ||
        ("speaker" === e.showSlideNumber && this.Reveal.isSpeakerNotes())) &&
      (i = "block"),
      (this.element.style.display = i);
  }
  update() {
    this.Reveal.getConfig().slideNumber &&
      this.element &&
      (this.element.innerHTML = this.getSlideNumber());
  }
  getSlideNumber(e = this.Reveal.getCurrentSlide()) {
    let t,
      i = this.Reveal.getConfig(),
      n = "h.v";
    if ("function" == typeof i.slideNumber) t = i.slideNumber(e);
    else
      switch (
        ("string" == typeof i.slideNumber && (n = i.slideNumber),
        /c/.test(n) ||
          1 !== this.Reveal.getHorizontalSlides().length ||
          (n = "c"),
        (t = []),
        n)
      ) {
        case "c":
          t.push(this.Reveal.getSlidePastCount(e) + 1);
          break;
        case "c/t":
          t.push(
            this.Reveal.getSlidePastCount(e) + 1,
            "/",
            this.Reveal.getTotalSlides()
          );
          break;
        default:
          let i = this.Reveal.getIndices(e);
          t.push(i.h + 1);
          let a = "h/v" === n ? "/" : ".";
          this.Reveal.isVerticalSlide(e) && t.push(a, i.v + 1);
      }
    let a = "#" + this.Reveal.location.getHash(e);
    return this.formatNumber(t[0], t[1], t[2], a);
  }
  formatNumber(e, t, i, n = "#" + this.Reveal.location.getHash()) {
    return "number" != typeof i || isNaN(i)
      ? '<a href="'
          .concat(n, '">\n\t\t\t\t\t<span class="slide-number-a">')
          .concat(e, "</span>\n\t\t\t\t\t</a>")
      : '<a href="'
          .concat(n, '">\n\t\t\t\t\t<span class="slide-number-a">')
          .concat(e, '</span>\n\t\t\t\t\t<span class="slide-number-delimiter">')
          .concat(t, '</span>\n\t\t\t\t\t<span class="slide-number-b">')
          .concat(i, "</span>\n\t\t\t\t\t</a>");
  }
}
const yi = (e) => {
  let t = e.match(/^#([0-9a-f]{3})$/i);
  if (t && t[1])
    return (
      (t = t[1]),
      {
        r: 17 * parseInt(t.charAt(0), 16),
        g: 17 * parseInt(t.charAt(1), 16),
        b: 17 * parseInt(t.charAt(2), 16),
      }
    );
  let i = e.match(/^#([0-9a-f]{6})$/i);
  if (i && i[1])
    return (
      (i = i[1]),
      {
        r: parseInt(i.substr(0, 2), 16),
        g: parseInt(i.substr(2, 2), 16),
        b: parseInt(i.substr(4, 2), 16),
      }
    );
  let n = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
  if (n)
    return {
      r: parseInt(n[1], 10),
      g: parseInt(n[2], 10),
      b: parseInt(n[3], 10),
    };
  let a = e.match(
    /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i
  );
  return a
    ? {
        r: parseInt(a[1], 10),
        g: parseInt(a[2], 10),
        b: parseInt(a[3], 10),
        a: parseFloat(a[4]),
      }
    : null;
};
class wi {
  constructor(e) {
    this.Reveal = e;
  }
  render() {
    (this.element = document.createElement("div")),
      (this.element.className = "backgrounds"),
      this.Reveal.getRevealElement().appendChild(this.element);
  }
  create() {
    this.Reveal.isPrintingPDF();
    (this.element.innerHTML = ""),
      this.element.classList.add("no-transition"),
      this.Reveal.getHorizontalSlides().forEach((e) => {
        let t = this.createBackground(e, this.element);
        ei(e, "section").forEach((e) => {
          this.createBackground(e, t), t.classList.add("stack");
        });
      }),
      this.Reveal.getConfig().parallaxBackgroundImage
        ? ((this.element.style.backgroundImage =
            'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")'),
          (this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize),
          (this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat),
          (this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition),
          setTimeout(() => {
            this.Reveal.getRevealElement().classList.add(
              "has-parallax-background"
            );
          }, 1))
        : ((this.element.style.backgroundImage = ""),
          this.Reveal.getRevealElement().classList.remove(
            "has-parallax-background"
          ));
  }
  createBackground(e, t) {
    let i = document.createElement("div");
    i.className =
      "slide-background " + e.className.replace(/present|past|future/, "");
    let n = document.createElement("div");
    return (
      (n.className = "slide-background-content"),
      i.appendChild(n),
      t.appendChild(i),
      (e.slideBackgroundElement = i),
      (e.slideBackgroundContentElement = n),
      this.sync(e),
      i
    );
  }
  sync(e) {
    let t = e.slideBackgroundElement,
      i = e.slideBackgroundContentElement;
    e.classList.remove("has-dark-background"),
      e.classList.remove("has-light-background"),
      t.removeAttribute("data-loaded"),
      t.removeAttribute("data-background-hash"),
      t.removeAttribute("data-background-size"),
      t.removeAttribute("data-background-transition"),
      (t.style.backgroundColor = ""),
      (i.style.backgroundSize = ""),
      (i.style.backgroundRepeat = ""),
      (i.style.backgroundPosition = ""),
      (i.style.backgroundImage = ""),
      (i.style.opacity = ""),
      (i.innerHTML = "");
    let n = {
      background: e.getAttribute("data-background"),
      backgroundSize: e.getAttribute("data-background-size"),
      backgroundImage: e.getAttribute("data-background-image"),
      backgroundVideo: e.getAttribute("data-background-video"),
      backgroundIframe: e.getAttribute("data-background-iframe"),
      backgroundColor: e.getAttribute("data-background-color"),
      backgroundRepeat: e.getAttribute("data-background-repeat"),
      backgroundPosition: e.getAttribute("data-background-position"),
      backgroundTransition: e.getAttribute("data-background-transition"),
      backgroundOpacity: e.getAttribute("data-background-opacity"),
    };
    n.background &&
      (/^(http|file|\/\/)/gi.test(n.background) ||
      /\.(svg|png|jpg|jpeg|gif|bmp)([?#\s]|$)/gi.test(n.background)
        ? e.setAttribute("data-background-image", n.background)
        : (t.style.background = n.background)),
      (n.background ||
        n.backgroundColor ||
        n.backgroundImage ||
        n.backgroundVideo ||
        n.backgroundIframe) &&
        t.setAttribute(
          "data-background-hash",
          n.background +
            n.backgroundSize +
            n.backgroundImage +
            n.backgroundVideo +
            n.backgroundIframe +
            n.backgroundColor +
            n.backgroundRepeat +
            n.backgroundPosition +
            n.backgroundTransition +
            n.backgroundOpacity
        ),
      n.backgroundSize &&
        t.setAttribute("data-background-size", n.backgroundSize),
      n.backgroundColor && (t.style.backgroundColor = n.backgroundColor),
      n.backgroundTransition &&
        t.setAttribute("data-background-transition", n.backgroundTransition),
      e.hasAttribute("data-preload") && t.setAttribute("data-preload", ""),
      n.backgroundSize && (i.style.backgroundSize = n.backgroundSize),
      n.backgroundRepeat && (i.style.backgroundRepeat = n.backgroundRepeat),
      n.backgroundPosition &&
        (i.style.backgroundPosition = n.backgroundPosition),
      n.backgroundOpacity && (i.style.opacity = n.backgroundOpacity);
    let a = n.backgroundColor;
    if (!a) {
      let e = window.getComputedStyle(t);
      e && e.backgroundColor && (a = e.backgroundColor);
    }
    if (a) {
      let t = yi(a);
      t &&
        0 !== t.a &&
        ("string" == typeof (s = a) && (s = yi(s)),
        (s ? (299 * s.r + 587 * s.g + 114 * s.b) / 1e3 : null) < 128
          ? e.classList.add("has-dark-background")
          : e.classList.add("has-light-background"));
    }
    var s;
  }
  update(e = !1) {
    let t = this.Reveal.getCurrentSlide(),
      i = this.Reveal.getIndices(),
      n = null,
      a = this.Reveal.getConfig().rtl ? "future" : "past",
      s = this.Reveal.getConfig().rtl ? "past" : "future";
    if (
      (Array.from(this.element.childNodes).forEach((t, r) => {
        t.classList.remove("past", "present", "future"),
          r < i.h
            ? t.classList.add(a)
            : r > i.h
            ? t.classList.add(s)
            : (t.classList.add("present"), (n = t)),
          (e || r === i.h) &&
            ei(t, ".slide-background").forEach((e, t) => {
              e.classList.remove("past", "present", "future"),
                t < i.v
                  ? e.classList.add("past")
                  : t > i.v
                  ? e.classList.add("future")
                  : (e.classList.add("present"), r === i.h && (n = e));
            });
      }),
      this.previousBackground &&
        this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, {
          unloadIframes: !this.Reveal.slideContent.shouldPreload(
            this.previousBackground
          ),
        }),
      n)
    ) {
      this.Reveal.slideContent.startEmbeddedContent(n);
      let e = n.querySelector(".slide-background-content");
      if (e) {
        let t = e.style.backgroundImage || "";
        /\.gif/i.test(t) &&
          ((e.style.backgroundImage = ""),
          window.getComputedStyle(e).opacity,
          (e.style.backgroundImage = t));
      }
      let t = this.previousBackground
          ? this.previousBackground.getAttribute("data-background-hash")
          : null,
        i = n.getAttribute("data-background-hash");
      i &&
        i === t &&
        n !== this.previousBackground &&
        this.element.classList.add("no-transition"),
        (this.previousBackground = n);
    }
    t &&
      ["has-light-background", "has-dark-background"].forEach((e) => {
        t.classList.contains(e)
          ? this.Reveal.getRevealElement().classList.add(e)
          : this.Reveal.getRevealElement().classList.remove(e);
      }, this),
      setTimeout(() => {
        this.element.classList.remove("no-transition");
      }, 1);
  }
  updateParallax() {
    let e = this.Reveal.getIndices();
    if (this.Reveal.getConfig().parallaxBackgroundImage) {
      let t,
        i,
        n = this.Reveal.getHorizontalSlides(),
        a = this.Reveal.getVerticalSlides(),
        s = this.element.style.backgroundSize.split(" ");
      1 === s.length
        ? (t = i = parseInt(s[0], 10))
        : ((t = parseInt(s[0], 10)), (i = parseInt(s[1], 10)));
      let r,
        o,
        l = this.element.offsetWidth,
        d = n.length;
      (r =
        "number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal
          ? this.Reveal.getConfig().parallaxBackgroundHorizontal
          : d > 1
          ? (t - l) / (d - 1)
          : 0),
        (o = r * e.h * -1);
      let c,
        u,
        h = this.element.offsetHeight,
        g = a.length;
      (c =
        "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical
          ? this.Reveal.getConfig().parallaxBackgroundVertical
          : (i - h) / (g - 1)),
        (u = g > 0 ? c * e.v : 0),
        (this.element.style.backgroundPosition = o + "px " + -u + "px");
    }
  }
}
let Ri = 0;
class Ei {
  constructor(e) {
    this.Reveal = e;
  }
  run(e, t) {
    if (
      (this.reset(),
      e.hasAttribute("data-auto-animate") &&
        t.hasAttribute("data-auto-animate"))
    ) {
      this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || oi();
      let i = this.getAutoAnimateOptions(t);
      (e.dataset.autoAnimate = "pending"), (t.dataset.autoAnimate = "pending");
      let n = this.Reveal.getSlides();
      i.slideDirection = n.indexOf(t) > n.indexOf(e) ? "forward" : "backward";
      let a = this.getAutoAnimatableElements(e, t).map((e) =>
        this.autoAnimateElements(e.from, e.to, e.options || {}, i, Ri++)
      );
      if (
        "false" !== t.dataset.autoAnimateUnmatched &&
        !0 === this.Reveal.getConfig().autoAnimateUnmatched
      ) {
        let e = 0.8 * i.duration,
          n = 0.2 * i.duration;
        this.getUnmatchedAutoAnimateElements(t).forEach((e) => {
          let t = this.getAutoAnimateOptions(e, i),
            n = "unmatched";
          (t.duration === i.duration && t.delay === i.delay) ||
            ((n = "unmatched-" + Ri++),
            a.push(
              '[data-auto-animate="running"] [data-auto-animate-target="'
                .concat(n, '"] { transition: opacity ')
                .concat(t.duration, "s ease ")
                .concat(t.delay, "s; }")
            )),
            (e.dataset.autoAnimateTarget = n);
        }, this),
          a.push(
            '[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity '
              .concat(e, "s ease ")
              .concat(n, "s; }")
          );
      }
      (this.autoAnimateStyleSheet.innerHTML = a.join("")),
        requestAnimationFrame(() => {
          this.autoAnimateStyleSheet &&
            (getComputedStyle(this.autoAnimateStyleSheet).fontWeight,
            (t.dataset.autoAnimate = "running"));
        }),
        this.Reveal.dispatchEvent({
          type: "autoanimate",
          data: { fromSlide: e, toSlide: t, sheet: this.autoAnimateStyleSheet },
        });
    }
  }
  reset() {
    ei(
      this.Reveal.getRevealElement(),
      '[data-auto-animate]:not([data-auto-animate=""])'
    ).forEach((e) => {
      e.dataset.autoAnimate = "";
    }),
      ei(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach(
        (e) => {
          delete e.dataset.autoAnimateTarget;
        }
      ),
      this.autoAnimateStyleSheet &&
        this.autoAnimateStyleSheet.parentNode &&
        (this.autoAnimateStyleSheet.parentNode.removeChild(
          this.autoAnimateStyleSheet
        ),
        (this.autoAnimateStyleSheet = null));
  }
  autoAnimateElements(e, t, i, n, a) {
    (e.dataset.autoAnimateTarget = ""), (t.dataset.autoAnimateTarget = a);
    let s = this.getAutoAnimateOptions(t, n);
    void 0 !== i.delay && (s.delay = i.delay),
      void 0 !== i.duration && (s.duration = i.duration),
      void 0 !== i.easing && (s.easing = i.easing);
    let r = this.getAutoAnimatableProperties("from", e, i),
      o = this.getAutoAnimatableProperties("to", t, i);
    if (
      t.classList.contains("fragment") &&
      (delete o.styles.opacity, e.classList.contains("fragment"))
    ) {
      (e.className.match(kt) || [""])[0] ===
        (t.className.match(kt) || [""])[0] &&
        "forward" === n.slideDirection &&
        t.classList.add("visible", "disabled");
    }
    if (!1 !== i.translate || !1 !== i.scale) {
      let e = this.Reveal.getScale(),
        t = {
          x: (r.x - o.x) / e,
          y: (r.y - o.y) / e,
          scaleX: r.width / o.width,
          scaleY: r.height / o.height,
        };
      (t.x = Math.round(1e3 * t.x) / 1e3),
        (t.y = Math.round(1e3 * t.y) / 1e3),
        (t.scaleX = Math.round(1e3 * t.scaleX) / 1e3),
        (t.scaleX = Math.round(1e3 * t.scaleX) / 1e3);
      let n = !1 !== i.translate && (0 !== t.x || 0 !== t.y),
        a = !1 !== i.scale && (0 !== t.scaleX || 0 !== t.scaleY);
      if (n || a) {
        let e = [];
        n && e.push("translate(".concat(t.x, "px, ").concat(t.y, "px)")),
          a && e.push("scale(".concat(t.scaleX, ", ").concat(t.scaleY, ")")),
          (r.styles.transform = e.join(" ")),
          (r.styles["transform-origin"] = "top left"),
          (o.styles.transform = "none");
      }
    }
    for (let e in o.styles) {
      const t = o.styles[e],
        i = r.styles[e];
      t === i
        ? delete o.styles[e]
        : (!0 === t.explicitValue && (o.styles[e] = t.value),
          !0 === i.explicitValue && (r.styles[e] = i.value));
    }
    let l = "",
      d = Object.keys(o.styles);
    if (d.length > 0) {
      (r.styles.transition = "none"),
        (o.styles.transition = "all "
          .concat(s.duration, "s ")
          .concat(s.easing, " ")
          .concat(s.delay, "s")),
        (o.styles["transition-property"] = d.join(", ")),
        (o.styles["will-change"] = d.join(", ")),
        (l =
          '[data-auto-animate-target="' +
          a +
          '"] {' +
          Object.keys(r.styles)
            .map((e) => e + ": " + r.styles[e] + " !important;")
            .join("") +
          '}[data-auto-animate="running"] [data-auto-animate-target="' +
          a +
          '"] {' +
          Object.keys(o.styles)
            .map((e) => e + ": " + o.styles[e] + " !important;")
            .join("") +
          "}");
    }
    return l;
  }
  getAutoAnimateOptions(e, t) {
    let i = {
      easing: this.Reveal.getConfig().autoAnimateEasing,
      duration: this.Reveal.getConfig().autoAnimateDuration,
      delay: 0,
    };
    if (((i = Zt(i, t)), e.parentNode)) {
      let t = si(e.parentNode, "[data-auto-animate-target]");
      t && (i = this.getAutoAnimateOptions(t, i));
    }
    return (
      e.dataset.autoAnimateEasing && (i.easing = e.dataset.autoAnimateEasing),
      e.dataset.autoAnimateDuration &&
        (i.duration = parseFloat(e.dataset.autoAnimateDuration)),
      e.dataset.autoAnimateDelay &&
        (i.delay = parseFloat(e.dataset.autoAnimateDelay)),
      i
    );
  }
  getAutoAnimatableProperties(e, t, i) {
    let n = this.Reveal.getConfig(),
      a = { styles: [] };
    if (!1 !== i.translate || !1 !== i.scale) {
      let e;
      if ("function" == typeof i.measure) e = i.measure(t);
      else if (n.center) e = t.getBoundingClientRect();
      else {
        let i = this.Reveal.getScale();
        e = {
          x: t.offsetLeft * i,
          y: t.offsetTop * i,
          width: t.offsetWidth * i,
          height: t.offsetHeight * i,
        };
      }
      (a.x = e.x), (a.y = e.y), (a.width = e.width), (a.height = e.height);
    }
    const s = getComputedStyle(t);
    return (
      (i.styles || n.autoAnimateStyles).forEach((t) => {
        let i;
        "string" == typeof t && (t = { property: t }),
          (i =
            void 0 !== t.from && "from" === e
              ? { value: t.from, explicitValue: !0 }
              : void 0 !== t.to && "to" === e
              ? { value: t.to, explicitValue: !0 }
              : s[t.property]),
          "" !== i && (a.styles[t.property] = i);
      }),
      a
    );
  }
  getAutoAnimatableElements(e, t) {
    let i = ("function" == typeof this.Reveal.getConfig().autoAnimateMatcher
        ? this.Reveal.getConfig().autoAnimateMatcher
        : this.getAutoAnimatePairs
      ).call(this, e, t),
      n = [];
    return i.filter((e, t) => {
      if (-1 === n.indexOf(e.to)) return n.push(e.to), !0;
    });
  }
  getAutoAnimatePairs(e, t) {
    let i = [];
    const n = "h1, h2, h3, h4, h5, h6, p, li";
    return (
      this.findAutoAnimateMatches(
        i,
        e,
        t,
        "[data-id]",
        (e) => e.nodeName + ":::" + e.getAttribute("data-id")
      ),
      this.findAutoAnimateMatches(
        i,
        e,
        t,
        n,
        (e) => e.nodeName + ":::" + e.innerText
      ),
      this.findAutoAnimateMatches(
        i,
        e,
        t,
        "img, video, iframe",
        (e) =>
          e.nodeName +
          ":::" +
          (e.getAttribute("src") || e.getAttribute("data-src"))
      ),
      this.findAutoAnimateMatches(
        i,
        e,
        t,
        "pre",
        (e) => e.nodeName + ":::" + e.innerText
      ),
      i.forEach((e) => {
        ai(e.from, n)
          ? (e.options = { scale: !1 })
          : ai(e.from, "pre") &&
            ((e.options = { scale: !1, styles: ["width", "height"] }),
            this.findAutoAnimateMatches(
              i,
              e.from,
              e.to,
              ".hljs .hljs-ln-code",
              (e) => e.textContent,
              {
                scale: !1,
                styles: [],
                measure: this.getLocalBoundingBox.bind(this),
              }
            ),
            this.findAutoAnimateMatches(
              i,
              e.from,
              e.to,
              ".hljs .hljs-ln-line[data-line-number]",
              (e) => e.getAttribute("data-line-number"),
              {
                scale: !1,
                styles: ["width"],
                measure: this.getLocalBoundingBox.bind(this),
              }
            ));
      }, this),
      i
    );
  }
  getLocalBoundingBox(e) {
    const t = this.Reveal.getScale();
    return {
      x: Math.round(e.offsetLeft * t * 100) / 100,
      y: Math.round(e.offsetTop * t * 100) / 100,
      width: Math.round(e.offsetWidth * t * 100) / 100,
      height: Math.round(e.offsetHeight * t * 100) / 100,
    };
  }
  findAutoAnimateMatches(e, t, i, n, a, s) {
    let r = {},
      o = {};
    [].slice.call(t.querySelectorAll(n)).forEach((e, t) => {
      const i = a(e);
      "string" == typeof i && i.length && ((r[i] = r[i] || []), r[i].push(e));
    }),
      [].slice.call(i.querySelectorAll(n)).forEach((t, i) => {
        const n = a(t);
        let l;
        if (((o[n] = o[n] || []), o[n].push(t), r[n])) {
          const e = o[n].length - 1,
            t = r[n].length - 1;
          r[n][e]
            ? ((l = r[n][e]), (r[n][e] = null))
            : r[n][t] && ((l = r[n][t]), (r[n][t] = null));
        }
        l && e.push({ from: l, to: t, options: s });
      });
  }
  getUnmatchedAutoAnimateElements(e) {
    return [].slice.call(e.children).reduce((e, t) => {
      const i = t.querySelector("[data-auto-animate-target]");
      return (
        t.hasAttribute("data-auto-animate-target") || i || e.push(t),
        t.querySelector("[data-auto-animate-target]") &&
          (e = e.concat(this.getUnmatchedAutoAnimateElements(t))),
        e
      );
    }, []);
  }
}
class Si {
  constructor(e) {
    this.Reveal = e;
  }
  configure(e, t) {
    !1 === e.fragments ? this.disable() : !1 === t.fragments && this.enable();
  }
  disable() {
    ei(this.Reveal.getSlidesElement(), ".fragment").forEach((e) => {
      e.classList.add("visible"), e.classList.remove("current-fragment");
    });
  }
  enable() {
    ei(this.Reveal.getSlidesElement(), ".fragment").forEach((e) => {
      e.classList.remove("visible"), e.classList.remove("current-fragment");
    });
  }
  availableRoutes() {
    let e = this.Reveal.getCurrentSlide();
    if (e && this.Reveal.getConfig().fragments) {
      let t = e.querySelectorAll(".fragment:not(.disabled)"),
        i = e.querySelectorAll(".fragment:not(.disabled):not(.visible)");
      return { prev: t.length - i.length > 0, next: !!i.length };
    }
    return { prev: !1, next: !1 };
  }
  sort(e, t = !1) {
    e = Array.from(e);
    let i = [],
      n = [],
      a = [];
    e.forEach((e) => {
      if (e.hasAttribute("data-fragment-index")) {
        let t = parseInt(e.getAttribute("data-fragment-index"), 10);
        i[t] || (i[t] = []), i[t].push(e);
      } else n.push([e]);
    }),
      (i = i.concat(n));
    let s = 0;
    return (
      i.forEach((e) => {
        e.forEach((e) => {
          a.push(e), e.setAttribute("data-fragment-index", s);
        }),
          s++;
      }),
      !0 === t ? i : a
    );
  }
  sortAll() {
    this.Reveal.getHorizontalSlides().forEach((e) => {
      let t = ei(e, "section");
      t.forEach((e, t) => {
        this.sort(e.querySelectorAll(".fragment"));
      }, this),
        0 === t.length && this.sort(e.querySelectorAll(".fragment"));
    });
  }
  update(e, t) {
    let i = { shown: [], hidden: [] },
      n = this.Reveal.getCurrentSlide();
    if (
      n &&
      this.Reveal.getConfig().fragments &&
      (t = t || this.sort(n.querySelectorAll(".fragment"))).length
    ) {
      let a = 0;
      if ("number" != typeof e) {
        let t = this.sort(n.querySelectorAll(".fragment.visible")).pop();
        t && (e = parseInt(t.getAttribute("data-fragment-index") || 0, 10));
      }
      Array.from(t).forEach((t, n) => {
        if (
          (t.hasAttribute("data-fragment-index") &&
            (n = parseInt(t.getAttribute("data-fragment-index"), 10)),
          (a = Math.max(a, n)),
          n <= e)
        ) {
          let a = t.classList.contains("visible");
          t.classList.add("visible"),
            t.classList.remove("current-fragment"),
            n === e &&
              (this.Reveal.announceStatus(this.Reveal.getStatusText(t)),
              t.classList.add("current-fragment"),
              this.Reveal.slideContent.startEmbeddedContent(t)),
            a ||
              (i.shown.push(t),
              this.Reveal.dispatchEvent({
                target: t,
                type: "visible",
                bubbles: !1,
              }));
        } else {
          let e = t.classList.contains("visible");
          t.classList.remove("visible"),
            t.classList.remove("current-fragment"),
            e &&
              (i.hidden.push(t),
              this.Reveal.dispatchEvent({
                target: t,
                type: "hidden",
                bubbles: !1,
              }));
        }
      }),
        (e = "number" == typeof e ? e : -1),
        (e = Math.max(Math.min(e, a), -1)),
        n.setAttribute("data-fragment", e);
    }
    return i;
  }
  sync(e = this.Reveal.getCurrentSlide()) {
    return this.sort(e.querySelectorAll(".fragment"));
  }
  goto(e, t = 0) {
    let i = this.Reveal.getCurrentSlide();
    if (i && this.Reveal.getConfig().fragments) {
      let n = this.sort(i.querySelectorAll(".fragment:not(.disabled)"));
      if (n.length) {
        if ("number" != typeof e) {
          let t = this.sort(
            i.querySelectorAll(".fragment:not(.disabled).visible")
          ).pop();
          e = t ? parseInt(t.getAttribute("data-fragment-index") || 0, 10) : -1;
        }
        e += t;
        let a = this.update(e, n);
        return (
          a.hidden.length &&
            this.Reveal.dispatchEvent({
              type: "fragmenthidden",
              data: { fragment: a.hidden[0], fragments: a.hidden },
            }),
          a.shown.length &&
            this.Reveal.dispatchEvent({
              type: "fragmentshown",
              data: { fragment: a.shown[0], fragments: a.shown },
            }),
          this.Reveal.controls.update(),
          this.Reveal.progress.update(),
          this.Reveal.getConfig().fragmentInURL &&
            this.Reveal.location.writeURL(),
          !(!a.shown.length && !a.hidden.length)
        );
      }
    }
    return !1;
  }
  next() {
    return this.goto(null, 1);
  }
  prev() {
    return this.goto(null, -1);
  }
}
class Ai {
  constructor(e) {
    (this.Reveal = e),
      (this.active = !1),
      (this.onSlideClicked = this.onSlideClicked.bind(this));
  }
  activate() {
    if (this.Reveal.getConfig().overview && !this.isActive()) {
      (this.active = !0),
        this.Reveal.getRevealElement().classList.add("overview"),
        this.Reveal.cancelAutoSlide(),
        this.Reveal.getSlidesElement().appendChild(
          this.Reveal.getBackgroundsElement()
        ),
        ei(this.Reveal.getRevealElement(), ".slides section").forEach((e) => {
          e.classList.contains("stack") ||
            e.addEventListener("click", this.onSlideClicked, !0);
        });
      const e = 70,
        t = this.Reveal.getComputedSlideSize();
      (this.overviewSlideWidth = t.width + e),
        (this.overviewSlideHeight = t.height + e),
        this.Reveal.getConfig().rtl &&
          (this.overviewSlideWidth = -this.overviewSlideWidth),
        this.Reveal.updateSlidesVisibility(),
        this.layout(),
        this.update(),
        this.Reveal.layout();
      const i = this.Reveal.getIndices();
      this.Reveal.dispatchEvent({
        type: "overviewshown",
        data: {
          indexh: i.h,
          indexv: i.v,
          currentSlide: this.Reveal.getCurrentSlide(),
        },
      });
    }
  }
  layout() {
    this.Reveal.getHorizontalSlides().forEach((e, t) => {
      e.setAttribute("data-index-h", t),
        ni(e, "translate3d(" + t * this.overviewSlideWidth + "px, 0, 0)"),
        e.classList.contains("stack") &&
          ei(e, "section").forEach((e, i) => {
            e.setAttribute("data-index-h", t),
              e.setAttribute("data-index-v", i),
              ni(
                e,
                "translate3d(0, " + i * this.overviewSlideHeight + "px, 0)"
              );
          });
    }),
      Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(
        (e, t) => {
          ni(e, "translate3d(" + t * this.overviewSlideWidth + "px, 0, 0)"),
            ei(e, ".slide-background").forEach((e, t) => {
              ni(
                e,
                "translate3d(0, " + t * this.overviewSlideHeight + "px, 0)"
              );
            });
        }
      );
  }
  update() {
    const e = Math.min(window.innerWidth, window.innerHeight),
      t = Math.max(e / 5, 150) / e,
      i = this.Reveal.getIndices();
    this.Reveal.transformSlides({
      overview: [
        "scale(" + t + ")",
        "translateX(" + -i.h * this.overviewSlideWidth + "px)",
        "translateY(" + -i.v * this.overviewSlideHeight + "px)",
      ].join(" "),
    });
  }
  deactivate() {
    if (this.Reveal.getConfig().overview) {
      (this.active = !1),
        this.Reveal.getRevealElement().classList.remove("overview"),
        this.Reveal.getRevealElement().classList.add("overview-deactivating"),
        setTimeout(() => {
          this.Reveal.getRevealElement().classList.remove(
            "overview-deactivating"
          );
        }, 1),
        this.Reveal.getRevealElement().appendChild(
          this.Reveal.getBackgroundsElement()
        ),
        ei(this.Reveal.getRevealElement(), ".slides section").forEach((e) => {
          ni(e, ""), e.removeEventListener("click", this.onSlideClicked, !0);
        }),
        ei(this.Reveal.getBackgroundsElement(), ".slide-background").forEach(
          (e) => {
            ni(e, "");
          }
        ),
        this.Reveal.transformSlides({ overview: "" });
      const e = this.Reveal.getIndices();
      this.Reveal.slide(e.h, e.v),
        this.Reveal.layout(),
        this.Reveal.cueAutoSlide(),
        this.Reveal.dispatchEvent({
          type: "overviewhidden",
          data: {
            indexh: e.h,
            indexv: e.v,
            currentSlide: this.Reveal.getCurrentSlide(),
          },
        });
    }
  }
  toggle(e) {
    "boolean" == typeof e
      ? e
        ? this.activate()
        : this.deactivate()
      : this.isActive()
      ? this.deactivate()
      : this.activate();
  }
  isActive() {
    return this.active;
  }
  onSlideClicked(e) {
    if (this.isActive()) {
      e.preventDefault();
      let t = e.target;
      for (; t && !t.nodeName.match(/section/gi); ) t = t.parentNode;
      if (
        t &&
        !t.classList.contains("disabled") &&
        (this.deactivate(), t.nodeName.match(/section/gi))
      ) {
        let e = parseInt(t.getAttribute("data-index-h"), 10),
          i = parseInt(t.getAttribute("data-index-v"), 10);
        this.Reveal.slide(e, i);
      }
    }
  }
}
class ki {
  constructor(e) {
    (this.Reveal = e),
      (this.shortcuts = {}),
      (this.bindings = {}),
      (this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this)),
      (this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this));
  }
  configure(e, t) {
    "linear" === e.navigationMode
      ? ((this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] =
          "Next slide"),
        (this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] =
          "Previous slide"))
      : ((this.shortcuts["N  ,  SPACE"] = "Next slide"),
        (this.shortcuts.P = "Previous slide"),
        (this.shortcuts["&#8592;  ,  H"] = "Navigate left"),
        (this.shortcuts["&#8594;  ,  L"] = "Navigate right"),
        (this.shortcuts["&#8593;  ,  K"] = "Navigate up"),
        (this.shortcuts["&#8595;  ,  J"] = "Navigate down")),
      (this.shortcuts["Home  ,  Shift &#8592;"] = "First slide"),
      (this.shortcuts["End  ,  Shift &#8594;"] = "Last slide"),
      (this.shortcuts["B  ,  ."] = "Pause"),
      (this.shortcuts.F = "Fullscreen"),
      (this.shortcuts["ESC, O"] = "Slide overview");
  }
  bind() {
    document.addEventListener("keydown", this.onDocumentKeyDown, !1),
      document.addEventListener("keypress", this.onDocumentKeyPress, !1);
  }
  unbind() {
    document.removeEventListener("keydown", this.onDocumentKeyDown, !1),
      document.removeEventListener("keypress", this.onDocumentKeyPress, !1);
  }
  addKeyBinding(e, t) {
    "object" == typeof e && e.keyCode
      ? (this.bindings[e.keyCode] = {
          callback: t,
          key: e.key,
          description: e.description,
        })
      : (this.bindings[e] = { callback: t, key: null, description: null });
  }
  removeKeyBinding(e) {
    delete this.bindings[e];
  }
  triggerKey(e) {
    this.onDocumentKeyDown({ keyCode: e });
  }
  registerKeyboardShortcut(e, t) {
    this.shortcuts[e] = t;
  }
  getShortcuts() {
    return this.shortcuts;
  }
  getBindings() {
    return this.bindings;
  }
  onDocumentKeyPress(e) {
    e.shiftKey && 63 === e.charCode && this.Reveal.toggleHelp();
  }
  onDocumentKeyDown(e) {
    let t = this.Reveal.getConfig();
    if (
      "function" == typeof t.keyboardCondition &&
      !1 === t.keyboardCondition(e)
    )
      return !0;
    if ("focused" === t.keyboardCondition && !this.Reveal.isFocused())
      return !0;
    let i = e.keyCode,
      n = !this.Reveal.isAutoSliding();
    this.Reveal.onUserInput(e);
    let a =
        document.activeElement &&
        !0 === document.activeElement.isContentEditable,
      s =
        document.activeElement &&
        document.activeElement.tagName &&
        /input|textarea/i.test(document.activeElement.tagName),
      r =
        document.activeElement &&
        document.activeElement.className &&
        /speaker-notes/i.test(document.activeElement.className),
      o = e.shiftKey && 32 === e.keyCode,
      l = e.shiftKey && 37 === i,
      d = e.shiftKey && 39 === i,
      c = !o && !l && !d && (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey);
    if (a || s || r || c) return;
    let u,
      h = [66, 86, 190, 191];
    if ("object" == typeof t.keyboard)
      for (u in t.keyboard)
        "togglePause" === t.keyboard[u] && h.push(parseInt(u, 10));
    if (this.Reveal.isPaused() && -1 === h.indexOf(i)) return !1;
    let g =
        "linear" === t.navigationMode ||
        !this.Reveal.hasHorizontalSlides() ||
        !this.Reveal.hasVerticalSlides(),
      v = !1;
    if ("object" == typeof t.keyboard)
      for (u in t.keyboard)
        if (parseInt(u, 10) === i) {
          let i = t.keyboard[u];
          "function" == typeof i
            ? i.apply(null, [e])
            : "string" == typeof i &&
              "function" == typeof this.Reveal[i] &&
              this.Reveal[i].call(),
            (v = !0);
        }
    if (!1 === v)
      for (u in this.bindings)
        if (parseInt(u, 10) === i) {
          let t = this.bindings[u].callback;
          "function" == typeof t
            ? t.apply(null, [e])
            : "string" == typeof t &&
              "function" == typeof this.Reveal[t] &&
              this.Reveal[t].call(),
            (v = !0);
        }
    !1 === v &&
      ((v = !0),
      80 === i || 33 === i
        ? this.Reveal.prev()
        : 78 === i || 34 === i
        ? this.Reveal.next()
        : 72 === i || 37 === i
        ? l
          ? this.Reveal.slide(0)
          : !this.Reveal.overview.isActive() && g
          ? this.Reveal.prev()
          : this.Reveal.left()
        : 76 === i || 39 === i
        ? d
          ? this.Reveal.slide(Number.MAX_VALUE)
          : !this.Reveal.overview.isActive() && g
          ? this.Reveal.next()
          : this.Reveal.right()
        : 75 === i || 38 === i
        ? !this.Reveal.overview.isActive() && g
          ? this.Reveal.prev()
          : this.Reveal.up()
        : 74 === i || 40 === i
        ? !this.Reveal.overview.isActive() && g
          ? this.Reveal.next()
          : this.Reveal.down()
        : 36 === i
        ? this.Reveal.slide(0)
        : 35 === i
        ? this.Reveal.slide(Number.MAX_VALUE)
        : 32 === i
        ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(),
          e.shiftKey ? this.Reveal.prev() : this.Reveal.next())
        : 58 === i || 59 === i || 66 === i || 86 === i || 190 === i || 191 === i
        ? this.Reveal.togglePause()
        : 70 === i
        ? ((e) => {
            let t =
              (e = e || document.documentElement).requestFullscreen ||
              e.webkitRequestFullscreen ||
              e.webkitRequestFullScreen ||
              e.mozRequestFullScreen ||
              e.msRequestFullscreen;
            t && t.apply(e);
          })(
            t.embedded
              ? this.Reveal.getViewportElement()
              : document.documentElement
          )
        : 65 === i
        ? t.autoSlideStoppable && this.Reveal.toggleAutoSlide(n)
        : (v = !1)),
      v
        ? e.preventDefault && e.preventDefault()
        : (27 !== i && 79 !== i) ||
          (!1 === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(),
          e.preventDefault && e.preventDefault()),
      this.Reveal.cueAutoSlide();
  }
}
class Li {
  constructor(e) {
    (this.Reveal = e),
      (this.writeURLTimeout = 0),
      (this.onWindowHashChange = this.onWindowHashChange.bind(this));
  }
  bind() {
    window.addEventListener("hashchange", this.onWindowHashChange, !1);
  }
  unbind() {
    window.removeEventListener("hashchange", this.onWindowHashChange, !1);
  }
  readURL() {
    let e = this.Reveal.getConfig(),
      t = this.Reveal.getIndices(),
      i = this.Reveal.getCurrentSlide(),
      n = window.location.hash,
      a = n.slice(2).split("/"),
      s = n.replace(/#\/?/gi, "");
    if (!/^[0-9]*$/.test(a[0]) && s.length) {
      let e, n;
      /\/[-\d]+$/g.test(s) &&
        ((n = parseInt(s.split("/").pop(), 10)),
        (n = isNaN(n) ? void 0 : n),
        (s = s.split("/").shift()));
      try {
        e = document.getElementById(decodeURIComponent(s));
      } catch (e) {}
      let a = !!i && i.getAttribute("id") === s;
      if (e) {
        if (!a || void 0 !== n) {
          let t = this.Reveal.getIndices(e);
          this.Reveal.slide(t.h, t.v, n);
        }
      } else this.Reveal.slide(t.h || 0, t.v || 0);
    } else {
      let i,
        n = e.hashOneBasedIndex ? 1 : 0,
        s = parseInt(a[0], 10) - n || 0,
        r = parseInt(a[1], 10) - n || 0;
      e.fragmentInURL && ((i = parseInt(a[2], 10)), isNaN(i) && (i = void 0)),
        (s === t.h && r === t.v && void 0 === i) || this.Reveal.slide(s, r, i);
    }
  }
  writeURL(e) {
    let t = this.Reveal.getConfig(),
      i = this.Reveal.getCurrentSlide();
    clearTimeout(this.writeURLTimeout),
      "number" == typeof e
        ? (this.writeURLTimeout = setTimeout(this.writeURL, e))
        : i &&
          (t.history || !1 === fi
            ? (window.location.hash = this.getHash())
            : t.hash &&
              window.history.replaceState(null, null, "#" + this.getHash()));
  }
  getHash(e) {
    let t = "/",
      i = e || this.Reveal.getCurrentSlide(),
      n = i ? i.getAttribute("id") : null;
    n && (n = encodeURIComponent(n));
    let a = this.Reveal.getIndices(e);
    if (
      (this.Reveal.getConfig().fragmentInURL || (a.f = void 0),
      "string" == typeof n && n.length)
    )
      (t = "/" + n), a.f >= 0 && (t += "/" + a.f);
    else {
      let e = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
      (a.h > 0 || a.v > 0 || a.f >= 0) && (t += a.h + e),
        (a.v > 0 || a.f >= 0) && (t += "/" + (a.v + e)),
        a.f >= 0 && (t += "/" + a.f);
    }
    return t;
  }
  onWindowHashChange(e) {
    this.readURL();
  }
}
class xi {
  constructor(e) {
    (this.Reveal = e),
      (this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this)),
      (this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this)),
      (this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this)),
      (this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this)),
      (this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this)),
      (this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this));
  }
  render() {
    const e = this.Reveal.getConfig().rtl,
      t = this.Reveal.getRevealElement();
    (this.element = document.createElement("aside")),
      (this.element.className = "controls"),
      (this.element.innerHTML = '<button class="navigate-left" aria-label="'
        .concat(
          e ? "next slide" : "previous slide",
          '"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="'
        )
        .concat(
          e ? "previous slide" : "next slide",
          '"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>'
        )),
      this.Reveal.getRevealElement().appendChild(this.element),
      (this.controlsLeft = ei(t, ".navigate-left")),
      (this.controlsRight = ei(t, ".navigate-right")),
      (this.controlsUp = ei(t, ".navigate-up")),
      (this.controlsDown = ei(t, ".navigate-down")),
      (this.controlsPrev = ei(t, ".navigate-prev")),
      (this.controlsNext = ei(t, ".navigate-next")),
      (this.controlsRightArrow = this.element.querySelector(".navigate-right")),
      (this.controlsLeftArrow = this.element.querySelector(".navigate-left")),
      (this.controlsDownArrow = this.element.querySelector(".navigate-down"));
  }
  configure(e, t) {
    (this.element.style.display = e.controls ? "block" : "none"),
      this.element.setAttribute("data-controls-layout", e.controlsLayout),
      this.element.setAttribute(
        "data-controls-back-arrows",
        e.controlsBackArrows
      );
  }
  bind() {
    let e = ["touchstart", "click"];
    vi && (e = ["touchstart"]),
      e.forEach((e) => {
        this.controlsLeft.forEach((t) =>
          t.addEventListener(e, this.onNavigateLeftClicked, !1)
        ),
          this.controlsRight.forEach((t) =>
            t.addEventListener(e, this.onNavigateRightClicked, !1)
          ),
          this.controlsUp.forEach((t) =>
            t.addEventListener(e, this.onNavigateUpClicked, !1)
          ),
          this.controlsDown.forEach((t) =>
            t.addEventListener(e, this.onNavigateDownClicked, !1)
          ),
          this.controlsPrev.forEach((t) =>
            t.addEventListener(e, this.onNavigatePrevClicked, !1)
          ),
          this.controlsNext.forEach((t) =>
            t.addEventListener(e, this.onNavigateNextClicked, !1)
          );
      });
  }
  unbind() {
    ["touchstart", "click"].forEach((e) => {
      this.controlsLeft.forEach((t) =>
        t.removeEventListener(e, this.onNavigateLeftClicked, !1)
      ),
        this.controlsRight.forEach((t) =>
          t.removeEventListener(e, this.onNavigateRightClicked, !1)
        ),
        this.controlsUp.forEach((t) =>
          t.removeEventListener(e, this.onNavigateUpClicked, !1)
        ),
        this.controlsDown.forEach((t) =>
          t.removeEventListener(e, this.onNavigateDownClicked, !1)
        ),
        this.controlsPrev.forEach((t) =>
          t.removeEventListener(e, this.onNavigatePrevClicked, !1)
        ),
        this.controlsNext.forEach((t) =>
          t.removeEventListener(e, this.onNavigateNextClicked, !1)
        );
    });
  }
  update() {
    let e = this.Reveal.availableRoutes();
    [
      ...this.controlsLeft,
      ...this.controlsRight,
      ...this.controlsUp,
      ...this.controlsDown,
      ...this.controlsPrev,
      ...this.controlsNext,
    ].forEach((e) => {
      e.classList.remove("enabled", "fragmented"),
        e.setAttribute("disabled", "disabled");
    }),
      e.left &&
        this.controlsLeft.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        }),
      e.right &&
        this.controlsRight.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        }),
      e.up &&
        this.controlsUp.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        }),
      e.down &&
        this.controlsDown.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        }),
      (e.left || e.up) &&
        this.controlsPrev.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        }),
      (e.right || e.down) &&
        this.controlsNext.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        });
    let t = this.Reveal.getCurrentSlide();
    if (t) {
      let e = this.Reveal.fragments.availableRoutes();
      e.prev &&
        this.controlsPrev.forEach((e) => {
          e.classList.add("fragmented", "enabled"),
            e.removeAttribute("disabled");
        }),
        e.next &&
          this.controlsNext.forEach((e) => {
            e.classList.add("fragmented", "enabled"),
              e.removeAttribute("disabled");
          }),
        this.Reveal.isVerticalSlide(t)
          ? (e.prev &&
              this.controlsUp.forEach((e) => {
                e.classList.add("fragmented", "enabled"),
                  e.removeAttribute("disabled");
              }),
            e.next &&
              this.controlsDown.forEach((e) => {
                e.classList.add("fragmented", "enabled"),
                  e.removeAttribute("disabled");
              }))
          : (e.prev &&
              this.controlsLeft.forEach((e) => {
                e.classList.add("fragmented", "enabled"),
                  e.removeAttribute("disabled");
              }),
            e.next &&
              this.controlsRight.forEach((e) => {
                e.classList.add("fragmented", "enabled"),
                  e.removeAttribute("disabled");
              }));
    }
    if (this.Reveal.getConfig().controlsTutorial) {
      let t = this.Reveal.getIndices();
      !this.Reveal.hasNavigatedVertically() && e.down
        ? this.controlsDownArrow.classList.add("highlight")
        : (this.controlsDownArrow.classList.remove("highlight"),
          this.Reveal.getConfig().rtl
            ? !this.Reveal.hasNavigatedHorizontally() && e.left && 0 === t.v
              ? this.controlsLeftArrow.classList.add("highlight")
              : this.controlsLeftArrow.classList.remove("highlight")
            : !this.Reveal.hasNavigatedHorizontally() && e.right && 0 === t.v
            ? this.controlsRightArrow.classList.add("highlight")
            : this.controlsRightArrow.classList.remove("highlight"));
    }
  }
  onNavigateLeftClicked(e) {
    e.preventDefault(),
      this.Reveal.onUserInput(),
      "linear" === this.Reveal.getConfig().navigationMode
        ? this.Reveal.prev()
        : this.Reveal.left();
  }
  onNavigateRightClicked(e) {
    e.preventDefault(),
      this.Reveal.onUserInput(),
      "linear" === this.Reveal.getConfig().navigationMode
        ? this.Reveal.next()
        : this.Reveal.right();
  }
  onNavigateUpClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up();
  }
  onNavigateDownClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down();
  }
  onNavigatePrevClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev();
  }
  onNavigateNextClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next();
  }
}
class Ci {
  constructor(e) {
    (this.Reveal = e),
      (this.onProgressClicked = this.onProgressClicked.bind(this));
  }
  render() {
    (this.element = document.createElement("div")),
      (this.element.className = "progress"),
      this.Reveal.getRevealElement().appendChild(this.element),
      (this.bar = document.createElement("span")),
      this.element.appendChild(this.bar);
  }
  configure(e, t) {
    this.element.style.display = e.progress ? "block" : "none";
  }
  bind() {
    this.Reveal.getConfig().progress &&
      this.element &&
      this.element.addEventListener("click", this.onProgressClicked, !1);
  }
  unbind() {
    this.Reveal.getConfig().progress &&
      this.element &&
      this.element.removeEventListener("click", this.onProgressClicked, !1);
  }
  update() {
    this.Reveal.getConfig().progress &&
      this.bar &&
      (this.bar.style.transform = "scaleX(" + this.Reveal.getProgress() + ")");
  }
  getMaxWidth() {
    return this.Reveal.getRevealElement().offsetWidth;
  }
  onProgressClicked(e) {
    this.Reveal.onUserInput(e), e.preventDefault();
    let t = this.Reveal.getHorizontalSlides().length,
      i = Math.floor((e.clientX / this.getMaxWidth()) * t);
    this.Reveal.getConfig().rtl && (i = t - i), this.Reveal.slide(i);
  }
}
class Pi {
  constructor(e) {
    (this.Reveal = e),
      (this.lastMouseWheelStep = 0),
      (this.cursorHidden = !1),
      (this.cursorInactiveTimeout = 0),
      (this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this)),
      (this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this));
  }
  configure(e, t) {
    e.mouseWheel
      ? (document.addEventListener(
          "DOMMouseScroll",
          this.onDocumentMouseScroll,
          !1
        ),
        document.addEventListener("mousewheel", this.onDocumentMouseScroll, !1))
      : (document.removeEventListener(
          "DOMMouseScroll",
          this.onDocumentMouseScroll,
          !1
        ),
        document.removeEventListener(
          "mousewheel",
          this.onDocumentMouseScroll,
          !1
        )),
      e.hideInactiveCursor
        ? (document.addEventListener(
            "mousemove",
            this.onDocumentCursorActive,
            !1
          ),
          document.addEventListener(
            "mousedown",
            this.onDocumentCursorActive,
            !1
          ))
        : (this.showCursor(),
          document.removeEventListener(
            "mousemove",
            this.onDocumentCursorActive,
            !1
          ),
          document.removeEventListener(
            "mousedown",
            this.onDocumentCursorActive,
            !1
          ));
  }
  showCursor() {
    this.cursorHidden &&
      ((this.cursorHidden = !1),
      (this.Reveal.getRevealElement().style.cursor = ""));
  }
  hideCursor() {
    !1 === this.cursorHidden &&
      ((this.cursorHidden = !0),
      (this.Reveal.getRevealElement().style.cursor = "none"));
  }
  onDocumentCursorActive(e) {
    this.showCursor(),
      clearTimeout(this.cursorInactiveTimeout),
      (this.cursorInactiveTimeout = setTimeout(
        this.hideCursor.bind(this),
        this.Reveal.getConfig().hideCursorTime
      ));
  }
  onDocumentMouseScroll(e) {
    if (Date.now() - this.lastMouseWheelStep > 1e3) {
      this.lastMouseWheelStep = Date.now();
      let t = e.detail || -e.wheelDelta;
      t > 0 ? this.Reveal.next() : t < 0 && this.Reveal.prev();
    }
  }
}
const Ni = (e, t) => {
  const i = document.createElement("script");
  (i.type = "text/javascript"),
    (i.async = !1),
    (i.defer = !1),
    (i.src = e),
    "function" == typeof t &&
      ((i.onload = i.onreadystatechange = (e) => {
        ("load" === e.type || /loaded|complete/.test(i.readyState)) &&
          ((i.onload = i.onreadystatechange = i.onerror = null), t());
      }),
      (i.onerror = (e) => {
        (i.onload = i.onreadystatechange = i.onerror = null),
          t(new Error("Failed loading script: " + i.src + "\n" + e));
      }));
  const n = document.querySelector("head");
  n.insertBefore(i, n.lastChild);
};
class Mi {
  constructor(e) {
    (this.Reveal = e),
      (this.state = "idle"),
      (this.registeredPlugins = {}),
      (this.asyncDependencies = []);
  }
  load(e, t) {
    return (
      (this.state = "loading"),
      e.forEach(this.registerPlugin.bind(this)),
      new Promise((e) => {
        let i = [],
          n = 0;
        if (
          (t.forEach((e) => {
            (e.condition && !e.condition()) ||
              (e.async ? this.asyncDependencies.push(e) : i.push(e));
          }),
          i.length)
        ) {
          n = i.length;
          const t = (t) => {
            t && "function" == typeof t.callback && t.callback(),
              0 == --n && this.initPlugins().then(e);
          };
          i.forEach((e) => {
            "string" == typeof e.id
              ? (this.registerPlugin(e), t(e))
              : "string" == typeof e.src
              ? Ni(e.src, () => t(e))
              : (console.warn("Unrecognized plugin format", e), t());
          });
        } else this.initPlugins().then(e);
      })
    );
  }
  initPlugins() {
    return new Promise((e) => {
      let t = Object.values(this.registeredPlugins),
        i = t.length;
      if (0 === i) this.loadAsync().then(e);
      else {
        let n,
          a = () => {
            0 == --i ? this.loadAsync().then(e) : n();
          },
          s = 0;
        (n = () => {
          let e = t[s++];
          if ("function" == typeof e.init) {
            let t = e.init(this.Reveal);
            t && "function" == typeof t.then ? t.then(a) : a();
          } else a();
        }),
          n();
      }
    });
  }
  loadAsync() {
    return (
      (this.state = "loaded"),
      this.asyncDependencies.length &&
        this.asyncDependencies.forEach((e) => {
          Ni(e.src, e.callback);
        }),
      Promise.resolve()
    );
  }
  registerPlugin(e) {
    2 === arguments.length && "string" == typeof arguments[0]
      ? ((e = arguments[1]).id = arguments[0])
      : "function" == typeof e && (e = e());
    let t = e.id;
    "string" != typeof t
      ? console.warn("Unrecognized plugin format; can't find plugin.id", e)
      : void 0 === this.registeredPlugins[t]
      ? ((this.registeredPlugins[t] = e),
        "loaded" === this.state &&
          "function" == typeof e.init &&
          e.init(this.Reveal))
      : console.warn(
          'reveal.js: "' + t + '" plugin has already been registered'
        );
  }
  hasPlugin(e) {
    return !!this.registeredPlugins[e];
  }
  getPlugin(e) {
    return this.registeredPlugins[e];
  }
  getRegisteredPlugins() {
    return this.registeredPlugins;
  }
}
class Ii {
  constructor(e) {
    this.Reveal = e;
  }
  setupPDF() {
    let e = this.Reveal.getConfig(),
      t = this.Reveal.getComputedSlideSize(
        window.innerWidth,
        window.innerHeight
      ),
      i = Math.floor(t.width * (1 + e.margin)),
      n = Math.floor(t.height * (1 + e.margin)),
      a = t.width,
      s = t.height;
    oi("@page{size:" + i + "px " + n + "px; margin: 0px;}"),
      oi(
        ".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " +
          a +
          "px; max-height:" +
          s +
          "px}"
      ),
      document.documentElement.classList.add("print-pdf"),
      (document.body.style.width = i + "px"),
      (document.body.style.height = n + "px"),
      this.Reveal.layoutSlideContents(a, s);
    let r = e.slideNumber && /all|print/i.test(e.showSlideNumber);
    ei(this.Reveal.getRevealElement(), ".slides section").forEach(function (e) {
      e.setAttribute(
        "data-slide-number",
        this.Reveal.slideNumber.getSlideNumber(e)
      );
    }, this),
      ei(this.Reveal.getRevealElement(), ".slides section").forEach(function (
        t
      ) {
        if (!1 === t.classList.contains("stack")) {
          let o = (i - a) / 2,
            l = (n - s) / 2,
            d = t.scrollHeight,
            c = Math.max(Math.ceil(d / n), 1);
          (c = Math.min(c, e.pdfMaxPagesPerSlide)),
            ((1 === c && e.center) || t.classList.contains("center")) &&
              (l = Math.max((n - d) / 2, 0));
          let u = document.createElement("div");
          if (
            ((u.className = "pdf-page"),
            (u.style.height = (n + e.pdfPageHeightOffset) * c + "px"),
            t.parentNode.insertBefore(u, t),
            u.appendChild(t),
            (t.style.left = o + "px"),
            (t.style.top = l + "px"),
            (t.style.width = a + "px"),
            t.slideBackgroundElement &&
              u.insertBefore(t.slideBackgroundElement, t),
            e.showNotes)
          ) {
            let n = this.Reveal.getSlideNotes(t);
            if (n) {
              let t = 8,
                a = "string" == typeof e.showNotes ? e.showNotes : "inline",
                s = document.createElement("div");
              s.classList.add("speaker-notes"),
                s.classList.add("speaker-notes-pdf"),
                s.setAttribute("data-layout", a),
                (s.innerHTML = n),
                "separate-page" === a
                  ? u.parentNode.insertBefore(s, u.nextSibling)
                  : ((s.style.left = t + "px"),
                    (s.style.bottom = t + "px"),
                    (s.style.width = i - 2 * t + "px"),
                    u.appendChild(s));
            }
          }
          if (r) {
            let e = document.createElement("div");
            e.classList.add("slide-number"),
              e.classList.add("slide-number-pdf"),
              (e.innerHTML = t.getAttribute("data-slide-number")),
              u.appendChild(e);
          }
          if (e.pdfSeparateFragments) {
            let e,
              t,
              i = this.Reveal.fragments.sort(
                u.querySelectorAll(".fragment"),
                !0
              );
            i.forEach(function (i) {
              e &&
                e.forEach(function (e) {
                  e.classList.remove("current-fragment");
                }),
                i.forEach(function (e) {
                  e.classList.add("visible", "current-fragment");
                }, this);
              let n = u.cloneNode(!0);
              u.parentNode.insertBefore(n, (t || u).nextSibling),
                (e = i),
                (t = n);
            }, this),
              i.forEach(function (e) {
                e.forEach(function (e) {
                  e.classList.remove("visible", "current-fragment");
                });
              });
          } else
            ei(u, ".fragment:not(.fade-out)").forEach(function (e) {
              e.classList.add("visible");
            });
        }
      },
      this),
      this.Reveal.dispatchEvent({ type: "pdf-ready" });
  }
  isPrintingPDF() {
    return /print-pdf/gi.test(window.location.search);
  }
}
class Ti {
  constructor(e) {
    (this.Reveal = e),
      (this.touchStartX = 0),
      (this.touchStartY = 0),
      (this.touchStartCount = 0),
      (this.touchCaptured = !1),
      (this.onPointerDown = this.onPointerDown.bind(this)),
      (this.onPointerMove = this.onPointerMove.bind(this)),
      (this.onPointerUp = this.onPointerUp.bind(this)),
      (this.onTouchStart = this.onTouchStart.bind(this)),
      (this.onTouchMove = this.onTouchMove.bind(this)),
      (this.onTouchEnd = this.onTouchEnd.bind(this));
  }
  bind() {
    let e = this.Reveal.getRevealElement();
    "onpointerdown" in window
      ? (e.addEventListener("pointerdown", this.onPointerDown, !1),
        e.addEventListener("pointermove", this.onPointerMove, !1),
        e.addEventListener("pointerup", this.onPointerUp, !1))
      : window.navigator.msPointerEnabled
      ? (e.addEventListener("MSPointerDown", this.onPointerDown, !1),
        e.addEventListener("MSPointerMove", this.onPointerMove, !1),
        e.addEventListener("MSPointerUp", this.onPointerUp, !1))
      : (e.addEventListener("touchstart", this.onTouchStart, !1),
        e.addEventListener("touchmove", this.onTouchMove, !1),
        e.addEventListener("touchend", this.onTouchEnd, !1));
  }
  unbind() {
    let e = this.Reveal.getRevealElement();
    e.removeEventListener("pointerdown", this.onPointerDown, !1),
      e.removeEventListener("pointermove", this.onPointerMove, !1),
      e.removeEventListener("pointerup", this.onPointerUp, !1),
      e.removeEventListener("MSPointerDown", this.onPointerDown, !1),
      e.removeEventListener("MSPointerMove", this.onPointerMove, !1),
      e.removeEventListener("MSPointerUp", this.onPointerUp, !1),
      e.removeEventListener("touchstart", this.onTouchStart, !1),
      e.removeEventListener("touchmove", this.onTouchMove, !1),
      e.removeEventListener("touchend", this.onTouchEnd, !1);
  }
  isSwipePrevented(e) {
    for (; e && "function" == typeof e.hasAttribute; ) {
      if (e.hasAttribute("data-prevent-swipe")) return !0;
      e = e.parentNode;
    }
    return !1;
  }
  onTouchStart(e) {
    if (this.isSwipePrevented(e.target)) return !0;
    (this.touchStartX = e.touches[0].clientX),
      (this.touchStartY = e.touches[0].clientY),
      (this.touchStartCount = e.touches.length);
  }
  onTouchMove(e) {
    if (this.isSwipePrevented(e.target)) return !0;
    let t = this.Reveal.getConfig();
    if (this.touchCaptured) vi && e.preventDefault();
    else {
      this.Reveal.onUserInput(e);
      let i = e.touches[0].clientX,
        n = e.touches[0].clientY;
      if (1 === e.touches.length && 2 !== this.touchStartCount) {
        let a = this.Reveal.availableRoutes({ includeFragments: !0 }),
          s = i - this.touchStartX,
          r = n - this.touchStartY;
        s > 40 && Math.abs(s) > Math.abs(r)
          ? ((this.touchCaptured = !0),
            "linear" === t.navigationMode
              ? t.rtl
                ? this.Reveal.next()
                : this.Reveal.prev()
              : this.Reveal.left())
          : s < -40 && Math.abs(s) > Math.abs(r)
          ? ((this.touchCaptured = !0),
            "linear" === t.navigationMode
              ? t.rtl
                ? this.Reveal.prev()
                : this.Reveal.next()
              : this.Reveal.right())
          : r > 40 && a.up
          ? ((this.touchCaptured = !0),
            "linear" === t.navigationMode
              ? this.Reveal.prev()
              : this.Reveal.up())
          : r < -40 &&
            a.down &&
            ((this.touchCaptured = !0),
            "linear" === t.navigationMode
              ? this.Reveal.next()
              : this.Reveal.down()),
          t.embedded
            ? (this.touchCaptured || this.Reveal.isVerticalSlide()) &&
              e.preventDefault()
            : e.preventDefault();
      }
    }
  }
  onTouchEnd(e) {
    this.touchCaptured = !1;
  }
  onPointerDown(e) {
    (e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType) ||
      ((e.touches = [{ clientX: e.clientX, clientY: e.clientY }]),
      this.onTouchStart(e));
  }
  onPointerMove(e) {
    (e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType) ||
      ((e.touches = [{ clientX: e.clientX, clientY: e.clientY }]),
      this.onTouchMove(e));
  }
  onPointerUp(e) {
    (e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType) ||
      ((e.touches = [{ clientX: e.clientX, clientY: e.clientY }]),
      this.onTouchEnd(e));
  }
}
class Di {
  constructor(e) {
    (this.Reveal = e),
      (this.onRevealPointerDown = this.onRevealPointerDown.bind(this)),
      (this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this));
  }
  configure(e, t) {
    e.embedded ? this.blur() : (this.focus(), this.unbind());
  }
  bind() {
    this.Reveal.getConfig().embedded &&
      this.Reveal.getRevealElement().addEventListener(
        "pointerdown",
        this.onRevealPointerDown,
        !1
      );
  }
  unbind() {
    this.Reveal.getRevealElement().removeEventListener(
      "pointerdown",
      this.onRevealPointerDown,
      !1
    ),
      document.removeEventListener(
        "pointerdown",
        this.onDocumentPointerDown,
        !1
      );
  }
  focus() {
    "focus" !== this.state &&
      (this.Reveal.getRevealElement().classList.add("focused"),
      document.addEventListener("pointerdown", this.onDocumentPointerDown, !1)),
      (this.state = "focus");
  }
  blur() {
    "blur" !== this.state &&
      (this.Reveal.getRevealElement().classList.remove("focused"),
      document.removeEventListener(
        "pointerdown",
        this.onDocumentPointerDown,
        !1
      )),
      (this.state = "blur");
  }
  isFocused() {
    return "focus" === this.state;
  }
  onRevealPointerDown(e) {
    this.focus();
  }
  onDocumentPointerDown(e) {
    let t = si(e.target, ".reveal");
    (t && t === this.Reveal.getRevealElement()) || this.blur();
  }
}
class Oi {
  constructor(e) {
    this.Reveal = e;
  }
  render() {
    (this.element = document.createElement("div")),
      (this.element.className = "speaker-notes"),
      this.element.setAttribute("data-prevent-swipe", ""),
      this.element.setAttribute("tabindex", "0"),
      this.Reveal.getRevealElement().appendChild(this.element);
  }
  configure(e, t) {
    e.showNotes &&
      this.element.setAttribute(
        "data-layout",
        "string" == typeof e.showNotes ? e.showNotes : "inline"
      );
  }
  update() {
    this.Reveal.getConfig().showNotes &&
      this.element &&
      this.Reveal.getCurrentSlide() &&
      !this.Reveal.print.isPrintingPDF() &&
      (this.element.innerHTML =
        this.getSlideNotes() ||
        '<span class="notes-placeholder">No notes on this slide.</span>');
  }
  updateVisibility() {
    this.Reveal.getConfig().showNotes &&
    this.hasNotes() &&
    !this.Reveal.print.isPrintingPDF()
      ? this.Reveal.getRevealElement().classList.add("show-notes")
      : this.Reveal.getRevealElement().classList.remove("show-notes");
  }
  hasNotes() {
    return (
      this.Reveal.getSlidesElement().querySelectorAll(
        "[data-notes], aside.notes"
      ).length > 0
    );
  }
  isSpeakerNotesWindow() {
    return !!window.location.search.match(/receiver/gi);
  }
  getSlideNotes(e = this.Reveal.getCurrentSlide()) {
    if (e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
    let t = e.querySelector("aside.notes");
    return t ? t.innerHTML : null;
  }
}
class Hi {
  constructor(e, t) {
    (this.diameter = 100),
      (this.diameter2 = this.diameter / 2),
      (this.thickness = 6),
      (this.playing = !1),
      (this.progress = 0),
      (this.progressOffset = 1),
      (this.container = e),
      (this.progressCheck = t),
      (this.canvas = document.createElement("canvas")),
      (this.canvas.className = "playback"),
      (this.canvas.width = this.diameter),
      (this.canvas.height = this.diameter),
      (this.canvas.style.width = this.diameter2 + "px"),
      (this.canvas.style.height = this.diameter2 + "px"),
      (this.context = this.canvas.getContext("2d")),
      this.container.appendChild(this.canvas),
      this.render();
  }
  setPlaying(e) {
    const t = this.playing;
    (this.playing = e), !t && this.playing ? this.animate() : this.render();
  }
  animate() {
    const e = this.progress;
    (this.progress = this.progressCheck()),
      e > 0.8 && this.progress < 0.2 && (this.progressOffset = this.progress),
      this.render(),
      this.playing && requestAnimationFrame(this.animate.bind(this));
  }
  render() {
    let e = this.playing ? this.progress : 0,
      t = this.diameter2 - this.thickness,
      i = this.diameter2,
      n = this.diameter2;
    this.progressOffset += 0.1 * (1 - this.progressOffset);
    const a = -Math.PI / 2 + e * (2 * Math.PI),
      s = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
    this.context.save(),
      this.context.clearRect(0, 0, this.diameter, this.diameter),
      this.context.beginPath(),
      this.context.arc(i, n, t + 4, 0, 2 * Math.PI, !1),
      (this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )"),
      this.context.fill(),
      this.context.beginPath(),
      this.context.arc(i, n, t, 0, 2 * Math.PI, !1),
      (this.context.lineWidth = this.thickness),
      (this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )"),
      this.context.stroke(),
      this.playing &&
        (this.context.beginPath(),
        this.context.arc(i, n, t, s, a, !1),
        (this.context.lineWidth = this.thickness),
        (this.context.strokeStyle = "#fff"),
        this.context.stroke()),
      this.context.translate(i - 14, n - 14),
      this.playing
        ? ((this.context.fillStyle = "#fff"),
          this.context.fillRect(0, 0, 10, 28),
          this.context.fillRect(18, 0, 10, 28))
        : (this.context.beginPath(),
          this.context.translate(4, 0),
          this.context.moveTo(0, 0),
          this.context.lineTo(24, 14),
          this.context.lineTo(0, 28),
          (this.context.fillStyle = "#fff"),
          this.context.fill()),
      this.context.restore();
  }
  on(e, t) {
    this.canvas.addEventListener(e, t, !1);
  }
  off(e, t) {
    this.canvas.removeEventListener(e, t, !1);
  }
  destroy() {
    (this.playing = !1),
      this.canvas.parentNode && this.container.removeChild(this.canvas);
  }
}
var Bi = {
  width: 960,
  height: 700,
  margin: 0.04,
  minScale: 0.2,
  maxScale: 2,
  controls: !0,
  controlsTutorial: !0,
  controlsLayout: "bottom-right",
  controlsBackArrows: "faded",
  progress: !0,
  slideNumber: !1,
  showSlideNumber: "all",
  hashOneBasedIndex: !1,
  hash: !1,
  respondToHashChanges: !0,
  history: !1,
  keyboard: !0,
  keyboardCondition: null,
  disableLayout: !1,
  overview: !0,
  center: !0,
  touch: !0,
  loop: !1,
  rtl: !1,
  navigationMode: "default",
  shuffle: !1,
  fragments: !0,
  fragmentInURL: !0,
  embedded: !1,
  help: !0,
  pause: !0,
  showNotes: !1,
  autoPlayMedia: null,
  preloadIframes: null,
  autoAnimate: !0,
  autoAnimateMatcher: null,
  autoAnimateEasing: "ease",
  autoAnimateDuration: 1,
  autoAnimateUnmatched: !0,
  autoAnimateStyles: [
    "opacity",
    "color",
    "background-color",
    "padding",
    "font-size",
    "line-height",
    "letter-spacing",
    "border-width",
    "border-color",
    "border-radius",
    "outline",
    "outline-offset",
  ],
  autoSlide: 0,
  autoSlideStoppable: !0,
  autoSlideMethod: null,
  defaultTiming: null,
  mouseWheel: !1,
  previewLinks: !1,
  postMessage: !0,
  postMessageEvents: !1,
  focusBodyOnPageVisibilityChange: !0,
  transition: "slide",
  transitionSpeed: "default",
  backgroundTransition: "fade",
  parallaxBackgroundImage: "",
  parallaxBackgroundSize: "",
  parallaxBackgroundRepeat: "",
  parallaxBackgroundPosition: "",
  parallaxBackgroundHorizontal: null,
  parallaxBackgroundVertical: null,
  pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
  pdfSeparateFragments: !0,
  pdfPageHeightOffset: -1,
  viewDistance: 3,
  mobileViewDistance: 2,
  display: "block",
  hideInactiveCursor: !0,
  hideCursorTime: 5e3,
  dependencies: [],
  plugins: [],
};
function Ui(e, t) {
  arguments.length < 2 &&
    ((t = arguments[0]), (e = document.querySelector(".reveal")));
  const i = {};
  let n,
    a,
    s,
    r,
    o,
    l = {},
    d = !1,
    c = { hasNavigatedHorizontally: !1, hasNavigatedVertically: !1 },
    u = [],
    h = 1,
    g = { layout: "", overview: "" },
    v = {},
    p = "idle",
    f = 0,
    m = 0,
    b = -1,
    y = !1,
    w = new mi(i),
    R = new bi(i),
    E = new Ei(i),
    S = new wi(i),
    A = new Si(i),
    k = new Ai(i),
    L = new ki(i),
    x = new Li(i),
    C = new xi(i),
    P = new Ci(i),
    N = new Pi(i),
    M = new Mi(i),
    I = new Ii(i),
    T = new Di(i),
    D = new Ti(i),
    O = new Oi(i);
  function H(n) {
    return (
      (v.wrapper = e),
      (v.slides = e.querySelector(".slides")),
      (l = { ...Bi, ...l, ...t, ...n, ...li() }),
      B(),
      window.addEventListener("load", se, !1),
      M.load(l.plugins, l.dependencies).then(U),
      new Promise((e) => i.on("ready", e))
    );
  }
  function B() {
    !0 === l.embedded
      ? (v.viewport = si(e, ".reveal-viewport") || e)
      : ((v.viewport = document.body),
        document.documentElement.classList.add("reveal-full-page")),
      v.viewport.classList.add("reveal-viewport");
  }
  function U() {
    (d = !0),
      j(),
      W(),
      _(),
      Se(),
      V(),
      x.readURL(),
      S.update(!0),
      setTimeout(() => {
        v.slides.classList.remove("no-transition"),
          v.wrapper.classList.add("ready"),
          J({ type: "ready", data: { indexh: n, indexv: a, currentSlide: r } });
      }, 1),
      I.isPrintingPDF() &&
        (X(),
        "complete" === document.readyState
          ? I.setupPDF()
          : window.addEventListener("load", () => {
              I.setupPDF();
            }));
  }
  function j() {
    v.slides.classList.add("no-transition"),
      hi
        ? v.wrapper.classList.add("no-hover")
        : v.wrapper.classList.remove("no-hover"),
      S.render(),
      R.render(),
      C.render(),
      P.render(),
      O.render(),
      (v.pauseOverlay = ri(
        v.wrapper,
        "div",
        "pause-overlay",
        l.controls
          ? '<button class="resume-button">Resume presentation</button>'
          : null
      )),
      (v.statusElement = z()),
      v.wrapper.setAttribute("role", "application");
  }
  function z() {
    let e = v.wrapper.querySelector(".aria-status");
    return (
      e ||
        ((e = document.createElement("div")),
        (e.style.position = "absolute"),
        (e.style.height = "1px"),
        (e.style.width = "1px"),
        (e.style.overflow = "hidden"),
        (e.style.clip = "rect( 1px, 1px, 1px, 1px )"),
        e.classList.add("aria-status"),
        e.setAttribute("aria-live", "polite"),
        e.setAttribute("aria-atomic", "true"),
        v.wrapper.appendChild(e)),
      e
    );
  }
  function q(e) {
    v.statusElement.textContent = e;
  }
  function F(e) {
    let t = "";
    if (3 === e.nodeType) t += e.textContent;
    else if (1 === e.nodeType) {
      let i = e.getAttribute("aria-hidden"),
        n = "none" === window.getComputedStyle(e).display;
      "true" === i ||
        n ||
        Array.from(e.childNodes).forEach((e) => {
          t += F(e);
        });
    }
    return (t = t.trim()), "" === t ? "" : t + " ";
  }
  function _() {
    setInterval(() => {
      (0 === v.wrapper.scrollTop && 0 === v.wrapper.scrollLeft) ||
        ((v.wrapper.scrollTop = 0), (v.wrapper.scrollLeft = 0));
    }, 1e3);
  }
  function W() {
    l.postMessage &&
      window.addEventListener(
        "message",
        (e) => {
          let t = e.data;
          if (
            "string" == typeof t &&
            "{" === t.charAt(0) &&
            "}" === t.charAt(t.length - 1) &&
            ((t = JSON.parse(t)), t.method && "function" == typeof i[t.method])
          )
            if (!1 === At.test(t.method)) {
              const e = i[t.method].apply(i, t.args);
              Q("callback", { method: t.method, result: e });
            } else
              console.warn(
                'reveal.js: "' +
                  t.method +
                  '" is is blacklisted from the postMessage API'
              );
        },
        !1
      );
  }
  function V(e) {
    const t = { ...l };
    if (("object" == typeof e && Zt(l, e), !1 === i.isReady())) return;
    const n = v.wrapper.querySelectorAll(".slides section").length;
    v.wrapper.classList.remove(t.transition),
      v.wrapper.classList.add(l.transition),
      v.wrapper.setAttribute("data-transition-speed", l.transitionSpeed),
      v.wrapper.setAttribute(
        "data-background-transition",
        l.backgroundTransition
      ),
      l.shuffle && Ae(),
      ti(v.wrapper, "embedded", l.embedded),
      ti(v.wrapper, "rtl", l.rtl),
      ti(v.wrapper, "center", l.center),
      !1 === l.pause && pe(),
      l.previewLinks
        ? (Z(), ee("[data-preview-link=false]"))
        : (ee(), Z("[data-preview-link]:not([data-preview-link=false])")),
      E.reset(),
      o && (o.destroy(), (o = null)),
      n > 1 &&
        l.autoSlide &&
        l.autoSlideStoppable &&
        ((o = new Hi(v.wrapper, () =>
          Math.min(Math.max((Date.now() - b) / f, 0), 1)
        )),
        o.on("click", at),
        (y = !1)),
      "default" !== l.navigationMode
        ? v.wrapper.setAttribute("data-navigation-mode", l.navigationMode)
        : v.wrapper.removeAttribute("data-navigation-mode"),
      O.configure(l, t),
      T.configure(l, t),
      N.configure(l, t),
      C.configure(l, t),
      P.configure(l, t),
      L.configure(l, t),
      A.configure(l, t),
      R.configure(l, t),
      Re();
  }
  function K() {
    window.addEventListener("resize", tt, !1),
      l.touch && D.bind(),
      l.keyboard && L.bind(),
      l.progress && P.bind(),
      l.respondToHashChanges && x.bind(),
      C.bind(),
      T.bind(),
      v.slides.addEventListener("transitionend", et, !1),
      v.pauseOverlay.addEventListener("click", pe, !1),
      l.focusBodyOnPageVisibilityChange &&
        document.addEventListener("visibilitychange", it, !1);
  }
  function X() {
    D.unbind(),
      T.unbind(),
      L.unbind(),
      C.unbind(),
      P.unbind(),
      x.unbind(),
      window.removeEventListener("resize", tt, !1),
      v.slides.removeEventListener("transitionend", et, !1),
      v.pauseOverlay.removeEventListener("click", pe, !1);
  }
  function $(t, i, n) {
    e.addEventListener(t, i, n);
  }
  function Y(t, i, n) {
    e.removeEventListener(t, i, n);
  }
  function G(e) {
    "string" == typeof e.layout && (g.layout = e.layout),
      "string" == typeof e.overview && (g.overview = e.overview),
      g.layout
        ? ni(v.slides, g.layout + " " + g.overview)
        : ni(v.slides, g.overview);
  }
  function J({ target: e = v.wrapper, type: t, data: i, bubbles: n = !0 }) {
    let a = document.createEvent("HTMLEvents", 1, 2);
    a.initEvent(t, n, !0),
      Zt(a, i),
      e.dispatchEvent(a),
      e === v.wrapper && Q(t);
  }
  function Q(e, t) {
    if (l.postMessageEvents && window.parent !== window.self) {
      let i = { namespace: "reveal", eventName: e, state: qe() };
      Zt(i, t), window.parent.postMessage(JSON.stringify(i), "*");
    }
  }
  function Z(e = "a") {
    Array.from(v.wrapper.querySelectorAll(e)).forEach((e) => {
      /^(http|www)/gi.test(e.getAttribute("href")) &&
        e.addEventListener("click", nt, !1);
    });
  }
  function ee(e = "a") {
    Array.from(v.wrapper.querySelectorAll(e)).forEach((e) => {
      /^(http|www)/gi.test(e.getAttribute("href")) &&
        e.removeEventListener("click", nt, !1);
    });
  }
  function te(e) {
    ae(),
      (v.overlay = document.createElement("div")),
      v.overlay.classList.add("overlay"),
      v.overlay.classList.add("overlay-preview"),
      v.wrapper.appendChild(v.overlay),
      (v.overlay.innerHTML = '<header>\n\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t<a class="external" href="'
        .concat(
          e,
          '" target="_blank"><span class="icon"></span></a>\n\t\t\t</header>\n\t\t\t<div class="spinner"></div>\n\t\t\t<div class="viewport">\n\t\t\t\t<iframe src="'
        )
        .concat(
          e,
          '"></iframe>\n\t\t\t\t<small class="viewport-inner">\n\t\t\t\t\t<span class="x-frame-error">Unable to load iframe. This is likely due to the site\'s policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>'
        )),
      v.overlay.querySelector("iframe").addEventListener(
        "load",
        (e) => {
          v.overlay.classList.add("loaded");
        },
        !1
      ),
      v.overlay.querySelector(".close").addEventListener(
        "click",
        (e) => {
          ae(), e.preventDefault();
        },
        !1
      ),
      v.overlay.querySelector(".external").addEventListener(
        "click",
        (e) => {
          ae();
        },
        !1
      );
  }
  function ie(e) {
    "boolean" == typeof e ? (e ? ne() : ae()) : v.overlay ? ae() : ne();
  }
  function ne() {
    if (l.help) {
      ae(),
        (v.overlay = document.createElement("div")),
        v.overlay.classList.add("overlay"),
        v.overlay.classList.add("overlay-help"),
        v.wrapper.appendChild(v.overlay);
      let e = '<p class="title">Keyboard Shortcuts</p><br/>',
        t = L.getShortcuts(),
        i = L.getBindings();
      e += "<table><th>KEY</th><th>ACTION</th>";
      for (let i in t)
        e += "<tr><td>".concat(i, "</td><td>").concat(t[i], "</td></tr>");
      for (let t in i)
        i[t].key &&
          i[t].description &&
          (e += "<tr><td>"
            .concat(i[t].key, "</td><td>")
            .concat(i[t].description, "</td></tr>"));
      (e += "</table>"),
        (v.overlay.innerHTML = '\n\t\t\t\t<header>\n\t\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class="viewport">\n\t\t\t\t\t<div class="viewport-inner">'.concat(
          e,
          "</div>\n\t\t\t\t</div>\n\t\t\t"
        )),
        v.overlay.querySelector(".close").addEventListener(
          "click",
          (e) => {
            ae(), e.preventDefault();
          },
          !1
        );
    }
  }
  function ae() {
    return (
      !!v.overlay &&
      (v.overlay.parentNode.removeChild(v.overlay), (v.overlay = null), !0)
    );
  }
  function se() {
    if (v.wrapper && !I.isPrintingPDF()) {
      if (!l.disableLayout) {
        hi &&
          !l.embedded &&
          document.documentElement.style.setProperty(
            "--vh",
            0.01 * window.innerHeight + "px"
          );
        const e = oe(),
          t = h;
        re(l.width, l.height),
          (v.slides.style.width = e.width + "px"),
          (v.slides.style.height = e.height + "px"),
          (h = Math.min(
            e.presentationWidth / e.width,
            e.presentationHeight / e.height
          )),
          (h = Math.max(h, l.minScale)),
          (h = Math.min(h, l.maxScale)),
          1 === h
            ? ((v.slides.style.zoom = ""),
              (v.slides.style.left = ""),
              (v.slides.style.top = ""),
              (v.slides.style.bottom = ""),
              (v.slides.style.right = ""),
              G({ layout: "" }))
            : h > 1 && pi && window.devicePixelRatio < 2
            ? ((v.slides.style.zoom = h),
              (v.slides.style.left = ""),
              (v.slides.style.top = ""),
              (v.slides.style.bottom = ""),
              (v.slides.style.right = ""),
              G({ layout: "" }))
            : ((v.slides.style.zoom = ""),
              (v.slides.style.left = "50%"),
              (v.slides.style.top = "50%"),
              (v.slides.style.bottom = "auto"),
              (v.slides.style.right = "auto"),
              G({ layout: "translate(-50%, -50%) scale(" + h + ")" }));
        const i = Array.from(v.wrapper.querySelectorAll(".slides section"));
        for (let t = 0, n = i.length; t < n; t++) {
          const n = i[t];
          "none" !== n.style.display &&
            (l.center || n.classList.contains("center")
              ? n.classList.contains("stack")
                ? (n.style.top = 0)
                : (n.style.top =
                    Math.max((e.height - n.scrollHeight) / 2, 0) + "px")
              : (n.style.top = ""));
        }
        t !== h &&
          J({ type: "resize", data: { oldScale: t, scale: h, size: e } });
      }
      P.update(), S.updateParallax(), k.isActive() && k.update();
    }
  }
  function re(e, t) {
    ei(v.slides, "section > .stretch, section > .r-stretch").forEach((i) => {
      let n = di(i, t);
      if (/(img|video)/gi.test(i.nodeName)) {
        const t = i.naturalWidth || i.videoWidth,
          a = i.naturalHeight || i.videoHeight,
          s = Math.min(e / t, n / a);
        (i.style.width = t * s + "px"), (i.style.height = a * s + "px");
      } else (i.style.width = e + "px"), (i.style.height = n + "px");
    });
  }
  function oe(e, t) {
    const i = {
      width: l.width,
      height: l.height,
      presentationWidth: e || v.wrapper.offsetWidth,
      presentationHeight: t || v.wrapper.offsetHeight,
    };
    return (
      (i.presentationWidth -= i.presentationWidth * l.margin),
      (i.presentationHeight -= i.presentationHeight * l.margin),
      "string" == typeof i.width &&
        /%$/.test(i.width) &&
        (i.width = (parseInt(i.width, 10) / 100) * i.presentationWidth),
      "string" == typeof i.height &&
        /%$/.test(i.height) &&
        (i.height = (parseInt(i.height, 10) / 100) * i.presentationHeight),
      i
    );
  }
  function le(e, t) {
    "object" == typeof e &&
      "function" == typeof e.setAttribute &&
      e.setAttribute("data-previous-indexv", t || 0);
  }
  function de(e) {
    if (
      "object" == typeof e &&
      "function" == typeof e.setAttribute &&
      e.classList.contains("stack")
    ) {
      const t = e.hasAttribute("data-start-indexv")
        ? "data-start-indexv"
        : "data-previous-indexv";
      return parseInt(e.getAttribute(t) || 0, 10);
    }
    return 0;
  }
  function ce(e = r) {
    return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i);
  }
  function ue() {
    return !(!r || !ce(r)) && !r.nextElementSibling;
  }
  function he() {
    return 0 === n && 0 === a;
  }
  function ge() {
    return (
      !!r &&
      !r.nextElementSibling &&
      (!ce(r) || !r.parentNode.nextElementSibling)
    );
  }
  function ve() {
    if (l.pause) {
      const e = v.wrapper.classList.contains("paused");
      We(),
        v.wrapper.classList.add("paused"),
        !1 === e && J({ type: "paused" });
    }
  }
  function pe() {
    const e = v.wrapper.classList.contains("paused");
    v.wrapper.classList.remove("paused"), _e(), e && J({ type: "resumed" });
  }
  function fe(e) {
    "boolean" == typeof e ? (e ? ve() : pe()) : me() ? pe() : ve();
  }
  function me() {
    return v.wrapper.classList.contains("paused");
  }
  function be(e) {
    "boolean" == typeof e ? (e ? Ke() : Ve()) : y ? Ke() : Ve();
  }
  function ye() {
    return !(!f || y);
  }
  function we(e, t, i, o) {
    s = r;
    const d = v.wrapper.querySelectorAll(".slides>section");
    if (0 === d.length) return;
    void 0 !== t || k.isActive() || (t = de(d[e])),
      s &&
        s.parentNode &&
        s.parentNode.classList.contains("stack") &&
        le(s.parentNode, a);
    const c = u.concat();
    u.length = 0;
    let h = n || 0,
      g = a || 0;
    (n = ke(".slides>section", void 0 === e ? n : e)),
      (a = ke(".slides>section.present>section", void 0 === t ? a : t));
    let f = n !== h || a !== g;
    f || (s = null);
    let m = d[n],
      b = m.querySelectorAll("section");
    r = b[a] || m;
    let y = !1;
    f &&
      s &&
      r &&
      !k.isActive() &&
      (s.hasAttribute("data-auto-animate") &&
        r.hasAttribute("data-auto-animate") &&
        ((y = !0), v.slides.classList.add("disable-slide-transitions")),
      (p = "running")),
      Le(),
      se(),
      k.isActive() && k.update(),
      void 0 !== i && A.goto(i),
      s &&
        s !== r &&
        (s.classList.remove("present"),
        s.setAttribute("aria-hidden", "true"),
        he() &&
          setTimeout(() => {
            De().forEach((e) => {
              le(e, 0);
            });
          }, 0));
    e: for (let e = 0, t = u.length; e < t; e++) {
      for (let t = 0; t < c.length; t++)
        if (c[t] === u[e]) {
          c.splice(t, 1);
          continue e;
        }
      v.viewport.classList.add(u[e]), J({ type: u[e] });
    }
    for (; c.length; ) v.viewport.classList.remove(c.pop());
    f &&
      J({
        type: "slidechanged",
        data: {
          indexh: n,
          indexv: a,
          previousSlide: s,
          currentSlide: r,
          origin: o,
        },
      }),
      (!f && s) || (w.stopEmbeddedContent(s), w.startEmbeddedContent(r)),
      q(F(r)),
      P.update(),
      C.update(),
      O.update(),
      S.update(),
      S.updateParallax(),
      R.update(),
      A.update(),
      x.writeURL(),
      _e(),
      y &&
        (setTimeout(() => {
          v.slides.classList.remove("disable-slide-transitions");
        }, 0),
        l.autoAnimate && E.run(s, r));
  }
  function Re() {
    X(),
      K(),
      se(),
      (f = l.autoSlide),
      _e(),
      S.create(),
      x.writeURL(),
      A.sortAll(),
      C.update(),
      P.update(),
      Le(),
      O.update(),
      O.updateVisibility(),
      S.update(!0),
      R.update(),
      w.formatEmbeddedContent(),
      !1 === l.autoPlayMedia
        ? w.stopEmbeddedContent(r, { unloadIframes: !1 })
        : w.startEmbeddedContent(r),
      k.isActive() && k.layout();
  }
  function Ee(e = r) {
    S.sync(e), A.sync(e), w.load(e), S.update(), O.update();
  }
  function Se() {
    Ie().forEach((e) => {
      ei(e, "section").forEach((e, t) => {
        t > 0 &&
          (e.classList.remove("present"),
          e.classList.remove("past"),
          e.classList.add("future"),
          e.setAttribute("aria-hidden", "true"));
      });
    });
  }
  function Ae() {
    Ie().forEach((e, t, i) => {
      v.slides.insertBefore(e, i[Math.floor(Math.random() * i.length)]);
    });
  }
  function ke(e, t) {
    let i = ei(v.wrapper, e),
      n = i.length,
      a = I.isPrintingPDF();
    if (n) {
      l.loop && (t %= n) < 0 && (t = n + t),
        (t = Math.max(Math.min(t, n - 1), 0));
      for (let e = 0; e < n; e++) {
        let n = i[e],
          s = l.rtl && !ce(n);
        n.classList.remove("past"),
          n.classList.remove("present"),
          n.classList.remove("future"),
          n.setAttribute("hidden", ""),
          n.setAttribute("aria-hidden", "true"),
          n.querySelector("section") && n.classList.add("stack"),
          a
            ? n.classList.add("present")
            : e < t
            ? (n.classList.add(s ? "future" : "past"),
              l.fragments &&
                ei(n, ".fragment").forEach((e) => {
                  e.classList.add("visible"),
                    e.classList.remove("current-fragment");
                }))
            : e > t &&
              (n.classList.add(s ? "past" : "future"),
              l.fragments &&
                ei(n, ".fragment.visible").forEach((e) => {
                  e.classList.remove("visible", "current-fragment");
                }));
      }
      let e = i[t],
        s = e.classList.contains("present");
      e.classList.add("present"),
        e.removeAttribute("hidden"),
        e.removeAttribute("aria-hidden"),
        s || J({ target: e, type: "visible", bubbles: !1 });
      let r = e.getAttribute("data-state");
      r && (u = u.concat(r.split(" ")));
    } else t = 0;
    return t;
  }
  function Le() {
    let e,
      t,
      i = Ie(),
      s = i.length;
    if (s && void 0 !== n) {
      let r = k.isActive() ? 10 : l.viewDistance;
      hi && (r = k.isActive() ? 6 : l.mobileViewDistance),
        I.isPrintingPDF() && (r = Number.MAX_VALUE);
      for (let o = 0; o < s; o++) {
        let d = i[o],
          c = ei(d, "section"),
          u = c.length;
        if (
          ((e = Math.abs((n || 0) - o) || 0),
          l.loop && (e = Math.abs(((n || 0) - o) % (s - r)) || 0),
          e < r ? w.load(d) : w.unload(d),
          u)
        ) {
          let i = de(d);
          for (let s = 0; s < u; s++) {
            let l = c[s];
            (t = o === (n || 0) ? Math.abs((a || 0) - s) : Math.abs(s - i)),
              e + t < r ? w.load(l) : w.unload(l);
          }
        }
      }
      He()
        ? v.wrapper.classList.add("has-vertical-slides")
        : v.wrapper.classList.remove("has-vertical-slides"),
        Oe()
          ? v.wrapper.classList.add("has-horizontal-slides")
          : v.wrapper.classList.remove("has-horizontal-slides");
    }
  }
  function xe({ includeFragments: e = !1 } = {}) {
    let t = v.wrapper.querySelectorAll(".slides>section"),
      i = v.wrapper.querySelectorAll(".slides>section.present>section"),
      s = {
        left: n > 0,
        right: n < t.length - 1,
        up: a > 0,
        down: a < i.length - 1,
      };
    if (
      (l.loop &&
        (t.length > 1 && ((s.left = !0), (s.right = !0)),
        i.length > 1 && ((s.up = !0), (s.down = !0))),
      t.length > 1 &&
        "linear" === l.navigationMode &&
        ((s.right = s.right || s.down), (s.left = s.left || s.up)),
      !0 === e)
    ) {
      let e = A.availableRoutes();
      (s.left = s.left || e.prev),
        (s.up = s.up || e.prev),
        (s.down = s.down || e.next),
        (s.right = s.right || e.next);
    }
    if (l.rtl) {
      let e = s.left;
      (s.left = s.right), (s.right = e);
    }
    return s;
  }
  function Ce(e = r) {
    let t = Ie(),
      i = 0;
    e: for (let n = 0; n < t.length; n++) {
      let a = t[n],
        s = a.querySelectorAll("section");
      for (let t = 0; t < s.length; t++) {
        if (s[t] === e) break e;
        "uncounted" !== s[t].dataset.visibility && i++;
      }
      if (a === e) break;
      !1 === a.classList.contains("stack") &&
        "uncounted" !== !a.dataset.visibility &&
        i++;
    }
    return i;
  }
  function Pe() {
    let e = Ue(),
      t = Ce();
    if (r) {
      let e = r.querySelectorAll(".fragment");
      if (e.length > 0) {
        let i = 0.9;
        t += (r.querySelectorAll(".fragment.visible").length / e.length) * i;
      }
    }
    return Math.min(t / (e - 1), 1);
  }
  function Ne(e) {
    let t,
      i = n,
      s = a;
    if (e) {
      let t = ce(e),
        n = t ? e.parentNode : e,
        a = Ie();
      (i = Math.max(a.indexOf(n), 0)),
        (s = void 0),
        t && (s = Math.max(ei(e.parentNode, "section").indexOf(e), 0));
    }
    if (!e && r) {
      if (r.querySelectorAll(".fragment").length > 0) {
        let e = r.querySelector(".current-fragment");
        t =
          e && e.hasAttribute("data-fragment-index")
            ? parseInt(e.getAttribute("data-fragment-index"), 10)
            : r.querySelectorAll(".fragment.visible").length - 1;
      }
    }
    return { h: i, v: s, f: t };
  }
  function Me() {
    return ei(
      v.wrapper,
      '.slides section:not(.stack):not([data-visibility="uncounted"])'
    );
  }
  function Ie() {
    return ei(v.wrapper, ".slides>section");
  }
  function Te() {
    return ei(v.wrapper, ".slides>section>section");
  }
  function De() {
    return ei(v.wrapper, ".slides>section.stack");
  }
  function Oe() {
    return Ie().length > 1;
  }
  function He() {
    return Te().length > 1;
  }
  function Be() {
    return Me().map((e) => {
      let t = {};
      for (let i = 0; i < e.attributes.length; i++) {
        let n = e.attributes[i];
        t[n.name] = n.value;
      }
      return t;
    });
  }
  function Ue() {
    return Me().length;
  }
  function je(e, t) {
    let i = Ie()[e],
      n = i && i.querySelectorAll("section");
    return n && n.length && "number" == typeof t ? (n ? n[t] : void 0) : i;
  }
  function ze(e, t) {
    let i = "number" == typeof e ? je(e, t) : e;
    if (i) return i.slideBackgroundElement;
  }
  function qe() {
    let e = Ne();
    return {
      indexh: e.h,
      indexv: e.v,
      indexf: e.f,
      paused: me(),
      overview: k.isActive(),
    };
  }
  function Fe(e) {
    if ("object" == typeof e) {
      we(ii(e.indexh), ii(e.indexv), ii(e.indexf));
      let t = ii(e.paused),
        i = ii(e.overview);
      "boolean" == typeof t && t !== me() && fe(t),
        "boolean" == typeof i && i !== k.isActive() && k.toggle(i);
    }
  }
  function _e() {
    if ((We(), r && !1 !== l.autoSlide)) {
      let e = r.querySelector(".current-fragment");
      e || (e = r.querySelector(".fragment"));
      let t = e ? e.getAttribute("data-autoslide") : null,
        i = r.parentNode ? r.parentNode.getAttribute("data-autoslide") : null,
        n = r.getAttribute("data-autoslide");
      t
        ? (f = parseInt(t, 10))
        : n
        ? (f = parseInt(n, 10))
        : i
        ? (f = parseInt(i, 10))
        : ((f = l.autoSlide),
          0 === r.querySelectorAll(".fragment").length &&
            ei(r, "video, audio").forEach((e) => {
              e.hasAttribute("data-autoplay") &&
                f &&
                (1e3 * e.duration) / e.playbackRate > f &&
                (f = (1e3 * e.duration) / e.playbackRate + 1e3);
            })),
        !f ||
          y ||
          me() ||
          k.isActive() ||
          (ge() && !A.availableRoutes().next && !0 !== l.loop) ||
          ((m = setTimeout(() => {
            "function" == typeof l.autoSlideMethod ? l.autoSlideMethod() : Qe(),
              _e();
          }, f)),
          (b = Date.now())),
        o && o.setPlaying(-1 !== m);
    }
  }
  function We() {
    clearTimeout(m), (m = -1);
  }
  function Ve() {
    f &&
      !y &&
      ((y = !0),
      J({ type: "autoslidepaused" }),
      clearTimeout(m),
      o && o.setPlaying(!1));
  }
  function Ke() {
    f && y && ((y = !1), J({ type: "autoslideresumed" }), _e());
  }
  function Xe() {
    (c.hasNavigatedHorizontally = !0),
      l.rtl
        ? (k.isActive() || !1 === A.next()) &&
          xe().left &&
          we(n + 1, "grid" === l.navigationMode ? a : void 0)
        : (k.isActive() || !1 === A.prev()) &&
          xe().left &&
          we(n - 1, "grid" === l.navigationMode ? a : void 0);
  }
  function $e() {
    (c.hasNavigatedHorizontally = !0),
      l.rtl
        ? (k.isActive() || !1 === A.prev()) &&
          xe().right &&
          we(n - 1, "grid" === l.navigationMode ? a : void 0)
        : (k.isActive() || !1 === A.next()) &&
          xe().right &&
          we(n + 1, "grid" === l.navigationMode ? a : void 0);
  }
  function Ye() {
    (k.isActive() || !1 === A.prev()) && xe().up && we(n, a - 1);
  }
  function Ge() {
    (c.hasNavigatedVertically = !0),
      (k.isActive() || !1 === A.next()) && xe().down && we(n, a + 1);
  }
  function Je() {
    if (!1 === A.prev())
      if (xe().up) Ye();
      else {
        let e;
        if (
          ((e = l.rtl
            ? ei(v.wrapper, ".slides>section.future").pop()
            : ei(v.wrapper, ".slides>section.past").pop()),
          e)
        ) {
          let t = e.querySelectorAll("section").length - 1 || void 0;
          we(n - 1, t);
        }
      }
  }
  function Qe() {
    if (
      ((c.hasNavigatedHorizontally = !0),
      (c.hasNavigatedVertically = !0),
      !1 === A.next())
    ) {
      let e = xe();
      e.down && e.right && l.loop && ue() && (e.down = !1),
        e.down ? Ge() : l.rtl ? Xe() : $e();
    }
  }
  function Ze(e) {
    l.autoSlideStoppable && Ve();
  }
  function et(e) {
    "running" === p &&
      /section/gi.test(e.target.nodeName) &&
      ((p = "idle"),
      J({
        type: "slidetransitionend",
        data: { indexh: n, indexv: a, previousSlide: s, currentSlide: r },
      }));
  }
  function tt(e) {
    se();
  }
  function it(e) {
    !1 === document.hidden &&
      document.activeElement !== document.body &&
      ("function" == typeof document.activeElement.blur &&
        document.activeElement.blur(),
      document.body.focus());
  }
  function nt(e) {
    if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
      let t = e.currentTarget.getAttribute("href");
      t && (te(t), e.preventDefault());
    }
  }
  function at(e) {
    ge() && !1 === l.loop ? (we(0, 0), Ke()) : y ? Ke() : Ve();
  }
  const st = {
    VERSION: "4.0.2",
    initialize: H,
    configure: V,
    sync: Re,
    syncSlide: Ee,
    syncFragments: A.sync.bind(A),
    slide: we,
    left: Xe,
    right: $e,
    up: Ye,
    down: Ge,
    prev: Je,
    next: Qe,
    navigateLeft: Xe,
    navigateRight: $e,
    navigateUp: Ye,
    navigateDown: Ge,
    navigatePrev: Je,
    navigateNext: Qe,
    navigateFragment: A.goto.bind(A),
    prevFragment: A.prev.bind(A),
    nextFragment: A.next.bind(A),
    on: $,
    off: Y,
    addEventListener: $,
    removeEventListener: Y,
    layout: se,
    shuffle: Ae,
    availableRoutes: xe,
    availableFragments: A.availableRoutes.bind(A),
    toggleHelp: ie,
    toggleOverview: k.toggle.bind(k),
    togglePause: fe,
    toggleAutoSlide: be,
    isFirstSlide: he,
    isLastSlide: ge,
    isLastVerticalSlide: ue,
    isVerticalSlide: ce,
    isPaused: me,
    isAutoSliding: ye,
    isSpeakerNotes: O.isSpeakerNotesWindow.bind(O),
    isOverview: k.isActive.bind(k),
    isFocused: T.isFocused.bind(T),
    isPrintingPDF: I.isPrintingPDF.bind(I),
    isReady: () => d,
    loadSlide: w.load.bind(w),
    unloadSlide: w.unload.bind(w),
    addEventListeners: K,
    removeEventListeners: X,
    dispatchEvent: J,
    getState: qe,
    setState: Fe,
    getProgress: Pe,
    getIndices: Ne,
    getSlidesAttributes: Be,
    getSlidePastCount: Ce,
    getTotalSlides: Ue,
    getSlide: je,
    getPreviousSlide: () => s,
    getCurrentSlide: () => r,
    getSlideBackground: ze,
    getSlideNotes: O.getSlideNotes.bind(O),
    getSlides: Me,
    getHorizontalSlides: Ie,
    getVerticalSlides: Te,
    hasHorizontalSlides: Oe,
    hasVerticalSlides: He,
    hasNavigatedHorizontally: () => c.hasNavigatedHorizontally,
    hasNavigatedVertically: () => c.hasNavigatedVertically,
    addKeyBinding: L.addKeyBinding.bind(L),
    removeKeyBinding: L.removeKeyBinding.bind(L),
    triggerKey: L.triggerKey.bind(L),
    registerKeyboardShortcut: L.registerKeyboardShortcut.bind(L),
    getComputedSlideSize: oe,
    getScale: () => h,
    getConfig: () => l,
    getQueryHash: li,
    getRevealElement: () => e,
    getSlidesElement: () => v.slides,
    getViewportElement: () => v.viewport,
    getBackgroundsElement: () => S.element,
    registerPlugin: M.registerPlugin.bind(M),
    hasPlugin: M.hasPlugin.bind(M),
    getPlugin: M.getPlugin.bind(M),
    getPlugins: M.getRegisteredPlugins.bind(M),
  };
  return (
    Zt(i, {
      ...st,
      announceStatus: q,
      getStatusText: F,
      print: I,
      focus: T,
      progress: P,
      controls: C,
      location: x,
      overview: k,
      fragments: A,
      slideContent: w,
      slideNumber: R,
      onUserInput: Ze,
      closeOverlay: ae,
      updateSlidesVisibility: Le,
      layoutSlideContents: re,
      transformSlides: G,
      cueAutoSlide: _e,
      cancelAutoSlide: We,
    }),
    st
  );
}
let ji = Ui,
  zi = [];
(ji.initialize = (e) => (
  Object.assign(ji, new Ui(document.querySelector(".reveal"), e)),
  zi.map((e) => e(ji)),
  ji.initialize()
)),
  [
    "configure",
    "on",
    "off",
    "addEventListener",
    "removeEventListener",
    "registerPlugin",
  ].forEach((e) => {
    ji[e] = (...t) => {
      zi.push((i) => i[e].call(null, ...t));
    };
  }),
  (ji.isReady = () => !1),
  (ji.VERSION = "4.0.2");
export default ji;
//# sourceMappingURL=reveal.esm.js.map
