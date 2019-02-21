import {
    ENV,
    keep,
    scalar,
    tidy,
    util,
    onesLike,
    tensor1d,
    where,
    zerosLike,
    train,
    cast,
    dispose,
    memory,
    serialization,
    nextFrame,
    add,
    mul,
    div,
    Tensor,
    Optimizer,
    mean,
    io,
    transpose,
    expandDims,
    reverse,
    unstack,
    stack,
    zeros,
    sum,
    split,
    neg,
    variable,
    ones,
    eye,
    randomUniform,
    truncatedNormal,
    randomNormal,
    sub,
    sqrt,
    mulStrict,
    clipByValue,
    relu,
    linalg,
    leakyRelu,
    prelu,
    elu,
    conv1d,
    conv2d,
    conv2dTranspose,
    separableConv2d,
    depthwiseConv2d,
    notEqual,
    logicalAnd,
    maximum,
    minimum,
    concat,
    all,
    batchNormalization2d,
    batchNormalization3d,
    batchNormalization4d,
    moments,
    pad,
    maxPool,
    avgPool,
    squeeze,
    max,
    abs,
    log,
    softplus,
    softmax,
    floor,
    oneHot,
    greater,
    equal,
    argMax,
    slice1d,
    slice2d,
    slice3d,
    slice4d,
    concat1d,
    concat2d,
    concat3d,
    concat4d,
    tile,
    matMul,
    gather,
    step,
    min,
    selu,
    sigmoid,
    tanh
} from "@tensorflow/tfjs-core";

var extendStatics = function (e, t) {
    return (extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
        e.__proto__ = t
    } || function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    })(e, t)
};

function __extends(e, t) {
    function n() {
        this.constructor = e
    }

    extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
}

var _epsilon, __assign = function () {
    return (__assign = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }).apply(this, arguments)
};

function __awaiter(e, t, n, r) {
    return new (n || (n = Promise))(function (i, a) {
        function o(e) {
            try {
                l(r.next(e))
            } catch (e) {
                a(e)
            }
        }

        function s(e) {
            try {
                l(r.throw(e))
            } catch (e) {
                a(e)
            }
        }

        function l(e) {
            e.done ? i(e.value) : new n(function (t) {
                t(e.value)
            }).then(o, s)
        }

        l((r = r.apply(e, t || [])).next())
    })
}

function __generator(e, t) {
    var n, r, i, a, o = {
        label: 0, sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1]
        }, trys: [], ops: []
    };
    return a = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
        return this
    }), a;

    function s(a) {
        return function (s) {
            return function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; o;) try {
                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                    switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                        case 0:
                        case 1:
                            i = a;
                            break;
                        case 4:
                            return o.label++, {value: a[1], done: !1};
                        case 5:
                            o.label++, r = a[1], a = [0];
                            continue;
                        case 7:
                            a = o.ops.pop(), o.trys.pop();
                            continue;
                        default:
                            if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                o = 0;
                                continue
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                o.label = a[1];
                                break
                            }
                            if (6 === a[0] && o.label < i[1]) {
                                o.label = i[1], i = a;
                                break
                            }
                            if (i && o.label < i[2]) {
                                o.label = i[2], o.ops.push(a);
                                break
                            }
                            i[2] && o.ops.pop(), o.trys.pop();
                            continue
                    }
                    a = t.call(e, o)
                } catch (e) {
                    a = [6, e], r = 0
                } finally {
                    n = i = 0
                }
                if (5 & a[0]) throw a[1];
                return {value: a[0] ? a[1] : void 0, done: !0}
            }([a, s])
        }
    }
}

function epsilon() {
    return null == _epsilon && (_epsilon = ENV.get("EPSILON")), _epsilon
}

function imageDataFormat() {
    return "channelsLast"
}

var _nextUniqueTensorId = 0;

function getNextUniqueTensorId() {
    return _nextUniqueTensorId++
}

var _uidPrefixes = {};

function getUid(e) {
    return void 0 === e && (e = ""), e in _uidPrefixes || (_uidPrefixes[e] = 0), _uidPrefixes[e] += 1, e + _uidPrefixes[e].toString()
}

var scalarCache = {float32: {}, int32: {}}, DEFAULT_DTYPE = "float32";

function getScalar(e, t) {
    return void 0 === t && (t = DEFAULT_DTYPE), null == scalarCache[t][e] && (scalarCache[t][e] = scalar(e, t), keep(scalarCache[t][e])), scalarCache[t][e]
}

var AttributeError = function (e) {
    function t(n) {
        var r = e.call(this, n) || this;
        return Object.setPrototypeOf(r, t.prototype), r
    }

    return __extends(t, e), t
}(Error), RuntimeError = function (e) {
    function t(n) {
        var r = e.call(this, n) || this;
        return Object.setPrototypeOf(r, t.prototype), r
    }

    return __extends(t, e), t
}(Error), ValueError = function (e) {
    function t(n) {
        var r = e.call(this, n) || this;
        return Object.setPrototypeOf(r, t.prototype), r
    }

    return __extends(t, e), t
}(Error), NotImplementedError = function (e) {
    function t(n) {
        var r = e.call(this, n) || this;
        return Object.setPrototypeOf(r, t.prototype), r
    }

    return __extends(t, e), t
}(Error), AssertionError = function (e) {
    function t(n) {
        var r = e.call(this, n) || this;
        return Object.setPrototypeOf(r, t.prototype), r
    }

    return __extends(t, e), t
}(Error), IndexError = function (e) {
    function t(n) {
        var r = e.call(this, n) || this;
        return Object.setPrototypeOf(r, t.prototype), r
    }

    return __extends(t, e), t
}(Error);

function pyListRepeat(e, t) {
    if (Array.isArray(e)) {
        for (var n = [], r = 0; r < t; r++) n = n.concat(e);
        return n
    }
    return (n = new Array(t)).fill(e), n
}

function assert(e, t) {
    if (!e) throw new AssertionError(t)
}

function count(e, t) {
    for (var n = 0, r = 0, i = e; r < i.length; r++) {
        i[r] === t && n++
    }
    return n
}

function singletonOrArray(e) {
    return 1 === e.length ? e[0] : e
}

function toList(e) {
    return Array.isArray(e) ? e : [e]
}

function toSnakeCase(e) {
    var t = e.replace(/(.)([A-Z][a-z0-9]+)/g, "$1_$2").replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
    return "_" !== t[0] ? t : "private" + t
}

function toCamelCase(e) {
    return e.length <= 1 ? e : -1 === e.indexOf("_") ? e : e.replace(/[_]+(\w|$)/g, function (e, t) {
        return t.toUpperCase()
    })
}

var _GLOBAL_CUSTOM_OBJECTS = {};

function serializeKerasObject(e) {
    return null === e || void 0 === e ? null : {className: e.getClassName(), config: e.getConfig()}
}

function deserializeKerasObject(e, t, n, r, i) {
    if (void 0 === t && (t = {}), void 0 === n && (n = {}), void 0 === r && (r = "object"), void 0 === i && (i = !1), "string" == typeof e) {
        var a = e, o = void 0;
        if (a in n) o = n[a]; else if (a in _GLOBAL_CUSTOM_OBJECTS) o = _GLOBAL_CUSTOM_OBJECTS[a]; else if (null == (o = t[a])) throw new ValueError("Unknown " + r + ": " + e + ". This may be due to one of the following reasons:\n1. The " + r + " is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom " + r + " is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().");
        return o
    }
    var s = e;
    if (null == s.className || null == s.config) throw new ValueError(r + ": Improper config format: " + JSON.stringify(s) + ".\n'className' and 'config' must set.");
    var l = s.className, u = void 0, c = void 0;
    if (l in n ? (u = (I = n.get(l))[0], c = I[1]) : l in _GLOBAL_CUSTOM_OBJECTS ? (u = (A = _GLOBAL_CUSTOM_OBJECTS.className)[0], c = A[1]) : l in t && (u = (_ = t[l])[0], c = _[1]), null == u) throw new ValueError("Unknown " + r + ": " + l + ". This may be due to one of the following reasons:\n1. The " + r + " is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom " + r + " is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().");
    if (null != c) {
        for (var h = {}, p = 0, d = Object.keys(_GLOBAL_CUSTOM_OBJECTS); p < d.length; p++) {
            h[b = d[p]] = _GLOBAL_CUSTOM_OBJECTS[b]
        }
        for (var g = 0, f = Object.keys(n); g < f.length; g++) {
            h[b = f[g]] = n[b]
        }
        s.config.customObjects = h;
        for (var m = __assign({}, _GLOBAL_CUSTOM_OBJECTS), y = 0, v = Object.keys(n); y < v.length; y++) {
            var b = v[y];
            _GLOBAL_CUSTOM_OBJECTS[b] = n[b]
        }
        var w = c(u, s.config, n, i);
        return _GLOBAL_CUSTOM_OBJECTS = __assign({}, m), w
    }
    m = __assign({}, _GLOBAL_CUSTOM_OBJECTS);
    for (var z = 0, S = Object.keys(n); z < S.length; z++) {
        b = S[z];
        _GLOBAL_CUSTOM_OBJECTS[b] = n[b]
    }
    var I, A, _;
    w = new u(s.config);
    return _GLOBAL_CUSTOM_OBJECTS = __assign({}, m), w
}

function numberCompare(e, t) {
    return e < t ? -1 : e > t ? 1 : 0
}

function reverseNumberCompare(e, t) {
    return -1 * numberCompare(e, t)
}

function stringToDType(e) {
    switch (e) {
        case"float32":
            return "float32";
        default:
            throw new ValueError("Invalid dtype: " + e)
    }
}

function unique(e) {
    if (null == e) return e;
    for (var t = [], n = 0, r = e; n < r.length; n++) {
        var i = r[n];
        -1 === t.indexOf(i) && t.push(i)
    }
    return t
}

function isObjectEmpty(e) {
    if (null == e) throw new ValueError("Invalid value in obj: " + JSON.stringify(e));
    for (var t in e) if (e.hasOwnProperty(t)) return !1;
    return !0
}

function checkStringTypeUnionValue(e, t, n) {
    if (null != n && e.indexOf(n) < 0) throw new ValueError(n + " is not a valid " + t + ".  Valid values are " + e + " or null/undefined.")
}

function checkArrayTypeAndLength(e, t, n, r) {
    return void 0 === n && (n = 0), void 0 === r && (r = 1 / 0), assert(n >= 0), assert(r >= n), Array.isArray(e) && e.length >= n && e.length <= r && e.every(function (e) {
        return typeof e === t
    })
}

function calcL2Norms(e, t) {
    return tidy(function () {
        return sqrt(sum(mulStrict(e, e), t, !0))
    })
}

var Constraint = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.getConfig = function () {
        return {}
    }, t
}(serialization.Serializable), MaxNorm = function (e) {
    function t(t) {
        var n = e.call(this) || this;
        return n.defaultMaxValue = 2, n.defaultAxis = 0, n.maxValue = null != t.maxValue ? t.maxValue : n.defaultMaxValue, n.axis = null != t.axis ? t.axis : n.defaultAxis, n
    }

    return __extends(t, e), t.prototype.apply = function (e) {
        var t = this;
        return tidy(function () {
            var n = calcL2Norms(e, t.axis), r = clipByValue(n, 0, t.maxValue);
            return mul(e, div(r, add(getScalar(epsilon()), n)))
        })
    }, t.prototype.getConfig = function () {
        return {maxValue: this.maxValue, axis: this.axis}
    }, t.className = "MaxNorm", t
}(Constraint);
serialization.registerClass(MaxNorm);
var UnitNorm = function (e) {
    function t(t) {
        var n = e.call(this) || this;
        return n.defaultAxis = 0, n.axis = null != t.axis ? t.axis : n.defaultAxis, n
    }

    return __extends(t, e), t.prototype.apply = function (e) {
        var t = this;
        return tidy(function () {
            return div(e, add(getScalar(epsilon()), calcL2Norms(e, t.axis)))
        })
    }, t.prototype.getConfig = function () {
        return {axis: this.axis}
    }, t.className = "UnitNorm", t
}(Constraint);
serialization.registerClass(UnitNorm);
var NonNeg = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.apply = function (e) {
        return relu(e)
    }, t.className = "NonNeg", t
}(Constraint);
serialization.registerClass(NonNeg);
var MinMaxNorm = function (e) {
    function t(t) {
        var n = e.call(this) || this;
        return n.defaultMinValue = 0, n.defaultMaxValue = 1, n.defaultRate = 1, n.defaultAxis = 0, n.minValue = null != t.minValue ? t.minValue : n.defaultMinValue, n.maxValue = null != t.maxValue ? t.maxValue : n.defaultMaxValue, n.rate = null != t.rate ? t.rate : n.defaultRate, n.axis = null != t.axis ? t.axis : n.defaultAxis, n
    }

    return __extends(t, e), t.prototype.apply = function (e) {
        var t = this;
        return tidy(function () {
            var n = calcL2Norms(e, t.axis),
                r = add(mul(getScalar(t.rate), clipByValue(n, t.minValue, t.maxValue)), mul(getScalar(1 - t.rate), n));
            return mul(e, div(r, add(getScalar(epsilon()), n)))
        })
    }, t.prototype.getConfig = function () {
        return {minValue: this.minValue, maxValue: this.maxValue, rate: this.rate, axis: this.axis}
    }, t.className = "MinMaxNorm", t
}(Constraint);
serialization.registerClass(MinMaxNorm);
var CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
    maxNorm: "MaxNorm",
    minMaxNorm: "MinMaxNorm",
    nonNeg: "NonNeg",
    unitNorm: "UnitNorm"
};

function serializeConstraint(e) {
    return serializeKerasObject(e)
}

function deserializeConstraint(e, t) {
    return void 0 === t && (t = {}), deserializeKerasObject(e, serialization.SerializationMap.getMap().classNameMap, t, "constraint")
}

function getConstraint(e) {
    return null == e ? null : "string" == typeof e ? deserializeConstraint({
        className: e in CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP ? CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP[e] : e,
        config: {}
    }) : e instanceof Constraint ? e : deserializeConstraint(e)
}

function maxNorm(e) {
    return new MaxNorm(e)
}

function unitNorm(e) {
    return new UnitNorm(e)
}

function nonNeg() {
    return new NonNeg
}

function minMaxNorm(e) {
    return new MinMaxNorm(e)
}

var exports_constraints = Object.freeze({maxNorm: maxNorm, unitNorm: unitNorm, nonNeg: nonNeg, minMaxNorm: minMaxNorm}),
    nameMap = new Map, VALID_DATA_FORMAT_VALUES = ["channelsFirst", "channelsLast"];

function checkDataFormat(e) {
    checkStringTypeUnionValue(VALID_DATA_FORMAT_VALUES, "DataFormat", e)
}

var VALID_PADDING_MODE_VALUES = ["valid", "same", "causal"];

function checkPaddingMode(e) {
    checkStringTypeUnionValue(VALID_PADDING_MODE_VALUES, "PaddingMode", e)
}

var VALID_POOL_MODE_VALUES = ["max", "avg"];

function checkPoolMode(e) {
    checkStringTypeUnionValue(VALID_POOL_MODE_VALUES, "PoolMode", e)
}

var _nameScopeStack = [], _nameScopeDivider = "/";

function nameScope(e, t) {
    _nameScopeStack.push(e);
    try {
        var n = t();
        return _nameScopeStack.pop(), n
    } catch (e) {
        throw _nameScopeStack.pop(), e
    }
}

function currentNameScopePrefix() {
    return 0 === _nameScopeStack.length ? "" : _nameScopeStack.join(_nameScopeDivider) + _nameScopeDivider
}

function getScopedTensorName(e) {
    if (!isValidTensorName(e)) throw new Error("Not a valid tensor name: '" + e + "'");
    return currentNameScopePrefix() + e
}

function getUniqueTensorName(e) {
    if (!isValidTensorName(e)) throw new Error("Not a valid tensor name: '" + e + "'");
    nameMap.has(e) || nameMap.set(e, 0);
    var t = nameMap.get(e);
    if (nameMap.set(e, nameMap.get(e) + 1), t > 0) {
        var n = e + "_" + t;
        return nameMap.set(n, 1), n
    }
    return e
}

var tensorNameRegex = new RegExp(/^[A-Za-z][-A-Za-z0-9\._\/]*$/);

function isValidTensorName(e) {
    return !!e.match(tensorNameRegex)
}

function isInteger(e) {
    return e === parseInt(e.toString(), 10)
}

function arrayProd(e, t, n) {
    null == t && (t = 0), null == n && (n = e.length);
    for (var r = 1, i = t; i < n; ++i) r *= e[i];
    return r
}

function toArray1D(e) {
    return e = Array.isArray(e) ? new Float32Array(e) : e, tensor1d(e)
}

function min$1(e) {
    return min(toArray1D(e)).dataSync()[0]
}

function max$1(e) {
    return max(toArray1D(e)).dataSync()[0]
}

function range(e, t) {
    if (t < e) throw new ValueError("end (" + t + ") < begin (" + e + ") is forbidden.");
    for (var n = [], r = e; r < t; ++r) n.push(r);
    return n
}

function cast$1(e, t) {
    return e.asType(t)
}

function expandDims$1(e, t) {
    void 0 === t && (t = -1);
    var n = e.shape.slice();
    return t < 0 && (t = n.length + t + 1), n.splice(t, 0, 1), e.reshape(n)
}

function repeat(e, t) {
    return tidy(function () {
        if (2 !== e.shape.length) throw new ValueError("repeat() expects a rank-2 tensor, but received a rank-" + e.shape.length + " tensor.");
        return tile$1(expandDims$1(e, 1), [1, t, 1])
    })
}

function flatten(e) {
    var t = [arrayProd(e.shape)];
    return e.reshape(t)
}

function batchFlatten(e) {
    if (e.rank <= 1) throw new ValueError("batchFlatten requires a minimum rank of 2. Got rank: " + e.rank + ".");
    var t = [e.shape[0], arrayProd(e.shape, 1)];
    return e.reshape(t)
}

function sliceAlongFirstAxis(e, t, n) {
    return tidy(function () {
        switch (e.rank) {
            case 1:
                return slice1d(e, t, n);
            case 2:
                return slice2d(e, [t, 0], [n, e.shape[1]]);
            case 3:
                return slice3d(e, [t, 0, 0], [n, e.shape[1], e.shape[2]]);
            case 4:
                return slice4d(e, [t, 0, 0, 0], [n, e.shape[1], e.shape[2], e.shape[3]]);
            default:
                throw new ValueError("sliceAlongFirstAxis() received an unsupported tensor rank: " + e.rank)
        }
    })
}

function sliceAlongLastAxis(e, t, n) {
    return tidy(function () {
        switch (e.rank) {
            case 1:
                return slice1d(e, t, n);
            case 2:
                return slice2d(e, [0, t], [e.shape[0], n]);
            case 3:
                return slice3d(e, [0, 0, t], [e.shape[0], e.shape[1], n]);
            case 4:
                return slice4d(e, [0, 0, 0, t], [e.shape[0], e.shape[1], e.shape[2], n]);
            default:
                throw new ValueError("sliceAlongLastAxis() received an unsupported tensor rank: " + e.rank)
        }
    })
}

function sliceAlongAxis(e, t, n, r) {
    return tidy(function () {
        switch (e.rank) {
            case 1:
                return slice1d(e, t, n);
            case 2:
                switch (r) {
                    case 1:
                        return sliceAlongFirstAxis(e, t, n);
                    case 2:
                        return sliceAlongLastAxis(e, t, n);
                    default:
                        throw new ValueError("The axis is not within the rank of the tensor " + r)
                }
            case 3:
                switch (r) {
                    case 1:
                        return sliceAlongFirstAxis(e, t, n);
                    case 2:
                        return slice3d(e, [0, t, 0], [e.shape[0], n, e.shape[2]]);
                    case 3:
                        return sliceAlongLastAxis(e, t, n);
                    default:
                        throw new ValueError("The axis is not within the rank of the tensor " + r)
                }
            case 4:
                switch (r) {
                    case 1:
                        return sliceAlongFirstAxis(e, t, n);
                    case 2:
                        return slice4d(e, [0, t, 0, 0], [e.shape[0], n, e.shape[2], e.shape[3]]);
                    case 3:
                        return slice4d(e, [0, 0, t, 0], [e.shape[0], e.shape[1], n, e.shape[3]]);
                    case 4:
                        return sliceAlongLastAxis(e, t, n);
                    default:
                        throw new ValueError("The axis is not within the rank of the tensor " + r)
                }
            default:
                throw new ValueError("sliceAlongLastAxis() received an unsupported tensor rank: " + e.rank)
        }
    })
}

function concatenate(e, t) {
    var n;
    return void 0 === t && (t = -1), t < 0 && (t = 0 !== (n = e[0].rank) ? n : 0), t === e[0].rank && (t = -1), concat(e, t)
}

function concatAlongFirstAxis(e, t) {
    switch (e.rank) {
        case 1:
            return concat1d([e, t]);
        case 2:
            return concat2d([e, t], 0);
        case 3:
            return concat3d([e, t], 0);
        case 4:
            return concat4d([e, t], 0);
        default:
            throw new ValueError("concatAlongFirstAxis() received an unsupported tensor rank: " + e.rank)
    }
}

function tile$1(e, t) {
    if (Array.isArray(t) || (t = [t]), e.rank !== t.length) throw new ValueError("The length of input n (" + t.length + ") does not match the number of dimensions in input x (" + e.rank + ")");
    return tile(e, t)
}

function randomNormal$1(e, t, n, r, i) {
    return void 0 === t && (t = 0), void 0 === n && (n = 1), randomNormal(e, t, n, r, i)
}

function dot(e, t) {
    if (e.rank < 2 || t.rank < 2) throw new NotImplementedError("dot requires both inputs to be rank >= 2 but got x shape = " + e.shape + " and y shape = " + t.shape);
    if (t.rank >= 3 && (r = e.shape.slice(-1)[0]) !== (o = t.shape.slice(-2)[0])) throw new NotImplementedError("If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = " + e.shape + " and  y shape = " + t.shape);
    if (2 === e.rank && 2 === t.rank) return matMul(e, t);
    var n = e.shape.slice(), r = n.pop();
    e = e.reshape([-1, r]);
    var i = t.shape.slice(), a = i.pop(), o = i.pop(), s = i.concat([a]),
        l = Array.from({length: t.rank}, function (e, n) {
            return 0 === n ? t.rank - 2 : n <= t.rank - 2 ? n - 1 : n
        });
    t = t.transpose(l).reshape([o, -1]);
    var u = n.concat(s);
    return matMul(e, t).reshape(u)
}

function gather$1(e, t, n) {
    return tidy(function () {
        return t = Array.isArray(t) ? tensor1d(t, "int32") : t.toInt(), gather(e, t, n)
    })
}

function square(e) {
    return mulStrict(e, e)
}

function biasAdd(e, t, n) {
    return tidy(function () {
        if (null == n && (n = imageDataFormat()), checkDataFormat(n), 1 !== t.rank && t.rank !== e.rank) throw new ValueError("Unexpected bias dimensions: " + t.rank + "; expected it to be 1 or " + e.rank);
        var r, i = t.shape;
        if (5 === e.rank) "channelsFirst" === n ? r = 1 === i.length ? e.add(t.reshape([1, i[0], 1, 1, 1])) : e.add(t.reshape([1, i[3], i[0], i[1], i[2]])) : "channelsLast" === n && (r = 1 === i.length ? e.add(t.reshape([1, 1, 1, 1, i[0]])) : e.add(t.reshape([1].concat(i)))); else if (4 === e.rank) "channelsFirst" === n ? r = 1 === i.length ? e.add(t.reshape([1, i[0], 1, 1])) : e.add(t.reshape([1, i[2], i[0], i[1]])) : "channelsLast" === n && (r = 1 === i.length ? e.add(t.reshape([1, 1, 1, i[0]])) : e.add(t.reshape([1].concat(i)))); else if (3 === e.rank) "channelsFirst" === n ? r = 1 === i.length ? e.add(t.reshape([1, i[0], 1])) : e.add(t.reshape([1, i[1], i[0]])) : "channelsLast" === n && (r = 1 === i.length ? e.add(t.reshape([1, 1, i[0]])) : e.add(t.reshape([1].concat(i)))); else {
            if (!(e.rank < 3)) throw new ValueError("Unsupported input rank by biasAdd: " + e.rank);
            r = e.add(t)
        }
        return r
    })
}

function elu$1(e, t) {
    if (void 0 === t && (t = 1), 1 !== t) throw new NotImplementedError("Support for alpha values other than 1 (" + t + ") is not implemented yet.");
    return elu(e)
}

function softsign(e) {
    return tidy(function () {
        return div(e, add(getScalar(1), abs(e)))
    })
}

function dropout(e, t, n, r) {
    return tidy(function () {
        if (null != n && !util.arraysEqual(e.shape, n)) throw new NotImplementedError("Non-default noise shape is not implemented yet: " + JSON.stringify(n));
        if (null != r) throw new NotImplementedError("seed is not implemented for dropout yet.");
        var i = step(add(neg(t), randomUniform(e.shape, 0, 1, "float32")));
        return i = mul(div(getScalar(1), sub(getScalar(1), t)), i), mul(e, i)
    })
}

function hardSigmoid(e) {
    return tidy(function () {
        var t = add(getScalar(.5), mul(getScalar(.2), e));
        return clipByValue(t, 0, 1)
    })
}

function inTrainPhase(e, t, n) {
    return void 0 === n && (n = !1), n ? e() : t()
}

var VALID_FAN_MODE_VALUES = ["fanIn", "fanOut", "fanAvg"];

function checkFanMode(e) {
    checkStringTypeUnionValue(VALID_FAN_MODE_VALUES, "FanMode", e)
}

var VALID_DISTRIBUTION_VALUES = ["normal", "uniform"];

function checkDistribution(e) {
    checkStringTypeUnionValue(VALID_DISTRIBUTION_VALUES, "Distribution", e)
}

var Initializer = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.fromConfigUsesCustomObjects = function () {
        return !1
    }, t.prototype.getConfig = function () {
        return {}
    }, t
}(serialization.Serializable), Zeros = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.apply = function (e, t) {
        return zeros(e, t)
    }, t.className = "Zeros", t
}(Initializer);
serialization.registerClass(Zeros);
var Ones = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.apply = function (e, t) {
        return ones(e, t)
    }, t.className = "Ones", t
}(Initializer);
serialization.registerClass(Ones);
var Constant = function (e) {
    function t(t) {
        var n = e.call(this) || this;
        if ("object" != typeof t) throw new ValueError("Expected argument of type ConstantConfig but got " + t);
        if (void 0 === t.value) throw new ValueError("config must have value set but got " + t);
        return n.value = t.value, n
    }

    return __extends(t, e), t.prototype.apply = function (e, t) {
        var n = this;
        return tidy(function () {
            return mul(scalar(n.value), ones(e, t))
        })
    }, t.prototype.getConfig = function () {
        return {value: this.value}
    }, t.className = "Constant", t
}(Initializer);
serialization.registerClass(Constant);
var RandomUniform = function (e) {
    function t(t) {
        var n = e.call(this) || this;
        return n.DEFAULT_MINVAL = -.05, n.DEFAULT_MAXVAL = .05, n.minval = t.minval || n.DEFAULT_MINVAL, n.maxval = t.maxval || n.DEFAULT_MAXVAL, n.seed = t.seed, n
    }

    return __extends(t, e), t.prototype.apply = function (e, t) {
        return randomUniform(e, this.minval, this.maxval, t)
    }, t.prototype.getConfig = function () {
        return {minval: this.minval, maxval: this.maxval, seed: this.seed}
    }, t.className = "RandomUniform", t
}(Initializer);
serialization.registerClass(RandomUniform);
var RandomNormal = function (e) {
    function t(t) {
        var n = e.call(this) || this;
        return n.DEFAULT_MEAN = 0, n.DEFAULT_STDDEV = .05, n.mean = t.mean || n.DEFAULT_MEAN, n.stddev = t.stddev || n.DEFAULT_STDDEV, n.seed = t.seed, n
    }

    return __extends(t, e), t.prototype.apply = function (e, t) {
        if ("float32" !== (t = t || "float32") && "int32" !== t) throw new NotImplementedError("randomNormal does not support dType " + t + ".");
        return randomNormal$1(e, this.mean, this.stddev, t, this.seed)
    }, t.prototype.getConfig = function () {
        return {mean: this.mean, stddev: this.stddev, seed: this.seed}
    }, t.className = "RandomNormal", t
}(Initializer);
serialization.registerClass(RandomNormal);
var TruncatedNormal = function (e) {
    function t(t) {
        var n = e.call(this) || this;
        return n.DEFAULT_MEAN = 0, n.DEFAULT_STDDEV = .05, n.mean = t.mean || n.DEFAULT_MEAN, n.stddev = t.stddev || n.DEFAULT_STDDEV, n.seed = t.seed, n
    }

    return __extends(t, e), t.prototype.apply = function (e, t) {
        if ("float32" !== (t = t || "float32") && "int32" !== t) throw new NotImplementedError("truncatedNormal does not support dType " + t + ".");
        return truncatedNormal(e, this.mean, this.stddev, t, this.seed)
    }, t.prototype.getConfig = function () {
        return {mean: this.mean, stddev: this.stddev, seed: this.seed}
    }, t.className = "TruncatedNormal", t
}(Initializer);
serialization.registerClass(TruncatedNormal);
var Identity = function (e) {
    function t(t) {
        var n = e.call(this) || this;
        return n.gain = null != t.gain ? scalar(t.gain) : getScalar(1), n
    }

    return __extends(t, e), t.prototype.apply = function (e, t) {
        var n = this;
        return tidy(function () {
            if (2 !== e.length || e[0] !== e[1]) throw new ValueError("Identity matrix initializer can only be used for 2D square matrices.");
            return mul(n.gain, eye(e[0]))
        })
    }, t.prototype.getConfig = function () {
        return {gain: this.gain.get()}
    }, t.className = "Identity", t
}(Initializer);

function computeFans(e, t) {
    var n, r;
    if (void 0 === t && (t = "channelsLast"), checkDataFormat(t), 2 === e.length) n = e[0], r = e[1]; else if (-1 !== [3, 4, 5].indexOf(e.length)) {
        if ("channelsFirst" === t) {
            var i = arrayProd(e, 2);
            n = e[1] * i, r = e[0] * i
        } else if ("channelsLast" === t) {
            i = arrayProd(e, 0, e.length - 2);
            n = e[e.length - 2] * i, r = e[e.length - 1] * i
        }
    } else {
        var a = arrayProd(e);
        n = Math.sqrt(a), r = Math.sqrt(a)
    }
    return [n, r]
}

serialization.registerClass(Identity);
var VarianceScaling = function (e) {
    function t(t) {
        var n = e.call(this) || this;
        if (t.scale < 0) throw new ValueError("scale must be a positive float. Got: " + t.scale);
        return n.scale = null == t.scale ? 1 : t.scale, n.mode = t.mode, checkFanMode(n.mode), n.distribution = t.distribution, checkDistribution(n.distribution), n.seed = t.seed, n
    }

    return __extends(t, e), t.prototype.apply = function (e, t) {
        var n = computeFans(e), r = n[0], i = n[1], a = this.scale;
        if ("fanIn" === this.mode ? a /= Math.max(1, r) : "fanOut" === this.mode ? a /= Math.max(1, i) : a /= Math.max(1, (r + i) / 2), "normal" === this.distribution) {
            var o = Math.sqrt(a);
            if ("float32" !== (t = t || "float32") && "int32" !== t) throw new NotImplementedError(this.getClassName() + " does not support dType " + t + ".");
            return truncatedNormal(e, 0, o, t, this.seed)
        }
        var s = Math.sqrt(3 * a);
        return randomUniform(e, -s, s, t)
    }, t.prototype.getConfig = function () {
        return {scale: this.scale, mode: this.mode, distribution: this.distribution, seed: this.seed}
    }, t.className = "VarianceScaling", t
}(Initializer);
serialization.registerClass(VarianceScaling);
var GlorotUniform = function (e) {
    function t(t) {
        return e.call(this, {
            scale: 1,
            mode: "fanAvg",
            distribution: "uniform",
            seed: null == t ? null : t.seed
        }) || this
    }

    return __extends(t, e), t.prototype.getClassName = function () {
        return VarianceScaling.className
    }, t.className = "GlorotUniform", t
}(VarianceScaling);
serialization.registerClass(GlorotUniform);
var GlorotNormal = function (e) {
    function t(t) {
        return e.call(this, {scale: 1, mode: "fanAvg", distribution: "normal", seed: null == t ? null : t.seed}) || this
    }

    return __extends(t, e), t.prototype.getClassName = function () {
        return VarianceScaling.className
    }, t.className = "GlorotNormal", t
}(VarianceScaling);
serialization.registerClass(GlorotNormal);
var HeNormal = function (e) {
    function t(t) {
        return e.call(this, {scale: 2, mode: "fanIn", distribution: "normal", seed: null == t ? null : t.seed}) || this
    }

    return __extends(t, e), t.prototype.getClassName = function () {
        return VarianceScaling.className
    }, t.className = "HeNormal", t
}(VarianceScaling);
serialization.registerClass(HeNormal);
var LeCunNormal = function (e) {
    function t(t) {
        return e.call(this, {scale: 1, mode: "fanIn", distribution: "normal", seed: null == t ? null : t.seed}) || this
    }

    return __extends(t, e), t.prototype.getClassName = function () {
        return VarianceScaling.className
    }, t.className = "LeCunNormal", t
}(VarianceScaling);
serialization.registerClass(LeCunNormal);
var Orthogonal = function (e) {
    function t(t) {
        var n = e.call(this) || this;
        if (n.DEFAULT_GAIN = 1, n.gain = null == t.gain ? n.DEFAULT_GAIN : t.gain, n.seed = t.seed, null != n.seed) throw new NotImplementedError("Random seed is not implemented for Orthogonal Initializer yet.");
        return n
    }

    return __extends(t, e), t.prototype.apply = function (e, t) {
        var n = this;
        return tidy(function () {
            if (2 !== e.length) throw new NotImplementedError("The Orthogonal Initializer does not support non-2D shapes yet.");
            e[0] * e[1] > 2e3 && console.warn("Orthogonal initializer is being called on a matrix with more than 2000 (" + e[0] * e[1] + ") elements: Slowness may result.");
            var t = randomNormal$1(e[0] > e[1] ? [e[1], e[0]] : e, 0, 1, "float32"), r = linalg.gramSchmidt(t);
            return e[0] > e[1] && (r = r.transpose()), mul(getScalar(n.gain), r)
        })
    }, t.prototype.getConfig = function () {
        return {gain: this.gain, seed: this.seed}
    }, t.className = "Orthogonal", t
}(Initializer);
serialization.registerClass(Orthogonal);
var INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
    constant: "Constant",
    glorotNormal: "GlorotNormal",
    glorotUniform: "GlorotUniform",
    heNormal: "HeNormal",
    identity: "Identity",
    leCunNormal: "LeCunNormal",
    ones: "Ones",
    orthogonal: "Orthogonal",
    randomNormal: "RandomNormal",
    randomUniform: "RandomUniform",
    truncatedNormal: "TruncatedNormal",
    varianceScaling: "VarianceScaling",
    zeros: "Zeros"
};

function deserializeInitializer(e, t) {
    return void 0 === t && (t = {}), deserializeKerasObject(e, serialization.SerializationMap.getMap().classNameMap, t, "initializer")
}

function serializeInitializer(e) {
    return serializeKerasObject(e)
}

function getInitializer(e) {
    if ("string" == typeof e) {
        var t = e in INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP ? INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP[e] : e;
        return "GlorotUniform" === t ? new GlorotUniform : "GlorotNormal" === t ? new GlorotNormal : "HeNormal" === t ? new HeNormal : "LeCunNormal" === t ? new LeCunNormal : deserializeInitializer({
            className: t,
            config: {}
        })
    }
    return e instanceof Initializer ? e : deserializeInitializer(e)
}

function zeros$1() {
    return new Zeros
}

function ones$1() {
    return new Ones
}

function constant(e) {
    return new Constant(e)
}

function randomUniform$1(e) {
    return new RandomUniform(e)
}

function randomNormal$2(e) {
    return new RandomNormal(e)
}

function truncatedNormal$1(e) {
    return new TruncatedNormal(e)
}

function identity(e) {
    return new Identity(e)
}

function varianceScaling(e) {
    return new VarianceScaling(e)
}

function glorotUniform(e) {
    return new GlorotUniform(e)
}

function glorotNormal(e) {
    return new GlorotNormal(e)
}

function heNormal(e) {
    return new HeNormal(e)
}

function leCunNormal(e) {
    return new LeCunNormal(e)
}

function orthogonal(e) {
    return new Orthogonal(e)
}

var exports_initializers = Object.freeze({
    zeros: zeros$1,
    ones: ones$1,
    constant: constant,
    randomUniform: randomUniform$1,
    randomNormal: randomNormal$2,
    truncatedNormal: truncatedNormal$1,
    identity: identity,
    varianceScaling: varianceScaling,
    glorotUniform: glorotUniform,
    glorotNormal: glorotNormal,
    heNormal: heNormal,
    leCunNormal: leCunNormal,
    orthogonal: orthogonal
});

function isArrayOfShapes(e) {
    return Array.isArray(e) && Array.isArray(e[0])
}

function normalizeShapeList(e) {
    return 0 === e.length ? [] : Array.isArray(e[0]) ? e : [e]
}

