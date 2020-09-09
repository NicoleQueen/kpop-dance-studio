import { useState } from "react";
import Router from "next/router";
import React from 'react';

import Layout from "./Layout";
import Row from "./Row";
import DonutShop from "./DonutShop";
import CheckoutForm from "./CheckoutForm";
import getDonutPrice from "./get-donut-price";

const MainPage = props => {
  const [numDonuts, setNumDonuts] = useState(1);

  const addDonut = () => setNumDonuts(num => Math.min(12, num + 1));
  const remDonut = () => setNumDonuts(num => Math.max(1, num - 1));

  return (
    <Layout title="Donut Shop">
      <Row>
        <DonutShop
          onAddDonut={addDonut}
          onRemoveDonut={remDonut}
          numDonuts={numDonuts}
        />
      </Row>
      <CheckoutForm
        price={getDonutPrice(numDonuts)}
        onSuccessfulCheckout={() => Router.push("/success")}
      />
    </Layout>
  );
};

export default MainPage;