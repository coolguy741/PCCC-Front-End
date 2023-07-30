import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { MealtimeMomentTitle } from "../../../components/ContentCreation/MealtimeMomentTitle";
import { Spinner } from "../../../components/Global/Spinner";
import { useFetch } from "../../../hooks/useFetch";
import { PccServer23SharedIMultiLingualDto1PccServer23MealtimeMomentsPublicMealtimeMomentDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull } from "../../../lib/api/api";
import { useMealtimeMomentsStore } from "../../../stores/mealtimeMomentsStore";
import { useUIStore } from "../../../stores/uiStore";

export const MealtimeMomentPrintPage = () => {
  const { id } = useParams();
  const { isLoading, data } =
    useFetch<PccServer23SharedIMultiLingualDto1PccServer23MealtimeMomentsPublicMealtimeMomentDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull>(
      "appMealtimeMomentsDetail",
      {},
      undefined,
      true,
      id as string,
    );
  const { lang } = useUIStore();
  const { setDetail, ...state } = useMealtimeMomentsStore();

  useEffect(() => {
    data && setDetail(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <Style.PageContainer>
      {isLoading || !data ? (
        <Spinner />
      ) : (
        <MealtimeMomentTitle
          state={state[lang].componentState}
          isEditable={false}
        />
      )}
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    overflow: hidden;
    height: calc(100vh - 300px);
    padding: 10px 86px 30px 86px;
    margin-top: 3%;
  `,
};
