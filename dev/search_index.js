var documenterSearchIndex = {"docs":
[{"location":"HazardBasedDistribution/#Hazard-Based-Distributions","page":"Hazard Based Distributions","title":"Hazard Based Distributions","text":"","category":"section"},{"location":"HazardBasedDistribution/","page":"Hazard Based Distributions","title":"Hazard Based Distributions","text":"Custom distribution type","category":"page"},{"location":"HazardBasedDistribution/","page":"Hazard Based Distributions","title":"Hazard Based Distributions","text":"JointModels.HazardBasedDistribution","category":"page"},{"location":"HazardBasedDistribution/#JointModels.HazardBasedDistribution","page":"Hazard Based Distributions","title":"JointModels.HazardBasedDistribution","text":"HazardBasedDistribution\n\nHazardBasedDistribution is a type that builds a distribution based  on a hazard function.\n\nTo use this type to formulate a distribution yourself: implement a struct and the hazard function.\n\nstruct LogLogistic <: HazardBasedDistribution\n    α::Real\n    β::Real\nend\n\nfunction JointModels.hazard(dist::LogLogistic, t::Real)\n    α, β  = dist.α, dist.β\n    return ((β / α) * (t / α) ^ (β - 1)) / (1 + (t / α) ^ β)\nend\n\nHazardBasedDistribution implements numeric integration to calculate the  cumulative hazard and builds a distribution based it. To generate samples it solves an ODE and applies inverse transform sampling.\n\n\n\n\n\n","category":"type"},{"location":"HazardBasedDistribution/","page":"Hazard Based Distributions","title":"Hazard Based Distributions","text":"The Distributions.jl functionalities implemented for HazardBasedDistribution.","category":"page"},{"location":"HazardBasedDistribution/","page":"Hazard Based Distributions","title":"Hazard Based Distributions","text":"JointModels.hazard(dist::HazardBasedDistribution, t::Real)\nJointModels.cumulative_hazard(dist::HazardBasedDistribution, t::Real)\nBase.rand(rng::AbstractRNG, dist::HazardBasedDistribution)\nDistributions.ccdf(dist::HazardBasedDistribution, t::Real)\nDistributions.logpdf(dist::HazardBasedDistribution, t::Real)\nDistributions.pdf(dist::HazardBasedDistribution, t::Real)","category":"page"},{"location":"HazardBasedDistribution/#JointModels.hazard-Tuple{HazardBasedDistribution, Real}","page":"Hazard Based Distributions","title":"JointModels.hazard","text":"represents h(t) needs to be implemented for any struct that subtypes HazardBasedDistribution\n\n\n\n\n\n","category":"method"},{"location":"HazardBasedDistribution/#JointModels.cumulative_hazard-Tuple{HazardBasedDistribution, Real}","page":"Hazard Based Distributions","title":"JointModels.cumulative_hazard","text":"calculates H(t) = int_0^t h(u)  du numerically with a  Gauss-Konrad procedure.\n\n\n\n\n\n","category":"method"},{"location":"HazardBasedDistribution/#Base.rand-Tuple{AbstractRNG, HazardBasedDistribution}","page":"Hazard Based Distributions","title":"Base.rand","text":"Generate a random sample t sim textdist via inverse transform  sampling.\n\n\n\n\n\n","category":"method"},{"location":"HazardBasedDistribution/#Distributions.ccdf-Tuple{HazardBasedDistribution, Real}","page":"Hazard Based Distributions","title":"Distributions.ccdf","text":"Calculation of the ccdf / survival function at time t based on the  cumulative hazard\n\nS(t) = exp(-H(t)) = exp(-int h(u) du)\n\n\n\n\n\n","category":"method"},{"location":"HazardBasedDistribution/#Distributions.logpdf-Tuple{HazardBasedDistribution, Real}","page":"Hazard Based Distributions","title":"Distributions.logpdf","text":"Calculation of the log pdf function at time t based on the cumulative hazard \n\nlog (f(t)) = log(h(t)cdot S(t)) = log( h(t)) - H(t)\n\n\n\n\n\n","category":"method"},{"location":"HazardBasedDistribution/#Distributions.pdf-Tuple{HazardBasedDistribution, Real}","page":"Hazard Based Distributions","title":"Distributions.pdf","text":"Calculation of the pdf function at time t based on the log pdf.\n\n\n\n\n\n","category":"method"},{"location":"#JointModels.jl","page":"JointModels.jl","title":"JointModels.jl","text":"","category":"section"},{"location":"","page":"JointModels.jl","title":"JointModels.jl","text":"Documentation for JointModels.jl","category":"page"},{"location":"","page":"JointModels.jl","title":"JointModels.jl","text":"This package implements a distribution HazardBasedDistribution that allows you to specify the hazard in any way you want, including Joint Model formulations.","category":"page"},{"location":"","page":"JointModels.jl","title":"JointModels.jl","text":"","category":"page"}]
}
