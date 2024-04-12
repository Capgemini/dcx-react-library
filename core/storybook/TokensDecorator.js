import React from 'react';
import './TokensDecorator.css';
import '../../dist/design-system/index.css';

const TokensDecorator = (props) => {
  const [isTokensVisible, setIsTokensVisible] = React.useState(false);
  const [lastEdit, setLastEdit] = React.useState('')

  const tokenRegex = /var\(--dcx-[-_#:,\w\s]*\)/gm;
  const matches = String(props.style).match(tokenRegex).map(match => match.replace(', ', ','));

  const uniqueMatches = new Set(matches);

  const tokenTuples = Array.from(uniqueMatches.values()).sort().map(match => {
    const parsedMatch = match.replace(/^var\(/, '').replace(/\)$/, '');
    const parts = parsedMatch.split(',');
    const [key, ...defaultValue] = parts;
    return [key, defaultValue.join(',')];
  });

  const tokensByScope = tokenTuples.reduce((acc, tuple) => {
    const [scope] = tuple[0].replace('--dcx-', '').split('-');
    if (!acc[scope]) {
      acc[scope] = []
    }
    acc[scope].push(tuple)
    return acc;
  }, {})

  const handleTokenSelection = (scope, token) => {
    const $scopeButton = parent.document.querySelector(`#tabbutton-${scope}`);
    if (!$scopeButton) {
      return
    }

    $scopeButton.click();

    setTimeout(() => {
      const $tokenSearch = parent.document.querySelector(`.token-search input`);

      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value').set;

      nativeInputValueSetter.call($tokenSearch, token);
      $tokenSearch.dispatchEvent(new Event('change', { bubbles: true }));
      setIsTokensVisible(false);
      setLastEdit(token);
    }, 100)
  }

  return (
    <div>
      <div className={`_tokens-table ${isTokensVisible && '_tokens-table--visible'}`}>
        <table>
          {Object.entries(tokensByScope).map((entry) => (
            <React.Fragment>
              <tr>
                <td colSpan={2}>{entry[0]}</td>
              </tr>
              {entry[1].map((pair) => (
                <tr>
                  <td>
                    <div className='_token-table__token-cell'>
                      <span className={lastEdit === pair[0] ? '_active' : ''}>{pair[0]}</span>
                      <button onClick={handleTokenSelection.bind(this, entry[0], pair[0])}>
                        Edit
                      </button>
                    </div>
                  </td>
                  <td>{pair[1]}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </table>
      </div>
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
