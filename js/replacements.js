var addresses = {
    contract: "#",
    charityWallet: "#"
}

var links = {
    bscscan: ``,
    buy: ``,
    twitter: "https://twitter.com/DoggoSolana_",
    telegram: "https://t.me/DoggoCoinSol",
}

var innerLinks = {
    home: "index.html",
    story: "#",
    meme: "https://t.me/DoggoCoinSol",
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