function getExactlyOneTensor(e) {
    var t;
    if (Array.isArray(e)) {
        if (1 !== e.length) throw new ValueError("Expected Tensor length to be 1; got " + e.length);
        t = e[0]
    } else t = e;
    return t
}

function getExactlyOneShape(e) {
    if (Array.isArray(e) && Array.isArray(e[0])) {
        if (1 === e.length) return (e = e)[0];
        throw new ValueError("Expected exactly 1 Shape; got " + e.length)
    }
    return e
}

function countParamsInWeights(e) {
    for (var t = 0, n = 0, r = e; n < r.length; n++) {
        var i = r[n];
        0 === i.shape.length ? t += 1 : t += i.shape.reduce(function (e, t) {
            return e * t
        })
    }
    return t
}

var DEFAULT_VARIABLE_NAME_PREFIX = "Variable", LayerVariable = function () {
    function e(e, t, n, r, i) {
        void 0 === t && (t = "float32"), void 0 === n && (n = DEFAULT_VARIABLE_NAME_PREFIX), void 0 === r && (r = !0), void 0 === i && (i = null), this.dtype = null == t ? "float32" : t, this.shape = e.shape, this.id = getNextUniqueTensorId(), n = null == n ? DEFAULT_VARIABLE_NAME_PREFIX : n, this.originalName = getScopedTensorName(n), this.name = getUniqueTensorName(this.originalName), this.trainable = r, this.constraint = i, this.val = variable(e, this.trainable, this.name, this.dtype)
    }

    return e.prototype.read = function () {
        return this.assertNotDisposed(), this.val
    }, e.prototype.write = function (e) {
        return this.assertNotDisposed(), checkShapesMatch(this.val, e), this.val.id !== e.id && (this.val.assign(e), null != this.constraint && this.val.assign(this.constraint.apply(this.val))), this
    }, e.prototype.dispose = function () {
        this.assertNotDisposed(), this.val.dispose()
    }, e.prototype.assertNotDisposed = function () {
        if (this.val.isDisposed) throw new Error("LayersVariable " + this.name + " is already disposed.")
    }, e
}();

function checkShapesMatch(e, t) {
    if (e.shape.toString() !== t.shape.toString()) throw new Error("Shape mismatch: " + JSON.stringify(e.shape) + " vs. " + JSON.stringify(t.shape))
}

function batchGetValue(e) {
    return e.map(function (e) {
        return e.read()
    })
}

function batchSetValue(e) {
    e.map(function (e) {
        e[0].write(e[1])
    })
}

