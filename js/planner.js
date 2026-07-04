// ============================================================
// NutriPlan — planner.js
// DOM manipulation murni: render tabel, event listener checkbox,
// kalkulasi real-time total kalori/harga, checklist kategori,
// dan badge "Menu Seimbang!" (logic dihitung, tidak hardcode)
// ============================================================

const KATEGORI_LABEL = {
  Pokok: "Makanan Pokok",
  LaukPauk: "Lauk-Pauk",
  Sayur: "Sayur",
  Buah: "Buah",
  Minuman: "Minuman",
};

// state terpilih disimpan sebagai Set berisi id menu
const selectedIds = new Set();
let currentFilter = "Semua";

const tableBody = document.getElementById("menuTableBody");
const countBadge = document.getElementById("countBadge");
const filterBar = document.getElementById("filterBar");

const emptyState = document.getElementById("emptyState");
const resultContent = document.getElementById("resultContent");
const stackGrid = document.getElementById("stackGrid");
const totalKaloriEl = document.getElementById("totalKalori");
const totalHargaEl = document.getElementById("totalHarga");
const catChecklist = document.getElementById("catChecklist");
const balanceBadge = document.getElementById("balanceBadge");

function formatRupiah(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

// ---------- RENDER TABEL MENU ----------
function renderTable() {
  tableBody.innerHTML = ""; // reset

  const list = currentFilter === "Semua"
    ? MENU_DATA
    : MENU_DATA.filter((m) => m.kategori === currentFilter);

  countBadge.textContent = `${list.length} menu`;

  list.forEach((menu) => {
    const tr = document.createElement("tr");
    tr.dataset.id = menu.id;
    if (selectedIds.has(menu.id)) tr.classList.add("is-checked");

    // Gambar
    const tdImg = document.createElement("td");
    const img = document.createElement("img");
    img.src = menu.gambar;
    img.alt = menu.nama;
    img.className = "row-thumb";
    tdImg.appendChild(img);

    // Nama
    const tdNama = document.createElement("td");
    const nameSpan = document.createElement("span");
    nameSpan.className = "row-name";
    nameSpan.textContent = menu.nama;
    tdNama.appendChild(nameSpan);

    // Kategori
    const tdKat = document.createElement("td");
    const catTag = document.createElement("span");
    catTag.className = `cat-tag tag-${menu.kategori}`;
    catTag.textContent = KATEGORI_LABEL[menu.kategori];
    tdKat.appendChild(catTag);

    // Kalori
    const tdKalori = document.createElement("td");
    tdKalori.className = "row-kalori";
    tdKalori.textContent = `${menu.kalori} kkal`;

    // Harga
    const tdHarga = document.createElement("td");
    tdHarga.className = "row-harga";
    tdHarga.textContent = formatRupiah(menu.harga);

    // Checkbox
    const tdChk = document.createElement("td");
    const chk = document.createElement("input");
    chk.type = "checkbox";
    chk.className = "chk";
    chk.checked = selectedIds.has(menu.id);
    chk.addEventListener("change", () => onCheckboxChange(menu.id, chk.checked, tr));
    tdChk.appendChild(chk);

    tr.append(tdImg, tdNama, tdKat, tdKalori, tdHarga, tdChk);
    tableBody.appendChild(tr);
  });
}

// ---------- EVENT: CHECKBOX BERUBAH ----------
function onCheckboxChange(id, checked, rowEl) {
  if (checked) {
    selectedIds.add(id);
    rowEl.classList.add("is-checked");
  } else {
    selectedIds.delete(id);
    rowEl.classList.remove("is-checked");
  }
  updateResultPanel();
}

// ---------- KALKULASI & UPDATE PANEL HASIL ----------
function updateResultPanel() {
  const selectedMenus = MENU_DATA.filter((m) => selectedIds.has(m.id));

  // state kosong
  if (selectedMenus.length === 0) {
    emptyState.style.display = "block";
    resultContent.style.display = "none";
  } else {
    emptyState.style.display = "none";
    resultContent.style.display = "block";
  }

  // stack gambar
  stackGrid.innerHTML = "";
  selectedMenus.forEach((m) => {
    const img = document.createElement("img");
    img.src = m.gambar;
    img.alt = m.nama;
    img.title = m.nama;
    img.className = "stack-thumb";
    stackGrid.appendChild(img);
  });

  // total kalori & harga (sum dinamis)
  const totalKalori = selectedMenus.reduce((sum, m) => sum + m.kalori, 0);
  const totalHarga = selectedMenus.reduce((sum, m) => sum + m.harga, 0);
  totalKaloriEl.textContent = `${totalKalori} kkal`;
  totalHargaEl.textContent = formatRupiah(totalHarga);

  // checklist kategori: kategori terpenuhi jika minimal 1 item dicentang
  const kategoriTerpenuhi = new Set(selectedMenus.map((m) => m.kategori));
  renderChecklist(kategoriTerpenuhi);

  // badge "Menu Seimbang!" — hanya jika seluruh 5 kategori terpenuhi
  const semuaTerpenuhi = KATEGORI_LIST.every((k) => kategoriTerpenuhi.has(k.key));
  balanceBadge.classList.toggle("show", semuaTerpenuhi);
}

function renderChecklist(kategoriTerpenuhi) {
  catChecklist.innerHTML = "";
  KATEGORI_LIST.forEach(({ key, label }) => {
    const met = kategoriTerpenuhi.has(key);

    const item = document.createElement("div");
    item.className = "cat-item" + (met ? " met" : "");

    const nameWrap = document.createElement("div");
    nameWrap.className = "cat-item-name";

    const dot = document.createElement("span");
    dot.className = "cat-dot";
    dot.textContent = met ? "✓" : "";

    const nameText = document.createElement("span");
    nameText.textContent = label;

    nameWrap.append(dot, nameText);

    const status = document.createElement("span");
    status.className = "cat-status";
    status.textContent = met ? "✓ Terpenuhi" : "Belum";

    item.append(nameWrap, status);
    catChecklist.appendChild(item);
  });
}

// ---------- FILTER KATEGORI ----------
filterBar.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-chip");
  if (!btn) return;

  currentFilter = btn.dataset.filter;

  filterBar.querySelectorAll(".filter-chip").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  renderTable();
});

// ---------- INIT ----------
renderTable();
updateResultPanel();