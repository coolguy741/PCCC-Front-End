import { useState, useEffect } from 'react';
import styled from "styled-components";
import { AccountCard } from "../../../components/Accounts/AccountCard";
import UserCards from '../../../lib/mockData/accounts/profiles.json';

export const AccountsProfilesPage = () => {

  const handleUserTypeChange = () => {
  }

  const handleSortTypeChange = () => {
  }

  const handleCardDelete = () => {
  }
  
  return (
    <PageContainer>
      <div className="filters-container">
        <div className="filter">
          <div className="bold-title">Filter By:</div>
          <div className="title">User Type</div>
          <select onChange={handleUserTypeChange}>
            <option value="All">All</option>
            <option value="Standard">Standard</option>
            <option value="Professional">Professional</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="filter">
          <div className="bold-title">Sort By:</div>
          <div className="title">Type</div>
          <select onChange={handleSortTypeChange}>
            <option value="ayzee">A-Z</option>
            <option value="zeeay">Z-A</option>
          </select>
        </div>
      </div>
      <div className="users">
        {UserCards.map((Card, index) => {
          return <AccountCard img={Card.img} name= {Card.name} role= {Card.role} onClick={handleCardDelete} key={index}/>
        })}
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding-top: 110px;
  display: flex;
  flex-direction: column;

  .filters-container {
    display: flex;
    padding-bottom: 40px;

    .filter {
      display: flex
      flex-direction: column;
      font-size: 16px;
      color: #797979;
      font-style: normal;
      font-family: 'Noir Std';
      padding-right: 50px;
      
      .bold-title {
        font-weight: 600;
        padding-bottom: 8px;
      }

      .title {
        font-weight: 400;
        padding-bottom: 8px;
      }

      select {
        background-color: transparent;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 143.18%;
        letter-spacing: 0.02em;
        color: #3D3D3D;
      }
    }
  }

  .users {
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
  }
`