var InputSpec = function () {
    return function (e) {
        this.dtype = e.dtype, this.shape = e.shape, null != e.shape ? this.ndim = e.shape.length : this.ndim = e.ndim, this.maxNDim = e.maxNDim, this.minNDim = e.minNDim, this.axes = e.axes || {}
    }
}(), SymbolicTensor = function () {
    return function (e, t, n, r, i, a, o) {
        this.dtype = e, this.shape = t, this.sourceLayer = n, this.inputs = r, this.callArgs = i, this.outputTensorIndex = o, this.id = getNextUniqueTensorId(), null != a && (this.originalName = getScopedTensorName(a), this.name = getUniqueTensorName(this.originalName)), this.rank = t.length
    }
}(), _nextNodeID = 0, Node = function () {
    function e(e, t) {
        this.callArgs = t, this.id = _nextNodeID++, this.outboundLayer = e.outboundLayer, this.inboundLayers = e.inboundLayers, this.nodeIndices = e.nodeIndices, this.tensorIndices = e.tensorIndices, this.inputTensors = e.inputTensors, this.outputTensors = e.outputTensors, this.inputMasks = e.inputMasks, this.outputMasks = e.outputMasks, this.inputShapes = e.inputShapes, this.outputShapes = e.outputShapes;
        for (var n = 0, r = e.inboundLayers; n < r.length; n++) {
            var i = r[n];
            null != i && i.outboundNodes.push(this)
        }
        e.outboundLayer.inboundNodes.push(this)
    }

    return e.prototype.getConfig = function () {
        for (var e = [], t = 0, n = this.inboundLayers; t < n.length; t++) {
            var r = n[t];
            null != r ? e.push(r.name) : e.push(null)
        }
        return {
            outboundLayer: this.outboundLayer ? this.outboundLayer.name : null,
            inboundLayers: e,
            nodeIndices: this.nodeIndices,
            tensorIndices: this.tensorIndices
        }
    }, e
}(), _nextLayerID = 0, Layer = function (e) {
    function t(t) {
        var n = e.call(this) || this;
        n._callHook = null, n._addedWeightNames = [], n._stateful = !1, n.id = _nextLayerID++, n.activityRegularizer = null, n.inputSpec = null, n.supportsMasking = !1, n._trainableWeights = [], n._nonTrainableWeights = [], n._losses = [], n._updates = [], n._built = !1, n.inboundNodes = [], n.outboundNodes = [];
        var r = t.name;
        if (!r) {
            var i = n.getClassName();
            r = toSnakeCase(i) + "_" + getUid(i)
        }
        if (n.name = r, n.trainable = null == t.trainable || t.trainable, n.updatable = null == t.updatable || t.updatable, null != t.inputShape || null != t.batchInputShape) {
            var a = void 0;
            if (null != t.batchInputShape) a = t.batchInputShape; else if (null != t.inputShape) {
                var o = null;
                null != t.batchSize && (o = t.batchSize), a = [o].concat(t.inputShape)
            }
            n.batchInputShape = a;
            var s = t.dtype;
            null == s && (s = t.inputDType), null == s && (s = "float32"), n.dtype = s
        }
        return null != t.weights ? n.initialWeights = t.weights : n.initialWeights = null, n._refCount = null, n.fastWeightInitDuringBuild = !1, n
    }

    return __extends(t, e), t.nodeKey = function (e, t) {
        return e.name + "_ib-" + t.toString()
    }, t.prototype.getNodeAtIndex = function (e, t) {
        if (0 === this.inboundNodes.length) throw new RuntimeError("The layer has never been called and thus has no defined " + t + ".");
        if (this.inboundNodes.length <= e) throw new ValueError("Asked to get " + t + " at node " + e + ", but the layer has only " + this.inboundNodes.length + " inbound nodes.");
        return this.inboundNodes[e]
    }, t.prototype.getInputAt = function (e) {
        return singletonOrArray(this.getNodeAtIndex(e, "input").inputTensors)
    }, t.prototype.getOutputAt = function (e) {
        return singletonOrArray(this.getNodeAtIndex(e, "output").outputTensors)
    }, Object.defineProperty(t.prototype, "input", {
        get: function () {
            if (this.inboundNodes.length > 1) throw new AttributeError("Layer " + this.name + ' has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use `getInputAt(nodeIndex)` instead.');
            if (0 === this.inboundNodes.length) throw new AttributeError("Layer " + this.name + " is not connected, no input to return.");
            return singletonOrArray(this.getNodeAtIndex(0, "input").inputTensors)
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "output", {
        get: function () {
            if (0 === this.inboundNodes.length) throw new AttributeError("Layer " + this.name + " has no inbound nodes.");
            if (this.inboundNodes.length > 1) throw new AttributeError("Layer " + this.name + ' has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use `getOutputAt(nodeIndex)` instead.');
            return singletonOrArray(this.getNodeAtIndex(0, "output").outputTensors)
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "losses", {
        get: function () {
            return this._losses
        }, enumerable: !0, configurable: !0
    }), t.prototype.calculateLosses = function () {
        return this.losses.map(function (e) {
            return e()
        })
    }, Object.defineProperty(t.prototype, "updates", {
        get: function () {
            return this._updates
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "built", {
        get: function () {
            return this._built
        }, set: function (e) {
            this._built = e
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "trainableWeights", {
        get: function () {
            return this.trainable ? this._trainableWeights : []
        }, set: function (e) {
            this._trainableWeights = e
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "nonTrainableWeights", {
        get: function () {
            return this.trainable ? this._nonTrainableWeights : this._trainableWeights.concat(this._nonTrainableWeights)
        }, set: function (e) {
            this._nonTrainableWeights = e
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "weights", {
        get: function () {
            return this.trainableWeights.concat(this.nonTrainableWeights)
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "stateful", {
        get: function () {
            return this._stateful
        }, enumerable: !0, configurable: !0
    }), t.prototype.resetStates = function () {
        if (!this.stateful) throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")
    }, t.prototype.assertInputCompatibility = function (e) {
        if (e = toList(e), null != this.inputSpec && 0 !== this.inputSpec.length) {
            var t = toList(this.inputSpec);
            if (e.length !== t.length) throw new ValueError("Layer " + this.name + " expects " + t.length + " inputs, but it received " + e.length + " input tensors. Input received: " + e);
            for (var n = 0; n < e.length; n++) {
                var r = e[n], i = t[n];
                if (null != i) {
                    var a = r.rank;
                    if (null != i.ndim && a !== i.ndim) throw new ValueError("Input " + n + " is incompatible with layer " + this.name + ": expected ndim=" + i.ndim + ", found ndim=" + a);
                    if (null != i.maxNDim && a > i.maxNDim) throw new ValueError("Input " + n + " is incompatible with layer " + this.name + ": expected max_ndim=" + i.maxNDim + ", found ndim=" + a);
                    if (null != i.minNDim && a < i.minNDim) throw new ValueError("Input " + n + " is incompatible with layer " + this.name + ": expected min_ndim=" + i.minNDim + ", found ndim=" + a + ".");
                    if (null != i.dtype && r.dtype !== i.dtype) throw new ValueError("Input " + n + " is incompatible with layer " + this.name + " : expected dtype=" + i.dtype + ", found dtype=" + r.dtype + ".");
                    if (i.axes) {
                        var o = r.shape;
                        for (var s in i.axes) {
                            var l = Number(s), u = i.axes[s], c = l >= 0 ? o[l] : o[o.length + l];
                            if (null != u && -1 === [u, null].indexOf(c)) throw new ValueError("Input " + n + " is incompatible with layer " + this.name + ": expected axis " + l + " of input shape to have value " + u + " but got shape " + o + ".")
                        }
                    }
                    if (null != i.shape) for (var h = 0; h < i.shape.length; ++h) {
                        var p = i.shape[h], d = r.shape[h];
                        if (null != p && null != d && p !== d) throw new ValueError("Input " + n + " is incompatible with layer " + this.name + ": expected shape=" + i.shape + ", found shape=${xShape}.")
                    }
                }
            }
        }
    }, t.prototype.call = function (e, t) {
        return e
    }, t.prototype.invokeCallHook = function (e, t) {
        null != this._callHook && this._callHook(e, t)
    }, t.prototype.setCallHook = function (e) {
        this._callHook = e
    }, t.prototype.clearCallHook = function () {
        this._callHook = null
    }, t.prototype.apply = function (e, t) {
        var n = this;
        t = t || {}, this.assertNotDisposed();
        for (var r = toList(e), i = !0, a = 0, o = r; a < o.length; a++) {
            if (!(o[a] instanceof SymbolicTensor)) {
                i = !1;
                break
            }
        }
        for (var s = !0, l = 0, u = r; l < u.length; l++) {
            if (u[l] instanceof SymbolicTensor) {
                s = !1;
                break
            }
        }
        if (i === s) throw new ValueError("Arguments to apply() must be all SymbolicTensors or all Tensors");
        return nameScope(this.name, function () {
            if (!n.built) {
                n.assertInputCompatibility(e);
                for (var i = [], a = 0, o = toList(e); a < o.length; a++) {
                    var l = o[a];
                    i.push(l.shape)
                }
                n.build(singletonOrArray(i)), n.built = !0, n.initialWeights && n.setWeights(n.initialWeights), null === n._refCount && s && (n._refCount = 1)
            }
            if (n.assertInputCompatibility(e), s) {
                for (var u = [], c = 0, h = toList(f = n.call(e, t)); c < h.length; c++) {
                    var p = h[c];
                    -1 !== r.indexOf(p) && (p = p.clone()), u.push(p)
                }
                if (f = singletonOrArray(u), null != n.activityRegularizer) throw new NotImplementedError("Layer invocation in the presence of activity regularizer(s) is not supported yet.");
                return f
            }
            var d = collectInputShape(e), g = n.computeOutputShape(d), f = void 0, m = guessOutputDType(e);
            if (n.warnOnIncompatibleInputShape(Array.isArray(e) ? d[0] : d), f = null != g && g.length > 0 && Array.isArray(g[0]) ? g.map(function (r, i) {
                return new SymbolicTensor(m, r, n, toList(e), t, n.name, i)
            }) : new SymbolicTensor(m, g, n, toList(e), t, n.name), n.addInboundNode(e, f, null, null, d, g, t), n._refCount++, null != n.activityRegularizer) throw new NotImplementedError("Layer invocation in the presence of activity regularizer(s) is not supported yet.");
            return f
        })
    }, t.prototype.warnOnIncompatibleInputShape = function (e) {
        if (null != this.batchInputShape) if (e.length !== this.batchInputShape.length) console.warn("The rank of the input tensor provided (shape: " + JSON.stringify(e) + ") does not match that of the batchInputShape (" + JSON.stringify(this.batchInputShape) + ") of the layer " + this.name); else {
            var t = !1;
            this.batchInputShape.forEach(function (n, r) {
                null != n && null != e[r] && e[r] !== n && (t = !0)
            }), t && console.warn("The shape of the input tensor (" + JSON.stringify(e) + ") does not match the expectation of layer " + this.name + ": " + JSON.stringify(this.batchInputShape))
        }
    }, Object.defineProperty(t.prototype, "outputShape", {
        get: function () {
            if (null == this.inboundNodes || 0 === this.inboundNodes.length) throw new AttributeError("The layer " + this.name + " has never been called and thus has no defined output shape.");
            for (var e = [], t = 0, n = this.inboundNodes; t < n.length; t++) {
                var r = n[t], i = JSON.stringify(r.outputShapes);
                -1 === e.indexOf(i) && e.push(i)
            }
            if (1 === e.length) {
                var a = this.inboundNodes[0].outputShapes;
                return Array.isArray(a) && Array.isArray(a[0]) && 1 === a.length ? a[0] : a
            }
            throw new AttributeError("The layer " + this.name + ' has multiple inbound nodes with different output shapes. Hence the notion of "outut shape" is ill-defined for the layer.')
        }, enumerable: !0, configurable: !0
    }), t.prototype.countParams = function () {
        if (!this.built) throw new RuntimeError("You tried to call countParams() on " + this.name + ", but the layer is not built yet. Build it first by calling build(batchInputShape).");
        return countParamsInWeights(this.weights)
    }, t.prototype.build = function (e) {
        this.built = !0
    }, t.prototype.getWeights = function (e) {
        return void 0 === e && (e = !1), batchGetValue(e ? this.trainableWeights : this.weights)
    }, t.prototype.setWeights = function (e) {
        var t = this;
        tidy(function () {
            var n = t.weights;
            if (n.length !== e.length) throw new ValueError('You called setWeights(weights) on layer "' + t.name + '" with a weight list of length ' + e.length + ", but the layer was expecting " + n.length + " weights. Provided weights: " + e + "...");
            if (0 !== n.length) {
                for (var r = [], i = batchGetValue(n), a = 0; a < i.length; ++a) {
                    var o = i[a], s = n[a], l = e[a];
                    if (!util.arraysEqual(o.shape, l.shape)) throw new ValueError("Layer weight shape " + o.shape + " not compatible with provided weight shape " + l.shape);
                    r.push([s, l])
                }
                batchSetValue(r)
            }
        })
    }, t.prototype.addWeight = function (e, t, n, r, i, a, o) {
        if (-1 !== this._addedWeightNames.indexOf(e)) throw new ValueError("Duplicate weight name " + e + " for layer " + this.name);
        this._addedWeightNames.push(e), null == n && (n = "float32"), this.fastWeightInitDuringBuild && (r = getInitializer("zeros"));
        var s = r.apply(t, n), l = new LayerVariable(s, n, e, a, o);
        return s.dispose(), null != i && this.addLoss(function () {
            return i.apply(l.read())
        }), null == a && (a = !0), a ? this._trainableWeights.push(l) : this._nonTrainableWeights.push(l), l
    }, t.prototype.setFastWeightInitDuringBuild = function (e) {
        this.fastWeightInitDuringBuild = e
    }, t.prototype.addLoss = function (e) {
        var t;
        null == e || Array.isArray(e) && 0 === e.length || (e = toList(e), void 0 !== this._losses && null !== this._losses && (t = this.losses).push.apply(t, e))
    }, t.prototype.computeOutputShape = function (e) {
        return e
    }, t.prototype.computeMask = function (e, t) {
        var n = this;
        if (!this.supportsMasking) {
            if (null != t) {
                if (!Array.isArray(t)) throw new TypeError("Layer " + this.name + " does not support masking, but was passed an inputMask.");
                t.forEach(function (e) {
                    if (null != e) throw new TypeError("Layer " + n.name + " does not support masking, but was passed an inputMask.")
                })
            }
            return null
        }
        return t
    }, t.prototype.addInboundNode = function (e, t, n, r, i, a, o) {
        void 0 === o && (o = null);
        var s = toList(e);
        t = toList(t), n = toList(n), r = toList(r), i = normalizeShapeList(i), a = normalizeShapeList(a);
        for (var l = [], u = [], c = [], h = 0, p = s; h < p.length; h++) {
            var d = p[h];
            l.push(d.sourceLayer), u.push(d.nodeIndex), c.push(d.tensorIndex)
        }
        new Node({
            outboundLayer: this,
            inboundLayers: l,
            nodeIndices: u,
            tensorIndices: c,
            inputTensors: s,
            outputTensors: t,
            inputMasks: n,
            outputMasks: r,
            inputShapes: i,
            outputShapes: a
        }, o);
        for (var g = 0; g < t.length; g++) t[g].sourceLayer = this, t[g].nodeIndex = this.inboundNodes.length - 1, t[g].tensorIndex = g
    }, t.prototype.getConfig = function () {
        var e = {name: this.name, trainable: this.trainable};
        return null != this.batchInputShape && (e.batchInputShape = this.batchInputShape), null != this.dtype && (e.dtype = this.dtype), e
    }, t.prototype.disposeWeights = function () {
        return this.weights.forEach(function (e) {
            return e.dispose()
        }), this.weights.length
    }, t.prototype.assertNotDisposed = function () {
        if (0 === this._refCount) throw new Error("Layer '" + this.name + "' is already disposed.")
    }, t.prototype.dispose = function () {
        if (!this.built) throw new Error("Cannot dispose Layer " + this.name + " because it has not been built yet.");
        if (null === this._refCount) throw new Error("Cannot dispose Layer " + this.name + " because it has not been used yet.");
        this.assertNotDisposed();
        var e = 0;
        return 0 == --this._refCount && (e = this.disposeWeights()), {
            refCountAfterDispose: this._refCount,
            numDisposedVariables: e
        }
    }, t
}(serialization.Serializable);

function collectInputShape(e) {
    for (var t = [], n = 0, r = e = toList(e); n < r.length; n++) {
        var i = r[n];
        t.push(i.shape)
    }
    return singletonOrArray(t)
}

function guessOutputDType(e) {
    return "float32"
}

function getSourceInputs(e, t, n) {
    if ((null == t || null != n && n > 0) && (t = e.sourceLayer, n = e.nodeIndex), 0 === t.inboundNodes.length) return [e];
    var r = t.inboundNodes[n];
    if (0 === r.inboundLayers.length) return r.inputTensors;
    for (var i = [], a = 0; a < r.inboundLayers.length; a++) for (var o = 0, s = getSourceInputs(r.inputTensors[a], r.inboundLayers[a], r.nodeIndices[a]); o < s.length; o++) {
        var l = s[o];
        -1 === i.indexOf(l) && i.push(l)
    }
    return i
}

var ModelLoggingVerbosity, InputLayer = function (e) {
    function t(t) {
        var n = e.call(this, {dtype: t.dtype, name: null != t.name ? t.name : getUid("input").toString()}) || this;
        if (null == t.batchSize && (t.batchSize = null), null == t.sparse && (t.sparse = !1), n.trainable = !1, n.built = !0, n.sparse = t.sparse, null != t.inputShape && null != t.batchInputShape) throw new ValueError("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");
        var r = t.batchInputShape;
        if (null == r) {
            if (null == t.inputShape) throw new ValueError("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");
            r = [t.batchSize].concat(t.inputShape)
        } else if (null != t.batchSize) throw new ValueError("Cannot specify batchSize if batchInputShape isspecified when creating an InputLayer.");
        var i = t.dtype || "float32";
        n.batchInputShape = r, n.dtype = i, n.inputSpec = [{shape: r}];
        var a = new SymbolicTensor(n.dtype, n.batchInputShape, n, [], {}, n.name);
        return a.nodeIndex = 0, a.tensorIndex = 0, new Node({
            outboundLayer: n,
            inboundLayers: [],
            nodeIndices: [],
            tensorIndices: [],
            inputTensors: [a],
            outputTensors: [a],
            inputMasks: [null],
            outputMasks: [null],
            inputShapes: [r],
            outputShapes: [r]
        }), n
    }

    return __extends(t, e), t.prototype.apply = function (e, t) {
        throw new ValueError("Cannot pass any input to an InputLayer's apply() method. InputLayer name: " + this.name)
    }, t.prototype.dispose = function () {
        return {refCountAfterDispose: this._refCount, numDisposedVariables: 0}
    }, t.prototype.getConfig = function () {
        return {batchInputShape: this.batchInputShape, dtype: this.dtype, sparse: this.sparse, name: this.name}
    }, t.className = "InputLayer", t
}(Layer);

function Input(e) {
    if (null == e.batchShape && null == e.shape) throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");
    if (null != e.batchShape && null != e.shape) throw new ValueError("Please provide either a `shape` or `batchShape` argument to Input, but not both.");
    var t = e.batchShape;
    null != e.shape && null == t && (t = [null].concat(e.shape));
    var n = e.dtype;
    return null == n && (n = "float32"), new InputLayer({
        batchInputShape: t,
        name: e.name,
        dtype: n,
        sparse: e.sparse
    }).inboundNodes[0].outputTensors[0]
}

function resolveScalarsInLogs(e) {
    return __awaiter(this, void 0, void 0, function () {
        var t, n, r, i, a, o, s, l;
        return __generator(this, function (u) {
            switch (u.label) {
                case 0:
                    if (null == e) return [2];
                    for (i in t = [], n = [], r = [], e) "number" != typeof(a = e[i]) && (o = a, t.push(o.data()), n.push(i), r.push(o));
                    return [4, Promise.all(t)];
                case 1:
                    for (s = u.sent(), l = 0; l < s.length; ++l) e[n[l]] = s[l][0];
                    return dispose(r), [2]
            }
        })
    })
}

function disposeTensorsInLogs(e) {
    if (null != e) for (var t in e) {
        var n = e[t];
        "number" != typeof n && n.dispose()
    }
}

serialization.registerClass(InputLayer), function (e) {
    e[e.SILENT = 0] = "SILENT", e[e.VERBOSE = 1] = "VERBOSE"
}(ModelLoggingVerbosity || (ModelLoggingVerbosity = {}));
var BaseCallback = function () {
    function e() {
        this.validationData = null
    }

    return e.prototype.setParams = function (e) {
        this.params = e
    }, e.prototype.onEpochBegin = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
                return [2]
            })
        })
    }, e.prototype.onEpochEnd = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
                return [2]
            })
        })
    }, e.prototype.onBatchBegin = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
                return [2]
            })
        })
    }, e.prototype.onBatchEnd = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
                return [2]
            })
        })
    }, e.prototype.onTrainBegin = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
                return [2]
            })
        })
    }, e.prototype.onTrainEnd = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
                return [2]
            })
        })
    }, e.prototype.setModel = function (e) {
    }, e
}(), CallbackList = function () {
    function e(e, t) {
        void 0 === t && (t = 10), null == e && (e = []), this.callbacks = e, this.queueLength = t
    }

    return e.prototype.append = function (e) {
        this.callbacks.push(e)
    }, e.prototype.setParams = function (e) {
        for (var t = 0, n = this.callbacks; t < n.length; t++) {
            n[t].setParams(e)
        }
    }, e.prototype.setModel = function (e) {
        for (var t = 0, n = this.callbacks; t < n.length; t++) {
            n[t].setModel(e)
        }
    }, e.prototype.onEpochBegin = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var n, r;
            return __generator(this, function (i) {
                switch (i.label) {
                    case 0:
                        null == t && (t = {}), n = 0, r = this.callbacks, i.label = 1;
                    case 1:
                        return n < r.length ? [4, r[n].onEpochBegin(e, t)] : [3, 4];
                    case 2:
                        i.sent(), i.label = 3;
                    case 3:
                        return n++, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    }, e.prototype.onEpochEnd = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var n, r;
            return __generator(this, function (i) {
                switch (i.label) {
                    case 0:
                        null == t && (t = {}), n = 0, r = this.callbacks, i.label = 1;
                    case 1:
                        return n < r.length ? [4, r[n].onEpochEnd(e, t)] : [3, 4];
                    case 2:
                        i.sent(), i.label = 3;
                    case 3:
                        return n++, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    }, e.prototype.onBatchBegin = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var n, r;
            return __generator(this, function (i) {
                switch (i.label) {
                    case 0:
                        null == t && (t = {}), n = 0, r = this.callbacks, i.label = 1;
                    case 1:
                        return n < r.length ? [4, r[n].onBatchBegin(e, t)] : [3, 4];
                    case 2:
                        i.sent(), i.label = 3;
                    case 3:
                        return n++, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    }, e.prototype.onBatchEnd = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var n, r;
            return __generator(this, function (i) {
                switch (i.label) {
                    case 0:
                        null == t && (t = {}), n = 0, r = this.callbacks, i.label = 1;
                    case 1:
                        return n < r.length ? [4, r[n].onBatchEnd(e, t)] : [3, 4];
                    case 2:
                        i.sent(), i.label = 3;
                    case 3:
                        return n++, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    }, e.prototype.onTrainBegin = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, n;
            return __generator(this, function (r) {
                switch (r.label) {
                    case 0:
                        null == e && (e = {}), t = 0, n = this.callbacks, r.label = 1;
                    case 1:
                        return t < n.length ? [4, n[t].onTrainBegin(e)] : [3, 4];
                    case 2:
                        r.sent(), r.label = 3;
                    case 3:
                        return t++, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    }, e.prototype.onTrainEnd = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, n;
            return __generator(this, function (r) {
                switch (r.label) {
                    case 0:
                        null == e && (e = {}), t = 0, n = this.callbacks, r.label = 1;
                    case 1:
                        return t < n.length ? [4, n[t].onTrainEnd(e)] : [3, 4];
                    case 2:
                        r.sent(), r.label = 3;
                    case 3:
                        return t++, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    }, e
}(), ModelTrainingYielder = function () {
    function e(e) {
        this.yieldEvery = e, this.batchCount = 0, this.batchDurationsMillis = [], this.autoYieldEveryBatches = null, this.batchStartMillis = util.now()
    }

    return e.prototype.resolveOneTensorInLogs = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, n, r, i, a;
            return __generator(this, function (o) {
                switch (o.label) {
                    case 0:
                        for (n in t = [], e) t.push(n);
                        r = 0, o.label = 1;
                    case 1:
                        return r < t.length ? (i = t[r], "number" == typeof(a = e[i]) ? [3, 3] : [4, a.data()]) : [3, 4];
                    case 2:
                        return o.sent(), [3, 4];
                    case 3:
                        return r++, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    }, e.prototype.maybeYieldOnBatch = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var n, r;
            return __generator(this, function (i) {
                switch (i.label) {
                    case 0:
                        return "auto" !== this.yieldEvery ? [3, 7] : (this.batchCount++, null != this.autoYieldEveryBatches ? [3, 3] : [4, this.resolveOneTensorInLogs(t)]);
                    case 1:
                        return i.sent(), n = util.now(), [4, nextFrame()];
                    case 2:
                        return i.sent(), this.batchCount > e.SKIP_FIRST_BATCHES && (this.batchDurationsMillis.push(n - this.batchStartMillis), this.batchDurationsMillis.length >= e.DECISION_BATCH_COUNT && (r = this.batchDurationsMillis.reduce(function (e, t) {
                            return e + t
                        }) / this.batchDurationsMillis.length, this.autoYieldEveryBatches = Math.round(e.THRESHOLD_MILLIS / r), this.autoYieldEveryBatches < 1 && (this.autoYieldEveryBatches = 1))), this.batchStartMillis = util.now(), this.lastYieldBatchCount = this.batchCount, [3, 6];
                    case 3:
                        return this.batchCount - this.lastYieldBatchCount >= this.autoYieldEveryBatches ? [4, nextFrame()] : [3, 6];
                    case 4:
                        return i.sent(), [4, this.resolveOneTensorInLogs(t)];
                    case 5:
                        i.sent(), this.lastYieldBatchCount = this.batchCount, i.label = 6;
                    case 6:
                        return [3, 9];
                    case 7:
                        return "batch" !== this.yieldEvery ? [3, 9] : [4, nextFrame()];
                    case 8:
                        i.sent(), i.label = 9;
                    case 9:
                        return [2]
                }
            })
        })
    }, e.prototype.maybeYieldOnEpoch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
                switch (e.label) {
                    case 0:
                        return "epoch" !== this.yieldEvery ? [3, 2] : [4, nextFrame()];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, e.SKIP_FIRST_BATCHES = 1, e.DECISION_BATCH_COUNT = 2, e.THRESHOLD_MILLIS = 16, e
}(), BaseLogger = function (e) {
    function t(t) {
        var n = e.call(this) || this;
        return n.yieldEvery = t || "auto", n
    }

    return __extends(t, e), t.prototype.onTrainBegin = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
                return this.autoYielder = new ModelTrainingYielder(this.yieldEvery), [2]
            })
        })
    }, t.prototype.onEpochBegin = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
                return this.seen = 0, this.totals = {}, [2]
            })
        })
    }, t.prototype.onBatchEnd = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var e, n, r, i, a = this;
            return __generator(this, function (o) {
                switch (o.label) {
                    case 0:
                        return [4, this.autoYielder.maybeYieldOnBatch(t)];
                    case 1:
                        for (i in o.sent(), null == t && (t = {}), e = null == t.size ? 0 : t.size, this.seen += e, n = function (n) {
                            var i = t[n];
                            if ("number" == typeof i) r.totals.hasOwnProperty(n) || (r.totals[n] = 0), r.totals[n] = r.totals[n] + i * e; else {
                                var o = void 0;
                                n in r.totals ? o = r.totals[n] : r.totals[n] = getScalar(0), r.totals[n] = tidy(function () {
                                    return add(a.totals[n], mul(i, getScalar(e)))
                                }), null != o && o.dispose()
                            }
                        }, r = this, t) n(i);
                        return [2]
                }
            })
        })
    }, t.prototype.onEpochEnd = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var e, n, r, i, a, o = this;
            return __generator(this, function (s) {
                switch (s.label) {
                    case 0:
                        return [4, this.autoYielder.maybeYieldOnEpoch()];
                    case 1:
                        if (s.sent(), null != t) for (e = function (e) {
                            if (null == n.totals[e]) return "continue";
                            "number" == typeof n.totals[e] ? t[e] = n.totals[e] / n.seen : tidy(function () {
                                t[e] = mul(div(getScalar(1), getScalar(o.seen)), o.totals[e]), o.totals[e].dispose(), keep(t[e])
                            })
                        }, n = this, r = 0, i = this.params.metrics; r < i.length; r++) a = i[r], e(a);
                        return [2]
                }
            })
        })
    }, t
}(BaseCallback), History = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.onTrainBegin = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
                return this.epoch = [], this.history = {}, [2]
            })
        })
    }, t.prototype.onEpochEnd = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var n;
            return __generator(this, function (r) {
                for (n in null == t && (t = {}), this.epoch.push(e), t) null == this.history[n] && (this.history[n] = []), this.history[n].push(t[n]);
                return [2]
            })
        })
    }, t.prototype.syncData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e, t, n, r, i, a, o, s, l;
            return __generator(this, function (u) {
                switch (u.label) {
                    case 0:
                        for (r in e = [], t = [], n = [], this.history) for (i = this.history[r], a = 0; a < i.length; ++a) "number" != typeof i[a] && (o = i[a], e.push(o.data()), t.push(r), n.push(a));
                        return [4, Promise.all(e)];
                    case 1:
                        for (s = u.sent(), l = 0; l < s.length; ++l) this.history[t[l]][n[l]].dispose(), this.history[t[l]][n[l]] = s[l][0];
                        return [2]
                }
            })
        })
    }, t
}(BaseCallback), CustomCallback = function (e) {
    function t(t) {
        var n = e.call(this) || this;
        return n.trainBegin = t.onTrainBegin, n.trainEnd = t.onTrainEnd, n.epochBegin = t.onEpochBegin, n.epochEnd = t.onEpochEnd, n.batchBegin = t.onBatchBegin, n.batchEnd = t.onBatchEnd, n
    }

    return __extends(t, e), t.prototype.onEpochBegin = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (n) {
                switch (n.label) {
                    case 0:
                        return null == this.epochBegin ? [3, 3] : [4, resolveScalarsInLogs(t)];
                    case 1:
                        return n.sent(), [4, this.epochBegin(e, t)];
                    case 2:
                        n.sent(), n.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, t.prototype.onEpochEnd = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (n) {
                switch (n.label) {
                    case 0:
                        return null == this.epochEnd ? [3, 3] : [4, resolveScalarsInLogs(t)];
                    case 1:
                        return n.sent(), [4, this.epochEnd(e, t)];
                    case 2:
                        n.sent(), n.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, t.prototype.onBatchBegin = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (n) {
                switch (n.label) {
                    case 0:
                        return null == this.batchBegin ? [3, 3] : [4, resolveScalarsInLogs(t)];
                    case 1:
                        return n.sent(), [4, this.batchBegin(e, t)];
                    case 2:
                        n.sent(), n.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, t.prototype.onBatchEnd = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (n) {
                switch (n.label) {
                    case 0:
                        return null == this.batchEnd ? [3, 3] : [4, resolveScalarsInLogs(t)];
                    case 1:
                        return n.sent(), [4, this.batchEnd(e, t)];
                    case 2:
                        n.sent(), n.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, t.prototype.onTrainBegin = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                switch (t.label) {
                    case 0:
                        return null == this.trainBegin ? [3, 3] : [4, resolveScalarsInLogs(e)];
                    case 1:
                        return t.sent(), [4, this.trainBegin(e)];
                    case 2:
                        t.sent(), t.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, t.prototype.onTrainEnd = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                switch (t.label) {
                    case 0:
                        return null == this.trainEnd ? [3, 3] : [4, resolveScalarsInLogs(e)];
                    case 1:
                        return t.sent(), [4, this.trainEnd(e)];
                    case 2:
                        t.sent(), t.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, t
}(BaseCallback);

function standardizeCallbacks(e) {
    return null == e ? null : e instanceof BaseCallback ? [e] : Array.isArray(e) && e[0] instanceof BaseCallback ? e : toList(e).map(function (e) {
        return new CustomCallback(e)
    })
}

var CallbackConstructorRegistry = function () {
    function e() {
    }

    return e.registerCallbackConstructor = function (t, n) {
        util.assert(t >= 0 && Number.isInteger(t), "Verbosity level is expected to be an integer >= 0, but got " + t), e.checkForDuplicate(n), null == e.constructors[t] && (e.constructors[t] = []), e.constructors[t].push(n)
    }, e.checkForDuplicate = function (t) {
        for (var n in e.constructors) {
            e.constructors[+n].forEach(function (e) {
                if (e === t) throw new ValueError("Duplicate callback constructor.")
            })
        }
    }, e.clear = function () {
        e.constructors = {}
    }, e.createCallbacks = function (t) {
        var n = [];
        for (var r in e.constructors) {
            var i = +r;
            t >= i && n.push.apply(n, e.constructors[i])
        }
        return n.map(function (e) {
            return new e
        })
    }, e.constructors = {}, e
}();

function configureCallbacks(e, t, n, r, i, a, o, s, l, u) {
    var c = new History, h = [new BaseLogger(t)].concat(CallbackConstructorRegistry.createCallbacks(n));
    null != e && h.push.apply(h, e), h.push(c);
    var p = new CallbackList(h);
    return p.setParams({
        epochs: r,
        initialEpoch: i,
        samples: a,
        steps: o,
        batchSize: s,
        verbose: n,
        doValidation: l,
        metrics: u
    }), {callbackList: p, history: c}
}

function l2Normalize(e, t) {
    return tidy(function () {
        var n = sum(square(e), t, !0), r = mul(scalar(epsilon()), onesLike(e)), i = sqrt(maximum(n, r));
        return div(e, i)
    })
}

function meanSquaredError(e, t) {
    return tidy(function () {
        return mean(square(sub(t, e)), -1)
    })
}

function meanAbsoluteError(e, t) {
    return tidy(function () {
        return mean(abs(sub(t, e)), -1)
    })
}

function meanAbsolutePercentageError(e, t) {
    return tidy(function () {
        var n = sub(e, t), r = clipByValue(abs(e), epsilon(), Number.MAX_VALUE), i = abs(div(n, r));
        return mul(getScalar(100), mean(i, -1))
    })
}

function meanSquaredLogarithmicError(e, t) {
    return tidy(function () {
        var n = getScalar(1), r = clipByValue(t, epsilon(), Number.MAX_VALUE), i = log(add(n, r)),
            a = clipByValue(e, epsilon(), Number.MAX_VALUE), o = log(add(n, a));
        return mean(square(sub(i, o)), -1)
    })
}

function squaredHinge(e, t) {
    return tidy(function () {
        var n = getScalar(0), r = getScalar(1), i = maximum(n, sub(r, mul(e, t)));
        return mean(square(i), -1)
    })
}

function hinge(e, t) {
    return tidy(function () {
        var n = getScalar(0), r = getScalar(1), i = maximum(n, sub(r, mul(e, t)));
        return mean(i, -1)
    })
}

function categoricalHinge(e, t) {
    return tidy(function () {
        var n = getScalar(0), r = getScalar(1), i = sum(mul(e, t), -1), a = max(mul(sub(r, e), t), -1);
        return maximum(n, add(r, sub(a, i)))
    })
}

function logcosh(e, t) {
    return tidy(function () {
        var n = getScalar(Math.log(2)), r = sub(t, e), i = sub(add(r, softplus(mul(getScalar(-2), r))), n);
        return mean(i, -1)
    })
}

function categoricalCrossentropy(e, t, n) {
    return void 0 === n && (n = !1), tidy(function () {
        if (n) t = softmax(t); else {
            var r = sum(t, t.shape.length - 1, !0);
            t = div(t, r)
        }
        return t = clipByValue(t, epsilon(), 1 - epsilon()), neg(sum(mul(e.toFloat(), log(t)), t.shape.length - 1))
    })
}

function sparseCategoricalCrossentropy(e, t) {
    return tidy(function () {
        var n = floor(flatten(e)).toInt(), r = (t = clipByValue(t, epsilon(), 1 - epsilon())).shape;
        return categoricalCrossentropy(oneHot(n, r[r.length - 1]).reshape(r), t, !1)
    })
}

function sigmoidCrossEntropyWithLogits(e, t) {
    if (!util.arraysEqual(e.shape, t.shape)) throw new ValueError("logits and labels must have the same shape, but got shapes " + JSON.stringify(e.shape) + " and " + JSON.stringify(t.shape));
    return tidy(function () {
        var n = t.relu(), r = t.abs().neg();
        return n.sub(t.mul(e)).add(r.exp().log1p())
    })
}

function binaryCrossentropy(e, t) {
    return tidy(function () {
        var n;
        return n = clipByValue(t, epsilon(), 1 - epsilon()), n = log(div(n, sub(getScalar(1), n))), mean(sigmoidCrossEntropyWithLogits(e, n), -1)
    })
}

function kullbackLeiblerDivergence(e, t) {
    return tidy(function () {
        var n = clipByValue(e, epsilon(), 1), r = clipByValue(t, epsilon(), 1);
        return sum(mul(e, log(div(n, r))), -1)
    })
}

function poisson(e, t) {
    return tidy(function () {
        var n = log(add(getScalar(epsilon()), t));
        return mean(sub(t, mul(e, n)), -1)
    })
}

function cosineProximity(e, t) {
    return tidy(function () {
        var n = l2Normalize(e, -1), r = l2Normalize(t, -1), i = mul(n, r);
        return neg(sum(i, -1))
    })
}

function get(e) {
    var t = {
        meanSquaredError: meanSquaredError,
        meanAbsoluteError: meanAbsoluteError,
        meanAbsolutePercentageError: meanAbsolutePercentageError,
        meanSquaredLogarithmicError: meanSquaredLogarithmicError,
        squaredHinge: squaredHinge,
        hinge: hinge,
        categoricalHinge: categoricalHinge,
        logcosh: logcosh,
        categoricalCrossentropy: categoricalCrossentropy,
        sparseCategoricalCrossentropy: sparseCategoricalCrossentropy,
        binaryCrossentropy: binaryCrossentropy,
        kullbackLeiblerDivergence: kullbackLeiblerDivergence,
        poisson: poisson,
        cosineProximity: cosineProximity
    };
    if ("string" == typeof e) {
        if (e in t) return t[e];
        var n = "Unknown loss " + e;
        throw e.toLowerCase().includes("softmaxcrossentropy") && (n = "Unknown loss " + e + '. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy'), new ValueError(n)
    }
    return e
}

function binaryAccuracy(e, t) {
    return tidy(function () {
        var n = mul(getScalar(.5), onesLike(t)), r = cast$1(greater(t, n), e.dtype);
        return mean(equal(e, r), -1)
    })
}

function categoricalAccuracy(e, t) {
    return tidy(function () {
        return cast$1(equal(argMax(e, -1), argMax(t, -1)), "float32")
    })
}

function truePositives(e, t) {
    return tidy(function () {
        var n = getScalar(1);
        return logicalAnd(e.equal(n), t.equal(n)).sum().cast("float32")
    })
}

function falseNegatives(e, t) {
    return tidy(function () {
        var n = getScalar(1), r = getScalar(0);
        return logicalAnd(e.equal(n), t.equal(r)).sum().cast("float32")
    })
}

function falsePositives(e, t) {
    return tidy(function () {
        var n = getScalar(1), r = getScalar(0);
        return logicalAnd(e.equal(r), t.equal(n)).sum().cast("float32")
    })
}

function precision(e, t) {
    return tidy(function () {
        var n = getScalar(0), r = truePositives(e, t), i = falsePositives(e, t), a = r.add(i);
        return where(greater(a, n), r.div(a), n).cast("float32")
    })
}

function recall(e, t) {
    return tidy(function () {
        var n = getScalar(0), r = truePositives(e, t), i = falseNegatives(e, t), a = r.add(i);
        return where(greater(a, n), r.div(a), n).cast("float32")
    })
}

function binaryCrossentropy$1(e, t) {
    return binaryCrossentropy(e, t)
}

function sparseCategoricalAccuracy(e, t) {
    return e.rank === t.rank && (e = e.squeeze([e.rank - 1])), (t = t.argMax(-1)).dtype !== e.dtype && (t = t.asType(e.dtype)), equal(e, t).asType("float32")
}

var mse$1 = meanSquaredError, MSE$1 = meanSquaredError, mae$1 = meanAbsoluteError, MAE$1 = meanAbsoluteError,
    mape$1 = meanAbsolutePercentageError, MAPE$1 = meanAbsolutePercentageError,
    categoricalCrossentropy$1 = categoricalCrossentropy, cosine$1 = cosineProximity,
    sparseCategoricalCrossentropy$1 = sparseCategoricalCrossentropy;

function get$1(e) {
    var t = {
        binaryAccuracy: binaryAccuracy,
        categoricalAccuracy: categoricalAccuracy,
        precision: precision,
        categoricalCrossentropy: categoricalCrossentropy$1,
        sparseCategoricalCrossentropy: sparseCategoricalCrossentropy$1,
        mse: mse$1,
        MSE: MSE$1,
        mae: mae$1,
        MAE: MAE$1,
        mape: mape$1,
        MAPE: MAPE$1,
        cosine: cosine$1
    };
    if ("string" == typeof e && e in t) return t[e];
    if ("string" != typeof e && null != e) return e;
    throw new ValueError("Unknown metric " + e)
}

function getOptimizer(e) {
    var t = {
        Adagrad: function () {
            return train.adagrad(.01)
        }, Adadelta: function () {
            return train.adadelta(1, .95, epsilon())
        }, Adam: function () {
            return train.adam(.001, .9, .999, epsilon())
        }, Adamax: function () {
            return train.adamax(.002, .9, .999, epsilon(), 0)
        }, RMSProp: function () {
            return train.rmsprop(.001, .9, 0, epsilon())
        }, SGD: function () {
            return train.sgd(.01)
        }
    };
    if (t.adagrad = t.Adagrad, t.adadelta = t.Adadelta, t.adam = t.Adam, t.adamax = t.Adamax, t.rmsprop = t.RMSProp, t.sgd = t.SGD, e in t) return t[e]();
    throw new ValueError("Unknown Optimizer " + e)
}

function printSummary(e, t, n, r) {
    void 0 === r && (r = console.log);
    var i, a = isModelSequentialLike(e), o = ["Layer (type)", "Output shape", "Param #"];
    if (a ? (t = t || 65, n = n || [.45, .85, 1]) : (t = t || 98, n = n || [.33, .55, .67, 1]), n[n.length - 1] <= 1 && (n = n.map(function (e) {
        return Math.floor(t * e)
    })), !a) for (var s in o.push("Receives inputs"), i = [], e.nodesByDepth) i.push.apply(i, e.nodesByDepth[s]);
    r("_".repeat(t)), printRow(o, n, r), r("=".repeat(t));
    for (var l = e.layers, u = 0; u < l.length; ++u) a ? printLayerSummary(l[u], n, r) : printLayerSummaryWithConnections(l[u], n, i, r), r((u === l.length - 1 ? "=" : "_").repeat(t));
    e.checkTrainableWeightsConsistency();
    var c = countTrainableParams(e), h = countParamsInWeights(e.nonTrainableWeights);
    r("Total params: " + (c + h)), r("Trainable params: " + c), r("Non-trainable params: " + h), r("_".repeat(t))
}

function countTrainableParams(e) {
    return null != e.collectedTrainableWeights ? countParamsInWeights(e.collectedTrainableWeights) : countParamsInWeights(e.trainableWeights)
}

function isModelSequentialLike(e) {
    var t = !0, n = [], r = [];
    for (var i in e.nodesByDepth) n.push(e.nodesByDepth[i]);
    for (var a = 0, o = n; a < o.length; a++) {
        var s = o[a];
        if (s.length > 1 || 1 === s.length && s[0].inboundLayers.length > 1) {
            t = !1;
            break
        }
        r.push.apply(r, s)
    }
    if (t) for (var l = 0, u = e.layers; l < u.length; l++) {
        for (var c = !1, h = 0, p = u[l].inboundNodes; h < p.length; h++) {
            var d = p[h];
            if (-1 !== r.indexOf(d)) {
                if (c) {
                    t = !1;
                    break
                }
                c = !0
            }
        }
        if (!t) break
    }
    return t
}

function printRow(e, t, n) {
    void 0 === n && (n = console.log);
    for (var r = "", i = 0; i < e.length; ++i) i > 0 && (r = r.slice(0, r.length - 1) + " "), r = (r += e[i]).slice(0, t[i]), r += " ".repeat(t[i] - r.length);
    n(r)
}

function printLayerSummary(e, t, n) {
    var r;
    try {
        r = JSON.stringify(e.outputShape)
    } catch (e) {
        r = "multiple"
    }
    printRow([e.name + " (" + e.getClassName() + ")", r, e.countParams().toString()], t, n)
}

function printLayerSummaryWithConnections(e, t, n, r) {
    var i;
    try {
        i = JSON.stringify(e.outputShape)
    } catch (e) {
        i = "multiple"
    }
    for (var a = [], o = 0, s = e.inboundNodes; o < s.length; o++) {
        var l = s[o];
        if (!(null != n && n.length > 0 && -1 === n.indexOf(l))) for (var u = 0; u < l.inboundLayers.length; ++u) {
            var c = l.inboundLayers[u].name, h = l.nodeIndices[u], p = l.tensorIndices[u];
            a.push(c + "[" + h + "][" + p + "]")
        }
    }
    var d = e.name, g = e.getClassName(), f = 0 === a.length ? "" : a[0];
    printRow([d + " (" + g + ")", i, e.countParams().toString(), f], t, r);
    for (u = 1; u < a.length; ++u) printRow(["", "", "", a[u]], t, r)
}

function deserialize(e, t, n) {
    return void 0 === t && (t = {}), void 0 === n && (n = !1), deserializeKerasObject(e, serialization.SerializationMap.getMap().classNameMap, t, "layer", n)
}

function isArrayItemInputOrOutputName(e, t, n) {
    return ("inboundNodes" === e || "outputLayers" === e || "inputLayers" === e) && 0 === t && "string" == typeof n
}

function convertPythonicToTs(e, t) {
    if (null === e) return null;
    if ("string" == typeof e) return toCamelCase(e);
    if ("number" == typeof e || "boolean" == typeof e) return e;
    if (e instanceof Array) {
        for (var n = [], r = e.length, i = 0; i < r; ++i) {
            var a = e[i];
            isArrayItemInputOrOutputName(t, i, a) ? n.push(a) : n.push(convertPythonicToTs(a, t))
        }
        return n
    }
    for (var o = {}, s = 0, l = Object.keys(e); s < l.length; s++) {
        var u = l[s], c = e[u];
        if ("name" === u && "string" == typeof c) o[u] = c; else {
            var h = toCamelCase(u);
            o[h] = convertPythonicToTs(c, h)
        }
    }
    return o
}

function convertTsToPythonic(e, t) {
    if (null === e || void 0 === e) return null;
    if ("string" == typeof e) return toSnakeCase(e);
    if ("number" == typeof e || "boolean" == typeof e) return e;
    if (e instanceof Array) {
        for (var n = [], r = e.length, i = 0; i < r; ++i) {
            var a = e[i];
            isArrayItemInputOrOutputName(t, i, a) ? n.push(a) : n.push(convertTsToPythonic(a, t))
        }
        return n
    }
    for (var o = {}, s = 0, l = Object.keys(e); s < l.length; s++) {
        var u = l[s], c = e[u], h = toSnakeCase(u);
        o[h] = "name" !== u && "className" !== u || "string" != typeof c ? convertTsToPythonic(c, u) : c
    }
    return o
}

var version = "0.9.2";

function assertFeedCompatibility(e, t) {
    if (null == e.dtype || e.dtype === t.dtype) return t;
    try {
        return cast(t, e.dtype)
    } catch (n) {
        throw new ValueError("The dtype of the feed (" + t.dtype + ") can not be cast to the dtype of the key '" + e.name + "' (" + e.dtype + ").")
    }
}

var FeedDict = function () {
    function e(t) {
        if (this.id2Value = {}, this.id2Mask = {}, this.name2Id = {}, t instanceof e) for (var n in t.id2Value) this.id2Value[n] = t.id2Value[n], n in t.id2Mask && (this.id2Mask[n] = t.id2Mask[n]); else {
            if (null == t) return;
            for (var r = 0, i = t; r < i.length; r++) {
                var a = i[r];
                this.add(a.key, a.value)
            }
        }
    }

    return e.prototype.add = function (e, t, n) {
        if (null != this.id2Value[e.id]) throw new ValueError("Duplicate key: name=" + e.name + ", id=" + e.id);
        return this.id2Value[e.id] = assertFeedCompatibility(e, t), this.name2Id[e.name] = e.id, null != n && (this.id2Mask[e.id] = n), this
    }, e.prototype.addFeed = function (e) {
        this.add(e.key, e.value)
    }, e.prototype.hasKey = function (e) {
        return null != this.id2Value[e.id]
    }, e.prototype.names = function () {
        return Object.keys(this.name2Id)
    }, e.prototype.getValue = function (e) {
        if (e instanceof SymbolicTensor) {
            if (null == this.id2Value[e.id]) throw new ValueError("Nonexistent key: " + e.name);
            return this.id2Value[e.id]
        }
        var t = this.name2Id[e];
        if (null == t) throw new ValueError("Feed dict has no SymbolicTensor name: " + e);
        return this.id2Value[t]
    }, e.prototype.getMask = function (e) {
        if (e instanceof SymbolicTensor) {
            if (null == this.id2Value[e.id]) throw new ValueError("Nonexistent key: " + e.name);
            return this.id2Mask[e.id]
        }
        var t = this.name2Id[e];
        if (null == t) throw new ValueError("Feed dict has no SymbolicTensor name: " + e);
        return this.id2Mask[t]
    }, e.prototype.disposeMasks = function () {
        null != this.id2Mask && dispose(this.id2Mask)
    }, e
}(), cachedSorted = {}, cachedRecipientCounts = {};

function execute(e, t, n, r) {
    for (var i = null != n && n.training, a = Array.isArray(e), o = a ? e : [e], s = o.map(function (e) {
        return e.name
    }), l = [], u = t.names(), c = 0, h = s; c < h.length; c++) {
        var p = h[c];
        -1 !== u.indexOf(p) ? l.push(t.getValue(p)) : l.push(null)
    }
    null != r && (r.maxNumTensors = -1 / 0, r.minNumTensors = 1 / 0);
    var d, g, f = s.join(",") + "|" + t.names().join(",");
    if (null == cachedSorted[f]) {
        var m = getTopologicalSortAndRecipientCounts(o, t);
        d = m.sorted, g = m.recipientCounts, cachedSorted[f] = d, cachedRecipientCounts[f] = g
    }
    d = cachedSorted[f], g = {}, i || Object.assign(g, cachedRecipientCounts[f]);
    for (var y = new FeedDict(t), v = 0; v < d.length; ++v) {
        if (null != r) {
            var b = memory().numTensors;
            b > r.maxNumTensors && (r.maxNumTensors = b), b < r.minNumTensors && (r.minNumTensors = b)
        }
        var w = d[v], z = w.sourceLayer;
        if (!(z instanceof InputLayer)) {
            for (var S = [], I = [], A = [], _ = !1, C = 0, N = w.inputs; C < N.length; C++) {
                var E = N[C], k = y.getValue(E), x = y.getMask(E);
                S.push(k), I.push(x), null != x && (_ = !0), i || (g[E.name]--, 0 !== g[E.name] || t.hasKey(E) || -1 !== s.indexOf(E.name) || k.isDisposed || A.push(k))
            }
            _ && ((n = n || {}).mask = I[0]);
            var L = toList(z.apply(S, n)), T = null;
            z.supportsMasking && (T = z.computeMask(S, I));
            for (var D = getNodeOutputs(w), O = Array.isArray(D) ? D : [D], R = 0; R < O.length; ++R) {
                y.hasKey(O[R]) || y.add(O[R], L[R], Array.isArray(T) ? T[0] : T);
                var M = s.indexOf(O[R].name);
                -1 !== M && (l[M] = L[R])
            }
            i || dispose(A)
        }
    }
    return y.disposeMasks(), a ? l : l[0]
}

function getTopologicalSortAndRecipientCounts(e, t) {
    util.assert(null != e && e.length > 0, "Exepcted at least one fetch, got none");
    var n = [], r = {};
    if (1 === e.length) {
        var i = getTopologicalSortAndRecipientCountsForOneFetch(e[0], t);
        n = i.sorted, r = i.recipientMap
    } else for (var a = new Set, o = 0, s = e; o < s.length; o++) {
        for (var l = getTopologicalSortAndRecipientCountsForOneFetch(s[o], t), u = l.sorted, c = l.recipientMap, h = 0, p = u; h < p.length; h++) {
            var d = p[h];
            a.has(d.name) || (n.push(d), a.add(d.name))
        }
        var g = function (e) {
            null == r[e] && (r[e] = new Set), c[e].forEach(function (t) {
                return r[e].add(t)
            })
        };
        for (var f in c) g(f)
    }
    return {sorted: n, recipientCounts: recipientMap2Counts(r)}
}

function recipientMap2Counts(e) {
    var t = {};
    for (var n in e) t[n] = e[n].size;
    return t
}

function getTopologicalSortAndRecipientCountsForOneFetch(e, t) {
    for (var n = new Set, r = [], i = {}, a = 0, o = t.names(); a < o.length; a++) {
        var s = o[a];
        n.add(s)
    }
    var l = [], u = [];
    for (l.push(e); l.length > 0;) {
        var c = l[l.length - 1];
        if (n.has(c.name)) l.pop(); else {
            var h = u[u.length - 1] === l.length - 1;
            if (0 === c.inputs.length || h) l.pop(), r.push(c), n.add(c.name), h && u.pop(); else {
                u.push(l.length - 1);
                for (var p = 0, d = c.inputs; p < d.length; p++) {
                    var g = d[p];
                    null == i[g.name] && (i[g.name] = new Set), i[g.name].add(c.name), n.has(g.name) || l.push(g)
                }
            }
        }
    }
    return {sorted: r, recipientMap: i}
}

function getNodeOutputs(e) {
    var t;
    if (1 === e.sourceLayer.inboundNodes.length) t = e.sourceLayer.output; else {
        for (var n = null, r = 0; r < e.sourceLayer.inboundNodes.length; ++r) for (var i = 0, a = e.sourceLayer.inboundNodes[r].outputTensors; i < a.length; i++) {
            if (a[i].id === e.id) {
                n = r;
                break
            }
        }
        t = e.sourceLayer.getOutputAt(n)
    }
    return t
}

function preprocessWeightsForLoading(e, t, n, r) {
    if (!n.startsWith("2.")) throw new ValueError("Unsupported Keras version in weights being loaded: " + n);
    return t
}

function loadTensor(e, t, n) {
    var r = stringToDType(e);
    return Tensor.make(t, {values: 0 === t.length ? n : util.flatten(n)}, r)
}

function loadWeightsFromJson(e, t, n) {
    void 0 === n && (n = !1);
    for (var r = e.keras_version, i = e.backend, a = t.map(function (e) {
        return e.name
    }), o = {}, s = 0, l = t; s < l.length; s++) {
        null != (b = l[s]).name && (null == o[b.name] && (o[b.name] = []), o[b.name].push(b))
    }
    for (var u = e.weights, c = [], h = 0; h < a.length; ++h) {
        var p = a[h], d = u[p];
        null == d && (d = []);
        for (var g = [], f = 0; f < d.length; ++f) {
            var m = d[f];
            g.push(new LayerVariable(loadTensor(m.dtype, m.shape, m.value)))
        }
        for (var y = 0, v = o[p]; y < v.length; y++) {
            var b, w = (b = v[y]).weights;
            if ((g = preprocessWeightsForLoading(b, g, r, i)).length !== w.length) {
                if (!n) throw new ValueError("Layer #" + h + ' (named "' + b.name + '") expects ' + w.length + " weight(s), but the saved weights have " + g.length + " element(s).");
                console.warn("Skipping loading of weights of layer " + b.name + " due to mismatch in number of weights: (" + g.length + " vs " + w.length + ").")
            }
            for (var z = 0; z < g.length; ++z) !n || util.arraysEqual(w[z].shape, g[z].shape) ? c.push([w[z], g[z].read()]) : console.warn("Skipping loading of weights for layer " + b.name + " due to mismatch in shape (" + w[z].shape + " vs " + g[z].shape + ")")
        }
    }
    batchSetValue(c)
}

function loadWeightsFromNamedTensorMap(e, t, n) {
    void 0 === n && (n = !0);
    for (var r = {}, i = 0, a = 0, o = t; a < o.length; a++) for (var s = 0, l = o[a].weights; s < l.length; s++) {
        var u = l[s];
        if (null != r[u.originalName]) throw new ValueError("Duplicate weight name: " + u.originalName);
        r[u.originalName] = u, i++
    }
    var c = [];
    for (var h in e) {
        if (null != r[h]) c.push([r[h], e[h]]); else if (n) throw new ValueError("Provided weight data has no target variable: " + h);
        delete r[h]
    }
    if (n) {
        var p = [];
        for (var d in r) p.push(d);
        if (p.length > 0) throw new ValueError(p.length + " of " + i + " weights are not set: " + p)
    }
    batchSetValue(c)
}

var Container = function (e) {
    function t(n) {
        var r = e.call(this, {}) || this;
        if (r.containerNodes = new Set, r.name = n.name, null == r.name) {
            var i = r.getClassName().toLowerCase();
            r.name = getUid(i)
        }
        if (r.supportsMasking = !1, r.trainable = !0, r.updatable = !0, Array.isArray(n.inputs) ? r.inputs = n.inputs.slice() : r.inputs = [n.inputs], Array.isArray(n.outputs) ? r.outputs = n.outputs.slice() : r.outputs = [n.outputs], unique(r.inputs).length !== r.inputs.length) throw new ValueError("The list of inputs passed to the model is redundant. All inputs should only appear once. Found: " + r.inputs.map(function (e) {
            return e.name
        }));
        unique(r.outputs).length !== r.outputs.length && console.warn("The list of outputs passed to the model is redundant. All outputs should only appear once. Found: " + r.outputs.map(function (e) {
            return e.name
        })), r.inputLayers = [], r.inputLayersNodeIndices = [], r.inputLayersTensorIndices = [], r.outputLayers = [], r.outputLayersNodeIndices = [], r.outputLayersTensorIndices = [], r.layers = [];
        for (var a = 0, o = r.outputs; a < o.length; a++) {
            var s = (C = o[a]).sourceLayer, l = C.nodeIndex, u = C.tensorIndex;
            r.outputLayers.push(s), r.outputLayersNodeIndices.push(l), r.outputLayersTensorIndices.push(u)
        }
        for (var c = 0, h = r.inputs; c < h.length; c++) {
            s = (C = h[c]).sourceLayer, l = C.nodeIndex, u = C.tensorIndex;
            assert(0 === l, "input layer has >1 nodes"), assert(0 === u, "input layer has >1 tensors"), r.inputLayers.push(s), r.inputLayersNodeIndices.push(l), r.inputLayersTensorIndices.push(u)
        }
        r.inputNames = [], r.outputNames = [], r.feedInputShapes = [], r.feedInputNames = [], r.feedOutputNames = [];
        for (var p = 0; p < r.inputLayers.length; p++) {
            if (!((s = r.inputLayers[p]) instanceof InputLayer)) throw new TypeError("Input layers to a Model must be InputLayer objects. Received inputs: " + n.inputs + ". Input " + p + " (0-based) originates from layer type " + s.getClassName() + ".");
            r.inputNames.push(s.name), r.feedInputShapes.push(s.batchInputShape), r.feedInputNames.push(s.name)
        }
        for (var d = 0, g = r.outputLayers; d < g.length; d++) {
            s = g[d];
            r.outputNames.push(s.name)
        }
        r.internalInputShapes = r.inputs.map(function (e) {
            return e.shape
        }), r.internalOutputShapes = r.outputs.map(function (e) {
            return e.shape
        });
        for (var f = {}, m = {}, y = {}, v = {}, b = {}, w = [], z = function (e, n, i, a, o, s) {
            null != a && null != o && null != s || (a = e.sourceLayer, o = e.nodeIndex, s = e.tensorIndex);
            var l = a.inboundNodes[o];
            if (-1 !== i.indexOf(l)) throw new RuntimeError("The tensor " + e.name + ' at layer "' + a.name + '" is part of a cycle.');
            if (-1 === n.indexOf(l)) {
                r.containerNodes.add(t.nodeKey(a, o)), a.id in b || (b[a.id] = Object.keys(b).length), -1 === i.indexOf(l) && i.push(l);
                for (var u = l.inboundLayers.length, c = 0; c < u; c++) {
                    var h = l.inputTensors[c], p = l.inboundLayers[c], d = l.nodeIndices[c], g = l.tensorIndices[c];
                    z(h, n, i, p, d, g)
                }
                for (n.push(l); i.indexOf(l) >= 0;) i.splice(i.indexOf(l), 1);
                w.push(l)
            }
        }, S = [], I = [], A = 0, _ = r.outputs; A < _.length; A++) {
            var C = _[A];
            z(C, S, I)
        }
        for (var N = 0, E = w.slice().reverse(); N < E.length; N++) {
            m[(K = E[N]).id] = K, K.id in f || (f[K.id] = 0);
            var k = f[K.id], x = null == y[K.outboundLayer.id] ? 0 : y[K.outboundLayer.id];
            k = Math.max(k, x), y[K.outboundLayer.id] = k, v[K.outboundLayer.id] = K.outboundLayer, f[K.id] = k;
            for (p = 0; p < K.inboundLayers.length; p++) {
                var L = K.inboundLayers[p], T = (l = K.nodeIndices[p], L.inboundNodes[l]),
                    D = null == f[T.id] ? 0 : f[T.id];
                f[T.id] = Math.max(k + 1, D), m[T.id] = T
            }
        }
        var O = {};
        for (var R in f) {
            (k = f[R]) in O || (O[k] = []), O[k].push(m[R])
        }
        var M = {};
        for (var P in y) {
            (k = y[P]) in M || (M[k] = []), M[k].push(v[P])
        }
        var F = Object.keys(M).map(function (e) {
            return parseInt(e, 10)
        }).sort(reverseNumberCompare);
        r.layers = [];
        for (var V = 0, B = F; V < B.length; V++) {
            var U = M[k = B[V]];
            U.sort(function (e, t) {
                var n = b[e.id], r = b[t.id];
                return n < r ? -1 : n > r ? 1 : 0
            });
            for (var j = 0, W = U; j < W.length; j++) {
                s = W[j];
                r.layers.push(s)
            }
        }
        r.layersByDepth = M, F = Object.keys(O).map(function (e) {
            return parseInt(e, 10)
        }).sort(reverseNumberCompare);
        for (var $ = r.inputs.slice(), q = [], G = 0, J = F; G < J.length; G++) for (var H = 0, Z = O[k = J[G]]; H < Z.length; H++) {
            var K;
            if (null != (s = (K = Z[H]).outboundLayer)) {
                for (var Y = 0, X = K.inputTensors; Y < X.length; Y++) {
                    C = X[Y];
                    if (-1 === $.indexOf(C)) throw new RuntimeError("Graph disconnected: cannot obtain value for tensor " + C + ' at layer "' + s.name + '". The following previous layers were accessed without issue: ' + q)
                }
                for (var Q = 0, ee = K.outputTensors; Q < ee.length; Q++) {
                    C = ee[Q];
                    $.push(C)
                }
                q.push(s.name)
            }
        }
        r.nodesByDepth = O;
        for (var te = r.layers.map(function (e) {
            return e.name
        }), ne = function (e) {
            var t = te.filter(function (t) {
                return t === e
            }).length;
            if (1 !== t) throw new RuntimeError('The name "' + e + '" is used ' + t + " times in the model. All layer names should be unique. Layer names: " + JSON.stringify(te))
        }, re = 0, ie = te; re < ie.length; re++) {
            ne(ie[re])
        }
        return r.outboundNodes = [], r.inboundNodes = [], new Node({
            outboundLayer: r,
            inboundLayers: [],
            nodeIndices: [],
            tensorIndices: [],
            inputTensors: r.inputs,
            outputTensors: r.outputs,
            inputMasks: r.inputs.map(function (e) {
                return null
            }),
            outputMasks: r.outputs.map(function (e) {
                return null
            }),
            inputShapes: r.inputs.map(function (e) {
                return e.shape
            }),
            outputShapes: r.outputs.map(function (e) {
                return e.shape
            })
        }), r.built = !0, r._refCount = 1, r
    }

    return __extends(t, e), t.prototype.assertNotDisposed = function () {
        if (0 === this._refCount) throw new Error("Container '" + this.name + "' is already disposed.")
    }, t.prototype.dispose = function () {
        this.assertNotDisposed();
        var e = {refCountAfterDispose: null, numDisposedVariables: 0};
        if (0 == --this._refCount) for (var t = 0, n = this.layers; t < n.length; t++) {
            var r = n[t];
            e.numDisposedVariables += r.dispose().numDisposedVariables
        }
        return e.refCountAfterDispose = this._refCount, e
    }, Object.defineProperty(t.prototype, "trainableWeights", {
        get: function () {
            if (this._trainableWeights.length > 0) throw new ValueError("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");
            if (!this.trainable) return [];
            for (var e = [], t = 0, n = this.layers; t < n.length; t++) {
                var r = n[t];
                e = e.concat(r.trainableWeights)
            }
            return e
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "nonTrainableWeights", {
        get: function () {
            for (var e = [], t = 0, n = this.layers; t < n.length; t++) {
                var r = n[t];
                e.push.apply(e, r.nonTrainableWeights)
            }
            if (!this.trainable) {
                for (var i = [], a = 0, o = this.layers; a < o.length; a++) {
                    r = o[a];
                    i.push.apply(i, r.trainableWeights)
                }
                return i.concat(e)
            }
            return e
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "weights", {
        get: function () {
            return this.trainableWeights.concat(this.nonTrainableWeights)
        }, enumerable: !0, configurable: !0
    }), t.prototype.loadWeights = function (e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1), void 0 === r && (r = !0), n ? loadWeightsFromNamedTensorMap(e, this.layers, r) : loadWeightsFromJson(e, this.layers, t)
    }, t.prototype.updatedConfig = function () {
        var e = this.getConfig();
        return {
            className: this.getClassName(),
            config: e,
            kerasVersion: "tfjs-layers " + version,
            backend: "TensorFlow.js"
        }
    }, t.prototype.toJSON = function (e, t) {
        void 0 === t && (t = !0);
        var n = convertTsToPythonic(this.updatedConfig());
        return t ? JSON.stringify(n) : n
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            e = toList(e);
            for (var r = new FeedDict, i = 0; i < n.inputs.length; ++i) r.add(n.inputs[i], e[i]);
            return execute(n.outputs, r, t)
        })
    }, t.prototype.computeMask = function (e, t) {
        var n = this;
        return tidy(function () {
            var r;
            return e = toList(e), r = null == t ? pyListRepeat(null, e.length) : toList(t), n.runInternalGraph(e, r)[1]
        })
    }, t.prototype.computeOutputShape = function (e) {
        var t = normalizeShapeList(e);
        if (t.length !== this.inputLayers.length) throw new ValueError("Invalid inputShape argument " + e + ": model has " + this.inputLayers.length + " tensor inputs.");
        for (var n = {}, r = 0; r < t.length; r++) {
            var i = this.inputLayers[r], a = t[r];
            n[I = i.name + "_0_0"] = a
        }
        var o = Object.keys(this.nodesByDepth).map(function (e) {
            return parseInt(e, 10)
        }).sort(reverseNumberCompare);
        if (o.length > 1) for (var s = 0, l = o; s < l.length; s++) for (var u = l[s], c = 0, h = this.nodesByDepth[u]; c < h.length; c++) {
            var p = h[c];
            i = p.outboundLayer;
            if (-1 === this.inputLayers.map(function (e) {
                return e.id
            }).indexOf(i.id)) {
                for (var d = [], g = 0; g < p.inboundLayers.length; g++) {
                    var f = p.inboundLayers[g], m = p.nodeIndices[g], y = p.tensorIndices[g],
                        v = n[I = f.name + "_" + m + "_" + y];
                    d.push(v)
                }
                var b = normalizeShapeList(i.computeOutputShape(singletonOrArray(d))), w = i.inboundNodes.indexOf(p);
                for (g = 0; g < b.length; g++) {
                    n[I = i.name + "_" + w + "_" + g] = b[g]
                }
            }
        }
        var z = [], S = [];
        for (r = 0; r < this.outputLayers.length; r++) {
            i = this.outputLayers[r], w = this.outputLayersNodeIndices[r], y = this.outputLayersTensorIndices[r];
            var I = i.name + "_" + w + "_" + y;
            S.push(I)
        }
        for (r = 0; r < S.length; r++) {
            var A = S[r];
            assert(A in n), z.push(n[A])
        }
        return singletonOrArray(z)
    }, t.prototype.runInternalGraph = function (e, t) {
        null == t && (t = pyListRepeat(null, e.length));
        for (var n = {}, r = 0; r < this.inputs.length; ++r) {
            var i = this.inputs[r], a = e[r], o = t[r];
            n[i.id] = [a, o]
        }
        for (var s = 0, l = Object.keys(this.nodesByDepth).map(function (e) {
            return parseInt(e, 10)
        }).sort(reverseNumberCompare); s < l.length; s++) for (var u = l[s], c = 0, h = this.nodesByDepth[u]; c < h.length; c++) {
            for (var p = h[c], d = p.outboundLayer, g = p.inputTensors, f = p.outputTensors, m = new Array, y = 0, v = g; y < v.length; y++) {
                (i = v[y]).id in n && m.push(n[i.id])
            }
            if (m.length === g.length) {
                var b = {}, w = void 0, z = void 0, S = void 0, I = void 0;
                if (null != p.callArgs && (b = p.callArgs), 1 === m.length) {
                    var A = m[0], _ = A[0], C = A[1];
                    null == b.mask && (b.mask = C), S = toList(d.call(_, b)), I = toList(d.computeMask(_, C)), w = [_], z = [C]
                } else w = m.map(function (e) {
                    return e[0]
                }), z = m.map(function (e) {
                    return e[1]
                }), null == b.mask && (b.mask = z), S = toList(d.call(w, b)), I = toList(d.computeMask(w, z));
                if (d.activityRegularizer) throw new NotImplementedError("Model invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");
                for (r = 0; r < f.length; ++r) {
                    i = f[r], a = S[r], o = I[r];
                    n[i.id] = [a, o]
                }
            }
        }
        for (var N = [], E = [], k = [], x = 0, L = this.outputs; x < L.length; x++) {
            assert((i = L[x]).id in n, "Could not compute output " + i.name + " : " + i.id);
            var T = n[i.id], D = T[0];
            o = T[1];
            k.push(D.shape), N.push(D), E.push(o)
        }
        return [N, E, k]
    }, t.prototype.buildNodeConversionMap = function (e) {
        for (var n, r = {}, i = 0, a = this.layers; i < a.length; i++) {
            var o = a[i];
            n = o instanceof t ? 1 : 0;
            for (var s = 0; s < o.inboundNodes.length; s++) {
                var l = t.nodeKey(o, s);
                this.containerNodes.has(l) && (r[l] = n, n += 1)
            }
        }
        return r
    }, t.prototype.getLayer = function (e, t) {
        if (null != t) {
            if (this.layers.length <= t) throw new ValueError("Was asked to retrieve layer at index " + t + ", but model only has " + this.layers.length + " layer(s).");
            return this.layers[t]
        }
        if (null == e) throw new ValueError("Provide either a layer name or layer index");
        for (var n = 0, r = this.layers; n < r.length; n++) {
            var i = r[n];
            if (i.name === e) return i
        }
        throw new ValueError("No such layer: " + e)
    }, t.prototype.calculateLosses = function () {
        var e = this;
        return tidy(function () {
            for (var n = [], r = 0, i = e.layers; r < i.length; r++) for (var a = i[r], o = 0; o < a.inboundNodes.length; ++o) {
                var s = t.nodeKey(a, o);
                e.containerNodes.has(s) && n.push.apply(n, a.calculateLosses())
            }
            return n
        })
    }, t.prototype.getConfig = function () {
        for (var e = {name: this.name}, n = this.buildNodeConversionMap(this.layers), r = [], i = 0, a = this.layers; i < a.length; i++) {
            for (var o = (b = a[i]).getClassName(), s = b.getConfig(), l = [], u = 0; u < b.inboundNodes.length; u++) {
                var c = b.inboundNodes[u], h = t.nodeKey(b, u), p = {};
                if (this.containerNodes.has(h)) {
                    if (c.callArgs) try {
                        JSON.stringify(c.callArgs), p = c.callArgs
                    } catch (e) {
                        console.warn("Layer " + b.name + " was passed non-serializable keyword arguments: " + c.callArgs + ". They will not be included in the serialized model (and thus will be missing at deserialization time)."), p = {}
                    }
                    if (c.inboundLayers.length > 0) {
                        for (var d = [], g = 0; g < c.inboundLayers.length; g++) {
                            var f = c.inboundLayers[g], m = c.nodeIndices[g], y = c.tensorIndices[g];
                            null == (z = n[t.nodeKey(f, m)]) && (z = 0), d.push([f.name, z, y, p])
                        }
                        l.push(d)
                    }
                }
            }
            r.push({name: b.name, className: o, config: s, inboundNodes: l})
        }
        e.layers = r;
        var v = [];
        for (g = 0; g < this.inputLayers.length; g++) {
            var b = this.inputLayers[g];
            m = this.inputLayersNodeIndices[g], h = t.nodeKey(b, m);
            if (this.containerNodes.has(h)) {
                null !== (z = n[h]) && void 0 !== z || (z = 0);
                y = this.inputLayersTensorIndices[g];
                v.push([b.name, z, y])
            }
        }
        e.inputLayers = v;
        var w = [];
        for (g = 0; g < this.outputLayers.length; g++) {
            b = this.outputLayers[g], m = this.outputLayersNodeIndices[g], h = t.nodeKey(b, m);
            if (this.containerNodes.has(h)) {
                var z;
                null !== (z = n[h]) && void 0 !== z || (z = 0);
                y = this.outputLayersTensorIndices[g];
                w.push([b.name, z, y])
            }
        }
        return e.outputLayers = w, e
    }, t.fromConfig = function (e, t, n, r) {
        void 0 === n && (n = {}), void 0 === r && (r = !1);
        var i = {}, a = {};

        function o(e, t) {
            e.name in a ? a[e.name].push(t) : a[e.name] = [t]
        }

        function s(e, t) {
            for (var n, r = [], a = 0, s = t; a < s.length; a++) {
                var l = s[a], u = l[0], c = l[1], h = l[2];
                if (3 === l.length) n = {}; else {
                    if (4 !== l.length) throw new ValueError("Improperly formatted model config for layer " + JSON.stringify(e) + ": " + JSON.stringify(l));
                    n = l[3]
                }
                if (!(u in i)) return void o(e, t);
                var p = i[u];
                if (p.inboundNodes.length <= c) return void o(e, t);
                var d = p.inboundNodes[c];
                r.push(d.outputTensors[h])
            }
            r.length > 0 && e.apply(singletonOrArray(r), n)
        }

        function l(e) {
            var n = e.name, a = deserialize(e, null != t.customObjects ? t.customObjects : {});
            a.setFastWeightInitDuringBuild(r), i[n] = a;
            for (var s = 0, l = e.inboundNodes; s < l.length; s++) {
                var u = l[s];
                if (!(u instanceof Array)) throw new ValueError("Corrupted configuration, expected array for nodeData: " + u);
                o(a, u)
            }
        }

        for (var u = t.name, c = t.layers, h = 0, p = c; h < p.length; h++) {
            l(f = p[h])
        }
        for (; !isObjectEmpty(a);) for (var d = 0, g = c; d < g.length; d++) {
            var f = g[d];
            if ((k = i[f.name]).name in a) {
                var m = a[k.name];
                delete a[k.name];
                for (var y = 0, v = m; y < v.length; y++) {
                    s(k, v[y])
                }
            }
        }
        for (var b = [], w = [], z = 0, S = t.inputLayers; z < S.length; z++) {
            var I = (f = S[z])[0], A = f[1], _ = f[2];
            assert(I in i);
            var C = (k = i[I]).inboundNodes[A].outputTensors;
            b.push(C[_])
        }
        for (var N = 0, E = t.outputLayers; N < E.length; N++) {
            I = (f = E[N])[0], A = f[1], _ = f[2];
            assert(I in i);
            var k;
            C = (k = i[I]).inboundNodes[A].outputTensors;
            w.push(C[_])
        }
        return new e({inputs: b, outputs: w, name: u})
    }, Object.defineProperty(t.prototype, "stateful", {
        get: function () {
            if (this._stateful) throw new ValueError("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");
            for (var e = 0, t = this.layers; e < t.length; e++) {
                if (t[e].stateful) return !0
            }
            return !1
        }, enumerable: !0, configurable: !0
    }), t.prototype.resetStates = function () {
        var e = this;
        tidy(function () {
            e.layers.forEach(function (e) {
                e.stateful && e.resetStates()
            })
        })
    }, t
}(Layer), DEFAULT_VALIDATION_BATCH_SIZE = 32;

function standardizeDataIteratorOutput(e, t) {
    if (e.outputs.length > 1) throw new NotImplementedError("Support for training a model with multiple output tensors with a dataset object is not implemented yet.");
    util.assert(Array.isArray(t) && 2 === t.length, "Dataset iterator for fitDataset() is expected to generate an Array of length 2: `[xs, ys]`, but instead generates " + t);
    var n = (t = t)[1], r = t[0];
    if (r instanceof Tensor) return util.assert(1 === e.inputs.length, "Model has multiple " + e.inputs.length + " inputs, hence it expects the input dataset to generate a dictionary of tensors  (with keys " + JSON.stringify(e.inputNames) + ", but received a single tensor."), util.assert(r.shape[0] === n.shape[0], "Mismatch in batch size between x and y tensors (" + r.shape[0] + " vs. " + n.shape[0] + ")"), [r, n];
    var i = void 0;
    r = r;
    for (var a = [], o = 0, s = e.inputNames; o < s.length; o++) {
        var l = s[o];
        if (null == r[l]) throw new ValueError("The feature data generated by the dataset lacks the required input key '" + l + "'.");
        a.push(r[l]), null == i ? i = r[l].shape[0] : util.assert(r[l].shape[0] === i, "Mismatch in batch size between x and y tensors (" + r[l].shape[0] + " vs. " + n.shape[0] + ")")
    }
    return a.concat(n)
}

function standardizeTensorValidationData(e) {
    if (3 === e.length) throw new NotImplementedError("Validation with sample weights is not implemented yet.");
    return {xs: e[0], ys: e[1]}
}

function fitDataset(e, t, n) {
    return __awaiter(this, void 0, void 0, function () {
        var r, i, a, o, s, l, u, c, h, p, d, g, f, m, y, v, b, w, z, S, I, A, _, C, N, E;
        return __generator(this, function (k) {
            switch (k.label) {
                case 0:
                    if (r = null != n.batchesPerEpoch, util.assert(null != e.optimizer, "You must compile a model before training/testing. Use Model.compile(modelCompileConfig)."), util.assert(null != n, "For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."), util.assert(null != n.epochs && n.epochs > 0 && Number.isInteger(n.epochs), "For fitDataset(), config.epochs is expected to be a positive integer, but got " + n.epochs), util.assert(!r || n.batchesPerEpoch > 0 && Number.isInteger(n.batchesPerEpoch), "For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got " + n.batchesPerEpoch), util.assert(null == n.validationSplit, "`validationSplit` is not supported by `fitDataset()`. Use validationData instead."), e.isTraining) throw new Error("Cannot start training because another fit() call is ongoing.");
                    e.isTraining = !0, k.label = 1;
                case 1:
                    return k.trys.push([1, , 22, 23]), i = null != n.validationData, a = void 0, o = void 0, i && (isDatasetObject(n.validationData) ? util.assert(null == n.validationBatches || n.validationBatches > 0 && Number.isInteger(n.validationBatches), "For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got " + n.validationBatches) : (s = standardizeTensorValidationData(n.validationData), a = s.xs, o = s.ys)), l = e.makeTrainFunction(), u = e.getDedupedMetricsNames(), c = void 0, c = i ? u.slice().concat(u.map(function (e) {
                        return "val_" + e
                    })) : u.slice(), h = standardizeCallbacks(n.callbacks), p = configureCallbacks(h, n.yieldEvery, n.verbose, n.epochs, null, null, n.batchesPerEpoch, null, i, c), d = p.callbackList, g = p.history, d.setModel(e), e.history = g, [4, d.onTrainBegin()];
                case 2:
                    return k.sent(), e.stopTraining_ = !1, f = null == n.initialEpoch ? 0 : n.initialEpoch, [4, t.iterator()];
                case 3:
                    m = k.sent(), k.label = 4;
                case 4:
                    return f < n.epochs ? (y = {}, [4, d.onEpochBegin(f)]) : [3, 19];
                case 5:
                    return k.sent(), v = 0, b = 0, r ? [3, 7] : [4, t.iterator()];
                case 6:
                    m = k.sent(), k.label = 7;
                case 7:
                    return !r || v < n.batchesPerEpoch ? [4, m.next()] : [3, 17];
                case 8:
                    return w = k.sent(), r && w.done ? (console.warn("You provided `batchesPerEpoch` as " + n.batchesPerEpoch + ", but your dataset iterator ran out of data after " + v + " batches; interrupting training. Make sure that your dataset can generate at least `batchesPerEpoch * epochs` batches (in this case, " + n.batchesPerEpoch * n.epochs + " batches). You may need to use the repeat() function when building your dataset."), [3, 17]) : null == w.value ? [3, 11] : (z = standardizeDataIteratorOutput(e, w.value), (S = {}).batch = b, S.size = z[0].shape[0], [4, d.onBatchBegin(b, S)]);
                case 9:
                    for (k.sent(), I = l(z), dispose(z), E = 0; E < u.length; ++E) A = u[E], _ = I[E], S[A] = _, keep(_);
                    return [4, d.onBatchEnd(b, S)];
                case 10:
                    k.sent(), disposeTensorsInLogs(S), b++, v++, k.label = 11;
                case 11:
                    return (r ? v >= n.batchesPerEpoch : w.done) ? i ? (C = void 0, isDatasetObject(n.validationData) ? (N = toList, [4, e.evaluateDataset(n.validationData, {batches: n.validationBatches})]) : [3, 13]) : [3, 15] : [3, 16];
                case 12:
                    return C = N.apply(void 0, [k.sent()]), [3, 14];
                case 13:
                    C = toList(e.evaluate(a, o, {
                        batchSize: null == n.validationBatchSize ? DEFAULT_VALIDATION_BATCH_SIZE : n.validationBatchSize,
                        verbose: 0
                    })), k.label = 14;
                case 14:
                    for (E = 0; E < e.metricsNames.length; ++E) y["val_" + e.metricsNames[E]] = C[E];
                    k.label = 15;
                case 15:
                    return [3, 17];
                case 16:
                    return e.stopTraining_ ? [3, 17] : [3, 7];
                case 17:
                    return [4, d.onEpochEnd(f, y)];
                case 18:
                    return k.sent(), f++, e.stopTraining_ ? [3, 19] : [3, 4];
                case 19:
                    return [4, d.onTrainEnd()];
                case 20:
                    return k.sent(), [4, e.history.syncData()];
                case 21:
                    return k.sent(), [2, e.history];
                case 22:
                    return e.isTraining = !1, [7];
                case 23:
                    return [2]
            }
        })
    })
}

function isDatasetObject(e) {
    return "function" == typeof e.iterator
}

function isLazyIteratorObject(e) {
    return "function" == typeof e.next
}

function evaluateDataset(e, t, n) {
    return __awaiter(this, void 0, void 0, function () {
        var r, i, a, o, s, l, u, c, h, p;
        return __generator(this, function (d) {
            switch (d.label) {
                case 0:
                    if (r = null != n.batches, i = e.testFunction, a = [], n.verbose > 0) throw new NotImplementedError("Verbose mode is not implemented yet.");
                    return util.assert(!r || n.batches > 0 && Number.isInteger(n.batches), "Test loop expects `batches` to be a positive integer, but received " + JSON.stringify(n.batches)), isLazyIteratorObject(t) ? (s = t, [3, 3]) : [3, 1];
                case 1:
                    return [4, t.iterator()];
                case 2:
                    s = d.sent(), d.label = 3;
                case 3:
                    o = s, l = 0, u = 0, c = function () {
                        var t, s, c, h, p, d;
                        return __generator(this, function (g) {
                            switch (g.label) {
                                case 0:
                                    return [4, o.next()];
                                case 1:
                                    if ((t = g.sent()).value) {
                                        if (s = standardizeDataIteratorOutput(e, t.value), c = tidy(function () {
                                            return i(s)
                                        }), dispose(s), 0 === u) for (d = 0; d < c.length; ++d) a.push(getScalar(0));
                                        for (h = s[0].shape[0], p = function (e) {
                                            var t = c[e], n = a[e];
                                            a[e] = tidy(function () {
                                                return add(a[e], mul(getScalar(h), t))
                                            }), u > 0 && dispose(n)
                                        }, d = 0; d < c.length; ++d) p(d);
                                        dispose(c), l += h, ++u
                                    }
                                    return t.done ? (r && console.warn("Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least `batches` batches (in this case, " + n.batches + " batches). You may need to use the repeat() function when building your dataset."), [2, "break"]) : [2]
                            }
                        })
                    }, d.label = 4;
                case 4:
                    return !r || u < n.batches ? [5, c()] : [3, 6];
                case 5:
                    return "break" === d.sent() ? [3, 6] : [3, 4];
                case 6:
                    for (h = function (e) {
                        var t = a[e];
                        a[e] = tidy(function () {
                            return div(a[e], getScalar(l))
                        }), dispose(t)
                    }, p = 0; p < a.length; ++p) h(p);
                    return [2, singletonOrArray(a)]
            }
        })
    })
}

function checkBatchSize(e) {
    util.assert(e > 0 && Number.isInteger(e), "batchSize is required to be a positive integer, but got " + e)
}

function sliceArrays(e, t, n) {
    return null == e ? [null] : Array.isArray(e) ? e.map(function (e) {
        return sliceAlongFirstAxis(e, t, n - t)
    }) : sliceAlongFirstAxis(e, t, n - t)
}

function sliceArraysByIndices(e, t) {
    return tidy(function () {
        return null == e ? null : Array.isArray(e) ? e.map(function (e) {
            return sliceArraysByIndices(e, t)
        }) : gather$1(e, "int32" === t.dtype ? t : t.toInt())
    })
}

function makeBatches(e, t) {
    for (var n = [], r = 0, i = null; r < e;) (i = r + t) >= e && (i = e), n.push([r, i]), r = i;
    return n
}

function fitLoop(e, t, n, r, i, a, o, s, l, u, c, h, p, d, g, f) {
    return __awaiter(this, void 0, void 0, function () {
        var m, y, v, b, w, z, S, I;
        return __generator(this, function (A) {
            switch (A.label) {
                case 0:
                    if (null == i && (i = 32), null == a && (a = 1), null == c && (c = !0), null == p && (p = 0), m = !1, null != l && null != u && (m = !0), null != g && (m = !0, null == d)) throw new ValueError("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");
                    return null != (y = e.checkNumSamples(n, i, d, "steps_per_epoch")) && (v = range(0, y)), null == o && (o = 1), b = configureCallbacks(s, f, o, a, p, y, d, i, m, h), w = b.callbackList, z = b.history, w.setModel(e), e.history = z, [4, w.onTrainBegin()];
                case 1:
                    A.sent(), e.stopTraining_ = !1, S = function (a) {
                        var o, s, h, p, g;
                        return __generator(this, function (f) {
                            switch (f.label) {
                                case 0:
                                    return [4, w.onEpochBegin(a)];
                                case 1:
                                    if (f.sent(), o = {}, null == d) return [3, 2];
                                    throw new NotImplementedError("stepsPerEpoch mode is not implemented yet.");
                                case 2:
                                    if ("batch" === c) throw new NotImplementedError("batch shuffling is not implemneted yet");
                                    c && util.shuffle(v), s = tensor1d(v), h = makeBatches(y, i), p = function (a) {
                                        var c;
                                        return __generator(this, function (p) {
                                            switch (p.label) {
                                                case 0:
                                                    return c = {}, [4, w.onBatchBegin(a, c)];
                                                case 1:
                                                    return p.sent(), tidy(function () {
                                                        var p = h[a][0], d = h[a][1],
                                                            g = sliceAlongFirstAxis(s, p, d - p);
                                                        c.batch = a, c.size = d - p;
                                                        for (var f = sliceArraysByIndices(n, g), y = t(f), v = 0; v < r.length; ++v) {
                                                            var b = r[v], w = y[v];
                                                            c[b] = w, keep(w)
                                                        }
                                                        if (a === h.length - 1 && m) {
                                                            var z = e.testLoop(l, u, i);
                                                            for (v = 0; v < r.length; ++v) {
                                                                b = r[v], w = z[v];
                                                                keep(w), o["val_" + b] = w
                                                            }
                                                        }
                                                    }), [4, w.onBatchEnd(a, c)];
                                                case 2:
                                                    return p.sent(), disposeTensorsInLogs(c), e.stopTraining_ ? [2, "break"] : [2]
                                            }
                                        })
                                    }, g = 0, f.label = 3;
                                case 3:
                                    return g < h.length ? [5, p(g)] : [3, 6];
                                case 4:
                                    if ("break" === f.sent()) return [3, 6];
                                    f.label = 5;
                                case 5:
                                    return ++g, [3, 3];
                                case 6:
                                    s.dispose(), f.label = 7;
                                case 7:
                                    return [4, w.onEpochEnd(a, o)];
                                case 8:
                                    return f.sent(), e.stopTraining_ ? [2, "break"] : [2]
                            }
                        })
                    }, I = p, A.label = 2;
                case 2:
                    return I < a ? [5, S(I)] : [3, 5];
                case 3:
                    if ("break" === A.sent()) return [3, 5];
                    A.label = 4;
                case 4:
                    return ++I, [3, 2];
                case 5:
                    return [4, w.onTrainEnd()];
                case 6:
                    return A.sent(), [4, e.history.syncData()];
                case 7:
                    return A.sent(), [2, e.history]
            }
        })
    })
}

function fitTensors(e, t, n, r) {
    return void 0 === r && (r = {}), __awaiter(this, void 0, void 0, function () {
        var i, a, o, s, l, u, c, h, p, d, g, f, m, y, v, b, w, z, S;
        return __generator(this, function (I) {
            switch (I.label) {
                case 0:
                    if (e.isTraining) throw new Error("Cannot start training because another fit() call is ongoing.");
                    e.isTraining = !0, I.label = 1;
                case 1:
                    if (I.trys.push([1, , 3, 4]), checkBatchSize(c = null == r.batchSize ? 32 : r.batchSize), h = e.standardizeUserData(t, n, !1, c), i = h[0], a = h[1], p = !1, d = void 0, null != r.validationData && r.validationData.length > 0) {
                        if (p = !0, 2 !== r.validationData.length) throw 3 === r.validationData.length ? new NotImplementedError("validationData including sample weights is not supported yet.") : new ValueError("When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; " + r.validationData + " is invalid.");
                        o = r.validationData[0], s = r.validationData[1], g = e.standardizeUserData(o, s, !0, c), l = g[0], u = g[1], d = l.concat(u)
                    } else null != r.validationSplit && r.validationSplit > 0 && r.validationSplit < 1 ? (p = !0, f = Math.floor(i[0].shape[0] * (1 - r.validationSplit)), m = i[0].shape[0], l = sliceArrays(i, f, m), i = sliceArrays(i, 0, f), u = sliceArrays(a, f, m), a = sliceArrays(a, 0, f), d = l.concat(u)) : null != r.validationSteps && (p = !0);
                    return y = i.concat(a), e.checkTrainableWeightsConsistency(), v = e.makeTrainFunction(), b = e.getDedupedMetricsNames(), w = void 0, z = void 0, p ? (e.makeTestFunction(), w = e.testFunction, z = b.slice().concat(b.map(function (e) {
                        return "val_" + e
                    }))) : (w = null, d = [], z = b.slice()), S = standardizeCallbacks(r.callbacks), [4, fitLoop(e, v, y, b, c, r.epochs, r.verbose, S, w, d, r.shuffle, z, r.initialEpoch, null, null, r.yieldEvery)];
                case 2:
                    return [2, I.sent()];
                case 3:
                    return e.isTraining = !1, disposeNewTensors(i, t), disposeNewTensors(a, n), disposeNewTensors(l, o), disposeNewTensors(u, s), [7];
                case 4:
                    return [2]
            }
        })
    })
}

function ensureTensorsRank2OrHigher(e) {
    var t = [];
    e instanceof Tensor && (e = [e]);
    for (var n = 0; n < e.length; ++n) {
        var r = e[n];
        if (1 === r.rank) t.push(expandDims$1(r, 1)); else {
            if (0 === r.rank) throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");
            t.push(r)
        }
    }
    return t
}

function disposeNewTensors(e, t) {
    if (null != e) {
        var n = [];
        if (t instanceof Tensor) n.push(t.id); else if (Array.isArray(t)) t.forEach(function (e) {
            return n.push(e.id)
        }); else if (null != t) for (var r in t) {
            var i = t[r];
            n.push(i.id)
        }
        var a = [];
        if (e instanceof Tensor) -1 === n.indexOf(e.id) && a.push(e); else if (Array.isArray(e)) e.forEach(function (e) {
            -1 === n.indexOf(e.id) && a.push(e)
        }); else if (null != e) for (var o in e) {
            var s = e[o];
            -1 === n.indexOf(s.id) && a.push(s)
        }
        a.forEach(function (e) {
            e.isDisposed || e.dispose()
        })
    }
}

function isDataTensor(e) {
    return e instanceof Tensor
}

function isDataArray(e) {
    return Array.isArray(e)
}

function isDataDict(e) {
    return !isDataTensor(e) && !isDataArray(e)
}

function standardizeInputData(e, t, n, r, i) {
    if (void 0 === r && (r = !0), void 0 === i && (i = ""), null == t || 0 === t.length) {
        if (null != e) {
            var a = !1;
            if (isDataArray(e) && e.length > 0) a = !0; else if (isDataDict(e)) {
                for (var o in e) if (e.hasOwnProperty(o)) {
                    a = !0;
                    break
                }
            } else a = !0;
            if (a) throw new ValueError("Error when checking model " + i + " expected no data, but got " + e)
        }
        return []
    }
    if (null == e) return t.map(function (e) {
        return null
    });
    var s;
    if (isDataDict(e)) {
        e = e, s = [];
        for (var l = 0, u = t; l < u.length; l++) {
            var c = u[l];
            if (null == e[c]) throw new ValueError('No data provided for "' + c + '". Need data for each key in: ' + t);
            s.push(e[c])
        }
    } else if (isDataArray(e)) {
        if ((e = e).length !== t.length) throw new ValueError("Error when checking model " + i + ": the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see " + t.length + " Tensor(s), but instead got the following list of Tensor(s): " + e);
        s = e
    } else {
        if (e = e, t.length > 1) throw new ValueError("The model " + i + " expects " + t.length + " Tensor(s), but only received one Tensor. Found: Tensor with shape " + e.shape);
        s = [e]
    }
    if (s = ensureTensorsRank2OrHigher(s), null != n) for (var h = 0; h < t.length; ++h) if (null != n[h]) {
        var p = s[h];
        if (p.shape.length !== n[h].length) throw new ValueError("Error when checking " + i + ": expected " + t[h] + " to have " + n[h].length + " dimension(s). but got array with shape " + p.shape);
        for (var d = 0; d < n[h].length; ++d) if (0 !== d || r) {
            var g = p.shape[d], f = n[h][d];
            if (null != f && f >= 0 && g !== f) throw new ValueError("Error when checking " + i + ": expected " + t[h] + " to have shape [" + n[h] + "], but got array with shape [" + p.shape + "].")
        }
    }
    return s
}

function checkArrayLengths(e, t, n) {
    var r = unique(e.map(function (e) {
        return e.shape[0]
    }));
    r.sort();
    var i = unique(t.map(function (e) {
        return e.shape[0]
    }));
    if (i.sort(), r.length > 1) throw new ValueError("All input Tensors (x) should have the same number of samples. Got array shapes: " + JSON.stringify(e.map(function (e) {
        return e.shape
    })));
    if (i.length > 1) throw new ValueError("All target Tensors (y) should have the same number of samples. Got array shapes: " + JSON.stringify(t.map(function (e) {
        return e.shape
    })));
    if (r.length > 0 && i.length > 0 && !util.arraysEqual(r, i)) throw new ValueError("Input Tensors should have the same number of samples as target Tensors. Found " + r[0] + " input sample(s) and " + i[0] + " target sample(s).")
}

function checkLossAndTargetCompatibility(e, t, n) {
    for (var r = [meanSquaredError, binaryCrossentropy, categoricalCrossentropy], i = 0; i < e.length; ++i) {
        var a = e[i], o = t[i], s = n[i];
        if (null != o) {
            if (o === categoricalCrossentropy && 1 === a.shape[a.shape.length - 1]) throw new ValueError("You are passing a target array of shape " + a.shape + " while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].");
            if (-1 !== r.indexOf(o)) for (var l = a.shape.slice(1), u = s.slice(1), c = 0; c < l.length; ++c) {
                var h = l[c], p = u[c];
                if (null != p && h !== p) throw new ValueError("A target Tensor with shape " + a.shape + " was passed for an output of shape " + s + ", while using a loss function that expects targets to have the same shape as the output.")
            }
        }
    }
}

function checkInputData(e, t, n, r, i) {
    var a;
    if (void 0 === r && (r = !0), void 0 === i && (i = ""), Array.isArray(e)) {
        if (e.length !== t.length) throw new ValueError("Error when checking model " + i + ": the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see " + t.length + " Tensor(s), but instead got " + e.length + " Tensors(s).");
        a = e
    } else {
        if (t.length > 1) throw new ValueError("The model expects " + t.length + " " + i + " Tensors, but only received one Tensor. Found: array with shape " + JSON.stringify(e.shape) + ".");
        a = [e]
    }
    if (null != n) for (var o = 0; o < t.length; ++o) if (null != n[o]) {
        var s = a[o];
        if (s.shape.length !== n[o].length) throw new ValueError("Error when checking " + i + ": expected " + t[o] + " to have " + n[o].length + " dimension(s), but got array with shape " + JSON.stringify(s.shape));
        for (var l = 0; l < n[o].length; ++l) if (0 !== l || r) {
            var u = s.shape[l], c = n[o][l];
            if (null != c && c !== u) throw new ValueError("Error when checking " + i + ": expected " + t[o] + " to have shape " + JSON.stringify(n[o]) + " but got array with shape " + JSON.stringify(s.shape) + ".")
        }
    }
}

function collectMetrics(e, t) {
    if (null == e || Array.isArray(e) && 0 === e.length) return t.map(function (e) {
        return []
    });
    if (Array.isArray(e)) return t.map(function (t) {
        return e
    });
    if (null != e) {
        for (var n = [], r = 0, i = t; r < i.length; r++) {
            var a = i[r], o = e.hasOwnProperty(a) ? e[a] : [];
            Array.isArray(o) || (o = [o]), n.push(o)
        }
        return n
    }
    throw new TypeError("Type of metrics argument not understood. Expected an Array or Object, found: " + e)
}

var Model = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        return n.isTraining = !1, n
    }

    return __extends(t, e), t.prototype.summary = function (e, t, n) {
        if (void 0 === n && (n = console.log), !this.built) throw new ValueError("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");
        printSummary(this, e, t, n)
    }, t.prototype.compile = function (e) {
        var t = this;
        if (null == e.loss && (e.loss = []), this.loss = e.loss, "string" == typeof e.optimizer) this.optimizer = getOptimizer(e.optimizer); else {
            if (!(e.optimizer instanceof Optimizer)) throw new ValueError("User-defined optimizer must be an instance of tf.Optimizer.");
            this.optimizer = e.optimizer
        }
        var n = [];
        if (Array.isArray(e.loss) || "string" == typeof e.loss || "function" == typeof e.loss) if (Array.isArray(e.loss)) {
            if (e.loss.length !== this.outputs.length) throw new ValueError("When passing an Array as loss, it should have one entry per model output. The model has " + this.outputs.length + " output(s), but you passed loss=" + e.loss + ".");
            var r = e.loss;
            n = r.map(function (e) {
                return get(e)
            })
        } else {
            var i = get(e.loss);
            this.outputs.map(function (e) {
                n.push(i)
            })
        } else {
            for (var a in e.loss = e.loss, e.loss) if (-1 === this.outputNames.indexOf(a)) throw new ValueError('Unknown entry in loss dictionary: "' + a + '". Only expected the following keys: ' + this.outputNames);
            for (var o = 0, s = this.outputNames; o < s.length; o++) {
                var l = s[o];
                null == e.loss[l] && console.warn('Output "' + l + '" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ' + l + " during training"), n.push(get(e.loss[l]))
            }
        }
        this.lossFunctions = n, this.feedOutputNames = [], this.feedOutputShapes = [], this.feedLossFns = [];
        for (var u = 0; u < this.outputs.length; ++u) {
            var c = this.internalOutputShapes[u], h = this.outputNames[u];
            this.feedOutputNames.push(h), this.feedOutputShapes.push(c), this.feedLossFns.push(this.lossFunctions[u])
        }
        var p = [];
        this.metrics = e.metrics, this.metricsNames = ["loss"], this.metricsTensors = [], nameScope("loss", function () {
            for (var e = 0; e < t.outputs.length; ++e) if (-1 === p.indexOf(e)) {
                var n = t.lossFunctions[e];
                t.outputs.length > 1 && (t.metricsTensors.push([n, e]), t.metricsNames.push(t.outputNames[e] + "_loss"))
            }
        });
        var d = collectMetrics(e.metrics, this.outputNames);
        nameScope("metric", function () {
            for (var e = function (e) {
                if (-1 !== p.indexOf(e)) return "continue";
                !function (n) {
                    for (var r, i, a, o = function (n) {
                        if (-1 !== ["accuracy", "acc", "crossentropy", "ce"].indexOf(n)) {
                            var o = t.internalOutputShapes[e];
                            1 === o[o.length - 1] || t.lossFunctions[e] === binaryCrossentropy ? -1 !== ["accuracy", "acc"].indexOf(n) ? i = binaryAccuracy : -1 !== ["crossentropy", "ce"].indexOf(n) && (i = binaryCrossentropy$1) : t.lossFunctions[e] === sparseCategoricalCrossentropy ? -1 !== ["accuracy", "acc"].indexOf(n) ? i = sparseCategoricalAccuracy : -1 !== ["crossentropy", "ce"].indexOf(n) && (i = sparseCategoricalCrossentropy$1) : -1 !== ["accuracy", "acc"].indexOf(n) ? i = categoricalAccuracy : -1 !== ["crossentropy", "ce"].indexOf(n) && (i = categoricalCrossentropy$1);
                            var s = void 0;
                            -1 !== ["accuracy", "acc"].indexOf(n) ? s = "acc" : -1 !== ["crossentropy", "ce"].indexOf(n) && (s = "ce"), a = i, r = "" + s
                        } else {
                            var l = get$1(n);
                            a = l, r = "" + n
                        }
                        var u;
                        nameScope(r, function () {
                            u = a
                        }), function (e, n, r) {
                            t.outputNames.length > 1 && (n = t.outputNames[e] + "_" + n), t.metricsNames.push(n), t.metricsTensors.push([r, e])
                        }(e, r, u)
                    }, s = 0, l = n; s < l.length; s++) o(l[s])
                }(d[e])
            }, n = 0; n < t.outputs.length; ++n) e(n)
        }), this.collectedTrainableWeights = this.trainableWeights
    }, t.prototype.checkTrainableWeightsConsistency = function () {
        null != this.collectedTrainableWeights && this.trainableWeights.length !== this.collectedTrainableWeights.length && console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")
    }, t.prototype.evaluate = function (e, t, n) {
        void 0 === n && (n = {});
        var r = null == n.batchSize ? 32 : n.batchSize;
        checkBatchSize(r);
        var i = this.standardizeUserData(e, t, !0, r);
        try {
            var a = i[0].concat(i[1]);
            this.makeTestFunction();
            var o = this.testFunction;
            return singletonOrArray(this.testLoop(o, a, r, n.verbose, n.steps))
        } finally {
            disposeNewTensors(i[0], e), disposeNewTensors(i[1], t)
        }
    }, t.prototype.evaluateDataset = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (n) {
                return this.makeTestFunction(), [2, evaluateDataset(this, e, t)]
            })
        })
    }, t.prototype.checkNumSamples = function (e, t, n, r) {
        var i;
        if (void 0 === r && (r = "steps"), null != n) {
            if (i = null, null != t) throw new ValueError("If " + r + " is set, batchSize must be null or undefined.Got batchSize = " + t)
        } else {
            if (null == e) throw new ValueError("Either the input data should have a defined shape, or " + r + " shoud be specified.");
            i = Array.isArray(e) ? e[0].shape[0] : e.shape[0]
        }
        return i
    }, t.prototype.execute = function (e, t) {
        if (Array.isArray(t) && 0 === t.length) throw new ValueError("`outputs` is an empty Array, which is not allowed.");
        var n = Array.isArray(t), r = n ? t : [t], i = this.retrieveSymbolicTensors(r), a = new FeedDict;
        if (e instanceof Tensor && (e = [e]), Array.isArray(e)) {
            if (e.length !== this.inputs.length) throw new ValueError("The number of inputs provided (" + e.length + ") does not match the number of inputs of this model (" + this.inputs.length + ").");
            for (var o = 0; o < this.inputs.length; ++o) a.add(this.inputs[o], e[o])
        } else for (var s = 0, l = this.inputs; s < l.length; s++) {
            var u = l[s], c = e[u.name];
            if (null == c) throw new ValueError("No value is provided for the model's input " + u.name);
            a.add(u, c)
        }
        var h = execute(i, a);
        return n ? h : h[0]
    }, t.prototype.retrieveSymbolicTensors = function (e) {
        for (var t = pyListRepeat(null, e.length), n = e.length, r = 0, i = this.layers; r < i.length; r++) {
            for (var a = i[r], o = Array.isArray(a.output) ? a.output : [a.output], s = o.map(function (e) {
                return e.name
            }), l = 0; l < e.length; ++l) {
                var u = s.indexOf(e[l]);
                if (-1 !== u && (t[l] = o[u], n--), 0 === n) break
            }
            if (0 === n) break
        }
        if (n > 0) {
            var c = [];
            throw t.forEach(function (t, n) {
                null == t && c.push(e[n])
            }), new ValueError("Cannot find SymbolicTensors for output name(s): " + JSON.stringify(c))
        }
        return t
    }, t.prototype.predictLoop = function (e, t, n) {
        var r = this;
        return void 0 === t && (t = 32), void 0 === n && (n = !1), tidy(function () {
            var i = r.checkNumSamples(e);
            if (n) throw new NotImplementedError("Verbose predictLoop() is not implemented yet.");
            for (var a = makeBatches(i, t), o = [], s = function (t) {
                var n = tidy(function () {
                    var n = a[t][0], i = a[t][1], o = sliceArrays(e, n, i), s = [];
                    if (Array.isArray(o)) for (var l = 0; l < o.length; ++l) s.push({
                        key: r.inputs[l],
                        value: o[l]
                    }); else s.push({key: r.inputs[0], value: o});
                    var u = new FeedDict(s);
                    return execute(r.outputs, u)
                });
                if (0 === t) for (var i = 0, s = n; i < s.length; i++) {
                    var l = s[i];
                    o.push(l)
                } else for (var u = 0; u < n.length; ++u) o[u] = concatAlongFirstAxis(o[u], n[u])
            }, l = 0; l < a.length; ++l) s(l);
            return singletonOrArray(o)
        })
    }, t.prototype.predict = function (e, t) {
        void 0 === t && (t = {});
        var n = ensureTensorsRank2OrHigher(e);
        checkInputData(n, this.inputNames, this.feedInputShapes, !1);
        try {
            var r = null == t.batchSize ? 32 : t.batchSize;
            return checkBatchSize(r), this.predictLoop(n, r)
        } finally {
            disposeNewTensors(n, e)
        }
    }, t.prototype.predictOnBatch = function (e) {
        return checkInputData(e, this.inputNames, this.feedInputShapes, !0), this.predictLoop(e, e.shape[0])
    }, t.prototype.standardizeUserData = function (e, t, n, r) {
        if (void 0 === n && (n = !0), null == this.optimizer) throw new RuntimeError("You must compile a model before training/testing. Use Model.compile(modelCompileArgs).");
        for (var i = [], a = 0; a < this.feedOutputShapes.length; ++a) {
            var o = this.feedOutputShapes[a];
            this.feedLossFns[a] === sparseCategoricalCrossentropy ? i.push(o.slice(0, o.length - 1).concat([1])) : i.push(o)
        }
        if (checkArrayLengths(e = standardizeInputData(e, this.feedInputNames, this.feedInputShapes, !1, "input"), t = standardizeInputData(t, this.feedOutputNames, i, !1, "target"), null), checkLossAndTargetCompatibility(t, this.feedLossFns, this.feedOutputShapes), this.stateful && null != r && r > 0 && e[0].shape[0] % r != 0) throw new ValueError("In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size " + r + ". Found: " + e[0].shape[0] + " sample(s).");
        return [e, t, null]
    }, t.prototype.testLoop = function (e, t, n, r, i) {
        var a = this;
        return void 0 === r && (r = 0), tidy(function () {
            var o = a.checkNumSamples(t, n, i, "steps"), s = [];
            if (r > 0) throw new NotImplementedError("Verbose mode is not implemented yet.");
            if (null != i) throw new NotImplementedError("steps mode in testLoop() is not implemented yet");
            for (var l = makeBatches(o, n), u = tensor1d(range(0, o)), c = 0; c < l.length; ++c) {
                var h = l[c][0], p = l[c][1], d = sliceAlongFirstAxis(u, h, p - h), g = sliceArraysByIndices(t, d),
                    f = e(g);
                if (0 === c) for (var m = 0; m < f.length; ++m) s.push(getScalar(0));
                for (m = 0; m < f.length; ++m) {
                    var y = f[m];
                    s[m] = add(s[m], mul(getScalar(p - h), y))
                }
            }
            for (m = 0; m < s.length; ++m) s[m] = div(s[m], getScalar(o));
            return s
        })
    }, t.prototype.getDedupedMetricsNames = function () {
        for (var e = this.metricsNames, t = [], n = 0; n < e.length; ++n) {
            var r = e[n], i = r;
            if (count(e, r) > 1) i += "_" + count(e.slice(0, n), r);
            t.push(i)
        }
        return t
    }, t.prototype.makeTrainFunction = function () {
        var e = this;
        return function (t) {
            var n = t.slice(0, e.inputs.length), r = t.slice(e.inputs.length, e.inputs.length + e.outputs.length),
                i = [], a = e.collectedTrainableWeights.map(function (e) {
                    return e.read()
                });
            return [e.optimizer.minimize(function () {
                for (var t = [], a = 0; a < e.inputs.length; ++a) t.push({key: e.inputs[a], value: n[a]});
                var o, s = new FeedDict(t), l = execute(e.outputs, s, {training: !0});
                for (a = 0; a < e.lossFunctions.length; ++a) {
                    var u = (0, e.lossFunctions[a])(r[a], l[a]);
                    mean(u), o = 0 === a ? u : add(o, u)
                }
                for (a = 0; a < e.metricsTensors.length; ++a) {
                    var c = e.metricsTensors[a][0], h = e.metricsTensors[a][1], p = mean(c(r[h], l[h]));
                    keep(p), i.push(p)
                }
                return o = mean(o), e.calculateLosses().forEach(function (e) {
                    o = add(o, e)
                }), o
            }, !0, a)].concat(i)
        }
    }, t.prototype.makeTestFunction = function () {
        var e = this;
        this.testFunction = function (t) {
            return tidy(function () {
                for (var n, r = [], i = t.slice(0, e.inputs.length), a = t.slice(e.inputs.length, e.inputs.length + e.outputs.length), o = [], s = 0; s < e.inputs.length; ++s) o.push({
                    key: e.inputs[s],
                    value: i[s]
                });
                var l = new FeedDict(o), u = execute(e.outputs, l);
                for (s = 0; s < e.lossFunctions.length; ++s) {
                    var c = e.lossFunctions[s], h = mean(c(a[s], u[s]));
                    n = 0 === s ? h : add(n, h), r.push(n)
                }
                for (s = 0; s < e.metricsTensors.length; ++s) {
                    var p = e.metricsTensors[s][0], d = e.metricsTensors[s][1], g = mean(p(a[d], u[d]));
                    r.push(g)
                }
                return r
            })
        }
    }, t.prototype.fit = function (e, t, n) {
        return void 0 === n && (n = {}), __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (r) {
                return [2, fitTensors(this, e, t, n)]
            })
        })
    }, t.prototype.fitDataset = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (n) {
                return [2, fitDataset(this, e, t)]
            })
        })
    }, t.prototype.trainOnBatch = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var n, r, i, a, o, s, l, u, c, h, p;
            return __generator(this, function (d) {
                switch (d.label) {
                    case 0:
                        n = this.standardizeUserData(e, t), r = n[0], i = n[1], a = this.makeTrainFunction(), o = a(r.concat(i)), s = [], l = 0, u = o, d.label = 1;
                    case 1:
                        return l < u.length ? (c = u[l], p = (h = s).push, [4, c.data()]) : [3, 4];
                    case 2:
                        p.apply(h, [d.sent()[0]]), d.label = 3;
                    case 3:
                        return l++, [3, 1];
                    case 4:
                        return dispose(o), [2, singletonOrArray(s)]
                }
            })
        })
    }, t.prototype.getNamedWeights = function (e) {
        for (var t = {}, n = null != e && e.trainableOnly, r = n ? this.trainableWeights : this.weights, i = this.getWeights(n), a = 0; a < r.length; ++a) n && !r[a].trainable || (t[r[a].originalName] = i[a]);
        return t
    }, Object.defineProperty(t.prototype, "stopTraining", {
        set: function (e) {
            this.stopTraining_ = e
        }, enumerable: !0, configurable: !0
    }), t.prototype.save = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var n, r, i, a, o;
            return __generator(this, function (s) {
                switch (s.label) {
                    case 0:
                        if ("string" == typeof e) {
                            if (0 === (n = io.getSaveHandlers(e)).length) throw new ValueError("Cannot find any save handlers for URL '" + e + "'");
                            if (n.length > 1) throw new ValueError("Found more than one (" + n.length + ") save handlers for URL '" + e + "'");
                            e = n[0]
                        }
                        if (null == e.save) throw new ValueError("Model.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");
                        return [4, io.encodeWeights(this.getNamedWeights(t))];
                    case 1:
                        return r = s.sent(), i = !1, a = null, o = this.toJSON(a, i), [2, e.save({
                            modelTopology: o,
                            weightData: r.data,
                            weightSpecs: r.specs
                        })]
                }
            })
        })
    }, t.className = "Model", t
}(Container);

