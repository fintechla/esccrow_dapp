import { Layout } from "../layout";
import { H1, H3 } from "../../components/text";
import { SubTitle, PoweredBlock, Reminder, List, Item } from "./styles";
import { TabNavigation } from "../../components/tab-navigation";
import { TabNavigationItem } from "../../components/tab-navigation-item";
import { Row } from "../../components/row";
import { Column } from "../../components/column";
import { InputText, InputNumber } from "../../components/input";
import { Button } from "../../components/button";
import { ReactComponent as FinchechLabLogo } from "../../assets/images/fintechlab-logo.svg";
import { Select } from "../../components/select";
import { Bulb } from "../../components/icons";

export function HomeView() {
  return (
    <Layout>
      <H1 align="center">
        Easiest, safest and most decentralized way to buy and sell NFTs
      </H1>
      <SubTitle align="center">
        The best way to send and receive NFT with Escrow Protection
      </SubTitle>
      <TabNavigation>
        <TabNavigationItem order={1} title="Buy">
          <Column pt="28px" pb="28px">
            <Row>
              <InputText
                width="calc(100% - 160px)"
                placeholder="Token ID"
                label="I will buy"
              />
            </Row>
            <Row>
              <InputText
                width="calc(100% - 160px)"
                placeholder="Contract address"
                label="At"
                mt="12px"
              />
              <Select
                options={[
                  {
                    id: "1",
                    name: "Near",
                    type: "Mainnet",
                    icon: "near-white",
                  },
                ]}
              />
            </Row>
            <Row>
              <InputNumber
                width="calc(100% - 160px)"
                placeholder="0.0"
                label="For"
                mt="12px"
              />
              <Select
                options={[
                  {
                    id: "1",
                    name: "NEAR",
                    type: "Near token",
                    icon: "near-white",
                  },
                ]}
              />
            </Row>
            <Column justifyContent="center" mt="30px" alignItems="center">
              <Button size="lg" color="accent">
                Begin transaction
              </Button>
              <PoweredBlock>
                <span>Powered by</span> <FinchechLabLogo />
              </PoweredBlock>
            </Column>
          </Column>
        </TabNavigationItem>
        <TabNavigationItem order={2} title="Sell"></TabNavigationItem>
      </TabNavigation>
      <Reminder>
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
