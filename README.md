# MBA Partner — LaunchPad

A comprehensive student portal and placement preparation platform for MBA students. Access your live project materials, CV reviews, mock PI sessions, GD rounds, and compendiums — all in one place.

## 🚀 Features

- **Student Dashboard** — View enrolled courses, upcoming sessions, and progress tracking
- **Course Management** — Browse and track multiple placement bootcamp programs
- **Session Scheduling** — Live sessions for Mock PI, GD rounds, CV reviews, and workshops
- **Materials Library** — Organized study materials, PDFs, presentations, and resources
- **Progress Tracking** — CV reviews, PI preparation, and GD round progress indicators
- **CAT Portal** — CAT exam prediction and preparation tools
- **Exam Predictor** — Estimate CAT percentile with scoring calculator
- **Responsive Design** — Fully optimized for mobile and desktop
- **Multiple Student Tracks** — Placement Bootcamp, Finance, Marketing, Consulting, Tech roles

## 📊 Demo Accounts

Test the platform with these pre-configured demo accounts. All use password: **`12345678`**

| Track | Email | Name |
|-------|-------|------|
| Placement Bootcamp | `ananya@iimb.ac.in` | Ananya Sharma |
| Complete Bundle | `rohan@iima.ac.in` | Rohan Mehta |
| Finance Track | `demo1@iima.ac.in` | Priya Verma |
| Marketing Bootcamp | `demo2@iimb.ac.in` | Aditya Kumar |
| Consulting Track | `demo3@iimx.ac.in` | Nisha Desai |
| Tech Roles | `demo4@iim.ac.in` | Arjun Singh |

### Quick Demo Login
Click any of the demo buttons on the login page to instantly access a pre-configured student account.

## 📁 Project Structure

```
LaunchPad/
├── index.html                 # Home page
├── login.html                 # Student login portal
├── courses.html               # Courses listing page
├── brochure.html              # Program brochures
├── testimonials.html          # Student testimonials
├── cat-predictor.html         # CAT scoring calculator
├── exam-predictor.html        # Exam performance predictor
├── cat-portal.html            # CAT preparation hub
│
├── css/
│   ├── style.css              # Main styles
│   ├── home.css               # Homepage styles
│   ├── login.css              # Login page styles
│   ├── courses.css            # Courses page styles
│   ├── brochure.css           # Brochure styles
│   ├── cat-predictor.css      # CAT predictor styles
│   ├── exam-predictor.css     # Exam predictor styles
│   └── cat-portal.css         # CAT portal styles
│
├── js/
│   ├── main.js                # Main dashboard functionality
│   ├── form.js                # Login and authentication
│   ├── navbar.js              # Navigation menu
│   ├── search.js              # Search functionality
│   ├── animations.js          # UI animations
│   ├── dashboard-data.js      # Student data layer
│   ├── site-data.js           # Static site content
│   ├── courses-dynamic.js     # Dynamic course loading
│   ├── cat-predictor.js       # CAT calculator logic
│   ├── exam-predictor.js      # Exam predictor logic
│   └── cat-portal.js          # CAT portal features
│
├── README.md                  # This file
├── CONTENT-GUIDE.md           # Content structure documentation
├── ENROLLMENT-FLOW.md         # Student enrollment flow
└── WIX-FLOW-GUIDE.md          # Wix integration guide
```

## 🔐 Authentication

### Login System
- Email and password authentication
- Session persistence using localStorage
- Session key: `mbaPartnerSession`

### Demo Login Routes
All demo accounts are pre-configured with sample data:
- Each account has unique courses, sessions, and materials
- Progress tracking varies by account
- Different material libraries per track

## 🎯 Core Components

### Dashboard (`form.js`, `main.js`)
- Student profile and greeting
- Course progress cards
- Upcoming sessions calendar
- Materials library with filtering
- CV and PI progress tracking

### Data Layer (`dashboard-data.js`, `site-data.js`)
- Centralized student data management
- Material categorization and filtering
- Session scheduling
- Course enrollment tracking

### Navigation (`navbar.js`)
- Responsive sidebar on mobile
- Page switching between Overview, Courses, Sessions, Materials, Progress
- Search functionality
- User profile menu

### Assessment Tools
- **CAT Predictor** — Real-time percentile calculation
- **Exam Predictor** — Performance estimation based on mock scores

## 🛠 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Icons**: Tabler Icons (via CDN)
- **Fonts**: Google Fonts (Poppins, Inter)
- **Storage**: Browser LocalStorage
- **Responsive**: Mobile-first design

## 📱 Responsive Design