function modelFromJSON(e, t) {
    return __awaiter(this, void 0, void 0, function () {
        var n, r, i, a, o, s, l, u, c, h;
        return __generator(this, function (p) {
            switch (p.label) {
                case 0:
                    return "modelTopology" in e || (e = {modelTopology: e}), null != (n = (e = e).modelTopology).model_config && (n = n.model_config), r = convertPythonicToTs(n), i = deserialize(r, t), null == e.weightsManifest ? [3, 2] : [4, io.loadWeights(e.weightsManifest, e.pathPrefix, i.weights.map(function (e) {
                        return e.originalName
                    }))];
                case 1:
                    for (a = p.sent(), o = {}, s = 0, l = i.weights; s < l.length; s++) u = l[s], o[u.originalName] = a[u.originalName];
                    c = null, h = !0, i.loadWeights(o, c, h), p.label = 2;
                case 2:
                    return [2, i]
            }
        })
    })
}

function loadModelInternal(e, t) {
    return void 0 === t && (t = !0), __awaiter(this, void 0, void 0, function () {
        var n;
        return __generator(this, function (r) {
            if ("string" == typeof e) {
                if (0 === (n = io.getLoadHandlers(e)).length) n.push(io.browserHTTPRequest(e)); else if (n.length > 1) throw new ValueError("Found more than one (" + n.length + ") load handlers for URL '" + e + "'");
                e = n[0]
            }
            return [2, loadModelFromIOHandler(e, void 0, t)]
        })
    })
}

