(function () {
  const steps = [
    {
      title: "Wie viele Arbeitsplätze sollen betreut werden?",
      help: "Die Anzahl hilft uns, den Aufwand besser einzuordnen und passende Lösungen vorzuschlagen.",
      hint: "Mehr Arbeitsplätze bedeuten nicht automatisch mehr Aufwand – aber mehr Verantwortung.",
      multi: false,
      choices: [
        { label: "1 – 5", sub: "Arbeitsplätze", key: "wp1", add: 380 },
        { label: "6 – 10", sub: "Arbeitsplätze", key: "wp2", add: 470 },
        { label: "11 – 20", sub: "Arbeitsplätze", key: "wp3", add: 690 },
        { label: "21 – 25", sub: "Arbeitsplätze", key: "wp4", add: 880 },
        { label: "25+", sub: "Arbeitsplätze", key: "wp5", add: 1250 }
      ]
    },
    {
      title: "Wie ist Ihre aktuelle IT-Situation?",
      help: "So verstehen wir, wie viel Betreuung bereits vorhanden ist.",
      hint: "Es gibt kein richtig oder falsch – nur den passenden Rahmen.",
      multi: false,
      choices: [
        { label: "Keine interne IT", sub: "Alles extern", key: "sit1", add: 80 },
        { label: "Teilweise intern", sub: "Unterstützung nötig", key: "sit2", add: 40 },
        { label: "Eigene IT vorhanden", sub: "Punktuell Hilfe", key: "sit3", add: 0 }
      ]
    },
    {
      title: "Welche Leistungen sind relevant?",
      help: "Mehrfachauswahl möglich.",
      hint: "Wir kombinieren nur, was wirklich gebraucht wird.",
      multi: true,
      choices: [
        { label: "IT-Betreuung", sub: "Alltag & Betrieb", key: "l1", add: 0 },
        { label: "Hosting", sub: "Server & Apps", key: "l2", add: 60 },
        { label: "Housing", sub: "Eigene Hardware", key: "l3", add: 90 },
        { label: "Microsoft 365", sub: "Lizenzen & Support", key: "l4", add: 40 }
      ]
    },
    {
      title: "Welchen Support brauchen Sie?",
      help: "Damit der Aufwand für Erreichbarkeit klar wird.",
      hint: "Schneller Support kostet nicht immer mehr – aber er muss geplant sein.",
      multi: false,
      choices: [
        { label: "Bürozeiten", sub: "Mo–Fr", key: "s1", add: 0 },
        { label: "Erweitert", sub: "Abends / Randzeiten", key: "s2", add: 70 },
        { label: "Priorisiert", sub: "Kurze Reaktionszeit", key: "s3", add: 140 }
      ]
    },
    {
      title: "Welche Sicherheitsanforderungen haben Sie?",
      help: "Backup, Schutz und Wiederherstellung bestimmen den Rahmen mit.",
      hint: "Sicherheit ist Teil der Betreuung – nicht ein Extra.",
      multi: false,
      choices: [
        { label: "Standard", sub: "Backup & Basis", key: "sec1", add: 0 },
        { label: "Erhöht", sub: "Backup plus Monitoring", key: "sec2", add: 80 },
        { label: "Hoch", sub: "Kritische Systeme", key: "sec3", add: 160 }
      ]
    }
  ];

  const labels = ["Arbeitsplätze", "Situation", "Leistungen", "Support", "Sicherheit", "Ergebnis"];
  const answers = {};
  let step = 0;

  const elStepper = document.getElementById("stepper");
  const elMeta = document.getElementById("quiz-meta");
  const elTitle = document.getElementById("quiz-title");
  const elHelp = document.getElementById("quiz-help");
  const elChoices = document.getElementById("quiz-choices");
  const elHint = document.getElementById("quiz-hint");
  const elCard = document.getElementById("quiz-card");
  const elResult = document.getElementById("result-panel");
  if (!elCard) return;

  function renderStepper() {
    elStepper.innerHTML = labels.map((l, i) => {
      const cls = i < step ? "step done" : i === step ? "step active" : "step";
      return `<div class="${cls}"><div class="num">${i + 1}</div>${l}</div>`;
    }).join("");
  }

  function selectedKeys() {
    const cur = steps[step];
    const val = answers[step];
    if (cur.multi) return val || [];
    return val ? [val] : [];
  }

  function renderStep() {
    if (step >= steps.length) {
      showResult();
      return;
    }
    const s = steps[step];
    elCard.style.display = "block";
    elResult.classList.remove("visible");
    elMeta.textContent = (step + 1) + "/6";
    elTitle.textContent = s.title;
    elHelp.textContent = s.help;
    elHint.textContent = s.hint;
    const sel = selectedKeys();
    elChoices.innerHTML = s.choices.map((c) => {
      const on = sel.includes(c.key) ? " selected" : "";
      return `<button type="button" class="choice${on}" data-key="${c.key}">${c.label}<small>${c.sub}</small></button>`;
    }).join("");
    elChoices.querySelectorAll(".choice").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (s.multi) {
          const arr = answers[step] ? answers[step].slice() : [];
          const i = arr.indexOf(btn.dataset.key);
          if (i >= 0) arr.splice(i, 1); else arr.push(btn.dataset.key);
          answers[step] = arr;
        } else {
          answers[step] = btn.dataset.key;
        }
        renderStep();
      });
    });
    document.getElementById("quiz-back").style.visibility = step === 0 ? "hidden" : "visible";
    renderStepper();
  }

  function showResult() {
    elCard.style.display = "none";
    let total = 0;
    const tags = [];
    steps.forEach((s, si) => {
      const keys = s.multi ? (answers[si] || []) : (answers[si] ? [answers[si]] : []);
      s.choices.forEach((c) => {
        if (keys.includes(c.key)) {
          total += c.add;
          if (si === 2 || c.label.indexOf("Betreuung") >= 0) tags.push(c.label);
        }
      });
    });
    if (!tags.includes("IT-Betreuung")) tags.unshift("IT-Betreuung");
    tags.push("Backup & Sicherheit", "Support für Mitarbeiter");
    const low = Math.round(total / 10) * 10;
    const high = low + 50;
    document.getElementById("result-price").textContent = low + "–" + high + " €";
    document.getElementById("result-tags").innerHTML = [...new Set(tags)].map((t) => `<span class="tag">✓ ${t}</span>`).join("");
    const cta = document.getElementById("result-cta");
    if (cta) {
      const summary = "Orientierung aus dem Kostenkompass: " + low + "–" + high + " € / Monat. Bausteine: " + [...new Set(tags)].join(", ");
      cta.href = "kontakt.html?topic=" + encodeURIComponent("Kosten / Einschätzung") + "&message=" + encodeURIComponent(summary);
    }
    elResult.classList.add("visible");
    renderStepper();
    elResult.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.getElementById("quiz-next").addEventListener("click", () => {
    const s = steps[step];
    const has = s.multi ? (answers[step] && answers[step].length) : answers[step];
    if (!has) return;
    step += 1;
    renderStep();
  });
  document.getElementById("quiz-back").addEventListener("click", () => {
    if (step > 0) { step -= 1; renderStep(); }
  });

  renderStep();
})();
