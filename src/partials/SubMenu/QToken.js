import React from 'react'

function QToken() {
    return (
        <div className="relative max-w-6xl mx-auto sm:px-6 md:cols-2">
            <div>
            <p>Liqwid interest bearing tokens (qTokens for short) are minted upon supplying and burned when users withdraw funds. The qTokens are pegged 1:1 to the value of the underlying asset supplied to Liqwid protocol. 
By minting qTokens, users earn interest through the qToken's exchange rate, which continuously increases in value relative to the underlying asset and can use qTokens as collateral.
While the underlying asset is loaned out to borrowers, qTokens accrue interest in real time, directly in your Cardano wallet.</p></div>
        </div>
    )
}
export default QToken;