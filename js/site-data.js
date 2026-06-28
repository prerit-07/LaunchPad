/* ============================================================
   MBA PARTNER — PUBLIC SITE DATA LAYER
   ------------------------------------------------------------
   Powers the public pages (Placements wall, Mentors) from a
   Google Sheet. The client edits the sheet → the site updates.

   TO GO LIVE:
     1. Build a Google Sheet with the tabs below (see CONTENT-GUIDE.md).
     2. Publish it to the web + set link sharing to "Anyone (Viewer)".
     3. Paste its Sheet ID into SITE_SHEET.SHEET_ID and save.

   Until a SHEET_ID is set, the embedded SAMPLE data is used.

   PRIVACY: only public-safe fields live here (name, college,
   company, domain). Student emails/phone numbers are NEVER
   placed on the public site.
============================================================ */

const SITE_SHEET = {
  SHEET_ID: '',                 // <-- paste your Google Sheet ID here to go live
  TABS: {
    placements: 'Placements',   // who got placed where
    mentors:    'Mentors',      // alumni mentors
    colleges:   'Colleges',     // college collaborations / tie-ups
    videos:     'Videos',       // video testimonials
    gdpi:       'GDPI'          // CAT/OMETs GDPI-flagship students (CAT page)
  }
};

/* ---------- SAMPLE DATA (used when SHEET_ID is empty) ---------- */
/* batch: 'final' = final placements (2024-26), 'summer' = summer internships (2025-27) */
const SITE_SAMPLE = {
  placements: [
    // ----- Final placements (2024-26) -----
    { Name:'Divyanshi Jaiswal', College:'NMIMS Mumbai',      Company:'Nomura',              Batch:'final' },
    { Name:'Ananyo Sharma Roy', College:'XLRI Jamshedpur',   Company:'TAS',                 Batch:'final' },
    { Name:'Sai Santosh',       College:'XLRI Delhi',        Company:'Kotak',               Batch:'final' },
    { Name:'Siba Prasad',       College:'IIM Kozhikode',     Company:'Aditya Birla Group',  Batch:'final' },
    { Name:'Dheeraj D Acharya', College:'IIM Bangalore',     Company:'Lodha',               Batch:'final' },
    { Name:'Sovan Bera',        College:'MDI Gurgaon',       Company:'Infosys',             Batch:'final' },
    { Name:'Sri Akhil Yasarapu',College:'IIM Raipur',        Company:'HSBC',                Batch:'final' },
    { Name:'Nikhil Gandhi',     College:'NMIMS Mumbai',      Company:'AB InBev',            Batch:'final' },
    { Name:'Aparna Sudhir',     College:'SIBM Bangalore',    Company:'Deloitte',            Batch:'final' },
    { Name:'Yusuf Hasan',       College:'XLRI Jamshedpur',   Company:'Deloitte',            Batch:'final' },
    { Name:'Bolagani Premchand',College:'IIM Lucknow',       Company:'Amazon',              Batch:'final' },
    { Name:'Akshita Satwal',    College:'MDI Gurgaon',       Company:'Titan',               Batch:'final' },
    { Name:'Bhaskarananda Boro',College:'IIM Bangalore',     Company:'ICICI Bank',          Batch:'final' },
    { Name:'Aditya Vikraman',   College:'MDI Gurgaon',       Company:'Amazon',              Batch:'final' },
    { Name:'Megha Atri',        College:'MDI Gurgaon',       Company:'Korn Ferry',          Batch:'final' },
    { Name:'Varun Kamble',      College:'IIM Lucknow',       Company:'American Express',    Batch:'final' },
    { Name:'Vedika Daley',      College:'XLRI Delhi',        Company:'Accenture',           Batch:'final' },
    { Name:'Shwet Sharma',      College:'IIM Indore',        Company:'Bank of America',     Batch:'final' },
    { Name:'Suhani Mehrotra',   College:'MDI Gurgaon',       Company:'Axis Bank',           Batch:'final' },
    { Name:'Vibhor Gupta',      College:'IMT Ghaziabad',     Company:'Swiggy',              Batch:'final' },
    { Name:'Sahil Kushwaha',    College:'IIM Kozhikode',     Company:'Dezerv',             Batch:'final' },
    { Name:'Paluk Shukla',      College:'IIM Bangalore',     Company:'Accenture',           Batch:'final' },
    { Name:'Aditi Mittal',      College:'XLRI Jamshedpur',   Company:'Accenture',           Batch:'final' },
    { Name:'Mandeep Singh Panwar',College:'IMT Ghaziabad',   Company:'Wells Fargo',         Batch:'final' },
    { Name:'Priyanshi Sharma',  College:'MDI Gurgaon',       Company:'KPMG',                Batch:'final' },
    { Name:'Sonali Singh',      College:'MDI Gurgaon',       Company:'Michael Page',        Batch:'final' },
    { Name:'Shubhendu Das',     College:'IIM Indore',        Company:'ICICI Bank',          Batch:'final' },
    { Name:'Hardik Ruhela',     College:'IIFT Kolkata',      Company:'Indian Oil',          Batch:'final' },
    // ----- Summer internships (2025-27) -----
    { Name:'Apeksha',           College:'IIM Kozhikode',     Company:'Axis Bank',           Batch:'summer', Domain:'Finance' },
    { Name:'Aayushi',           College:'FMS Delhi',         Company:'Amazon',              Batch:'summer', Domain:'Operations' },
    { Name:'Madhumitha',        College:'IIM Bangalore',     Company:'Accenture',           Batch:'summer', Domain:'Consulting' },
    { Name:'Megha',             College:'IIM Mumbai',        Company:'Kearney',             Batch:'summer', Domain:'Marketing' },
    { Name:'Shikhar',           College:'IIM Kozhikode',     Company:'Pine Labs',           Batch:'summer' },
    { Name:'Vedanshi',          College:'XLRI Jamshedpur',   Company:'Amazon',              Batch:'summer', Domain:'Consulting' },
    { Name:'Ayush Agrawal',     College:'IIT Delhi',         Company:'Accenture',           Batch:'summer', Domain:'Consulting' },
    { Name:'Hemang',            College:'MDI Gurgaon',       Company:'Reliance',            Batch:'summer', Domain:'Finance' },
    { Name:'Rishaab',           College:'MDI Gurgaon',       Company:'PhonePe',             Batch:'summer' },
    { Name:'Utsav Jain',        College:'NMIMS Mumbai',      Company:'EY',                  Batch:'summer', Domain:'Finance' },
    { Name:'Yashvi Patel',      College:'NMIMS Mumbai',      Company:'Grupo Bimbo',         Batch:'summer', Domain:'Finance' },
    { Name:'Satyam',            College:'MDI Gurgaon',       Company:'PharmEasy',           Batch:'summer', Domain:'Finance' },
    { Name:'Anshul Pokharna',   College:'BITSOM',            Company:'Intellecap',          Batch:'summer', Domain:'Finance' },
    { Name:'Vasil Ansari',      College:'IIT Delhi',         Company:'Accenture',           Batch:'summer', Domain:'Finance' },
    { Name:'Suhas Patil',       College:'JBIMS',             Company:'ICICI Bank',          Batch:'summer', Domain:'Finance' },
    { Name:'Aditya Singh Bhadouria',College:'IIFT',          Company:'Godrej Consumer',     Batch:'summer', Domain:'Finance' },
    { Name:'Aanchal Bansal',    College:'IIM Udaipur',       Company:'Micron Technology',   Batch:'summer' },
    { Name:'Pavan Pawar',       College:'SIBM Bangalore',    Company:'Ediglobe',            Batch:'summer', Domain:'Marketing' },
    { Name:'Tanisha Sen',       College:'IIM Ranchi',        Company:'Times of India',      Batch:'summer', Domain:'Marketing' },
    { Name:'Devesh',            College:'JBIMS',             Company:'IndusInd',            Batch:'summer', Domain:'Finance' }
  ],

  mentors: [
    { Name:'Yash Gohil',     School:'IIM Ahmedabad',   Company:'Accenture Consulting', Domain:'Consulting',          LinkedIn:'https://www.linkedin.com/in/yashgohil14/' },
    { Name:'Shen Shaji',     School:'IIM Bangalore',   Company:'Media.Net',            Domain:'Product Management',  LinkedIn:'https://www.linkedin.com/in/shenshaji/' },
    { Name:'Vidhi Barolia',  School:'IIM Lucknow',     Company:'PwC US',               Domain:'Finance',            LinkedIn:'https://www.linkedin.com/in/vidhi-barolia-a555a9271/' },
    { Name:'Aadesh Gupta',   School:'IIM Mumbai',      Company:"L'Oreal",              Domain:'Marketing',          LinkedIn:'https://www.linkedin.com/in/aadesh-gupta-609528194/' },
    { Name:'Ananyo Roy',     School:'XLRI Jamshedpur', Company:'TAS',                  Domain:'HR',                 LinkedIn:'https://www.linkedin.com/in/ananyosroy/' },
    { Name:'Ashutosh Gupta', School:'IIM Lucknow',     Company:'Gulf Oil',             Domain:'Operations',         LinkedIn:'https://www.linkedin.com/in/ashutosh-gupta-iiml/' }
  ],

  // --- College collaborations / tie-ups (edit freely in the sheet) ---
  colleges: [
    { Name:'IIM Ahmedabad' },   { Name:'IIM Bangalore' },  { Name:'IIM Calcutta' },
    { Name:'IIM Lucknow' },     { Name:'IIM Indore' },     { Name:'IIM Kozhikode' },
    { Name:'IIM Mumbai' },      { Name:'XLRI Jamshedpur' },{ Name:'FMS Delhi' },
    { Name:'MDI Gurgaon' },     { Name:'SPJIMR' },         { Name:'NMIMS Mumbai' },
    { Name:'JBIMS' },           { Name:'IIFT' },           { Name:'SIBM Pune' },
    { Name:'IMT Ghaziabad' },   { Name:'BITSOM' },         { Name:'GLIM Chennai' }
  ],

  // --- Video testimonials. Leave VideoURL blank to show a "coming soon" card.
  //     Paste a YouTube or Google Drive share link in VideoURL to make it playable. ---
  videos: [
    { Name:'Jigar',    College:'IIM Amritsar',  Company:'Neesh Perfumes', Domain:'Marketing', VideoURL:'https://drive.google.com/file/d/1hdXPP9kV-flTRVH8kEq8Z75Pi2KQIRUy/view', Duration:'' },
    { Name:'Mridul',   College:'IIM Calcutta',  Company:'',               Domain:'',          VideoURL:'https://drive.google.com/file/d/1O8GULMw1TSJq-BJgk1F8i7u3ywEITHeD/view', Duration:'' },
    { Name:'Satwik',   College:'IMT Ghaziabad', Company:'',               Domain:'',          VideoURL:'https://drive.google.com/file/d/1JqSKoRcT1gQD-DCmgwf_P96p5NlcIkWV/view', Duration:'' },
    { Name:'Siddhant', College:'Delhi School of Economics',           Company:'',               Domain:'',          VideoURL:'https://drive.google.com/file/d/1DmKV0o29QQ3dMVucvhQhjgDpUOxI9PE6/view', Duration:'' },
    { Name:'Tushar',   College:'GLIM Chennai',  Company:'Caratlane',      Domain:'',          VideoURL:'https://drive.google.com/file/d/1o7WAPHo1AHYY32DfJsW2Yx46SqHEcx5H/view', Duration:'' },
    { Name:'Ananya',   College:'Welingkar',     Company:'',               Domain:'',          VideoURL:'https://drive.google.com/file/d/1oRElW0Q58PYFSrM5TDP5qzRtArVHFvOr/view', Duration:'' }
  ],

  // --- GDPI Flagship students (CAT/OMETs page). Name + college only (no contact info). ---
  gdpi: [
    { Name:'Sabeen', College:'IIM Lucknow' },        { Name:'Aryan Vivian', College:'NMIMS Mumbai' },
    { Name:'Abhishek Rohilla', College:'IIM Kozhikode' }, { Name:'Divija Bansod', College:'IIM Lucknow' },
    { Name:'Rupali Priyadarshini', College:'IIM Indore' }, { Name:'Varun Gangurde', College:'BITSOM' },
    { Name:'Nikhil Jaiswal', College:'JBIMS' },      { Name:'Tamoghna Haldar', College:'IIM Sambalpur' },
    { Name:'Shivadhwaj SR', College:'IIM Shillong' },{ Name:'Romit Banerjee', College:'GLIM Chennai' },
    { Name:'Kushagra Barai', College:'IIM Mumbai' }, { Name:'Dhamo Dharan', College:'IIT Madras' },
    { Name:'Sandeep', College:'IIM Bangalore' },     { Name:'Pranav', College:'FMS Delhi' },
    { Name:'Gaurav Sarkar', College:'IIM Kozhikode' },{ Name:'Rudra', College:'IIM Trichy' },
    { Name:'Dev Chauhan', College:'IIM Ahmedabad' }, { Name:'Sanjana Rai', College:'MDI Gurgaon' },
    { Name:'Ayan Murmu', College:'IIM Calcutta' },   { Name:'Medha Rajhans', College:'IIM Nagpur' },
    { Name:'Yusuf Hasan', College:'XLRI Jamshedpur' },{ Name:'Aastha Maurya', College:'XLRI Jamshedpur' },
    { Name:'Sankalp Annavarpu', College:'FMS Delhi' },{ Name:'Piyush Kumar Jha', College:'IIM Mumbai' }
  ]
};

