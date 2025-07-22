---
id: metrics
title: Metrics
---


## Metrics Table

The Metrics (or “Master”) table contains raw and derived demographic values at the geography level, including population totals, income figures, and education counts. These are unnormalized values often used as the starting point for analysis.

> 📌 **Note**: The Metrics table always includes all geographic columns such as `StateFIPS`, `CountyName`, `TractFIPS`, `ZipCode`, etc., so you don’t need to join separately to access names or locations.

### Use when:
- You want to build your own ratios, comparisons, or metrics.
- You need absolute counts (e.g., total households, number of children under 5).
- You're preparing features for machine learning models that require raw data.
- You plan to calculate custom benchmarks or re-aggregate to larger areas.

---

### Table Linking

All three tables — `Metrics`, `Percentages`, and `Percentiles` — can be joined using a shared primary key depending on the geography level:

- **BlockGroupID** for block group-level data  
- **StateCountyTractID** for tracts  
- **ZipCode** for ZIP-level data  
- **StateCountyID** for counties  
- **MSA_ID** for metro areas  
- **StateFIPS** for state-level data  

This makes it easy to pull in raw values, normalized percentages, and national percentiles side-by-side in your analysis or app.

---

### Field Summary

<table style={{ fontFamily: 'Satoshi, sans-serif', width: '100%', borderCollapse: 'collapse' }}>
  <thead style={{ background: '#f6f8fa' }}>
    <tr>
      <th><strong>Field</strong></th>
      <th><strong>Type</strong></th>
      <th><strong>Example</strong></th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr><td><strong>TOTAL_POPULATION</strong></td><td>FLOAT</td><td>1993</td><td>Total number of people in the geography.</td></tr>
    <tr><td><strong>TOTAL_HOUSEHOLDS</strong></td><td>FLOAT</td><td>681</td><td>Total number of households.</td></tr>
    <tr><td><strong>MEDIAN_AGE</strong></td><td>FLOAT</td><td>43.4</td><td>Median age of all residents.</td></tr>
    <tr><td><strong>FEMALE_POPULATION</strong></td><td>FLOAT</td><td>967</td><td>Total female population.</td></tr>
    <tr><td><strong>MALE_POPULATION</strong></td><td>FLOAT</td><td>1026</td><td>Total male population.</td></tr>
    <tr><td><strong>POPULATION_DENSITY</strong></td><td>FIXED DECIMAL</td><td>2720.08</td><td>Population per square mile.</td></tr>
    <tr><td><strong>MEDIAN_HOUSEHOLD_INCOME</strong></td><td>FLOAT</td><td>194850</td><td>Median income of all households.</td></tr>
    <tr><td><strong>TOTAL_INCOME</strong></td><td>FLOAT</td><td>142189400</td><td>Aggregate total income of the area.</td></tr>
    <tr><td><strong>GINI_INDEX</strong></td><td>FLOAT</td><td>0.282757</td><td>Measure of income inequality (0 = perfect equality, 1 = perfect inequality).</td></tr>
    <tr><td><strong>POP_ABOVE_POVERTY_LEVEL</strong></td><td>FLOAT</td><td>1961</td><td>Population above the poverty threshold.</td></tr>
    <tr><td><strong>POP_BELOW_POVERTY_LEVEL</strong></td><td>FLOAT</td><td>18</td><td>Population below the poverty threshold.</td></tr>
    <tr><td><strong>HOUSEHOLD_INCOME_LESS_THAN_30K</strong></td><td>FLOAT</td><td>14</td><td>Households earning under $30,000.</td></tr>
    <tr><td><strong>HOUSEHOLD_INCOME_30K_TO_59K</strong></td><td>FLOAT</td><td>33</td><td>Households earning between $30,000–$59,999.</td></tr>
    <tr><td><strong>HOUSEHOLD_INCOME_60K_TO_99K</strong></td><td>FLOAT</td><td>58</td><td>Households earning between $60,000–$99,999.</td></tr>
    <tr><td><strong>HOUSEHOLD_INCOME_100K_TO_149K</strong></td><td>FLOAT</td><td>125</td><td>Households earning between $100,000–$149,999.</td></tr>
    <tr><td><strong>HOUSEHOLD_INCOME_150K_AND_ABOVE</strong></td><td>FLOAT</td><td>451</td><td>Households earning $150,000 and above.</td></tr>
    <tr><td><strong>HISPANIC_LATINO</strong></td><td>FLOAT</td><td>67</td><td>People of Hispanic or Latino origin.</td></tr>
    <tr><td><strong>BLACK_AFRICAN_AMERICAN</strong></td><td>FLOAT</td><td>298</td><td>Black or African American alone population.</td></tr>
    <tr><td><strong>WHITE</strong></td><td>FLOAT</td><td>1527</td><td>White alone population.</td></tr>
    <tr><td><strong>CHILDREN_PER_HOUSEHOLD</strong></td><td>FIXED DECIMAL</td><td>0.8</td><td>Average children per household.</td></tr>
    <tr><td><strong>DEGREE_HOLDERS</strong></td><td>FLOAT</td><td>1255</td><td>People with a bachelor’s degree or higher.</td></tr>
    <tr><td><strong>MEDIAN_PROPERTY_VALUE</strong></td><td>FLOAT</td><td>393400</td><td>Median property value in the area.</td></tr>
    <tr><td><strong>COMMUTE_WORK_FROM_HOME</strong></td><td>FLOAT</td><td>187</td><td>Number of individuals who work from home.</td></tr>
    <tr><td><strong>TRAVEL_TIME_TO_WORK_20_TO_40_MINS</strong></td><td>FLOAT</td><td>166</td><td>Commuters with travel time between 20–40 minutes.</td></tr>
    <tr><td><strong>WITH_HEALTH_INSURANCE</strong></td><td>FLOAT</td><td>1940</td><td>People covered by any type of health insurance.</td></tr>
    <tr><td><strong>WITHOUT_HEALTH_INSURANCE</strong></td><td>FLOAT</td><td>36</td><td>People not covered by any health insurance.</td></tr>
    <tr><td><strong>INTERNET_VIA_CELL_DATA_PLAN</strong></td><td>FLOAT</td><td>645</td><td>Households using a cellular data plan for internet.</td></tr>
    <tr><td><strong>CITIZENS_VOTING_AGE</strong></td><td>FLOAT</td><td>1416</td><td>Citizens of voting age (18+).</td></tr>
  </tbody>
</table>
