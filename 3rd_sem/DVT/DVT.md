## ✅ 2-MARK QUESTIONS:
━━━━━━━━━━━━━━━━━━━━━

**1. Define data visualization and explain its significance.**  
 Data visualization is the graphical representation of information and data. It helps in identifying patterns, trends, and outliers in large datasets, making complex data easier to understand and analyze.

**2. What are the visual variables in graphical perception?**  
 Visual variables include position, size, shape, orientation, color, texture, and value, which are used to encode data visually.

**3. List any two types of data and give an example.**  
  
- Quantitative Data (e.g., temperature in °C)  
- Categorical Data (e.g., vehicle types: car, truck, bus)

**4. What is chart junk in data visualization?**  
 Chart junk refers to unnecessary or distracting decorations in graphs that do not improve comprehension and may distort the message.

**5. Name two common challenges in dashboard design.**  
  
- Overloading with too much information  
- Poor layout or organization

**6. What is the difference between scalar and vector data?**  
  
- Scalar data has only magnitude (e.g., temperature).  
- Vector data has both magnitude and direction (e.g., wind speed).

**7. Mention any two perceptual principles in visualization.**  
  
- Proximity: Elements close to each other are perceived as a group.  
- Similarity: Items that look similar are grouped together in perception.

**8. What is map generalization in geospatial visualization?**  
 Map generalization is the process of simplifying geographic data for display at smaller scales by removing less important details.

**9. List two advantages of interactive visualizations.**  
  
- Allows users to explore data dynamically  
- Enhances data understanding through real-time feedback

**10. What is the role of cognition in data interpretation?**  
 Cognition influences how users perceive and interpret visualized data, affecting decision-making and pattern recognition.

---

## ✅ 13-MARK QUESTIONS (UNIT-WISE):
━━━━━━━━━━━━━━━━━━━━━

### 📍UNIT I:  
**Q1. Discuss the role of perception and cognition in data visualization. Explain how it affects human information processing.**  
  
- Perception relates to how the human eye interprets visual stimuli (e.g., color, size, shape).  
- Cognition involves understanding and reasoning with visual data.  
- Visual encoding must align with human perceptual strengths to reduce cognitive load.  
- Color blindness, attention span, memory limitations affect processing.  
- Effective visualization supports faster pattern recognition and better retention.

---

### 📍UNIT II:  
**Q2. Explain the eight visual variables with examples. Also describe how spatial data is visualized using point, line, and area representations.**  
  
**Visual Variables:**  
1. **Position** – bar location  
2. **Size** – bubble chart radius  
3. **Shape** – icons for category  
4. **Value** – light to dark shades  
5. **Color Hue** – traffic light signals  
6. **Orientation** – arrow directions  
7. **Texture** – dotted vs. lined fill  
8. **Motion** – animation for change  

**Spatial Data Visualization:**  
- **Points** – locations (e.g., stores on a map)  
- **Lines** – connections (e.g., roads, rivers)  
- **Areas** – regions (e.g., states, countries)

---

### 📍UNIT III:  
**Q3. Describe the key problems in designing effective visualizations. Include misleading visualization techniques and propose solutions.**  
  
**Problems:**  
- Misuse of axes (e.g., non-zero baselines)  
- 3D graphs that distort perception  
- Overuse of colors  
- Lack of labels or legends  

**Misleading Techniques:**  
- Truncated Y-axes  
- Cherry-picked data ranges  
- Manipulative color scales  

**Solutions:**  
- Use standard conventions  
- Provide clear legends  
- Include data sources and context  
- User testing for feedback and correction

---

### 📍UNIT IV:  
**Q4. What are the characteristics of a well-designed dashboard? Explain the process of organizing and testing a dashboard for usability.**  
  
**Characteristics:**  
- Clarity and simplicity  
- Real-time data access  
- Logical grouping of information  
- Interactive components  

**Organizing Dashboard:**  
- Define goals and KPIs  
- Choose relevant widgets (charts, filters)  
- Arrange elements based on user tasks  

**Testing for Usability:**  
- Conduct user testing  
- Get feedback on layout and readability  
- Iteratively refine based on test results

---

### 📍UNIT V:  
**Q5. Compare various modern visualization systems. Discuss issues related to cognition, system evaluation, and hardware constraints.**  
  
**Systems:** Tableau, Power BI, D3.js, Google Charts, Plotly  

**Cognition Issues:**  
- Information overload  
- Visual clutter  
- Color misuse  
- Inconsistent symbols  

**Evaluation:**  
- Usability testing  
- Task completion accuracy and time  
- Visual appeal and comprehension surveys  

**Hardware Constraints:**  
- Processing large datasets in real-time  
- Browser memory limits  
- Graphic rendering speed  
- Mobile vs. desktop UI rendering

---

## ✅ 15-MARK QUESTION:
━━━━━━━━━━━━━━━━━━━━━

**💡 Design a complete visualization pipeline for a real-world dataset (e.g., climate or healthcare data). Explain the preprocessing, mapping, rendering, interaction design, and evaluation phases in detail.**

  
### Example Dataset: Climate Data (Temperature, Rainfall, Humidity)

**1. Preprocessing:**  
- Clean missing values  
- Normalize temperature readings  
- Convert timestamps to human-readable format  
- Group by regions or seasons

