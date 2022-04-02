import { useState, useMemo, useEffect } from "react";
import { BuyerFlowView } from "./BuyerFlowView";
import { hideMenu } from "../tab-navigation/TabNavigationView";
import { changeTitle } from "../../pages/home/HomeView";
import { showModal, hideModal } from "../Modal/ModalContainer";
import { TokenSelector } from "../token-selector";
import { NearService } from "../../services/NearService";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export function BuyerFlowContainer(props) {
  const [activeStep, setStep] = useState(1);
  const [data, setData] = useState({
    transactionId: "",
    tokenId: "",
    contractAddress: "",
    amount: 0,
    sellerWallet: "",
    maxDatePayment: "",
  });
  const nearService = new NearService();
  const query = useQuery();

  const validateTransactionStatus = async () => {
    const transactionHashes = query.get("transactionHashes");

    if (!transactionHashes) return;

    const result = await nearService.getTransactionResult(
      query.get("transactionHashes")
    );

    setData({ ...data, transactionId: result.transaction_id });
    changeTitle("Begin a transaction");
    setStep(5);
  };

  const handleSubmitStepOne = () => {
    hideMenu(true);
    changeTitle("Begin a transaction");
    setStep(2);
  };

  const handleSubmitStepTwo = async () => {
    changeTitle("Confirm transaction details");
    setStep(3);
  };

  const handleSubmitStepThree = () => {
    changeTitle("Approve payment");
    setStep(4);
  };

  const handleSubmitStepFour = async () => {
    nearService.createTransaction(data);
  };

  const handleChangeData = (patch) => {
    setData({ ...data, ...patch });
  };

  const handleClickSelectTokenBtn = async () => {
    const content = (
      <TokenSelector
        contractAddress={data.contractAddress}
        sellerWallet={data.sellerWallet}
        onSubmitTokenSelector={(tokenId) => {
          handleChangeData({ tokenId });
          hideModal();
        }}
      />
    );
    showModal(content);
  };

  const startBuyerFlow = () => {};

  useEffect(() => {
    validateTransactionStatus();
  }, []);

  return (
    <BuyerFlowView
      step={activeStep}
      data={data}
      onChangeData={handleChangeData}
      onSubmitStepOne={handleSubmitStepOne}
      onSubmitStepTwo={handleSubmitStepTwo}
      onSubmitStepThree={handleSubmitStepThree}
      onSubmitStepFour={handleSubmitStepFour}
      onClickSelectTokenBtn={handleClickSelectTokenBtn}
      startBuyerFlow={startBuyerFlow}
    />
  );
}
