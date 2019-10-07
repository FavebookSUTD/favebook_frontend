// import React
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

// import Antd
import { Typography, Layout, Pagination } from 'antd';

// import local styling
import './index.scss';

// import components
import HeaderMenu from '../HomePage/components/HeaderMenu';
import BookInfo from './components/BookInfo';

// Extract antd components
const { Content } = Layout;

class BrowseResultsPage extends PureComponent {
  // ComponentDidMount here?
  
  menuClickHandler = url => {
    const { history } = this.props;
    history.push(url);
  };

  render() {
    // const { books } = this.props;

    // Mock Data
    const books = {
      data: [
        { id: '1', title: 'Book 1', imgURL: '', author: 'Lionell Loh' },
        { id: '2', title: 'Book 2', imgURL: '', author: 'Lionell Loh' },
        { id: '3', title: 'Book 3', imgURL: '', author: 'Lionell Loh' },
        { id: '4', title: 'Book 4', imgURL: '', author: 'Lionell Loh' },
        { id: '5', title: 'Book 5', imgURL: '', author: 'Lionell Loh' },
        { id: '6', title: 'Book 1', imgURL: '', author: 'Lionell Loh' },
        { id: '7', title: 'Book 2', imgURL: '', author: 'Lionell Loh' },
        { id: '8', title: 'Book 3', imgURL: '', author: 'Lionell Loh' },
        { id: '9', title: 'Book 4', imgURL: '', author: 'Lionell Loh' },
        { id: '10', title: 'Book 5', imgURL: '', author: 'Lionell Loh' },
      ],
    };

    return (
      <div className="results-page__main-container">
        <Layout className="results-page__container">
          <HeaderMenu menuClickHandler={this.menuClickHandler} />
          <Content>
            <BookInfo books={books.data} />
            <Pagination
              className="results-page__pagination"
              defaultCurrent={1}
              defaultPageSize={5}
              total={books.data.length}
            />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default compose(withRouter)(BrowseResultsPage);
