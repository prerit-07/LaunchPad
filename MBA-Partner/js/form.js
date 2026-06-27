// ===== USER DATA =====
const VALID_CREDENTIALS = {
  'ananya@iimb.ac.in': 'Placement2025',
  'rohan@iima.ac.in': 'Bundle2025'
};

const USERS = {
  placement: {
    name: 'Ananya Sharma',
    email: 'ananya@iimb.ac.in',
    role: 'Placement Bootcamp · Master',
    courses: [
      { id: 1, type: 'Placement Bootcamp', title: 'Placement Bootcamp — Master Plan', emoji: '🎯', progress: 55, nextSession: 'Mock PI #5', nextDate: 'Jul 1' },
      { id: 2, type: 'Certification', title: 'Advanced Excel for MBAs', emoji: '📊', progress: 80, nextSession: 'Pivot Tables Module', nextDate: 'Jul 3' },
    ],
    sessions: [
      { day: '01', mon: 'JUL', title: 'Mock PI #5 — Marketing Deep Dive', time: '6:00 PM IST', mentor: 'IIM Bangalore Mentor', type: 'PI Session', soon: true },
      { day: '03', mon: 'JUL', title: 'GD Round #6 — ESG & Sustainability', time: '7:30 PM IST', mentor: 'XLRI Alumna', type: 'GD Round', soon: false },
      { day: '05', mon: 'JUL', title: 'CV Review Session #3', time: '5:00 PM IST', mentor: 'FMS Delhi Mentor', type: 'CV Review', soon: false },
    ],
    materials: [
      { icon: 'ti-file-cv', type: 'pdf', name: 'ATS CV Template Pack', meta: '12 templates · Updated Jun 2025', link: '#' },
      { icon: 'ti-presentation', type: 'ppt', name: 'Winning Case PPTs (30+)', meta: 'AIR 1 Mentor Collection', link: 'https://drive.google.com/drive/folders/1Ir9BWGjYgYsLJwneq9WoTI6dbDezXS_H' },
      { icon: 'ti-file-text', type: 'pdf', name: 'Sample CVs — Finance & Strategy', meta: 'IIM / XLRI / FMS Placements', link: 'https://drive.google.com/drive/folders/18bj7C4I4Ro1DcOBfzF6xrEhNI7SmEZe2' },
      { icon: 'ti-brand-google-drive', type: 'drive', name: 'Live Session Recordings', meta: 'All past sessions · 14 videos', link: '#' },
      { icon: 'ti-books', type: 'drive', name: 'Case Competition Compendiums', meta: 'Full framework library', link: '#' },
      { icon: 'ti-file-zip', type: 'zip', name: 'Interview Prep Kit', meta: 'PI tips + domain Q&A bank', link: '#' },
    ],
    cvDone: 2,
    cvTotal: 5,
    piDone: 4,
    piTotal: 7,
    gdDone: 5,
    gdTotal: 7,
  },
  bundle: {
    name: 'Rohan Mehta',
    email: 'rohan@iima.ac.in',
    role: 'Complete Placement Bundle',
    courses: [
      { id: 1, type: 'Flagship Bundle', title: 'Complete Placement Bundle', emoji: '🚀', progress: 35, nextSession: 'Live Project Kickoff', nextDate: 'Jul 2' },
      { id: 2, type: 'Case Competitions', title: 'Dominating Case Competitions', emoji: '🏆', progress: 60, nextSession: 'Framework Deep-Dive #3', nextDate: 'Jul 4' },
      { id: 3, type: 'Certification', title: 'Power BI Certification', emoji: '📈', progress: 20, nextSession: 'Module 3: Dashboards', nextDate: 'Jul 6' },
    ],
    sessions: [
      { day: '02', mon: 'JUL', title: 'Live Project Kickoff — Marketing Domain', time: '5:30 PM IST', mentor: 'Prodmark Consultants', type: 'Live Project', soon: true },
      { day: '04', mon: 'JUL', title: 'Case Framework Deep-Dive #3', time: '7:00 PM IST', mentor: 'AIR 1 Mentor', type: 'Case Session', soon: false },
      { day: '06', mon: 'JUL', title: 'GD Practice — Industry Analysis', time: '6:30 PM IST', mentor: 'IIM Calcutta Alumni', type: 'GD Round', soon: false },
    ],
    materials: [
      { icon: 'ti-presentation', type: 'ppt', name: 'Winning Case PPTs (30+)', meta: 'AIR 1 Mentor Collection', link: 'https://drive.google.com/drive/folders/1Ir9BWGjYgYsLJwneq9WoTI6dbDezXS_H' },
      { icon: 'ti-file-cv', type: 'pdf', name: 'ATS CV Templates + Samples', meta: 'IIM Placements CV Library', link: '#' },
      { icon: 'ti-brand-google-drive', type: 'drive', name: 'Live Project Drive Materials', meta: 'Marketing domain · Module 1', link: '#' },
      { icon: 'ti-books', type: 'drive', name: 'Case Competition Compendiums', meta: 'Full library · 30+ frameworks', link: '#' },
      { icon: 'ti-file-text', type: 'pdf', name: 'GD Topics & Current Affairs Kit', meta: 'Top 50 topics · Jun 2025', link: '#' },
      { icon: 'ti-brand-figma', type: 'drive', name: 'Canva Pro Access', meta: 'Included with your bundle', link: '#' },
    ],
    cvDone: 1,
    cvTotal: 5,
    piDone: 2,
    piTotal: 7,
    gdDone: 2,
    gdTotal: 7,
  }
};

