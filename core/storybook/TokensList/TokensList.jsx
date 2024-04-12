import { TabGroup, Tab } from '../../../src/tabGroup'
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
    <TabGroup activeTabClassName="tab-list-active" disabledClassName="tab-list-disabled" tabClassName="tab-list-item" className="tab-list">
      {Object.entries(tokensByScope).map(entry => (
        <Tab eventKey={entry[0]} label={entry[0]} key={entry[0]}>
          <div style={{ height: '400px', overflow: 'auto' }}>
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
          <ul>

          </ul>
        </Tab>
      ))}
    </TabGroup>
  )
}

export default TokensList