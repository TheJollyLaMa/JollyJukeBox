export const paymentTokensDict = {
    'POL': {
        "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359": "https://bafybeiag2css4im6d7fdtcafwabw2qau46yrzhn4z23hwhsft2e3faa2fy.ipfs.w3s.link/USDC_of_the_future.png", // USDC
        "0x81ccef6414d4cdbed9fd6ea98c2d00105800cd78": "./assets/DecentSmartHome_Logo.png", // SHT
        "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270": "https://bafybeic5bvnkjejuxbogn2n7lyzfyf5l6glgzrxkidjwj4yvhyci5haoca.ipfs.w3s.link/PolygonLogo.png", // MATIC
    },
    'MintMe': {
        "0x969d65ee0823f9c892bdfe3c462d91ab1d278b4e": "./assets/DecentSmartHome_Logo.png",
        "0x25396c06fEf8b79109da2a8e237c716e202489EC": "./assets/MTCG_Logo.png",
        "0x2f9C7A6ff391d0b6D5105F8e37F2050649482c75": "./assets/Bobdubbloon_Logo.png",
        "0xCbc63Dcc51679aDf0394AB2be1318034193003B6": "./assets/Eclipse_Logo.png", 
        "0x3C20f6fC8adCb39769E307a8B3a5109a3Ff97933": "./assets/WithinTheVacuum_Logo.png",
        "0x72E39206C19634d43f699846Ec1db2ACd69513e4": "./assets/SatoriD_Logo.png",
        "0x149D5555387cb7d26cB07622cC8898c852895421": "./assets/DWMW_Logo.png",
        "0xe41CeE59758Bc689692d6AA944b2c6C8a7DB8718": "./assets/Ottoken_Logo.png",
        "0x936e08736F882144Efd53813Ee9805701A5f4dC3": "./assets/DooBetter_Logo.png",
        
    }
};


export const tokenWhiteList = {
    MintMe: {
        "0x969d65ee0823f9c892bdfe3c462d91ab1d278b4e": {
            name: "DecentSmartHomes",
            symbol: "DSH",
            icon: "./assets/DecentSmartHome_Logo.png",
        },
        "0x25396c06fEf8b79109da2a8e237c716e202489EC": {
            name: "MTCG",
            symbol: "MTCG",
            icon: "./assets/MTCG_Logo.png",
        },
        "0x3C20f6fC8adCb39769E307a8B3a5109a3Ff97933": {
            name: "WithintheVacuum",
            symbol: "WTV",
            icon: "./assets/WithintheVacuum_Logo.png",
        },
        "0x72E39206C19634d43f699846Ec1db2ACd69513e4": {
            name: "SatoriD",
            symbol: "SatoriD",
            icon: "./assets/SatoriD_Logo.png",
        },
        "0x149D5555387cb7d26cB07622cC8898c852895421": {
            name: "DWMW",
            symbol: "DWMW",
            icon: "./assets/DWMW_Logo.png",
        },
        "0xCbc63Dcc51679aDf0394AB2be1318034193003B6": {
            name: "Eclipse",
            symbol: "Eclipse",
            icon: "./assets/Eclipse_Logo.png",
        },
        "0x2f9C7A6ff391d0b6D5105F8e37F2050649482c75": {
            name: "Bobdubbloon",
            symbol: "Bobdubbloon",
            icon: "./assets/Bobdubbloon_Logo.png",
        },
        "0xe41CeE59758Bc689692d6AA944b2c6C8a7DB8718": {
            name: "Ottoken",
            symbol: "Ottoken",
            icon: "./assets/Ottoken_Logo.png",
        },
        "0x936e08736F882144Efd53813Ee9805701A5f4dC3": {
            name: "DooBetter",
            symbol: "DooBetter",
            icon: "./assets/DooBetter_Logo.png",
        }

    },
    Polygon: {

        "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359": {
            name: "USDC",
            symbol: "USDC",
            icon: "https://bafybeiag2css4im6d7fdtcafwabw2qau46yrzhn4z23hwhsft2e3faa2fy.ipfs.w3s.link/USDC_of_the_future.png",
        },
        "0x81ccef6414d4cdbed9fd6ea98c2d00105800cd78": {
            name: "SHT",
            symbol: "SHT",
            icon: "/assets/DecentSmartHome_Logo.png",
        },
        "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270": {
            name: "MATIC",
            symbol: "MATIC",
            icon: "https://bafybeic5bvnkjejuxbogn2n7lyzfyf5l6glgzrxkidjwj4yvhyci5haoca.ipfs.w3s.link/PolygonLogo.png",
        }
    }
};


export const loadIcons = async (paymentTokens) => {
    const tokenAddresses = paymentTokens
        .map((token) => {
            if (!token || typeof token !== "string") {
                console.warn(`Invalid token address: ${token}`);
                return null; // Mark invalid tokens
            }
            return token;
        })
        .filter(Boolean); // Remove null entries

    const fetchedIcons = await Promise.all(

        tokenAddresses.map(async (token) => {
            const url = paymentTokensDict.POL[token] || paymentTokensDict.MintMe[token]; // Check both networks
            if (!url) {
                console.warn(`Icon not found for token ${token}. Using fallback.`);
                return { token, url: "https://bafybeifej4defs5s5wryxylmps42c7xkbzle3fxjgnsbb5hcfnd5b77zwa.ipfs.w3s.link/Ens_Eth_Breathe.gif" }; // Fallback icon
            }

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
                return { token, url };
            } catch (error) {
                console.error(`Error fetching icon for ${token}:`, error);
                return { token, url: "https://bafybeifej4defs5s5wryxylmps42c7xkbzle3fxjgnsbb5hcfnd5b77zwa.ipfs.w3s.link/Ens_Eth_Breathe.gif" }; // Fallback icon
            }
        })
    );

    return fetchedIcons;
};