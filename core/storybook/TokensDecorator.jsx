import React from 'react';
import './TokensDecorator.css';
import '../../dist/design-system/index.css';

const TokensDecorator = (props) => {
  const tokenRegex = /var\(--dcx-[-_#:,\w\s]*\)/gm;
  const matches = String(props.style).match(tokenRegex);
  const pairs = matches.map(match => {
    const parsedMatch = match.replace(/^var\(/, '').replace(/\)$/, '');
    const parts = parsedMatch.split(',');
    const [key, ...defaultValue] = parts;
    return [key, defaultValue.join(',')];
  });

  const [isTokensVisible, setIsTokensVisible] = React.useState(false);

  return (
    <div>
      {isTokensVisible && (
        <div className='_tokens-table'>
          <table className='foo'>
            <tr>
              <th>Token</th>
              <th>Default Value</th>
            </tr>
            {pairs.map(pair => (
              <tr>
                <td>{pair[0]}</td>
                <td>{pair[1]}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
      <button
        className='_tokens-button'
        onClick={() => setIsTokensVisible(!isTokensVisible)}
      >
        Toggle Available Tokens
      </button>
      {props.children}
    </div>
  );
};

export default TokensDecorator;
