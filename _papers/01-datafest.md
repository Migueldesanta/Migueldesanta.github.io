---
title: "City Leasing Forecast &amp; Market Explorer"
subtitle: "An interactive forecast of U.S. office leasing in the post-COVID recovery, built around composite trend scoring and XGBoost regression."
paper_number: "XY-2025-01"
order: 1
date: 2025-04-14
status: "Submitted to 2025 ASA DataFest, Penn State"
abstract: "Forecasts U.S. office leasing activity for 2025 Q1 across major metropolitan markets in the post-COVID recovery. Constructs a five-component composite trend score from leased SF, rent, vacancy, occupancy, and unemployment, and trains an XGBoost regression on a lagged city-quarter panel with engineered interaction terms. Presented at the 2025 ASA DataFest national competition."
tags: [Forecasting, XGBoost, Shiny]
links:
  - label: "Code on GitHub"
    url: "https://github.com/Migueldesanta/2025datafest"
---

## The question

The COVID-19 pandemic structurally disrupted U.S. commercial office leasing. By late 2024, the recovery had become highly uneven across metros — some had rebounded past pre-pandemic levels, others remained structurally impaired. For an investor or operator deciding where to lean in, the practical question is no longer *"is the office market recovering?"* but rather *"which cities, in which quarter, are best positioned for sustained leasing activity?"*

This project, prepared for the 2025 ASA DataFest national competition, attempts a direct quantitative answer.

## Trend Score

A composite competitiveness index per city-quarter, defined as a z-standardised composite of five market fundamentals:

```
                  Z_leased_sf − Z_rent − Z_vacancy + Z_occupancy − Z_unemployment
TrendScore(i,t) = ───────────────────────────────────────────────────────────────
                                              5
```

Higher score = more competitive market. Rent, vacancy, and unemployment enter negatively because lower values favour leasing activity; leased SF and occupancy enter positively.

## Forecast model

- **Algorithm:** XGBoost regression, 100 rounds, squared-error loss
- **Target:** Log of total leased square footage at quarter *t+1*
- **Features:** Lag-1 versions of log leased SF, log rent, availability, occupancy, unemployment; interaction terms (rent × availability, rent × unemployment); linear time trend; market fixed effects via one-hot encoding
- **Missing data:** Multiple imputation by chained equations (MICE) with predictive mean matching, *m* = 5, applied jointly across the four indicator columns
- **Validation:** 80/20 train/validation split, RMSE / MAE / R² reported on the held-out fold

## The deliverable

A four-page R Shiny dashboard:

- **Home** — the question and the framing
- **Methodology** — full pipeline, with the trend-score formula rendered in MathJax
- **Market Overview** — Leaflet heatmap of city-level competitiveness, Plotly 3D surface of trend-score evolution, top-5 table
- **Trend Forecast** — XGBoost forecast for 2025 Q1 with side-by-side comparison vs the prior quarter

## Team

Penn State F4: Michael Yun, Runyi Zhang, Jingchun Zhang, Zhaoyu Hou. The feature engineering, XGBoost model, and forecast pipeline are my work.
