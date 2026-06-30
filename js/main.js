/* ===== DATA ===== */
const DOMAINS=[
  {key:'finance',label:'Finance'},{key:'consulting',label:'Consulting'},{key:'hr',label:'HR'},
  {key:'product',label:'Product Management'},{key:'marketing',label:'Marketing'},{key:'operations',label:'Operations'}
];
const CATS=[
  {key:'combo',label:'Combos'},{key:'bootcamp',label:'Placement bootcamp'},
  {key:'live',label:'Live projects'},{key:'case',label:'Case competitions'},{key:'cert',label:'Certifications'}
];
const IMG=(id,w)=> (id.startsWith('http') || id.startsWith('images/')) ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w||800}&q=70`;
const COURSES=[
  {id:'flagship-bundle',cat:'combo',type:'Flagship bundle',img:'images/complete-placement-bundle.png',badge:'Best value',rating:4.9,students:4120,level:'All levels',hours:'40+ hrs',instr:'IIM alumni · Prodmark',title:'The Complete Placement Bundle',sub:'Bootcamp, a 2-month live project and case competition prep — everything in one track.',tagline:'Everything you need — from a killer CV to dominating case rounds.',desc:'Our most complete offering. Combines the Placement Bootcamp, a 2-month live consulting project, and case competition mentorship into a single guided track.',price:13999,mrp:14500,off:'Save ₹501',feats:['3–5 expert-reviewed CV slots','5–7 mock PI sessions','2-month live project (Prodmark)','30+ winning case PPTs (AIR 1)','Canva Premium (1 year)','Priority community support'],curriculum:[{t:'Onboarding & profiling',s:'Goal setting and CV audit'},{t:'CV & PI mastery',s:'Reviews and mock interviews'},{t:'Live consulting project',s:'Real deliverables over 2 months'},{t:'Case competition sprint',s:'Frameworks and winning decks'}],optionGroups:[{id:'domain',label:'Choose your live project domain',type:'single',required:true,options:DOMAINS}]},
  {id:'placement-bootcamp',cat:'bootcamp',type:'Solo',img:'images/placement-bootcamp.png',badge:'Bestseller',rating:4.8,students:6240,level:'All levels',hours:'6+ hrs',instr:'IIM alumni panel',title:'Placement Bootcamp',sub:'CV building, mock interviews and core domain sessions to make you Day-1 ready.',tagline:'Our flagship placement programme to make you Day-1 ready.',desc:'Covers CV building, personal interview prep and core domain sessions with personalised feedback from IIM alumni.',price:7499,mrp:7999,off:null,feats:['3–5 expert-reviewed CV slots','7 mock PI sessions','6 hours of live domain sessions','ATS-ready resume templates'],curriculum:[{t:'CV building',s:'Draft, review, ATS optimisation'},{t:'Domain sessions',s:'6 hours across core domains'},{t:'Mock interviews',s:'7 sessions with feedback'}],optionGroups:[{id:'tier',label:'Choose your plan',type:'single',required:true,options:[{key:'master',label:'Master',default:true,price:7499,mrp:7999,feats:['5 expert-reviewed CV slots','7 mock PI sessions','7 mock GDs','6 hours of live domain sessions']},{key:'mini',label:'Mini',price:5499,mrp:5999,feats:['3 expert-reviewed CV slots','5 mock PI sessions','5 mock GDs']}]}]},
  {id:'bootcamp-case',cat:'bootcamp',type:'Combo',img:'photo-1552664730-d307ca884978',badge:null,rating:4.7,students:2110,level:'Intermediate',hours:'12+ hrs',instr:'IIM alumni · AIR 1',title:'Bootcamp + Case Competitions',sub:'Win case competitions while landing placements.',tagline:'Placement training plus case competition mastery.',desc:'A dual-track for consulting aspirants.',price:9499,mrp:9999,off:'5% off',feats:['5 CV slots','30+ winning case PPTs','AIR 1 mentorship','Canva Pro included'],curriculum:[]},
  {id:'bootcamp-live',cat:'bootcamp',type:'Combo',img:'photo-1517245386807-bb43f82c33c4',badge:null,rating:4.8,students:1890,level:'All levels',hours:'16+ hrs',instr:'IIM alumni · Prodmark',title:'Bootcamp + Live Project',sub:'Real consulting experience paired with full placement training.',tagline:'Work on a real live project while preparing for placements.',desc:'Pairs the Placement Bootcamp with a 2-month live project at Prodmark Consultants.',price:11499,mrp:11999,off:'4% off',feats:['5 CV slots','2-month live project','10 live sessions','Real consulting deliverables'],curriculum:[],optionGroups:[{id:'domain',label:'Choose your live project domain',type:'single',required:true,options:DOMAINS}]},
  {id:'live-1',cat:'live',type:'Internship',img:'photo-1542744173-8e7e53415bb0',badge:null,rating:4.6,students:3320,level:'Beginner',hours:'4+ hrs',instr:'Prodmark Consultants',title:'Live Project — 1 Domain',sub:'Pick any one domain, build real deliverables and earn 5 verifiable CV points.',tagline:'Real consulting deliverables with Prodmark Consultants.',desc:'Pick one domain and work on real deliverables over 1–2 months.',price:4000,mrp:4500,off:'11% off',feats:['4 hours of live sessions','5 verifiable CV points','1–2 month tenure','Real client deliverables'],curriculum:[],optionGroups:[{id:'domain',label:'Choose your domain',type:'single',required:true,options:DOMAINS}]},
  {id:'live-2',cat:'live',type:'Internship',img:'photo-1531973576160-7125cd663d86',badge:null,rating:4.7,students:2480,level:'Intermediate',hours:'8+ hrs',instr:'Prodmark Consultants',title:'Live Project — 2 Domains',sub:'Double the exposure across two domains with an AI-ready CV outcome.',tagline:'Cross-domain exposure with an AI-ready CV outcome.',desc:'Work across two domains for double the exposure and 10 CV points.',price:7500,mrp:7999,off:'6% off',feats:['8 hours of live sessions','10 verifiable CV points','AI-ready CV build','Cross-domain exposure'],curriculum:[],optionGroups:[{id:'domain',label:'Choose 2 domains',type:'multi',exact:2,required:true,options:DOMAINS}]},
  {id:'case-dominate',cat:'case',type:'Standalone',img:'images/case-competitions.png',badge:'Bestseller',rating:4.9,students:5010,level:'All levels',hours:'10+ hrs',instr:'AIR 1 mentor',title:'Dominating Case Competitions',sub:'Learn to win from an AIR 1 mentor with 30+ winning PPTs and frameworks.',tagline:'Learn to win case competitions from an AIR 1 mentor.',desc:'Access 30+ winning PPTs, frameworks and presentation techniques.',price:3499,mrp:3999,off:'13% off',feats:['AIR 1 mentor','30+ winning case PPTs','Framework masterclass','Canva Pro included'],curriculum:[]},
  {id:'case-live',cat:'case',type:'Combo',img:'photo-1543286386-713bdd548da4',badge:null,rating:4.7,students:1450,level:'Intermediate',hours:'14+ hrs',instr:'AIR 1 · Prodmark',title:'Case Competitions + Live Project',sub:'Combine case wins with real consulting experience.',tagline:'Double your CV impact.',desc:'Combine case competition wins with a real live consulting project.',price:8499,mrp:8999,off:'6% off',feats:['30+ winning PPTs','4 verifiable CV points','Live consulting project','Canva Pro included'],curriculum:[],optionGroups:[{id:'domain',label:'Choose your live project domain',type:'single',required:true,options:DOMAINS}]},
  {id:'adv-excel',cat:'cert',type:'Certification',img:'images/advanced-excel.png',badge:null,rating:4.6,students:7820,level:'Beginner',hours:'8+ hrs',instr:'Industry trainers',title:'Advanced Excel',sub:'Formulas, pivot tables, dashboards and automation.',tagline:'Master Excel skills that show up on your CV immediately.',desc:'Formulas, pivot tables, dashboards and automation through real-world projects.',price:1199,mrp:1499,off:null,feats:['Real-world projects','Pivot tables & dashboards','Formula & automation mastery','Completion certificate'],curriculum:[]},
  {id:'power-bi',cat:'cert',type:'Certification',img:'images/power-bi.png',badge:null,rating:4.7,students:5630,level:'Beginner',hours:'10+ hrs',instr:'Industry trainers',title:'Power BI Certification',sub:'Build real-time dynamic dashboards.',tagline:'Flexible learning that fits your MBA schedule.',desc:'Build real-time dynamic dashboards with a career-focused curriculum.',price:1499,mrp:null,off:null,feats:['Real-time dynamic dashboards','Career-focused curriculum','Flexible self-paced learning','Completion certificate'],curriculum:[]}
];

const COMPARE_ROWS=[
  {label:'Price',fn:c=>fmt(c.price)},
  {label:'CV review slots',fn:c=>c.feats.find(f=>f.toLowerCase().includes('cv slot'))||'—'},
  {label:'Mock PI / GD sessions',fn:c=>c.feats.find(f=>f.toLowerCase().includes('pi')||f.toLowerCase().includes('mock'))||'—'},
  {label:'Live project',fn:c=>c.feats.find(f=>f.toLowerCase().includes('project'))||'—'},
  {label:'Case competition prep',fn:c=>c.feats.find(f=>f.toLowerCase().includes('case')||f.toLowerCase().includes('ppt'))||'—'},
  {label:'Canva Pro',fn:c=>c.feats.some(f=>f.toLowerCase().includes('canva'))?'✓':'—'},
  {label:'Completion certificate',fn:c=>c.feats.some(f=>f.toLowerCase().includes('certificate'))?'✓':'—'},
  {label:'Level',fn:c=>c.level},
  {label:'Duration',fn:c=>c.hours},
];

const MENTORS=[
  {initials:'IA',name:'[Mentor name]',school:'IIM Ahmedabad',cred:'[1-line credential]'},
  {initials:'XL',name:'[Mentor name]',school:'XLRI Jamshedpur',cred:'[1-line credential]'},
  {initials:'FM',name:'[Mentor name]',school:'FMS Delhi',cred:'[1-line credential]'},
  {initials:'IB',name:'[Mentor name]',school:'IIM Bangalore',cred:'[1-line credential]'}
];
const FAQS=[
  {q:'How is this delivered — live or recorded?',a:'Sessions run live online with mentors, and recordings are shared afterward for anyone who misses a slot.'},
  {q:'When does the next batch start?',a:'New batches open on a rolling basis. Please contact us to confirm the current cohort start date.'},
  {q:"What happens if I'm not satisfied?",a:'Please contact us directly — we will do our best to resolve any concerns.'},
  {q:'How long do I have access to materials?',a:'Access and validity windows are confirmed at enrollment.'},
  {q:'Will I get a certificate at the end?',a:'Yes — every program includes a completion certificate plus CV-ready points you can list on your resume.'},
  {q:'How do I reach my mentor if I have doubts?',a:'Through the MBA Partner community on WhatsApp/Telegram, plus dedicated doubt-clearing slots during the program.'}
];
const TESTIMONIALS=[
  {name:'Nishant Khandelwal',school:'IIM Ahmedabad',outcome:'IIM ABC Convert',quote:'MBA Partner made all the difference. Mentors helped me frame my story and navigate GDPI from a 10% convert chance to actually getting in.'},
  {name:'Shen Shaji',school:'IIM Bangalore',outcome:'Product Management · Media.Net',quote:'Mentors support was immense. My CV was boosted through Live Projects and the Bootcamp shaped my SIP prep. Landed my dream PM role at Media.Net!'},
  {name:'Rutuja Thorat',school:'IIM Calcutta',outcome:'Strategy · Accenture',quote:'MBA Partner cleared the information asymmetry for me. Guidance from mentors who were alumni of my own college helped me land Accenture Strategy SIP.'},
  {name:'Aayushi Gupta',school:'FMS Delhi',outcome:'Amazon',quote:'Being a fresher is haunting in MBA. Live projects and placement prep from great mentors really made the difference. True savior!'},
  {name:'Shruti Satdeve',school:'IIM Udaipur',outcome:'Accenture Strategy',quote:'Live projects at MBA Partner really helped boost my CV and my SIP interview was totally on the project. Placements Bootcamp made it a cakewalk.'},
  {name:'Hemang Agarwal',school:'MDI Gurgaon',outcome:'Reliance Group',quote:'My journey with MBA Partner began with Case Comp sessions and their Live Project further elevated my CV, leading to an amazing SIP at Reliance Group.'},
  {name:'Akula Vamsi',school:'SPJIMR',outcome:'Finance · JM Financials',quote:'As an engineer aiming for Finance roles, it looked difficult. Finance Bootcamp coupled with a live project helped me crack a Finance SIP.'},
  {name:'Shikhar Kapoor',school:'IIM Kozhikode',outcome:'Pine Labs',quote:'Live projects gave my CV the high-stakes experience it was missing. SIP interview felt incredibly smooth. ATS keywords helped get desired shortlists.'},
  {name:'Tanisha Sen',school:'IIM Ranchi',outcome:'Times of India',quote:'From GDPI course to live projects, case comps and placements prep — MBA Partner was with me at every step. Got into Times of India!'},
  {name:'Utsav Jain',school:'NMIMS Mumbai',outcome:'Big 4',quote:'Despite workex with KPMG, my CV lacked finance orientation. MBA Partner helped with the right projects and I got through even in a sluggish market.'},
  {name:'Megha Bhattacharya',school:'IIM Mumbai',outcome:'Kearney',quote:'As a fresher I was afraid of SIPs, but hands-on experience from live projects was a definitive turning point in my interview at Kearney.'}
];
const HOF=[
  {name:'Nishant Khandelwal',school:'IIM Ahmedabad',company:'IIM ABC Convert',quote:'Mentors helped me craft my story for GDPI — went from 10% convert chance to actually getting in.', img:'https://static.wixstatic.com/media/67e5e0_9adcddd217334ce5818c5156afc9b22a~mv2.jpg/v1/crop/x_0,y_54,w_400,h_239/fill/w_550,h_329,fp_0.50_0.50,lg_1,q_80,enc_avif,quality_auto/1743480492229.jpg'},
  {name:'Shen Shaji',school:'IIM Bangalore',company:'Media.Net — Product Mgmt',quote:'Live Projects boosted my CV and the Bootcamp shaped my SIP prep. Landed my dream PM role!', img:'https://static.wixstatic.com/media/67e5e0_44e10e2b5f034b028e21f1a59d58f4f9~mv2.jpg/v1/fill/w_550,h_329,fp_0.57_0.17,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1742217638011.jpg'},
  {name:'Rutuja Thorat',school:'IIM Calcutta',company:'Accenture Strategy',quote:'MBA Partner cleared the information asymmetry for me. Got into Accenture Strategy for my SIP.', img:'https://static.wixstatic.com/media/67e5e0_cd37e4ff87d54ce2bef947d27e341bbd~mv2.jpg/v1/crop/x_0,y_507,w_1571,h_938/fill/w_550,h_329,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20241218-WA0007_edited.jpg'},
];
const BENEFIT_CARDS=[
  {name:'Aayushi Gupta',role:'Amazon',school:'FMS Delhi',quote:'Being a fresher is haunting in MBA. Live projects and placement prep from great mentors made the real difference. True savior!',img:'https://static.wixstatic.com/media/67e5e0_da6685676ed34031bded6493ce07b29c~mv2.jpg/v1/fill/w_59,h_59,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1757962449391.jpg'},
  {name:'Shruti Satdeve',role:'Accenture Strategy',school:'IIM Udaipur',quote:'Live projects at MBA Partner really helped boost my CV and my SIP interview was totally based on the project.'},
  {name:'Megha Bhattacharya',role:'Kearney',school:'IIM Mumbai',quote:'Hands-on experience from live projects was a definitive turning point in my SIP interview at Kearney.'},
];

/* ===== UTILITIES ===== */
const fmt=n=>'₹'+Number(n).toLocaleString('en-IN');
const byId=id=>COURSES.find(c=>c.id===id);
const stars=r=>{let h='';for(let i=1;i<=5;i++)h+=`<i class="ti ${r>=i?'ti-star-filled':(r>=i-.5?'ti-star-half-filled':'ti-star')}"></i>`;return h;};

let cart=[],activeCat='all',query='',sort='popular',appliedCoupon=null;
let detailState={courseId:null,selected:{}};
let compareSlots=[null,null,null,null];
let cpickerSlotIdx=null;
const SORTS=[{key:'popular',label:'Most popular'},{key:'rating',label:'Highest rated'},{key:'priceLow',label:'Price: low to high'},{key:'priceHigh',label:'Price: high to low'},{key:'discount',label:'Biggest discount'}];

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
function observeReveals(scope){(scope||document).querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));}

function syncCart(){
  const n=cart.length;
  document.getElementById('cartCount').textContent=n;
  document.getElementById('cartCountMobile').textContent=n;
}
function removeFromCart(i){cart.splice(i,1);syncCart();renderCheckout();}
function showToast(msg){
  const w=document.getElementById('toastWrap');
  const t=document.createElement('div');t.className='toast';
  t.innerHTML='<i class="ti ti-circle-check"></i>'+msg;
  w.appendChild(t);requestAnimationFrame(()=>t.classList.add('show'));
  setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),300);},2400);
}

/* ===== TICKER ===== */
function initTicker(){
  const items=['9.6/10 Avg. Rating','5,000+ Students','98.7% Placed in Desired Domain','IIM · XLRI · FMS Mentors','Live Consulting Projects','AIR 1 Case Mentor','30+ Winning Case PPTs','Canva Pro Included'];
  const inner=document.getElementById('tickerInner');
  const html=items.map(t=>`<span class="ticker-item">${t}<span class="ticker-dot"></span></span>`).join('');
  inner.innerHTML=html+html; // duplicate for seamless loop
}

/* ===== PERSONA TOGGLE ===== */
function switchPersona(p) {
  // Update Buttons
  document.querySelectorAll('.persona-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('btn-' + p).classList.add('active');

  // Update Views
  document.querySelectorAll('.persona-view').forEach(v => {
    v.classList.remove('active');
    // Reset reveals so animation replays
    v.querySelectorAll('.reveal').forEach(r => r.classList.remove('in'));
  });
  
  const target = document.getElementById('pview-' + p);
  target.classList.add('active');
  
  // Re-observe animations on new content
  observeReveals(target);
  window.scrollTo({top: 0, behavior: 'smooth'});
}

/* ===== MOBILE NAV ===== */
document.getElementById('mobileMenuBtn').onclick=()=>{
  const nav=document.getElementById('mobileNav');
  nav.classList.toggle('open');
};
function closeMobileNav(){document.getElementById('mobileNav').classList.remove('open');}

/* ===== ROUTING ===== */
function show(v){
  document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));
  document.getElementById('view-'+v).classList.add('active');
  window.scrollTo(0,0);
}
function goHome(){
  show('home');
  history.pushState(null,'','#');
}
function goToCourses(){
  window.location.href='courses.html';
}
function goToDetail(id){
  show('detail');
  renderDetail(id);
  history.pushState(null,'','#/course/'+id);
}
function goToCheckout(){
  show('checkout');
  renderCheckout();
  history.pushState(null,'','#/checkout');
}
window.onpopstate=()=>{
  const h=location.hash||'';
  if(h.startsWith('#/course/')){show('detail');renderDetail(decodeURIComponent(h.replace('#/course/','')));}
  else if(h==='#/checkout'){show('checkout');renderCheckout();}
  else show('home');
};

/* ===== HOME RENDERS ===== */
function renderHallOfFame(){
  const el=document.getElementById('hofGrid');
  if(!el)return;
  el.innerHTML=HOF.map(h=>`<div class="hof-card reveal">
    <div class="hof-img-wrap">
      <img src="${IMG(h.img, 500)}" alt="${h.name}" loading="lazy"/>
    </div>
    <div class="hof-content">
      <div class="hof-name-row">
        <span class="hof-name">${h.name}</span>
        <a href="#" class="hof-linkedin" aria-label="LinkedIn Profile"><i class="ti ti-brand-linkedin"></i></a>
      </div>
      <div class="hof-school">${h.school}</div>
      <div class="hof-quote">"${h.quote}"</div>
    </div>
  </div>`).join('');
}
function renderBenefitsCards(){
  const el=document.getElementById('benefitsCards');
  if(!el)return;
  el.innerHTML=BENEFIT_CARDS.map(b=>`<div class="b-card"><div class="b-card-avatar">${b.name.charAt(0)}</div><div class="b-card-info"><div class="b-role">${b.role}</div><h4>${b.name}</h4><div class="b-school">${b.school}</div><div class="b-card-quote">"${b.quote}"</div></div></div>`).join('');
}

/* ===== CATALOG ===== */
function sortList(list){
  const a=list.slice();
  if(sort==='popular')a.sort((x,y)=>y.students-x.students);
  if(sort==='rating')a.sort((x,y)=>y.rating-x.rating);
  if(sort==='priceLow')a.sort((x,y)=>x.price-y.price);
  if(sort==='priceHigh')a.sort((x,y)=>y.price-x.price);
  if(sort==='discount')a.sort((x,y)=>(y.mrp?y.mrp-y.price:0)-(x.mrp?x.mrp-x.price:0));
  return a;
}

const CAT_ICON={combo:'ti-stack-2',bootcamp:'ti-rocket',live:'ti-briefcase',case:'ti-trophy',cert:'ti-certificate'};
const CAT_LABEL={combo:'Combo Program',bootcamp:'Placement Bootcamp',live:'Live Project',case:'Case Competition',cert:'Certification'};
function cardHtml(c){
  return `<div class="card reveal" data-open="${c.id}" tabindex="0" role="button" aria-label="View ${c.title}">
    <div class="card-vis cat-${c.cat}">${c.badge?`<span class="badge">${c.badge}</span>`:''}<i class="ti ${CAT_ICON[c.cat]||'ti-school'} cv-mark"></i><div class="cv-info"><span class="cv-chip">${CAT_LABEL[c.cat]||c.type}</span><div class="cv-h">${c.title}</div><div class="cv-meta"><span><i class="ti ti-clock"></i> ${c.hours}</span><span><i class="ti ti-stairs"></i> ${c.level}</span></div></div></div>
    <div class="card-body">
      <div class="card-instr">${c.instr}</div>
      <div class="card-rating"><span class="card-rate-num">${c.rating.toFixed(1)}</span><span class="stars">${stars(c.rating)}</span><span class="card-rate-cnt">(${c.students.toLocaleString('en-IN')})</span></div>
      <div class="card-price-row"><span class="card-price">${fmt(c.price)}</span>${c.mrp?`<span class="card-mrp">${fmt(c.mrp)}</span>`:''}${c.off?`<span class="card-off">${c.off}</span>`:''}</div>
      ${typeof comboBadge==='function'?comboBadge(c):''}
    </div>
  </div>`;
}
function loadImg(img){img.onload=()=>img.classList.add('loaded');img.src=img.dataset.src;if(img.complete&&img.naturalWidth)img.classList.add('loaded');}
function wireCards(scope){
  scope.querySelectorAll('.card[data-open]').forEach(el=>{
    el.onclick=()=>goToDetail(el.dataset.open);
    el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();goToDetail(el.dataset.open);}});
  });
  scope.querySelectorAll('.card-vis img[data-src]').forEach(loadImg);
}

/* ===== DETAIL ===== */
function variantGroupHtml(g){
  const sel=detailState.selected[g.id];const isMulti=g.type==='multi';
  return `<div class="variant-group" data-gid="${g.id}">
    <div class="variant-label">${g.label}${g.exact?' (pick '+g.exact+')':''}</div>
    <div class="variant-pills">${g.options.map(o=>{
      const active=isMulti?(sel||[]).includes(o.key):sel===o.key;
      const priceTag=o.price!=null?` · ${fmt(o.price)}`:'';
      return `<button type="button" class="variant-pill ${active?'sel':''}" data-gid="${g.id}" data-key="${o.key}">${o.label}${priceTag}</button>`;
    }).join('')}</div>
  </div>`;
}
function resolveVariant(c){
  let price=c.price,mrp=c.mrp,feats=c.feats,labels=[];
  (c.optionGroups||[]).forEach(g=>{
    const sel=detailState.selected[g.id];
    if(g.type==='single'){const opt=g.options.find(o=>o.key===sel);if(opt){if(opt.price!=null){price=opt.price;mrp=opt.mrp;feats=opt.feats||feats;}else{labels.push(opt.label+' domain');}}}
    else if(g.type==='multi'){const keys=sel||[];const chosen=g.options.filter(o=>keys.includes(o.key));if(chosen.length)labels.push(chosen.map(o=>o.label).join(' + ')+' domains');}
  });
  return{price,mrp,feats,label:labels.join(' · ')};
}
function groupsSatisfied(c){return(c.optionGroups||[]).every(g=>{if(g.required===false)return true;const sel=detailState.selected[g.id];if(g.type==='multi')return sel&&sel.length===(g.exact||1);return!!sel;});}
function selectVariant(c,g,key){
  if(g.type==='multi'){const arr=detailState.selected[g.id]?detailState.selected[g.id].slice():[];const idx=arr.indexOf(key);if(idx>-1){arr.splice(idx,1);}else{if(g.exact&&arr.length>=g.exact){showToast('You can pick up to '+g.exact+' — remove one first');return;}arr.push(key);}detailState.selected[g.id]=arr;}
  else{detailState.selected[g.id]=key;}
  renderVariantUI(c);
}
function renderVariantUI(c){
  const wrap=document.getElementById('dVariants');
  if(c.optionGroups&&c.optionGroups.length){wrap.innerHTML=c.optionGroups.map(variantGroupHtml).join('');wrap.querySelectorAll('.variant-pill').forEach(btn=>{const g=c.optionGroups.find(g=>g.id===btn.dataset.gid);btn.onclick=()=>selectVariant(c,g,btn.dataset.key);});}
  else{wrap.innerHTML='';}
  updateBuyBoxPricing(c);
}
function updateBuyBoxPricing(c){
  const v=resolveVariant(c);
  let p=`<span class="buy-price">${fmt(v.price)}</span>`;
  if(v.mrp)p+=`<span class="buy-mrp">${fmt(v.mrp)}</span><span class="buy-off">${Math.round((v.mrp-v.price)/v.mrp*100)}% off</span>`;
  document.getElementById('dPriceRow').innerHTML=p;
  document.getElementById('dNote').textContent=v.mrp?`You save ${fmt(v.mrp-v.price)} · one-time payment`:'One-time payment · lifetime access';
  document.getElementById('dFeats').innerHTML=(v.feats||c.feats).map(f=>`<div class="feat-item"><i class="ti ti-circle-check"></i><span>${f}</span></div>`).join('');
}
function addToCart(c){
  if(!groupsSatisfied(c)){showToast('Please make a selection above before continuing');return false;}
  const v=resolveVariant(c);cart.push({...c,price:v.price,mrp:v.mrp,variantLabel:v.label});syncCart();showToast(c.title+' added to cart'+(v.label?' · '+v.label:''));return true;
}
function renderMentors(){
  document.getElementById('dMentors').innerHTML=MENTORS.map(m=>`<div class="mentor-card"><div class="mentor-avatar">${m.initials}</div><div class="mentor-name">${m.name}</div><div class="mentor-school">${m.school}</div><div class="mentor-cred">${m.cred}</div></div>`).join('');
}
function renderFaq(){
  document.getElementById('dFaq').innerHTML=FAQS.map((f,i)=>`<div class="faq-item" data-i="${i}"><button class="faq-q" aria-expanded="false"><span>${f.q}</span><i class="ti ti-chevron-down"></i></button><div class="faq-a">${f.a}</div></div>`).join('');
  document.querySelectorAll('.faq-q').forEach(btn=>btn.onclick=()=>{const item=btn.closest('.faq-item');const open=item.classList.toggle('open');btn.setAttribute('aria-expanded',open);});
}
function renderRelated(c){
  const pool=COURSES.filter(x=>x.id!==c.id);
  let picks=pool.filter(x=>x.cat!==c.cat).sort((a,b)=>b.rating-a.rating).slice(0,3);
  if(picks.length<3){const more=pool.filter(x=>!picks.includes(x)).sort((a,b)=>b.rating-a.rating);picks=picks.concat(more).slice(0,3);}
  const el=document.getElementById('dRelated');el.innerHTML=picks.map(cardHtml).join('');wireCards(el);
}
function renderDetail(id){
  const c=byId(id);if(!c){goHome();return;}
  detailState={courseId:c.id,selected:{}};
  (c.optionGroups||[]).forEach(g=>{if(g.type==='single'){const d=g.options.find(o=>o.default);if(d)detailState.selected[g.id]=d.key;}});
  document.getElementById('bcTitle').textContent=c.title;
  document.getElementById('dType').textContent=c.type;
  document.getElementById('dTitle').textContent=c.title;
  document.getElementById('dTagline').textContent=c.tagline;
  document.getElementById('dRating').innerHTML=`<span class="num">${c.rating.toFixed(1)}</span> <span class="stars">${stars(c.rating)}</span> <span>(${c.students.toLocaleString('en-IN')} students)</span> · <span>${c.level}</span> · <span>${c.hours}</span>`;
  const dbWrap=document.querySelector('#view-detail .dt-banner');if(dbWrap){dbWrap.className='dt-banner course-art course-art-lg cat-'+c.cat;dbWrap.innerHTML='<i class="ti '+(CAT_ICON[c.cat]||'ti-school')+' cv-mark"></i><div class="cv-info"><span class="cv-chip">'+(CAT_LABEL[c.cat]||c.type)+'</span><div class="cv-h">'+c.title+'</div><div class="cv-meta"><span><i class="ti ti-clock"></i> '+c.hours+'</span><span><i class="ti ti-stairs"></i> '+c.level+'</span></div></div>';}
  const biWrap=document.querySelector('#view-detail .buy-vis');if(biWrap){biWrap.className='buy-vis course-art cat-'+c.cat;biWrap.innerHTML='<i class="ti '+(CAT_ICON[c.cat]||'ti-school')+' art-ico"></i>';}
  document.getElementById('dDesc').textContent=c.desc;
  document.getElementById('dCurriculum').innerHTML=(c.curriculum&&c.curriculum.length)?c.curriculum.map((m,i)=>`<div class="curr-item"><div class="curr-num">${i+1}</div><div><div class="curr-t">${m.t}</div><div class="curr-s">${m.s}</div></div></div>`).join(''):`<div class="skeleton">Detailed curriculum will be added once official content is provided.</div>`;
  renderMentors();renderFaq();renderVariantUI(c);
  document.getElementById('dCart').onclick=()=>addToCart(c);
  document.getElementById('dEnroll').onclick=()=>{if(addToCart(c))goToCheckout();};
  renderRelated(c);window.scrollTo(0,0);observeReveals(document.getElementById('view-detail'));
}

/* ===== CHECKOUT ===== */
function renderCheckout(){
  const body=document.getElementById('checkoutBody');
  if(!cart.length){body.innerHTML=`<div class="co-empty"><i class="ti ti-shopping-cart-off"></i><p>Your cart is empty.</p><button class="buy-enroll" style="max-width:220px;margin:0 auto" onclick="goToCourses()">Browse courses</button></div>`;return;}
  const total=cart.reduce((s,c)=>s+c.price,0),mrpTotal=cart.reduce((s,c)=>s+(c.mrp||c.price),0),saved=mrpTotal-total;
  const couponDiscount=appliedCoupon?Math.round(total*appliedCoupon.pct/100):0;
  const grandTotal=total-couponDiscount;
  body.innerHTML=`<div class="co-title">Checkout</div><div class="co-sub">${cart.length} item${cart.length>1?'s':''} in your cart</div>
  <div class="co-grid"><div>
    <div class="co-panel"><h3>Your details</h3>
      <div class="field"><label>Full name</label><input placeholder="Ananya Sharma"/></div>
      <div class="field-row"><div class="field"><label>Email</label><input type="email" placeholder="you@email.com"/></div><div class="field"><label>Phone</label><input placeholder="+91 …"/></div></div>
      <div class="field"><label>College / B-School</label><input placeholder="IIM …"/></div>
    </div>
    <div class="co-panel"><h3>Payment method</h3>
      <div class="pay-opt sel" data-pay="upi"><i class="ti ti-qrcode"></i><div class="pay-opt-t">UPI / QR</div></div>
      <div class="pay-opt" data-pay="card"><i class="ti ti-credit-card"></i><div class="pay-opt-t">Credit / Debit card</div></div>
      <div class="pay-opt" data-pay="netbanking"><i class="ti ti-building-bank"></i><div class="pay-opt-t">Net banking</div></div>
      <div class="pay-note">Payments are processed securely via Razorpay / Wix Payments.</div>
    </div>
  </div>
  <div class="summary"><div class="co-panel"><h3>Order summary</h3>
    ${cart.map((c,i)=>`<div class="sum-item"><div><div class="sum-item-t">${c.title}</div><div class="sum-item-ty">${c.variantLabel||c.type}</div><span class="sum-remove" data-rm="${i}">Remove</span></div><div class="sum-item-p">${fmt(c.price)}</div></div>`).join('')}
    <div class="sum-row"><span>Subtotal</span><span>${fmt(mrpTotal)}</span></div>
    ${saved>0?`<div class="sum-row" style="color:var(--green);font-weight:600"><span>Savings</span><span>− ${fmt(saved)}</span></div>`:''}
    ${appliedCoupon?`<div class="sum-row" style="color:var(--green);font-weight:600"><span>Coupon (${appliedCoupon.code})</span><span>− ${fmt(couponDiscount)}</span></div>`:''}
    <div class="coupon-row"><input id="couponInput" placeholder="Coupon code"/><button id="couponApply" type="button">Apply</button></div>
    <div class="sum-total"><span>Total</span><span>${fmt(grandTotal)}</span></div>
    <button class="co-pay-btn" id="payNow">Pay ${fmt(grandTotal)}</button>
  </div></div></div>`;
  body.querySelectorAll('[data-rm]').forEach(b=>b.onclick=()=>removeFromCart(Number(b.dataset.rm)));
  body.querySelectorAll('.pay-opt').forEach(o=>o.onclick=()=>{body.querySelectorAll('.pay-opt').forEach(x=>x.classList.remove('sel'));o.classList.add('sel');});
  document.getElementById('couponApply').onclick=()=>{const code=(document.getElementById('couponInput').value||'').trim().toUpperCase();if(code==='MBA10'){appliedCoupon={code,pct:10};showToast('Coupon applied — 10% off');renderCheckout();}else{showToast('Invalid coupon code');}};
  document.getElementById('payNow').onclick=()=>{const n=(body.querySelector('input[placeholder="Ananya Sharma"]').value||'').trim(),e=(body.querySelector('input[type="email"]').value||'').trim();if(!n||!e){showToast('Please enter your name and email');return;}openModal('paid',{total:grandTotal});};
}

/* ===== CART DRAWER ===== */
function openCartDrawer(){renderCartDrawer();document.getElementById('cartDrawer').classList.add('open');document.getElementById('drawerOverlay').classList.add('open');}
function closeCartDrawer(){document.getElementById('cartDrawer').classList.remove('open');document.getElementById('drawerOverlay').classList.remove('open');}
function renderCartDrawer(){
  const body=document.getElementById('cartDrawerBody'),foot=document.getElementById('cartDrawerFoot');
  if(!cart.length){body.innerHTML='<div class="cd-empty">Your cart is empty.</div>';foot.innerHTML='';return;}
  body.innerHTML=cart.map((c,i)=>`<div class="cd-item"><div><div class="cd-item-t">${c.title}</div><div class="cd-item-v">${c.variantLabel||c.type}</div><span class="cd-remove" data-rmd="${i}">Remove</span></div><div class="cd-item-p">${fmt(c.price)}</div></div>`).join('');
  body.querySelectorAll('[data-rmd]').forEach(b=>b.onclick=()=>{cart.splice(Number(b.dataset.rmd),1);syncCart();renderCartDrawer();});
  const total=cart.reduce((s,c)=>s+c.price,0);
  foot.innerHTML=`<div class="sum-total" style="border-top:none;padding-top:0;margin-top:0;font-size:18px"><span>Total</span><span>${fmt(total)}</span></div><button class="co-pay-btn" id="drawerCheckout">Go to checkout</button>`;
  document.getElementById('drawerCheckout').onclick=()=>{closeCartDrawer();goToCheckout();};
}
document.getElementById('cartBtn').onclick=openCartDrawer;
document.getElementById('cartBtnMobile').onclick=openCartDrawer;
document.getElementById('drawerClose').onclick=closeCartDrawer;
document.getElementById('drawerOverlay').onclick=closeCartDrawer;

/* ===== TESTI MODAL ===== */
function openTestiModal(){
  document.getElementById('modalTestiGrid').innerHTML=TESTIMONIALS.map(t=>`<div class="testi-card" style="background:var(--surface);border:1px solid var(--line)"><div class="testi-avatar" style="background:var(--orange-light);color:var(--orange-dark)">${t.name.charAt(0)}</div><div class="testi-quote" style="color:var(--ink2)">"${t.quote}"</div><div class="testi-name" style="color:var(--navy)">${t.name}</div><div class="testi-meta">${t.school} · ${t.outcome}</div></div>`).join('');
  document.getElementById('hofModalGrid').innerHTML=HOF.map(h=>`<div class="testi-card" style="background:var(--surface);border:1px solid var(--line)"><div class="testi-avatar" style="overflow:hidden;background:var(--surface2);padding:0"><img src="${IMG(h.img, 150)}" style="width:100%;height:100%;object-fit:cover" alt="${h.name}"/></div><div class="testi-quote" style="color:var(--ink2)">"${h.quote}"</div><div class="testi-name" style="color:var(--navy)">${h.name}</div><div class="testi-meta">${h.school} · ${h.company}</div></div>`).join('');
  document.getElementById('testiModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeTestiModal(){
  document.getElementById('testiModal').classList.remove('open');
  document.body.style.overflow='';
}
document.getElementById('testiModalClose').onclick=closeTestiModal;
document.getElementById('testiModal').addEventListener('click',e=>{if(e.target.id==='testiModal')closeTestiModal();});

/* ===== MODAL ===== */
const modalData={
  login:()=>({ico:'ti-user-circle',title:'Member login',text:'This connects to your existing Wix Members Area once integrated.',action:'Got it',run:null}),
  paid:c=>({ico:'ti-circle-check',title:'Enrollment confirmed',text:'Payment of '+fmt(c.total)+' received. Our team will reach out within 24 hours to onboard you.',action:'Done',run:()=>{cart=[];appliedCoupon=null;syncCart();goHome();}})
};
let modalCtx=null;
function openModal(k,ctx){
  const d=typeof modalData[k]==='function'?modalData[k](ctx):modalData[k];
  modalCtx=d;
  document.getElementById('modalIco').innerHTML='<i class="ti '+d.ico+'"></i>';
  document.getElementById('modalTitle').textContent=d.title;
  document.getElementById('modalText').textContent=d.text;
  document.getElementById('modalAction').textContent=d.action;
  document.getElementById('modal').classList.add('open');
}
function closeModal(){document.getElementById('modal').classList.remove('open');}
document.getElementById('modalClose').onclick=closeModal;
document.getElementById('modalAction').onclick=()=>{if(modalCtx&&modalCtx.run)modalCtx.run();closeModal();};
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal();});
document.querySelectorAll('[data-modal]').forEach(b=>b.addEventListener('click',e=>{
  e.stopPropagation();
  if(b.dataset.modal==='testimonials')openTestiModal();
  else openModal(b.dataset.modal);
}));
document.getElementById('loginBtn').onclick=()=>window.location.href='login.html';
document.querySelectorAll('#loginBtnMobile').forEach(b=>b.onclick=()=>window.location.href='login.html');
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeTestiModal();closeCartDrawer();}});

/* ===== MOBILE CART ICON VISIBILITY ===== */
function updateMobileCart(){
  const w=window.innerWidth;
  const mob=document.getElementById('cartBtnMobile');
  const des=document.getElementById('cartBtn');
  if(w<=900){mob.style.display='flex';des.style.display='none';}
  else{mob.style.display='none';des.style.display='flex';}
}
window.addEventListener('resize',updateMobileCart);
updateMobileCart();

/* ===== INIT ===== */
initTicker();
renderHallOfFame();
renderBenefitsCards();
observeReveals(document);
// pull live prices from the Google Sheet (if configured)
if(typeof initCoursesDynamic==='function') initCoursesDynamic();
