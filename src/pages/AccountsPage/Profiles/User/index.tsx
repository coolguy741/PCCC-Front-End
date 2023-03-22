import MockData from "../../../../lib/mockData/accounts/userProfile.json";
import styled from "styled-components";
//should be deleted after api implementation
import { useLocation } from "react-router-dom";
import { Button } from "../../../../components/Global/Button";

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
            {
            userData.role === "Standard" ? 
              <>
                <div className="avatar"/>
                <div className="user-info">
                  <p className="bold-big-text">{userData.userID}</p>
                  <p className="text">Birth year: {userData.birthYear}</p>
                  <p className="text">Province: {userData.province}</p>
                  <p className="text">Created: {userData.createdDate}</p>
                </div>
              </> 
            : userData.role === "Standard" ?
              <>
                <div className="avatar"/>
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
              </>
            :
              <>
                <div className="avatar"/>
                <div className="user-info">
                  <p className="bold-big-text">{userData.userID}</p>
                  <p className="bold-text">{userData.name}</p>
                  <p className="text">Birth year: {userData.birthYear}</p>
                  <p className="text">Province: {userData.province}</p> 
                  <p className="text">{userData.email}</p> 
                  <p className="text">Created: {userData.createdDate}</p>
                </div>
              </>
            }
            
          </div>
          <div className="badges-groups-container">
            <h3>Badges</h3>
            <div className="badges">Badges</div>
            <h3>Badges</h3>
            <div className="groups">
              {userData.groups.map(() => {
                return <></>
              })}
            </div>
          </div>
          
        </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  padding-top: 11px;

  .user-data {
    display: flex;
    padding-top: 5px;
  }
`