/* ===== UTILITIES ===== */
const fmt=n=>'₹'+Number(n).toLocaleString('en-IN');
const byId=id=>COURSES.find(c=>c.id===id);
const stars=r=>{let h='';for(let i=1;i<=5;i++)h+=`<i class="ti ${r>=i?'ti-star-filled':(r>=i-.5?'ti-star-half-filled':'ti-star')}"></i>`;return h;};

/* ===== DATA ===== */
const DOMAINS=[
  {key:'marketing',label:'Marketing'},{key:'finance',label:'Finance'},{key:'operations',label:'Operations'},
  {key:'hr',label:'HR'},{key:'strategy',label:'Strategy'}
];
const CATS=[
  {key:'combo',label:'Combos'},{key:'bootcamp',label:'Placement bootcamp'},
  {key:'live',label:'Live projects'},{key:'case',label:'Case competitions'},{key:'cert',label:'Certifications'}
];
const IMG=(id,w)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w||800}&q=70`;
const COURSES=[
  {id:'flagship-bundle',cat:'combo',type:'Flagship bundle',img:'photo-1454165804606-c3d57bc86b40',badge:'Best value',rating:4.9,students:4120,level:'All levels',hours:'40+ hrs',instr:'IIM alumni · Prodmark',title:'The Complete Placement Bundle',sub:'Bootcamp, a 2-month live project and case competition prep — everything in one track.',tagline:'Everything you need — from a killer CV to dominating case rounds.',desc:'Your all-in-one placement success toolkit. This flagship bundle combines expert-led bootcamp training, real-world consulting experience, and case competition mastery. Get personalized feedback on your CV, master interview techniques through live mocks, work on actual client projects, and learn winning case strategies from an AIR 1 mentor. Designed for students who want comprehensive support across all placement dimensions.',price:13999,mrp:14500,off:'Save ₹501',feats:['3–5 expert-reviewed CV slots','5–7 mock PI sessions','5–7 mock GD sessions','2-month live project (Prodmark)','30+ winning case PPTs (AIR 1)','Canva Premium (1 year)','Priority community support','Lifetime access to materials','Career coaching sessions','Domain-specific mentorship'],curriculum:[{t:'Module 1: Profile Building',s:'CV audit, ATS optimization, storytelling framework'},{t:'Module 2: Interview Mastery',s:'PI techniques, GD strategies, domain sessions'},{t:'Module 3: Live Project Execution',s:'Real client work, deliverables, CV points'},{t:'Module 4: Case Competition Sprint',s:'Frameworks, presentations, winning strategies'},{t:'Module 5: Placement Strategy',s:'Offer negotiation, company research, final prep'}],optionGroups:[{id:'domain',label:'Choose your live project domain',type:'single',required:true,options:DOMAINS}]},
  {id:'placement-bootcamp',cat:'bootcamp',type:'Solo',img:'photo-1521737604893-d14cc237f11d',badge:'Bestseller',rating:4.8,students:6240,level:'All levels',hours:'6+ hrs',instr:'IIM alumni panel',title:'Placement Bootcamp',sub:'CV building, mock interviews and core domain sessions to make you Day-1 ready.',tagline:'Our flagship placement programme to make you Day-1 ready.',desc:'The cornerstone of placement success. This intensive bootcamp equips you with everything needed to land your dream internship or full-time role. Learn from IIM alumni how to craft a compelling CV, ace personal interviews, and master core domain concepts. Receive expert feedback on your profile, participate in real mock interviews, and get domain-specific insights across Finance, Marketing, Operations, HR, and Strategy.',price:7499,mrp:7999,off:null,feats:['3–5 expert-reviewed CV slots (Master)','7 mock PI sessions','7 mock GD sessions','6+ hours of live domain sessions','ATS-ready resume templates','Interview preparation guide','GD tips & current affairs kit','Completion certificate','Lifetime access to materials','Mentorship from IIM alumni'],curriculum:[{t:'Module 1: CV Excellence',s:'Draft, reviews, ATS optimization, LinkedIn profile'},{t:'Module 2: Personal Interview Mastery',s:'Techniques, storytelling, real-time practice'},{t:'Module 3: Group Discussion Strategy',s:'GD etiquette, current affairs, frameworks'},{t:'Module 4: Domain Sessions',s:'Finance, Marketing, Operations, HR, Strategy'},{t:'Module 5: Mock Interviews & GDs',s:'Real scenarios with detailed feedback'},{t:'Module 6: Offer Preparation',s:'Negotiation, final steps before Day-1'}],optionGroups:[{id:'tier',label:'Choose your plan',type:'single',required:true,options:[{key:'master',label:'Master',default:true,price:7499,mrp:7999,feats:['5 expert-reviewed CV slots','7 mock PI sessions','7 mock GDs','6 hours of live domain sessions','All materials & lifetime access']},{key:'mini',label:'Mini',price:5499,mrp:5999,feats:['3 expert-reviewed CV slots','5 mock PI sessions','5 mock GDs','Core materials access']}]}]},
  {id:'bootcamp-case',cat:'bootcamp',type:'Combo',img:'photo-1552664730-d307ca884978',badge:null,rating:4.7,students:2110,level:'Intermediate',hours:'12+ hrs',instr:'IIM alumni · AIR 1',title:'Bootcamp + Case Competitions',sub:'Win case competitions while landing placements.',tagline:'Placement training plus case competition mastery.',desc:'Perfect for consulting-track students. This combo bundles our Placement Bootcamp with expert case competition training from an AIR 1 mentor. Build a strong profile with placement-focused CV and interview prep, then dominate case competitions with proven frameworks and winning strategies. Get the best of both worlds—internship placements and case competition wins.',price:9499,mrp:9999,off:'5% off',feats:['5 expert-reviewed CV slots','7 mock PI sessions','7 mock GD sessions','30+ winning case PPTs (AIR 1)','AIR 1 mentorship','Canva Pro (1 year)','Framework masterclass','Case competition prep guides','Live case discussion sessions','Priority community access'],curriculum:[{t:'Phase 1: Placement Foundation',s:'CV, PI, GD mastery'},{t:'Phase 2: Case Framework Building',s:'Structure, hypothesis, analysis'},{t:'Phase 3: Case Practice & Refinement',s:'30+ cases with detailed solutions'},{t:'Phase 4: Presentation Skills',s:'Deck building, delivery, storytelling'},{t:'Phase 5: Competition Preparation',s:'Final prep, Q&A, offer strategy'}]},
  {id:'bootcamp-live',cat:'bootcamp',type:'Combo',img:'photo-1517245386807-bb43f82c33c4',badge:null,rating:4.8,students:1890,level:'All levels',hours:'16+ hrs',instr:'IIM alumni · Prodmark',title:'Bootcamp + Live Project',sub:'Real consulting experience paired with full placement training.',tagline:'Work on a real live project while preparing for placements.',desc:'Combine rigorous placement preparation with hands-on consulting experience. Get CV reviews and interview coaching through our bootcamp, while simultaneously working on real client deliverables with Prodmark Consultants. This dual experience creates a powerful CV that stands out—showing both placement-readiness and consulting acumen.',price:11499,mrp:11999,off:'4% off',feats:['5 expert-reviewed CV slots','7 mock PI sessions','7 mock GD sessions','2-month live project with real client','10+ live mentorship sessions','Real consulting deliverables','5 verifiable CV points','Canva Pro (1 year)','Portfolio-ready case studies','Lifetime materials access'],curriculum:[{t:'Module 1: Bootcamp Foundation',s:'CV excellence, interview mastery'},{t:'Module 2: Live Project Kickoff',s:'Client brief, team formation, planning'},{t:'Module 3: Consulting Sprints',s:'Research, analysis, recommendations'},{t:'Module 4: Deliverable Creation',s:'Presentations, reports, decks'},{t:'Module 5: Placement Finalization',s:'CV updates, interview prep with project exp.'},{t:'Module 6: Portfolio Building',s:'Document learnings and outcomes'}],optionGroups:[{id:'domain',label:'Choose your live project domain',type:'single',required:true,options:DOMAINS}]},
  {id:'live-1',cat:'live',type:'Internship',img:'photo-1542744173-8e7e53415bb0',badge:null,rating:4.6,students:3320,level:'Beginner',hours:'4+ hrs',instr:'Prodmark Consultants',title:'Live Project — 1 Domain',sub:'Pick any one domain, build real deliverables and earn 5 verifiable CV points.',tagline:'Real consulting deliverables with Prodmark Consultants.',desc:'Launch your consulting career with real-world experience. Work for 1-2 months on actual client projects in your chosen domain. Gain practical skills, build portfolio-ready case studies, and earn verifiable CV points that make you stand out to recruiters. Perfect for starting your consulting journey or complementing other placement programs.',price:4000,mrp:4500,off:'11% off',feats:['4+ hours of live mentorship sessions','5 verifiable CV points','1–2 month engagement','Real client deliverables','Portfolio case study','Completion certificate','Mentorship from consultants','Networking with cohort','LinkedIn recommendation','Domain expertise building'],curriculum:[{t:'Week 1-2: Onboarding & Client Brief',s:'Understand client needs, team formation'},{t:'Week 2-4: Research & Analysis',s:'Market analysis, problem definition'},{t:'Week 4-6: Solution Development',s:'Framework application, recommendations'},{t:'Week 6-8: Deliverable & Presentation',s:'Final report, deck, client presentation'},{t:'Final: Portfolio Documentation',s:'Case study, learnings, CV points'}],optionGroups:[{id:'domain',label:'Choose your domain',type:'single',required:true,options:DOMAINS}]},
  {id:'live-2',cat:'live',type:'Internship',img:'photo-1531973576160-7125cd663d86',badge:null,rating:4.7,students:2480,level:'Intermediate',hours:'8+ hrs',instr:'Prodmark Consultants',title:'Live Project — 2 Domains',sub:'Double the exposure across two domains with an AI-ready CV outcome.',tagline:'Cross-domain exposure with an AI-ready CV outcome.',desc:'Maximize your consulting exposure by working across two different domains simultaneously. This intensive 2-month program lets you build expertise in multiple areas, create multiple portfolio pieces, and significantly enhance your CV with 10 points. Ideal for students exploring different consulting tracks or building a diversified skillset.',price:7500,mrp:7999,off:'6% off',feats:['8+ hours of live mentorship','10 verifiable CV points','2 domain expertise areas','2 client deliverables','AI-optimized CV building','Dual portfolio pieces','Networking across domains','Completion certificates (both)','LinkedIn recommendations (x2)','Advanced consulting exposure'],curriculum:[{t:'Month 1 - Domain 1 Track',s:'Client brief, research, analysis, recommendations'},{t:'Month 1 - Domain 2 Track',s:'Client brief, research, analysis, recommendations'},{t:'Parallel: Consulting Fundamentals',s:'Frameworks, problem-solving, presentations'},{t:'Mid-Point: Learnings Integration',s:'Cross-domain insights, CV optimization'},{t:'Month 2: Advanced Projects',s:'Complex cases, strategic recommendations'},{t:'Final: Portfolio & Career Strategy',s:'Case studies, AI CV build, placement prep'}],optionGroups:[{id:'domain',label:'Choose 2 domains',type:'multi',exact:2,required:true,options:DOMAINS}]},
  {id:'case-dominate',cat:'case',type:'Standalone',img:'photo-1567427017947-545c5f8d16ad',badge:'Bestseller',rating:4.9,students:5010,level:'All levels',hours:'10+ hrs',instr:'AIR 1 mentor',title:'Dominating Case Competitions',sub:'Learn to win from an AIR 1 mentor with 30+ winning PPTs and frameworks.',tagline:'Learn to win case competitions from an AIR 1 mentor.',desc:'Master case competitions from India\'s best. Get access to 30+ winning presentations and learn proven strategies directly from an AIR 1 mentor. This program covers problem-solving frameworks, presentation techniques, and real case scenarios. Whether you\'re competing for a consulting role or just want to boost your CV, you\'ll learn exactly what it takes to win.',price:3499,mrp:3999,off:'13% off',feats:['AIR 1 mentor guidance','30+ winning case PPTs','Framework masterclass','Presentation skills training','10+ live case discussions','Case competition calendar','Canva Pro (1 year)','Networking with winners','Completion certificate','Lifetime access to materials'],curriculum:[{t:'Module 1: Case Foundation',s:'Structure, approach, business basics'},{t:'Module 2: Problem-Solving Frameworks',s:'Market sizing, strategy, operations cases'},{t:'Module 3: Analysis & Estimation',s:'Data interpretation, calculations, insights'},{t:'Module 4: Presentation Mastery',s:'Deck building, storytelling, delivery'},{t:'Module 5: Real Case Practice',s:'30+ actual competition cases with solutions'},{t:'Module 6: Competition Strategy',s:'Time management, final prep, Q&A drills'}]},
  {id:'case-live',cat:'case',type:'Combo',img:'photo-1543286386-713bdd548da4',badge:null,rating:4.7,students:1450,level:'Intermediate',hours:'14+ hrs',instr:'AIR 1 · Prodmark',title:'Case Competitions + Live Project',sub:'Combine case wins with real consulting experience.',tagline:'Double your CV impact.',desc:'Get the best of both consulting worlds. Dominate case competitions with AIR 1 mentorship while building real-world consulting experience through live projects. This combo gives recruiters two compelling reasons to hire you—case competition wins AND hands-on project deliverables. Perfect for serious consulting aspirants.',price:8499,mrp:8999,off:'6% off',feats:['30+ winning case PPTs','AIR 1 mentorship','2-month live consulting project','Real client deliverables','5 verifiable CV points','Case discussion sessions','Live project mentorship','Canva Pro (1 year)','Dual portfolio pieces','Networking opportunities'],curriculum:[{t:'Phase 1: Case Fundamentals',s:'Frameworks, problem-solving, analysis'},{t:'Phase 2: Live Project Launch',s:'Client engagement, team formation'},{t:'Phase 3: Parallel Execution',s:'Cases & project work simultaneously'},{t:'Phase 4: Advanced Case Practice',s:'Complex scenarios with real-time feedback'},{t:'Phase 5: Deliverables & Presentations',s:'Project outcomes, case competition final'},{t:'Phase 6: Portfolio & Placement',s:'Build case studies, placement strategy'}],optionGroups:[{id:'domain',label:'Choose your live project domain',type:'single',required:true,options:DOMAINS}]},
  {id:'adv-excel',cat:'cert',type:'Certification',img:'photo-1460925895917-afdab827c52f',badge:null,rating:4.6,students:7820,level:'Beginner',hours:'8+ hrs',instr:'Industry trainers',title:'Advanced Excel',sub:'Formulas, pivot tables, dashboards and automation.',tagline:'Master Excel skills that show up on your CV immediately.',desc:'Turn raw data into decisions — the skill that shows up on your CV immediately. This hands-on certification takes you from core formulas to interactive dashboards and time-saving automation, all through real business case studies. Ideal for Finance, Consulting and Operations aspirants who want practical, recruiter-valued data skills.',price:1199,mrp:1499,off:null,feats:['Real-world business projects','Formulas & functions mastery','Pivot tables & data analysis','Interactive dashboards','Automation with macros (intro)','Charts & visual reporting','Completion certificate','Lifetime access to materials'],curriculum:[{t:'Module 1: Excel Essentials',s:'Navigation, shortcuts and clean-data habits'},{t:'Module 2: Formulas & Functions',s:'Lookup, logical, text and date functions'},{t:'Module 3: Pivot Tables',s:'Summarise, slice and analyse data fast'},{t:'Module 4: Dashboards & Charts',s:'Interactive, recruiter-ready reporting'},{t:'Module 5: Automation',s:'Macros and time-saving workflows'}]},
  {id:'power-bi',cat:'cert',type:'Certification',img:'photo-1551288049-bebda4e38f71',badge:null,rating:4.7,students:5630,level:'Beginner',hours:'10+ hrs',instr:'Industry trainers',title:'Power BI Certification',sub:'Build real-time dynamic dashboards.',tagline:'Flexible learning that fits your MBA schedule.',desc:'Build the real-time, interactive dashboards employers love. This career-focused, self-paced certification takes you from raw data to polished Power BI reports — covering data modelling, DAX and visual storytelling. Perfect for MBA students who want a standout analytics skill that fits around a busy schedule.',price:1499,mrp:null,off:null,feats:['Real-time dynamic dashboards','Data modelling fundamentals','DAX measures & calculations','Interactive visualisations','Publish & share reports','Career-focused projects','Flexible self-paced learning','Completion certificate'],curriculum:[{t:'Module 1: Power BI Basics',s:'Connect, clean and shape data'},{t:'Module 2: Data Modelling',s:'Relationships and a clean data model'},{t:'Module 3: DAX Fundamentals',s:'Measures and calculated columns'},{t:'Module 4: Visualisations',s:'Interactive, on-brand reports'},{t:'Module 5: Publish & Share',s:'Deliver dashboards stakeholders can use'}]}
];

const COMPARE_ROWS=[
  {label:'Price',fn:c=>fmt(c.price)},
  {label:'CV review slots',fn:c=>c.feats.find(f=>f.toLowerCase().includes('cv slot')||f.toLowerCase().includes('cv slot'))||'—'},
  {label:'Mock PI / GD sessions',fn:c=>c.feats.find(f=>f.toLowerCase().includes('pi')||f.toLowerCase().includes('mock'))||'—'},
  {label:'Live project',fn:c=>c.feats.find(f=>f.toLowerCase().includes('project'))||'—'},
  {label:'Case competition prep',fn:c=>c.feats.find(f=>f.toLowerCase().includes('case')||f.toLowerCase().includes('ppt'))||'—'},
  {label:'Combo savings',fn:c=>{const cs=(typeof comboSavings==='function')?comboSavings(c):null;return (cs&&cs.save>0)?('Save '+fmt(cs.save)):'—';}},
  {label:'Canva Pro',fn:c=>c.feats.some(f=>f.toLowerCase().includes('canva'))?'✓':'—'},
  {label:'Completion certificate',fn:c=>c.feats.some(f=>f.toLowerCase().includes('certificate'))?'✓':'—'},
  {label:'Level',fn:c=>c.level},
  {label:'Duration',fn:c=>c.hours},
];

const MENTORS=[
  {initials:'YG',name:'Yash Gohil',school:'IIM Ahmedabad',cred:'Consulting · Accenture'},
  {initials:'AR',name:'Ananyo Roy',school:'XLRI Jamshedpur',cred:'HR · TAS'},
  {initials:'SS',name:'Shen Shaji',school:'IIM Bangalore',cred:'Product · Media.Net'},
  {initials:'VB',name:'Vidhi Barolia',school:'IIM Lucknow',cred:'Finance · PwC US'}
];
const FAQS=[
  {q:'How is this delivered — live or recorded?',a:'Sessions run live online with mentors, and recordings are shared afterward for anyone who misses a slot.'},
  {q:'When does the next batch start?',a:'New batches open on a rolling basis. Call +91 70427 32092 or email bharat.kapoor@prodmarkconsulting.in for the next cohort date.'},
  {q:'What happens if I\'m not satisfied?',a:'Reach out to our team at +91 70427 32092 and we will make it right — full enrolment terms are shared at sign-up.'},
  {q:'How long do I have access to materials?',a:'You keep access to your program materials through your cohort. Contact us for the exact window on your plan.'},
  {q:'Will I get a certificate at the end?',a:'Yes — every program includes a completion certificate plus CV-ready points you can list on your resume.'},
  {q:'How do I reach my mentor if I have doubts?',a:'Through the MBA Partner community on WhatsApp/Telegram, plus dedicated doubt-clearing slots during the program.'}
];
const TESTIMONIALS=[
  {name:'Nishant Khandelwal',school:'IIM Ahmedabad',outcome:'Converted IIM ABC',quote:'MBA Partner made all the difference. Their mentors helped me frame a beautiful profile story and navigate GDPI from a 10% convert chance to actually getting in.'},
  {name:'Shen Shaji',school:'IIM Bangalore',outcome:'Product Management · Media.Net',quote:'The mentors and their support were immense. My CV was boosted through Live Projects and the Placements Bootcamp shaped my SIP prep — I landed my dream PM role at Media.Net.'},
  {name:'Rutuja Thorat',school:'IIM Calcutta',outcome:'Strategy · Accenture',quote:'MBA Partner cleared the information asymmetry for me. Guidance from mentors who were alumni of my college helped me land Accenture Strategy for my Summer Internship.'},
  {name:'Aayushi Gupta',school:'FMS Delhi',outcome:'Amazon',quote:'Being a fresher is haunting in MBA as your CV does not look strong. The live projects and placement prep from great mentors really made the difference. True savior!'},
  {name:'Shruti Satdeve',school:'IIM Udaipur',outcome:'Accenture Strategy',quote:'Live projects at MBA Partner really helped me boost my CV and my SIP interview was totally based on the project. Preparation from the Placements Bootcamp made it a cakewalk.'},
  {name:'Shikhar Kapoor',school:'IIM Kozhikode',outcome:'Pine Labs',quote:'The live projects provided high-stakes experience my CV was missing, making my SIP interview incredibly smooth. ATS keywords really helped in getting the desired shortlists.'},
  {name:'Hemang Agarwal',school:'MDI Gurgaon',outcome:'Reliance Group',quote:'My journey with MBA Partner began with Case Comp sessions and their Live Project further elevated my CV, leading to an amazing SIP experience at Reliance Group.'},
  {name:'Akula Vamsi',school:'SPJIMR',outcome:'Finance · JM Financials',quote:'As an engineer aiming for Finance roles, it looked difficult. The Finance classes of Placements Bootcamp coupled with a live project helped me land my SIP in Finance domain.'},
  {name:'Tanisha Sen',school:'IIM Ranchi',outcome:'Times of India',quote:'I began with the GDPI course, then live projects, case comps, placements prep — and I got into Times of India! An incredible full-circle journey with MBA Partner.'},
  {name:'Utsav Jain',school:'NMIMS Mumbai',outcome:'Big 4',quote:'Despite having workex with KPMG, I could not make my CV finance-oriented. MBA Partner helped me with the right projects and I got through even in this sluggish market.'},
  {name:'Megha Bhattacharya',school:'IIM Mumbai',outcome:'Kearney',quote:'As a fresher I was afraid of SIPs, but the hands-on experience from live projects was a definitive turning point in my interview. Thanks to the MBA Partner Community!'}
];

const HOF=[
  {name:'Nishant Khandelwal',school:'IIM Ahmedabad',company:'IIM ABC Convert',quote:'Mentors helped me craft my story for GDPI — went from 10% convert chance to actually getting in.'},
  {name:'Shen Shaji',school:'IIM Bangalore',company:'Media.Net — Product Mgmt',quote:'Live Projects boosted my CV and the Bootcamp shaped my SIP prep. Landed my dream PM role!'},
  {name:'Rutuja Thorat',school:'IIM Calcutta',company:'Accenture Strategy',quote:'MBA Partner cleared the information asymmetry for me. Got into Strategy at Accenture for my SIP.'},
  {name:'Aayushi Gupta',school:'FMS Delhi',company:'Amazon',quote:'As a fresher, live projects and great mentors made the real difference. True savior for my placements!'},
  {name:'Megha Bhattacharya',school:'IIM Mumbai',company:'Kearney',quote:'Hands-on project experience was a definitive turning point in my SIP interview at Kearney.'},
  {name:'Hemang Agarwal',school:'MDI Gurgaon',company:'Reliance Group',quote:'Case Comp sessions + Live Project elevated my CV and led to an amazing SIP at Reliance Group.'},
  {name:'Akula Vamsi',school:'SPJIMR',company:'JM Financials — Finance',quote:'Finance Bootcamp + live project helped an engineer like me land a finance SIP. Could not believe it!'},
  {name:'Shikhar Kapoor',school:'IIM Kozhikode',company:'Pine Labs',quote:'Live projects gave my CV the high-stakes experience it needed. SIP interview felt incredibly smooth.'},
  {name:'Tanisha Sen',school:'IIM Ranchi',company:'Times of India',quote:'From GDPI course to live projects to placements — MBA Partner was with me at every step of the journey.'},
  {name:'Utsav Jain',school:'NMIMS Mumbai',company:'Big 4',quote:'MBA Partner helped me make my CV finance-ready with projects and I got through in a sluggish market.'},
  {name:'Shruti Satdeve',school:'IIM Udaipur',company:'Accenture Strategy',quote:'My SIP interview was entirely based on my live project. Placements Bootcamp made it a total cakewalk.'}
];

let cart=[],activeCat='all',query='',sort='popular',appliedCoupon=null;
let detailState={courseId:null,selected:{}};
let compareSlots=[null,null,null,null]; // up to 4 slots
let cpickerSlotIdx=null;
const SORTS=[{key:'popular',label:'Most popular'},{key:'rating',label:'Highest rated'},{key:'priceLow',label:'Price: low to high'},{key:'priceHigh',label:'Price: high to low'},{key:'discount',label:'Biggest discount'}];

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
function observeReveals(scope){(scope||document).querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));}

function syncCart(){
  const n=cart.length;
  document.getElementById('cartCount').textContent=n;
  document.getElementById('cartCountMobile').textContent=n;
  document.getElementById('cartBtn').setAttribute('aria-label','Cart, '+n+' items');
}
function removeFromCart(i){cart.splice(i,1);syncCart();renderCheckout();}
function showToast(msg){const w=document.getElementById('toastWrap');const t=document.createElement('div');t.className='toast';t.innerHTML='<i class="ti ti-circle-check"></i>'+msg;w.appendChild(t);requestAnimationFrame(()=>t.classList.add('show'));setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),300);},2400);}

function sortList(list){
  const a=list.slice();
  if(sort==='popular')a.sort((x,y)=>y.students-x.students);
  if(sort==='rating')a.sort((x,y)=>y.rating-x.rating);
  if(sort==='priceLow')a.sort((x,y)=>x.price-y.price);
  if(sort==='priceHigh')a.sort((x,y)=>y.price-x.price);
  if(sort==='discount')a.sort((x,y)=>(y.mrp?y.mrp-y.price:0)-(x.mrp?x.mrp-x.price:0));
  return a;
}

/* ===== TICKER ===== */
function initTicker(){
  const items=['9.6/10 Avg. Rating','5,000+ Students','98.7% Placed in Desired Domain','IIM · XLRI · FMS Mentors','Live Consulting Projects','AIR 1 Case Mentor','30+ Winning Case PPTs','Canva Pro Included'];
  const inner=document.getElementById('tickerInner');
  const html=items.map(t=>`<span class="ticker-item">${t}<span class="ticker-dot"></span></span>`).join('');
  inner.innerHTML=html+html;
}

/* ===== MOBILE NAV ===== */
document.getElementById('mobileMenuBtn').onclick=()=>{
  const nav=document.getElementById('mobileNav');
  nav.classList.toggle('open');
};
function closeMobileNav(){document.getElementById('mobileNav').classList.remove('open');}

/* ===== INTERACTIVE COMPARATOR ===== */
function renderComparator(){
  const picker=document.getElementById('comparatorPicker');
  picker.style.gridTemplateColumns=`repeat(${compareSlots.length},1fr)`;
  picker.innerHTML=compareSlots.map((id,i)=>{
    if(id){
      const c=byId(id);
      return `<button class="comp-pick-btn filled" data-slot="${i}" type="button">
        <span class="comp-pick-name">${c.title}</span>
        <span class="comp-pick-price">${fmt(c.price)}</span>
        <span class="comp-pick-remove">× Remove</span>
      </button>`;
    }
    return `<button class="comp-pick-btn" data-slot="${i}" type="button">
      <i class="ti ti-plus comp-pick-icon"></i>
      <span class="comp-pick-empty">Add a course</span>
    </button>`;
  }).join('');
  picker.querySelectorAll('[data-slot]').forEach(btn=>{
    btn.onclick=()=>{
      const i=Number(btn.dataset.slot);
      if(compareSlots[i]){
        // remove
        compareSlots[i]=null;
        renderComparator();
      } else {
        openCpicker(i);
      }
    };
  });
  renderCompareTable();
}
function renderCompareTable(){
  const filled=compareSlots.filter(Boolean);
  const el=document.getElementById('comparatorTable');
  if(!filled.length){
    el.innerHTML=`<div class="comparator-empty"><i class="ti ti-arrows-compare"></i><p>Select courses above to compare them side by side</p></div>`;
    return;
  }
  const cols=filled.map(id=>byId(id));
  const colCnt=cols.length+1;
  const colTpl=`140px ${cols.map(()=>'1fr').join(' ')}`;
  let html=`<div class="cmp-table-inner">`;
  // header
  html+=`<div class="cmp-row cmp-head" style="grid-template-columns:${colTpl}"><div class="cmp-cell cmp-label"></div>`;
  cols.forEach(c=>{
    html+=`<div class="cmp-cell cmp-col-head">
      <div class="cmp-name">${c.title}</div>
      <div class="cmp-price">${fmt(c.price)}</div>
      <button class="cmp-cta" data-go="${c.id}">View course</button>
    </div>`;
  });
  html+='</div>';
  // rows
  COMPARE_ROWS.forEach(row=>{
    html+=`<div class="cmp-row" style="grid-template-columns:${colTpl}"><div class="cmp-cell cmp-label">${row.label}</div>`;
    cols.forEach(c=>{html+=`<div class="cmp-cell">${row.fn(c)}</div>`;});
    html+='</div>';
  });
  html+='</div>';
  el.innerHTML=html;
  el.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>location.hash='#/course/'+b.dataset.go);
}
function openCpicker(slotIdx){
  cpickerSlotIdx=slotIdx;
  const already=compareSlots.filter(Boolean);
  const list=document.getElementById('cpickerList');
  list.innerHTML=COURSES.map(c=>{
    const taken=already.includes(c.id)&&compareSlots[slotIdx]!==c.id;
    return `<div class="cpicker-item ${taken?'disabled':''}" data-cid="${c.id}">
      <div class="cpicker-item-info">
        <div class="cpicker-item-name">${c.title}</div>
        <div class="cpicker-item-sub">${c.type} · ${c.level}</div>
      </div>
      <div class="cpicker-item-price">${fmt(c.price)}</div>
    </div>`;
  }).join('');
  list.querySelectorAll('.cpicker-item:not(.disabled)').forEach(el=>{
    el.onclick=()=>{
      compareSlots[cpickerSlotIdx]=el.dataset.cid;
      closeCpicker();
      renderComparator();
    };
  });
  document.getElementById('cpickerModal').classList.add('open');
}
function closeCpicker(){document.getElementById('cpickerModal').classList.remove('open');}
document.getElementById('cpickerClose').onclick=closeCpicker;
document.getElementById('cpickerModal').addEventListener('click',e=>{if(e.target===document.getElementById('cpickerModal'))closeCpicker();});
document.getElementById('resetCompare').onclick=()=>{compareSlots=[null,null,null,null];renderComparator();};

/* ===== TABS / SORT ===== */
function renderTabs(){
  const tabs=[{key:'all',label:'All'}].concat(CATS);
  document.getElementById('tabs').innerHTML=tabs.map(t=>`<button class="tab ${t.key===activeCat?'active':''}" data-c="${t.key}">${t.label}</button>`).join('');
  document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{activeCat=b.dataset.c;renderTabs();renderCatalog();});
}
function renderSortMenu(){
  document.getElementById('sortLabel').textContent=(SORTS.find(s=>s.key===sort)||SORTS[0]).label;
  document.getElementById('sortMenu').innerHTML=SORTS.map(s=>`<div class="sort-opt ${s.key===sort?'sel':''}" data-sort="${s.key}">${s.label}<i class="ti ti-check"></i></div>`).join('');
  document.querySelectorAll('#sortMenu .sort-opt').forEach(o=>o.onclick=()=>{sort=o.dataset.sort;document.getElementById('sortWrap').classList.remove('open');renderSortMenu();renderCatalog();});
}
document.getElementById('sortBtn').onclick=e=>{e.stopPropagation();document.getElementById('sortWrap').classList.toggle('open');};
document.addEventListener('click',e=>{if(!e.target.closest('#sortWrap'))document.getElementById('sortWrap').classList.remove('open');});

/* ===== CARDS ===== */
function cardHtml(c){
  return `<div class="card reveal" data-open="${c.id}" tabindex="0" role="button" aria-label="View ${c.title}">
    <div class="card-vis">${c.badge?`<span class="badge">${c.badge}</span>`:''}<img data-src="${IMG(c.img,640)}" alt="${c.title}"/><span class="vtype">${c.type}</span></div>
    <div class="card-body">
      <div class="card-title">${c.title}</div>
      <div class="card-instr">${c.instr}</div>
      <div class="card-rating"><span class="card-rate-num">${c.rating.toFixed(1)}</span><span class="stars">${stars(c.rating)}</span><span class="card-rate-cnt">(${c.students.toLocaleString('en-IN')})</span></div>
      <div class="card-meta"><span><i class="ti ti-clock"></i>${c.hours}</span><span><i class="ti ti-stairs"></i>${c.level}</span></div>
      <div class="card-price-row"><span class="card-price">${fmt(c.price)}</span>${c.mrp?`<span class="card-mrp">${fmt(c.mrp)}</span>`:''}${c.off?`<span class="card-off">${c.off}</span>`:''}</div>
      ${typeof comboBadge==='function'?comboBadge(c):''}
    </div>
  </div>`;
}
function loadImg(img){img.onload=()=>img.classList.add('loaded');img.src=img.dataset.src;if(img.complete&&img.naturalWidth)img.classList.add('loaded');}
function wireCards(scope){
  scope.querySelectorAll('.card[data-open]').forEach(el=>{
    el.onclick=()=>location.hash='#/course/'+el.dataset.open;
    el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();location.hash='#/course/'+el.dataset.open;}});
  });
  scope.querySelectorAll('.card-vis img[data-src]').forEach(loadImg);
}
function renderCatalog(){
  const body=document.getElementById('catalogBody');
  const q=query.trim().toLowerCase();
  const match=c=>!q||(c.title+' '+c.sub+' '+c.type+' '+c.instr).toLowerCase().includes(q);
  const cats=activeCat==='all'?CATS:CATS.filter(c=>c.key===activeCat);
  let html = (!q) ? `<div class="group-banner reveal">
    <div class="group-banner-l"><i class="ti ti-users"></i>
      <div><b>Enrol with a friend — you BOTH get 30% off</b>
      <span>On Case Comps, Live Projects &amp; every program. Apply the offer at checkout.</span></div>
    </div>
    <button class="group-banner-btn" onclick="window.location.href='enroll.html'">Enrol now</button>
  </div>` : '';
  cats.forEach(cat=>{
    const items=sortList(COURSES.filter(c=>c.cat===cat.key&&match(c)));
    if(!items.length)return;
    html+=`<div class="cat-sec"><h2 class="reveal">${cat.label}</h2><div class="grid">${items.map(cardHtml).join('')}</div></div>`;
  });
  body.innerHTML=html||`<div class="co-empty"><i class="ti ti-search-off"></i><p>No offerings match your search.</p></div>`;
  body.querySelectorAll('.card[data-open]').forEach((el,i)=>{el.style.transitionDelay=(Math.min(i,8)*55)+'ms';});
  wireCards(body);observeReveals(body);
}

function applySearch(v){
  query=v;
  const desktopSearch = document.getElementById('searchInput');
  if(desktopSearch) desktopSearch.value=v;

  const heroSearch = document.getElementById('searchInputHero');
  if(heroSearch) heroSearch.value=v;

  const mobileSearch = document.getElementById('searchInputMobile');
  if(mobileSearch) mobileSearch.value=v;

  if(!document.getElementById('view-catalog').classList.contains('active'))location.hash='#/';
  renderCatalog();
}
const desktopSearchEl = document.getElementById('searchInput');
if(desktopSearchEl) desktopSearchEl.addEventListener('input',e=>applySearch(e.target.value));

const heroSearchEl = document.getElementById('searchInputHero');
if(heroSearchEl) heroSearchEl.addEventListener('input',e=>applySearch(e.target.value));

const mobileSearchEl = document.getElementById('searchInputMobile');
if(mobileSearchEl) mobileSearchEl.addEventListener('input',e=>applySearch(e.target.value));


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
  // Login is required before adding to cart (prototype: browser session).
  if(window.MBAauth && !MBAauth.isLoggedIn()){
    MBAauth.setReturn(location.href);
    showToast('Please log in to add courses to your cart');
    setTimeout(function(){location.href='login.html';},800);
    return false;
  }
  if(!groupsSatisfied(c)){showToast('Please make a selection above before continuing');return false;}
  const v=resolveVariant(c);cart.push({...c,price:v.price,mrp:v.mrp,variantLabel:v.label});syncCart();showToast(c.title+' added to cart'+(v.label?' · '+v.label:''));return true;
}
function renderMentors(){document.getElementById('dMentors').innerHTML=MENTORS.map(m=>`<div class="mentor-card"><div class="mentor-avatar">${m.initials}</div><div class="mentor-name">${m.name}</div><div class="mentor-school">${m.school}</div><div class="mentor-cred">${m.cred}</div></div>`).join('');}
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
  const c=byId(id);if(!c){location.hash='#/';return;}
  detailState={courseId:c.id,selected:{}};
  (c.optionGroups||[]).forEach(g=>{if(g.type==='single'){const d=g.options.find(o=>o.default);if(d)detailState.selected[g.id]=d.key;}});
  document.getElementById('bcTitle').textContent=c.title;
  document.getElementById('dType').textContent=c.type;
  document.getElementById('dTitle').textContent=c.title;
  document.getElementById('dTagline').textContent=c.tagline;
  document.getElementById('dRating').innerHTML=`<span class="num">${c.rating.toFixed(1)}</span> <span class="stars">${stars(c.rating)}</span> <span>(${c.students.toLocaleString('en-IN')} students)</span> · <span>${c.level}</span> · <span>${c.hours}</span>`;
  document.getElementById('dBanner').src=IMG(c.img,1400);
  document.getElementById('buyImg').src=IMG(c.img,640);
  document.getElementById('dDesc').textContent=c.desc;
  // combo savings callout (injected after the description)
  (function(){
    const desc=document.getElementById('dDesc');
    let box=document.getElementById('comboSaveBox');
    const html=(typeof comboDetailHtml==='function')?comboDetailHtml(c):'';
    if(html){
      if(!box){box=document.createElement('div');box.id='comboSaveBox';desc.insertAdjacentElement('afterend',box);}
      box.outerHTML=html.replace('<div class="combo-save-box">','<div class="combo-save-box" id="comboSaveBox">');
    } else if(box){ box.remove(); }
  })();
  document.getElementById('dCurriculum').innerHTML=(c.curriculum&&c.curriculum.length)?c.curriculum.map((m,i)=>`<div class="curr-item"><div class="curr-num">${i+1}</div><div><div class="curr-t">${m.t}</div><div class="curr-s">${m.s}</div></div></div>`).join(''):`<div class="skeleton">Detailed curriculum will be added once official content is provided.</div>`;
  renderMentors();renderFaq();renderVariantUI(c);
  document.getElementById('dCart').onclick=()=>addToCart(c);
  document.getElementById('dEnroll').onclick=()=>{if(addToCart(c))location.hash='#/checkout';};
  renderRelated(c);window.scrollTo(0,0);observeReveals(document.getElementById('view-detail'));
}

/* ===== CHECKOUT ===== */
function renderCheckout(){
  const body=document.getElementById('checkoutBody');
  if(!cart.length){body.innerHTML=`<div class="co-empty"><i class="ti ti-shopping-cart-off"></i><p>Your cart is empty.</p><button class="buy-enroll" style="max-width:220px;margin:0 auto" onclick="location.hash='#/'">Browse courses</button></div>`;return;}
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
      <div class="pay-note">Payments are simulated — production routes through Wix Payments / Razorpay.</div>
    </div>
    <div class="co-panel group-panel"><h3><i class="ti ti-users"></i> Enrol with a friend — 30% off</h3>
      <p class="group-note">When 2 students join together, you <b>both</b> get 30% off. Add your friend's details to apply.</p>
      <div class="field-row"><div class="field"><label>Friend's name</label><input id="grpName" placeholder="Friend's name"/></div><div class="field"><label>Friend's email</label><input id="grpEmail" type="email" placeholder="friend@email.com"/></div></div>
      <button class="group-apply-btn ${appliedCoupon&&appliedCoupon.code==='GROUP30'?'applied':''}" id="grpApply" type="button">${appliedCoupon&&appliedCoupon.code==='GROUP30'?'✓ Group offer applied — 30% off':'Apply group offer — 30% off'}</button>
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
  document.getElementById('couponApply').onclick=()=>{const code=(document.getElementById('couponInput').value||'').trim().toUpperCase();if(code==='MBA10'){appliedCoupon={code,pct:10};showToast('Coupon applied — 10% off');renderCheckout();}else if(code==='GROUP30'){appliedCoupon={code,pct:30};showToast('Group offer applied — 30% off');renderCheckout();}else{showToast('Invalid coupon code');}};
  const grpBtn=document.getElementById('grpApply');
  if(grpBtn) grpBtn.onclick=()=>{
    const gn=(document.getElementById('grpName').value||'').trim();
    const ge=(document.getElementById('grpEmail').value||'').trim();
    if(!gn||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(ge)){showToast("Add your friend's name and a valid email to apply");return;}
    appliedCoupon={code:'GROUP30',pct:30,group:{name:gn,email:ge}};
    showToast('Group offer applied — you both get 30% off');
    renderCheckout();
  };
  document.getElementById('payNow').onclick=()=>{const n=(body.querySelector('input[placeholder="Ananya Sharma"]').value||'').trim(),e=(body.querySelector('input[type="email"]').value||'').trim();if(!n||!e){showToast('Please enter your name and email');return;}openModal('paid',{total:grandTotal});};
}

/* ===== ROUTING ===== */
function show(v){document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));document.getElementById('view-'+v).classList.add('active');}
function router(){const h=location.hash||'#/';const m=h.match(/^#\/course\/(.+)$/);if(m){show('detail');renderDetail(decodeURIComponent(m[1]));}else if(h==='#/checkout'){show('checkout');renderCheckout();window.scrollTo(0,0);}else{show('catalog');window.scrollTo(0,0);}}
window.addEventListener('hashchange',router);

/* ===== DRAWER & MODALS ===== */
function openCartDrawer(){renderCartDrawer();document.getElementById('cartDrawer').classList.add('open');document.getElementById('drawerOverlay').classList.add('open');}
function closeCartDrawer(){document.getElementById('cartDrawer').classList.remove('open');document.getElementById('drawerOverlay').classList.remove('open');}
function renderCartDrawer(){
  const body=document.getElementById('cartDrawerBody'),foot=document.getElementById('cartDrawerFoot');
  if(!cart.length){body.innerHTML='<div class="cd-empty">Your cart is empty.</div>';foot.innerHTML='';return;}
  body.innerHTML=cart.map((c,i)=>`<div class="cd-item"><div><div class="cd-item-t">${c.title}</div><div class="cd-item-v">${c.variantLabel||c.type}</div><span class="cd-remove" data-rmd="${i}">Remove</span></div><div class="cd-item-p">${fmt(c.price)}</div></div>`).join('');
  body.querySelectorAll('[data-rmd]').forEach(b=>b.onclick=()=>{cart.splice(Number(b.dataset.rmd),1);syncCart();renderCartDrawer();});
  const total=cart.reduce((s,c)=>s+c.price,0);
  foot.innerHTML=`<div class="sum-total" style="border-top:none;padding-top:0;margin-top:0;font-size:18px"><span>Total</span><span>${fmt(total)}</span></div><button class="co-pay-btn" id="drawerCheckout">Go to checkout</button>`;
  document.getElementById('drawerCheckout').onclick=()=>{closeCartDrawer();location.hash='#/checkout';};
}
document.getElementById('cartBtn').onclick=openCartDrawer;
document.getElementById('cartBtnMobile').onclick=openCartDrawer;
document.getElementById('drawerClose').onclick=closeCartDrawer;
document.getElementById('drawerOverlay').onclick=closeCartDrawer;

document.getElementById('mobileSearchBtn').onclick=()=>{document.getElementById('mobileSearchBar').classList.add('open');document.getElementById('searchInputMobile').focus();};
document.getElementById('mobileSearchClose').onclick=()=>document.getElementById('mobileSearchBar').classList.remove('open');

/* TESTIMONIALS MODAL */
function openTestiModal(){
  document.getElementById('modalTestiGrid').innerHTML=TESTIMONIALS.map(t=>`<div class="testi-card" style="background:var(--surface);border:1px solid var(--line)"><div class="testi-avatar" style="background:var(--orange-light);color:var(--orange-dark)">${t.name.charAt(0)}</div><div class="testi-quote" style="color:var(--ink2)">"${t.quote}"</div><div class="testi-name" style="color:var(--navy)">${t.name}</div><div class="testi-meta">${t.school} · ${t.outcome}</div></div>`).join('');
  document.getElementById('hofModalGrid').innerHTML=HOF.map(h=>`<div class="testi-card" style="background:var(--surface);border:1px solid var(--line)"><div class="testi-avatar" style="background:var(--orange-light);color:var(--orange-dark)">${h.name.charAt(0)}</div><div class="testi-quote" style="color:var(--ink2)">"${h.quote}"</div><div class="testi-name" style="color:var(--navy)">${h.name}</div><div class="testi-meta">${h.school} · ${h.company}</div></div>`).join('');
  document.getElementById('testiModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeTestiModal(){
  document.getElementById('testiModal').classList.remove('open');
  document.body.style.overflow='';
}
document.getElementById('testiModalClose').onclick=closeTestiModal;
document.getElementById('testiModal').addEventListener('click',e=>{if(e.target.id==='testiModal')closeTestiModal();});

/* STANDARD MODAL */
const modalData={
  login:()=>({ico:'ti-user-circle',title:'Member login',text:'This connects to your existing Wix Members Area once integrated.',action:'Got it',run:null}),
  paid:c=>({ico:'ti-circle-check',title:'Enrollment confirmed',text:'Payment of '+fmt(c.total)+' successful (demo). On the live site this connects to Wix Payments / Razorpay.',action:'Go to dashboard',run:()=>{if(window.MBAauth){MBAauth.addPurchasedCourses(cart.map(it=>({id:it.id,title:it.title,type:it.type,emoji:it.emoji})));}cart=[];appliedCoupon=null;syncCart();location.href='login.html';}})
};
let modalCtx=null;
function openModal(k,ctx){const d=modalData[k](ctx);modalCtx=d;document.getElementById('modalIco').innerHTML='<i class="ti '+d.ico+'"></i>';document.getElementById('modalTitle').textContent=d.title;document.getElementById('modalText').textContent=d.text;document.getElementById('modalAction').textContent=d.action;document.getElementById('modal').classList.add('open');}
function closeModal(){document.getElementById('modal').classList.remove('open');}
document.getElementById('modalClose').onclick=closeModal;
document.getElementById('modalAction').onclick=()=>{if(modalCtx&&modalCtx.run)modalCtx.run();closeModal();};
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal();});
document.querySelectorAll('[data-modal]').forEach(b=>b.onclick=e=>{
  e.stopPropagation();
  if(b.dataset.modal==='testimonials')openTestiModal();
  else openModal(b.dataset.modal);
});
document.getElementById('loginBtn').onclick=()=>openModal('login');
document.querySelectorAll('#loginBtnMobile').forEach(b=>b.onclick=()=>openModal('login'));

document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeTestiModal();closeCartDrawer();closeCpicker();document.getElementById('mobileSearchBar').classList.remove('open');}});

/* MOBILE CART ICON VISIBILITY */
function updateMobileCart(){
  const w=window.innerWidth;
  const mob=document.getElementById('cartBtnMobile');
  const des=document.getElementById('cartBtn');
  if(w<=960){mob.style.display='flex';des.style.display='none';}
  else{mob.style.display='none';des.style.display='flex';}
}
window.addEventListener('resize',updateMobileCart);
updateMobileCart();

/* ===== INIT ===== */
initTicker();
renderTabs();renderSortMenu();renderCatalog();renderComparator();router();observeReveals(document);
// pull live prices from the Google Sheet (if configured) then re-render
if(typeof initCoursesDynamic==='function') initCoursesDynamic(()=>{renderCatalog();renderComparator();router();observeReveals(document);});
