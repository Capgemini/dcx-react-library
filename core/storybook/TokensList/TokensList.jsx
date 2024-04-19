import { Details } from '../../../src/details'
import tokens from '../../../src/design-system/tokens.json'

const TokensList = () => {
  const tokensByScope = Object.entries(tokens).reduce((acc, entry) => {
    const tokenName = entry[0]
    const [tokenScope] = tokenName.split('-')
    if (!acc[tokenScope]) {
      acc[tokenScope] = []
    }
    acc[tokenScope].push(entry)
    return acc
  }, {})

  return (
    Object.entries(tokensByScope).map(entry => (
      <Details summary={entry[0]}>
        <div style={{ maxHeight: '400px', overflow: 'auto' }}>
          <table style={{ margin: '0px', width: '100%' }}>
            <thead>
              <tr>
                <td>Token</td>
                <td>Default value</td>
              </tr>
            </thead>
            <tbody>
              {entry[1].map(tokenEntry => (
                <tr key={tokenEntry[0]}>
                  <td>--dcx-{tokenEntry[0]}</td>
                  <td>{tokenEntry[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Details>
    ))
  )
}

export default TokensList