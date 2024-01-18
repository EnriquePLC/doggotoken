var addresses = {
    contract: "#",
    charityWallet: "#"
}

var links = {
    bscscan: `https://etherscan.io/token/${addresses.contract}`,
    buy: `https://app.uniswap.org/swap?outputCurrency=${addresses.contract}`,
    twitter: "https://twitter.com/DoggoOnETH",
    telegram: "https://t.me/DoggoOnETH",
}

var innerLinks = {
    home: "index.html",
    story: "#",
    meme: "https://t.me/DoggoOnETH",
    marketplace: "#",
    nft: "#"
}

for (var prop in addresses) {
    if (addresses.hasOwnProperty(prop)) {
        document.querySelectorAll(`[data-replace=${prop}]`).forEach(el => el.textContent = addresses[prop]);
    }
}

for (var prop in links) {
    if (links.hasOwnProperty(prop)) {
        document.querySelectorAll(`[data-replace=${prop}]`).forEach(el => el.setAttribute("href", links[prop]));
    }
}

for (var prop in innerLinks) {
    if (innerLinks.hasOwnProperty(prop)) {
        document.querySelectorAll(`[data-replace=${prop}]`).forEach(el => el.setAttribute("href", innerLinks[prop]));
    }
}