function loadModelFromIOHandler(e, t, n) {
    return void 0 === n && (n = !0), __awaiter(this, void 0, void 0, function () {
        var r, i, a, o, s, l;
        return __generator(this, function (u) {
            switch (u.label) {
                case 0:
                    if (null == e.load) throw new ValueError("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");
                    return [4, e.load()];
                case 1:
                    if (r = u.sent(), null != (i = r.modelTopology).model_config && (i = i.model_config), a = null != r.weightData && null != r.weightSpecs && n, o = deserialize(convertPythonicToTs(i), t, a), null != r.weightData) {
                        if (null == r.weightSpecs) throw new ValueError("Model artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.");
                        s = !1, l = !0, o.loadWeights(io.decodeWeights(r.weightData, r.weightSpecs), s, l, n)
                    }
                    return [2, o]
            }
        })
    })
}

serialization.registerClass(Model);
var Sequential = function (e) {
    function t(t) {
        var n = e.call(this, {inputs: [], outputs: []}) || this;
        if (t = t || {}, n.trainable = !0, n._updatable = !0, n.built = !1, n.name = null != t.name ? t.name : getUid("sequential_"), null != t.layers) for (var r = 0, i = t.layers; r < i.length; r++) {
            var a = i[r];
            n.add(a)
        }
        return n
    }

    return __extends(t, e), t.prototype.checkShape = function (e) {
        if (e.inboundNodes[0].outputTensors[0].shape.some(function (e) {
            return e < 0
        })) throw new ValueError("Negative dimension size caused by adding layer " + e.name + " with input shape [" + e.inboundNodes[0].inputTensors[0].shape + "]")
    }, t.prototype.add = function (e) {
        var n, r = e instanceof t || e instanceof Model;
        if (r) {
            if (1 !== (n = e).outputs.length) throw new ValueError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");
            if (1 !== n.inputs.length) throw new ValueError("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")
        }
        if (0 === this.outputs.length) {
            if (0 === e.inboundNodes.length) {
                if (null == e.batchInputShape) throw new ValueError("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");
                var i = Input({batchShape: e.batchInputShape, dtype: e.dtype, name: e.name + "_input"});
                e.apply(i)
            }
            if (r) this.outputs = n.outputs, this.inputs = n.inputs; else {
                if (1 !== e.inboundNodes.length) throw new ValueError("A layer added to a Sequential model must not already be connected somewhere else. Model received layer " + e.name + " which has " + e.inboundNodes.length + " pre-existing inbound connections.");
                if (1 !== e.inboundNodes[0].outputTensors.length) throw new ValueError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");
                this.checkShape(e), this.outputs = [e.inboundNodes[0].outputTensors[0]], this.inputs = getSourceInputs(this.outputs[0])
            }
            this.inboundNodes = [], new Node({
                outboundLayer: this,
                inboundLayers: [],
                nodeIndices: [],
                tensorIndices: [],
                inputTensors: this.inputs,
                outputTensors: this.outputs,
                inputMasks: pyListRepeat(null, this.inputs.length),
                outputMasks: [null],
                inputShapes: this.inputs.map(function (e) {
                    return e.shape
                }),
                outputShapes: this.outputs[0].shape
            })
        } else {
            var a = e.apply(this.outputs[0]);
            if (Array.isArray(a)) throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");
            this.checkShape(e), this.outputs = [a], this.inboundNodes[0].outputTensors = this.outputs, this.inboundNodes[0].outputShapes = [this.outputs[0].shape]
        }
        this.layers.push(e), this.built = !1
    }, t.prototype.pop = function () {
        if (0 === this.layers.length) throw new TypeError("There are no layers in the model.");
        if (this.layers.pop(), 0 === this.layers.length) this.outputs = [], this.inboundNodes = [], this.outboundNodes = []; else {
            var e = this.layers.length - 1;
            this.layers[e].outboundNodes = [], this.outputs = [this.layers[e].output], this.inboundNodes[0].outputTensors = this.outputs, this.inboundNodes[0].outputShapes = [this.outputs[0].shape]
        }
    }, t.prototype.call = function (e, t) {
        return null == this.model && this.build(), this.model.call(e, t)
    }, t.prototype.build = function (e) {
        if (getExactlyOneShape(e), 0 === this.inputs.length || 0 === this.outputs.length) throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");
        this.model = new Model({
            inputs: this.inputs,
            outputs: this.outputs[0],
            name: this.name + "_model"
        }), this.model.trainable = this.trainable, this.model.updatable = this.updatable, this.supportsMasking = this.model.supportsMasking, this.inputLayers = this.model.inputLayers, this.inputLayersNodeIndices = this.model.inputLayersNodeIndices, this.inputLayersTensorIndices = this.model.inputLayersTensorIndices, this.outputLayers = this.model.outputLayers, this.outputLayersNodeIndices = this.model.outputLayersNodeIndices, this.outputLayersTensorIndices = this.model.outputLayersTensorIndices, this.nodesByDepth = this.model.nodesByDepth, this.containerNodes = this.model.containerNodes, this.outputNames = this.model.outputNames, this.inputNames = this.model.inputNames, this.built = !0
    }, t.prototype.countParams = function () {
        return this.built || this.build(), e.prototype.countParams.call(this)
    }, t.prototype.summary = function (t, n, r) {
        void 0 === r && (r = console.log), this.built || this.build(), e.prototype.summary.call(this, t, n, r)
    }, t.prototype.setWeights = function (e) {
        null == this.model && this.build(), this.model.setWeights(e)
    }, Object.defineProperty(t.prototype, "updatable", {
        get: function () {
            return this._updatable
        }, set: function (e) {
            this.built && (this.model.updatable = e), this._updatable = e
        }, enumerable: !0, configurable: !0
    }), t.prototype.evaluate = function (e, t, n) {
        if (void 0 === n && (n = {}), !this.built) throw new RuntimeError("The model needs to be compiled before being used.");
        return this.model.evaluate(e, t, n)
    }, t.prototype.evaluateDataset = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (n) {
                if (!this.built) throw new RuntimeError("The model needs to be compiled before being used.");
                return [2, this.model.evaluateDataset(e, t)]
            })
        })
    }, t.prototype.predict = function (e, t) {
        return void 0 === t && (t = {}), null == this.model && this.build(), this.model.predict(e, t)
    }, t.prototype.predictOnBatch = function (e) {
        return null == this.model && this.build(), this.model.predictOnBatch(e)
    }, t.prototype.compile = function (e) {
        this.build(), this.model.compile(e), this.optimizer = this.model.optimizer, this.loss = this.model.loss, this.metrics = this.model.metrics, this.metricsTensors = this.model.metricsTensors, this.metricsNames = this.model.metricsNames
    }, t.prototype.fit = function (e, t, n) {
        return void 0 === n && (n = {}), __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (r) {
                if (!this.built) throw new RuntimeError("The model needs to be compiled before being used.");
                return [2, this.model.fit(e, t, n)]
            })
        })
    }, t.prototype.fitDataset = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (n) {
                if (!this.built) throw new RuntimeError("The model needs to be compiled before being used.");
                return [2, this.model.fitDataset(e, t)]
            })
        })
    }, t.prototype.trainOnBatch = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (n) {
                return [2, this.model.trainOnBatch(e, t)]
            })
        })
    }, t.fromConfig = function (e, n, r, i) {
        var a;
        void 0 === r && (r = {}), void 0 === i && (i = !1);
        var o = {};
        if (n instanceof Array) {
            if (null == n[0].className || "Merge" === n[0].className) throw new ValueError("Legacy serialization format not supported yet.");
            a = n
        } else util.assert(null != n.layers, "When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."), a = n.layers, delete n.layers, o = n;
        var s = new e(o);
        if (!(s instanceof t)) throw new NotImplementedError("Sequential.fromConfig called on non-Sequential input: " + s);
        for (var l = 0, u = a; l < u.length; l++) {
            var c = deserialize(u[l], void 0, i);
            i && c.setFastWeightInitDuringBuild(!0), s.add(c)
        }
        return s
    }, Object.defineProperty(t.prototype, "stopTraining", {
        set: function (e) {
            this.model.stopTraining = e
        }, enumerable: !0, configurable: !0
    }), t.prototype.getConfig = function () {
        for (var e = [], t = 0, n = this.layers; t < n.length; t++) {
            var r = n[t];
            e.push({className: r.getClassName(), config: r.getConfig()})
        }
        return e
    }, t.className = "Sequential", t
}(Model);

function model(e) {
    return new Model(e)
}

function sequential(e) {
    return new Sequential(e)
}

function loadModel(e, t) {
    return void 0 === t && (t = !0), loadModelInternal(e, t)
}

function input(e) {
    return Input(e)
}

function registerCallbackConstructor(e, t) {
    CallbackConstructorRegistry.registerCallbackConstructor(e, t)
}

serialization.registerClass(Sequential);
var Activation = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.getConfig = function () {
        return {}
    }, t
}(serialization.Serializable), Elu = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.apply = function (e, t) {
        return void 0 === t && (t = 1), elu$1(e, t)
    }, t.className = "elu", t
}(Activation);
serialization.registerClass(Elu);
var Selu = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.apply = function (e) {
        return selu(e)
    }, t.className = "selu", t
}(Activation);
serialization.registerClass(Selu);
var Relu = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.apply = function (e) {
        return relu(e)
    }, t.className = "relu", t
}(Activation);
serialization.registerClass(Relu);
var Relu6 = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.apply = function (e) {
        return tidy(function () {
            return minimum(getScalar(6), relu(e))
        })
    }, t.className = "relu6", t
}(Activation);
serialization.registerClass(Relu6);
var Linear = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.apply = function (e) {
        return e
    }, t.className = "linear", t
}(Activation);
serialization.registerClass(Linear);
var Sigmoid = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.apply = function (e) {
        return sigmoid(e)
    }, t.className = "sigmoid", t
}(Activation);
serialization.registerClass(Sigmoid);
var HardSigmoid = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.apply = function (e) {
        return hardSigmoid(e)
    }, t.className = "hardSigmoid", t
}(Activation);
serialization.registerClass(HardSigmoid);
var Softplus = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.apply = function (e) {
        return softplus(e)
    }, t.className = "softplus", t
}(Activation);
serialization.registerClass(Softplus);
var Softsign = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.apply = function (e) {
        return softsign(e)
    }, t.className = "softsign", t
}(Activation);
serialization.registerClass(Softsign);
var Tanh = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.apply = function (e) {
        return tanh(e)
    }, t.className = "tanh", t
}(Activation);
serialization.registerClass(Tanh);
var Softmax = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.apply = function (e, t) {
        return void 0 === t && (t = -1), softmax(e, t)
    }, t.className = "softmax", t
}(Activation);

function serializeActivation(e) {
    return e.getClassName()
}

function deserializeActivation(e, t) {
    return void 0 === t && (t = {}), deserializeKerasObject(e, serialization.SerializationMap.getMap().classNameMap, t, "activation")
}

function getActivation(e) {
    return null == e ? deserializeActivation({
        className: "linear",
        config: {}
    }) : "string" == typeof e ? deserializeActivation({
        className: e,
        config: {}
    }) : e instanceof Activation ? e : deserializeActivation(e)
}

serialization.registerClass(Softmax);
var Regularizer = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t
}(serialization.Serializable), L1L2 = function (e) {
    function t(t) {
        var n = e.call(this) || this, r = null == t || null == t.l1 ? .01 : t.l1,
            i = null == t || null == t.l2 ? .01 : t.l2;
        return n.hasL1 = 0 !== r, n.hasL2 = 0 !== i, n.l1 = getScalar(r), n.l2 = getScalar(i), n
    }

    return __extends(t, e), t.prototype.apply = function (e) {
        var t = this;
        return tidy(function () {
            var n = zeros([1]);
            return t.hasL1 && (n = add(n, sum(mul(t.l1, abs(e))))), t.hasL2 && (n = add(n, sum(mul(t.l2, square(e))))), n.asScalar()
        })
    }, t.prototype.getConfig = function () {
        return {l1: this.l1.dataSync()[0], l2: this.l2.dataSync()[0]}
    }, t.fromConfig = function (e, t) {
        return new e({l1: t.l1, l2: t.l2})
    }, t.className = "L1L2", t
}(Regularizer);

function l1(e) {
    return new L1L2({l1: null != e ? e.l1 : null, l2: 0})
}

function l2(e) {
    return new L1L2({l2: null != e ? e.l2 : null, l1: 0})
}

serialization.registerClass(L1L2);
var REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP = {l1l2: "L1L2"};

function serializeRegularizer(e) {
    return serializeKerasObject(e)
}

function deserializeRegularizer(e, t) {
    return void 0 === t && (t = {}), deserializeKerasObject(e, serialization.SerializationMap.getMap().classNameMap, t, "regularizer")
}

function getRegularizer(e) {
    return null == e ? null : "string" == typeof e ? deserializeRegularizer({
        className: e in REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP ? REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP[e] : e,
        config: {}
    }) : e instanceof Regularizer ? e : deserializeRegularizer(e)
}

var ReLU = function (e) {
    function t(t) {
        var n = e.call(this, null == t ? {} : t) || this;
        return n.supportsMasking = !0, null != t && (n.maxValue = t.maxValue), n
    }

    return __extends(t, e), t.prototype.call = function (e, t) {
        e = getExactlyOneTensor(e);
        var n = relu(e);
        return null != this.maxValue && (n = clipByValue(n, 0, this.maxValue)), n
    }, t.prototype.computeOutputShape = function (e) {
        return e
    }, t.prototype.getConfig = function () {
        var t = {maxValue: this.maxValue}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "ReLU", t
}(Layer);
serialization.registerClass(ReLU);
var LeakyReLU = function (e) {
    function t(t) {
        var n = e.call(this, null == t ? {} : t) || this;
        return n.DEFAULT_ALPHA = .3, null == t && (t = {}), n.alpha = null == t.alpha ? n.DEFAULT_ALPHA : t.alpha, n
    }

    return __extends(t, e), t.prototype.call = function (e, t) {
        var n = getExactlyOneTensor(e);
        return leakyRelu(n, this.alpha)
    }, t.prototype.computeOutputShape = function (e) {
        return e
    }, t.prototype.getConfig = function () {
        var t = {alpha: this.alpha}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "LeakyReLU", t
}(Layer);
serialization.registerClass(LeakyReLU);
var PReLU = function (e) {
    function t(t) {
        var n = e.call(this, null == t ? {} : t) || this;
        if (n.DEFAULT_ALPHA_INITIALIZER = "zeros", null == t && (t = {}), n.supportsMasking = !0, n.alphaInitializer = getInitializer(t.alphaInitializer || n.DEFAULT_ALPHA_INITIALIZER), n.alphaRegularizer = getRegularizer(t.alphaRegularizer), n.alphaConstraint = getConstraint(t.alphaConstraint), null == t.sharedAxes) n.sharedAxes = null; else if (Array.isArray(t.sharedAxes)) n.sharedAxes = t.sharedAxes; else {
            if ("number" != typeof t.sharedAxes) throw new ValueError("Expected sharedAxes to be a number or an array of numbers, but got " + t.sharedAxes);
            n.sharedAxes = [t.sharedAxes]
        }
        return n
    }

    return __extends(t, e), t.prototype.build = function (e) {
        var t = (e = getExactlyOneShape(e)).slice(1);
        if (null != this.sharedAxes) for (var n = 0, r = this.sharedAxes; n < r.length; n++) {
            t[(a = r[n]) - 1] = 1
        }
        this.alpha = this.addWeight("alpha", t, "float32", this.alphaInitializer, this.alphaRegularizer, !0, this.alphaConstraint);
        var i = {};
        if (null != this.sharedAxes) for (var a = 1; a < e.length; ++a) i[a] = e[a];
        this.inputSpec = [new InputSpec({ndim: e.length, axes: i})], this.built = !0
    }, t.prototype.call = function (e, t) {
        return e = getExactlyOneTensor(e), prelu(e, this.alpha.read())
    }, t.prototype.getConfig = function () {
        var t = {
            alphaInitializer: serializeInitializer(this.alphaInitializer),
            alphaRegularizer: serializeRegularizer(this.alphaRegularizer),
            alphaConstraint: serializeConstraint(this.alphaConstraint),
            sharedAxes: this.sharedAxes
        }, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "PReLU", t
}(Layer);
serialization.registerClass(PReLU);
var ELU = function (e) {
    function t(t) {
        var n = e.call(this, null == t ? {} : t) || this;
        if (n.DEFAULT_ALPHA = 1, null == t && (t = {}), null != t.alpha && t.alpha !== n.DEFAULT_ALPHA) throw new NotImplementedError("Non-default alpha value (" + t.alpha + ") is not supported by the ELU layer yet.");
        return n.alpha = null == t.alpha ? n.DEFAULT_ALPHA : t.alpha, n
    }

    return __extends(t, e), t.prototype.call = function (e, t) {
        var n = getExactlyOneTensor(e);
        return elu(n)
    }, t.prototype.computeOutputShape = function (e) {
        return e
    }, t.prototype.getConfig = function () {
        var t = {alpha: this.alpha}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "ELU", t
}(Layer);
serialization.registerClass(ELU);
var ThresholdedReLU = function (e) {
    function t(t) {
        var n = e.call(this, null == t ? {} : t) || this;
        return n.DEFAULT_THETA = 1, null == t && (t = {}), n.theta = null == t.theta ? n.DEFAULT_THETA : t.theta, n.thetaTensor = getScalar(n.theta), n
    }

    return __extends(t, e), t.prototype.call = function (e, t) {
        var n = getExactlyOneTensor(e);
        return n.mul(cast$1(n.greater(this.thetaTensor), "float32"))
    }, t.prototype.computeOutputShape = function (e) {
        return e
    }, t.prototype.getConfig = function () {
        var t = {theta: this.theta}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "ThresholdedReLU", t
}(Layer);
serialization.registerClass(ThresholdedReLU);
var Softmax$1 = function (e) {
    function t(t) {
        var n = e.call(this, null == t ? {} : t) || this;
        return n.DEFAULT_AXIS = 1, null == t && (t = {}), n.softmax = (new Softmax).apply, n.axis = null == t.axis ? n.DEFAULT_AXIS : t.axis, n
    }

    return __extends(t, e), t.prototype.call = function (e, t) {
        var n = getExactlyOneTensor(e);
        return this.softmax(n, this.axis)
    }, t.prototype.computeOutputShape = function (e) {
        return e
    }, t.prototype.getConfig = function () {
        var t = {axis: this.axis}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "Softmax", t
}(Layer);

function normalizeArray(e, t, n) {
    if ("number" == typeof e) return pyListRepeat(e, t);
    if (e.length !== t) throw new ValueError("The " + n + " argument must be a tuple of " + t + " integers. Received: " + e.length + " elements.");
    for (var r = 0; r < t; ++r) {
        var i = e[r];
        if (!isInteger(i)) throw new ValueError("The " + n + " argument must be a tuple of " + t + " integers. Received: " + JSON.stringify(e) + " including a non-integer number " + i)
    }
    return e
}

function convOutputLength(e, t, n, r, i) {
    return void 0 === i && (i = 1), null == e ? e : (a = "same" === n ? e : e - (t + (t - 1) * (i - 1)) + 1, Math.floor((a + r - 1) / r));
    var a
}

function deconvLength(e, t, n, r) {
    if (null == e) return null;
    if ("valid" === r) e = e * t + max$1([n - t, 0]); else {
        if ("same" !== r) throw new ValueError("Unsupport padding mode: " + r + ".");
        e *= t
    }
    return e
}

function preprocessConv2DInput(e, t) {
    return tidy(function () {
        return checkDataFormat(t), "channelsFirst" === t ? transpose(e, [0, 2, 3, 1]) : e
    })
}

function conv1dWithBias(e, t, n, r, i, a, o) {
    return void 0 === r && (r = 1), void 0 === i && (i = "valid"), void 0 === o && (o = 1), tidy(function () {
        if (null == a && (a = imageDataFormat()), checkDataFormat(a), 3 !== e.shape.length) throw new ValueError("The input of a conv1dWithBias operation should be 3, but is " + e.shape.length + " instead.");
        if (3 !== t.shape.length) throw new ValueError("The kernel for a conv1dWithBias operation should be 3, but is " + t.shape.length + " instead");
        if (null != n && 1 !== n.shape.length) throw new ValueError("The bias for a conv1dWithBias operation should be 1, but is " + t.shape.length + " instead");
        if ("channelsFirst" === a && (e = transpose(e, [0, 2, 1])), "causal" === i) throw new NotImplementedError("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");
        var s = conv1d(e, t, r, "same" === i ? "same" : "valid", "NWC", o);
        return null != n && (s = biasAdd(s, n)), s
    })
}

function conv2dWithBias(e, t, n, r, i, a, o) {
    return void 0 === r && (r = [1, 1]), void 0 === i && (i = "valid"), tidy(function () {
        if (null == a && (a = imageDataFormat()), checkDataFormat(a), 3 !== e.rank && 4 !== e.rank) throw new ValueError("conv2dWithBias expects input to be of rank 3 or 4, but received " + e.rank + ".");
        if (3 !== t.rank && 4 !== t.rank) throw new ValueError("conv2dWithBias expects kernel to be of rank 3 or 4, but received " + e.rank + ".");
        var s = preprocessConv2DInput(e, a);
        if ("causal" === i) throw new NotImplementedError("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");
        return s = conv2d(s, t, r, "same" === i ? "same" : "valid", "NHWC", o), null != n && (s = biasAdd(s, n)), "channelsFirst" === a && (s = transpose(s, [0, 3, 1, 2])), s
    })
}

serialization.registerClass(Softmax$1);
var BaseConv = function (e) {
    function t(n, r) {
        var i = e.call(this, r) || this;
        if (i.bias = null, i.DEFAULT_KERNEL_INITIALIZER = "glorotNormal", i.DEFAULT_BIAS_INITIALIZER = "zeros", t.verifyArgs(r), i.rank = n, 1 !== i.rank && 2 !== i.rank) throw new NotImplementedError("Convolution layer for rank other than 1 or 2 (" + i.rank + ") is not implemented yet.");
        if (i.kernelSize = normalizeArray(r.kernelSize, n, "kernelSize"), i.strides = normalizeArray(null == r.strides ? 1 : r.strides, n, "strides"), i.padding = null == r.padding ? "valid" : r.padding, checkPaddingMode(i.padding), i.dataFormat = null == r.dataFormat ? "channelsLast" : r.dataFormat, checkDataFormat(i.dataFormat), i.activation = getActivation(r.activation), i.useBias = null == r.useBias || r.useBias, i.biasInitializer = getInitializer(r.biasInitializer || i.DEFAULT_BIAS_INITIALIZER), i.biasConstraint = getConstraint(r.biasConstraint), i.biasRegularizer = getRegularizer(r.biasRegularizer), i.activityRegularizer = getRegularizer(r.activityRegularizer), i.dilationRate = normalizeArray(null == r.dilationRate ? 1 : r.dilationRate, n, "dilationRate"), 1 === i.rank && Array.isArray(i.dilationRate) && 1 !== i.dilationRate.length) throw new ValueError("dilationRate must be a number or an array of a single number for 1D convolution, but received " + JSON.stringify(i.dilationRate));
        if (2 === i.rank) if ("number" == typeof i.dilationRate) i.dilationRate = [i.dilationRate, i.dilationRate]; else if (2 !== i.dilationRate.length) throw new ValueError("dilationRate must be a number or array of two numbers for 2D convolution, but received " + JSON.stringify(i.dilationRate));
        return i
    }

    return __extends(t, e), t.verifyArgs = function (e) {
        if (assert("kernelSize" in e, "required key 'kernelSize' not in config"), "number" != typeof e.kernelSize && !checkArrayTypeAndLength(e.kernelSize, "number", 1, 2)) throw new ValueError("BaseConv expects config.kernelSize to be number or number[] with length 1 or 2, but received " + JSON.stringify(e.kernelSize) + ".")
    }, t.prototype.getConfig = function () {
        var t = {
            kernelSize: this.kernelSize,
            strides: this.strides,
            padding: this.padding,
            dataFormat: this.dataFormat,
            dilationRate: this.dilationRate,
            activation: serializeActivation(this.activation),
            useBias: this.useBias,
            biasInitializer: serializeInitializer(this.biasInitializer),
            biasRegularizer: serializeRegularizer(this.biasRegularizer),
            activityRegularizer: serializeRegularizer(this.activityRegularizer),
            biasConstraint: serializeConstraint(this.biasConstraint)
        }, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t
}(Layer), Conv = function (e) {
    function t(n, r) {
        var i = e.call(this, n, r) || this;
        return i.kernel = null, t.verifyArgs(r), i.filters = r.filters, i.kernelInitializer = getInitializer(r.kernelInitializer || i.DEFAULT_KERNEL_INITIALIZER), i.kernelConstraint = getConstraint(r.kernelConstraint), i.kernelRegularizer = getRegularizer(r.kernelRegularizer), i
    }

    return __extends(t, e), t.prototype.build = function (e) {
        e = getExactlyOneShape(e);
        var t = "channelsFirst" === this.dataFormat ? 1 : e.length - 1;
        if (null == e[t]) throw new ValueError("The channel dimension of the input should be defined. Found " + e[t]);
        var n, r = e[t], i = this.kernelSize.concat([r, this.filters]);
        this.kernel = this.addWeight("kernel", i, null, this.kernelInitializer, this.kernelRegularizer, !0, this.kernelConstraint), this.useBias && (this.bias = this.addWeight("bias", [this.filters], null, this.biasInitializer, this.biasRegularizer, !0, this.biasConstraint)), this.inputSpec = [{
            ndim: this.rank + 2,
            axes: (n = {}, n[t] = r, n)
        }], this.built = !0
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            var t;
            e = getExactlyOneTensor(e);
            var r = null == n.bias ? null : n.bias.read();
            if (1 === n.rank) t = conv1dWithBias(e, n.kernel.read(), r, n.strides[0], n.padding, n.dataFormat, n.dilationRate[0]); else if (2 === n.rank) t = conv2dWithBias(e, n.kernel.read(), r, n.strides, n.padding, n.dataFormat, n.dilationRate); else if (3 === n.rank) throw new NotImplementedError("3D convolution is not implemented yet.");
            return null != n.activation && (t = n.activation.apply(t)), t
        })
    }, t.prototype.computeOutputShape = function (e) {
        e = getExactlyOneShape(e);
        for (var t = [], n = "channelsLast" === this.dataFormat ? e.slice(1, e.length - 1) : e.slice(2), r = 0; r < n.length; ++r) {
            var i = convOutputLength(n[r], this.kernelSize[r], this.padding, this.strides[r], "number" == typeof this.dilationRate ? this.dilationRate : this.dilationRate[r]);
            t.push(i)
        }
        var a = [e[0]];
        return "channelsLast" === this.dataFormat ? (a = a.concat(t)).push(this.filters) : (a.push(this.filters), a = a.concat(t)), a
    }, t.prototype.getConfig = function () {
        var t = {
            filters: this.filters,
            kernelInitializer: serializeInitializer(this.kernelInitializer),
            kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
            kernelConstraint: serializeConstraint(this.kernelConstraint)
        }, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.verifyArgs = function (e) {
        if (!("filters" in e) || "number" != typeof e.filters || e.filters < 1) throw new ValueError("Convolution layer expected config.filters to be a 'number' > 0 but got " + JSON.stringify(e.filters))
    }, t
}(BaseConv), Conv2D = function (e) {
    function t(n) {
        var r = e.call(this, 2, n) || this;
        return t.verifyArgs(n), r
    }

    return __extends(t, e), t.prototype.getConfig = function () {
        var t = e.prototype.getConfig.call(this);
        return delete t.rank, t
    }, t.verifyArgs = function (e) {
        if ("number" != typeof e.kernelSize && !checkArrayTypeAndLength(e.kernelSize, "number", 1, 2)) throw new ValueError("Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received " + JSON.stringify(e.kernelSize) + ".")
    }, t.className = "Conv2D", t
}(Conv);
serialization.registerClass(Conv2D);
var Conv2DTranspose = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        if (n.inputSpec = [new InputSpec({ndim: 4})], "same" !== n.padding && "valid" !== n.padding) throw new ValueError("Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode " + n.padding);
        return n
    }

    return __extends(t, e), t.prototype.build = function (e) {
        if (4 !== (e = getExactlyOneShape(e)).length) throw new ValueError("Input should have rank 4; Received input shape: " + JSON.stringify(e));
        var t = "channelsFirst" === this.dataFormat ? 1 : e.length - 1;
        if (null == e[t]) throw new ValueError("The channel dimension of the inputs should be defined. Found `None`.");
        var n, r = e[t], i = this.kernelSize.concat([this.filters, r]);
        this.kernel = this.addWeight("kernel", i, "float32", this.kernelInitializer, this.kernelRegularizer, !0, this.kernelConstraint), this.useBias && (this.bias = this.addWeight("bias", [this.filters], "float32", this.biasInitializer, this.biasRegularizer, !0, this.biasConstraint)), this.inputSpec = [new InputSpec({
            ndim: 4,
            axes: (n = {}, n[t] = r, n)
        })], this.built = !0
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            var t = getExactlyOneTensor(e);
            if (4 !== t.shape.length) throw new ValueError("Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-" + t.shape.length);
            var r, i, a = t.shape, o = a[0];
            "channelsFirst" === n.dataFormat ? (r = 2, i = 3) : (r = 1, i = 2);
            var s = a[r], l = a[i], u = n.kernelSize[0], c = n.kernelSize[1], h = n.strides[0], p = n.strides[1],
                d = [o, deconvLength(s, h, u, n.padding), deconvLength(l, p, c, n.padding), n.filters];
            "channelsLast" !== n.dataFormat && (t = transpose(t, [0, 2, 3, 1]));
            var g = conv2dTranspose(t, n.kernel.read(), d, n.strides, n.padding);
            return "channelsLast" !== n.dataFormat && (g = transpose(g, [0, 3, 1, 2])), null != n.bias && (g = biasAdd(g, n.bias.read(), n.dataFormat)), null != n.activation && (g = n.activation.apply(g)), g
        })
    }, t.prototype.computeOutputShape = function (e) {
        var t, n, r, i = (e = getExactlyOneShape(e)).slice();
        "channelsFirst" === this.dataFormat ? (t = 1, n = 2, r = 3) : (t = 3, n = 1, r = 2);
        var a = this.kernelSize[0], o = this.kernelSize[1], s = this.strides[0], l = this.strides[1];
        return i[t] = this.filters, i[n] = deconvLength(i[n], s, a, this.padding), i[r] = deconvLength(i[r], l, o, this.padding), i
    }, t.prototype.getConfig = function () {
        var t = e.prototype.getConfig.call(this);
        return delete t.dilationRate, t
    }, t.className = "Conv2DTranspose", t
}(Conv2D);
serialization.registerClass(Conv2DTranspose);
var SeparableConv = function (e) {
    function t(t, n) {
        var r = e.call(this, t, n) || this;
        if (r.DEFAULT_DEPTHWISE_INITIALIZER = "glorotUniform", r.DEFAULT_POINTWISE_INITIALIZER = "glorotUniform", r.depthwiseKernel = null, r.pointwiseKernel = null, null == n.filters) throw new ValueError("The `filters` configuration field is required by SeparableConv, but is unspecified.");
        if (null != n.kernelInitializer || null != n.kernelRegularizer || null != n.kernelConstraint) throw new ValueError("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");
        if (null != n.padding && "same" !== n.padding && "valid" !== n.padding) throw new ValueError("SeparableConv" + r.rank + "D supports only padding modes: 'same' and 'valid', but received " + JSON.stringify(n.padding));
        return r.depthMultiplier = null == n.depthMultiplier ? 1 : n.depthMultiplier, r.depthwiseInitializer = getInitializer(n.depthwiseInitializer || r.DEFAULT_DEPTHWISE_INITIALIZER), r.depthwiseRegularizer = getRegularizer(n.depthwiseRegularizer), r.depthwiseConstraint = getConstraint(n.depthwiseConstraint), r.pointwiseInitializer = getInitializer(n.depthwiseInitializer || r.DEFAULT_POINTWISE_INITIALIZER), r.pointwiseRegularizer = getRegularizer(n.pointwiseRegularizer), r.pointwiseConstraint = getConstraint(n.pointwiseConstraint), r
    }

    return __extends(t, e), t.prototype.build = function (e) {
        if ((e = getExactlyOneShape(e)).length < this.rank + 2) throw new ValueError("Inputs to SeparableConv" + this.rank + "D should have rank " + (this.rank + 2) + ", but received input shape: " + JSON.stringify(e));
        var t = "channelsFirst" === this.dataFormat ? 1 : e.length - 1;
        if (null == e[t] || e[t] < 0) throw new ValueError("The channel dimension of the inputs should be defined, but found " + JSON.stringify(e[t]));
        for (var n = e[t], r = this.kernelSize.concat([n, this.depthMultiplier]), i = [], a = 0; a < this.rank; ++a) i.push(1);
        i.push(n * this.depthMultiplier, this.filters);
        var o;
        this.depthwiseKernel = this.addWeight("depthwise_kernel", r, "float32", this.depthwiseInitializer, this.depthwiseRegularizer, !0, this.depthwiseConstraint), this.pointwiseKernel = this.addWeight("pointwise_kernel", i, "float32", this.pointwiseInitializer, this.pointwiseRegularizer, !0, this.pointwiseConstraint), this.useBias ? this.bias = this.addWeight("bias", [this.filters], "float32", this.biasInitializer, this.biasRegularizer, !0, this.biasConstraint) : this.bias = null, this.inputSpec = [new InputSpec({
            ndim: this.rank + 2,
            axes: (o = {}, o[t] = n, o)
        })], this.built = !0
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            var t;
            if (e = getExactlyOneTensor(e), 1 === n.rank) throw new NotImplementedError("1D separable convolution is not implemented yet.");
            return 2 === n.rank && ("channelsFirst" === n.dataFormat && (e = transpose(e, [0, 2, 3, 1])), t = separableConv2d(e, n.depthwiseKernel.read(), n.pointwiseKernel.read(), n.strides, n.padding, n.dilationRate, "NHWC")), n.useBias && (t = biasAdd(t, n.bias.read(), n.dataFormat)), null != n.activation && (t = n.activation.apply(t)), "channelsFirst" === n.dataFormat && (t = transpose(t, [0, 3, 1, 2])), t
        })
    }, t.prototype.getConfig = function () {
        var t = e.prototype.getConfig.call(this);
        return delete t.rank, delete t.kernelInitializer, delete t.kernelRegularizer, delete t.kernelConstraint, t.depthwiseInitializer = serializeInitializer(this.depthwiseInitializer), t.pointwiseInitializer = serializeInitializer(this.pointwiseInitializer), t.depthwiseRegularizer = serializeRegularizer(this.depthwiseRegularizer), t.pointwiseRegularizer = serializeRegularizer(this.pointwiseRegularizer), t.depthwiseConstraint = serializeConstraint(this.depthwiseConstraint), t.pointwiseConstraint = serializeConstraint(this.pointwiseConstraint), t
    }, t.className = "SeparableConv", t
}(Conv), SeparableConv2D = function (e) {
    function t(t) {
        return e.call(this, 2, t) || this
    }

    return __extends(t, e), t.className = "SeparableConv2D", t
}(SeparableConv);
serialization.registerClass(SeparableConv2D);
var Conv1D = function (e) {
    function t(n) {
        var r = e.call(this, 1, n) || this;
        return t.verifyArgs(n), r.inputSpec = [{ndim: 3}], r
    }

    return __extends(t, e), t.prototype.getConfig = function () {
        var t = e.prototype.getConfig.call(this);
        return delete t.rank, delete t.dataFormat, t
    }, t.verifyArgs = function (e) {
        if ("number" != typeof e.kernelSize && !checkArrayTypeAndLength(e.kernelSize, "number", 1, 1)) throw new ValueError("Conv1D expects config.kernelSize to be number or number[] with length 1, but received " + JSON.stringify(e.kernelSize) + ".")
    }, t.className = "Conv1D", t
}(Conv);
serialization.registerClass(Conv1D);
var Cropping2D = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        return "number" == typeof t.cropping ? n.cropping = [[t.cropping, t.cropping], [t.cropping, t.cropping]] : "number" == typeof t.cropping[0] ? n.cropping = [[t.cropping[0], t.cropping[0]], [t.cropping[1], t.cropping[1]]] : n.cropping = t.cropping, n.dataFormat = void 0 === t.dataFormat ? "channelsLast" : t.dataFormat, n.inputSpec = [{ndim: 4}], n
    }

    return __extends(t, e), t.prototype.computeOutputShape = function (e) {
        return "channelsFirst" === this.dataFormat ? [e[0], e[1], e[2] - this.cropping[0][0] - this.cropping[0][1], e[3] - this.cropping[1][0] - this.cropping[1][1]] : [e[0], e[1] - this.cropping[0][0] - this.cropping[0][1], e[2] - this.cropping[1][0] - this.cropping[1][1], e[3]]
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            return e = getExactlyOneTensor(e), "channelsLast" === n.dataFormat ? sliceAlongAxis(sliceAlongAxis(e, n.cropping[0][0], e.shape[1] - n.cropping[0][0] - n.cropping[0][1], 2), n.cropping[1][0], e.shape[2] - n.cropping[1][1] - n.cropping[1][0], 3) : sliceAlongAxis(sliceAlongAxis(e, n.cropping[0][0], e.shape[2] - n.cropping[0][0] - n.cropping[0][1], 3), n.cropping[1][0], e.shape[3] - n.cropping[1][1] - n.cropping[1][0], 4)
        })
    }, t.prototype.getConfig = function () {
        var t = {cropping: this.cropping, dataFormat: this.dataFormat}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "Cropping2D", t
}(Layer);
serialization.registerClass(Cropping2D);
var UpSampling2D = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        return n.DEFAULT_SIZE = [2, 2], n.inputSpec = [{ndim: 4}], n.size = null == t.size ? n.DEFAULT_SIZE : t.size, n.dataFormat = null == t.dataFormat ? "channelsLast" : t.dataFormat, n
    }

    return __extends(t, e), t.prototype.computeOutputShape = function (e) {
        if ("channelsFirst" === this.dataFormat) {
            var t = null == e[2] ? null : this.size[0] * e[2], n = null == e[3] ? null : this.size[1] * e[3];
            return [e[0], e[1], t, n]
        }
        t = null == e[1] ? null : this.size[0] * e[1], n = null == e[2] ? null : this.size[1] * e[2];
        return [e[0], t, n, e[3]]
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            var t = getExactlyOneTensor(e), r = t.shape;
            if ("channelsFirst" === n.dataFormat) {
                t = transpose(t, [0, 2, 3, 1]);
                var i = n.size[0] * r[2], a = n.size[1] * r[3], o = t.resizeNearestNeighbor([i, a]);
                return transpose(o, [0, 3, 1, 2])
            }
            i = n.size[0] * r[1], a = n.size[1] * r[2];
            return t.resizeNearestNeighbor([i, a])
        })
    }, t.prototype.getConfig = function () {
        var t = {size: this.size, dataFormat: this.dataFormat}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "UpSampling2D", t
}(Layer);

