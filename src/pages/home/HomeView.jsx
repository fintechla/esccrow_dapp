import { useState } from "react";

import { Layout } from "../layout";
import { H1, H3 } from "../../components/text";
import { SubTitle, Reminder, List, Item, Disclaimer } from "./styles";
import { TabNavigation } from "../../components/tab-navigation";
import { TabNavigationItem } from "../../components/tab-navigation-item";
import { Row } from "../../components/row";
import { Bulb } from "../../components/icons";
import { BuyerFlow } from "../../components/buyerFlow";
import { SellerFlow } from "../../components/sellerFlow";
import { EsccrowService } from "../../services/EsccrowService";

let changeTitle = undefined;
let showSubTitle = undefined;

export function HomeView(props) {
  const [title, setTitle] = useState(
    "Easiest, safest and most decentralized way to buy and sell NFTs"
  );
  const [subTitleVisibility, setSubTitleVisibility] = useState(true);
  const [reminderVisibility, setReminderVisibility] = useState(true);
  const [disclaimer, setDisclaimer] = useState([]);
  const [percentFee, setPercentFee] = useState("");
  const esccrowService = new EsccrowService();

  changeTitle = (title, disclaimer = undefined) => {
    setTitle(title);
    setSubTitleVisibility(false);
    setReminderVisibility(false);
    setDisclaimer(disclaimer ?? []);
  };

  showSubTitle = () => {
    setSubTitleVisibility(true);
    setReminderVisibility(true);
  };

  const getPercentFee = async () => {
    const percentFee = await esccrowService.getPercentFee();
    setPercentFee(Number(percentFee).toFixed(2) + " %");
  };

  const getDisclaimerItems = () => {
    return disclaimer.map((elm) => <Item>{elm}</Item>);
  };

  getPercentFee();

  return (
    <Layout>
      <H1 align="center">{title}</H1>
      <SubTitle align="center" subTitleVisibility={subTitleVisibility}>
        The best way to send and receive NFT with Escrow Protection
      </SubTitle>
      <TabNavigation>
        <TabNavigationItem order={1} title="Buy">
          <BuyerFlow />
        </TabNavigationItem>
        <TabNavigationItem order={2} title="Sell" navigateTo="transactions" />
      </TabNavigation>
      <Reminder reminderVisibility={reminderVisibility}>
        <Row mb="12px" alignItems="baseline">
          <Bulb></Bulb>
          <H3>Reminder!</H3>
        </Row>
        <List>
          <Item>Esccrow Fee is {percentFee}</Item>
          <Item>
            Estimated max time of esccrow services is at least 90 minutes
          </Item>
        </List>
      </Reminder>
      <Disclaimer>
        <List>{getDisclaimerItems()}</List>
      </Disclaimer>
    </Layout>
  );
}

export { changeTitle, showSubTitle };
