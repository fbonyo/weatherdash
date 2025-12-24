# ☁️ Weather Dashboard - Complete 8-Day Build

A modern, feature-rich weather dashboard built with React, Vite, and OpenWeatherMap API over 8 days.

![Weather Dashboard](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.1-cyan)

## 🌟 Features

### Core Functionality
- 🔍 **City Search** - Search weather for any city worldwide
- 🌡️ **Real-time Weather Data** - Current temperature, feels like, min/max temps
- 💧 **Detailed Metrics** - Humidity, wind speed, atmospheric pressure
- 🌤️ **Dynamic Weather Icons** - Visual icons based on conditions
- 📅 **7-Day Forecast** - Extended weather forecast with daily high/low
- 🔄 **Auto-refresh** - Updates every 5 minutes automatically
- ♻️ **Manual Refresh** - Refresh button with last updated timestamp

### Enhanced Features
- 🌡️ **Temperature Toggle** - Switch between Celsius and Fahrenheit
- 🕐 **Recent Searches** - Quick access to last 5 searched cities
- 💾 **Local Storage** - Persistent recent searches and preferences
- 🎨 **Theme Customization** - Light/Dark mode toggle
- 🌈 **Dynamic Backgrounds** - Changes based on weather conditions
- 🌅 **Sunrise/Sunset Times** - Daily sun schedule
- 👁️ **Visibility** - Current visibility in kilometers
- 🧭 **Wind Direction** - Compass-based wind direction
- ☁️ **Cloud Coverage** - Percentage with visual progress bar
- ⚠️ **Weather Alerts** - Smart warnings for extreme conditions

### Weather Alert Triggers
- 🔥 Extreme heat (>35°C)
- ❄️ Freezing temperatures (<0°C)
- 💨 High wind speeds (>15 m/s)
- 💦 High humidity (>80%)
- 🌫️ Low visibility (<1km)

## 🚀 Tech Stack

- **Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.0
- **HTTP Client:** Axios 1.6.0
- **Icons:** Lucide React
- **Styling:** Tailwind CSS 3.4.1
- **API:** OpenWeatherMap API v2.5

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/fbonyo/weatherdash.git
cd weatherdash
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 🏗️ Project Structure
```
weatherdash/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── ForecastCard.jsx
│   │   ├── ForecastSection.jsx
│   │   ├── AdditionalDetails.jsx
│   │   ├── WeatherAlerts.jsx
│   │   ├── RecentSearches.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── RefreshButton.jsx
│   │   ├── TemperatureToggle.jsx
│   │   └── ThemeToggle.jsx
│   ├── services/
│   │   └── weatherApi.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── localStorage.js
│   │   └── themes.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎯 8-Day Development Journey

### Day 1: Project Setup ✅
- Initialized Vite + React project
- Created project structure
- Set up API service layer
- Built UI foundation with Tailwind CSS

### Day 2: Core Functionality ✅
- Implemented search functionality
- Built weather card with live data
- Added loading and error states
- Integrated OpenWeatherMap API
- Dynamic weather icons

### Day 3: Enhanced Features ✅
- Auto-refresh every 5 minutes
- Manual refresh button
- Temperature unit toggle (°C/°F)
- Last updated timestamp
- Improved mobile responsiveness

### Day 4: 7-Day Forecast ✅
- Added forecast API integration
- Created forecast cards
- Horizontal scroll layout
- Daily high/low temperatures
- Weather conditions per day

### Day 5: Local Storage & Recent Searches ✅
- Implemented localStorage
- Recent searches component
- Store up to 5 cities
- Clear history functionality
- Prevent duplicate entries

### Day 6: Theme Customization ✅
- Light/Dark mode toggle
- Dynamic weather backgrounds
- Theme persistence
- Theme-aware components
- Smooth transitions

### Day 7: Final Features & Polish ✅
- Sunrise/sunset times
- Visibility display
- Wind direction indicator
- Cloud coverage bar
- Weather alerts system
- Extreme condition warnings

### Day 8: Deployment & Documentation ✅
- Final code cleanup
- Comprehensive README
- Build optimization
- Deployment preparation
- Project completion

## 🎨 Theme System

### Dynamic Backgrounds
- **Clear Sky:** Yellow to Orange gradient
- **Cloudy:** Gray gradient
- **Rainy:** Blue gradient
- **Snowy:** Light blue gradient
- **Thunderstorm:** Dark purple/black gradient

### Theme Modes
- **Light Mode:** Bright, clean interface
- **Dark Mode:** Dark, comfortable for night viewing

## 📱 Responsive Design

- **Mobile First:** Optimized for mobile devices
- **Tablet:** Enhanced layout with better spacing
- **Desktop:** Full-width components with max-width constraints
- **Horizontal Scroll:** Smooth swipe for forecast cards

## 🔑 API Configuration

The app uses OpenWeatherMap API. The API key is stored in `src/utils/constants.js`:
```javascript
export const API_KEY = 'ff136f2f14d741bc9c6e4dbc2e71d022';
```

**Note:** For production, use environment variables:
```javascript
export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
```

## 🛠️ Available Scripts
```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 📊 Performance

- ⚡ Fast initial load with Vite
- 🎯 Code splitting for optimal bundle size
- 🔄 Efficient API calls with error handling
- 💾 Local storage for instant data access
- 🎨 Smooth animations with CSS transitions

## 🐛 Known Issues & Future Improvements

### Potential Enhancements
- [ ] Geolocation API for auto-detect location
- [ ] Hourly forecast (24-hour view)
- [ ] Weather maps integration
- [ ] Multiple location comparison
- [ ] Weather widgets for embedding
- [ ] PWA support for offline access
- [ ] Push notifications for weather alerts
- [ ] Historical weather data
- [ ] Air quality index (AQI)
- [ ] UV index display

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@fbonyo](https://github.com/fbonyo)
- Repository: [weatherdash](https://github.com/fbonyo/weatherdash)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for blazing fast development

## 📸 Screenshots

### Light Mode
![Light Mode Screenshot](https://via.placeholder.com/800x600?text=Light+Mode+Screenshot)

### Dark Mode
![Dark Mode Screenshot](https://via.placeholder.com/800x600?text=Dark+Mode+Screenshot)

### Mobile View
![Mobile View Screenshot](https://via.placeholder.com/400x800?text=Mobile+View+Screenshot)

---

**⭐ If you found this project helpful, please give it a star on GitHub!**

Built with ❤️ over 8 days | December 2024
