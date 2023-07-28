import Cookies from "js-cookie";
import { useState } from "react";
import styled from "styled-components";
import { useAPI } from "../../../../hooks/useAPI";
import { PccServer23MealPlansOrganizedMealPlan } from "../../../../lib/api/api";
import { STORAGE_KEY_JWT } from "../../../../pages/consts";
import Button from "../../../Button";
import { DropdownSelect } from "../../../Global/DropdownSelect";
import { Typography } from "../../../Global/Typography";
import Modal from "../../../Modal";

export const GroupModal = ({
  setShowModal,
  showModal,
  groupsData,
  meals,
  servingSize,
}: {
  setShowModal: (showModal: boolean) => void;
  showModal: boolean;
  groupsData: any;
  meals: PccServer23MealPlansOrganizedMealPlan[];
  servingSize?: number;
}) => {
  const { api } = useAPI();
  const [selectedGroup, setSelectedGroup] = useState("");

  const addToCalendarHandler = async () => {
    const response = await api.appMealPlannerSaveMealPlanCreate(
      selectedGroup,
      {
        meals: meals,
        servingSize: servingSize,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      },
    );

    console.log(response);

    return;
  };

  return (
    <Modal modal={showModal} toggle={() => setShowModal(!showModal)}>
      <Style.Modal>
        <div className="modal-content">
          <Typography variant="h4" as="h4" weight="semi-bold">
            Add Plate Full Planner
          </Typography>
          <Typography variant="h5" as="h5" weight="semi-bold">
            Add to
          </Typography>
          <div className="row">
            <DropdownSelect
              height="4vh"
              onChange={setSelectedGroup}
              options={
                groupsData &&
                groupsData.items &&
                groupsData.items?.map((group: any) => {
                  console.log(group);
                  return {
                    label: group.group.name,
                    value: group.group.id,
                  };
                })
              }
            />
            <Button onClick={addToCalendarHandler}>Add</Button>
          </div>
        </div>
      </Style.Modal>
    </Modal>
  );
};

const Style = {
  Modal: styled.div`
    position: absolute;
    z-index: 999;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.5);
    /* UI Card with Drop shadow and Blur */
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.27639389038086px);
    padding: 2rem;
    width: 30vw;
    height: 25vh;

    .modal-content {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .row {
        display: flex;
        align-items: center;
        gap: 2rem;
      }
    }
  `,
};
