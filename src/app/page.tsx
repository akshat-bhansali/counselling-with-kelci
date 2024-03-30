import CarrPlan from "@/components/CarrPlan";
import ClassGuid from "@/components/ClassGuid";
import CrisisPlan from "@/components/CrisisPlan";
import Factors from "@/components/Factors";
import IndiGroup from "@/components/IndiGroup";
import Intro from "@/components/Intro";
import PeerInterv from "@/components/PeerInterv";
import ProgEval from "@/components/ProgEval";
import PromGradRates from "@/components/PromGradRates";
import Role from "@/components/Role";
import SchoolPlan from "@/components/SchoolPlan";

export default function Home() {
  return (
    <div className="flex flex-col bg-pink-900">
      <div id="intro"></div>
      <div className="flex flex-col justify-center items-center">
      <Intro />
      </div>
    </div>
  );
}
