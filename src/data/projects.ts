/**
 * Projects: GitHub links and optional demoUrl.
 * Job simulations (e.g. OpenEVMap) are completed via Forage.
 */

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  href: string;
  githubUrl?: string;
  demoUrl?: string;
  tech: string[];
  viaForage?: boolean;
}

export const projects: Project[] = [
  {
    id: "disaster-response-ai",
    title: "Project Trishul (Emergency Response AI)",
    shortDescription: "AI-powered routing and resource allocation for emergency response.",
    fullDescription:
      "A system that uses reinforcement learning and spatial analytics to optimize routes and resource allocation during disasters. It integrates with map data (hospitals, roads, traffic) to suggest efficient emergency response plans and has been designed with real-world deployment in mind for first responders.",
    href: "/projects/disaster-response-ai",
    githubUrl: "https://github.com/evarg-sys/Project-Trishul",
    tech: ["Python", "AI/ML", "Maps", "Reinforcement Learning"],
  },
  {
    id: "openevmap",
    title: "OpenEVMap",
    shortDescription: "Open, manufacturer-agnostic EV route planner for drivers without proprietary nav.",
    fullDescription:
      "Dec 2025 – Present. Building an open, manufacturer-agnostic EV route planner for drivers whose vehicles lack proprietary navigation or charging-network integrations. Solving real-world issues such as charger availability, range anxiety, wait times, and inconsistent infrastructure across regions. Integrating public charging datasets and mapping APIs to locate stations, charging speeds, and real-time constraints. Implementing energy-aware routing algorithms to minimize travel time, charging stops, and overall trip cost. Designing a dashboard that visualizes battery range predictions, charging schedules, and optimal stop recommendations. Focused on accessibility and open data to support older vehicles and non-Tesla/non-proprietary systems. This project was completed as a job simulation via Forage.",
    href: "/projects/openevmap",
    githubUrl: "https://github.com/evarg-sys/ev_charging",
    tech: ["Python", "NetworkX", "Maps", "Data Viz", "Open Data"],
    viaForage: true,
  },
  {
    id: "rolebit",
    title: "RoleBit",
    shortDescription: "Role-based access and workflow automation.",
    fullDescription:
      "A role-based access control and workflow automation system for teams. It simplifies permission management and automates common workflows, with a focus on clarity and auditability.",
    href: "/projects/rolebit",
    githubUrl: "https://github.com/evarg-sys/RoleBitnew",
    tech: ["Systems", "Backend", "TypeScript"],
  },
  {
    id: "nasdaq-quant",
    title: "NASDAQ Quant Analysis",
    shortDescription: "Quantitative analysis and backtesting pipeline.",
    fullDescription:
      "A quantitative analysis and backtesting pipeline for equity data. It includes data ingestion, feature engineering, strategy backtesting, and basic risk metrics—built for learning and experimentation in systematic trading ideas.",
    href: "/projects/nasdaq-quant",
    githubUrl: "https://github.com/evarg-sys/Nasdaq_analysis",
    tech: ["Python", "Quant", "Data", "Pandas"],
  },
  {
    id: "grocery-store-db",
    title: "Grocery Store Database Design",
    shortDescription: "Relational database system for grocery store operations with EER and SQL.",
    fullDescription:
      "Designed and implemented a relational database system to manage grocery store operations using a sample dataset of purchases and sales. Transformed raw, unstructured data into a normalized schema with an Extended Entity-Relationship (EER) diagram, SQL schema, and test queries. Built an EER diagram to model entities (Items, Vendors, Customers, Purchases, Sales, Inventory) and their relationships. Created a normalized SQL schema with primary keys, foreign keys, and appropriate datatypes. Wrote SQL queries to validate relationships and answer business questions (e.g., vendor supply analysis, sales reporting). Addressed data anomalies and demonstrated how the new design ensures scalability, integrity, and business growth.",
    href: "/projects/grocery-store-db",
    githubUrl: "https://github.com/evarg-sys/guided-project-sql",
    tech: ["SQL", "Database Design", "EER", "Normalization"],
  },
  {
    id: "behind-the-stars",
    title: "Behind the Stars",
    shortDescription: "Netflix titles analysis: metadata, genre trends, and rating patterns.",
    fullDescription:
      "Oct 2025 – Dec 2025. Cleaned and processed 8.8K+ Netflix titles with inconsistent metadata. Engineered features from text fields (genres, duration, release dates). Conducted genre co-occurrence and trend analysis. Built visualizations to explain rating patterns across content types. Identified factors associated with higher IMDb scores. Delivered a reproducible Jupyter pipeline for analysis.",
    href: "/projects/behind-the-stars",
    githubUrl: "https://github.com/uic-ds-fall2025/class-project-behind-the-stars",
    tech: ["Python", "Matplotlib", "Seaborn", "Data Analysis"],
  },
  {
    id: "flappy",
    title: "Flappy Bird Game",
    shortDescription: "Custom Flappy Bird with Pygame: physics, collision detection, bosses, power-ups.",
    fullDescription:
      "Developed a custom version of the classic Flappy Bird using Python and Pygame. Implemented physics-based movement, collision detection, and randomized obstacle generation, while extending gameplay with bosses, power-ups, and scoring logic. Showcased skills in game development, object-oriented programming, and creative problem-solving. Associated with University of Illinois Chicago.",
    href: "/projects/flappy",
    githubUrl: "https://github.com/evarg-sys/flappy-",
    tech: ["Python", "Pygame", "OOP", "Game Dev"],
  },
  {
    id: "avian-flu-bot",
    title: "Avian Flu Prediction Bot",
    shortDescription: "1st place John Deere track, Sparkhacks 2025. City-based avian flu risk via decision tree.",
    fullDescription:
      "Feb 2025. The project won 1st place on the John Deere track at Sparkhacks 2025. User inputs a city name; the system uses a geolocation API to get latitude and longitude. Environmental factors (temperature, bird migration patterns, recent outbreaks) are used to assess avian flu risk. A decision tree classifier determines whether the risk in the given city is High or Low, and the system displays the risk level with relevant insights.",
    href: "/projects/avian-flu-bot",
    githubUrl: "https://github.com/ab1kenobi/Avian-Flu-Prediction-Bot",
    tech: ["Machine Learning", "AI", "Decision Trees", "APIs"],
  },
  {
    id: "loan-default-prediction",
    title: "Loan Default Prediction",
    shortDescription: "ML classification for loan default probability using real-world financial data.",
    fullDescription:
      "Data Science Coding Challenge: Loan Default Prediction using Machine Learning (UIC). Developed and implemented a predictive model to estimate the probability of loan defaults using real-world financial data. Replaced baseline dummy classifiers with Logistic Regression, incorporating feature preprocessing and one-hot encoding for categorical variables. Aligned training and testing datasets and generated probability-based outputs for over 100,000 loan records. Applied Logistic Regression for a reliable classification model; engineered features and produced submission-ready predictions (LoanID, predicted_probability). Gained hands-on experience with data preprocessing, model training, evaluation (AUC), and submission pipelines in Python.",
    href: "/projects/loan-default-prediction",
    tech: ["Python", "Logistic Regression", "Data Modeling", "AUC"],
  },
  {
    id: "demand-forecasting",
    title: "Predictive Demand Forecasting & Resource Allocation",
    shortDescription: "Time-series forecasting and optimization for service demand and resource allocation.",
    fullDescription:
      "Independent Research, Feb 2026. Developed predictive models to forecast service demand and resource needs using historical time-series and operational datasets. Cleaned and processed 150k+ records using Python (Pandas, NumPy) and SQL, handling missing values, outliers, and inconsistent formats. Applied regression and time-series forecasting (moving averages, ARIMA) to predict peak usage periods and workload spikes. Designed optimization models to allocate limited resources efficiently under budget and capacity constraints. Built automated reporting dashboards to track KPIs, trends, and forecast accuracy. Reduced manual reporting time with reusable ETL pipelines and scheduled data updates.",
    href: "/projects/demand-forecasting",
    tech: ["Python", "Pandas", "NumPy", "SQL", "ARIMA", "ETL"],
  },
  {
    id: "quant-regime-strategy",
    title: "Quant Regime Strategy (Independent Study)",
    shortDescription: "Full quant research pipeline: heavy tails, volatility clustering, HMM, GARCH, momentum.",
    fullDescription:
      "Personal Project, Dec 2025 – Feb 2026. Built a full quantitative research pipeline on 6 years of daily equity returns. Heavy tails—empirical tail frequency is 5x higher than Gaussian models predict. Volatility clustering—ACF of |returns| significant out to 50+ lags. HMM regime detection—two latent states with annualised vols of 17% vs 43%. GARCH(1,1) volatility forecasting (RMSE: 0.00293). Combining regime signals and GARCH filters into a momentum strategy lifted the Sharpe ratio from 0.52 to 0.90 and cut maximum drawdown from -39.7% to -13.8%. Key takeaway: you don't need complex ML to beat a naive benchmark—just take the empirical properties of returns seriously.",
    href: "/projects/quant-regime-strategy",
    tech: ["Quantitative Research", "Data Modeling", "HMM", "GARCH", "Python"],
  },
];

export const featuredProjectIds = [
  "disaster-response-ai",
  "openevmap",
  "rolebit",
  "nasdaq-quant",
];