/* ---------- GOOGLE SHEETS LOADER (gviz) ---------- */
async function _fetchSiteTab(tabName) {
  const url = `https://docs.google.com/spreadsheets/d/${SITE_SHEET.SHEET_ID}` +
              `/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tabName)}`;
  const res = await fetch(url);
  const text = await res.text();
  const json = JSON.parse(text.replace(/^[\s\S]*?\(/, '').replace(/\);?\s*$/, ''));
  const cols = json.table.cols.map(c => (c.label || c.id || '').trim());
  return json.table.rows.map(row => {
    const obj = {};
    row.c.forEach((cell, i) => { obj[cols[i]] = cell ? cell.v : ''; });
    return obj;
  });
}

let _siteDataCache = null;
async function loadSiteData() {
  if (_siteDataCache) return _siteDataCache;
  if (!SITE_SHEET.SHEET_ID) { _siteDataCache = SITE_SAMPLE; return _siteDataCache; }
  try {
    const [placements, mentors, colleges, videos, gdpi] = await Promise.all([
      _fetchSiteTab(SITE_SHEET.TABS.placements),
      _fetchSiteTab(SITE_SHEET.TABS.mentors),
      _fetchSiteTab(SITE_SHEET.TABS.colleges),
      _fetchSiteTab(SITE_SHEET.TABS.videos),
      _fetchSiteTab(SITE_SHEET.TABS.gdpi)
    ]);
    _siteDataCache = { placements, mentors, colleges, videos, gdpi };
  } catch (err) {
    console.error('Could not load site Google Sheet — using sample data.', err);
    _siteDataCache = SITE_SAMPLE;
  }
  return _siteDataCache;
}

if (typeof module !== 'undefined') {
  module.exports = { SITE_SHEET, SITE_SAMPLE, loadSiteData };
}
