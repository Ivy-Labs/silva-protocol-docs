# Slashing on Ethereum

Silva’s **slashing mechanism** is enforced through smart contracts on the Ethereum. It guarantees that **even if all Silva nodes collude maliciously, their staked assets will be slashed**.

The economic costs for attack:

* **≥1/3 stake control**: Can initiate fork attacks (e.g., double voting to forge conflicting finality confirmations).  
* **≥2/3 stake control**: Can construct entirely invalid finality confirmations (e.g., invalid state transitions).

In byzantine systems without slashing, the cost of attack is merely short-term control of staked funds. However, Silva’s **slashing mechanism upgrades the attack cost to permanent capital loss**.

The security of the system hinges on the **economic infeasibility** of malicious behavior, determined by the trade-off between the expected gains and the cost. By **slashing the staked assets of malicious nodes**, Silva raises the cost of attacks to be economically prohibitive.