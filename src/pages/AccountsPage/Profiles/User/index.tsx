import MockData from "../../../../lib/mockData/accounts/userProfile.json";
import styled from "styled-components";
//should be deleted after api implementation
import { useLocation } from "react-router-dom";
import { Button } from "../../../../components/Global/Button";
import { Icon } from "../../../../components/Global/Icon";
import { Photo } from "../../../../components/Accounts/Photo";

export const AccountsUserProfilePage = () => {
  //should be deleted after api implementation
  const {pathname} = useLocation();
  const userData = pathname.includes("Standard") ? MockData[0] : pathname.includes("Professional") ? MockData[1] : MockData[2];
  
  const handleBack = () => {

  }

  const handleEdit = () => {

  }

  return (
    <PageContainer>
        <Button onClick={handleBack} >&lt; Back</Button>
        <div className="info-container">
          <div className="avatar-container">
            <div className="avatar">
              <Photo src={userData.image} role={userData.role}/>
            </div>
            {
            userData.role === "Standard" ? 
                <div className="user-info">
                  <p className="bold-big-text">{userData.userID}</p>
                  <p className="text">Birth year: {userData.birthYear}</p>
                  <p className="text">Province: {userData.province}</p>
                  <p className="text">Created: {userData.createdDate}</p>
                </div>
            : userData.role === "Professional" ?
                <div className="user-info">
                  <p className="bold-big-text">{userData.userID}</p>
                  <p className="bold-text">{userData.name}</p>
                  <p className="text">Birth year: {userData.birthYear}</p>
                  <p className="text">ID Code: {userData.idCode}</p>
                  <p className="text">School: {userData.school}</p>
                  <p className="text">Province: {userData.province}</p> 
                  <p className="text">{userData.email}</p> 
                  <p className="text">Created: {userData.createdDate}</p>
                </div>
            :
                <div className="user-info">
                  <p className="bold-big-text">{userData.userID}</p>
                  <p className="bold-text">{userData.name}</p>
                  <p className="text">Birth year: {userData.birthYear}</p>
                  <p className="text">Province: {userData.province}</p> 
                  <p className="text">{userData.email}</p> 
                  <p className="text">Created: {userData.createdDate}</p>
                </div>
            }
            
          </div>
          <div className="badges-groups-container">
            <h3>Badges</h3>
            <div className="badges">
              {[...Array(userData.badges)].map((_, index) => (
                <span className="badge-icon" key={index}><Icon name="group"/></span>
              ))
              }
            </div>
            <h3>Groups</h3>
            <ul className="groups-list">
              {userData.groups.map((group, index) => (
                <li className="group-item" key={index}>
                  <span className="group-icon"><Icon name="group"/></span>
                  <p className="bold-text">{group.name}</p>
                  <p>&lpar {group.number} &rpar</p>
                </li>
              )
              )}
            </ul>
          </div>
          
        </div>
        <h3>Activity</h3>
        <ul className="activities-list">
          {
            userData.activities.map((activity, index) => (
              <li className="activity-item">
                <span className="icon-container">
                  <Icon name={activity.type}/>
                </span>
                <p className="bold-text">User</p>
                <p className="text"></p>
              </li>
            ))
          }
        </ul>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 11px;

  Button {
    max-width: 150px;
  }

  .info-container {
    display: flex;
    padding-top: 5px;

    .avatar-container{
      display: flex;

      .avatar {
        width: 94px;
        height: 94px;
      }
    }

    .badges-groups-container{

    }
    
  }
`