<!-- ---
id: percentages
title: Percentages
---


## Percentiles

The **Percentiles** table ranks each geography relative to all geographies in the nation — not just within its state.  
A percentile of `0.92` means that the area scores higher than 92% of all U.S. geographies for that metric.

> 🟡 **Note**: Percentiles are always calculated against **national distributions**  
> (e.g., all block groups in the U.S.), not within a specific state or county.

---

### Use when:
- You want to highlight top/bottom performers (e.g., bottom 10% of income).
- You’re building equity dashboards or identifying priority zones.
- You need filters for visualizations (e.g., show only tracts below the 25th percentile).
- You’re creating models or indexes that require standardized, relative values. -->



---
id: percentages
title: Percentages
---

## Percentages

The Percentages table shows what portion of a population in a given area has a specific characteristic. A value of 0.41 for degree holders means that 41% of adults aged 25+ in that geography have a college degree.

> 🟡 **Note**: Percentages are calculated using a relevant denominator — like Total Population, Households, or Adults 25+ — as shown in the data dictionary table.

### Use when:
- You want to describe the makeup of a population (e.g., % female, % foreign born).
- You’re filtering based on specific thresholds (e.g., ZIPs where over 60% have internet access).
- You’re building charts or dashboards that show absolute values.
- You’re analyzing traits within a geography, not comparing it to others.

---

### Field Summary

<table style={{ fontFamily: 'Satoshi, sans-serif', width: '100%', borderCollapse: 'collapse' }}>
  <thead style={{ background: '#f6f8fa' }}>
    <tr>
      <th><strong>Column Name</strong></th>
      <th><strong>Denominator</strong></th>
      <th><strong>Data Type</strong></th>
      <th><strong>Example</strong></th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr><td>FEMALE_POPULATION_PRCNTGE</td><td>TOTAL_POPULATION</td><td>FLOAT</td><td>0.4369</td><td>Percentage of female population relative to total population.</td></tr>
    <tr><td>MALE_POPULATION_PRCNTGE</td><td>TOTAL_POPULATION</td><td>FLOAT</td><td>0.5631</td><td>Percentage of male population relative to total population.</td></tr>
    <tr><td>POP_ABOVE_POVERTY_LEVEL_PRCNTGE</td><td>TOTAL_POVERTY_POPULATION</td><td>FLOAT</td><td>0.9760</td><td>Percentage of pop above poverty level relative to total poverty population.</td></tr>
    <tr><td>DEGREE_HOLDERS_PRCNTGE</td><td>ADULTS_25_PLUS</td><td>FLOAT</td><td>0.4098</td><td>Percentage of degree holders relative to adults 25 plus.</td></tr>
    <tr><td>COMMUTE_WORK_FROM_HOME_PRCNTGE</td><td>TOTAL_WORKERS</td><td>FLOAT</td><td>0.1360</td><td>Percentage of commute work from home relative to total workers.</td></tr>
    <tr><td>HEALTH_INSURANCE_EMPLOYER_PRCNTGE</td><td>TOTAL_POPULATION</td><td>FLOAT</td><td>0.5661</td><td>Percentage of health insurance employer relative to total population.</td></tr>
    <tr><td>CITIZENS_VOTING_AGE_PRCNTGE</td><td>TOTAL_POPULATION</td><td>FLOAT</td><td>0.8928</td><td>Percentage of citizens voting age relative to total population.</td></tr>
  </tbody>
</table>

> 🔍 This is a partial table preview. Full percentage fields can be viewed in the data dictionary or downloaded as part of the dataset.
