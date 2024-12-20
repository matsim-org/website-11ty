---
title: MATSim Terminology
permalink: /docs/userguide/terminology.html
description: MATSim uses a terminology that is sometimes different from the mainstream terminology.
layout: page
---

<p>In many cases, MATSim uses a terminology that is different from the mainstream terminology. In most cases, the reason is that the concepts are only similar, but not identical, and we wanted to avoid the confusion of using the same term for aspects that are similar but not identical. The following attempts some commented approximate ”translations” from more standard teminology to MATSim terminology.&nbsp;</p>
<h3>Choice set → “plan set” of an agent</h3>
<p>During MATSim iterations, agent accumulate plans. This can be interpreted as building a choice set over time. A problem is that the process that generates the choice set at this point is not systematic.</p>
<p>Possible future developments: Once it has been made explicit that ”plans generation” means ”choice set generation”, the terminology may be made standard.</p>
<h3>Choice set generation → Time mutation/re-route/... ; ”innovation”</h3>
<p>As said above, the set of MATSim plans can be seen as this agent’s choice set. MATSim generates new plans ”on-the-fly”, i.e. while the simulation is running. We sometimes call this ”innovation”, since agents create new plans (= add entries to the choice set), rather than choosing between existing plans.</p>
<h3>Choice set generation, choice → replanning</h3>
<p>In MATSim, there is no strict separation between ”choice set generation” and ”choice”: at the replanning step, for each agent, a replanning strategy is randomly choosen. This strategy may consist in selecting a random plan to use to generate a new plan by mutation (”choice set generation” part), or just to select a past plan based on the experienced score (”choice” part).&nbsp;</p>
<h3>Convergence → learning rate</h3>
<p>Scores in matsim are computed as<br><em>&nbsp; score<sub>new</sub></em> = (1 − <em>α</em>) · <em>score<sub>old</sub></em> + <em>α</em> · <em>score<sub>sim</sub></em> ,</p>
<p>where <em>score<sub>sim</sub></em> is the score that is obtained from the execution of the plans (= network loading).&nbsp;</p>
<h3>μ (logit model scaling factor) → beta brain</h3>
<p>MATSim scoring function:</p>
<p><math display="block" title="{\tt BrainExpBeta} \cdot \sum_i \beta_i \, x_i " xmlns="http://www.w3.org/1998/Math/MathML"> <mrow> <mi>BrainExpBeta</mi> <mo>⋅</mo> <munder> <mrow> <mo largeop="true">∑</mo> </mrow> <mrow> <mi>i</mi> </mrow> </munder> <msub> <mrow> <mi>β</mi> </mrow> <mrow> <mi>i</mi> </mrow> </msub> <mspace width="0.167em"></mspace> <msub> <mrow> <mi>x</mi> </mrow> <mrow> <mi>i</mi></mrow></msub></mrow></math></p>
<p>Typical logit model formulation:</p>
<p><math display="block" title="{\tt BrainExpBeta} \cdot \sum_i \beta_i \, x_i " xmlns="http://www.w3.org/1998/Math/MathML"> <mrow> <mi>μ</mi> <mo>⋅</mo> <munder> <mrow> <mo largeop="true">∑</mo> </mrow> <mrow> <mi>i</mi> </mrow> </munder> <msub> <mrow> <mi>β</mi> </mrow> <mrow> <mi>i</mi> </mrow> </msub> <mspace width="0.167em"></mspace> <msub> <mrow> <mi>x</mi> </mrow> <mrow> <mi>i</mi></mrow></msub></mrow></math></p>
<p>As is well known, <em>μ</em> or <em>β<sub>i</sub></em> are not independently identifiable from estimation. For simulation, they are hence somewhat arbitrary. The default value for ”<em>BrainExpBeta</em>” is 2 for historical reasons, but it should be set to 1 if the parameters of the scoring function are estimated rather than hand-calibrated.</p>
<p>Possible future development: Default value of BrainExpBeta should be set to 1&nbsp;instead of 2.</p>
<h3>Multinomial logit → ExpBetaPlanSelector</h3>
<p>Comments:</p>
<ul>
<li>
<p>The main problem is that one needs to keep in mind how the choice set is constructed (see above).</p>
</li>
<li>In most simulations, we use ExpBetaPlanChanger instead, which is a Metropolis Monte Carlo variant of making multinomial logit draws</li>
</ul>
<p>Possible future developments: None of this is ideal, since, after the introduction of a policy, it is not clear which behavioral switches are due to the policy, and which are due to sampling. In theory, one should have unbiased samples before and after the introduction of the policy, but at this point this is not implemented and it is also computationally considerably more expensive than what is done now.&nbsp;</p>
<h3>Network loading → mobsim, mobility simulation, physical simulation</h3>
<p>The standard terminology has the ”network loading” on the ”supply side”. In my (KN’s) view, the ”simulation of the physical system” is not the supply side, but what in economics is called ”technology”. This can for example be seen in the fact that ”lane changing” is part of the mobsim, but this is, in my view, not a ”supply side” aspect.</p>
<p>Possible future developments: May switch to ”network loading” if there is agreement that this is a better name.&nbsp;</p>
<h3>Stationary → relaxed</h3>
<p>“stationary” means that the probability distribution does not shift any more. However, as long as ”innovation” is still switched in on MATSim (new routes, new times, ...), the result is not truly stationary. Thus we avoid the word. If innovation is switched off, the result is indeed a statinary process, but limited to the set of plans that every agent has at that point in time.</p>
<p>Possible future developments: not clear. Minimally, publications should be precise.</p>

```
<module name="strategy" >
  <!-- iteration after which module will be disabled. ... -->
  <param name="ModuleDisableAfterIteration_1" value="null" />
  <param name="ModuleDisableAfterIteration_2" value="950" />

  <!-- probability that a strategy is applied to a given person. ... -->
  <param name="ModuleProbability_1" value="0.9" />
  <param name="ModuleProbability_2" value="0.1" />

  <!-- name of strategy ... -->
  <param name="Module_1" value="ChangeExpBeta" />
  <param name="Module_2" value="ReRoute" />

  <!-- maximum number of plans per agent ... -->
  <param name="maxAgentPlanMemorySize" value="4" />
</module>
```

<p>The above means:</p>

<ul>
<li>StrategyModule ”ReRoute” (= innovative Module, produces plans with new routes) is switched off after iteration 950.</li>
<li>StrategyModule ”ChangeExpBeta” (= non-innovative Module, switches between existing plans) is never switched off.</li>
<li>If an agent ever ends up with more than 4 plans, plans are deleted until she is back to 4 plans. (Deletion goes via a ”PlanSelectorForRemoval”, which affects the choice set, and thus more thought needs to go into this. Currently, the plan with the worst score is removed.)&nbsp;</li>
</ul>
<h3>Utility ↔ score</h3>
<p>Configuration: At least when using random utility models (such as multinomial logit aka ExpBeta...), the score has the same function as the deterministic utility.&nbsp;</p>

