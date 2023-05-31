import { Blockquote } from '../../src/blockquote/Blockquote';
/**
 * In this section we're using the Blockquote component providing the relative `className, text and footer` . Feel free to use your own css and style the Blockquote as you prefer.
 */
export default {
  title: 'DCXLibrary/Typography/Blockquote/Class based',
  component: Blockquote,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

const style = {
    margin: '0',
    padding: '15px',
    background: '#eee',
    borderRadius: '5px',
    width: '500px'
};

export const Styled = {
  name: 'with some style',
  render: function() {
    return (
      <div style={style}>
        <figure>
          <Blockquote text='We are such stuff as dreams are made on.' cite="https://www.twinkl.co.uk/homework-help/famous-figures-homework-help/shakespeare-facts-for-kids/top-10-famous-quotes-from-shakespeares-plays"/>
          <figcaption>—Act IV, <cite>Scene I</cite></figcaption>
        </figure>
      </div>
    );
}
};