let currentUser = null;
const SESSION_KEY = 'mbaPartnerSession';

function saveSession(type) {
  if (type) localStorage.setItem(SESSION_KEY, type);
  else localStorage.removeItem(SESSION_KEY);
}

function restoreSession() {
  const savedType = localStorage.getItem(SESSION_KEY);
  if (!savedType || !USERS[savedType]) return;

  currentUser = USERS[savedType];
  const loginPage = document.getElementById('loginPage');
  const dashPage = document.getElementById('dashPage');
  if (loginPage && dashPage) {
    loginPage.classList.add('hidden');
    dashPage.classList.remove('hidden');
    dashPage.classList.add('showing');
    window.scrollTo({ top: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setTimeout(() => initDashboard(), 80);
  }
}

function goToHomeFromDashboard() {
  saveSession(currentUser ? (currentUser.role && currentUser.role.includes('Bundle') ? 'bundle' : 'placement') : null);
  window.location.href = 'index.html';
}

// ===== LOGIN =====
function handleLogin() {
  const email = document.getElementById('emailInput').value.trim();
  const pass = document.getElementById('passInput').value;
  const btn = document.getElementById('loginBtn');
  const btnText = document.getElementById('loginBtnText');

  if (!email || !pass) {
    showError('Please enter your email and password.');
    return;
  }

  btn.classList.add('loading');
  btnText.textContent = 'Signing in...';

  const normalizedEmail = email.toLowerCase();
  const expectedPassword = VALID_CREDENTIALS[normalizedEmail];
  const isValid = expectedPassword && pass === expectedPassword;

  setTimeout(() => {
    btn.classList.remove('loading');
    btnText.textContent = 'Sign in to Dashboard';

    if (!isValid) {
      showError('Invalid credentials. Try ananya@iimb.ac.in / Placement2025 or rohan@iima.ac.in / Bundle2025');
      return;
    }

    const type = normalizedEmail.includes('rohan') || normalizedEmail.includes('bundle') ? 'bundle' : 'placement';
    demoLogin(type);
  }, 600);
}
function showError(msg) {
  const el = document.getElementById('loginError');
  document.getElementById('loginErrorMsg').textContent = msg;
  el.classList.remove('hidden');
}
function demoLogin(type) {
  currentUser = USERS[type];
  saveSession(type);
  const loginPage = document.getElementById('loginPage');
  const dashPage = document.getElementById('dashPage');

  loginPage.classList.add('hidden');
  loginPage.classList.remove('is-exiting');
  dashPage.classList.remove('hidden');
  dashPage.classList.add('showing');
  window.scrollTo({ top: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  setTimeout(() => {
    initDashboard();
  }, 80);
}
function logout() {
  saveSession(null);
  document.getElementById('dashPage').classList.add('hidden');
  document.getElementById('dashPage').classList.remove('showing');
  document.getElementById('loginPage').classList.remove('hidden');
  document.getElementById('loginPage').classList.remove('is-exiting');
  document.getElementById('emailInput').value = '';
  document.getElementById('passInput').value = '';
  document.getElementById('loginError').classList.add('hidden');
  currentUser = null;
}

restoreSession();

// ===== INIT DASHBOARD =====
function initDashboard() {
  const u = currentUser;
  const first = u.name.split(' ')[0];
  const hr = new Date().getHours();
  const greet = hr < 12 ? 'Good morning' : hr < 17 ? 'Good afternoon' : 'Good evening';

  document.getElementById('sidebarAvatar').textContent = first[0];
  document.getElementById('topbarAvatar').textContent = first[0];
  document.getElementById('sidebarName').textContent = u.name;
  document.getElementById('sidebarRole').textContent = u.role;
  document.getElementById('welcomeMsg').textContent = `${greet}, ${first}! 👋`;

  renderCourseCards('overviewCourses', u.courses.slice(0, 2));
  renderCourseCards('allCourseCards', u.courses);
  renderSessions('overviewSessions', u.sessions.slice(0, 2));
  renderSessions('allSessions', u.sessions);
  renderMaterials(u.materials);
  renderProgress(u);
}

function renderCourseCards(containerId, courses) {
  document.getElementById(containerId).innerHTML = courses.map(c => `
    <div class="course-card">
      <div class="course-card-img">${c.emoji}</div>
      <div class="course-card-body">
        <div class="course-card-type">${c.type}</div>
        <div class="course-card-title">${c.title}</div>
        <div class="progress-bar-wrap">
          <div class="progress-label">
            <span>Progress</span><span style="font-weight:700;color:var(--navy)">${c.progress}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width:${c.progress}%"></div>
          </div>
        </div>
      </div>
      <div class="course-card-foot">
        <div class="course-next">Next: <strong>${c.nextSession}</strong> · ${c.nextDate}</div>
        <button class="continue-btn">Continue →</button>
      </div>
    </div>`).join('');
}

function renderSessions(containerId, sessions) {
  document.getElementById(containerId).innerHTML = sessions.map(s => `
    <div class="session-item">
      <div class="session-date"><div class="day">${s.day}</div><div class="mon">${s.mon}</div></div>
      <div class="session-info">
        <div class="session-title">${s.title}</div>
        <div class="session-meta">
          <span><i class="ti ti-clock"></i>${s.time}</span>
          <span><i class="ti ti-user"></i>${s.mentor}</span>
          <span style="background:var(--surface2);padding:2px 8px;border-radius:10px;border:1px solid var(--line)">${s.type}</span>
        </div>
      </div>
      <button class="session-join ${s.soon ? 'soon' : ''}">${s.soon ? '🔴 Join Now' : 'Add to Cal'}</button>
    </div>`).join('');
}

function renderMaterials(materials) {
  const typeMap = { pdf: 'pdf', ppt: 'ppt', drive: 'drive', zip: 'zip' };
  document.getElementById('materialsGrid').innerHTML = materials.map(m => `
    <div class="material-card" onclick="window.open('${m.link}','_blank')">
      <div class="material-ico ${typeMap[m.type] || 'drive'}"><i class="ti ${m.icon}"></i></div>
      <div class="material-name">${m.name}</div>
      <div class="material-meta">${m.meta}</div>
      <div class="material-dl"><i class="ti ti-external-link"></i> Open / Download</div>
    </div>`).join('');
}

function renderProgress(u) {
  // CV Slots
  let cvHtml = `<h3>CV Review Tracker <span style="font-size:12px;font-weight:500;color:var(--ink2);margin-left:8px">${u.cvDone}/${u.cvTotal} completed</span></h3><div class="cv-slots">`;
  for (let i = 1; i <= u.cvTotal; i++) {
    const cls = i <= u.cvDone ? 'done' : i === u.cvDone + 1 ? 'active' : '';
    const icon = i <= u.cvDone ? 'ti-circle-check' : i === u.cvDone + 1 ? 'ti-clock' : 'ti-circle';
    cvHtml += `<div class="cv-slot ${cls}">
      <div class="cv-slot-circle"><i class="ti ${icon}"></i></div>
      <div class="cv-slot-lbl">CV #${i}</div>
    </div>`;
  }
  cvHtml += '</div>';
  document.getElementById('cvTracker').innerHTML = cvHtml;

  // PI + GD Grid
  let piHtml = '';
  for (let i = 1; i <= u.piTotal; i++) {
    const cls = i <= u.piDone ? 'done' : i === u.piDone + 1 ? 'scheduled' : '';
    piHtml += `<div class="pi-item ${cls}"><i class="ti ${cls === 'done' ? 'ti-check' : cls === 'scheduled' ? 'ti-clock' : 'ti-microphone-2'}" style="font-size:16px"></i>PI #${i}</div>`;
  }
  for (let i = 1; i <= u.gdTotal; i++) {
    const cls = i <= u.gdDone ? 'done' : i === u.gdDone + 1 ? 'scheduled' : '';
    piHtml += `<div class="pi-item ${cls}"><i class="ti ${cls === 'done' ? 'ti-check' : cls === 'scheduled' ? 'ti-clock' : 'ti-users'}" style="font-size:16px"></i>GD #${i}</div>`;
  }
  document.getElementById('piGrid').innerHTML = piHtml;
}

// ===== PAGE SWITCHING =====
const pageTitles = { overview: 'Overview', courses: 'My Courses', sessions: 'Sessions', materials: 'Materials & Drive', progress: 'CV & PI Progress' };
function switchPage(page, btn) {
  document.querySelectorAll('.dash-page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('topbarTitle').textContent = pageTitles[page] || page;
  closeSidebar();
}

// ===== MOBILE SIDEBAR =====
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarOverlay').classList.add('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}

// ===== KEYBOARD =====
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.getElementById('passInput') === document.activeElement) handleLogin();
});
