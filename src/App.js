import React, { Component } from "react";
import IdCard from "./components/IdCard/IdCard";
import Greetings from "./components/greetings/Greetings";
import Random from "./components/random/Random";
import BoxColor from "./components/boxColor/BoxColor";
import CreditCard from "./components/creditCard/CreditCard";
import Rating from "./components/rating/Rating";
import DriverCard from "./components/driverCard/DriverCard";
import LikeButton from "./components/likeButton/LikeButton";
import ClickablePicture from "./components/clickablePicture/ClickablePicture";
import Dice from './components/dice/Dice';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* TODO: Use the IdCard component */}
        <IdCard
          firstName="John"
          lastName="Doe"
          gender="male"
          height={178}
          birth="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          firstName="Obrien"
          lastName="Delores "
          gender="female"
          height={172}
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        {/* TODO: Use the Greetings component */}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        {/* TODO: Use the Random component */}
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        {/* TODO: Use the BoxColor component */}
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        {/* TODO: Use the CreditCard component */}
        <div className="credit-card-container">
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </div>
        {/* TODO: Use the Rating component */}
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        {/* TODO: Use the Driver Card component */}
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />

        {/* TODO: Use the LikeButton component */}
        <LikeButton /> <LikeButton />

        {/* TODO: Use the Clickable Picture component */}
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />

        {/* TODO: Use the Dice component */}
        <Dice />
      </div>
    );
  }
}

export default App;