function depthwiseConv2d$1(e, t, n, r, i, a) {
    return void 0 === n && (n = [1, 1]), void 0 === r && (r = "valid"), tidy(function () {
        null == i && (i = imageDataFormat()), checkDataFormat(i);
        var o = preprocessConv2DInput(e, i);
        if (4 !== e.rank) throw new ValueError("Input for depthwiseConv2d is required to be 4-D, but is instead " + e.rank + "-D");
        if (4 !== t.rank) throw new ValueError("depthwiseKernel is required to be 4-D, but is instead " + t.rank + "-D");
        return o = depthwiseConv2d(o, t, n, "same" === r ? "same" : "valid", "NHWC", a), "channelsFirst" === i && (o = transpose(o, [0, 3, 1, 2])), o
    })
}

serialization.registerClass(UpSampling2D);
var DepthwiseConv2D = function (e) {
    function t(t) {
        var n = e.call(this, 2, t) || this;
        return n.depthwiseKernel = null, n.depthMultiplier = null == t.depthMultiplier ? 1 : t.depthMultiplier, n.depthwiseInitializer = getInitializer(t.depthwiseInitializer || n.DEFAULT_KERNEL_INITIALIZER), n.depthwiseConstraint = getConstraint(t.depthwiseConstraint), n.depthwiseRegularizer = getRegularizer(t.depthwiseRegularizer), n
    }

    return __extends(t, e), t.prototype.build = function (e) {
        if ((e = getExactlyOneShape(e)).length < 4) throw new ValueError("Inputs to DepthwiseConv2D should have rank 4. Received input shape: " + JSON.stringify(e) + ".");
        var t = "channelsFirst" === this.dataFormat ? 1 : 3;
        if (null == e[t] || e[t] < 0) throw new ValueError("The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (" + e[t] + ").");
        var n = e[t], r = [this.kernelSize[0], this.kernelSize[1], n, this.depthMultiplier];
        this.depthwiseKernel = this.addWeight("depthwise_kernel", r, null, this.depthwiseInitializer, this.depthwiseRegularizer, !0, this.depthwiseConstraint), this.useBias ? this.bias = this.addWeight("bias", [n * this.depthMultiplier], null, this.biasInitializer, this.biasRegularizer, !0, this.biasConstraint) : this.bias = null, this.built = !0
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            var t = depthwiseConv2d$1(e = getExactlyOneTensor(e), n.depthwiseKernel.read(), n.strides, n.padding, n.dataFormat, null);
            return n.useBias && (t = biasAdd(t, n.bias.read(), n.dataFormat)), null != n.activation && (t = n.activation.apply(t)), t
        })
    }, t.prototype.computeOutputShape = function (e) {
        e = getExactlyOneShape(e);
        var t = "channelsFirst" === this.dataFormat ? e[2] : e[1],
            n = "channelsFirst" === this.dataFormat ? e[3] : e[2],
            r = "channelsFirst" === this.dataFormat ? e[1] * this.depthMultiplier : e[3] * this.depthMultiplier,
            i = convOutputLength(t, this.kernelSize[0], this.padding, this.strides[0]),
            a = convOutputLength(n, this.kernelSize[1], this.padding, this.strides[1]);
        return "channelsFirst" === this.dataFormat ? [e[0], r, i, a] : [e[0], i, a, r]
    }, t.prototype.getConfig = function () {
        var t = e.prototype.getConfig.call(this);
        return t.depthMultiplier = this.depthMultiplier, t.depthwiseInitializer = serializeInitializer(this.depthwiseInitializer), t.depthwiseRegularizer = serializeRegularizer(this.depthwiseRegularizer), t.depthwiseConstraint = serializeConstraint(this.depthwiseRegularizer), t
    }, t.className = "DepthwiseConv2D", t
}(BaseConv);
serialization.registerClass(DepthwiseConv2D);
var Dropout = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        if (n.rate = Math.max(Math.min(t.rate, 1), 0), n.rateScalar = getScalar(n.rate), n.noiseShape = t.noiseShape, n.seed = t.seed, null != n.seed) throw new NotImplementedError("Non-default seed is not implemented in Dropout layer yet: " + n.seed);
        return n.supportsMasking = !0, n
    }

    return __extends(t, e), t.prototype.getNoiseShape = function (e) {
        if (null == this.noiseShape) return this.noiseShape;
        for (var t = e.shape, n = [], r = 0; r < this.noiseShape.length; ++r) n.push(null == this.noiseShape[r] ? t[r] : this.noiseShape[r]);
        return n
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            n.invokeCallHook(e, t);
            var r = getExactlyOneTensor(e);
            if (null != n.noiseShape && !util.arraysEqual(r.shape, n.noiseShape)) throw new NotImplementedError("Non-default noise shape is not implemented in Dropout layer yet: " + JSON.stringify(n.noiseShape));
            if (0 < n.rate && n.rate < 1) {
                var i = null != t.training && t.training, a = n.getNoiseShape(r);
                return inTrainPhase(function () {
                    return dropout(r, n.rateScalar, a, n.seed)
                }, function () {
                    return r
                }, i)
            }
            return e
        })
    }, t.prototype.getConfig = function () {
        var t = {rate: this.rate, noiseShape: this.noiseShape, seed: this.seed}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "Dropout", t
}(Layer);
serialization.registerClass(Dropout);
var Dense = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        if (n.activation = null, n.useBias = !0, n.kernel = null, n.bias = null, n.DEFAULT_KERNEL_INITIALIZER = "glorotNormal", n.DEFAULT_BIAS_INITIALIZER = "zeros", null == t.batchInputShape && null == t.inputShape && null != t.inputDim) {
            var r = null;
            null != t.batchSize && (r = t.batchSize), n.batchInputShape = [r, t.inputDim]
        }
        return n.units = t.units, n.activation = getActivation(t.activation), null != t.useBias && (n.useBias = t.useBias), n.kernelInitializer = getInitializer(t.kernelInitializer || n.DEFAULT_KERNEL_INITIALIZER), n.biasInitializer = getInitializer(t.biasInitializer || n.DEFAULT_BIAS_INITIALIZER), n.kernelConstraint = getConstraint(t.kernelConstraint), n.biasConstraint = getConstraint(t.biasConstraint), n.kernelRegularizer = getRegularizer(t.kernelRegularizer), n.biasRegularizer = getRegularizer(t.biasRegularizer), n.activityRegularizer = getRegularizer(t.activityRegularizer), n.supportsMasking = !0, n.inputSpec = [{minNDim: 2}], n
    }

    return __extends(t, e), t.prototype.build = function (e) {
        var t, n = (e = getExactlyOneShape(e))[e.length - 1];
        null == this.kernel && (this.kernel = this.addWeight("kernel", [n, this.units], null, this.kernelInitializer, this.kernelRegularizer, !0, this.kernelConstraint), this.useBias && (this.bias = this.addWeight("bias", [this.units], null, this.biasInitializer, this.biasRegularizer, !0, this.biasConstraint))), this.inputSpec = [{
            minNDim: 2,
            axes: (t = {}, t[-1] = n, t)
        }], this.built = !0
    }, t.prototype.computeOutputShape = function (e) {
        var t = (e = getExactlyOneShape(e)).slice();
        return t[t.length - 1] = this.units, t
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            n.invokeCallHook(e, t);
            var r = dot(getExactlyOneTensor(e), n.kernel.read());
            return null != n.bias && (r = biasAdd(r, n.bias.read())), null != n.activation && (r = n.activation.apply(r)), r
        })
    }, t.prototype.getConfig = function () {
        var t = {
            units: this.units,
            activation: serializeActivation(this.activation),
            useBias: this.useBias,
            kernelInitializer: serializeInitializer(this.kernelInitializer),
            biasInitializer: serializeInitializer(this.biasInitializer),
            kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
            biasRegularizer: serializeRegularizer(this.biasRegularizer),
            activityRegularizer: serializeRegularizer(this.activityRegularizer),
            kernelConstraint: serializeConstraint(this.kernelConstraint),
            biasConstraint: serializeConstraint(this.biasConstraint)
        }, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "Dense", t
}(Layer);
serialization.registerClass(Dense);
var Flatten = function (e) {
    function t(t) {
        var n = e.call(this, t || {}) || this;
        return n.inputSpec = [{minNDim: 3}], n
    }

    return __extends(t, e), t.prototype.computeOutputShape = function (e) {
        for (var t = 0, n = (e = getExactlyOneShape(e)).slice(1); t < n.length; t++) {
            if (null == n[t]) throw new ValueError('The shape of the input to "Flatten" is not fully defined (got ' + e.slice(1) + '). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.')
        }
        return [e[0], arrayProd(e, 1)]
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            return n.invokeCallHook(e, t), batchFlatten(getExactlyOneTensor(e))
        })
    }, t.className = "Flatten", t
}(Layer);
serialization.registerClass(Flatten);
var Activation$1 = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        return n.supportsMasking = !0, n.activation = getActivation(t.activation), n
    }

    return __extends(t, e), t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            n.invokeCallHook(e, t);
            var r = getExactlyOneTensor(e);
            return n.activation.apply(r)
        })
    }, t.prototype.getConfig = function () {
        var t = {activation: serializeActivation(this.activation)}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "Activation", t
}(Layer);
serialization.registerClass(Activation$1);
var RepeatVector = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        return n.n = t.n, n.inputSpec = [{ndim: 2}], n
    }

    return __extends(t, e), t.prototype.computeOutputShape = function (e) {
        return [e[0], this.n, e[1]]
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            return repeat(e = getExactlyOneTensor(e), n.n)
        })
    }, t.prototype.getConfig = function () {
        var t = {n: this.n}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "RepeatVector", t
}(Layer);
serialization.registerClass(RepeatVector);
var Reshape = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        n.targetShape = t.targetShape;
        for (var r = 0; r < n.targetShape.length; ++r) n.isUnknown(n.targetShape[r]) && (n.targetShape[r] = null);
        return n
    }

    return __extends(t, e), t.prototype.isUnknown = function (e) {
        return e < 0 || null == e
    }, t.prototype.fixUnknownDimension = function (e, t) {
        for (var n = "Total size of new array must be unchanged.", r = t.slice(), i = 1, a = null, o = 0; o < r.length; ++o) {
            var s = r[o];
            if (this.isUnknown(s)) {
                if (null !== a) throw new ValueError("Can only specifiy one unknown dimension.");
                a = o
            } else i *= s
        }
        var l = arrayProd(e);
        if (null !== a) {
            if (0 === i || l % i != 0) throw new ValueError(n);
            r[a] = l / i
        } else if (l !== i) throw new ValueError(n);
        return r
    }, t.prototype.computeOutputShape = function (e) {
        for (var t = !1, n = 0; n < e.length; ++n) if (this.isUnknown(e[n])) {
            t = !0;
            break
        }
        return t ? e.slice(0, 1).concat(this.targetShape) : e.slice(0, 1).concat(this.fixUnknownDimension(e.slice(1), this.targetShape))
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            n.invokeCallHook(e, t);
            var r = getExactlyOneTensor(e), i = r.shape,
                a = i.slice(0, 1).concat(n.fixUnknownDimension(i.slice(1), n.targetShape));
            return r.reshape(a)
        })
    }, t.prototype.getConfig = function () {
        var t = {targetShape: this.targetShape}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "Reshape", t
}(Layer);
serialization.registerClass(Reshape);
var Permute = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        if (null == t.dims) throw new Error("Required configuration field `dims` is missing during Permute constructor call.");
        if (!Array.isArray(t.dims)) throw new Error("Permute constructor requires `dims` to be an Array, but received " + t.dims + " instead.");
        var r = range(1, t.dims.length + 1);
        if (!util.arraysEqual(t.dims.slice().sort(), r)) throw new Error("Invalid permutation `dims`: " + JSON.stringify(t.dims) + " `dims` must contain consecutive integers starting from 1.");
        return n.dims = t.dims, n.dimsIncludingBatch = [0].concat(n.dims), n.inputSpec = [new InputSpec({ndim: n.dims.length + 1})], n
    }

    return __extends(t, e), t.prototype.computeOutputShape = function (e) {
        var t = (e = getExactlyOneShape(e)).slice();
        return this.dims.forEach(function (n, r) {
            t[r + 1] = e[n]
        }), t
    }, t.prototype.call = function (e, t) {
        return transpose(getExactlyOneTensor(e), this.dimsIncludingBatch)
    }, t.prototype.getConfig = function () {
        var t = {dims: this.dims}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "Permute", t
}(Layer);
serialization.registerClass(Permute);
var Embedding = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        if (n.embeddings = null, n.DEFAULT_EMBEDDINGS_INITIALIZER = "randomUniform", null == t.batchInputShape && null == t.inputShape) {
            var r = null;
            null != t.batchSize && (r = t.batchSize), null == t.inputLength ? n.batchInputShape = [r, null] : n.batchInputShape = [r].concat(toList(t.inputLength))
        }
        return n.inputDim = t.inputDim, n.outputDim = t.outputDim, n.embeddingsInitializer = getInitializer(t.embeddingsInitializer || n.DEFAULT_EMBEDDINGS_INITIALIZER), n.embeddingsRegularizer = getRegularizer(t.embeddingsRegularizer), n.activityRegularizer = getRegularizer(t.activityRegularizer), n.embeddingsConstraint = getConstraint(t.embeddingsConstraint), n.maskZero = t.maskZero, n.supportsMasking = t.maskZero, n.inputLength = t.inputLength, n
    }

    return __extends(t, e), t.prototype.build = function (e) {
        this.embeddings = this.addWeight("embeddings", [this.inputDim, this.outputDim], this.dtype, this.embeddingsInitializer, this.embeddingsRegularizer, !0, this.embeddingsConstraint), this.built = !0
    }, t.prototype.warnOnIncompatibleInputShape = function (e) {
    }, t.prototype.computeMask = function (e, t) {
        var n = this;
        return tidy(function () {
            return n.maskZero ? (e = getExactlyOneTensor(e), notEqual(e, zerosLike(e))) : null
        })
    }, t.prototype.computeOutputShape = function (e) {
        if (e = getExactlyOneShape(e), null == this.inputLength) return e.concat([this.outputDim]);
        var t = toList(this.inputLength);
        if (t.length !== e.length - 1) throw new ValueError('"inputLength" is ' + this.inputLength + ", but received input shape has shape " + e);
        for (var n = 0, r = 0; r < t.length; ++r) {
            var i = t[r], a = e[r + 1];
            if (null != i && null != a && i !== a) throw new ValueError('"inputLength" is ' + this.inputLength + ", but received input shape has shape " + e);
            null == i && (t[n] = a), n++
        }
        return [e[0]].concat(t, [this.outputDim])
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            n.invokeCallHook(e, t);
            var r = getExactlyOneTensor(e);
            return "int32" !== r.dtype && (r = cast$1(r, "int32")), gather$1(n.embeddings.read(), r.as1D()).reshape(getExactlyOneShape(n.computeOutputShape(r.shape)))
        })
    }, t.prototype.getConfig = function () {
        var t = {
            inputDim: this.inputDim,
            outputDim: this.outputDim,
            embeddingsInitializer: serializeInitializer(this.embeddingsInitializer),
            embeddingsRegularizer: serializeRegularizer(this.embeddingsRegularizer),
            activityRegularizer: serializeRegularizer(this.activityRegularizer),
            embeddingsConstraint: serializeConstraint(this.embeddingsConstraint),
            maskZero: this.maskZero,
            inputLength: this.inputLength
        }, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "Embedding", t
}(Layer);
serialization.registerClass(Embedding);
var Merge = function (e) {
    function t(t) {
        var n = e.call(this, t || {}) || this;
        return n.supportsMasking = !0, n
    }

    return __extends(t, e), t.prototype.mergeFunction = function (e) {
        throw new NotImplementedError
    }, t.prototype.computeElementwiseOpOutputShape = function (e, t) {
        if (null == e || null == t) return null;
        if (e.length < t.length) return this.computeElementwiseOpOutputShape(t, e);
        if (0 === t.length) return e;
        for (var n = e.slice(0, e.length - t.length), r = 0; r < t.length; ++r) {
            var i = e[e.length - t.length + r], a = t[r];
            if (null == i || null == a || i < 0 || a < 0) n.push(null); else if (1 === i) n.push(a); else if (1 === a) n.push(i); else {
                if (i !== a) throw new ValueError("Operands could not be broadcast together with shapes " + JSON.stringify(e) + " " + JSON.stringify(t));
                n.push(i)
            }
        }
        return n
    }, t.prototype.build = function (e) {
        if (Array.isArray(e) && !Array.isArray(e[0]) && (e = [getExactlyOneShape(e)]), (e = e).length < 2) throw new ValueError("A merge layer should be called on an Array of at least 2 inputs. Got " + e.length + " input(s).");
        for (var t = [], n = 0, r = e; n < r.length; n++) {
            null != (o = r[n]) && null !== o[0] && t.push(o[0])
        }
        if ((t = unique(t)).length > 1) throw new ValueError("Can not merge tensors with different batch sizes. Got tensors with shapes: " + JSON.stringify(e) + ".");
        for (var i = null == e[0] ? null : e[0].slice(1), a = 1; a < e.length; ++a) {
            var o = null == e[a] ? null : e[a].slice(1);
            i = this.computeElementwiseOpOutputShape(i, o)
        }
        var s = e.map(function (e) {
            return e.length
        });
        -1 === e.indexOf(null) && 1 === unique(s).length ? this.reshapeRequired = !1 : this.reshapeRequired = !0
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            if (e = e, n.reshapeRequired) {
                var t = [], r = e.map(function (e) {
                    return e.rank
                });
                if (-1 === r.indexOf(null)) {
                    for (var i = max$1(r), a = 0, o = e; a < o.length; a++) {
                        for (var s = (p = o[a]).rank, l = 0; l < i - s; ++l) p = expandDims$1(p, 1);
                        t.push(p)
                    }
                    return n.mergeFunction(t)
                }
                for (var u = !1, c = 0, h = e; c < h.length; c++) {
                    var p;
                    if (null == (s = (p = h[c]).rank)) {
                        var d = p.shape, g = d[0], f = d.slice(1).concat([g]),
                            m = p.reshape([g].concat(arrayProd(d.slice(1))));
                        m = (m = transpose(m, [1, 0])).reshape(f), t.push(m), u = !0
                    } else if (s > 1) {
                        var y = range(1, s).concat([0]);
                        t.push(transpose(p, y)), u = !0
                    } else t.push(p)
                }
                var v = n.mergeFunction(t), b = v.rank;
                if (u) if (null == b) {
                    var w = v.shape;
                    f = [g = w[w.length - 1]].concat(w.slice(0, w.length - 1));
                    v = transpose(v.reshape([-1, g]), [1, 0]).reshape(f)
                } else if (b > 1) {
                    y = [b - 1].concat(range(0, b - 1));
                    v = transpose(v, y)
                }
                return v
            }
            return n.mergeFunction(e)
        })
    }, t.prototype.computeOutputShape = function (e) {
        var t;
        t = null == (e = e)[0] ? null : e[0].slice(1);
        for (var n = 1; n < e.length; ++n) {
            var r = null == e[n] ? null : e[n].slice(1);
            t = this.computeElementwiseOpOutputShape(t, r)
        }
        for (var i = [], a = 0, o = e; a < o.length; a++) {
            null != (r = o[a]) && null !== r[0] && i.push(r[0])
        }
        return t = 1 === (i = unique(i)).length ? i.concat(t) : [null].concat(t)
    }, t.prototype.computeMask = function (e, t) {
        return tidy(function () {
            if (null == t) return null;
            if (!Array.isArray(t)) throw new ValueError("`mask` should be an Array");
            if (!Array.isArray(e)) throw new ValueError("`inputs` should be an Array");
            if (t.length !== e.length) throw new ValueError("The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (" + e.length + " vs " + t.length + ")");
            if (t.every(function (e) {
                return null == e
            })) return null;
            for (var n = (t = t.map(function (e) {
                return null == e ? e : expandDims(e, 0)
            }))[0], r = 1; r < t.length - 1; ++r) n = logicalAnd(n, t[r]);
            return n
        })
    }, t
}(Layer), Add = function (e) {
    function t(t) {
        return e.call(this, t) || this
    }

    return __extends(t, e), t.prototype.mergeFunction = function (e) {
        return tidy(function () {
            for (var t = e[0].clone(), n = 1; n < e.length; ++n) t = add(t, e[n]);
            return t
        })
    }, t.className = "Add", t
}(Merge);
serialization.registerClass(Add);
var Multiply = function (e) {
    function t(t) {
        return e.call(this, t) || this
    }

    return __extends(t, e), t.prototype.mergeFunction = function (e) {
        return tidy(function () {
            for (var t = e[0].clone(), n = 1; n < e.length; ++n) t = mul(t, e[n]);
            return t
        })
    }, t.className = "Multiply", t
}(Merge);
serialization.registerClass(Multiply);
var Average = function (e) {
    function t(t) {
        return e.call(this, t) || this
    }

    return __extends(t, e), t.prototype.mergeFunction = function (e) {
        return tidy(function () {
            for (var t = e[0].clone(), n = 1; n < e.length; ++n) t = add(t, e[n]);
            return mul(getScalar(1 / e.length), t)
        })
    }, t.className = "Average", t
}(Merge);
serialization.registerClass(Average);
var Maximum = function (e) {
    function t(t) {
        return e.call(this, t) || this
    }

    return __extends(t, e), t.prototype.mergeFunction = function (e) {
        return tidy(function () {
            for (var t = e[0], n = 1; n < e.length; ++n) t = maximum(t, e[n]);
            return t
        })
    }, t.className = "Maximum", t
}(Merge);
serialization.registerClass(Maximum);
var Minimum = function (e) {
    function t(t) {
        return e.call(this, t) || this
    }

    return __extends(t, e), t.prototype.mergeFunction = function (e) {
        return tidy(function () {
            for (var t = e[0], n = 1; n < e.length; ++n) t = minimum(t, e[n]);
            return t
        })
    }, t.className = "Minimum", t
}(Merge);
serialization.registerClass(Minimum);
var Concatenate = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        return n.DEFAULT_AXIS = -1, null == t && (t = {}), n.axis = null == t.axis ? n.DEFAULT_AXIS : t.axis, n.supportsMasking = !0, n.reshapeRequired = !1, n
    }

    return __extends(t, e), t.prototype.build = function (e) {
        if (!Array.isArray(e) || !Array.isArray(e[0]) || 1 === e.length) throw new ValueError("A `Concatenate` layer should be called on a list of at least 2 inputs");
        for (var t = !0, n = 0, r = e = e; n < r.length; n++) {
            if (null != (c = r[n])) {
                t = !1;
                break
            }
        }
        if (!t) {
            for (var i = [], a = 0; a < e.length; ++a) {
                var o = e[a].slice();
                o.splice(this.axis, 1);
                for (var s = !1, l = 0, u = i; l < u.length; l++) {
                    var c = u[l];
                    if (util.arraysEqual(c, o)) {
                        s = !0;
                        break
                    }
                }
                s || i.push(o)
            }
            if (i.length > 1) throw new ValueError("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: " + JSON.stringify(e))
        }
    }, t.prototype.mergeFunction = function (e) {
        var t = this;
        return tidy(function () {
            return concatenate(e, t.axis)
        })
    }, t.prototype.computeOutputShape = function (e) {
        if (!Array.isArray(e) || !Array.isArray(e[0])) throw new ValueError("A `Concatenate` layer should be called on a list of inputs.");
        for (var t = e, n = t[0].slice(), r = this.axis < 0 ? n.length + this.axis : this.axis, i = 0, a = t.slice(1); i < a.length; i++) {
            var o = a[i];
            if (null == n[r] || null == o[r]) {
                n[r] = null;
                break
            }
            n[r] += o[r]
        }
        return n
    }, t.prototype.computeMask = function (e, t) {
        var n = this;
        if (null == t) return null;
        if (!Array.isArray(t)) throw new ValueError("`mask` should be an array for Concatenate");
        if (!Array.isArray(e)) throw new ValueError("`inputs` should be an array for Concatenate");
        if (t.length !== e.length) throw new ValueError("Mismatch in the length of mask (" + t.length + ") and the legnth of inputs (" + e.length + ")");
        return tidy(function () {
            var r = !0;
            if (t.forEach(function (e) {
                null == e || (r = !1)
            }), r) return null;
            for (var i = [], a = 0; a < e.length; ++a) null == t[a] ? i.push(onesLike(e[a]).asType("bool")) : t[a].rank < e[a].rank ? i.push(expandDims(t[a], -1)) : i.push(t[a]);
            var o = concat(i, n.axis);
            return all(o, -1, !1)
        })
    }, t.prototype.getConfig = function () {
        var t = {axis: this.axis}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "Concatenate", t
}(Merge);

function interpretAxis(e, t) {
    for (; e < 0;) e += t;
    return e
}

function batchDot(e, t, n) {
    if (e.shape.length > 3 || t.shape.length > 3) throw new NotImplementedError("batchDot is not implemented for tensors of 4D or higher rank yet");
    if (util.assert(e.shape.length >= 2, "batchDot requires the rank of x to be >= 2, but got " + e.shape.length), util.assert(e.shape.length >= 2, "batchDot requires the rank of y to be >= 2, but got " + t.shape.length), "number" == typeof n && (n = [n, n]), "complex64" === e.dtype || "complex64" === t.dtype) throw new NotImplementedError("batchDot is not implemented for complex64-type Tensors yet.");
    var r = e.shape.length, i = t.shape.length;
    null == n && (n = [r - 1, i - 2]);
    var a = n;
    return tidy(function () {
        var n, o;
        if (r > i) {
            n = r - i;
            for (var s = [], l = 0; l < n; ++l) s.push(1);
            t = t.reshape(t.shape.concat(s))
        } else if (i > r) {
            n = i - r;
            for (s = [], l = 0; l < n; ++l) s.push(1);
            e = e.reshape(e.shape.concat(s))
        } else n = 0;
        if (2 === e.shape.length && 2 === t.shape.length) o = a[0] === a[1] ? e.mulStrict(t).sum(a[0]) : e.transpose([1, 0]).mulStrict(t).sum(a[1]); else {
            var u = a[0] !== e.shape.length - 1 || null, c = a[1] === t.shape.length - 1 || null;
            o = e.matMul(t, u, c)
        }
        if (n > 0) {
            var h = void 0, p = [];
            for (l = h = r > i ? r + i - 3 : r - 1; l < h + n; ++l) p.push(l);
            o = o.squeeze(p)
        }
        return 1 === o.shape.length && (o = o.expandDims(1)), o
    })
}

serialization.registerClass(Concatenate);
var Dot = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        return n.axes = t.axes, n.normalize = null != t.normalize && t.normalize, n.supportsMasking = !0, n.reshapeRequired = !1, n
    }

    return __extends(t, e), t.prototype.build = function (e) {
        util.assert(Array.isArray(e) && 2 === e.length && Array.isArray(e[0]) && Array.isArray(e[1]), "A `Dot` layer should be called on a list of exactly 2 inputs.");
        var t = e[0], n = e[1];
        if (t.length > 3 || n.length > 3) throw new NotImplementedError("Dot layer does not support tensors of 4D or higher rank yet.");
        var r = this.interpretAxes(t, n);
        if (t[r[0]] !== n[r[1]]) throw new ValueError("Dimension incompatibility: " + t[r[0]] + " !== " + n[r[1]])
    }, t.prototype.mergeFunction = function (e) {
        if (2 !== e.length) throw new ValueError("A `Dot` layer must be called on exactly 2 inputs, but received " + e.length + " input(s).");
        var t, n = e[0], r = e[1];
        return t = Array.isArray(this.axes) ? this.axes.map(function (t, n) {
            return interpretAxis(t, e[n].shape.length)
        }) : [interpretAxis(this.axes, n.shape.length), interpretAxis(this.axes, r.shape.length)], this.normalize && (n = l2Normalize(n, t[0]), r = l2Normalize(r, t[1])), batchDot(n, r, t)
    }, t.prototype.interpretAxes = function (e, t) {
        return Array.isArray(this.axes) ? this.axes : [interpretAxis(this.axes, e.length), interpretAxis(this.axes, t.length)]
    }, t.prototype.computeOutputShape = function (e) {
        util.assert(Array.isArray(e) && 2 === e.length && Array.isArray(e[0]) && Array.isArray(e[1]), "A `Dot` layer should be called on a list of exactly 2 inputs.");
        var t = e[0].slice(), n = e[1].slice();
        if (t.length > 3 || n.length > 3) throw new NotImplementedError("Dot layer does not support tensors of 4D or higher rank yet.");
        var r = this.interpretAxes(t, n);
        t.splice(r[0], 1), n.splice(r[1], 1), n.splice(0, 1);
        var i = t.concat(n);
        return 1 === i.length && i.push(1), i
    }, t.prototype.computeMask = function (e, t) {
        return null
    }, t.prototype.getConfig = function () {
        var t = {axes: this.axes, normalize: this.normalize}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "Dot", t
}(Merge);

