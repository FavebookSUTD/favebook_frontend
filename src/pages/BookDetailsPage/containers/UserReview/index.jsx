// import React
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// import reducer and saga
import reducer from './reducers';
import saga from './saga';
import injectReducer from '@utils/core/injectReducer';
import injectSaga from '@utils/core/injectSaga';

// import actions
import { fetchUserRating, updateUserRating, submitUserReview } from './actions';

// import selector
import { selectRating, selectLoading, selectError } from './selectors';

// import local components
import BookRatingStar from '../../components/BookRatingStar';

// import local styling
import './index.scss';

// import Antd
import { Input, Typography, Button } from 'antd';

// Extract antd components
const { Text } = Typography;
const { TextArea } = Input;

class UserReview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }

  componentDidMount() {
    const { fetchUserRating } = this.props;
    fetchUserRating();
  }

  componentDidUpdate(prevProps) {
    const { loading, error } = this.props;
    if (prevProps.loading && !loading && !error) {
      this.clearUserInput();
    }
  }

  updateUserRatingHandler = value => {
    const { updateUserRating } = this.props;
    updateUserRating(1, value);
  };

  submitUserReviewHandler = () => {
    const { submitUserReview } = this.props;
    const { userInput } = this.state;
    if (userInput) {
      submitUserReview(1, userInput);
    }
  };

  clearUserInput = () => {
    this.setState({
      userInput: '',
    });
  };

  render() {
    const { rating, loading } = this.props;
    const { userInput } = this.state;

    return (
      <div className="user-review__container">
        <div className="user-review-rating__container">
          <Text className="user-review-rating-header">My Review</Text>
          <BookRatingStar
            ratingValue={rating}
            updateRatingHandler={value => this.updateUserRatingHandler(value)}
          />
        </div>
        <TextArea
          className="user-review__input-container"
          autosize={{ minRows: 6, maxRows: 6 }}
          value={userInput}
          onChange={({ target: { value } }) => this.setState({ userInput: value })}
        />
        <Button
          className="user-review__submit-btn"
          shape="round"
          loading={loading}
          disabled={!userInput}
          onClick={this.submitUserReviewHandler}
        >
          RATE NOW
        </Button>
      </div>
    );
  }
}

UserReview.propTypes = {
  rating: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,

  fetchUserRating: PropTypes.func.isRequired,
  updateUserRating: PropTypes.func.isRequired,
  submitUserReview: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  rating: selectRating,
  loading: selectLoading,
  error: selectError,
});

const mapDispatchToProps = {
  fetchUserRating,
  updateUserRating,
  submitUserReview,
};

const withReducer = injectReducer({ key: 'BookDetailsPage.UserReview', reducer });
const withSaga = injectSaga({ key: 'BookDetailsPage.UserReview', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserReview);
