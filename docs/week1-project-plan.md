# ✅ WEEK 1 – Project Idea & Planning Documentation

---

## **1. Project Idea**
**WeatherDash** is a responsive weather dashboard that allows users to search for real-time weather conditions in any city.  
The app will display temperature, weather condition, humidity, wind speed, and a weather icon.  
The goal is to create a clean, modern interface using React JS and Tailwind CSS.

---

## **2. Main Features Planned**
1. City weather search by name  
2. Display current weather (temperature, condition, humidity, wind, icon)  
3. 7-day forecast  
4. Popular cities shortcuts  
5. Responsive design (desktop + mobile)  
6. Error handling for invalid searches  
7. Optional: Search history

---

## **3. API to Be Used**
**OpenWeatherMap API**  
- Endpoints: `/data/2.5/weather` (current), `/data/2.5/forecast` or `/data/2.5/onecall` (forecast)  
- Requires API key  
- Returns temperature, weather icons, wind, humidity, etc.

---

## **4. Planned Component Structure (React)**

src/
└── components/
├── SearchBar.jsx
├── CurrentWeather.jsx
├── Forecast.jsx
├── WeatherCard.jsx
├── PopularCities.jsx
├── ErrorMessage.jsx
└── pages/
├── LandingPage.jsx
├── Dashboard.jsx
└── App.jsx


---

## **5. 5-Week Timeline**
**Week 1 – Planning (✔ Done)**  
- Choose project idea, define features, select API, plan components, prepare repo & documentation  

**Week 2 – UI & Design**  
- Figma wireframes  
- Landing page (desktop + mobile)  
- Dashboard (desktop + mobile)  

**Week 3 – Build Core Features**  
- React + Tailwind setup  
- SearchBar + API calls  
- CurrentWeather component  

**Week 4 – Expand Features**  
- 7-day forecast  
- Popular cities  
- Responsiveness, error & loading states  

**Week 5 – Finalize & Deploy**  
- Polish UI, performance  
- README & video walkthrough  
- Deploy to Netlify  

---

## **6. Extra Notes**
- Focus on usability and clean design  
- Mobile-first layout  
- Figma designs as source of truth for UI