function batchNormalization(e, t, n, r, i, a) {
    var o;
    if (void 0 === a && (a = .001), 2 === e.rank) o = batchNormalization2d(e, t, n, a, i, r); else if (3 === e.rank) o = batchNormalization3d(e, t, n, a, i, r); else {
        if (4 !== e.rank) throw new NotImplementedError("batchNormalization is not implemented for array of rank " + e.rank + " yet");
        o = batchNormalization4d(e, t, n, a, i, r)
    }
    return o
}

function regularNormalizeBatchInTraining(e, t, n, r, i) {
    return void 0 === i && (i = .001), tidy(function () {
        var a = moments(e, r), o = a.mean, s = a.variance;
        return [batchNormalization(e, o, s, n, t, i), o, s]
    })
}

function broadcastNormalizeBatchInTraining(e, t, n, r, i) {
    return void 0 === i && (i = .001), tidy(function () {
        for (var a = moments(e, r), o = a.mean, s = a.variance, l = [], u = 0, c = range(0, e.rank); u < c.length; u++) {
            var h = c[u];
            -1 !== r.indexOf(h) ? l.push(1) : l.push(e.shape[h])
        }
        var p = o.reshape(l), d = s.reshape(l), g = null == t ? null : t.reshape(l),
            f = null == n ? null : n.reshape(l);
        return [batchNormalization(e, p, d, f, g, i), o, s]
    })
}

function normalizeBatchInTraining(e, t, n, r, i) {
    return void 0 === i && (i = .001), util.arraysEqual(r.slice().sort(), range(0, e.rank - 1)) ? regularNormalizeBatchInTraining(e, t, n, r, i) : broadcastNormalizeBatchInTraining(e, t, n, r, i)
}

serialization.registerClass(Dot);
var BatchNormalization = function (e) {
    function t(t) {
        var n = this;
        return null == t && (t = {}), (n = e.call(this, t) || this).supportsMasking = !0, n.axis = null == t.axis ? -1 : t.axis, n.momentum = null == t.momentum ? .99 : t.momentum, n.epsilon = null == t.epsilon ? .001 : t.epsilon, n.center = null == t.center || t.center, n.scale = null == t.scale || t.scale, n.betaInitializer = getInitializer(t.betaInitializer || "zeros"), n.gammaInitializer = getInitializer(t.gammaInitializer || "ones"), n.movingMeanInitializer = getInitializer(t.movingMeanInitializer || "zeros"), n.movingVarianceInitializer = getInitializer(t.movingVarianceInitializer || "ones"), n.betaConstraint = getConstraint(t.betaConstraint), n.gammaConstraint = getConstraint(t.gammaConstraint), n.betaRegularizer = getRegularizer(t.betaRegularizer), n.gammaRegularizer = getRegularizer(t.gammaRegularizer), n
    }

    return __extends(t, e), t.prototype.build = function (e) {
        e = getExactlyOneShape(e);
        var t = this.axis >= 0 ? this.axis : this.axis + e.length, n = e[t];
        if (null == n) throw new ValueError("Axis " + t + " of input tensor should have a defined dimension but the layer received an input with shape " + JSON.stringify(e) + ".");
        this.inputSpec = [new InputSpec({ndim: e.length, axes: (r = {}, r[t] = n, r)})];
        var r, i = [n];
        this.scale && (this.gamma = this.addWeight("gamma", i, null, this.gammaInitializer, this.gammaRegularizer, !0, this.gammaConstraint)), this.center && (this.beta = this.addWeight("beta", i, null, this.betaInitializer, this.betaRegularizer, !0, this.betaConstraint)), this.movingMean = this.addWeight("moving_mean", i, null, this.movingMeanInitializer, null, !1), this.movingVariance = this.addWeight("moving_variance", i, null, this.movingVarianceInitializer, null, !1), this.built = !0
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            var r = null != t.training && t.training, i = getExactlyOneTensor(e), a = i.shape, o = a.length,
                s = range(0, o), l = n.axis >= 0 ? n.axis : n.axis + o;
            s.splice(l, 1);
            var u = pyListRepeat(1, o);
            u[l] = a[l];
            var c = s.slice();
            c.sort();
            var h = !util.arraysEqual(c, range(0, o).slice(0, o - 1));
            if (!r) return function () {
                if (h) {
                    var e = n.movingMean.read().reshape(u), t = n.movingVariance.read().reshape(u),
                        r = n.center ? n.beta.read().reshape(u) : null, a = n.scale ? n.gamma.read().reshape(u) : null;
                    return batchNormalization(i, e, t, r, a, n.epsilon)
                }
                return batchNormalization(i, n.movingMean.read(), n.movingVariance.read(), null == n.beta ? null : n.beta.read(), null == n.gamma ? null : n.gamma.read(), n.epsilon)
            }();
            var p = normalizeBatchInTraining(i, n.gamma.read(), n.beta.read(), s, n.epsilon), d = p[0], g = p[1],
                f = p[2], m = function (e, t, n) {
                    tidy(function () {
                        var r = getScalar(1).sub(getScalar(n)), i = e.read(), a = i.sub(t).mul(r);
                        e.write(i.sub(a))
                    })
                };
            return m(n.movingMean, g, n.momentum), m(n.movingVariance, f, n.momentum), d
        })
    }, t.prototype.getConfig = function () {
        var t = {
            axis: this.axis,
            momentum: this.momentum,
            epsilon: this.epsilon,
            center: this.center,
            scale: this.scale,
            betaInitializer: serializeInitializer(this.betaInitializer),
            gammaInitializer: serializeInitializer(this.gammaInitializer),
            movingMeanInitializer: serializeInitializer(this.movingMeanInitializer),
            movingVarianceInitializer: serializeInitializer(this.movingVarianceInitializer),
            betaRegularizer: serializeRegularizer(this.betaRegularizer),
            gammaRegularizer: serializeRegularizer(this.gammaRegularizer),
            betaConstraint: serializeConstraint(this.betaConstraint),
            gammaConstraint: serializeConstraint(this.gammaConstraint)
        }, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "BatchNormalization", t
}(Layer);

function spatial2dPadding(e, t, n) {
    return tidy(function () {
        if (4 !== e.rank) throw new ValueError("temporalPadding expects input tensor to be 4-D, but received a " + e.rank + "-D tensor.");
        if (null == t && (t = [[1, 1], [1, 1]]), 2 !== t.length || 2 !== t[0].length || 2 !== t[1].length) throw new ValueError("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");
        if (null == n && (n = imageDataFormat()), "channelsLast" !== n && "channelsFirst" !== n) throw new ValueError("Unknown data format: " + n + ". Supported data formats are 'channelsLast' and 'channelsFirst.");
        var r;
        return r = "channelsFirst" === n ? [[0, 0], [0, 0], t[0], t[1]] : [[0, 0], t[0], t[1], [0, 0]], pad(e, r)
    })
}

serialization.registerClass(BatchNormalization);
var ZeroPadding2D = function (e) {
    function t(t) {
        var n = this;
        if (null == t && (t = {}), (n = e.call(this, t) || this).dataFormat = null == t.dataFormat ? imageDataFormat() : t.dataFormat, null == t.padding) n.padding = [[1, 1], [1, 1]]; else if ("number" == typeof t.padding) n.padding = [[t.padding, t.padding], [t.padding, t.padding]]; else {
            if (t.padding = t.padding, 2 !== t.padding.length) throw new ValueError("ZeroPadding2D expects padding to be a length-2 array, but received a length-" + t.padding.length + " array.");
            var r = void 0, i = void 0;
            if ("number" == typeof t.padding[0]) r = [t.padding[0], t.padding[0]], i = [t.padding[1], t.padding[1]]; else {
                if (t.padding = t.padding, 2 !== t.padding[0].length) throw new ValueError("ZeroPadding2D expects height padding to be a length-2 array, but received a length-" + t.padding[0].length + " array.");
                if (r = t.padding[0], 2 !== t.padding[1].length) throw new ValueError("ZeroPadding2D expects width padding to be a length-2 array, but received a length-" + t.padding[1].length + " array.");
                i = t.padding[1]
            }
            n.padding = [r, i]
        }
        return n.inputSpec = [new InputSpec({ndim: 4})], n
    }

    return __extends(t, e), t.prototype.computeOutputShape = function (e) {
        var t, n;
        return e = getExactlyOneShape(e), "channelsFirst" === this.dataFormat ? (t = null != e[2] && e[2] >= 0 ? e[2] + this.padding[0][0] + this.padding[0][1] : null, n = null != e[3] && e[3] >= 0 ? e[3] + this.padding[1][0] + this.padding[1][1] : null, [e[0], e[1], t, n]) : (t = null != e[1] && e[1] >= 0 ? e[1] + this.padding[0][0] + this.padding[0][1] : null, n = null != e[2] && e[2] >= 0 ? e[2] + this.padding[1][0] + this.padding[1][1] : null, [e[0], t, n, e[3]])
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            return spatial2dPadding(getExactlyOneTensor(e), n.padding, n.dataFormat)
        })
    }, t.prototype.getConfig = function () {
        var t = {padding: this.padding, dataFormat: this.dataFormat}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "ZeroPadding2D", t
}(Layer);

function pool2d(e, t, n, r, i, a) {
    return tidy(function () {
        var o;
        checkDataFormat(i), checkPoolMode(a), checkPaddingMode(r), null == n && (n = [1, 1]), null == r && (r = "valid"), null == i && (i = imageDataFormat()), null == a && (a = "max"), e = preprocessConv2DInput(e, i);
        var s = "same" === r ? "same" : "valid";
        return o = "max" === a ? maxPool(e, t, n, s) : avgPool(e, t, n, s), "channelsFirst" === i && (o = transpose(o, [0, 3, 1, 2])), o
    })
}

serialization.registerClass(ZeroPadding2D);
var Pooling1D = function (e) {
    function t(t) {
        var n = this;
        if (null == t.poolSize && (t.poolSize = 2), n = e.call(this, t) || this, "number" == typeof t.poolSize) n.poolSize = [t.poolSize]; else {
            if (!Array.isArray(t.poolSize) || 1 !== t.poolSize.length || "number" != typeof t.poolSize[0]) throw new ValueError("poolSize for 1D convolutional layer must be a number or an Array of a single number, but received " + JSON.stringify(t.poolSize));
            n.poolSize = t.poolSize
        }
        if (null == t.strides) n.strides = n.poolSize; else if ("number" == typeof t.strides) n.strides = [t.strides]; else {
            if (!Array.isArray(t.strides) || 1 !== t.strides.length || "number" != typeof t.strides[0]) throw new ValueError("strides for 1D convolutional layer must be a number or an Array of a single number, but received " + JSON.stringify(t.strides));
            n.strides = t.strides
        }
        return n.padding = null == t.padding ? "valid" : t.padding, checkPaddingMode(n.padding), n.inputSpec = [new InputSpec({ndim: 3})], n
    }

    return __extends(t, e), t.prototype.computeOutputShape = function (e) {
        var t = convOutputLength((e = getExactlyOneShape(e))[1], this.poolSize[0], this.padding, this.strides[0]);
        return [e[0], t, e[2]]
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            n.invokeCallHook(e, t), e = expandDims$1(getExactlyOneTensor(e), 2);
            var r = n.poolingFunction(getExactlyOneTensor(e), [n.poolSize[0], 1], [n.strides[0], 1], n.padding, "channelsLast");
            return squeeze(r, [2])
        })
    }, t.prototype.getConfig = function () {
        var t = {poolSize: this.poolSize, padding: this.padding, strides: this.strides},
            n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t
}(Layer), MaxPooling1D = function (e) {
    function t(t) {
        return e.call(this, t) || this
    }

    return __extends(t, e), t.prototype.poolingFunction = function (e, t, n, r, i) {
        return checkDataFormat(i), checkPaddingMode(r), pool2d(e, t, n, r, i, "max")
    }, t.className = "MaxPooling1D", t
}(Pooling1D);
serialization.registerClass(MaxPooling1D);
var AveragePooling1D = function (e) {
    function t(t) {
        return e.call(this, t) || this
    }

    return __extends(t, e), t.prototype.poolingFunction = function (e, t, n, r, i) {
        return checkDataFormat(i), checkPaddingMode(r), pool2d(e, t, n, r, i, "avg")
    }, t.className = "AveragePooling1D", t
}(Pooling1D);
serialization.registerClass(AveragePooling1D);
var Pooling2D = function (e) {
    function t(t) {
        var n = this;
        if (null == t.poolSize && (t.poolSize = [2, 2]), (n = e.call(this, t) || this).poolSize = Array.isArray(t.poolSize) ? t.poolSize : [t.poolSize, t.poolSize], null == t.strides) n.strides = n.poolSize; else if (Array.isArray(t.strides)) {
            if (2 !== t.strides.length) throw new ValueError("If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length " + t.strides.length + ".");
            n.strides = t.strides
        } else n.strides = [t.strides, t.strides];
        return n.padding = null == t.padding ? "valid" : t.padding, n.dataFormat = null == t.dataFormat ? "channelsLast" : t.dataFormat, checkDataFormat(n.dataFormat), checkPaddingMode(n.padding), n.inputSpec = [new InputSpec({ndim: 4})], n
    }

    return __extends(t, e), t.prototype.computeOutputShape = function (e) {
        e = getExactlyOneShape(e);
        var t = "channelsFirst" === this.dataFormat ? e[2] : e[1],
            n = "channelsFirst" === this.dataFormat ? e[3] : e[2];
        return t = convOutputLength(t, this.poolSize[0], this.padding, this.strides[0]), n = convOutputLength(n, this.poolSize[1], this.padding, this.strides[1]), "channelsFirst" === this.dataFormat ? [e[0], e[1], t, n] : [e[0], t, n, e[3]]
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            return n.invokeCallHook(e, t), n.poolingFunction(getExactlyOneTensor(e), n.poolSize, n.strides, n.padding, n.dataFormat)
        })
    }, t.prototype.getConfig = function () {
        var t = {poolSize: this.poolSize, padding: this.padding, strides: this.strides, dataFormat: this.dataFormat},
            n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t
}(Layer), MaxPooling2D = function (e) {
    function t(t) {
        return e.call(this, t) || this
    }

    return __extends(t, e), t.prototype.poolingFunction = function (e, t, n, r, i) {
        return checkDataFormat(i), checkPaddingMode(r), pool2d(e, t, n, r, i, "max")
    }, t.className = "MaxPooling2D", t
}(Pooling2D);
serialization.registerClass(MaxPooling2D);
var AveragePooling2D = function (e) {
    function t(t) {
        return e.call(this, t) || this
    }

    return __extends(t, e), t.prototype.poolingFunction = function (e, t, n, r, i) {
        return checkDataFormat(i), checkPaddingMode(r), pool2d(e, t, n, r, i, "avg")
    }, t.className = "AveragePooling2D", t
}(Pooling2D);
serialization.registerClass(AveragePooling2D);
var GlobalPooling1D = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        return n.inputSpec = [new InputSpec({ndim: 3})], n
    }

    return __extends(t, e), t.prototype.computeOutputShape = function (e) {
        return [e[0], e[2]]
    }, t.prototype.call = function (e, t) {
        throw new NotImplementedError
    }, t
}(Layer), GlobalAveragePooling1D = function (e) {
    function t(t) {
        return e.call(this, t) || this
    }

    return __extends(t, e), t.prototype.call = function (e, t) {
        return tidy(function () {
            var t = getExactlyOneTensor(e);
            return mean(t, 1)
        })
    }, t.className = "GlobalAveragePooling1D", t
}(GlobalPooling1D);
serialization.registerClass(GlobalAveragePooling1D);
var GlobalMaxPooling1D = function (e) {
    function t(t) {
        return e.call(this, t) || this
    }

    return __extends(t, e), t.prototype.call = function (e, t) {
        return tidy(function () {
            var t = getExactlyOneTensor(e);
            return max(t, 1)
        })
    }, t.className = "GlobalMaxPooling1D", t
}(GlobalPooling1D);
serialization.registerClass(GlobalMaxPooling1D);
var GlobalPooling2D = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        return n.dataFormat = null == t.dataFormat ? "channelsLast" : t.dataFormat, checkDataFormat(n.dataFormat), n.inputSpec = [new InputSpec({ndim: 4})], n
    }

    return __extends(t, e), t.prototype.computeOutputShape = function (e) {
        return e = e, "channelsLast" === this.dataFormat ? [e[0], e[3]] : [e[0], e[1]]
    }, t.prototype.call = function (e, t) {
        throw new NotImplementedError
    }, t.prototype.getConfig = function () {
        var t = {dataFormat: this.dataFormat}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t
}(Layer), GlobalAveragePooling2D = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            var t = getExactlyOneTensor(e);
            return "channelsLast" === n.dataFormat ? mean(t, [1, 2]) : mean(t, [2, 3])
        })
    }, t.className = "GlobalAveragePooling2D", t
}(GlobalPooling2D);
serialization.registerClass(GlobalAveragePooling2D);
var GlobalMaxPooling2D = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            var t = getExactlyOneTensor(e);
            return "channelsLast" === n.dataFormat ? max(t, [1, 2]) : max(t, [2, 3])
        })
    }, t.className = "GlobalMaxPooling2D", t
}(GlobalPooling2D);

function standardizeArgs(e, t, n, r) {
    if (Array.isArray(e)) {
        if (null != t || null != n) throw new ValueError("When inputs is an array, neither initialState or constants should be provided");
        null != r && (n = e.slice(e.length - r, e.length), e = e.slice(0, e.length - r)), e.length > 1 && (t = e.slice(1, e.length)), e = e[0]
    }

    function i(e) {
        return null == e || Array.isArray(e) ? e : [e]
    }

    return {inputs: e, initialState: t = i(t), constants: n = i(n)}
}

function rnn(e, t, n, r, i, a, o, s) {
    return void 0 === r && (r = !1), void 0 === o && (o = !1), void 0 === s && (s = !1), tidy(function () {
        var l = t.shape.length;
        if (l < 3) throw new ValueError("Input should be at least 3D, but is " + l + "D.");
        var u = [1, 0].concat(range(2, l));
        if (t = transpose(t, u), null != a) throw new NotImplementedError("The rnn() functoin of the deeplearn.js backend does not support constants yet.");
        o && console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."), null != i && ((i = i.asType("bool").asType("float32")).rank === l - 1 && (i = expandDims(i, -1)), i = transpose(i, u)), r && (t = reverse(t, 0), null != i && (i = reverse(i, 0)));
        var c, h, p = [], d = n, g = t.shape[0], f = unstack(t);
        null != i && (h = unstack(i));
        for (var m, y = function (t) {
            var n = f[t], r = tidy(function () {
                return e(n, d)
            });
            if (null == i) c = r[0], d = r[1]; else {
                var a = tidy(function () {
                    var e = h[t], n = onesLike(e).sub(e);
                    return {
                        output: r[0].mul(e).addStrict(d[0].mul(n)), newStates: d.map(function (t, i) {
                            return r[1][i].mul(e).addStrict(t.mul(n))
                        })
                    }
                });
                c = a.output, d = a.newStates
            }
            s && p.push(c)
        }, v = 0; v < g; ++v) y(v);
        if (s) {
            m = stack(p, 1)
        }
        return [c, m, d]
    })
}

