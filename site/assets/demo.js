(function () {
  var demo = document.querySelector("[data-demo]");
  if (!demo) return;

  var typed = demo.querySelector("[data-typed]");
  var replay = demo.querySelector("[data-replay]");
  var full = typed.textContent;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var timers = [];
  var started = false;

  function clear() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function at(ms, fn) {
    timers.push(setTimeout(fn, ms));
  }

  function showFinal() {
    clear();
    demo.classList.remove("is-animating", "is-typing", "is-sent", "is-answered", "is-marked");
    typed.textContent = full;
  }

  function run() {
    clear();
    if (reduce.matches) {
      showFinal();
      return;
    }
    demo.classList.remove("is-sent", "is-answered", "is-marked");
    demo.classList.add("is-animating", "is-typing");
    typed.textContent = "";

    var t = 450;
    for (var i = 1; i <= full.length; i++) {
      (function (n) {
        at(t, function () {
          typed.textContent = full.slice(0, n);
        });
      })(i);
      t += full.charAt(i - 1) === " " ? 70 : 34;
    }

    at(t + 350, function () {
      demo.classList.remove("is-typing");
      demo.classList.add("is-sent");
    });
    at(t + 700, function () {
      demo.classList.remove("is-sent");
      demo.classList.add("is-answered");
    });
    at(t + 1350, function () {
      demo.classList.add("is-marked");
    });
  }

  if (replay) {
    replay.hidden = false;
    replay.addEventListener("click", run);
  }

  reduce.addEventListener &&
    reduce.addEventListener("change", function () {
      if (reduce.matches) showFinal();
    });

  if (reduce.matches) return;

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !started) {
            started = true;
            io.disconnect();
            run();
          }
        });
      },
      { threshold: 0.35 }
    );
    // Hide the answer before the first paint of the animation, so it does not flash.
    demo.classList.add("is-animating");
    typed.textContent = "";
    io.observe(demo);
  } else {
    run();
  }
})();