- **Desktop** (1024px+) — Full sidebar navigation
- **Tablet** (768px-1023px) — Collapsible sidebar
- **Mobile** (< 768px) — Hamburger menu, optimized layout

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/prerit-07/LaunchPad.git
cd LaunchPad
```

### 2. Open in Browser
Simply open `index.html` in your web browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 3. Test with Demo Account
1. Click "Login" in the header
2. Either:
   - Enter demo credentials (e.g., `demo1@iima.ac.in` / `12345678`)
   - Click one of the demo buttons for instant access

## 📝 Key Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `index.html` | Main landing page with features overview |
| Login | `login.html` | Student authentication |
| Dashboard | `login.html` (authenticated) | Student portal |
| Courses | `courses.html` | Available courses and programs |
| Brochure | `brochure.html` | Program details and testimonials |
| CAT Predictor | `cat-predictor.html` | CAT score estimation |
| Exam Predictor | `exam-predictor.html` | Mock exam performance analysis |
| CAT Portal | `cat-portal.html` | Comprehensive CAT prep hub |

## 🎨 Styling System

- **Color Scheme**: Navy, Gold accents, Light backgrounds
- **Typography**: Poppins (headings), Inter (body)
- **Spacing**: 8px grid system
- **Shadows**: Subtle elevation for depth
- **Animations**: Smooth transitions and hover effects

## 📊 Student Data Structure

```javascript
{
  name: string,
  email: string,
  role: string,
  avatar: string,
  courses: [
    {
      id: number,
      type: string,
      title: string,
      emoji: string,
      progress: number (0-100),
      nextSession: string,
      nextDate: string
    }
  ],
  sessions: [
    {
      day: string,
      mon: string,
      title: string,
      time: string,
      mentor: string,
      type: string,
      soon: boolean
    }
  ],
  materials: [
    {
      name: string,
      type: string (pdf|ppt|drive|zip|sheet|video),
      category: string,
      meta: string,
      link: string
    }
  ],
  cvDone: number,
  cvTotal: number,
  piDone: number,
  piTotal: number,
  gdDone: number,
  gdTotal: number
}
```

## 🔄 Session Management

- Sessions are stored in browser localStorage
- Session key: `mbaPartnerSession` (stores student email)
- Auto-restores session on page reload
- Logout clears session and returns to login page

## 🎓 Academic Tracks

### 1. Placement Bootcamp (Ananya Sharma)
- Comprehensive placement preparation
- Mock PI sessions
- GD round practice
- CV reviews

### 2. Complete Bundle (Rohan Mehta)
- Flagship all-inclusive program
- Case competitions
- Live projects
- Multiple certifications

### 3. Finance Track (Priya Verma)
- Financial modeling
- Valuation techniques
- Case interview prep
- Excel automation

### 4. Marketing Bootcamp (Aditya Kumar)
- Brand strategy
- Digital marketing
- Live campaign projects
- Analytics certification

### 5. Consulting Track (Nisha Desai)
- Case interview mastery
- Problem-solving frameworks
- Market analysis
- Mock consulting interviews

### 6. Tech Roles (Arjun Singh)
- Product management
- Technical fundamentals
- Data analysis
- PM case interviews

## 🔗 Related Documentation

- **[CONTENT-GUIDE.md](CONTENT-GUIDE.md)** — Content structure and management
- **[ENROLLMENT-FLOW.md](ENROLLMENT-FLOW.md)** — Student enrollment process
- **[WIX-FLOW-GUIDE.md](WIX-FLOW-GUIDE.md)** — Wix integration details

## 📈 Performance Metrics

- **Active Students**: 5,000+
- **Average Rating**: 9.6/10
- **Placement Rate**: 98%
- **Session Types**: PI, GD, CV Review, Case Study, Workshop, Live Project

## 🤝 Contributing

This is an educational platform. To suggest improvements:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📜 License

This project is proprietary. All rights reserved by MBA Partner Initiative.

## 📞 Support

For issues or questions:
- Check existing documentation in this repository
- Review the structure and code comments
- Test with provided demo accounts
- Visit [GitHub Issues](https://github.com/prerit-07/LaunchPad/issues)

## 🌟 Key Statistics

- **6** pre-configured demo accounts
- **5** academic tracks
- **15+** study material categories
- **100+** case studies and frameworks
- **Responsive** across all devices
- **Secure** browser-based authentication

---

**Last Updated**: June 29, 2026  
**Repository**: [github.com/prerit-07/LaunchPad](https://github.com/prerit-07/LaunchPad)  
**Branch**: `main`
