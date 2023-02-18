// import { useEffect, useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import styles from './Main.module.css';
import {RollCard} from "../../components";
// import Poster from "../../assets/icons/instagram.png";
import PhiladelphiaSalmon from "../../assets/photos/philadelphiaSalmon.png";
import philadelphiaWithSalmonLight from "../../assets/photos/philadelphiaWithSalmonLight.png";
import philadelphiaEel from "../../assets/photos/philadelphiaEel.png";
import philadelphiaShrimp from "../../assets/photos/philadelphiaShrimp.png";
import philadelphiaWithSalmonAndShrimp from "../../assets/photos/philadelphiaWithSalmonAndShrimp.png";
import philadelphiaWithCheese from "../../assets/photos/philadelphiaWithCheese.png";
import philadelphiaWithTuna from "../../assets/photos/philadelphiaWithTuna.png";
import californiaSalmon from "../../assets/photos/californiaSalmon.png";
import californiaEel from "../../assets/photos/californiaEel.png";
import californiaTuna from "../../assets/photos/californiaTuna.png";
import californiaWithShrimp from "../../assets/photos/californiaWithShrimp.png";
import vegan from "../../assets/photos/vegan.png";
import musselMeat from "../../assets/photos/musselMeat.png";
import crabRoll from "../../assets/photos/crabRoll.png";
import bonitoSalmon from "../../assets/photos/bonitoSalmon.png";
import bonitoTuna from "../../assets/photos/bonitoTuna.png";
import bonitoBabyOctopus from "../../assets/photos/bonitoBabyOctopus.png";
import bonitoShrimp from "../../assets/photos/bonitoShrimp.png";
import greenDragon from "../../assets/photos/greenDragon.png";
import blackDragon from "../../assets/photos/blackDragon.png";
import redDragon from "../../assets/photos/redDragon.png";

import cookedRollWithShrimp from "../../assets/photos/cookedRollWithShrimp.png";
import cookedRollWithSalmon from "../../assets/photos/cookedRollWithSalmon.png";
import cookedRollWithMusselMeat from "../../assets/photos/cookedRollWithMusselMeat.png";
import cookedRollWithEel from "../../assets/photos/cookedRollWithEel.png";
import cookedRollWithCrabSticks from "../../assets/photos/cookedRollWithCrabSticks.png";
import canadaCheese from "../../assets/photos/canadaCheese.png";
import hayashiRoll from "../../assets/photos/hayashiRoll.png";
import friendShrimpInPanko from "../../assets/photos/friendShrimpInPanko.png";

import salmon from "../../assets/photos/salmon.png";
import eel from "../../assets/photos/eel.png";
import tuna from "../../assets/photos/tuna.png";
import shrimp from "../../assets/photos/shrimp.png";
import octopus from "../../assets/photos/octopus.png";
import mussel from "../../assets/photos/mussel.png";
import avocado from "../../assets/photos/avocado.png";
import cucumber from "../../assets/photos/cucumber.png";
import cheese from "../../assets/photos/cheese.png";

import setOne from "../../assets/photos/setOne.png";
import setTwo from "../../assets/photos/setTwo.png";
import setThree from "../../assets/photos/setThree.png";
import setFour from "../../assets/photos/setFour.png";
import setTempura from "../../assets/photos/setTempura.png";

import withSalmon from "../../assets/photos/withSalmon.png";
import withTuna from "../../assets/photos/withTuna.png";
import withEel from "../../assets/photos/withEel.png";
import withShrimpTempura from "../../assets/photos/withShrimpTempura.png";
import veganSushi from "../../assets/photos/veganSushi.png";

import gunkanWithSalmonAndAvocado from "../../assets/photos/gunkanWithSalmonAndAvocado.png";
import gunkanWithEel from "../../assets/photos/gunkanWithEel.png";
import gunkanWithTunaAndCucumber from "../../assets/photos/gunkanWithTunaAndCucumber.png";
import gunkanWithShrimp from "../../assets/photos/gunkanWithShrimp.png";

import musselTempura from "../../assets/photos/musselTempura.png";
import shrimpTempura from "../../assets/photos/shrimpTempura.png";

import ginger from "../../assets/photos/ginger.png";
import soySauce from "../../assets/photos/soySauce.png";
import spicySauce from "../../assets/photos/spicySauce.png";
import cheeseSauce from "../../assets/photos/cheeseSauce.png";
import sweetChilli from "../../assets/photos/sweetChilli.png";
import wasabi from "../../assets/photos/wasabi.png";
import sushiSticks from "../../assets/photos/sushiSticks.png";
import unagiSauce from "../../assets/photos/unagiSauce.png";



