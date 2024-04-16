import React from "react";
import dynamic from "next/dynamic";
import { Card, CardBody, CardTitle } from "reactstrap";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartComponent = ({ options, series }) => {
  return (
    <Card>
      <CardTitle tag="h3" className="border-bottom p-3 mb-0">
        Lead Status and Source Summary
      </CardTitle>
      <CardBody>
        <Chart options={options} series={series} type="bar" height="379" />
      </CardBody>
    </Card>
  );
};

export default ChartComponent;