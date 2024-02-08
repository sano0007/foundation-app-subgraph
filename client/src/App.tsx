import {useEffect, useState} from 'react'
import './App.css'
import {cacheExchange, Client, fetchExchange} from 'urql'
import {ITokens} from "../interface/i-tokens.ts";


const GRAPH_API_URL = "https://api.thegraph.com/subgraphs/name/sano0007/learn-subgraph"

const query = `
query {
  tokens(first: 5) {
    id
    tokenID
    contentURI
    tokenIPFSPath
  }
  users(first: 5) {
    id
    tokens {
      id
    }
    created {
      id
    }
  }
}
`

const client = new Client({
    url: GRAPH_API_URL,
    exchanges: [cacheExchange, fetchExchange]
})

function App() {
    const [tokens, setTokens] = useState<ITokens[]>([]);

    async function fetchData() {
        const response = await client.query(query, {}).toPromise();
        setTokens(response.data.tokens);
        console.log('🥶🥶🥶', response.data.tokens);

    }

    useEffect(() => {
        fetchData().then()
    }, [])

    return (
        <div>
            {tokens.map((token, index) => (
                <div key={index}>
                    <a href={token.contentURI} target={"_blank"}>Content URI</a>
                    <p>{token.tokenID}</p>
                </div>
            ))}
        </div>
    )
}

export default App