**2. Mapping:**  
- Assign data to visual variables  
  - Temperature → color hue  
  - Rainfall → bar height  
  - Region → spatial position  
- Choose visual model (map, bar chart, line graph)

**3. Rendering:**  
- Use libraries like D3.js, Plotly  
- Render maps using GeoJSON + Leaflet  
- Ensure responsive design for various devices

**4. Interaction Design:**  
- Add tooltips on hover  
- Filters for time range and region  
- Zoom and pan on maps  
- Export options (CSV, PNG)

**5. Evaluation:**  
- Conduct user testing with domain experts  
- Measure task success (e.g., identify hottest month)  
- Collect feedback for clarity and usefulness  
- Iterate based on evaluation results


---

# UNIT I - INTRODUCTION

## 🧠 2 Marks

**What is data visualization?**  
- Data visualization is the graphical representation of information and data using visual elements like charts, graphs, and maps.

**What are the types of data?**  
- Quantitative (numerical),  
- Qualitative (categorical),  
- Temporal,  
- Spatial,  
- Ordinal.

## 📝 13 Marks

**Explain the visualization process and its role in cognition.**  
- The visualization process involves:
  - Data collection,
  - Preprocessing,
  - Mapping to visual forms,
  - Interaction.
- Cognition plays a role in how users perceive and interpret visualized data, enabling understanding and insight generation.

## 📊 15 Marks

**Discuss different types of data and the importance of data preprocessing in visualization.**  
- **Types of data**: Structured, semi-structured, unstructured.  
- **Preprocessing**: Involves cleaning, transforming, and organizing data. It ensures:
  - Accuracy,
  - Clarity,
  - Effective visual output.

---

# UNIT II - VISUALIZATION FOUNDATIONS

## 🧠 2 Marks

**What are the eight visual variables?**  
- Position, Size, Shape, Value, Color, Orientation, Texture, Motion.

**Define Geospatial Data.**  
- Geospatial data includes location-based information, often visualized using maps, showing points, lines, and areas.

## 📝 13 Marks

**Explain the semiology of graphical symbols.**  
- Semiology is the study of visual signs and symbols.
- It helps define how visual elements represent data concepts in an understandable way.

## 📊 15 Marks

**Describe visualization techniques for spatial, one-dimensional, two-dimensional, and three-dimensional data.**  
- **1D**: Line charts, bar graphs.  
- **2D**: Scatter plots, heatmaps.  
- **3D**: Surface plots, 3D bar charts.  
- **Spatial**: GIS maps, choropleth maps.  
- Use **combined/dynamic techniques** like animation and layering for advanced analysis.

---

# UNIT III - DESIGNING EFFECTIVE VISUALIZATION

## 🧠 2 Marks

**What is the main goal of effective visualization?**  
- To communicate data clearly and efficiently for insight and decision-making.

**List any two problems in designing visualizations.**  
- Overloading with too much data.  
- Poor color selection or cluttered layout.

## 📝 13 Marks

**What are the steps in designing an effective visualization?**  
- Define purpose.  
- Know your audience.  
- Choose relevant data.  
- Select appropriate visual forms.  
- Design layout and interactivity.  
- Evaluate and refine design.

## 📊 15 Marks

**Compare and evaluate different visualization techniques.**  
- Use cases for comparison:
  - **Line chart** vs **Bar chart**: Time-based data vs category comparison.  
  - **Pie chart** vs **Donut chart**: Parts of whole.  
- Evaluation metrics:
  - Clarity,
  - Accuracy,
  - Interactivity,
  - User understanding.

---

# UNIT IV - INFORMATION DASHBOARD DESIGN

## 🧠 2 Marks

**What is an information dashboard?**  
- A consolidated visual display showing key metrics and data insights on a single screen.

**Mention one key goal in dashboard design.**  
- Providing actionable insights at a glance.

## 📝 13 Marks

**Explain characteristics and usability considerations in dashboard design.**  
- Characteristics:
  - Clarity,
  - Simplicity,
  - Real-time updates.
- Usability considerations:
  - Logical layout,
  - Consistent color/theme,
  - Interactive elements.

## 📊 15 Marks

**Describe the process of designing dashboards and explain with case studies.**  
- **Design process**:
  - Define user needs,
  - Choose KPIs,
  - Layout planning,
  - Visual selection,
  - Usability testing.
- **Case Studies**:
  - **Sales Dashboard**: Shows sales trends, revenue, region-wise performance.
  - **Marketing Dashboard**: Campaign ROI, engagement, lead conversions.

---

# UNIT V - VISUALIZATION SYSTEMS

## 🧠 2 Marks

**Name one modern integrated visualization system.**  
- Tableau / Power BI / D3.js

**What is text visualization?**  
- Visual representation of textual data to extract patterns, such as word clouds or topic graphs.

## 📝 13 Marks

**Explain the different types of visualization systems based on data and analysis type.**  
- **Data type**: Structured, unstructured, geospatial.  
- **Analysis type**: Descriptive, diagnostic, predictive, prescriptive.

## 📊 15 Marks

**Discuss current research directions and challenges in visualization.**  
- **Research areas**:
  - Real-time data,
  - Augmented/Virtual reality,
  - AI-based visual analytics.
- **Challenges**:
  - Cognitive overload,
  - Scalability,
  - Usability,
  - Hardware limitations,
  - Evaluation methods.

---
