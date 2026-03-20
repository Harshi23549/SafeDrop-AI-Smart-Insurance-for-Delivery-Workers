# SafeDrop-AI-Smart-Insurance-for-Delivery-Workers
Devtrails University Hackathon 

## Overview
SafeDrop AI is an AI-powered parametric insurance platform designed specifically for food delivery workers. It protects them from income loss caused by external disruptions such as heavy rain, extreme heat, and high pollution levels.
Unlike traditional insurance systems, SafeDrop AI is fully automated and provides **instant payouts without manual claim filing**.


##  Problem Statement
Food delivery workers (Zomato, Swiggy, etc.) depend on daily operations for income. External conditions like:
-  Heavy rain  
-  High pollution (AQI)  
-  Extreme heat  
can prevent them from working, leading to sudden financial instability.
Currently, there is **no system to compensate for this income loss**.


##  Our Solution
SafeDrop AI introduces a **parametric insurance model** that:

- Calculates weekly premiums using AI  
- Monitors environmental disruptions  
- Automatically triggers payouts  
- Prevents fraud using smart validation  


##  Key Features

###  Hyperlocal Pricing
- Premiums vary based on location-specific risk  
- High-risk zones → higher premium  
- Safer zones → lower premium  


###  Consistency Bonus
- Rewards workers with fewer claims  
- Provides reduced premiums for consistent activity  
- Encourages honest participation  


###  Smart Fraud Detection
- GPS-based location verification  
- Behavioral anomaly detection  
- Duplicate claim prevention  


##  Weekly Pricing Model
- ₹50 – ₹150 per week  
- Based on:
  - Location risk  
  - Worker activity  
  - Claim history  


## Parametric Triggers
Automatic payouts are triggered when:
- Rainfall exceeds threshold  
- Temperature > 45°C  


##  AI Integration
- Risk prediction for premium calculation  
- Fraud detection using behavioral patterns  
- Smart claim validation  


##  Adversarial Defense & Anti-Spoofing Strategy

To handle fraud and Market Crash scenarios, SafeDrop AI uses a multi-layered defense system:

###  GPS Validation
- Continuous location tracking  
- Detects sudden, unrealistic movement  
- Identifies mock location usage  


###  Behavioral Analysis
- Monitors user activity patterns  
- Flags abnormal claim spikes  
- Compares historical vs current behavior  


###  External Data Validation
- Cross-checks claims with weather/AQI data  
- Ensures disruption actually occurred  


###  Fraud Ring Detection
- Detects multiple users claiming from the same location  
- Identifies coordinated claim patterns  
- Uses clustering logic to flag suspicious groups  


###  Fairness Mechanism
- Uses confidence scoring instead of instant rejection  
- Avoids penalizing genuine workers  
- Supports future manual review system  


##  Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend :** Node.js / Java  
- **Database ** Firebase / MongoDB  


##  Platform Choice
Mobile-first approach to ensure accessibility for delivery workers who rely on smartphones.


##  Prototype Features
- Login system (UI-based)  
- Worker dashboard  
- Premium display  
- Risk status  
- Simulated disruption trigger  
- Instant payout simulation  

##  Adversarial Defense & Anti-Spoofing Strategy

To handle Market Crash scenarios and prevent fraudulent claims, SafeDrop AI uses a multi-layered fraud detection system that combines location validation, behavioral analysis, and real-world data verification.

###  GPS Validation & Anti-Spoofing
We continuously validate worker location to ensure authenticity. The system detects unrealistic movement patterns (e.g., sudden long-distance jumps) and flags potential use of mock location or GPS spoofing tools.

###  Behavioral Analysis
We analyze user activity patterns such as working hours, claim frequency, and consistency. Any sudden spike or unusual deviation from historical behavior is flagged as suspicious.

###  Cross-Verification with External Data
Every claim is verified against real-world environmental data like weather and AQI. This ensures that payouts are only triggered when actual disruptions occur in that specific location.

###  Fraud Ring Detection
We detect coordinated fraud by identifying multiple users claiming from the same area simultaneously or showing similar suspicious patterns. Clustering logic helps flag such organized activities.

###  Protecting Honest Workers
To avoid penalizing genuine users, we use a confidence scoring system instead of instant rejection. Consistent and trustworthy users are given lower scrutiny, while only high-risk cases are flagged.

###  System Strategy
Our approach balances strict fraud prevention with fairness, ensuring that genuine delivery workers are protected while minimizing system abuse during high-risk events.
##  Demo Video
 [Add your video link here]
