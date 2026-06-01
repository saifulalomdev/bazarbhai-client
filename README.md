# BazarBhai Customer Storefront (`bazarbhai-client`)

This repository houses the customer-facing frontend application for **BazarBhai**, a hyper-local multi-vendor e-commerce marketplace ecosystem designed to connect neighborhood retail vendors with nearby consumers. 

> 📦 **Migration Notice:** This repository was migrated from GitLab to GitHub to centralize my public engineering portfolio. You can find the original development home here: [Old GitLab Repository Source](https://gitlab.com/bazarbhai/bazarbhai-client.git).

---

## 1. The Problem
Small brick-and-mortar storefronts heavily rely on direct neighborhood foot traffic and struggle to compete with institutional e-commerce giants. Building a digital marketplace to solve this required an interface that could effortlessly aggregate products from completely independent local vendors, calculate complex single-cart state across multiple merchant listings, and offer a lightweight user experience optimized for standard mobile browsers and local network conditions.

---

## 2. The Solution
This repository contains the decoupled user-facing React application designed to streamline the customer journey. It interfaces directly with a centralized RESTful API layer to handle state mutations, inventory tracking, and checkout workflows.

### Key Capabilities Built:
* **Polymorphic Product Feed:** An intuitive UI capable of gracefully rendering diverse inventory configurations (ranging from raw groceries to localized electronics) pulling from a single backend.
* **Global Cart Syncing:** A robust client-side state engine tracking product items grouped simultaneously by vendor origin.
* **Dynamic Checkout Experience:** Built-in forms capturing localized delivery preferences, structural ordering workflows, and real-time client-side calculation.

---

## 3. Project Status & Data Isolation
* **Live Archival Demo:** [bazarbhai.saifulalom.com](https://bazarbhai.saifulalom.com)
* **Backend API Source:** [GitLab Core System Core](https://gitlab.com/bazarbhai/bazarbhai-backend.git)

> ⚠️ **Hosting Notice:** The live demonstration environment runs on a shared, sleeping server infrastructure to minimize operational hosting overhead. The initial network handshake may take **30–60 seconds** to wake up the server instance.
>

> 🔒 **Access Management:** To ensure strict data privacy and structural security, the live production pathways for our complementary **Seller Dashboard** and **Admin Panel** have been restricted. Because those operational platforms processed active merchant transactions and live customer records, keeping active interfaces gated protects foundational user privacy.

---

## 4. The Tech Stack
* **UI Engine:** React.js (v18+)
* **Build System:** Vite (For lightning-fast Hot Module Replacement and highly optimized build-time tree-shaking)
* **State Management & Routing:** Component-driven hooks interfacing with a RESTful abstraction layer.
* **Styling Infrastructure:** Modular, performance-optimized CSS variables designed for fast painting speeds across lower-tier mobile hardware.

---

## 🧠 Post-Mortem & Lessons Learned

As this customer interface expanded alongside its sister dashboards (Seller and Admin panels), managing standard JavaScript objects across independent applications exposed severe maintainability limitations. Tracking deep relational state without strict contracts introduced frequent validation bugs that required tedious browser debugging.

This friction was the exact catalyst for my architectural evolution. It forced me to move entirely into type-safe paradigms. Today, I build web ecosystems exclusively with **TypeScript**, **Astro’s Islands Architecture**, **Hono**, and **Zod schemas** at the entry gate—guaranteeing compilation-time validation and a complete elimination of runtime predictability issues.

## 3. Local Development Setup

Follow these steps to clone the required ecosystem components, install dependencies, and run the applications locally.

### Prerequisites: Run the Backend API First
Because the client application depends on active RESTful endpoints to load products and handle cart mutations, you must pull down and run the backend server layer first.

1. **Clone and enter the Backend repository:**
```bash
   git clone https://gitlab.com/bazarbhai/bazarbhai-backend.git
   cd bazarbhai-backend
```

2. **Install dependencies and start the API server:**

```bash
   npm install
   # Set up your local MongoDB connection strings in a .env file, then run:
   npm dev

```

---

### Frontend Installation & Startup

Once your local backend system is running on `http://localhost:5000`, open a new terminal window and execute the following commands to boot the customer storefront:

1. **Clone the Storefront Repository:**

```bash
   git clone https://github.com/saifulalomdev/bazarbhai-client.git
   cd bazarbhai-client

```

2. **Install Dependencies:**
Make sure you have `pnpm` installed globally, then instantiate package management setup:

```bash
   pnpm install

```

3. **Configure Environment Variables:**
Create a `.env.local` file at the root of the project to point the frontend bundle to your running local backend:

```env
   VITE_BAZAR_BHAI_API_URL=http://localhost:5000

```

4. **Launch the Vite Development Server:**
Spin up the hot-reloading compilation server:

```bash
   pnpm dev
```

> Open your browser and navigate to `http://localhost:3000` to interact with the platform layout.