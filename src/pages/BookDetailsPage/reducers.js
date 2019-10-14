import { fromJS } from 'immutable';
import ACTIONS from './actions';

export const initialState = fromJS({
  book: {
    title: 'Pocket Full of Colors: The Magical World of Mary Blair, Disney Artist Extraordinaire',
    author: 'By  Amy Guglielmo, Jacqueline Tourville and illustrated by Brigette Barrager',
    ratingValue: 3.5,
    commentCount: 148,
    purchaseLinks: {
      amazon: '',
      kindle: '',
    },
    genres: ['Non-fiction', 'Children', 'Picture'],
    summary:
      'Amy Guglielmo, Jacqueline Tourville, and Brigette Barrager team up to tell the joyful and unique story of the trailblazing Disney artist Mary Blair. Mary Blair lived her life in color: vivid, wild color. From her imaginative childhood to her career as an illustrator,designer, and animator for Walt Disney Studios, Mary wouldn’t play by the rules. At a time when studios wanted to hire men and think in black and white, Mary painted twinkling emerald skies, peach giraffes with tangerine spots, and magenta horses that could fly. She painted her world.',
    details: {
      ageRange: '4 - 8 years',
      gradeLevel: 'Preschool - 3',
      hardcover: '48 pages',
      publisher: 'Atheneum Books for Young Readers(August 29, 2017)',
      language: 'English',
      isbn10: '1481461311',
      isbn13: '978 - 1481461313',
      productDimensions: '11 x 0.5 x 11 inches',
    },
    reviews: [
      {
        author: 'Crooked',
        reviewContent:
          'Sunshine radiates past corners and mermaids swim off the page, while rainbow wisps stream from Mary’s paintbrush and trail after her fingers….The whimsical illustrations will enamor young readers while older kids will learn about a Disney legend as well as new words, such as russet or',
      },
      {
        author: 'Handsome',
        reviewContent:
          'Barrager’s digital illustrations employ a kaleidoscopic, Fauvist palette and intense patterns in a retro aesthetic that reflects the time of Disney’s golden age.Guglielmo and Tourville’s text uses deliciously precise color names….This is a love letter to the color wheel and a prismatic snapshot of a',
      },
      {
        author: 'Wei',
        reviewContent:
          'Barrager’s digital illustrations employ a kaleidoscopic, Fauvist palette and intense patterns in a retro aesthetic that reflects the time of Disney’s golden age.Guglielmo and Tourville’s text uses deliciously precise color names….This is a love letter to the color wheel and a prismatic snapshot',
      },
      {
        author: 'AnnaChan',
        reviewContent: 'Barrager’s hues…are energetic….A bright homage to Blair’s bold work.',
      },
    ],
    bookCoverURL: 'https://loremflickr.com/250/250?random=10',
    interestStatus: {
      wantToReadCount: 210,
      readingCount: 4,
    },
  },
  loading: false,
  error: '',
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
