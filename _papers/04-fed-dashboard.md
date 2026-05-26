---
title: "A Structural Causal Framework for Federal Reserve Balance-Sheet Reduction"
subtitle: "Production monitoring system for U.S. dollar liquidity conditions and Fed policy stability."
paper_number: "XY-2026-04"
order: 4
date: 2026-05-01
status: "Working paper · companion dashboard live"
abstract: "A real-time monitoring dashboard built on a Dynamic Structural Causal Model (DSCM) of reserve demand, calibrated from threshold regression and IV estimation on n=587 weekly observations. Surfaces the indicators most relevant for assessing whether QT is approaching the policy boundaries identified in FEDS 2026-019. Validated against the FEDS Monte Carlo benchmark at 91.25% pass rate."
tags: [Federal Reserve, Causal Inference, Sovereign Markets]
links:
  - label: "Code on GitHub"
    url: "https://github.com/Migueldesanta/fed-dashboard"
---

## The question

U.S. dollar liquidity conditions transition non-linearly between three regimes — *abundant*, *ample*, and *scarce* — and the boundaries between them are regime-dependent rather than fixed. Practitioners assessing whether quantitative tightening is approaching the *ample → scarce* zone typically reconstruct this picture by hand from FRED pulls, H.4.1 releases, and bank 10-Q filings. The reconstruction is slow, fragmented, and loses the structural relationships that make the regime classification meaningful in the first place.

This project asks: can the **15-policy menu** described in Anderson, Barbarino, Diercks & Miran (FEDS 2026-019) be operationalised as a live decision-support system, and can the relevant structural parameters be identified credibly from market data?

## Approach

The model is a Dynamic Structural Causal Model with three estimation strategies layered on top of the same panel:

- **Hansen (1996) threshold regression** identifies the scarcity threshold endogenously from the data; the headline estimate places the threshold at $2,242.5B, between the 2019 anchor ($1,394B, the September 2019 repo stress episode) and the 2025 anchor ($2,848B, the November 2025 conditions).
- **Two-stage least squares with TGA volatility as the instrument** identifies the panic-feedback intensity β₃ = 426.4 (first-stage *F* = 20.2).
- **Difference-in-differences with regression discontinuity** at the LCR regulatory threshold identifies α₁ = 0.038 (treatment vs control: +1.14pp).
- **Event-study averaging** across three historical liquidity injections identifies the policy-response speed δ = 1549.5.

## The headline result

The model's signature output is a single test of the **liquidity-spiral stability condition** (§7.2):

```
δ  >  β₃ · ∂W/∂M · λ · λA
1549.5    >    0.0235      →    LHS / RHS ≈ 65,979    →   Stable ✓
```

When the ratio collapses toward unity, the panic-feedback channel is approaching destabilisation. This is the single most consequential number on the screen.

## What's calibrated vs. estimated

Three parameters are calibrated rather than estimated, and the dashboard surfaces this explicitly. The own-arbitrage elasticity β₂ is estimated at +0.57 but fails to converge to the Lopez-Salido & Vissing-Jorgensen (2025) benchmark of −0.80; the dashboard uses the LVJ value for policy quantification rather than the local estimate, and says so in the footer.

The transparency is not aesthetic. It is what makes the model usable by someone who needs to understand which numbers are load-bearing under which assumptions.

## The product

A Bloomberg-terminal-style React dashboard with five tabs:

- **Macro Radar** — live regime classification, cliff-risk triggers, QT countdown to the scarcity threshold
- **G-SIB Tracker** — per-bank reserves, LCR, SLR, HQLA, DW prepositioning for the six U.S. G-SIBs, with SEC EDGAR 10-Q deep-links
- **Policy Simulator** — combinatorial selection across the 15-policy menu, with three documented interaction rules (stigma synergy, NSFR substitution, TGA-LSM cap)
- **AI Briefing** — LLM-generated daily note conditioned on the current state, with EmailJS distribution
- **Audit Panel** — full parameter audit trail with paper citations

Deployed on Cloudflare Pages with a Functions-based FRED proxy.

## References

- Anderson, A., Barbarino, A., Diercks, A. M., & Miran, S. (2026). *A User's Guide to Reducing the Federal Reserve's Balance Sheet*. FEDS 2026-019.
- Hansen, B. E. (1996). *Inference when a nuisance parameter is not identified under the null hypothesis*. Econometrica.
- Lopez-Salido, D., & Vissing-Jorgensen, A. (2025). Reserve demand and the federal funds rate.
