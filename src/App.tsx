import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
 
function Profile() {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
 
  if (isConnected) return <div>Connected to {ensName ?? address}</div>
  return <button onClick={() => connect()}>Connect Wallet</button>
}

function App() {
  return (
      <div>
        {Profile()}      
      </div>
  )
}

export default App
