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

import tempuraRollWithShrimp from "../../assets/photos/tempuraRollWithShrimp.png";
import tempuraRollWithSalmon from "../../assets/photos/tempuraRollWithSalmon.png";
import tempuraRollWithMusselMeat from "../../assets/photos/tempuraRollWithMusselMeat.png";
import tempuraRollWithEel from "../../assets/photos/tempuraRollWithEel.png";
import tempuraRollWithCrabSticks from "../../assets/photos/tempuraRollWithCrabSticks.png";
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
        <RollCard poster={philadelphiaWithTuna} title='Филадельфия с тунцом'
                  composition='Состав: рис, нори, тунец,сыр, авокадо, соус Унаги, кунжут' price='29,9 GEL'></RollCard>
        <RollCard poster={californiaSalmon} title='Каллифорния с лососем'
                  composition='рис, нори, огурец, икра тобико, острый соус, лосось ' price='25,9 GEL'></RollCard>
        <RollCard poster={californiaEel} title='Каллифорния с угрём'
                  composition='Состав: рис, нори, огурец, икра тобико, острый соус, угорь ' price='29,9 GEL'></RollCard>
        <RollCard poster={californiaTuna} title='Каллифорния с тунцом '
                  composition='Состав: рис, нори, огурец, икра тобико, острый соус, тунец' price='29,9 GEL'></RollCard>
        <RollCard poster={californiaWithShrimp} title='Каллифорния с креветкой'
                  composition='Состав: скреветка, огурец, икра масаго, майонез' price='26,9 GEL'></RollCard>
        <RollCard poster={vegan} title='Веганский'
                  composition='Состав: рис, нори, огурец, авокадо, сладкий перец, смесь для салата' price='19,9 GEL'></RollCard>
        <RollCard poster={musselMeat} title='С мясом мидий'
                  composition='Состав: рис, нори, сыр, огурец, мясо мидий, острый соус' price='23,9 GEL'></RollCard>
        <RollCard poster={crabRoll} title='Крабовый ролл'
                  composition='Состав: рис, нори, огурец, соус унаги, острый соус, соус томаго, японск' price='20,9 GEL'></RollCard>
        <RollCard poster={bonitoSalmon} title='Бонито с лососем'
                  composition='Состав: рис, нори, сыр, огурец, соус кимчи, соус унаги, лосось, стружка' price='27,9 GEL'></RollCard>
        <RollCard poster={bonitoTuna} title='Бонито с тунцом'
                  composition='рис, нори, сыр, огурец, соус кимчи, соус унаги, тунец, стружка ' price='29,9 GEL'></RollCard>
        <RollCard poster={bonitoBabyOctopus} title='Бонито baby c осьминогом'
                  composition='Состав: рис, нори, сыр, огурец, соус кимчи, соус унаги, осьминог, струж' price='27,9 GEL'></RollCard>
        <RollCard poster={bonitoShrimp} title='Бонито с креветкой'
                  composition='Состав: рис, нори, сыр, огурец, соус кимчи, соус унаги, креветка, струж' price='28,9 GEL'></RollCard>
        <RollCard poster={greenDragon} title='Зелёный Дракон'
                  composition='Состав: сыр, угорь, авокадо, икра масаго, огурец, соус унаги, кунжут' price='29,9 GEL'></RollCard>
        <RollCard poster={blackDragon} title='Чёрный Дракон'
                  composition='Состав: сыр, лосось , угорь, авокадо, икра тобико, соус унаги, кунжут' price='32,9 GEL'></RollCard>
        <RollCard poster={redDragon} title='Красный Дракон'
                  composition='Состав: рис, нори, сыр, огурец, лосось, угорь, икра тобико, соус унаги, кунжут' price='32,9 GEL'></RollCard>
      </div>
      <h2 className={styles.rollsCards__title}>Тёплые Роллы</h2>
      <div className={styles.containerRollsCards}>
        <RollCard poster={tempuraRollWithShrimp} title='Тёплый ролл с креветкой'
                  composition='Состав: рис, нори, сыр, огурец, креветка, соус унаги, острый соус, темпура' price='27,9 GEL'></RollCard>
        <RollCard poster={tempuraRollWithSalmon} title='Тёплый ролл с лососем'
                  composition='Состав: рис, нори, сыр, огурец, лосось, соус унаги, острый соус, темпура' price='24,9 GEL'></RollCard>
        <RollCard poster={tempuraRollWithMusselMeat} title='Тёплый ролл с мясом мидий'
                  composition='Состав: рис, сыр, огурец, мясо мидий, соус унаги, острый соус, темпура' price='24,9 GEL'></RollCard>
        <RollCard poster={tempuraRollWithEel} title='Тёплый ролл с угрём'
                  composition='Состав: рис, нори, сыр, огурец, угорь, соус унаги, острый соус, темпура' price='29,9 GEL'></RollCard>
        <RollCard poster={tempuraRollWithCrabSticks} title='Тёплый ролл с крабовими палочками'
                  composition='Состав: рис, нори, сыр, огурец, крабовые палочки, соус унаги, острый соус, темпура' price='23,9 GEL'></RollCard>
        <RollCard poster={canadaCheese} title='Канадский Чизу'
                  composition='Состав: сыр, угорь, авокадо, лосось, икра тобико, соус унаги, кунжут' price='30,9 GEL'></RollCard>
        <RollCard poster={hayashiRoll} title='Хаяши ролл'
                  composition='Состав: рис, нори, сыр, хаяши (чука)' price='20,9 GEL'></RollCard>
        <RollCard poster={friendShrimpInPanko} title='Жаренная креветка в панко'
                  composition='Состав: рис, нори, сыр, жаренная креветка, соус унаги, икра тобико, кунжут' price='29,9 GEL'></RollCard>
      </div>
      <h2 className={styles.rollsCards__title}>Маки</h2>
      <div className={styles.containerRollsCards}>
        <RollCard poster={salmon} title='Лосось'
                  composition='Состав: рис, нори, лосось' price='11,9 GEL'></RollCard>
        <RollCard poster={eel} title='Угорь'
                  composition='Состав: рис, нори, угорь' price='26,9 GEL'></RollCard>
        <RollCard poster={tuna} title='Тунец'
                  composition='Состав: рис, нори, тунец' price='14,9 GEL'></RollCard>
        <RollCard poster={shrimp} title='Креветка'
                  composition='Состав: рис, нори, креветка' price='14,9 GEL'></RollCard>
        <RollCard poster={octopus} title='Осьминог'
                  composition='Состав: рис, нори, осьминог' price='13,9 GEL'></RollCard>
        <RollCard poster={mussel} title='Мидии'
                  composition='Состав: рис, нори, мидии' price='9,9 GEL'></RollCard>
        <RollCard poster={avocado} title='Авокадо'
                  composition='Состав: рис, нори, авокадо' price='7,9 GEL'></RollCard>
        <RollCard poster={cucumber} title='Огурец'
                  composition='Состав: рис, нори, огурец' price='6,9 GEL'></RollCard>
        <RollCard poster={cheese} title='Сыр'
                  composition='Состав: рис, нори, сыр' price='8,9 GEL'></RollCard>
      </div>
      <h2 className={styles.rollsCards__title}>Сеты</h2>
      <div className={styles.containerRollsCards}>
        <RollCard poster={setOne} title='1. Set'
                  composition='Состав: Philadelphia Shrimp Roll, Roll with Mussel Meat, Crab Roll, Vegan Roll,
                  Tempura Roll with Salmon, Maki Cheese, Maki Cucumber, Maki Shrimp, Maki Salmon, 64 pts' price='149,9 GEL'></RollCard>
        <RollCard poster={setTwo} title='2. Set'
                  composition='Состав: Roll California Eel, Roll California Salmon, Bonito Tuna,
                  Tempura Roll with Mussel Meat, Sushi with Salmon (2 s.), Maki Cheese, 40 pts' price='113,9 GEL'></RollCard>
        <RollCard poster={setThree} title='3. Set'
                  composition='Состав: Tempura Salmon Roll, Philadelphia Shrimp Roll, Mussel Meat Maki, Cheese Maki,
                   Cucumber Maki, Gunkan Salmon (2 s.), 36 pts' price='82,9 GEL'></RollCard>
        <RollCard poster={setFour} title='4. Set'
                  composition='Состав: Maki Shrimp, Maki Salmon, Maki Eel, Maki Cheese, Maki Cucumber, 30 pts'
                  price='51,9 GEL'></RollCard>
        <RollCard poster={setTempura} title='Tempura Set'
                  composition='Состав: Tempura Roll with Shrimp, Tempura Roll with Salmon,
                   Tempura Roll with Mussel Meat, Tempura Roll with Eel, Tempura Mussels, 32 pts' price='114,9 GEL'></RollCard>
      </div>
      <h2 className={styles.rollsCards__title}>Суши</h2>
      <div className={styles.containerRollsCards}>
        <RollCard poster={withSalmon} title='С лососем'
                  composition='Состав: рис, лосось' price='3,9 GEL'></RollCard>
        <RollCard poster={withTuna} title='С тунцом'
                  composition='Состав: рис, тунец' price='5,9 GEL'></RollCard>
        <RollCard poster={withEel} title='С угрём'
                  composition='Состав: рис, нори, угорь' price='6,9 GEL'></RollCard>
        <RollCard poster={withShrimpTempura} title='С креветкой Темпура'
                  composition='Состав: рис, нори, креветка темпура' price='5,9 GEL'></RollCard>
        <RollCard poster={veganSushi} title='Веганский'
                  composition='Состав: рис, нори, авокадо' price='3,9 GEL'></RollCard>
      </div>
      <h2 className={styles.rollsCards__title}>Гунканы</h2>
      <div className={styles.containerRollsCards}>
        <RollCard poster={gunkanWithSalmonAndAvocado} title='Гункан с лососем и авокадо'
                  composition='Состав: рис, нори, лосось, авокадо, японский майонез, икра тобико' price='5,9 GEL'></RollCard>
        <RollCard poster={gunkanWithEel} title='Гункан с угрём'
                  composition='Состав: рис, нори, японским майонезом, икра тобико' price='7,9 GEL'></RollCard>
        <RollCard poster={gunkanWithTunaAndCucumber} title='Гункан с  тунцом и огурцом'
                  composition='Состав: рис, нори, тунец, огурец, майонез' price='7,9 GEL'></RollCard>
        <RollCard poster={gunkanWithShrimp} title='Гункан с  с креветкой'
                  composition='Состав: рис, нори, креветка, авокадо, майонез, кунжут' price='5,9 GEL'></RollCard>
      </div>
      <h2 className={styles.rollsCards__title}>Другое</h2>
      <div className={styles.containerRollsCards}>
        <RollCard poster={musselTempura} title='Темпура мидии'
                  composition='Состав: темпура мидии' price='18,9 GEL'></RollCard>
        <RollCard poster={shrimpTempura} title='Темпура креветки'
                  composition='Состав: темпура креветки' price='19,9 GEL'></RollCard>
      </div>
      <h2 className={styles.rollsCards__title}>Соусы</h2>
      <div className={styles.containerRollsCards}>
        <RollCard poster={ginger} title='Имбирь'
                  composition='' price='2 GEL'></RollCard>
        <RollCard poster={soySauce} title='Соевый соус'
                  composition='' price='2 GEL'></RollCard>
        <RollCard poster={spicySauce} title='Острый соус'
                  composition='' price='3 GEL'></RollCard>
        <RollCard poster={cheeseSauce} title='Сырный соус'
                  composition='' price='3 GEL'></RollCard>
        <RollCard poster={sweetChilli} title='Сладкий чили'
                  composition='' price='3 GEL'></RollCard>
        <RollCard poster={wasabi} title='Вассаби'
                  composition='' price='1 GEL'></RollCard>
        <RollCard poster={sushiSticks} title='Суши палочки'
                  composition='' price='2 GEL'></RollCard>
        <RollCard poster={unagiSauce} title='Соус Унаги'
                  composition='' price='3 GEL'></RollCard>
      </div>
    </main>
  );
};
