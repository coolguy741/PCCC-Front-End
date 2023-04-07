import MockData from "../../../../lib/mockData/accounts/userProfile.json";
import styled from "styled-components";
import { Button } from "../../../../components/Global/Button";
import { Icon } from "../../../../components/Global/Icon";
import { Photo } from "../../../../components/Accounts/Photo";
import { Link } from "react-router-dom";
//should be deleted after api implementation
import { useLocation } from "react-router-dom";

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
        <Link to="/dashboard/accounts/profiles"><Button onClick={handleBack} >&lt; Back</Button></Link>
        <div className="info-container">
          <div className="avatar-container">
            <Photo src={userData.image} role={userData.role} width="100px"/>
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
            <div className="badges-container">
              <div className="badges">
                {[...Array(userData.badges)].map((_, index) => (
                  <span className="badge-icon" key={index}><Icon name="badge"/></span>
                ))
                }
              </div>
            </div>
            <h3>Groups</h3>
            <div className="groups-container">
              <ul className="groups-list">
                {userData.groups.map((group, index) => (
                  <li className="group-item" key={index}>
                    <span className="group-icon"><Icon name="group"/></span>
                    <span className="bold-text">{group.name}</span>
                    <span className="small-text">{'( ' + group.number + ' )'}</span>
                  </li>
                )
                )}
              </ul>
            </div>
          </div>
          
        </div>
        <h3>Activity</h3>
        <ul className="activities-list">
          {
            userData.activities.map((activity, index) => (
              <li className="activity-item" key={index}>
                <div className="left">
                  <span className="icon-container">
                    <Icon name={activity.type}/>
                  </span>
                  <p className="bold-text">User</p>
                  <p className="text">{activity.name}</p>
                  <p className="text">{activity.content}</p>
                </div>
                <p className="text date">{activity.date}</p>
              </li>
            ))
          }
        </ul>
        <h3>Lesson Accessment</h3>
        <table>
          <thead>
            <tr>
              <th>Lessons</th>
              <th>Groups</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              userData.lessonAssessment.map((lesson, index) => (
                <tr key={index}>
                  <td><Link to="/dashboard/accounts/profiles/Standard/lessonAccessment">{lesson.lessons}</Link></td>
                  <td>{lesson.group}</td>
                  <td>{lesson.date}</td>
                  <td>{lesson.status}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
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
    width: 100%;

    .avatar-container{
      display: flex;
      padding-top: 10px;
      width: 50%;

      .user-info {
        padding-left: 30px;
        font-family: 'Noir Std';
        font-style: normal;
        line-height: 103.68%;
        letter-spacing: 0.02em;
        color: #797979;

        .bold-big-text {
          font-size: 14.1465px;
          font-weight: 700;
        }

        .text {
          font-weight: 400;
          font-size: 12px;
        }
      }
    }

    .badges-groups-container{
      width: 50%;

      .badges-container{
        display: flex;

        .badges {
          padding: 20px;
          background-color: #D9D9D9;
          display: flex;
  
          .badge-icon {
            width: 60px;
            height: 60px;
          }
        }
      }

      .groups-container {
        display: flex;

        .groups-list {
          background-color: #D9D9D9;
          padding: 20px;

          .group-item {
            padding: 10px 0px;
            display: flex;
            align-items: center;

            .group-icon {
              width: 20px;
              height: 20px;
            }

            .bold-text {
              padding-left: 15px;
              font-family: 'Noir Std';
              font-style: normal;
              font-weight: 700;
              font-size: 14px;
              line-height: 103.68%;
              letter-spacing: 0.02em;
              color: #797979;
            }

            .small-text {
              padding-left: 5px;
              font-family: 'Noir Std';
              font-style: normal;
              font-weight: 400;
              font-size: 12px;
              line-height: 143.18%;
              letter-spacing: 0.02em;
              color: #797979;
            }
          }
        }
      }
    }
  }

  .activities-list {
    padding: 0px;

    .activity-item {
      padding-bottom: 10px;
      display: flex;
      align-items: center;
      font-family: 'Noir Std';
      font-style: normal;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: #797979;
      justify-content: space-between;
      max-width: 700px;

      .left{
        display: flex;
      }

      .icon-container {
        width: 40px;
        height: 40px;
      }
      
      .bold-text {
        padding-left: 20px;
        font-weight: 700;
        font-size: 16px;
      }

      .text {
        padding-left: 10px;
      }
    }
  }

  table {
    text-align:left;
    align-items: center;
    font-family: 'Noir Std';
    font-style: normal;
    line-height: 103.68%;
    letter-spacing: 0.02em;
    color: #797979;
    border-collapse: collapse;

    thead {
      font-weight: 400;
      font-size: 20px;

      tr {
        height: 40px;
      }
    }

    tbody {
      tr {
        height: 50px;
        border-bottom: 2px solid black;
        
        Link {
          &:hover, &:visited:{
            text-decoration: none;
            color; inherit;
          }
        }
      }
    }
  }

`