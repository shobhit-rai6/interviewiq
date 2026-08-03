# InterviewIQ — AI-Powered Interview Preparation Platform

InterviewIQ is a full-stack SaaS application that helps users practice and improve their interview skills using AI. Upload your resume, select an interview mode, answer AI-generated questions, and receive detailed performance feedback with scores and actionable insights.

---

## Features

- **Resume Analysis** — Upload a PDF resume; AI extracts your role, experience, skills, and projects automatically
- **AI Question Generation** — 5 contextual interview questions generated per session based on your profile and chosen mode
- **Live Interview Interface** — Timed Q&A interface simulating a real interview environment
- **AI Answer Evaluation** — Each answer is scored on Confidence, Communication, and Correctness
- **Performance Reports** — Detailed per-question feedback with an overall score and chart visualization
- **Interview History** — Track all past sessions with status and scores
- **Credit System** — 100 free credits on signup; 50 credits per interview session
- **Payment Integration** — Buy credit packs via Razorpay (Starter ₹100 / Pro ₹500)
- **Google Authentication** — One-click login with Firebase Google OAuth
- **PDF Export** — Download your interview report as a PDF

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 + Vite | UI framework and build tool |
| Redux Toolkit | Global state management |
| React Router DOM 7 | Client-side routing |
| Tailwind CSS 4 | Utility-first styling |
| Axios | HTTP client |
| Firebase | Google OAuth authentication |
| Recharts | Score charts and visualizations |
| React Circular Progressbar | Score ring indicators |
| Motion | UI animations |
| jsPDF + autotable | PDF report export |

### Backend
| Technology | Purpose |
|---|---|
| Express.js 5 | REST API framework |
| MongoDB + Mongoose | Database and ODM |
| JSON Web Tokens | Session authentication |
| Multer | Resume PDF file uploads |
| pdfjs-dist | PDF text extraction |
| Razorpay | Payment processing |
| CORS + Cookie Parser | Middleware |

### External Services
| Service | Usage |
|---|---|
| OpenRouter (GPT-4o-mini) | Resume analysis, question generation, answer evaluation |
| Firebase Authentication | Google OAuth sign-in |
| Razorpay | Indian payment gateway |
| MongoDB Atlas | Cloud-hosted database |

---

## Project Structure

```
interviewIQ/
├── client/                      # React + Vite frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Landing page
│   │   │   ├── Auth.jsx             # Login / signup
│   │   │   ├── InterviewPage.jsx    # 3-step interview flow
│   │   │   ├── InterviewHistory.jsx # Past sessions
│   │   │   ├── InterviewReport.jsx  # Full report view
│   │   │   └── Pricing.jsx          # Plans and payment
│   │   ├── components/
│   │   │   ├── Step1SetUp.jsx       # Resume upload + role selection
│   │   │   ├── Step2Interview.jsx   # Live Q&A with timer
│   │   │   ├── Step3Report.jsx      # Post-interview summary
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── AuthModal.jsx
│   │   │   └── Timer.jsx
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   └── utils/
│   │       └── firebase.js
│   └── package.json
│
└── server/                      # Express backend
    ├── controllers/
    │   ├── auth.controller.js
    │   ├── interview.controller.js
    │   ├── payment.controller.js
    │   └── user.controller.js
    ├── models/
    │   ├── user.model.js
    │   ├── interview.model.js
    │   └── payment.model.js
    ├── routes/
    │   ├── auth.route.js
    │   ├── interview.route.js
    │   ├── payment.route.js
    │   └── user.route.js
    ├── middlewares/
    │   ├── isAuth.js            # JWT verification
    │   └── multer.js            # File upload config
    ├── services/
    │   ├── openRouter.service.js
    │   └── razorpay.service.js
    ├── config/
    │   ├── connectDb.js
    │   └── token.js
    └── index.js
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)
- Firebase project with Google Auth enabled
- OpenRouter API key
- Razorpay account (test or live)

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/interviewIQ.git
cd interviewIQ
```

### 2. Set up the Server

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```env
PORT=8000
CLIENT_URL=http://localhost:5174
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

```bash
npm run dev
```

### 3. Set up the Client

```bash
cd client
npm install
```

Create a `.env` file in the `client/` directory:

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

```bash
npm run dev
```

The app will be available at `http://localhost:5174`.

---

## API Endpoints

**Base URL:** `http://localhost:8000/api`

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/google` | Google OAuth login / signup |
| GET | `/auth/logout` | Logout and clear session |

### User
| Method | Endpoint | Description |
|---|---|---|
| GET | `/user/current-user` | Get current authenticated user |

### Interview
| Method | Endpoint | Description |
|---|---|---|
| POST | `/interview/resume` | Upload and analyze resume PDF |
| POST | `/interview/generate-questions` | Generate AI interview questions |
| POST | `/interview/submit-answer` | Submit and evaluate an answer |
| POST | `/interview/finish` | Complete interview and get final report |
| GET | `/interview/get-interview` | Get all interviews for the user |
| GET | `/interview/report/:id` | Get full report for a specific interview |
| DELETE | `/interview/:id` | Delete an interview |

### Payment
| Method | Endpoint | Description |
|---|---|---|
| POST | `/payment/order` | Create a Razorpay order |
| POST | `/payment/verify` | Verify payment and credit the account |

---

## Pricing Plans

| Plan | Price | Credits |
|---|---|---|
| Free | ₹0 | 100 credits |
| Starter Pack | ₹100 | 150 credits |
| Pro Pack | ₹500 | 650 credits |

Each interview session costs **50 credits**.

---

## Interview Flow

```
1. Setup      →  Upload resume PDF + select role, experience, and mode (HR / Technical)
2. Interview  →  Answer 5 AI-generated timed questions
3. Report     →  View scores, per-question feedback, and overall performance analytics
```

---

## Data Models

### User
```js
{
  name: String,
  email: String (unique),
  credits: Number (default: 100),
  timestamps
}
```

### Interview
```js
{
  userId: ObjectId,
  role: String,
  experience: String,
  mode: "HR" | "Technical",
  resumeText: String,
  questions: [
    {
      question: String,
      difficulty: String,
      timeLimit: Number,
      answer: String,
      feedback: String,
      score: Number,
      confidence: Number,
      communication: Number,
      correctness: Number
    }
  ],
  finalScore: Number,
  status: "Incompleted" | "completed",
  timestamps
}
```

### Payment
```js
{
  userId: ObjectId,
  planId: String,
  amount: Number,
  credits: Number,
  razorpayOrderId: String,
  razorpayPaymentId: String,
  status: "created" | "paid" | "failed",
  timestamps
}
```

---

## Scripts

### Client
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Server
```bash
npm run dev       # Start with nodemon (hot reload)
```

---

## Environment Variables Reference

### Server `.env`
| Variable | Description |
|---|---|
| `PORT` | Server port (default: 8000) |
| `CLIENT_URL` | Frontend URL for CORS |
| `MONGODB_URL` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT signing |
| `OPENROUTER_API_KEY` | OpenRouter API key for AI features |
| `RAZORPAY_KEY_ID` | Razorpay key ID |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key |

### Client `.env`
| Variable | Description |
|---|---|
| `VITE_FIREBASE_APIKEY` | Firebase API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_RAZORPAY_KEY_ID` | Razorpay key ID (public) |

---

## License

This project is licensed under the MIT License.
