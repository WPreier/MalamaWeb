(function () {
  const items = [
    { key: 'dedicatedCores', label: 'Dedicated Cores', price: 160, max: 120 },
    { key: 'sharedCores', label: 'Shared Cores', price: 40, max: 240 },
    { key: 'ram', label: 'Active / Reserved RAM (GB)', price: 4, max: 6144 },
    { key: 'ssd', label: 'SSD Reserved Storage (GB)', price: 0.25, max: 144000 },
    { key: 'hdd', label: 'HDD Reserved Backup (GB)', price: 0.1, max: 110000 },
    { key: 'gbitIntern', label: '100 Gbit intern', price: 600, max: 2 },
    { key: 'inetReserved', label: 'Internet Gbit Reserved', price: 1650, max: 5 },
    { key: 'inetShared', label: 'Internet Gbit Shared', price: 80, max: 25 },
    { key: 'inetBest', label: 'Internet best effort', price: 5, max: 100 },
    { key: 'ip', label: 'IP Adressen', price: 50, max: 16 },
    { key: 'ipsec', label: 'IPSEC Fixe VPN', price: 50, max: 50 },
    { key: 'vpnMgmt', label: 'VPN für Management', price: 5, max: 20 },
    { key: 'userVpn', label: 'User-VPN', price: 10, max: 250 },
    { key: 'mLinux', label: 'Managed Linux', price: 50, max: 30 },
    { key: 'mWinTS', label: 'Managed Windows TS', price: 250, max: 6 },
    { key: 'mWinSrv', label: 'Managed Windows Server', price: 75, max: 30 },
    { key: 'mVpc', label: 'Managed VPC', price: 50, max: 120 },
    { key: 'mApp', label: 'Managed App excl. BMD', price: 50, max: 60 },
    { key: 'mBmd', label: 'Managed BMD', price: 250, max: 30 },
    { key: 'exchange', label: 'Exchange Online', price: 4.2, max: 60 },
    { key: 'officeStd', label: 'Office Standard', price: 12, max: 60 },
    { key: 'officePrem', label: 'Office Premium', price: 22, max: 60 }
  ];

  const examples = {
    linuxWeb: {
      label: '32 GB Linux Web + DB + Windows + 8×16 GB PCs',
      data: { sharedCores: 16, ram: 160, ssd: 3000, hdd: 6000, gbitIntern: 1, inetShared: 10, ip: 5, ipsec: 1, vpnMgmt: 2, userVpn: 3 }
    },
    o365backup: {
      label: 'Office 365 Backup',
      data: { sharedCores: 2, ram: 8, hdd: 2000, inetBest: 1, ip: 1, vpnMgmt: 1 }
    },
    ts20: {
      label: 'Terminalserver 20 User',
      data: { sharedCores: 8, ram: 128, ssd: 1000, hdd: 2000, inetShared: 1, inetBest: 1, ip: 4, ipsec: 1, vpnMgmt: 1, userVpn: 20 }
    },
    ts40: {
      label: 'Terminalserver 40 User',
      data: { sharedCores: 32, ram: 576, ssd: 3000, hdd: 6000, gbitIntern: 1, inetShared: 4, inetBest: 1, ip: 2, ipsec: 1, vpnMgmt: 1, userVpn: 20 }
    },
    ts5: {
      label: 'Terminalserver 5 User',
      data: { sharedCores: 8, ram: 40, ssd: 400, hdd: 800, inetShared: 1, inetBest: 1, userVpn: 2 }
    },
    linuxWw: {
      label: 'Linux Warenwirtschaft + 20 virtuelle PCs',
      data: { sharedCores: 32, ram: 192, ssd: 10000, hdd: 20000, inetShared: 4, inetBest: 1, ip: 2, ipsec: 2, vpnMgmt: 1, userVpn: 20 }
    },
    users120: {
      label: '120 User virtuelle PCs + SQL + Ausfallsicherung',
      data: { sharedCores: 160, ram: 1280, ssd: 100000, hdd: 200000, gbitIntern: 4, inetReserved: 2, inetShared: 10, inetBest: 1, ip: 2, ipsec: 5, vpnMgmt: 1, userVpn: 120 }
    }
  };

  function formatEuro(n) {
    return n.toLocaleString('de-AT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
  }

  function renderTable() {
    const tbody = document.getElementById('calc-body');
    tbody.innerHTML = '';
    items.forEach((item, idx) => {
      const tr = document.createElement('tr');
      tr.className = idx % 2 === 0 ? 'row-even' : 'row-odd';
      tr.innerHTML = `
        <td>${item.label}</td>
        <td class="price">${formatEuro(item.price)}</td>
        <td class="qty-cell">
          <input type="number" min="0" max="${item.max}" step="1" value="0"
            data-key="${item.key}" data-price="${item.price}" data-max="${item.max}"
            class="qty-input" aria-label="${item.label}">
          <span class="max-hint">Max. ${item.max}</span>
        </td>
        <td class="line-sum" data-key="${item.key}">0,00 €</td>
      `;
      tbody.appendChild(tr);
    });
    tbody.querySelectorAll('.qty-input').forEach((inp) => {
      inp.addEventListener('input', onQtyChange);
      inp.addEventListener('change', onQtyChange);
    });
  }

  function onQtyChange(e) {
    const inp = e.target;
    let qty = parseFloat(inp.value);
    if (isNaN(qty) || qty < 0) qty = 0;
    const max = parseFloat(inp.dataset.max);
    if (qty > max) {
      inp.classList.add('over-max');
      inp.title = `Maximum: ${max}`;
    } else {
      inp.classList.remove('over-max');
      inp.title = '';
    }
    recalc();
  }

  function recalc() {
    let total = 0;
    let hasOver = false;
    document.querySelectorAll('.qty-input').forEach((inp) => {
      let qty = parseFloat(inp.value) || 0;
      const max = parseFloat(inp.dataset.max);
      if (qty > max) hasOver = true;
      const price = parseFloat(inp.dataset.price) || 0;
      const sum = qty * price;
      total += sum;
      const cell = document.querySelector(`.line-sum[data-key="${inp.dataset.key}"]`);
      if (cell) cell.textContent = formatEuro(sum);
    });
    document.getElementById('grand-total').textContent = formatEuro(total);
    const warn = document.getElementById('max-warning');
    if (warn) {
      warn.style.display = hasOver ? 'block' : 'none';
    }
  }

  function loadExample(key) {
    const ex = examples[key];
    const data = ex ? ex.data : {};
    document.querySelectorAll('.qty-input').forEach((inp) => {
      const v = data[inp.dataset.key];
      inp.value = v != null ? v : 0;
      inp.classList.remove('over-max');
      const max = parseFloat(inp.dataset.max);
      if (v != null && v > max) inp.classList.add('over-max');
    });
    recalc();
  }

  function resetAll() {
    document.getElementById('example-select').value = '';
    document.querySelectorAll('.qty-input').forEach((inp) => {
      inp.value = 0;
      inp.classList.remove('over-max');
    });
    recalc();
  }

  function fillExampleSelect() {
    const sel = document.getElementById('example-select');
    if (!sel) return;
    sel.innerHTML = '<option value="">– Beispiel wählen –</option>';
    Object.keys(examples).forEach((k) => {
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = examples[k].label;
      sel.appendChild(opt);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    fillExampleSelect();
    renderTable();
    document.getElementById('example-select').addEventListener('change', (e) => {
      loadExample(e.target.value);
    });
    document.getElementById('btn-reset').addEventListener('click', resetAll);
  });
})();
