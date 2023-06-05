import React, { useState, useEffect } from 'react';
import CardList from '../CardList/CardList';
import { Link } from 'react-router-dom';
import css from './Tweets.module.css';
import axios from 'axios';
import LoadMoreButton from '../LoadMoreBtn/LoadMoreBtn';
import Dropdown from '../Dropdown/Dropdown';

function Tweets() {
  const [users, setUsers] = useState(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    return storedUsers;
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOption, setFilterOption] = useState('show all');
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const cardsPerPage = 3;

  const fetchTweets = async page => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        'https://64778a019233e82dd53bd33c.mockapi.io/users/users',
        {
          params: {
            _page: page,
            _limit: cardsPerPage,
          },
        }
      );

      const data = response.data;

      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const updatedUsers = data.map(user => {
        const storedUser = storedUsers.find(
          storedUser => storedUser.id === user.id
        );
        if (storedUser) {
          return {
            ...user,
            isFollowing: storedUser.isFollowing,
            followers: storedUser.followers,
          };
        }
        return user;
      });

      if (data.length < cardsPerPage) {
        setHasMoreData(false);
      }

      setUsers(prevUsers => {
        const filteredUsers = updatedUsers.filter(
          user => !prevUsers.find(prevUser => prevUser.id === user.id)
        );
        return [...prevUsers, ...filteredUsers];
      });
    } catch (error) {
      console.error('Error fetching tweets:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTweets(currentPage);
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  function addComma(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const handleButtonClick = userId => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.map(user => {
        if (user.id === userId) {
          const updatedUser = { ...user };
          updatedUser.followers += updatedUser.isFollowing ? -1 : 1;
          updatedUser.isFollowing = !updatedUser.isFollowing;
          return updatedUser;
        }
        return user;
      });

      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleFilterChange = event => {
    setFilterOption(event.target.value);
  };

  const filterUsers = (users, filterOption) => {
    if (filterOption === 'follow') {
      return users.filter(user => !user.isFollowing);
    } else if (filterOption === 'followings') {
      return users.filter(user => user.isFollowing);
    }
    return users;
  };

  const filteredUsers = filterUsers(users, filterOption);

  const visibleUsers = filteredUsers.slice(0, currentPage * cardsPerPage);

  const showLoadMore =
    hasMoreData &&
    visibleUsers.length < 12 &&
    filterOption === 'show all' &&
    !isLoading;

  return (
    <>
      <div className={css.filterContainer}>
        <Link to="/" className={css.backLink}>
          Back
        </Link>
        <Dropdown value={filterOption} onChange={handleFilterChange} />
      </div>
      <CardList
        users={visibleUsers}
        addComma={addComma}
        onButtonClick={handleButtonClick}
        isLoading={isLoading}
      />
      <LoadMoreButton onClick={handleLoadMore} showLoadMore={showLoadMore} />
    </>
  );
}

export default Tweets;
