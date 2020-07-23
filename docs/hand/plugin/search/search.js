!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).RevealSearch = t());
})(this, function () {
  "use strict";
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
  function t(e, t, n) {
    return (
      e(
        (n = {
          path: t,
          exports: {},
          require: function (e, t) {
            return (function () {
              throw new Error(
                "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
              );
            })(null == t && n.path);
          },
        }),
        n.exports
      ),
      n.exports
    );
  }
  var n = function (e) {
      return e && e.Math == Math && e;
    },
    r =
      n("object" == typeof globalThis && globalThis) ||
      n("object" == typeof window && window) ||
      n("object" == typeof self && self) ||
      n("object" == typeof e && e) ||
      Function("return this")(),
    o = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    },
    i = !o(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    c = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    },
    u = r.document,
    a = c(u) && c(u.createElement),
    l =
      !i &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(
            ((e = "div"), a ? u.createElement(e) : {}),
            "a",
            {
              get: function () {
                return 7;
              },
            }
          ).a
        );
        var e;
      }),
    f = function (e) {
      if (!c(e)) throw TypeError(String(e) + " is not an object");
      return e;
    },
    s = function (e, t) {
      if (!c(e)) return e;
      var n, r;
      if (t && "function" == typeof (n = e.toString) && !c((r = n.call(e))))
        return r;
      if ("function" == typeof (n = e.valueOf) && !c((r = n.call(e)))) return r;
      if (!t && "function" == typeof (n = e.toString) && !c((r = n.call(e))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    },
    p = Object.defineProperty,
    d = {
      f: i
        ? p
        : function (e, t, n) {
            if ((f(e), (t = s(t, !0)), f(n), l))
              try {
                return p(e, t, n);
              } catch (e) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e;
          },
    },
    g = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    },
    h = i
      ? function (e, t, n) {
          return d.f(e, t, g(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        },
    y = function (e, t) {
      try {
        h(r, e, t);
      } catch (n) {
        r[e] = t;
      }
      return t;
    },
    v = r["__core-js_shared__"] || y("__core-js_shared__", {}),
    b = t(function (e) {
      (e.exports = function (e, t) {
        return v[e] || (v[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: "3.6.5",
        mode: "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
      });
    }),
    x = {}.hasOwnProperty,
    m = function (e, t) {
      return x.call(e, t);
    },
    E = 0,
    S = Math.random(),
    w = function (e) {
      return (
        "Symbol(" +
        String(void 0 === e ? "" : e) +
        ")_" +
        (++E + S).toString(36)
      );
    },
    R =
      !!Object.getOwnPropertySymbols &&
      !o(function () {
        return !String(Symbol());
      }),
    O = R && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    _ = b("wks"),
    T = r.Symbol,
    j = O ? T : (T && T.withoutSetter) || w,
    P = function (e) {
      return (
        m(_, e) || (R && m(T, e) ? (_[e] = T[e]) : (_[e] = j("Symbol." + e))),
        _[e]
      );
    },
    I = {};
  I[P("toStringTag")] = "z";
  var C = "[object z]" === String(I),
    N = Function.toString;
  "function" != typeof v.inspectSource &&
    (v.inspectSource = function (e) {
      return N.call(e);
    });
  var A,
    k,
    $,
    L,
    M = v.inspectSource,
    U = r.WeakMap,
    D = "function" == typeof U && /native code/.test(M(U)),
    F = b("keys"),
    K = {},
    z = r.WeakMap;
  if (D) {
    var B = new z(),
      W = B.get,
      q = B.has,
      G = B.set;
    (A = function (e, t) {
      return G.call(B, e, t), t;
    }),
      (k = function (e) {
        return W.call(B, e) || {};
      }),
      ($ = function (e) {
        return q.call(B, e);
      });
  } else {
    var V = F[(L = "state")] || (F[L] = w(L));
    (K[V] = !0),
      (A = function (e, t) {
        return h(e, V, t), t;
      }),
      (k = function (e) {
        return m(e, V) ? e[V] : {};
      }),
      ($ = function (e) {
        return m(e, V);
      });
  }
  var Y = {
      set: A,
      get: k,
      has: $,
      enforce: function (e) {
        return $(e) ? k(e) : A(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!c(t) || (n = k(t)).type !== e)
            throw TypeError("Incompatible receiver, " + e + " required");
          return n;
        };
      },
    },
    X = t(function (e) {
      var t = Y.get,
        n = Y.enforce,
        o = String(String).split("String");
      (e.exports = function (e, t, i, c) {
        var u = !!c && !!c.unsafe,
          a = !!c && !!c.enumerable,
          l = !!c && !!c.noTargetGet;
        "function" == typeof i &&
          ("string" != typeof t || m(i, "name") || h(i, "name", t),
          (n(i).source = o.join("string" == typeof t ? t : ""))),
          e !== r
            ? (u ? !l && e[t] && (a = !0) : delete e[t],
              a ? (e[t] = i) : h(e, t, i))
            : a
            ? (e[t] = i)
            : y(t, i);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && t(this).source) || M(this);
      });
    }),
    H = {}.toString,
    J = function (e) {
      return H.call(e).slice(8, -1);
    },
    Q = P("toStringTag"),
    Z =
      "Arguments" ==
      J(
        (function () {
          return arguments;
        })()
      ),
    ee = C
      ? J
      : function (e) {
          var t, n, r;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), Q))
            ? n
            : Z
            ? J(t)
            : "Object" == (r = J(t)) && "function" == typeof t.callee
            ? "Arguments"
            : r;
        },
    te = C
      ? {}.toString
      : function () {
          return "[object " + ee(this) + "]";
        };
  C || X(Object.prototype, "toString", te, { unsafe: !0 });
  var ne = /#|\.prototype\./,
    re = function (e, t) {
      var n = ie[oe(e)];
      return n == ue || (n != ce && ("function" == typeof t ? o(t) : !!t));
    },
    oe = (re.normalize = function (e) {
      return String(e).replace(ne, ".").toLowerCase();
    }),
    ie = (re.data = {}),
    ce = (re.NATIVE = "N"),
    ue = (re.POLYFILL = "P"),
    ae = re,
    le =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e,
              t = !1,
              n = {};
            try {
              (e = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(n, []),
                (t = n instanceof Array);
            } catch (e) {}
            return function (n, r) {
              return (
                f(n),
                (function (e) {
                  if (!c(e) && null !== e)
                    throw TypeError(
                      "Can't set " + String(e) + " as a prototype"
                    );
                })(r),
                t ? e.call(n, r) : (n.__proto__ = r),
                n
              );
            };
          })()
        : void 0),
    fe = "".split,
    se = o(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == J(e) ? fe.call(e, "") : Object(e);
        }
      : Object,
    pe = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    },
    de = function (e) {
      return se(pe(e));
    },
    ge = Math.ceil,
    he = Math.floor,
    ye = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? he : ge)(e);
    },
    ve = Math.min,
    be = function (e) {
      return e > 0 ? ve(ye(e), 9007199254740991) : 0;
    },
    xe = Math.max,
    me = Math.min,
    Ee = function (e) {
      return function (t, n, r) {
        var o,
          i = de(t),
          c = be(i.length),
          u = (function (e, t) {
            var n = ye(e);
            return n < 0 ? xe(n + t, 0) : me(n, t);
          })(r, c);
        if (e && n != n) {
          for (; c > u; ) if ((o = i[u++]) != o) return !0;
        } else
          for (; c > u; u++)
            if ((e || u in i) && i[u] === n) return e || u || 0;
        return !e && -1;
      };
    },
    Se = { includes: Ee(!0), indexOf: Ee(!1) }.indexOf,
    we = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ].concat("length", "prototype"),
    Re = {
      f:
        Object.getOwnPropertyNames ||
        function (e) {
          return (function (e, t) {
            var n,
              r = de(e),
              o = 0,
              i = [];
            for (n in r) !m(K, n) && m(r, n) && i.push(n);
            for (; t.length > o; )
              m(r, (n = t[o++])) && (~Se(i, n) || i.push(n));
            return i;
          })(e, we);
        },
    },
    Oe = P("match"),
    _e = function () {
      var e = f(this),
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
  function Te(e, t) {
    return RegExp(e, t);
  }
  var je = {
      UNSUPPORTED_Y: o(function () {
        var e = Te("a", "y");
        return (e.lastIndex = 2), null != e.exec("abcd");
      }),
      BROKEN_CARET: o(function () {
        var e = Te("^r", "gy");
        return (e.lastIndex = 2), null != e.exec("str");
      }),
    },
    Pe = r,
    Ie = function (e) {
      return "function" == typeof e ? e : void 0;
    },
    Ce = function (e, t) {
      return arguments.length < 2
        ? Ie(Pe[e]) || Ie(r[e])
        : (Pe[e] && Pe[e][t]) || (r[e] && r[e][t]);
    },
    Ne = P("species"),
    Ae = d.f,
    ke = Re.f,
    $e = Y.set,
    Le = P("match"),
    Me = r.RegExp,
    Ue = Me.prototype,
    De = /a/g,
    Fe = /a/g,
    Ke = new Me(De) !== De,
    ze = je.UNSUPPORTED_Y;
  if (
    i &&
    ae(
      "RegExp",
      !Ke ||
        ze ||
        o(function () {
          return (
            (Fe[Le] = !1), Me(De) != De || Me(Fe) == Fe || "/a/i" != Me(De, "i")
          );
        })
    )
  ) {
    for (
      var Be = function (e, t) {
          var n,
            r,
            o,
            i = this instanceof Be,
            u = c((n = e)) && (void 0 !== (r = n[Oe]) ? !!r : "RegExp" == J(n)),
            a = void 0 === t;
          if (!i && u && e.constructor === Be && a) return e;
          Ke
            ? u && !a && (e = e.source)
            : e instanceof Be && (a && (t = _e.call(e)), (e = e.source)),
            ze && (o = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
          var l,
            f,
            s,
            p,
            d,
            g =
              ((l = Ke ? new Me(e, t) : Me(e, t)),
              (f = i ? this : Ue),
              (s = Be),
              le &&
                "function" == typeof (p = f.constructor) &&
                p !== s &&
                c((d = p.prototype)) &&
                d !== s.prototype &&
                le(l, d),
              l);
          return ze && o && $e(g, { sticky: o }), g;
        },
        We = function (e) {
          (e in Be) ||
            Ae(Be, e, {
              configurable: !0,
              get: function () {
                return Me[e];
              },
              set: function (t) {
                Me[e] = t;
              },
            });
        },
        qe = ke(Me),
        Ge = 0;
      qe.length > Ge;

    )
      We(qe[Ge++]);
    (Ue.constructor = Be), (Be.prototype = Ue), X(r, "RegExp", Be);
  }
  !(function (e) {
    var t = Ce(e),
      n = d.f;
    i &&
      t &&
      !t[Ne] &&
      n(t, Ne, {
        configurable: !0,
        get: function () {
          return this;
        },
      });
  })("RegExp");
  var Ve = {}.propertyIsEnumerable,
    Ye = Object.getOwnPropertyDescriptor,
    Xe = {
      f:
        Ye && !Ve.call({ 1: 2 }, 1)
          ? function (e) {
              var t = Ye(this, e);
              return !!t && t.enumerable;
            }
          : Ve,
    },
    He = Object.getOwnPropertyDescriptor,
    Je = {
      f: i
        ? He
        : function (e, t) {
            if (((e = de(e)), (t = s(t, !0)), l))
              try {
                return He(e, t);
              } catch (e) {}
            if (m(e, t)) return g(!Xe.f.call(e, t), e[t]);
          },
    },
    Qe = { f: Object.getOwnPropertySymbols },
    Ze =
      Ce("Reflect", "ownKeys") ||
      function (e) {
        var t = Re.f(f(e)),
          n = Qe.f;
        return n ? t.concat(n(e)) : t;
      },
    et = function (e, t) {
      for (var n = Ze(t), r = d.f, o = Je.f, i = 0; i < n.length; i++) {
        var c = n[i];
        m(e, c) || r(e, c, o(t, c));
      }
    },
    tt = Je.f,
    nt = RegExp.prototype.exec,
    rt = String.prototype.replace,
    ot = nt,
    it = (function () {
      var e = /a/,
        t = /b*/g;
      return (
        nt.call(e, "a"), nt.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
      );
    })(),
    ct = je.UNSUPPORTED_Y || je.BROKEN_CARET,
    ut = void 0 !== /()??/.exec("")[1];
  (it || ut || ct) &&
    (ot = function (e) {
      var t,
        n,
        r,
        o,
        i = this,
        c = ct && i.sticky,
        u = _e.call(i),
        a = i.source,
        l = 0,
        f = e;
      return (
        c &&
          (-1 === (u = u.replace("y", "")).indexOf("g") && (u += "g"),
          (f = String(e).slice(i.lastIndex)),
          i.lastIndex > 0 &&
            (!i.multiline || (i.multiline && "\n" !== e[i.lastIndex - 1])) &&
            ((a = "(?: " + a + ")"), (f = " " + f), l++),
          (n = new RegExp("^(?:" + a + ")", u))),
        ut && (n = new RegExp("^" + a + "$(?!\\s)", u)),
        it && (t = i.lastIndex),
        (r = nt.call(c ? n : i, f)),
        c
          ? r
            ? ((r.input = r.input.slice(l)),
              (r[0] = r[0].slice(l)),
              (r.index = i.lastIndex),
              (i.lastIndex += r[0].length))
            : (i.lastIndex = 0)
          : it && r && (i.lastIndex = i.global ? r.index + r[0].length : t),
        ut &&
          r &&
          r.length > 1 &&
          rt.call(r[0], n, function () {
            for (o = 1; o < arguments.length - 2; o++)
              void 0 === arguments[o] && (r[o] = void 0);
          }),
        r
      );
    });
  var at = ot;
  !(function (e, t) {
    var n,
      o,
      i,
      c,
      u,
      a = e.target,
      l = e.global,
      f = e.stat;
    if ((n = l ? r : f ? r[a] || y(a, {}) : (r[a] || {}).prototype))
      for (o in t) {
        if (
          ((c = t[o]),
          (i = e.noTargetGet ? (u = tt(n, o)) && u.value : n[o]),
          !ae(l ? o : a + (f ? "." : "#") + o, e.forced) && void 0 !== i)
        ) {
          if (typeof c == typeof i) continue;
          et(c, i);
        }
        (e.sham || (i && i.sham)) && h(c, "sham", !0), X(n, o, c, e);
      }
  })({ target: "RegExp", proto: !0, forced: /./.exec !== at }, { exec: at });
  var lt = RegExp.prototype,
    ft = lt.toString,
    st = o(function () {
      return "/a/b" != ft.call({ source: "a", flags: "b" });
    }),
    pt = "toString" != ft.name;
  (st || pt) &&
    X(
      RegExp.prototype,
      "toString",
      function () {
        var e = f(this),
          t = String(e.source),
          n = e.flags;
        return (
          "/" +
          t +
          "/" +
          String(
            void 0 === n && e instanceof RegExp && !("flags" in lt)
              ? _e.call(e)
              : n
          )
        );
      },
      { unsafe: !0 }
    );
  var dt = P("species"),
    gt = !o(function () {
      var e = /./;
      return (
        (e.exec = function () {
          var e = [];
          return (e.groups = { a: "7" }), e;
        }),
        "7" !== "".replace(e, "$<a>")
      );
    }),
    ht = "$0" === "a".replace(/./, "$0"),
    yt = P("replace"),
    vt = !!/./[yt] && "" === /./[yt]("a", "$0"),
    bt = !o(function () {
      var e = /(?:)/,
        t = e.exec;
      e.exec = function () {
        return t.apply(this, arguments);
      };
      var n = "ab".split(e);
      return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
    }),
    xt = function (e) {
      return function (t, n) {
        var r,
          o,
          i = String(pe(t)),
          c = ye(n),
          u = i.length;
        return c < 0 || c >= u
          ? e
            ? ""
            : void 0
          : (r = i.charCodeAt(c)) < 55296 ||
            r > 56319 ||
            c + 1 === u ||
            (o = i.charCodeAt(c + 1)) < 56320 ||
            o > 57343
          ? e
            ? i.charAt(c)
            : r
          : e
          ? i.slice(c, c + 2)
          : o - 56320 + ((r - 55296) << 10) + 65536;
      };
    },
    mt = { codeAt: xt(!1), charAt: xt(!0) }.charAt,
    Et = function (e, t, n) {
      return t + (n ? mt(e, t).length : 1);
    },
    St = function (e, t) {
      var n = e.exec;
      if ("function" == typeof n) {
        var r = n.call(e, t);
        if ("object" != typeof r)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return r;
      }
      if ("RegExp" !== J(e))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return at.call(e, t);
    },
    wt = Math.max,
    Rt = Math.min,
    Ot = Math.floor,
    _t = /\$([$&'`]|\d\d?|<[^>]*>)/g,
    Tt = /\$([$&'`]|\d\d?)/g;
  !(function (e, t, n, r) {
    var i = P(e),
      c = !o(function () {
        var t = {};
        return (
          (t[i] = function () {
            return 7;
          }),
          7 != ""[e](t)
        );
      }),
      u =
        c &&
        !o(function () {
          var t = !1,
            n = /a/;
          return (
            "split" === e &&
              (((n = {}).constructor = {}),
              (n.constructor[dt] = function () {
                return n;
              }),
              (n.flags = ""),
              (n[i] = /./[i])),
            (n.exec = function () {
              return (t = !0), null;
            }),
            n[i](""),
            !t
          );
        });
    if (
      !c ||
      !u ||
      ("replace" === e && (!gt || !ht || vt)) ||
      ("split" === e && !bt)
    ) {
      var a = /./[i],
        l = n(
          i,
          ""[e],
          function (e, t, n, r, o) {
            return t.exec === at
              ? c && !o
                ? { done: !0, value: a.call(t, n, r) }
                : { done: !0, value: e.call(n, t, r) }
              : { done: !1 };
          },
          {
            REPLACE_KEEPS_$0: ht,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: vt,
          }
        ),
        f = l[0],
        s = l[1];
      X(String.prototype, e, f),
        X(
          RegExp.prototype,
          i,
          2 == t
            ? function (e, t) {
                return s.call(e, this, t);
              }
            : function (e) {
                return s.call(e, this);
              }
        );
    }
    r && h(RegExp.prototype[i], "sham", !0);
  })("replace", 2, function (e, t, n, r) {
    var o = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
      i = r.REPLACE_KEEPS_$0,
      c = o ? "$" : "$0";
    return [
      function (n, r) {
        var o = pe(this),
          i = null == n ? void 0 : n[e];
        return void 0 !== i ? i.call(n, o, r) : t.call(String(o), n, r);
      },
      function (e, r) {
        if ((!o && i) || ("string" == typeof r && -1 === r.indexOf(c))) {
          var a = n(t, e, this, r);
          if (a.done) return a.value;
        }
        var l = f(e),
          s = String(this),
          p = "function" == typeof r;
        p || (r = String(r));
        var d = l.global;
        if (d) {
          var g = l.unicode;
          l.lastIndex = 0;
        }
        for (var h = []; ; ) {
          var y = St(l, s);
          if (null === y) break;
          if ((h.push(y), !d)) break;
          "" === String(y[0]) && (l.lastIndex = Et(s, be(l.lastIndex), g));
        }
        for (var v, b = "", x = 0, m = 0; m < h.length; m++) {
          y = h[m];
          for (
            var E = String(y[0]),
              S = wt(Rt(ye(y.index), s.length), 0),
              w = [],
              R = 1;
            R < y.length;
            R++
          )
            w.push(void 0 === (v = y[R]) ? v : String(v));
          var O = y.groups;
          if (p) {
            var _ = [E].concat(w, S, s);
            void 0 !== O && _.push(O);
            var T = String(r.apply(void 0, _));
          } else T = u(E, s, S, w, O, r);
          S >= x && ((b += s.slice(x, S) + T), (x = S + E.length));
        }
        return b + s.slice(x);
      },
    ];
    function u(e, n, r, o, i, c) {
      var u = r + e.length,
        a = o.length,
        l = Tt;
      return (
        void 0 !== i && ((i = Object(pe(i))), (l = _t)),
        t.call(c, l, function (t, c) {
          var l;
          switch (c.charAt(0)) {
            case "$":
              return "$";
            case "&":
              return e;
            case "`":
              return n.slice(0, r);
            case "'":
              return n.slice(u);
            case "<":
              l = i[c.slice(1, -1)];
              break;
            default:
              var f = +c;
              if (0 === f) return t;
              if (f > a) {
                var s = Ot(f / 10);
                return 0 === s
                  ? t
                  : s <= a
                  ? void 0 === o[s - 1]
                    ? c.charAt(1)
                    : o[s - 1] + c.charAt(1)
                  : t;
              }
              l = o[f - 1];
          }
          return void 0 === l ? "" : l;
        })
      );
    }
  });
  return function () {
    var e, t, n, r, o, i, c;
    function u() {
      (t = document.createElement("div")).classList.add("searchbox"),
        (t.style.position = "absolute"),
        (t.style.top = "10px"),
        (t.style.right = "10px"),
        (t.style.zIndex = 10),
        (t.innerHTML =
          '<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>\n\t\t</span>'),
        ((n = t.querySelector(".searchinput")).style.width = "240px"),
        (n.style.fontSize = "14px"),
        (n.style.padding = "4px 6px"),
        (n.style.color = "#000"),
        (n.style.background = "#fff"),
        (n.style.borderRadius = "2px"),
        (n.style.border = "0"),
        (n.style.outline = "0"),
        (n.style.boxShadow = "0 2px 18px rgba(0, 0, 0, 0.2)"),
        (n.style["-webkit-appearance"] = "none"),
        e.getRevealElement().appendChild(t),
        n.addEventListener(
          "keyup",
          function (t) {
            switch (t.keyCode) {
              case 13:
                t.preventDefault(),
                  (function () {
                    if (i) {
                      var t = n.value;
                      "" === t
                        ? (c && c.remove(), (r = null))
                        : ((c = new f("slidecontent")),
                          (r = c.apply(t)),
                          (o = 0));
                    }
                    r &&
                      (r.length && r.length <= o && (o = 0),
                      r.length > o && (e.slide(r[o].h, r[o].v), o++));
                  })(),
                  (i = !1);
                break;
              default:
                i = !0;
            }
          },
          !1
        ),
        l();
    }
    function a() {
      t || u(), (t.style.display = "inline"), n.focus(), n.select();
    }
    function l() {
      t || u(), (t.style.display = "none"), c && c.remove();
    }
    function f(t, n) {
      var r = document.getElementById(t) || document.body,
        o = n || "EM",
        i = new RegExp("^(?:" + o + "|SCRIPT|FORM)$"),
        c = ["#ff6", "#a0ffff", "#9f9", "#f99", "#f6f"],
        u = [],
        a = 0,
        l = "",
        f = [];
      (this.setRegex = function (e) {
        (e = e.replace(/^[^\w]+|[^\w]+$/g, "").replace(/[^\w'-]+/g, "|")),
          (l = new RegExp("(" + e + ")", "i"));
      }),
        (this.getRegex = function () {
          return l
            .toString()
            .replace(/^\/\\b\(|\)\\b\/i$/g, "")
            .replace(/\|/g, " ");
        }),
        (this.hiliteWords = function (t) {
          if (null != t && t && l && !i.test(t.nodeName)) {
            if (t.hasChildNodes())
              for (var n = 0; n < t.childNodes.length; n++)
                this.hiliteWords(t.childNodes[n]);
            var r, s;
            if (3 == t.nodeType)
              if ((r = t.nodeValue) && (s = l.exec(r))) {
                for (var p = t; null != p && "SECTION" != p.nodeName; )
                  p = p.parentNode;
                var d = e.getIndices(p),
                  g = f.length,
                  h = !1;
                for (n = 0; n < g; n++)
                  f[n].h === d.h && f[n].v === d.v && (h = !0);
                h || f.push(d),
                  u[s[0].toLowerCase()] ||
                    (u[s[0].toLowerCase()] = c[a++ % c.length]);
                var y = document.createElement(o);
                y.appendChild(document.createTextNode(s[0])),
                  (y.style.backgroundColor = u[s[0].toLowerCase()]),
                  (y.style.fontStyle = "inherit"),
                  (y.style.color = "#000");
                var v = t.splitText(s.index);
                (v.nodeValue = v.nodeValue.substring(s[0].length)),
                  t.parentNode.insertBefore(y, v);
              }
          }
        }),
        (this.remove = function () {
          for (
            var e, t = document.getElementsByTagName(o);
            t.length && (e = t[0]);

          )
            e.parentNode.replaceChild(e.firstChild, e);
        }),
        (this.apply = function (e) {
          if (null != e && e)
            return this.remove(), this.setRegex(e), this.hiliteWords(r), f;
        });
    }
    return {
      id: "search",
      init: function (n) {
        (e = n).registerKeyboardShortcut("CTRL + Shift + F", "Search"),
          document.addEventListener(
            "keydown",
            function (e) {
              "F" == e.key &&
                (e.ctrlKey || e.metaKey) &&
                (e.preventDefault(),
                t || u(),
                "inline" !== t.style.display ? a() : l());
            },
            !1
          );
      },
      open: a,
    };
  };
});