serialization.registerClass(GlobalMaxPooling2D);
var RNN = function (e) {
    function t(t) {
        var n, r = e.call(this, t) || this;
        if (null == t.cell) throw new ValueError("cell property is missing for the constructor of RNN.");
        if (null == (n = Array.isArray(t.cell) ? new StackedRNNCells({cells: t.cell}) : t.cell).stateSize) throw new ValueError("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");
        return r.cell = n, r.returnSequences = null != t.returnSequences && t.returnSequences, r.returnState = null != t.returnState && t.returnState, r.goBackwards = null != t.goBackwards && t.goBackwards, r._stateful = null != t.stateful && t.stateful, r.unroll = null != t.unroll && t.unroll, r.supportsMasking = !0, r.inputSpec = [new InputSpec({ndim: 3})], r.stateSpec = null, r.states_ = null, r.numConstants = null, r.keptStates = [], r
    }

    return __extends(t, e), t.prototype.getStates = function () {
        return null == this.states_ ? range(0, Array.isArray(this.cell.stateSize) ? this.cell.stateSize.length : 1).map(function (e) {
            return null
        }) : this.states_
    }, t.prototype.setStates = function (e) {
        this.states_ = e
    }, t.prototype.computeOutputShape = function (e) {
        isArrayOfShapes(e) && (e = e[0]), e = e;
        var t = this.cell.stateSize;
        Array.isArray(t) || (t = [t]);
        var n, r = t[0];
        if (n = this.returnSequences ? [e[0], e[1], r] : [e[0], r], this.returnState) {
            for (var i = [], a = 0, o = t; a < o.length; a++) {
                var s = o[a];
                i.push([e[0], s])
            }
            return [n].concat(i)
        }
        return n
    }, t.prototype.computeMask = function (e, t) {
        var n = this;
        return tidy(function () {
            Array.isArray(t) && (t = t[0]);
            var e = n.returnSequences ? t : null;
            if (n.returnState) {
                var r = n.states.map(function (e) {
                    return null
                });
                return [e].concat(r)
            }
            return e
        })
    }, Object.defineProperty(t.prototype, "states", {
        get: function () {
            if (null == this.states_) {
                for (var e = Array.isArray(this.cell.stateSize) ? this.cell.stateSize.length : 1, t = [], n = 0; n < e; ++n) t.push(null);
                return t
            }
            return this.states_
        }, set: function (e) {
            this.states_ = e
        }, enumerable: !0, configurable: !0
    }), t.prototype.build = function (e) {
        if (null != this.numConstants) throw new NotImplementedError("Constants support is not implemented in RNN yet.");
        isArrayOfShapes(e) && (e = e[0]), e = e;
        var t = this.stateful ? e[0] : null, n = e[e.length - 1];
        this.inputSpec[0] = new InputSpec({shape: [t, null, n]});
        var r, i = [e[0]].concat(e.slice(2));
        if (this.cell.build(i), r = Array.isArray(this.cell.stateSize) ? this.cell.stateSize : [this.cell.stateSize], null != this.stateSpec) {
            if (!util.arraysEqual(this.stateSpec.map(function (e) {
                return e.shape[e.shape.length - 1]
            }), r)) throw new ValueError("An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=" + this.stateSpec + "; However cell.stateSize is " + this.cell.stateSize)
        } else this.stateSpec = r.map(function (e) {
            return new InputSpec({shape: [null, e]})
        });
        this.stateful && this.resetStates()
    }, t.prototype.resetStates = function (e, t) {
        var n = this;
        void 0 === t && (t = !1), tidy(function () {
            if (!n.stateful) throw new AttributeError("Cannot call resetStates() on an RNN Layer that is not stateful.");
            var r = n.inputSpec[0].shape[0];
            if (null == r) throw new ValueError("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");
            if (null == n.states_) Array.isArray(n.cell.stateSize) ? n.states_ = n.cell.stateSize.map(function (e) {
                return zeros([r, e])
            }) : n.states_ = [zeros([r, n.cell.stateSize])]; else if (null == e) dispose(n.states_), null != n.keptStates && (dispose(n.keptStates), n.keptStates = []), Array.isArray(n.cell.stateSize) ? n.states_ = n.cell.stateSize.map(function (e) {
                return zeros([r, e])
            }) : n.states_[0] = zeros([r, n.cell.stateSize]); else {
                if (Array.isArray(e) || (e = [e]), e.length !== n.states_.length) throw new ValueError("Layer " + n.name + " expects " + n.states_.length + " state(s), but it received " + e.length + " state value(s). Input received: " + e);
                !0 === t ? n.keptStates.push(n.states_.slice()) : dispose(n.states_);
                for (var i = 0; i < n.states_.length; ++i) {
                    var a = e[i], o = Array.isArray(n.cell.stateSize) ? n.cell.stateSize[i] : n.cell.stateSize,
                        s = [r, o];
                    if (!util.arraysEqual(a.shape, s)) throw new ValueError("State " + i + " is incompatible with layer " + n.name + ": expected shape=" + s + ", received shape=" + a.shape);
                    n.states_[i] = a
                }
            }
            n.states_.forEach(function (e) {
                return keep(e)
            })
        })
    }, t.prototype.apply = function (t, n) {
        var r = null == n ? null : n.initialState, i = null == n ? null : n.constants;
        null == n && (n = {});
        var a = standardizeArgs(t, r, i, this.numConstants);
        t = a.inputs, r = a.initialState, i = a.constants;
        var o = [], s = [];
        if (null != r) {
            n.initialState = r, o = o.concat(r), this.stateSpec = [];
            for (var l = 0, u = r; l < u.length; l++) {
                var c = u[l];
                this.stateSpec.push(new InputSpec({shape: c.shape}))
            }
            s = s.concat(this.stateSpec)
        }
        if (null != i && (n.constants = i, o = o.concat(i), this.numConstants = i.length), o[0] instanceof SymbolicTensor) {
            var h = [t].concat(o), p = this.inputSpec.concat(s), d = this.inputSpec;
            this.inputSpec = p;
            var g = e.prototype.apply.call(this, h, n);
            return this.inputSpec = d, g
        }
        return e.prototype.apply.call(this, t, n)
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            var r = null == t ? null : t.mask, i = null == t ? null : t.training, a = null == t ? null : t.initialState;
            e = getExactlyOneTensor(e), null == a && (a = n.stateful ? n.states_ : n.getInitialState(e));
            var o = Array.isArray(n.cell.stateSize) ? n.cell.stateSize.length : 1;
            if (a.length !== o) throw new ValueError("RNN Layer has " + o + " state(s) but was passed " + a.length + " initial state(s).");
            n.unroll && console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");
            var s = {training: i}, l = rnn(function (e, t) {
                var r = n.cell.call([e].concat(t), s);
                return [r[0], r.slice(1)]
            }, e, a, n.goBackwards, r, null, n.unroll, n.returnSequences), u = l[0], c = l[1], h = l[2];
            n.stateful && n.resetStates(h, i);
            var p = n.returnSequences ? c : u;
            return n.returnState ? [p].concat(h) : p
        })
    }, t.prototype.getInitialState = function (e) {
        var t = this;
        return tidy(function () {
            var n = zeros(e.shape);
            return n = expandDims$1(n = sum(n, [1, 2])), Array.isArray(t.cell.stateSize) ? t.cell.stateSize.map(function (e) {
                return e > 1 ? tile$1(n, [1, e]) : n
            }) : t.cell.stateSize > 1 ? [tile$1(n, [1, t.cell.stateSize])] : [n]
        })
    }, Object.defineProperty(t.prototype, "trainableWeights", {
        get: function () {
            return this.trainable ? this.cell.trainableWeights : []
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "nonTrainableWeights", {
        get: function () {
            return this.trainable ? this.cell.nonTrainableWeights : this.cell.weights
        }, enumerable: !0, configurable: !0
    }), t.prototype.setFastWeightInitDuringBuild = function (t) {
        e.prototype.setFastWeightInitDuringBuild.call(this, t), null != this.cell && this.cell.setFastWeightInitDuringBuild(t)
    }, t.prototype.getConfig = function () {
        var t = {
            returnSequences: this.returnSequences,
            returnState: this.returnState,
            goBackwards: this.goBackwards,
            stateful: this.stateful,
            unroll: this.unroll
        };
        null != this.numConstants && (t.numConstants = this.numConstants);
        var n = this.cell.getConfig();
        t.cell = {className: this.cell.getClassName(), config: n};
        var r = e.prototype.getConfig.call(this);
        return Object.assign(t, r), t
    }, t.className = "RNN", t
}(Layer);
serialization.registerClass(RNN);
var RNNCell = function (e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }

    return __extends(t, e), t
}(Layer), SimpleRNNCell = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        return n.DEFAULT_ACTIVATION = "tanh", n.DEFAULT_KERNEL_INITIALIZER = "glorotNormal", n.DEFAULT_RECURRENT_INITIALIZER = "orthogonal", n.DEFAULT_BIAS_INITIALIZER = "zeros", n.units = t.units, n.activation = getActivation(null == t.activation ? n.DEFAULT_ACTIVATION : t.activation), n.useBias = null == t.useBias || t.useBias, n.kernelInitializer = getInitializer(t.kernelInitializer || n.DEFAULT_KERNEL_INITIALIZER), n.recurrentInitializer = getInitializer(t.recurrentInitializer || n.DEFAULT_RECURRENT_INITIALIZER), n.biasInitializer = getInitializer(t.biasInitializer || n.DEFAULT_BIAS_INITIALIZER), n.kernelRegularizer = getRegularizer(t.kernelRegularizer), n.recurrentRegularizer = getRegularizer(t.recurrentRegularizer), n.biasRegularizer = getRegularizer(t.biasRegularizer), n.kernelConstraint = getConstraint(t.kernelConstraint), n.recurrentConstraint = getConstraint(t.recurrentConstraint), n.biasConstraint = getConstraint(t.biasConstraint), n.dropout = min$1([1, max$1([0, null == t.dropout ? 0 : t.dropout])]), n.recurrentDropout = min$1([1, max$1([0, null == t.recurrentDropout ? 0 : t.recurrentDropout])]), n.stateSize = n.units, n.dropoutMask = null, n.recurrentDropoutMask = null, n
    }

    return __extends(t, e), t.prototype.build = function (e) {
        e = getExactlyOneShape(e), this.kernel = this.addWeight("kernel", [e[e.length - 1], this.units], null, this.kernelInitializer, this.kernelRegularizer, !0, this.kernelConstraint), this.recurrentKernel = this.addWeight("recurrent_kernel", [this.units, this.units], null, this.recurrentInitializer, this.recurrentRegularizer, !0, this.recurrentConstraint), this.useBias ? this.bias = this.addWeight("bias", [this.units], null, this.biasInitializer, this.biasRegularizer, !0, this.biasConstraint) : this.bias = null, this.built = !0
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            if (2 !== (e = e).length) throw new ValueError("SimpleRNNCell expects 2 input Tensors, got " + e.length + ".");
            var r = e[1];
            e = e[0];
            var i, a = null != t.training && t.training;
            0 < n.dropout && n.dropout < 1 && null == n.dropoutMask && (n.dropoutMask = generateDropoutMask(function () {
                return onesLike(e)
            }, n.dropout, a)), 0 < n.recurrentDropout && n.recurrentDropout < 1 && null == n.recurrentDropoutMask && (n.recurrentDropoutMask = generateDropoutMask(function () {
                return onesLike(r)
            }, n.recurrentDropout, a));
            var o = n.dropoutMask, s = n.recurrentDropoutMask;
            i = dot(null != o ? mul(e, o) : e, n.kernel.read()), null != n.bias && (i = biasAdd(i, n.bias.read())), null != s && (r = mul(r, s));
            var l = add(i, dot(r, n.recurrentKernel.read()));
            return null != n.activation && (l = n.activation.apply(l)), [l, l]
        })
    }, t.prototype.getConfig = function () {
        var t = {
            units: this.units,
            activation: serializeActivation(this.activation),
            useBias: this.useBias,
            kernelInitializer: serializeInitializer(this.kernelInitializer),
            recurrentInitializer: serializeInitializer(this.recurrentInitializer),
            biasInitializer: serializeInitializer(this.biasInitializer),
            kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
            recurrentRegularizer: serializeRegularizer(this.recurrentRegularizer),
            biasRegularizer: serializeRegularizer(this.biasRegularizer),
            activityRegularizer: serializeRegularizer(this.activityRegularizer),
            kernelConstraint: serializeConstraint(this.kernelConstraint),
            recurrentConstraint: serializeConstraint(this.recurrentConstraint),
            biasConstraint: serializeConstraint(this.biasConstraint),
            dropout: this.dropout,
            recurrentDropout: this.recurrentDropout
        }, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "SimpleRNNCell", t
}(RNNCell);
serialization.registerClass(SimpleRNNCell);
var SimpleRNN = function (e) {
    function t(t) {
        return t.cell = new SimpleRNNCell(t), e.call(this, t) || this
    }

    return __extends(t, e), t.prototype.call = function (t, n) {
        var r = this;
        return tidy(function () {
            null != r.cell.dropoutMask && (dispose(r.cell.dropoutMask), r.cell.dropoutMask = null), null != r.cell.recurrentDropoutMask && (dispose(r.cell.recurrentDropoutMask), r.cell.recurrentDropoutMask = null);
            var i = null == n ? null : n.mask, a = null == n ? null : n.training, o = null == n ? null : n.initialState;
            return e.prototype.call.call(r, t, {mask: i, training: a, initialState: o})
        })
    }, Object.defineProperty(t.prototype, "units", {
        get: function () {
            return this.cell.units
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "activation", {
        get: function () {
            return this.cell.activation
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "useBias", {
        get: function () {
            return this.cell.useBias
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "kernelInitializer", {
        get: function () {
            return this.cell.kernelInitializer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "recurrentInitializer", {
        get: function () {
            return this.cell.recurrentInitializer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "biasInitializer", {
        get: function () {
            return this.cell.biasInitializer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "kernelRegularizer", {
        get: function () {
            return this.cell.kernelRegularizer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "recurrentRegularizer", {
        get: function () {
            return this.cell.recurrentRegularizer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "biasRegularizer", {
        get: function () {
            return this.cell.biasRegularizer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "kernelConstraint", {
        get: function () {
            return this.cell.kernelConstraint
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "recurrentConstraint", {
        get: function () {
            return this.cell.recurrentConstraint
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "biasConstraint", {
        get: function () {
            return this.cell.biasConstraint
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "dropout", {
        get: function () {
            return this.cell.dropout
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "recurrentDropout", {
        get: function () {
            return this.cell.recurrentDropout
        }, enumerable: !0, configurable: !0
    }), t.prototype.getConfig = function () {
        var t = {
            units: this.units,
            activation: serializeActivation(this.activation),
            useBias: this.useBias,
            kernelInitializer: serializeInitializer(this.kernelInitializer),
            recurrentInitializer: serializeInitializer(this.recurrentInitializer),
            biasInitializer: serializeInitializer(this.biasInitializer),
            kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
            recurrentRegularizer: serializeRegularizer(this.recurrentRegularizer),
            biasRegularizer: serializeRegularizer(this.biasRegularizer),
            activityRegularizer: serializeRegularizer(this.activityRegularizer),
            kernelConstraint: serializeConstraint(this.kernelConstraint),
            recurrentConstraint: serializeConstraint(this.recurrentConstraint),
            biasConstraint: serializeConstraint(this.biasConstraint),
            dropout: this.dropout,
            recurrentDropout: this.recurrentDropout
        }, n = e.prototype.getConfig.call(this);
        return delete n.cell, Object.assign(t, n), t
    }, t.className = "SimpleRNN", t
}(RNN);
serialization.registerClass(SimpleRNN);
var GRUCell = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        return n.DEFAULT_ACTIVATION = "tanh", n.DEFAULT_RECURRENT_ACTIVATION = "hardSigmoid", n.DEFAULT_KERNEL_INITIALIZER = "glorotNormal", n.DEFAULT_RECURRENT_INITIALIZER = "orthogonal", n.DEFAULT_BIAS_INITIALIZER = "zeros", n.units = t.units, n.activation = getActivation(void 0 === t.activation ? n.DEFAULT_ACTIVATION : t.activation), n.recurrentActivation = getActivation(void 0 === t.recurrentActivation ? n.DEFAULT_RECURRENT_ACTIVATION : t.recurrentActivation), n.useBias = null == t.useBias || t.useBias, n.kernelInitializer = getInitializer(t.kernelInitializer || n.DEFAULT_KERNEL_INITIALIZER), n.recurrentInitializer = getInitializer(t.recurrentInitializer || n.DEFAULT_RECURRENT_INITIALIZER), n.biasInitializer = getInitializer(t.biasInitializer || n.DEFAULT_BIAS_INITIALIZER), n.kernelRegularizer = getRegularizer(t.kernelRegularizer), n.recurrentRegularizer = getRegularizer(t.recurrentRegularizer), n.biasRegularizer = getRegularizer(t.biasRegularizer), n.kernelConstraint = getConstraint(t.kernelConstraint), n.recurrentConstraint = getConstraint(t.recurrentConstraint), n.biasConstraint = getConstraint(t.biasConstraint), n.dropout = min$1([1, max$1([0, null == t.dropout ? 0 : t.dropout])]), n.recurrentDropout = min$1([1, max$1([0, null == t.recurrentDropout ? 0 : t.recurrentDropout])]), n.implementation = t.implementation, n.stateSize = n.units, n.dropoutMask = null, n.recurrentDropoutMask = null, n
    }

    return __extends(t, e), t.prototype.build = function (e) {
        var t = (e = getExactlyOneShape(e))[e.length - 1];
        this.kernel = this.addWeight("kernel", [t, 3 * this.units], null, this.kernelInitializer, this.kernelRegularizer, !0, this.kernelConstraint), this.recurrentKernel = this.addWeight("recurrent_kernel", [this.units, 3 * this.units], null, this.recurrentInitializer, this.recurrentRegularizer, !0, this.recurrentConstraint), this.useBias ? this.bias = this.addWeight("bias", [3 * this.units], null, this.biasInitializer, this.biasRegularizer, !0, this.biasConstraint) : this.bias = null, this.built = !0
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            if (2 !== (e = e).length) throw new ValueError("GRUCell expects 2 input Tensors (inputs, h, c), got " + e.length + ".");
            var r = null != t.training && t.training, i = e[1];
            e = e[0], 0 < n.dropout && n.dropout < 1 && null == n.dropoutMask && (n.dropoutMask = generateDropoutMask(function () {
                return onesLike(e)
            }, n.dropout, r, 3)), 0 < n.recurrentDropout && n.recurrentDropout < 1 && null == n.recurrentDropoutMask && (n.recurrentDropoutMask = generateDropoutMask(function () {
                return onesLike(i)
            }, n.recurrentDropout, r, 3));
            var a, o, s, l = n.dropoutMask, u = n.recurrentDropoutMask;
            0 < n.dropout && n.dropout < 1 && (e = mul(e, l[0]));
            var c = dot(e, n.kernel.read());
            n.useBias && (c = biasAdd(c, n.bias.read())), 0 < n.recurrentDropout && n.recurrentDropout < 1 && (i = mul(i, u[0]));
            var h = n.recurrentKernel.read(), p = split(h, [2 * n.units, n.units], h.rank - 1), d = p[0], g = p[1],
                f = dot(i, d), m = split(c, 3, c.rank - 1), y = m[0], v = m[1], b = m[2], w = split(f, 2, f.rank - 1),
                z = w[0], S = w[1];
            a = n.recurrentActivation.apply(add(y, z)), o = n.recurrentActivation.apply(add(v, S));
            var I = dot(mul(o, i), g);
            s = n.activation.apply(add(b, I));
            var A = add(mul(a, i), mul(add(getScalar(1), neg(a)), s));
            return [A, A]
        })
    }, t.prototype.getConfig = function () {
        var t = {
            units: this.units,
            activation: serializeActivation(this.activation),
            recurrentActivation: serializeActivation(this.recurrentActivation),
            useBias: this.useBias,
            kernelInitializer: serializeInitializer(this.kernelInitializer),
            recurrentInitializer: serializeInitializer(this.recurrentInitializer),
            biasInitializer: serializeInitializer(this.biasInitializer),
            kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
            recurrentRegularizer: serializeRegularizer(this.recurrentRegularizer),
            biasRegularizer: serializeRegularizer(this.biasRegularizer),
            activityRegularizer: serializeRegularizer(this.activityRegularizer),
            kernelConstraint: serializeConstraint(this.kernelConstraint),
            recurrentConstraint: serializeConstraint(this.recurrentConstraint),
            biasConstraint: serializeConstraint(this.biasConstraint),
            dropout: this.dropout,
            recurrentDropout: this.recurrentDropout,
            implementation: this.implementation
        }, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "GRUCell", t
}(RNNCell);
serialization.registerClass(GRUCell);
var GRU = function (e) {
    function t(t) {
        return 0 === t.implementation && console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."), t.cell = new GRUCell(t), e.call(this, t) || this
    }

    return __extends(t, e), t.prototype.call = function (t, n) {
        var r = this;
        return tidy(function () {
            null != r.cell.dropoutMask && (dispose(r.cell.dropoutMask), r.cell.dropoutMask = null), null != r.cell.recurrentDropoutMask && (dispose(r.cell.recurrentDropoutMask), r.cell.recurrentDropoutMask = null);
            var i = null == n ? null : n.mask, a = null == n ? null : n.training, o = null == n ? null : n.initialState;
            return e.prototype.call.call(r, t, {mask: i, training: a, initialState: o})
        })
    }, Object.defineProperty(t.prototype, "units", {
        get: function () {
            return this.cell.units
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "activation", {
        get: function () {
            return this.cell.activation
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "recurrentActivation", {
        get: function () {
            return this.cell.recurrentActivation
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "useBias", {
        get: function () {
            return this.cell.useBias
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "kernelInitializer", {
        get: function () {
            return this.cell.kernelInitializer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "recurrentInitializer", {
        get: function () {
            return this.cell.recurrentInitializer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "biasInitializer", {
        get: function () {
            return this.cell.biasInitializer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "kernelRegularizer", {
        get: function () {
            return this.cell.kernelRegularizer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "recurrentRegularizer", {
        get: function () {
            return this.cell.recurrentRegularizer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "biasRegularizer", {
        get: function () {
            return this.cell.biasRegularizer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "kernelConstraint", {
        get: function () {
            return this.cell.kernelConstraint
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "recurrentConstraint", {
        get: function () {
            return this.cell.recurrentConstraint
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "biasConstraint", {
        get: function () {
            return this.cell.biasConstraint
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "dropout", {
        get: function () {
            return this.cell.dropout
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "recurrentDropout", {
        get: function () {
            return this.cell.recurrentDropout
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "implementation", {
        get: function () {
            return this.cell.implementation
        }, enumerable: !0, configurable: !0
    }), t.prototype.getConfig = function () {
        var t = {
            units: this.units,
            activation: serializeActivation(this.activation),
            recurrentActivation: serializeActivation(this.recurrentActivation),
            useBias: this.useBias,
            kernelInitializer: serializeInitializer(this.kernelInitializer),
            recurrentInitializer: serializeInitializer(this.recurrentInitializer),
            biasInitializer: serializeInitializer(this.biasInitializer),
            kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
            recurrentRegularizer: serializeRegularizer(this.recurrentRegularizer),
            biasRegularizer: serializeRegularizer(this.biasRegularizer),
            activityRegularizer: serializeRegularizer(this.activityRegularizer),
            kernelConstraint: serializeConstraint(this.kernelConstraint),
            recurrentConstraint: serializeConstraint(this.recurrentConstraint),
            biasConstraint: serializeConstraint(this.biasConstraint),
            dropout: this.dropout,
            recurrentDropout: this.recurrentDropout,
            implementation: this.implementation
        }, n = e.prototype.getConfig.call(this);
        return delete n.cell, Object.assign(t, n), t
    }, t.fromConfig = function (e, t) {
        return 0 === t.implmentation && (t.implementation = 1), new e(t)
    }, t.className = "GRU", t
}(RNN);
serialization.registerClass(GRU);
var LSTMCell = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        return n.DEFAULT_ACTIVATION = "tanh", n.DEFAULT_RECURRENT_ACTIVATION = "hardSigmoid", n.DEFAULT_KERNEL_INITIALIZER = "glorotNormal", n.DEFAULT_RECURRENT_INITIALIZER = "orthogonal", n.DEFAULT_BIAS_INITIALIZER = "zeros", n.units = t.units, n.activation = getActivation(void 0 === t.activation ? n.DEFAULT_ACTIVATION : t.activation), n.recurrentActivation = getActivation(void 0 === t.recurrentActivation ? n.DEFAULT_RECURRENT_ACTIVATION : t.recurrentActivation), n.useBias = null == t.useBias || t.useBias, n.kernelInitializer = getInitializer(t.kernelInitializer || n.DEFAULT_KERNEL_INITIALIZER), n.recurrentInitializer = getInitializer(t.recurrentInitializer || n.DEFAULT_RECURRENT_INITIALIZER), n.biasInitializer = getInitializer(t.biasInitializer || n.DEFAULT_BIAS_INITIALIZER), n.unitForgetBias = t.unitForgetBias, n.kernelRegularizer = getRegularizer(t.kernelRegularizer), n.recurrentRegularizer = getRegularizer(t.recurrentRegularizer), n.biasRegularizer = getRegularizer(t.biasRegularizer), n.kernelConstraint = getConstraint(t.kernelConstraint), n.recurrentConstraint = getConstraint(t.recurrentConstraint), n.biasConstraint = getConstraint(t.biasConstraint), n.dropout = min$1([1, max$1([0, null == t.dropout ? 0 : t.dropout])]), n.recurrentDropout = min$1([1, max$1([0, null == t.recurrentDropout ? 0 : t.recurrentDropout])]), n.implementation = t.implementation, n.stateSize = [n.units, n.units], n.dropoutMask = null, n.recurrentDropoutMask = null, n
    }

    return __extends(t, e), t.prototype.build = function (e) {
        var t, n, r = (e = getExactlyOneShape(e))[e.length - 1];
        if (this.kernel = this.addWeight("kernel", [r, 4 * this.units], null, this.kernelInitializer, this.kernelRegularizer, !0, this.kernelConstraint), this.recurrentKernel = this.addWeight("recurrent_kernel", [this.units, 4 * this.units], null, this.recurrentInitializer, this.recurrentRegularizer, !0, this.recurrentConstraint), this.useBias) {
            if (this.unitForgetBias) {
                var i = this.biasInitializer, a = this.units;
                t = new ((n = function (e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }

                    return __extends(t, e), t.prototype.apply = function (e, t) {
                        var n = i.apply([a]), r = (new Ones).apply([a]), o = i.apply([2 * a]);
                        return concatAlongFirstAxis(concatAlongFirstAxis(n, r), o)
                    }, t
                }(Initializer)).className = "CustomInit", n)
            } else t = this.biasInitializer;
            this.bias = this.addWeight("bias", [4 * this.units], null, t, this.biasRegularizer, !0, this.biasConstraint)
        } else this.bias = null;
        this.built = !0
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            var r = null != t.training && t.training;
            if (3 !== (e = e).length) throw new ValueError("LSTMCell expects 3 input Tensors (inputs, h, c), got " + e.length + ".");
            var i = e[1], a = e[2];
            e = e[0], 0 < n.dropout && n.dropout < 1 && null == n.dropoutMask && (n.dropoutMask = generateDropoutMask(function () {
                return onesLike(e)
            }, n.dropout, r, 4)), 0 < n.recurrentDropout && n.recurrentDropout < 1 && null == n.recurrentDropoutMask && (n.recurrentDropoutMask = generateDropoutMask(function () {
                return onesLike(i)
            }, n.recurrentDropout, r, 4));
            var o, s, l, u, c = n.dropoutMask, h = n.recurrentDropoutMask;
            0 < n.dropout && n.dropout < 1 && (e = mul(e, c[0]));
            var p = dot(e, n.kernel.read());
            0 < n.recurrentDropout && n.recurrentDropout < 1 && (i = mul(i, h[0])), p = add(p, dot(i, n.recurrentKernel.read())), n.useBias && (p = biasAdd(p, n.bias.read()));
            var d = split(p, 4, p.rank - 1), g = d[0], f = d[1], m = d[2], y = d[3];
            o = n.recurrentActivation.apply(g), s = n.recurrentActivation.apply(f), l = add(mul(s, a), mul(o, n.activation.apply(m))), u = n.recurrentActivation.apply(y);
            var v = mul(u, n.activation.apply(l));
            return [v, v, l]
        })
    }, t.prototype.getConfig = function () {
        var t = {
            units: this.units,
            activation: serializeActivation(this.activation),
            recurrentActivation: serializeActivation(this.recurrentActivation),
            useBias: this.useBias,
            kernelInitializer: serializeInitializer(this.kernelInitializer),
            recurrentInitializer: serializeInitializer(this.recurrentInitializer),
            biasInitializer: serializeInitializer(this.biasInitializer),
            unitForgetBias: this.unitForgetBias,
            kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
            recurrentRegularizer: serializeRegularizer(this.recurrentRegularizer),
            biasRegularizer: serializeRegularizer(this.biasRegularizer),
            activityRegularizer: serializeRegularizer(this.activityRegularizer),
            kernelConstraint: serializeConstraint(this.kernelConstraint),
            recurrentConstraint: serializeConstraint(this.recurrentConstraint),
            biasConstraint: serializeConstraint(this.biasConstraint),
            dropout: this.dropout,
            recurrentDropout: this.recurrentDropout,
            implementation: this.implementation
        }, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.className = "LSTMCell", t
}(RNNCell);
serialization.registerClass(LSTMCell);
var LSTM = function (e) {
    function t(t) {
        return 0 === t.implementation && console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."), t.cell = new LSTMCell(t), e.call(this, t) || this
    }

    return __extends(t, e), t.prototype.call = function (t, n) {
        var r = this;
        return tidy(function () {
            null != r.cell.dropoutMask && (dispose(r.cell.dropoutMask), r.cell.dropoutMask = null), null != r.cell.recurrentDropoutMask && (dispose(r.cell.recurrentDropoutMask), r.cell.recurrentDropoutMask = null);
            var i = null == n ? null : n.mask, a = null == n ? null : n.training, o = null == n ? null : n.initialState;
            return e.prototype.call.call(r, t, {mask: i, training: a, initialState: o})
        })
    }, Object.defineProperty(t.prototype, "units", {
        get: function () {
            return this.cell.units
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "activation", {
        get: function () {
            return this.cell.activation
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "recurrentActivation", {
        get: function () {
            return this.cell.recurrentActivation
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "useBias", {
        get: function () {
            return this.cell.useBias
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "kernelInitializer", {
        get: function () {
            return this.cell.kernelInitializer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "recurrentInitializer", {
        get: function () {
            return this.cell.recurrentInitializer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "biasInitializer", {
        get: function () {
            return this.cell.biasInitializer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "unitForgetBias", {
        get: function () {
            return this.cell.unitForgetBias
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "kernelRegularizer", {
        get: function () {
            return this.cell.kernelRegularizer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "recurrentRegularizer", {
        get: function () {
            return this.cell.recurrentRegularizer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "biasRegularizer", {
        get: function () {
            return this.cell.biasRegularizer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "kernelConstraint", {
        get: function () {
            return this.cell.kernelConstraint
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "recurrentConstraint", {
        get: function () {
            return this.cell.recurrentConstraint
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "biasConstraint", {
        get: function () {
            return this.cell.biasConstraint
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "dropout", {
        get: function () {
            return this.cell.dropout
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "recurrentDropout", {
        get: function () {
            return this.cell.recurrentDropout
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "implementation", {
        get: function () {
            return this.cell.implementation
        }, enumerable: !0, configurable: !0
    }), t.prototype.getConfig = function () {
        var t = {
            units: this.units,
            activation: serializeActivation(this.activation),
            recurrentActivation: serializeActivation(this.recurrentActivation),
            useBias: this.useBias,
            kernelInitializer: serializeInitializer(this.kernelInitializer),
            recurrentInitializer: serializeInitializer(this.recurrentInitializer),
            biasInitializer: serializeInitializer(this.biasInitializer),
            unitForgetBias: this.unitForgetBias,
            kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
            recurrentRegularizer: serializeRegularizer(this.recurrentRegularizer),
            biasRegularizer: serializeRegularizer(this.biasRegularizer),
            activityRegularizer: serializeRegularizer(this.activityRegularizer),
            kernelConstraint: serializeConstraint(this.kernelConstraint),
            recurrentConstraint: serializeConstraint(this.recurrentConstraint),
            biasConstraint: serializeConstraint(this.biasConstraint),
            dropout: this.dropout,
            recurrentDropout: this.recurrentDropout,
            implementation: this.implementation
        }, n = e.prototype.getConfig.call(this);
        return delete n.cell, Object.assign(t, n), t
    }, t.fromConfig = function (e, t) {
        return 0 === t.implmentation && (t.implementation = 1), new e(t)
    }, t.className = "LSTM", t
}(RNN);
serialization.registerClass(LSTM);
var StackedRNNCells = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        return n.cells = t.cells, n
    }

    return __extends(t, e), Object.defineProperty(t.prototype, "stateSize", {
        get: function () {
            for (var e = [], t = 0, n = this.cells.slice().reverse(); t < n.length; t++) {
                var r = n[t];
                Array.isArray(r.stateSize) ? e.push.apply(e, r.stateSize) : e.push(r.stateSize)
            }
            return e
        }, enumerable: !0, configurable: !0
    }), t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            for (var r = (e = e).slice(1), i = [], a = 0, o = n.cells.slice().reverse(); a < o.length; a++) {
                var s = o[a];
                Array.isArray(s.stateSize) ? i.push(r.splice(0, s.stateSize.length)) : i.push(r.splice(0, 1))
            }
            i.reverse();
            for (var l, u = [], c = 0; c < n.cells.length; ++c) {
                s = n.cells[c];
                r = i[c], l = 0 === c ? [e[0]].concat(r) : [l[0]].concat(r), l = s.call(l, t), u.push(l.slice(1))
            }
            r = [];
            for (var h = 0, p = u.slice().reverse(); h < p.length; h++) {
                var d = p[h];
                r.push.apply(r, d)
            }
            return [l[0]].concat(r)
        })
    }, t.prototype.build = function (e) {
        var t;
        isArrayOfShapes(e) && (e = e[0]), e = e;
        for (var n = 0, r = this.cells; n < r.length; n++) {
            var i = r[n];
            i.build(e), t = Array.isArray(i.stateSize) ? i.stateSize[0] : i.stateSize, e = [e[0], t]
        }
        this.built = !0
    }, t.prototype.getConfig = function () {
        for (var t = [], n = 0, r = this.cells; n < r.length; n++) {
            var i = r[n];
            t.push({className: this.getClassName(), config: i.getConfig()})
        }
        var a = {cells: t}, o = e.prototype.getConfig.call(this);
        return Object.assign(a, o), a
    }, t.fromConfig = function (e, t, n) {
        void 0 === n && (n = {});
        for (var r = [], i = 0, a = t.cells; i < a.length; i++) {
            var o = a[i];
            r.push(deserialize(o, n))
        }
        return new e({cells: r})
    }, Object.defineProperty(t.prototype, "trainableWeights", {
        get: function () {
            if (!this.trainable) return [];
            for (var e = [], t = 0, n = this.cells; t < n.length; t++) {
                var r = n[t];
                e.push.apply(e, r.trainableWeights)
            }
            return e
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "nonTrainableWeights", {
        get: function () {
            for (var e = [], t = 0, n = this.cells; t < n.length; t++) {
                var r = n[t];
                e.push.apply(e, r.nonTrainableWeights)
            }
            if (!this.trainable) {
                for (var i = [], a = 0, o = this.cells; a < o.length; a++) {
                    r = o[a];
                    i.push.apply(i, r.trainableWeights)
                }
                return i.concat(e)
            }
            return e
        }, enumerable: !0, configurable: !0
    }), t.prototype.getWeights = function () {
        for (var e = [], t = 0, n = this.cells; t < n.length; t++) {
            var r = n[t];
            e.push.apply(e, r.weights)
        }
        return batchGetValue(e)
    }, t.prototype.setWeights = function (e) {
        for (var t = [], n = 0, r = this.cells; n < r.length; n++) for (var i = r[n], a = i.weights.length, o = e.splice(a), s = 0; s < i.weights.length; ++s) t.push([i.weights[s], o[s]]);
        batchSetValue(t)
    }, t.className = "StackedRNNCells", t
}(RNNCell);

function generateDropoutMask(e, t, n, r) {
    function i() {
        return dropout(e(), getScalar(t))
    }

    if (void 0 === n && (n = null), void 0 === r && (r = 1), r > 1) {
        for (var a = [], o = 0; o < r; o++) a.push(inTrainPhase(i, e, n));
        return a.forEach(function (e) {
            return keep(e)
        }), a
    }
    return keep(inTrainPhase(i, e, n))
}

serialization.registerClass(StackedRNNCells);
var Wrapper = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        return n.layer = t.layer, n
    }

    return __extends(t, e), t.prototype.build = function (e) {
        this.built = !0
    }, Object.defineProperty(t.prototype, "trainable", {
        get: function () {
            return null != this.layer && this.layer.trainable
        }, set: function (e) {
            null != this.layer && (this.layer.trainable = e)
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "trainableWeights", {
        get: function () {
            return this.layer.trainableWeights
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "nonTrainableWeights", {
        get: function () {
            return this.layer.nonTrainableWeights
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "updates", {
        get: function () {
            return this.layer._updates
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "losses", {
        get: function () {
            return this.layer.losses
        }, enumerable: !0, configurable: !0
    }), t.prototype.getWeights = function () {
        return this.layer.getWeights()
    }, t.prototype.setWeights = function (e) {
        this.layer.setWeights(e)
    }, t.prototype.getConfig = function () {
        var t = {layer: {className: this.layer.getClassName(), config: this.layer.getConfig()}},
            n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.prototype.setFastWeightInitDuringBuild = function (t) {
        e.prototype.setFastWeightInitDuringBuild.call(this, t), null != this.layer && this.layer.setFastWeightInitDuringBuild(t)
    }, t.fromConfig = function (e, t, n) {
        void 0 === n && (n = {});
        var r = deserialize(t.layer, n);
        delete t.layer;
        var i = {layer: r};
        return Object.assign(i, t), new e(i)
    }, t
}(Layer), TimeDistributed = function (e) {
    function t(t) {
        var n = e.call(this, t) || this;
        return n.supportsMasking = !0, n
    }

    return __extends(t, e), t.prototype.build = function (t) {
        if ((t = getExactlyOneShape(t)).length < 3) throw new ValueError("TimeDistributed layer expects an input shape >= 3D, but received input shape " + JSON.stringify(t));
        this.inputSpec = [{shape: t}];
        var n = [t[0]].concat(t.slice(2));
        this.layer.built || (this.layer.build(n), this.layer.built = !0), e.prototype.build.call(this, t)
    }, t.prototype.computeOutputShape = function (e) {
        var t = [(e = getExactlyOneShape(e))[0]].concat(e.slice(2)), n = this.layer.computeOutputShape(t), r = e[1];
        return [n[0], r].concat(n.slice(1))
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            return rnn(function (e, r) {
                return [getExactlyOneTensor(n.layer.call(e, t)), []]
            }, e = getExactlyOneTensor(e), [], !1, null, null, !1, !0)[1]
        })
    }, t.className = "TimeDistributed", t
}(Wrapper);
serialization.registerClass(TimeDistributed);
var VALID_BIDIRECTIONAL_MERGE_MODES = ["sum", "mul", "concat", "ave"];

function checkBidirectionalMergeMode(e) {
    checkStringTypeUnionValue(VALID_BIDIRECTIONAL_MERGE_MODES, "BidirectionalMergeMode", e)
}

var Bidirectional = function (e) {
    function t(t) {
        var n = e.call(this, t) || this, r = t.layer.getConfig();
        if (n.forwardLayer = deserialize({
            className: t.layer.getClassName(),
            config: r
        }), r.goBackwards = !0 !== r.goBackwards, n.backwardLayer = deserialize({
            className: t.layer.getClassName(),
            config: r
        }), n.forwardLayer.name = "forward_" + n.forwardLayer.name, n.backwardLayer.name = "backward_" + n.backwardLayer.name, checkBidirectionalMergeMode(t.mergeMode), n.mergeMode = t.mergeMode, t.weights) throw new NotImplementedError("weights support is not implemented for Bidirectional layer yet.");
        return n._stateful = t.layer.stateful, n.returnSequences = t.layer.returnSequences, n.returnState = t.layer.returnState, n.supportsMasking = !0, n._trainable = !0, n.inputSpec = t.layer.inputSpec, n.numConstants = null, n
    }

    return __extends(t, e), Object.defineProperty(t.prototype, "trainable", {
        get: function () {
            return this._trainable
        }, set: function (e) {
            this._trainable = e, null != this.forwardLayer && (this.forwardLayer.trainable = e), null != this.backwardLayer && (this.backwardLayer.trainable = e)
        }, enumerable: !0, configurable: !0
    }), t.prototype.getWeights = function () {
        return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())
    }, t.prototype.setWeights = function (e) {
        var t = e.length, n = Math.floor(t / 2);
        this.forwardLayer.setWeights(e.slice(0, n)), this.backwardLayer.setWeights(e.slice(n))
    }, t.prototype.computeOutputShape = function (e) {
        var t, n, r, i = this.forwardLayer.computeOutputShape(e);
        return Array.isArray(i) && Array.isArray(i[0]) || (i = [i]), i = i, this.returnState ? (r = i.slice(1), t = i[0]) : t = i[0], t = t, "concat" === this.mergeMode ? (t[t.length - 1] *= 2, n = [t]) : n = null == this.mergeMode ? [t, t.slice()] : [t], this.returnState ? null == this.mergeMode ? n.concat(r).concat(r.slice()) : [t].concat(r).concat(r.slice()) : singletonOrArray(n)
    }, t.prototype.apply = function (t, n) {
        var r = null == n ? null : n.initialState, i = null == n ? null : n.constants;
        null == n && (n = {});
        var a = standardizeArgs(t, r, i, this.numConstants);
        if (t = a.inputs, r = a.initialState, i = a.constants, Array.isArray(t) && (r = t.slice(1), t = t[0]), (null == r || 0 === r.length) && null == i) return e.prototype.apply.call(this, t, n);
        var o = [], s = [];
        if (null != r) {
            var l = r.length;
            if (l % 2 > 0) throw new ValueError("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");
            n.initialState = r, o.push.apply(o, r);
            var u = r.map(function (e) {
                return new InputSpec({shape: e.shape})
            });
            this.forwardLayer.stateSpec = u.slice(0, l / 2), this.backwardLayer.stateSpec = u.slice(l / 2), s.push.apply(s, u)
        }
        if (null != i) throw new NotImplementedError("Support for constants in Bidirectional layers is not implemented yet.");
        for (var c = o[0] instanceof SymbolicTensor, h = 0, p = o; h < p.length; h++) {
            if (p[h] instanceof SymbolicTensor !== c) throw new ValueError("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors")
        }
        if (c) {
            var d = [t].concat(o), g = this.inputSpec.concat(s), f = this.inputSpec;
            this.inputSpec = g;
            var m = e.prototype.apply.call(this, d, n);
            return this.inputSpec = f, m
        }
        return e.prototype.apply.call(this, t, n)
    }, t.prototype.call = function (e, t) {
        var n = this;
        return tidy(function () {
            if (null != t.mask) throw new NotImplementedError("The support for masking is not implemented for Bidirectional layers yet.");
            var r, i, a, o, s = t.initialState;
            if (null == s) r = n.forwardLayer.call(e, t), i = n.backwardLayer.call(e, t); else {
                var l = s.slice(0, s.length / 2), u = s.slice(s.length / 2);
                r = n.forwardLayer.call(e, Object.assign(t, {initialState: l})), i = n.backwardLayer.call(e, Object.assign(t, {initialState: u}))
            }
            return n.returnState && (Array.isArray(r) && (a = r.slice(1).concat(i.slice(1))), r = r[0], i = i[0]), n.returnSequences && (i = reverse(i, 1)), "concat" === n.mergeMode ? o = concatenate([r, i]) : "sum" === n.mergeMode ? o = add(r, i) : "ave" === n.mergeMode ? o = mul(getScalar(.5), add(r, i)) : "mul" === n.mergeMode ? o = mul(r, i) : null == n.mergeMode && (o = [r, i]), n.returnState ? null == n.mergeMode ? o.concat(a) : [o].concat(a) : o
        })
    }, t.prototype.resetStates = function (e) {
        this.forwardLayer.resetStates(), this.backwardLayer.resetStates()
    }, t.prototype.build = function (e) {
        var t = this;
        nameScope(this.forwardLayer.name, function () {
            t.forwardLayer.build(e)
        }), nameScope(this.backwardLayer.name, function () {
            t.backwardLayer.build(e)
        }), this.built = !0
    }, Object.defineProperty(t.prototype, "trainableWeights", {
        get: function () {
            return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "nonTrainableWeights", {
        get: function () {
            return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)
        }, enumerable: !0, configurable: !0
    }), t.prototype.setFastWeightInitDuringBuild = function (t) {
        e.prototype.setFastWeightInitDuringBuild.call(this, t), null != this.forwardLayer && this.forwardLayer.setFastWeightInitDuringBuild(t), null != this.backwardLayer && this.backwardLayer.setFastWeightInitDuringBuild(t)
    }, t.prototype.getConfig = function () {
        var t = {mergeMode: this.mergeMode}, n = e.prototype.getConfig.call(this);
        return Object.assign(t, n), t
    }, t.fromConfig = function (e, t) {
        var n = deserialize(t.layer);
        if (delete t.layer, null != t.numConstants) throw new NotImplementedError("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");
        var r = t;
        return r.layer = n, new e(r)
    }, t.className = "Bidirectional", t
}(Wrapper);

function inputLayer(e) {
    return new InputLayer(e)
}

function elu$2(e) {
    return new ELU(e)
}

function reLU(e) {
    return new ReLU(e)
}

function leakyReLU(e) {
    return new LeakyReLU(e)
}

function prelu$1(e) {
    return new PReLU(e)
}

function softmax$1(e) {
    return new Softmax$1(e)
}

function thresholdedReLU(e) {
    return new ThresholdedReLU(e)
}

function conv1d$2(e) {
    return new Conv1D(e)
}

function conv2d$2(e) {
    return new Conv2D(e)
}

function conv2dTranspose$1(e) {
    return new Conv2DTranspose(e)
}

function separableConv2d$1(e) {
    return new SeparableConv2D(e)
}

function cropping2D(e) {
    return new Cropping2D(e)
}

function upSampling2d(e) {
    return new UpSampling2D(e)
}

function depthwiseConv2d$2(e) {
    return new DepthwiseConv2D(e)
}

function activation(e) {
    return new Activation$1(e)
}

function dense(e) {
    return new Dense(e)
}

function dropout$1(e) {
    return new Dropout(e)
}

function flatten$1(e) {
    return new Flatten(e)
}

function repeatVector(e) {
    return new RepeatVector(e)
}

function reshape(e) {
    return new Reshape(e)
}

function permute(e) {
    return new Permute(e)
}

function embedding(e) {
    return new Embedding(e)
}

function add$2(e) {
    return new Add(e)
}

function average$1(e) {
    return new Average(e)
}

function concatenate$2(e) {
    return new Concatenate(e)
}

function maximum$2(e) {
    return new Maximum(e)
}

function minimum$2(e) {
    return new Minimum(e)
}

function multiply$1(e) {
    return new Multiply(e)
}

function dot$1(e) {
    return new Dot(e)
}

function batchNormalization$1(e) {
    return new BatchNormalization(e)
}

function zeroPadding2d(e) {
    return new ZeroPadding2D(e)
}

function averagePooling1d(e) {
    return new AveragePooling1D(e)
}

function avgPool1d(e) {
    return averagePooling1d(e)
}

function avgPooling1d(e) {
    return averagePooling1d(e)
}

function averagePooling2d(e) {
    return new AveragePooling2D(e)
}

function avgPool2d(e) {
    return averagePooling2d(e)
}

function avgPooling2d(e) {
    return averagePooling2d(e)
}

function globalAveragePooling1d(e) {
    return new GlobalAveragePooling1D(e)
}

function globalAveragePooling2d(e) {
    return new GlobalAveragePooling2D(e)
}

function globalMaxPooling1d(e) {
    return new GlobalMaxPooling1D(e)
}

function globalMaxPooling2d(e) {
    return new GlobalMaxPooling2D(e)
}

function maxPooling1d(e) {
    return new MaxPooling1D(e)
}

function maxPooling2d(e) {
    return new MaxPooling2D(e)
}

function gru(e) {
    return new GRU(e)
}

function gruCell(e) {
    return new GRUCell(e)
}

function lstm(e) {
    return new LSTM(e)
}

function lstmCell(e) {
    return new LSTMCell(e)
}

function simpleRNN(e) {
    return new SimpleRNN(e)
}

function simpleRNNCell(e) {
    return new SimpleRNNCell(e)
}

function rnn$1(e) {
    return new RNN(e)
}

function stackedRNNCells(e) {
    return new StackedRNNCells(e)
}

function bidirectional(e) {
    return new Bidirectional(e)
}

function timeDistributed(e) {
    return new TimeDistributed(e)
}

serialization.registerClass(Bidirectional);
var globalMaxPool1d = globalMaxPooling1d, globalMaxPool2d = globalMaxPooling2d, maxPool1d = maxPooling1d,
    maxPool2d = maxPooling2d, exports_layers = Object.freeze({
        inputLayer: inputLayer,
        elu: elu$2,
        reLU: reLU,
        leakyReLU: leakyReLU,
        prelu: prelu$1,
        softmax: softmax$1,
        thresholdedReLU: thresholdedReLU,
        conv1d: conv1d$2,
        conv2d: conv2d$2,
        conv2dTranspose: conv2dTranspose$1,
        separableConv2d: separableConv2d$1,
        cropping2D: cropping2D,
        upSampling2d: upSampling2d,
        depthwiseConv2d: depthwiseConv2d$2,
        activation: activation,
        dense: dense,
        dropout: dropout$1,
        flatten: flatten$1,
        repeatVector: repeatVector,
        reshape: reshape,
        permute: permute,
        embedding: embedding,
        add: add$2,
        average: average$1,
        concatenate: concatenate$2,
        maximum: maximum$2,
        minimum: minimum$2,
        multiply: multiply$1,
        dot: dot$1,
        batchNormalization: batchNormalization$1,
        zeroPadding2d: zeroPadding2d,
        averagePooling1d: averagePooling1d,
        avgPool1d: avgPool1d,
        avgPooling1d: avgPooling1d,
        averagePooling2d: averagePooling2d,
        avgPool2d: avgPool2d,
        avgPooling2d: avgPooling2d,
        globalAveragePooling1d: globalAveragePooling1d,
        globalAveragePooling2d: globalAveragePooling2d,
        globalMaxPooling1d: globalMaxPooling1d,
        globalMaxPooling2d: globalMaxPooling2d,
        maxPooling1d: maxPooling1d,
        maxPooling2d: maxPooling2d,
        gru: gru,
        gruCell: gruCell,
        lstm: lstm,
        lstmCell: lstmCell,
        simpleRNN: simpleRNN,
        simpleRNNCell: simpleRNNCell,
        rnn: rnn$1,
        stackedRNNCells: stackedRNNCells,
        bidirectional: bidirectional,
        timeDistributed: timeDistributed,
        globalMaxPool1d: globalMaxPool1d,
        globalMaxPool2d: globalMaxPool2d,
        maxPool1d: maxPool1d,
        maxPool2d: maxPool2d,
        Layer: Layer,
        RNN: RNN,
        RNNCell: RNNCell,
        input: input
    });

function binaryAccuracy$1(e, t) {
    return binaryAccuracy(e, t)
}

function binaryCrossentropy$2(e, t) {
    return binaryCrossentropy$1(e, t)
}

function sparseCategoricalAccuracy$1(e, t) {
    return sparseCategoricalAccuracy(e, t)
}

function categoricalAccuracy$1(e, t) {
    return categoricalAccuracy(e, t)
}

function categoricalCrossentropy$2(e, t) {
    return categoricalCrossentropy$1(e, t)
}

function precision$1(e, t) {
    return precision(e, t)
}

function recall$1(e, t) {
    return recall(e, t)
}

function cosineProximity$1(e, t) {
    return cosineProximity(e, t)
}

function meanAbsoluteError$1(e, t) {
    return meanAbsoluteError(e, t)
}

function meanAbsolutePercentageError$1(e, t) {
    return meanAbsolutePercentageError(e, t)
}

function MAPE$2(e, t) {
    return meanAbsolutePercentageError(e, t)
}

function mape$2(e, t) {
    return meanAbsolutePercentageError(e, t)
}

function meanSquaredError$1(e, t) {
    return meanSquaredError(e, t)
}

function MSE$2(e, t) {
    return meanSquaredError(e, t)
}

function mse$2(e, t) {
    return meanSquaredError(e, t)
}

var exports_metrics = Object.freeze({
    binaryAccuracy: binaryAccuracy$1,
    binaryCrossentropy: binaryCrossentropy$2,
    sparseCategoricalAccuracy: sparseCategoricalAccuracy$1,
    categoricalAccuracy: categoricalAccuracy$1,
    categoricalCrossentropy: categoricalCrossentropy$2,
    precision: precision$1,
    recall: recall$1,
    cosineProximity: cosineProximity$1,
    meanAbsoluteError: meanAbsoluteError$1,
    meanAbsolutePercentageError: meanAbsolutePercentageError$1,
    MAPE: MAPE$2,
    mape: mape$2,
    meanSquaredError: meanSquaredError$1,
    MSE: MSE$2,
    mse: mse$2
}), exports_models = Object.freeze({modelFromJSON: modelFromJSON});

function l1l2(e) {
    return new L1L2(e)
}

function l1$1(e) {
    return l1(e)
}

function l2$1(e) {
    return l2(e)
}

var exports_regularizers = Object.freeze({l1l2: l1l2, l1: l1$1, l2: l2$1}), Callback = function (e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.model = null, t
    }

    return __extends(t, e), t.prototype.setModel = function (e) {
        if (!(e instanceof Model)) throw new Error("model must be a Model, not some other Container");
        this.model = e
    }, t
}(BaseCallback);
export {
    exports_constraints as constraints,
    exports_initializers as initializers,
    exports_layers as layers,
    exports_metrics as metrics,
    exports_models as models,
    exports_regularizers as regularizers,
    CallbackList,
    CustomCallback,
    History,
    Callback,
    InputSpec,
    SymbolicTensor,
    Model,
    input,
    loadModel,
    model,
    registerCallbackConstructor,
    sequential,
    RNN,
    Sequential,
    LayerVariable,
    version as version_layers
};