export const Main = () => {
  return (
    <main className={styles.wrapper}>
      <h2 className={styles.rollsCards__title}>Классические</h2>
      <div className={styles.containerRollsCards}>
        <RollCard poster={PhiladelphiaSalmon} title='Филадельфия с лососем'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='24,9 GEL'></RollCard>
        <RollCard poster={philadelphiaWithSalmonLight} title='Филадельфия с лососем лайт'
                  composition='Состав: рис, нори, сыр, авокадо, лосось, кунжут' price='20,9 GEL'></RollCard>
        <RollCard poster={philadelphiaEel} title='Филадельфия с угрём'
                  composition='Состав: рис, нори, сыр, авокадо, угорь' price='27,9 GEL'></RollCard>
        <RollCard poster={philadelphiaShrimp} title='Филадельфия с креветками'
                  composition='Состав: рис, нори, сыр, авокадо, креветки' price='24,9 GEL'></RollCard>
        <RollCard poster={philadelphiaWithSalmonAndShrimp} title='Филадельфия с лососем и креветкой'
                  composition='Состав: рис, нори, сыр, авокадо, креветки, лосось' price='29,9 GEL'></RollCard>
        <RollCard poster={philadelphiaWithCheese} title='Филадельфия с сыром'
                  composition='Состав: рис, нори, сыр, соус Унаги, кунжут' price='19,9 GEL'></RollCard>
        <RollCard poster={philadelphiaWithTuna} title='philadelphiaWithTuna'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={californiaSalmon} title='californiaSalmon'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={californiaEel} title='californiaEel'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={californiaTuna} title='californiaTuna'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={californiaWithShrimp} title='californiaWithShrimp'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={vegan} title='vegan'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={musselMeat} title='musselMeat'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={crabRoll} title='crabRoll'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={bonitoSalmon} title='bonitoSalmon'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={bonitoTuna} title='bonitoTuna'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={bonitoBabyOctopus} title='bonitoBabyOctopus'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={bonitoShrimp} title='bonitoShrimp'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={greenDragon} title='greenDragon'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={blackDragon} title='blackDragon'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={redDragon} title='redDragon'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
      </div>
      <h2 className={styles.rollsCards__title}>Тёплые Роллы</h2>
      <div className={styles.containerRollsCards}>
        <RollCard poster={cookedRollWithShrimp} title='cookedRollWithShrimp'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={cookedRollWithSalmon} title='cookedRollWithSalmon'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={cookedRollWithMusselMeat} title='cookedRollWithMusselMeat'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={cookedRollWithEel} title='cookedRollWithEel'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={cookedRollWithCrabSticks} title='cookedRollWithCrabSticks'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={canadaCheese} title='canadaCheese'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={hayashiRoll} title='hayashiRoll'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={friendShrimpInPanko} title='friendShrimpInPanko'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
      </div>
      <h2 className={styles.rollsCards__title}>Маки</h2>
      <div className={styles.containerRollsCards}>
        <RollCard poster={salmon} title='salmon'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={eel} title='eel'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={tuna} title='tuna'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={shrimp} title='shrimp'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={octopus} title='octopus'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={mussel} title='mussel'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={avocado} title='avocado'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={cucumber} title='cucumber'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={cheese} title='cheese'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
      </div>
      <h2 className={styles.rollsCards__title}>Сеты</h2>
      <div className={styles.containerRollsCards}>
        <RollCard poster={setOne} title='setOne'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={setTwo} title='setTwo'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={setThree} title='setThree'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={setFour} title='setFour'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={setTempura} title='setTempura'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
      </div>
      <h2 className={styles.rollsCards__title}>Суши</h2>
      <div className={styles.containerRollsCards}>
        <RollCard poster={withSalmon} title='withSalmon'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={withTuna} title='withTuna'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={withEel} title='withEel'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={withShrimpTempura} title='withShrimpTempura'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={veganSushi} title='veganSushi'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
      </div>
      <h2 className={styles.rollsCards__title}>Гунканы</h2>
      <div className={styles.containerRollsCards}>
        <RollCard poster={gunkanWithSalmonAndAvocado} title='gunkanWithSalmonAndAvocado'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={gunkanWithEel} title='gunkanWithEel'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={gunkanWithTunaAndCucumber} title='gunkanWithTunaAndCucumber'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={gunkanWithShrimp} title='gunkanWithShrimp'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
      </div>
      <h2 className={styles.rollsCards__title}>Другое</h2>
      <div className={styles.containerRollsCards}>
        <RollCard poster={musselTempura} title='musselTempura'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={shrimpTempura} title='shrimpTempura'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
      </div>
      <h2 className={styles.rollsCards__title}>Соусы</h2>
      <div className={styles.containerRollsCards}>
        <RollCard poster={ginger} title='ginger'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={soySauce} title='soySauce'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={spicySauce} title='spicySauce'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={cheeseSauce} title='cheeseSauce'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={sweetChilli} title='sweetChilli'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={wasabi} title='wasabi'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={sushiSticks} title='sushiSticks'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
        <RollCard poster={unagiSauce} title='unagiSauce'
                  composition='Состав: рис, нори, сыр, авокадо, лосось' price='26,9 GEL'></RollCard>
      </div>
    </main>
  );
};
