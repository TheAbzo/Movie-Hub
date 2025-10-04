
# 🎬 Movie Hub

A React-based movie search app that allows users to search for movies using the OMDb API, view search results, and see detailed information for each movie. Built with Vite, TypeScript, and TailwindCSS, with a focus on responsiveness, performance, and usability.

🌐 Demo: https://movie-hub-black-chi.vercel.app/


🎬 Video:

https://github.com/user-attachments/assets/19de1410-0d9a-4806-8870-b08035d6fae7



## 🚀 Features
- 🔍 **Movie Search**:
    -  Search movies by title.
    -  Results update dynamically as you type (debounced to reduce API calls).
    -  Handles empty search gracefully.

- 🎞️ **Movie Details View**:
    - Click on any movie to view details including title, genre, poster, director, and description.
    - Navigate back to the previous search results while **keeping your previous state and page.**
- 📱 **Responsive UI**:
    - Mobile-first design, works well on tablets and desktops.
    - Modern UI with TailwindCSS styling.
- ⚡**Performance**:
    - Debouncing implemented for search input to minimize API calls.
- 🚨 **Error Handling**:
    - User-friendly messages when no movies are found or API errors occur.
- 💻 **Clean & Maintainable Code**:
    - Modular components (MovieCard, MovieList, SearchBar, ErrorMessage, etc.).
    - TypeScript types for type safety.
    - Environment variables for API key and base URL.

### Setup & Run

1. Clone the repo

```
git clone https://github.com/TheAbzo/Movie-Hub.git
cd Movie-Hub
```
2. Create .env file in root folder that has
```
VITE_OMDB_KEY=yourkey
VITE_OMDB_BASE_URL=https://www.omdbapi.com/
```
3. Install & Run
```
npm install
npm run dev
```

## 🛠️ Tech Stack
- Frontend: React 18, TypeScript, Vite
- Styling: TailwindCSS, custom CSS variables
- API: OMDb API
- Deployment: Vercel


## 📂 Project Structure Overview
```
.
└── Movie-Hub/
    ├── src/
    │   ├── components/
    │   │   ├── MovieCard/
    │   │   │   ├── index.tsx
    │   │   │   └── style.scss
    │   │   ├── ErrorMessage.tsx
    │   │   ├── Loader.tsx
    │   │   ├── MovieList.tsx  
    │   │   └── SearchBar.tsx 
    │   ├── hooks/
    │   │   └── useMovies.ts
    │   ├── pages/
    │   │   ├── HomePage/
    │   │   │   ├── index.tsx
    │   │   │   └── style.scss
    │   │   └── MovieDetails/
    │   │       ├── index.tsx
    │   │       └── style.scss
    │   ├── services/
    │   │   └── api.ts
    │   ├── types/
    │   │   └── movie.ts
    │   ├── App.css
    │   ├── App.tsx
    │   ├── index.css
    │   ├── main.tsx
    │   └── vite-enb.d.ts
    ├── .env
    ├── .gitignore
    ├── .eslintrc.cjs
    ├── package.json
    ├── .prettierrc.json
    ├── README.md
    ├── tailwind.config.cjs
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts

```
## 📝 Notes
- The search input is debounced to reduce unnecessary API calls.
- Movie state and search queries are persisted when navigating between pages.
- Fully responsive across mobile, tablet, and desktop.
- Clean and modular component structure ensures maintainability.





