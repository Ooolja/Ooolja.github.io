!function(e) {
    e(".acceptance-msg-more");
    e(".wpcf7-form-control.wpcf7-acceptance").change(function() {
        e(this).parent().toggleClass("checked")
    }), e(".acceptance-msg-expander").on("click", function(n) {
        n.preventDefault(), n.stopPropagation();
        var t = e(this).parent();
        t.hide(), t.next().show()
    }), e(document).ready(function() {
        document.addEventListener("wpcf7mailsent", function(n) {
            var t = e(n.target);
            t.find(".wrapper-main-form").hide(), t.find(".wrapper-form-sent").fadeIn();
            var o = {
                name: t.find('input[name="sm-name"]').val(),
                email: t.find('input[name="sm-email"]').val(),
                phone: t.find('input[name="sm-phone"]').val(),
                tag: window.externalTag
            };
            e.ajax({
                method: "POST",
                url: "http://astoria.business.link/wp-content/themes/bussinesslink/sm/sm_upsert.php",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                dataType: "json",
                data: JSON.stringify(o),
                success: function(e) {
                    var n = smReadCookie("smclient");
                    "undefined" != typeof n && null !== n && smEvent("SMFORM [" + top.location.pathname + "]")
                },
                error: function(e) {}
            })
        }, !1)
    })
}(jQuery), function(e) {
    open_close_floors = function(n) {
        void 0 !== n ? (e(".floor-section").addClass("modal-activated"), e("#floors_modal").addClass("element_floor"), e("#maps_message").addClass("element_floor"), e("#buttons_container").addClass("element_floor"), e("#floor_close_close").addClass("floor_close_visible"), go_to_floor(n)) : (e("#floors_modal").removeClass("element_floor"), e("#maps_message").removeClass("element_floor"), e("#buttons_container").removeClass("element_floor"), go_to_floor(), e(".floor-section").removeClass("modal-activated"), e("#floor_close_close").removeClass("floor_close_visible"))
    }, floor_call_to_action = function() {
        e(".floors_modal_call").toggleClass("visible"), e(".floors_modal_call .wrapper-form").toggleClass("visible"), e("#call_close").toggleClass("floor_close_visible")
    }
}(jQuery), function(e) {
    function n(e, n) {
        setTimeout(function() {
            e.find(".animation:not(.excluded)").addClass("visible")
        }, n)
    }
    function t(e, n) {
        setTimeout(function() {
            e.find(".animation:not(.excluded)").removeClass("visible")
        }, n)
    }
    function o() {
        e(".animation-init").addClass("visible")
    }
    function i() {
        e(".section-content:not(.active) .animation:not(.excluded)").removeClass("visible")
    }
    function a() {
        e(".section-content:not(:nth-of-type(1)) .animation:not(.excluded)").removeClass("visible")
    }
    function s(n) {
        n.preventDefault();
        var t = e(this),
            o = !1;
        if (n.timeStamp - t.data("oldtimeStamp") < 100 && (o = !0), t.data("oldtimeStamp", n.timeStamp), !(k || E.hasClass("visible") || L.hasClass("element_floor") || o)) {
            k = !0;
            var i = window.event || n,
                a = i.wheelDelta || -1 * i.detail;
            a < 0 && l(), a > 0 && c()
        }
    }
    function r(e, o) {
        e.removeClass(D), e.addClass(x), o.addClass(D), t(e), n(o, .4 * O), setTimeout(function() {
            e.removeClass(x), k = !1
        }, O)
    }
    function l() {
        var n = e(".section-content.active"),
            t = n.next(S);
        t.length ? r(n, t) : k = !1
    }
    function c() {
        var n = e(".section-content.active"),
            t = n.prev(S);
        t.length ? r(n, t) : k = !1
    }
    function d(n, t) {
        var o = t ? F : 0,
            i = e(".section-content.active");
        setTimeout(function() {
            r(i, n)
        }, o)
    }
    function f(n) {
        if (n.length)
            return e("html, body").animate({
                scrollTop: n.offset().top
            }, 800), setTimeout(function() {
                e(window).trigger("scroll")
            }, 900), !1
    }
    function u(e) {
        T = e.touches[0].clientX, y = e.touches[0].clientY
    }
    function v(n) {
        var t = n.changedTouches[0].clientX,
            o = n.changedTouches[0].clientY,
            i = Math.abs(T - t),
            a = Math.abs(y - o);
        if (i > 100 || a > 100) {
            if (n.preventDefault(), n.stopPropagation(), k || E.hasClass("visible") || L.hasClass("element_floor"))
                return;
            k = !0, (T > t && i > 100 || y < o && a > 100) && l(), (T < t && i > 100 || y > o && a > 100) && c()
        } else
            e(n.target).trigger("touchend")
    }
    function m(e) {
        if (!(k || E.hasClass("visible") || L.hasClass("element_floor"))) {
            k = !0;
            var n = window.event || e;
            "38" == n.keyCode ? c() : "40" == n.keyCode ? l() : "37" == n.keyCode ? c() : "39" == n.keyCode && l()
        }
    }
    function h() {
        var n = e(this).scrollTop(),
            t = n > 150;
        t ? j.addClass("show") : j.removeClass("show")
    }
    function w() {
        var n = e(window).outerWidth(!0);
        return n > M && Q || n <= M && !Q
    }
    function g() {
        return Q = e(window).outerWidth(!0) <= M
    }
    function p() {
        window.addEventListener ? (window.addEventListener("mousewheel", s, !1), window.addEventListener("DOMMouseScroll", s, !1), window.addEventListener("touchstart", u, !1), window.addEventListener("touchend", v, !1), window.addEventListener("keydown", m, !1), window.addEventListener("keypress", m, !1)) : window.attachEvent("onmousewheel", s)
    }
    function C() {
        window.removeEventListener ? (window.removeEventListener("mousewheel", s, !1), window.removeEventListener("DOMMouseScroll", s, !1), window.removeEventListener("touchstart", u, !1), window.removeEventListener("touchend", v, !1), window.removeEventListener("keydown", m, !1), window.removeEventListener("keypress", m, !1)) : window.detachEvent("onmousewheel", s)
    }
    function _() {
        window.addEventListener("scroll", h)
    }
    function b() {
        window.removeEventListener("scroll", h)
    }
    var T,
        y,
        E = (e(".section-content"), e("#main-navigation")),
        L = e("#floors_modal"),
        k = !1,
        D = "active",
        x = "prev-section",
        S = ".section-content",
        j = e(".button-call"),
        O = 1e3,
        M = 768,
        I = e(".nav-section > a, a.nav-section"),
        W = e("body").hasClass("scroll-reset"),
        Q = g(),
        G = e(".hamburger"),
        P = e(".nav-column>.animation"),
        q = "is-active",
        A = "visible",
        F = 1400,
        N = function() {
            E.toggleClass(A), P.toggleClass(A), G.toggleClass(q)
        };
    if (G[0]) {
        var z = !1;
        G.click(function(e) {
            z || (z = !0, e.preventDefault(), N(), setTimeout(function() {
                z = !1
            }, F))
        })
    }
    window.addEventListener("resize", function(t) {
        setTimeout(function() {
            w() && (g() || W ? (a(), C(), _()) : (i(), n(e(".section-content.active")), p(), b()))
        })
    }), I.on("click", function(n) {
        n.preventDefault();
        var t = e(this).attr("href"),
            o = e(t),
            i = !1;
        E.hasClass("visible") && (N(), i = !0), e(window).outerWidth(!0) > M ? d(o, i) : f(o)
    }), e(document).ready(function() {
        if (n(e(".section-content.active")), o(), window.location.hash) {
            var t = e(window.location.hash);
            e(window).outerWidth(!0) > M ? d(t, !0) : f(t)
        }
        g() || W ? _() : p()
    })
}(jQuery), function(e) {
    function n() {
        if (!(e(window).outerWidth(!0) > o)) {
            var n = t.scrollTop(),
                a = t.height();
            i(a, n)
        }
    }
    var t = e(window),
        o = 768,
        i = function(n, t) {
            e(".section-content .animation:not(.excluded)").each(function(o) {
                var i = e(this).offset().top + 70,
                    a = t + n;
                a > i && e(this).addClass("visible")
            })
        };
    e(document).ready(function() {
        if (e(window).outerWidth(!0) <= o) {
            var a = t.height();
            i(a, t.scrollTop())
        }
        t.scroll(n), window.addEventListener("resize", function(n) {
            setTimeout(function() {
                if (e(window).outerWidth(!0) <= o) {
                    var n = t.scrollTop(),
                        a = t.height();
                    i(a, n)
                }
            })
        })
    })
}(jQuery), function(e) {
    e(function() {
        e.fn.qnslider = function() {
            return this.each(function() {
                var n,
                    t,
                    o = e(this),
                    i = e(this).attr("data-interval"),
                    a = 0,
                    s = o.find(".slide"),
                    r = s.length,
                    l = !1,
                    c = 1200;
                n = function(n) {
                    if (!l) {
                        l = !0, o.hasClass("start") || o.addClass("start");
                        var t = o.find(".slide.active");
                        t.addClass("prev-active"), t.removeClass("active"), e(s[n]).toggleClass("active"), setTimeout(function() {
                            t.removeClass("prev-active"), l = !1
                        }, c)
                    }
                }, setTimer = function() {
                    t = setInterval(function() {
                        changeDirection("left"), a = a + 1 >= r ? 0 : a + 1, n(a)
                    }, i)
                }, changeDirection = function(e) {
                    o.hasClass("slider-" + e) || l || (o.removeClass("start"), o.toggleClass("slider-left"), o.toggleClass("slider-right"))
                }, i && (setTimeout(function() {
                    o.addClass("start")
                }, i / 2), setTimer()), o.find(".slider-nav.nav-left").click(function(e) {
                    l || (e.preventDefault(), clearInterval(t), changeDirection("right"), a = a - 1 < 0 ? r - 1 : a - 1, n(a), setTimer())
                }), o.find(".slider-nav.nav-right").click(function(e) {
                    l || (e.preventDefault(), clearInterval(t), changeDirection("left"), a = a + 1 >= r ? 0 : a + 1, n(a), setTimer())
                })
            })
        }, e(window).on("load", function() {
            e(".qnslider").qnslider()
        })
    })
}(jQuery), function(e) {
    e(document).ready(function() {
        var e = [{
                domain: "facebook",
                parameter: "?fb",
                shortcut: "FB"
            }, {
                domain: "instagram",
                parameter: "?ig",
                shortcut: "IG"
            }, {
                domain: "linkedin",
                parameter: "?linkedin",
                shortcut: "LINKEDIN"
            }, {
                domain: "google",
                parameter: "?google",
                shortcut: "GOOGLE"
            }, {
                domain: "gsp",
                parameter: "?gsp",
                shortcut: "GSP"
            }],
            n = e.length,
            t = "",
            o = "";
        if (window.location.search)
            for (i = 0; i < n; i++)
                window.location.search === e[i].parameter && (t = e[i].shortcut);
        if (document.referrer.length > 0 && document.referrer === window.refererFromServer)
            for (i = 0; i < n; i++)
                document.referrer.indexOf(e[i].domain) > 0 && (o = e[i].shortcut);
        t.length > 0 && 0 === o.length ? window.externalTag = t : o.length > 0 && 0 === t.length ? window.externalTag = o : t.length > 0 && o.length > 0 && t === o && (window.externalTag = t)
    })
}(jQuery);

