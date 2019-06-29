import React from "react";

import DoneG from "./DoneG";
import { useStyles } from "./styles";

interface IMainClockIco {
  donePercent?: number;
}

const MainClockIco: React.FC<IMainClockIco> = ({ donePercent = 12 }) => {
  const classes = useStyles();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" height="500" viewBox="0 0 500 500">
      <defs>
        <linearGradient id="a" x1="185.98" y1="239.93" x2="313.39" y2="239.93" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d1bf73" />
          <stop offset="0.55" stopColor="#f9edad" />
          <stop offset="1" stopColor="#bfa759" />
        </linearGradient>
        <linearGradient id="b" x1="198.98" y1="77.29" x2="245.87" y2="77.29" xlinkHref="#a" />
        <linearGradient id="c" x1="147.54" y1="89.67" x2="204.79" y2="89.67" xlinkHref="#a" />
        <linearGradient id="d" x1="107.11" y1="114.14" x2="163.27" y2="114.14" xlinkHref="#a" />
        <linearGradient id="e" x1="205.07" y1="239.93" x2="294.3" y2="239.93" xlinkHref="#a" />
        <linearGradient id="f" x1="286.7" y1="339.93" x2="424.29" y2="339.93" xlinkHref="#a" />
        <linearGradient id="g" x1="79.83" y1="250.63" x2="140.84" y2="250.63" xlinkHref="#a" />
        <linearGradient id="h" x1="377.04" y1="80.05" x2="445.77" y2="80.05" xlinkHref="#a" />
        <linearGradient id="i" x1="385.32" y1="80.05" x2="437.49" y2="80.05" xlinkHref="#a" />
        <linearGradient id="j" x1="398.36" y1="53.96" x2="398.36" y2="80.05" xlinkHref="#a" />
        <linearGradient id="k" x1="411.4" y1="66.32" x2="441.2" y2="66.32" xlinkHref="#a" />
        <linearGradient
          id="l" x1="144.57" y1="228.93" x2="391.17" y2="228.93"
          gradientTransform="translate(-89.03 138.61) rotate(-25.8)" xlinkHref="#a"
        />
        <linearGradient id="m" x1="239.23" y1="239.93" x2="260.14" y2="239.93" xlinkHref="#a" />
        <linearGradient id="n" x1="403.91" y1="81.35" x2="416.82" y2="81.35" xlinkHref="#a" />
        <linearGradient id="o" x1="170.37" y1="394.83" x2="237.43" y2="394.83" xlinkHref="#a" />
        <linearGradient id="p" x1="58.04" y1="403.83" x2="107.1" y2="403.83" xlinkHref="#a" />
        <linearGradient id="q" x1="63.95" y1="403.83" x2="100.67" y2="403.83" xlinkHref="#a" />
        <linearGradient id="r" x1="72.5" y1="403.49" x2="78.87" y2="403.49" xlinkHref="#a" />
        <linearGradient id="s" x1="82.4" y1="403.48" x2="91.29" y2="403.48" xlinkHref="#a" />
        <linearGradient id="t" x1="302.13" y1="60.33" x2="379.98" y2="60.33" xlinkHref="#a" />
        <linearGradient id="u" x1="106.9" y1="392.63" x2="161.67" y2="392.63" xlinkHref="#a" />
        <linearGradient id="v" x1="301.4" y1="48.5" x2="304.52" y2="48.5" xlinkHref="#a" />
        <linearGradient id="w" x1="305.52" y1="48.5" x2="308.68" y2="48.5" xlinkHref="#a" />
        <linearGradient id="x" x1="309.1" y1="48.53" x2="312.44" y2="48.53" xlinkHref="#a" />
        <linearGradient id="y" x1="313.44" y1="48.5" x2="316.88" y2="48.5" xlinkHref="#a" />
        <linearGradient id="z" x1="317.88" y1="48.5" x2="321.03" y2="48.5" xlinkHref="#a" />
        <linearGradient id="aa" x1="321.65" y1="48.5" x2="324.82" y2="48.5" xlinkHref="#a" />
        <linearGradient id="ab" x1="325.78" y1="48.5" x2="328.72" y2="48.5" xlinkHref="#a" />
        <linearGradient id="ac" x1="329.14" y1="48.51" x2="332.14" y2="48.51" xlinkHref="#a" />
        <linearGradient id="ad" x1="335.13" y1="48.5" x2="338.29" y2="48.5" xlinkHref="#a" />
        <linearGradient id="ae" x1="340.93" y1="48.5" x2="343.87" y2="48.5" xlinkHref="#a" />
        <linearGradient id="af" x1="344.35" y1="48.5" x2="347.8" y2="48.5" xlinkHref="#a" />
        <linearGradient id="ag" x1="348.79" y1="48.51" x2="352.72" y2="48.51" xlinkHref="#a" />
        <linearGradient id="ah" x1="353.65" y1="48.51" x2="356.66" y2="48.51" xlinkHref="#a" />
        <linearGradient id="ai" x1="357.83" y1="48.5" x2="361.06" y2="48.5" xlinkHref="#a" />
        <linearGradient id="aj" x1="361.8" y1="49.15" x2="365.52" y2="49.15" xlinkHref="#a" />
        <linearGradient id="ak" x1="366.06" y1="48.5" x2="369.23" y2="48.5" xlinkHref="#a" />
        <linearGradient id="al" x1="122.14" y1="419.98" x2="176.91" y2="419.98" xlinkHref="#a" />
        <linearGradient id="am" x1="123.83" y1="420.31" x2="127.43" y2="420.31" xlinkHref="#a" />
        <linearGradient id="an" x1="128.38" y1="420.31" x2="133.16" y2="420.31" xlinkHref="#a" />
        <linearGradient id="ao" x1="134.54" y1="420.31" x2="138.13" y2="420.31" xlinkHref="#a" />
        <linearGradient id="ap" x1="139.27" y1="420.31" x2="143.2" y2="420.31" xlinkHref="#a" />
        <linearGradient id="aq" x1="143.71" y1="420.34" x2="147.53" y2="420.34" xlinkHref="#a" />
        <linearGradient id="ar" x1="148.9" y1="420.31" x2="152.6" y2="420.31" xlinkHref="#a" />
        <linearGradient id="as" x1="153.74" y1="420.31" x2="157.36" y2="420.31" xlinkHref="#a" />
        <linearGradient id="at" x1="158.46" y1="420.31" x2="162.16" y2="420.31" xlinkHref="#a" />
        <linearGradient id="au" x1="163.29" y1="420.31" x2="167.23" y2="420.31" xlinkHref="#a" />
        <linearGradient id="av" x1="121.87" y1="380.24" x2="125.46" y2="380.24" xlinkHref="#a" />
        <linearGradient id="aw" x1="126.84" y1="381.17" x2="130.61" y2="381.17" xlinkHref="#a" />
        <linearGradient id="ax" x1="131.5" y1="380.24" x2="135.43" y2="380.24" xlinkHref="#a" />
        <linearGradient id="ay" x1="136.33" y1="380.24" x2="139.95" y2="380.24" xlinkHref="#a" />
        <linearGradient id="az" x1="141.06" y1="380.24" x2="144.42" y2="380.24" xlinkHref="#a" />
        <linearGradient id="ba" x1="144.68" y1="380.24" x2="148.1" y2="380.24" xlinkHref="#a" />
        <linearGradient id="bb" x1="148.71" y1="380.24" x2="152.64" y2="380.24" xlinkHref="#a" />
        <linearGradient id="bc" x1="153.78" y1="380.24" x2="157.39" y2="380.24" xlinkHref="#a" />
        <linearGradient id="be" x1="185.27" y1="396.46" x2="195.47" y2="396.46" xlinkHref="#a" />
        <linearGradient id="bg" x1="208.37" y1="396.54" x2="225.46" y2="396.54" xlinkHref="#a" />
        <linearGradient id="bh" x1="379.64" y1="302.31" x2="389.22" y2="302.31" xlinkHref="#a" />
        <linearGradient id="bi" x1="383.97" y1="292.1" x2="393.41" y2="292.1" xlinkHref="#a" />
        <linearGradient id="bj" x1="362.38" y1="330.65" x2="372.1" y2="330.65" xlinkHref="#a" />
        <linearGradient id="bk" x1="387.56" y1="281.58" x2="396.79" y2="281.58" xlinkHref="#a" />
        <linearGradient id="bl" x1="368.81" y1="321.64" x2="378.54" y2="321.64" xlinkHref="#a" />
        <linearGradient id="bm" x1="374.57" y1="312.17" x2="384.26" y2="312.17" xlinkHref="#a" />
        <linearGradient id="bn" x1="393.63" y1="248.85" x2="401.94" y2="248.85" xlinkHref="#a" />
        <linearGradient id="bo" x1="390.38" y1="270.82" x2="399.35" y2="270.82" xlinkHref="#a" />
        <linearGradient id="bp" x1="394.06" y1="240.25" x2="402.06" y2="240.25" xlinkHref="#a" />
        <linearGradient id="bq" x1="355.32" y1="339.16" x2="364.98" y2="339.16" xlinkHref="#a" />
        <linearGradient id="br" x1="392.41" y1="259.89" x2="401.07" y2="259.89" xlinkHref="#a" />
        <linearGradient id="bs" x1="281.49" y1="384.16" x2="288.78" y2="384.16" xlinkHref="#a" />
        <linearGradient id="bt" x1="347.67" y1="347.13" x2="357.22" y2="347.13" xlinkHref="#a" />
        <linearGradient id="bu" x1="270.88" y1="386.39" x2="277.66" y2="386.39" xlinkHref="#a" />
        <linearGradient id="bv" x1="302.14" y1="377.28" x2="310.33" y2="377.28" xlinkHref="#a" />
        <linearGradient id="bw" x1="260.15" y1="387.79" x2="266.39" y2="387.79" xlinkHref="#a" />
        <linearGradient id="bx" x1="249.67" y1="388.37" x2="255.03" y2="388.37" xlinkHref="#a" />
        <linearGradient id="by" x1="291.92" y1="381.13" x2="299.69" y2="381.13" xlinkHref="#a" />
        <linearGradient id="bz" x1="312.06" y1="372.67" x2="320.62" y2="372.67" xlinkHref="#a" />
        <linearGradient id="ca" x1="330.78" y1="361.25" x2="339.93" y2="361.25" xlinkHref="#a" />
        <linearGradient id="cb" x1="339.48" y1="354.51" x2="348.85" y2="354.51" xlinkHref="#a" />
        <linearGradient id="cc" x1="321.63" y1="367.31" x2="330.51" y2="367.31" xlinkHref="#a" />
        <linearGradient id="cd" x1="248.57" y1="359.89" x2="250.62" y2="359.89" xlinkHref="#a" />
        <linearGradient id="ce" x1="248.57" y1="113.8" x2="250.73" y2="113.8" xlinkHref="#a" />
        <linearGradient id="cf" x1="309.96" y1="352.45" x2="322.79" y2="352.45" xlinkHref="#a" />
        <linearGradient id="cg" x1="176.52" y1="121.15" x2="189.2" y2="121.15" xlinkHref="#a" />
        <linearGradient id="ch" x1="355.23" y1="303.61" x2="375.35" y2="303.61" xlinkHref="#a" />
        <linearGradient id="ci" x1="124" y1="170.07" x2="144.05" y2="170.07" xlinkHref="#a" />
        <linearGradient id="cj" x1="351.38" y1="236.82" x2="394.2" y2="236.82" xlinkHref="#a" />
        <linearGradient id="ck" x1="105.17" y1="236.82" x2="148.03" y2="236.82" xlinkHref="#a" />
        <linearGradient id="cl" x1="355.23" y1="170.07" x2="375.35" y2="170.07" xlinkHref="#a" />
        <linearGradient id="cm" x1="124" y1="303.61" x2="144.05" y2="303.61" xlinkHref="#a" />
        <linearGradient id="cn" x1="309.96" y1="121.15" x2="322.79" y2="121.15" xlinkHref="#a" />
        <linearGradient id="co" x1="176.52" y1="352.45" x2="189.2" y2="352.45" xlinkHref="#a" />
        <linearGradient id="ct" x1="243.89" y1="240.04" x2="255.84" y2="240.04" xlinkHref="#a" />
        <linearGradient id="cu" x1="161.02" y1="258.38" x2="272.26" y2="258.38" xlinkHref="#a" />
        <linearGradient id="cv" x1="195.02" y1="211.71" x2="266.4" y2="211.71" xlinkHref="#a" />
        <linearGradient id="cw" x1="236.41" y1="151.19" x2="245.88" y2="151.19" xlinkHref="#a" />
        <linearGradient id="cx" x1="247.38" y1="151.19" x2="261.8" y2="151.19" xlinkHref="#a" />
        <linearGradient id="cy" x1="336.81" y1="237.94" x2="351.04" y2="237.94" xlinkHref="#a" />
        <linearGradient id="cz" x1="243.1" y1="324.22" x2="257.36" y2="324.22" xlinkHref="#a" />
        <linearGradient id="da" x1="149.33" y1="235.39" x2="163.72" y2="235.39" xlinkHref="#a" />
      </defs>
      <title>Altiore</title>
      <g>
        <path
          className={classes.a}
          d="M249.68,303.64a63.71,63.71,0,1,1,63.71-63.71A63.78,63.78,0,0,1,249.68,303.64Zm0-126.24a62.53,62.53,0,1,0,62.54,62.53A62.6,62.6,0,0,0,249.68,177.4Z"
        />
        <g>
          <path
            className={classes.b} d="M199,62.29l9.26,36.11a157.24,157.24,0,0,1,37.63-4.94V56.18A194.36,194.36,0,0,0,199,62.29Z"
          />
          <path
            className={classes.c}
            d="M147.54,83.87l18.76,32.2a157.31,157.31,0,0,1,38.49-16.69l-9.26-36.11A194.16,194.16,0,0,0,147.54,83.87Z"
          />
          <path
            className={classes.d}
            d="M107.11,116.16l26.35,26.34A159,159,0,0,1,163.27,118L144.49,85.77A196.11,196.11,0,0,0,107.11,116.16Z"
          />
        </g>
        <path
          className={classes.e}
          d="M292.52,252.39c.05-.16.09-.32.14-.48.13-.49.26-1,.38-1.48,0-.16.09-.31.13-.46h0a44.6,44.6,0,0,0-43.46-54.66l-.59,0v0a44.08,44.08,0,0,0-44,44h0c0,.2,0,.39,0,.59a44.61,44.61,0,0,0,86.81,14.46l0-.07C292.13,253.68,292.33,253,292.52,252.39Zm-86.17-12.46c0-.2,0-.39,0-.59h4.22a38.55,38.55,0,0,1,38.51-38.51v-4.22l.59,0a43.3,43.3,0,0,1,42.21,53.08l-4.2-1a39.19,39.19,0,0,1-47,29.16l-1,4.23A43.4,43.4,0,0,1,206.35,239.93Z"
        />
        <path
          className={classes.f}
          d="M287,329.38l37.78,78.17A194.33,194.33,0,0,0,424,300.89L341.89,272.3A107.76,107.76,0,0,1,287,329.38Z"
        />
        <path
          className={classes.g}
          d="M113.65,144.34c.39-.51.82-1,1.22-1.5l-1.58-1.22c-.4.51-.82,1-1.22,1.5C60,210.41,72.33,307.53,139.62,359.63l1.22-1.57C74.42,306.63,62.22,210.76,113.65,144.34Z"
        />
        <g>
          <path
            className={classes.h}
            d="M411.4,114.41a34.37,34.37,0,1,1,34.37-34.36A34.41,34.41,0,0,1,411.4,114.41Zm0-66A31.64,31.64,0,1,0,443,80.05,31.67,31.67,0,0,0,411.4,48.41Z"
          />
          <path
            className={classes.i}
            d="M411.4,106.13a26.09,26.09,0,1,1,26.09-26.08A26.11,26.11,0,0,1,411.4,106.13Zm0-45.74a19.66,19.66,0,1,0,19.66,19.66A19.67,19.67,0,0,0,411.4,60.39Z"
          />
          <path className={classes.j} d="M411.4,60.39V54a26.11,26.11,0,0,0-26.08,26.09h6.43A19.67,19.67,0,0,1,411.4,60.39Z" />
          <path
            className={classes.k}
            d="M439.89,80.47c0,.51-.05,1-.08,1.5h1.32c0-.5.07-1,.07-1.5a29.83,29.83,0,0,0-29.8-29.79V52A28.52,28.52,0,0,1,439.89,80.47Z"
          />
        </g>
        <path
          className={classes.l}
          d="M206.44,113.57l5.23,15a117.11,117.11,0,0,0-13.76,5.6,115.68,115.68,0,0,0,91.66,212.2l-.41-.84a114.75,114.75,0,1,1,61.91-158.12,112.66,112.66,0,0,1,4.52,11.08l.24-.08a114.42,114.42,0,0,1,1.41,75.61l.88.31a115.4,115.4,0,0,0-1.41-76.22l14.17-4.93C347.5,125.92,273.73,90.19,206.44,113.57Zm98.67,24.1.19.11Z"
        />
        <path className={classes.m} d="M259.89,239.93a10.21,10.21,0,1,1-10.2-10.2A10.2,10.2,0,0,1,259.89,239.93Z" />
        <path
          className={classes.n}
          d="M416.82,86.36h-2.06v3.56h-3.54V86.36h-7.31V83.85l7.51-11.07h3.34V83.55h2.06Zm-5.6-2.81v-2.9c0-.49,0-1.19.06-2.11s.07-1.46.1-1.61h-.1a13.91,13.91,0,0,1-1,1.88l-3.14,4.74Z"
        />
        <path
          className={classes.o}
          d="M203.9,428.36a33.53,33.53,0,1,1,33.53-33.53A33.57,33.57,0,0,1,203.9,428.36Zm0-64.39a30.86,30.86,0,1,0,30.86,30.86A30.89,30.89,0,0,0,203.9,364Z"
        />
        <g>
          <path
            className={classes.p}
            d="M82.57,428.36a24.53,24.53,0,1,1,24.53-24.53A24.56,24.56,0,0,1,82.57,428.36Zm0-47.11a22.58,22.58,0,1,0,22.58,22.58A22.61,22.61,0,0,0,82.57,381.25Z"
          />
          <path
            className={classes.q}
            d="M78.21,385.72a18.62,18.62,0,0,0,8.73,36.21l-1.08-4.46a14,14,0,1,1,10.35-16.93l4.46-1.08A18.64,18.64,0,0,0,78.21,385.72Zm2.3,2.25a16.9,16.9,0,0,0-13.67,19.58l-.77.13A17.69,17.69,0,0,1,80.38,387.2c.29-.05.58-.08.88-.11l.14.77C81.1,387.89,80.81,387.92,80.51,388Z"
          />
          <g>
            <path
              className={classes.r}
              d="M78.87,409.91H76.16v-7.44l0-1.22,0-1.33c-.45.45-.77.74-.94.88L73.81,402l-1.31-1.63,4.14-3.3h2.23Z"
            />
            <path
              className={classes.s}
              d="M90.91,399.93a3,3,0,0,1-.72,2.05,3.81,3.81,0,0,1-2,1.16v.06a4,4,0,0,1,2.35.94,2.63,2.63,0,0,1,.8,2A3.43,3.43,0,0,1,90,409.05a6.2,6.2,0,0,1-3.84,1,9.37,9.37,0,0,1-3.71-.7v-2.31a8.59,8.59,0,0,0,1.64.62,7.31,7.31,0,0,0,1.78.23,3.47,3.47,0,0,0,2-.45,1.69,1.69,0,0,0,.64-1.47,1.33,1.33,0,0,0-.73-1.29,5.56,5.56,0,0,0-2.36-.37h-1v-2.09h1a4.63,4.63,0,0,0,2.18-.39,1.4,1.4,0,0,0,.69-1.34c0-1-.61-1.46-1.83-1.46a4.13,4.13,0,0,0-1.28.21,6.6,6.6,0,0,0-1.46.73l-1.25-1.87a7,7,0,0,1,4.19-1.26,5.48,5.48,0,0,1,3.15.8A2.59,2.59,0,0,1,90.91,399.93Z"
            />
          </g>
        </g>
        <polyline className={classes.t} points="379.77 67.05 370.45 53.73 302.13 53.73" />
        <polyline className={classes.u} points="107.1 399.34 116.42 386.02 161.67 386.02" />
        <g>
          <path
            className={classes.v}
            d="M302,46.63V48c0,.43.25.65.75.65a2,2,0,0,0,.59-.09,3.57,3.57,0,0,0,.64-.33v-1.6h.57v3.75H304v-1.7a3.05,3.05,0,0,1-.66.35,2.5,2.5,0,0,1-.69.1,1.22,1.22,0,0,1-.88-.3,1,1,0,0,1-.32-.79V46.63Z"
          />
          <path
            className={classes.w}
            d="M307.31,50.44a1.73,1.73,0,0,1-1.31-.5,2,2,0,0,1-.48-1.41,2.23,2.23,0,0,1,.44-1.44,1.51,1.51,0,0,1,1.2-.53,1.39,1.39,0,0,1,1.11.46,1.76,1.76,0,0,1,.41,1.23v.35H306.1a1.56,1.56,0,0,0,.34,1,1.18,1.18,0,0,0,.89.34,3,3,0,0,0,1.19-.26v.51a3.09,3.09,0,0,1-.56.19A4,4,0,0,1,307.31,50.44Zm-.16-3.4a.91.91,0,0,0-.72.29,1.35,1.35,0,0,0-.31.81h2a1.25,1.25,0,0,0-.24-.82A.85.85,0,0,0,307.15,47Z"
          />
          <path
            className={classes.x}
            d="M312.44,50.38h-.57V47.11h-1.12a14.83,14.83,0,0,1-.26,1.94,2.62,2.62,0,0,1-.43,1,.8.8,0,0,1-.66.33.87.87,0,0,1-.3,0V50a.5.5,0,0,0,.18,0c.26,0,.47-.27.62-.83a13.22,13.22,0,0,0,.35-2.52h2.19Z"
          />
          <path
            className={classes.y}
            d="M316.88,48.5a2,2,0,0,1-.46,1.43,1.64,1.64,0,0,1-1.28.51,1.76,1.76,0,0,1-.89-.23,1.59,1.59,0,0,1-.6-.68,2.37,2.37,0,0,1-.21-1,2,2,0,0,1,.46-1.43,1.8,1.8,0,0,1,2.52,0A2.06,2.06,0,0,1,316.88,48.5Zm-2.85,0a1.77,1.77,0,0,0,.28,1.09,1,1,0,0,0,.85.38,1,1,0,0,0,.84-.38,2.19,2.19,0,0,0,0-2.18,1,1,0,0,0-.85-.37,1,1,0,0,0-.84.37A1.75,1.75,0,0,0,314,48.5Z"
          />
          <path
            className={classes.z}
            d="M320.91,47.57a.69.69,0,0,1-.21.55,1.08,1.08,0,0,1-.59.26v0a1.2,1.2,0,0,1,.7.28.77.77,0,0,1,.22.59.94.94,0,0,1-.38.81,1.87,1.87,0,0,1-1.12.29h-1.65V46.63h1.64C320.45,46.63,320.91,46.94,320.91,47.57Zm-.55,0a.39.39,0,0,0-.21-.38,1.32,1.32,0,0,0-.64-.12h-1.07v1.06h1a1.6,1.6,0,0,0,.74-.13A.46.46,0,0,0,320.36,47.62Zm.11,1.63a.5.5,0,0,0-.23-.45,1.64,1.64,0,0,0-.77-.13h-1V49.9h1C320.14,49.9,320.47,49.68,320.47,49.25Z"
          />
          <path
            className={classes.aa}
            d="M323.44,50.44a1.75,1.75,0,0,1-1.31-.5,2,2,0,0,1-.48-1.41,2.23,2.23,0,0,1,.44-1.44,1.51,1.51,0,0,1,1.2-.53,1.43,1.43,0,0,1,1.12.46,1.81,1.81,0,0,1,.41,1.23v.35h-2.58a1.51,1.51,0,0,0,.33,1,1.18,1.18,0,0,0,.89.34,3.05,3.05,0,0,0,1.2-.26v.51a2.93,2.93,0,0,1-.57.19A4,4,0,0,1,323.44,50.44Zm-.15-3.4a.91.91,0,0,0-.72.29,1.35,1.35,0,0,0-.32.81h2a1.25,1.25,0,0,0-.24-.82A.84.84,0,0,0,323.29,47Z"
          />
          <path className={classes.ab} d="M328,46.63h.62L327,48.44l1.75,1.94h-.66l-1.71-1.9v1.9h-.57V46.63h.57v1.82Z" />
          <path
            className={classes.ac}
            d="M331.72,50.38l-.11-.54h0a1.5,1.5,0,0,1-.56.48,1.71,1.71,0,0,1-.69.12,1.29,1.29,0,0,1-.88-.28,1.07,1.07,0,0,1-.31-.82c0-.76.6-1.15,1.81-1.19l.64,0V47.9a.92.92,0,0,0-.19-.65.79.79,0,0,0-.61-.21,2.5,2.5,0,0,0-1.06.28l-.17-.43a2.77,2.77,0,0,1,.61-.24,2.91,2.91,0,0,1,.66-.08,1.48,1.48,0,0,1,1,.29,1.28,1.28,0,0,1,.32,1v2.56Zm-1.28-.4a1.13,1.13,0,0,0,.83-.3,1.06,1.06,0,0,0,.3-.81v-.34l-.56,0a2,2,0,0,0-1,.21.62.62,0,0,0-.3.58.55.55,0,0,0,.19.46A.76.76,0,0,0,330.44,50Z"
          />
          <path
            className={classes.ad}
            d="M338.17,47.57a.69.69,0,0,1-.21.55,1.11,1.11,0,0,1-.59.26v0a1.23,1.23,0,0,1,.7.28.81.81,0,0,1,.22.59.94.94,0,0,1-.39.81,1.85,1.85,0,0,1-1.12.29h-1.65V46.63h1.64C337.7,46.63,338.17,46.94,338.17,47.57Zm-.56,0a.39.39,0,0,0-.21-.38,1.3,1.3,0,0,0-.63-.12H335.7v1.06h1a1.63,1.63,0,0,0,.74-.13A.47.47,0,0,0,337.61,47.62Zm.11,1.63a.5.5,0,0,0-.23-.45,1.64,1.64,0,0,0-.77-.13h-1V49.9h1C337.39,49.9,337.72,49.68,337.72,49.25Z"
          />
          <path className={classes.ae} d="M343.11,46.63h.63l-1.62,1.81,1.75,1.94h-.66l-1.71-1.9v1.9h-.57V46.63h.57v1.82Z" />
          <path
            className={classes.af}
            d="M347.8,48.5a2.05,2.05,0,0,1-.47,1.43,1.61,1.61,0,0,1-1.27.51,1.73,1.73,0,0,1-.89-.23,1.59,1.59,0,0,1-.6-.68,2.23,2.23,0,0,1-.22-1,2.1,2.1,0,0,1,.46-1.43,1.63,1.63,0,0,1,1.27-.51,1.57,1.57,0,0,1,1.25.52A2.06,2.06,0,0,1,347.8,48.5Zm-2.86,0a1.77,1.77,0,0,0,.29,1.09,1,1,0,0,0,.84.38,1,1,0,0,0,.85-.38,2.19,2.19,0,0,0,0-2.18,1,1,0,0,0-.85-.37,1,1,0,0,0-.84.37A1.75,1.75,0,0,0,344.94,48.5Z"
          />
          <path
            className={classes.ag}
            d="M350.74,49.83l.1-.32.15-.4,1-2.47h.72v3.74h-.5v-3.1l-.07.2L352,48l-1,2.38h-.48l-1-2.38a6.38,6.38,0,0,1-.25-.72v3.1h-.51V46.64h.69l1,2.37C350.56,49.26,350.65,49.53,350.74,49.83Z"
          />
          <path
            className={classes.ah}
            d="M356.24,50.38l-.11-.54h0a1.58,1.58,0,0,1-.56.48,1.79,1.79,0,0,1-.7.12,1.25,1.25,0,0,1-.87-.28,1.08,1.08,0,0,1-.32-.82c0-.76.61-1.15,1.82-1.19l.63,0V47.9a1,1,0,0,0-.18-.65.79.79,0,0,0-.61-.21,2.47,2.47,0,0,0-1.06.28l-.17-.43a2.69,2.69,0,0,1,.6-.24,3,3,0,0,1,.66-.08,1.49,1.49,0,0,1,1,.29,1.28,1.28,0,0,1,.32,1v2.56ZM355,50a1.13,1.13,0,0,0,.83-.3,1.06,1.06,0,0,0,.3-.81v-.34l-.57,0a1.91,1.91,0,0,0-1,.21.62.62,0,0,0-.3.58.55.55,0,0,0,.19.46A.74.74,0,0,0,355,50Z"
          />
          <path className={classes.ai} d="M358.4,46.63V48.2h2.09V46.63h.57v3.75h-.57V48.69H358.4v1.69h-.57V46.63Z" />
          <path
            className={classes.aj}
            d="M365.52,51.67H365V50.38h-2.62v1.29h-.55V49.89h.3a5.08,5.08,0,0,0,.71-1.46,5.85,5.85,0,0,0,.27-1.8H365v3.26h.54Zm-1.09-1.78V47.08h-.84a6.06,6.06,0,0,1-.29,1.53,4.13,4.13,0,0,1-.62,1.28Z"
          />
          <path
            className={classes.ak}
            d="M367.85,50.44a1.75,1.75,0,0,1-1.31-.5,2,2,0,0,1-.48-1.41,2.23,2.23,0,0,1,.44-1.44,1.51,1.51,0,0,1,1.2-.53,1.43,1.43,0,0,1,1.12.46,1.81,1.81,0,0,1,.41,1.23v.35h-2.58a1.51,1.51,0,0,0,.33,1,1.18,1.18,0,0,0,.89.34,3.05,3.05,0,0,0,1.2-.26v.51a2.93,2.93,0,0,1-.57.19A4,4,0,0,1,367.85,50.44ZM367.7,47a.89.89,0,0,0-.72.29,1.35,1.35,0,0,0-.32.81h2a1.25,1.25,0,0,0-.24-.82A.84.84,0,0,0,367.7,47Z"
          />
        </g>
        <g>
          <polyline className={classes.al} points="176.71 413.27 167.39 426.58 122.14 426.58" />
          <g>
            <path
              className={classes.am}
              d="M127.3,419.25a.81.81,0,0,1-.24.63,1.38,1.38,0,0,1-.68.29v0a1.35,1.35,0,0,1,.8.32.89.89,0,0,1,.25.68,1.09,1.09,0,0,1-.43.92,2.23,2.23,0,0,1-1.29.32h-1.88v-4.28h1.87C126.77,418.17,127.3,418.53,127.3,419.25Zm-.63.06a.48.48,0,0,0-.25-.45,1.65,1.65,0,0,0-.72-.13h-1.23v1.21h1.1a1.76,1.76,0,0,0,.85-.15A.53.53,0,0,0,126.67,419.31Zm.12,1.85a.53.53,0,0,0-.27-.5,1.69,1.69,0,0,0-.87-.16h-1.18v1.41h1.2C126.41,421.91,126.79,421.66,126.79,421.16Z"
            />
            <path
              className={classes.an}
              d="M129,419.94h1.17a2,2,0,0,1,1.21.3,1.1,1.1,0,0,1,.39.91,1.15,1.15,0,0,1-.41,1,2,2,0,0,1-1.23.33h-1.77v-4.28H129Zm0,.56v1.41h1.1c.69,0,1-.24,1-.72a.62.62,0,0,0-.23-.53,1.51,1.51,0,0,0-.82-.16Zm4.14,1.95h-.65v-4.28h.65Z"
            />
            <path className={classes.ao} d="M135.18,422.45h-.64v-4.28h3.59v4.28h-.66v-3.72h-2.29Z" />
            <path
              className={classes.ap}
              d="M143.2,420.31a2.35,2.35,0,0,1-.53,1.63,1.85,1.85,0,0,1-1.45.59,1.89,1.89,0,0,1-1-.27,1.78,1.78,0,0,1-.69-.77,2.73,2.73,0,0,1-.24-1.18,2.35,2.35,0,0,1,.52-1.63,1.85,1.85,0,0,1,1.45-.59,1.81,1.81,0,0,1,1.43.6A2.38,2.38,0,0,1,143.2,420.31Zm-3.26,0a2,2,0,0,0,.33,1.25,1.3,1.3,0,0,0,1.93,0,2,2,0,0,0,.33-1.25,2,2,0,0,0-.33-1.24,1.18,1.18,0,0,0-1-.43,1.15,1.15,0,0,0-1,.42A2.07,2.07,0,0,0,139.94,420.31Z"
            />
            <path
              className={classes.aq}
              d="M147.53,422.45h-.66v-3.72h-1.28a14.62,14.62,0,0,1-.3,2.2,3,3,0,0,1-.48,1.2.93.93,0,0,1-.76.38,1,1,0,0,1-.34-.05V422a.62.62,0,0,0,.2,0c.3,0,.54-.31.71-.95a15.27,15.27,0,0,0,.4-2.88h2.51Z"
            />
            <path className={classes.ar} d="M149.55,418.17V420H152v-1.79h.65v4.28H152v-1.93h-2.4v1.93h-.65v-4.28Z" />
            <path
              className={classes.as}
              d="M155.78,422.53a2,2,0,0,1-1.5-.58,2.25,2.25,0,0,1-.54-1.6,2.5,2.5,0,0,1,.51-1.65,1.68,1.68,0,0,1,1.36-.61,1.63,1.63,0,0,1,1.28.53,2,2,0,0,1,.47,1.4v.41h-3a1.68,1.68,0,0,0,.38,1.14,1.32,1.32,0,0,0,1,.39,3.3,3.3,0,0,0,1.36-.29v.58a3.84,3.84,0,0,1-.65.22A3.88,3.88,0,0,1,155.78,422.53Zm-.17-3.89a1.08,1.08,0,0,0-.83.33,1.63,1.63,0,0,0-.36.93h2.24a1.44,1.44,0,0,0-.27-.94A.94.94,0,0,0,155.61,418.64Z"
            />
            <path className={classes.at} d="M159.11,418.17V420h2.4v-1.79h.65v4.28h-.65v-1.93h-2.4v1.93h-.65v-4.28Z" />
            <path
              className={classes.au}
              d="M167.23,420.31a2.35,2.35,0,0,1-.53,1.63,1.87,1.87,0,0,1-1.46.59,1.94,1.94,0,0,1-1-.27,1.82,1.82,0,0,1-.68-.77,2.73,2.73,0,0,1-.25-1.18,2.35,2.35,0,0,1,.53-1.63,1.85,1.85,0,0,1,1.45-.59,1.81,1.81,0,0,1,1.43.6A2.38,2.38,0,0,1,167.23,420.31Zm-3.26,0a2.12,2.12,0,0,0,.32,1.25,1.16,1.16,0,0,0,1,.43,1.17,1.17,0,0,0,1-.43,2,2,0,0,0,.33-1.25,2,2,0,0,0-.33-1.24,1.18,1.18,0,0,0-1-.43,1.15,1.15,0,0,0-1,.42A2,2,0,0,0,164,420.31Z"
            />
          </g>
        </g>
        <g>
          <path className={classes.av} d="M122.52,382.38h-.65V378.1h3.59v4.28h-.66v-3.71h-2.28Z" />
          <path
            className={classes.aw}
            d="M128.83,382.46a1.92,1.92,0,0,1-.77-.15,1.4,1.4,0,0,1-.58-.48h0a6,6,0,0,1,0,.71v1.77h-.64V378.1h.52l.09.59h0a1.5,1.5,0,0,1,.59-.51,1.81,1.81,0,0,1,.76-.16,1.57,1.57,0,0,1,1.31.59,3.05,3.05,0,0,1,0,3.27A1.56,1.56,0,0,1,128.83,382.46Zm-.1-3.88a1.14,1.14,0,0,0-.94.36,1.86,1.86,0,0,0-.31,1.15v.15a2.07,2.07,0,0,0,.31,1.29,1.13,1.13,0,0,0,1,.39,1,1,0,0,0,.87-.45,2.13,2.13,0,0,0,.31-1.24,2.07,2.07,0,0,0-.31-1.23A1.05,1.05,0,0,0,128.73,378.58Z"
          />
          <path
            className={classes.ax}
            d="M135.43,380.24a2.35,2.35,0,0,1-.52,1.63,1.85,1.85,0,0,1-1.46.59,1.94,1.94,0,0,1-1-.27,1.78,1.78,0,0,1-.69-.77,2.73,2.73,0,0,1-.24-1.18,2.35,2.35,0,0,1,.52-1.63,1.87,1.87,0,0,1,1.46-.59,1.79,1.79,0,0,1,1.42.6A2.33,2.33,0,0,1,135.43,380.24Zm-3.26,0a2,2,0,0,0,.33,1.25,1.3,1.3,0,0,0,1.93,0,2.51,2.51,0,0,0,0-2.49,1.15,1.15,0,0,0-1-.42,1.12,1.12,0,0,0-1,.41A2,2,0,0,0,132.17,380.24Z"
          />
          <path
            className={classes.ay}
            d="M138.38,382.46a2,2,0,0,1-1.5-.58,2.21,2.21,0,0,1-.55-1.6,2.5,2.5,0,0,1,.51-1.65,1.72,1.72,0,0,1,1.37-.61,1.61,1.61,0,0,1,1.27.53A2,2,0,0,1,140,380v.41H137a1.73,1.73,0,0,0,.38,1.14,1.3,1.3,0,0,0,1,.4,3.51,3.51,0,0,0,1.37-.29v.57a4.16,4.16,0,0,1-.65.22A3.88,3.88,0,0,1,138.38,382.46Zm-.18-3.89a1.06,1.06,0,0,0-.82.33,1.63,1.63,0,0,0-.36.93h2.24a1.39,1.39,0,0,0-.28-.94A1,1,0,0,0,138.2,378.57Z"
          />
          <path className={classes.az} d="M143.55,378.1h.72l-1.85,2.07,2,2.21h-.76l-1.95-2.16v2.16h-.65V378.1h.65v2.08Z" />
          <path className={classes.ba} d="M148.1,378.66h-1.39v3.72h-.65v-3.72h-1.38v-.56h3.42Z" />
          <path
            className={classes.bb}
            d="M152.64,380.24a2.35,2.35,0,0,1-.53,1.63,1.81,1.81,0,0,1-1.45.59,1.89,1.89,0,0,1-1-.27,1.78,1.78,0,0,1-.69-.77,2.73,2.73,0,0,1-.24-1.18,2.35,2.35,0,0,1,.52-1.63,1.85,1.85,0,0,1,1.45-.59,1.81,1.81,0,0,1,1.43.6A2.38,2.38,0,0,1,152.64,380.24Zm-3.26,0a2,2,0,0,0,.33,1.25,1.3,1.3,0,0,0,1.93,0,2.51,2.51,0,0,0,0-2.49,1.17,1.17,0,0,0-1-.42,1.14,1.14,0,0,0-1,.41A2.07,2.07,0,0,0,149.38,380.24Z"
          />
          <path
            className={classes.bc}
            d="M157.25,379.18a.79.79,0,0,1-.24.63,1.29,1.29,0,0,1-.67.29v0a1.32,1.32,0,0,1,.79.32.9.9,0,0,1,.26.68,1.08,1.08,0,0,1-.44.92,2.14,2.14,0,0,1-1.29.32h-1.88V378.1h1.88Q157.25,378.1,157.25,379.18Zm-.63.06a.45.45,0,0,0-.24-.44,1.56,1.56,0,0,0-.73-.13h-1.22v1.2h1.09a1.74,1.74,0,0,0,.85-.15A.51.51,0,0,0,156.62,379.24Zm.12,1.85a.53.53,0,0,0-.27-.5,1.69,1.69,0,0,0-.87-.16h-1.17v1.41h1.19C156.36,381.84,156.74,381.59,156.74,381.09Z"
          />
        </g>

        <DoneG />

        <g>
          <path
            className={classes.bh}
            d="M381.9,298.13l7.32,3.21c-.76,1.73-1.56,3.46-2.39,5.16L379.64,303C380.42,301.4,381.18,299.75,381.9,298.13Z"
          />
          <path
            className={classes.bi}
            d="M385.87,288.1l7.54,2.67c-.63,1.79-1.31,3.59-2,5.33L384,293.16C384.63,291.5,385.27,289.8,385.87,288.1Z"
          />
          <path
            className={classes.bj}
            d="M365.68,326l6.42,4.77c-1.12,1.51-2.29,3-3.48,4.51l-6.24-5C363.5,328.88,364.61,327.45,365.68,326Z"
          />
          <path
            className={classes.bk}
            d="M389.07,277.8l7.72,2.09c-.49,1.81-1,3.65-1.59,5.47L387.56,283C388.1,281.26,388.61,279.52,389.07,277.8Z"
          />
          <path
            className={classes.bl}
            d="M371.78,317.12l6.76,4.28c-1,1.59-2.06,3.19-3.13,4.75l-6.6-4.53C369.83,320.14,370.83,318.63,371.78,317.12Z"
          />
          <path
            className={classes.bm}
            d="M377.19,307.81l7.07,3.76c-.88,1.65-1.82,3.33-2.77,5l-6.92-4C375.48,311,376.36,309.38,377.19,307.81Z"
          />
          <path
            className={classes.bn}
            d="M393.94,245.85l8,.32c-.08,1.88-.19,3.8-.33,5.68l-8-.61C393.77,249.46,393.87,247.64,393.94,245.85Z"
          />
          <path
            className={classes.bo}
            d="M391.49,267.29l7.86,1.5c-.36,1.86-.75,3.74-1.17,5.57l-7.8-1.8C390.78,270.83,391.15,269.05,391.49,267.29Z"
          />
          <rect className={classes.bp} x="394.06" y="240.03" width="8" height="0.44" />
          <path
            className={classes.bq}
            d="M358.93,334.43l6.05,5.23c-1.23,1.42-2.51,2.85-3.8,4.24l-5.86-5.46C356.55,337.13,357.76,335.78,358.93,334.43Z"
          />
          <path
            className={classes.br}
            d="M393.12,256.62l7.95.91c-.22,1.88-.47,3.78-.76,5.64l-7.9-1.2C392.67,260.2,392.91,258.4,393.12,256.62Z"
          />
          <path className={classes.bs} d="M288.78,387.35c-1.83.48-3.69.94-5.54,1.36l-1.75-7.81c1.75-.39,3.51-.82,5.24-1.28Z" />
          <path
            className={classes.bt}
            d="M351.57,342.32l5.65,5.67c-1.35,1.34-2.73,2.67-4.11,3.95l-5.44-5.88C349,344.85,350.3,343.59,351.57,342.32Z"
          />
          <path className={classes.bu} d="M277.66,389.85c-1.86.35-3.75.66-5.62.94l-1.16-7.92c1.77-.26,3.56-.56,5.32-.88Z" />
          <path className={classes.bv} d="M310.33,379.86c-1.74.76-3.52,1.49-5.28,2.18l-2.91-7.45c1.67-.65,3.35-1.35,5-2.06Z" />
          <path className={classes.bw} d="M266.39,391.51c-1.87.2-3.78.38-5.67.51l-.57-8c1.79-.13,3.6-.29,5.37-.48Z" />
          <path className={classes.bx} d="M249.67,384.42c1.69,0,3.4,0,5.08-.09l.28,8c-1.77.06-3.57.1-5.36.1Z" />
          <path className={classes.by} d="M299.69,384c-1.79.62-3.62,1.22-5.44,1.77l-2.33-7.65c1.72-.53,3.45-1.09,5.14-1.68Z" />
          <path className={classes.bz} d="M320.62,374.92c-1.67.89-3.38,1.75-5.1,2.57l-3.46-7.21c1.62-.78,3.25-1.6,4.83-2.43Z" />
          <path className={classes.ca} d="M339.93,362.82c-1.51,1.12-3.08,2.23-4.65,3.29l-4.5-6.61c1.49-1,3-2.06,4.41-3.12Z" />
          <path
            className={classes.cb}
            d="M343.64,349.66l5.21,6.07c-1.43,1.23-2.91,2.45-4.39,3.63l-5-6.27C340.88,352,342.29,350.82,343.64,349.66Z"
          />
          <path className={classes.cc} d="M330.51,369.23c-1.61,1-3.25,2-4.89,2.94l-4-6.93c1.55-.9,3.11-1.83,4.63-2.78Z" />
        </g>
        <g>
          <polygon
            className={classes.cd} points="248.57 338.5 248.57 381.29 250.63 381.29 250.63 338.5 248.57 338.5 248.57 338.5"
          />
          <rect className={classes.ce} x="248.57" y="92.41" width="2.16" height="42.78" />
          <polygon
            className={classes.cf} points="309.96 343.48 321.01 362.37 322.79 361.43 311.93 342.54 309.96 343.48 309.96 343.48"
          />
          <polygon className={classes.cg} points="176.52 112.27 187.42 131.1 189.19 130.12 178.23 111.2 176.52 112.27" />
          <polygon
            className={classes.ch} points="355.23 299.08 374.17 309.98 375.35 308.23 356.34 297.25 355.23 299.08 355.23 299.08"
          />
          <polygon className={classes.ci} points="124 165.51 142.9 176.43 144.05 174.66 125.07 163.7 124 165.51" />
          <rect className={classes.cj} x="351.38" y="235.75" width="42.81" height="2.14" />
          <rect className={classes.ck} x="105.17" y="235.75" width="42.86" height="2.14" />
          <polygon className={classes.cl} points="356.34 176.43 375.35 165.51 374.17 163.7 355.23 174.66 356.34 176.43" />
          <polygon
            className={classes.cm} points="125.07 309.98 144.05 299.08 142.9 297.25 124 308.23 125.07 309.98 125.07 309.98"
          />
          <polygon className={classes.cn} points="311.93 131.1 322.79 112.27 321.01 111.2 309.96 130.12 311.93 131.1" />
          <polygon
            className={classes.co} points="178.23 362.37 189.19 343.48 187.42 342.54 176.52 361.43 178.23 362.37 178.23 362.37"
          />
          <polygon
            className={classes.cd} points="248.57 381.29 250.63 381.29 250.63 338.5 248.57 338.5 248.57 381.29 248.57 381.29"
          />
          <polygon
            className={classes.cf} points="321.01 362.37 322.79 361.43 311.93 342.54 309.96 343.48 321.01 362.37 321.01 362.37"
          />
          <polygon
            className={classes.ch} points="374.17 309.98 375.35 308.23 356.34 297.25 355.23 299.08 374.17 309.98 374.17 309.98"
          />
          <polygon
            className={classes.co} points="178.23 362.37 189.19 343.48 187.42 342.54 176.52 361.43 178.23 362.37 178.23 362.37"
          />
          <path
            className={classes.cp}
            d="M255.84,240a5.94,5.94,0,0,1-6,5.92,5.85,5.85,0,0,1-5.93-5.92,5.94,5.94,0,0,1,5.93-5.91A6,6,0,0,1,255.84,240Z"
          />
          <path
            className={classes.cq}
            d="M164.37,289a2.37,2.37,0,0,1-3.08-1.07h0a2.43,2.43,0,0,1,.94-3.27l106.6-56.81A2.39,2.39,0,0,1,272,229h0a2.43,2.43,0,0,1-.81,3.21Z"
          />
          <path
            className={classes.cr}
            d="M195.56,162.44c-.61-.94-.77-2.12-.15-2.41h0c.42-.45,1.49.2,2.09,1.17L265.81,261c.71,1,.77,2.09.24,2.48h0c-.49.33-1.5-.14-2.24-1.18Z"
          />
          <g>
            <g>
              <path
                className={classes.cs}
                d="M245.88,162H241.8V146.36a13.82,13.82,0,0,1-5.39,3.15v-3.69a13.21,13.21,0,0,0,3.44-2,8,8,0,0,0,2.72-3.44h3.31Z"
              />
              <path
                className={classes.ct}
                d="M261.8,158.21V162H247.38a9.22,9.22,0,0,1,1.41-4.15,23.69,23.69,0,0,1,4.61-5.16,20.89,20.89,0,0,0,3.44-3.6,4.56,4.56,0,0,0,.88-2.48,2.67,2.67,0,0,0-.77-2.07,2.6,2.6,0,0,0-2-.77,2.64,2.64,0,0,0-2.09.77,3.69,3.69,0,0,0-.84,2.58l-4.16-.43a6.48,6.48,0,0,1,2.37-4.86,7.07,7.07,0,0,1,4.78-1.5,7,7,0,0,1,5,1.74,5.93,5.93,0,0,1,1.77,4.24,7.63,7.63,0,0,1-.53,2.78,10.92,10.92,0,0,1-1.6,2.74,30.15,30.15,0,0,1-2.72,2.81,28.27,28.27,0,0,0-2.48,2.31c-.29.48-.72.81-.83,1.24Z"
              />
            </g>
            <path
              className={classes.cu}
              d="M336.81,242.88l3.91-.47a3.67,3.67,0,0,0,1.09,2.24,2.82,2.82,0,0,0,2.05.88,2.91,2.91,0,0,0,2.16-1,4.08,4.08,0,0,0,.86-2.59,3.08,3.08,0,0,0-.86-2.45,2.83,2.83,0,0,0-2-1,4.82,4.82,0,0,0-2,.44l.54-3.47a3.64,3.64,0,0,0,2.54-.7,2.53,2.53,0,0,0,.92-1.95,2.65,2.65,0,0,0-.64-1.84,2.54,2.54,0,0,0-1.76-.63,2.27,2.27,0,0,0-1.81.73,3.34,3.34,0,0,0-1,2.18l-3.79-.77a6.79,6.79,0,0,1,1.31-3,4.15,4.15,0,0,1,2.13-1.84,7.43,7.43,0,0,1,3.23-.73,6.58,6.58,0,0,1,4.94,2,5.49,5.49,0,0,1,1.41,3.52c0,1.94-1.07,3.45-3.1,4.63a5,5,0,0,1,3,1.76,5.1,5.1,0,0,1,1,3.29,6.39,6.39,0,0,1-2,4.88,7,7,0,0,1-5.15,2,7.76,7.76,0,0,1-4.85-1.6A7.08,7.08,0,0,1,336.81,242.88Z"
            />
            <path
              className={classes.cv}
              d="M257,318.55l-4,.48a2.64,2.64,0,0,0-.73-1.78,1.74,1.74,0,0,0-1.61-.64,2.66,2.66,0,0,0-2.2,1.18c-.59.76-1,2.37-1.15,4.85a4.81,4.81,0,0,1,3.83-1.84,6,6,0,0,1,4.49,2,7.24,7.24,0,0,1,1.77,5.08,6.94,6.94,0,0,1-1.9,5.28,6.67,6.67,0,0,1-5,2,6.5,6.5,0,0,1-5.32-2.56c-1.45-1.6-2-4.42-2-8.29s.58-6.86,2.14-8.51a6.78,6.78,0,0,1,5.6-2.61,6.12,6.12,0,0,1,4.08,1.35A5.35,5.35,0,0,1,257,318.55Zm-9.29,9a4.84,4.84,0,0,0,.91,3.13,2.69,2.69,0,0,0,2.16,1.06,2.51,2.51,0,0,0,1.86-.85,5.81,5.81,0,0,0-.08-6.05,2.49,2.49,0,0,0-2.06-1,2.73,2.73,0,0,0-2,.92A4.26,4.26,0,0,0,247.66,327.57Z"
            />
            <path
              className={classes.cw}
              d="M149.67,241l4-.43a2.39,2.39,0,0,0,2.38,2.47,2.84,2.84,0,0,0,2.13-1.16c.67-.88,1.05-2.45,1.22-5a4.75,4.75,0,0,1-3.89,1.77,6,6,0,0,1-4.42-1.87,7.39,7.39,0,0,1-1.8-5.12,7.21,7.21,0,0,1,1.91-5.25,6.53,6.53,0,0,1,4.95-2,6.68,6.68,0,0,1,5.39,2.47c1.39,1.74,2.14,4.51,2.14,8.34s-.75,6.85-2.25,8.63a7.13,7.13,0,0,1-5.72,2.57,5.81,5.81,0,0,1-4-1.34A6.73,6.73,0,0,1,149.67,241Zm9.32-9a4.71,4.71,0,0,0-.85-3.1,2.74,2.74,0,0,0-2.16-1.09,2.1,2.1,0,0,0-1.84,1c-.57.55-.72,1.55-.72,2.89a4.92,4.92,0,0,0,.72,3.09,2.65,2.65,0,0,0,2.05,1,2.68,2.68,0,0,0,2-1A4.55,4.55,0,0,0,159,232Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default MainClockIco;