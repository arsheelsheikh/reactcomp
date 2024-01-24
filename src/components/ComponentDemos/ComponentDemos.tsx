import "./ComponentDemos.css";
import "animate.css/animate.compat.css";
import "animate.css";
import { Element } from "react-scroll";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Counter from "../Counter/Counter";
import Carrousel from "../Carrousel/Carrousel";
import Accordian from "../Accordian/Accordian";
import ProgressBar from "../ProgressBar/ProgressBar";
import ToolTip from "../ToolTip/ToolTip";
import Popup from "../Popup/Popup";
import Dropdown from "../Dropdown/Dropdown";
import Tabs from "../Tabs/Tabs";
import RadioButtons from "../RadioButtons/RadioButtons";
import ToggleSwitch from "../Toggle Switch/Toggle Switch";
import InputValidation from "../InputValidation/InputValidation";

export default function ComponentDemos() {
  return (
    <div className="ComponentDemos">
      <Element name="section1">
        <AnimationOnScroll animateIn="fadeIn" offset={100} animateOnce={true}>
          <Counter />
        </AnimationOnScroll>
      </Element>
      <Element name="section2">
        <AnimationOnScroll animateIn="fadeIn" offset={100} animateOnce={true}>
          <ProgressBar />
        </AnimationOnScroll>
      </Element>
      <Element name="section3">
        <AnimationOnScroll animateIn="fadeIn" offset={100} animateOnce={true}>
          <Carrousel />
        </AnimationOnScroll>
      </Element>
      <Element name="section4">
        <AnimationOnScroll animateIn="fadeIn" offset={100} animateOnce={true}>
          <Accordian />
        </AnimationOnScroll>
      </Element>
      <Element name="section5">
        <AnimationOnScroll animateIn="fadeIn" offset={100} animateOnce={true}>
          <ToolTip />
        </AnimationOnScroll>
      </Element>
      <Element name="section6">
        <AnimationOnScroll animateIn="fadeIn" offset={100} animateOnce={true}>
          <Popup />
        </AnimationOnScroll>
      </Element>
      <Element name="section7">
        <AnimationOnScroll animateIn="fadeIn" offset={100} animateOnce={true}>
          <Dropdown />
        </AnimationOnScroll>
      </Element>
      <Element name="section8">
        <AnimationOnScroll animateIn="fadeIn" offset={100} animateOnce={true}>
          <Tabs />
        </AnimationOnScroll>
      </Element>
      <Element name="section9">
        <AnimationOnScroll animateIn="fadeIn" offset={100} animateOnce={true}>
          <RadioButtons />
        </AnimationOnScroll>
      </Element>
      <Element name="section10">
        <AnimationOnScroll animateIn="fadeIn" offset={100} animateOnce={true}>
          <ToggleSwitch />
        </AnimationOnScroll>
      </Element>
      <Element name="section11">
        <AnimationOnScroll animateIn="fadeIn" offset={100} animateOnce={true}>
          <InputValidation />
        </AnimationOnScroll>
      </Element>
    </div>
  );
}
