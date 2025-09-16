---
id: data-geography-nuances
title: Data & Geography Nuances
sidebar_label: Data & Geography Nuances
---

<details open>
  <summary><strong>How Are Percentages Calculated?</strong></summary>
  <div>

Percentages in **Census Galaxy** are derived by dividing raw counts by the most appropriate denominator. The Census does not always provide data with a single “standard” denominator, so to ensure accuracy we consulted HUD and the U.S. Census Bureau, and in some cases made judgment calls.

📌 In the data dictionary, each field includes a **Denominator** column that shows which base population was used (e.g., Total Population, Households, Adults 25+, Voting-Age Citizens).

Not all percentages share the same denominator:

- Household income percentages use **Households**
- Education attainment percentages use **Adults 25+**
- Voting metrics use **Citizens of voting age**
- Some fields are based on subsets of the population (e.g., internet access within households, employment among civilian adults)

🔎 **Tip:** Always check the Denominator column before interpreting a percentage. It clarifies the population subset used and ensures you're comparing fields correctly.

  </div>
</details>

<details open>
  <summary><strong>Are Percentiles “Good” or “Bad”?</strong></summary>
  <div>

Percentile values are not judgments — they are simply a way to show where a geography falls in relation to others.

- A high percentile means that area is on the upper end of the distribution.
- A low percentile means it’s on the lower end.
- Neither is automatically positive or negative.

For example:

- A high male population percentile just means more men relative to other areas.
- A low poverty percentile shows fewer people in poverty compared to peers.
- A high degree-holders percentile reflects more education in the area — but whether that’s “good” or “bad” depends entirely on your use case.

📌 **Remember:** Percentiles are contextual tools for comparison, not scores of success or failure. They should be combined with your specific goals or models before drawing conclusions.

  </div>
</details>

<details open>
  <summary><strong>How Do We Get From Block Groups to ZIP Codes?</strong></summary>
  <div>

Census Galaxy uses weighted geographic interpolation to translate data from Census Block Groups (BGs) to ZIP Codes. Since many Census metrics are only published at the BG or Tract level, we rely on HUD’s official ZIP–Tract Crosswalk files for the corresponding year.

🔎 These crosswalks provide bi-directional weights:

- **ZIP → Tract ratios** (what share of a ZIP falls into each Tract)  
- **Tract → ZIP ratios** (what share of a Tract’s population/land falls into each ZIP)  

We apply these weights depending on the type of metric:

- **Raw counts** (e.g., population, households): Weighted by residential population so totals align when aggregating.  
- **Medians** (e.g., median age, median household income, median property value): Interpolated using population-weighted median formulas across contributing Block Groups.  
- **Inequality measures** (e.g., Gini Index): Weighted by household counts to preserve statistical balance when rolling up.  
- **Land-based metrics** (e.g., density): Adjusted using land area weights to correctly account for physical distribution across ZIPs.  

📌 This ensures that when we publish ZIP-level data, it faithfully represents the underlying Block Group detail without overstating or understating populations.

⚠️ **Important Note on ZIP Code Accuracy**  
ZIP Codes were designed for mail delivery, not for mapping people. As a result:  

- ZIP Codes change over time — the Postal Service, Census Bureau, and HUD all acknowledge that boundaries shift slightly each year.  
- Some ZIPs are PO Boxes only, unique-use ZIPs (e.g., large businesses, military bases), or have unusual shapes that don’t correspond cleanly to residential areas.  
- Crosswalk methods get close to accurate, but anomalies and small mismatches can occur.  

💡 **Tip:** Treat ZIP-level data as an approximation of local populations. For the most precise analysis, use Block Groups or Census Tracts.

  </div>
</details>