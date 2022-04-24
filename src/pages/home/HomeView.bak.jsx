import { useState } from "react";

import { Layout } from "../layout";
import { H1, H3 } from "../../components/text";
import { SubTitle, Reminder, List, Item } from "./styles";
import { TabNavigation } from "../../components/tab-navigation";
import { TabNavigationItem } from "../../components/tab-navigation-item";
import { Row } from "../../components/row";
import { Bulb } from "../../components/icons";
import { BuyerFlow } from "../../components/buyerFlow";
import { SellerFlow } from "../../components/sellerFlow";

let changeTitle = undefined;
let showSubTitle = undefined;

export function HomeView(props) {
  const [title, setTitle] = useState(
    "Easiest, safest and most decentralized way to buy and sell NFTs"
  );
  const [subTitleVisibility, setSubTitleVisibility] = useState(true);
  const [reminderVisibility, setReminderVisibility] = useState(true);

  changeTitle = (title) => {
    setTitle(title);
    setSubTitleVisibility(false);
    setReminderVisibility(false);
  };

  showSubTitle = () => {
    setSubTitleVisibility(true);
    setReminderVisibility(true);
  };

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
        <TabNavigationItem order={2} title="Sell">
          <SellerFlow />
        </TabNavigationItem>
      </TabNavigation>
      <Reminder reminderVisibility={reminderVisibility}>
        <Row mb="12px" alignItems="baseline">
          <Bulb></Bulb>
          <H3>Reminder!</H3>
        </Row>
        <List>
          <Item>Esccrow Fee is 1.00 %</Item>
          <Item>Minimun amount is 1 Near. Maximun amount is 100 Near.</Item>
          <Item>
            Estimated time of esccrow services is at least 30 minutes.
          </Item>
        </List>
      </Reminder>
    </Layout>
  );
}

export { changeTitle, showSubTitle };
