import { q as he, _ as N, y as Oe, z as we, I as ze, ag as Ne, B as _e, aP as et, aO as tt, aN as rt, aS as it, aR as nt, aL as at, ac as ut, aK as st, aM as ot } from "./Switch-20a72367.mjs";
import * as x from "react";
import h, { forwardRef as lt, createContext as ct, useRef as dt, useCallback as ft } from "react";
import "./Spinner24-0167fd50.mjs";
var mt = ".".charCodeAt(0), vt = /\\(\\)?/g, bt = RegExp(
  // Match anything that isn't a dot or bracket.
  `[^.[\\]]+|\\[(?:([^"'][^[]*)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))`,
  "g"
), St = function(e) {
  var i = [];
  return e.charCodeAt(0) === mt && i.push(""), e.replace(bt, function(a, u, l, o) {
    var f = a;
    l ? f = o.replace(vt, "$1") : u && (f = u.trim()), i.push(f);
  }), i;
}, ge = {}, ht = /[.[\]]+/, xe = function(e) {
  if (e == null || !e.length)
    return [];
  if (typeof e != "string")
    throw new Error("toPath() expects a string");
  return ge[e] == null && (e.endsWith("[]") ? ge[e] = e.split(ht).filter(Boolean) : ge[e] = St(e)), ge[e];
}, B = function(e, i) {
  for (var a = xe(i), u = e, l = 0; l < a.length; l++) {
    var o = a[l];
    if (u == null || typeof u != "object" || Array.isArray(u) && isNaN(o))
      return;
    u = u[o];
  }
  return u;
};
function gt(t) {
  var e = pt(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function pt(t, e) {
  if (typeof t != "object" || t === null)
    return t;
  var i = t[Symbol.toPrimitive];
  if (i !== void 0) {
    var a = i.call(t, e || "default");
    if (typeof a != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Et = function t(e, i, a, u, l) {
  if (i >= a.length)
    return u;
  var o = a[i];
  if (isNaN(o)) {
    var f;
    if (e == null) {
      var E, n = t(void 0, i + 1, a, u, l);
      return n === void 0 ? void 0 : (E = {}, E[o] = n, E);
    }
    if (Array.isArray(e))
      throw new Error("Cannot set a non-numeric property on an array");
    var F = t(e[o], i + 1, a, u, l);
    if (F === void 0) {
      var L = Object.keys(e).length;
      if (e[o] === void 0 && L === 0)
        return;
      if (e[o] !== void 0 && L <= 1)
        return !isNaN(a[i - 1]) && !l ? {} : void 0;
      e[o];
      var y = he(e, [o].map(gt));
      return y;
    }
    return N({}, e, (f = {}, f[o] = F, f));
  }
  var j = Number(o);
  if (e == null) {
    var D = t(void 0, i + 1, a, u, l);
    if (D === void 0)
      return;
    var P = [];
    return P[j] = D, P;
  }
  if (!Array.isArray(e))
    throw new Error("Cannot set a numeric property on an object");
  var Y = e[j], S = t(Y, i + 1, a, u, l), W = [].concat(e);
  if (l && S === void 0) {
    if (W.splice(j, 1), W.length === 0)
      return;
  } else
    W[j] = S;
  return W;
}, H = function(e, i, a, u) {
  if (u === void 0 && (u = !1), e == null)
    throw new Error("Cannot call setIn() with " + String(e) + " state");
  if (i == null)
    throw new Error("Cannot call setIn() with " + String(i) + " key");
  return Et(e, 0, xe(i), a, u);
}, Pe = "FINAL_FORM/form-error", Se = "FINAL_FORM/array-error";
function Ae(t, e) {
  var i = t.errors, a = t.initialValues, u = t.lastSubmittedValues, l = t.submitErrors, o = t.submitFailed, f = t.submitSucceeded, E = t.submitting, n = t.values, F = e.active, L = e.blur, y = e.change, j = e.data, D = e.focus, P = e.modified, Y = e.modifiedSinceLastSubmit, S = e.name, W = e.touched, U = e.validating, A = e.visited, K = B(n, S), q = B(i, S);
  q && q[Se] && (q = q[Se]);
  var T = l && B(l, S), R = a && B(a, S), m = e.isEqual(R, K), de = !!(u && !e.isEqual(B(u, S), K)), ue = !q && !T;
  return {
    active: F,
    blur: L,
    change: y,
    data: j,
    dirty: !m,
    dirtySinceLastSubmit: de,
    error: q,
    focus: D,
    initial: R,
    invalid: !ue,
    length: Array.isArray(K) ? K.length : void 0,
    modified: P,
    modifiedSinceLastSubmit: Y,
    name: S,
    pristine: m,
    submitError: T,
    submitFailed: o,
    submitSucceeded: f,
    submitting: E,
    touched: W,
    valid: ue,
    value: K,
    visited: A,
    validating: U
  };
}
var De = ["active", "data", "dirty", "dirtySinceLastSubmit", "error", "initial", "invalid", "length", "modified", "modifiedSinceLastSubmit", "pristine", "submitError", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "value", "visited", "validating"], X = function(e, i) {
  if (e === i)
    return !0;
  if (typeof e != "object" || !e || typeof i != "object" || !i)
    return !1;
  var a = Object.keys(e), u = Object.keys(i);
  if (a.length !== u.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(i), o = 0; o < a.length; o++) {
    var f = a[o];
    if (!l(f) || e[f] !== i[f])
      return !1;
  }
  return !0;
};
function Ie(t, e, i, a, u, l) {
  var o = !1;
  return u.forEach(function(f) {
    a[f] && (t[f] = e[f], (!i || (~l.indexOf(f) ? !X(e[f], i[f]) : e[f] !== i[f])) && (o = !0));
  }), o;
}
var Ft = ["data"], yt = function(e, i, a, u) {
  var l = {
    blur: e.blur,
    change: e.change,
    focus: e.focus,
    name: e.name
  }, o = Ie(l, e, i, a, De, Ft) || !i;
  return o || u ? l : void 0;
}, Ue = ["active", "dirty", "dirtyFields", "dirtyFieldsSinceLastSubmit", "dirtySinceLastSubmit", "error", "errors", "hasSubmitErrors", "hasValidationErrors", "initialValues", "invalid", "modified", "modifiedSinceLastSubmit", "pristine", "submitting", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "touched", "valid", "validating", "values", "visited"], Vt = ["touched", "visited"];
function Ce(t, e, i, a) {
  var u = {}, l = Ie(u, t, e, i, Ue, Vt) || !e;
  return l || a ? u : void 0;
}
var qe = function(e) {
  var i, a;
  return function() {
    for (var u = arguments.length, l = new Array(u), o = 0; o < u; o++)
      l[o] = arguments[o];
    return (!i || l.length !== i.length || l.some(function(f, E) {
      return !X(i[E], f);
    })) && (i = l, a = e.apply(void 0, l)), a;
  };
}, Ee = function(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}, Ot = "4.20.9", wt = function(e, i) {
  return e === i;
}, me = function t(e) {
  return Object.keys(e).some(function(i) {
    var a = e[i];
    return a && typeof a == "object" && !(a instanceof Error) ? t(a) : typeof a < "u";
  });
};
function Rt(t) {
  var e = t.active, i = t.dirtySinceLastSubmit, a = t.modifiedSinceLastSubmit, u = t.error, l = t.errors, o = t.initialValues, f = t.pristine, E = t.submitting, n = t.submitFailed, F = t.submitSucceeded, L = t.submitError, y = t.submitErrors, j = t.valid, D = t.validating, P = t.values;
  return {
    active: e,
    dirty: !f,
    dirtySinceLastSubmit: i,
    modifiedSinceLastSubmit: a,
    error: u,
    errors: l,
    hasSubmitErrors: !!(L || y && me(y)),
    hasValidationErrors: !!(u || me(l)),
    invalid: !j,
    initialValues: o,
    pristine: f,
    submitting: E,
    submitFailed: n,
    submitSucceeded: F,
    submitError: L,
    submitErrors: y,
    valid: j,
    validating: D > 0,
    values: P
  };
}
function Me(t, e, i, a, u, l) {
  var o = u(i, a, e, l);
  return o ? (t(o), !0) : !1;
}
function ke(t, e, i, a, u) {
  var l = t.entries;
  Object.keys(l).forEach(function(o) {
    var f = l[Number(o)];
    if (f) {
      var E = f.subscription, n = f.subscriber, F = f.notified;
      Me(n, E, e, i, a, u || !F) && (f.notified = !0);
    }
  });
}
function Lt(t) {
  if (!t)
    throw new Error("No config specified");
  var e = t.debug, i = t.destroyOnUnregister, a = t.keepDirtyOnReinitialize, u = t.initialValues, l = t.mutators, o = t.onSubmit, f = t.validate, E = t.validateOnBlur;
  if (!o)
    throw new Error("No onSubmit function specified");
  var n = {
    subscribers: {
      index: 0,
      entries: {}
    },
    fieldSubscribers: {},
    fields: {},
    formState: {
      asyncErrors: {},
      dirtySinceLastSubmit: !1,
      modifiedSinceLastSubmit: !1,
      errors: {},
      initialValues: u && N({}, u),
      invalid: !1,
      pristine: !0,
      submitting: !1,
      submitFailed: !1,
      submitSucceeded: !1,
      resetWhileSubmitting: !1,
      valid: !0,
      validating: 0,
      values: u ? N({}, u) : {}
    },
    lastFormState: void 0
  }, F = 0, L = !1, y = !1, j = !1, D = 0, P = {}, Y = function(r) {
    return function(s) {
      return delete P[r], s;
    };
  }, S = function(r, s, c) {
    var d = B(r.formState.values, s), v = c(d);
    r.formState.values = H(r.formState.values, s, v) || {};
  }, W = function(r, s, c) {
    if (r.fields[s]) {
      var d, v;
      r.fields = N({}, r.fields, (d = {}, d[c] = N({}, r.fields[s], {
        name: c,
        // rebind event handlers
        blur: function() {
          return I.blur(c);
        },
        change: function(w) {
          return I.change(c, w);
        },
        focus: function() {
          return I.focus(c);
        },
        lastFieldState: void 0
      }), d)), delete r.fields[s], r.fieldSubscribers = N({}, r.fieldSubscribers, (v = {}, v[c] = r.fieldSubscribers[s], v)), delete r.fieldSubscribers[s];
      var g = B(r.formState.values, s);
      r.formState.values = H(r.formState.values, s, void 0) || {}, r.formState.values = H(r.formState.values, c, g), delete r.lastFormState;
    }
  }, U = function(r) {
    return function() {
      if (l) {
        for (var s = {
          formState: n.formState,
          fields: n.fields,
          fieldSubscribers: n.fieldSubscribers,
          lastFormState: n.lastFormState
        }, c = arguments.length, d = new Array(c), v = 0; v < c; v++)
          d[v] = arguments[v];
        var g = l[r](d, s, {
          changeValue: S,
          getIn: B,
          renameField: W,
          resetFieldState: I.resetFieldState,
          setIn: H,
          shallowEqual: X
        });
        return n.formState = s.formState, n.fields = s.fields, n.fieldSubscribers = s.fieldSubscribers, n.lastFormState = s.lastFormState, R(void 0, function() {
          m(), $();
        }), g;
      }
    };
  }, A = l ? Object.keys(l).reduce(function(b, r) {
    return b[r] = U(r), b;
  }, {}) : {}, K = function(r) {
    var s = [];
    if (f) {
      var c = f(N({}, n.formState.values));
      Ee(c) ? s.push(c.then(function(d) {
        return r(d, !0);
      })) : r(c, !1);
    }
    return s;
  }, q = function(r) {
    return Object.keys(r.validators).reduce(function(s, c) {
      var d = r.validators[Number(c)]();
      return d && s.push(d), s;
    }, []);
  }, T = function(r, s) {
    var c = [], d = q(r);
    if (d.length) {
      var v;
      d.forEach(function(g) {
        var O = g(B(n.formState.values, r.name), n.formState.values, g.length === 0 || g.length === 3 ? Ae(n.formState, n.fields[r.name]) : void 0);
        if (O && Ee(O)) {
          r.validating = !0;
          var w = O.then(function(V) {
            n.fields[r.name] && (n.fields[r.name].validating = !1, s(V));
          });
          c.push(w);
        } else
          v || (v = O);
      }), s(v);
    }
    return c;
  }, R = function(r, s) {
    if (L) {
      y = !0, s();
      return;
    }
    var c = n.fields, d = n.formState, v = N({}, c), g = Object.keys(v);
    if (!f && !g.some(function(ne) {
      return q(v[ne]).length;
    })) {
      s();
      return;
    }
    var O = !1;
    if (r) {
      var w = v[r];
      if (w) {
        var V = w.validateFields;
        V && (O = !0, g = V.length ? V.concat(r) : [r]);
      }
    }
    var k = {}, M = {}, J = {}, ie = [].concat(K(function(ne, oe) {
      oe ? M = ne || {} : k = ne || {};
    }), g.reduce(function(ne, oe) {
      return ne.concat(T(c[oe], function(Q) {
        J[oe] = Q;
      }));
    }, [])), z = ie.length > 0, C = ++D, fe = Promise.all(ie).then(Y(C));
    z && (P[C] = fe);
    var je = function(oe) {
      var Q = N({}, O ? d.errors : {}, k, oe ? M : d.asyncErrors), Be = function(le) {
        g.forEach(function(ae) {
          if (c[ae]) {
            var be = B(k, ae), Qe = B(Q, ae), Xe = q(v[ae]).length, Ze = J[ae];
            le(ae, Xe && Ze || f && be || (!be && !O ? Qe : void 0));
          }
        });
      };
      Be(function(ve, le) {
        Q = H(Q, ve, le) || {};
      }), Be(function(ve, le) {
        if (le && le[Se]) {
          var ae = B(Q, ve), be = [].concat(ae);
          be[Se] = le[Se], Q = H(Q, ve, be);
        }
      }), X(d.errors, Q) || (d.errors = Q), oe && (d.asyncErrors = M), d.error = k[Pe];
    };
    if (z && (n.formState.validating++, s()), je(!1), s(), z) {
      var $e = function() {
        n.formState.validating--, s();
      };
      fe.then(function() {
        D > C || je(!0);
      }).then($e, $e);
    }
  }, m = function(r) {
    if (!F) {
      var s = n.fields, c = n.fieldSubscribers, d = n.formState, v = N({}, s), g = function(w) {
        var V = v[w], k = Ae(d, V), M = V.lastFieldState;
        V.lastFieldState = k;
        var J = c[w];
        J && ke(J, k, M, yt, M === void 0);
      };
      r ? g(r) : Object.keys(v).forEach(g);
    }
  }, de = function() {
    Object.keys(n.fields).forEach(function(r) {
      n.fields[r].touched = !0;
    });
  }, ue = function() {
    return !!(n.formState.error || me(n.formState.errors));
  }, te = function() {
    var r = n.fields, s = n.formState, c = n.lastFormState, d = N({}, r), v = Object.keys(d), g = !1, O = v.reduce(function(z, C) {
      var fe = !d[C].isEqual(B(s.values, C), B(s.initialValues || {}, C));
      return fe && (g = !0, z[C] = !0), z;
    }, {}), w = v.reduce(function(z, C) {
      var fe = s.lastSubmittedValues || {};
      return d[C].isEqual(B(s.values, C), B(fe, C)) || (z[C] = !0), z;
    }, {});
    s.pristine = !g, s.dirtySinceLastSubmit = !!(s.lastSubmittedValues && Object.values(w).some(function(z) {
      return z;
    })), s.modifiedSinceLastSubmit = !!(s.lastSubmittedValues && // Object.values would treat values as mixed (facebook/flow#2221)
    Object.keys(d).some(function(z) {
      return d[z].modifiedSinceLastSubmit;
    })), s.valid = !s.error && !s.submitError && !me(s.errors) && !(s.submitErrors && me(s.submitErrors));
    var V = Rt(s), k = v.reduce(function(z, C) {
      return z.modified[C] = d[C].modified, z.touched[C] = d[C].touched, z.visited[C] = d[C].visited, z;
    }, {
      modified: {},
      touched: {},
      visited: {}
    }), M = k.modified, J = k.touched, ie = k.visited;
    return V.dirtyFields = c && X(c.dirtyFields, O) ? c.dirtyFields : O, V.dirtyFieldsSinceLastSubmit = c && X(c.dirtyFieldsSinceLastSubmit, w) ? c.dirtyFieldsSinceLastSubmit : w, V.modified = c && X(c.modified, M) ? c.modified : M, V.touched = c && X(c.touched, J) ? c.touched : J, V.visited = c && X(c.visited, ie) ? c.visited : ie, c && X(c, V) ? c : V;
  }, pe = function() {
    return e && !0 && e(te(), Object.keys(n.fields).reduce(function(r, s) {
      return r[s] = n.fields[s], r;
    }, {}));
  }, p = !1, G = !1, $ = function b() {
    if (p)
      G = !0;
    else {
      if (p = !0, pe(), !F && !(L && j)) {
        var r = n.lastFormState, s = te();
        s !== r && (n.lastFormState = s, ke(n.subscribers, s, r, Ce));
      }
      p = !1, G && (G = !1, b());
    }
  }, re = function() {
    return Object.keys(n.fields).some(function(r) {
      return n.fields[r].beforeSubmit && n.fields[r].beforeSubmit() === !1;
    });
  }, Z = function() {
    return Object.keys(n.fields).forEach(function(r) {
      return n.fields[r].afterSubmit && n.fields[r].afterSubmit();
    });
  }, se = function() {
    return Object.keys(n.fields).forEach(function(r) {
      return n.fields[r].modifiedSinceLastSubmit = !1;
    });
  };
  R(void 0, function() {
    $();
  });
  var I = {
    batch: function(r) {
      F++, r(), F--, m(), $();
    },
    blur: function(r) {
      var s = n.fields, c = n.formState, d = s[r];
      d && (delete c.active, s[r] = N({}, d, {
        active: !1,
        touched: !0
      }), E ? R(r, function() {
        m(), $();
      }) : (m(), $()));
    },
    change: function(r, s) {
      var c = n.fields, d = n.formState;
      if (B(d.values, r) !== s) {
        S(n, r, function() {
          return s;
        });
        var v = c[r];
        v && (c[r] = N({}, v, {
          modified: !0,
          modifiedSinceLastSubmit: !!d.lastSubmittedValues
        })), E ? (m(), $()) : R(r, function() {
          m(), $();
        });
      }
    },
    get destroyOnUnregister() {
      return !!i;
    },
    set destroyOnUnregister(b) {
      i = b;
    },
    focus: function(r) {
      var s = n.fields[r];
      s && !s.active && (n.formState.active = r, s.active = !0, s.visited = !0, m(), $());
    },
    mutators: A,
    getFieldState: function(r) {
      var s = n.fields[r];
      return s && s.lastFieldState;
    },
    getRegisteredFields: function() {
      return Object.keys(n.fields);
    },
    getState: function() {
      return te();
    },
    initialize: function(r) {
      var s = n.fields, c = n.formState, d = N({}, s), v = typeof r == "function" ? r(c.values) : r;
      a || (c.values = v);
      var g = a ? Object.keys(d).reduce(function(O, w) {
        var V = d[w], k = V.isEqual(B(c.values, w), B(c.initialValues || {}, w));
        return k || (O[w] = B(c.values, w)), O;
      }, {}) : {};
      c.initialValues = v, c.values = v, Object.keys(g).forEach(function(O) {
        c.values = H(c.values, O, g[O]) || {};
      }), R(void 0, function() {
        m(), $();
      });
    },
    isValidationPaused: function() {
      return L;
    },
    pauseValidation: function(r) {
      r === void 0 && (r = !0), L = !0, j = r;
    },
    registerField: function(r, s, c, d) {
      c === void 0 && (c = {}), n.fieldSubscribers[r] || (n.fieldSubscribers[r] = {
        index: 0,
        entries: {}
      });
      var v = n.fieldSubscribers[r].index++;
      n.fieldSubscribers[r].entries[v] = {
        subscriber: qe(s),
        subscription: c,
        notified: !1
      };
      var g = n.fields[r] || {
        active: !1,
        afterSubmit: d && d.afterSubmit,
        beforeSubmit: d && d.beforeSubmit,
        data: d && d.data || {},
        isEqual: d && d.isEqual || wt,
        lastFieldState: void 0,
        modified: !1,
        modifiedSinceLastSubmit: !1,
        name: r,
        touched: !1,
        valid: !0,
        validateFields: d && d.validateFields,
        validators: {},
        validating: !1,
        visited: !1
      };
      g.blur = g.blur || function() {
        return I.blur(r);
      }, g.change = g.change || function(M) {
        return I.change(r, M);
      }, g.focus = g.focus || function() {
        return I.focus(r);
      }, n.fields[r] = g;
      var O = !1, w = d && d.silent, V = function() {
        w && n.fields[r] ? m(r) : ($(), m());
      };
      if (d) {
        O = !!(d.getValidator && d.getValidator()), d.getValidator && (n.fields[r].validators[v] = d.getValidator);
        var k = B(n.formState.values, r) === void 0;
        d.initialValue !== void 0 && (k || B(n.formState.values, r) === B(n.formState.initialValues, r)) && (n.formState.initialValues = H(n.formState.initialValues || {}, r, d.initialValue), n.formState.values = H(n.formState.values, r, d.initialValue), R(void 0, V)), d.defaultValue !== void 0 && d.initialValue === void 0 && B(n.formState.initialValues, r) === void 0 && k && (n.formState.values = H(n.formState.values, r, d.defaultValue));
      }
      return O ? R(void 0, V) : V(), function() {
        var M = !1;
        n.fields[r] && (M = !!(n.fields[r].validators[v] && n.fields[r].validators[v]()), delete n.fields[r].validators[v]);
        var J = !!n.fieldSubscribers[r];
        J && delete n.fieldSubscribers[r].entries[v];
        var ie = J && !Object.keys(n.fieldSubscribers[r].entries).length;
        ie && (delete n.fieldSubscribers[r], delete n.fields[r], M && (n.formState.errors = H(n.formState.errors, r, void 0) || {}), i && (n.formState.values = H(n.formState.values, r, void 0, !0) || {})), w || (M ? R(void 0, function() {
          $(), m();
        }) : ie && $());
      };
    },
    reset: function(r) {
      r === void 0 && (r = n.formState.initialValues), n.formState.submitting && (n.formState.resetWhileSubmitting = !0), n.formState.submitFailed = !1, n.formState.submitSucceeded = !1, delete n.formState.submitError, delete n.formState.submitErrors, delete n.formState.lastSubmittedValues, I.initialize(r || {});
    },
    /**
     * Resets all field flags (e.g. touched, visited, etc.) to their initial state
     */
    resetFieldState: function(r) {
      n.fields[r] = N({}, n.fields[r], {
        active: !1,
        lastFieldState: void 0,
        modified: !1,
        touched: !1,
        valid: !0,
        validating: !1,
        visited: !1
      }), R(void 0, function() {
        m(), $();
      });
    },
    /**
     * Returns the form to a clean slate; that is:
     * - Clear all values
     * - Resets all fields to their initial state
     */
    restart: function(r) {
      r === void 0 && (r = n.formState.initialValues), I.batch(function() {
        for (var s in n.fields)
          I.resetFieldState(s), n.fields[s] = N({}, n.fields[s], {
            active: !1,
            lastFieldState: void 0,
            modified: !1,
            modifiedSinceLastSubmit: !1,
            touched: !1,
            valid: !0,
            validating: !1,
            visited: !1
          });
        I.reset(r);
      });
    },
    resumeValidation: function() {
      L = !1, j = !1, y && R(void 0, function() {
        m(), $();
      }), y = !1;
    },
    setConfig: function(r, s) {
      switch (r) {
        case "debug":
          e = s;
          break;
        case "destroyOnUnregister":
          i = s;
          break;
        case "initialValues":
          I.initialize(s);
          break;
        case "keepDirtyOnReinitialize":
          a = s;
          break;
        case "mutators":
          l = s, s ? (Object.keys(A).forEach(function(c) {
            c in s || delete A[c];
          }), Object.keys(s).forEach(function(c) {
            A[c] = U(c);
          })) : Object.keys(A).forEach(function(c) {
            delete A[c];
          });
          break;
        case "onSubmit":
          o = s;
          break;
        case "validate":
          f = s, R(void 0, function() {
            m(), $();
          });
          break;
        case "validateOnBlur":
          E = s;
          break;
        default:
          throw new Error("Unrecognised option " + r);
      }
    },
    submit: function() {
      var r = n.formState;
      if (!r.submitting) {
        if (delete r.submitErrors, delete r.submitError, r.lastSubmittedValues = N({}, r.values), ue()) {
          de(), se(), n.formState.submitFailed = !0, $(), m();
          return;
        }
        var s = Object.keys(P);
        if (s.length) {
          Promise.all(s.map(function(w) {
            return P[Number(w)];
          })).then(I.submit, console.error);
          return;
        }
        var c = re();
        if (!c) {
          var d, v = !1, g = function(V) {
            r.submitting = !1;
            var k = r.resetWhileSubmitting;
            return k && (r.resetWhileSubmitting = !1), V && me(V) ? (r.submitFailed = !0, r.submitSucceeded = !1, r.submitErrors = V, r.submitError = V[Pe], de()) : (k || (r.submitFailed = !1, r.submitSucceeded = !0), Z()), $(), m(), v = !0, d && d(V), V;
          };
          r.submitting = !0, r.submitFailed = !1, r.submitSucceeded = !1, r.lastSubmittedValues = N({}, r.values), se();
          var O = o(r.values, I, g);
          if (!v) {
            if (O && Ee(O))
              return $(), m(), O.then(g, function(w) {
                throw g(), w;
              });
            if (o.length >= 3)
              return $(), m(), new Promise(function(w) {
                d = w;
              });
            g(O);
          }
        }
      }
    },
    subscribe: function(r, s) {
      if (!r)
        throw new Error("No callback given.");
      if (!s)
        throw new Error("No subscription provided. What values do you want to listen to?");
      var c = qe(r), d = n.subscribers, v = d.index++;
      d.entries[v] = {
        subscriber: c,
        subscription: s,
        notified: !1
      };
      var g = te();
      return Me(c, s, g, g, Ce, !0), function() {
        delete d.entries[v];
      };
    }
  };
  return I;
}
var jt = ["render", "children", "component"];
function Re(t, e, i) {
  var a = t.render, u = t.children, l = t.component, o = he(t, jt);
  if (l)
    return /* @__PURE__ */ x.createElement(l, Object.assign(e, o, {
      children: u,
      render: a
    }));
  if (a)
    return a(u === void 0 ? Object.assign(e, o) : (
      // inject children back in
      Object.assign(e, o, {
        children: u
      })
    ));
  if (typeof u != "function")
    throw new Error("Must specify either a render prop, a render function as children, or a component prop to " + i);
  return u(Object.assign(e, o));
}
function _(t, e, i) {
  i === void 0 && (i = function(l, o) {
    return l === o;
  });
  var a = h.useRef(t);
  h.useEffect(function() {
    i(t, a.current) || (e(), a.current = t);
  });
}
function $t(t) {
  var e = h.useRef();
  return e.current || (e.current = t()), e.current;
}
var Fe = function(e, i) {
  if (e === i)
    return !0;
  if (typeof e != "object" || !e || typeof i != "object" || !i)
    return !1;
  var a = Object.keys(e), u = Object.keys(i);
  if (a.length !== u.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(i), o = 0; o < a.length; o++) {
    var f = a[o];
    if (!l(f) || e[f] !== i[f])
      return !1;
  }
  return !0;
}, We = function(e) {
  return !!(e && typeof e.stopPropagation == "function");
}, Ke = /* @__PURE__ */ x.createContext();
function Te(t) {
  var e = h.useRef(t);
  return h.useEffect(function() {
    e.current = t;
  }), e;
}
var Bt = "6.5.8", Ge = function(e, i, a) {
  a.forEach(function(u) {
    Object.defineProperty(e, u, {
      get: function() {
        return i[u];
      },
      enumerable: !0
    });
  });
}, He = function(e, i) {
  return Ge(e, i, ["active", "dirty", "dirtyFields", "dirtySinceLastSubmit", "dirtyFieldsSinceLastSubmit", "error", "errors", "hasSubmitErrors", "hasValidationErrors", "initialValues", "invalid", "modified", "modifiedSinceLastSubmit", "pristine", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "validating", "values", "visited"]);
}, Nt = function(e, i) {
  return Ge(e, i, ["active", "data", "dirty", "dirtySinceLastSubmit", "error", "initial", "invalid", "length", "modified", "modifiedSinceLastSubmit", "pristine", "submitError", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "validating", "visited"]);
}, Pt = ["debug", "decorators", "destroyOnUnregister", "form", "initialValues", "initialValuesEqual", "keepDirtyOnReinitialize", "mutators", "onSubmit", "subscription", "validate", "validateOnBlur"], At = {
  "final-form": Ot,
  "react-final-form": Bt
}, Ye = Ue.reduce(function(t, e) {
  return t[e] = !0, t;
}, {});
function Ct(t) {
  var e = t.debug, i = t.decorators, a = i === void 0 ? [] : i, u = t.destroyOnUnregister, l = t.form, o = t.initialValues, f = t.initialValuesEqual, E = t.keepDirtyOnReinitialize, n = t.mutators, F = t.onSubmit, L = t.subscription, y = L === void 0 ? Ye : L, j = t.validate, D = t.validateOnBlur, P = he(t, Pt), Y = {
    debug: e,
    destroyOnUnregister: u,
    initialValues: o,
    keepDirtyOnReinitialize: E,
    mutators: n,
    onSubmit: F,
    validate: j,
    validateOnBlur: D
  }, S = $t(function() {
    var R = l || Lt(Y);
    return R.pauseValidation(), R;
  }), W = x.useState(function() {
    var R = {};
    return S.subscribe(function(m) {
      R = m;
    }, y)(), R;
  }), U = W[0], A = W[1], K = Te(U);
  x.useEffect(function() {
    S.isValidationPaused() && S.resumeValidation();
    var R = [S.subscribe(function(m) {
      Fe(m, K.current) || A(m);
    }, y)].concat(a ? a.map(function(m) {
      return (
        // this noop ternary is to appease the flow gods
        // istanbul ignore next
        m(S)
      );
    }) : []);
    return function() {
      S.pauseValidation(), R.reverse().forEach(function(m) {
        return m();
      });
    };
  }, a), process.env.NODE_ENV !== "production" && _(a, function() {
    console.error("Form decorators should not change from one render to the next as new values will be ignored");
  }, Fe), _(e, function() {
    S.setConfig("debug", e);
  }), _(u, function() {
    S.destroyOnUnregister = !!u;
  }), _(E, function() {
    S.setConfig("keepDirtyOnReinitialize", E);
  }), _(o, function() {
    S.setConfig("initialValues", o);
  }, f || Fe), _(n, function() {
    S.setConfig("mutators", n);
  }), _(F, function() {
    S.setConfig("onSubmit", F);
  }), _(j, function() {
    S.setConfig("validate", j);
  }), _(D, function() {
    S.setConfig("validateOnBlur", D);
  });
  var q = function(m) {
    return m && (typeof m.preventDefault == "function" && m.preventDefault(), typeof m.stopPropagation == "function" && m.stopPropagation()), S.submit();
  }, T = {
    form: N({}, S, {
      reset: function(m) {
        We(m) ? S.reset() : S.reset(m);
      }
    }),
    handleSubmit: q
  };
  return He(T, U), /* @__PURE__ */ x.createElement(Ke.Provider, {
    value: S
  }, Re(N({}, P, {
    __versions: At
  }), T, "ReactFinalForm"));
}
function Le(t) {
  var e = x.useContext(Ke);
  if (!e)
    throw new Error((t || "useForm") + " must be used inside of a <Form> component");
  return e;
}
function Je(t) {
  var e = t === void 0 ? {} : t, i = e.onChange, a = e.subscription, u = a === void 0 ? Ye : a, l = Le("useFormState"), o = x.useRef(!0), f = x.useRef(i);
  f.current = i;
  var E = x.useState(function() {
    var y = {};
    return l.subscribe(function(j) {
      y = j;
    }, u)(), i && i(y), y;
  }), n = E[0], F = E[1];
  x.useEffect(
    function() {
      return l.subscribe(function(y) {
        o.current ? o.current = !1 : (F(y), f.current && f.current(y));
      }, u);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var L = {};
  return He(L, n), L;
}
var qt = ["onChange", "subscription"];
function gr(t) {
  var e = t.onChange, i = t.subscription, a = he(t, qt), u = Le("FormSpy"), l = Je({
    onChange: e,
    subscription: i
  });
  if (e)
    return null;
  var o = {
    form: N({}, u, {
      reset: function(E) {
        We(E) ? u.reset() : u.reset(E);
      }
    })
  };
  return Re(N({}, a, o), l, "FormSpy");
}
var kt = typeof window < "u" && window.navigator && window.navigator.product && window.navigator.product === "ReactNative", zt = function(e) {
  var i = [];
  if (e)
    for (var a = 0; a < e.length; a++) {
      var u = e[a];
      u.selected && i.push(u.value);
    }
  return i;
}, xt = function(e, i, a, u) {
  if (!u && e.nativeEvent && e.nativeEvent.text !== void 0 || u && e.nativeEvent)
    return e.nativeEvent.text;
  var l = e, o = l.target, f = o.type, E = o.value, n = o.checked;
  switch (f) {
    case "checkbox":
      if (a !== void 0) {
        if (n)
          return Array.isArray(i) ? i.concat(a) : [a];
        if (!Array.isArray(i))
          return i;
        var F = i.indexOf(a);
        return F < 0 ? i : i.slice(0, F).concat(i.slice(F + 1));
      } else
        return !!n;
    case "select-multiple":
      return zt(e.target.options);
    default:
      return E;
  }
};
function ye(t) {
  var e = x.useRef(t);
  return x.useEffect(function() {
    e.current = t;
  }), x.useCallback(function() {
    for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++)
      a[u] = arguments[u];
    return e.current.apply(null, a);
  }, []);
}
var Dt = De.reduce(function(t, e) {
  return t[e] = !0, t;
}, {}), Ve = function(e, i) {
  return e === void 0 ? "" : e;
}, It = function(e, i) {
  return e === "" ? void 0 : e;
}, Ut = function(e, i) {
  return e === i;
};
function ee(t, e) {
  e === void 0 && (e = {});
  var i = e, a = i.afterSubmit, u = i.allowNull, l = i.component, o = i.data, f = i.defaultValue, E = i.format, n = E === void 0 ? Ve : E, F = i.formatOnBlur, L = i.initialValue, y = i.multiple, j = i.parse, D = j === void 0 ? It : j, P = i.subscription, Y = P === void 0 ? Dt : P, S = i.type, W = i.validateFields, U = i.value, A = Le("useField"), K = Te(e), q = function(G, $) {
    return (
      // avoid using `state` const in any closures created inside `register`
      // because they would refer `state` from current execution context
      // whereas actual `state` would defined in the subsequent `useField` hook
      // execution
      // (that would be caused by `setState` call performed in `register` callback)
      A.registerField(t, G, Y, {
        afterSubmit: a,
        beforeSubmit: function() {
          var Z = K.current, se = Z.beforeSubmit, I = Z.formatOnBlur, b = Z.format, r = b === void 0 ? Ve : b;
          if (I) {
            var s = A.getFieldState(t), c = s.value, d = r(c, t);
            d !== c && A.change(t, d);
          }
          return se && se();
        },
        data: o,
        defaultValue: f,
        getValidator: function() {
          return K.current.validate;
        },
        initialValue: L,
        isEqual: function(Z, se) {
          return (K.current.isEqual || Ut)(Z, se);
        },
        silent: $,
        validateFields: W
      })
    );
  }, T = x.useRef(!0), R = x.useState(function() {
    var p = {}, G = A.destroyOnUnregister;
    return A.destroyOnUnregister = !1, q(function($) {
      p = $;
    }, !0)(), A.destroyOnUnregister = G, p;
  }), m = R[0], de = R[1];
  x.useEffect(
    function() {
      return q(function(p) {
        T.current ? T.current = !1 : de(p);
      }, !1);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      o,
      f,
      // If we want to allow inline fat-arrow field-level validation functions, we
      // cannot reregister field every time validate function !==.
      // validate,
      L
      // The validateFields array is often passed as validateFields={[]}, creating
      // a !== new array every time. If it needs to be changed, a rerender/reregister
      // can be forced by changing the key prop
      // validateFields
    ]
  );
  var ue = {};
  Nt(ue, m);
  var te = {
    name: t,
    get value() {
      var p = m.value;
      return F ? l === "input" && (p = Ve(p)) : p = n(p, t), p === null && !u && (p = ""), S === "checkbox" || S === "radio" ? U : l === "select" && y ? p || [] : p;
    },
    get checked() {
      var p = m.value;
      if (S === "checkbox")
        return p = n(p, t), U === void 0 ? !!p : !!(Array.isArray(p) && ~p.indexOf(U));
      if (S === "radio")
        return n(p, t) === U;
    },
    onBlur: ye(function(p) {
      if (m.blur(), F) {
        var G = A.getFieldState(m.name);
        m.change(n(G.value, m.name));
      }
    }),
    onChange: ye(function(p) {
      if (process.env.NODE_ENV !== "production" && p && p.target) {
        var G = p.target.type, $ = ~["checkbox", "radio", "select-multiple"].indexOf(G) && !S && l !== "select", re = G === "select-multiple" ? m.value : U;
        $ && console.error('You must pass `type="' + (G === "select-multiple" ? "select" : G) + '"` prop to your Field(' + t + `) component.
` + ("Without it we don't know how to unpack your `value` prop - " + (Array.isArray(re) ? "[" + re + "]" : '"' + re + '"') + "."));
      }
      var Z = p && p.target ? xt(p, m.value, U, kt) : p;
      m.change(D(Z, t));
    }),
    onFocus: ye(function(p) {
      return m.focus();
    })
  };
  y && (te.multiple = y), S !== void 0 && (te.type = S);
  var pe = {
    input: te,
    meta: ue
  };
  return pe;
}
var Mt = ["afterSubmit", "allowNull", "beforeSubmit", "children", "component", "data", "defaultValue", "format", "formatOnBlur", "initialValue", "isEqual", "multiple", "name", "parse", "subscription", "type", "validate", "validateFields", "value"], pr = /* @__PURE__ */ x.forwardRef(function(e, i) {
  var a = e.afterSubmit, u = e.allowNull, l = e.beforeSubmit, o = e.children, f = e.component, E = e.data, n = e.defaultValue, F = e.format, L = e.formatOnBlur, y = e.initialValue, j = e.isEqual, D = e.multiple, P = e.name, Y = e.parse, S = e.subscription, W = e.type, U = e.validate, A = e.validateFields, K = e.value, q = he(e, Mt), T = ee(P, {
    afterSubmit: a,
    allowNull: u,
    beforeSubmit: l,
    children: o,
    component: f,
    data: E,
    defaultValue: n,
    format: F,
    formatOnBlur: L,
    initialValue: y,
    isEqual: j,
    multiple: D,
    parse: Y,
    subscription: S,
    type: W,
    validate: U,
    validateFields: A,
    value: K
  });
  if (typeof o == "function")
    return o(N({}, T, q));
  if (typeof f == "string")
    return /* @__PURE__ */ x.createElement(f, N({}, T.input, {
      children: o,
      ref: i
    }, q));
  if (!P)
    throw new Error("prop name cannot be undefined in <Field> component");
  return Re(N({
    children: o,
    component: f,
    ref: i
  }, q), T, "Field(" + P + ")");
});
const Wt = Oe({
  root: {
    marginTop: "0.25em"
  },
  hint: {
    fontSize: "0.7em"
  }
}), Kt = we(Wt), Tt = ({ children: t }) => {
  const e = Kt();
  return /* @__PURE__ */ h.createElement(
    "div",
    {
      className: e.root
    },
    /* @__PURE__ */ h.createElement(ze, { className: e.hint }, t)
  );
}, Gt = Tt, Ht = Oe({
  root: {
    marginTop: "0.25em",
    color: Ne.red.main
  },
  error: {
    color: Ne.red.main,
    fontSize: "0.7em",
    cursor: "default"
  }
}), Yt = we(Ht), Jt = ({ children: t }) => {
  const e = Yt();
  return /* @__PURE__ */ h.createElement(
    "div",
    {
      className: e.root
    },
    /* @__PURE__ */ h.createElement(ze, { className: e.error }, t)
  );
}, Qt = Jt, Xt = () => Oe({
  root: {
    width: "100%",
    fontSize: "1rem",
    "& + &": {
      marginTop: "1.5em"
    },
    "& $error + $hint": {
      marginTop: 0
    }
  },
  hint: {},
  error: {},
  asterisk: {
    marginRight: "0.3125em",
    color: _e.error.main,
    fontSize: "0.875em"
  }
}), Zt = we(Xt), _t = ({ children: t, error: e, required: i, hint: a }) => {
  const u = Zt();
  return /* @__PURE__ */ h.createElement(
    "div",
    {
      className: u.root
    },
    i && /* @__PURE__ */ h.createElement("span", { className: u.asterisk }, "*"),
    t,
    e && /* @__PURE__ */ h.createElement(Qt, null, e),
    a && /* @__PURE__ */ h.createElement(Gt, null, a)
  );
}, ce = _t, er = (t) => {
  const { meta: e, input: i } = ee(t.name);
  return /* @__PURE__ */ h.createElement(ce, { error: e.error || e.submitError }, /* @__PURE__ */ h.createElement(et, { variant: "outlined", ...i, ...t }));
}, Er = er, tr = (t) => {
  const { input: e, meta: i } = ee(t.name, { type: "checkbox" }), a = i.touched ? i.error || i.submitError : "", u = (l, o) => {
    e.onChange(l.target.checked ? t.onChangeData ?? l : l), t.onChange && t.onChange(l, o);
  };
  return /* @__PURE__ */ h.createElement(ce, { error: a }, /* @__PURE__ */ h.createElement(tt, { ...t, checked: e.value, onChange: u }));
}, Fr = tr, rr = (t) => {
  const { meta: e, input: i } = ee(t.name), a = e.touched && (e.error || e.submitError);
  return /* @__PURE__ */ h.createElement(ce, { error: a, hint: t.hint }, /* @__PURE__ */ h.createElement(rt, { ...t, labelProps: { label: t.label, ...t.labelProps || {} }, ...i, name: i.name, error: !!a }));
}, yr = rr, ir = (t) => {
  const { input: e } = ee(t.name ?? "", { type: "radio" });
  return /* @__PURE__ */ h.createElement(it, { ...t, checked: e.checked });
}, Vr = ir, nr = (t) => {
  const { children: e, ...i } = t, { meta: a, input: u } = ee(i.name, { type: "radio" }), l = a.touched ? a.error || a.submitError : "";
  return /* @__PURE__ */ h.createElement(ce, { error: l }, /* @__PURE__ */ h.createElement(nt, { ...i, ...u }, h.Children.toArray(e).filter(h.isValidElement).map(
    (o) => h.cloneElement(o, {
      name: t.name
    })
  )));
}, Or = nr, ar = (t) => {
  const { input: e, meta: i } = ee(t.name, { type: "checkbox" }), a = i.touched ? i.error || i.submitError : "", u = (l, o) => {
    e.onChange(l.target.checked ? t.onChangeData ?? l : l), t.onChange && t.onChange(l, o);
  };
  return /* @__PURE__ */ h.createElement(ce, { error: a }, /* @__PURE__ */ h.createElement(at, { ...t, checked: e.checked, onChange: u }));
}, wr = ar, ur = (t) => {
  const { submitting: e } = Je({ subscription: { submitting: !0 } });
  return /* @__PURE__ */ h.createElement(
    ut,
    {
      type: "submit",
      disabled: e,
      variant: "outlined",
      color: "primary",
      ...t
    }
  );
}, Rr = ur, sr = (t) => {
  var l;
  const { meta: e, input: i } = ee(t.name), a = e.touched && (e.error || e.submitError), u = (o) => {
    i.onChange(o);
  };
  return /* @__PURE__ */ h.createElement(ce, { error: a }, /* @__PURE__ */ h.createElement(st, { ...t, ...i, value: ((l = i.value) == null ? void 0 : l.name) || "", name: i.name, onSelect: u, error: a }));
}, Lr = sr, or = (t) => {
  const { meta: e, input: i } = ee(t.name), a = e.touched && (e.error || e.submitError);
  return /* @__PURE__ */ h.createElement(ce, { error: a, hint: t.hint }, /* @__PURE__ */ h.createElement(ot, { ...t, ...i, name: i.name, error: !!a }));
}, jr = or, lr = lt(function({ onSubmit: e, className: i, style: a, children: u, ...l }, o) {
  return /* @__PURE__ */ h.createElement(
    "form",
    {
      ...l,
      ref: o,
      onSubmit: e,
      className: i,
      style: a
    },
    u
  );
}), cr = lr, dr = () => {
  const t = {};
  return {
    getValidators: () => t,
    setValidators: (e, i) => {
      t[e] = i;
    },
    clearValidators: (e) => {
      delete t[e];
    }
  };
}, fr = ct(null), mr = (t, e, i) => Object.entries(t).reduce(
  (a, [u, l]) => {
    const o = l == null ? void 0 : l(
      B(e, u),
      e,
      i.getFieldState(u)
    );
    return o ? H(a || {}, u, o) : a;
  },
  void 0
), vr = (t) => {
  const {
    children: e,
    onSubmit: i,
    successSubmitMessage: a,
    failedSubmitMessage: u,
    decorators: l = [],
    ...o
  } = t, f = dt(dr()), E = ft(
    async (n, F, L) => {
      const y = mr(
        f.current.getValidators(),
        n,
        F
      );
      return y || await i(n, F, L);
    },
    [
      u,
      i,
      a
    ]
  );
  return /* @__PURE__ */ h.createElement(fr.Provider, { value: f }, /* @__PURE__ */ h.createElement(
    Ct,
    {
      render: ({ handleSubmit: n }) => /* @__PURE__ */ h.createElement(cr, { className: o.className, onSubmit: n }, /* @__PURE__ */ h.createElement(h.Fragment, null, e)),
      onSubmit: E,
      decorators: [...l],
      ...o
    }
  ));
}, $r = vr;
export {
  Pe as FORM_ERROR,
  pr as FinalField,
  Ct as FinalForm,
  $r as Form,
  Lr as FormAutocomplete,
  wr as FormCheckbox,
  jr as FormDatePicker,
  Er as FormInput,
  Vr as FormRadioButton,
  Or as FormRadioGroup,
  yr as FormSelect,
  gr as FormSpy,
  Rr as FormSubmitButton,
  Fr as FormSwitch,
  H as setIn,
  ee as useField,
  Le as useForm,
  Je as useFormState
};
